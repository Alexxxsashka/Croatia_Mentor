"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { lessonsData, getLocalizedText } from "@/lib/lessons-data";
import { promotionTests } from "@/lib/promotion-tests-data";
import {
  BookOpen,
  Languages,
  Headphones,
  MessageSquare,
  ArrowRight,
  Filter,
  Lock,
  Trophy,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
  X,
  Target,
} from "lucide-react";
import { toast } from "sonner";

const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];

export default function LessonsPage() {
  const t = useTranslations("lessons");
  const locale = useLocale();

  const [filterType, setFilterType] = useState<string>("all");
  const [filterLevel, setFilterLevel] = useState<string>("all");
  
  // Progress states
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [userLevel, setUserLevel] = useState<string>("A1");
  const [totalXP, setTotalXP] = useState<number>(0);

  // Promotion Test states
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [promoLevel, setPromoLevel] = useState<string>("A1"); // level they are testing from
  const [currentPromoQ, setCurrentPromoQ] = useState(0);
  const [promoAnswers, setPromoAnswers] = useState<(number | null)[]>([]);
  const [selectedPromoAnswer, setSelectedPromoAnswer] = useState<number | null>(null);
  const [showPromoFeedback, setShowPromoFeedback] = useState(false);
  const [promoFinished, setPromoFinished] = useState(false);
  const [promoPassed, setPromoPassed] = useState(false);
  const [promoCorrectCount, setPromoCorrectCount] = useState(0);

  useEffect(() => {
    fetch("/api/progress")
      .then((res) => res.json())
      .then((data) => {
        if (data.progress) {
          if (data.progress.completedLessons) {
            setCompletedLessons(data.progress.completedLessons);
          }
          if (data.progress.currentLevel) {
            setUserLevel(data.progress.currentLevel);
          }
          if (data.progress.totalXP !== undefined) {
            setTotalXP(data.progress.totalXP);
          }
        }
      })
      .catch(console.error);
  }, []);

  const types = [
    { value: "all", label: t("all") },
    { value: "grammar", label: t("grammar"), icon: BookOpen },
    { value: "reading", label: t("reading"), icon: Languages },
    { value: "dictation", label: t("dictation"), icon: Headphones },
    { value: "communication", label: t("communication"), icon: MessageSquare },
  ];

  const levels = ["all", "A1", "A2", "B1", "B2", "C1", "C2"];

  const typeIcons: Record<string, typeof BookOpen> = {
    grammar: BookOpen,
    reading: Languages,
    dictation: Headphones,
    communication: MessageSquare,
  };

  const typeGradients: Record<string, string> = {
    grammar: "from-blue-500 to-cyan-400",
    reading: "from-purple-500 to-pink-400",
    dictation: "from-orange-500 to-yellow-400",
    communication: "from-green-500 to-emerald-400",
  };

  // Calculate current level progress
  const lessonsInCurrentLevel = lessonsData.filter((l) => l.level === userLevel);
  const currentLevelTotal = lessonsInCurrentLevel.length;
  const currentLevelCompleted = lessonsInCurrentLevel.filter((l) =>
    completedLessons.includes(l.id)
  ).length;
  const currentLevelPercent =
    currentLevelTotal > 0 ? (currentLevelCompleted / currentLevelTotal) * 100 : 0;

  const filtered = lessonsData.filter((lesson) => {
    if (filterType !== "all" && lesson.type !== filterType) return false;
    if (filterLevel !== "all" && lesson.level !== filterLevel) return false;
    return true;
  });

  // Start the promotion test
  const startPromotionTest = () => {
    const test = promotionTests[userLevel];
    if (!test) {
      toast.error("No test available for this level.");
      return;
    }
    setPromoLevel(userLevel);
    setCurrentPromoQ(0);
    setPromoAnswers(new Array(test.questions.length).fill(null));
    setSelectedPromoAnswer(null);
    setShowPromoFeedback(false);
    setPromoFinished(false);
    setPromoPassed(false);
    setPromoCorrectCount(0);
    setShowPromoModal(true);
  };

  // Handle promo test answer click
  const handlePromoAnswer = (optionIndex: number) => {
    if (showPromoFeedback) return;
    setSelectedPromoAnswer(optionIndex);
    setShowPromoFeedback(true);

    const test = promotionTests[promoLevel];
    const isCorrect = optionIndex === test.questions[currentPromoQ].correctAnswer;
    
    const newAnswers = [...promoAnswers];
    newAnswers[currentPromoQ] = optionIndex;
    setPromoAnswers(newAnswers);

    if (isCorrect) {
      setPromoCorrectCount((c) => c + 1);
    }
  };

  // Next question or finish promo test
  const nextPromoQuestion = () => {
    const test = promotionTests[promoLevel];
    if (currentPromoQ < test.questions.length - 1) {
      setCurrentPromoQ((q) => q + 1);
      setSelectedPromoAnswer(null);
      setShowPromoFeedback(false);
    } else {
      // Calculate final results
      const correct = promoAnswers.filter(
        (ans, idx) => ans === test.questions[idx].correctAnswer
      ).length;
      const passed = correct >= 16; // 80% to pass (16 out of 20)
      
      setPromoPassed(passed);
      setPromoFinished(true);

      if (passed) {
        const nextLevel = test.targetLevel;
        // Save to DB
        fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            currentLevel: nextLevel,
            totalXP: totalXP + 100, // 100 XP bonus for passing level
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.progress) {
              setUserLevel(nextLevel);
              setTotalXP(data.progress.totalXP);
            }
            toast.success(
              locale === "ua"
                ? `Вітаємо! Ви відкрили рівень ${nextLevel}! 🎉`
                : locale === "ru"
                ? `Поздравляем! Вы открыли уровень ${nextLevel}! 🎉`
                : `Congratulations! You unlocked level ${nextLevel}! 🎉`
            );
          })
          .catch((err) => {
            console.error(err);
            toast.error("Failed to update level progress.");
          });
      }
    }
  };

  const activeTest = promotionTests[promoLevel];
  const activePromoQuestionObj = activeTest?.questions[currentPromoQ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground mt-1">{t("subtitle")}</p>
      </div>

      {/* Level Progress & Promotion Card */}
      <div className="glass rounded-3xl p-6 mb-8 animate-fade-in flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black level-${userLevel.toLowerCase()} shadow-lg`}>
            {userLevel}
          </div>
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              {locale === "ua" ? "Ваш поточний рівень" : locale === "ru" ? "Ваш текущий уровень" : "Your Current Level"}: <span className="text-blue-400">{userLevel}</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {locale === "ua" 
                ? `Вивчено уроків на рівні ${userLevel}: ${currentLevelCompleted}/${currentLevelTotal} (${Math.round(currentLevelPercent)}%)`
                : locale === "ru"
                ? `Пройдено уроков на уровне ${userLevel}: ${currentLevelCompleted}/${currentLevelTotal} (${Math.round(currentLevelPercent)}%)`
                : `Completed lessons in level ${userLevel}: ${currentLevelCompleted}/${currentLevelTotal} (${Math.round(currentLevelPercent)}%)`
              }
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-sm w-full">
          <div className="h-3 rounded-full bg-black/20 dark:bg-white/5 overflow-hidden mb-3">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${
                currentLevelPercent === 100 ? "from-emerald-400 to-teal-400 animate-pulse" : "from-blue-500 to-purple-600"
              } transition-all duration-500`}
              style={{ width: `${currentLevelPercent}%` }}
            />
          </div>
          
          {userLevel !== "C2" ? (
            <button
              onClick={startPromotionTest}
              className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 cursor-pointer shadow-blue-500/10"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {locale === "ua"
                  ? `Скласти іспит на рівень ${LEVEL_ORDER[LEVEL_ORDER.indexOf(userLevel) + 1]}`
                  : locale === "ru"
                  ? `Сдать экзамен на уровень ${LEVEL_ORDER[LEVEL_ORDER.indexOf(userLevel) + 1]}`
                  : `Take ${LEVEL_ORDER[LEVEL_ORDER.indexOf(userLevel) + 1]} Promotion Exam`
                }
              </span>
            </button>
          ) : (
            <div className="text-center py-2 text-xs font-bold text-yellow-400 bg-yellow-500/15 border border-yellow-500/20 rounded-xl">
              🏆 {locale === "ua" ? "Вітаємо! Ви досягли максимального рівня!" : locale === "ru" ? "Поздравляем! Вы достигли максимального уровня!" : "Congratulations! You reached the maximum level!"}
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-8 animate-slide-up">
        {/* Type filter */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            {t("filterByType")}
          </div>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type.value}
                onClick={() => setFilterType(type.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterType === type.value
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : "glass hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Level filter */}
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">{t("filterByLevel")}</div>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setFilterLevel(level)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterLevel === level
                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    : "glass hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                {level === "all" ? t("all") : level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {filtered.map((lesson) => {
          const Icon = typeIcons[lesson.type] || BookOpen;
          const gradient = typeGradients[lesson.type] || "from-gray-500 to-gray-400";
          const isCompleted = completedLessons.includes(lesson.id);
          
          // Locking logic based on userLevel
          const isLocked = LEVEL_ORDER.indexOf(lesson.level) > LEVEL_ORDER.indexOf(userLevel);

          if (isLocked) {
            return (
              <div
                key={lesson.id}
                onClick={() => {
                  toast.error(
                    locale === "ua"
                      ? `Цей урок заблоковано. Спочатку складіть іспит на рівень ${lesson.level}!`
                      : locale === "ru"
                      ? `Этот урок заблокирован. Сначала сдайте экзамен на уровень ${lesson.level}!`
                      : `This lesson is locked. Pass the ${lesson.level} Promotion Exam first!`
                  );
                }}
                className="group glass rounded-2xl p-6 block opacity-50 cursor-pointer border border-dashed border-white/5 relative"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/10 text-muted-foreground">
                        {lesson.level}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2 capitalize">
                        {t(lesson.type as "grammar" | "reading" | "dictation" | "communication")}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-400 uppercase tracking-wider flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      {locale === "ua" ? "Заблоковано" : locale === "ru" ? "Заблокирован" : "Locked"}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-muted-foreground line-clamp-1">
                  {getLocalizedText(lesson.title, locale)}
                </h3>
                <p className="text-sm text-muted-foreground/60 line-clamp-2">
                  {getLocalizedText(lesson.content.description, locale)}
                </p>
                <div className="flex items-center gap-1 mt-4 text-sm font-medium text-muted-foreground">
                  {locale === "ua" ? "Заблоковано" : locale === "ru" ? "Заблокировано" : "Locked"}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.id}`}
              className={`group glass rounded-2xl p-6 block transition-all ${
                isCompleted 
                  ? "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 opacity-90"
                  : "card-hover"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    isCompleted ? "from-emerald-600 to-teal-500" : gradient
                  } flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-md level-${lesson.level.toLowerCase()} text-white`}
                    >
                      {lesson.level}
                    </span>
                    <span className="text-xs text-muted-foreground ml-2 capitalize">
                      {t(lesson.type as "grammar" | "reading" | "dictation" | "communication")}
                    </span>
                  </div>
                  {isCompleted && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {t("completed")}
                    </span>
                  )}
                </div>
              </div>
              <h3 className={`font-semibold mb-2 group-hover:text-blue-400 transition-colors ${
                isCompleted ? "text-muted-foreground/90" : ""
              }`}>
                {getLocalizedText(lesson.title, locale)}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {getLocalizedText(lesson.content.description, locale)}
              </p>
              <div className={`flex items-center gap-1 mt-4 text-sm font-medium ${
                isCompleted ? "text-emerald-400" : "text-blue-400"
              }`}>
                {isCompleted ? t("repeatLesson") : t("startLesson")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No lessons found with the selected filters.</p>
        </div>
      )}

      {/* Promotion Test Modal */}
      {showPromoModal && activeTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="glass rounded-3xl p-6 max-w-xl w-full border border-black/5 dark:border-white/10 shadow-2xl relative animate-slide-up max-h-[90vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={() => setShowPromoModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!promoFinished ? (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">
                    {locale === "ua"
                      ? `Іспит на рівень ${activeTest.targetLevel}`
                      : locale === "ru"
                      ? `Экзамен на уровень ${activeTest.targetLevel}`
                      : `${activeTest.targetLevel} Promotion Exam`
                    }
                  </h3>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>
                    {locale === "ua" ? "Питання" : locale === "ru" ? "Вопрос" : "Question"} {currentPromoQ + 1} / {activeTest.questions.length}
                  </span>
                  <span className="text-green-500 font-bold">
                    {promoCorrectCount} ✓
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full bg-white/5 rounded-full mb-6 overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{
                      width: `${((currentPromoQ) / activeTest.questions.length) * 100}%`,
                    }}
                  />
                </div>

                {activePromoQuestionObj && (
                  <div className="space-y-6">
                    <p className="text-lg font-semibold text-foreground">
                      {getLocalizedText(activePromoQuestionObj.question, locale)}
                    </p>

                    <div className="grid gap-3">
                      {activePromoQuestionObj.options.map((optionObj, idx) => {
                        let btnStyle = "glass hover:bg-black/5 dark:hover:bg-white/5 text-left border-black/5 dark:border-white/10";
                        if (showPromoFeedback) {
                          if (idx === activePromoQuestionObj.correctAnswer) {
                            btnStyle = "bg-green-500/15 border-green-500/40 text-green-400";
                          } else if (idx === selectedPromoAnswer) {
                            btnStyle = "bg-red-500/15 border-red-500/40 text-red-400";
                          } else {
                            btnStyle = "opacity-40 border-black/5 dark:border-white/5";
                          }
                        } else if (idx === selectedPromoAnswer) {
                          btnStyle = "bg-blue-500/15 border-blue-500/40 text-blue-400";
                        }

                        return (
                          <button
                            key={idx}
                            disabled={showPromoFeedback}
                            onClick={() => handlePromoAnswer(idx)}
                            className={`w-full p-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{getLocalizedText(optionObj, locale)}</span>
                            {showPromoFeedback && idx === activePromoQuestionObj.correctAnswer && (
                              <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 ml-2" />
                            )}
                            {showPromoFeedback && idx === selectedPromoAnswer && idx !== activePromoQuestionObj.correctAnswer && (
                              <XCircle className="w-4 h-4 text-red-400 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {showPromoFeedback && (
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start gap-2 bg-blue-500/10 border border-blue-500/20 p-4 rounded-2xl text-xs text-blue-400 leading-relaxed">
                          <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold block mb-0.5">
                              {locale === "ua" ? "Пояснення:" : locale === "ru" ? "Объяснение:" : "Explanation:"}
                            </span>
                            {getLocalizedText(activePromoQuestionObj.explanation, locale)}
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button
                            onClick={nextPromoQuestion}
                            className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg"
                          >
                            {currentPromoQ < activeTest.questions.length - 1
                              ? locale === "ua" ? "Наступне питання" : locale === "ru" ? "Следующий вопрос" : "Next Question"
                              : locale === "ua" ? "Завершити іспит" : locale === "ru" ? "Завершить экзамен" : "Finish Exam"
                            }
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 space-y-6">
                {promoPassed ? (
                  <>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl animate-bounce">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-green-400">
                      {locale === "ua" ? "Іспит складено! 🎉" : locale === "ru" ? "Экзамен сдан! 🎉" : "Exam Passed! 🎉"}
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                      {locale === "ua"
                        ? `Вітаємо! Ви правильно відповіли на ${promoCorrectCount} з ${activeTest.questions.length} питань та успішно перейшли на рівень ${activeTest.targetLevel}!`
                        : locale === "ru"
                        ? `Поздравляем! Вы правильно ответили на ${promoCorrectCount} из ${activeTest.questions.length} вопросов и успешно перешли на уровень ${activeTest.targetLevel}!`
                        : `Congratulations! You answered ${promoCorrectCount} out of ${activeTest.questions.length} questions correctly and unlocked level ${activeTest.targetLevel}!`
                      }
                    </p>
                    <div className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-xl text-xs font-bold inline-block border border-emerald-500/20">
                      +100 XP {locale === "ua" ? "Бонус" : locale === "ru" ? "Бонус" : "Bonus"}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-500/10 text-red-400 border border-red-500/20 shadow-2xl">
                      <XCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-red-400">
                      {locale === "ua" ? "Іспит не складено" : locale === "ru" ? "Экзамен не сдан" : "Exam Not Passed"}
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                      {locale === "ua"
                        ? `Ви правильно відповіли на ${promoCorrectCount} з ${activeTest.questions.length} питань. Для успішного переходу потрібно щонайменше 16 правильних відповідей. Спробуйте ще раз!`
                        : locale === "ru"
                        ? `Вы правильно ответили на ${promoCorrectCount} из ${activeTest.questions.length} вопросов. Для успешного перехода требуется минимум 16 правильных ответов. Попробуйте еще раз!`
                        : `You answered ${promoCorrectCount} out of ${activeTest.questions.length} questions correctly. You need at least 16 correct answers to unlock the next level. Try again!`
                      }
                    </p>
                  </>
                )}

                <div className="pt-4 flex justify-center gap-3">
                  {promoPassed ? (
                    <button
                      onClick={() => setShowPromoModal(false)}
                      className="px-8 py-3 rounded-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg"
                    >
                      {locale === "ua" ? "Чудово, до нових уроків!" : locale === "ru" ? "Отлично, к новым урокам!" : "Great, on to new lessons!"}
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={startPromotionTest}
                        className="px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg"
                      >
                        {locale === "ua" ? "Спробувати ще раз" : locale === "ru" ? "Попробовать еще раз" : "Try Again"}
                      </button>
                      <button
                        onClick={() => setShowPromoModal(false)}
                        className="px-6 py-3 rounded-2xl font-semibold glass hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                      >
                        {locale === "ua" ? "Закрити" : locale === "ru" ? "Закрыть" : "Close"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
