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
  const rate = options?.rate ?? 0.8;
  const voice = options?.voice || "hr-HR-GabrijelaNeural";

  // Edge Neural TTS endpoint for high-quality Croatian speech
  const url = `/api/tts?text=${encodeURIComponent(cleanText)}&voice=${encodeURIComponent(voice)}`;
  const audio = new Audio(url);
  audio.playbackRate = rate;

  let playedSuccessfully = false;
  let fallbackCalled = false;

  audio.onplay = () => {
    playedSuccessfully = true;
    options?.onStart?.();
  };

  audio.onended = () => {
    options?.onEnd?.();
  };

  const handleFallback = () => {
    if (fallbackCalled) return;
    fallbackCalled = true;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = "hr-HR";
      utterance.rate = rate;

      const voices = window.speechSynthesis.getVoices();
      let selectedVoice = voices.find(
        (v) => v.lang === "hr-HR" || v.lang.startsWith("hr-")
      );
      if (!selectedVoice) {
        selectedVoice = voices.find(
          (v) =>
            v.name.toLowerCase().includes("croatian") ||
            v.name.toLowerCase().includes("hrvatski")
        );
      }
      if (!selectedVoice) {
        selectedVoice = voices.find(
          (v) =>
            v.lang.startsWith("sr") ||
            v.lang.startsWith("sl") ||
            v.lang.startsWith("bs")
        );
      }
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
      }

      if (options?.onStart) utterance.onstart = () => options.onStart?.();
      if (options?.onEnd) utterance.onend = () => options.onEnd?.();
      if (options?.onError) utterance.onerror = () => options.onError?.();

      window.speechSynthesis.speak(utterance);
    } else {
      options?.onError?.();
    }
  };

  audio.onerror = (e) => {
    if (!playedSuccessfully) {
      console.warn("Neural TTS failed, falling back to Web Speech Synthesis:", e);
      handleFallback();
    } else {
      options?.onError?.();
    }
  };

  audio.play().catch((err) => {
    if (!playedSuccessfully) {
      console.warn("Neural TTS play rejected, falling back to Web Speech Synthesis:", err);
      handleFallback();
    } else {
      options?.onError?.();
    }
  });

  return {
    stop: () => {
      audio.pause();
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      options?.onEnd?.();
    }
  };
}
