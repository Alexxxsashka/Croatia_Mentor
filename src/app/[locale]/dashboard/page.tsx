"use client";

import { useTranslations, useLocale } from "next-intl";
import { useSession } from "next-auth/react";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { lessonsData, getLocalizedText } from "@/lib/lessons-data";
import {
  Trophy,
  Sparkles,
  BookOpen,
  Target,
  MessageCircle,
  Gamepad2,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Clock,
  Loader2,
  RotateCcw,
  CalendarDays,
  Flame,
  RefreshCw,
  Check,
  Brain,
  Pencil,
  Timer,
  Ear,
  Shuffle,
  Languages,
} from "lucide-react";
import { toast } from "sonner";

interface TestScore {
  type: string;
  score: number;
  total: number;
  level: string;
  date: string;
}

interface UserProgress {
  currentLevel: string;
  totalXP: number;
  currentStreak: number;
  completedLessons: string[];
  testScores: TestScore[];
  lastActivityDate?: string | Date;
}

export default function DashboardPage() {
  const t = useTranslations("dashboard");
  const { data: session, status } = useSession();

  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [progressLoaded, setProgressLoaded] = useState(false);

  const [dailyStats, setDailyStats] = useState<{
    wordsLearned: number;
    wordsReviewed: number;
    completed: boolean;
    dailyGoal: { newWords: number; reviewWords: number };
    dailyGoalMinutes: number;
  } | null>(null);

  const [dailyHistory, setDailyHistory] = useState<{ date: string; xpEarned: number; completed: boolean }[]>([]);

  useEffect(() => {
    if (status === "authenticated") {
      Promise.all([
        fetch("/api/progress").then((r) => r.json()),
        fetch("/api/words/daily").then((r) => r.json()),
        fetch("/api/words/session").then((r) => r.json()),
      ])
        .then(([progData, dailyData, sessData]) => {
          if (progData.progress) {
            let parsedScores: TestScore[] = [];
            try {
              parsedScores = typeof progData.progress.testScores === "string"
                ? JSON.parse(progData.progress.testScores)
                : progData.progress.testScores || [];
            } catch {
              parsedScores = progData.progress.testScores || [];
            }

            setProgress({
              currentLevel: progData.progress.currentLevel || "A1",
              totalXP: progData.progress.totalXP || 0,
              currentStreak: progData.progress.currentStreak || 0,
              completedLessons: progData.progress.completedLessons || [],
              testScores: parsedScores,
              lastActivityDate: progData.progress.lastActivityDate || undefined,
            });
          }

          if (dailyData) {
            setDailyHistory(dailyData.history || []);
            const today = dailyData.today || {};
            const goal = sessData?.dailyGoal || { newWords: 10, reviewWords: 15 };
            setDailyStats({
              wordsLearned: today.wordsLearned || 0,
              wordsReviewed: today.wordsReviewed || 0,
              completed: !!today.completed,
              dailyGoal: goal,
              dailyGoalMinutes: sessData?.dailyGoalMinutes || 10,
            });
          }

          setProgressLoaded(true);
        })
        .catch((err) => {
          console.error("Failed to load dashboard data:", err);
          setProgressLoaded(true);
        });
    }
  }, [status]);

  const loading = (status as string) === "loading" || (status === "authenticated" && !progressLoaded);

  const user = session?.user as Record<string, unknown> | undefined;
  const userName = (user?.name as string) || "Learner";

  const currentLevel = progress?.currentLevel || (user?.currentLevel as string) || "A1";
  const totalXP = progress?.totalXP ?? 0;
  const streak = progress?.currentStreak ?? 0;
  const completedCount = progress?.completedLessons?.length ?? 0;
  const locale = useLocale();

  // Level progress calculations
  const lessonsInCurrentLevel = lessonsData.filter((l) => l.level === currentLevel);
  const currentLevelTotal = lessonsInCurrentLevel.length;
  const currentLevelCompleted = lessonsInCurrentLevel.filter((l) =>
    progress?.completedLessons?.includes(l.id)
  ).length;
  const currentLevelPercent =
    currentLevelTotal > 0 ? (currentLevelCompleted / currentLevelTotal) * 100 : 0;

  // Calculate success rate based on real placement/test scores
  let successRate = 0;
  if (progress?.testScores && progress.testScores.length > 0) {
    const totalCorrect = progress.testScores.reduce((acc, curr) => acc + (curr.score || 0), 0);
    const totalQuestions = progress.testScores.reduce((acc, curr) => acc + (curr.total || 1), 0);
    successRate = Math.round((totalCorrect / totalQuestions) * 100);
  }

  const levelColors: Record<string, string> = {
    A1: "level-a1",
    A2: "level-a2",
    B1: "level-b1",
    B2: "level-b2",
    C1: "level-c1",
    C2: "level-c2",
  };

  const handleResetProfile = async () => {
    const confirmMessage = locale === "ua"
      ? "Ви впевнені, що хочете скинути весь свій прогрес? Це скасує ваші результати тестування та пройдені уроки."
      : locale === "ru"
      ? "Вы уверены, что хотите сбросить весь свой прогресс? Это обнулит результаты тестов и пройденные уроки."
      : "Are you sure you want to reset all your progress? This will clear test results and completed lessons.";
      
    if (!window.confirm(confirmMessage)) return;

    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentLevel: "A1",
          totalXP: 0,
          currentStreak: 0,
          completedLessons: [],
          testScores: [],
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.progress) {
          setProgress({
            currentLevel: "A1",
            totalXP: 0,
            currentStreak: 0,
            completedLessons: [],
            testScores: [],
          });
        }
        toast.success(
          locale === "ua"
            ? "Прогрес успішно скинуто!"
            : locale === "ru"
            ? "Прогресс успешно сброшен!"
            : "Progress reset successfully!"
        );
      } else {
        toast.error("Failed to reset progress");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to reset progress");
    }
  };

  // Build dynamic recent activity based on actual test scores and completions
  const rawRecentActivity: { type: "lesson" | "game" | "chat" | "test"; title: string; xp: number; time: string; rawDate: Date }[] = [];

  // 1. Add test scores
  if (progress?.testScores) {
    progress.testScores.forEach((score) => {
      const date = new Date(score.date);
      rawRecentActivity.push({
        type: "test",
        title: score.type === "placement"
          ? (locale === "ua" ? "Тест рівня" : locale === "ru" ? "Тест уровня" : "Placement Test")
          : (locale === "ua" ? "Тест підвищення" : locale === "ru" ? "Тест повышения" : "Level Quiz"),
        xp: score.score * 10,
        time: "",
        rawDate: date,
      });
    });
  }

  // 2. Add completed lessons
  if (progress?.completedLessons && progress.completedLessons.length > 0) {
    const lastActivity = progress.lastActivityDate ? new Date(progress.lastActivityDate) : new Date();
    [...progress.completedLessons].reverse().forEach((lessonId, idx) => {
      const lessonObj = lessonsData.find((l) => l.id === lessonId);
      if (lessonObj) {
        const date = new Date(lastActivity.getTime() - idx * 10 * 60 * 1000);
        const titleText = getLocalizedText(lessonObj.title, locale);
        rawRecentActivity.push({
          type: "lesson",
          title: `${locale === "ua" ? "Урок" : locale === "ru" ? "Урок" : "Lesson"}: ${titleText}`,
          xp: 150,
          time: "",
          rawDate: date,
        });
      }
    });
  }

  // 3. Sort and map to recentActivity
  rawRecentActivity.sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime());
  const recentActivity = rawRecentActivity.slice(0, 5).map((act) => {
    const diffMs = new Date().getTime() - act.rawDate.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    let timeStr = "";
    if (diffHours < 1) {
      timeStr = locale === "ua" ? "Щойно" : locale === "ru" ? "Только что" : "Just now";
    } else if (diffHours < 24) {
      timeStr = locale === "ua" ? `${diffHours} год. тому` : locale === "ru" ? `${diffHours} ч. назад` : `${diffHours}h ago`;
    } else {
      const days = Math.floor(diffHours / 24);
      timeStr = locale === "ua" ? `${days} дн. тому` : locale === "ru" ? `${days} дн. назад` : `${days}d ago`;
    }
    return {
      type: act.type,
      title: act.title,
      xp: act.xp,
      time: timeStr,
    };
  });

  const quickActions = [
    {
      href: "/lessons",
      icon: BookOpen,
      label: t("continueLearning"),
      gradient: "from-blue-500 to-cyan-400",
      description: t("continueLearningDesc"),
    },
    {
      href: "/games",
      icon: Gamepad2,
      label: t("practiceFlashcards"),
      gradient: "from-orange-500 to-yellow-400",
      description: t("practiceFlashcardsDesc"),
    },
    {
      href: "/ai-chat",
      icon: MessageCircle,
      label: t("chatWithAI"),
      gradient: "from-purple-500 to-pink-400",
      description: t("chatWithAIDesc"),
      disabled: true,
    },
    {
      href: "/placement-test",
      icon: Target,
      label: t("takeTest"),
      gradient: "from-green-500 to-emerald-400",
      description: t("takeTestDesc"),
    },
  ];

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[50vh]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
          <p className="text-sm text-muted-foreground">{t("loading") || "Loading progress..."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Header */}
      <div className="mb-8 animate-fade-in flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            {t("welcome")},{" "}
            <span className="gradient-text">{userName}</span>! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            {t("levelProgress")}: {currentLevel}
          </p>
        </div>
        <div>
          <button
            onClick={handleResetProfile}
            className="px-4 py-2.5 text-xs font-semibold text-red-500 hover:text-white border border-red-500/20 hover:border-red-500 hover:bg-red-500/10 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {locale === "ua" 
              ? "Скинути прогрес" 
              : locale === "ru" 
              ? "Сбросить прогресс" 
              : "Reset Profile Progress"}
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 stagger-children">
        {/* Current Level */}
        <div className="glass rounded-2xl p-5 card-hover">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">
              {t("currentLevel")}
            </span>
            <Trophy className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`${levelColors[currentLevel] || "level-a1"} text-white text-2xl font-black px-3 py-1 rounded-xl`}
            >
              {currentLevel}
            </span>
          </div>
        </div>

        {/* Total XP */}
        <div className="glass rounded-2xl p-5 card-hover">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">
              {t("totalXP")}
            </span>
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black">{totalXP}</span>
            <span className="text-xs text-muted-foreground font-semibold">XP</span>
          </div>
        </div>

        {/* Daily Streak */}
        <div className="glass rounded-2xl p-5 card-hover">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">
              {t("streak")}
            </span>
            <span className="text-lg">🔥</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black">{streak}</span>
            <span className="text-xs text-muted-foreground font-semibold">
              {t("days")}
            </span>
          </div>
        </div>

        {/* Success Rate */}
        <div className="glass rounded-2xl p-5 card-hover">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">
              {t("successRate")}
            </span>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black">{successRate}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-1000"
              style={{ width: `${successRate || 0}%` }}
            />
          </div>
        </div>
      </div>

      {/* Daily Goal & Word Practice Hub */}
      {dailyStats && (
        <div className="glass p-6 rounded-3xl border border-white/10 mb-8 animate-fade-in space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              {locale === "ua" ? "Денна ціль навчання" : locale === "ru" ? "Дневная цель обучения" : "Daily Learning Goal"}
            </h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {dailyStats.dailyGoalMinutes} {locale === "ua" ? "хв/день" : locale === "ru" ? "мин/день" : "min/day"}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* New Words Goal */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{locale === "ua" ? "Нові слова" : locale === "ru" ? "Новые слова" : "New Words"}</span>
                <span className="font-bold text-blue-400">{dailyStats.wordsLearned} / {dailyStats.dailyGoal.newWords}</span>
              </div>
              <div className="h-2.5 bg-black/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (dailyStats.wordsLearned / dailyStats.dailyGoal.newWords) * 100)}%` }}
                />
              </div>
            </div>

            {/* Review Words Goal */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{locale === "ua" ? "Повторення" : locale === "ru" ? "Повторение" : "Review Words"}</span>
                <span className="font-bold text-emerald-400">{dailyStats.wordsReviewed} / {dailyStats.dailyGoal.reviewWords}</span>
              </div>
              <div className="h-2.5 bg-black/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (dailyStats.wordsReviewed / dailyStats.dailyGoal.reviewWords) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Practice Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Link
              href="/vocabulary?tab=flashcards"
              className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 hover:border-blue-500 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    {locale === "ua" ? "Тренувати слова (Flashcards)" : locale === "ru" ? "Тренировать слова (Flashcards)" : "Practice Flashcard Decks"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {locale === "ua" ? "Активне запам'ятовування" : locale === "ru" ? "Активное запоминание" : "Anki & Quizlet style active recall"}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/vocabulary?tab=quiz"
              className="p-4 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-500 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    {locale === "ua" ? "Словарний тест" : locale === "ru" ? "Словарный тест" : "Custom Vocabulary Quiz"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {locale === "ua" ? "Тести на 5-50 слів з выобором режиму" : locale === "ru" ? "Тесты на 5-50 слов с выбором режима" : "Configurable 5-50 Qs tests"}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      )}

      {/* Activity Heatmap Calendar */}
      {dailyHistory.length > 0 && (
        <div className="glass p-6 rounded-3xl border border-white/10 mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-foreground text-sm flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-emerald-400" />
              {locale === "ua" ? "Календар навчальної активності (90 днів)" : locale === "ru" ? "Календарь учебной активности (90 дней)" : "90-Day Learning Activity Calendar"}
            </h2>
            <span className="text-xs text-muted-foreground font-semibold">
              {locale === "ua" ? "Активних днів:" : locale === "ru" ? "Активных дней:" : "Active Days:"} {dailyHistory.filter((h) => h.completed || h.xpEarned > 0).length}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {(() => {
              const days: { date: string; level: number }[] = [];
              for (let i = 89; i >= 0; i--) {
                const d = new Date();
                d.setDate(d.getDate() - i);
                const dateStr = d.toISOString().split("T")[0];
                const act = dailyHistory.find((h) => h.date === dateStr);
                const level = act ? (act.completed ? 3 : act.xpEarned > 50 ? 2 : 1) : 0;
                days.push({ date: dateStr, level });
              }
              return days.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}`}
                  className={`w-3.5 h-3.5 rounded-sm transition-colors ${
                    day.level === 0 ? "bg-white/5" :
                    day.level === 1 ? "bg-emerald-500/30" :
                    day.level === 2 ? "bg-emerald-500/60" :
                    "bg-emerald-500 shadow-sm shadow-emerald-500/50"
                  }`}
                />
              ));
            })()}
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold">{t("quickActions")}</h2>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {quickActions.map((action) => {
              if (action.disabled) {
                return (
                  <span
                    key={action.href}
                    className="group glass rounded-2xl p-5 opacity-40 cursor-not-allowed flex items-start gap-4 text-left"
                    title={locale === "ua" ? "Тимчасово недоступно" : locale === "ru" ? "Временно недоступно" : "Temporarily unavailable"}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shrink-0 shadow-lg`}
                    >
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm">
                        {action.label}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {action.description}
                      </p>
                    </div>
                  </span>
                );
              }
              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className="group glass rounded-2xl p-5 card-hover flex items-start gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="font-semibold text-sm group-hover:text-blue-400 transition-colors">
                      {action.label}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {action.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </Link>
              );
            })}
          </div>

          {/* Lessons Completed */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{t("lessonsCompleted")}</h3>
              <span className="text-xl font-black text-blue-400">
                {completedCount}
              </span>
            </div>
            <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
              <span>
                {locale === "ua" 
                  ? `Прогрес рівня ${currentLevel}` 
                  : locale === "ru" 
                  ? `Прогресс уровня ${currentLevel}` 
                  : `Level ${currentLevel} progress`}
              </span>
              <span className="font-bold text-foreground">
                {currentLevelCompleted} / {currentLevelTotal}
              </span>
            </div>
            <div className="h-3 rounded-full bg-black/20 dark:bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                style={{
                  width: `${currentLevelPercent}%`,
                }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {currentLevelPercent === 100 
                ? (locale === "ua" 
                    ? "Рівень повністю пройдено! Складіть іспит у розділі уроків." 
                    : locale === "ru" 
                    ? "Уровень полностью пройден! Сдайте экзамен в разделе уроков." 
                    : "Level fully completed! Take the exam in the lessons section.")
                : (locale === "ua"
                    ? `Залишилося пройти ще ${currentLevelTotal - currentLevelCompleted} уроків на рівні ${currentLevel}`
                    : locale === "ru"
                    ? `Осталось пройти еще ${currentLevelTotal - currentLevelCompleted} уроков на уровне ${currentLevel}`
                    : `${currentLevelTotal - currentLevelCompleted} more lessons on level ${currentLevel} to complete the section`)
              }
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">{t("recentActivity")}</h2>
          <div className="glass rounded-2xl p-5 space-y-4">
            {recentActivity.map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    activity.type === "lesson"
                      ? "bg-blue-500/10 text-blue-400"
                      : activity.type === "game"
                        ? "bg-orange-500/10 text-orange-400"
                        : "bg-purple-500/10 text-purple-400"
                  }`}
                >
                  {activity.type === "lesson" ? (
                    <BookOpen className="w-5 h-5" />
                  ) : activity.type === "game" ? (
                    <Gamepad2 className="w-5 h-5" />
                  ) : (
                    <MessageCircle className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {activity.title}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-green-400">
                  <CheckCircle2 className="w-3 h-3" />+{activity.xp} XP
                </div>
              </div>
            ))}

            {recentActivity.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">
                {t("noActivity") || "No activity yet."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
