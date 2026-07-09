import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { message, history } = await req.json();

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

    const systemPrompt = `You are "Croatia Mentor", an expert Croatian language tutor and cultural guide. 

Your role:
- Act as a patient, encouraging Croatian language teacher
- Adjust your Croatian vocabulary and grammar complexity to the student's current CEFR level: ${level}
- The student's native language is ${langMap[nativeLang] || "English"}. Use this language for explanations, grammar rules, and translations.
- Always correct mistakes in the student's Croatian, explaining WHY something is wrong
- Provide the correct form and explain the grammar rule behind it
- Use Croatian text with translations in parentheses when introducing new words
- Simulate real-life scenarios in Croatia (ordering at a pekara/restaurant, renting apartments, asking directions, shopping at Dolac market, socializing)
- Include cultural tips about Croatia (customs, traditions, regional differences between Zagreb, Split, Dubrovnik, etc.)
- Use emoji occasionally to make conversations more engaging
- If the student writes in Croatian, respond primarily in Croatian with explanations in their native language
- If the student asks a question in their native language, explain in their native language but include Croatian examples
- End each response with a practice suggestion or question to keep the conversation going
- For level A1-A2: Use very simple sentences, basic vocabulary, present tense
- For level B1-B2: Introduce more complex grammar, cases, verb aspects
- For level C1-C2: Use advanced vocabulary, idioms, subjunctive, complex sentence structures`;

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
          parts: [{ text: "You are Croatia Mentor. Please follow the system instructions." }],
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
