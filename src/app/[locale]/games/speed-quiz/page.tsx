"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { vocabularyWords } from "@/lib/vocabulary-data";
import { ArrowLeft, RefreshCw, Trophy, Zap, Timer } from "lucide-react";

function getTranslation(word: typeof vocabularyWords[0], locale: string) {
  if (locale === "ru") return word.ru;
  if (locale === "ua") return word.ua;
  return word.en;
}

export default function SpeedQuizPage() {
  const t = useTranslations("games");
  const locale = useLocale();
  const router = useRouter();

  const [questions, setQuestions] = useState<{ word: typeof vocabularyWords[0]; options: string[]; correct: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const TOTAL_QUESTIONS = 15;

  const generateQuestions = useCallback(() => {
    const shuffled = [...vocabularyWords].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, TOTAL_QUESTIONS);
    return selected.map((word) => {
      const correctAnswer = getTranslation(word, locale);
      const wrongOptions = vocabularyWords
        .filter((w) => w.hr !== word.hr)
        .map((w) => getTranslation(w, locale))
        .filter((t, i, arr) => arr.indexOf(t) === i && t !== correctAnswer)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      const options = [correctAnswer, ...wrongOptions].sort(() => 0.5 - Math.random());
      return { word, options, correct: correctAnswer };
    });
  }, [locale]);

  const startGame = () => {
    const qs = generateQuestions();
    setQuestions(qs);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setTimeLeft(10);
    setAnswered(false);
    setSelectedOption(null);
    setGameStarted(true);
    setGameOver(false);
  };

  // Timer
  useEffect(() => {
    if (!gameStarted || answered || gameOver) return;
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setAnswered(true);
          setSelectedOption(null);
          setStreak(0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameStarted, answered, gameOver]);

  const handleAnswer = (option: string) => {
    if (answered) return;
    setSelectedOption(option);
    setAnswered(true);
    const correct = option === questions[currentIndex].correct;
    if (correct) {
      const bonusTime = Math.max(1, timeLeft);
      setScore((s) => s + bonusTime * 10);
      setStreak((s) => {
        const newStreak = s + 1;
        setBestStreak((b) => Math.max(b, newStreak));
        return newStreak;
      });
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentIndex >= questions.length - 1) {
      setGameOver(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setTimeLeft(10);
    setAnswered(false);
    setSelectedOption(null);
  };

  if (!gameStarted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-500 mb-6 shadow-2xl shadow-yellow-500/25">
          <Zap className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-3">{t("speedQuiz.title")}</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t("speedQuiz.description")}</p>
        <button onClick={startGame} className="px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:opacity-90 transition-all shadow-xl">
          {t("speedQuiz.play")}
        </button>
        <button onClick={() => router.push("/games")} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 inline mr-1" />{t("backToGames")}
        </button>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
        <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">{t("speedQuiz.gameOver")}</h1>
        <div className="glass rounded-2xl p-6 mb-8 space-y-3 max-w-sm mx-auto">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("speedQuiz.totalScore")}</span>
            <span className="font-bold text-blue-400">{score}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("speedQuiz.bestStreak")}</span>
            <span className="font-bold text-orange-400">🔥 {bestStreak}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">XP</span>
            <span className="font-bold text-green-400">+{Math.floor(score / 10)}</span>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <button onClick={startGame} className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:opacity-90 shadow-lg flex items-center gap-2">
            <RefreshCw className="w-4 h-4" /> {t("speedQuiz.playAgain")}
          </button>
          <button onClick={() => router.push("/games")} className="px-6 py-3 rounded-xl font-semibold glass hover:bg-white/10 transition-all">
            {t("backToGames")}
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 animate-fade-in">
        <button onClick={() => router.push("/games")} className="p-2 rounded-xl glass hover:bg-white/10 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground">{currentIndex + 1}/{TOTAL_QUESTIONS}</span>
          {streak > 1 && <span className="text-orange-400 font-bold">🔥 {streak}</span>}
          <span className="text-blue-400 font-bold">{score} pts</span>
        </div>
      </div>

      {/* Timer bar */}
      <div className="h-2 rounded-full bg-white/5 overflow-hidden mb-8">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${
            timeLeft > 5 ? "bg-gradient-to-r from-green-400 to-emerald-400" : "bg-gradient-to-r from-red-400 to-orange-400"
          }`}
          style={{ width: `${(timeLeft / 10) * 100}%` }}
        />
      </div>

      {/* Timer display */}
      <div className="text-center mb-2">
        <div className={`inline-flex items-center gap-1 text-3xl font-black ${timeLeft <= 3 ? "text-red-400 animate-pulse" : "text-foreground"}`}>
          <Timer className="w-7 h-7" /> {timeLeft}
        </div>
      </div>

      {/* Question word */}
      <div className="text-center mb-8">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{t("speedQuiz.translateThis")}</p>
        <h2 className="text-4xl font-black text-foreground">{q.word.hr}</h2>
        <span className="text-xs text-muted-foreground">{q.word.level}</span>
      </div>

      {/* Options */}
      <div className="grid gap-3 sm:grid-cols-2">
        {q.options.map((option, i) => {
          let style = "glass hover:bg-white/10 cursor-pointer border border-white/10";
          if (answered) {
            if (option === q.correct) {
              style = "bg-green-500/15 border-green-500/40 text-green-400";
            } else if (option === selectedOption) {
              style = "bg-red-500/15 border-red-500/40 text-red-400";
            } else {
              style = "opacity-40 border-white/5";
            }
          }
          return (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              disabled={answered}
              className={`w-full p-4 rounded-xl text-sm font-semibold transition-all ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      {answered && (
        <div className="text-center mt-6 animate-fade-in">
          {timeLeft <= 0 && !selectedOption && (
            <p className="text-sm text-red-400 font-semibold mb-2">⏰ {t("speedQuiz.timeUp")}</p>
          )}
          <button onClick={nextQuestion} className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-lg">
            {currentIndex >= questions.length - 1 ? t("speedQuiz.seeResults") : t("speedQuiz.next")}
          </button>
        </div>
      )}
    </div>
  );
}
