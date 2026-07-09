"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Play, Pause, RotateCcw, Volume2 } from "lucide-react";

interface DictationPlayerProps {
  text: string;
}

export function DictationPlayer({ text }: DictationPlayerProps) {
  const t = useTranslations("lessons");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(0.8);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hr-HR";
    utterance.rate = speed;
    utterance.pitch = 1;

    // Try to find a Croatian voice
    const voices = window.speechSynthesis.getVoices();
    const croatianVoice = voices.find(
      (v) =>
        v.lang.startsWith("hr") ||
        v.lang.startsWith("sr") ||
        v.name.toLowerCase().includes("croat")
    );
    if (croatianVoice) utterance.voice = croatianVoice;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, [text, speed]);

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Volume2 className="w-5 h-5 text-blue-400" />
        <h3 className="font-semibold">{t("dictationInstructions")}</h3>
      </div>

      <div className="flex items-center gap-3">
        {/* Play/Pause */}
        <button
          onClick={isPlaying ? stop : speak}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg ${
            isPlaying
              ? "bg-red-500 hover:bg-red-600 shadow-red-500/25"
              : "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 shadow-blue-500/25"
          }`}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-0.5" />
          )}
        </button>

        {/* Replay */}
        <button
          onClick={speak}
          className="w-12 h-12 rounded-xl glass hover:bg-white/10 flex items-center justify-center transition-all"
          title={t("replay")}
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        {/* Speed control */}
        <div className="flex items-center gap-2 ml-4">
          <span className="text-xs text-muted-foreground">Speed:</span>
          {[0.5, 0.8, 1.0].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                speed === s
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "glass hover:bg-white/10"
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Visual indicator */}
      {isPlaying && (
        <div className="mt-4 flex items-center gap-1">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 24 + 8}px`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
