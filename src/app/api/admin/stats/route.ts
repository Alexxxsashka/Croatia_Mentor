import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = session?.user as any;
    if (!session || user?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // 1. Fetch all users with their progress
    const users = await prisma.user.findMany({
      include: {
        progress: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const totalUsers = users.length;

    // 2. Calculate aggregates
    let totalXP = 0;
    let totalStreak = 0;
    let maxXP = 0;
    let maxStreak = 0;

    const levelCounts: Record<string, number> = {
      A1: 0,
      A2: 0,
      B1: 0,
      B2: 0,
      C1: 0,
      C2: 0,
    };

    users.forEach((u) => {
      const xp = u.progress?.totalXP || 0;
      const streak = u.progress?.currentStreak || 0;
      const level = u.progress?.currentLevel || "A1";

      totalXP += xp;
      totalStreak += streak;

      if (xp > maxXP) maxXP = xp;
      if (streak > maxStreak) maxStreak = streak;

      if (levelCounts[level] !== undefined) {
        levelCounts[level]++;
      } else {
        levelCounts[level] = 1;
      }
    });

    const avgXP = totalUsers > 0 ? Math.round(totalXP / totalUsers) : 0;
    const avgStreak = totalUsers > 0 ? Math.round(totalStreak / totalUsers) : 0;

    // 3. Structure users list for table display
    const userList = users.map((u) => ({
      id: u.id,
      name: u.name || "Participant",
      email: u.email,
      role: u.role,
      currentLevel: u.progress?.currentLevel || "A1",
      totalXP: u.progress?.totalXP || 0,
      currentStreak: u.progress?.currentStreak || 0,
      completedCount: u.progress?.completedLessons?.length || 0,
      createdAt: u.createdAt,
    }));

    return NextResponse.json({
      stats: {
        totalUsers,
        totalXP,
        avgXP,
        maxXP,
        avgStreak,
        maxStreak,
        levelCounts,
      },
      users: userList,
    });
  } catch (error) {
    console.error("Admin stats GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
