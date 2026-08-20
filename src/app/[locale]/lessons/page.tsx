"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { lessonsData, getLocalizedText } from "@/lib/lessons-data";
import { promotionTests } from "@/lib/promotion-tests-data";
import { InteractiveGameMap } from "@/components/lessons/InteractiveGameMap";
import {
  BookOpen,
  Languages,
  Headphones,
  MessageSquare,
  ArrowRight,
  Filter,
  Lock,
  Trophy,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
  X,
  Target,
  Gamepad2,
  LayoutGrid,
  List as ListIcon,
  Clock,
  Zap,
  Award,
  Compass,
} from "lucide-react";
import { toast } from "sonner";

const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];

export default function LessonsPage() {
  const t = useTranslations("lessons");
  const locale = useLocale();

  const [filterType, setFilterType] = useState<string>("all");
  const [filterLevel, setFilterLevel] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"map" | "grid" | "list">("map");

  // Progress states
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [userLevel, setUserLevel] = useState<string>("A1");
  const [totalXP, setTotalXP] = useState<number>(0);
  const [hasCompletedLessonToday, setHasCompletedLessonToday] = useState(false);

  // Promotion Test states
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [promoLevel, setPromoLevel] = useState<string>("A1");
  const [currentPromoQ, setCurrentPromoQ] = useState(0);
  const [promoAnswers, setPromoAnswers] = useState<(number | null)[]>([]);
  const [selectedPromoAnswer, setSelectedPromoAnswer] = useState<number | null>(null);
  const [showPromoFeedback, setShowPromoFeedback] = useState(false);
  const [promoFinished, setPromoFinished] = useState(false);
  const [promoPassed, setPromoPassed] = useState(false);
  const [promoCorrectCount, setPromoCorrectCount] = useState(0);

  useEffect(() => {
    fetch("/api/progress")
      .then((res) => res.json())
      .then((data) => {
        if (data.progress) {
          if (data.progress.completedLessons) {
            setCompletedLessons(data.progress.completedLessons);
          }
          if (data.progress.currentLevel) {
            setUserLevel(data.progress.currentLevel);
          }
          if (data.progress.totalXP !== undefined) {
            setTotalXP(data.progress.totalXP);
          }
          if (data.progress.hasCompletedLessonToday) {
            setHasCompletedLessonToday(true);
          }
        }
      })
      .catch(console.error);

    const savedView = localStorage.getItem("lessons_view_mode") as "map" | "grid" | "list" | null;
    if (savedView && ["map", "grid", "list"].includes(savedView)) {
      setViewMode(savedView);
    }
  }, []);

  const handleViewChange = (mode: "map" | "grid" | "list") => {
    setViewMode(mode);
    localStorage.setItem("lessons_view_mode", mode);
  };

  const types = [
    { value: "all", label: t("all") },
    { value: "grammar", label: t("grammar"), icon: BookOpen },
    { value: "reading", label: t("reading"), icon: Languages },
    { value: "dictation", label: t("dictation"), icon: Headphones },
    { value: "communication", label: t("communication"), icon: MessageSquare },
  ];

  const levels = ["all", "A1", "A2", "B1", "B2", "C1", "C2"];

  const typeIcons: Record<string, typeof BookOpen> = {
    grammar: BookOpen,
    reading: Languages,
    dictation: Headphones,
    communication: MessageSquare,
  };

  const typeGradients: Record<string, string> = {
    grammar: "from-purple-600 to-indigo-500",
    reading: "from-pink-600 to-purple-500",
    dictation: "from-blue-600 to-cyan-500",
    communication: "from-emerald-600 to-teal-500",
  };

  // Calculate current level progress
  const lessonsInCurrentLevel = lessonsData.filter((l) => l.level === userLevel);
  const currentLevelTotal = lessonsInCurrentLevel.length;
  const currentLevelCompleted = lessonsInCurrentLevel.filter((l) =>
    completedLessons.includes(l.id)
  ).length;
  const currentLevelPercent =
    currentLevelTotal > 0 ? (currentLevelCompleted / currentLevelTotal) * 100 : 0;

  const filtered = lessonsData.filter((lesson) => {
    if (filterType !== "all" && lesson.type !== filterType) return false;
    if (filterLevel !== "all" && lesson.level !== filterLevel) return false;
    return true;
  });

  // Start the promotion test for a specific level
  const startPromotionTestForLevel = (targetLevel: string) => {
    const test = promotionTests[targetLevel];
    if (!test) {
      toast.error("No test available for this level.");
      return;
    }

    const levelLessons = lessonsData.filter((l) => l.level === targetLevel);
    const levelDoneCount = levelLessons.filter((l) =>
      completedLessons.includes(l.id)
    ).length;
    const userLevelIdx = LEVEL_ORDER.indexOf(userLevel);
    const targetLevelIdx = LEVEL_ORDER.indexOf(targetLevel);

    if (
      userLevelIdx === targetLevelIdx &&
      levelLessons.length > 0 &&
      levelDoneCount < levelLessons.length
    ) {
      toast.error(
        locale === "ua"
          ? `Іспит заблоковано. Спочатку пройдіть усі уроки модуля ${targetLevel}! (${levelDoneCount}/${levelLessons.length})`
          : locale === "ru"
          ? `Экзамен заблокирован. Сначала пройдите все уроки модуля ${targetLevel}! (${levelDoneCount}/${levelLessons.length})`
          : `Exam is locked. Complete all lessons in module ${targetLevel} first! (${levelDoneCount}/${levelLessons.length})`
      );
      return;
    }

    setPromoLevel(targetLevel);
    setCurrentPromoQ(0);
    setPromoAnswers(new Array(test.questions.length).fill(null));
    setSelectedPromoAnswer(null);
    setShowPromoFeedback(false);
    setPromoFinished(false);
    setPromoPassed(false);
    setPromoCorrectCount(0);
    setShowPromoModal(true);
  };

  const startPromotionTest = () => {
    startPromotionTestForLevel(userLevel);
  };

  // Handle promo test answer click
  const handlePromoAnswer = (optionIndex: number) => {
    if (showPromoFeedback) return;
    setSelectedPromoAnswer(optionIndex);
    setShowPromoFeedback(true);

    const test = promotionTests[promoLevel];
    const isCorrect = optionIndex === test.questions[currentPromoQ].correctAnswer;
    
    const newAnswers = [...promoAnswers];
    newAnswers[currentPromoQ] = optionIndex;
    setPromoAnswers(newAnswers);

    if (isCorrect) {
      setPromoCorrectCount((c) => c + 1);
    }
  };

  // Next question or finish promo test
  const nextPromoQuestion = () => {
    const test = promotionTests[promoLevel];
    if (currentPromoQ < test.questions.length - 1) {
      setCurrentPromoQ((q) => q + 1);
      setSelectedPromoAnswer(null);
      setShowPromoFeedback(false);
    } else {
      // Calculate final results
      const correct = promoAnswers.filter(
        (ans, idx) => ans === test.questions[idx].correctAnswer
      ).length;
      const passed = correct >= 16; // 80% to pass (16 out of 20)
      
      setPromoPassed(passed);
      setPromoFinished(true);

      if (passed) {
        const nextLevel = test.targetLevel;
        fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            currentLevel: nextLevel,
            totalXP: totalXP + 100,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.progress) {
              setUserLevel(nextLevel);
              setTotalXP(data.progress.totalXP);
            }
            toast.success(
              locale === "ua"
                ? `Вітаємо! Ви відкрили рівень ${nextLevel}! 🎉`
                : locale === "ru"
                ? `Поздравляем! Вы открыли уровень ${nextLevel}! 🎉`
                : `Congratulations! You unlocked level ${nextLevel}! 🎉`
            );
          })
          .catch((err) => {
            console.error(err);
            toast.error("Failed to update level progress.");
          });
      }
    }
  };

  const activeTest = promotionTests[promoLevel];
  const activePromoQuestionObj = activeTest?.questions[currentPromoQ];

  return (
    <div className="relative min-h-screen bg-transparent text-slate-100 font-sans selection:bg-purple-600 selection:text-white py-8 px-4 sm:px-6 lg:px-8 space-y-10">
      
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">

        {/* HERO HEADER */}
        <div className="animate-fade-in flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-300 bg-purple-950/50 px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm shadow-lg shadow-purple-950/50">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span>
                {locale === "ua"
                  ? "ІНТЕРАКТИВНИЙ КАТАЛОГ УРОКІВ CEFR"
                  : locale === "ru"
                  ? "ИНТЕРАКТИВНЫЙ КАТАЛОГ УРОКОВ CEFR"
                  : "INTERACTIVE CEFR LESSON PATH"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight font-editorial">
              {locale === "ua" ? (
                <>
                  Каталог <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">Уроків</span> Хорватської
                </>
              ) : locale === "ru" ? (
                <>
                  Каталог <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">Уроков</span> Хорватского
                </>
              ) : (
                <>
                  Croatian <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">Lesson</span> Roadmap
                </>
              )}
            </h1>

            <p className="text-slate-300 text-base leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {/* STATS OVERVIEW CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md text-center space-y-1">
              <BookOpen className="w-5 h-5 text-purple-400 mx-auto" />
              <span className="text-lg font-black text-white font-mono block">52</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                {locale === "ua" ? "Всього уроків" : locale === "ru" ? "Всего уроков" : "Total Lessons"}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md text-center space-y-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
              <span className="text-lg font-black text-emerald-400 font-mono block">{completedLessons.length}</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                {locale === "ua" ? "Пройдено" : locale === "ru" ? "Пройдено" : "Completed"}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md text-center space-y-1">
              <Zap className="w-5 h-5 text-amber-400 mx-auto" />
              <span className="text-lg font-black text-amber-400 font-mono block">{totalXP} XP</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                {locale === "ua" ? "Накопичено" : locale === "ru" ? "Накоплено" : "Earned XP"}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md text-center space-y-1">
              <Award className="w-5 h-5 text-indigo-400 mx-auto" />
              <span className="text-lg font-black text-indigo-400 font-mono block">{userLevel}</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                {locale === "ua" ? "Рівень" : locale === "ru" ? "Уровень" : "Current Level"}
              </span>
            </div>
          </div>
        </div>

        {/* Daily Lesson Limit Warning Banner */}
        {hasCompletedLessonToday && (
          <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in backdrop-blur-md shadow-lg shadow-purple-950/40">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 text-purple-300 border border-purple-500/30 shadow-md">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white uppercase tracking-wide">
                  {locale === "ua"
                    ? "Денний ліміт уроків досягнуто"
                    : locale === "ru"
                    ? "Дневной лимит уроков достигнут"
                    : "Daily Lesson Limit Reached"}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {locale === "ua"
                    ? "Ви вже успішно пройшли урок за сьогодні. Закріплюйте знання в міні-іграх!"
                    : locale === "ru"
                    ? "Вы уже успешно прошли урок за сегодня. Закрепляйте знания в мини-играх!"
                    : "You have already completed a lesson today. Practice with mini-games to reinforce your skills!"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* LEVEL PROGRESS & PROMOTION HUB CARD */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-purple-500/30 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl shadow-purple-950/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-5 relative z-10">
            <div className="w-18 h-18 rounded-2xl flex items-center justify-center text-white text-3xl font-black bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-600 shadow-xl shadow-purple-600/30 border border-purple-400/30 shrink-0">
              {userLevel}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold uppercase font-editorial text-white">
                  {locale === "ua" ? "Поточний рівень" : locale === "ru" ? "Текущий уровень" : "Current Level"}:
                </h2>
                <span className="text-xl font-black text-purple-400 font-mono">{userLevel}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {locale === "ua" 
                  ? `Вивчено уроків на рівні ${userLevel}: ${currentLevelCompleted}/${currentLevelTotal} (${Math.round(currentLevelPercent)}%)`
                  : locale === "ru"
                  ? `Пройдено уроков на уровне ${userLevel}: ${currentLevelCompleted}/${currentLevelTotal} (${Math.round(currentLevelPercent)}%)`
                  : `Completed lessons in level ${userLevel}: ${currentLevelCompleted}/${currentLevelTotal} (${Math.round(currentLevelPercent)}%)`
                }
              </p>
            </div>
          </div>

          <div className="flex-1 max-w-md w-full relative z-10 space-y-3">
            <div className="h-3.5 rounded-full bg-slate-950/80 border border-white/10 overflow-hidden p-0.5">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${
                  currentLevelPercent === 100 ? "from-emerald-400 to-teal-400 animate-pulse" : "from-purple-500 via-indigo-500 to-pink-500"
                } transition-all duration-500`}
                style={{ width: `${currentLevelPercent}%` }}
              />
            </div>
            
            {userLevel !== "C2" ? (
              <button
                onClick={startPromotionTest}
                disabled={currentLevelCompleted < currentLevelTotal}
                className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2.5 ${
                  currentLevelCompleted >= currentLevelTotal && currentLevelTotal > 0
                    ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-500 hover:to-indigo-500 text-white cursor-pointer shadow-purple-600/30 glow-hover"
                    : "bg-slate-950/80 text-slate-500 border border-slate-800 cursor-not-allowed opacity-60 shadow-none"
                }`}
              >
                {currentLevelCompleted < currentLevelTotal ? (
                  <Lock className="w-4 h-4" />
                ) : (
                  <Sparkles className="w-4 h-4 text-purple-300 animate-spin" />
                )}
                <span>
                  {locale === "ua"
                    ? `Скласти іспит на рівень ${LEVEL_ORDER[LEVEL_ORDER.indexOf(userLevel) + 1]}`
                    : locale === "ru"
                    ? `Сдать экзамен на уровень ${LEVEL_ORDER[LEVEL_ORDER.indexOf(userLevel) + 1]}`
                    : `Take ${LEVEL_ORDER[LEVEL_ORDER.indexOf(userLevel) + 1]} Promotion Exam`
                  }
                </span>
              </button>
            ) : (
              <div className="text-center py-2.5 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-xl uppercase tracking-wider">
                🏆 {locale === "ua" ? "Вітаємо! Ви досягли максимального рівня!" : locale === "ru" ? "Поздравляем! Вы достигли максимального уровня!" : "Congratulations! You reached the maximum level!"}
              </div>
            )}
          </div>
        </div>

        {/* CONTROLS BAR: VIEW SWITCHER & FILTERS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
          
          {/* View Mode Toolbar */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/10 shrink-0">
            <button
              onClick={() => handleViewChange("map")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 uppercase tracking-wider ${
                viewMode === "map"
                  ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-purple-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>{locale === "ua" ? "Карта" : locale === "ru" ? "Карта" : "Game Map"}</span>
            </button>

            <button
              onClick={() => handleViewChange("grid")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 uppercase tracking-wider ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-purple-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>{locale === "ua" ? "Острови" : locale === "ru" ? "Острова" : "Islands Grid"}</span>
            </button>

            <button
              onClick={() => handleViewChange("list")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 uppercase tracking-wider ${
                viewMode === "list"
                  ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-purple-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <ListIcon className="w-4 h-4" />
              <span>{locale === "ua" ? "Список" : locale === "ru" ? "Список" : "List"}</span>
            </button>
          </div>

          {/* Level Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-purple-400" />
              {locale === "ua" ? "Рівень:" : locale === "ru" ? "Уровень:" : "Level:"}
            </span>
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setFilterLevel(level)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all uppercase ${
                  filterLevel === level
                    ? "bg-purple-600 text-white border border-purple-400 shadow-md shadow-purple-600/30"
                    : "bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5"
                }`}
              >
                {level === "all" ? t("all") : level}
              </button>
            ))}
          </div>
        </div>

        {/* Type Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-1">
          {types.map((type) => {
            const Icon = type.icon || BookOpen;
            return (
              <button
                key={type.value}
                onClick={() => setFilterType(type.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 uppercase tracking-wider ${
                  filterType === type.value
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border border-purple-400/40 shadow-lg shadow-purple-600/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5"
                }`}
              >
                <Icon className="w-4 h-4 text-purple-400" />
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>

        {/* VIEW MODE 1: GAME MAP */}
        {viewMode === "map" && (
          <InteractiveGameMap
            lessons={filtered}
            completedLessons={completedLessons}
            userLevel={userLevel}
            locale={locale}
            hasCompletedLessonToday={hasCompletedLessonToday}
            onStartPromoTest={startPromotionTestForLevel}
          />
        )}

        {/* VIEW MODE 2: GRID / ISLANDS */}
        {viewMode === "grid" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((lesson) => {
              const Icon = typeIcons[lesson.type] || BookOpen;
              const gradient = typeGradients[lesson.type] || "from-purple-600 to-indigo-500";
              const isCompleted = completedLessons.includes(lesson.id);
              const isLocked = LEVEL_ORDER.indexOf(lesson.level) > LEVEL_ORDER.indexOf(userLevel);

              if (isLocked) {
                return (
                  <div
                    key={lesson.id}
                    onClick={() => {
                      toast.error(
                        locale === "ua"
                          ? `Цей урок заблоковано. Спочатку складіть іспит на рівень ${lesson.level}!`
                          : locale === "ru"
                          ? `Этот урок заблокирован. Сначала сдайте экзамен на уровень ${lesson.level}!`
                          : `This lesson is locked. Pass the ${lesson.level} Promotion Exam first!`
                      );
                    }}
                    className="p-6 rounded-3xl bg-slate-900/60 border border-dashed border-white/10 opacity-50 cursor-pointer space-y-4 relative"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                        <Lock className="w-6 h-6 text-slate-500" />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 border border-slate-700">
                          {lesson.level}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 uppercase tracking-wider">
                          🔒 {locale === "ua" ? "Заблоковано" : locale === "ru" ? "Заблокировано" : "Locked"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-400 line-clamp-1 font-editorial uppercase">
                        {getLocalizedText(lesson.title, locale)}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {getLocalizedText(lesson.content.description, locale)}
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id}`}
                  className={`p-6 rounded-3xl bg-slate-900/90 border backdrop-blur-md space-y-4 group transition-all duration-300 ${
                    isCompleted 
                      ? "border-emerald-500/30 bg-emerald-950/20 hover:border-emerald-500/60 shadow-lg shadow-emerald-950/30"
                      : "border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 shadow-xl"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${
                        isCompleted ? "from-emerald-600 to-teal-500" : gradient
                      } flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {lesson.level}
                      </span>
                      {isCompleted && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {t("completed")}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-white group-hover:text-purple-300 transition-colors line-clamp-1 font-editorial uppercase">
                      {getLocalizedText(lesson.title, locale)}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                      {getLocalizedText(lesson.content.description, locale)}
                    </p>
                  </div>

                  <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${
                    isCompleted ? "text-emerald-400" : "text-purple-400 group-hover:text-purple-300"
                  }`}>
                    <span>{isCompleted ? t("repeatLesson") : t("startLesson")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 3: LIST */}
        {viewMode === "list" && (
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="divide-y divide-white/5">
              {filtered.map((lesson) => {
                const Icon = typeIcons[lesson.type] || BookOpen;
                const isCompleted = completedLessons.includes(lesson.id);
                const isLocked = LEVEL_ORDER.indexOf(lesson.level) > LEVEL_ORDER.indexOf(userLevel);

                return (
                  <div
                    key={lesson.id}
                    className={`p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors ${
                      isLocked
                        ? "opacity-50 bg-slate-950/40"
                        : isCompleted
                        ? "bg-emerald-950/10 hover:bg-emerald-950/20"
                        : "hover:bg-slate-800/60"
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                          isLocked
                            ? "bg-slate-800 text-slate-500"
                            : isCompleted
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        }`}
                      >
                        {isLocked ? <Lock className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {lesson.level}
                          </span>
                          {isCompleted && (
                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30 uppercase">
                              ✓ {t("completed")}
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-sm text-white font-editorial uppercase truncate">
                          {getLocalizedText(lesson.title, locale)}
                        </h4>
                        <p className="text-xs text-slate-300 truncate">
                          {getLocalizedText(lesson.content.description, locale)}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 w-full sm:w-auto">
                      {isLocked ? (
                        <button
                          onClick={() => {
                            toast.error(
                              locale === "ua"
                                ? `Урок заблоковано. Складіть іспит на рівень ${lesson.level}!`
                                : locale === "ru"
                                ? `Урок заблокирован. Сдайте экзамен на уровень ${lesson.level}!`
                                : `Pass the ${lesson.level} Promotion Exam first!`
                            );
                          }}
                          className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-500 cursor-not-allowed flex items-center justify-center gap-1.5"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>{locale === "ua" ? "Заблоковано" : locale === "ru" ? "Заблокировано" : "Locked"}</span>
                        </button>
                      ) : (
                        <Link
                          href={`/lessons/${lesson.id}`}
                          className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                            isCompleted
                              ? "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30"
                              : "bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30"
                          }`}
                        >
                          <span>{isCompleted ? t("repeatLesson") : t("startLesson")}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400 space-y-3 p-8 rounded-3xl bg-slate-900/90 border border-slate-800">
            <BookOpen className="w-12 h-12 mx-auto text-purple-400 opacity-60" />
            <p className="text-sm">No lessons found with the selected filters.</p>
          </div>
        )}

        {/* PROMOTION EXAM MODAL */}
        {showPromoModal && activeTest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="p-6 sm:p-8 max-w-xl w-full rounded-3xl bg-slate-900 border border-purple-500/40 shadow-2xl relative animate-slide-up max-h-[90vh] overflow-y-auto text-slate-100">
              <button
                onClick={() => setShowPromoModal(false)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!promoFinished ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase font-editorial text-white">
                        {locale === "ua"
                          ? `Іспит на рівень ${activeTest.targetLevel}`
                          : locale === "ru"
                          ? `Экзамен на уровень ${activeTest.targetLevel}`
                          : `${activeTest.targetLevel} Promotion Exam`
                        }
                      </h3>
                      <span className="text-xs text-purple-400 font-bold">
                        {locale === "ua" ? "Питання" : locale === "ru" ? "Вопрос" : "Question"} {currentPromoQ + 1} / {activeTest.questions.length}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
                      style={{
                        width: `${((currentPromoQ) / activeTest.questions.length) * 100}%`,
                      }}
                    />
                  </div>

                  {activePromoQuestionObj && (
                    <div className="space-y-5 pt-2">
                      <p className="text-lg font-bold text-white leading-relaxed">
                        {getLocalizedText(activePromoQuestionObj.question, locale)}
                      </p>

                      <div className="grid gap-3">
                        {activePromoQuestionObj.options.map((optionObj, idx) => {
                          let btnStyle = "bg-slate-950/80 hover:bg-slate-800 border-white/10 text-slate-200";
                          if (showPromoFeedback) {
                            if (idx === activePromoQuestionObj.correctAnswer) {
                              btnStyle = "bg-emerald-950/60 border-emerald-500/60 text-emerald-300 font-bold";
                            } else if (idx === selectedPromoAnswer) {
                              btnStyle = "bg-red-950/60 border-red-500/60 text-red-300 font-bold";
                            } else {
                              btnStyle = "opacity-40 border-white/5";
                            }
                          } else if (idx === selectedPromoAnswer) {
                            btnStyle = "bg-purple-950/60 border-purple-500/60 text-purple-300 font-bold";
                          }

                          return (
                            <button
                              key={idx}
                              disabled={showPromoFeedback}
                              onClick={() => handlePromoAnswer(idx)}
                              className={`w-full p-4 rounded-2xl text-sm font-semibold transition-all border flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{getLocalizedText(optionObj, locale)}</span>
                              {showPromoFeedback && idx === activePromoQuestionObj.correctAnswer && (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                              )}
                              {showPromoFeedback && idx === selectedPromoAnswer && idx !== activePromoQuestionObj.correctAnswer && (
                                <XCircle className="w-5 h-5 text-red-400 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showPromoFeedback && (
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start gap-3 bg-purple-950/40 border border-purple-500/30 p-4 rounded-2xl text-xs text-purple-200 leading-relaxed">
                            <Lightbulb className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold block mb-0.5 uppercase tracking-wider text-purple-300">
                                {locale === "ua" ? "Пояснення:" : locale === "ru" ? "Объяснение:" : "Explanation:"}
                              </span>
                              {getLocalizedText(activePromoQuestionObj.explanation, locale)}
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <button
                              onClick={nextPromoQuestion}
                              className="px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-purple-600/30 hover:from-purple-500 hover:to-indigo-500 transition-all"
                            >
                              {currentPromoQ < activeTest.questions.length - 1
                                ? locale === "ua" ? "Наступне питання" : locale === "ru" ? "Следующий вопрос" : "Next Question"
                                : locale === "ua" ? "Завершити іспит" : locale === "ru" ? "Завершить экзамен" : "Finish Exam"
                              }
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-6 space-y-6">
                  {promoPassed ? (
                    <>
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-600 shadow-2xl border border-purple-400/40">
                        <Trophy className="w-10 h-10 text-white animate-bounce" />
                      </div>
                      <h3 className="text-2xl font-black uppercase font-editorial text-emerald-400">
                        {locale === "ua" ? "Іспит складено! 🎉" : locale === "ru" ? "Экзамен сдан! 🎉" : "Exam Passed! 🎉"}
                      </h3>
                      <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                        {locale === "ua"
                          ? `Вітаємо! Ви правильно відповіли на ${promoCorrectCount} з ${activeTest.questions.length} питань та успішно перейшли на рівень ${activeTest.targetLevel}!`
                          : locale === "ru"
                          ? `Поздравляем! Вы правильно ответили на ${promoCorrectCount} из ${activeTest.questions.length} вопросов и успешно перешли на уровень ${activeTest.targetLevel}!`
                          : `Congratulations! You answered ${promoCorrectCount} out of ${activeTest.questions.length} questions correctly and unlocked level ${activeTest.targetLevel}!`
                        }
                      </p>
                      <div className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-xl text-xs font-bold inline-block border border-emerald-500/30 uppercase tracking-wider">
                        +100 XP {locale === "ua" ? "Бонус" : locale === "ru" ? "Бонус" : "Bonus"}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-500/10 text-red-400 border border-red-500/20 shadow-2xl">
                        <XCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-black uppercase font-editorial text-red-400">
                        {locale === "ua" ? "Іспит не складено" : locale === "ru" ? "Экзамен не сдан" : "Exam Not Passed"}
                      </h3>
                      <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                        {locale === "ua"
                          ? `Ви правильно відповіли на ${promoCorrectCount} з ${activeTest.questions.length} питань. Для успішного переходу потрібно щонайменше 16 правильних відповідей. Спробуйте ще раз!`
                          : locale === "ru"
                          ? `Вы правильно ответили на ${promoCorrectCount} из ${activeTest.questions.length} вопросов. Для успешного перехода требуется минимум 16 правильных ответов. Попробуйте еще раз!`
                          : `You answered ${promoCorrectCount} out of ${activeTest.questions.length} questions correctly. You need at least 16 correct answers to unlock the next level. Try again!`
                        }
                      </p>
                    </>
                  )}

                  <div className="pt-4 flex justify-center gap-3">
                    {promoPassed ? (
                      <button
                        onClick={() => setShowPromoModal(false)}
                        className="px-8 py-3 rounded-2xl font-bold uppercase text-xs tracking-wider bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-purple-600/30 hover:from-purple-500 hover:to-indigo-500"
                      >
                        {locale === "ua" ? "Чудово, до нових уроків!" : locale === "ru" ? "Отлично, к новым урокам!" : "Great, on to new lessons!"}
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={startPromotionTest}
                          className="px-6 py-3 rounded-2xl font-bold uppercase text-xs tracking-wider bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-purple-600/30 hover:from-purple-500 hover:to-indigo-500"
                        >
                          {locale === "ua" ? "Спробувати ще раз" : locale === "ru" ? "Попробовать еще раз" : "Try Again"}
                        </button>
                        <button
                          onClick={() => setShowPromoModal(false)}
                          className="px-6 py-3 rounded-2xl font-bold uppercase text-xs tracking-wider bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all border border-white/10"
                        >
                          {locale === "ua" ? "Закрити" : locale === "ru" ? "Закрыть" : "Close"}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
