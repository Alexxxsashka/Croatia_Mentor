import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentUser = session?.user as any;
    if (!session || currentUser?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const now = new Date();
    const past24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const past7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const past30d = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // 1. Fetch all users with progress and linked accounts
    const users = await prisma.user.findMany({
      include: {
        progress: true,
        accounts: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const totalUsers = users.length;

    // 2. User activity & registration aggregates
    let totalXP = 0;
    let totalStreak = 0;
    let maxXP = 0;
    let maxStreak = 0;
    let dau = 0;
    let wau = 0;
    let mau = 0;
    let activeStreaksCount = 0;
    let newUsersToday = 0;
    let newUsersThisWeek = 0;
    let verifiedUsersCount = 0;

    const levelCounts: Record<string, number> = {
      A1: 0,
      A2: 0,
      B1: 0,
      B2: 0,
      C1: 0,
      C2: 0,
    };

    const languageCounts: Record<string, number> = {
      ua: 0,
      ru: 0,
      en: 0,
      other: 0,
    };

    const providerCounts: Record<string, number> = {
      google: 0,
      credentials: 0,
      phone: 0,
    };

    users.forEach((u) => {
      const xp = u.progress?.totalXP || 0;
      const streak = u.progress?.currentStreak || 0;
      const level = u.progress?.currentLevel || "A1";
      const lastActive = u.progress?.lastActivityDate;

      totalXP += xp;
      totalStreak += streak;

      if (xp > maxXP) maxXP = xp;
      if (streak > maxStreak) maxStreak = streak;

      if (streak > 0) activeStreaksCount++;
      if (u.emailVerified) verifiedUsersCount++;

      if (u.createdAt >= past24h) newUsersToday++;
      if (u.createdAt >= past7d) newUsersThisWeek++;

      if (lastActive) {
        if (lastActive >= past24h) dau++;
        if (lastActive >= past7d) wau++;
        if (lastActive >= past30d) mau++;
      }

      if (levelCounts[level] !== undefined) {
        levelCounts[level]++;
      } else {
        levelCounts[level] = 1;
      }

      const lang = u.nativeLanguage || "en";
      if (languageCounts[lang] !== undefined) {
        languageCounts[lang]++;
      } else {
        languageCounts.other++;
      }

      if (u.accounts.length > 0) {
        u.accounts.forEach((acc) => {
          const p = acc.provider.toLowerCase();
          if (providerCounts[p] !== undefined) {
            providerCounts[p]++;
          } else {
            providerCounts[p] = 1;
          }
        });
      } else {
        providerCounts.credentials++;
      }
    });

    const avgXP = totalUsers > 0 ? Math.round(totalXP / totalUsers) : 0;
    const avgStreak = totalUsers > 0 ? Math.round(totalStreak / totalUsers) : 0;

    // 3. Learning Metrics (WordProgress & DailyActivity aggregates)
    const [wordStatusGroup, activityAggregate] = await Promise.all([
      prisma.wordProgress.groupBy({
        by: ["status"],
        _count: { status: true },
      }),
      prisma.dailyActivity.aggregate({
        _sum: {
          minutesSpent: true,
          wordsLearned: true,
          wordsReviewed: true,
          lessonsCompleted: true,
          testsCompleted: true,
        },
      }),
    ]);

    const wordStatusCounts = {
      new: 0,
      learning: 0,
      learned: 0,
      mastered: 0,
      total: 0,
    };

    wordStatusGroup.forEach((g) => {
      const count = g._count.status;
      wordStatusCounts.total += count;
      if (g.status in wordStatusCounts) {
        wordStatusCounts[g.status as keyof typeof wordStatusCounts] = count;
      }
    });

    const learningActivity = {
      totalMinutesSpent: activityAggregate._sum.minutesSpent || 0,
      totalHoursSpent: Math.round(((activityAggregate._sum.minutesSpent || 0) / 60) * 10) / 10,
      totalWordsLearned: activityAggregate._sum.wordsLearned || 0,
      totalWordsReviewed: activityAggregate._sum.wordsReviewed || 0,
      totalLessonsCompleted: activityAggregate._sum.lessonsCompleted || 0,
      totalTestsCompleted: activityAggregate._sum.testsCompleted || 0,
    };

    // 4. Structure user list for table display
    const userList = users.map((u) => ({
      id: u.id,
      name: u.name || "Participant",
      email: u.email,
      role: u.role,
      emailVerified: !!u.emailVerified,
      nativeLanguage: u.nativeLanguage || "en",
      currentLevel: u.progress?.currentLevel || "A1",
      totalXP: u.progress?.totalXP || 0,
      currentStreak: u.progress?.currentStreak || 0,
      longestStreak: u.progress?.longestStreak || 0,
      totalWordsLearned: u.progress?.totalWordsLearned || 0,
      completedCount: u.progress?.completedLessons?.length || 0,
      lastActivityDate: u.progress?.lastActivityDate || null,
      createdAt: u.createdAt,
      providers: u.accounts.map((a) => a.provider.toLowerCase()),
    }));

    return NextResponse.json({
      stats: {
        totalUsers,
        totalXP,
        avgXP,
        maxXP,
        avgStreak,
        maxStreak,
        dau,
        wau,
        mau,
        activeStreaksCount,
        newUsersToday,
        newUsersThisWeek,
        verifiedUsersCount,
        unverifiedUsersCount: totalUsers - verifiedUsersCount,
        levelCounts,
        languageCounts,
        providerCounts,
        wordStatusCounts,
        learningActivity,
      },
      users: userList,
    });
  } catch (error) {
    console.error("Admin stats GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
