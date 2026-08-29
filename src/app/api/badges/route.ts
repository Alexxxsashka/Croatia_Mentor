import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { BADGE_DEFINITIONS, BadgeDefinition } from "@/lib/badges-data";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Fetch user progress, user badges, word counts, and daily activities
    const [progress, existingBadges, wordCount, dailyActivities] = await Promise.all([
      prisma.progress.findUnique({ where: { userId } }),
      prisma.userBadge.findMany({ where: { userId } }),
      prisma.wordProgress.count({
        where: {
          userId,
          status: { in: ["learning", "learned", "mastered"] },
        },
      }),
      prisma.dailyActivity.findMany({
        where: { userId },
        orderBy: { date: "desc" },
        take: 90,
      }),
    ]);

    const unlockedSet = new Set(existingBadges.map((b) => b.badgeId));
    const toUnlock: string[] = [];

    const realWordsLearned = Math.max(progress?.totalWordsLearned || 0, wordCount);
    const completedLessons = progress?.completedLessons || [];
    const currentStreak = progress?.currentStreak || 0;
    const totalXP = progress?.totalXP || 0;
    const currentLevel = progress?.currentLevel || "A1";

    // Helper map for current progress calculation for each badge
    const progressCurrentMap: Record<string, number> = {};

    Object.values(BADGE_DEFINITIONS).forEach((badge) => {
      let currentVal = 0;

      switch (badge.category) {
        case "words":
          if (badge.id.startsWith("words_")) {
            currentVal = realWordsLearned;
          } else if (badge.id.startsWith("flashcards_")) {
            currentVal = Math.floor(realWordsLearned * 0.8);
          } else if (badge.id === "quiz_perfect") {
            const hasPerfect = (progress?.testScores as any[])?.some((t: any) => t.score === t.total && t.total > 0);
            currentVal = hasPerfect ? 1 : 0;
          }
          break;

        case "streak":
          if (badge.id.startsWith("streak_")) {
            currentVal = currentStreak;
          } else if (badge.id === "weekend_hero") {
            const hasWeekend = dailyActivities.some((a) => {
              const d = new Date(a.date);
              return d.getDay() === 0 || d.getDay() === 6;
            });
            currentVal = hasWeekend ? 1 : 0;
          } else if (badge.id === "early_bird" || badge.id === "night_owl") {
            currentVal = unlockedSet.has(badge.id) ? 1 : 0;
          }
          break;

        case "lessons":
          if (badge.id.startsWith("lesson_")) {
            currentVal = completedLessons.length;
          } else if (badge.id.startsWith("level_")) {
            const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
            const targetLvl = badge.id.split("_")[1].toUpperCase();
            const userIdx = levels.indexOf(currentLevel);
            const targetIdx = levels.indexOf(targetLvl);
            currentVal = userIdx >= targetIdx ? 1 : 0;
          } else if (badge.id.startsWith("dictation_")) {
            currentVal = completedLessons.filter((id) => id.includes("dictation")).length;
          } else {
            currentVal = completedLessons.length > 0 ? 1 : 0;
          }
          break;

        case "xp":
          if (badge.id.startsWith("xp_")) {
            currentVal = totalXP;
          } else if (badge.id.startsWith("daily_xp_")) {
            const maxDailyXP = Math.max(...dailyActivities.map((a) => a.xpEarned), 0);
            currentVal = maxDailyXP;
          } else if (badge.id.startsWith("leaderboard_")) {
            currentVal = unlockedSet.has(badge.id) ? 1 : 0;
          }
          break;

        case "games":
          const totalGames = dailyActivities.reduce((acc, a) => acc + (a.lessonsCompleted || 0), 0);
          if (badge.id.startsWith("game_")) {
            currentVal = totalGames;
          } else {
            currentVal = unlockedSet.has(badge.id) ? 1 : (totalGames > 0 ? 1 : 0);
          }
          break;

        case "ai":
          const totalChatMsgs = dailyActivities.reduce((acc, a) => acc + (a.chatCount || 0), 0);
          if (badge.id.startsWith("ai_messages_") || badge.id === "ai_first") {
            currentVal = totalChatMsgs;
          } else {
            currentVal = unlockedSet.has(badge.id) ? 1 : (totalChatMsgs > 0 ? 1 : 0);
          }
          break;

        case "secrets":
          currentVal = unlockedSet.has(badge.id) ? 1 : 0;
          break;

        default:
          currentVal = 0;
      }

      progressCurrentMap[badge.id] = currentVal;

      // Check unlock criteria
      if (!unlockedSet.has(badge.id)) {
        if (badge.target && currentVal >= badge.target) {
          toUnlock.push(badge.id);
        } else if (!badge.target && currentVal > 0) {
          toUnlock.push(badge.id);
        }
      }
    });

    // Auto-unlock new qualifying badges
    if (toUnlock.length > 0) {
      await prisma.userBadge.createMany({
        data: toUnlock.map((badgeId) => ({ userId, badgeId })),
        skipDuplicates: true,
      });
      toUnlock.forEach((id) => unlockedSet.add(id));
    }

    // Format response badges
    const badges = Object.values(BADGE_DEFINITIONS).map((badge) => {
      const unlocked = unlockedSet.has(badge.id);
      const isSecret = badge.rarity === "secret";

      return {
        ...badge,
        unlocked,
        progressCurrent: progressCurrentMap[badge.id] || 0,
        // Hide descriptions of locked secret badges
        descEn: isSecret && !unlocked ? badge.descEn : (unlocked && badge.secretDescEn ? badge.secretDescEn : badge.descEn),
        descRu: isSecret && !unlocked ? badge.descRu : (unlocked && badge.secretDescRu ? badge.secretDescRu : badge.descRu),
        descUa: isSecret && !unlocked ? badge.descUa : (unlocked && badge.secretDescUa ? badge.secretDescUa : badge.descUa),
      };
    });

    return NextResponse.json({
      badges,
      stats: {
        total: badges.length,
        unlocked: unlockedSet.size,
        totalXP,
        currentStreak,
        currentLevel,
      },
    });
  } catch (error) {
    console.error("Badges API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
