import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export interface BadgeDefinition {
  id: string;
  titleEn: string;
  titleRu: string;
  titleUa: string;
  descEn: string;
  descRu: string;
  descUa: string;
  icon: string;
}

export const BADGE_DEFINITIONS: Record<string, BadgeDefinition> = {
  words_100: {
    id: "words_100",
    titleEn: "First 100 Words",
    titleRu: "Первая сотня слов",
    titleUa: "Перша сотня слів",
    descEn: "Learned 100 Croatian vocabulary words",
    descRu: "Выучил 100 хорватских слов",
    descUa: "Вивчив 100 хорватських слів",
    icon: "📚",
  },
  streak_7: {
    id: "streak_7",
    titleEn: "Streak Warrior",
    titleRu: "7 дней подряд (Streak Warrior)",
    titleUa: "7 днів поспіль (Streak Warrior)",
    descEn: "Maintained a 7-day learning streak",
    descRu: "Удерживал 7-дневный ударный режим",
    descUa: "Утримував 7-денний ударний режим",
    icon: "⚡",
  },
  a1_master: {
    id: "a1_master",
    titleEn: "A1 Grammar Master",
    titleRu: "Мастер грамматики A1",
    titleUa: "Майстер граматики A1",
    descEn: "Mastered all A1 beginner modules",
    descRu: "Освоил начальные модули уровня A1",
    descUa: "Опанував початкові модулі рівня A1",
    icon: "🎓",
  },
  dictation_sniper: {
    id: "dictation_sniper",
    titleEn: "Dictation Sniper",
    titleRu: "Снайпер диктантов",
    titleUa: "Снайпер диктантів",
    descEn: "Completed 5 dictation listening exercises",
    descRu: "Успешно прошёл 5 аудирований и диктантов",
    descUa: "Успішно пройшов 5 аудіювань та диктантів",
    icon: "🎯",
  },
};

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Fetch user progress & existing badges
    const [progress, existingBadges] = await Promise.all([
      prisma.progress.findUnique({ where: { userId } }),
      prisma.userBadge.findMany({ where: { userId } }),
    ]);

    const unlockedSet = new Set(existingBadges.map((b) => b.badgeId));
    const toUnlock: string[] = [];

    if (progress) {
      if ((progress.totalWordsLearned || 0) >= 100 && !unlockedSet.has("words_100")) {
        toUnlock.push("words_100");
      }
      if ((progress.currentStreak || 0) >= 7 && !unlockedSet.has("streak_7")) {
        toUnlock.push("streak_7");
      }
      if (progress.currentLevel !== "A1" && !unlockedSet.has("a1_master")) {
        toUnlock.push("a1_master");
      }
      if ((progress.completedLessons || []).filter((id) => id.includes("dictation")).length >= 5 && !unlockedSet.has("dictation_sniper")) {
        toUnlock.push("dictation_sniper");
      }
    }

    if (toUnlock.length > 0) {
      await prisma.userBadge.createMany({
        data: toUnlock.map((badgeId) => ({ userId, badgeId })),
        skipDuplicates: true,
      });
      toUnlock.forEach((id) => unlockedSet.add(id));
    }

    const badges = Object.values(BADGE_DEFINITIONS).map((badge) => ({
      ...badge,
      unlocked: unlockedSet.has(badge.id),
    }));

    return NextResponse.json({ badges });
  } catch (error) {
    console.error("Badges API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
