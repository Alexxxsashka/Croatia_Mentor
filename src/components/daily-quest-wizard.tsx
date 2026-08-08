"use client";

import { useState, useEffect, useCallback } from "react";
import { useLocale } from "next-intl";
import { vocabularyWords, type VocabWord } from "@/lib/vocabulary-data";
import { speakText } from "@/lib/speech";
import {
  Sparkles, Check, X, Volume2, ArrowRight, RefreshCw, Trophy,
  Brain, Pencil, Ear, Target, BookOpen
} from "lucide-react";

interface DailyQuestWizardProps {
  onComplete?: () => void;
}

export function DailyQuestWizard({ onComplete }: DailyQuestWizardProps) {
  const locale = useLocale();
  const [stage, setStage] = useState<"intro" | "intro_cards" | "immediate_recall" | "audio_spelling" | "final_exam" | "complete">("intro");

  const [questWords, setQuestWords] = useState<VocabWord[]>([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Immediate recall state
  const [recallIndex, setRecallIndex] = useState(0);
  const [recallOptions, setRecallOptions] = useState<string[]>([]);
  const [selectedRecallOption, setSelectedRecallOption] = useState<string | null>(null);
  const [recallAnswered, setRecallAnswered] = useState(false);

  // Audio spelling state
  const [spellingIndex, setSpellingIndex] = useState(0);
  const [spellingInput, setSpellingInput] = useState("");
  const [spellingChecked, setSpellingChecked] = useState(false);
  const [spellingCorrect, setSpellingCorrect] = useState(false);

  // Final exam state
  const [examQuestions, setExamQuestions] = useState<{ word: VocabWord; options: string[]; answer: string; type: string }[]>([]);
  const [examIndex, setExamIndex] = useState(0);
  const [examScore, setExamScore] = useState(0);
  const [selectedExamOption, setSelectedExamOption] = useState<string | null>(null);
  const [examAnswered, setExamAnswered] = useState(false);

  const [totalXP, setTotalXP] = useState(0);

  const getTranslation = useCallback((word: VocabWord) => {
    if (locale === "ru") return word.ru;
    if (locale === "ua") return word.ua;
    return word.en;
  }, [locale]);

  // Start new quest with 5 words
  const startQuest = () => {
    const shuffled = [...vocabularyWords].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setQuestWords(selected);
    setCardIndex(0);
    setIsFlipped(false);
    setTotalXP(0);
    setStage("intro_cards");
    if (selected[0]) speakText(selected[0].hr);
  };

  // Setup immediate recall question
  const setupRecall = useCallback((index: number, words: VocabWord[]) => {
    const current = words[index];
    if (!current) return;
    const correctAnswer = getTranslation(current);
    const pool = vocabularyWords
      .map((w) => getTranslation(w))
      .filter((t) => t !== correctAnswer);
    const wrongOptions = [...new Set(pool)].sort(() => 0.5 - Math.random()).slice(0, 3);
    const opts = [correctAnswer, ...wrongOptions].sort(() => 0.5 - Math.random());
    setRecallOptions(opts);
    setSelectedRecallOption(null);
    setRecallAnswered(false);
  }, [getTranslation]);

  // Move to immediate recall
  const finishCards = () => {
    setRecallIndex(0);
    setupRecall(0, questWords);
    setStage("immediate_recall");
  };

  const handleRecallAnswer = (option: string) => {
    if (recallAnswered) return;
    setSelectedRecallOption(option);
    setRecallAnswered(true);
    const current = questWords[recallIndex];
    const correct = option === getTranslation(current);
    if (correct) setTotalXP((x) => x + 10);
  };

  const nextRecall = () => {
    if (recallIndex < questWords.length - 1) {
      const nextIdx = recallIndex + 1;
      setRecallIndex(nextIdx);
      setupRecall(nextIdx, questWords);
    } else {
      // Move to audio spelling
      setSpellingIndex(0);
      setSpellingInput("");
      setSpellingChecked(false);
      setStage("audio_spelling");
      if (questWords[0]) speakText(questWords[0].hr);
    }
  };

  const handleSpellingCheck = () => {
    const current = questWords[spellingIndex];
    const target = current.hr.toLowerCase().trim();
    const input = spellingInput.toLowerCase().trim();
    const isCorrect = input === target;
    setSpellingChecked(true);
    setSpellingCorrect(isCorrect);
    if (isCorrect) setTotalXP((x) => x + 15);
  };

  const nextSpelling = () => {
    if (spellingIndex < questWords.length - 1) {
      const nextIdx = spellingIndex + 1;
      setSpellingIndex(nextIdx);
      setSpellingInput("");
      setSpellingChecked(false);
      if (questWords[nextIdx]) speakText(questWords[nextIdx].hr);
    } else {
      // Move to final exam
      generateExamQuestions();
    }
  };

  const generateExamQuestions = () => {
    const qs = questWords.map((word) => {
      const correctAnswer = getTranslation(word);
      const wrongOptions = vocabularyWords
        .map((w) => getTranslation(w))
        .filter((t) => t !== correctAnswer)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      return {
        word,
        options: [correctAnswer, ...wrongOptions].sort(() => 0.5 - Math.random()),
        answer: correctAnswer,
        type: "choice",
      };
    });
    setExamQuestions(qs);
    setExamIndex(0);
    setExamScore(0);
    setSelectedExamOption(null);
    setExamAnswered(false);
    setStage("final_exam");
  };

  const handleExamAnswer = (option: string) => {
    if (examAnswered) return;
    setSelectedExamOption(option);
    setExamAnswered(true);
    const isCorrect = option === examQuestions[examIndex].answer;
    if (isCorrect) {
      setExamScore((s) => s + 1);
      setTotalXP((x) => x + 10);
    }
  };

  const nextExam = () => {
    if (examIndex < examQuestions.length - 1) {
      setExamIndex((i) => i + 1);
      setSelectedExamOption(null);
      setExamAnswered(false);
    } else {
      // Complete quest
      finishQuest();
    }
  };

  const finishQuest = async () => {
    const earnedXP = totalXP + 25; // Bonus completion XP
    setTotalXP(earnedXP);
    setStage("complete");

    try {
      await fetch("/api/words/daily", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wordsLearned: questWords.length,
          wordsReviewed: questWords.length * 2,
          testsCompleted: 1,
          xpEarned: earnedXP,
          minutesSpent: 5,
        }),
      });
      if (onComplete) onComplete();
    } catch (err) {
      console.error("Failed to save quest activity:", err);
    }
  };

  // START SCREEN
  if (stage === "intro") {
    return (
      <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto shadow-xl shadow-blue-500/20">
          <Target className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="text-2xl font-black text-foreground">
            {locale === "ua" ? "Покрокове щоденне завдання" : locale === "ru" ? "Пошаговое ежедневное задание" : "Step-by-Step Daily Quest"}
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {locale === "ua"
              ? "Пройдіть 5 слів покроково: Картка → Завдання на переклад → Письмо на слух → Підсумковий іспит дня."
              : locale === "ru"
              ? "Пройдите 5 слов пошагово: Карточка → Задание на перевод → Письмо на слух → Итоговый экзамен дня."
              : "Master 5 words step-by-step: Flashcard → Translation Recall → Audio Spelling → Final Exam."}
          </p>
        </div>
        <button
          onClick={startQuest}
          className="px-8 py-3.5 rounded-2xl text-base font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 mx-auto cursor-pointer"
        >
          <Sparkles className="w-5 h-5" />
          {locale === "ua" ? "Розпочати завдання (5 слів)" : locale === "ru" ? "Начать задание (5 слов)" : "Start Quest (5 words)"}
        </button>
      </div>
    );
  }

  // STAGE 1: INTRO CARDS
  if (stage === "intro_cards") {
    const word = questWords[cardIndex];
    if (!word) return null;
    return (
      <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 max-w-xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
          <span className="flex items-center gap-1.5 text-blue-400">
            <BookOpen className="w-4 h-4" /> Етап 1/4: Знайомство зі словом
          </span>
          <span>Слово {cardIndex + 1} з {questWords.length}</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((cardIndex + 1) / questWords.length) * 100}%` }}
          />
        </div>
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="w-full h-64 cursor-pointer relative perspective my-4"
        >
          <div className={`w-full h-full duration-500 preserve-3d relative rounded-2xl glass border border-white/10 flex flex-col items-center justify-center p-6 text-center transition-transform shadow-xl ${isFlipped ? "rotate-y-180" : ""}`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 mb-3">
                {word.level} • {word.category}
              </span>
              <h3 className="text-4xl font-extrabold text-foreground">{word.hr}</h3>
              <button
                onClick={(e) => { e.stopPropagation(); speakText(word.hr); }}
                className="mt-4 p-2.5 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <p className="text-xs text-muted-foreground mt-4">Переверніть картку 🔄</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180">
              <h4 className="text-3xl font-extrabold text-foreground">{getTranslation(word)}</h4>
              {word.example && (
                <p className="text-xs italic text-muted-foreground mt-3">&quot;{word.example.hr}&quot;</p>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            if (cardIndex < questWords.length - 1) {
              const nextIdx = cardIndex + 1;
              setCardIndex(nextIdx);
              setIsFlipped(false);
              if (questWords[nextIdx]) speakText(questWords[nextIdx].hr);
            } else {
              finishCards();
            }
          }}
          className="w-full py-3.5 rounded-2xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {cardIndex < questWords.length - 1 ? "Наступне слово →" : "Перейти до завдання на переклад →"}
        </button>
      </div>
    );
  }

  // STAGE 2: IMMEDIATE RECALL
  if (stage === "immediate_recall") {
    const word = questWords[recallIndex];
    if (!word) return null;
    return (
      <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 max-w-xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
          <span className="flex items-center gap-1.5 text-purple-400">
            <Brain className="w-4 h-4" /> Етап 2/4: Завдання на переклад
          </span>
          <span>Питання {recallIndex + 1} з {questWords.length}</span>
        </div>
        <div className="text-center space-y-2 py-4">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Виберіть правильний перевод</span>
          <h3 className="text-3xl font-black text-foreground">{word.hr}</h3>
          <button
            onClick={() => speakText(word.hr)}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground transition-all inline-block mt-1"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
        <div className="grid gap-2.5">
          {recallOptions.map((option) => {
            const isCorrect = option === getTranslation(word);
            const isSelected = option === selectedRecallOption;
            let style = "glass border-white/10 hover:bg-white/5 text-foreground";
            if (recallAnswered) {
              if (isCorrect) style = "bg-emerald-500/15 border-emerald-500/40 text-emerald-400 font-bold";
              else if (isSelected) style = "bg-red-500/15 border-red-500/40 text-red-400 font-bold";
              else style = "opacity-40 border-white/5";
            }
            return (
              <button
                key={option}
                disabled={recallAnswered}
                onClick={() => handleRecallAnswer(option)}
                className={`w-full p-4 rounded-xl text-sm font-semibold border transition-all flex items-center justify-between ${style}`}
              >
                <span>{option}</span>
                {recallAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-400" />}
                {recallAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-red-400" />}
              </button>
            );
          })}
        </div>
        {recallAnswered && (
          <button
            onClick={nextRecall}
            className="w-full py-3.5 rounded-2xl text-sm font-bold bg-purple-600 text-white hover:bg-purple-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {recallIndex < questWords.length - 1 ? "Далі →" : "Перейти до письма на слух →"}
          </button>
        )}
      </div>
    );
  }

  // STAGE 3: AUDIO SPELLING
  if (stage === "audio_spelling") {
    const word = questWords[spellingIndex];
    if (!word) return null;
    return (
      <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 max-w-xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Ear className="w-4 h-4" /> Етап 3/4: Напишіть слово на слух
          </span>
          <span>Слово {spellingIndex + 1} з {questWords.length}</span>
        </div>
        <div className="text-center space-y-3 py-4">
          <button
            onClick={() => speakText(word.hr)}
            className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto hover:scale-105 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <Volume2 className="w-8 h-8" />
          </button>
          <p className="text-xs text-muted-foreground font-medium">Перевод: <span className="text-foreground font-bold">{getTranslation(word)}</span></p>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            value={spellingInput}
            onChange={(e) => setSpellingInput(e.target.value)}
            disabled={spellingChecked}
            placeholder="Напишіть слово хорватською..."
            className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 text-center font-bold focus:outline-none focus:border-cyan-500 shadow-sm"
          />
          {!spellingChecked ? (
            <button
              onClick={handleSpellingCheck}
              disabled={!spellingInput.trim()}
              className="w-full py-3.5 rounded-2xl text-sm font-bold bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-40 transition-all cursor-pointer"
            >
              Перевірити
            </button>
          ) : (
            <div className="space-y-3">
              <div className={`p-3 rounded-xl text-xs font-semibold text-center ${spellingCorrect ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}>
                {spellingCorrect ? "Правильно! 👏" : `Неправильно. Правильне слово: ${word.hr}`}
              </div>
              <button
                onClick={nextSpelling}
                className="w-full py-3.5 rounded-2xl text-sm font-bold bg-cyan-600 text-white hover:bg-cyan-500 transition-all cursor-pointer"
              >
                {spellingIndex < questWords.length - 1 ? "Далі →" : "Перейти до підсумкового іспиту →"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // STAGE 4: FINAL EXAM
  if (stage === "final_exam") {
    const q = examQuestions[examIndex];
    if (!q) return null;
    return (
      <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 max-w-xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
          <span className="flex items-center gap-1.5 text-amber-400">
            <Trophy className="w-4 h-4" /> Етап 4/4: Підсумковий іспит
          </span>
          <span>Питання {examIndex + 1} з {examQuestions.length}</span>
        </div>
        <div className="text-center space-y-2 py-4">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Оберіть вірний відповідник</span>
          <h3 className="text-3xl font-black text-foreground">{q.word.hr}</h3>
        </div>
        <div className="grid gap-2.5">
          {q.options.map((option) => {
            const isCorrect = option === q.answer;
            const isSelected = option === selectedExamOption;
            let style = "glass border-white/10 hover:bg-white/5 text-foreground";
            if (examAnswered) {
              if (isCorrect) style = "bg-emerald-500/15 border-emerald-500/40 text-emerald-400 font-bold";
              else if (isSelected) style = "bg-red-500/15 border-red-500/40 text-red-400 font-bold";
              else style = "opacity-40 border-white/5";
            }
            return (
              <button
                key={option}
                disabled={examAnswered}
                onClick={() => handleExamAnswer(option)}
                className={`w-full p-4 rounded-xl text-sm font-semibold border transition-all flex items-center justify-between ${style}`}
              >
                <span>{option}</span>
                {examAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-400" />}
                {examAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-red-400" />}
              </button>
            );
          })}
        </div>
        {examAnswered && (
          <button
            onClick={nextExam}
            className="w-full py-3.5 rounded-2xl text-sm font-bold bg-amber-600 text-white hover:bg-amber-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {examIndex < examQuestions.length - 1 ? "Далі →" : "Завершити завдання та отримати нагороду 🎉"}
          </button>
        )}
      </div>
    );
  }

  // STAGE 5: COMPLETE
  return (
    <div className="glass p-8 rounded-3xl border border-white/10 text-center max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/25">
        <Trophy className="w-10 h-10 text-white" />
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl font-black text-foreground">Завдання успішно виконано!</h2>
        <p className="text-xs text-muted-foreground">Ви успішно пройшли всі покрокові етапи вивчення слів.</p>
      </div>
      <div className="glass p-4 rounded-2xl border border-white/10 flex justify-around text-center">
        <div>
          <div className="text-2xl font-black text-blue-400">{questWords.length}</div>
          <div className="text-xs text-muted-foreground">Слів вивчено</div>
        </div>
        <div>
          <div className="text-2xl font-black text-yellow-400">+{totalXP} XP</div>
          <div className="text-xs text-muted-foreground">Отримано</div>
        </div>
      </div>
      <button
        onClick={startQuest}
        className="w-full py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
      >
        <RefreshCw className="w-4 h-4" /> Пройти ще одне покрокове завдання
      </button>
    </div>
  );
}