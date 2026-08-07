"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { vocabularyWords, VocabWord } from "@/lib/vocabulary-data";
import {
  ArrowLeft,
  Headphones,
  Volume2,
  Check,
  X,
  Trophy,
  RotateCcw,
  Sparkles,
  Flame,
  HelpCircle,
  Eye,
  EyeOff,
} from "lucide-react";
import { speakText } from "@/lib/speech";

const DIACRITICS = ["č", "ć", "đ", "š", "ž", "Č", "Ć", "Đ", "Š", "Ž"];

export default function AudioSpellingGame() {
  const t = useTranslations("games");
  const locale = useLocale();
  const router = useRouter();

  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [gameStarted, setGameStarted] = useState(false);
  const [wordQueue, setWordQueue] = useState<VocabWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [mistakes, setMistakes] = useState<{ word: VocabWord; input: string }[]>([]);

  const currentWord = wordQueue[currentIndex];

  const getTranslation = (word: VocabWord) => {
    if (locale === "ru") return word.ru;
    if (locale === "ua") return word.ua;
    return word.en;
  };

  const playAudio = (wordStr?: string) => {
    const textToSpeak = wordStr || currentWord?.hr;
    if (textToSpeak) {
      speakText(textToSpeak, { rate: 0.8 });
    }
  };

  const startGame = () => {
    let pool = [...vocabularyWords];
    if (selectedLevel !== "all") {
      pool = pool.filter((w) => w.level.toLowerCase() === selectedLevel.toLowerCase());
    }

    if (pool.length === 0) pool = [...vocabularyWords];

    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, 10);
    setWordQueue(shuffled);
    setCurrentIndex(0);
    setUserInput("");
    setIsChecked(false);
    setIsCorrect(false);
    setShowHint(false);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setMistakes([]);
    setGameComplete(false);
    setGameStarted(true);

    if (shuffled[0]) {
      setTimeout(() => playAudio(shuffled[0].hr), 300);
    }
  };

  const insertDiacritic = (char: string) => {
    setUserInput((prev) => prev + char);
  };

  const handleCheck = () => {
    if (isChecked || !currentWord) return;

    const target = currentWord.hr.trim().toLowerCase();
    const input = userInput.trim().toLowerCase();
    
    // Exact or near-exact match
    const correct = input === target;

    setIsChecked(true);
    setIsCorrect(correct);

    if (correct) {
      setScore((s) => s + 1);
      setStreak((st) => {
        const next = st + 1;
        if (next > bestStreak) setBestStreak(next);
        return next;
      });
    } else {
      setStreak(0);
      setMistakes((prev) => [...prev, { word: currentWord, input: userInput || "(порожньо)" }]);
    }

    // Record progress to SM-2 backend
    fetch("/api/words/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wordHr: currentWord.hr, correct }),
    }).catch(console.error);
  };

  const handleNext = () => {
    if (currentIndex < wordQueue.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setUserInput("");
      setIsChecked(false);
      setIsCorrect(false);
      setShowHint(false);

      if (wordQueue[nextIdx]) {
        setTimeout(() => playAudio(wordQueue[nextIdx].hr), 300);
      }
    } else {
      setGameComplete(true);
      const earnedXP = score * 15;
      if (earnedXP > 0) {
        fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ xp: earnedXP }),
        }).catch(console.error);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Top Header */}
      <div className="flex items-center gap-4 mb-8 animate-fade-in">
        <button
          onClick={() => router.push("/games")}
          className="p-2.5 rounded-xl glass hover:bg-white/10 transition-all border border-white/10"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-2xl font-extrabold flex items-center gap-2">
            <span className="gradient-text">
              {locale === "ua" ? "🎧 Аудіо-диктант слів" : locale === "ru" ? "🎧 Аудио-диктант слов" : "🎧 Audio Word Dictation"}
            </span>
          </h1>
          <p className="text-xs text-muted-foreground">
            {locale === "ua"
              ? "Слухайте вимову слів нейромережевим голосом та пишіть їх без підказок"
              : locale === "ru"
              ? "Слушайте произношение слов нейросетевым голосом и пишите их без подсказок"
              : "Listen to native neural pronunciation and spell words without text hints"}
          </p>
        </div>
      </div>

      {!gameStarted ? (
        /* Game Setup Card */
        <div className="glass p-8 rounded-3xl border border-white/10 text-center space-y-6 animate-fade-in max-w-lg mx-auto shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-xl shadow-blue-500/25">
            <Headphones className="w-8 h-8 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-foreground">
              {locale === "ua" ? "Написання слів на слух" : locale === "ru" ? "Написание слов на слух" : "Audio Spelling Test"}
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {locale === "ua"
                ? "У цій грі ви чуєте хорватське слово голосом чистих нейромереж. Напишіть його правильно, використовуючи спецсимволи (č, ć, đ, š, ž)."
                : locale === "ru"
                ? "В этой игре вы слышите хорватское слово голосом нейросети. Напишите его правильно, используя спецсимволы (č, ć, đ, š, ž)."
                : "Listen to the word in native Croatian neural voice and type its spelling using special diacritics (č, ć, đ, š, ž)."}
            </p>
          </div>

          {/* Level Filter */}
          <div className="space-y-2 text-left border-t border-b border-white/5 py-4">
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {locale === "ua" ? "Рівень складності:" : locale === "ru" ? "Уровень сложности:" : "Select Level:"}
            </label>
            <div className="grid grid-cols-5 gap-2">
              {["all", "A1", "A2", "B1", "B2"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all text-center ${
                    selectedLevel.toLowerCase() === lvl.toLowerCase()
                      ? "bg-blue-600 text-white border-blue-500 shadow-md"
                      : "bg-white/5 border-white/10 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lvl === "all" ? (locale === "ua" ? "Усі" : locale === "ru" ? "Все" : "All") : lvl}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-xl shadow-blue-500/25 text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            {locale === "ua" ? "Розпочати аудіо-диктант" : locale === "ru" ? "Начать аудио-диктант" : "Start Audio Dictation"}
          </button>
        </div>
      ) : gameComplete ? (
        /* Completion Screen */
        <div className="glass p-8 rounded-3xl border border-white/10 text-center space-y-6 animate-fade-in max-w-lg mx-auto shadow-2xl">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto animate-bounce" />
          <div>
            <h2 className="text-3xl font-extrabold text-foreground">
              {locale === "ua" ? "Диктант завершено!" : locale === "ru" ? "Диктант завершен!" : "Dictation Complete!"}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {locale === "ua" ? "Результат диктанту:" : locale === "ru" ? "Результат диктанта:" : "Your Score:"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-center">
              <span className="text-3xl font-black text-blue-400">{score}/{wordQueue.length}</span>
              <p className="text-xs text-muted-foreground mt-1">
                {locale === "ua" ? "Правильних слів" : locale === "ru" ? "Правильных слов" : "Correct Words"}
              </p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-black text-amber-400">+{score * 15} XP</span>
              <p className="text-xs text-muted-foreground mt-1">
                {locale === "ua" ? "Отримано XP" : locale === "ru" ? "Получено XP" : "XP Earned"}
              </p>
            </div>
          </div>

          {mistakes.length > 0 && (
            <div className="space-y-2 text-left border-t border-white/5 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <X className="w-4 h-4 text-red-400" />
                {locale === "ua" ? "Слова з помилками:" : locale === "ru" ? "Слова с ошибками:" : "Mistakes:"} ({mistakes.length})
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {mistakes.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <div className="flex items-center gap-2 font-bold text-foreground">
                        <span>{m.word.hr}</span>
                        <button onClick={() => playAudio(m.word.hr)} className="p-1 rounded bg-blue-500/10 text-blue-400">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-red-400 mt-0.5">
                        {locale === "ua" ? "Ваша відповідь:" : locale === "ru" ? "Ваш ответ:" : "Your answer:"}{" "}
                        <span className="line-through">{m.input}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">{getTranslation(m.word)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={startGame}
              className="flex-1 py-3.5 rounded-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              {locale === "ua" ? "Пройти ще раз" : locale === "ru" ? "Пройти еще раз" : "Try Again"}
            </button>
            <button
              onClick={() => router.push("/games")}
              className="flex-1 py-3.5 rounded-xl font-bold glass hover:bg-white/10 transition-all text-xs sm:text-sm"
            >
              {t("backToGames")}
            </button>
          </div>
        </div>
      ) : (
        /* Active Dictation Card */
        <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl animate-fade-in max-w-xl mx-auto">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground border-b border-white/5 pb-4">
            <span className="uppercase tracking-wider">
              {locale === "ua" ? "Слово" : locale === "ru" ? "Слово" : "Word"} {currentIndex + 1} / {wordQueue.length}
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Flame className="w-4 h-4" /> {streak}
              </span>
              <span className="text-emerald-400 font-bold">
                ✓ {score}
              </span>
            </div>
          </div>

          {/* Audio Player Core Button */}
          <div className="text-center py-6 space-y-4">
            <button
              type="button"
              onClick={() => playAudio()}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <Volume2 className="w-12 h-12 group-hover:animate-bounce" />
            </button>
            <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">
              🔊 {locale === "ua" ? "Натисніть для повтору звуку" : locale === "ru" ? "Нажмите для повтора звука" : "Click to re-listen"}
            </p>

            {/* Translation Hint Toggle */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer"
              >
                {showHint ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {showHint
                  ? (locale === "ua" ? "Сховати підказку" : locale === "ru" ? "Скрыть подсказку" : "Hide Hint")
                  : (locale === "ua" ? "Підказка (Переклад)" : locale === "ru" ? "Подсказка (Перевод)" : "Show Translation Hint")}
              </button>
              {showHint && currentWord && (
                <p className="text-sm font-semibold text-amber-300 mt-2 animate-fade-in bg-amber-500/10 py-1.5 px-3 rounded-xl border border-amber-500/20 inline-block">
                  💡 {getTranslation(currentWord)}
                </p>
              )}
            </div>
          </div>

          {/* Input Box & Diacritic Helper Keyboard */}
          <div className="space-y-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (!isChecked) handleCheck();
                  else handleNext();
                }
              }}
              disabled={isChecked}
              placeholder={locale === "ua" ? "Напишіть почуте слово..." : locale === "ru" ? "Напишите услышанное слово..." : "Type the word you hear..."}
              className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-foreground text-center text-xl font-bold focus:outline-none focus:border-blue-500 transition-all disabled:opacity-60"
              autoFocus
            />

            {/* Diacritic Helper Bar */}
            {!isChecked && (
              <div className="space-y-1 text-center">
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1">
                  {locale === "ua" ? "Хорватські літери:" : locale === "ru" ? "Хорватские буквы:" : "Croatian Diacritics:"}
                </span>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {DIACRITICS.map((char) => (
                    <button
                      key={char}
                      type="button"
                      onClick={() => insertDiacritic(char)}
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-xs font-black text-foreground hover:bg-blue-500 hover:text-white transition-all active:scale-90 cursor-pointer shadow-sm"
                    >
                      {char}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Feedback Result */}
          {isChecked && (
            <div className={`p-4 rounded-2xl border animate-slide-up ${isCorrect ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"}`}>
              <div className="flex items-center gap-2">
                {isCorrect ? <Check className="w-5 h-5 text-emerald-400" /> : <X className="w-5 h-5 text-red-400" />}
                <span className={`text-sm font-bold ${isCorrect ? "text-emerald-400" : "text-red-400"}`}>
                  {isCorrect
                    ? (locale === "ua" ? "Чудово! Правильно!" : locale === "ru" ? "Отлично! Правильно!" : "Perfect! Correct!")
                    : (locale === "ua" ? "Помилка" : locale === "ru" ? "Ошибка" : "Incorrect")}
                </span>
              </div>
              {!isCorrect && currentWord && (
                <div className="mt-2 text-xs space-y-1">
                  <p className="text-muted-foreground">
                    {locale === "ua" ? "Правильне написання:" : locale === "ru" ? "Правильное написание:" : "Correct spelling:"}{" "}
                    <span className="font-extrabold text-foreground text-sm">{currentWord.hr}</span>
                  </p>
                  <p className="text-muted-foreground">
                    {locale === "ua" ? "Переклад:" : locale === "ru" ? "Перевод:" : "Translation:"}{" "}
                    <span className="font-semibold text-blue-400">{getTranslation(currentWord)}</span>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end pt-2">
            {!isChecked ? (
              <button
                type="button"
                onClick={handleCheck}
                disabled={!userInput.trim()}
                className="w-full py-3.5 rounded-2xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all text-sm disabled:opacity-40 cursor-pointer"
              >
                {t("fillBlanks.checkAll") || (locale === "ua" ? "Перевірити" : locale === "ru" ? "Проверить" : "Check")}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3.5 rounded-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:opacity-90 shadow-lg shadow-emerald-500/25 transition-all text-sm cursor-pointer"
              >
                {currentIndex < wordQueue.length - 1
                  ? (locale === "ua" ? "Наступне слово →" : locale === "ru" ? "Следующее слово →" : "Next Word →")
                  : (locale === "ua" ? "Завершити диктант" : locale === "ru" ? "Завершить диктант" : "Finish Dictation")}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
