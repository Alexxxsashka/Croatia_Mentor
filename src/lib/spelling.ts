export interface SpellingResult {
  isExact: boolean;
  isAlmost: boolean;
  isWrong: boolean;
  scoreCredit: number; // 1.0 for exact, 0.9 for diacritic difference, 0.8 for minor typo, 0 for wrong
  message: { en: string; ru: string; ua: string };
  diacriticErrors: { written: string; expected: string }[];
}

/**
 * Checks Croatian word spelling with intelligent diacritic and typo recognition.
 * Recognizes standard Latin keyboard inputs (e.g., 'c' for 'č'/'ć', 's' for 'š', 'z' for 'ž', 'd' for 'đ')
 * as "Almost Correct" with guidance.
 */
export function checkCroatianSpelling(input: string, target: string): SpellingResult {
  const cleanInput = input.trim().toLowerCase();
  const cleanTarget = target.trim().toLowerCase();

  if (!cleanInput) {
    return {
      isExact: false,
      isAlmost: false,
      isWrong: true,
      scoreCredit: 0,
      message: {
        en: `Incorrect. Correct spelling: "${cleanTarget}"`,
        ru: `Неверно. Правильное написание: "${cleanTarget}"`,
        ua: `Невірно. Правильне написання: "${cleanTarget}"`,
      },
      diacriticErrors: [],
    };
  }

  if (cleanInput === cleanTarget) {
    return {
      isExact: true,
      isAlmost: false,
      isWrong: false,
      scoreCredit: 1.0,
      message: {
        en: "Perfect! 100% Correct!",
        ru: "Идеально! Всё правильно!",
        ua: "Ідеально! Все правильно!",
      },
      diacriticErrors: [],
    };
  }

  // Normalize Croatian special diacritics to standard ASCII
  const normalizeCro = (str: string) =>
    str
      .replace(/[čć]/g, "c")
      .replace(/š/g, "s")
      .replace(/ž/g, "z")
      .replace(/đ/g, "d")
      .replace(/dž/g, "dz")
      .replace(/lj/g, "l")
      .replace(/nj/g, "n");

  const normalizedInput = normalizeCro(cleanInput);
  const normalizedTarget = normalizeCro(cleanTarget);

  // Check diacritic match (written with standard Latin letters instead of č, ć, š, ž, đ)
  if (normalizedInput === normalizedTarget) {
    const diacriticErrors: { written: string; expected: string }[] = [];
    for (let i = 0; i < Math.min(cleanInput.length, cleanTarget.length); i++) {
      if (cleanInput[i] !== cleanTarget[i]) {
        diacriticErrors.push({ written: cleanInput[i], expected: cleanTarget[i] });
      }
    }

    return {
      isExact: false,
      isAlmost: true,
      isWrong: false,
      scoreCredit: 0.9,
      message: {
        en: `Almost correct! Watch out for Croatian diacritics: "${cleanTarget}"`,
        ru: `Почти правильно! Обратите внимание на спецсимволы: "${cleanTarget}"`,
        ua: `Майже правильно! Зверніть увагу на спецсимволи: "${cleanTarget}"`,
      },
      diacriticErrors,
    };
  }

  // Levenshtein distance check for 1-character typo
  const dist = levenshteinDistance(cleanInput, cleanTarget);
  if (dist <= 1 && cleanTarget.length > 3) {
    return {
      isExact: false,
      isAlmost: true,
      isWrong: false,
      scoreCredit: 0.8,
      message: {
        en: `Almost correct! Minor 1-letter typo: "${cleanTarget}"`,
        ru: `Почти правильно! Небольшая опечатка в 1 букву: "${cleanTarget}"`,
        ua: `Майже правильно! Невелика описка в 1 літеру: "${cleanTarget}"`,
      },
      diacriticErrors: [],
    };
  }

  return {
    isExact: false,
    isAlmost: false,
    isWrong: true,
    scoreCredit: 0,
    message: {
      en: `Incorrect. Correct spelling: "${cleanTarget}"`,
      ru: `Неверно. Правильное написание: "${cleanTarget}"`,
      ua: `Невірно. Правильне написання: "${cleanTarget}"`,
    },
    diacriticErrors: [],
  };
}

function levenshteinDistance(a: string, b: string): number {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[a.length][b.length];
}
