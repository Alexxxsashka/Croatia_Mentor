"use client";

import { useState, useCallback, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { vocabularyWords, type VocabWord } from "@/lib/vocabulary-data";
import { speakText } from "@/lib/speech";
import { ArrowLeft, RefreshCw, Trophy, Heart, Volume2, Lightbulb, Sparkles } from "lucide-react";

function getTranslation(word: typeof vocabularyWords[0], locale: string) {
  if (locale === "ru") return word.ru;
  if (locale === "ua") return word.ua;
  return word.en;
}

const HANGMAN_STAGES = [
  "", // 0 mistakes
  "  O", // head
  "  O\n  |", // body
  "  O\n /|", // left arm
  "  O\n /|\\", // right arm
  "  O\n /|\\\n /", // left leg
  "  O\n /|\\\n / \\", // dead
];

export default function HangmanPage() {
  const t = useTranslations("games");
  const locale = useLocale();
  const router = useRouter();

  // Settings
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [word, setWord] = useState<typeof vocabularyWords[0] | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [mistakes, setMistakes] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [wins, setWins] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const MAX_MISTAKES = 6;
  const TOTAL_GAMES = 5;

  const displayAlphabet = [
    "a","b","c","č","ć","d","đ","e","f","g","h","i","j","k","l","m","n","o","p","r","s","š","t","u","v","z","ž"
  ];

  // Load best streak from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("hangman_best_streak");
      if (saved) setBestStreak(Number(saved));
    } catch (_) {}
  }, []);

  const pickWord = useCallback(() => {
    let eligible = vocabularyWords.filter(
      (w) => w.hr.length >= 3 && w.hr.length <= 12 && !w.hr.includes(" ")
    );
    if (selectedLevel !== "all") {
      eligible = eligible.filter((w) => w.level.toLowerCase() === selectedLevel.toLowerCase());
    }
    if (selectedCategory !== "all") {
      eligible = eligible.filter((w) => w.category === selectedCategory);
    }
    if (eligible.length === 0) {
      eligible = vocabularyWords.filter(
        (w) => w.hr.length >= 3 && w.hr.length <= 12 && !w.hr.includes(" ")
      );
    }

    const random = eligible[Math.floor(Math.random() * eligible.length)];
    setWord(random);
    setGuessedLetters(new Set());
    setMistakes(0);
    setHintsUsed(0);
    setGameOver(false);
  }, [selectedLevel, selectedCategory]);

  const startGame = () => {
    setGameStarted(true);
    setGamesPlayed(0);
    setWins(0);
    setStreak(0);
    setShowFinalScore(false);
    pickWord();
  };

  const guessLetter = (letter: string) => {
    if (gameOver || !word || guessedLetters.has(letter)) return;
    const newGuessed = new Set(guessedLetters);
    newGuessed.add(letter);
    setGuessedLetters(newGuessed);

    const isCorrect = word.hr.toLowerCase().includes(letter);
    let nextMistakes = mistakes;
    if (!isCorrect) {
      nextMistakes = mistakes + 1;
      setMistakes(nextMistakes);
    }

    const wordLetters = word.hr.toLowerCase().split("");
    const nextIsWon = wordLetters.every((l) => newGuessed.has(l));
    const nextIsLost = nextMistakes >= MAX_MISTAKES;

    if (nextIsWon || nextIsLost) {
      setGameOver(true);
      speakText(word.hr);
      if (nextIsWon) {
        setWins((w) => w + 1);
        setStreak((s) => {
          const nextS = s + 1;
          if (nextS > bestStreak) {
            setBestStreak(nextS);
            try { localStorage.setItem("hangman_best_streak", String(nextS)); } catch (_) {}
          }
          return nextS;
        });
      } else {
        setStreak(0);
      }
      setGamesPlayed((g) => g + 1);
    }
  };

  const useHint = () => {
    if (!word || gameOver || hintsUsed >= 2) return;
    const unrevealed = word.hr.toLowerCase().split("").filter((l) => !guessedLetters.has(l));
    if (unrevealed.length > 0) {
      const hintLetter = unrevealed[Math.floor(Math.random() * unrevealed.length)];
      setHintsUsed((h) => h + 1);
      guessLetter(hintLetter);
    }
  };

  // Check win/loss (derived for rendering)
  const wordLetters = word ? word.hr.toLowerCase().split("") : [];
  const isWon = word ? wordLetters.every((l) => guessedLetters.has(l)) : false;

  const nextRound = () => {
    if (gamesPlayed >= TOTAL_GAMES) {
      const earnedXP = wins * 15;
      fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ xp: earnedXP }),
      }).catch(console.error);
      setShowFinalScore(true);
      return;
    }
    pickWord();
  };

  if (!gameStarted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center animate-fade-in space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-red-500 to-pink-500 shadow-2xl shadow-red-500/25">
          <Heart className="w-10 h-10 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold">{t("hangman.title")}</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">{t("hangman.description")}</p>
        </div>

        <div className="glass p-6 rounded-3xl border border-white/10 max-w-md mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-3 text-left">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-semibold rounded-xl px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-red-500 cursor-pointer shadow-sm"
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
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-semibold rounded-xl px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-red-500 cursor-pointer shadow-sm"
              >
                <option value="all" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">All Themes</option>
                <option value="verbs" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Verbs</option>
                <option value="adjectives" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Adjectives</option>
                <option value="food" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Food & Drink</option>
                <option value="travel" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Travel</option>
              </select>
            </div>
          </div>

          {bestStreak > 0 && (
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">🔥 Best Win Streak:</span>
              <span className="font-bold text-orange-400">{bestStreak} wins</span>
            </div>
          )}

          <button
            onClick={startGame}
            className="w-full py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-red-500 to-pink-500 text-white hover:opacity-90 transition-all shadow-xl shadow-red-500/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            {t("hangman.play")} (5 Words)
          </button>
        </div>

        <button onClick={() => router.push("/games")} className="block mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 inline mr-1" />{t("backToGames")}
        </button>
      </div>
    );
  }

  if (showFinalScore) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
        <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">{t("hangman.gameOver")}</h1>
        <p className="text-xl text-muted-foreground mb-2">
          {t("hangman.finalScore")}: <span className="text-blue-400 font-black">{wins}/{TOTAL_GAMES}</span>
        </p>
        <p className="text-sm text-green-400 font-semibold mb-8">+{wins * 20} XP</p>
        <div className="flex gap-4 justify-center">
          <button onClick={startGame} className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white hover:opacity-90 shadow-lg flex items-center gap-2">
            <RefreshCw className="w-4 h-4" /> {t("hangman.playAgain")}
          </button>
          <button onClick={() => router.push("/games")} className="px-6 py-3 rounded-xl font-semibold glass hover:bg-white/10 transition-all">
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
        <span className="text-sm font-medium text-muted-foreground">{gamesPlayed + 1}/{TOTAL_GAMES}</span>
        <div className="flex gap-1">
          {Array.from({ length: MAX_MISTAKES }).map((_, i) => (
            <Heart key={i} className={`w-4 h-4 ${i < MAX_MISTAKES - mistakes ? "text-red-400" : "text-white/10"}`} fill={i < MAX_MISTAKES - mistakes ? "currentColor" : "none"} />
          ))}
        </div>
      </div>

      {/* Hint */}
      {word && (
        <div className="text-center mb-6 animate-slide-up">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t("hangman.hint")}</p>
          <p className="text-xl font-bold text-blue-400">{getTranslation(word, locale)}</p>
          <p className="text-xs text-muted-foreground">{word.level}</p>
        </div>
      )}

      {/* Hangman figure */}
      <div className="text-center mb-6">
        <pre className="text-3xl font-mono leading-tight text-foreground inline-block min-h-[100px]">
          {HANGMAN_STAGES[mistakes]}
        </pre>
      </div>

      {/* Word display */}
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {word &&
          wordLetters.map((letter, i) => (
            <div
              key={i}
              className={`w-10 h-12 rounded-lg border-b-2 flex items-center justify-center text-xl font-bold transition-all ${
                guessedLetters.has(letter)
                  ? "border-blue-500 text-foreground"
                  : gameOver
                    ? "border-red-500 text-red-400"
                    : "border-white/20"
              }`}
            >
              {guessedLetters.has(letter) || gameOver ? letter.toUpperCase() : ""}
            </div>
          ))}
      </div>

      {/* Result overlay */}
      {gameOver && (
        <div className="text-center mb-6 animate-fade-in">
          {isWon ? (
            <p className="text-lg font-bold text-green-400 mb-1">🎉 {t("hangman.won")}</p>
          ) : (
            <p className="text-lg font-bold text-red-400 mb-1">💀 {t("hangman.lost")}</p>
          )}
          <p className="text-sm text-muted-foreground">
            {t("hangman.theWord")}: <span className="text-foreground font-semibold">{word?.hr}</span>
          </p>
          <button onClick={nextRound} className="mt-4 px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-lg">
            {gamesPlayed >= TOTAL_GAMES ? t("hangman.seeResults") : t("hangman.next")}
          </button>
        </div>
      )}

      {/* Keyboard */}
      {!gameOver && (
        <div className="space-y-4">
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={useHint}
              disabled={hintsUsed >= 2}
              className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 disabled:opacity-30 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Lightbulb className="w-4 h-4" />
              Hint ({2 - hintsUsed} left)
            </button>
            {word && (
              <button
                onClick={() => speakText(word.hr)}
                className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Audio
              </button>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 max-w-lg mx-auto">
          {displayAlphabet.map((letter) => {
            const isGuessed = guessedLetters.has(letter);
            const isInWord = word?.hr.toLowerCase().includes(letter);
            return (
              <button
                key={letter}
                onClick={() => guessLetter(letter)}
                disabled={isGuessed}
                className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
                  isGuessed
                    ? isInWord
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/10 text-red-400/50 border border-red-500/20"
                    : "glass hover:bg-white/10 border border-white/10 hover:scale-105"
                }`}
              >
                {letter.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
      )}
    </div>
  );
}
