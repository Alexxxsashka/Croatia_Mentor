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
    const { currentLevel, totalXP, testScores, currentStreak, completedLessons } = body;

    const updateData: Record<string, unknown> = {};
    if (currentLevel) updateData.currentLevel = currentLevel;
    if (totalXP !== undefined) updateData.totalXP = totalXP;
    if (currentStreak !== undefined) updateData.currentStreak = currentStreak;
    if (completedLessons) updateData.completedLessons = completedLessons;
    if (testScores) updateData.testScores = testScores;
    updateData.lastActivityDate = new Date();

    const progress = await prisma.progress.upsert({
      where: { userId: session.user.id },
      update: updateData,
      create: {
        userId: session.user.id,
        currentLevel: currentLevel || "A1",
        totalXP: totalXP || 0,
        currentStreak: currentStreak || 0,
        testScores: testScores || [],
        ...(completedLessons ? { completedLessons } : {}),
      },
    });

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

    return NextResponse.json({ progress });
  } catch (error) {
    console.error("Progress fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
