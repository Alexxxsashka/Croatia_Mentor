"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { fillBlanksData, type BlankSentence } from "@/lib/fill-blanks-data";
import { speakText } from "@/lib/speech";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  Volume2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function FillBlanksPage() {
  const t = useTranslations("games.fillBlanks");
  const tRoot = useTranslations("games");
  const locale = useLocale();
  const router = useRouter();

  // Settings
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [gameStarted, setGameStarted] = useState(false);

  const [activeSentences, setActiveSentences] = useState<BlankSentence[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const QUESTIONS_PER_GAME = 10;

  useEffect(() => {
    try {
      const saved = localStorage.getItem("fillblanks_best_score");
      if (saved) setBestScore(Number(saved));
    } catch (_) {}
  }, []);

  const getSentenceTranslation = useCallback((s: BlankSentence) => {
    if (locale === "ru") return s.translation.ru;
    if (locale === "ua") return s.translation.ua;
    return s.translation.en;
  }, [locale]);

  const startNewGame = useCallback(() => {
    let pool = [...fillBlanksData];
    if (selectedLevel !== "all") {
      pool = pool.filter((s) => s.level.toLowerCase() === selectedLevel.toLowerCase());
    }
    if (selectedCategory !== "all") {
      pool = pool.filter((s) => s.category === selectedCategory);
    }
    if (pool.length < QUESTIONS_PER_GAME) {
      pool = [...fillBlanksData];
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, QUESTIONS_PER_GAME);
    setActiveSentences(shuffled);
    setAnswers({});
    setChecked(false);
    setScore(0);
    setGameStarted(true);
  }, [selectedLevel, selectedCategory]);

  const handleSelect = (index: number, option: string) => {
    if (checked) return;
    setAnswers({ ...answers, [index]: option });
  };

  const checkAll = () => {
    let correct = 0;
    activeSentences.forEach((s, i) => {
      if (answers[i] === s.correctAnswer) correct++;
    });
    setScore(correct);
    setChecked(true);

    const earnedXP = correct * 10;
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ xp: earnedXP }),
    }).catch(console.error);

    if (correct > bestScore) {
      setBestScore(correct);
      try { localStorage.setItem("fillblanks_best_score", String(correct)); } catch (_) {}
    }
  };

  const allAnswered = Object.keys(answers).length === activeSentences.length;

  // SETUP SCREEN
  if (!gameStarted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center animate-fade-in space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/25">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold">{t("title")}</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">{t("instructions")}</p>
        </div>

        <div className="glass p-6 rounded-3xl border border-white/10 max-w-md mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-3 text-left">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-semibold rounded-xl px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-purple-500 cursor-pointer shadow-sm"
              >
                <option value="all" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">All Levels</option>
                <option value="A1" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">A1 Beginner</option>
                <option value="A2" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">A2 Elementary</option>
                <option value="B1" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">B1 Intermediate</option>
                <option value="B2" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">B2 Upper Int</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Grammar Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-semibold rounded-xl px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-purple-500 cursor-pointer shadow-sm"
              >
                <option value="all" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">All Grammar</option>
                <option value="verbs" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Verbs & Present</option>
                <option value="pronouns" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Pronouns & Questions</option>
                <option value="cases" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Cases & Declensions</option>
                <option value="prepositions" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Prepositions</option>
              </select>
            </div>
          </div>

          {bestScore > 0 && (
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">🏆 Best High Score:</span>
              <span className="font-bold text-purple-400">{bestScore}/{QUESTIONS_PER_GAME}</span>
            </div>
          )}

          <button
            onClick={startNewGame}
            className="w-full py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-all shadow-xl shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-white" />
            {locale === "ua" ? "Почати вставку слів (10 речень)" : locale === "ru" ? "Начать вставку слов (10 предложений)" : "Start Fill Blanks (10 Sentences)"}
          </button>
        </div>

        <button onClick={() => router.push("/games")} className="block mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 inline mr-1" />{tRoot("backToGames") || "Back"}
        </button>
      </div>
    );
  }

  // GAME OVER RESULTS
  if (checked) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 animate-fade-in">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => setGameStarted(false)}
            className="p-2 rounded-xl glass hover:bg-white/10 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">{t("title")}</h1>
        </div>

        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-2xl">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold">{t("complete")} 🎉</h2>
          <p className="text-xl font-black text-purple-400">
            {score} / {activeSentences.length} ({score * 10} XP)
          </p>
        </div>

        {/* Review answers */}
        <div className="space-y-3">
          {activeSentences.map((sentence, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === sentence.correctAnswer;
            const fullSentenceText = sentence.text.replace("___", sentence.correctAnswer);

            return (
              <div
                key={sentence.id || i}
                className={`glass rounded-2xl p-4 border transition-all ${
                  isCorrect ? "border-green-500/30 bg-green-500/5" : "border-red-500/30 bg-red-500/5"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                    )}
                    <div>
                      <p className="font-bold text-foreground">
                        {sentence.text.replace(
                          "___",
                          isCorrect
                            ? `✓ ${userAnswer}`
                            : `✗ ${userAnswer || "—"} → ${sentence.correctAnswer}`
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {getSentenceTranslation(sentence)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => speakText(fullSentenceText)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4 text-blue-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            onClick={startNewGame}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-all shadow-lg cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            {locale === "ua" ? "Грати знову (10 нових речень)" : locale === "ru" ? "Играть снова (10 новых предложений)" : "Play Again (10 New Sentences)"}
          </button>
          <button
            onClick={() => setGameStarted(false)}
            className="px-6 py-3 rounded-xl font-semibold glass hover:bg-white/10 transition-all cursor-pointer"
          >
            {locale === "ua" ? "Змінити фільтри" : locale === "ru" ? "Сменить фильтры" : "Change Filters"}
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE PLAY
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setGameStarted(false)}
          className="p-2 rounded-xl glass hover:bg-white/10 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
          {locale === "ua" ? "Речень" : locale === "ru" ? "Предложений" : "Sentences"} {Object.keys(answers).length} / {activeSentences.length}
        </span>
      </div>

      <div className="space-y-4">
        {activeSentences.map((sentence, i) => {
          const isSelected = !!answers[i];
          const fullTextToSpeak = sentence.text.replace("___", answers[i] || sentence.correctAnswer);

          return (
            <div
              key={sentence.id || i}
              className={`glass rounded-2xl p-5 border transition-all space-y-3 ${
                isSelected ? "border-purple-500/40 bg-purple-500/5" : "border-white/10"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">
                      #{i + 1} • {sentence.level}
                    </span>
                    {sentence.category && (
                      <span className="text-[10px] font-semibold text-muted-foreground">
                        {sentence.category}
                      </span>
                    )}
                  </div>

                  <p className="text-lg font-black text-foreground leading-snug">
                    {sentence.text}
                  </p>
                  <p className="text-xs text-muted-foreground/80 italic mt-0.5">
                    {getSentenceTranslation(sentence)}
                  </p>
                </div>

                <button
                  onClick={() => speakText(fullTextToSpeak)}
                  className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-white transition-all cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {sentence.options.map((option) => {
                  const isSelected = answers[i] === option;
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(i, option)}
                      className={`p-3 rounded-xl text-sm font-bold border transition-all text-center cursor-pointer ${
                        isSelected
                          ? "bg-purple-600 text-white border-purple-500 shadow-md scale-[1.02]"
                          : "glass border-white/10 hover:bg-white/10 text-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4">
        <button
          onClick={checkAll}
          disabled={!allAnswered}
          className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 disabled:opacity-40 transition-all shadow-xl text-base cursor-pointer"
        >
          {locale === "ua" ? "Перевірити всі відповіді" : locale === "ru" ? "Проверить все ответы" : "Check All Answers"} ({Object.keys(answers).length}/{activeSentences.length})
        </button>
      </div>
    </div>
  );
}
