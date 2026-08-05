/**
 * Duolingo-Style Smart Push Notification & Toast Manager
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
 * Trigger daily login / streak saved notification (once per day)
 */
export function checkDailyLoginNotification(streak: number, locale: string) {
  const todayStr = new Date().toISOString().split("T")[0];
  const lastLoginNotified = localStorage.getItem("last_daily_login_notified");

  if (lastLoginNotified === todayStr) return; // Already notified today

  localStorage.setItem("last_daily_login_notified", todayStr);

  const messages: Record<string, { title: string; body: string }> = {
    ua: {
      title: `🔥 Ласкаво просимо! Серію збережено (${streak} дн.)`,
      body: "Чудовий початок дня! Пройди кілька карточок або тест, щоб покращити словарний запас.",
    },
    ru: {
      title: `🔥 Добро пожаловать! Серия сохранена (${streak} дн.)`,
      body: "Отличное начало дня! Пройди пару карточек или тест, чтобы прокачать словарный запас.",
    },
    en: {
      title: `🔥 Welcome back! Streak active (${streak} days)`,
      body: "Great start! Practice a few flashcards or take a quiz to boost your vocabulary today.",
    },
  };

  const msg = messages[locale] || messages.en;
  sendSmartNotification(msg.title, msg.body, "streak", "daily-login");
}

/**
 * Check if streak is in danger (user hasn't practiced today or missed yesterday)
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

  // Trigger warning after 14:00 (2 PM) if daily goal not completed
  if (currentHour >= 14) {
    localStorage.setItem("last_streak_danger_notified", todayStr);

    const messages: Record<string, { title: string; body: string }> = {
      ua: {
        title: `🚨 Твоя серія в небезпеці! (${streak} дн.)`,
        body: "Огонь може згаснути! Приділи 5 хвилин хорватській мові прямо зараз.",
      },
      ru: {
        title: `🚨 Твоя серия в опасности! (${streak} дн.)`,
        body: "Огонь может погаснуть! Удели 5 минут хорватскому прямо сейчас.",
      },
      en: {
        title: `🚨 Your streak is in danger! (${streak} days)`,
        body: "Don't lose your streak flame! Spend 5 minutes practicing Croatian right now.",
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
        title: `🦉 Сова сумує! (Пропущено ${daysMissed} дн.)`,
        body: "Ти давно не вчив хорватську! Повертайся, щоб відновити серію і не забути слова.",
      },
      ru: {
        title: `🦉 Сова скучает! (Пропущено ${daysMissed} дн.)`,
        body: "Ты давно не учил хорватский! Возвращайся, чтобы восстановить серию и не забыть слова.",
      },
      en: {
        title: `🦉 We miss you! (${daysMissed} days missed)`,
        body: "You haven't practiced Croatian in a while! Come back to restore your streak.",
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
