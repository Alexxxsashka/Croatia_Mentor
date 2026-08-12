"use client";

import { useState } from "react";
import { Volume2, Plus, Check, Sparkles, X } from "lucide-react";
import { speakText } from "@/lib/speech";
import { toast } from "sonner";

interface InteractiveTextReaderProps {
  text: string;
  locale: string;
}

// Basic dictionary for instant click translations
const COMMON_WORD_TRANSLATIONS: Record<string, { ru: string; ua: string; en: string }> = {
  dobar: { ru: "хороший", ua: "хороший", en: "good" },
  dan: { ru: "день", ua: "день", en: "day" },
  bok: { ru: "привет / пока", ua: "привіт / бувай", en: "hi / bye" },
  hvala: { ru: "спасибо", ua: "дякую", en: "thanks" },
  molim: { ru: "пожалуйста", ua: "будь ласка", en: "please / welcome" },
  kava: { ru: "кофе", ua: "кава", en: "coffee" },
  kruh: { ru: "хлеб", ua: "хліб", en: "bread" },
  voda: { ru: "вода", ua: "вода", en: "water" },
  pivo: { ru: "пиво", ua: "пиво", en: "beer" },
  ja: { ru: "я", ua: "я", en: "I" },
  ti: { ru: "ты", ua: "ти", en: "you" },
  on: { ru: "он", ua: "він", en: "he" },
  ona: { ru: "она", ua: "вона", en: "she" },
  ono: { ru: "оно", ua: "воно", en: "it" },
  mi: { ru: "мы", ua: "ми", en: "we" },
  vi: { ru: "вы", ua: "ви", en: "you (plural)" },
  oni: { ru: "они", ua: "вони", en: "they" },
  sam: { ru: "есть (я)", ua: "є (я)", en: "am" },
  si: { ru: "есть (ты)", ua: "є (ти)", en: "are" },
  je: { ru: "есть (он/она)", ua: "є (він/вона)", en: "is" },
  smo: { ru: "есть (мы)", ua: "є (ми)", en: "are" },
  ste: { ru: "есть (вы)", ua: "є (ви)", en: "are" },
  su: { ru: "есть (они)", ua: "є (вони)", en: "are" },
  nisam: { ru: "не есть (я)", ua: "не є (я)", en: "am not" },
  nisi: { ru: "не есть (ты)", ua: "не є (ти)", en: "are not" },
  nije: { ru: "не есть (он/она)", ua: "не є (він/вона)", en: "is not" },
  lijepo: { ru: "красиво / приятно", ua: "красиво / приємно", en: "nice / beautiful" },
  dobro: { ru: "хорошо", ua: "добре", en: "well / good" },
  sretan: { ru: "счастливый", ua: "щасливий", en: "happy" },
};

export function InteractiveTextReader({ text, locale }: InteractiveTextReaderProps) {
  const [selectedWord, setSelectedWord] = useState<{
    original: string;
    normalized: string;
    translation: string;
    added: boolean;
  } | null>(null);

  const cleanWord = (w: string) => w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();

  const handleWordClick = (rawWord: string) => {
    const norm = cleanWord(rawWord).toLowerCase();
    if (!norm) return;

    speakText(norm);

    const match = COMMON_WORD_TRANSLATIONS[norm];
    let translation = "";
    if (match) {
      translation = locale === "ua" ? match.ua : locale === "ru" ? match.ru : match.en;
    } else {
      translation = locale === "ua" ? "Клацніть, щоб додати у словник" : locale === "ru" ? "Кликните, чтобы добавить в словарь" : "Click to add to vocabulary";
    }

    setSelectedWord({
      original: cleanWord(rawWord),
      normalized: norm,
      translation,
      added: false,
    });
  };

  const handleAddToVocabulary = async () => {
    if (!selectedWord) return;

    try {
      await fetch("/api/words/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wordHr: selectedWord.original,
          status: "learning",
        }),
      });

      setSelectedWord((prev) => (prev ? { ...prev, added: true } : null));

      toast.success(
        locale === "ua"
          ? `Слово "${selectedWord.original}" додано до словника! 📚`
          : locale === "ru"
          ? `Слово "${selectedWord.original}" добавлено в словарь! 📚`
          : `Word "${selectedWord.original}" added to vocabulary! 📚`
      );
    } catch (err) {
      console.error("Failed to add word to vocabulary:", err);
    }
  };

  const renderInteractiveText = () => {
    const lines = text.split("\n");
    return lines.map((line, lIdx) => {
      const words = line.split(" ");
      return (
        <div key={lIdx} className="min-h-[1.4rem] leading-relaxed my-1">
          {words.map((word, wIdx) => {
            const norm = cleanWord(word).toLowerCase();
            const isClickable = norm.length > 1;

            return (
              <span
                key={wIdx}
                onClick={() => isClickable && handleWordClick(word)}
                className={`inline-block mr-1 rounded px-0.5 transition-all ${
                  isClickable
                    ? "cursor-pointer hover:bg-blue-500/20 hover:text-blue-300 font-medium decoration-blue-500/30 decoration-dotted underline"
                    : ""
                }`}
              >
                {word}
              </span>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="relative">
      <div className="text-foreground text-sm">{renderInteractiveText()}</div>

      {/* Floating Word Card Drawer */}
      {selectedWord && (
        <div className="mt-3 p-4 rounded-2xl glass border border-blue-500/30 bg-slate-950/80 backdrop-blur-xl animate-slide-up relative">
          <button
            onClick={() => setSelectedWord(null)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-white text-xs p-1 rounded-lg hover:bg-white/10 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-base text-blue-400 capitalize">{selectedWord.original}</h4>
                <button
                  type="button"
                  onClick={() => speakText(selectedWord.normalized)}
                  className="p-1 rounded-lg glass hover:bg-white/10 text-cyan-400 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{selectedWord.translation}</p>
            </div>

            <button
              type="button"
              onClick={handleAddToVocabulary}
              disabled={selectedWord.added}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                selectedWord.added
                  ? "bg-emerald-600 text-white border border-emerald-500 shadow-md shadow-emerald-600/30"
                  : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 shadow-md shadow-blue-500/20"
              }`}
            >
              {selectedWord.added ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{locale === "ua" ? "Додано" : locale === "ru" ? "Добавлено" : "Added"}</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>{locale === "ua" ? "+ Додати у словник" : locale === "ru" ? "+ Добавить в словарь" : "+ Add to Vocabulary"}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
