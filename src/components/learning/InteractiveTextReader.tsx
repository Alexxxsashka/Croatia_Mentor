"use client";

import { useState } from "react";
import { Volume2, Plus, Check, X } from "lucide-react";
import { commonWordTranslations, isCroatianWordToken, lessonWordPattern } from "@/lib/lesson-vocabulary";
import { speakText } from "@/lib/speech";
import { toast } from "sonner";

interface InteractiveTextReaderProps {
  text: string;
  croatianSources?: string[];
  locale: string;
}

export function InteractiveTextReader({ text, croatianSources, locale }: InteractiveTextReaderProps) {
  const [selectedWord, setSelectedWord] = useState<{
    original: string;
    normalized: string;
    translation: string;
    added: boolean;
    saving: boolean;
  } | null>(null);

  // The Latin words embedded in the Cyrillic versions identify Croatian examples in English prose.
  const sourceWords = croatianSources && new Set(croatianSources.flatMap((source) =>
    source.split(lessonWordPattern).filter(isCroatianWordToken).map((word) => word.normalize("NFC").toLowerCase())
  ));

  const handleWordClick = (word: string) => {
    const norm = word.normalize("NFC").toLowerCase();
    speakText(norm);

    const match = Object.hasOwn(commonWordTranslations, norm) ? commonWordTranslations[norm] : undefined;
    let translation = "";
    if (match) {
      translation = locale === "ua" ? match.ua : locale === "ru" ? match.ru : match.en;
    } else {
      translation = locale === "ua" ? "Клацніть, щоб додати у словник" : locale === "ru" ? "Кликните, чтобы добавить в словарь" : "Click to add to vocabulary";
    }

    setSelectedWord({
      original: word,
      normalized: norm,
      translation,
      added: false,
      saving: false,
    });
  };

  const handleAddToVocabulary = async () => {
    if (!selectedWord || selectedWord.added || selectedWord.saving) return;

    const pendingWord = { ...selectedWord, saving: true };
    setSelectedWord(pendingWord);

    try {
      const response = await fetch("/api/words/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wordHr: selectedWord.normalized,
          status: "learning",
        }),
      });

      if (!response.ok) throw new Error(String(response.status));

      setSelectedWord((prev) => prev === pendingWord ? { ...pendingWord, added: true, saving: false } : prev);

      toast.success(
        locale === "ua"
          ? `Слово "${selectedWord.original}" додано до словника! 📚`
          : locale === "ru"
          ? `Слово "${selectedWord.original}" добавлено в словарь! 📚`
          : `Word "${selectedWord.original}" added to vocabulary! 📚`
      );
    } catch (err) {
      setSelectedWord((prev) => prev === pendingWord ? { ...pendingWord, saving: false } : prev);
      console.error("Failed to add word to vocabulary:", err);
      toast.error(locale === "ua"
        ? "Не вдалося додати слово до словника"
        : locale === "ru" ? "Не удалось добавить слово в словарь" : "Could not add the word to vocabulary");
    }
  };

  const renderInteractiveText = () => {
    const lines = text.split("\n");
    return lines.map((line, lIdx) => {
      const words = line.split(lessonWordPattern);
      return (
        <div key={lIdx} className="min-h-[1.4rem] leading-relaxed my-1">
          {words.map((word, wIdx) => {
            const norm = word.normalize("NFC").toLowerCase();
            if (!isCroatianWordToken(word) || (sourceWords && !sourceWords.has(norm))) {
              return word;
            }

            return (
              <button
                key={wIdx}
                type="button"
                lang="hr"
                onClick={() => handleWordClick(word)}
                className="rounded cursor-pointer hover:bg-blue-500/20 hover:text-blue-300 font-medium decoration-blue-500/30 decoration-dotted underline"
              >
                {word}
              </button>
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
                  className="p-2.5 sm:p-1.5 rounded-lg glass hover:bg-white/10 text-cyan-400 cursor-pointer min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
                >
                  <Volume2 className="w-5 h-5 sm:w-4 sm:h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{selectedWord.translation}</p>
            </div>

            <button
              type="button"
              onClick={handleAddToVocabulary}
              disabled={selectedWord.added || selectedWord.saving}
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
                  <span>{locale === "ua" ? "Додати у словник" : locale === "ru" ? "Добавить в словарь" : "Add to Vocabulary"}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
