"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Puzzle,
  PenLine,
  ArrowRight,
  Gamepad2,
  Sparkles,
  Heart,
  Zap,
  BookOpen,
  Headphones,
  Trophy,
  Volume2,
  Brain,
  Flame,
} from "lucide-react";

export default function GamesPage() {
  const t = useTranslations("games");
  const locale = useLocale();

  const games = [
    {
      id: "word-match",
      title: t("wordMatch.title"),
      description: t("wordMatch.description"),
      icon: Puzzle,
      gradient: "from-purple-600 to-indigo-500",
      cta: t("wordMatch.play"),
      xp: "+20 XP",
      tag: "Vocabulary",
    },
    {
      id: "fill-blanks",
      title: t("fillBlanks.title"),
      description: t("fillBlanks.description"),
      icon: PenLine,
      gradient: "from-pink-600 to-purple-500",
      cta: t("fillBlanks.play"),
      xp: "+30 XP",
      tag: "Grammar",
    },
    {
      id: "scramble",
      title: t("scramble.title"),
      description: t("scramble.description"),
      icon: Sparkles,
      gradient: "from-indigo-600 to-violet-500",
      cta: t("scramble.play"),
      xp: "+25 XP",
      tag: "Spelling",
    },
    {
      id: "hangman",
      title: t("hangman.title"),
      description: t("hangman.description"),
      icon: Heart,
      gradient: "from-rose-600 to-pink-500",
      cta: t("hangman.play"),
      xp: "+15 XP",
      tag: "Arcade",
    },
    {
      id: "speed-quiz",
      title: t("speedQuiz.title"),
      description: t("speedQuiz.description"),
      icon: Zap,
      gradient: "from-amber-500 to-orange-500",
      cta: t("speedQuiz.play"),
      xp: "+50 XP",
      tag: "Speed",
    },
    {
      id: "reading",
      title: t("reading.title"),
      description: t("reading.description"),
      icon: BookOpen,
      gradient: "from-emerald-600 to-teal-500",
      cta: t("reading.play"),
      xp: "+35 XP",
      tag: "Comprehension",
    },
    {
      id: "listening",
      title: t("listening.title"),
      description: t("listening.description"),
      icon: Headphones,
      gradient: "from-cyan-600 to-blue-500",
      cta: t("listening.play"),
      xp: "+40 XP",
      tag: "Audio",
    },
    {
      id: "audio-spelling",
      title:
        locale === "ua"
          ? "Аудіо-диктант слів"
          : locale === "ru"
          ? "Аудио-диктант слов"
          : "Audio Word Dictation",
      description:
        locale === "ua"
          ? "Слухайте вимову слів нейромережевим голосом та пишіть їх хорватською мовою без візуальних підказок."
          : locale === "ru"
          ? "Слушайте произношение слов нейросетевым голосом и пишите их на хорватском языке без визуальных подсказок."
          : "Listen to natural audio pronunciation and spell Croatian words correctly without visual hints.",
      icon: Volume2,
      gradient: "from-violet-600 to-purple-500",
      cta:
        locale === "ua"
          ? "Грати в диктант"
          : locale === "ru"
          ? "Играть в диктант"
          : "Play Dictation",
      xp: "+45 XP",
      tag: "Dictation",
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-slate-100 font-sans selection:bg-purple-600 selection:text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* HERO HEADER */}
      <div className="text-center space-y-4 animate-fade-in pt-2 pb-4 border-b border-white/10">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-300 bg-purple-950/50 px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm shadow-lg shadow-purple-950/50">
          <Gamepad2 className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>
            {locale === "ua"
              ? "ІНТЕРАКТИВНИЙ ІГРОВИЙ ЦЕНТР"
              : locale === "ru"
              ? "ИНТЕРАКТИВНЫЙ ИГРОВОЙ ЦЕНТР"
              : "INTERACTIVE LANGUAGE ARCADE"}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight font-editorial">
          {locale === "ua" ? (
            <>
              Мовні <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">Міні-Ігри</span> Хорватської
            </>
          ) : locale === "ru" ? (
            <>
              Языковые <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">Мини-Игры</span> Хорватского
            </>
          ) : (
            <>
              Croatian <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">Mini-Games</span> Arcade
            </>
          )}
        </h1>

        <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>

        {/* Quick Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md text-center space-y-1">
            <Gamepad2 className="w-5 h-5 text-purple-400 mx-auto" />
            <span className="text-lg font-black text-white font-mono block">8 Modes</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              {locale === "ua" ? "Аркадних режимів" : locale === "ru" ? "Аркадных режимов" : "Arcade Modes"}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md text-center space-y-1">
            <Zap className="w-5 h-5 text-amber-400 mx-auto" />
            <span className="text-lg font-black text-amber-400 font-mono block">До +50 XP</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              {locale === "ua" ? "Бонус за гру" : locale === "ru" ? "Бонус за игру" : "Game Bonus"}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md text-center space-y-1">
            <Brain className="w-5 h-5 text-pink-400 mx-auto" />
            <span className="text-lg font-black text-pink-400 font-mono block">SM-2 SRS</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              {locale === "ua" ? "Закріплення" : locale === "ru" ? "Закрепление" : "Memory Retention"}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md text-center space-y-1">
            <Trophy className="w-5 h-5 text-indigo-400 mx-auto" />
            <span className="text-lg font-black text-indigo-400 font-mono block">Top Scores</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              {locale === "ua" ? "Лідерборд" : locale === "ru" ? "Лидерборд" : "Leaderboard"}
            </span>
          </div>
        </div>
      </div>

      {/* GAMES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => {
          const Icon = game.icon;

          return (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="group p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 backdrop-blur-md space-y-5 transition-all duration-300 shadow-xl relative overflow-hidden block"
            >
              {/* Background glow overlay */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${game.gradient} opacity-15 rounded-full blur-2xl group-hover:scale-150 group-hover:opacity-30 transition-all duration-500 pointer-events-none`}
              />

              <div className="flex items-start justify-between gap-4 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${game.gradient} flex items-center justify-center shadow-lg shadow-purple-600/20 group-hover:scale-110 transition-transform duration-300 text-white shrink-0`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {game.xp}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-950/80 text-slate-400 border border-white/5">
                    {game.tag}
                  </span>
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <h2 className="text-xl font-bold uppercase font-editorial text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                  {game.title}
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {game.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between relative z-10">
                <span className="text-xs font-extrabold uppercase tracking-wider text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                  <span>{game.cta}</span>
                </span>

                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
