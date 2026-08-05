/**
 * SM-2 Spaced Repetition Algorithm
 * Based on SuperMemo 2 algorithm for optimal word review scheduling
 */

export interface SM2Result {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: Date;
  status: string;
}

/**
 * Calculate next review parameters using SM-2 algorithm
 * @param quality - Quality of response (0-5): 0=complete fail, 3=correct with difficulty, 5=perfect
 * @param previousEaseFactor - Previous ease factor (≥1.3)
 * @param previousInterval - Previous interval in days
 * @param previousRepetitions - Number of successful repetitions
 */
export function calculateSM2(
  quality: number,
  previousEaseFactor: number = 2.5,
  previousInterval: number = 1,
  previousRepetitions: number = 0
): SM2Result {
  // Clamp quality to 0-5
  const q = Math.max(0, Math.min(5, quality));

  let ef = previousEaseFactor;
  let interval = previousInterval;
  let repetitions = previousRepetitions;

  if (q >= 3) {
    // Correct response
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 3;
    } else {
      interval = Math.round(previousInterval * ef);
    }
    repetitions += 1;
  } else {
    // Incorrect response — reset
    repetitions = 0;
    interval = 1;
  }

  // Update ease factor
  ef = ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (ef < 1.3) ef = 1.3;

  // Calculate next review date
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);
  nextReview.setHours(0, 0, 0, 0);

  // Determine word status based on repetitions
  let status: string;
  if (repetitions === 0) {
    status = "learning";
  } else if (repetitions < 3) {
    status = "learning";
  } else if (repetitions < 8) {
    status = "learned";
  } else {
    status = "mastered";
  }

  return {
    easeFactor: Math.round(ef * 100) / 100,
    interval,
    repetitions,
    nextReview,
    status,
  };
}

/**
 * Convert a boolean correct/incorrect answer to SM-2 quality score
 */
export function answerToQuality(correct: boolean, timeTakenMs?: number): number {
  if (!correct) return 1; // Incorrect but remembered seeing the word

  // If we have timing data, use it to refine quality
  if (timeTakenMs !== undefined) {
    if (timeTakenMs < 2000) return 5; // Perfect — very fast
    if (timeTakenMs < 5000) return 4; // Good — reasonably fast
    if (timeTakenMs < 10000) return 3; // Correct but hesitant
    return 3; // Correct but slow
  }

  return 4; // Default correct quality
}

/**
 * Get words due for review (nextReview <= now)
 */
export function getWordsForReview<T extends { nextReview: Date | string | null }>(
  words: T[],
  limit: number = 25
): T[] {
  const now = new Date();
  return words
    .filter((w) => {
      if (!w.nextReview) return true; // New words always available
      const reviewDate = new Date(w.nextReview);
      return reviewDate <= now;
    })
    .slice(0, limit);
}

/**
 * Daily goal configuration based on selected minutes
 */
export const DAILY_GOALS: Record<number, { newWords: number; reviewWords: number }> = {
  5: { newWords: 5, reviewWords: 10 },
  10: { newWords: 10, reviewWords: 15 },
  15: { newWords: 15, reviewWords: 20 },
  20: { newWords: 20, reviewWords: 25 },
};

export function getDailyGoal(minutes: number): { newWords: number; reviewWords: number } {
  return DAILY_GOALS[minutes] || DAILY_GOALS[10];
}
