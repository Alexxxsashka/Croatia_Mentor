"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import {
  ArrowLeft,
  Trophy,
  Clock,
  MousePointerClick,
  RotateCcw,
} from "lucide-react";

interface WordPair {
  croatian: string;
  english: string;
  id: number;
}

const wordPairs: WordPair[] = [
  { id: 1, croatian: "Kuća", english: "House" },
  { id: 2, croatian: "Pas", english: "Dog" },
  { id: 3, croatian: "Mačka", english: "Cat" },
  { id: 4, croatian: "Knjiga", english: "Book" },
  { id: 5, croatian: "Voda", english: "Water" },
  { id: 6, croatian: "Sunce", english: "Sun" },
  { id: 7, croatian: "More", english: "Sea" },
  { id: 8, croatian: "Škola", english: "School" },
];

export default function WordMatchPage() {
  const t = useTranslations("games.wordMatch");
  const router = useRouter();

  const [shuffledCroatian, setShuffledCroatian] = useState<WordPair[]>([]);
  const [shuffledEnglish, setShuffledEnglish] = useState<WordPair[]>([]);
  const [selectedCroatian, setSelectedCroatian] = useState<number | null>(null);
  const [selectedEnglish, setSelectedEnglish] = useState<number | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [wrongPair, setWrongPair] = useState<{
    croatian: number | null;
    english: number | null;
  }>({ croatian: null, english: null });
  const [gameComplete, setGameComplete] = useState(false);

  const shuffle = useCallback(<T,>(arr: T[]): T[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const initGame = useCallback(() => {
    setShuffledCroatian(shuffle(wordPairs));
    setShuffledEnglish(shuffle(wordPairs));
    setSelectedCroatian(null);
    setSelectedEnglish(null);
    setMatchedIds(new Set());
    setMoves(0);
    setSeconds(0);
    setWrongPair({ croatian: null, english: null });
    setGameComplete(false);
  }, [shuffle]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  useEffect(() => {
    if (gameComplete) return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [gameComplete]);

  useEffect(() => {
    if (selectedCroatian !== null && selectedEnglish !== null) {
      setMoves((m) => m + 1);
      if (selectedCroatian === selectedEnglish) {
        const newMatched = new Set(matchedIds);
        newMatched.add(selectedCroatian);
        setMatchedIds(newMatched);
        setSelectedCroatian(null);
        setSelectedEnglish(null);
        if (newMatched.size === wordPairs.length) {
          setGameComplete(true);
        }
      } else {
        setWrongPair({
          croatian: selectedCroatian,
          english: selectedEnglish,
        });
        setTimeout(() => {
          setSelectedCroatian(null);
          setSelectedEnglish(null);
          setWrongPair({ croatian: null, english: null });
        }, 800);
      }
    }
  }, [selectedCroatian, selectedEnglish, matchedIds]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  if (gameComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-6 shadow-2xl">
          <Trophy className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2">{t("congratulations")} 🎉</h1>
        <p className="text-muted-foreground mb-8">{t("allMatched")}</p>
        <div className="glass rounded-2xl p-6 mb-8 inline-flex gap-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{t("timeElapsed")}</p>
            <p className="text-2xl font-bold">{formatTime(seconds)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{t("moves")}</p>
            <p className="text-2xl font-bold">{moves}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={initGame}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-all shadow-lg"
          >
            <RotateCcw className="w-4 h-4" />
            {t("tryAgain")}
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
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/games")}
            className="p-2 rounded-xl glass hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">{t("title")}</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-mono font-bold">
              {formatTime(seconds)}
            </span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
            <MousePointerClick className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-bold">{moves}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center mb-8">
        {t("instructions")}
      </p>

      {/* Game Board */}
      <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
        {/* Croatian words */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-center text-blue-400 mb-4">
            🇭🇷 Hrvatski
          </h3>
          {shuffledCroatian.map((word) => {
            const isMatched = matchedIds.has(word.id);
            const isSelected = selectedCroatian === word.id;
            const isWrong = wrongPair.croatian === word.id;

            return (
              <button
                key={`hr-${word.id}`}
                onClick={() =>
                  !isMatched && setSelectedCroatian(word.id)
                }
                disabled={isMatched}
                className={`w-full p-4 rounded-xl text-left font-medium transition-all duration-300 ${
                  isMatched
                    ? "bg-green-500/10 border border-green-500/30 text-green-400 opacity-60"
                    : isWrong
                      ? "bg-red-500/10 border border-red-500/30 text-red-400 animate-pulse"
                      : isSelected
                        ? "bg-blue-500/10 border border-blue-500/50 text-blue-400 scale-[1.02]"
                        : "glass hover:bg-white/10 cursor-pointer"
                }`}
              >
                {word.croatian}
              </button>
            );
          })}
        </div>

        {/* English words */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-center text-purple-400 mb-4">
            🇬🇧 English
          </h3>
          {shuffledEnglish.map((word) => {
            const isMatched = matchedIds.has(word.id);
            const isSelected = selectedEnglish === word.id;
            const isWrong = wrongPair.english === word.id;

            return (
              <button
                key={`en-${word.id}`}
                onClick={() =>
                  !isMatched && setSelectedEnglish(word.id)
                }
                disabled={isMatched}
                className={`w-full p-4 rounded-xl text-left font-medium transition-all duration-300 ${
                  isMatched
                    ? "bg-green-500/10 border border-green-500/30 text-green-400 opacity-60"
                    : isWrong
                      ? "bg-red-500/10 border border-red-500/30 text-red-400 animate-pulse"
                      : isSelected
                        ? "bg-purple-500/10 border border-purple-500/50 text-purple-400 scale-[1.02]"
                        : "glass hover:bg-white/10 cursor-pointer"
                }`}
              >
                {word.english}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
