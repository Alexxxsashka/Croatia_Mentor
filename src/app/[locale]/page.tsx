"use client";

import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { Link } from "@/i18n/navigation";
import {
  MessageCircle,
  BookOpen,
  Gamepad2,
  Film,
  BarChart3,
  Languages,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const t = useTranslations("landing");
  const { data: session } = useSession();

  const features = [
    {
      icon: MessageCircle,
      title: t("features.ai.title"),
      description: t("features.ai.description"),
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: BookOpen,
      title: t("features.structured.title"),
      description: t("features.structured.description"),
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: Gamepad2,
      title: t("features.games.title"),
      description: t("features.games.description"),
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      icon: Film,
      title: t("features.media.title"),
      description: t("features.media.description"),
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: BarChart3,
      title: t("features.tracking.title"),
      description: t("features.tracking.description"),
      gradient: "from-red-500 to-rose-400",
    },
    {
      icon: Languages,
      title: t("features.multilingual.title"),
      description: t("features.multilingual.description"),
      gradient: "from-indigo-500 to-violet-400",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400">
            <Sparkles className="w-4 h-4" />
            AI-Powered Language Learning
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            {t("hero.title")}{" "}
            <span className="gradient-text">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {session ? (
              <Link
                href="/dashboard"
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-2xl shadow-blue-500/25 glow-hover"
              >
                {t("hero.goToDashboard")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-up"
                  className="group flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-2xl shadow-blue-500/25 glow-hover"
                >
                  {t("hero.cta")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/sign-in"
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold glass hover:bg-white/10 transition-all"
                >
                  {t("hero.ctaSecondary")}
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Floating badges */}
        <div className="hidden lg:block">
          <div className="absolute top-32 left-10 animate-float glass px-4 py-2 rounded-xl text-sm font-medium">
            🇭🇷 Dobar dan!
          </div>
          <div
            className="absolute top-48 right-16 animate-float glass px-4 py-2 rounded-xl text-sm font-medium"
            style={{ animationDelay: "1s" }}
          >
            📚 A1 → C2
          </div>
          <div
            className="absolute bottom-32 left-20 animate-float glass px-4 py-2 rounded-xl text-sm font-medium"
            style={{ animationDelay: "2s" }}
          >
            🔥 15 day streak
          </div>
          <div
            className="absolute bottom-48 right-24 animate-float glass px-4 py-2 rounded-xl text-sm font-medium"
            style={{ animationDelay: "0.5s" }}
          >
            ⭐ 2,450 XP
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("features.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl glass card-hover cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 glass">
          <h2 className="text-3xl font-bold mb-4">
            Počnimo učiti hrvatski! 🇭🇷
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let&apos;s start learning Croatian! Join thousands of learners
            mastering Croatian with AI.
          </p>
          <Link
            href={session ? "/dashboard" : "/sign-up"}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-2xl shadow-blue-500/25"
          >
            {session ? t("hero.goToDashboard") : t("hero.cta")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
