"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
} from "lucide-react";

interface Sentence {
  text: string; // use ___ for blank
  options: string[];
  correctAnswer: string;
  translation: string;
}

const sentences: Sentence[] = [
  {
    text: "Ja _____ student.",
    options: ["sam", "si", "je", "smo"],
    correctAnswer: "sam",
    translation: "I am a student.",
  },
  {
    text: "Ona _____ u Zagrebu.",
    options: ["živi", "živim", "živiš", "žive"],
    correctAnswer: "živi",
    translation: "She lives in Zagreb.",
  },
  {
    text: "Mi _____ kavu.",
    options: ["pijemo", "pijem", "piješ", "piju"],
    correctAnswer: "pijemo",
    translation: "We drink coffee.",
  },
  {
    text: "_____ se zoveš?",
    options: ["Kako", "Što", "Gdje", "Kada"],
    correctAnswer: "Kako",
    translation: "What is your name?",
  },
  {
    text: "Idem u _____.",
    options: ["školu", "škola", "školom", "škole"],
    correctAnswer: "školu",
    translation: "I'm going to school.",
  },
  {
    text: "On _____ hrvatski.",
    options: ["govori", "govorim", "govore", "govoriš"],
    correctAnswer: "govori",
    translation: "He speaks Croatian.",
  },
  {
    text: "_____ je tvoj brat?",
    options: ["Gdje", "Kako", "Što", "Koliko"],
    correctAnswer: "Gdje",
    translation: "Where is your brother?",
  },
  {
    text: "Volim _____ na moru.",
    options: ["plivati", "plivam", "plivanje", "plivao"],
    correctAnswer: "plivati",
    translation: "I love to swim in the sea.",
  },
];

export default function FillBlanksPage() {
  const t = useTranslations("games.fillBlanks");
  const router = useRouter();

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (index: number, option: string) => {
    if (checked) return;
    setAnswers({ ...answers, [index]: option });
  };

  const checkAll = () => {
    let correct = 0;
    sentences.forEach((s, i) => {
      if (answers[i] === s.correctAnswer) correct++;
    });
    setScore(correct);
    setChecked(true);
  };

  const reset = () => {
    setAnswers({});
    setChecked(false);
    setScore(0);
  };

  const allAnswered = Object.keys(answers).length === sentences.length;

  if (checked) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.push("/games")}
            className="p-2 rounded-xl glass hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">{t("title")}</h1>
        </div>

        {/* Results */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 mb-4 shadow-2xl">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">{t("complete")} 🎉</h2>
          <p className="text-lg text-muted-foreground">
            {score} / {sentences.length}
          </p>
          <div className="h-3 w-48 mx-auto mt-4 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-400"
              style={{
                width: `${(score / sentences.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Review answers */}
        <div className="space-y-4 mb-8">
          {sentences.map((sentence, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === sentence.correctAnswer;

            return (
              <div
                key={i}
                className={`glass rounded-xl p-4 border ${
                  isCorrect
                    ? "border-green-500/30"
                    : "border-red-500/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  )}
                  <div>
                    <p className="font-medium">
                      {sentence.text.replace(
                        "_____",
                        isCorrect
                          ? `✓ ${userAnswer}`
                          : `✗ ${userAnswer} → ${sentence.correctAnswer}`
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {sentence.translation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-all shadow-lg"
          >
            <RotateCcw className="w-4 h-4" />
            {t("tryAgain") || "Try Again"}
          </button>
          <button
            onClick={() => router.push("/games")}
            className="px-6 py-3 rounded-xl font-semibold glass hover:bg-white/10 transition-all"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 animate-fade-in">
        <button
          onClick={() => router.push("/games")}
          className="p-2 rounded-xl glass hover:bg-white/10 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold">{t("title")}</h1>
      </div>

      <p className="text-sm text-muted-foreground text-center mb-8">
        {t("instructions")}
      </p>

      {/* Sentences */}
      <div className="space-y-6 stagger-children mb-8">
        {sentences.map((sentence, i) => (
          <div key={i} className="glass rounded-2xl p-6">
            <p className="text-lg font-medium mb-1">
              {sentence.text.replace(
                "_____",
                answers[i] ? `[${answers[i]}]` : "_____"
              )}
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              {sentence.translation}
            </p>
            <div className="flex flex-wrap gap-2">
              {sentence.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(i, option)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    answers[i] === option
                      ? "bg-purple-500/20 text-purple-400 border border-purple-500/30 scale-105"
                      : "glass hover:bg-white/10 cursor-pointer"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Check button */}
      <div className="text-center">
        <button
          onClick={checkAll}
          disabled={!allAnswered}
          className="px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:opacity-90 transition-all shadow-2xl shadow-purple-500/25 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {t("checkAll")}
        </button>
      </div>
    </div>
  );
}
