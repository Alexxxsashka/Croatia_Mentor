import { NextResponse } from "next/server";
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

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        response: `Bok! 🇭🇷 Я ваш ИИ-ментор по хорватскому языку.

Для активации ответов нейросети укажите **GEMINI_API_KEY** в файле \`.env\` вашего проекта.
Вы можете бесплатно получить свой ключ за 30 секунд в [Google AI Studio](https://aistudio.google.com/).`
      });
    }

    // Build chat contents array for Gemini REST API
    const formattedContents: { role: string; parts: { text: string }[] }[] = [];

    if (Array.isArray(history)) {
      for (const msg of history) {
        formattedContents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        });
      }
    }

    // Append latest user message
    formattedContents.push({
      role: "user",
      parts: [{ text: message }],
    });

    // Call Gemini 1.5 Flash REST API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemPrompt }],
        },
        contents: formattedContents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1000,
        },
      }),
    });

    if (!geminiRes.ok) {
      const errorText = await geminiRes.text();
      console.error("Gemini API REST error:", geminiRes.status, errorText);

      // Try fallback to gemini-2.0-flash if 1.5 failed
      const gemini2Url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const gemini2Res = await fetch(gemini2Url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: formattedContents,
        }),
      });

      if (gemini2Res.ok) {
        const data2 = await gemini2Res.json();
        const text2 = data2?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text2) return NextResponse.json({ response: text2 });
      }

      return NextResponse.json({
        response: `⚠️ Ошибка ответа от Gemini API (код ${geminiRes.status}). Проверьте верность GEMINI_API_KEY на https://aistudio.google.com/`
      });
    }

    const data = await geminiRes.json();
    const responseText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Bok! Kako ti mogu pomoći s hrvatsким jezikom?";

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      response: "Bok! Произошла временная ошибка сети. Попробуйте еще раз."
    });
  }
}
