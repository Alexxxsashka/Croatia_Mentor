"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Puzzle, PenLine, ArrowRight, Gamepad2 } from "lucide-react";

export default function GamesPage() {
  const t = useTranslations("games");

  const games = [
    {
      id: "word-match",
      title: t("wordMatch.title"),
      description: t("wordMatch.description"),
      icon: Puzzle,
      gradient: "from-orange-500 to-yellow-400",
      color: "orange",
      cta: t("wordMatch.play"),
    },
    {
      id: "fill-blanks",
      title: t("fillBlanks.title"),
      description: t("fillBlanks.description"),
      icon: PenLine,
      gradient: "from-purple-500 to-pink-400",
      color: "purple",
      cta: t("fillBlanks.play"),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 mb-4 shadow-2xl shadow-orange-500/25">
          <Gamepad2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground mt-2">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 stagger-children">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.id}`}
            className="group relative glass rounded-3xl p-8 card-hover overflow-hidden block"
          >
            {/* Background decoration */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${game.gradient} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500`}
            />

            <div className="relative">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${game.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <game.icon className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {game.title}
              </h2>
              <p className="text-muted-foreground mb-6">{game.description}</p>

              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg group-hover:shadow-blue-500/25 transition-all">
                {game.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
