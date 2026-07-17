"use client";

import { useTranslations } from "next-intl";
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
} from "lucide-react";

export default function GamesPage() {
  const t = useTranslations("games");

  const games = [
    {
      id: "word-match",
      title: t("wordMatch.title"),
      description: t("wordMatch.description"),
      icon: Puzzle,
      gradient: "from-orange-500 to-yellow-400",
      cta: t("wordMatch.play"),
    },
    {
      id: "fill-blanks",
      title: t("fillBlanks.title"),
      description: t("fillBlanks.description"),
      icon: PenLine,
      gradient: "from-purple-500 to-pink-400",
      cta: t("fillBlanks.play"),
    },
    {
      id: "scramble",
      title: t("scramble.title"),
      description: t("scramble.description"),
      icon: Sparkles,
      gradient: "from-emerald-500 to-teal-400",
      cta: t("scramble.play"),
    },
    {
      id: "hangman",
      title: t("hangman.title"),
      description: t("hangman.description"),
      icon: Heart,
      gradient: "from-red-500 to-pink-400",
      cta: t("hangman.play"),
    },
    {
      id: "speed-quiz",
      title: t("speedQuiz.title"),
      description: t("speedQuiz.description"),
      icon: Zap,
      gradient: "from-yellow-500 to-orange-400",
      cta: t("speedQuiz.play"),
    },
    {
      id: "reading",
      title: t("reading.title"),
      description: t("reading.description"),
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-400",
      cta: t("reading.play"),
    },
    {
      id: "listening",
      title: t("listening.title"),
      description: t("listening.description"),
      icon: Headphones,
      gradient: "from-indigo-500 to-purple-400",
      cta: t("listening.play"),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 mb-4 shadow-2xl shadow-orange-500/25">
          <Gamepad2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground mt-2">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.id}`}
            className="group relative glass rounded-3xl p-6 card-hover overflow-hidden block"
          >
            {/* Background decoration */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${game.gradient} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500`}
            />

            <div className="relative flex flex-col h-full justify-between">
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${game.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <game.icon className="w-7 h-7 text-white" />
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {game.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {game.description}
                </p>
              </div>

              <div className="inline-flex items-center justify-between w-full mt-auto">
                <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                  {game.cta}
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
