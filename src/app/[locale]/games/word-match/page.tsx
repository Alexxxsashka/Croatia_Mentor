"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Flag } from "@/components/flag";
import { vocabularyWords, type VocabWord } from "@/lib/vocabulary-data";
import { speakText } from "@/lib/speech";
import {
  ArrowLeft,
  Trophy,
  Clock,
  MousePointerClick,
  RotateCcw,
  Sparkles,
  Volume2,
  Zap,
} from "lucide-react";

interface PairItem {
  id: number;
  wordHr: string;
  translation: string;
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function WordMatchPage() {
  const t = useTranslations("games.wordMatch");
  const tRoot = useTranslations("games");
  const locale = useLocale();
  const router = useRouter();

  // Settings
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [pairCount, setPairCount] = useState<number>(8);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  // Active game states
  const [shuffledCroatian, setShuffledCroatian] = useState<PairItem[]>([]);
  const [shuffledTranslation, setShuffledTranslation] = useState<PairItem[]>([]);
  const [selectedCroatian, setSelectedCroatian] = useState<number | null>(null);
  const [selectedTranslation, setSelectedTranslation] = useState<number | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [wrongPair, setWrongPair] = useState<{ croatian: number | null; translation: number | null }>({
    croatian: null,
    translation: null,
  });
  const [gameComplete, setGameComplete] = useState(false);
  const [bestTime, setBestTime] = useState<number | null>(null);

  const getTranslation = useCallback((word: VocabWord) => {
    if (locale === "ru") return word.ru;
    if (locale === "ua") return word.ua;
    return word.en;
  }, [locale]);

  // Load high score from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`wordmatch_besttime_${pairCount}`);
      if (saved) setBestTime(Number(saved));
    } catch (_) {}
  }, [pairCount]);

  const initGame = useCallback(() => {
    let pool = [...vocabularyWords];
    if (selectedLevel !== "all") {
      pool = pool.filter((w) => w.level.toLowerCase() === selectedLevel.toLowerCase());
    }
    if (selectedCategory !== "all") {
      pool = pool.filter((w) => w.category === selectedCategory);
    }
    if (pool.length < pairCount) pool = [...vocabularyWords];

    const chosen = [...pool].sort(() => 0.5 - Math.random()).slice(0, pairCount);
    const items: PairItem[] = chosen.map((w, idx) => ({
      id: idx + 1,
      wordHr: w.hr,
      translation: getTranslation(w),
    }));

    setShuffledCroatian(shuffleArray(items));
    setShuffledTranslation(shuffleArray(items));
    setSelectedCroatian(null);
    setSelectedTranslation(null);
    setMatchedIds(new Set());
    setMoves(0);
    setSeconds(0);
    setWrongPair({ croatian: null, translation: null });
    setGameComplete(false);
    setGameStarted(true);
  }, [selectedLevel, selectedCategory, pairCount, getTranslation]);

  useEffect(() => {
    if (!gameStarted || gameComplete) return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [gameStarted, gameComplete]);

  const selectCroatian = (id: number) => {
    if (wrongPair.croatian !== null || wrongPair.translation !== null) return;
    setSelectedCroatian(id);

    // Speak word
    const item = shuffledCroatian.find((w) => w.id === id);
    if (item) speakText(item.wordHr);

    if (selectedTranslation !== null) {
      setMoves((m) => m + 1);
      if (id === selectedTranslation) {
        const newMatched = new Set(matchedIds);
        newMatched.add(id);
        setMatchedIds(newMatched);
        setSelectedCroatian(null);
        setSelectedTranslation(null);
        if (newMatched.size === pairCount) {
          handleWin();
        }
      } else {
        setWrongPair({ croatian: id, translation: selectedTranslation });
        setTimeout(() => {
          setSelectedCroatian(null);
          setSelectedTranslation(null);
          setWrongPair({ croatian: null, translation: null });
        }, 700);
      }
    }
  };

  const selectTranslation = (id: number) => {
    if (wrongPair.croatian !== null || wrongPair.translation !== null) return;
    setSelectedTranslation(id);

    if (selectedCroatian !== null) {
      setMoves((m) => m + 1);
      if (id === selectedCroatian) {
        const newMatched = new Set(matchedIds);
        newMatched.add(id);
        setMatchedIds(newMatched);

        // Speak word
        const item = shuffledCroatian.find((w) => w.id === id);
        if (item) speakText(item.wordHr);

        setSelectedCroatian(null);
        setSelectedTranslation(null);
        if (newMatched.size === pairCount) {
          handleWin();
        }
      } else {
        setWrongPair({ croatian: selectedCroatian, translation: id });
        setTimeout(() => {
          setSelectedCroatian(null);
          setSelectedTranslation(null);
          setWrongPair({ croatian: null, translation: null });
        }, 700);
      }
    }
  };

  const handleWin = () => {
    setGameComplete(true);
    const earnedXP = pairCount * 5;
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ xp: earnedXP }),
    }).catch(console.error);

    // Save best time
    if (!bestTime || seconds < bestTime) {
      setBestTime(seconds);
      try {
        localStorage.setItem(`wordmatch_besttime_${pairCount}`, String(seconds));
      } catch (_) {}
    }
  };

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  // SETUP SCREEN
  if (!gameStarted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 animate-fade-in space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-yellow-400 shadow-2xl shadow-orange-500/25">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-foreground">{t("title")}</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">{t("instructions")}</p>
        </div>

        {/* Options */}
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-5 max-w-md mx-auto">
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Pairs Count
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[6, 8, 12, 16].map((num) => (
                <button
                  key={num}
                  onClick={() => setPairCount(num)}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all text-center ${
                    pairCount === num
                      ? "bg-orange-500 text-white border-orange-400 shadow-md"
                      : "bg-white/5 border-white/10 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {num} pairs
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full bg-slate-900 border border-white/10 text-xs font-semibold rounded-xl px-3 py-2 text-foreground focus:outline-none focus:border-orange-500"
              >
                <option value="all">All Levels</option>
                <option value="A1">A1 Beginner</option>
                <option value="A2">A2 Elementary</option>
                <option value="B1">B1 Intermediate</option>
                <option value="B2">B2 Upper Int</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-900 border border-white/10 text-xs font-semibold rounded-xl px-3 py-2 text-foreground focus:outline-none focus:border-orange-500"
              >
                <option value="all">All Themes</option>
                <option value="verbs">Verbs</option>
                <option value="adjectives">Adjectives</option>
                <option value="food">Food & Drink</option>
                <option value="travel">Travel</option>
                <option value="phrases">Phrases</option>
              </select>
            </div>
          </div>

          {bestTime && (
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">🏆 Personal Best ({pairCount} pairs):</span>
              <span className="font-bold text-yellow-400 font-mono">{formatTime(bestTime)}</span>
            </div>
          )}

          <button
            onClick={initGame}
            className="w-full py-3.5 rounded-2xl text-base font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:opacity-90 transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-white" />
            Start Match Game ({pairCount} Pairs)
          </button>
        </div>

        <button onClick={() => router.push("/games")} className="block mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 inline mr-1" />{tRoot("backToGames") || "Back"}
        </button>
      </div>
    );
  }

  // WIN SCREEN
  if (gameComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl">
          <Trophy className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold">{t("congratulations")} 🎉</h1>
        <p className="text-muted-foreground text-sm">{t("allMatched")}</p>
        
        <div className="glass rounded-2xl p-6 max-w-sm mx-auto flex justify-around">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">{t("timeElapsed")}</p>
            <p className="text-2xl font-black text-blue-400">{formatTime(seconds)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">{t("moves")}</p>
            <p className="text-2xl font-black text-orange-400">{moves}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">XP</p>
            <p className="text-2xl font-black text-emerald-400">+{pairCount * 5}</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={initGame}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-all shadow-lg cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            {t("tryAgain")}
          </button>
          <button
            onClick={() => setGameStarted(false)}
            className="px-6 py-3 rounded-xl font-semibold glass hover:bg-white/10 transition-all cursor-pointer"
          >
            Change Settings
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE GAME
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setGameStarted(false)}
            className="p-2 rounded-xl glass hover:bg-white/10 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">{t("title")} ({pairCount} pairs)</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 glass px-3.5 py-1.5 rounded-xl text-xs">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="font-mono font-bold">{formatTime(seconds)}</span>
          </div>
          <div className="flex items-center gap-2 glass px-3.5 py-1.5 rounded-xl text-xs">
            <MousePointerClick className="w-4 h-4 text-orange-400" />
            <span className="font-bold">{moves} moves</span>
          </div>
        </div>
      </div>

      {/* Game Board */}
      <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
        {/* Croatian words */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-bold text-center text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <Flag countryCode="hr" className="w-4 h-3 rounded-[2px]" />
            Hrvatski
          </h3>
          {shuffledCroatian.map((word) => {
            const isMatched = matchedIds.has(word.id);
            const isSelected = selectedCroatian === word.id;
            const isWrong = wrongPair.croatian === word.id;

            return (
              <button
                key={`hr-${word.id}`}
                onClick={() => !isMatched && selectCroatian(word.id)}
                disabled={isMatched}
                className={`w-full p-4 rounded-2xl text-left font-semibold text-sm transition-all duration-200 border flex items-center justify-between ${
                  isMatched
                    ? "bg-green-500/10 border-green-500/30 text-green-400 opacity-60 cursor-default"
                    : isWrong
                      ? "bg-red-500/10 border-red-500/40 text-red-400 animate-pulse"
                      : isSelected
                        ? "bg-blue-500/20 border-blue-500/60 text-blue-400 scale-[1.01] shadow-lg shadow-blue-500/20"
                        : "glass hover:bg-white/10 cursor-pointer border-white/10"
                }`}
              >
                <span>{word.wordHr}</span>
                <Volume2 className="w-4 h-4 opacity-40 hover:opacity-100" />
              </button>
            );
          })}
        </div>

        {/* Translation words */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-bold text-center text-purple-400 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <Flag countryCode={locale} className="w-4 h-3 rounded-[2px]" />
            {locale === "ua" ? "Переклад (Укр)" : locale === "ru" ? "Перевод (Рус)" : "Translation (Eng)"}
          </h3>
          {shuffledTranslation.map((word) => {
            const isMatched = matchedIds.has(word.id);
            const isSelected = selectedTranslation === word.id;
            const isWrong = wrongPair.translation === word.id;

            return (
              <button
                key={`en-${word.id}`}
                onClick={() => !isMatched && selectTranslation(word.id)}
                disabled={isMatched}
                className={`w-full p-4 rounded-2xl text-left font-semibold text-sm transition-all duration-200 border ${
                  isMatched
                    ? "bg-green-500/10 border-green-500/30 text-green-400 opacity-60 cursor-default"
                    : isWrong
                      ? "bg-red-500/10 border-red-500/40 text-red-400 animate-pulse"
                      : isSelected
                        ? "bg-purple-500/20 border-purple-500/60 text-purple-400 scale-[1.01] shadow-lg shadow-purple-500/20"
                        : "glass hover:bg-white/10 cursor-pointer border-white/10"
                }`}
              >
                {word.translation}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
