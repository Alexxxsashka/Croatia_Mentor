import { prisma } from "@/lib/prisma";
import { lessonsData, getLocalizedText } from "@/lib/lessons-data";
import { vocabularyWords } from "@/lib/vocabulary-data";

export interface UserLearningContext {
  user: {
    name: string | null;
    email: string;
    nativeLanguage: string;
  };
  stats: {
    currentLevel: string;
    totalXP: number;
    currentStreak: number;
    longestStreak: number;
    totalWordsLearned: number;
    totalWordsReviewed: number;
  };
  lessons: {
    completedCount: number;
    completedTitles: string[];
    upcomingTitles: string[];
    nextRecommendedLesson: string | null;
  };
  vocabulary: {
    learnedCount: number;
    dueForReview: { hr: string; translation: string; status: string }[];
    weakWords: { hr: string; wrongCount: number }[];
    learnedSample: string[];
  };
  promptContextString: string;
}

export async function getUserLearningContext(userId: string): Promise<UserLearningContext | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        progress: true,
      },
    });

    if (!user) return null;

    const nativeLang = user.nativeLanguage || "en";
    const currentLevel = user.progress?.currentLevel || "A1";
    const completedLessonIds = new Set(user.progress?.completedLessons || []);

    // 1. Process Lessons (Completed vs Uncompleted)
    const completedTitles: string[] = [];
    const upcomingTitles: string[] = [];
    let nextRecommendedLesson: string | null = null;

    lessonsData.forEach((lesson) => {
      const title = getLocalizedText(lesson.title, nativeLang);
      const isCompleted = completedLessonIds.has(lesson.id);

      if (isCompleted) {
        completedTitles.push(`[${lesson.level}] ${title}`);
      } else if (lesson.level.toUpperCase() === currentLevel.toUpperCase()) {
        upcomingTitles.push(`[${lesson.level}] ${title}`);
        if (!nextRecommendedLesson) {
          nextRecommendedLesson = title;
        }
      }
    });

    // If no upcoming in current level, check higher levels or remaining
    if (upcomingTitles.length === 0) {
      lessonsData.forEach((lesson) => {
        if (!completedLessonIds.has(lesson.id)) {
          const title = getLocalizedText(lesson.title, nativeLang);
          upcomingTitles.push(`[${lesson.level}] ${title}`);
          if (!nextRecommendedLesson) {
            nextRecommendedLesson = title;
          }
        }
      });
    }

    // 2. Process Word Progress (Learned, SRS Due, Weak Words)
    const wordProgressList = await prisma.wordProgress.findMany({
      where: { userId },
      orderBy: { lastReviewed: "desc" },
    });

    const now = new Date();
    const dbFlashcards = await prisma.flashcard.findMany({ take: 150 });
    
    // Quick dictionary map for translations
    const dictMap = new Map<string, { en: string; ru: string; ua: string }>();
    vocabularyWords.forEach((w) => dictMap.set(w.hr.toLowerCase(), { en: w.en, ru: w.ru, ua: w.ua }));
    dbFlashcards.forEach((f) => dictMap.set(f.wordHr.toLowerCase(), { en: f.translationEng, ru: f.translationRu, ua: f.translationUa }));

    const getTranslation = (wordHr: string) => {
      const entry = dictMap.get(wordHr.toLowerCase());
      if (!entry) return "";
      return nativeLang === "ru" ? entry.ru : nativeLang === "ua" ? entry.ua : entry.en;
    };

    const dueForReview: { hr: string; translation: string; status: string }[] = [];
    const weakWords: { hr: string; wrongCount: number }[] = [];
    const learnedSample: string[] = [];

    wordProgressList.forEach((wp) => {
      const trans = getTranslation(wp.wordHr);

      if (wp.status === "learned" || wp.status === "mastered") {
        if (learnedSample.length < 20) learnedSample.push(wp.wordHr);
      }

      // SRS Due criteria: status is 'learning' or nextReview <= now
      const isDue = wp.status === "learning" || (wp.nextReview && new Date(wp.nextReview) <= now);
      if (isDue && dueForReview.length < 15) {
        dueForReview.push({
          hr: wp.wordHr,
          translation: trans,
          status: wp.status,
        });
      }

      if (wp.wrongCount > wp.correctCount && weakWords.length < 10) {
        weakWords.push({
          hr: wp.wordHr,
          wrongCount: wp.wrongCount,
        });
      }
    });

    // 3. Query AI Learned Memories (User specific & Global site facts)
    let aiMemoriesContext = "";
    try {
      const memories = await prisma.aiMemory.findMany({
        where: {
          OR: [{ userId }, { userId: null }],
        },
        take: 15,
        orderBy: { updatedAt: "desc" },
      });

      if (memories.length > 0) {
        aiMemoriesContext = memories
          .map((m) => `- [${m.category.toUpperCase()}] ${m.key}: ${m.content}`)
          .join("\n");
      }
    } catch (e) {
      console.warn("Error fetching AI memories for prompt context:", e);
    }

    // 4. Construct System Prompt Fragment
    const langMap: Record<string, string> = {
      en: "English",
      ru: "Russian",
      ua: "Ukrainian",
    };
    const targetLangName = langMap[nativeLang] || "English";
    const userNameStr = user.name ? user.name : "Student";

    const promptContextString = `
=== INDIVIDUAL STUDENT LEARNING PROFILE ===
Student Name: ${userNameStr}
Native Language: ${targetLangName} (Provide all grammar explanations, hints, and error feedback in ${targetLangName})
Current Level: ${currentLevel} (CEFR)
Total XP: ${user.progress?.totalXP || 0} XP | Current Streak: ${user.progress?.currentStreak || 0} days

PROGRESS ON LESSONS:
- Completed Lessons (${completedTitles.length}): ${completedTitles.slice(0, 10).join(", ") || "None yet"}
- Next Uncompleted Lessons in Queue (${upcomingTitles.length}): ${upcomingTitles.slice(0, 5).join(", ") || "All current level lessons completed!"}
- Next Recommended Lesson: ${nextRecommendedLesson || "Advance to next level test"}

VOCABULARY STATUS:
- Total Learned/Mastered Words: ${user.progress?.totalWordsLearned || learnedSample.length}
- Words Due for Spaced Repetition (SRS): ${dueForReview.length > 0 ? dueForReview.map((w) => `${w.hr}${w.translation ? ` (${w.translation})` : ""}`).join(", ") : "None currently due!"}
- Weak/Misspelled Words: ${weakWords.length > 0 ? weakWords.map((w) => `${w.hr} (${w.wrongCount} mistakes)`).join(", ") : "None"}

${aiMemoriesContext ? `BACKEND AI LEARNED MEMORY & FACTS:\n${aiMemoriesContext}\n` : ""}
INSTRUCTIONS FOR INDIVIDUAL ADAPTATION:
1. Greet ${userNameStr} warmly when starting a new topic.
2. Adapt exercise complexity strictly to level ${currentLevel}.
3. If the student asks what to study next, explicitly recommend: "${nextRecommendedLesson || "level advancement"}".
4. If practicing conversation or generating exercises, ACTIVELY INVOLVE their due SRS repetition words (${dueForReview.slice(0, 5).map((w) => w.hr).join(", ") || "recent vocabulary"}) to reinforce their memory.
5. If the student makes mistakes on weak words (${weakWords.map((w) => w.hr).join(", ") || "none"}), give extra grammar guidance in ${targetLangName}.
6. Utilize any learned background facts & corrections seamlessly without breaking character or explicitly mentioning database operations.
7. ABSOLUTE ALPHABET RULE: Provide explanations in ${targetLangName}, but ALL Croatian translations, words, and example sentences MUST be in genuine Croatian (Hrvatski) written strictly in Gaj's Latin alphabet (č, ć, đ, š, ž). NEVER output Cyrillic script for Croatian.
===========================================
`;

    return {
      user: {
        name: user.name,
        email: user.email,
        nativeLanguage: nativeLang,
      },
      stats: {
        currentLevel,
        totalXP: user.progress?.totalXP || 0,
        currentStreak: user.progress?.currentStreak || 0,
        longestStreak: user.progress?.longestStreak || 0,
        totalWordsLearned: user.progress?.totalWordsLearned || 0,
        totalWordsReviewed: user.progress?.totalWordsReviewed || 0,
      },
      lessons: {
        completedCount: completedTitles.length,
        completedTitles,
        upcomingTitles,
        nextRecommendedLesson,
      },
      vocabulary: {
        learnedCount: user.progress?.totalWordsLearned || learnedSample.length,
        dueForReview,
        weakWords,
        learnedSample,
      },
      promptContextString,
    };
  } catch (error) {
    console.error("Error building user learning context:", error);
    return null;
  }
}
