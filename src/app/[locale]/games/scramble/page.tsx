"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { vocabularyWords, type VocabWord } from "@/lib/vocabulary-data";
import { speakText } from "@/lib/speech";
import { ArrowLeft, RefreshCw, Timer, Trophy, Sparkles, Volume2, Lightbulb, Zap } from "lucide-react";

function shuffleLetters(word: string): string[] {
  const letters = word.split("");
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  if (letters.join("") === word && word.length > 1) {
    [letters[0], letters[1]] = [letters[1], letters[0]];
  }
  return letters;
}

function getTranslation(word: typeof vocabularyWords[0], locale: string) {
  if (locale === "ru") return word.ru;
  if (locale === "ua") return word.ua;
  return word.en;
}

export default function ScramblePage() {
  const t = useTranslations("games");
  const locale = useLocale();
  const router = useRouter();

  // Settings
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [words, setWords] = useState<typeof vocabularyWords>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambled, setScrambled] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const [availableLetters, setAvailableLetters] = useState<{ letter: string; used: boolean }[]>([]);
  const [score, setScore] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  const TOTAL_ROUNDS = 8;

  useEffect(() => {
    try {
      const saved = localStorage.getItem("scramble_best_score");
      if (saved) setBestScore(Number(saved));
    } catch (_) {}
  }, []);

  const initRound = useCallback((wordList: typeof vocabularyWords, idx: number) => {
    if (idx >= wordList.length || idx >= TOTAL_ROUNDS) {
      setGameOver(true);
      return;
    }
    const word = wordList[idx];
    const shuffled = shuffleLetters(word.hr.toLowerCase());
    setScrambled(shuffled);
    setAvailableLetters(shuffled.map((l) => ({ letter: l, used: false })));
    setUserAnswer([]);
    setShowResult(false);
    setIsCorrect(false);
    setTimeLeft(30);
  }, []);

  const startGame = () => {
    let pool = [...vocabularyWords].filter(
      (w) => w.hr.length >= 3 && w.hr.length <= 10 && !w.hr.includes(" ")
    );
    if (selectedLevel !== "all") {
      pool = pool.filter((w) => w.level.toLowerCase() === selectedLevel.toLowerCase());
    }
    if (selectedCategory !== "all") {
      pool = pool.filter((w) => w.category === selectedCategory);
    }
    if (pool.length === 0) {
      pool = [...vocabularyWords].filter(
        (w) => w.hr.length >= 3 && w.hr.length <= 10 && !w.hr.includes(" ")
      );
    }

    const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, TOTAL_ROUNDS);
    setWords(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setTotalAttempts(0);
    setGameOver(false);
    setGameStarted(true);
    initRound(shuffled, 0);
  };

  // Timer
  useEffect(() => {
    if (!gameStarted || showResult || gameOver) return;
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setShowResult(true);
          setIsCorrect(false);
          setTotalAttempts((p) => p + 1);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameStarted, showResult, gameOver]);

  const addLetter = (index: number) => {
    if (showResult) return;
    const newAvailable = [...availableLetters];
    newAvailable[index].used = true;
    setAvailableLetters(newAvailable);
    const newAnswer = [...userAnswer, availableLetters[index].letter];
    setUserAnswer(newAnswer);

    // Check if complete
    if (newAnswer.length === scrambled.length) {
      const answerStr = newAnswer.join("");
      const target = words[currentIndex].hr.toLowerCase();
      const correct = answerStr === target;
      setIsCorrect(correct);
      setShowResult(true);
      setTotalAttempts((p) => p + 1);
      if (correct) {
        setScore((s) => {
          const nextS = s + 1;
          if (nextS > bestScore) {
            setBestScore(nextS);
            try { localStorage.setItem("scramble_best_score", String(nextS)); } catch (_) {}
          }
          return nextS;
        });
        speakText(words[currentIndex].hr);
      }
    }
  };

  const removeLetter = (index: number) => {
    if (showResult) return;
    const letterToRemove = userAnswer[index];
    const newAnswer = [...userAnswer];
    newAnswer.splice(index, 1);
    setUserAnswer(newAnswer);

    const newAvailable = [...availableLetters];
    const matchIdx = newAvailable.findIndex((l) => l.letter === letterToRemove && l.used);
    if (matchIdx >= 0) newAvailable[matchIdx].used = false;
    setAvailableLetters(newAvailable);
  };

  const useHint = () => {
    if (showResult || !words[currentIndex]) return;
    const targetLetters = words[currentIndex].hr.toLowerCase().split("");
    const nextMissingIdx = userAnswer.length;
    if (nextMissingIdx >= targetLetters.length) return;

    const neededLetter = targetLetters[nextMissingIdx];
    const matchIdx = availableLetters.findIndex((l) => l.letter === neededLetter && !l.used);
    if (matchIdx >= 0) {
      addLetter(matchIdx);
    }
  };

  const nextRound = () => {
    const nextIdx = currentIndex + 1;
    setCurrentIndex(nextIdx);
    initRound(words, nextIdx);
  };

  const currentWord = words[currentIndex];

  if (!gameStarted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center animate-fade-in space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 shadow-2xl shadow-emerald-500/25">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold">{t("scramble.title")}</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">{t("scramble.description")}</p>
        </div>

        <div className="glass p-6 rounded-3xl border border-white/10 max-w-md mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-3 text-left">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-semibold rounded-xl px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer shadow-sm"
              >
                <option value="all" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">All Levels</option>
                <option value="A1" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">A1 Beginner</option>
                <option value="A2" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">A2 Elementary</option>
                <option value="B1" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">B1 Intermediate</option>
                <option value="B2" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">B2 Upper Int</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-semibold rounded-xl px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer shadow-sm"
              >
                <option value="all" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">All Themes</option>
                <option value="verbs" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Verbs</option>
                <option value="adjectives" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Adjectives</option>
                <option value="food" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Food & Drink</option>
                <option value="travel" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Travel</option>
              </select>
            </div>
          </div>

          {bestScore > 0 && (
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">🏆 Best High Score:</span>
              <span className="font-bold text-emerald-400">{bestScore}/{TOTAL_ROUNDS}</span>
            </div>
          )}

          <button
            onClick={startGame}
            className="w-full py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-white" />
            {t("scramble.play")} (8 Words)
          </button>
        </div>

        <button onClick={() => router.push("/games")} className="block mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 inline mr-1" />{t("backToGames")}
        </button>
      </div>
    );
  }

  if (gameOver) {
    const earnedXP = score * 15;
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ xp: earnedXP }),
    }).catch(console.error);

    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in space-y-6">
        <Trophy className="w-16 h-16 text-yellow-400 mx-auto" />
        <h1 className="text-3xl font-bold mb-2">{t("scramble.gameOver")}</h1>
        <p className="text-xl text-muted-foreground mb-2">
          {t("scramble.finalScore")}: <span className="text-blue-400 font-black">{score}/{totalAttempts}</span>
        </p>
        <p className="text-sm text-green-400 font-semibold mb-8">+{earnedXP} XP</p>
        <div className="flex gap-4 justify-center">
          <button onClick={startGame} className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 transition-all shadow-lg flex items-center gap-2 cursor-pointer">
            <RefreshCw className="w-4 h-4" /> {t("scramble.playAgain")}
          </button>
          <button onClick={() => router.push("/games")} className="px-6 py-3 rounded-xl font-semibold glass hover:bg-white/10 transition-all cursor-pointer">
            {t("backToGames")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 animate-fade-in">
        <button onClick={() => router.push("/games")} className="p-2 rounded-xl glass hover:bg-white/10 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">
            {currentIndex + 1}/{Math.min(words.length, TOTAL_ROUNDS)}
          </span>
          <div className={`flex items-center gap-1 text-sm font-bold ${timeLeft <= 10 ? "text-red-400" : "text-blue-400"}`}>
            <Timer className="w-4 h-4" /> {timeLeft}s
          </div>
          <span className="text-sm font-bold text-green-400">{score} ✓</span>
        </div>
      </div>

      {/* Hint: translation */}
      {currentWord && (
        <div className="text-center mb-8 animate-slide-up">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{t("scramble.hint")}</p>
          <p className="text-2xl font-bold text-blue-400">{getTranslation(currentWord, locale)}</p>
          <p className="text-xs text-muted-foreground mt-1">{currentWord.level} • {currentWord.category}</p>
        </div>
      )}

      {/* User answer slots */}
      <div className="flex justify-center gap-2 mb-8 min-h-[56px] flex-wrap">
        {scrambled.map((_, i) => (
          <button
            key={i}
            onClick={() => i < userAnswer.length && removeLetter(i)}
            className={`w-11 h-11 rounded-xl border-2 text-lg font-bold flex items-center justify-center transition-all ${
              i < userAnswer.length
                ? showResult
                  ? isCorrect
                    ? "bg-green-500/20 border-green-500/50 text-green-400"
                    : "bg-red-500/20 border-red-500/50 text-red-400"
                  : "bg-blue-500/10 border-blue-500/30 text-foreground cursor-pointer hover:bg-blue-500/20"
                : "border-white/10 border-dashed"
            }`}
          >
            {userAnswer[i] || ""}
          </button>
        ))}
      </div>

      {/* Available letters */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {availableLetters.map((item, i) => (
          <button
            key={i}
            onClick={() => !item.used && addLetter(i)}
            disabled={item.used || showResult}
            className={`w-12 h-12 rounded-xl text-lg font-bold transition-all shadow-lg ${
              item.used
                ? "opacity-20 cursor-not-allowed bg-white/5 border border-white/5"
                : "glass hover:bg-white/10 hover:scale-105 active:scale-95 cursor-pointer border border-white/10"
            }`}
          >
            {item.letter}
          </button>
        ))}
      </div>

      {/* Power-ups */}
      {!showResult && (
        <div className="flex justify-center items-center gap-3 mb-6">
          <button
            onClick={useHint}
            className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Lightbulb className="w-4 h-4" />
            Hint (Fill Next Letter)
          </button>
          {currentWord && (
            <button
              onClick={() => speakText(currentWord.hr)}
              className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              Listen Word
            </button>
          )}
        </div>
      )}

      {/* Result and next */}
      {showResult && (
        <div className="text-center animate-fade-in space-y-3">
          {isCorrect ? (
            <p className="text-lg font-bold text-green-400">✓ {t("scramble.correct")}</p>
          ) : (
            <div>
              <p className="text-lg font-bold text-red-400">✗ {t("scramble.incorrect")}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {t("scramble.correctWord")}: <span className="text-foreground font-semibold">{currentWord?.hr}</span>
              </p>
            </div>
          )}
          <button
            onClick={nextRound}
            className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-lg"
          >
            {t("scramble.next")}
          </button>
        </div>
      )}
    </div>
  );
}
