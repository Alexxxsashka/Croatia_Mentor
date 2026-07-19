"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

import {
  vocabularyWords,
  vocabularyCategories,
  categoryLabels,
  type VocabWord,
} from "@/lib/vocabulary-data";
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
} from "lucide-react";

import { speakText } from "@/lib/speech";

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
  const [activeTab, setActiveTab] = useState<"categories" | "flashcards" | "quiz" | "dictionary">("categories");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPOS, setSelectedPOS] = useState<string>("all");
  
  // Flashcard states
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Search/Dictionary states
  const [searchQuery, setSearchQuery] = useState("");
  const [hjpSearchWord, setHjpSearchWord] = useState("");

  // Quiz states
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<{ word: VocabWord; options: string[]; answer: string }[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

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
    const levelMatch = selectedLevel === "all" || w.level.toLowerCase() === selectedLevel.toLowerCase();
    const categoryMatch = selectedCategory === "all" || w.category === selectedCategory;
    const posMatch = selectedPOS === "all" || getPartOfSpeech(w) === selectedPOS;
    return levelMatch && categoryMatch && posMatch;
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

  // Generate Quiz
  const startQuiz = () => {
    if (filteredWords.length < 4) {
      alert("Please select a level/category with at least 4 words to start the quiz.");
      return;
    }

    const shuffled = [...filteredWords].sort(() => 0.5 - Math.random());
    const questions = shuffled.slice(0, 8).map((word) => {
      const correctTranslation = getTranslation(word);
      const incorrects = allMergedWords
        .filter((w) => w.hr !== word.hr)
        .map((w) => getTranslation(w))
        .filter((t, index, self) => self.indexOf(t) === index && t !== correctTranslation)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const options = [correctTranslation, ...incorrects].sort(() => 0.5 - Math.random());
      
      return {
        word,
        options,
        answer: correctTranslation,
      };
    });

    setQuizQuestions(questions);
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setSelectedQuizOption(null);
    setQuizAnswered(false);
    setQuizComplete(false);
    setQuizStarted(true);
  };

  const handleQuizAnswer = (option: string) => {
    if (quizAnswered) return;
    setSelectedQuizOption(option);
    setQuizAnswered(true);
    
    if (option === quizQuestions[currentQuizIndex].answer) {
      setQuizScore(quizScore + 1);
    }
  };

  const nextQuizQuestion = () => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedQuizOption(null);
      setQuizAnswered(false);
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

  const activeWord = filteredWords[currentCardIndex];

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
            onClick={() => setActiveTab("dictionary")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "dictionary" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("dictionary")}
          </button>
        </div>
      </div>

      {/* Filters (skip during active quiz) */}
      {!(activeTab === "quiz" && quizStarted && !quizComplete) && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 bg-white/5 p-4 rounded-2xl border border-white/10 animate-fade-in">
          <div className="flex flex-wrap items-center gap-4">
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
                      setCurrentCardIndex(0);
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
                  setCurrentCardIndex(0);
                  setIsFlipped(false);
                }}
                className="bg-transparent text-xs font-semibold text-foreground border border-white/10 rounded-xl px-2 py-1 focus:outline-none focus:border-blue-500"
              >
                <option value="all" className="bg-slate-900 text-foreground">{t("allCategories") || "All categories"}</option>
                {vocabularyCategories.map((cat) => (
                  <option key={cat} value={cat} className="bg-slate-900 text-foreground">
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
                  setCurrentCardIndex(0);
                  setIsFlipped(false);
                }}
                className="bg-transparent text-xs font-semibold text-foreground border border-white/10 rounded-xl px-2 py-1 focus:outline-none focus:border-blue-500"
              >
                {Object.entries(posLabels).map(([key, labelObj]) => (
                  <option key={key} value={key} className="bg-slate-900 text-foreground">
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
                {filteredWords.map((word, i) => (
                  <div
                    key={i}
                    className="glass p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                          {word.level}
                        </span>
                        <button
                          onClick={() => speakWord(word.hr)}
                          className="p-1 rounded bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Flashcards View */}
      {activeTab === "flashcards" && (
        <div className="space-y-6 animate-fade-in">
          {filteredWords.length > 0 ? (
            <div className="flex flex-col items-center">
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full max-w-md h-64 cursor-pointer relative perspective"
              >
                <div 
                  className={`w-full h-full duration-500 preserve-3d relative rounded-2xl glass border border-white/10 flex flex-col items-center justify-center p-8 transition-transform shadow-2xl ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 uppercase tracking-wider mb-4 border border-blue-500/20">
                      {activeWord.level}
                    </span>
                    <h2 className="text-4xl font-extrabold text-foreground tracking-tight select-none">
                      {activeWord.hr}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-4 select-none">
                      {t("revealTranslation")}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 uppercase tracking-wider mb-2 border border-emerald-500/20">
                      {getCategoryLabel(activeWord.category)}
                    </span>
                    <h3 className="text-3xl font-extrabold text-foreground text-center">
                      {getTranslation(activeWord)}
                    </h3>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakWord(activeWord.hr);
                      }}
                      className="mt-6 p-2 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium"
                    >
                      <Volume2 className="w-4 h-4" />
                      {t("listenPronunciation")}
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 mt-6">
                <button
                  disabled={currentCardIndex === 0}
                  onClick={() => {
                    setCurrentCardIndex(currentCardIndex - 1);
                    setIsFlipped(false);
                  }}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50 transition-all text-foreground"
                >
                  {t("previous")}
                </button>
                <span className="text-sm font-medium text-muted-foreground">
                  {currentCardIndex + 1} / {filteredWords.length}
                </span>
                <button
                  disabled={currentCardIndex === filteredWords.length - 1}
                  onClick={() => {
                    setCurrentCardIndex(currentCardIndex + 1);
                    setIsFlipped(false);
                  }}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50 transition-all text-foreground"
                >
                  {t("next")}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 glass rounded-2xl border border-white/10">
              <p className="text-muted-foreground">{t("noWordsFound")}</p>
            </div>
          )}
        </div>
      )}

      {/* Quiz View */}
      {activeTab === "quiz" && (
        <div className="space-y-6 animate-fade-in">
          {!quizStarted ? (
            <div className="text-center py-12 glass rounded-2xl border border-white/10 flex flex-col items-center">
              <Trophy className="w-12 h-12 text-yellow-400 mb-4 animate-bounce" />
              <h2 className="text-2xl font-bold text-foreground">{t("quiz")}</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                {t("quizSubtitle")}
              </p>
              <button
                onClick={startQuiz}
                className="mt-6 px-6 py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all"
              >
                {t("start")}
              </button>
            </div>
          ) : quizComplete ? (
            <div className="text-center py-12 glass rounded-2xl border border-white/10 flex flex-col items-center">
              <Trophy className="w-14 h-14 text-yellow-400 mb-4" />
              <h2 className="text-3xl font-extrabold text-foreground">{t("quizComplete")}</h2>
              <p className="text-lg text-muted-foreground mt-2">
                {t("score")}: <span className="text-blue-400 font-black">{quizScore} / {quizQuestions.length}</span>
              </p>
              <p className="text-sm text-green-400 font-semibold mt-2">
                +{quizScore * 10} XP Earned!
              </p>
              <button
                onClick={startQuiz}
                className="mt-6 px-6 py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                {t("tryAgain")}
              </button>
            </div>
          ) : (
            <div className="glass rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
              {/* Quiz progress */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-wider">
                  {t("question")} {currentQuizIndex + 1} {t("of")} {quizQuestions.length}
                </span>
                <span className="font-bold text-green-400">XP: +{quizScore * 10}</span>
              </div>

              {/* Question word */}
              <div className="text-center py-6">
                <h3 className="text-3xl font-black text-foreground">
                  {quizQuestions[currentQuizIndex].word.hr}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("chooseCorrectTranslation")}
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3 sm:grid-cols-2">
                {quizQuestions[currentQuizIndex].options.map((option) => {
                  const isCorrect = option === quizQuestions[currentQuizIndex].answer;
                  const isSelected = option === selectedQuizOption;
                  
                  let optionClass = "border-white/10 hover:bg-white/5 text-foreground";
                  if (quizAnswered) {
                    if (isCorrect) {
                      optionClass = "bg-green-500/10 text-green-400 border-green-500/30";
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
                      {quizAnswered && isCorrect && <Check className="w-4 h-4 text-green-400" />}
                      {quizAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-red-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Action Button */}
              {quizAnswered && (
                <div className="flex justify-end pt-4">
                  <button
                    onClick={nextQuizQuestion}
                    className="px-6 py-2 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all"
                  >
                    {currentQuizIndex < quizQuestions.length - 1 ? t("nextQuestion") : t("finish")}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Dictionary & HJP View */}
      {activeTab === "dictionary" && (
        <div className="space-y-6 animate-fade-in">
          {/* Dictionary Search */}
          <div className="glass rounded-2xl border border-white/10 p-6 space-y-4">
            <h3 className="font-bold text-lg text-foreground">{t("localDictionary")}</h3>
            <div className="relative">
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 pl-11 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Search className="w-4 h-4 text-muted-foreground absolute left-4 top-3.5" />
            </div>

            {/* List */}
            <div className="grid gap-3 sm:grid-cols-2 max-h-96 overflow-y-auto pr-1">
              {filteredWords
                .filter((w) => w.hr.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((word, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl border border-white/5 bg-white/5 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{word.hr}</span>
                        <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400">
                          {word.level}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{getTranslation(word)}</p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => speakWord(word.hr)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                        title="Pronounce"
                      >
                        <Volume2 className="w-4.5 h-4.5" />
                      </button>
                      <button
                        onClick={() => window.open(`https://hjp.znanje.hr`, "_blank")}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                        title="Search on HJP"
                      >
                        <ExternalLink className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  </div>
                ))}

              {filteredWords.filter((w) => w.hr.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                <p className="text-xs text-muted-foreground col-span-2 text-center py-4">
                  {t("noWordsFound")}
                </p>
              )}
            </div>
          </div>

          {/* HJP Official Link Box */}
          <div className="glass rounded-2xl border border-white/10 p-6 space-y-4 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
            <div className="flex items-center gap-3">
              <Bookmark className="w-6 h-6 text-blue-400" />
              <h3 className="font-bold text-lg text-foreground">Hrvatski Jezični Portal (HJP)</h3>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("hjpNotice")}
            </p>

            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="text"
                placeholder={t("hjpInputPlaceholder")}
                value={hjpSearchWord}
                onChange={(e) => setHjpSearchWord(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                onClick={() => openHjp(hjpSearchWord)}
                className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all flex items-center justify-center gap-1.5 text-sm"
              >
                <span>{t("hjpLinkText")}</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
