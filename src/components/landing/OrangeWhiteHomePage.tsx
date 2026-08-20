"use client";

import React, { useState, useEffect } from "react";
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
      : scrollY < 1500
      ? "03"
      : scrollY < 2000
      ? "04"
      : "05";

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

              {/* Single Clean Hero CTA Button - PURPLE GRADIENT */}
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
                        const targetY = step === "01" ? 0 : step === "02" ? 500 : step === "03" ? 1100 : step === "04" ? 1700 : 2200;
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

      {/* 4-Column Themed 3D Cards Grid with Scroll Reveal & Floating Micro-Interactions */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

      {/* Audio Immersion Statement Section */}
      <section className="relative z-10 overflow-hidden border-t border-slate-800 bg-slate-950/90 text-white py-20 backdrop-blur-md">
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

      {/* Footer Editorial Copyright Line */}
      <div className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-md py-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
        {t("editorial.copyright")}
      </div>
    </div>
  );
}
