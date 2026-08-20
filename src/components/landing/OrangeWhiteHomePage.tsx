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
  Play,
  Volume2,
  Award,
  ChevronRight,
  Flame,
  Star,
  CheckCircle2,
} from "lucide-react";

export function OrangeWhiteHomePage({ scrollY }: { scrollY: number }) {
  const t = useTranslations("landing");
  const nav = useTranslations("nav");
  const { data: session } = useSession();

  return (
    <div className="relative min-h-screen bg-transparent text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Background Architectural Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Editorial Category Navigation Bar */}
      <div className="relative z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-orange-400 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              CROATIA MENTOR
            </span>
            <span className="hidden sm:inline border-l border-slate-800 pl-6">CEFR A1 — C2</span>
            <span className="hidden md:inline border-l border-slate-800 pl-6">AI TUTOR & DICTATION</span>
            <span className="hidden lg:inline border-l border-slate-800 pl-6">SRS SPACES REPETITION</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="px-3 py-1 bg-orange-950/60 text-orange-400 border border-orange-500/30 rounded-md font-mono text-[10px]">
              {t("editorial.badge")}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section with Dramatic Parallax Photography Background (Reference 1 & 4) */}
      <section className="relative z-10 overflow-hidden border-b border-slate-800/80">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 sm:pt-20 sm:pb-24">
          
          {/* Main Hero Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left: Dominant ALL-CAPS Title */}
            <div className="lg:col-span-9 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-300 bg-purple-950/50 px-3.5 py-1.5 rounded-full border border-purple-500/30 backdrop-blur-sm shadow-lg shadow-purple-950/50">
                <Sparkles className="w-4 h-4 text-purple-400" />
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
            </div>

            {/* Right: Vertical Step Indicator (Reference 1 & 4) */}
            <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 text-right border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
                {t("editorial.navSteps")}
              </div>
              <div className="flex lg:flex-col gap-3 font-mono text-base font-bold text-slate-500">
                <span className="hover:text-white cursor-pointer">01</span>
                <span className="hover:text-white cursor-pointer">02</span>
                <div className="flex items-center gap-2 text-purple-400 font-extrabold text-lg">
                  <span>03</span>
                  <span className="w-8 h-[2px] bg-purple-500 hidden lg:block" />
                </div>
                <span className="hover:text-white cursor-pointer">04</span>
                <span className="hover:text-white cursor-pointer">05</span>
              </div>
            </div>
          </div>


          {/* 3-Column Editorial Subtext Grid (Reference 1) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-800">
            <div className="space-y-3 pr-4 border-r-0 md:border-r border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                {t("editorial.subtext01.tag")}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t("editorial.subtext01.desc")}
              </p>
              <Link 
                href="/lessons"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white hover:text-orange-400 transition-colors pt-2"
              >
                <span>{t("editorial.subtext01.link")}</span>
                <ChevronRight className="w-4 h-4 text-orange-400" />
              </Link>
            </div>

            <div className="space-y-3 pr-4 border-r-0 md:border-r border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                {t("editorial.subtext02.tag")}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t("editorial.subtext02.desc")}
              </p>
              <Link 
                href="/ai-chat"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white hover:text-orange-400 transition-colors pt-2"
              >
                <span>{t("editorial.subtext02.link")}</span>
                <ChevronRight className="w-4 h-4 text-orange-400" />
              </Link>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                {t("editorial.subtext03.tag")}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t("editorial.subtext03.desc")}
              </p>
              <Link 
                href="/vocabulary"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white hover:text-orange-400 transition-colors pt-2"
              >
                <span>{t("editorial.subtext03.link")}</span>
                <ChevronRight className="w-4 h-4 text-orange-400" />
              </Link>
            </div>
          </div>

          {/* Hero CTA Button Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-10">
            <Link
              href={session ? "/dashboard" : "/sign-up"}
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold uppercase text-sm tracking-[0.2em] transition-all shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50"
            >
              <span>{session ? t("hero.goToDashboard") : t("hero.cta")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/placement-test"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate-900/80 border border-slate-700 hover:border-white text-white font-extrabold uppercase text-sm tracking-[0.2em] transition-all backdrop-blur-md"
            >
              <span>{t("editorial.placementTest")}</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Full-Width Horizontal Linear Divider (Reference 1 & 2) */}
      <section className="relative z-10 border-b border-slate-800 bg-slate-950/70 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-16 sm:w-32 bg-orange-500/60" />
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-slate-300">
              {t("editorial.divider")}
            </p>
            <span className="h-[1px] w-16 sm:w-32 bg-orange-500/60" />
          </div>
        </div>
      </section>

      {/* 4-Column Photo Category Grid (Reference 1 & 4) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Plitvice Waterfall Photo */}
          <Link href="/lessons" className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-orange-500 h-[420px] flex flex-col justify-between p-6 transition-all duration-500 shadow-2xl hover:shadow-orange-500/20 block">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('/croatia-card-1.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-orange-400 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-orange-500/30">
                {t("editorial.cards.c1.tag")}
              </span>
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-md shadow-orange-500/50" />
            </div>

            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold uppercase font-editorial tracking-wide group-hover:text-orange-400 transition-colors">
                {t("editorial.cards.c1.title")}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {t("editorial.cards.c1.desc")}
              </p>
              <div className="pt-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-orange-400">
                <span>{t("editorial.cards.c1.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card 2: Hvar Island Harbor Cafe Photo */}
          <Link href="/ai-chat" className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-orange-500 h-[420px] flex flex-col justify-between p-6 transition-all duration-500 shadow-2xl hover:shadow-orange-500/20 block">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('/croatia-card-2.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-amber-500/30">
                {t("editorial.cards.c2.tag")}
              </span>
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-md shadow-amber-500/50" />
            </div>

            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold uppercase font-editorial tracking-wide group-hover:text-amber-400 transition-colors">
                {t("editorial.cards.c2.title")}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {t("editorial.cards.c2.desc")}
              </p>
              <div className="pt-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-amber-400">
                <span>{t("editorial.cards.c2.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card 3: Rovinj Bell Tower Seaside Photo */}
          <Link href="/vocabulary" className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-orange-500 h-[420px] flex flex-col justify-between p-6 transition-all duration-500 shadow-2xl hover:shadow-orange-500/20 block">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('/croatia-card-3.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-orange-400 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-orange-500/30">
                {t("editorial.cards.c3.tag")}
              </span>
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-md shadow-orange-500/50" />
            </div>

            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold uppercase font-editorial tracking-wide group-hover:text-orange-400 transition-colors">
                {t("editorial.cards.c3.title")}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {t("editorial.cards.c3.desc")}
              </p>
              <div className="pt-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-orange-400">
                <span>{t("editorial.cards.c3.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card 4: Dubrovnik Old Town Photo */}
          <Link href="/games" className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-orange-500 h-[420px] flex flex-col justify-between p-6 transition-all duration-500 shadow-2xl hover:shadow-orange-500/20 block">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('/croatia-card-4.jpg')" }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-amber-500/30">
                {t("editorial.cards.c4.tag")}
              </span>
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-md shadow-amber-500/50" />
            </div>

            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold uppercase font-editorial tracking-wide group-hover:text-amber-400 transition-colors">
                {t("editorial.cards.c4.title")}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {t("editorial.cards.c4.desc")}
              </p>
              <div className="pt-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-amber-400">
                <span>{t("editorial.cards.c4.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* Video & Photo Promo Statement Block (Reference 1, 3 & 4) */}
      <section className="relative z-10 overflow-hidden border-t border-slate-800 bg-slate-950/90 text-white py-24 backdrop-blur-md">
        {/* Photo Background Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-25"
          style={{ backgroundImage: "url('/lessons-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Statement Block */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-orange-400">
                <Play className="w-4 h-4 fill-orange-400" />
                {t("editorial.promo.tag")}
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight font-editorial bg-gradient-to-r from-purple-300 via-pink-300 to-blue-200 bg-clip-text text-transparent">
                {t("editorial.promo.title")}
              </h2>


              <blockquote className="text-sm sm:text-base text-slate-300 italic border-l-2 border-orange-500 pl-4 py-1 leading-relaxed">
                &ldquo;{t("editorial.promo.quote")}&rdquo;
              </blockquote>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/games/audio-spelling"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold uppercase text-xs tracking-[0.2em] transition-all shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{t("editorial.promo.cta")}</span>
                </Link>
              </div>
            </div>

            {/* Right Video / Audio Preview Cards Stack (Reference 1 & 4) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Preview 1 */}
              <Link href="/games/audio-spelling" className="p-5 bg-slate-900/90 border border-slate-800 hover:border-orange-500 flex items-center gap-4 transition-colors group cursor-pointer backdrop-blur-md block">
                <div className="w-14 h-14 rounded-full bg-orange-600/20 text-orange-500 border border-orange-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Volume2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-orange-400">{t("editorial.promo.audio1.tag")}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    {t("editorial.promo.audio1.title")}
                  </h4>
                  <p className="text-xs text-slate-400">{t("editorial.promo.audio1.sub")}</p>
                </div>
              </Link>


              {/* Preview 2 */}
              <Link href="/ai-chat" className="p-5 bg-slate-900/90 border border-slate-800 hover:border-amber-500 flex items-center gap-4 transition-colors group cursor-pointer backdrop-blur-md block">
                <div className="w-14 h-14 rounded-full bg-amber-600/20 text-amber-500 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">{t("editorial.promo.audio2.tag")}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
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
