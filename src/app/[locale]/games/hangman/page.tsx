"use client";

import { useState, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { vocabularyWords } from "@/lib/vocabulary-data";
import { ArrowLeft, RefreshCw, Trophy, Heart } from "lucide-react";

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

  const [word, setWord] = useState<typeof vocabularyWords[0] | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [mistakes, setMistakes] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [wins, setWins] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const MAX_MISTAKES = 6;
  const TOTAL_GAMES = 6;

  const displayAlphabet = [
    "a","b","c","č","ć","d","đ","e","f","g","h","i","j","k","l","m","n","o","p","r","s","š","t","u","v","z","ž"
  ];

  const pickWord = useCallback(() => {
    const eligible = vocabularyWords.filter(
      (w) => w.hr.length >= 3 && w.hr.length <= 12 && !w.hr.includes(" ")
    );
    const random = eligible[Math.floor(Math.random() * eligible.length)];
    setWord(random);
    setGuessedLetters(new Set());
    setMistakes(0);
    setGameOver(false);
  }, []);

  const startGame = () => {
    setGameStarted(true);
    setGamesPlayed(0);
    setWins(0);
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
      if (nextIsWon) setWins((w) => w + 1);
      setGamesPlayed((g) => g + 1);
    }
  };

  // Check win/loss (derived for rendering)
  const wordLetters = word ? word.hr.toLowerCase().split("") : [];
  const isWon = word ? wordLetters.every((l) => guessedLetters.has(l)) : false;


  const nextRound = () => {
    if (gamesPlayed >= TOTAL_GAMES) {
      setShowFinalScore(true);
      return;
    }
    pickWord();
  };

  if (!gameStarted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-red-500 to-pink-500 mb-6 shadow-2xl shadow-red-500/25">
          <Heart className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-3">{t("hangman.title")}</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t("hangman.description")}</p>
        <button onClick={startGame} className="px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white hover:opacity-90 transition-all shadow-xl">
          {t("hangman.play")}
        </button>
        <button onClick={() => router.push("/games")} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
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
      )}
    </div>
  );
}
