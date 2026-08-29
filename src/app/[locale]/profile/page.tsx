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
  Key,
  Loader2,
  Award,
  Sparkles,
  Phone,
  Camera,
  X,
  Target,
  Bell,
  Clock,
  Languages,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";
import { lessonsData } from "@/lib/lessons-data";
import { requestNotificationPermission, scheduleReminder } from "@/lib/notifications";
import { BadgesShowcase } from "@/components/gamification/BadgesShowcase";
import {
  auth,
  googleProvider,
  facebookProvider,
  appleProvider,
  RecaptchaVerifier,
} from "@/lib/firebase";
import {
  updateEmail,
  updatePassword,
  signInWithPhoneNumber,
  linkWithPopup,
  signInWithPopup,
  sendEmailVerification,
  ConfirmationResult,
} from "firebase/auth";

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
  emailVerified?: string | Date | null;
  nativeLanguage: string;
  createdAt: string;
  linkedProviders?: string[];
  progress?: {
    currentLevel: string;
    totalXP: number;
    currentStreak: number;
    totalWordsLearned?: number;
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
  const { status, update: updateSession } = useSession();

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

  // Auth & Security fields
  const [emailField, setEmailField] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [currentPasswordField, setCurrentPasswordField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [confirmPasswordField, setConfirmPasswordField] = useState("");
  const [updatingEmail, setUpdatingEmail] = useState(false);
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [verifyingPhone, setVerifyingPhone] = useState(false);
  const [phoneOtpStep, setPhoneOtpStep] = useState<"input" | "otp">("input");
  const [phoneOtpCode, setPhoneOtpCode] = useState("");
  const [phoneConfirmation, setPhoneConfirmation] = useState<ConfirmationResult | null>(null);
  const [linkingProvider, setLinkingProvider] = useState<string | null>(null);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [sendingResetPassword, setSendingResetPassword] = useState(false);

  // Learning settings states
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState(10);
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [reminderTime, setReminderTime] = useState("09:00");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);

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
          setAvatar("🦊");
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


  const handleSaveSettings = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSavingSettings(true);

    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dailyGoalMinutes,
          reminderEnabled,
          reminderTime,
          notificationsEnabled,
        }),
      });

      if (res.ok) {
        toast.success(
          locale === "ua"
            ? "Налаштування навчання збережено!"
            : locale === "ru"
            ? "Настройки обучения сохранены!"
            : "Learning settings saved!"
        );
        if (reminderEnabled) {
          scheduleReminder(reminderTime, locale);
        }
      } else {
        toast.error("Failed to save learning settings");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while saving settings");
    } finally {
      setSavingSettings(false);
    }
  };

  const handleToggleNotifications = async () => {
    if (!notificationsEnabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        setNotificationsEnabled(true);
        toast.success(
          locale === "ua"
            ? "Сповіщення увімкнено!"
            : locale === "ru"
            ? "Уведомления включены!"
            : "Notifications enabled!"
        );
      } else {
        toast.error(
          locale === "ua"
            ? "Дозвіл на сповіщення відхилено в браузері"
            : locale === "ru"
            ? "Разрешение на уведомления отклонено в браузере"
            : "Notification permission was denied in browser"
        );
      }
    } else {
      setNotificationsEnabled(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (status === "authenticated") {
      Promise.all([
        fetch("/api/user/profile").then((r) => (r.ok ? r.json() : null)),
        fetch("/api/settings").then((r) => (r.ok ? r.json() : null)),
      ])
        .then(([profileData, settingsData]) => {
          if (!isMounted) return;
          if (profileData?.user) {
            setProfile(profileData.user);
            setName(profileData.user.name || "");
            setNativeLang(profileData.user.nativeLanguage || "en");
            setPhone(profileData.user.phone || "");
            setEmailField(profileData.user.email || "");
            setPhoneField(profileData.user.phone || "");

            const userImg = profileData.user.image || "";
            if (userImg) {
              const isPreset = PRESET_AVATARS.some((p) => p.emoji === userImg);
              if (isPreset) {
                setAvatar(userImg);
              } else {
                setAvatar("custom");
                setCustomAvatarUrl(userImg);
              }
            } else {
              setAvatar("🦊");
            }
          }
          if (settingsData?.settings) {
            setDailyGoalMinutes(settingsData.settings.dailyGoalMinutes || 10);
            setReminderEnabled(settingsData.settings.reminderEnabled ?? true);
            setReminderTime(settingsData.settings.reminderTime || "09:00");
            setNotificationsEnabled(settingsData.settings.notificationsEnabled ?? false);
          }
        })
        .catch((err) => console.error("Profile/settings load error:", err))
        .finally(() => {
          if (isMounted) setLoading(false);
        });
    } else if (status === "unauthenticated") {
      if (isMounted) setLoading(false);
    }
    return () => {
      isMounted = false;
    };
  }, [status]);

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

  // Security handlers (Firebase Auth)
  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailField || emailField === profile?.email) return;
    setUpdatingEmail(true);

    try {
      if (auth.currentUser) {
        await updateEmail(auth.currentUser, emailField);
      }
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailField }),
      });
      if (res.ok) {
        toast.success("Email address updated!");
        fetchProfile();
      } else {
        toast.error("Failed to update email in profile");
      }
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Email update error:", error);
      toast.error(error.message || "Failed to update email");
    } finally {
      setUpdatingEmail(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordField || passwordField.length < 6) {
      toast.error(
        locale === "ua"
          ? "Новий пароль має бути не менше 6 символів"
          : locale === "ru"
          ? "Новый пароль должен быть не менее 6 символов"
          : "New password must be at least 6 characters"
      );
      return;
    }
    if (passwordField !== confirmPasswordField) {
      toast.error(
        locale === "ua"
          ? "Нові паролі не збігаються"
          : locale === "ru"
          ? "Новые пароли не совпадают"
          : "New passwords do not match"
      );
      return;
    }

    setUpdatingPassword(true);

    try {
      const res = await fetch("/api/user/change-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: currentPasswordField,
          newPassword: passwordField,
          confirmPassword: confirmPasswordField,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(
          locale === "ua"
            ? "Пароль успішно змінено!"
            : locale === "ru"
            ? "Пароль успешно изменен!"
            : "Password updated successfully!"
        );
        setCurrentPasswordField("");
        setPasswordField("");
        setConfirmPasswordField("");
      } else {
        toast.error(data.error || "Не вдалося оновити пароль");
      }
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Password update error:", error);
      toast.error(error.message || "Failed to update password");
    } finally {
      setUpdatingPassword(false);
    }
  };

  const handleSendPhoneOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneField) {
      toast.error(
        locale === "ua"
          ? "Будь ласка, введіть номер телефону"
          : locale === "ru"
          ? "Пожалуйста, введите номер телефона"
          : "Please enter a phone number"
      );
      return;
    }
    setVerifyingPhone(true);
    try {
      const win = window as unknown as { recaptchaVerifier?: RecaptchaVerifier };

      // 1. Reset container HTML if reCAPTCHA was previously mounted
      const container = document.getElementById("recaptcha-profile-container");
      if (container) {
        container.innerHTML = "";
      }

      // 2. Clear previous verifier instance
      if (win.recaptchaVerifier) {
        try {
          win.recaptchaVerifier.clear();
        } catch {}
        win.recaptchaVerifier = undefined;
      }

      // 3. Initialize fresh RecaptchaVerifier
      win.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-profile-container", {
        size: "invisible",
      });

      const appVerifier = win.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, phoneField, appVerifier);
      setPhoneConfirmation(confirmation);
      setPhoneOtpStep("otp");
      toast.success(
        locale === "ua"
          ? `📩 SMS-код успішно надіслано на номер ${phoneField}!`
          : locale === "ru"
          ? `📩 SMS-код успешно отправлен на номер ${phoneField}!`
          : `SMS verification code sent to ${phoneField}!`
      );
    } catch (err: unknown) {
      const error = err as Error;
      console.error("SMS verification error:", error);

      // Clean up verifier state on error
      const win = window as unknown as { recaptchaVerifier?: RecaptchaVerifier };
      if (win.recaptchaVerifier) {
        try {
          win.recaptchaVerifier.clear();
        } catch {}
        win.recaptchaVerifier = undefined;
      }
      const container = document.getElementById("recaptcha-profile-container");
      if (container) {
        container.innerHTML = "";
      }

      let msg = error.message || "Failed to send SMS code";
      if (error.message?.includes("invalid-phone-number")) {
        msg = locale === "ua"
          ? "Невірний формат номера. Вкажіть у міжнародному форматі +380..."
          : locale === "ru"
          ? "Неверный формат номера. Укажите в международном формате +380..."
          : "Invalid phone number format (+380...)";
      } else if (error.message?.includes("already been rendered")) {
        msg = locale === "ua"
          ? "Спробуйте натиснути 'Далі' ще раз."
          : locale === "ru"
          ? "Попробуйте нажать 'Далее' еще раз."
          : "Please try clicking 'Next' again.";
      } else if (error.message?.includes("error-code:-39") || error.message?.includes("captcha")) {
        msg = locale === "ua"
          ? "Перевірка капчі не пройдена або домен не авторизовано у Firebase."
          : locale === "ru"
          ? "Проверка капчи не пройдена или домен не авторизован в Firebase."
          : "reCAPTCHA check failed or domain not authorized in Firebase.";
      }

      toast.error(msg);
    } finally {
      setVerifyingPhone(false);
    }
  };

  const handleVerifyPhoneOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneOtpCode || !phoneConfirmation) return;
    setVerifyingPhone(true);
    try {
      await phoneConfirmation.confirm(phoneOtpCode);
      await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneField }),
      });
      toast.success(
        locale === "ua"
          ? "✅ Номер телефону успішно підтверджено та привязано!"
          : locale === "ru"
          ? "✅ Номер телефона успешно подтвержден и привязан!"
          : "Mobile phone verified & updated!"
      );
      setPhoneOtpStep("input");
      setIsPhoneModalOpen(false);
      fetchProfile();
    } catch (err: unknown) {
      console.error("OTP verification error:", err);
      toast.error(
        locale === "ua"
          ? "Невірний SMS-код підтвердження"
          : locale === "ru"
          ? "Неверный SMS-код подтверждения"
          : "Invalid OTP verification code"
      );
    } finally {
      setVerifyingPhone(false);
    }
  };

  const handleLinkProvider = async (providerName: "google" | "facebook" | "apple") => {
    setLinkingProvider(providerName);
    try {
      let provider;
      if (providerName === "google") provider = googleProvider;
      else if (providerName === "facebook") provider = facebookProvider;
      else provider = appleProvider;

      let resultUser;
      if (auth.currentUser) {
        const res = await linkWithPopup(auth.currentUser, provider);
        resultUser = res.user;
      } else {
        const res = await signInWithPopup(auth, provider);
        resultUser = res.user;
      }

      await fetch("/api/auth/firebase-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: resultUser.uid,
          email: profile?.email || resultUser.email,
          displayName: resultUser.displayName,
          photoURL: resultUser.photoURL,
          phoneNumber: resultUser.phoneNumber,
          providerId: providerName,
          emailVerified: resultUser.emailVerified,
        }),
      });

      toast.success(`Successfully linked ${providerName} account!`);
      // Refresh profile data
      const refreshRes = await fetch("/api/user/profile");
      if (refreshRes.ok) {
        const refreshData = await refreshRes.json();
        setProfile(refreshData.user);
      }
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Link provider error:", error);

      let msg = error.message || `Failed to link ${providerName}`;
      if (error.message?.includes("invalid-app-id") || error.message?.includes("App ID")) {
        msg = locale === "ua"
          ? "Прив'язка Facebook потребує вказання Facebook App ID у консолі Firebase."
          : locale === "ru"
          ? "Привязка Facebook требует указания Facebook App ID в консоли Firebase."
          : "Facebook linking requires configuring Facebook App ID in Firebase console.";
      } else if (error.message?.includes("popup-closed-by-user")) {
        msg = locale === "ua"
          ? "Вікно авторизації було закрито."
          : locale === "ru"
          ? "Окно авторизации было закрыто."
          : "Authorization window was closed.";
      }

      toast.error(msg);
    } finally {
      setLinkingProvider(null);
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
  const wordsLearned = profile?.progress?.totalWordsLearned ?? 0;

  const lessonsInLevel = lessonsData.filter((l) => l.level === currentLevel);
  const totalInLevel = lessonsInLevel.length;
  const completedInLevel = lessonsInLevel.filter((l) => completedLessons.includes(l.id)).length;
  const levelPercent = totalInLevel > 0 ? Math.round((completedInLevel / totalInLevel) * 100) : 0;

  const nameInitials = profile?.name?.[0]?.toUpperCase() || "U";
  const displayedAvatar = avatar === "custom" ? customAvatarUrl : avatar;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      <div id="recaptcha-profile-container"></div>
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
            <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-semibold flex items-center gap-1 text-blue-500 dark:text-blue-400 shadow-md">
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
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 border-t border-white/5 pt-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total XP</p>
              <p className="text-lg font-bold text-foreground">{totalXP}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">
                {locale === "ua" ? "Вивчено слів" : locale === "ru" ? "Выучено слов" : "Words Learned"}
              </p>
              <p className="text-lg font-bold text-foreground">{wordsLearned}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400 shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Streak</p>
              <p className="text-lg font-bold text-foreground">{streak} days</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Lessons</p>
              <p className="text-lg font-bold text-foreground">{completedCount}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3 col-span-2 sm:col-span-1">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Current Level</p>
              <p className="text-lg font-bold text-foreground">{currentLevel}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements & Badges Showcase */}
      <div>
        <BadgesShowcase locale={locale} />
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
                  {locale === "ua" ? "Оновіть своє ім'я користувача" : locale === "ru" ? "Обновите свое имя пользователя" : "Update your display name"}
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
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors pl-10"
                    required
                  />
                  <User className="w-4.5 h-4.5 text-muted-foreground absolute left-3.5 top-3" />
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

          {/* Learning Goal & Reminder Settings */}
          <section className="glass rounded-3xl p-6 md:p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  {locale === "ua" ? "Налаштування навчання" : locale === "ru" ? "Настройки обучения" : "Daily Learning Settings"}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {locale === "ua" ? "Оберіть денну ціль та час нагадувань" : locale === "ru" ? "Выберите дневную цель и время напоминаний" : "Configure daily time goal and reminder preferences"}
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-6">
              {/* Daily Goal selector */}
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {locale === "ua" ? "Денна ціль (хвилин на день)" : locale === "ru" ? "Дневная цель (минут в день)" : "Daily Goal (minutes per day)"}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 10, 15, 20].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setDailyGoalMinutes(mins)}
                      className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center ${
                        dailyGoalMinutes === mins
                          ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25"
                          : "bg-white/5 border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10"
                      }`}
                    >
                      <div>{mins} {locale === "ua" ? "хв" : locale === "ru" ? "мин" : "min"}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reminders & Notifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-semibold text-foreground">
                        {locale === "ua" ? "Щоденні нагадування" : locale === "ru" ? "Ежедневные напоминания" : "Daily Reminders"}
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={reminderEnabled}
                      onChange={(e) => setReminderEnabled(e.target.checked)}
                      className="w-4 h-4 rounded accent-blue-500 cursor-pointer"
                    />
                  </div>
                  {reminderEnabled && (
                    <div className="flex items-center gap-2 pt-1">
                      <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                      <select
                        value={reminderTime}
                        onChange={(e) => setReminderTime(e.target.value)}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs rounded-lg px-2 py-1 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="12:00">12:00</option>
                        <option value="18:00">18:00</option>
                        <option value="21:00">21:00</option>
                      </select>
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-semibold text-foreground">
                        {locale === "ua" ? "Браузерні сповіщення" : locale === "ru" ? "Браузерные уведомления" : "Push Notifications"}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleToggleNotifications}
                      className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${
                        notificationsEnabled
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                          : "bg-white/5 text-muted-foreground border-white/10 hover:text-foreground"
                      }`}
                    >
                      {notificationsEnabled
                        ? locale === "ua" ? "Увімкнено" : locale === "ru" ? "Включено" : "Enabled"
                        : locale === "ua" ? "Увімкнути" : locale === "ru" ? "Включить" : "Enable"}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={savingSettings}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-all text-sm shadow-lg shadow-emerald-500/20 disabled:opacity-50"
              >
                {savingSettings ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    {locale === "ua" ? "Зберегти налаштування" : locale === "ru" ? "Сохранить настройки" : "Save Learning Settings"}
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

        {/* Security & Authentication Panel (Firebase Auth Enabled) */}
        <div className="space-y-8">
          <section className="glass rounded-3xl p-6 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="p-2.5 rounded-xl bg-red-500/15 text-red-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">
                  {locale === "ua" ? "Безпека та прив'язки" : locale === "ru" ? "Безопасность и привязки" : "Security & Account Links"}
                </h2>
                <p className="text-xs text-muted-foreground">Manage your credentials & provider links</p>
              </div>
            </div>

            {/* Unverified Email Warning Banner */}
            {!profile?.emailVerified && (
              <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-amber-300 font-semibold">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>
                    {locale === "ua"
                      ? "⚠️ Підтвердіть пошту для безпеки вашого акаунту"
                      : locale === "ru"
                      ? "⚠️ Подтвердите почту для безопасности вашего аккаунта"
                      : "⚠️ Please verify your email for account security"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const res = await fetch("/api/auth/send-verification-email", { method: "POST" });
                      const data = await res.json();
                      if (res.ok && data.success) {
                        toast.success(data.message || "Ссылка отправлена!");
                      } else {
                        toast.error(data.error || "Не удалось отправить ссылку");
                      }
                    } catch (err: unknown) {
                      const error = err as Error;
                      toast.error(error.message || "Ошибка отправки письма");
                    }
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shrink-0 transition-all text-[11px] shadow-md shadow-amber-500/20"
                >
                  {locale === "ua" ? "Надіслати лист" : locale === "ru" ? "Отправить ссылку" : "Send Link"}
                </button>
              </div>
            )}

            {/* Change Email */}
            <form onSubmit={handleUpdateEmail} className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {locale === "ua" ? "Електронна пошта" : locale === "ru" ? "Электронная почта" : "Email Address"}
                </label>
                {profile?.emailVerified ? (
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Verified
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        const res = await fetch("/api/auth/send-verification-email", { method: "POST" });
                        const data = await res.json();
                        if (res.ok && data.success) {
                          toast.success(data.message || "Verification link sent!");
                        } else {
                          toast.error(data.error || "Failed to send verification link");
                        }
                      } catch (err: unknown) {
                        const error = err as Error;
                        toast.error(error.message || "Failed to send verification email");
                      }
                    }}
                    className="text-[10px] text-amber-400 font-bold hover:underline cursor-pointer"
                  >
                    Unverified — Click to Verify
                  </button>
                )}
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={emailField}
                  onChange={(e) => setEmailField(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={updatingEmail || !emailField}
                className="w-full px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white transition-all shadow-md shadow-blue-500/25 disabled:opacity-50 flex items-center justify-center gap-1.5"
              >
                {updatingEmail ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Edit2 className="w-3.5 h-3.5" />}
                {locale === "ua" ? "Оновити пошту" : locale === "ru" ? "Обновить почту" : "Update Email"}
              </button>
            </form>

            {/* Mobile Phone Section */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {locale === "ua" ? "Мобільний номер" : locale === "ru" ? "Мобильный номер" : "Mobile Phone"}
              </label>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-foreground font-semibold">
                    {profile?.phone || (locale === "ua" ? "Не вказано" : locale === "ru" ? "Не указан" : "Not set")}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setPhoneField(profile?.phone || "");
                    setPhoneOtpStep("input");
                    setPhoneOtpCode("");
                    setIsPhoneModalOpen(true);
                  }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/30 transition-all shadow-sm"
                >
                  {profile?.phone
                    ? (locale === "ua" ? "Змінити номер" : locale === "ru" ? "Изменить номер" : "Change Phone")
                    : (locale === "ua" ? "Прив'язати номер" : locale === "ru" ? "Привязать номер" : "Link Phone")}
                </button>
              </div>
            </div>

            {/* Password Section */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {locale === "ua" ? "Пароль акаунту" : locale === "ru" ? "Пароль аккаунта" : "Password"}
              </label>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-muted-foreground tracking-widest">••••••••••••</span>
                </div>
                <button
                  type="button"
                  disabled={sendingResetPassword}
                  onClick={async () => {
                    setSendingResetPassword(true);
                    try {
                      const res = await fetch("/api/auth/send-verification-email", { method: "POST" });
                      const data = await res.json();
                      if (res.ok && data.success) {
                        toast.success(
                          locale === "ua"
                            ? `📩 Лист із посиланням для зміни пароля надіслано на вашу пошту ${profile?.email}!`
                            : locale === "ru"
                            ? `📩 Письмо со ссылкой для смены пароля отправлено на вашу почту ${profile?.email}!`
                            : `Password reset link sent to ${profile?.email}!`
                        );
                      } else {
                        toast.error(data.error || "Failed to send reset email");
                      }
                    } catch (err: unknown) {
                      const error = err as Error;
                      toast.error(error.message || "Failed to send reset email");
                    } finally {
                      setSendingResetPassword(false);
                    }
                  }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 border border-emerald-500/30 transition-all flex items-center gap-1.5 shadow-sm disabled:opacity-50"
                >
                  {sendingResetPassword ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Key className="w-3.5 h-3.5" />}
                  {locale === "ua" ? "Змінити пароль" : locale === "ru" ? "Изменить пароль" : "Change Password"}
                </button>
              </div>
            </div>

            {/* Linked Accounts */}
            <div className="space-y-3 pt-2 border-t border-white/5">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <span>{locale === "ua" ? "Прив'язки акаунта" : locale === "ru" ? "Привязки аккаунта" : "Linked Accounts"}</span>
              </label>

              {/* Google */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-foreground font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.25 21.32 7.33 24 12 24z" />
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.68 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                  </svg>
                  Google
                </span>
                {profile?.linkedProviders?.includes("google") ? (
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    {locale === "ua" ? "Прив'язано" : locale === "ru" ? "Привязано" : "Linked"}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleLinkProvider("google")}
                    disabled={linkingProvider === "google"}
                    className="px-3 py-1 rounded-lg text-[11px] font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/20 disabled:opacity-50"
                  >
                    {linkingProvider === "google" ? "Linking..." : "Link Google"}
                  </button>
                )}
              </div>

              {/* Facebook */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-foreground font-medium">
                  <svg className="w-4 h-4 fill-blue-500" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </span>
                {profile?.linkedProviders?.includes("facebook") ? (
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    {locale === "ua" ? "Прив'язано" : locale === "ru" ? "Привязано" : "Linked"}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleLinkProvider("facebook")}
                    disabled={linkingProvider === "facebook"}
                    className="px-3 py-1 rounded-lg text-[11px] font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/20 disabled:opacity-50"
                  >
                    {linkingProvider === "facebook" ? "Linking..." : "Link Facebook"}
                  </button>
                )}
              </div>

              {/* Apple */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-foreground font-medium">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.09c.67-.82 1.13-1.96.99-3.09-1 .04-2.19.67-2.88 1.48-.61.71-1.15 1.88-.99 3 1.11.09 2.23-.57 2.88-1.39z" />
                  </svg>
                  Apple
                </span>
                {profile?.linkedProviders?.includes("apple") ? (
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    {locale === "ua" ? "Прив'язано" : locale === "ru" ? "Привязано" : "Linked"}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleLinkProvider("apple")}
                    disabled={linkingProvider === "apple"}
                    className="px-3 py-1 rounded-lg text-[11px] font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/20 disabled:opacity-50"
                  >
                    {linkingProvider === "apple" ? "Linking..." : "Link Apple"}
                  </button>
                )}
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

      {/* Phone Change Modal */}
      {isPhoneModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md p-6 space-y-5 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setIsPhoneModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-sm font-bold w-7 h-7 rounded-full bg-white/5 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {phoneOtpStep === "input" ? (
              <form onSubmit={handleSendPhoneOtp} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {locale === "ua" ? "Зміна номера телефону" : locale === "ru" ? "Смена номера телефона" : "Change Phone Number"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {locale === "ua"
                      ? "Введіть новий номер у міжнародному форматі (+380...). Ми надішлемо вам 6-значний SMS-код."
                      : locale === "ru"
                      ? "Введите новый номер в международном формате (+380...). Мы отправим вам 6-значный SMS-код."
                      : "Enter your phone number (+380...). We will send a 6-digit SMS code."}
                  </p>
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                  <input
                    type="tel"
                    value={phoneField}
                    onChange={(e) => setPhoneField(e.target.value)}
                    placeholder="+380991234567"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-sm text-foreground focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
                <div id="recaptcha-profile-container" />

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsPhoneModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-medium bg-white/5 border border-white/10 hover:bg-white/10"
                  >
                    {locale === "ua" ? "Скасувати" : locale === "ru" ? "Отмена" : "Cancel"}
                  </button>
                  <button
                    type="submit"
                    disabled={verifyingPhone || !phoneField}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transition-all flex items-center gap-1.5 shadow-md shadow-purple-500/25 disabled:opacity-50"
                  >
                    {verifyingPhone ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                    {locale === "ua" ? "Далі (Надіслати SMS)" : locale === "ru" ? "Далее (Отправить SMS)" : "Next (Send SMS)"}
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleVerifyPhoneOtp} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {locale === "ua" ? "Введіть SMS-код" : locale === "ru" ? "Введите SMS-код" : "Enter SMS Code"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {locale === "ua"
                      ? `SMS-код надіслано на номер ${phoneField}. Введіть його нижче.`
                      : locale === "ru"
                      ? `SMS-код отправлен на номер ${phoneField}. Введите его ниже.`
                      : `SMS code sent to ${phoneField}. Enter it below.`}
                  </p>
                </div>

                <input
                  type="text"
                  value={phoneOtpCode}
                  onChange={(e) => setPhoneOtpCode(e.target.value)}
                  placeholder="123456"
                  maxLength={6}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-center font-mono tracking-widest text-foreground focus:outline-none focus:border-purple-500"
                  required
                />

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setPhoneOtpStep("input")}
                    className="px-4 py-2 rounded-xl text-xs font-medium bg-white/5 border border-white/10 hover:bg-white/10"
                  >
                    {locale === "ua" ? "Назад" : locale === "ru" ? "Назад" : "Back"}
                  </button>
                  <button
                    type="submit"
                    disabled={verifyingPhone || !phoneOtpCode}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/25 disabled:opacity-50"
                  >
                    {verifyingPhone ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                    {locale === "ua" ? "Підтвердити" : locale === "ru" ? "Подтвердить" : "Verify Code"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
