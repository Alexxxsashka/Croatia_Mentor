import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getDailyGoal } from "@/lib/spaced-repetition";

// GET — get words for a learning session
export async function GET(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const category = url.searchParams.get("category") || null;
    const level = url.searchParams.get("level") || null;

    // Get user settings
    const settings = await prisma.userSettings.findUnique({
      where: { userId: session.user.id },
    });
    const dailyGoalMinutes = settings?.dailyGoalMinutes || 10;
    const goal = getDailyGoal(dailyGoalMinutes);

    // Get all user's word progress
    const allProgress = await prisma.wordProgress.findMany({
      where: { userId: session.user.id },
    });

    const progressMap = new Map(allProgress.map((p) => [p.wordHr, p]));

    // Get words due for review (nextReview <= now)
    const now = new Date();
    const reviewWords = allProgress
      .filter((p) => {
        if (!p.nextReview) return false;
        return new Date(p.nextReview) <= now;
      })
      .sort((a, b) => {
        const aDate = a.nextReview ? new Date(a.nextReview).getTime() : 0;
        const bDate = b.nextReview ? new Date(b.nextReview).getTime() : 0;
        return aDate - bDate; // most overdue first
      })
      .slice(0, goal.reviewWords)
      .map((p) => p.wordHr);

    // The new words and review words will be matched against vocabulary 
    // data on the client side, since vocabulary-data.ts is a static file
    const learnedWordHrs = new Set(allProgress.map((p) => p.wordHr));

    return NextResponse.json({
      dailyGoal: goal,
      dailyGoalMinutes,
      reviewWordHrs: reviewWords,
      learnedWordHrs: Array.from(learnedWordHrs),
      totalProgress: {
        new: allProgress.filter((p) => p.status === "new").length,
        learning: allProgress.filter((p) => p.status === "learning").length,
        learned: allProgress.filter((p) => p.status === "learned").length,
        mastered: allProgress.filter((p) => p.status === "mastered").length,
        total: allProgress.length,
      },
      categoryFilter: category,
      levelFilter: level,
    });
  } catch (error) {
    console.error("Session fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
