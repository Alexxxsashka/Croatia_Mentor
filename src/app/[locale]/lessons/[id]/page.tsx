"use client";

import { useState, use, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { lessonsData, getLocalizedText } from "@/lib/lessons-data";
import { DictationPlayer } from "@/components/dictation-player";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Trophy,
  Lightbulb,
} from "lucide-react";
import { toast } from "sonner";

export default function LessonDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = use(params);
  const t = useTranslations("lessons");
  const router = useRouter();

  const lesson = lessonsData.find((l) => l.id === id);

  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [fillAnswer, setFillAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);
  const [xpAdded, setXpAdded] = useState(false);

  // Fetch initial progress to see if already completed
  useEffect(() => {
    fetch("/api/progress")
      .then((res) => res.json())
      .then((data) => {
        if (data.progress) {
          const completedList = data.progress.completedLessons || [];
          if (completedList.includes(id)) {
            setAlreadyCompleted(true);
          }
        }
      })
      .catch(console.error);
  }, [id]);



  if (!lesson) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">Lesson not found</p>
        <button
          onClick={() => router.push("/lessons")}
          className="mt-4 px-6 py-2 rounded-xl glass hover:bg-white/10 transition-all"
        >
          {t("back") || "Back to Lessons"}
        </button>
      </div>
    );
  }

  const exercises = lesson.content.exercises;
  const exercise = exercises[currentExercise];
  const totalExercises = exercises.length;

  const checkAnswer = () => {
    const userAnswer =
      exercise.type === "fill-blank" || exercise.type === "translation" || exercise.type === "dictation"
        ? fillAnswer.trim()
        : selectedAnswer;

    const isCorrect =
      userAnswer?.toLowerCase() === exercise.correctAnswer.toLowerCase();

    if (isCorrect) {
      setCorrectCount(correctCount + 1);
      toast.success(t("correct") || "Correct! ✓");
    } else {
      toast.error(`${t("incorrect") || "Incorrect"}: ${exercise.correctAnswer}`);
    }
    setShowResult(true);
  };

  const nextExercise = () => {
    if (currentExercise < totalExercises - 1) {
      setCurrentExercise(currentExercise + 1);
      setSelectedAnswer(null);
      setFillAnswer("");
      setShowResult(false);
    } else {
      setCompleted(true);
      if (!xpAdded) {
        setXpAdded(true);
        fetch("/api/progress")
          .then((res) => res.json())
          .then((data) => {
            const currentProgress = data.progress || {};
            const currentCompleted = currentProgress.completedLessons || [];
            const currentXP = currentProgress.totalXP || 0;
            
            const isNewCompletion = !currentCompleted.includes(id);
            const newCompleted = isNewCompletion ? [...currentCompleted, id] : currentCompleted;
            const xpEarned = isNewCompletion ? (correctCount * 15) : 0;
            const newXP = currentXP + xpEarned;
            
            fetch("/api/progress", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                completedLessons: newCompleted,
                totalXP: newXP
              })
            }).catch(console.error);
          })
          .catch(console.error);
      }
    }
  };

  if (completed) {
    const xpEarned = alreadyCompleted ? 0 : (correctCount * 15);
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-6 shadow-2xl">
          <Trophy className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-4">
          {t("lessonComplete")} 🎉
        </h1>
        <div className="glass rounded-2xl p-8 mb-8 space-y-4">
          <p className="text-lg">
            {t("score")}: {correctCount}/{totalExercises}
          </p>
          <p className="text-2xl font-bold text-green-400">
            +{xpEarned} {t("xpEarned")}
            {alreadyCompleted && (
              <span className="text-xs text-muted-foreground block mt-1">
                (Already completed)
              </span>
            )}
          </p>
          <div className="h-3 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-400"
              style={{ width: `${(correctCount / totalExercises) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => router.push("/lessons")}
            className="px-8 py-3 rounded-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-xl"
          >
            {t("back") || "Back to Lessons"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 animate-fade-in">
        <button
          onClick={() => router.push("/lessons")}
          className="p-2 rounded-xl glass hover:bg-white/10 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-md level-${lesson.level.toLowerCase()} text-white`}
            >
              {lesson.level}
            </span>
            <span className="text-xs text-muted-foreground capitalize">
              {lesson.type}
            </span>
          </div>
          <h1 className="text-2xl font-bold mt-1">{getLocalizedText(lesson.title, locale)}</h1>
        </div>
      </div>

      {/* Lesson Content */}
      {lesson.content.sections && (
        <div className="space-y-6 mb-10 animate-slide-up">
          {lesson.content.sections.map((section, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-3">{getLocalizedText(section.title, locale)}</h2>
              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                {getLocalizedText(section.text, locale)}
              </p>
              {section.examples && (
                <ul className="mt-4 space-y-2">
                  {section.examples.map((ex, j) => (
                    <li
                      key={j}
                      className="text-sm pl-4 border-l-2 border-blue-500/30 py-1"
                    >
                      {getLocalizedText(ex, locale)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Dictation Player */}
      {lesson.type === "dictation" && lesson.content.dictationText && (
        <div className="mb-8">
          <DictationPlayer text={lesson.content.dictationText} />
        </div>
      )}

      {/* Exercise Section */}
      <div className="glass rounded-2xl p-8 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold">
            {t("exercise")} {currentExercise + 1}/{totalExercises}
          </h3>
          <div className="h-2 flex-1 ml-4 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
              style={{
                width: `${((currentExercise + 1) / totalExercises) * 100}%`,
              }}
            />
          </div>
        </div>

        <p className="text-lg font-medium mb-6">{getLocalizedText(exercise.question, locale)}</p>

        {/* Multiple choice */}
        {exercise.type === "multiple-choice" && exercise.options && (
          <div className="grid gap-3">
            {exercise.options.map((option, i) => {
              let style = "glass hover:bg-white/10 cursor-pointer";
              if (showResult) {
                if (option === exercise.correctAnswer) {
                  style =
                    "bg-green-500/10 border-green-500/50 text-green-400";
                } else if (
                  option === selectedAnswer &&
                  option !== exercise.correctAnswer
                ) {
                  style = "bg-red-500/10 border-red-500/50 text-red-400";
                } else {
                  style = "opacity-40";
                }
              } else if (option === selectedAnswer) {
                style = "bg-blue-500/10 border-blue-500/50 text-blue-400";
              }

              return (
                <button
                  key={i}
                  onClick={() => !showResult && setSelectedAnswer(option)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-semibold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{option}</span>
                    {showResult && option === exercise.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 ml-auto text-green-400" />
                    )}
                    {showResult &&
                      option === selectedAnswer &&
                      option !== exercise.correctAnswer && (
                        <XCircle className="w-5 h-5 ml-auto text-red-400" />
                      )}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Fill blank / Translation / Dictation */}
        {(exercise.type === "fill-blank" ||
          exercise.type === "translation" ||
          exercise.type === "dictation") && (
          <div className="space-y-4">
            {exercise.hint && (
              <div className="flex items-center gap-2 text-sm text-yellow-400 bg-yellow-500/10 px-4 py-2 rounded-xl">
                <Lightbulb className="w-4 h-4" />
                {getLocalizedText(exercise.hint, locale)}
              </div>
            )}
            <input
              type="text"
              value={fillAnswer}
              onChange={(e) => setFillAnswer(e.target.value)}
              disabled={showResult}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-muted-foreground/50"
              placeholder={t("yourAnswer")}
              onKeyDown={(e) =>
                e.key === "Enter" && !showResult && checkAnswer()
              }
            />
            {showResult && (
              <p className="text-sm">
                <span className="text-muted-foreground">
                  {t("correctAnswer")}:{" "}
                </span>
                <span className="text-green-400 font-medium">
                  {exercise.correctAnswer}
                </span>
              </p>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center justify-end gap-3 mt-6">
          {!showResult ? (
            <button
              onClick={checkAnswer}
              disabled={
                !selectedAnswer &&
                !fillAnswer.trim()
              }
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {t("checkAnswer")}
            </button>
          ) : (
            <button
              onClick={nextExercise}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 transition-all shadow-lg"
            >
              {currentExercise < totalExercises - 1
                ? t("nextExercise")
                : t("finish") || "Finish"}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
