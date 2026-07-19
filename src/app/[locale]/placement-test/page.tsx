"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { useSession } from "next-auth/react";
import {
  placementQuestions,
  calculateLevel,
  PlacementQuestion,
} from "@/lib/placement-test-data";
import {
  Trophy,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Target,
  Clock,
} from "lucide-react";

type TestState = "intro" | "testing" | "results";

const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
};

const checkTranslationAnswer = (userInput: string, acceptedAnswers?: string[]) => {
  if (!acceptedAnswers) return false;
  const normInput = normalizeText(userInput);
  return acceptedAnswers.some((ans) => normalizeText(ans) === normInput);
};

export default function PlacementTestPage() {
  const t = useTranslations("placementTest");
  const locale = useLocale();
  const { data: session } = useSession();
  const router = useRouter();
  const [state, setState] = useState<TestState>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | string | null)[]>(
    new Array(placementQuestions.length).fill(null)
  );
  
  // Multiple choice state
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  // Translation state
  const [typedAnswer, setTypedAnswer] = useState("");
  
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Timer effect
  useEffect(() => {
    if (state !== "testing") return;
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [state]);

  const question = placementQuestions[currentQuestion];
  const totalQuestions = placementQuestions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  // Correctness calculations
  const isQuestionCorrect = (q: PlacementQuestion, answer: number | string | null) => {
    if (q.type === "translation") {
      return typeof answer === "string" && checkTranslationAnswer(answer, q.acceptedAnswers);
    } else {
      return answer === q.correctAnswer;
    }
  };

  const correctCount = answers.filter((a, i) =>
    isQuestionCorrect(placementQuestions[i], a)
  ).length;

  const determinedLevel = calculateLevel(correctCount);

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(optionIndex);
    setShowFeedback(true);

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setState("results");
        saveResults(newAnswers);
      }
    }, 2000);
  };

  const handleTranslationSubmit = () => {
    if (showFeedback || !typedAnswer.trim()) return;
    setShowFeedback(true);

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = typedAnswer;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setTypedAnswer("");
        setShowFeedback(false);
      } else {
        setState("results");
        saveResults(newAnswers);
      }
    }, 3000);
  };

  const saveResults = async (finalAnswers: (number | string | null)[]) => {
    if (!session?.user?.id) return;

    const correct = finalAnswers.filter((a, i) =>
      isQuestionCorrect(placementQuestions[i], a)
    ).length;
    const level = calculateLevel(correct);

    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentLevel: level,
          totalXP: correct * 10,
          testScores: [
            {
              type: "placement",
              score: correct,
              total: totalQuestions,
              level,
              date: new Date().toISOString(),
            },
          ],
        }),
      });
    } catch {
      console.error("Failed to save results");
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(totalQuestions).fill(null));
    setSelectedAnswer(null);
    setTypedAnswer("");
    setShowFeedback(false);
    setTimeElapsed(0);
    setState("intro");
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Intro screen
  if (state === "intro") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-2xl shadow-green-500/25">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            {t("description")}
          </p>
          <div className="glass inline-flex items-center gap-3 px-6 py-3 rounded-2xl">
            <span className="text-sm text-muted-foreground">
              {totalQuestions} {t("question")}s • CEFR A1 → C2
            </span>
          </div>
          <div>
            <button
              onClick={() => setState("testing")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 transition-all shadow-2xl shadow-green-500/25"
            >
              {t("start")}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (state === "results") {
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl shadow-yellow-500/25">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold">{t("results.title")}</h1>

          <div className="glass rounded-3xl p-8 space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                {t("results.yourLevel")}
              </p>
              <span
                className={`inline-block text-5xl font-black px-6 py-3 rounded-2xl text-white level-${determinedLevel.toLowerCase()}`}
              >
                {determinedLevel}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm text-muted-foreground mb-1">
                  {t("results.score")}
                </p>
                <p className="text-2xl font-bold">
                  {correctCount} / {totalQuestions}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({scorePercent}%)
                  </span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm text-muted-foreground mb-1">
                  {t("results.totalTime")}
                </p>
                <p className="text-2xl font-bold">
                  {formatTime(timeElapsed)}
                </p>
              </div>
            </div>

            <div className="text-xs text-muted-foreground">
              {t("results.avgTimePerQuestion")}: {Math.round(timeElapsed / totalQuestions)}s
            </div>

            <p className="text-sm text-muted-foreground pt-2">
              {t("results.description")}
            </p>

            {/* Score breakdown bar */}
            <div className="h-4 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 transition-all duration-1000"
                style={{ width: `${scorePercent}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-2xl shadow-blue-500/25"
            >
              {t("results.goToDashboard")}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={resetTest}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold glass hover:bg-white/10 transition-all"
            >
              <RotateCcw className="w-5 h-5" />
              {t("results.retake")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isTranslationCorrect = question.type === "translation" && checkTranslationAnswer(typedAnswer, question.acceptedAnswers);

  // Testing screen
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Progress bar & Timer */}
      <div className="mb-8 animate-fade-in flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              {t("question")} {currentQuestion + 1} {t("of")} {totalQuestions}
            </span>
            <span className="text-xs px-3 py-1 rounded-full glass font-medium">
              {question.level}
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass shrink-0 h-fit self-end sm:self-auto">
          <Clock className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-semibold monospace">
            {formatTime(timeElapsed)}
          </span>
        </div>
      </div>

      {/* Question Card */}
      {question.type === "translation" ? (
        <div className="glass rounded-2xl p-8 mb-6 animate-slide-up">
          <h2 className="text-xl font-bold mb-8 leading-relaxed">
            {question.question}
          </h2>

          <div className="space-y-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTranslationSubmit();
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="text"
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
                disabled={showFeedback}
                placeholder={t("translationPlaceholder")}
                className={`flex-1 p-4 rounded-xl border bg-white/5 outline-none transition-all text-lg ${
                  showFeedback
                    ? isTranslationCorrect
                      ? "border-green-500/50 bg-green-500/10 text-green-400"
                      : "border-red-500/50 bg-red-500/10 text-red-400"
                    : "border-white/10 focus:border-blue-500 focus:bg-white/10"
                }`}
              />
              <button
                type="submit"
                disabled={showFeedback || !typedAnswer.trim()}
                className="px-6 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-semibold transition-all shrink-0"
              >
                {t("submit")}
              </button>
            </form>

            {showFeedback && (
              <div className="animate-fade-in space-y-2 mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2">
                  {isTranslationCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span className={`font-semibold ${isTranslationCorrect ? "text-green-400" : "text-red-400"}`}>
                    {isTranslationCorrect ? t("common.correct") : t("common.incorrect")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("lessons.correctAnswer")}: <strong className="text-foreground">{question.acceptedAnswers?.[0]}</strong>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2 pt-2 border-t border-white/5">
                  {question.explanation[locale as "en" | "ru" | "ua"] || question.explanation.en}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="glass rounded-2xl p-8 mb-6 animate-slide-up">
          <h2 className="text-xl font-bold mb-8 leading-relaxed">
            {question.question}
          </h2>

          <div className="grid gap-3">
            {question.options?.map((optionObj, i) => {
              let optionStyle = "glass hover:bg-white/10 hover:border-blue-500/30";

              if (showFeedback) {
                if (i === question.correctAnswer) {
                  optionStyle =
                    "bg-green-500/10 border-green-500/50 text-green-400";
                } else if (i === selectedAnswer && i !== question.correctAnswer) {
                  optionStyle = "bg-red-500/10 border-red-500/50 text-red-400";
                } else {
                  optionStyle = "opacity-50";
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${optionStyle} ${
                    !showFeedback ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-semibold shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="font-medium">
                      {optionObj[locale as "en" | "ru" | "ua"] || optionObj.en}
                    </span>
                    {showFeedback && i === question.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto" />
                    )}
                    {showFeedback &&
                      i === selectedAnswer &&
                      i !== question.correctAnswer && (
                        <XCircle className="w-5 h-5 text-red-400 ml-auto" />
                      )}
                  </div>
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className="animate-fade-in mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {question.explanation[locale as "en" | "ru" | "ua"] || question.explanation.en}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
