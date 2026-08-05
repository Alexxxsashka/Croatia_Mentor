import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}

// GET — fetch today's activity
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const today = getTodayString();
    
    const activity = await prisma.dailyActivity.findUnique({
      where: {
        userId_date: {
          userId: session.user.id,
          date: today,
        },
      },
    });

    // Also get recent 90 days for calendar
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
    const startDate = ninetyDaysAgo.toISOString().split("T")[0];

    const recentActivity = await prisma.dailyActivity.findMany({
      where: {
        userId: session.user.id,
        date: { gte: startDate },
      },
      orderBy: { date: "asc" },
    });

    return NextResponse.json({ 
      today: activity || { wordsLearned: 0, wordsReviewed: 0, testsCompleted: 0, xpEarned: 0, minutesSpent: 0, completed: false },
      history: recentActivity,
    });
  } catch (error) {
    console.error("Daily activity fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST — update today's activity
export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { wordsLearned, wordsReviewed, testsCompleted, xpEarned, minutesSpent } = body;
    const today = getTodayString();

    // Get user settings for daily goal
    const settings = await prisma.userSettings.findUnique({
      where: { userId: session.user.id },
    });
    const dailyGoalMinutes = settings?.dailyGoalMinutes || 10;

    // Upsert daily activity
    const activity = await prisma.dailyActivity.upsert({
      where: {
        userId_date: {
          userId: session.user.id,
          date: today,
        },
      },
      update: {
        wordsLearned: { increment: wordsLearned || 0 },
        wordsReviewed: { increment: wordsReviewed || 0 },
        testsCompleted: { increment: testsCompleted || 0 },
        xpEarned: { increment: xpEarned || 0 },
        minutesSpent: { increment: minutesSpent || 0 },
      },
      create: {
        userId: session.user.id,
        date: today,
        wordsLearned: wordsLearned || 0,
        wordsReviewed: wordsReviewed || 0,
        testsCompleted: testsCompleted || 0,
        xpEarned: xpEarned || 0,
        minutesSpent: minutesSpent || 0,
      },
    });

    // Check if daily goal met (based on minutes spent threshold)
    const totalMinutes = activity.minutesSpent;
    const goalMet = totalMinutes >= dailyGoalMinutes;

    if (goalMet && !activity.completed) {
      await prisma.dailyActivity.update({
        where: { id: activity.id },
        data: { completed: true },
      });

      // Update streak
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      const yesterdayActivity = await prisma.dailyActivity.findUnique({
        where: {
          userId_date: {
            userId: session.user.id,
            date: yesterdayStr,
          },
        },
      });

      const progress = await prisma.progress.findUnique({
        where: { userId: session.user.id },
      });

      const currentStreak = (yesterdayActivity?.completed)
        ? (progress?.currentStreak || 0) + 1
        : 1;

      const longestStreak = Math.max(currentStreak, progress?.longestStreak || 0);

      await prisma.progress.upsert({
        where: { userId: session.user.id },
        update: {
          currentStreak,
          longestStreak,
          totalXP: { increment: xpEarned || 0 },
          totalWordsLearned: { increment: wordsLearned || 0 },
          totalWordsReviewed: { increment: wordsReviewed || 0 },
          lastActivityDate: new Date(),
        },
        create: {
          userId: session.user.id,
          currentStreak,
          longestStreak,
          totalXP: xpEarned || 0,
          totalWordsLearned: wordsLearned || 0,
          totalWordsReviewed: wordsReviewed || 0,
          lastActivityDate: new Date(),
        },
      });
    } else {
      // Even if goal not met, update XP and word counts
      await prisma.progress.upsert({
        where: { userId: session.user.id },
        update: {
          totalXP: { increment: xpEarned || 0 },
          totalWordsLearned: { increment: wordsLearned || 0 },
          totalWordsReviewed: { increment: wordsReviewed || 0 },
          lastActivityDate: new Date(),
        },
        create: {
          userId: session.user.id,
          totalXP: xpEarned || 0,
          totalWordsLearned: wordsLearned || 0,
          totalWordsReviewed: wordsReviewed || 0,
          lastActivityDate: new Date(),
        },
      });
    }

    return NextResponse.json({ activity: { ...activity, completed: goalMet } });
  } catch (error) {
    console.error("Daily activity update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
