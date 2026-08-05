"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import {
  requestNotificationPermission,
  checkDailyLoginNotification,
  checkStreakDangerNotification,
  checkMissedDaysNotification,
} from "@/lib/notifications";

export function NotificationListener() {
  const { status } = useSession();
  const locale = useLocale();

  useEffect(() => {
    if (status !== "authenticated") return;

    // Request notification permission automatically
    requestNotificationPermission().catch(console.error);

    // Fetch user progress and daily activity
    Promise.all([
      fetch("/api/progress").then((r) => r.json()),
      fetch("/api/words/daily").then((r) => r.json()),
    ])
      .then(([progData, dailyData]) => {
        const streak = progData?.progress?.currentStreak || 0;
        const lastActivity = progData?.progress?.lastActivityDate;
        const completedToday = !!dailyData?.today?.completed;

        // 1. Daily login alert
        checkDailyLoginNotification(streak, locale);

        // 2. Streak danger warning (after 14:00 if incomplete)
        checkStreakDangerNotification(completedToday, streak, locale);

        // 3. Missed days warning (> 36 hours)
        checkMissedDaysNotification(lastActivity, locale);
      })
      .catch(console.error);
  }, [status, locale]);

  return null;
}
