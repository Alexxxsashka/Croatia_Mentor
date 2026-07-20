"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { X, Sparkles, Megaphone } from "lucide-react";

interface LatestChangelog {
  id: string;
  version: string;
  titleEn: string;
  titleRu: string;
  titleUa: string;
  contentEn: string;
  contentRu: string;
  contentUa: string;
  createdAt: string;
}

export function ChangelogModal() {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [changelog, setChangelog] = useState<LatestChangelog | null>(null);

  useEffect(() => {
    // Fetch the latest changelog
    fetch("/api/changelogs/latest")
      .then((res) => res.json())
      .then((data) => {
        const item = data.latestChangelog as LatestChangelog;
        if (item) {
          const lastSeenId = localStorage.getItem("last_seen_changelog_id");
          if (lastSeenId !== item.id) {
            setChangelog(item);
            setIsOpen(true);
          }
        }
      })
      .catch((err) => console.error("Error fetching changelog:", err));
  }, []);

  const handleClose = () => {
    if (changelog) {
      localStorage.setItem("last_seen_changelog_id", changelog.id);
    }
    setIsOpen(false);
  };

  if (!isOpen || !changelog) return null;

  // Localize content
  const title =
    locale === "ru"
      ? changelog.titleRu
      : locale === "ua"
      ? changelog.titleUa
      : changelog.titleEn;

  const content =
    locale === "ru"
      ? changelog.contentRu
      : locale === "ua"
      ? changelog.contentUa
      : changelog.contentEn;

  const buttonText =
    locale === "ru"
      ? "Отлично, понятно!"
      : locale === "ua"
      ? "Чудово, зрозуміло!"
      : "Awesome, got it!";

  const tagText =
    locale === "ru"
      ? "Что нового"
      : locale === "ua"
      ? "Що нового"
      : "What's New";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden glass rounded-3xl border border-white/10 shadow-2xl p-6 md:p-8 animate-scale-up space-y-6">
        
        {/* Glow effect */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Tag */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
            <Megaphone className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                {tagText}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300">
                {changelog.version}
              </span>
            </div>
            <h2 className="text-xl font-bold mt-1 text-foreground drop-shadow-sm">
              {title}
            </h2>
          </div>
        </div>

        {/* Body Content */}
        <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line max-h-60 overflow-y-auto border-t border-b border-white/5 py-4">
          {content}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-xl shadow-blue-500/10"
          >
            <Sparkles className="w-4 h-4" />
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
