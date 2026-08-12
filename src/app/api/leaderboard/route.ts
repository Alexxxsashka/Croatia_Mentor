import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();
    const currentUserId = session?.user?.id;

    // Get top users sorted by totalXP
    const usersProgress = await prisma.progress.findMany({
      take: 20,
      orderBy: { totalXP: "desc" },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    const leaderboard = usersProgress.map((item, index) => {
      const rank = index + 1;
      let league = "Bronze";
      if (rank <= 3) league = "Gold";
      else if (rank <= 10) league = "Silver";

      const name = item.user.name || item.user.email?.split("@")[0] || "Student";

      return {
        rank,
        userId: item.userId,
        name,
        image: item.user.image,
        totalXP: item.totalXP,
        currentLevel: item.currentLevel,
        currentStreak: item.currentStreak,
        league,
        isCurrentUser: currentUserId ? item.userId === currentUserId : false,
      };
    });

    return NextResponse.json({ leaderboard });
  } catch (error) {
    console.error("Leaderboard API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
