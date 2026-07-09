"use client";

import { Play, BookOpen } from "lucide-react";

interface ContextMediaCardProps {
  wordHr: string;
  translation: string;
  exampleSentence: string;
  exampleTranslation: string;
  mediaType: "meme" | "movie" | "music";
  mediaUrl?: string;
  imageUrl?: string;
}

export function ContextMediaCard({
  wordHr,
  translation,
  exampleSentence,
  exampleTranslation,
  mediaType,
  mediaUrl,
  imageUrl,
}: ContextMediaCardProps) {
  const mediaLabels = {
    meme: "🎭 Meme",
    movie: "🎬 Movie Clip",
    music: "🎵 Music",
  };

  return (
    <div className="glass rounded-2xl overflow-hidden card-hover group">
      {/* Media section */}
      <div className="relative aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={wordHr}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-4">
            <span className="text-4xl mb-2 block">
              {mediaType === "meme" ? "🎭" : mediaType === "movie" ? "🎬" : "🎵"}
            </span>
            <span className="text-sm text-muted-foreground">
              {mediaLabels[mediaType]}
            </span>
          </div>
        )}

        {mediaUrl && (
          <button className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-6 h-6 text-white ml-0.5" />
            </div>
          </button>
        )}

        {/* Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass text-xs font-medium">
          {mediaLabels[mediaType]}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-bold text-blue-400">{wordHr}</h3>
            <p className="text-sm text-muted-foreground">{translation}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-blue-400" />
          </div>
        </div>

        <div className="border-t border-white/5 pt-3 mt-3">
          <p className="text-sm font-medium italic">
            &ldquo;{exampleSentence}&rdquo;
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {exampleTranslation}
          </p>
        </div>
      </div>
    </div>
  );
}

// Sample data for the ContextMediaCard
export const sampleMediaCards = [
  {
    wordHr: "Pekara",
    translation: "Bakery",
    exampleSentence: "Idem u pekaru kupiti kruh.",
    exampleTranslation: "I'm going to the bakery to buy bread.",
    mediaType: "movie" as const,
  },
  {
    wordHr: "More",
    translation: "Sea",
    exampleSentence: "Ljeti idemo na more u Dalmaciju.",
    exampleTranslation: "In summer we go to the sea in Dalmatia.",
    mediaType: "meme" as const,
  },
  {
    wordHr: "Kava",
    translation: "Coffee",
    exampleSentence: "Hoćeš li popiti kavu sa mnom?",
    exampleTranslation: "Would you like to have coffee with me?",
    mediaType: "music" as const,
  },
  {
    wordHr: "Prijatelj",
    translation: "Friend",
    exampleSentence: "On je moj najbolji prijatelj.",
    exampleTranslation: "He is my best friend.",
    mediaType: "meme" as const,
  },
];
