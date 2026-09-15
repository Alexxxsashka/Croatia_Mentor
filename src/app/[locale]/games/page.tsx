"use client";

import Image from 'next/image';
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Puzzle,
  PenLine,
  ArrowRight,
  Shapes,
  Sparkles,
  Heart,
  Zap,
  BookOpen,
  Headphones,

  Volume2,


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

  return <>
    <div className="page-heading"><div><h1>{locale==='ru'?'Практика':locale==='ua'?'Практика':'Practice'}</h1><p>{t('subtitle')}</p></div></div>
    <section className="practice-feature"><div><Shapes size={30}/><h2>{locale==='ru'?'Маленькие упражнения. Большой шаг вперёд.':locale==='ua'?'Маленькі вправи. Великий крок уперед.':'Small exercises. A big step forward.'}</h2><Link className="btn secondary" href="/games/word-match">{locale==='ru'?'Начать практику':locale==='ua'?'Почати практику':'Start practicing'}<ArrowRight size={18}/></Link></div><span className="practice-big" aria-hidden="true">Aa</span></section>
    <div className="game-grid">{games.map(game=>{const Icon=game.icon;return <Link key={game.id} href={`/games/${game.id}`} className="game-card"><span className="game-cover"><Image src={`/assets/games/${game.id}.png`} alt="" fill sizes="(max-width: 700px) 90vw, 400px" /></span><div className="between"><Icon className="game-icon" size={28} strokeWidth={1.6}/><span>{game.xp}</span></div><h2>{game.title}</h2><p>{game.description}</p><div className="between"><span>{game.cta}</span><ArrowRight size={18}/></div></Link>})}</div>
  </>;
}
