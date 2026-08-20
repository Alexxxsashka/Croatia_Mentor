"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { Link } from "@/i18n/navigation";
import {
  MessageCircle,
  BookOpen,
  Gamepad2,
  Languages,
  ArrowRight,
  Sparkles,
  Play,
  Volume2,
  ChevronRight,
  Star,
  Award,
  Zap,
  HelpCircle,
  ChevronDown,
  Mail,
  Send,
  CheckCircle2,
  Brain,
  Bot,
  Trophy,
} from "lucide-react";

export function OrangeWhiteHomePage({ scrollY }: { scrollY: number }) {
  const t = useTranslations("landing");
  const { data: session } = useSession();

  // Active step calculation based on scroll position
  const activeStep =
    scrollY < 350
      ? "01"
      : scrollY < 900
      ? "02"
      : scrollY < 1600
      ? "03"
      : scrollY < 2400
      ? "04"
      : "05";

  // State for interactive FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const levelCards = [
    { key: "a1", badge: "A1", badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    { key: "a2", badge: "A2", badgeColor: "bg-teal-500/20 text-teal-400 border-teal-500/30" },
    { key: "b1", badge: "B1", badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
    { key: "b2", badge: "B2", badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    { key: "c1", badge: "C1", badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
    { key: "c2", badge: "C2", badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* Background Architectural Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0 transition-transform duration-300"
        style={{
          backgroundImage: "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />

      {/* Top Editorial Category Navigation Bar */}
      <div className="relative z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-purple-400 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              CROATIA MENTOR
            </span>
            <span className="hidden sm:inline border-l border-slate-800 pl-6 text-slate-300">CEFR A1 — C2</span>
            <span className="hidden md:inline border-l border-slate-800 pl-6 text-slate-300">AI TUTOR & DICTATION</span>
            <span className="hidden lg:inline border-l border-slate-800 pl-6 text-slate-300">SRS SPACED REPETITION</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="px-3 py-1 bg-purple-950/60 text-purple-300 border border-purple-500/30 rounded-md font-mono text-[10px] shadow-sm">
              {t("editorial.badge")}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden border-b border-slate-800/80">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20">
          
          {/* Main Hero Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Left: Hero Title & Clean Single CTA */}
            <div className="lg:col-span-9 space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-300 bg-purple-950/50 px-3.5 py-1.5 rounded-full border border-purple-500/30 backdrop-blur-sm shadow-lg shadow-purple-950/50">
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                {t("editorial.tagline")}
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] font-editorial drop-shadow-md">
                {t("hero.title")}{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                  {t("hero.titleHighlight")}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed">
                {t("hero.subtitle")}
              </p>

              {/* Single Clean Hero CTA Button */}
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href={session ? "/dashboard" : "/sign-up"}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold uppercase text-xs sm:text-sm tracking-[0.2em] transition-all shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 rounded-xl glow-hover"
                >
                  <span>{session ? t("hero.goToDashboard") : t("hero.cta")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
                <Link
                  href="/placement-test"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-slate-900/80 border border-slate-700 hover:border-purple-400 text-slate-300 hover:text-white font-bold uppercase text-xs sm:text-sm tracking-[0.15em] transition-all rounded-xl backdrop-blur-md"
                >
                  <span>{t("editorial.placementTest")}</span>
                </Link>
              </div>
            </div>

            {/* Right: Dynamic Interactive Vertical Step Counter */}
            <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 text-right border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
                {t("editorial.navSteps")}
              </div>
              <div className="flex lg:flex-col gap-3 font-mono text-base font-bold text-slate-500">
                {["01", "02", "03", "04", "05"].map((step) => {
                  const isActive = activeStep === step;
                  return (
                    <div
                      key={step}
                      className={`flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                        isActive ? "text-purple-400 font-extrabold text-lg scale-110" : "hover:text-slate-300"
                      }`}
                      onClick={() => {
                        const targetY = step === "01" ? 0 : step === "02" ? 500 : step === "03" ? 1100 : step === "04" ? 1800 : 2500;
                        window.scrollTo({ top: targetY, behavior: "smooth" });
                      }}
                    >
                      <span>{step}</span>
                      {isActive && <span className="w-8 h-[2px] bg-purple-500 hidden lg:block animate-pulse" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3-Column Editorial Subtext Grid with Scroll Parallax */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-800 transition-all duration-700"
            style={{
              opacity: Math.min(1, Math.max(0.4, 1 - scrollY * 0.0015)),
              transform: `translateY(${Math.min(30, scrollY * 0.05)}px)`,
            }}
          >
            <div className="space-y-3 pr-4 border-r-0 md:border-r border-slate-800 group cursor-pointer">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 group-hover:text-pink-300 transition-colors">
                {t("editorial.subtext01.tag")}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {t("editorial.subtext01.desc")}
              </p>
              <Link 
                href="/lessons"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white hover:text-purple-400 transition-colors pt-2"
              >
                <span>{t("editorial.subtext01.link")}</span>
                <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-3 pr-4 border-r-0 md:border-r border-slate-800 group cursor-pointer">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 group-hover:text-purple-300 transition-colors">
                {t("editorial.subtext02.tag")}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {t("editorial.subtext02.desc")}
              </p>
              <Link 
                href="/ai-chat"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white hover:text-indigo-400 transition-colors pt-2"
              >
                <span>{t("editorial.subtext02.link")}</span>
                <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-3 group cursor-pointer">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-400 group-hover:text-purple-300 transition-colors">
                {t("editorial.subtext03.tag")}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {t("editorial.subtext03.desc")}
              </p>
              <Link 
                href="/vocabulary"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white hover:text-pink-400 transition-colors pt-2"
              >
                <span>{t("editorial.subtext03.link")}</span>
                <ChevronRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Full-Width Horizontal Linear Divider */}
      <section className="relative z-10 border-b border-slate-800 bg-slate-950/70 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-purple-500/80" />
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-slate-300">
              {t("editorial.divider")}
            </p>
            <span className="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-purple-500/80" />
          </div>
        </div>
      </section>

      {/* 4-Column Themed 3D Cards Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-slate-800/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Lessons 3D Card */}
          <Link 
            href="/lessons" 
            className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-purple-500 h-[420px] flex flex-col justify-between p-6 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 block cursor-pointer"
            style={{
              transform: `translateY(${Math.max(-20, Math.min(20, (scrollY - 600) * -0.03))}px)`,
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('/croatia-card-1.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/25 group-hover:via-slate-950/50 transition-colors" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-300 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-purple-500/30">
                {t("editorial.cards.c1.tag")}
              </span>
              <span className="w-2.5 h-2.5 bg-purple-500 rounded-full shadow-md shadow-purple-500/50 group-hover:animate-ping" />
            </div>

            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold uppercase font-editorial tracking-wide group-hover:text-purple-300 transition-colors">
                {t("editorial.cards.c1.title")}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {t("editorial.cards.c1.desc")}
              </p>
              <div className="pt-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-purple-300">
                <span>{t("editorial.cards.c1.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          {/* Card 2: AI Tutor 3D Card */}
          <Link 
            href="/ai-chat" 
            className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500 h-[420px] flex flex-col justify-between p-6 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/25 block cursor-pointer"
            style={{
              transform: `translateY(${Math.max(-20, Math.min(20, (scrollY - 600) * 0.02))}px)`,
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('/croatia-card-2.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/25 group-hover:via-slate-950/50 transition-colors" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-300 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-indigo-500/30">
                {t("editorial.cards.c2.tag")}
              </span>
              <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-md shadow-indigo-500/50 group-hover:animate-ping" />
            </div>

            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold uppercase font-editorial tracking-wide group-hover:text-indigo-300 transition-colors">
                {t("editorial.cards.c2.title")}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {t("editorial.cards.c2.desc")}
              </p>
              <div className="pt-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-indigo-300">
                <span>{t("editorial.cards.c2.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          {/* Card 3: SRS Flashcards 3D Card */}
          <Link 
            href="/vocabulary" 
            className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-violet-500 h-[420px] flex flex-col justify-between p-6 transition-all duration-500 shadow-2xl hover:shadow-violet-500/25 block cursor-pointer"
            style={{
              transform: `translateY(${Math.max(-20, Math.min(20, (scrollY - 600) * -0.02))}px)`,
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('/croatia-card-3.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/25 group-hover:via-slate-950/50 transition-colors" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-violet-300 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-violet-500/30">
                {t("editorial.cards.c3.tag")}
              </span>
              <span className="w-2.5 h-2.5 bg-violet-500 rounded-full shadow-md shadow-violet-500/50 group-hover:animate-ping" />
            </div>

            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold uppercase font-editorial tracking-wide group-hover:text-violet-300 transition-colors">
                {t("editorial.cards.c3.title")}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {t("editorial.cards.c3.desc")}
              </p>
              <div className="pt-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-violet-300">
                <span>{t("editorial.cards.c3.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          {/* Card 4: Mini-Games 3D Card */}
          <Link 
            href="/games" 
            className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-pink-500 h-[420px] flex flex-col justify-between p-6 transition-all duration-500 shadow-2xl hover:shadow-pink-500/25 block cursor-pointer"
            style={{
              transform: `translateY(${Math.max(-20, Math.min(20, (scrollY - 600) * 0.03))}px)`,
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('/croatia-card-4.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/25 group-hover:via-slate-950/50 transition-colors" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-pink-400 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-pink-500/30">
                {t("editorial.cards.c4.tag")}
              </span>
              <span className="w-2.5 h-2.5 bg-pink-500 rounded-full shadow-md shadow-pink-500/50 group-hover:animate-ping" />
            </div>

            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold uppercase font-editorial tracking-wide group-hover:text-pink-400 transition-colors">
                {t("editorial.cards.c4.title")}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {t("editorial.cards.c4.desc")}
              </p>
              <div className="pt-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-pink-400">
                <span>{t("editorial.cards.c4.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* NEW SECTION 1: CEFR Level Breakdown Grid (A1 - C2 Modular Cards) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-purple-400 bg-purple-950/40 px-3.5 py-1.5 rounded-full border border-purple-500/30">
            <BookOpen className="w-4 h-4 text-purple-400" />
            {t("editorial.levels.tag")}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-editorial tracking-tight bg-gradient-to-r from-purple-300 via-pink-300 to-blue-200 bg-clip-text text-transparent">
            {t("editorial.levels.title")}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t("editorial.levels.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levelCards.map((lvl) => (
            <Link
              key={lvl.key}
              href="/lessons"
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-purple-500/10 block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-lg text-xs font-mono font-black border ${lvl.badgeColor}`}>
                  {t(`editorial.levels.${lvl.key}.title`).split("·")[0]}
                </span>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">CEFR MODULE</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase font-editorial text-white group-hover:text-purple-300 transition-colors mb-2">
                {t(`editorial.levels.${lvl.key}.title`).split("·")[1] || t(`editorial.levels.${lvl.key}.title`)}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t(`editorial.levels.${lvl.key}.desc`)}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-purple-400 group-hover:text-pink-400 transition-colors">
                <span>GO TO MODULE</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW SECTION 2: 3 Pillars of Rapid Fluency (Learning Engine Methodology) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-indigo-400 bg-indigo-950/40 px-3.5 py-1.5 rounded-full border border-indigo-500/30">
            <Zap className="w-4 h-4 text-indigo-400 animate-pulse" />
            {t("editorial.methodology.tag")}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-editorial tracking-tight text-white">
            {t("editorial.methodology.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 backdrop-blur-md space-y-4 group transition-all">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <Bot className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold uppercase font-editorial text-white group-hover:text-purple-300 transition-colors">
              {t("editorial.methodology.p1.title")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {t("editorial.methodology.p1.desc")}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 backdrop-blur-md space-y-4 group transition-all">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Brain className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold uppercase font-editorial text-white group-hover:text-indigo-300 transition-colors">
              {t("editorial.methodology.p2.title")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {t("editorial.methodology.p2.desc")}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-pink-500/50 backdrop-blur-md space-y-4 group transition-all">
            <div className="w-14 h-14 rounded-2xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
              <Trophy className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold uppercase font-editorial text-white group-hover:text-pink-300 transition-colors">
              {t("editorial.methodology.p3.title")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {t("editorial.methodology.p3.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Audio Immersion Statement Section */}
      <section className="relative z-10 overflow-hidden border-b border-slate-800/80 bg-slate-950/90 text-white py-20 backdrop-blur-md">
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20"
          style={{ backgroundImage: "url('/lessons-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Statement Block */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-purple-400">
                <Play className="w-4 h-4 fill-purple-400 animate-pulse" />
                {t("editorial.promo.tag")}
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight font-editorial bg-gradient-to-r from-purple-300 via-pink-300 to-blue-200 bg-clip-text text-transparent">
                {t("editorial.promo.title")}
              </h2>

              <blockquote className="text-sm sm:text-base text-slate-300 italic border-l-2 border-purple-500 pl-4 py-1 leading-relaxed">
                &ldquo;{t("editorial.promo.quote")}&rdquo;
              </blockquote>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/games/audio-spelling"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold uppercase text-xs tracking-[0.2em] transition-all shadow-lg shadow-purple-600/30 rounded-xl glow-hover"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{t("editorial.promo.cta")}</span>
                </Link>
              </div>
            </div>

            {/* Right Video / Audio Preview Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              <Link href="/games/audio-spelling" className="p-5 bg-slate-900/90 border border-slate-800 hover:border-purple-500 rounded-2xl flex items-center gap-4 transition-all group cursor-pointer backdrop-blur-md block shadow-lg hover:shadow-purple-500/20">
                <div className="w-14 h-14 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Volume2 className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-400">{t("editorial.promo.audio1.tag")}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                    {t("editorial.promo.audio1.title")}
                  </h4>
                  <p className="text-xs text-slate-400">{t("editorial.promo.audio1.sub")}</p>
                </div>
              </Link>

              <Link href="/ai-chat" className="p-5 bg-slate-900/90 border border-slate-800 hover:border-indigo-500 rounded-2xl flex items-center gap-4 transition-all group cursor-pointer backdrop-blur-md block shadow-lg hover:shadow-indigo-500/20">
                <div className="w-14 h-14 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400">{t("editorial.promo.audio2.tag")}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {t("editorial.promo.audio2.title")}
                  </h4>
                  <p className="text-xs text-slate-400">{t("editorial.promo.audio2.sub")}</p>
                </div>
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Frequently Asked Questions (FAQ Accordion) */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-slate-800/80">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-purple-400 bg-purple-950/40 px-3.5 py-1.5 rounded-full border border-purple-500/30">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            {t("editorial.faq.tag")}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-editorial tracking-tight text-white">
            {t("editorial.faq.title")}
          </h2>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => {
            const idx = i - 1;
            const isOpen = openFaq === idx;
            return (
              <div
                key={i}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-white hover:text-purple-300 transition-colors"
                >
                  <span>{t(`editorial.faq.q${i}`)}</span>
                  <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fade-in">
                    {t(`editorial.faq.a${i}`)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* NEW SECTION 4: Integrated Support & Contact Section (Внизу раздел под контакты) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-950/60 via-slate-900/90 to-slate-950/90 border border-purple-500/30 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-pink-400 bg-pink-950/40 px-3.5 py-1.5 rounded-full border border-pink-500/30">
                <Mail className="w-4 h-4 text-pink-400" />
                {t("editorial.contactSection.tag")}
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black uppercase font-editorial text-white">
                {t("editorial.contactSection.title")}
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                {t("editorial.contactSection.desc")}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{t("editorial.contactSection.emailValue")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>{t("editorial.contactSection.communityValue")}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold uppercase text-xs tracking-[0.2em] transition-all shadow-xl shadow-purple-600/30 rounded-xl text-center glow-hover"
              >
                <Mail className="w-4 h-4" />
                <span>{t("editorial.contactSection.ctaPrimary")}</span>
              </Link>
              
              <a
                href="https://t.me/croatia_mentor_community"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white font-extrabold uppercase text-xs tracking-[0.2em] transition-all rounded-xl text-center backdrop-blur-md"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>{t("editorial.contactSection.ctaCommunity")}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Editorial Copyright Line */}
      <div className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-md py-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
        {t("editorial.copyright")}
      </div>
    </div>
  );
}
