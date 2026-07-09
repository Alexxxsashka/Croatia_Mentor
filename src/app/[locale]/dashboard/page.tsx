"use client";

import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { Link } from "@/i18n/navigation";
import {
  Trophy,
  Flame,
  Star,
  BookOpen,
  Target,
  MessageCircle,
  Gamepad2,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  const t = useTranslations("dashboard");
  const { data: session } = useSession();

  const user = session?.user as Record<string, unknown> | undefined;
  const currentLevel = (user?.currentLevel as string) || "A1";
  const userName = (user?.name as string) || "Learner";

  // Mock data for the dashboard display
  const stats = {
    totalXP: 1250,
    streak: 7,
    lessonsCompleted: 12,
    successRate: 78,
  };

  const levelColors: Record<string, string> = {
    A1: "level-a1",
    A2: "level-a2",
    B1: "level-b1",
    B2: "level-b2",
    C1: "level-c1",
    C2: "level-c2",
  };

  const recentActivity = [
    { type: "lesson", title: "Basic Greetings", xp: 50, time: "2h ago" },
    { type: "game", title: "Word Match", xp: 30, time: "5h ago" },
    { type: "chat", title: "AI Chat Practice", xp: 25, time: "1d ago" },
  ];

  const quickActions = [
    {
      href: "/lessons",
      icon: BookOpen,
      label: t("continueLearning"),
      gradient: "from-blue-500 to-cyan-400",
      description: "Continue where you left off",
    },
    {
      href: "/games",
      icon: Gamepad2,
      label: t("practiceFlashcards"),
      gradient: "from-orange-500 to-yellow-400",
      description: "Play vocabulary games",
    },
    {
      href: "/ai-chat",
      icon: MessageCircle,
      label: t("chatWithAI"),
      gradient: "from-purple-500 to-pink-400",
      description: "Practice conversation",
    },
    {
      href: "/placement-test",
      icon: Target,
      label: t("takeTest"),
      gradient: "from-green-500 to-emerald-400",
      description: "Test your level",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold">
          {t("welcome")},{" "}
          <span className="gradient-text">{userName}</span>! 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("levelProgress")}: {currentLevel}
        </p>
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
              className={`${levelColors[currentLevel]} text-white text-2xl font-black px-3 py-1 rounded-xl`}
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
            <Star className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-3xl font-black">
            {stats.totalXP.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            +150 this week
          </div>
        </div>

        {/* Daily Streak */}
        <div className="glass rounded-2xl p-5 card-hover">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">
              {t("dailyStreak")}
            </span>
            <Flame className="w-5 h-5 text-orange-400" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black">{stats.streak}</span>
            <span className="text-sm text-muted-foreground">
              {t("days")} 🔥
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
            <span className="text-3xl font-black">{stats.successRate}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-1000"
              style={{ width: `${stats.successRate}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold">{t("quickActions")}</h2>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {quickActions.map((action) => (
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
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm group-hover:text-blue-400 transition-colors">
                    {action.label}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {action.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </Link>
            ))}
          </div>

          {/* Lessons Completed */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{t("lessonsCompleted")}</h3>
              <span className="text-2xl font-black text-blue-400">
                {stats.lessonsCompleted}
              </span>
            </div>
            <div className="h-3 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                style={{
                  width: `${Math.min((stats.lessonsCompleted / 50) * 100, 100)}%`,
                }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {stats.lessonsCompleted} / 50 lessons to next level
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
                {t("noActivity")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
