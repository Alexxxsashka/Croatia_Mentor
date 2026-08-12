import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const {
      currentLevel,
      totalXP,
      xp,
      testScores,
      currentStreak,
      completedLessons,
      wordsLearned,
      wordsReviewed,
    } = body;

    const addXP = typeof xp === "number" ? xp : 0;
    const addWordsLearned = typeof wordsLearned === "number" ? wordsLearned : 0;
    const addWordsReviewed = typeof wordsReviewed === "number" ? wordsReviewed : 0;

    const existing = await prisma.progress.findUnique({
      where: { userId: session.user.id },
    });

    const today = new Date().toISOString().split("T")[0];
    const existingCompleted = existing?.completedLessons || [];
    const submittedCompleted = Array.isArray(completedLessons) ? completedLessons : [];
    const isAddingNewLesson = submittedCompleted.some((id: string) => !existingCompleted.includes(id));

    let lastLessonDateStr: string | null = null;
    if (existing?.lastLessonCompletedAt) {
      lastLessonDateStr = new Date(existing.lastLessonCompletedAt).toISOString().split("T")[0];
    }
    const hasCompletedLessonToday = lastLessonDateStr === today;

    // Reject adding a second new lesson on the same calendar day
    if (isAddingNewLesson && hasCompletedLessonToday) {
      return NextResponse.json(
        {
          error: "Daily lesson limit reached",
          dailyLimitReached: true,
          message: "You can only complete 1 lesson per day. Spend time practicing vocabulary and playing mini-games!",
        },
        { status: 400 }
      );
    }

    // Also count words in WordProgress table
    const wordProgressCount = await prisma.wordProgress.count({
      where: {
        userId: session.user.id,
        status: { in: ["learning", "learned", "mastered"] },
      },
    });

    const baseLearned = Math.max(existing?.totalWordsLearned || 0, wordProgressCount);
    const newTotalXP = addXP > 0 ? (existing?.totalXP || 0) + addXP : (totalXP !== undefined ? totalXP : existing?.totalXP || 0);

    const updateData: any = {
      ...(currentLevel ? { currentLevel } : {}),
      totalXP: newTotalXP,
      totalWordsLearned: baseLearned + addWordsLearned,
      ...(addWordsReviewed > 0 ? { totalWordsReviewed: { increment: addWordsReviewed } } : {}),
      ...(currentStreak !== undefined ? { currentStreak } : {}),
      ...(completedLessons ? { completedLessons } : {}),
      ...(testScores ? { testScores } : {}),
      lastActivityDate: new Date(),
    };

    if (isAddingNewLesson) {
      updateData.lastLessonCompletedAt = new Date();
    }

    const progress = await prisma.progress.upsert({
      where: { userId: session.user.id },
      update: updateData,
      create: {
        userId: session.user.id,
        currentLevel: currentLevel || "A1",
        totalXP: newTotalXP,
        totalWordsLearned: baseLearned + addWordsLearned,
        totalWordsReviewed: addWordsReviewed,
        currentStreak: currentStreak || 0,
        testScores: testScores || [],
        ...(completedLessons ? { completedLessons } : {}),
        ...(isAddingNewLesson ? { lastLessonCompletedAt: new Date() } : {}),
      },
    });

    // Update DailyActivity for today
    if (addXP > 0 || addWordsLearned > 0 || addWordsReviewed > 0 || isAddingNewLesson) {
      await prisma.dailyActivity.upsert({
        where: {
          userId_date: {
            userId: session.user.id,
            date: today,
          },
        },
        update: {
          xpEarned: { increment: addXP },
          wordsLearned: { increment: addWordsLearned },
          wordsReviewed: { increment: addWordsReviewed },
          ...(isAddingNewLesson ? { lessonsCompleted: { increment: 1 } } : {}),
        },
        create: {
          userId: session.user.id,
          date: today,
          xpEarned: addXP,
          wordsLearned: addWordsLearned,
          wordsReviewed: addWordsReviewed,
          lessonsCompleted: isAddingNewLesson ? 1 : 0,
        },
      });
    }

    return NextResponse.json({ progress });
  } catch (error) {
    console.error("Progress update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const progress = await prisma.progress.findUnique({
      where: { userId: session.user.id },
    });

    // Dynamically calculate learned words count from WordProgress
    const wordProgressCount = await prisma.wordProgress.count({
      where: {
        userId: session.user.id,
        status: { in: ["learning", "learned", "mastered"] },
      },
    });

    const realLearned = Math.max(progress?.totalWordsLearned || 0, wordProgressCount);

    if (progress && realLearned !== progress.totalWordsLearned) {
      await prisma.progress.update({
        where: { userId: session.user.id },
        data: { totalWordsLearned: realLearned },
      });
      progress.totalWordsLearned = realLearned;
    }

    const today = new Date().toISOString().split("T")[0];
    let hasCompletedLessonToday = false;
    if (progress?.lastLessonCompletedAt) {
      const lastLessonDateStr = new Date(progress.lastLessonCompletedAt).toISOString().split("T")[0];
      hasCompletedLessonToday = lastLessonDateStr === today;
    }

    return NextResponse.json({
      progress: progress
        ? { ...progress, totalWordsLearned: realLearned, hasCompletedLessonToday }
        : {
            currentLevel: "A1",
            totalXP: 0,
            currentStreak: 0,
            longestStreak: 0,
            totalWordsLearned: wordProgressCount,
            totalWordsReviewed: 0,
            completedLessons: [],
            testScores: [],
            hasCompletedLessonToday: false,
          },
    });
  } catch (error) {
    console.error("Progress fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
