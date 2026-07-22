"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import {
  User,
  Mail,
  Shield,
  Trophy,
  Flame,
  BookOpen,
  Calendar,
  Lock,
  Edit2,
  Check,
  Globe,
  Key,
  Link as LinkIcon,
  Loader2,
  Award,
  Sparkles,
  Phone,
  Camera,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { lessonsData } from "@/lib/lessons-data";

interface TestScore {
  type: string;
  score: number;
  total: number;
  level: string;
  date: string;
}

interface UserProfileData {
  id: string;
  name: string;
  email: string;
  role: string;
  image?: string;
  phone?: string;
  nativeLanguage: string;
  createdAt: string;
  progress?: {
    currentLevel: string;
    totalXP: number;
    currentStreak: number;
    completedLessons: string[];
    testScores: TestScore[] | string;
    lastActivityDate?: string;
  };
}

const PRESET_AVATARS = [
  { emoji: "🦊", color: "from-orange-400 to-red-500" },
  { emoji: "🐼", color: "from-slate-700 to-slate-900" },
  { emoji: "🐱", color: "from-yellow-400 to-orange-500" },
  { emoji: "🧙‍♂️", color: "from-indigo-500 to-purple-600" },
  { emoji: "🚀", color: "from-cyan-400 to-blue-500" },
  { emoji: "🌟", color: "from-yellow-300 to-amber-500" },
  { emoji: "🧑‍🎓", color: "from-blue-500 to-indigo-600" },
  { emoji: "🦉", color: "from-emerald-400 to-teal-600" },
];

export default function ProfilePage() {
  const locale = useLocale();
  const { data: session, status, update: updateSession } = useSession();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<UserProfileData | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [nativeLang, setNativeLang] = useState("en");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const [customAvatarUrl, setCustomAvatarUrl] = useState("");
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  // Future auth fields (blocked/disabled)
  const [emailField, setEmailField] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      fetchProfile();
    } else if (status === "unauthenticated") {
      setLoading(false);
    }
  }, [status]);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/user/profile");
      if (res.ok) {
        const data = await res.json();
        setProfile(data.user);
        setName(data.user.name || "");
        setNativeLang(data.user.nativeLanguage || "en");
        setPhone(data.user.phone || "");
        setEmailField(data.user.email || "");
        setPhoneField(data.user.phone || "");

        const userImg = data.user.image || "";
        if (userImg) {
          const isPreset = PRESET_AVATARS.some((p) => p.emoji === userImg);
          if (isPreset) {
            setAvatar(userImg);
          } else {
            setAvatar("custom");
            setCustomAvatarUrl(userImg);
          }
        } else {
          setAvatar("🦊"); // Default fallback
        }
      } else {
        toast.error("Failed to load profile data");
      }
    } catch (err) {
      console.error("Profile load error:", err);
      toast.error("An error occurred while loading profile");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setSaving(true);
    const finalImage = avatar === "custom" ? customAvatarUrl.trim() : avatar;

    try {
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          nativeLanguage: nativeLang,
          phone: phone.trim(),
          image: finalImage,
        }),
      });

      if (res.ok) {
        toast.success(
          locale === "ua"
            ? "Профіль успішно оновлено!"
            : locale === "ru"
            ? "Профиль успешно обновлен!"
            : "Profile updated successfully!"
        );
        fetchProfile();
        if (updateSession) {
          updateSession({ name: name.trim() });
        }
      } else {
        toast.error("Failed to update profile");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while saving profile");
    } finally {
      setSaving(false);
    }
  };

  const selectPresetAvatar = (emoji: string) => {
    setAvatar(emoji);
    setIsSelectorOpen(false);
  };

  const useCustomAvatar = () => {
    if (!customAvatarUrl.trim()) {
      toast.error("Please enter a valid URL");
      return;
    }
    setAvatar("custom");
    setIsSelectorOpen(false);
  };

  const renderAvatarContent = (avatarStr: string | null | undefined, nameInitials: string) => {
    if (!avatarStr) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-black">
          {nameInitials}
        </div>
      );
    }

    const preset = PRESET_AVATARS.find((p) => p.emoji === avatarStr);
    if (preset) {
      return (
        <div className={`w-full h-full bg-gradient-to-br ${preset.color} flex items-center justify-center text-4xl`}>
          {preset.emoji}
        </div>
      );
    }

    return (
      <img
        src={avatarStr}
        alt="Avatar"
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = `https://api.dicebear.com/7.x/bottts/svg?seed=${nameInitials}`;
        }}
      />
    );
  };

  if (status === "loading" || loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
        <p className="text-muted-foreground">Loading Profile...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="max-w-md mx-auto my-16 p-8 rounded-3xl glass border border-white/10 text-center space-y-6">
        <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 text-blue-500">
          <User className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-bold">Sign in required</h1>
        <p className="text-muted-foreground">Please sign in to view and edit your profile.</p>
      </div>
    );
  }

  const currentLevel = profile?.progress?.currentLevel || "A1";
  const totalXP = profile?.progress?.totalXP ?? 0;
  const streak = profile?.progress?.currentStreak ?? 0;
  const completedLessons = profile?.progress?.completedLessons || [];
  const completedCount = completedLessons.length;

  const lessonsInLevel = lessonsData.filter((l) => l.level === currentLevel);
  const totalInLevel = lessonsInLevel.length;
  const completedInLevel = lessonsInLevel.filter((l) =>
    completedLessons.includes(l.id)
  ).length;
  const levelPercent = totalInLevel > 0 ? Math.round((completedInLevel / totalInLevel) * 100) : 0;

  const nameInitials = profile?.name?.[0]?.toUpperCase() || "U";
  const displayedAvatar = avatar === "custom" ? customAvatarUrl : avatar;

  const tempDisabledBadge =
    locale === "ua" ? "Аутентифікація заблокована" : locale === "ru" ? "Аутентификация заблокирована" : "Authentication Locked";

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Profile Header Banner */}
      <div className="relative overflow-hidden glass rounded-3xl border border-white/10 p-6 md:p-8 space-y-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left relative z-10">
          
          {/* Avatar Selector Trigger */}
          <div className="relative group cursor-pointer" onClick={() => setIsSelectorOpen(true)}>
            <div className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-300 group-hover:opacity-80">
              {renderAvatarContent(displayedAvatar, nameInitials)}
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
              <Camera className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold flex items-center gap-1 text-blue-400 shadow-md">
              <Award className="w-3.5 h-3.5" />
              {currentLevel}
            </div>
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-foreground drop-shadow-sm">
                {profile?.name || "Participant"}
              </h1>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {profile?.role === "admin" ? "Admin" : "Student"}
              </span>
            </div>

            <p className="text-sm text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5">
              <Mail className="w-4 h-4 text-blue-400" />
              {profile?.email}
            </p>

            <p className="text-xs text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {locale === "ua" ? "З нами з:" : locale === "ru" ? "С нами с:" : "Member since:"}{" "}
              {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : "2026"}
            </p>
          </div>
        </div>

        {/* Quick Stats Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/5 pt-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total XP</p>
              <p className="text-lg font-bold text-foreground">{totalXP}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Streak</p>
              <p className="text-lg font-bold text-foreground">{streak} days</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Lessons</p>
              <p className="text-lg font-bold text-foreground">{completedCount}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Current Level</p>
              <p className="text-lg font-bold text-foreground">{currentLevel}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Details and Statistics */}
        <div className="lg:col-span-2 space-y-8">
          <section className="glass rounded-3xl p-6 md:p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  {locale === "ua" ? "Особисті дані" : locale === "ru" ? "Личные данные" : "Personal Details"}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {locale === "ua" ? "Оновіть своє ім'я та мову інтерфейсу" : locale === "ru" ? "Обновите свое имя и язык интерфейса" : "Update your display name and primary language"}
                </p>
              </div>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  {locale === "ua" ? "Ім'я користувача" : locale === "ru" ? "Имя пользователя" : "Display Name"}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors pl-10"
                    required
                  />
                  <User className="w-4.5 h-4.5 text-muted-foreground absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  {locale === "ua" ? "Рідна мова" : locale === "ru" ? "Родной язык" : "Native Language"}
                </label>
                <div className="relative">
                  <select
                    value={nativeLang}
                    onChange={(e) => setNativeLang(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors pl-10 appearance-none cursor-pointer"
                  >
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                    <option value="ua">Українська</option>
                  </select>
                  <Globe className="w-4.5 h-4.5 text-muted-foreground absolute left-3.5 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  {locale === "ua" ? "Номер телефону" : locale === "ru" ? "Номер телефона" : "Phone Number"}
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+380991234567"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors pl-10"
                  />
                  <Phone className="w-4.5 h-4.5 text-muted-foreground absolute left-3.5 top-3" />
                </div>
              </div>

              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all text-sm shadow-lg shadow-blue-500/20 disabled:opacity-50"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    {locale === "ua" ? "Зберегти зміни" : locale === "ru" ? "Сохранить изменения" : "Save Changes"}
                  </>
                )}
              </button>
            </form>
          </section>

          {/* Level Progress Overview */}
          <section className="glass rounded-3xl p-6 md:p-8 border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">
                    {locale === "ua" ? "Прогрес рівня" : locale === "ru" ? "Прогресс уровня" : "Level Progress"} ({currentLevel})
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {completedInLevel} / {totalInLevel} {locale === "ua" ? "уроків пройдено" : locale === "ru" ? "уроков пройдено" : "lessons completed"}
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-purple-400">{levelPercent}%</span>
            </div>

            <div className="space-y-2">
              <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${levelPercent}%` }}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Security & Authentication Panel (Disabled Actions) */}
        <div className="space-y-8">
          <section className="glass rounded-3xl p-6 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="p-2.5 rounded-xl bg-red-500/15 text-red-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">
                  {locale === "ua" ? "Безпека та пароль" : locale === "ru" ? "Безопасность и пароль" : "Security & Password"}
                </h2>
                <p className="text-xs text-muted-foreground">Manage authentication settings</p>
              </div>
            </div>

            {/* Email change field (Blocked) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Email Address
                </label>
                <span className="text-[10px] text-amber-400 font-medium flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  {tempDisabledBadge}
                </span>
              </div>
              <input
                type="email"
                value={emailField}
                onChange={(e) => setEmailField(e.target.value)}
                disabled
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-muted-foreground cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="w-full px-4 py-2 rounded-xl text-xs bg-white/5 border border-white/10 text-muted-foreground cursor-not-allowed flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                {locale === "ua" ? "Змінити пошту" : locale === "ru" ? "Сменить почту" : "Change Email"}
              </button>
            </div>

            {/* Phone adding/updating (Blocked) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {locale === "ua" ? "Мобільний номер" : locale === "ru" ? "Мобильный номер" : "Mobile Phone"}
                </label>
                <span className="text-[10px] text-amber-400 font-medium flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  {tempDisabledBadge}
                </span>
              </div>
              <input
                type="tel"
                value={phoneField}
                onChange={(e) => setPhoneField(e.target.value)}
                disabled
                placeholder="+380991234567"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-muted-foreground cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="w-full px-4 py-2 rounded-xl text-xs bg-white/5 border border-white/10 text-muted-foreground cursor-not-allowed flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                {locale === "ua" ? "Підтвердити номер" : locale === "ru" ? "Подтвердить номер" : "Verify Phone Number"}
              </button>
            </div>

            {/* Password changing (Blocked) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {locale === "ua" ? "Новий пароль" : locale === "ru" ? "Новый пароль" : "New Password"}
                </label>
                <span className="text-[10px] text-amber-400 font-medium flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  {tempDisabledBadge}
                </span>
              </div>
              <input
                type="password"
                value={passwordField}
                onChange={(e) => setPasswordField(e.target.value)}
                disabled
                placeholder="••••••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-muted-foreground cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="w-full px-4 py-2 rounded-xl text-xs bg-white/5 border border-white/10 text-muted-foreground cursor-not-allowed flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                {locale === "ua" ? "Оновити пароль" : locale === "ru" ? "Обновить пароль" : "Update Password"}
              </button>
            </div>

            {/* Linked Accounts (Blocked) */}
            <div className="space-y-2 opacity-60 pt-2 border-t border-white/5">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center justify-between">
                <span>{locale === "ua" ? "Прив'язки акаунта" : locale === "ru" ? "Привязки аккаунта" : "Linked Accounts"}</span>
                <span className="text-[10px] text-amber-400 font-normal flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  {tempDisabledBadge}
                </span>
              </label>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <LinkIcon className="w-3.5 h-3.5" />
                  Google / OAuth
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Not linked</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Avatar Selection Modal */}
      {isSelectorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg overflow-hidden glass rounded-3xl border border-white/10 shadow-2xl p-6 md:p-8 animate-scale-up space-y-6">
            <button
              onClick={() => setIsSelectorOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h2 className="text-xl font-bold">
                {locale === "ua" ? "Оберіть аватарку" : locale === "ru" ? "Выберите аватарку" : "Choose Avatar"}
              </h2>
              <p className="text-xs text-muted-foreground">Select from presets or enter a custom link</p>
            </div>

            {/* Presets Grid */}
            <div className="grid grid-cols-4 gap-4">
              {PRESET_AVATARS.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => selectPresetAvatar(p.emoji)}
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-3xl shadow-md hover:scale-105 transition-transform duration-200 border-2 ${
                    avatar === p.emoji ? "border-blue-500" : "border-transparent"
                  }`}
                >
                  {p.emoji}
                </button>
              ))}
            </div>

            {/* Custom URL Input */}
            <div className="border-t border-white/5 pt-4 space-y-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {locale === "ua" ? "Власний URL зображення" : locale === "ru" ? "Свой URL изображения" : "Custom Image URL"}
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={customAvatarUrl}
                  onChange={(e) => setCustomAvatarUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  onClick={useCustomAvatar}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-xs hover:opacity-90 transition-all"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
