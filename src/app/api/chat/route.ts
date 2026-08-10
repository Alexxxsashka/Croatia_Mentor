import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { vocabularyWords } from "@/lib/vocabulary-data";
import { getUserLearningContext } from "@/lib/ai-user-context";

const DAILY_CHAT_LIMIT = 25; // Max 25 AI messages per day per standard user

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ remaining: 15, limit: 15, used: 0, isAdmin: false, isGuest: true });
    }

    const today = new Date().toISOString().split("T")[0];
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    });

    const isAdmin = user?.role === "admin";
    const userContext = await getUserLearningContext(session.user.id);

    const contextSummary = userContext
      ? {
          userName: userContext.user.name,
          currentLevel: userContext.stats.currentLevel,
          completedLessonsCount: userContext.lessons.completedCount,
          nextRecommendedLesson: userContext.lessons.nextRecommendedLesson,
          dueWordsCount: userContext.vocabulary.dueForReview.length,
          learnedWordsCount: userContext.vocabulary.learnedCount,
          weakWordsCount: userContext.vocabulary.weakWords.length,
        }
      : null;

    if (isAdmin) {
      return NextResponse.json({
        remaining: 999,
        limit: 999,
        used: 0,
        isAdmin: true,
        userContext: contextSummary,
      });
    }

    const activity = await prisma.dailyActivity.findUnique({
      where: {
        userId_date: {
          userId: session.user.id,
          date: today,
        },
      },
    });

    const used = activity?.chatCount || 0;
    const remaining = Math.max(0, DAILY_CHAT_LIMIT - used);

    return NextResponse.json({
      remaining,
      limit: DAILY_CHAT_LIMIT,
      used,
      isAdmin: false,
      userContext: contextSummary,
    });
  } catch (error) {
    console.error("Chat GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    const { message, history, mode, scenario } = await req.json();

    const userId = session?.user?.id;
    let isAdmin = false;
    let level = "A1";
    let nativeLang = "en";
    let currentChatCount = 0;
    let dailyActivityId: string | null = null;

    // Fetch deep user learning context for individual AI adaptation
    let userContextString = "";
    if (userId) {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { progress: true },
      });

      isAdmin = user?.role === "admin";
      level = user?.progress?.currentLevel || "A1";
      nativeLang = user?.nativeLanguage || "en";

      const fullUserContext = await getUserLearningContext(userId);
      if (fullUserContext) {
        userContextString = fullUserContext.promptContextString;
      }

      const today = new Date().toISOString().split("T")[0];
      const dailyActivity = await prisma.dailyActivity.upsert({
        where: {
          userId_date: {
            userId,
            date: today,
          },
        },
        update: {},
        create: {
          userId,
          date: today,
        },
      });

      dailyActivityId = dailyActivity.id;
      currentChatCount = dailyActivity.chatCount || 0;

      if (!isAdmin && currentChatCount >= DAILY_CHAT_LIMIT) {
        return NextResponse.json(
          {
            response: `🛑 Вы достигли дневного лимита общения с ИИ-ментором (${DAILY_CHAT_LIMIT}/${DAILY_CHAT_LIMIT} сообщений в день). 

Лимит обновится завтра! Это ограничение введено, чтобы сервис оставался бесплатным и комфортным для всех пользователей без перегрузки API ключа.`,
            remaining: 0,
            limitReached: true,
          },
          { status: 429 }
        );
      }
    }

    const langMap: Record<string, string> = {
      en: "English",
      ru: "Russian",
      ua: "Ukrainian",
    };
    const targetLangName = langMap[nativeLang] || "English";

    // Query DB dictionary words for context fallback
    let dbWordsContext = "";
    try {
      const dbFlashcards = await prisma.flashcard.findMany({
        take: 100,
        orderBy: { level: "asc" },
      });

      const allDictWords = [
        ...vocabularyWords,
        ...dbFlashcards.map((f) => ({
          hr: f.wordHr,
          en: f.translationEng,
          ru: f.translationRu,
          ua: f.translationUa,
          level: f.level || "A1",
          category: f.category || "general",
        })),
      ];

      let dueWords: string[] = [];
      if (userId) {
        const userProgressList = await prisma.wordProgress.findMany({
          where: { userId },
          orderBy: { lastReviewed: "desc" },
        });
        dueWords = userProgressList
          .filter((p) => p.status === "learning" || (p.nextReview && new Date(p.nextReview) <= new Date()))
          .map((p) => p.wordHr.toLowerCase());
      }

      const msgLower = (message || "").toLowerCase();
      let candidateWords = allDictWords;
      if (msgLower.includes("повторит") || msgLower.includes("due") || msgLower.includes("review")) {
        const filtered = allDictWords.filter((w) => dueWords.includes(w.hr.toLowerCase()));
        if (filtered.length > 0) candidateWords = filtered;
      } else if (msgLower.includes("a1")) {
        candidateWords = allDictWords.filter((w) => w.level.toUpperCase() === "A1");
      } else if (msgLower.includes("a2")) {
        candidateWords = allDictWords.filter((w) => w.level.toUpperCase() === "A2");
      } else if (msgLower.includes("b1")) {
        candidateWords = allDictWords.filter((w) => w.level.toUpperCase() === "B1");
      } else if (msgLower.includes("b2")) {
        candidateWords = allDictWords.filter((w) => w.level.toUpperCase() === "B2");
      }

      const sample = candidateWords.slice(0, 25);
      const targetTrans = (w: typeof sample[0]) => (nativeLang === "ru" ? w.ru : nativeLang === "ua" ? w.ua : w.en);

      dbWordsContext = sample
        .map((w) => `[[WORD: ${w.hr} | ${targetTrans(w)} | ${w.level} | ${w.category}]]`)
        .join("\n");
    } catch (e) {
      console.warn("Error loading DB words for chat:", e);
    }

    // Base Strict Guardrail Directive
    let systemPrompt = `You are "Croatia Mentor", an expert Croatian language AI tutor and native Croatian speaker.

CRITICAL GUARDRAIL RULES:
- You MUST ONLY act as a Croatian language tutor and discuss Croatian grammar, vocabulary, pronunciation, exercises, essays, culture, or conversation practice.
- If the user asks an off-topic non-Croatian question (e.g. coding, math, general science, world history, recipes, general trivia), you MUST politely refuse in Croatian and ${targetLangName}, explaining that you are exclusively a Croatian tutor, and invite them to ask a Croatian language question or practice instead.

CRITICAL ALPHABET & SCRIPT DIRECTIVE (STRICT ENFORCEMENT):
1. CROATIAN TEXT MUST ALWAYS BE IN LATIN SCRIPT: All Croatian words, example sentences, phrases, and dialogues MUST BE WRITTEN STRICTLY IN THE CROATIAN LATIN ALPHABET (Gaj's Latin alphabet: A-Z, plus č, ć, đ, š, ž).
2. ABSOLUTELY NO CYRILLIC FOR CROATIAN: NEVER write Croatian text or phrases using Cyrillic letters (e.g., NEVER write "Добро дошавши", "како се зовеш", or "Макдоналдс"). You MUST ALWAYS write standard Croatian in Latin script: "Dobrodošli u McDonald's, kako se zoveš?".
3. ROLE OF NATIVE LANGUAGE (${targetLangName}): ${targetLangName} is used ONLY for grammar explanations, feedback, and translations in parentheses.

Student Context:
- Level: ${level} (CEFR). Tailor your Croatian complexity to level ${level}.
- Native Language: ${targetLangName}. Write explanations, rule breakdowns, and translations in ${targetLangName}.

${userContextString ? userContextString : ""}

DICTIONARY INTEGRATION INSTRUCTIONS:
- You are directly integrated with the application's DB Dictionary.
- Whenever you present, explain, or list Croatian words to the student, ALWAYS format each word item using the exact double-bracket tag format:
[[WORD: wordHr | translation | level | category]]
Example:
[[WORD: kruh | хлеб | A1 | food]]
[[WORD: mlijeko | молоко | A1 | food]]

- This format creates interactive UI cards allowing the user to click "Выучено" (Learned), "Нужно повторить" (Needs Review), and hear speech audio.
- Below is a sample of actual words pulled from the DB dictionary to use when recommending words:
${dbWordsContext}`;

    if (mode === "essay" || mode === "pronunciation") {
      systemPrompt += `\n\nMODE: Essay & Text Correction (Проверка сочинений и текстов).
Analyze the student's Croatian text/essay in detail:
1. 📊 Score & CEFR Level Assessment (0-100% score)
2. ✨ Corrected Croatian Text (full text with accurate cases, verb forms, and diacritics č, ć, đ, š, ž)
3. 🔍 Detailed Error Analysis (explain each mistake in ${targetLangName} with grammar rules)
4. 💡 Stylistic & Natural Phrasing Improvements`;
    } else if (mode === "exam") {
      systemPrompt += `\n\nMODE: Language Examiner (Экзаменатор).
Test the student's Croatian knowledge for CEFR level ${level}.
- Ask exactly ONE question at a time.
- Evaluate the student's response with a score (e.g. 8/10), point out any grammar/diacritic mistakes.
- Then ask the next exam question in Croatian to continue the test.`;
    } else if (mode === "roleplay") {
      systemPrompt += `\n\nMODE: Roleplay (Ролевая игра).
CURRENT SCENARIO: "${scenario || "Pekara / Bakery"}".
- Act as the Croatian interlocutor in this scenario (e.g., baker, landlord, waiter, vendor, friend).
- Speak in natural Croatian, keeping translations or helpful vocabulary hints in parentheses (...) in ${targetLangName}.
- Encourage the student to respond in Croatian.`;
    } else {
      // Default: Tutor / Чат-репетитор
      systemPrompt += `\n\nMODE: Croatian Language Tutor (Чат-репетитор).
- Always check the student's Croatian for typos, wrong cases, or missing diacritics (č, ć, đ, š, ž), gently explaining WHY in ${targetLangName}.
- Encourage active practice and end your response with a relevant follow-up question in Croatian.`;
    }

    const nvidiaApiKey = process.env.NVIDIA_API_KEY || process.env.NVAPI_KEY || "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";
    const geminiApiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    let aiReplyText = "";

    // 1. Try NVIDIA NIM API with 6-second timeout & ultra-fast Llama 3.1 8B model
    if (nvidiaApiKey) {
      try {
        const messages = [
          { role: "system", content: systemPrompt },
          ...(history || []).slice(-6).map((m: { role: string; content: string }) => ({
            role: m.role === "user" ? "user" : "assistant",
            content: m.content,
          })),
          { role: "user", content: message },
        ];

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const nvidiaRes = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${nvidiaApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "meta/llama-3.1-8b-instruct",
            messages,
            temperature: 0.6,
            max_tokens: 500,
          }),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (nvidiaRes.ok) {
          const nvidiaData = await nvidiaRes.json();
          const reply = nvidiaData?.choices?.[0]?.message?.content;
          if (reply) {
            aiReplyText = reply;
          }
        }
      } catch (err) {
        console.warn("NVIDIA NIM fetch timeout/error, trying fallback...", err);
      }
    }

    // 2. Try Gemini REST API (gemini-1.5-flash) - ultra fast (~1s response time)
    if (!aiReplyText && geminiApiKey) {
      try {
        const formattedContents = (history || []).slice(-6).map((m: { role: string; content: string }) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        }));
        formattedContents.push({ role: "user", parts: [{ text: message }] });

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system_instruction: { parts: [{ text: systemPrompt }] },
              contents: formattedContents,
              generationConfig: {
                maxOutputTokens: 500,
                temperature: 0.7,
              },
            }),
            signal: controller.signal,
          }
        );
        clearTimeout(timeoutId);

        if (geminiRes.ok) {
          const gData = await geminiRes.json();
          const reply = gData?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) aiReplyText = reply;
        }
      } catch (err) {
        console.warn("Gemini fallback error:", err);
      }
    }

    if (!aiReplyText) {
      aiReplyText = "Bok! Kako ti mogu pomoći s hrvatskim jezikom? (Привет! Как я могу помочь с хорватским языком?)";
    } else if (dailyActivityId) {
      // Increment user's daily chat count on successful reply
      await prisma.dailyActivity.update({
        where: { id: dailyActivityId },
        data: {
          chatCount: { increment: 1 },
        },
      });
    }

    const remaining = isAdmin ? 999 : Math.max(0, DAILY_CHAT_LIMIT - (currentChatCount + 1));
    return NextResponse.json({ response: aiReplyText, remaining, limit: DAILY_CHAT_LIMIT });
  } catch (error) {
    console.error("Chat API root error:", error);
    return NextResponse.json({
      response: "Bok! Произошла временная ошибка сети. Попробуйте еще раз."
    });
  }
}
