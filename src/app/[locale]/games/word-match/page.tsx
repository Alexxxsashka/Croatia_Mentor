"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Flag } from "@/components/flag";
import {
  ArrowLeft,
  Trophy,
  Clock,
  MousePointerClick,
  RotateCcw,
} from "lucide-react";

interface WordPair {
  croatian: string;
  translation: {
    en: string;
    ru: string;
    ua: string;
  };
  id: number;
}

const wordPairs: WordPair[] = [
  { id: 1, croatian: "Kuća", translation: { en: "House", ru: "Дом", ua: "Будинок" } },
  { id: 2, croatian: "Pas", translation: { en: "Dog", ru: "Собака", ua: "Собака" } },
  { id: 3, croatian: "Mačka", translation: { en: "Cat", ru: "Кошка", ua: "Кішка" } },
  { id: 4, croatian: "Knjiga", translation: { en: "Book", ru: "Книга", ua: "Книга" } },
  { id: 5, croatian: "Voda", translation: { en: "Water", ru: "Вода", ua: "Вода" } },
  { id: 6, croatian: "Sunce", translation: { en: "Sun", ru: "Солнце", ua: "Сонце" } },
  { id: 7, croatian: "More", translation: { en: "Sea", ru: "Море", ua: "Море" } },
  { id: 8, croatian: "Škola", translation: { en: "School", ru: "Школа", ua: "Школа" } },
];
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

  const [shuffledCroatian, setShuffledCroatian] = useState<WordPair[]>(() => shuffleArray(wordPairs));
  const [shuffledEnglish, setShuffledEnglish] = useState<WordPair[]>(() => shuffleArray(wordPairs));
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

  const initGame = () => {
    setShuffledCroatian(shuffleArray(wordPairs));
    setShuffledEnglish(shuffleArray(wordPairs));
    setSelectedCroatian(null);
    setSelectedEnglish(null);
    setMatchedIds(new Set());
    setMoves(0);
    setSeconds(0);
    setWrongPair({ croatian: null, english: null });
    setGameComplete(false);
  };

  useEffect(() => {
    if (gameComplete) return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [gameComplete]);

  const selectCroatian = (id: number) => {
    if (wrongPair.croatian !== null || wrongPair.english !== null) return;
    setSelectedCroatian(id);
    if (selectedEnglish !== null) {
      setMoves((m) => m + 1);
      if (id === selectedEnglish) {
        const newMatched = new Set(matchedIds);
        newMatched.add(id);
        setMatchedIds(newMatched);
        setSelectedCroatian(null);
        setSelectedEnglish(null);
        if (newMatched.size === wordPairs.length) {
          setGameComplete(true);
        }
      } else {
        setWrongPair({
          croatian: id,
          english: selectedEnglish,
        });
        setTimeout(() => {
          setSelectedCroatian(null);
          setSelectedEnglish(null);
          setWrongPair({ croatian: null, english: null });
        }, 800);
      }
    }
  };

  const selectEnglish = (id: number) => {
    if (wrongPair.croatian !== null || wrongPair.english !== null) return;
    setSelectedEnglish(id);
    if (selectedCroatian !== null) {
      setMoves((m) => m + 1);
      if (id === selectedCroatian) {
        const newMatched = new Set(matchedIds);
        newMatched.add(id);
        setMatchedIds(newMatched);
        setSelectedCroatian(null);
        setSelectedEnglish(null);
        if (newMatched.size === wordPairs.length) {
          setGameComplete(true);
        }
      } else {
        setWrongPair({
          croatian: selectedCroatian,
          english: id,
        });
        setTimeout(() => {
          setSelectedCroatian(null);
          setSelectedEnglish(null);
          setWrongPair({ croatian: null, english: null });
        }, 800);
      }
    }
  };

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
            {tRoot("backToGames") || "Back"}
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
          <h3 className="text-sm font-semibold text-center text-blue-400 mb-4 flex items-center justify-center gap-1.5">
            <Flag countryCode="hr" className="w-5 h-3.5 rounded-[2px]" />
            Hrvatski
          </h3>
          {shuffledCroatian.map((word) => {
            const isMatched = matchedIds.has(word.id);
            const isSelected = selectedCroatian === word.id;
            const isWrong = wrongPair.croatian === word.id;

            return (
              <button
                key={`hr-${word.id}`}
                onClick={() =>
                  !isMatched && selectCroatian(word.id)
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

        {/* Translation words */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-center text-purple-400 mb-4 flex items-center justify-center gap-1.5">
            <Flag countryCode={locale} className="w-5 h-3.5 rounded-[2px]" />
            {locale === "ua" ? "Переклад (Укр)" : locale === "ru" ? "Перевод (Рус)" : "Translation (Eng)"}
          </h3>
          {shuffledEnglish.map((word) => {
            const isMatched = matchedIds.has(word.id);
            const isSelected = selectedEnglish === word.id;
            const isWrong = wrongPair.english === word.id;

            return (
              <button
                key={`en-${word.id}`}
                onClick={() =>
                  !isMatched && selectEnglish(word.id)
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
                {word.translation[locale as "en" | "ru" | "ua"] || word.translation.en}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
