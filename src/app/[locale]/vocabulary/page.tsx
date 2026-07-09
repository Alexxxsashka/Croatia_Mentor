"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { useRouter } from "@/i18n/navigation";
import {
  Search,
  Languages,
  Volume2,
  BookOpen,
  HelpCircle,
  Trophy,
  Check,
  X,
  ExternalLink,
  Bookmark,
  Loader2,
  RefreshCw,
} from "lucide-react";

interface Flashcard {
  id: string;
  wordHr: string;
  translationEng: string;
  translationRu: string;
  translationUa: string;
  level: string;
  category: string;
}

export default function VocabularyPortal() {
  const t = useTranslations("vocabulary");
  const { data: session } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState<Flashcard[]>([]);
  const [activeTab, setActiveTab] = useState<"flashcards" | "quiz" | "dictionary">("flashcards");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  
  // Flashcard states
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Search/Dictionary states
  const [searchQuery, setSearchQuery] = useState("");
  const [hjpSearchWord, setHjpSearchWord] = useState("");

  // Quiz states
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<{ word: Flashcard; options: string[]; answer: string }[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const nativeLanguage = (session?.user as any)?.nativeLanguage || "english";

  useEffect(() => {
    fetch("/api/vocabulary")
      .then((res) => res.json())
      .then((data) => {
        if (data.flashcards) {
          setWords(data.flashcards);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load vocabulary:", err);
        setLoading(false);
      });
  }, []);

  // Filter words by level
  const filteredWords = words.filter((w) => {
    if (selectedLevel === "all") return true;
    return w.level.toLowerCase() === selectedLevel.toLowerCase();
  });

  // Get translation based on user's native language config
  const getTranslation = (word: Flashcard) => {
    if (nativeLanguage.toLowerCase() === "russian" || nativeLanguage.toLowerCase() === "ru") {
      return word.translationRu;
    }
    if (nativeLanguage.toLowerCase() === "ukrainian" || nativeLanguage.toLowerCase() === "ua") {
      return word.translationUa;
    }
    return word.translationEng;
  };

  // TTS Pronunciation
  const speakWord = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "hr-HR";
      
      // Try to find a Croatian voice
      const voices = window.speechSynthesis.getVoices();
      const hrVoice = voices.find(voice => voice.lang.includes("hr") || voice.lang.includes("HR"));
      if (hrVoice) {
        utterance.voice = hrVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    }
  };

  // Generate Quiz
  const startQuiz = () => {
    if (filteredWords.length < 4) {
      alert("Please select a level with at least 4 words to start the quiz.");
      return;
    }

    const shuffled = [...filteredWords].sort(() => 0.5 - Math.random());
    const questions = shuffled.slice(0, 5).map((word) => {
      const correctTranslation = getTranslation(word);
      // Get 3 incorrect options from other words
      const incorrects = words
        .filter((w) => w.id !== word.id)
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
      // Award XP
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
          <p className="text-sm text-muted-foreground">Loading vocabulary...</p>
        </div>
      </div>
    );
  }

  // Active word (flashcards mode)
  const activeWord = filteredWords[currentCardIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="gradient-text">{t("title") || "Vocabulary Hub"}</span>
        </h1>
        <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
          {t("subtitle") || "Learn and test vocabulary, and verify accents on HJP"}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 border-b border-white/10 pb-px">
        <div className="flex gap-2 p-1 glass rounded-xl">
          <button
            onClick={() => { setActiveTab("flashcards"); setIsFlipped(false); }}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "flashcards" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("flashcards") || "Flashcards"}
          </button>
          <button
            onClick={() => { setActiveTab("quiz"); setQuizStarted(false); }}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "quiz" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("quiz") || "Quiz"}
          </button>
          <button
            onClick={() => setActiveTab("dictionary")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "dictionary" ? "bg-blue-600 text-white shadow-md" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("dictionary") || "Dictionary & HJP"}
          </button>
        </div>
      </div>

      {/* Filters (Skip for quiz active state to avoid resetting mid-quiz) */}
      {!(activeTab === "quiz" && quizStarted && !quizComplete) && (
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              {t("levelFilter") || "Level"}:
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
                  {lvl === "all" ? (t("all") || "All") : lvl}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            {filteredWords.length} words loaded
          </div>
        </div>
      )}

      {/* Flashcards View */}
      {activeTab === "flashcards" && (
        <div className="space-y-6 animate-fade-in">
          {filteredWords.length > 0 ? (
            <div className="flex flex-col items-center">
              {/* Card Flip Wrapper */}
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
                      {activeWord.wordHr}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-4 select-none">
                      Click to reveal translation
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 uppercase tracking-wider mb-2 border border-emerald-500/20">
                      {activeWord.category || "General"}
                    </span>
                    <h3 className="text-3xl font-extrabold text-foreground">
                      {getTranslation(activeWord)}
                    </h3>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakWord(activeWord.wordHr);
                      }}
                      className="mt-6 p-2 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium"
                    >
                      <Volume2 className="w-4 h-4" />
                      Listen Pronunciation
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
                  Previous
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
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 glass rounded-2xl border border-white/10">
              <p className="text-muted-foreground">{t("noWordsFound") || "No words available for this level."}</p>
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
              <h2 className="text-2xl font-bold text-foreground">{t("quiz") || "Vocabulary Quiz"}</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                {t("quizSubtitle") || "Test your understanding of Croatian vocabulary. You earn 10 XP for each correct answer!"}
              </p>
              <button
                onClick={startQuiz}
                className="mt-6 px-6 py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all"
              >
                {t("start") || "Start Quiz"}
              </button>
            </div>
          ) : quizComplete ? (
            <div className="text-center py-12 glass rounded-2xl border border-white/10 flex flex-col items-center">
              <Trophy className="w-14 h-14 text-yellow-400 mb-4" />
              <h2 className="text-3xl font-extrabold text-foreground">{t("quizComplete") || "Quiz Completed!"}</h2>
              <p className="text-lg text-muted-foreground mt-2">
                {t("score") || "Your score"}: <span className="text-blue-400 font-black">{quizScore} / {quizQuestions.length}</span>
              </p>
              <p className="text-sm text-green-400 font-semibold mt-2">
                +{quizScore * 10} XP Earned!
              </p>
              <button
                onClick={startQuiz}
                className="mt-6 px-6 py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                {t("tryAgain") || "Restart Quiz"}
              </button>
            </div>
          ) : (
            <div className="glass rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
              {/* Quiz progress */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-wider">
                  {t("question") || "Question"} {currentQuizIndex + 1} {t("of") || "of"} {quizQuestions.length}
                </span>
                <span className="font-bold text-green-400">XP: +{quizScore * 10}</span>
              </div>

              {/* Question word */}
              <div className="text-center py-6">
                <h3 className="text-3xl font-black text-foreground">
                  {quizQuestions[currentQuizIndex].word.wordHr}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Choose the correct translation:
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
                    {currentQuizIndex < quizQuestions.length - 1 ? (t("next") || "Next Question") : (t("finish") || "Finish Quiz")}
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
            <h3 className="font-bold text-lg text-foreground">Local Dictionary</h3>
            <div className="relative">
              <input
                type="text"
                placeholder={t("searchPlaceholder") || "Search words..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 pl-11 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Search className="w-4 h-4 text-muted-foreground absolute left-4 top-3.5" />
            </div>

            {/* List */}
            <div className="grid gap-3 sm:grid-cols-2 max-h-96 overflow-y-auto pr-1">
              {filteredWords
                .filter((w) => w.wordHr.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((word) => (
                  <div
                    key={word.id}
                    className="p-3.5 rounded-xl border border-white/5 bg-white/5 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{word.wordHr}</span>
                        <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400">
                          {word.level}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{getTranslation(word)}</p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => speakWord(word.wordHr)}
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

              {filteredWords.filter((w) => w.wordHr.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                <p className="text-xs text-muted-foreground col-span-2 text-center py-4">
                  {t("noWordsFound") || "No matching words found."}
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
              {t("hjpNotice") || "Verify word etymology, detailed declension table (padeži), and correct accentuation directly on the Croatian Language Portal (HJP):"}
            </p>

            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Enter word to study (e.g. učiti)..."
                value={hjpSearchWord}
                onChange={(e) => setHjpSearchWord(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                onClick={() => openHjp(hjpSearchWord)}
                className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all flex items-center justify-center gap-1.5 text-sm"
              >
                <span>{t("hjpLinkText") || "Search on HJP"}</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
