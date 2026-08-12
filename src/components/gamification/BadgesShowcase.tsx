"use client";

import { useState, useEffect } from "react";
import { Award, Lock, Sparkles, CheckCircle2 } from "lucide-react";

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

  return (
    <div className="glass rounded-3xl p-6 border border-white/10 space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <h3 className="font-bold text-base text-foreground">
            {locale === "ua" ? "Досягнення та значки" : locale === "ru" ? "Достижения и значки" : "Achievements & Badges"}
          </h3>
        </div>

        <span className="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-500/10 text-amber-400 border border-amber-500/20">
          {unlockedCount}/{badges.length} {locale === "ua" ? "Відкрито" : locale === "ru" ? "Открыто" : "Unlocked"}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {badges.map((badge) => {
          const title = locale === "ua" ? badge.titleUa : locale === "ru" ? badge.titleRu : badge.titleEn;
          const desc = locale === "ua" ? badge.descUa : locale === "ru" ? badge.descRu : badge.descEn;

          return (
            <div
              key={badge.id}
              className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-between relative group ${
                badge.unlocked
                  ? "bg-gradient-to-b from-amber-500/10 to-yellow-500/5 border-amber-500/30 text-amber-200 shadow-md shadow-amber-500/10 hover:scale-[1.02]"
                  : "glass opacity-50 border-white/5 grayscale hover:grayscale-0"
              }`}
            >
              <div className="text-3xl mb-2 relative">
                {badge.icon}
                {badge.unlocked ? (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                ) : (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center">
                    <Lock className="w-2.5 h-2.5" />
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-bold text-xs line-clamp-1 text-foreground">{title}</h4>
                <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2 leading-tight">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
