"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Mic,
  MicOff,
  Volume2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  RefreshCw,
  Info,
  Check,
  Flame,
} from "lucide-react";
import { speakText } from "@/lib/speech";

interface WordEvaluation {
  word: string;
  isCorrect: boolean;
  isAlmost?: boolean;
}

interface EvaluationResult {
  score: number;
  words: WordEvaluation[];
  evaluated: boolean;
  accuracyLabel: string;
}

interface SpeechPronunciationEvaluatorProps {
  targetText: string;
  locale: string;
  onSuccess?: (spokenText?: string) => void;
  onApplyAnswer?: (spokenText: string) => void;
}

function extractCroatianText(text: string): string {
  if (!text) return "";
  let clean = text.replace(/\s*\([^)]*\)/g, "");
  if (clean.includes("/")) {
    clean = clean.split("/")[0].trim();
  }
  return clean.trim();
}

function normalizeCroWord(str: string): string {
  return str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'«»“”’–—…¡¿]/g, "")
    .trim();
}

function stripCroDiacritics(str: string): string {
  return str
    .toLowerCase()
    .replace(/[čć]/g, "c")
    .replace(/š/g, "s")
    .replace(/ž/g, "z")
    .replace(/đ/g, "d")
    .replace(/dž/g, "dz")
    .replace(/lj/g, "l")
    .replace(/nj/g, "n");
}

function levenshtein(a: string, b: string): number {
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return matrix[a.length][b.length];
}

export function SpeechPronunciationEvaluator({
  targetText,
  locale,
  onSuccess,
  onApplyAnswer,
}: SpeechPronunciationEvaluatorProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState("");
  const [transcript, setTranscript] = useState("");
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPermissionDenied, setIsPermissionDenied] = useState(false);
  const [applied, setApplied] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  const cleanTarget = extractCroatianText(targetText);

  // Check speech recognition support
  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const hasSpeechRec = !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
      setIsSupported(hasSpeechRec);
    }
  }, []);

  // Clean up recognition when target text changes or unmounts
  useEffect(() => {
    setTranscript("");
    setInterimTranscript("");
    setEvaluation(null);
    setErrorMessage(null);
    setIsPermissionDenied(false);
    setApplied(false);

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore abort error on unmount
        }
        recognitionRef.current = null;
      }
    };
  }, [targetText]);

  const evaluateSpeech = useCallback(
    (userSpeech: string) => {
      const rawTargetWords = cleanTarget.split(/\s+/).filter(Boolean);
      const targetNormWords = rawTargetWords.map(normalizeCroWord).filter(Boolean);
      const spokenNormWords = userSpeech
        .split(/\s+/)
        .map(normalizeCroWord)
        .filter(Boolean);

      let earnedPoints = 0;
      const evaluatedWords: WordEvaluation[] = rawTargetWords.map((originalWord) => {
        const norm = normalizeCroWord(originalWord);
        if (!norm) return { word: originalWord, isCorrect: true };

        const stripped = stripCroDiacritics(norm);

        // 1. Exact match
        const exactMatch = spokenNormWords.some((w) => w === norm);
        if (exactMatch) {
          earnedPoints += 1.0;
          return { word: originalWord, isCorrect: true };
        }

        // 2. Diacritic-only difference (e.g. kuca for kuća)
        const diacriticMatch = spokenNormWords.some(
          (w) => stripCroDiacritics(w) === stripped
        );
        if (diacriticMatch) {
          earnedPoints += 0.95;
          return { word: originalWord, isCorrect: true, isAlmost: true };
        }

        // 3. Typo/phonetic similarity (Levenshtein <= 1 on words length > 3)
        const closeMatch = spokenNormWords.some((w) => {
          if (Math.abs(w.length - norm.length) > 1) return false;
          if (norm.length > 3 && levenshtein(w, norm) <= 1) return true;
          return false;
        });

        if (closeMatch) {
          earnedPoints += 0.8;
          return { word: originalWord, isCorrect: true, isAlmost: true };
        }

        return { word: originalWord, isCorrect: false };
      });

      const maxPoints = Math.max(targetNormWords.length, 1);
      const score = Math.min(100, Math.round((earnedPoints / maxPoints) * 100));

      let accuracyLabel = "Excellent";
      if (locale === "ua") {
        accuracyLabel = score >= 80 ? "Чудово!" : score >= 60 ? "Добре!" : "Спробуйте ще раз";
      } else if (locale === "ru") {
        accuracyLabel = score >= 80 ? "Отлично!" : score >= 60 ? "Хорошо!" : "Попробуйте ещё раз";
      } else {
        accuracyLabel = score >= 80 ? "Excellent!" : score >= 60 ? "Good!" : "Try again";
      }

      const result: EvaluationResult = {
        score,
        words: evaluatedWords,
        evaluated: true,
        accuracyLabel,
      };

      setEvaluation(result);

      if (score >= 60 && onSuccess) {
        onSuccess(userSpeech);
      }
    },
    [cleanTarget, locale, onSuccess]
  );

  const startRecording = () => {
    if (typeof window === "undefined") return;

    // Reset previous states
    setErrorMessage(null);
    setIsPermissionDenied(false);
    setInterimTranscript("");
    setApplied(false);

    // Clean up any lingering recognition
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        // ignore
      }
      recognitionRef.current = null;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      setErrorMessage(
        locale === "ua"
          ? "Розпізнавання голосу не підтримується цим браузером. Використовуйте Google Chrome, Edge або Safari."
          : locale === "ru"
          ? "Распознавание голоса не поддерживается этим браузером. Используйте Google Chrome, Edge или Safari."
          : "Voice recognition is not supported in this browser. Please use Chrome, Edge or Safari."
      );
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = "hr-HR";
      recognition.maxAlternatives = 3;

      recognition.onstart = () => {
        setIsRecording(true);
        setErrorMessage(null);
        setIsPermissionDenied(false);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        let interim = "";
        let final = "";

        for (let i = 0; i < event.results.length; i++) {
          const res = event.results[i];
          if (res.isFinal) {
            // Use top alternative
            final += res[0].transcript + " ";
          } else {
            interim += res[0].transcript;
          }
        }

        const currentFinal = final.trim();
        const currentInterim = interim.trim();

        if (currentInterim) {
          setInterimTranscript(currentInterim);
        }

        if (currentFinal) {
          setTranscript(currentFinal);
          setInterimTranscript("");
          evaluateSpeech(currentFinal);
          setIsRecording(false);
        }
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onerror = (event: any) => {
        setIsRecording(false);
        const err = event?.error || "unknown";

        if (err === "not-allowed" || err === "service-not-allowed") {
          setIsPermissionDenied(true);
          setErrorMessage(
            locale === "ua"
              ? "Доступ до мікрофону заблоковано! Натисніть значок замочка 🔒 біля адреси сайту та дозвольте мікрофон."
              : locale === "ru"
              ? "Доступ к микрофону заблокирован! Нажмите значок замочка 🔒 возле адреса сайта и разрешите микрофон."
              : "Microphone access blocked! Click the lock icon 🔒 near the address bar to allow microphone access."
          );
        } else if (err === "no-speech") {
          setErrorMessage(
            locale === "ua"
              ? "Мову не виявлено. Говоріть голосніше та ближче до мікрофону."
              : locale === "ru"
              ? "Речь не обнаружена. Говорите громче и ближе к микрофону."
              : "No speech detected. Please speak louder and closer to the microphone."
          );
        } else if (err === "network") {
          setErrorMessage(
            locale === "ua"
              ? "Помилка зв'язку зі службою розпізнавання. Перевірте з'єднання з інтернетом."
              : locale === "ru"
              ? "Ошибка связи со службой распознавания. Проверьте подключение к интернету."
              : "Speech recognition service error. Please check your internet connection."
          );
        } else if (err === "audio-capture") {
          setErrorMessage(
            locale === "ua"
              ? "Мікрофон не знайдено. Перевірте підключення аудіопристрою."
              : locale === "ru"
              ? "Микрофон не найден. Проверьте подключение аудиоустройства."
              : "No microphone found. Please connect a microphone."
          );
        } else if (err !== "aborted") {
          setErrorMessage(
            locale === "ua"
              ? `Помилка розпізнавання (${err}). Спробуйте ще раз.`
              : locale === "ru"
              ? `Ошибка распознавания (${err}). Попробуйте ещё раз.`
              : `Recognition error (${err}). Please try again.`
          );
        }
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error("Failed to start speech recognition:", err);
      setIsRecording(false);
      setErrorMessage(
        locale === "ua"
          ? "Не вдалося запустити мікрофон. Спробуйте оновити сторінку."
          : locale === "ru"
          ? "Не удалось запустить микрофон. Попробуйте обновить страницу."
          : "Could not start microphone. Please refresh the page and try again."
      );
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      setIsRecording(false);
    }
  };

  const handleListenStandard = () => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    speakText(cleanTarget || targetText, {
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  const handleApply = () => {
    const textToApply = transcript || cleanTarget;
    if (onApplyAnswer) {
      onApplyAnswer(textToApply);
      setApplied(true);
    } else if (onSuccess) {
      onSuccess(textToApply);
      setApplied(true);
    }
  };

  return (
    <div className="glass rounded-2xl p-5 border border-white/10 space-y-4 my-4 animate-fade-in shadow-xl bg-white/[0.03]">
      {/* Header with Title and Audio Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
            {locale === "ua"
              ? "Голосовий тренажер вимови"
              : locale === "ru"
              ? "Голосовой тренажёр произношения"
              : "Voice Pronunciation Trainer"}
          </span>
        </div>

        <button
          type="button"
          onClick={handleListenStandard}
          className={`flex items-center gap-1.5 px-3.5 py-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold glass hover:bg-white/10 transition-all cursor-pointer ${
            isSpeaking
              ? "text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 shadow-lg shadow-cyan-500/20 animate-pulse"
              : "text-muted-foreground hover:text-foreground border border-white/5"
          }`}
          title="Listen standard pronunciation"
        >
          <Volume2 className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
          <span>
            {isSpeaking
              ? locale === "ua"
                ? "Звучить..."
                : locale === "ru"
                ? "Звучит..."
                : "Playing..."
              : locale === "ua"
              ? "Прослухати"
              : locale === "ru"
              ? "Прослушать"
              : "Listen"}
          </span>
        </button>
      </div>

      {/* Target Phrase Box */}
      <div className="p-4 rounded-xl bg-black/20 border border-white/5 text-base font-semibold leading-relaxed">
        {evaluation && evaluation.evaluated ? (
          <div className="flex flex-wrap gap-1.5 items-center">
            {evaluation.words.map((item, idx) => (
              <span
                key={idx}
                className={`px-2 py-0.5 rounded-lg font-bold transition-all text-sm ${
                  item.isCorrect && !item.isAlmost
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm"
                    : item.isAlmost
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "bg-red-500/20 text-red-300 border border-red-500/30 line-through opacity-80"
                }`}
                title={
                  item.isAlmost
                    ? locale === "ua"
                      ? "Майже точно (спецсимвол)"
                      : locale === "ru"
                      ? "Почти точно (спецсимвол)"
                      : "Almost exact (diacritic match)"
                    : undefined
                }
              >
                {item.word}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-foreground tracking-wide font-medium">
            {cleanTarget || targetText}
          </span>
        )}
      </div>

      {/* Live Interim Speech Feedback */}
      {isRecording && interimTranscript && (
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-semibold">{locale === "ua" ? "Чую: " : locale === "ru" ? "Слышу: " : "Hearing: "}</span>
          <span className="italic text-cyan-100">&quot;{interimTranscript}&quot;</span>
        </div>
      )}

      {/* Error / Permission Blocked Message */}
      {errorMessage && (
        <div
          className={`flex items-start gap-2.5 p-3 rounded-xl text-xs border animate-fade-in ${
            isPermissionDenied
              ? "bg-amber-500/15 border-amber-500/30 text-amber-300"
              : "bg-red-500/15 border-red-500/30 text-red-300"
          }`}
        >
          {isPermissionDenied ? (
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
          )}
          <div className="flex-1 space-y-1">
            <p className="font-medium leading-relaxed">{errorMessage}</p>
            {isPermissionDenied && (
              <p className="text-[11px] opacity-80">
                {locale === "ua"
                  ? "💡 Порада: Натисніть значок налаштувань або замочка біля URL сайту -> Дозволи -> Мікрофон -> Дозволити."
                  : locale === "ru"
                  ? "💡 Совет: Нажмите значок настроек или замочка возле URL сайта -> Разрешения -> Микрофон -> Разрешить."
                  : "💡 Tip: Click site settings or lock icon next to URL -> Permissions -> Microphone -> Allow."}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Recording Controls */}
      {isSupported ? (
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg cursor-pointer ${
                isRecording
                  ? "bg-red-500 text-white animate-pulse ring-4 ring-red-500/30 shadow-red-500/40"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 shadow-cyan-500/25 hover:scale-105 active:scale-95"
              }`}
              title={isRecording ? "Stop recording" : "Start speaking"}
            >
              {isRecording ? (
                <MicOff className="w-6 h-6 animate-spin-slow" />
              ) : (
                <Mic className="w-6 h-6" />
              )}
            </button>

            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground">
                {isRecording
                  ? locale === "ua"
                    ? "Слухаю... Говоріть хорватською!"
                    : locale === "ru"
                    ? "Слушаю... Говорите по-хорватски!"
                    : "Listening... Speak in Croatian!"
                  : evaluation
                  ? locale === "ua"
                    ? "Натисніть для повторної спроби"
                    : locale === "ru"
                    ? "Нажмите для повторной попытки"
                    : "Tap to retry"
                  : locale === "ua"
                  ? "Натисніть мікрофон і прочитайте фразу"
                  : locale === "ru"
                  ? "Нажмите микрофон и прочитайте фразу"
                  : "Tap mic and read the phrase"}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {isRecording
                  ? locale === "ua"
                    ? "Натисніть ще раз, коли закінчите"
                    : locale === "ru"
                    ? "Нажмите ещё раз, когда закончите"
                    : "Click again when done speaking"
                  : locale === "ua"
                  ? "Нейромережа оцінить вашу точність вимови"
                  : locale === "ru"
                  ? "Нейросеть оценит вашу точность произношения"
                  : "AI will evaluate your pronunciation accuracy"}
              </span>
            </div>
          </div>

          {/* Evaluation Score Badge */}
          {evaluation && (
            <div className="flex items-center gap-2">
              <div
                className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 border shadow-sm ${
                  evaluation.score >= 80
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : evaluation.score >= 60
                    ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                    : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                }`}
              >
                {evaluation.score >= 60 ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                )}
                <span>
                  {evaluation.score}% {locale === "ua" ? "Точність" : locale === "ru" ? "Точность" : "Accuracy"}
                </span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-xs text-amber-300/90 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
          <p className="font-semibold">
            {locale === "ua"
              ? "Розпізнавання голосу не підтримується цим браузером"
              : locale === "ru"
              ? "Распознавание речи не поддерживается этим браузером"
              : "Speech recognition is not supported in this browser"}
          </p>
          <p className="text-[11px] text-muted-foreground mt-1">
            {locale === "ua"
              ? "Для тренування вимови відкрийте платформу в Google Chrome, Microsoft Edge або Safari."
              : locale === "ru"
              ? "Для тренировки произношения откройте платформу в Google Chrome, Microsoft Edge или Safari."
              : "For voice training, open the platform in Google Chrome, Microsoft Edge or Safari."}
          </p>
        </div>
      )}

      {/* Recognized text banner and Apply button */}
      {transcript && (
        <div className="flex items-center justify-between gap-3 text-xs bg-black/30 p-3 rounded-xl border border-white/5 animate-fade-in">
          <div className="space-y-0.5">
            <span className="font-semibold text-gray-400 block text-[11px] uppercase tracking-wider">
              {locale === "ua" ? "Розпізнана вимова:" : locale === "ru" ? "Распознанное произношение:" : "Recognized Speech:"}
            </span>
            <span className="italic text-foreground font-medium">&quot;{transcript}&quot;</span>
          </div>

          {(onApplyAnswer || onSuccess) && evaluation && evaluation.score >= 50 && (
            <button
              type="button"
              onClick={handleApply}
              disabled={applied}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                applied
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20"
              }`}
            >
              {applied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{locale === "ua" ? "Застосовано" : locale === "ru" ? "Применено" : "Applied"}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{locale === "ua" ? "Вставити у відповідь" : locale === "ru" ? "Вставить в ответ" : "Use as Answer"}</span>
                </>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
