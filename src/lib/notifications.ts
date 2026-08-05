/**
 * Professional Smart Push Notification & Toast Manager
 */

import { toast } from "sonner";

export async function requestNotificationPermission(): Promise<boolean> {
  if (!("Notification" in window)) {
    console.warn("Browser does not support notifications");
    return false;
  }

  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;

  const permission = await Notification.requestPermission();
  return permission === "granted";
}

/**
 * Display dual notification: Native Web Push (if granted) + In-App Toast
 */
export function sendSmartNotification(
  title: string,
  body: string,
  type: "streak" | "warning" | "info" | "success" = "info",
  tag: string = "croatia-mentor-alert"
) {
  // 1. Native Browser Push Notification
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      new Notification(title, {
        body,
        icon: "/icon.png",
        badge: "/icon.png",
        tag,
      });
    } catch (e) {
      console.error("Browser notification failed:", e);
    }
  }

  // 2. In-App Sonner Toast Notification
  if (type === "streak") {
    toast.success(title, { description: body, duration: 6000 });
  } else if (type === "warning") {
    toast.warning(title, { description: body, duration: 7000 });
  } else if (type === "success") {
    toast.success(title, { description: body, duration: 5000 });
  } else {
    toast.info(title, { description: body, duration: 5000 });
  }
}

/**
 * Trigger daily login / streak active notification (once per day)
 */
export function checkDailyLoginNotification(streak: number, locale: string) {
  const todayStr = new Date().toISOString().split("T")[0];
  const lastLoginNotified = localStorage.getItem("last_daily_login_notified");

  if (lastLoginNotified === todayStr) return; // Already notified today

  localStorage.setItem("last_daily_login_notified", todayStr);

  const messages: Record<string, { title: string; body: string }> = {
    ua: {
      title: `🔥 Серія активна (${streak} дн.)`,
      body: "Ласкаво просимо! Пройдіть карточки або тест для досягнення сьогоднішньої цілі.",
    },
    ru: {
      title: `🔥 Серия активна (${streak} дн.)`,
      body: "Добро пожаловать! Пройдите карточки или тест для достижения сегодняшней цели.",
    },
    en: {
      title: `🔥 Active streak (${streak} days)`,
      body: "Welcome back! Practice flashcards or take a quiz to achieve your daily target.",
    },
  };

  const msg = messages[locale] || messages.en;
  sendSmartNotification(msg.title, msg.body, "streak", "daily-login");
}

/**
 * Check if streak is unfulfilled (user hasn't practiced today)
 */
export function checkStreakDangerNotification(
  completedToday: boolean,
  streak: number,
  locale: string
) {
  if (completedToday) return;

  const lastDangerNotified = localStorage.getItem("last_streak_danger_notified");
  const todayStr = new Date().toISOString().split("T")[0];
  if (lastDangerNotified === todayStr) return;

  const now = new Date();
  const currentHour = now.getHours();

  // Trigger reminder after 14:00 (2 PM) if daily goal not completed
  if (currentHour >= 14) {
    localStorage.setItem("last_streak_danger_notified", todayStr);

    const messages: Record<string, { title: string; body: string }> = {
      ua: {
        title: `⚠️ Денна ціль не завершена (${streak} дн.)`,
        body: "Приділіть кілька хвилин навчанню сьогодні, щоб зберегти вашу навчальну серію.",
      },
      ru: {
        title: `⚠️ Дневная цель не завершена (${streak} дн.)`,
        body: "Уделите несколько минут обучению сегодня, чтобы сохранить вашу учебную серию.",
      },
      en: {
        title: `⚠️ Daily goal incomplete (${streak} days)`,
        body: "Spend a few minutes learning today to maintain your active streak.",
      },
    };

    const msg = messages[locale] || messages.en;
    sendSmartNotification(msg.title, msg.body, "warning", "streak-danger");
  }
}

/**
 * Check for missed days (> 36 hours without activity)
 */
export function checkMissedDaysNotification(
  lastActivityDate: string | Date | undefined,
  locale: string
) {
  if (!lastActivityDate) return;

  const last = new Date(lastActivityDate);
  const now = new Date();
  const diffHours = (now.getTime() - last.getTime()) / (1000 * 60 * 60);

  const lastMissedNotified = localStorage.getItem("last_missed_notified");
  const todayStr = now.toISOString().split("T")[0];
  if (lastMissedNotified === todayStr) return;

  if (diffHours >= 36) {
    localStorage.setItem("last_missed_notified", todayStr);
    const daysMissed = Math.floor(diffHours / 24);

    const messages: Record<string, { title: string; body: string }> = {
      ua: {
        title: `📌 Ви пропустили ${daysMissed} дн.`,
        body: "Ви давно не займалися хорватською мовою. Поверніться до занять, щоб продовжити прогрес.",
      },
      ru: {
        title: `📌 Вы пропустили ${daysMissed} дн.`,
        body: "Вы давно не занимались хорватским языком. Вернитесь к занятиям, чтобы продолжить прогресс.",
      },
      en: {
        title: `📌 You missed ${daysMissed} days`,
        body: "You haven't practiced Croatian recently. Return to your studies to maintain progress.",
      },
    };

    const msg = messages[locale] || messages.en;
    sendSmartNotification(msg.title, msg.body, "warning", "missed-days");
  }
}

/**
 * Daily scheduled reminder timer
 */
let reminderTimer: ReturnType<typeof setTimeout> | null = null;

export function scheduleReminder(timeStr: string, locale: string) {
  if (reminderTimer) clearTimeout(reminderTimer);

  const [hours, minutes] = timeStr.split(":").map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);

  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  const ms = target.getTime() - now.getTime();

  const messages: Record<string, { title: string; body: string }> = {
    ua: { title: "🇭🇷 Час вчити хорватську!", body: "Не переривай серію! Відкрий Croatia Mentor і вивчи нові слова." },
    ru: { title: "🇭🇷 Время учить хорватский!", body: "Не прерывай серию! Открой Croatia Mentor и выучи новые слова." },
    en: { title: "🇭🇷 Time to learn Croatian!", body: "Don't break your streak! Open Croatia Mentor and learn new words." },
  };

  const msg = messages[locale] || messages.en;

  reminderTimer = setTimeout(() => {
    sendSmartNotification(msg.title, msg.body, "info", "scheduled-reminder");
    scheduleReminder(timeStr, locale);
  }, ms);
}

export function cancelReminder() {
  if (reminderTimer) {
    clearTimeout(reminderTimer);
    reminderTimer = null;
  }
}
