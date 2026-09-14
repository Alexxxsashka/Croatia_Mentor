"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { X, Sparkles, Megaphone } from "lucide-react";
import { BBCode } from "@/components/bbcode";
 
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
      try {
        const stored = localStorage.getItem("read_changelog_ids");
        const list = stored ? JSON.parse(stored) : [];
        if (!list.includes(changelog.id)) {
          const updated = [...list, changelog.id];
          localStorage.setItem("read_changelog_ids", JSON.stringify(updated));
          window.dispatchEvent(new Event("changelog_read_updated"));
        }
      } catch {}
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#caa77d]/30 bg-[#11151b]/98 shadow-2xl p-6 md:p-8 animate-scale-up space-y-6">
        
        {/* Glow effect */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Tag */}
        <div className="flex items-center gap-3.5">
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25">
            <Megaphone className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {tagText}
              </span>
              <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {changelog.version}
              </span>
            </div>
            <h2 className="text-xl font-bold mt-1 text-white drop-shadow-sm tracking-tight">
              {title}
            </h2>
          </div>
        </div>

        {/* Body Content */}
        <div className="text-sm text-slate-300 leading-relaxed max-h-60 overflow-y-auto border-t border-b border-white/10 py-4 custom-scrollbar">
          <BBCode content={content} />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white hover:opacity-95 transition-all shadow-lg shadow-orange-500/25 cursor-pointer text-xs uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 fill-white" />
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
