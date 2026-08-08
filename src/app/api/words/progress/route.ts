import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { calculateSM2, answerToQuality } from "@/lib/spaced-repetition";

// GET — fetch all word progress for current user
export async function GET(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const status = url.searchParams.get("status"); // filter by status
    const category = url.searchParams.get("category");

    const where: Record<string, unknown> = { userId: session.user.id };
    if (status) where.status = status;

    const wordProgress = await prisma.wordProgress.findMany({
      where,
      orderBy: { lastReviewed: "desc" },
    });

    // If category filter, we need to cross-reference with vocabulary data
    return NextResponse.json({ wordProgress });
  } catch (error) {
    console.error("Word progress fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST — update word progress after an answer
export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { wordHr, correct, timeTakenMs, status: explicitStatus } = body;

    if (!wordHr) {
      return NextResponse.json({ error: "wordHr is required" }, { status: 400 });
    }

    // Get existing progress or create new
    const existing = await prisma.wordProgress.findUnique({
      where: {
        userId_wordHr: {
          userId: session.user.id,
          wordHr,
        },
      },
    });

    const isExplicit = typeof explicitStatus === "string" && ["learned", "learning", "mastered", "new"].includes(explicitStatus);
    const isCorrect = isExplicit ? (explicitStatus === "learned" || explicitStatus === "mastered") : !!correct;

    const quality = answerToQuality(isCorrect, timeTakenMs);
    const sm2 = calculateSM2(
      quality,
      existing?.easeFactor ?? 2.5,
      existing?.interval ?? 1,
      existing?.repetitions ?? 0
    );

    const finalStatus = isExplicit ? explicitStatus : sm2.status;
    const finalNextReview = isExplicit
      ? (explicitStatus === "learned" || explicitStatus === "mastered"
          ? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          : new Date(Date.now() + 24 * 60 * 60 * 1000))
      : sm2.nextReview;

    const wordProgress = await prisma.wordProgress.upsert({
      where: {
        userId_wordHr: {
          userId: session.user.id,
          wordHr,
        },
      },
      update: {
        status: finalStatus,
        correctCount: { increment: isCorrect ? 1 : 0 },
        wrongCount: { increment: isCorrect ? 0 : 1 },
        lastReviewed: new Date(),
        nextReview: finalNextReview,
        easeFactor: sm2.easeFactor,
        interval: sm2.interval,
        repetitions: isExplicit ? (explicitStatus === "learned" ? 3 : 0) : sm2.repetitions,
      },
      create: {
        userId: session.user.id,
        wordHr,
        status: finalStatus,
        correctCount: isCorrect ? 1 : 0,
        wrongCount: isCorrect ? 0 : 1,
        lastReviewed: new Date(),
        nextReview: finalNextReview,
        easeFactor: sm2.easeFactor,
        interval: sm2.interval,
        repetitions: isExplicit ? (explicitStatus === "learned" ? 3 : 0) : sm2.repetitions,
      },
    });

    const isLearnedNow = sm2.status === "learned" || sm2.status === "mastered" || sm2.status === "learning";
    const wasLearned = existing?.status === "learned" || existing?.status === "mastered" || existing?.status === "learning";
    const isNewLearned = isLearnedNow && !wasLearned;

    // Sync to DailyActivity and Progress
    const today = new Date().toISOString().split("T")[0];
    await prisma.dailyActivity.upsert({
      where: {
        userId_date: {
          userId: session.user.id,
          date: today,
        },
      },
      update: {
        wordsReviewed: { increment: 1 },
        ...(isNewLearned ? { wordsLearned: { increment: 1 } } : {}),
      },
      create: {
        userId: session.user.id,
        date: today,
        wordsReviewed: 1,
        wordsLearned: isNewLearned ? 1 : 0,
      },
    });

    if (isNewLearned) {
      await prisma.progress.upsert({
        where: { userId: session.user.id },
        update: {
          totalWordsLearned: { increment: 1 },
          totalWordsReviewed: { increment: 1 },
          lastActivityDate: new Date(),
        },
        create: {
          userId: session.user.id,
          totalWordsLearned: 1,
          totalWordsReviewed: 1,
          lastActivityDate: new Date(),
        },
      });
    }

    return NextResponse.json({ wordProgress });
  } catch (error) {
    console.error("Word progress update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
