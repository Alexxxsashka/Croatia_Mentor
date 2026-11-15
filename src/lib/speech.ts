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
  if (!cleanText) {
    queueMicrotask(() => options?.onError?.());
    return { stop: () => {} };
  }

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

  let currentAudio: HTMLAudioElement | null = null;
  let timer: number | undefined;
  let active = true;
  let hasStarted = false;

  function start() {
    if (!active || hasStarted) return;
    hasStarted = true;
    options?.onStart?.();
  }

  function clearAudio() {
    window.clearTimeout(timer);
    if (!currentAudio) return;
    currentAudio.onplaying = null;
    currentAudio.onended = null;
    currentAudio.onerror = null;
    currentAudio.pause();
    currentAudio.removeAttribute("src");
    currentAudio.load();
    currentAudio = null;
  }

  function finish(error = false) {
    if (!active) return;
    active = false;
    clearAudio();
    if (error && options?.onError) options.onError();
    else options?.onEnd?.();
  }

  function playChunk(index: number) {
    if (!active) return;
    if (index >= chunks.length) {
      finish();
      return;
    }

    const chunkText = chunks[index];
    const audio = new Audio(`/api/tts?text=${encodeURIComponent(chunkText)}&voice=${encodeURIComponent(voice)}`);
    audio.playbackRate = rate;
    currentAudio = audio;

    function fallback() {
      if (!active || currentAudio !== audio) return;
      clearAudio();
      if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
        finish(true);
        return;
      }

      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(chunkText);
      utterance.lang = "hr-HR";
      utterance.rate = rate;
      const voices = synth.getVoices();
      const croatianVoice = voices.find(({ lang }) => /^hr(?:[-_]|$)/i.test(lang));
      if (croatianVoice) utterance.voice = croatianVoice;
      utterance.onstart = () => {
        window.clearTimeout(timer);
        start();
      };
      utterance.onend = () => {
        if (!active) return;
        window.clearTimeout(timer);
        playChunk(index + 1);
      };
      utterance.onerror = () => finish(true);
      timer = window.setTimeout(() => {
        finish(true);
        synth.cancel();
      }, 5000);
      synth.speak(utterance);
    }

    audio.onplaying = () => {
      window.clearTimeout(timer);
      start();
    };
    audio.onended = () => {
      clearAudio();
      playChunk(index + 1);
    };
    audio.onerror = fallback;
    timer = window.setTimeout(fallback, 17000);
    audio.play().catch(fallback);
  }

  playChunk(0);

  return {
    stop: () => {
      if (!active) return;
      finish();
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    },
  };
}
