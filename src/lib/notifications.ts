/**
 * Browser Notification utilities for daily reminders
 */

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

export function showNotification(title: string, body: string, icon?: string) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;

  new Notification(title, {
    body,
    icon: icon || "/favicon.ico",
    badge: "/favicon.ico",
    tag: "croatia-mentor-reminder",
  });
}

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
    en: { title: "🇭🇷 Time to learn Croatian!", body: "Don't break your streak! Open Croatia Mentor and learn new words." },
    ru: { title: "🇭🇷 Время учить хорватский!", body: "Не прерывай серию! Открой Croatia Mentor и выучи новые слова." },
    ua: { title: "🇭🇷 Час вчити хорватську!", body: "Не переривай серію! Відкрий Croatia Mentor і вивчи нові слова." },
  };

  const msg = messages[locale] || messages.en;

  reminderTimer = setTimeout(() => {
    showNotification(msg.title, msg.body);
    // Reschedule for next day
    scheduleReminder(timeStr, locale);
  }, ms);
}

export function cancelReminder() {
  if (reminderTimer) {
    clearTimeout(reminderTimer);
    reminderTimer = null;
  }
}

export function checkMissedDay(lastActivityDate: string | Date | undefined, locale: string) {
  if (!lastActivityDate) return;

  const last = new Date(lastActivityDate);
  const now = new Date();
  const diffHours = (now.getTime() - last.getTime()) / (1000 * 60 * 60);

  if (diffHours > 36) {
    const messages: Record<string, { title: string; body: string }> = {
      en: { title: "😢 We miss you!", body: "You haven't practiced Croatian in a while. Come back to keep learning!" },
      ru: { title: "😢 Мы скучаем!", body: "Вы давно не занимались хорватским. Вернитесь, чтобы продолжить обучение!" },
      ua: { title: "😢 Ми сумуємо!", body: "Ви давно не займалися хорватською. Поверніться, щоб продовжити навчання!" },
    };
    const msg = messages[locale] || messages.en;
    showNotification(msg.title, msg.body);
  }
}
