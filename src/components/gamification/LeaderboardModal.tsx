"use client";

import { useState, useEffect } from "react";
import { Trophy, Medal, Sparkles, X, Flame, Shield, Award } from "lucide-react";

interface LeaderboardItem {
  rank: number;
  userId: string;
  name: string;
  image?: string;
  totalXP: number;
  currentLevel: string;
  currentStreak: number;
  league: "Gold" | "Silver" | "Bronze" | string;
  isCurrentUser: boolean;
}

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

export function LeaderboardModal({ isOpen, onClose, locale }: LeaderboardModalProps) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch("/api/leaderboard")
        .then((res) => res.json())
        .then((data) => {
          if (data.leaderboard) {
            setLeaderboard(data.leaderboard);
          }
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <span className="text-2xl">🥇</span>;
    if (rank === 2) return <span className="text-2xl">🥈</span>;
    if (rank === 3) return <span className="text-2xl">🥉</span>;
    return <span className="w-6 text-center font-bold text-xs text-muted-foreground">#{rank}</span>;
  };

  const getLeagueBadge = (league: string) => {
    if (league === "Gold") {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 flex items-center gap-1">
          <Trophy className="w-3 h-3" />
          {locale === "ua" ? "Золота ліга" : locale === "ru" ? "Золотая лига" : "Gold League"}
        </span>
      );
    }
    if (league === "Silver") {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-300/20 text-slate-300 border border-slate-300/30 flex items-center gap-1">
          <Medal className="w-3 h-3" />
          {locale === "ua" ? "Срібна ліга" : locale === "ru" ? "Серебряная лига" : "Silver League"}
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-700/20 text-amber-500 border border-amber-700/30 flex items-center gap-1">
        <Shield className="w-3 h-3" />
        {locale === "ua" ? "Бронзова ліга" : locale === "ru" ? "Бронзовая лига" : "Bronze League"}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="glass rounded-3xl p-6 max-w-xl w-full border border-white/10 shadow-2xl relative animate-slide-up max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-xl hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-yellow-500/25">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              {locale === "ua" ? "Таблиця лідерів" : locale === "ru" ? "Таблица лидеров" : "Weekly Leaderboard"}
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </h3>
            <p className="text-xs text-muted-foreground">
              {locale === "ua" ? "Щотижневий рейтинг найкращих студентів" : locale === "ru" ? "Еженедельный рейтинг лучших студентов" : "Weekly top student rankings"}
            </p>
          </div>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1">
          {loading ? (
            <div className="text-center py-12 text-sm text-muted-foreground">
              {locale === "ua" ? "Завантаження рейтингу..." : locale === "ru" ? "Загрузка рейтинга..." : "Loading leaderboard..."}
            </div>
          ) : leaderboard.length === 0 ? (
            <div className="text-center py-12 text-sm text-muted-foreground">
              {locale === "ua" ? "Рейтинг порожній" : locale === "ru" ? "Рейтинг пуст" : "No rankings available"}
            </div>
          ) : (
            leaderboard.map((user) => (
              <div
                key={user.userId}
                className={`p-3.5 rounded-2xl flex items-center justify-between gap-3 border transition-all ${
                  user.isCurrentUser
                    ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border-blue-500/40 shadow-lg ring-1 ring-blue-500/30"
                    : "glass hover:bg-white/5 border-white/5"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="shrink-0 flex items-center justify-center w-8">
                    {getRankBadge(user.rank)}
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {user.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm truncate text-foreground">
                        {user.name}
                      </span>
                      {user.isCurrentUser && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-black bg-blue-500 text-white uppercase">
                          {locale === "ua" ? "Ви" : locale === "ru" ? "Вы" : "You"}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-0.5">
                      {getLeagueBadge(user.league)}
                      <span className="text-[10px] font-bold text-muted-foreground">
                        {user.currentLevel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {user.currentStreak > 0 && (
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                      <Flame className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{user.currentStreak}d</span>
                    </div>
                  )}

                  <div className="px-3 py-1 rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs font-black">
                    {user.totalXP} XP
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
