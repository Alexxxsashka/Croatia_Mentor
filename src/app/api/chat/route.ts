import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const DAILY_CHAT_LIMIT = 25; // Max 25 AI messages per day per standard user

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const today = new Date().toISOString().split("T")[0];
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    });

    const isAdmin = user?.role === "admin";
    if (isAdmin) {
      return NextResponse.json({ remaining: 999, limit: 999, used: 0, isAdmin: true });
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

    return NextResponse.json({ remaining, limit: DAILY_CHAT_LIMIT, used, isAdmin: false });
  } catch (error) {
    console.error("Chat GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

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

    const isAdmin = user?.role === "admin";
    const today = new Date().toISOString().split("T")[0];

    // Check daily chat limit for non-admin users
    const dailyActivity = await prisma.dailyActivity.upsert({
      where: {
        userId_date: {
          userId: session.user.id,
          date: today,
        },
      },
      update: {},
      create: {
        userId: session.user.id,
        date: today,
      },
    });

    const currentChatCount = dailyActivity.chatCount || 0;

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

    const nvidiaApiKey = process.env.NVIDIA_API_KEY || process.env.NVAPI_KEY || "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";
    const geminiApiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    let aiReplyText = "";

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
            aiReplyText = reply;
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
    if (!aiReplyText && geminiApiKey) {
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
          if (reply) aiReplyText = reply;
        }
      } catch (err) {
        console.error("Gemini fallback error:", err);
      }
    }

    if (!aiReplyText) {
      aiReplyText = "Bok! Произошла временная ошибка вызова ИИ. Попробуйте еще раз через несколько секунд.";
    } else {
      // Increment user's daily chat count on successful reply
      await prisma.dailyActivity.update({
        where: { id: dailyActivity.id },
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
