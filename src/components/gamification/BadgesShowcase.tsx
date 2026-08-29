"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { Award, Lock, CheckCircle2, ArrowRight } from "lucide-react";

interface BadgeItem {
  id: string;
  titleEn: string;
  titleRu: string;
  titleUa: string;
  descEn: string;
  descRu: string;
  descUa: string;
  icon: string;
  unlocked: boolean;
}

interface BadgesShowcaseProps {
  locale: string;
}

export function BadgesShowcase({ locale }: BadgesShowcaseProps) {
  const [badges, setBadges] = useState<BadgeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/badges")
      .then((res) => res.json())
      .then((data) => {
        if (data.badges) {
          setBadges(data.badges);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="glass rounded-3xl p-6 border border-white/10 text-center text-xs text-muted-foreground animate-pulse">
        {locale === "ua" ? "Завантаження досягнень..." : locale === "ru" ? "Загрузка достижений..." : "Loading achievements..."}
      </div>
    );
  }

  const unlockedCount = badges.filter((b) => b.unlocked).length;
  const showcaseBadges = badges.slice(0, 4);

  return (
    <div className="glass rounded-3xl p-6 border border-amber-500/20 space-y-5 animate-fade-in shadow-lg shadow-amber-500/5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-foreground flex items-center gap-2">
              {locale === "ua" ? "Досягнення та значки" : locale === "ru" ? "Достижения и значки" : "Achievements & Badges"}
            </h3>
            <p className="text-xs text-muted-foreground">
              {locale === "ua" ? "Збирайте трофеї за активність у базі з 100+ нагород" : locale === "ru" ? "Собирайте трофеи за активность в базе из 100+ наград" : "Collect trophies from over 100+ available badges"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-xl text-xs font-black bg-amber-500/10 text-amber-400 border border-amber-500/20">
            {unlockedCount}/{badges.length} {locale === "ua" ? "Відкрито" : locale === "ru" ? "Открыто" : "Unlocked"}
          </span>
          <Link
            href="/achievements"
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 transition-all flex items-center gap-1.5 shadow-sm shadow-amber-500/20 shrink-0"
          >
            <span>{locale === "ua" ? "Всі 100+ трофеїв" : locale === "ru" ? "Все 100+ трофеев" : "All 100+ Trophies"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {showcaseBadges.map((badge) => {
          const title = locale === "ua" ? badge.titleUa : locale === "ru" ? badge.titleRu : badge.titleEn;
          const desc = locale === "ua" ? badge.descUa : locale === "ru" ? badge.descRu : badge.descEn;

          return (
            <div
              key={badge.id}
              className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-between relative group ${
                badge.unlocked
                  ? "bg-amber-500/10 dark:bg-gradient-to-b dark:from-amber-500/20 dark:to-yellow-500/10 border-amber-500/40 text-slate-900 dark:text-amber-200 shadow-md shadow-amber-500/10 hover:scale-[1.02]"
                  : "bg-slate-100/90 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 opacity-70 grayscale hover:grayscale-0"
              }`}
            >
              <div className="text-3xl mb-2 relative">
                {badge.icon}
                {badge.unlocked ? (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                ) : (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center">
                    <Lock className="w-2.5 h-2.5" />
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-bold text-xs line-clamp-1 text-slate-900 dark:text-slate-100">{title}</h4>
                <p className="text-[10px] font-medium text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-tight">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
