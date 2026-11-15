import { NextRequest, NextResponse } from "next/server";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";

const defaultVoice = "hr-HR-GabrijelaNeural";

async function synthesize(text: unknown, voice: unknown) {
  const cleanText = typeof text === "string"
    ? text.replace(/^[A-Za-z\\sčćžšđČĆŽŠĐ]+:\\s*/, "").trim()
    : "";
  if (!cleanText) {
    return NextResponse.json({ error: "Text parameter is required" }, { status: 400 });
  }
  // The provider inserts the voice name and input into an SSML document.
  if (typeof voice !== "string" || !/^[a-z]{2,3}(?:-[a-z0-9]+){2,}$/i.test(voice)) {
    return NextResponse.json({ error: "Invalid voice" }, { status: 400 });
  }
  const escapedText = cleanText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const tts = new MsEdgeTTS({ connectionTimeoutMs: 5000, synthesisTimeoutMs: 5000 });

  try {
    const format = OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3;
    // A fresh connection can recover from a transient upstream handshake failure.
    await tts.setMetadata(voice, format).catch(() => tts.setMetadata(voice, format));
    const { audioStream } = tts.toStream(escapedText);
    const chunks: Buffer[] = [];
    for await (const chunk of audioStream) chunks.push(chunk);
    const audio = new Uint8Array(Buffer.concat(chunks));
    if (!audio.length) throw new Error("Empty speech audio");

    return new NextResponse(audio, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": String(audio.length),
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("TTS synthesis failed:", error);
    return NextResponse.json({ error: "Failed to generate speech audio" }, { status: 502 });
  } finally {
    tts.close();
  }
}

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  return synthesize(searchParams.get("text"), searchParams.get("voice") ?? defaultVoice);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  return synthesize(body?.text, body?.voice ?? defaultVoice);
}
