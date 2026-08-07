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

    const nvidiaApiKey = process.env.NVIDIA_API_KEY || process.env.NVAPI_KEY;
    const geminiApiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // 1. Try NVIDIA NIM API (build.nvidia.com)
    if (nvidiaApiKey) {
      try {
        const messages = [
          { role: "system", content: systemPrompt },
          ...(history || []).map((m: { role: string; content: string }) => ({
            role: m.role === "user" ? "user" : "assistant",
            content: m.content,
          })),
          { role: "user", content: message },
        ];

        const nvidiaRes = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${nvidiaApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "meta/llama-3.3-70b-instruct",
            messages,
            temperature: 0.6,
            top_p: 0.7,
            max_tokens: 1024,
          }),
        });

        if (nvidiaRes.ok) {
          const nvidiaData = await nvidiaRes.json();
          const reply = nvidiaData?.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ response: reply, provider: "nvidia" });
          }
        } else {
          const errText = await nvidiaRes.text();
          console.error("NVIDIA NIM API Error:", nvidiaRes.status, errText);
        }
      } catch (err) {
        console.error("NVIDIA NIM fetch error:", err);
      }
    }

    // 2. Fallback to Gemini REST API
    if (geminiApiKey) {
      try {
        const formattedContents = (history || []).map((m: { role: string; content: string }) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        }));
        formattedContents.push({ role: "user", parts: [{ text: message }] });

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system_instruction: { parts: [{ text: systemPrompt }] },
              contents: formattedContents,
            }),
          }
        );

        if (geminiRes.ok) {
          const gData = await geminiRes.json();
          const reply = gData?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) return NextResponse.json({ response: reply, provider: "gemini" });
        }
      } catch (err) {
        console.error("Gemini fallback error:", err);
      }
    }

    // 3. If neither key is configured or both failed, guide user clearly
    return NextResponse.json({
      response: `Bok! 🇭🇷 Я ваш ИИ-ментор по хорватскому языку.

Для активации **NVIDIA NIM API** (build.nvidia.com):
1. Зарегистрируйтесь на [build.nvidia.com](https://build.nvidia.com/) и создайте API ключ в личном кабинете (вы получите 1000 бесплатных кредитов).
2. Укажите ключ в файле \`.env\` вашего сервера:
\`\`\`env
NVIDIA_API_KEY=nvapi-your-key-here
\`\`\`
После этого ИИ-ментор заработает на мощнейшей нейросети **NVIDIA Llama 3.3 70B**!`
    });
  } catch (error) {
    console.error("Chat API root error:", error);
    return NextResponse.json({
      response: "Bok! Произошла временная ошибка сети. Попробуйте еще раз."
    });
  }
}
