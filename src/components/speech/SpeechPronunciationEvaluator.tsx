"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, Volume2, CheckCircle2, AlertCircle, RefreshCw, Sparkles } from "lucide-react";
import { speakText } from "@/lib/speech";

interface SpeechPronunciationEvaluatorProps {
  targetText: string;
  locale: string;
  onSuccess?: () => void;
}

export function SpeechPronunciationEvaluator({
  targetText,
  locale,
  onSuccess,
}: SpeechPronunciationEvaluatorProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [evaluation, setEvaluation] = useState<{
    score: number;
    words: { word: string; isCorrect: boolean }[];
    evaluated: boolean;
  } | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const rec = new SpeechRecognition();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = "hr-HR";

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rec.onresult = (event: any) => {
          const res = event.results[0][0].transcript;
          setTranscript(res);
          evaluateSpeech(res);
          setIsRecording(false);
        };

        rec.onerror = () => {
          setIsRecording(false);
        };

        rec.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = rec;
      } else {
        setIsSupported(false);
      }
    }
  }, [targetText]);

  const normalizeWord = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
      .trim();
  };

  const evaluateSpeech = (userSpeech: string) => {
    const targetWords = targetText.split(/\s+/).map((w) => normalizeWord(w)).filter(Boolean);
    const spokenWords = userSpeech.split(/\s+/).map((w) => normalizeWord(w)).filter(Boolean);

    let matchCount = 0;
    const evaluatedWords = targetText.split(/\s+/).map((originalWord) => {
      const norm = normalizeWord(originalWord);
      const isCorrect = spokenWords.includes(norm);
      if (isCorrect) matchCount++;
      return { word: originalWord, isCorrect };
    });

    const score = Math.round((matchCount / Math.max(targetWords.length, 1)) * 100);
    const result = { score, words: evaluatedWords, evaluated: true };
    setEvaluation(result);

    if (score >= 70 && onSuccess) {
      onSuccess();
    }
  };

  const startRecording = () => {
    if (recognitionRef.current && !isRecording) {
      setTranscript("");
      setEvaluation(null);
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (err) {
        console.error("Speech recognition start failed:", err);
      }
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleListenStandard = () => {
    setIsSpeaking(true);
    speakText(targetText, {
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  return (
    <div className="glass rounded-2xl p-5 border border-white/10 space-y-4 my-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
            {locale === "ua" ? "Голосовий тренажер" : locale === "ru" ? "Голосовой тренажёр" : "Voice Trainer"}
          </span>
        </div>

        <button
          type="button"
          onClick={handleListenStandard}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold glass hover:bg-white/10 transition-all ${
            isSpeaking ? "text-cyan-400 border border-cyan-500/30" : "text-muted-foreground"
          }`}
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>{locale === "ua" ? "Прослухати" : locale === "ru" ? "Прослушать" : "Listen"}</span>
        </button>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-base font-semibold leading-relaxed">
        {evaluation && evaluation.evaluated ? (
          <div className="flex flex-wrap gap-1.5">
            {evaluation.words.map((item, idx) => (
              <span
                key={idx}
                className={`px-1.5 py-0.5 rounded-md font-bold transition-all ${
                  item.isCorrect
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "bg-red-500/20 text-red-300 border border-red-500/30 line-through opacity-80"
                }`}
              >
                {item.word}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-foreground">{targetText}</span>
        )}
      </div>

      {/* Recording controls */}
      {isSupported ? (
        <div className="flex items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg ${
                isRecording
                  ? "bg-red-500 text-white animate-pulse ring-4 ring-red-500/30"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 shadow-cyan-500/20"
              }`}
            >
              {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>

            <span className="text-xs font-semibold text-muted-foreground">
              {isRecording
                ? locale === "ua" ? "Слухаю... Говоріть!" : locale === "ru" ? "Слушаю... Говорите!" : "Listening... Speak now!"
                : locale === "ua" ? "Натисніть мікрофон і прочитайте речення" : locale === "ru" ? "Нажмите микрофон и прочитайте предложение" : "Tap mic and read sentence"}
            </span>
          </div>

          {evaluation && (
            <div className="flex items-center gap-2">
              <div
                className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 ${
                  evaluation.score >= 70
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                }`}
              >
                {evaluation.score >= 70 ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                <span>{evaluation.score}% {locale === "ua" ? "Точність" : locale === "ru" ? "Точность" : "Accuracy"}</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-xs text-muted-foreground italic">
          {locale === "ua" ? "Распознавание речи не поддерживается вашим браузером" : "Speech recognition is not supported in your browser"}
        </div>
      )}

      {transcript && (
        <div className="text-xs text-muted-foreground bg-black/20 p-2.5 rounded-xl border border-white/5">
          <span className="font-semibold text-gray-400">
            {locale === "ua" ? "Розпізнано: " : locale === "ru" ? "Распознано: " : "Recognized: "}
          </span>
          <span className="italic">"{transcript}"</span>
        </div>
      )}
    </div>
  );
}
