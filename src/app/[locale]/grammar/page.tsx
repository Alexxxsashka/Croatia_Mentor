"use client";

import { useState, useEffect, useMemo } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import {
  GraduationCap,
  Search,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Volume2,
  Zap,
  Timer,
  Check,
  X,
  Trophy,
  RefreshCw,
  Sparkles,
  Menu,
  Brain,
  ArrowLeft,
  Info,
  SlidersHorizontal,
} from "lucide-react";
import { glossaryData, GlossaryCategory, GlossarySection } from "@/lib/glossary-data";
import { getGrammarQuestions, GrammarQuestion } from "@/lib/grammar-questions-data";
import { speakText } from "@/lib/speech";

export default function GrammarPage() {
  const locale = useLocale();
  const router = useRouter();

  // State for active Category & Section
  const [selectedCatId, setSelectedCatId] = useState<string>("phonetics");
  const [selectedSecId, setSelectedSecId] = useState<string>("alphabet");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Accordion state for sidebar categories
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    phonetics: true,
    cases: true,
  });

  // Practice Test State
  const [testActive, setTestActive] = useState<boolean>(false);
  const [testLevel, setTestLevel] = useState<string>("all");
  const [testSpeed, setTestSpeed] = useState<number>(10); // 0 = no timer, 5 = hyper, 10 = standard
  const [testCount, setTestCount] = useState<number>(5);

  const [questions, setQuestions] = useState<GrammarQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [testComplete, setTestComplete] = useState<boolean>(false);

  // Sync active category & section
  const currentCategory = useMemo(() => {
    return glossaryData.find((cat) => cat.id === selectedCatId) || glossaryData[0];
  }, [selectedCatId]);

  const currentSection = useMemo(() => {
    return (
      currentCategory?.sections.find((sec) => sec.id === selectedSecId) ||
      currentCategory?.sections[0] ||
      glossaryData[0].sections[0]
    );
  }, [currentCategory, selectedSecId]);

  // Expand categories when user searches
  useEffect(() => {
    if (searchQuery.trim()) {
      const allOpen: Record<string, boolean> = {};
      glossaryData.forEach((c) => {
        allOpen[c.id] = true;
      });
      setExpandedCategories(allOpen);
    }
  }, [searchQuery]);

  // Start Test generator
  const startPracticeTest = () => {
    const fetched = getGrammarQuestions(selectedCatId, testLevel, testCount);
    setQuestions(fetched);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setTimeLeft(testSpeed > 0 ? testSpeed : 0);
    setTestComplete(false);
    setTestActive(true);

    if (fetched[0]?.question?.hr) {
      setTimeout(() => speakText(fetched[0].question.hr), 300);
    }
  };

  // Timer countdown
  useEffect(() => {
    if (!testActive || isAnswered || testComplete || testSpeed === 0) return;
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setIsAnswered(true);
          setSelectedOption(null);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, testActive, isAnswered, testComplete, testSpeed]);

  const handleAnswerSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const q = questions[currentIndex];
    const isCorrect = option === q.correctAnswer;
    if (isCorrect) {
      setScore((s) => s + 10);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(testSpeed > 0 ? testSpeed : 0);

      if (questions[nextIdx]?.question?.hr) {
        setTimeout(() => speakText(questions[nextIdx].question.hr), 300);
      }
    } else {
      setTestComplete(true);
      const earnedXP = score * 2;
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
      {/* HEADER BAR */}
      <header className="border-b border-white/10 bg-slate-900/80 backdrop-blur-xl sticky top-14 z-30 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-xl glass hover:bg-white/10 text-purple-400"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20 text-white font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-black uppercase font-editorial tracking-tight text-white flex items-center gap-2">
                  {locale === "ua"
                    ? "Грамматичний Довідник"
                    : locale === "ru"
                    ? "Грамматический Справочник"
                    : "Croatian Grammar Handbook"}
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    A1–C1
                  </span>
                </h1>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  {locale === "ua"
                    ? "Правила відмінювання, відмінки, часи та генератор практичних тестів"
                    : locale === "ru"
                    ? "Правила склонения, падежи, времена и генератор практических тестов"
                    : "Declension rules, cases, tenses & theory practice test generator"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/games")}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10 transition-all flex items-center gap-1.5"
            >
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="hidden sm:inline">Игровой Центр</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT (Claude Code Style Sidebar + Reader) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* SIDEBAR NAVIGATION */}
        <aside
          className={`md:col-span-4 lg:col-span-3 space-y-4 ${
            sidebarOpen ? "block" : "hidden md:block"
          }`}
        >
          {/* SEARCH INPUT */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={
                locale === "ua"
                  ? "Пошук за граматикою..."
                  : locale === "ru"
                  ? "Поиск по грамматике..."
                  : "Search rules & topics..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-all shadow-inner"
            />
          </div>

          {/* CATEGORIES & SECTIONS TREE */}
          <div className="glass rounded-3xl p-3 border border-white/10 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
            {glossaryData
              .filter((cat) => {
                if (!searchQuery.trim()) return true;
                const q = searchQuery.toLowerCase();
                const catTitle = (cat.title[locale as "en" | "ru" | "ua"] || cat.title.en).toLowerCase();
                const matchSec = cat.sections.some((s) =>
                  (s.title[locale as "en" | "ru" | "ua"] || s.title.en).toLowerCase().includes(q)
                );
                return catTitle.includes(q) || matchSec;
              })
              .map((cat) => {
                const isCatExpanded = expandedCategories[cat.id] ?? false;
                const isCatSelected = selectedCatId === cat.id;

                return (
                  <div key={cat.id} className="space-y-1">
                    {/* Category Header */}
                    <button
                      onClick={() => {
                        setSelectedCatId(cat.id);
                        if (cat.sections[0]) setSelectedSecId(cat.sections[0].id);
                        setExpandedCategories((prev) => ({ ...prev, [cat.id]: !prev[cat.id] }));
                      }}
                      className={`w-full p-3 rounded-2xl text-left flex items-center justify-between text-xs font-bold transition-all ${
                        isCatSelected
                          ? "bg-purple-600/20 text-purple-300 border border-purple-500/30"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{cat.icon}</span>
                        <span className="truncate max-w-[160px]">
                          {cat.title[locale as "en" | "ru" | "ua"] || cat.title.en}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isCatExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Section Items */}
                    {isCatExpanded && (
                      <div className="pl-4 space-y-1 border-l-2 border-purple-500/20 ml-3 py-1">
                        {cat.sections.map((sec) => {
                          const isSecSelected = selectedCatId === cat.id && selectedSecId === sec.id;

                          return (
                            <button
                              key={sec.id}
                              onClick={() => {
                                setSelectedCatId(cat.id);
                                setSelectedSecId(sec.id);
                                setSidebarOpen(false);
                                setTestActive(false);
                              }}
                              className={`w-full p-2.5 rounded-xl text-left flex items-center gap-2 text-xs font-semibold transition-all ${
                                isSecSelected
                                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20 font-bold"
                                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                              }`}
                            >
                              <span>{sec.icon}</span>
                              <span className="truncate">
                                {sec.title[locale as "en" | "ru" | "ua"] || sec.title.en}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </aside>

        {/* CONTENT READER AREA */}
        <main className="md:col-span-8 lg:col-span-9 space-y-8">
          
          {/* SECTION HEADER CARD */}
          <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentSection.icon}</span>
                <div>
                  <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-purple-400">
                    <span>{currentCategory.title[locale as "en" | "ru" | "ua"] || currentCategory.title.en}</span>
                    <span>•</span>
                    <span>Раздел</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-editorial tracking-tight">
                    {currentSection.title[locale as "en" | "ru" | "ua"] || currentSection.title.en}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  A1 – C1 Theory
                </span>
              </div>
            </div>

            {/* SUBSECTIONS / THEORY DETAILS */}
            <div className="space-y-8 pt-2">
              {currentSection.subsections.map((sub, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    {sub.title[locale as "en" | "ru" | "ua"] || sub.title.en}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                    {sub.text[locale as "en" | "ru" | "ua"] || sub.text.en}
                  </p>

                  {/* Examples list */}
                  {sub.examples && sub.examples.length > 0 && (
                    <div className="grid gap-3 sm:grid-cols-2 pt-2">
                      {sub.examples.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between gap-3"
                        >
                          <div>
                            <span className="text-sm font-bold text-purple-300 block select-all">{ex.hr}</span>
                            <span className="text-xs text-slate-400 block mt-0.5">
                              {ex.translation[locale as "en" | "ru" | "ua"] || ex.translation.en}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => speakText(ex.hr)}
                            className="p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/30 transition-all shrink-0"
                            title="Listen pronunciation"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Declension / Conjugation Tables */}
                  {sub.table && (
                    <div className="overflow-x-auto my-4 rounded-2xl border border-white/10 bg-slate-900/90 p-3 shadow-xl">
                      <table className="w-full text-xs text-left border-collapse">
                        <thead>
                          <tr className="border-b border-white/10 text-purple-400 font-bold uppercase tracking-wider text-[10px]">
                            {sub.table.headers.map((h, hIdx) => {
                              const hText = typeof h === "string" ? h : (h[locale as "en" | "ru" | "ua"] || h.en);
                              return <th key={hIdx} className="p-3">{hText}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {sub.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                              {row.cells.map((cell, cIdx) => {
                                const cellText = typeof cell === "string" ? cell : (cell[locale as "en" | "ru" | "ua"] || cell.en);
                                return <td key={cIdx} className="p-3 font-semibold text-slate-100">{cellText}</td>;
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ========================================== */}
          {/* THEORY PRACTICE TEST GENERATOR AT BOTTOM   */}
          {/* ========================================== */}
          <div className="glass rounded-3xl p-6 sm:p-8 border border-purple-500/30 space-y-6 shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/40">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/25">
                  <Zap className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase font-editorial tracking-tight">
                    {locale === "ua"
                      ? "Генератор Тестів по Теорії"
                      : locale === "ru"
                      ? "Генератор Тестов по Теории"
                      : "Theory Practice Test Generator"}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {locale === "ua"
                      ? "Перевірте знання правила прямо зараз — виберіть складність та режим швидкості"
                      : locale === "ru"
                      ? "Проверьте знания правила прямо сейчас — выберите сложность и режим скорости"
                      : "Test your grammar mastery right now — configure difficulty and speed timer"}
                  </p>
                </div>
              </div>
            </div>

            {!testActive ? (
              /* TEST CONFIGURATION FORM */
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Difficulty selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Сложность (CEFR)
                    </label>
                    <select
                      value={testLevel}
                      onChange={(e) => setTestLevel(e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 text-xs font-bold rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-purple-500 cursor-pointer shadow-sm"
                    >
                      <option value="all">Все уровни (A1 - C1)</option>
                      <option value="A1">A1 · Начинающий</option>
                      <option value="A2">A2 · Элементарный</option>
                      <option value="B1">B1 · Средний</option>
                      <option value="B2">B2 · Выше среднего</option>
                      <option value="C1">C1 · Продвинутый</option>
                    </select>
                  </div>

                  {/* Speed / Timer mode */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Режим скорости
                    </label>
                    <select
                      value={testSpeed}
                      onChange={(e) => setTestSpeed(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-white/10 text-xs font-bold rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-purple-500 cursor-pointer shadow-sm"
                    >
                      <option value={5}>⚡ 5 сек (Спринт)</option>
                      <option value={10}>⏱️ 10 сек (Стандарт)</option>
                      <option value={0}>🧘 Без таймера (Практика)</option>
                    </select>
                  </div>

                  {/* Question count */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Вопросов в тесте
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[5, 10, 15].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setTestCount(num)}
                          className={`py-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                            testCount === num
                              ? "bg-purple-600 text-white border-purple-400 shadow-md"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          {num} Qs
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={startPracticeTest}
                  className="w-full py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 text-white hover:opacity-95 transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 fill-white animate-pulse" />
                  Сгенерировать тест по теории ({testCount} вопросов)
                </button>
              </div>
            ) : testComplete ? (
              /* TEST RESULT SCREEN */
              <div className="text-center py-6 space-y-6 animate-fade-in">
                <Trophy className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
                <div>
                  <h4 className="text-2xl font-black text-white uppercase font-editorial">Тест завершен!</h4>
                  <p className="text-xs text-slate-400 mt-1">Отличная работа по проверке теории</p>
                </div>

                <div className="glass rounded-2xl p-6 max-w-sm mx-auto space-y-3 border border-white/10">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Правильных ответов:</span>
                    <span className="text-emerald-400 font-bold">{score / 10} из {questions.length}</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Заработано XP:</span>
                    <span className="text-amber-400 font-bold">+{score * 2} XP</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={startPracticeTest}
                    className="px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:opacity-90 transition-all flex items-center gap-2 shadow-lg cursor-pointer text-xs uppercase"
                  >
                    <RefreshCw className="w-4 h-4" /> Пройти новый тест по этой теме
                  </button>
                  <button
                    onClick={() => setTestActive(false)}
                    className="px-6 py-3 rounded-2xl font-bold glass border border-white/10 text-slate-300 hover:text-white transition-all text-xs uppercase cursor-pointer"
                  >
                    Вернуться к теории
                  </button>
                </div>
              </div>
            ) : (
              /* ACTIVE TEST QUESTION PLAYER */
              <div className="space-y-6 animate-fade-in">
                {/* Header info */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Вопрос {currentIndex + 1} из {questions.length}</span>
                  <span className="text-amber-400 font-bold">{score} pts</span>
                </div>

                {/* Timer bar */}
                {testSpeed > 0 && (
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        timeLeft > 3 ? "bg-emerald-400" : "bg-red-400 animate-pulse"
                      }`}
                      style={{ width: `${(timeLeft / testSpeed) * 100}%` }}
                    />
                  </div>
                )}

                {/* Question Prompt */}
                {questions[currentIndex] && (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase">
                          {questions[currentIndex].level}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black text-white mt-2 leading-snug">
                          {questions[currentIndex].question.hr}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          {questions[currentIndex].question[locale as "en" | "ru" | "ua"] ||
                            questions[currentIndex].question.en}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => speakText(questions[currentIndex].question.hr)}
                        className="p-3 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/30 shrink-0 transition-all"
                        title="Listen"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Options list */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      {questions[currentIndex].options.map((option, i) => {
                        let style = "glass hover:bg-white/10 border-white/10 text-white cursor-pointer";
                        if (isAnswered) {
                          if (option === questions[currentIndex].correctAnswer) {
                            style = "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold";
                          } else if (option === selectedOption) {
                            style = "bg-red-500/20 border-red-500/50 text-red-300 font-bold";
                          } else {
                            style = "opacity-40 border-white/5";
                          }
                        }
                        return (
                          <button
                            key={i}
                            onClick={() => handleAnswerSelect(option)}
                            disabled={isAnswered}
                            className={`w-full p-4 rounded-2xl text-xs sm:text-sm font-semibold transition-all text-left flex items-center justify-between border ${style}`}
                          >
                            <span>{option}</span>
                            {isAnswered && option === questions[currentIndex].correctAnswer && (
                              <Check className="w-4 h-4 text-emerald-400" />
                            )}
                            {isAnswered && option === selectedOption && option !== questions[currentIndex].correctAnswer && (
                              <X className="w-4 h-4 text-red-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    {isAnswered && (
                      <div className="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/30 space-y-2 animate-fade-in">
                        <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
                          <Info className="w-4 h-4 text-purple-400" />
                          <span>Объяснение правила:</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {questions[currentIndex].explanation[locale as "en" | "ru" | "ua"] ||
                            questions[currentIndex].explanation.en}
                        </p>
                        <div className="pt-2 flex justify-end">
                          <button
                            onClick={handleNextQuestion}
                            className="px-6 py-2.5 rounded-xl font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg text-xs uppercase tracking-wider transition-all cursor-pointer"
                          >
                            {currentIndex < questions.length - 1 ? "Следующий вопрос →" : "Посмотреть результаты"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
