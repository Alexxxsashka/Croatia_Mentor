import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { message, history, mode, scenario } = await req.json();

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { progress: true },
    });

    const level = user?.progress?.currentLevel || "A1";
    const nativeLang = user?.nativeLanguage || "en";

    const langMap: Record<string, string> = {
      en: "English",
      ru: "Russian",
      ua: "Ukrainian",
    };
    const targetLangName = langMap[nativeLang] || "English";

    let systemPrompt = `You are "Croatia Mentor", an expert Croatian language AI tutor and native Croatian speaker.

Your core directives:
- Student Level: ${level} (CEFR). Adjust your Croatian vocabulary and grammar to match.
- Student Native Language: ${targetLangName}. Use ${targetLangName} for explanations, rule breakdowns, and translations.
- Always check student's Croatian for typos, wrong cases, or missing diacritics (č, ć, đ, š, ž), explaining WHY gently.
- Encourage active practice and end responses with a relevant follow-up question in Croatian.`;

    if (mode === "roleplay") {
      systemPrompt += `\n\nCURRENT SCENARIO: "${scenario || "Pekara / Bakery"}".
Act as the Croatian interlocutor in this scenario (e.g. baker, landlord, waiter). Stay in character while providing helpful language guidance in parentheses.`;
    } else if (mode === "pronunciation") {
      systemPrompt += `\n\nMODE: Speech & Grammar Analysis.
Evaluate the student's input sentence. Provide:
1. Grammar & Spelling Score (0-100%)
2. Diacritic & Pronunciation breakdown (e.g. č vs ć, š, ž, đ)
3. Corrected natural Croatian phrasing
4. Explanation in ${targetLangName}`;
    } else if (mode === "exam") {
      systemPrompt += `\n\nMODE: Language Examiner.
Test the student's Croatian knowledge for level ${level}. Ask 1 question at a time, evaluate their response, score them, and move to the next question.`;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        response: `Bok! Kako si? (Hello! How are you?) I am Croatia Mentor AI. Please configure GEMINI_API_KEY in your environment for live neural AI responses.`
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const chatHistory = (history || []).map(
      (msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })
    );

    const chat = ai.chats.create({
      model: "gemini-2.0-flash",
      history: [
        {
          role: "user",
          parts: [{ text: "You are Croatia Mentor. Please follow system instructions." }],
        },
        {
          role: "model",
          parts: [{ text: systemPrompt }],
        },
        ...chatHistory,
      ],
    });

    const result = await chat.sendMessage({ message });
    const responseText = result.text || "I couldn't generate a response. Please try again.";

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
