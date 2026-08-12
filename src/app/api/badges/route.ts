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
  words_10: {
    id: "words_10",
    titleEn: "First Steps",
    titleRu: "Первые шаги",
    titleUa: "Перші кроки",
    descEn: "Learned your first 10 Croatian words",
    descRu: "Выучил свои первые 10 хорватских слов",
    descUa: "Вивчив свої перші 10 хорватських слів",
    icon: "🌱",
  },
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
  words_500: {
    id: "words_500",
    titleEn: "Vocabulary Master",
    titleRu: "Мастер словаря",
    titleUa: "Майстер словника",
    descEn: "Mastered 500 Croatian vocabulary words",
    descRu: "Освоил 500 хорватских слов",
    descUa: "Опанував 500 хорватських слів",
    icon: "👑",
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
  streak_30: {
    id: "streak_30",
    titleEn: "Unstoppable Legend",
    titleRu: "30 дней подряд (Несокрушимый)",
    titleUa: "30 днів поспіль (Незламний)",
    descEn: "Achieved a 30-day active learning streak",
    descRu: "Достиг 30-дневного ударного режима",
    descUa: "Досяг 30-денного ударного режиму",
    icon: "🔥",
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
  b1_expert: {
    id: "b1_expert",
    titleEn: "Intermediate Scholar",
    titleRu: "Эрудит B1+",
    titleUa: "Ерудит B1+",
    descEn: "Reached level B1 or higher",
    descRu: "Достиг уровня B1 или выше",
    descUa: "Досяг рівня B1 або вище",
    icon: "🏆",
  },
  dictation_sniper: {
    id: "dictation_sniper",
    titleEn: "Dictation Sniper",
    titleRu: "Снайпер диктантов",
    titleUa: "Снайпер диктантів",
    descEn: "Completed 3 dictation audio exercises",
    descRu: "Успешно прошёл 3 аудирования и диктанта",
    descUa: "Успішно пройшов 3 аудіювання та диктанти",
    icon: "🎯",
  },
  xp_1000: {
    id: "xp_1000",
    titleEn: "XP Legend",
    titleRu: "Тысячник XP",
    titleUa: "Тисячник XP",
    descEn: "Accumulated 1,000+ total XP points",
    descRu: "Заработал более 1000 XP",
    descUa: "Заробив понад 1000 XP",
    icon: "⭐",
  },
  lesson_hero: {
    id: "lesson_hero",
    titleEn: "Lesson Hero",
    titleRu: "Герой уроков",
    titleUa: "Герой уроків",
    descEn: "Completed 10 lessons in total",
    descRu: "Завершил 10 уроков",
    descUa: "Завершив 10 уроків",
    icon: "🚀",
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
    const [progress, existingBadges, wordCount] = await Promise.all([
      prisma.progress.findUnique({ where: { userId } }),
      prisma.userBadge.findMany({ where: { userId } }),
      prisma.wordProgress.count({
        where: {
          userId,
          status: { in: ["learning", "learned", "mastered"] },
        },
      }),
    ]);

    const unlockedSet = new Set(existingBadges.map((b) => b.badgeId));
    const toUnlock: string[] = [];

    const realWordsLearned = Math.max(progress?.totalWordsLearned || 0, wordCount);

    if (progress) {
      if (realWordsLearned >= 10 && !unlockedSet.has("words_10")) {
        toUnlock.push("words_10");
      }
      if (realWordsLearned >= 100 && !unlockedSet.has("words_100")) {
        toUnlock.push("words_100");
      }
      if (realWordsLearned >= 500 && !unlockedSet.has("words_500")) {
        toUnlock.push("words_500");
      }
      if ((progress.currentStreak || 0) >= 7 && !unlockedSet.has("streak_7")) {
        toUnlock.push("streak_7");
      }
      if ((progress.currentStreak || 0) >= 30 && !unlockedSet.has("streak_30")) {
        toUnlock.push("streak_30");
      }
      if (progress.currentLevel !== "A1" && !unlockedSet.has("a1_master")) {
        toUnlock.push("a1_master");
      }
      if (["B1", "B2", "C1", "C2"].includes(progress.currentLevel) && !unlockedSet.has("b1_expert")) {
        toUnlock.push("b1_expert");
      }
      if ((progress.completedLessons || []).filter((id) => id.includes("dictation")).length >= 3 && !unlockedSet.has("dictation_sniper")) {
        toUnlock.push("dictation_sniper");
      }
      if ((progress.totalXP || 0) >= 1000 && !unlockedSet.has("xp_1000")) {
        toUnlock.push("xp_1000");
      }
      if ((progress.completedLessons || []).length >= 10 && !unlockedSet.has("lesson_hero")) {
        toUnlock.push("lesson_hero");
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
