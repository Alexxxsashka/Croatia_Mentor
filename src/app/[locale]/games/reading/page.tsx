"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { readingTexts } from "@/lib/reading-data";
import { ArrowLeft, BookOpen, Check, X, Volume2, ChevronRight, Trophy } from "lucide-react";
import { speakText } from "@/lib/speech";

function getLocalized(obj: { en: string; ru: string; ua: string }, locale: string) {
  if (locale === "ru") return obj.ru;
  if (locale === "ua") return obj.ua;
  return obj.en;
}

export default function ReadingPage() {
  const t = useTranslations("games");
  const locale = useLocale();
  const router = useRouter();

  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [phase, setPhase] = useState<"read" | "questions" | "translate" | "complete">("read");
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [translationInput, setTranslationInput] = useState("");
  const [translationChecked, setTranslationChecked] = useState(false);
  const [currentTranslation, setCurrentTranslation] = useState(0);
  const [translationScore, setTranslationScore] = useState(0);

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioControl, setAudioControl] = useState<{ stop: () => void } | null>(null);

  const text = readingTexts.find((t) => t.id === selectedText);

  const toggleAudio = (fullText: string) => {
    if (isPlayingAudio && audioControl) {
      audioControl.stop();
      setIsPlayingAudio(false);
      setAudioControl(null);
    } else {
      setIsPlayingAudio(true);
      const ctrl = speakText(fullText, {
        onStart: () => setIsPlayingAudio(true),
        onEnd: () => {
          setIsPlayingAudio(false);
          setAudioControl(null);
        },
        onError: () => {
          setIsPlayingAudio(false);
          setAudioControl(null);
        }
      });
      setAudioControl(ctrl);
    }
  };

  const speakWord = (text: string) => {
    speakText(text);
  };

  const handleAnswer = (option: string) => {
    if (answered || !text) return;
    setSelectedAnswer(option);
    setAnswered(true);
    if (option === text.questions[currentQ].correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (!text) return;
    if (currentQ < text.questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      // Move to translation phase
      setPhase("translate");
      setCurrentTranslation(0);
      setTranslationInput("");
      setTranslationChecked(false);
    }
  };

  const checkTranslation = () => {
    setTranslationChecked(true);
    // Simplified check — case-insensitive partial match
    if (!text) return;
    const expected = getLocalized(text.translationTasks[currentTranslation].answer, locale).toLowerCase();
    const userInput = translationInput.trim().toLowerCase();
    if (userInput && (expected.includes(userInput) || userInput.includes(expected))) {
      setTranslationScore((s) => s + 1);
    }
  };

  const nextTranslation = () => {
    if (!text) return;
    if (currentTranslation < text.translationTasks.length - 1) {
      setCurrentTranslation((t) => t + 1);
      setTranslationInput("");
      setTranslationChecked(false);
    } else {
      setPhase("complete");
    }
  };

  // Text selection screen
  if (!selectedText) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <button onClick={() => router.push("/games")} className="p-2 rounded-xl glass hover:bg-white/10 transition-all">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">{t("reading.title")}</h1>
            <p className="text-sm text-muted-foreground">{t("reading.subtitle")}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {readingTexts.map((rt) => (
            <button
              key={rt.id}
              onClick={() => { setSelectedText(rt.id); setPhase("read"); setCurrentQ(0); setScore(0); setSelectedAnswer(null); setAnswered(false); setTranslationScore(0); }}
              className="group glass rounded-2xl p-6 text-left card-hover"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-md level-${rt.level.toLowerCase()} text-white`}>{rt.level}</span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">{getLocalized(rt.title, locale)}</h3>
              <p className="text-xs text-muted-foreground">{rt.author}</p>
              <div className="flex items-center gap-1 mt-4 text-sm text-blue-400 font-medium">
                {t("reading.startReading")} <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!text) return null;

  // Complete screen
  if (phase === "complete") {
    const totalScore = score + translationScore;
    const totalPossible = text.questions.length + text.translationTasks.length;
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
        <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">{t("reading.complete")}</h1>
        <div className="glass rounded-2xl p-6 mb-8 space-y-3 max-w-sm mx-auto">
          <p className="text-lg">{t("reading.score")}: <span className="font-black text-blue-400">{totalScore}/{totalPossible}</span></p>
          <p className="text-sm text-green-400 font-semibold">+{totalScore * 15} XP</p>
        </div>
        <div className="flex gap-4 justify-center">
          <button onClick={() => setSelectedText(null)} className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg">
            {t("reading.chooseAnother")}
          </button>
          <button onClick={() => router.push("/games")} className="px-6 py-3 rounded-xl font-semibold glass hover:bg-white/10 transition-all">
            {t("backToGames")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 animate-fade-in">
        <button onClick={() => setSelectedText(null)} className="p-2 rounded-xl glass hover:bg-white/10 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold">{getLocalized(text.title, locale)}</h1>
          <p className="text-xs text-muted-foreground">{text.author}</p>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md level-${text.level.toLowerCase()} text-white`}>{text.level}</span>
      </div>

      {/* Reading phase */}
      {phase === "read" && (
        <div className="space-y-6 animate-slide-up">
          {/* Text Container */}
          <div className="glass rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-base text-foreground">{getLocalized(text.title, locale)}</h2>
                  <span className="text-xs text-muted-foreground font-medium">
                    ⏱️ ~{Math.max(1, Math.ceil(text.text.split(" ").length / 150))} {locale === "ua" ? "хв читання" : locale === "ru" ? "мин чтения" : "min read"} • {text.text.split(" ").length} {locale === "ua" ? "слів" : locale === "ru" ? "слов" : "words"}
                  </span>
                </div>
              </div>
              <button
                onClick={() => toggleAudio(text.text)}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer ${
                  isPlayingAudio
                    ? "bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white"
                    : "bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white"
                }`}
              >
                <Volume2 className={`w-4 h-4 ${isPlayingAudio ? "animate-pulse" : ""}`} />
                {isPlayingAudio
                  ? (locale === "ua" ? "Зупинити аудіо" : locale === "ru" ? "Остановить аудио" : "Stop Audio")
                  : (locale === "ua" ? "Слухати аудіо" : locale === "ru" ? "Слушать аудио" : "Listen Audio")
                }
              </button>
            </div>

            {/* Long Text Paragraphs */}
            <div className="space-y-4 text-base text-foreground leading-relaxed font-normal">
              {text.text.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="indent-4 text-slate-200 leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Vocabulary Box */}
          <div className="glass rounded-3xl p-6 border border-white/10 space-y-4">
            <h2 className="font-bold text-sm text-foreground uppercase tracking-wider text-muted-foreground">
              📖 {locale === "ua" ? "Ключовий словник" : locale === "ru" ? "Ключевой словарь" : "Key Vocabulary"} ({text.vocabulary.length} {locale === "ua" ? "слів" : locale === "ru" ? "слов" : "words"})
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {text.vocabulary.map((v, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div>
                    <span className="font-bold text-sm text-foreground block">{v.hr}</span>
                    <span className="text-xs text-muted-foreground">
                      {locale === "ru" ? v.ru : locale === "ua" ? v.ua : v.en}
                    </span>
                  </div>
                  <button onClick={() => speakWord(v.hr)} className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors cursor-pointer">
                    <Volume2 className="w-4 h-4 text-blue-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => setPhase("questions")} className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-xl text-base cursor-pointer">
            {locale === "ua" ? "Перейти до запитань" : locale === "ru" ? "Перейти к вопросам" : "Start Questions"} ({text.questions.length} {locale === "ua" ? "Запитань" : locale === "ru" ? "Вопросов" : "Questions"})
          </button>
        </div>
      )}

      {/* Questions phase */}
      {phase === "questions" && (
        <div className="glass rounded-2xl p-6 animate-slide-up">
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <span>{t("reading.question")} {currentQ + 1}/{text.questions.length}</span>
            <span className="text-green-400 font-bold">{score} ✓</span>
          </div>
          <h3 className="text-lg font-semibold mb-6">{getLocalized(text.questions[currentQ].question, locale)}</h3>
          <div className="grid gap-3">
            {text.questions[currentQ].options.map((option) => {
              let cls = "glass hover:bg-white/10 border border-white/10";
              if (answered) {
                if (option === text.questions[currentQ].correctAnswer) cls = "bg-green-500/15 border-green-500/40 text-green-400";
                else if (option === selectedAnswer) cls = "bg-red-500/15 border-red-500/40 text-red-400";
                else cls = "opacity-40 border-white/5";
              }
              return (
                <button key={option} onClick={() => handleAnswer(option)} disabled={answered} className={`w-full p-4 rounded-xl text-sm font-semibold text-left transition-all flex items-center justify-between ${cls}`}>
                  <span>{option}</span>
                  {answered && option === text.questions[currentQ].correctAnswer && <Check className="w-4 h-4 text-green-400" />}
                  {answered && option === selectedAnswer && option !== text.questions[currentQ].correctAnswer && <X className="w-4 h-4 text-red-400" />}
                </button>
              );
            })}
          </div>
          {answered && (
            <div className="flex justify-end mt-4">
              <button onClick={nextQuestion} className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg">
                {currentQ < text.questions.length - 1 ? t("reading.nextQuestion") : t("reading.toTranslation")}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Translation phase */}
      {phase === "translate" && (
        <div className="glass rounded-2xl p-6 animate-slide-up">
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <span>{t("reading.translationTask")} {currentTranslation + 1}/{text.translationTasks.length}</span>
          </div>
          <div className="text-center mb-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{t("reading.translate")}</p>
            <p className="text-xl font-bold text-foreground">&quot;{text.translationTasks[currentTranslation].hr}&quot;</p>
          </div>
          <input
            type="text"
            value={translationInput}
            onChange={(e) => setTranslationInput(e.target.value)}
            disabled={translationChecked}
            placeholder={t("reading.yourTranslation")}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all mb-4"
            onKeyDown={(e) => e.key === "Enter" && !translationChecked && checkTranslation()}
          />
          {translationChecked && (
            <div className="mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <p className="text-xs text-muted-foreground mb-1">{t("reading.expectedAnswer")}</p>
              <p className="text-sm font-semibold text-foreground">{getLocalized(text.translationTasks[currentTranslation].answer, locale)}</p>
            </div>
          )}
          <div className="flex justify-end gap-3">
            {!translationChecked ? (
              <button onClick={checkTranslation} disabled={!translationInput.trim()} className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg disabled:opacity-40">
                {t("reading.check")}
              </button>
            ) : (
              <button onClick={nextTranslation} className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 shadow-lg">
                {currentTranslation < text.translationTasks.length - 1 ? t("reading.nextTranslation") : t("reading.finish")}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
