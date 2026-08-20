"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

import {
  vocabularyWords,
  vocabularyCategories,
  categoryLabels,
  type VocabWord,
} from "@/lib/vocabulary-data";
import { glossaryData } from "@/lib/glossary-data";
import {
  Search,
  Volume2,
  Trophy,
  Check,
  X,
  ExternalLink,
  Bookmark,
  Loader2,
  RefreshCw,
  FolderOpen,
  Star,
  Shuffle,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRightLeft,
  GraduationCap,
  BookOpen,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { speakText } from "@/lib/speech";
import { checkCroatianSpelling, SpellingResult } from "@/lib/spelling";

interface Flashcard {
  id: string;
  wordHr: string;
  translationEng: string;
  translationRu: string;
  translationUa: string;
  level: string;
  category: string;
}

const posLabels: Record<string, { en: string; ru: string; ua: string }> = {
  all: { en: "All parts", ru: "Все части", ua: "Всі частини" },
  noun: { en: "Nouns", ru: "Существительные", ua: "Іменники" },
  verb: { en: "Verbs", ru: "Глаголы", ua: "Дієслова" },
  pronoun: { en: "Pronouns", ru: "Местоимения", ua: "Займенники" },
  adjective: { en: "Adjectives", ru: "Прилагательные", ua: "Прикметники" },
  other: { en: "Others", ru: "Другое", ua: "Інше" },
};

function getPartOfSpeech(word: VocabWord): string {
  const hr = word.hr.toLowerCase().trim();
  const en = word.en.toLowerCase().trim();
  const ru = word.ru.toLowerCase().trim();
  
  // 1. Pronouns (fixed list)
  const pronouns = new Set([
    "ja", "ti", "on", "ona", "ono", "mi", "vi", "oni", "one", 
    "tko", "što", "moj", "tvoj", "njegov", "njezin", "naš", "vaš", "njihov",
    "sebe", "se", "nitko", "ništa", "netko", "nešto",
    "ovaj", "ova", "ovo", "taj", "ta", "to", "onaj", "ona", "ono",
    "neki", "svaki", "sav", "sam"
  ]);
  if (pronouns.has(hr)) return "pronoun";

  // 2. Verbs (infinitive ends in -ti or -ći in Croatian, or translation starts with "to " in English)
  if (en.startsWith("to ") || hr.endsWith("ti") || hr.endsWith("ći") || hr.endsWith("ti se") || hr.endsWith("ći se")) {
    const nounExceptions = new Set(["gost", "kosti", "masti", "vijesti", "svijesti", "bolesti"]);
    if (!nounExceptions.has(hr)) {
      return "verb";
    }
  }

  // 3. Adjectives (Russian/Ukrainian endings for adjectives)
  const adjEndingsRu = ["ый", "ий", "ой", "ая", "яя", "ое", "ее", "ые", "ие"];
  const isAdjRu = adjEndingsRu.some(ending => ru.endsWith(ending)) && ru.length > 3;
  if (isAdjRu) {
    const nounExceptions = new Set(["чай", "трамвай", "музей", "край", "лишай", "обычай"]);
    if (!nounExceptions.has(ru)) {
      return "adjective";
    }
  }

  // 4. Other (conjunctions, prepositions, numbers)
  const otherWords = new Set([
    "i", "a", "ali", "ili", "da", "ako", "jer", "dok",
    "u", "na", "o", "po", "pri", "kod", "od", "do", "za", "s", "sa", "iz", "bez",
    "ne", "možda", "tamo", "ovdje", "gdje", "kako", "zašto", "kada",
    "jedan", "dva", "tri", "četiri", "pet", "šest", "sedam", "osam", "devet", "deset",
    "nula", "prvi", "drugi", "treći"
  ]);
  if (otherWords.has(hr)) return "other";

  return "noun";
}

export default function VocabularyPortal() {
  const t = useTranslations("vocabulary");
  const locale = useLocale();


  const [loading, setLoading] = useState(true);
  const [dbWords, setDbWords] = useState<Flashcard[]>([]);
  const [activeTab, setActiveTab] = useState<"categories" | "flashcards" | "quiz" | "glossary">("categories");
  const [expandedGlossary, setExpandedGlossary] = useState<Record<string, boolean>>({});
  const [glossarySearchQuery, setGlossarySearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPOS, setSelectedPOS] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const expandAllGlossary = () => {
    const map: Record<string, boolean> = {};
    glossaryData.forEach((cat) => {
      map[cat.id] = true;
    });
    setExpandedGlossary(map);
  };

  const collapseAllGlossary = () => {
    const map: Record<string, boolean> = {};
    glossaryData.forEach((cat) => {
      map[cat.id] = false;
    });
    setExpandedGlossary(map);
  };

  
  // Progress tracking map
  const [wordProgressMap, setWordProgressMap] = useState<Record<string, { status: string; nextReview?: string; correctCount: number; wrongCount: number }>>({});

  // Flashcard Advanced Deck states
  const [deckMode, setDeckMode] = useState<"all" | "quick15" | "quick30" | "starred" | "due" | "learned">("all");
  const [deckDirection, setDeckDirection] = useState<"hr_to_native" | "native_to_hr">("hr_to_native");
  const [autoAudio, setAutoAudio] = useState<boolean>(false);
  const [starredWords, setStarredWords] = useState<string[]>([]);

  // Fetch word progress map
  useEffect(() => {
    fetch("/api/words/progress")
      .then((res) => res.json())
      .then((data) => {
        if (data.wordProgress && Array.isArray(data.wordProgress)) {
          const map: Record<string, { status: string; nextReview?: string; correctCount: number; wrongCount: number }> = {};
          data.wordProgress.forEach((item: any) => {
            map[item.wordHr.toLowerCase()] = {
              status: item.status,
              nextReview: item.nextReview,
              correctCount: item.correctCount || 0,
              wrongCount: item.wrongCount || 0,
            };
          });
          setWordProgressMap(map);
        }
      })
      .catch((err) => console.error("Failed to load word progress:", err));
  }, []);

  // Update word progress helper
  const updateWordStatus = async (wordHr: string, newStatus: string) => {
    const key = wordHr.toLowerCase();
    setWordProgressMap((prev) => ({
      ...prev,
      [key]: {
        status: newStatus,
        correctCount: (prev[key]?.correctCount || 0) + (newStatus === "learned" || newStatus === "mastered" ? 1 : 0),
        wrongCount: prev[key]?.wrongCount || 0,
      },
    }));

    try {
      await fetch("/api/words/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wordHr,
          correct: newStatus === "learned" || newStatus === "mastered",
          timeTakenMs: 1000,
        }),
      });
    } catch (err) {
      console.error("Failed to update word status:", err);
    }
  };

  // Check URL query tab parameter
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && ["categories", "flashcards", "quiz", "glossary"].includes(tab)) {
        setActiveTab(tab as any);
      }
    }
  }, []);
  
  const [deckQueue, setDeckQueue] = useState<VocabWord[]>([]);
  const [deckIndex, setDeckIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);
  const [reviewLaterQueue, setReviewLaterQueue] = useState<VocabWord[]>([]);
  const [deckFinished, setDeckFinished] = useState(false);

  // Load starred words from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("croatia_mentor_starred");
      if (saved) {
        setStarredWords(JSON.parse(saved));
      }
    } catch (_) {}
  }, []);

  const toggleStarWord = (hr: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setStarredWords((prev) => {
      const isStarred = prev.includes(hr);
      const next = isStarred ? prev.filter((w) => w !== hr) : [...prev, hr];
      try {
        localStorage.setItem("croatia_mentor_starred", JSON.stringify(next));
      } catch (_) {}
      return next;
    });
  };

  // Search/Dictionary states
  const [searchQuery, setSearchQuery] = useState("");
  const [hjpSearchWord, setHjpSearchWord] = useState("");

  // Configurable Quiz states
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCount, setQuizCount] = useState<number>(10);
  const [quizMode, setQuizMode] = useState<"mc" | "written" | "listening" | "audio_spelling" | "mixed">("mc");
  const [quizDirection, setQuizDirection] = useState<"hr_to_native" | "native_to_hr" | "mixed">("hr_to_native");
  
  const [quizQuestions, setQuizQuestions] = useState<{
    word: VocabWord;
    options: string[];
    answer: string;
    prompt: string;
    type: "mc" | "written" | "listening" | "audio_spelling";
  }[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  // Written answer states
  const [quizInputText, setQuizInputText] = useState("");
  const [quizInputChecked, setQuizInputChecked] = useState(false);
  const [quizInputCorrect, setQuizInputCorrect] = useState(false);
  const [quizSpellingResult, setQuizSpellingResult] = useState<SpellingResult | null>(null);

  // Mistakes log
  const [quizMistakes, setQuizMistakes] = useState<{ word: VocabWord; userAnswer: string; correctAnswer: string }[]>([]);

  useEffect(() => {
    fetch("/api/vocabulary")
      .then((res) => res.json())
      .then((data) => {
        if (data.flashcards) {
          setDbWords(data.flashcards);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load DB vocabulary:", err);
        setLoading(false);
      });
  }, []);

  // Merge static vocabulary words with database words
  const allMergedWords: VocabWord[] = [...vocabularyWords];
  dbWords.forEach((dw) => {
    if (!allMergedWords.some((w) => w.hr.toLowerCase() === dw.wordHr.toLowerCase())) {
      allMergedWords.push({
        hr: dw.wordHr,
        en: dw.translationEng,
        ru: dw.translationRu,
        ua: dw.translationUa,
        level: dw.level || "A1",
        category: dw.category || "general",
      });
    }
  });

  // Filter words
  const filteredWords = allMergedWords.filter((w) => {
    const key = w.hr.toLowerCase();
    const levelMatch = selectedLevel === "all" || w.level.toLowerCase() === selectedLevel.toLowerCase();
    const categoryMatch = selectedCategory === "all" || w.category === selectedCategory;
    const posMatch = selectedPOS === "all" || getPartOfSpeech(w) === selectedPOS;
    
    let statusMatch = true;
    if (selectedStatus === "starred") {
      statusMatch = starredWords.includes(w.hr);
    } else if (selectedStatus === "due") {
      const prog = wordProgressMap[key];
      statusMatch = !!(prog?.nextReview && new Date(prog.nextReview) <= new Date());
    } else if (selectedStatus === "learned") {
      const prog = wordProgressMap[key];
      statusMatch = prog?.status === "learned" || prog?.status === "mastered";
    } else if (selectedStatus === "mastered") {
      const prog = wordProgressMap[key];
      statusMatch = prog?.status === "mastered";
    } else if (selectedStatus === "learning") {
      const prog = wordProgressMap[key];
      statusMatch = prog?.status === "learning";
    } else if (selectedStatus === "new") {
      const prog = wordProgressMap[key];
      statusMatch = !prog || prog.status === "new";
    }

    return levelMatch && categoryMatch && posMatch && statusMatch;
  });

  const getTranslation = (word: VocabWord) => {
    if (locale === "ru") return word.ru;
    if (locale === "ua") return word.ua;
    return word.en;
  };

  const getCategoryLabel = (cat: string) => {
    const found = vocabularyCategories.find((c) => c === cat);
    if (found) {
      const labelObj = categoryLabels[found];
      if (locale === "ru") return labelObj.ru;
      if (locale === "ua") return labelObj.ua;
      return labelObj.en;
    }
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  // TTS Pronunciation
  const speakWord = (text: string) => {
    speakText(text);
  };

  // Start or reset flashcard deck
  const startDeck = (
    modeOverride?: "all" | "quick15" | "quick30" | "starred" | "due" | "learned",
    wordsOverride?: VocabWord[]
  ) => {
    const mode = modeOverride || deckMode;
    let pool = wordsOverride || [...filteredWords];

    if (mode === "starred") {
      pool = allMergedWords.filter((w) => starredWords.includes(w.hr));
    } else if (mode === "due") {
      pool = allMergedWords.filter((w) => {
        const prog = wordProgressMap[w.hr.toLowerCase()];
        return !!(prog?.nextReview && new Date(prog.nextReview) <= new Date());
      });
    } else if (mode === "learned") {
      pool = allMergedWords.filter((w) => {
        const prog = wordProgressMap[w.hr.toLowerCase()];
        return prog?.status === "learned" || prog?.status === "mastered";
      });
    } else if (mode === "quick15") {
      pool = [...pool].sort(() => 0.5 - Math.random()).slice(0, 15);
    } else if (mode === "quick30") {
      pool = [...pool].sort(() => 0.5 - Math.random()).slice(0, 30);
    } else {
      pool = [...pool].sort(() => 0.5 - Math.random());
    }

    setDeckQueue(pool);
    setDeckIndex(0);
    setIsFlipped(false);
    setMasteredCount(0);
    setReviewLaterQueue([]);
    setDeckFinished(false);
  };

  // Auto-start deck when tab/filter/mode changes
  useEffect(() => {
    if (activeTab === "flashcards") {
      startDeck();
    }
  }, [activeTab, selectedLevel, selectedCategory, selectedPOS, deckMode]);

  // Handle card answer (Anki style: know it vs need review)
  const handleCardAnswer = (knowIt: boolean) => {
    const currentWord = deckQueue[deckIndex];
    if (!currentWord) return;

    // Save SM-2 progress in backend asynchronously
    fetch("/api/words/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wordHr: currentWord.hr, correct: knowIt }),
    }).catch(console.error);

    if (knowIt) {
      setMasteredCount((m) => m + 1);
    } else {
      setReviewLaterQueue((prev) => [...prev, currentWord]);
    }

    setIsFlipped(false);

    if (deckIndex < deckQueue.length - 1) {
      const nextIndex = deckIndex + 1;
      setDeckIndex(nextIndex);
      if (autoAudio) {
        setTimeout(() => speakText(deckQueue[nextIndex].hr), 250);
      }
    } else {
      setDeckFinished(true);
    }
  };

  // Re-study only missed cards
  const restudyMissed = () => {
    if (reviewLaterQueue.length === 0) return;
    setDeckQueue([...reviewLaterQueue].sort(() => 0.5 - Math.random()));
    setDeckIndex(0);
    setIsFlipped(false);
    setMasteredCount(0);
    setReviewLaterQueue([]);
    setDeckFinished(false);
  };

  // Generate Quiz with configurable count, direction, and mode
  const startQuiz = (overrideWords?: VocabWord[]) => {
    const pool = overrideWords || [...filteredWords];
    if (pool.length < 2) {
      alert("Please select a level/category with at least 2 words to start the quiz.");
      return;
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const count = overrideWords ? overrideWords.length : Math.min(quizCount, shuffled.length);
    const selected = shuffled.slice(0, count);

    const questions = selected.map((word) => {
      let isHrToNative = quizDirection === "hr_to_native";
      if (quizDirection === "mixed") {
        isHrToNative = Math.random() > 0.5;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const qType: "mc" | "written" | "listening" | "audio_spelling" = quizMode === "mixed"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ? (["mc", "written", "listening", "audio_spelling"][Math.floor(Math.random() * 4)] as any)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        : (quizMode as any);

      const prompt = qType === "audio_spelling"
        ? word.hr
        : (isHrToNative ? word.hr : getTranslation(word));

      const answer = (qType === "audio_spelling" || !isHrToNative)
        ? word.hr
        : getTranslation(word);

      let options: string[] = [];
      if (qType === "mc" || qType === "listening") {
        const optionPool = isHrToNative
          ? allMergedWords.map((w) => getTranslation(w))
          : allMergedWords.map((w) => w.hr);

        const incorrects = optionPool
          .filter((t) => t.toLowerCase() !== answer.toLowerCase())
          .filter((t, index, self) => self.indexOf(t) === index)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        options = [answer, ...incorrects].sort(() => 0.5 - Math.random());
      }

      return {
        word,
        options,
        answer,
        prompt,
        type: qType,
      };
    });

    setQuizQuestions(questions);
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setSelectedQuizOption(null);
    setQuizAnswered(false);
    setQuizInputText("");
    setQuizInputChecked(false);
    setQuizInputCorrect(false);
    setQuizSpellingResult(null);
    setQuizMistakes([]);
    setQuizComplete(false);
    setQuizStarted(true);

    if (questions[0]?.type === "listening" || questions[0]?.type === "audio_spelling") {
      setTimeout(() => speakText(questions[0].word.hr), 300);
    }
  };

  const handleQuizAnswer = (option: string) => {
    if (quizAnswered) return;
    setSelectedQuizOption(option);
    setQuizAnswered(true);

    const q = quizQuestions[currentQuizIndex];
    const isCorrect = option.toLowerCase().trim() === q.answer.toLowerCase().trim();

    updateWordStatus(q.word.hr, isCorrect ? "learned" : "learning");

    if (isCorrect) {
      setQuizScore((s) => s + 1);
    } else {
      setQuizMistakes((prev) => [...prev, { word: q.word, userAnswer: option, correctAnswer: q.answer }]);
    }
  };

  const handleWrittenQuizCheck = () => {
    if (quizInputChecked) return;
    const q = quizQuestions[currentQuizIndex];

    const result = checkCroatianSpelling(quizInputText, q.answer);
    setQuizSpellingResult(result);

    const isCorrect = result.isExact || result.isAlmost;
    setQuizInputChecked(true);
    setQuizInputCorrect(isCorrect);
    setQuizAnswered(true);

    updateWordStatus(q.word.hr, isCorrect ? "learned" : "learning");

    if (isCorrect) {
      setQuizScore((s) => s + result.scoreCredit);
    } else {
      setQuizMistakes((prev) => [...prev, { word: q.word, userAnswer: quizInputText || "(blank)", correctAnswer: q.answer }]);
    }
  };

  const nextQuizQuestion = () => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      const nextIdx = currentQuizIndex + 1;
      setCurrentQuizIndex(nextIdx);
      setSelectedQuizOption(null);
      setQuizAnswered(false);
      setQuizInputText("");
      setQuizInputChecked(false);
      setQuizInputCorrect(false);
      setQuizSpellingResult(null);

      if (quizQuestions[nextIdx]?.type === "listening" || quizQuestions[nextIdx]?.type === "audio_spelling") {
        setTimeout(() => speakText(quizQuestions[nextIdx].word.hr), 300);
      }
    } else {
      setQuizComplete(true);
      const earnedXP = quizScore * 10;
      if (earnedXP > 0) {
        fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ xp: earnedXP }),
        }).catch(console.error);
      }
    }
  };

  const retryQuizMistakes = () => {
    if (quizMistakes.length === 0) return;
    startQuiz(quizMistakes.map((m) => m.word));
  };

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

  const openHjp = (word: string) => {
    if (!word.trim()) return;
    window.open(`https://hjp.znanje.hr`, "_blank");
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[50vh]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
          <p className="text-sm text-muted-foreground">{t("loading")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="gradient-text">{t("title")}</span>
        </h1>
        <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
          {t("subtitle")}
        </p>
      </div>

      {/* Smart SRS Review Notification Banner */}
      {(() => {
        const dueCount = Object.values(wordProgressMap).filter(
          (prog) => prog.nextReview && new Date(prog.nextReview) <= new Date()
        ).length;

        if (dueCount === 0) return null;

        return (
          <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                <RotateCcw className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-amber-200">
                  {locale === "ua"
                    ? `Розумне повторення SRS: на сьогодні є ${dueCount} слів!`
                    : locale === "ru"
                    ? `Умное повторение SRS: на сегодня есть ${dueCount} слов для повторения!`
                    : `Smart SRS Review: ${dueCount} words due for review today!`}
                </h4>
                <p className="text-xs text-amber-300/80 mt-0.5">
                  {locale === "ua"
                    ? "Алгоритм пропонує повторити ці слова, щоб вони перейшли в довготривалу пам'ять."
                    : locale === "ru"
                    ? "Алгоритм предлагает повторить эти слова, чтобы они перешли в долговременную память."
                    : "Spaced repetition algorithm recommends reviewing these words now to solidify memory."}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedStatus("due");
                setActiveTab("flashcards");
                setIsFlipped(false);
              }}
              className="px-4 py-2 rounded-xl text-xs font-extrabold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all shrink-0 cursor-pointer shadow-md"
            >
              {locale === "ua" ? "Повторити слова зараз" : locale === "ru" ? "Повторить слова сейчас" : "Review Due Words Now"}
            </button>
          </div>
        );
      })()}

      {/* Tabs */}
      <div className="flex justify-center mb-8 border-b border-white/10 pb-px">
        <div className="flex gap-2 p-1 glass rounded-xl flex-wrap justify-center">
          <button
            onClick={() => setActiveTab("categories")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "categories" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("categoriesTab") || "Themes"}
          </button>
          <button
            onClick={() => { setActiveTab("flashcards"); setIsFlipped(false); }}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "flashcards" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("flashcards")}
          </button>
          <button
            onClick={() => { setActiveTab("quiz"); setQuizStarted(false); }}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "quiz" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("quiz")}
          </button>
          <button
            onClick={() => setActiveTab("glossary")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "glossary" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {locale === "ua" ? "📖 Граматика та довідник" : locale === "ru" ? "📖 Грамматика и справочник" : "📖 Grammar & Reference"}
          </button>
        </div>
      </div>

      {/* Vocabulary Progress Stats Overview Bar */}
      {activeTab !== "glossary" && !(activeTab === "quiz" && quizStarted) && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 animate-fade-in">
          <button
            onClick={() => setSelectedStatus("learned")}
            className={`glass p-3.5 rounded-2xl border transition-all text-center cursor-pointer ${selectedStatus === "learned" ? "border-emerald-500 bg-emerald-500/10" : "border-white/10 hover:bg-white/5"}`}
          >
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
              {locale === "ua" ? "Вивчено слів" : locale === "ru" ? "Выучено слов" : "Words Learned"}
            </span>
            <span className="text-xl font-black text-emerald-400">
              {Object.values(wordProgressMap).filter((p) => p.status === "learned" || p.status === "mastered").length}
            </span>
          </button>
          <button
            onClick={() => setSelectedStatus("due")}
            className={`glass p-3.5 rounded-2xl border transition-all text-center cursor-pointer ${selectedStatus === "due" ? "border-amber-500 bg-amber-500/10" : "border-white/10 hover:bg-white/5"}`}
          >
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
              {locale === "ua" ? "Обов'язкове повторення" : locale === "ru" ? "Обязательный повтор" : "Mandatory Review"}
            </span>
            <span className="text-xl font-black text-amber-400">
              {Object.values(wordProgressMap).filter((p) => p.nextReview && new Date(p.nextReview) <= new Date()).length}
            </span>
          </button>
          <button
            onClick={() => setSelectedStatus("starred")}
            className={`glass p-3.5 rounded-2xl border transition-all text-center cursor-pointer ${selectedStatus === "starred" ? "border-yellow-500 bg-yellow-500/10" : "border-white/10 hover:bg-white/5"}`}
          >
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
              {locale === "ua" ? "Обрані слова" : locale === "ru" ? "Избранные слова" : "Favorite Words"}
            </span>
            <span className="text-xl font-black text-yellow-400">{starredWords.length}</span>
          </button>
          <button
            onClick={() => setSelectedStatus("all")}
            className={`glass p-3.5 rounded-2xl border transition-all text-center cursor-pointer ${selectedStatus === "all" ? "border-blue-500 bg-blue-500/10" : "border-white/10 hover:bg-white/5"}`}
          >
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
              {locale === "ua" ? "Всього у базі" : locale === "ru" ? "Всего в базе" : "Total in Database"}
            </span>
            <span className="text-xl font-black text-blue-400">{allMergedWords.length}</span>
          </button>
        </div>
      )}

      {/* Filters (skip during active quiz or glossary) */}
      {!(activeTab === "quiz" && quizStarted && !quizComplete) && activeTab !== "glossary" && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 bg-white/5 p-4 rounded-2xl border border-white/10 animate-fade-in">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {locale === "ua" ? "Статус:" : locale === "ru" ? "Статус:" : "Status:"}
              </span>
              <div className="flex gap-1 flex-wrap">
                {[
                  { id: "all", label: locale === "ua" ? "Усі" : locale === "ru" ? "Все" : "All" },
                  { id: "due", label: locale === "ua" ? "🔥 Повторити" : locale === "ru" ? "🔥 Повторить" : "🔥 Due" },
                  { id: "learned", label: locale === "ua" ? "✅ Вивчені" : locale === "ru" ? "✅ Выученные" : "✅ Learned" },
                  { id: "starred", label: locale === "ua" ? "⭐ Обрані" : locale === "ru" ? "⭐ Избранные" : "⭐ Starred" },
                  { id: "new", label: locale === "ua" ? "🆕 Нові" : locale === "ru" ? "🆕 Новые" : "🆕 New" },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setSelectedStatus(st.id)}
                    className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                      selectedStatus === st.id
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/40 font-bold"
                        : "border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {t("levelFilter")}:
              </span>
              <div className="flex gap-1">
                {["all", "A1", "A2", "B1", "B2"].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => {
                      setSelectedLevel(lvl);
                      setDeckIndex(0);
                      setIsFlipped(false);
                    }}
                    className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                      selectedLevel.toLowerCase() === lvl.toLowerCase()
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                        : "border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {lvl === "all" ? t("all") : lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {t("categoryFilter") || "Category"}:
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setDeckIndex(0);
                  setIsFlipped(false);
                }}
                className="bg-white dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-white/10 rounded-xl px-2 py-1 focus:outline-none focus:border-blue-500 cursor-pointer shadow-sm"
              >
                <option value="all" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">{t("allCategories") || "All categories"}</option>
                {vocabularyCategories.map((cat) => (
                  <option key={cat} value={cat} className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
                    {getCategoryLabel(cat)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {locale === "ua" ? "Частина мови" : locale === "ru" ? "Часть речи" : "Part of Speech"}:
              </span>
              <select
                value={selectedPOS}
                onChange={(e) => {
                  setSelectedPOS(e.target.value);
                  setDeckIndex(0);
                  setIsFlipped(false);
                }}
                className="bg-white dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-white/10 rounded-xl px-2 py-1 focus:outline-none focus:border-blue-500 cursor-pointer shadow-sm"
              >
                {Object.entries(posLabels).map(([key, labelObj]) => (
                  <option key={key} value={key} className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
                    {labelObj[locale as "en" | "ru" | "ua"] || labelObj.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            {filteredWords.length} {t("wordsLoaded")}
          </div>
        </div>
      )}

      {/* Categories View */}
      {activeTab === "categories" && (
        <div className="space-y-8 animate-fade-in">
          {/* Main Category Cards */}
          {selectedCategory === "all" ? (
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 stagger-children">
              {vocabularyCategories.map((cat) => {
                const catWords = allMergedWords.filter((w) => w.category === cat);
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="glass p-5 rounded-2xl text-center border border-white/5 card-hover flex flex-col items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                      <FolderOpen className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-1">
                      {getCategoryLabel(cat)}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {catWords.length} {t("words") || "words"}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  {getCategoryLabel(selectedCategory)}
                </h2>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="text-xs text-blue-400 font-semibold flex items-center gap-1 hover:underline"
                >
                  {t("backToAll") || "← Back to all themes"}
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
                {filteredWords.map((word, i) => {
                  const key = word.hr.toLowerCase();
                  const prog = wordProgressMap[key];
                  const isStarred = starredWords.includes(word.hr);
                  const isLearned = prog?.status === "learned" || prog?.status === "mastered";
                  const isDue = prog?.nextReview && new Date(prog.nextReview) <= new Date();

                  return (
                    <div
                      key={i}
                      className="glass p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                              {word.level}
                            </span>
                            {isLearned ? (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                {locale === "ua" ? "✅ Вивчено" : locale === "ru" ? "✅ Выучено" : "✅ Learned"}
                              </span>
                            ) : isDue ? (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                {locale === "ua" ? "🔥 Повторити" : locale === "ru" ? "🔥 Повторить" : "🔥 Due"}
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-muted-foreground/60">
                                {locale === "ua" ? "🆕 Нове" : locale === "ru" ? "🆕 Новое" : "🆕 New"}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={(e) => toggleStarWord(word.hr, e)}
                              className={`p-1 rounded transition-colors ${
                                isStarred ? "text-yellow-400" : "text-muted-foreground/40 hover:text-foreground"
                              }`}
                            >
                              <Star className="w-4 h-4" fill={isStarred ? "currentColor" : "none"} />
                            </button>
                            <button
                              onClick={() => speakWord(word.hr)}
                              className="p-1 rounded bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <h3 className="text-xl font-black text-foreground mb-1 select-all">
                          {word.hr}
                        </h3>
                        <p className="text-sm font-semibold text-blue-400 mb-3">
                          {getTranslation(word)}
                        </p>
                      </div>

                      {word.example && (
                        <div className="mt-3 pt-3 border-t border-white/5">
                          <p className="text-xs italic text-muted-foreground leading-relaxed">
                            &quot;{word.example.hr}&quot;
                          </p>
                          <p className="text-[10px] text-muted-foreground/60 mt-1 leading-relaxed">
                            {locale === "ru" ? word.example.ru : locale === "ua" ? word.example.ua : word.example.en}
                          </p>
                        </div>
                      )}

                      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                        <button
                          onClick={() => updateWordStatus(word.hr, isLearned ? "new" : "learned")}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                            isLearned
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20"
                              : "glass text-muted-foreground border-white/10 hover:bg-white/10 hover:text-foreground"
                          }`}
                        >
                          {isLearned
                            ? locale === "ua" ? "✓ Вивчено" : locale === "ru" ? "✓ Выучено" : "✓ Learned"
                            : locale === "ua" ? "+ Позначити вивченим" : locale === "ru" ? "+ Отметить выученным" : "+ Mark Learned"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Flashcards View (Professional Anki / Quizlet Deck System) */}
      {activeTab === "flashcards" && (
        <div className="space-y-6 animate-fade-in">
          {/* Deck Configuration & Toolbar */}
          <div className="glass p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Deck Mode Selector */}
              <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5 flex-wrap">
                <button
                  onClick={() => setDeckMode("all")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    deckMode === "all" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t("allFiltered")}
                </button>
                <button
                  onClick={() => setDeckMode("quick15")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    deckMode === "quick15" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t("quick15")}
                </button>
                <button
                  onClick={() => setDeckMode("quick30")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    deckMode === "quick30" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t("quick30")}
                </button>
                <button
                  onClick={() => setDeckMode("starred")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 ${
                    deckMode === "starred" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-md" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {t("starredOnly")} ({starredWords.length})
                </button>
                <button
                  onClick={() => setDeckMode("due")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 ${
                    deckMode === "due" ? "bg-amber-500 text-white shadow-md font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  🔥 {locale === "ua" ? "Повторення" : locale === "ru" ? "Повтор" : "Due"} ({Object.values(wordProgressMap).filter((p) => p.nextReview && new Date(p.nextReview) <= new Date()).length})
                </button>
                <button
                  onClick={() => setDeckMode("learned")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 ${
                    deckMode === "learned" ? "bg-emerald-600 text-white shadow-md font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  ✅ {locale === "ua" ? "Вивчено" : locale === "ru" ? "Выучено" : "Learned"} ({Object.values(wordProgressMap).filter((p) => p.status === "learned" || p.status === "mastered").length})
                </button>
              </div>

              {/* Direction Toggle */}
              <button
                onClick={() => setDeckDirection((d) => d === "hr_to_native" ? "native_to_hr" : "hr_to_native")}
                className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-white/5 border border-white/10 text-foreground hover:bg-white/10 transition-all flex items-center gap-1.5"
                title={t("direction")}
              >
                <ArrowRightLeft className="w-3.5 h-3.5 text-blue-400" />
                {deckDirection === "hr_to_native" ? t("hrToNative") : t("nativeToHr")}
              </button>

              {/* Auto Audio Toggle */}
              <button
                onClick={() => setAutoAudio(!autoAudio)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 ${
                  autoAudio
                    ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                    : "bg-white/5 text-muted-foreground border-white/10 hover:text-foreground"
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                {t("autoAudio")}
              </button>
            </div>

            {/* Shuffle Button */}
            <button
              onClick={() => startDeck()}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <Shuffle className="w-3.5 h-3.5" />
              {t("shuffle")}
            </button>
          </div>

          {/* Main Deck Container */}
          {deckFinished ? (
            /* Deck Completion Screen */
            <div className="glass p-8 rounded-3xl border border-white/10 text-center space-y-6 max-w-md mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-foreground">{t("deckComplete")}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {deckQueue.length} {t("words")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-center">
                  <span className="text-2xl font-black text-emerald-400">{masteredCount}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{t("cardsMastered")}</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-black text-red-400">{reviewLaterQueue.length}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{t("cardsNeedReview")}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                {reviewLaterQueue.length > 0 && (
                  <button
                    onClick={restudyMissed}
                    className="w-full py-3 rounded-xl font-bold text-sm bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    {t("restudyMissed")} ({reviewLaterQueue.length})
                  </button>
                )}
                <button
                  onClick={() => startDeck()}
                  className="w-full py-3 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  <RefreshCw className="w-4 h-4" />
                  {t("restartDeck")}
                </button>
              </div>
            </div>
          ) : deckQueue.length > 0 ? (
            /* Active Card Stack */
            <div className="flex flex-col items-center space-y-6">
              {/* Progress & Deck Status Bar */}
              <div className="w-full max-w-md space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-emerald-400">✅ {masteredCount}</span>
                  <span className="text-muted-foreground">
                    {deckIndex + 1} / {deckQueue.length}
                  </span>
                  <span className="text-red-400">❌ {reviewLaterQueue.length}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full transition-all duration-300"
                    style={{ width: `${((deckIndex + 1) / deckQueue.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* 3D Flip Card */}
              {(() => {
                const word = deckQueue[deckIndex];
                if (!word) return null;
                const isStarred = starredWords.includes(word.hr);

                const frontText = deckDirection === "hr_to_native" ? word.hr : getTranslation(word);
                const backText = deckDirection === "hr_to_native" ? getTranslation(word) : word.hr;

                return (
                  <div className="w-full max-w-md space-y-6">
                    <div
                      onClick={() => setIsFlipped(!isFlipped)}
                      className="w-full h-72 cursor-pointer relative perspective"
                    >
                      <div
                        className={`w-full h-full duration-500 preserve-3d relative rounded-3xl glass border border-white/10 flex flex-col items-center justify-center p-8 transition-transform shadow-2xl ${
                          isFlipped ? "rotate-y-180" : ""
                        }`}
                      >
                        {/* Star Button (Top Right) */}
                        <button
                          onClick={(e) => toggleStarWord(word.hr, e)}
                          className={`absolute top-4 right-4 p-2 rounded-xl border transition-all z-20 ${
                            isStarred
                              ? "bg-amber-500/20 border-amber-500/30 text-amber-400"
                              : "bg-white/5 border-white/10 text-muted-foreground hover:text-amber-400"
                          }`}
                          title="Star word"
                        >
                          <Star className={`w-5 h-5 ${isStarred ? "fill-amber-400 text-amber-400" : ""}`} />
                        </button>

                        {/* Front Side */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 uppercase tracking-wider mb-4 border border-blue-500/20">
                            {word.level} • {getCategoryLabel(word.category)}
                          </span>
                          <h2 className="text-4xl font-extrabold text-foreground tracking-tight text-center select-none">
                            {frontText}
                          </h2>
                          <div className="flex items-center gap-2 mt-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                speakWord(word.hr);
                              }}
                              className="p-2 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                            <span className="text-xs text-muted-foreground select-none">
                              {t("revealTranslation")}
                            </span>
                          </div>
                        </div>

                        {/* Back Side */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 uppercase tracking-wider mb-3 border border-emerald-500/20">
                            {getCategoryLabel(word.category)}
                          </span>
                          <h3 className="text-3xl font-extrabold text-foreground text-center">
                            {backText}
                          </h3>

                          {word.example && (
                            <div className="mt-4 text-center max-w-xs">
                              <p className="text-xs italic text-muted-foreground leading-relaxed">
                                &quot;{word.example.hr}&quot;
                              </p>
                              <p className="text-[10px] text-muted-foreground/60 mt-1">
                                {locale === "ru" ? word.example.ru : locale === "ua" ? word.example.ua : word.example.en}
                              </p>
                            </div>
                          )}

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speakWord(word.hr);
                            }}
                            className="mt-4 p-2 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium"
                          >
                            <Volume2 className="w-4 h-4" />
                            {t("listenPronunciation")}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Anki Active Recall Controls (Need Review vs Mastered) */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleCardAnswer(false)}
                        className="flex-1 py-3.5 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400 font-bold text-sm hover:bg-red-500/20 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/10 active:scale-95"
                      >
                        <X className="w-5 h-5" />
                        {t("stillLearning")}
                      </button>
                      <button
                        onClick={() => handleCardAnswer(true)}
                        className="flex-1 py-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold text-sm hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 active:scale-95"
                      >
                        <Check className="w-5 h-5" />
                        {t("mastered")}
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : (
            <div className="text-center py-12 glass rounded-2xl border border-white/10">
              <p className="text-muted-foreground">{t("noWordsFound")}</p>
            </div>
          )}
        </div>
      )}

      {/* Quiz View (Fully Configurable Test System) */}
      {activeTab === "quiz" && (
        <div className="space-y-6 animate-fade-in max-w-2xl mx-auto">
          {!quizStarted ? (
            /* Quiz Configuration Setup */
            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mx-auto">
                  <Trophy className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-extrabold text-foreground">{t("quiz")}</h2>
                <p className="text-sm text-muted-foreground">{t("quizSubtitle")}</p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/5">
                {/* Question Count Selector */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {t("questionCount")}
                  </label>
                  <div className="grid grid-cols-6 gap-2">
                    {[5, 10, 15, 20, 25, 50].map((num) => (
                      <button
                        key={num}
                        onClick={() => setQuizCount(num)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all text-center ${
                          quizCount === num
                            ? "bg-blue-600 text-white border-blue-500 shadow-md"
                            : "bg-white/5 border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Test Mode Selector */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {t("testMode")}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: "mc", label: t("modeMultipleChoice") },
                      { key: "written", label: t("modeWritten") },
                      { key: "listening", label: t("modeListening") },
                      { key: "audio_spelling", label: locale === "ua" ? "🎧 Аудіо-диктант (На слух)" : locale === "ru" ? "🎧 Аудио-диктант (На слух)" : "🎧 Audio Dictation (Spelling)" },
                      { key: "mixed", label: t("modeMixed") },
                    ].map(({ key, label }) => (
                      <button
                        key={key}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onClick={() => setQuizMode(key as any)}
                        className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all ${
                          quizMode === key
                            ? "bg-blue-600 text-white border-blue-500 shadow-md"
                            : "bg-white/5 border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direction Selector */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {t("direction")}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: "hr_to_native", label: t("hrToNative") },
                      { key: "native_to_hr", label: t("nativeToHr") },
                      { key: "mixed", label: "🔀 Mixed" },
                    ].map(({ key, label }) => (
                      <button
                        key={key}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onClick={() => setQuizDirection(key as any)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                          quizDirection === key
                            ? "bg-blue-600 text-white border-blue-500 shadow-md"
                            : "bg-white/5 border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => startQuiz()}
                className="w-full py-3.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {t("start")} ({Math.min(quizCount, filteredWords.length)} {t("words")})
              </button>
            </div>
          ) : quizComplete ? (
            /* Detailed Quiz Completion & Mistake Review */
            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 animate-fade-in">
              <div className="text-center space-y-2">
                <Trophy className="w-14 h-14 text-yellow-400 mx-auto animate-bounce" />
                <h2 className="text-3xl font-extrabold text-foreground">{t("quizComplete")}</h2>
                <p className="text-lg text-muted-foreground">
                  {t("score")}: <span className="text-blue-400 font-black">{quizScore} / {quizQuestions.length}</span>
                </p>
                <div className="flex justify-center gap-4 text-xs font-bold pt-1">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {t("accuracy")}: {Math.round((quizScore / quizQuestions.length) * 100)}%
                  </span>
                  <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                    +{quizScore * 10} XP
                  </span>
                </div>
              </div>

              {/* Detailed Mistakes Review Log */}
              {quizMistakes.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-400" />
                    {t("reviewMistakes")} ({quizMistakes.length})
                  </h3>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {quizMistakes.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                        <div>
                          <div className="flex items-center gap-2 font-bold text-foreground">
                            <span>{m.word.hr}</span>
                            <button onClick={() => speakWord(m.word.hr)} className="p-1 rounded bg-blue-500/10 text-blue-400">
                              <Volume2 className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="text-red-400 mt-0.5">
                            {t("yourAnswer")}: <span className="line-through">{m.userAnswer}</span>
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-emerald-400 font-semibold">{t("correctAnswer")}: {m.correctAnswer}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {quizMistakes.length > 0 && (
                  <button
                    onClick={retryQuizMistakes}
                    className="flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 transition-all flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-4 h-4" />
                    {t("retryMissedQuiz")} ({quizMistakes.length})
                  </button>
                )}
                <button
                  onClick={() => setQuizStarted(false)}
                  className="flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 text-white hover:bg-blue-500 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/25"
                >
                  <RefreshCw className="w-4 h-4" />
                  {t("newQuizSetup")}
                </button>
              </div>
            </div>
          ) : (
            /* Active Quiz Question Screen */
            <div className="glass rounded-3xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
              {/* Quiz progress */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-wider">
                  {t("question")} {currentQuizIndex + 1} {t("of")} {quizQuestions.length}
                </span>
                <span className="font-bold text-emerald-400">XP: +{quizScore * 10}</span>
              </div>

              {/* Question Header */}
              {(() => {
                const q = quizQuestions[currentQuizIndex];
                if (!q) return null;

                return (
                  <div className="space-y-6">
                    <div className="text-center py-4">
                      {q.type === "audio_spelling" ? (
                        <div className="flex flex-col items-center gap-3">
                          <button
                            type="button"
                            onClick={() => speakWord(q.word.hr)}
                            className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border border-blue-400 text-white flex items-center justify-center hover:scale-105 transition-all shadow-xl shadow-blue-500/30 cursor-pointer"
                          >
                            <Volume2 className="w-10 h-10 animate-pulse" />
                          </button>
                          <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                            🔊 {locale === "ua" ? "Натисніть для повтору аудіо" : locale === "ru" ? "Нажмите для повтора аудио" : "Click to re-listen audio"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            💡 {locale === "ua" ? "Підказка (Переклад):" : locale === "ru" ? "Подсказка (Перевод):" : "Hint (Translation):"}{" "}
                            <span className="font-semibold text-foreground">{getTranslation(q.word)}</span>
                          </p>
                        </div>
                      ) : q.type === "listening" ? (
                        <div className="flex flex-col items-center gap-3">
                          <button
                            onClick={() => speakWord(q.word.hr)}
                            className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center hover:bg-blue-600/30 transition-all"
                          >
                            <Volume2 className="w-8 h-8" />
                          </button>
                          <p className="text-xs text-muted-foreground">Listen and choose translation</p>
                        </div>
                      ) : (
                        <>
                          <h3 className="text-3xl font-black text-foreground tracking-tight">{q.prompt}</h3>
                          <div className="flex items-center justify-center gap-2 mt-1">
                            {q.prompt === q.word.hr && (
                              <button onClick={() => speakWord(q.word.hr)} className="p-1 rounded bg-blue-500/10 text-blue-400">
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                            <p className="text-xs text-muted-foreground">{t("chooseCorrectTranslation")}</p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Question Body: Written / Audio Spelling vs Multiple Choice */}
                    {q.type === "written" || q.type === "audio_spelling" ? (
                      <div className="space-y-4 max-w-sm mx-auto">
                        <input
                          type="text"
                          value={quizInputText}
                          onChange={(e) => setQuizInputText(e.target.value)}
                          onKeyDown={(e) => { if (e.key === "Enter" && !quizInputChecked) handleWrittenQuizCheck(); }}
                          disabled={quizInputChecked}
                          placeholder={q.type === "audio_spelling" ? (locale === "ua" ? "Напишіть слово на слух..." : locale === "ru" ? "Напишите слово на слух..." : "Spell Croatian word...") : "Type translation..."}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-center text-lg font-semibold focus:outline-none focus:border-blue-500 disabled:opacity-50"
                          autoFocus
                        />

                        {/* Diacritic Keyboard Buttons */}
                        {!quizInputChecked && (
                          <div className="flex flex-wrap justify-center gap-1">
                            {["č", "ć", "đ", "š", "ž", "Č", "Ć", "Đ", "Š", "Ž"].map((char) => (
                              <button
                                key={char}
                                type="button"
                                onClick={() => setQuizInputText((prev) => prev + char)}
                                className="w-7 h-7 rounded bg-white/5 border border-white/10 text-xs font-bold text-foreground hover:bg-blue-500 hover:text-white transition-all"
                              >
                                {char}
                              </button>
                            ))}
                          </div>
                        )}

                        {quizInputChecked && (
                          <div
                            className={`p-3 rounded-xl border animate-slide-up ${
                              quizSpellingResult?.isExact
                                ? "bg-emerald-500/10 border-emerald-500/30"
                                : quizSpellingResult?.isAlmost
                                ? "bg-amber-500/10 border-amber-500/30"
                                : "bg-red-500/10 border-red-500/30"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {quizSpellingResult?.isExact ? (
                                <Check className="w-4 h-4 text-emerald-400" />
                              ) : quizSpellingResult?.isAlmost ? (
                                <Sparkles className="w-4 h-4 text-amber-400" />
                              ) : (
                                <X className="w-4 h-4 text-red-400" />
                              )}
                              <span
                                className={`text-xs font-bold ${
                                  quizSpellingResult?.isExact
                                    ? "text-emerald-400"
                                    : quizSpellingResult?.isAlmost
                                    ? "text-amber-400"
                                    : "text-red-400"
                                }`}
                              >
                                {quizSpellingResult?.isExact
                                  ? (locale === "ua" ? "Чудово! Все правильно!" : locale === "ru" ? "Отлично! Всё правильно!" : "Perfect!")
                                  : quizSpellingResult?.isAlmost
                                  ? (locale === "ua" ? "⚠️ Майже правильно!" : locale === "ru" ? "⚠️ Почти правильно!" : "⚠️ Almost correct!")
                                  : (locale === "ua" ? "Помилка" : locale === "ru" ? "Ошибка" : "Incorrect")}
                              </span>
                            </div>

                            {quizSpellingResult?.message && (
                              <p className="text-[11px] text-muted-foreground mt-1">
                                {quizSpellingResult.message[locale as "en" | "ru" | "ua"] || quizSpellingResult.message.en}
                              </p>
                            )}

                            {quizSpellingResult?.diacriticErrors && quizSpellingResult.diacriticErrors.length > 0 && (
                              <div className="mt-1.5 text-[11px] bg-amber-500/10 p-2 rounded-lg border border-amber-500/20 text-amber-300">
                                <span className="font-bold block mb-0.5">
                                  {locale === "ua" ? "Зверніть увагу на спецсимволи:" : locale === "ru" ? "Обратите внимание на спецсимволы:" : "Diacritic Warning:"}
                                </span>
                                {quizSpellingResult.diacriticErrors.map((err, i) => (
                                  <span key={i} className="inline-block mr-1.5 bg-amber-400/20 px-1.5 py-0.5 rounded font-mono text-amber-200">
                                    &apos;{err.written}&apos; → &apos;{err.expected}&apos;
                                  </span>
                                ))}
                              </div>
                            )}

                            {!quizSpellingResult?.isExact && (
                              <div className="mt-1.5 text-xs space-y-0.5 border-t border-white/5 pt-1.5">
                                <p className="text-muted-foreground">
                                  {t("correctAnswer")}: <span className="font-bold text-foreground">{q.answer}</span>
                                </p>
                                {q.type === "audio_spelling" && (
                                  <p className="text-muted-foreground">
                                    {locale === "ua" ? "Переклад:" : locale === "ru" ? "Перевод:" : "Translation:"} <span className="font-medium text-blue-400">{getTranslation(q.word)}</span>
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        <div className="flex justify-end">
                          {!quizInputChecked ? (
                            <button
                              onClick={handleWrittenQuizCheck}
                              disabled={!quizInputText.trim()}
                              className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs disabled:opacity-50 hover:bg-blue-500 transition-all cursor-pointer"
                            >
                              {locale === "ua" ? "Перевірити" : locale === "ru" ? "Проверить" : "Check"}
                            </button>
                          ) : (
                            <button
                              onClick={nextQuizQuestion}
                              className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-all cursor-pointer"
                            >
                              {currentQuizIndex < quizQuestions.length - 1 ? t("nextQuestion") : t("finish")}
                            </button>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Multiple Choice Options */
                      <div className="grid gap-3 sm:grid-cols-2">
                        {q.options.map((option) => {
                          const isCorrect = option.toLowerCase().trim() === q.answer.toLowerCase().trim();
                          const isSelected = option === selectedQuizOption;

                          let optionClass = "border-white/10 hover:bg-white/5 text-foreground";
                          if (quizAnswered) {
                            if (isCorrect) {
                              optionClass = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
                            } else if (isSelected) {
                              optionClass = "bg-red-500/10 text-red-400 border-red-500/30";
                            } else {
                              optionClass = "opacity-50 border-white/5";
                            }
                          }

                          return (
                            <button
                              key={option}
                              disabled={quizAnswered}
                              onClick={() => handleQuizAnswer(option)}
                              className={`w-full p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between ${optionClass}`}
                            >
                              <span>{option}</span>
                              {quizAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-400" />}
                              {quizAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-red-400" />}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Action Button for Multiple Choice */}
                    {quizAnswered && q.type !== "written" && (
                      <div className="flex justify-end pt-4 border-t border-white/5">
                        <button
                          onClick={nextQuizQuestion}
                          className="px-6 py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg text-sm transition-all"
                        >
                          {currentQuizIndex < quizQuestions.length - 1 ? t("nextQuestion") : t("finish")}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}

      {/* Grammar Glossary Tab Content */}
      {activeTab === "glossary" && (
        <div className="space-y-6 animate-fade-in">
          <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-xl">
            
            {/* Header & Subtitle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase font-editorial flex items-center gap-2.5 text-foreground">
                  <GraduationCap className="w-7 h-7 text-purple-400" />
                  {locale === "ua" ? "Грамматичний довідник хорватської мови" : locale === "ru" ? "Грамматический справочник хорватского языка" : "Croatian Grammar Reference Glossary"}
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  {locale === "ua"
                    ? "Правила відмінювання, відмінки, алфавіт, дієслова та граматичні структури."
                    : locale === "ru"
                    ? "Правила склонения, падежи, алфавит, глаголы и грамматические структуры."
                    : "Rules of declension, cases, alphabet, verb conjugations, and structure reference."}
                </p>
              </div>

              {/* Quick Actions: Expand All / Collapse All */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={expandAllGlossary}
                  className="px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs font-bold transition-all"
                >
                  {locale === "ua" ? "Розгорнути всі" : locale === "ru" ? "Развернуть все" : "Expand All"}
                </button>
                <button
                  onClick={collapseAllGlossary}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground border border-white/10 text-xs font-bold transition-all"
                >
                  {locale === "ua" ? "Згорнути всі" : locale === "ru" ? "Свернуть все" : "Collapse All"}
                </button>
              </div>
            </div>

            {/* Search Filter Bar */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={locale === "ua" ? "Пошук по граматиці та правилам..." : locale === "ru" ? "Поиск по грамматике и правилам..." : "Search grammar rules & topics..."}
                value={glossarySearchQuery}
                onChange={(e) => setGlossarySearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/60 dark:bg-black/30 border border-white/10 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>

            {/* Categories Accordion */}
            <div className="space-y-4 pt-1">
              {glossaryData
                .filter((cat) => {
                  if (!glossarySearchQuery.trim()) return true;
                  const query = glossarySearchQuery.toLowerCase();
                  const catTitle = (cat.title[locale as "en" | "ru" | "ua"] || cat.title.en).toLowerCase();
                  const matchesSection = cat.sections.some((s) =>
                    (s.title[locale as "en" | "ru" | "ua"] || s.title.en).toLowerCase().includes(query) ||
                    s.subsections.some((sub) =>
                      (sub.title[locale as "en" | "ru" | "ua"] || sub.title.en).toLowerCase().includes(query) ||
                      (sub.text[locale as "en" | "ru" | "ua"] || sub.text.en).toLowerCase().includes(query)
                    )
                  );
                  return catTitle.includes(query) || matchesSection;
                })
                .map((cat) => {
                  const isQueryActive = Boolean(glossarySearchQuery.trim());
                  // Collapsed by default unless user toggled or query active
                  const isOpen = isQueryActive ? true : (expandedGlossary[cat.id] ?? false);
                  const sectionCount = cat.sections.length;

                  return (
                    <div 
                      key={cat.id} 
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpen 
                          ? "bg-slate-900/90 dark:bg-slate-950/80 border-purple-500/40 shadow-lg shadow-purple-500/5" 
                          : "bg-white/5 dark:bg-slate-900/40 border-white/10 hover:border-purple-500/30"
                      }`}
                    >
                      <button
                        onClick={() => setExpandedGlossary((prev) => ({ ...prev, [cat.id]: !prev[cat.id] }))}
                        className="w-full p-4.5 flex items-center justify-between font-bold text-sm text-foreground hover:text-purple-400 transition-colors text-left gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-purple-500" />
                          <span className="uppercase tracking-wide font-editorial text-base">{cat.title[locale as "en" | "ru" | "ua"] || cat.title.en}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            {sectionCount} {locale === "ua" ? "розділів" : locale === "ru" ? "разделов" : "sections"}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-6 border-t border-white/10 space-y-5 text-xs text-muted-foreground animate-fade-in">
                          {cat.sections.map((sec) => (
                            <div key={sec.id} className="p-4 rounded-xl bg-slate-950/60 dark:bg-black/40 border border-white/5 space-y-3">
                              <h4 className="font-bold text-foreground text-sm flex items-center gap-2 uppercase tracking-wide">
                                <span className="text-base">{sec.icon}</span>
                                <span>{sec.title[locale as "en" | "ru" | "ua"] || sec.title.en}</span>
                              </h4>
                              {sec.subsections.map((sub, sIdx) => (
                                <div key={sIdx} className="space-y-2 pl-3 border-l-2 border-purple-500/30">
                                  <h5 className="font-bold text-foreground text-xs">{sub.title[locale as "en" | "ru" | "ua"] || sub.title.en}</h5>
                                  <p className="leading-relaxed text-muted-foreground">{sub.text[locale as "en" | "ru" | "ua"] || sub.text.en}</p>
                                  {sub.table && (
                                    <div className="overflow-x-auto my-3 rounded-xl border border-white/10 bg-slate-900/80 p-2">
                                      <table className="w-full text-xs text-left border-collapse">
                                        <thead>
                                          <tr className="border-b border-white/10 text-purple-400 font-bold uppercase tracking-wider text-[10px]">
                                            {sub.table.headers.map((h, hIdx) => {
                                              const hText = typeof h === "string" ? h : (h[locale as "en" | "ru" | "ua"] || h.en);
                                              return <th key={hIdx} className="p-2.5">{hText}</th>;
                                            })}
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {sub.table.rows.map((row, rIdx) => (
                                            <tr key={rIdx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                              {row.cells.map((cell, cIdx) => {
                                                const cellText = typeof cell === "string" ? cell : (cell[locale as "en" | "ru" | "ua"] || cell.en);
                                                return <td key={cIdx} className="p-2.5 font-medium text-foreground">{cellText}</td>;
                                              })}
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
