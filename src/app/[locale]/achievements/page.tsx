"use client";

import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import {
  Award,
  Lock,
  CheckCircle2,
  Sparkles,
  Search,
  Filter,
  Trophy,
  Flame,
  BookOpen,
  Gamepad2,
  MessageCircle,
  Eye,
  EyeOff,
  Zap,
  ArrowLeft,
  X,
  Share2,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { RARITY_CONFIG, BadgeRarity, BadgeCategory } from "@/lib/badges-data";

interface BadgeItem {
  id: string;
  rarity: BadgeRarity;
  category: BadgeCategory;
  titleEn: string;
  titleRu: string;
  titleUa: string;
  descEn: string;
  descRu: string;
  descUa: string;
  icon: string;
  target?: number;
  progressCurrent?: number;
  unlocked: boolean;
  xpReward: number;
}

export default function AchievementsPage() {
  const locale = useLocale();
  const router = useRouter();
  const { status } = useSession();

  const [badges, setBadges] = useState<BadgeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRarity, setSelectedRarity] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "unlocked" | "locked">("all");
  const [selectedBadgeModal, setSelectedBadgeModal] = useState<BadgeItem | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/sign-in");
    }
  }, [status, router]);

  useEffect(() => {
    fetch("/api/badges")
      .then((res) => res.json())
      .then((data) => {
        if (data.badges) {
          setBadges(data.badges);
        }
      })
      .catch((err) => {
        console.error("Failed to load achievements:", err);
        toast.error("Failed to load achievements");
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter logic
  const filteredBadges = useMemo(() => {
    return badges.filter((b) => {
      // Search
      const title = locale === "ua" ? b.titleUa : locale === "ru" ? b.titleRu : b.titleEn;
      const desc = locale === "ua" ? b.descUa : locale === "ru" ? b.descRu : b.descEn;
      const matchesSearch =
        !searchQuery ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase());

      // Rarity
      const matchesRarity = selectedRarity === "all" || b.rarity === selectedRarity;

      // Category
      const matchesCategory = selectedCategory === "all" || b.category === selectedCategory;

      // Status
      const matchesStatus =
        selectedStatus === "all" ||
        (selectedStatus === "unlocked" && b.unlocked) ||
        (selectedStatus === "locked" && !b.unlocked);

      return matchesSearch && matchesRarity && matchesCategory && matchesStatus;
    });
  }, [badges, searchQuery, selectedRarity, selectedCategory, selectedStatus, locale]);

  // Statistics
  const totalBadges = badges.length;
  const unlockedCount = badges.filter((b) => b.unlocked).length;
  const unlockPercentage = totalBadges > 0 ? Math.round((unlockedCount / totalBadges) * 100) : 0;
  const legendaryUnlocked = badges.filter((b) => b.rarity === "legendary" && b.unlocked).length;
  const totalXPEarnedFromBadges = badges.filter((b) => b.unlocked).reduce((acc, b) => acc + (b.xpReward || 0), 0);

  const categoriesList: { id: string; labelUa: string; labelRu: string; labelEn: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "all", labelUa: "Усі категорії", labelRu: "Все категории", labelEn: "All Categories", icon: Award },
    { id: "words", labelUa: "Словник", labelRu: "Словарь", labelEn: "Vocabulary", icon: BookOpen },
    { id: "streak", labelUa: "Ударний режим", labelRu: "Ударный режим", labelEn: "Streaks", icon: Flame },
    { id: "lessons", labelUa: "Уроки та рівні", labelRu: "Уроки и уровни", labelEn: "Lessons & Levels", icon: Trophy },
    { id: "xp", labelUa: "Досвід (XP)", labelRu: "Опыт (XP)", labelEn: "Experience (XP)", icon: Sparkles },
    { id: "games", labelUa: "Міні-ігри", labelRu: "Мини-игры", labelEn: "Mini-games", icon: Gamepad2 },
    { id: "ai", labelUa: "ШІ-Наставник", labelRu: "ИИ-Наставник", labelEn: "AI Mentor", icon: MessageCircle },
    { id: "secrets", labelUa: "Секретні", labelRu: "Секретные", labelEn: "Secrets", icon: Eye },
  ];

  if (status === "loading" || loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-10 h-10 animate-spin text-amber-500" />
        <p className="text-sm text-muted-foreground">
          {locale === "ua" ? "Завантаження досягнень..." : locale === "ru" ? "Загрузка достижений..." : "Loading achievements..."}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {locale === "ua" ? "Назад до Дашборду" : locale === "ru" ? "Назад к Дашборду" : "Back to Dashboard"}
        </Link>
        <span className="text-xs font-mono text-muted-foreground">
          v1.2.0 • 100+ Achievements System
        </span>
      </div>

      {/* Hero Header Banner */}
      <div className="relative overflow-hidden glass rounded-3xl border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-amber-500/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-4 h-4 text-amber-400" />
              {locale === "ua" ? "Колекція Трофеїв" : locale === "ru" ? "Коллекция Трофеев" : "Trophy Collection"}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
              {locale === "ua" ? "Досягнення та Нагороди" : locale === "ru" ? "Достижения и Награды" : "Achievements & Rewards"}
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              {locale === "ua"
                ? "Виконуйте завдання, підвищуйте рівень володіння хорватською мовою, розкривайте секретні нагороди та збирайте легендарні трофеї!"
                : locale === "ru"
                ? "Выполняйте задания, повышайте уровень владения хорватским языком, открывайте секретные награды и собирайте легендарные трофеи!"
                : "Complete quests, level up your Croatian language proficiency, unlock secret easter eggs, and collect legendary trophies!"}
            </p>
          </div>

          {/* Quick Progress Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
              <p className="text-xs text-muted-foreground font-semibold">
                {locale === "ua" ? "Відкрито" : locale === "ru" ? "Открыто" : "Unlocked"}
              </p>
              <p className="text-2xl font-black text-amber-400">
                {unlockedCount} <span className="text-sm text-muted-foreground font-normal">/ {totalBadges}</span>
              </p>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-500"
                  style={{ width: `${unlockPercentage}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
              <p className="text-xs text-muted-foreground font-semibold">
                {locale === "ua" ? "Бонус XP" : locale === "ru" ? "Бонус XP" : "Bonus XP"}
              </p>
              <p className="text-2xl font-black text-purple-400">
                +{totalXPEarnedFromBadges} <span className="text-xs font-semibold">XP</span>
              </p>
              <p className="text-[10px] text-muted-foreground">
                {locale === "ua" ? "Отримано з трофеїв" : locale === "ru" ? "Получено из трофеев" : "Earned from trophies"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 col-span-2 sm:col-span-1">
              <p className="text-xs text-muted-foreground font-semibold">
                {locale === "ua" ? "Легендарні" : locale === "ru" ? "Легендарные" : "Legendary"}
              </p>
              <p className="text-2xl font-black text-amber-300 flex items-center justify-center gap-1">
                👑 {legendaryUnlocked}
              </p>
              <p className="text-[10px] text-muted-foreground">
                {locale === "ua" ? "Зібрані трофеї" : locale === "ru" ? "Собранные трофеи" : "Collected Trophies"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Control Bar */}
      <div className="glass rounded-2xl p-4 border border-white/10 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={locale === "ua" ? "Пошук досягнень за назвою або описом..." : locale === "ru" ? "Поиск достижений по названию или описанию..." : "Search achievements by title or description..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/20 dark:bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-amber-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Status Segment Filter */}
          <div className="flex items-center gap-1 p-1 bg-black/20 dark:bg-white/5 rounded-xl border border-white/10 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setSelectedStatus("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedStatus === "all" ? "bg-amber-500 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {locale === "ua" ? "Усі" : locale === "ru" ? "Все" : "All"} ({badges.length})
            </button>
            <button
              onClick={() => setSelectedStatus("unlocked")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedStatus === "unlocked" ? "bg-emerald-500 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {locale === "ua" ? "Відкриті" : locale === "ru" ? "Открытые" : "Unlocked"} ({unlockedCount})
            </button>
            <button
              onClick={() => setSelectedStatus("locked")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedStatus === "locked" ? "bg-slate-700 text-slate-200 shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {locale === "ua" ? "Заблоковані" : locale === "ru" ? "Заблокированные" : "Locked"} ({totalBadges - unlockedCount})
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 mobile-scroll-x">
          {categoriesList.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            const label = locale === "ua" ? cat.labelUa : locale === "ru" ? cat.labelRu : cat.labelEn;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shrink-0 border transition-all ${
                  isSelected
                    ? "bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-sm"
                    : "bg-white/5 border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Rarity Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 mobile-scroll-x border-t border-white/5 pt-3">
          <span className="text-xs font-bold text-muted-foreground mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            {locale === "ua" ? "Рідкість:" : locale === "ru" ? "Редкость:" : "Rarity:"}
          </span>
          <button
            onClick={() => setSelectedRarity("all")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
              selectedRarity === "all"
                ? "bg-white/15 border-white/30 text-foreground"
                : "bg-white/5 border-white/5 text-muted-foreground hover:text-foreground"
            }`}
          >
            {locale === "ua" ? "Будь-яка" : locale === "ru" ? "Любая" : "Any"}
          </button>
          {(Object.keys(RARITY_CONFIG) as BadgeRarity[]).map((rarityKey) => {
            const config = RARITY_CONFIG[rarityKey];
            const isSelected = selectedRarity === rarityKey;
            const label = locale === "ua" ? config.labelUa : locale === "ru" ? config.labelRu : config.labelEn;
            return (
              <button
                key={rarityKey}
                onClick={() => setSelectedRarity(rarityKey)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
                  isSelected
                    ? `${config.bg} ${config.border} ${config.color} shadow-sm`
                    : "bg-white/5 border-white/5 text-muted-foreground hover:text-foreground"
                }`}
              >
                {rarityKey === "secret" ? "👁️‍🗨️ " : ""}
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Badges Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
          <span>
            {locale === "ua" ? "Знайдено досягнень:" : locale === "ru" ? "Найдено достижений:" : "Found achievements:"} {filteredBadges.length}
          </span>
        </div>

        {filteredBadges.length === 0 ? (
          <div className="glass rounded-3xl p-12 text-center border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/20">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-foreground">
              {locale === "ua" ? "Досягнень не знайдено" : locale === "ru" ? "Достижений не найдено" : "No achievements found"}
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              {locale === "ua"
                ? "Спробуйте змінити фільтри або ввести інший пошуковий запит."
                : locale === "ru"
                ? "Попробуйте изменить фильтры или ввести другой поисковый запрос."
                : "Try adjusting your filters or typing a different search query."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {filteredBadges.map((badge) => {
              const rarityConfig = RARITY_CONFIG[badge.rarity];
              const title = locale === "ua" ? badge.titleUa : locale === "ru" ? badge.titleRu : badge.titleEn;
              const desc = locale === "ua" ? badge.descUa : locale === "ru" ? badge.descRu : badge.descEn;
              const rarityLabel = locale === "ua" ? rarityConfig.labelUa : locale === "ru" ? rarityConfig.labelRu : rarityConfig.labelEn;

              const hasTarget = Boolean(badge.target && badge.target > 1);
              const currentVal = badge.progressCurrent || 0;
              const targetVal = badge.target || 1;
              const progressPercent = Math.min(100, Math.round((currentVal / targetVal) * 100));

              return (
                <div
                  key={badge.id}
                  onClick={() => setSelectedBadgeModal(badge)}
                  className={`group relative p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer select-none overflow-hidden ${
                    badge.unlocked
                      ? `bg-gradient-to-b ${rarityConfig.gradient} ${rarityConfig.border} ${rarityConfig.shadow} hover:scale-[1.03] hover:-translate-y-1`
                      : "bg-slate-900/40 border-white/10 opacity-70 hover:opacity-100 hover:border-white/20"
                  }`}
                >
                  {/* Glowing background shimmer for unlocked legendary badges */}
                  {badge.unlocked && badge.rarity === "legendary" && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-yellow-300/5 to-transparent animate-pulse pointer-events-none" />
                  )}

                  {/* Top Badge Icons Header */}
                  <div className="flex items-start justify-between gap-1 mb-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${rarityConfig.bg} ${rarityConfig.border} ${rarityConfig.color}`}>
                      {rarityLabel}
                    </span>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded-md border border-amber-500/20">
                      +{badge.xpReward} XP
                    </span>
                  </div>

                  {/* Icon Render */}
                  <div className="flex flex-col items-center text-center space-y-2 mb-3">
                    <div className={`text-4xl relative transition-transform duration-300 group-hover:scale-110 ${!badge.unlocked ? "grayscale opacity-50" : ""}`}>
                      {badge.icon}
                      {badge.unlocked ? (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-800 border border-slate-600 text-slate-400 flex items-center justify-center">
                          <Lock className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>

                    <h4 className="font-bold text-xs line-clamp-1 text-foreground group-hover:text-amber-300 transition-colors">
                      {title}
                    </h4>

                    <p className="text-[11px] text-muted-foreground line-clamp-2 leading-tight">
                      {desc}
                    </p>
                  </div>

                  {/* Progress bar for tiered badges */}
                  {hasTarget && !badge.unlocked && (
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                        <span>{currentVal}</span>
                        <span>{targetVal}</span>
                      </div>
                      <div className="h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Badge Details Modal */}
      {selectedBadgeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md glass rounded-3xl p-6 sm:p-8 border border-amber-500/30 space-y-6 shadow-2xl shadow-amber-500/20 animate-scale-up">
            <button
              onClick={() => setSelectedBadgeModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-4">
              <div className="text-6xl inline-block relative p-4 rounded-3xl bg-amber-500/10 border border-amber-500/30 shadow-xl">
                {selectedBadgeModal.icon}
                {selectedBadgeModal.unlocked && (
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-emerald-500 text-white shadow-lg">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
              </div>

              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-2 ${RARITY_CONFIG[selectedBadgeModal.rarity].bg} ${RARITY_CONFIG[selectedBadgeModal.rarity].border} ${RARITY_CONFIG[selectedBadgeModal.rarity].color}`}>
                  {locale === "ua" ? RARITY_CONFIG[selectedBadgeModal.rarity].labelUa : locale === "ru" ? RARITY_CONFIG[selectedBadgeModal.rarity].labelRu : RARITY_CONFIG[selectedBadgeModal.rarity].labelEn}
                </span>
                <h3 className="text-xl font-black text-foreground">
                  {locale === "ua" ? selectedBadgeModal.titleUa : locale === "ru" ? selectedBadgeModal.titleRu : selectedBadgeModal.titleEn}
                </h3>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed px-4">
                {locale === "ua" ? selectedBadgeModal.descUa : locale === "ru" ? selectedBadgeModal.descRu : selectedBadgeModal.descEn}
              </p>

              {/* Reward info */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-semibold">
                  {locale === "ua" ? "Нагорода за відкриття:" : locale === "ru" ? "Награда за открытие:" : "Reward for unlocking:"}
                </span>
                <span className="text-sm font-bold text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-4 h-4" /> +{selectedBadgeModal.xpReward} XP
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const shareText = `Я відкрив трофей "${selectedBadgeModal.titleUa}" у Croatia Mentor! 🏆`;
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(shareText);
                      toast.success(locale === "ua" ? "Скопійовано в буфер обміну!" : locale === "ru" ? "Скопировано в буфер обмена!" : "Copied to clipboard!");
                    }
                  }}
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Share2 className="w-4 h-4" />
                  {locale === "ua" ? "Поділитися досягненням" : locale === "ru" ? "Поделиться достижением" : "Share Achievement"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
