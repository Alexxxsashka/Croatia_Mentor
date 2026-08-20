"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { Link } from "@/i18n/navigation";
import { Flag } from "@/components/flag";
import {
  MessageCircle,
  BookOpen,
  Gamepad2,
  Film,
  BarChart3,
  Languages,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Compass,
  Trophy,
  Star,
} from "lucide-react";

export function OrangeWhiteHomePage({ scrollY }: { scrollY: number }) {
  const t = useTranslations("landing");
  const { data: session } = useSession();

  const features = [
    {
      icon: MessageCircle,
      tag: "AI TUTOR",
      title: t("features.ai.title"),
      description: t("features.ai.description"),
      accent: "from-orange-500 to-amber-500",
    },
    {
      icon: BookOpen,
      tag: "CEFR A1-C2",
      title: t("features.structured.title"),
      description: t("features.structured.description"),
      accent: "from-amber-500 to-orange-600",
    },
    {
      icon: Gamepad2,
      tag: "GAMIFICATION",
      title: t("features.games.title"),
      description: t("features.games.description"),
      accent: "from-orange-600 to-red-500",
    },
    {
      icon: Film,
      tag: "DICTATION & AUDIO",
      title: t("features.media.title"),
      description: t("features.media.description"),
      accent: "from-amber-600 to-orange-500",
    },
    {
      icon: BarChart3,
      tag: "SPACED REPETITION (SM-2)",
      title: t("features.tracking.title"),
      description: t("features.tracking.description"),
      accent: "from-orange-500 to-yellow-500",
    },
    {
      icon: Languages,
      tag: "MULTI-LINGUAL (EN/RU/UA)",
      title: t("features.multilingual.title"),
      description: t("features.multilingual.description"),
      accent: "from-red-500 to-amber-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Subtle Linear Grid Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top Banner Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-20 sm:pb-32">
        <div className="text-center space-y-8 animate-fade-in">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span>Vibrant Orange & White Editorial Edition</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-editorial uppercase leading-tight max-w-5xl mx-auto">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent underline decoration-orange-300 decoration-wavy underline-offset-8">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed px-4">
            {t("hero.subtitle")}
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            {session ? (
              <Link
                href="/dashboard"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 rounded-2xl text-base font-bold uppercase tracking-wider bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                <span>{t("hero.goToDashboard")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-up"
                  className="group flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 rounded-2xl text-base font-bold uppercase tracking-wider bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
                >
                  <span>{t("hero.cta")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/sign-in"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-9 py-4 rounded-2xl text-base font-bold uppercase tracking-wider bg-slate-50 text-slate-800 border border-slate-200 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all duration-300 shadow-sm"
                >
                  <span>{t("hero.ctaSecondary")}</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Floating Badges */}
        <div className="hidden lg:block">
          <div
            className="absolute top-28 left-8 bg-white border border-orange-200 px-5 py-3 rounded-2xl shadow-lg shadow-orange-500/5 text-sm font-semibold flex items-center gap-2.5 text-slate-800"
            style={{ transform: `translateY(${scrollY * -0.08}px)` }}
          >
            <Flag countryCode="hr" className="w-5 h-3.5 rounded-[2px]" />
            <span className="font-bold text-orange-600">Dobar dan!</span>
          </div>

          <div
            className="absolute top-44 right-12 bg-white border border-amber-200 px-5 py-3 rounded-2xl shadow-lg shadow-amber-500/5 text-sm font-bold tracking-wider text-amber-700 uppercase"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            📚 CEFR A1 → C2
          </div>

          <div
            className="absolute bottom-28 left-16 bg-white border border-orange-200 px-5 py-3 rounded-2xl shadow-lg shadow-orange-500/5 text-sm font-bold text-slate-800"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            🔥 <span className="text-orange-600">15 Day Streak</span>
          </div>

          <div
            className="absolute bottom-40 right-20 bg-white border border-amber-200 px-5 py-3 rounded-2xl shadow-lg shadow-amber-500/5 text-sm font-bold text-slate-800"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          >
            ⭐ <span className="text-amber-600">2,450 XP</span>
          </div>
        </div>
      </section>

      {/* Editorial Features Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
            COMPREHENSIVE LEARNING ECOSYSTEM
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
            {t("features.title")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.accent} flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-200">
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600 uppercase tracking-wider">
                <span>Explore Feature</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High-Impact CTA Section */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
        <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white shadow-2xl shadow-orange-500/30 overflow-hidden text-center">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight flex items-center justify-center gap-3 flex-wrap">
              <span>Počnimo učiti hrvatski!</span>
              <Flag countryCode="hr" className="w-8 h-6 rounded shadow-md" />
            </h2>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto font-medium">
              Start learning Croatian today with structured CEFR modules, spaced repetition, and interactive AI. 100% Free & Unlimited.
            </p>
            <div className="pt-4">
              <Link
                href={session ? "/dashboard" : "/sign-up"}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-base font-bold uppercase tracking-wider bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              >
                <span>{session ? t("hero.goToDashboard") : t("hero.cta")}</span>
                <ArrowRight className="w-5 h-5 text-orange-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
