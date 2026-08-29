import { prisma } from "@/lib/prisma";

export interface ExtractedWord {
  wordHr: string;
  translationRu: string;
  translationUa: string;
  translationEng: string;
  level?: string;
  category?: string;
}

export interface ExtractedMemory {
  category: "vocabulary" | "correction" | "user_profile" | "knowledge";
  key: string;
  content: string;
}

/**
 * Asynchronously analyze user chat message & AI response to learn new words,
 * corrections, user facts, and site knowledge silently in the background.
 */
export async function processUserMessageForLearning(
  userMessage: string,
  aiReply: string,
  userId?: string
): Promise<void> {
  try {
    if (!userMessage || userMessage.trim().length < 3) return;

    const trimmedMsg = userMessage.trim();
    const geminiApiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // 1. First, extract words from AI tags if present ([[WORD: wordHr | trans | level | cat]])
    await extractAndSaveFromAiTags(aiReply);

    // 2. Perform fast regex extraction for explicit vocabulary mentions
    await fastRegexVocabularyExtract(trimmedMsg, aiReply);

    // 3. If Gemini API Key is available, perform deep LLM extraction for memories & new terms
    if (geminiApiKey) {
      await llmKnowledgeExtract(trimmedMsg, aiReply, userId, geminiApiKey);
    }
  } catch (error) {
    // Background learning should strictly fail silently without affecting user response
    console.warn("[AI Background Learning] Silent error processing message:", error);
  }
}

/**
 * Extract words formatted as [[WORD: wordHr | translation | level | category]] in AI reply
 */
async function extractAndSaveFromAiTags(aiReply: string): Promise<void> {
  if (!aiReply.includes("[[WORD:")) return;

  const regex = /\[\[WORD:\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|\s*([^\]]+)\]\]/g;
  let match;

  while ((match = regex.exec(aiReply)) !== null) {
    const wordHr = match[1].trim();
    const trans = match[2].trim();
    const level = match[3].trim().toUpperCase() || "A1";
    const category = match[4].trim().toLowerCase() || "general";

    if (wordHr && trans) {
      await saveWordToDictionary({
        wordHr,
        translationRu: trans,
        translationUa: trans,
        translationEng: trans,
        level,
        category,
      });
    }
  }
}

/**
 * Heuristic/Regex extractor for common word patterns ("слово - перевод", "kak skazat X")
 */
async function fastRegexVocabularyExtract(userMessage: string, aiReply: string): Promise<void> {
  // Pattern: "word (translation)" or "word — translation"
  const dashPattern = /([a-zA-ZčćđšžČĆĐŠŽ\s]{2,25})\s*[-—=:]\s*([a-zA-Zа-яА-ЯіієїЄЇ\s]{2,30})/g;
  let match;

  while ((match = dashPattern.exec(userMessage)) !== null) {
    const candidateHr = match[1].trim();
    const candidateTrans = match[2].trim();

    // Verify candidateHr contains Latin/Croatian characters
    if (/^[a-zA-ZčćđšžČĆĐŠŽ\s]+$/.test(candidateHr) && candidateHr.length >= 2) {
      await saveWordToDictionary({
        wordHr: candidateHr,
        translationRu: candidateTrans,
        translationUa: candidateTrans,
        translationEng: candidateTrans,
        level: "A1",
        category: "learned_user",
      });
    }
  }
}

/**
 * Deep Gemini extraction to classify new facts, grammar corrections, user info or vocabulary
 */
async function llmKnowledgeExtract(
  userMessage: string,
  aiReply: string,
  userId: string | undefined,
  apiKey: string
): Promise<void> {
  try {
    const prompt = `Analyze the following conversation between a user learning Croatian and an AI Croatian Tutor.
User Message: "${userMessage}"
AI Reply: "${aiReply}"

Extract ANY valuable new information learned in this interaction:
1. "words": Any new Croatian words/phrases mentioned with their translation. Format: [{"hr": "...", "ru": "...", "ua": "...", "en": "...", "level": "A1", "category": "..."}]
2. "memories": Any corrections, user profile info, or grammar/site facts learned. Format: [{"category": "user_profile"|"correction"|"knowledge", "key": "short_topic", "content": "detailed explanation"}]

Return strictly valid JSON only:
{"words": [], "memories": []}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            maxOutputTokens: 300,
            temperature: 0.1,
          },
        }),
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    if (!res.ok) return;

    const data = await res.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) return;

    const parsed = JSON.parse(rawText);

    if (Array.isArray(parsed.words)) {
      for (const w of parsed.words) {
        if (w.hr && (w.ru || w.ua || w.en)) {
          await saveWordToDictionary({
            wordHr: w.hr,
            translationRu: w.ru || w.en || w.ua || "",
            translationUa: w.ua || w.ru || w.en || "",
            translationEng: w.en || w.ru || w.ua || "",
            level: w.level || "A1",
            category: w.category || "ai_learned",
          });
        }
      }
    }

    if (Array.isArray(parsed.memories)) {
      for (const m of parsed.memories) {
        if (m.key && m.content) {
          await saveAiMemory({
            userId: m.category === "user_profile" ? userId : null,
            category: m.category || "knowledge",
            key: m.key,
            content: m.content,
            sourceMessage: userMessage,
          });
        }
      }
    }
  } catch (err) {
    // Non-blocking LLM extraction timeout/error
  }
}

/**
 * Upsert new word into Flashcard table so it becomes part of the site dictionary
 */
export async function saveWordToDictionary(word: ExtractedWord): Promise<void> {
  try {
    const existing = await prisma.flashcard.findFirst({
      where: {
        wordHr: {
          equals: word.wordHr.trim(),
          mode: "insensitive",
        },
      },
    });

    if (!existing) {
      await prisma.flashcard.create({
        data: {
          wordHr: word.wordHr.trim(),
          translationEng: word.translationEng || word.translationRu || word.wordHr,
          translationRu: word.translationRu || word.translationEng || word.wordHr,
          translationUa: word.translationUa || word.translationRu || word.wordHr,
          level: word.level || "A1",
          category: word.category || "general",
        },
      });
    }
  } catch (err) {
    console.warn("Error saving learned word to flashcards:", err);
  }
}

/**
 * Upsert memory item into AiMemory table
 */
export async function saveAiMemory(params: {
  userId?: string | null;
  category: string;
  key: string;
  content: string;
  sourceMessage?: string;
}): Promise<void> {
  try {
    const existing = await prisma.aiMemory.findFirst({
      where: {
        userId: params.userId ?? null,
        category: params.category,
        key: { equals: params.key, mode: "insensitive" },
      },
    });

    if (existing) {
      await prisma.aiMemory.update({
        where: { id: existing.id },
        data: {
          content: params.content,
          sourceMessage: params.sourceMessage || existing.sourceMessage,
          updatedAt: new Date(),
        },
      });
    } else {
      await prisma.aiMemory.create({
        data: {
          userId: params.userId ?? null,
          category: params.category,
          key: params.key,
          content: params.content,
          sourceMessage: params.sourceMessage,
        },
      });
    }
  } catch (err) {
    console.warn("Error saving AI memory:", err);
  }
}
