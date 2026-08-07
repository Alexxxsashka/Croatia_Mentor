"use client";

interface SpeakOptions {
  rate?: number;
  voice?: string;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
}

export function speakText(text: string, options?: SpeakOptions) {
  if (typeof window === "undefined") return { stop: () => {} };

  // Cancel any ongoing speech synthesis
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  const cleanText = text.replace(/^[A-Za-z\sčćžšđČĆŽŠĐ]+:\s*/, "").trim();
  if (!cleanText) return { stop: () => {} };

  const rate = options?.rate ?? 0.8;
  const voice = options?.voice || "hr-HR-GabrijelaNeural";

  // Split long text into manageable chunks (max ~350 chars each)
  const chunks: string[] = [];
  const rawParagraphs = cleanText.split(/\n+/);

  for (const paragraph of rawParagraphs) {
    const trimmed = paragraph.trim();
    if (!trimmed) continue;
    
    if (trimmed.length <= 350) {
      chunks.push(trimmed);
    } else {
      // Split paragraph into sentences
      const sentences = trimmed.match(/[^.!?]+[.!?]+|\S+/g) || [trimmed];
      let currentChunk = "";
      for (const sentence of sentences) {
        if ((currentChunk + " " + sentence).length <= 350) {
          currentChunk = (currentChunk + " " + sentence).trim();
        } else {
          if (currentChunk) chunks.push(currentChunk);
          currentChunk = sentence.trim();
        }
      }
      if (currentChunk) chunks.push(currentChunk);
    }
  }

  if (chunks.length === 0) return { stop: () => {} };

  let currentAudio: HTMLAudioElement | null = null;
  let isStopped = false;
  let hasStarted = false;

  const playChunk = (index: number) => {
    if (isStopped) return;

    if (index >= chunks.length) {
      options?.onEnd?.();
      return;
    }

    const chunkText = chunks[index];
    const url = `/api/tts?text=${encodeURIComponent(chunkText)}&voice=${encodeURIComponent(voice)}`;
    const audio = new Audio(url);
    audio.playbackRate = rate;
    currentAudio = audio;

    let playedSuccessfully = false;

    audio.onplay = () => {
      playedSuccessfully = true;
      if (!hasStarted) {
        hasStarted = true;
        options?.onStart?.();
      }
    };

    audio.onended = () => {
      if (!isStopped) {
        playChunk(index + 1);
      }
    };

    const handleWebSpeechFallback = () => {
      if (!("speechSynthesis" in window) || isStopped) {
        if (!isStopped) playChunk(index + 1);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(chunkText);
      utterance.lang = "hr-HR";
      utterance.rate = rate;

      const voices = window.speechSynthesis.getVoices();
      let selectedVoice = voices.find(
        (v) => v.lang === "hr-HR" || v.lang.startsWith("hr-")
      );
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      if (!hasStarted) {
        utterance.onstart = () => {
          hasStarted = true;
          options?.onStart?.();
        };
      }

      utterance.onend = () => {
        if (!isStopped) playChunk(index + 1);
      };
      utterance.onerror = () => {
        if (!isStopped) playChunk(index + 1);
      };

      window.speechSynthesis.speak(utterance);
    };

    audio.onerror = () => {
      if (!playedSuccessfully) {
        console.warn("Neural TTS chunk failed, falling back to Web Speech:", chunkText);
        handleWebSpeechFallback();
      } else if (!isStopped) {
        playChunk(index + 1);
      }
    };

    audio.play().catch((err) => {
      if (!playedSuccessfully) {
        console.warn("Neural TTS play rejected, falling back to Web Speech:", err);
        handleWebSpeechFallback();
      } else if (!isStopped) {
        playChunk(index + 1);
      }
    });
  };

  playChunk(0);

  return {
    stop: () => {
      isStopped = true;
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
      }
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      options?.onEnd?.();
    }
  };
}
