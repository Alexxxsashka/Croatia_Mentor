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

    // Also count words in WordProgress table
    const wordProgressCount = await prisma.wordProgress.count({
      where: {
        userId: session.user.id,
        status: { in: ["learning", "learned", "mastered"] },
      },
    });

    const baseLearned = Math.max(existing?.totalWordsLearned || 0, wordProgressCount);
    const newTotalXP = addXP > 0 ? (existing?.totalXP || 0) + addXP : (totalXP !== undefined ? totalXP : existing?.totalXP || 0);

    const progress = await prisma.progress.upsert({
      where: { userId: session.user.id },
      update: {
        ...(currentLevel ? { currentLevel } : {}),
        totalXP: newTotalXP,
        totalWordsLearned: baseLearned + addWordsLearned,
        ...(addWordsReviewed > 0 ? { totalWordsReviewed: { increment: addWordsReviewed } } : {}),
        ...(currentStreak !== undefined ? { currentStreak } : {}),
        ...(completedLessons ? { completedLessons } : {}),
        ...(testScores ? { testScores } : {}),
        lastActivityDate: new Date(),
      },
      create: {
        userId: session.user.id,
        currentLevel: currentLevel || "A1",
        totalXP: newTotalXP,
        totalWordsLearned: baseLearned + addWordsLearned,
        totalWordsReviewed: addWordsReviewed,
        currentStreak: currentStreak || 0,
        testScores: testScores || [],
        ...(completedLessons ? { completedLessons } : {}),
      },
    });

    // Update DailyActivity for today
    if (addXP > 0 || addWordsLearned > 0 || addWordsReviewed > 0) {
      const today = new Date().toISOString().split("T")[0];
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
        },
        create: {
          userId: session.user.id,
          date: today,
          xpEarned: addXP,
          wordsLearned: addWordsLearned,
          wordsReviewed: addWordsReviewed,
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

    return NextResponse.json({
      progress: progress
        ? { ...progress, totalWordsLearned: realLearned }
        : {
            currentLevel: "A1",
            totalXP: 0,
            currentStreak: 0,
            longestStreak: 0,
            totalWordsLearned: wordProgressCount,
            totalWordsReviewed: 0,
            completedLessons: [],
            testScores: [],
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
