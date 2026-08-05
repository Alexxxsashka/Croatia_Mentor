"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSession } from "next-auth/react";
import { Link } from "@/i18n/navigation";
import {
  vocabularyWords,
  vocabularyCategories,
  categoryLabels,
  type VocabWord,
} from "@/lib/vocabulary-data";
import { getDailyGoal } from "@/lib/spaced-repetition";
import { speakText } from "@/lib/speech";
import {
  Flame, Target, BookOpen, Trophy, Check, X, Volume2,
  ArrowRight, RefreshCw, Clock, Loader2, Star, Zap,
  Brain, Pencil, Timer, Ear, Shuffle, ChevronRight,
  Award, CalendarDays, BarChart3, Sparkles,
} from "lucide-react";

type TestType = "hr_to_native" | "native_to_hr" | "fill_blank" | "timed" | "listen" | "free_input" | "match_pairs";

interface SessionData {
  dailyGoal: { newWords: number; reviewWords: number };
  dailyGoalMinutes: number;
  reviewWordHrs: string[];
  learnedWordHrs: string[];
}

interface DailyData {
  today: {
    wordsLearned: number;
    wordsReviewed: number;
    testsCompleted: number;
    xpEarned: number;
    minutesSpent: number;
    completed: boolean;
  };
  history: { date: string; wordsLearned: number; wordsReviewed: number; xpEarned: number; completed: boolean }[];
}

export default function LearnPage() {
  const t = useTranslations("learn");
  const locale = useLocale();
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [dailyData, setDailyData] = useState<DailyData | null>(null);

  // Phase: "dashboard" | "learn_new" | "review" | "test" | "complete"
  const [phase, setPhase] = useState<string>("dashboard");
  const [selectedTestType, setSelectedTestType] = useState<TestType | null>(null);

  // Learning state
  const [currentWords, setCurrentWords] = useState<VocabWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionXP, setSessionXP] = useState(0);
  const [sessionWordsLearned, setSessionWordsLearned] = useState(0);
  const [sessionWordsReviewed, setSessionWordsReviewed] = useState(0);
  const [sessionTestsCompleted, setSessionTestsCompleted] = useState(0);

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState<{ word: VocabWord; options: string[]; answer: string; direction: string }[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  // Fill blank state
  const [fillInput, setFillInput] = useState("");
  const [fillChecked, setFillChecked] = useState(false);
  const [fillCorrect, setFillCorrect] = useState(false);

  // Timed state
  const [timeLeft, setTimeLeft] = useState(30);
  const [timedActive, setTimedActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Match pairs state
  const [matchPairs, setMatchPairs] = useState<{ id: number; text: string; type: "hr" | "native"; matched: boolean; selected: boolean; pairId: number }[]>([]);
  const [matchSelected, setMatchSelected] = useState<number | null>(null);
  const [matchScore, setMatchScore] = useState(0);
  const [matchErrors, setMatchErrors] = useState(0);

  // Session timer
  const sessionStartRef = useRef<number>(Date.now());

  const getTranslation = useCallback((word: VocabWord) => {
    if (locale === "ru") return word.ru;
    if (locale === "ua") return word.ua;
    return word.en;
  }, [locale]);

  // Load session data
  useEffect(() => {
    if (status !== "authenticated") {
      setLoading(false);
      return;
    }

    Promise.all([
      fetch("/api/words/session").then((r) => r.json()),
      fetch("/api/words/daily").then((r) => r.json()),
    ])
      .then(([sess, daily]) => {
        setSessionData(sess);
        setDailyData(daily);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load learning data:", err);
        setLoading(false);
      });
  }, [status]);

  // Save word progress
  const saveWordProgress = async (wordHr: string, correct: boolean) => {
    try {
      await fetch("/api/words/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wordHr, correct }),
      });
    } catch (err) {
      console.error("Failed to save word progress:", err);
    }
  };

  // Save daily activity
  const saveDailyActivity = async () => {
    const elapsed = Math.round((Date.now() - sessionStartRef.current) / 60000);
    try {
      await fetch("/api/words/daily", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wordsLearned: sessionWordsLearned,
          wordsReviewed: sessionWordsReviewed,
          testsCompleted: sessionTestsCompleted,
          xpEarned: sessionXP,
          minutesSpent: Math.max(1, elapsed),
        }),
      });
    } catch (err) {
      console.error("Failed to save daily activity:", err);
    }
  };

  // Start learning new words
  const startLearnNew = () => {
    const goal = sessionData?.dailyGoal || { newWords: 10, reviewWords: 15 };
    const learned = new Set(sessionData?.learnedWordHrs || []);
    const newWords = vocabularyWords
      .filter((w) => !learned.has(w.hr))
      .slice(0, goal.newWords);

    if (newWords.length === 0) {
      // All words learned, show review instead
      startReview();
      return;
    }

    setCurrentWords(newWords);
    setCurrentIndex(0);
    setIsFlipped(false);
    setPhase("learn_new");
    sessionStartRef.current = Date.now();
  };

  // Start review
  const startReview = () => {
    const reviewHrs = sessionData?.reviewWordHrs || [];
    const reviewWords = reviewHrs
      .map((hr) => vocabularyWords.find((w) => w.hr === hr))
      .filter(Boolean) as VocabWord[];

    if (reviewWords.length === 0) {
      // Pick random learned words for review
      const learned = new Set(sessionData?.learnedWordHrs || []);
      const available = vocabularyWords.filter((w) => learned.has(w.hr));
      const shuffled = [...available].sort(() => 0.5 - Math.random());
      setCurrentWords(shuffled.slice(0, 10));
    } else {
      setCurrentWords(reviewWords);
    }
    setCurrentIndex(0);
    setIsFlipped(false);
    setPhase("review");
    sessionStartRef.current = Date.now();
  };

  // Start test
  const startTest = (type: TestType) => {
    setSelectedTestType(type);
    sessionStartRef.current = Date.now();

    const words = currentWords.length > 0 ? currentWords : vocabularyWords;
    const shuffled = [...words].sort(() => 0.5 - Math.random());

    if (type === "hr_to_native" || type === "native_to_hr" || type === "listen") {
      const qs = shuffled.slice(0, 10).map((word) => {
        const isHrToNative = type === "hr_to_native" || type === "listen";
        const correctAnswer = isHrToNative ? getTranslation(word) : word.hr;
        const pool = isHrToNative
          ? vocabularyWords.map((w) => getTranslation(w))
          : vocabularyWords.map((w) => w.hr);
        const incorrects = pool
          .filter((t) => t !== correctAnswer)
          .filter((t, i, arr) => arr.indexOf(t) === i)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        const options = [correctAnswer, ...incorrects].sort(() => 0.5 - Math.random());
        return {
          word,
          options,
          answer: correctAnswer,
          direction: isHrToNative ? "hr_to_native" : "native_to_hr",
        };
      });
      setQuizQuestions(qs);
      setQuizIndex(0);
      setQuizScore(0);
      setSelectedOption(null);
      setQuizAnswered(false);
      setQuizComplete(false);

      if (type === "listen") {
        setTimeout(() => speakText(qs[0]?.word.hr || ""), 500);
      }
    }

    if (type === "fill_blank") {
      setQuizQuestions(shuffled.slice(0, 10).map((word) => ({
        word,
        options: [],
        answer: word.hr,
        direction: "fill",
      })));
      setQuizIndex(0);
      setQuizScore(0);
      setFillInput("");
      setFillChecked(false);
      setFillCorrect(false);
      setQuizComplete(false);
    }

    if (type === "free_input") {
      setQuizQuestions(shuffled.slice(0, 10).map((word) => ({
        word,
        options: [],
        answer: getTranslation(word),
        direction: "free",
      })));
      setQuizIndex(0);
      setQuizScore(0);
      setFillInput("");
      setFillChecked(false);
      setFillCorrect(false);
      setQuizComplete(false);
    }

    if (type === "timed") {
      const qs = shuffled.slice(0, 20).map((word) => {
        const correctAnswer = getTranslation(word);
        const incorrects = vocabularyWords
          .map((w) => getTranslation(w))
          .filter((t) => t !== correctAnswer)
          .filter((t, i, arr) => arr.indexOf(t) === i)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        return {
          word,
          options: [correctAnswer, ...incorrects].sort(() => 0.5 - Math.random()),
          answer: correctAnswer,
          direction: "timed",
        };
      });
      setQuizQuestions(qs);
      setQuizIndex(0);
      setQuizScore(0);
      setSelectedOption(null);
      setQuizAnswered(false);
      setQuizComplete(false);
      setTimeLeft(30);
      setTimedActive(true);
    }

    if (type === "match_pairs") {
      const pairs = shuffled.slice(0, 6).map((word, i) => [
        { id: i * 2, text: word.hr, type: "hr" as const, matched: false, selected: false, pairId: i },
        { id: i * 2 + 1, text: getTranslation(word), type: "native" as const, matched: false, selected: false, pairId: i },
      ]).flat().sort(() => 0.5 - Math.random());
      setMatchPairs(pairs);
      setMatchSelected(null);
      setMatchScore(0);
      setMatchErrors(0);
      setQuizComplete(false);
    }

    setPhase("test");
  };

  // Timer for timed quiz
  useEffect(() => {
    if (timedActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            setTimedActive(false);
            setQuizComplete(true);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }
  }, [timedActive, timeLeft]);

  // Handle quiz answer
  const handleAnswer = (option: string) => {
    if (quizAnswered) return;
    setSelectedOption(option);
    setQuizAnswered(true);
    const correct = option === quizQuestions[quizIndex].answer;
    if (correct) {
      setQuizScore((s) => s + 1);
      setSessionXP((x) => x + 10);
    }
    setSessionWordsReviewed((w) => w + 1);
    saveWordProgress(quizQuestions[quizIndex].word.hr, correct);
  };

  // Handle timed answer
  const handleTimedAnswer = (option: string) => {
    const correct = option === quizQuestions[quizIndex].answer;
    if (correct) {
      setQuizScore((s) => s + 1);
      setSessionXP((x) => x + 15);
    }
    saveWordProgress(quizQuestions[quizIndex].word.hr, correct);
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((i) => i + 1);
    } else {
      setTimedActive(false);
      setQuizComplete(true);
    }
  };

  // Handle fill blank check
  const handleFillCheck = () => {
    const answer = quizQuestions[quizIndex].answer.toLowerCase().trim();
    const input = fillInput.toLowerCase().trim();
    const isCorrect = input === answer || levenshteinDistance(input, answer) <= 1;
    setFillChecked(true);
    setFillCorrect(isCorrect);
    if (isCorrect) {
      setQuizScore((s) => s + 1);
      setSessionXP((x) => x + 15);
    }
    saveWordProgress(quizQuestions[quizIndex].word.hr, isCorrect);
  };

  // Handle match pairs
  const handleMatchSelect = (id: number) => {
    const item = matchPairs.find((p) => p.id === id);
    if (!item || item.matched) return;

    if (matchSelected === null) {
      setMatchSelected(id);
      setMatchPairs((prev) => prev.map((p) => p.id === id ? { ...p, selected: true } : p));
    } else {
      const firstItem = matchPairs.find((p) => p.id === matchSelected);
      if (!firstItem || firstItem.type === item.type) {
        // Same type - deselect and select new
        setMatchPairs((prev) => prev.map((p) =>
          p.id === matchSelected ? { ...p, selected: false } :
          p.id === id ? { ...p, selected: true } : p
        ));
        setMatchSelected(id);
        return;
      }

      // Check match
      if (firstItem.pairId === item.pairId) {
        setMatchPairs((prev) => prev.map((p) =>
          p.pairId === firstItem.pairId ? { ...p, matched: true, selected: false } : p
        ));
        setMatchScore((s) => s + 1);
        setSessionXP((x) => x + 20);
        saveWordProgress(
          matchPairs.find((p) => p.pairId === firstItem.pairId && p.type === "hr")?.text || "",
          true
        );
      } else {
        setMatchErrors((e) => e + 1);
        setMatchPairs((prev) => prev.map((p) =>
          p.id === matchSelected || p.id === id ? { ...p, selected: false } : p
        ));
      }
      setMatchSelected(null);

      // Check if all matched
      setTimeout(() => {
        setMatchPairs((prev) => {
          if (prev.every((p) => p.matched)) {
            setQuizComplete(true);
          }
          return prev;
        });
      }, 300);
    }
  };

  const nextQuizQuestion = () => {
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((i) => i + 1);
      setSelectedOption(null);
      setQuizAnswered(false);
      setFillInput("");
      setFillChecked(false);
      setFillCorrect(false);
      if (selectedTestType === "listen") {
        setTimeout(() => speakText(quizQuestions[quizIndex + 1]?.word.hr || ""), 300);
      }
    } else {
      setQuizComplete(true);
      setSessionTestsCompleted((t) => t + 1);
    }
  };

  const finishSession = async () => {
    await saveDailyActivity();
    setPhase("complete");
  };

  const backToDashboard = () => {
    setPhase("dashboard");
    setSessionWordsLearned(0);
    setSessionWordsReviewed(0);
    setSessionTestsCompleted(0);
    setSessionXP(0);
    // Reload data
    Promise.all([
      fetch("/api/words/session").then((r) => r.json()),
      fetch("/api/words/daily").then((r) => r.json()),
    ]).then(([sess, daily]) => {
      setSessionData(sess);
      setDailyData(daily);
    });
  };

  // Levenshtein distance for fuzzy matching
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

  if (status === "loading" || loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[50vh]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
          <p className="text-sm text-muted-foreground">{t("loading")}</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="max-w-md mx-auto my-16 p-8 rounded-3xl glass border border-white/10 text-center space-y-6">
        <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 text-blue-500">
          <BookOpen className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-bold">{t("signInRequired")}</h1>
        <p className="text-muted-foreground">{t("signInDescription")}</p>
      </div>
    );
  }

  const dailyGoal = sessionData?.dailyGoal || getDailyGoal(10);
  const todayStats = dailyData?.today || { wordsLearned: 0, wordsReviewed: 0, testsCompleted: 0, xpEarned: 0, minutesSpent: 0, completed: false };
  const totalProgress = (sessionData as SessionData & { totalProgress?: { learning: number; learned: number; mastered: number; total: number } })?.totalProgress;
  const history = dailyData?.history || [];

  // Calculate streak from history
  const calculateStreak = () => {
    let streak = 0;
    const today = new Date().toISOString().split("T")[0];
    const sortedDays = [...history].sort((a, b) => b.date.localeCompare(a.date));

    for (const day of sortedDays) {
      const dayDate = new Date(day.date);
      const expected = new Date();
      expected.setDate(expected.getDate() - streak);
      const expectedStr = expected.toISOString().split("T")[0];

      if (day.date === expectedStr && day.completed) {
        streak++;
      } else if (day.date === today && !day.completed) {
        continue; // Today in progress
      } else {
        break;
      }
    }
    return streak;
  };

  const streak = calculateStreak();

  // ===== DASHBOARD =====
  if (phase === "dashboard") {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-extrabold tracking-tight">
            <span className="gradient-text">{t("title")}</span>
          </h1>
          <p className="text-muted-foreground mt-2">{t("subtitle")}</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 stagger-children">
          {/* Streak */}
          <div className="glass p-5 rounded-2xl border border-white/10 text-center card-hover">
            <div className="text-3xl mb-1">🔥</div>
            <div className="text-3xl font-black text-orange-400">{streak}</div>
            <div className="text-xs text-muted-foreground mt-1">{t("dayStreak")}</div>
          </div>
          {/* XP Today */}
          <div className="glass p-5 rounded-2xl border border-white/10 text-center card-hover">
            <div className="text-3xl mb-1">⚡</div>
            <div className="text-3xl font-black text-yellow-400">{todayStats.xpEarned}</div>
            <div className="text-xs text-muted-foreground mt-1">{t("xpToday")}</div>
          </div>
          {/* Words Learned */}
          <div className="glass p-5 rounded-2xl border border-white/10 text-center card-hover">
            <div className="text-3xl mb-1">📚</div>
            <div className="text-3xl font-black text-blue-400">{totalProgress?.total || 0}</div>
            <div className="text-xs text-muted-foreground mt-1">{t("wordsTotal")}</div>
          </div>
          {/* Tests */}
          <div className="glass p-5 rounded-2xl border border-white/10 text-center card-hover">
            <div className="text-3xl mb-1">🏆</div>
            <div className="text-3xl font-black text-emerald-400">{todayStats.testsCompleted}</div>
            <div className="text-xs text-muted-foreground mt-1">{t("testsToday")}</div>
          </div>
        </div>

        {/* Daily Goal Progress */}
        <div className="glass p-6 rounded-2xl border border-white/10 mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-foreground flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              {t("dailyGoal")}
            </h2>
            <span className="text-xs text-muted-foreground">
              {sessionData?.dailyGoalMinutes || 10} {t("minPerDay")}
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">{t("newWords")}</span>
                <span className="font-semibold text-blue-400">{todayStats.wordsLearned}/{dailyGoal.newWords}</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (todayStats.wordsLearned / dailyGoal.newWords) * 100)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">{t("reviewWords")}</span>
                <span className="font-semibold text-emerald-400">{todayStats.wordsReviewed}/{dailyGoal.reviewWords}</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (todayStats.wordsReviewed / dailyGoal.reviewWords) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {todayStats.completed && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400">{t("goalCompleted")}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid gap-4 md:grid-cols-2 mb-8 stagger-children">
          <button
            onClick={startLearnNew}
            className="glass p-6 rounded-2xl border border-white/10 text-left card-hover group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{t("learnNewWords")}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {dailyGoal.newWords} {t("wordsToLearn")}
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={startReview}
            className="glass p-6 rounded-2xl border border-white/10 text-left card-hover group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <RefreshCw className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{t("reviewPrevious")}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {sessionData?.reviewWordHrs?.length || 0} {t("wordsDue")}
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Test Types */}
        <div className="mb-8 animate-fade-in">
          <h2 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            {t("practiceTests")}
          </h2>
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-4 stagger-children">
            {[
              { type: "hr_to_native" as TestType, icon: <ArrowRight className="w-5 h-5" />, label: t("testHrToNative"), color: "text-blue-400 bg-blue-500/10" },
              { type: "native_to_hr" as TestType, icon: <ArrowRight className="w-5 h-5 rotate-180" />, label: t("testNativeToHr"), color: "text-purple-400 bg-purple-500/10" },
              { type: "fill_blank" as TestType, icon: <Pencil className="w-5 h-5" />, label: t("testFillBlank"), color: "text-amber-400 bg-amber-500/10" },
              { type: "timed" as TestType, icon: <Timer className="w-5 h-5" />, label: t("testTimed"), color: "text-red-400 bg-red-500/10" },
              { type: "listen" as TestType, icon: <Ear className="w-5 h-5" />, label: t("testListen"), color: "text-cyan-400 bg-cyan-500/10" },
              { type: "free_input" as TestType, icon: <Pencil className="w-5 h-5" />, label: t("testFreeInput"), color: "text-emerald-400 bg-emerald-500/10" },
              { type: "match_pairs" as TestType, icon: <Shuffle className="w-5 h-5" />, label: t("testMatchPairs"), color: "text-pink-400 bg-pink-500/10" },
            ].map(({ type, icon, label, color }) => (
              <button
                key={type}
                onClick={() => {
                  setCurrentWords([...vocabularyWords].sort(() => 0.5 - Math.random()).slice(0, 20));
                  startTest(type);
                }}
                className="glass p-4 rounded-xl border border-white/10 text-center card-hover"
              >
                <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mx-auto mb-2`}>
                  {icon}
                </div>
                <span className="text-xs font-semibold text-foreground">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Activity Calendar */}
        {history.length > 0 && (
          <div className="glass p-6 rounded-2xl border border-white/10 animate-fade-in">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-emerald-400" />
              {t("activityCalendar")}
            </h2>
            <div className="flex flex-wrap gap-1">
              {(() => {
                const days: { date: string; level: number }[] = [];
                for (let i = 89; i >= 0; i--) {
                  const d = new Date();
                  d.setDate(d.getDate() - i);
                  const dateStr = d.toISOString().split("T")[0];
                  const activity = history.find((h) => h.date === dateStr);
                  const level = activity ? (activity.completed ? 3 : activity.xpEarned > 50 ? 2 : 1) : 0;
                  days.push({ date: dateStr, level });
                }
                return days.map((day) => (
                  <div
                    key={day.date}
                    title={`${day.date}: ${day.level === 0 ? t("noActivity") : day.level === 3 ? t("goalCompleted") : t("active")}`}
                    className={`w-3 h-3 rounded-sm transition-colors ${
                      day.level === 0 ? "bg-white/5" :
                      day.level === 1 ? "bg-emerald-500/30" :
                      day.level === 2 ? "bg-emerald-500/60" :
                      "bg-emerald-500"
                    }`}
                  />
                ));
              })()}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ===== LEARN NEW WORDS =====
  if (phase === "learn_new" || phase === "review") {
    const word = currentWords[currentIndex];
    if (!word) {
      return (
        <div className="max-w-lg mx-auto px-4 py-16 text-center">
          <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{t("allWordsReviewed")}</h2>
          <button onClick={() => startTest("hr_to_native")} className="mt-4 px-6 py-2 rounded-xl bg-blue-600 text-white font-bold">
            {t("startTest")}
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-lg mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <button onClick={backToDashboard} className="text-sm text-muted-foreground hover:text-foreground">
            ← {t("back")}
          </button>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {currentWords.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-white/5 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / currentWords.length) * 100}%` }}
          />
        </div>

        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {phase === "learn_new" ? t("learningNew") : t("reviewing")}
          </span>
        </div>

        {/* Word Card */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="w-full h-72 cursor-pointer relative perspective mb-6"
        >
          <div className={`w-full h-full duration-500 preserve-3d relative rounded-2xl glass border border-white/10 flex flex-col items-center justify-center p-8 transition-transform shadow-2xl ${isFlipped ? "rotate-y-180" : ""}`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 uppercase tracking-wider mb-3">
                {word.level} • {categoryLabels[word.category as keyof typeof categoryLabels]?.[locale as "en" | "ru" | "ua"] || word.category}
              </span>
              <h2 className="text-4xl font-extrabold text-foreground">{word.hr}</h2>
              <button
                onClick={(e) => { e.stopPropagation(); speakText(word.hr); }}
                className="mt-4 p-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <p className="text-xs text-muted-foreground mt-3">{t("tapToFlip")}</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180">
              <h3 className="text-3xl font-extrabold text-foreground text-center">{getTranslation(word)}</h3>
              {word.example && (
                <div className="mt-4 text-center">
                  <p className="text-sm italic text-muted-foreground">&quot;{word.example.hr}&quot;</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    {locale === "ru" ? word.example.ru : locale === "ua" ? word.example.ua : word.example.en}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Know / Don't Know Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => {
              saveWordProgress(word.hr, false);
              if (currentIndex < currentWords.length - 1) {
                setCurrentIndex((i) => i + 1);
                setIsFlipped(false);
              } else {
                finishSession();
              }
            }}
            className="flex-1 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 font-bold text-sm hover:bg-red-500/20 transition-all flex items-center justify-center gap-2"
          >
            <X className="w-4 h-4" /> {t("dontKnow")}
          </button>
          <button
            onClick={() => {
              saveWordProgress(word.hr, true);
              setSessionWordsLearned((w) => w + 1);
              setSessionXP((x) => x + 5);
              if (currentIndex < currentWords.length - 1) {
                setCurrentIndex((i) => i + 1);
                setIsFlipped(false);
              } else {
                finishSession();
              }
            }}
            className="flex-1 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold text-sm hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" /> {t("iKnow")}
          </button>
        </div>
      </div>
    );
  }

  // ===== TESTS =====
  if (phase === "test") {
    if (quizComplete) {
      const earnedXP = selectedTestType === "match_pairs" ? matchScore * 20 : quizScore * 10;
      return (
        <div className="max-w-lg mx-auto px-4 py-16 text-center animate-fade-in">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
          <h2 className="text-3xl font-extrabold text-foreground mb-2">{t("testComplete")}</h2>

          {selectedTestType === "match_pairs" ? (
            <p className="text-lg text-muted-foreground">
              {matchScore}/6 {t("pairsMatched")} • {matchErrors} {t("errors")}
            </p>
          ) : (
            <p className="text-lg text-muted-foreground">
              {t("score")}: <span className="text-blue-400 font-black">{quizScore}/{quizQuestions.length}</span>
            </p>
          )}

          <p className="text-emerald-400 font-semibold mt-2">+{earnedXP} XP</p>

          <div className="flex gap-3 justify-center mt-8">
            <button
              onClick={backToDashboard}
              className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground font-bold hover:bg-white/10 transition-all"
            >
              {t("backToDashboard")}
            </button>
            <button
              onClick={() => { setQuizComplete(false); setQuizIndex(0); setQuizScore(0); startTest(selectedTestType!); }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> {t("tryAgain")}
            </button>
          </div>
        </div>
      );
    }

    // Match Pairs
    if (selectedTestType === "match_pairs") {
      return (
        <div className="max-w-lg mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={backToDashboard} className="text-sm text-muted-foreground hover:text-foreground">
              ← {t("back")}
            </button>
            <span className="text-sm font-bold text-emerald-400">{matchScore}/6</span>
          </div>
          <h2 className="text-xl font-bold text-center text-foreground mb-6">{t("matchPairsTitle")}</h2>
          <div className="grid grid-cols-3 gap-3">
            {matchPairs.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMatchSelect(item.id)}
                disabled={item.matched}
                className={`p-4 rounded-xl border text-sm font-semibold transition-all min-h-[60px] ${
                  item.matched
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 opacity-60"
                    : item.selected
                    ? "bg-blue-500/20 border-blue-500/40 text-blue-400 scale-105"
                    : "border-white/10 text-foreground hover:bg-white/5"
                }`}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Timed Quiz
    if (selectedTestType === "timed") {
      const q = quizQuestions[quizIndex];
      return (
        <div className="max-w-lg mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => { setTimedActive(false); backToDashboard(); }} className="text-sm text-muted-foreground hover:text-foreground">
              ← {t("back")}
            </button>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-emerald-400">{quizScore}</span>
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${timeLeft <= 10 ? "bg-red-500/20 text-red-400" : "bg-blue-500/10 text-blue-400"}`}>
                <Timer className="w-4 h-4" />
                <span className="font-bold text-sm">{timeLeft}s</span>
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-black text-foreground text-center mb-8">{q.word.hr}</h3>
          <div className="grid gap-3 grid-cols-2">
            {q.options.map((option) => (
              <button
                key={option}
                onClick={() => handleTimedAnswer(option)}
                className="p-4 rounded-xl border border-white/10 text-sm font-semibold text-foreground hover:bg-white/5 transition-all active:scale-95"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Fill Blank / Free Input
    if (selectedTestType === "fill_blank" || selectedTestType === "free_input") {
      const q = quizQuestions[quizIndex];
      const isFillBlank = selectedTestType === "fill_blank";
      return (
        <div className="max-w-lg mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={backToDashboard} className="text-sm text-muted-foreground hover:text-foreground">
              ← {t("back")}
            </button>
            <span className="text-sm text-muted-foreground">
              {quizIndex + 1}/{quizQuestions.length}
            </span>
          </div>

          <div className="h-2 bg-white/5 rounded-full mb-8 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all" style={{ width: `${((quizIndex + 1) / quizQuestions.length) * 100}%` }} />
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-2">
              {isFillBlank ? t("writeInCroatian") : t("writeTranslation")}
            </p>
            <h3 className="text-3xl font-black text-foreground">
              {isFillBlank ? getTranslation(q.word) : q.word.hr}
            </h3>
            {!isFillBlank && (
              <button onClick={() => speakText(q.word.hr)} className="mt-2 p-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
                <Volume2 className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="space-y-4">
            <input
              type="text"
              value={fillInput}
              onChange={(e) => setFillInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !fillChecked) handleFillCheck(); }}
              disabled={fillChecked}
              placeholder={isFillBlank ? t("typeInCroatian") : t("typeTranslation")}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-center text-lg font-semibold focus:outline-none focus:border-blue-500 disabled:opacity-50"
              autoFocus
            />

            {fillChecked && (
              <div className={`p-4 rounded-xl border ${fillCorrect ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"}`}>
                <div className="flex items-center gap-2 mb-1">
                  {fillCorrect ? <Check className="w-5 h-5 text-emerald-400" /> : <X className="w-5 h-5 text-red-400" />}
                  <span className={`font-bold ${fillCorrect ? "text-emerald-400" : "text-red-400"}`}>
                    {fillCorrect ? t("correct") : t("incorrect")}
                  </span>
                </div>
                {!fillCorrect && (
                  <p className="text-sm text-muted-foreground">
                    {t("correctAnswer")}: <span className="font-bold text-foreground">{q.answer}</span>
                  </p>
                )}
              </div>
            )}

            <div className="flex justify-end">
              {!fillChecked ? (
                <button
                  onClick={handleFillCheck}
                  disabled={!fillInput.trim()}
                  className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold disabled:opacity-50 hover:bg-blue-500 transition-all"
                >
                  {t("check")}
                </button>
              ) : (
                <button
                  onClick={nextQuizQuestion}
                  className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all"
                >
                  {quizIndex < quizQuestions.length - 1 ? t("next") : t("finish")}
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Listen quiz / Standard quiz (HR→Native, Native→HR)
    const q = quizQuestions[quizIndex];
    return (
      <div className="max-w-lg mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <button onClick={backToDashboard} className="text-sm text-muted-foreground hover:text-foreground">
            ← {t("back")}
          </button>
          <span className="text-sm text-muted-foreground">
            {quizIndex + 1}/{quizQuestions.length} • <span className="text-emerald-400">+{quizScore * 10} XP</span>
          </span>
        </div>

        <div className="h-2 bg-white/5 rounded-full mb-8 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all" style={{ width: `${((quizIndex + 1) / quizQuestions.length) * 100}%` }} />
        </div>

        <div className="text-center py-6">
          {selectedTestType === "listen" ? (
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => speakText(q.word.hr)}
                className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center hover:bg-blue-600/30 transition-all"
              >
                <Volume2 className="w-10 h-10" />
              </button>
              <p className="text-sm text-muted-foreground">{t("listenAndChoose")}</p>
            </div>
          ) : (
            <>
              <h3 className="text-3xl font-black text-foreground">
                {q.direction === "hr_to_native" ? q.word.hr : getTranslation(q.word)}
              </h3>
              {q.direction === "hr_to_native" && (
                <button onClick={() => speakText(q.word.hr)} className="mt-2 p-2 rounded-full bg-blue-600/10 text-blue-400">
                  <Volume2 className="w-4 h-4" />
                </button>
              )}
              <p className="text-sm text-muted-foreground mt-2">{t("chooseCorrectTranslation")}</p>
            </>
          )}
        </div>

        <div className="grid gap-3">
          {q.options.map((option) => {
            const isCorrect = option === q.answer;
            const isSelected = option === selectedOption;
            let cls = "border-white/10 hover:bg-white/5 text-foreground";
            if (quizAnswered) {
              if (isCorrect) cls = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
              else if (isSelected) cls = "bg-red-500/10 text-red-400 border-red-500/30";
              else cls = "opacity-50 border-white/5";
            }
            return (
              <button
                key={option}
                disabled={quizAnswered}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between ${cls}`}
              >
                <span>{option}</span>
                {quizAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-400" />}
                {quizAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-red-400" />}
              </button>
            );
          })}
        </div>

        {quizAnswered && (
          <div className="flex justify-end pt-6">
            <button
              onClick={nextQuizQuestion}
              className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all"
            >
              {quizIndex < quizQuestions.length - 1 ? t("next") : t("finish")}
            </button>
          </div>
        )}
      </div>
    );
  }

  // ===== SESSION COMPLETE =====
  if (phase === "complete") {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center animate-fade-in">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-extrabold text-foreground mb-2">{t("sessionComplete")}</h2>
        <div className="glass p-6 rounded-2xl border border-white/10 mt-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("wordsLearned")}</span>
            <span className="font-bold text-blue-400">{sessionWordsLearned}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("wordsReviewed")}</span>
            <span className="font-bold text-emerald-400">{sessionWordsReviewed}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("xpEarned")}</span>
            <span className="font-bold text-yellow-400">+{sessionXP}</span>
          </div>
        </div>

        <button
          onClick={backToDashboard}
          className="mt-8 px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all"
        >
          {t("backToDashboard")}
        </button>
      </div>
    );
  }

  return null;
}
