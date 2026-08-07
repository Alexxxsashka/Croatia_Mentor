import { NextRequest, NextResponse } from "next/server";
import { EdgeTTS } from "edge-tts-universal";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const text = searchParams.get("text");
    const voice = searchParams.get("voice") || "hr-HR-GabrijelaNeural";

    if (!text || !text.trim()) {
      return NextResponse.json(
        { error: "Text parameter is required" },
        { status: 400 }
      );
    }

    const cleanText = text.replace(/^[A-Za-z\sčćžšđČĆŽŠĐ]+:\s*/, "").trim();

    const tts = new EdgeTTS(cleanText, voice);
    const result = await tts.synthesize();

    const buffer = Buffer.from(await result.audio.arrayBuffer());

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("TTS API GET error:", error);
    return NextResponse.json(
      { error: "Failed to generate speech audio" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, voice = "hr-HR-GabrijelaNeural" } = body;

    if (!text || !text.trim()) {
      return NextResponse.json(
        { error: "Text parameter is required" },
        { status: 400 }
      );
    }

    const cleanText = text.replace(/^[A-Za-z\sčćžšđČĆŽŠĐ]+:\s*/, "").trim();

    const tts = new EdgeTTS(cleanText, voice);
    const result = await tts.synthesize();

    const buffer = Buffer.from(await result.audio.arrayBuffer());

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("TTS API POST error:", error);
    return NextResponse.json(
      { error: "Failed to generate speech audio" },
      { status: 500 }
    );
  }
}
