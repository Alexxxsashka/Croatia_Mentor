"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { listeningData } from "@/lib/listening-data";
import { ArrowLeft, Headphones, Play, ChevronRight, Check, X, Trophy, Volume2 } from "lucide-react";
import { speakText as speakTextHelper } from "@/lib/speech";

function getLocalized(obj: { en: string; ru: string; ua: string }, locale: string) {
  if (locale === "ru") return obj.ru;
  if (locale === "ua") return obj.ua;
  return obj.en;
}

export default function ListeningPage() {
  const t = useTranslations("games");
  const locale = useLocale();
  const router = useRouter();

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [phase, setPhase] = useState<"listen" | "questions" | "blanks" | "complete">("listen");
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [currentBlank, setCurrentBlank] = useState(0);
  const [blankInput, setBlankInput] = useState("");
  const [blankChecked, setBlankChecked] = useState(false);
  const [blankScore, setBlankScore] = useState(0);

  const item = listeningData.find((d) => d.id === selectedItem);

  const speakText = (text: string) => {
    speakTextHelper(text);
  };

  const handleAnswer = (option: string) => {
    if (answered || !item) return;
    setSelectedAnswer(option);
    setAnswered(true);
    if (option === item.questions[currentQ].correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (!item) return;
    if (currentQ < item.questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setPhase("blanks");
      setCurrentBlank(0);
      setBlankInput("");
      setBlankChecked(false);
    }
  };

  const checkBlank = () => {
    if (!item) return;
    setBlankChecked(true);
    if (blankInput.trim().toLowerCase() === item.fillBlanks[currentBlank].blank.toLowerCase()) {
      setBlankScore((s) => s + 1);
    }
  };

  const nextBlank = () => {
    if (!item) return;
    if (currentBlank < item.fillBlanks.length - 1) {
      setCurrentBlank((b) => b + 1);
      setBlankInput("");
      setBlankChecked(false);
    } else {
      setPhase("complete");
    }
  };

  // Selection screen
  if (!selectedItem) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <button onClick={() => router.push("/games")} className="p-2 rounded-xl glass hover:bg-white/10 transition-all">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">{t("listening.title")}</h1>
            <p className="text-sm text-muted-foreground">{t("listening.subtitle")}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {listeningData.map((li) => (
            <button
              key={li.id}
              onClick={() => { setSelectedItem(li.id); setPhase("listen"); setCurrentQ(0); setScore(0); setBlankScore(0); setShowSubtitles(false); }}
              className="group glass rounded-2xl p-6 text-left card-hover"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-md level-${li.level.toLowerCase()} text-white`}>{li.level}</span>
                <span className="text-xs text-muted-foreground capitalize">{li.type === "song" ? "🎵" : li.type === "podcast" ? "🎙️" : "💬"} {li.type}</span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">{getLocalized(li.title, locale)}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{getLocalized(li.description, locale)}</p>
              <div className="flex items-center gap-1 mt-4 text-sm text-blue-400 font-medium">
                {t("listening.start")} <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!item) return null;

  // Complete
  if (phase === "complete") {
    const totalScore = score + blankScore;
    const totalPossible = item.questions.length + item.fillBlanks.length;
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
        <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">{t("listening.complete")}</h1>
        <div className="glass rounded-2xl p-6 mb-8 space-y-3 max-w-sm mx-auto">
          <p className="text-lg">{t("listening.score")}: <span className="font-black text-blue-400">{totalScore}/{totalPossible}</span></p>
          <p className="text-sm text-green-400 font-semibold">+{totalScore * 15} XP</p>
        </div>
        <div className="flex gap-4 justify-center">
          <button onClick={() => setSelectedItem(null)} className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg">
            {t("listening.chooseAnother")}
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
        <button onClick={() => setSelectedItem(null)} className="p-2 rounded-xl glass hover:bg-white/10 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold">{getLocalized(item.title, locale)}</h1>
          <p className="text-xs text-muted-foreground capitalize">{item.type} • {item.level}</p>
        </div>
      </div>

      {/* Listen phase */}
      {phase === "listen" && (
        <div className="space-y-6 animate-slide-up">
          {/* Audio player placeholder with YouTube or TTS */}
          <div className="glass rounded-2xl p-6 text-center">
            {item.youtubeId ? (
              <div className="mb-2">
                <iframe
                  className="w-full aspect-video rounded-xl shadow-lg border-0"
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={getLocalized(item.title, locale)}
                />
                <p className="text-xs text-muted-foreground mt-3">
                  {t("listening.listenCarefully") || "Listen to the audio above to prepare for the questions."}
                </p>
              </div>
            ) : (
              <>
                <Headphones className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-4">{t("listening.listenCarefully")}</p>
                <button
                  onClick={() => {
                    const fullText = item.subtitles.map((s) => s.hr).join(". ");
                    speakText(fullText);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg"
                >
                  <Play className="w-5 h-5" /> {t("listening.play")}
                </button>
              </>
            )}
          </div>

          {/* Subtitles toggle */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">{t("listening.subtitles")}</h2>
              <button
                onClick={() => setShowSubtitles(!showSubtitles)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${showSubtitles ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-muted-foreground"}`}
              >
                {showSubtitles ? t("listening.hide") : t("listening.show")}
              </button>
            </div>
            {showSubtitles && (
              <div className="space-y-3 animate-fade-in">
                {item.subtitles.map((sub, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <button onClick={() => speakText(sub.hr)} className="p-1 rounded text-muted-foreground hover:text-foreground shrink-0 mt-0.5">
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <div>
                      <p className="text-sm font-medium text-foreground">{sub.hr}</p>
                      <p className="text-xs text-muted-foreground">{getLocalized(sub.translation, locale)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => { setPhase("questions"); setCurrentQ(0); setScore(0); setSelectedAnswer(null); setAnswered(false); }} className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 shadow-lg">
            {t("listening.startQuestions")}
          </button>
        </div>
      )}

      {/* Questions */}
      {phase === "questions" && (
        <div className="glass rounded-2xl p-6 animate-slide-up">
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <span>{t("listening.question")} {currentQ + 1}/{item.questions.length}</span>
            <span className="text-green-400 font-bold">{score} ✓</span>
          </div>
          <h3 className="text-lg font-semibold mb-6">{getLocalized(item.questions[currentQ].question, locale)}</h3>
          <div className="grid gap-3">
            {item.questions[currentQ].options.map((option) => {
              let cls = "glass hover:bg-white/10 border border-white/10";
              if (answered) {
                if (option === item.questions[currentQ].correctAnswer) cls = "bg-green-500/15 border-green-500/40 text-green-400";
                else if (option === selectedAnswer) cls = "bg-red-500/15 border-red-500/40 text-red-400";
                else cls = "opacity-40 border-white/5";
              }
              return (
                <button key={option} onClick={() => handleAnswer(option)} disabled={answered} className={`w-full p-4 rounded-xl text-sm font-semibold text-left transition-all flex items-center justify-between ${cls}`}>
                  <span>{option}</span>
                  {answered && option === item.questions[currentQ].correctAnswer && <Check className="w-4 h-4" />}
                  {answered && option === selectedAnswer && option !== item.questions[currentQ].correctAnswer && <X className="w-4 h-4" />}
                </button>
              );
            })}
          </div>
          {answered && (
            <div className="flex justify-end mt-4">
              <button onClick={nextQuestion} className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg">
                {currentQ < item.questions.length - 1 ? t("listening.nextQuestion") : t("listening.toBlanks")}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Fill blanks */}
      {phase === "blanks" && (
        <div className="glass rounded-2xl p-6 animate-slide-up">
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <span>{t("listening.fillBlank")} {currentBlank + 1}/{item.fillBlanks.length}</span>
          </div>
          <div className="text-center mb-6">
            <p className="text-lg font-medium text-foreground mb-2">{item.fillBlanks[currentBlank].sentence}</p>
            <p className="text-xs text-muted-foreground">{t("listening.hint")}: {getLocalized(item.fillBlanks[currentBlank].hint, locale)}</p>
          </div>
          <input
            type="text"
            value={blankInput}
            onChange={(e) => setBlankInput(e.target.value)}
            disabled={blankChecked}
            placeholder={t("listening.yourAnswer")}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all mb-4"
            onKeyDown={(e) => e.key === "Enter" && !blankChecked && checkBlank()}
          />
          {blankChecked && (
            <div className={`mb-4 p-3 rounded-xl ${blankInput.trim().toLowerCase() === item.fillBlanks[currentBlank].blank.toLowerCase() ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
              <p className="text-sm">
                {t("listening.correctAnswer")}: <span className="font-semibold">{item.fillBlanks[currentBlank].blank}</span>
              </p>
            </div>
          )}
          <div className="flex justify-end gap-3">
            {!blankChecked ? (
              <button onClick={checkBlank} disabled={!blankInput.trim()} className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg disabled:opacity-40">
                {t("listening.check")}
              </button>
            ) : (
              <button onClick={nextBlank} className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 shadow-lg">
                {currentBlank < item.fillBlanks.length - 1 ? t("listening.nextBlank") : t("listening.finish")}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
