"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { Bell, Calendar, Sparkles, ChevronRight, CheckCheck, X } from "lucide-react";
import { NotificationIcon } from "@/components/ui/animated-state-icons";
import { BBCode } from "@/components/bbcode";

export interface ChangelogItem {
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

export function NewsBell() {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [changelogs, setChangelogs] = useState<ChangelogItem[]>([]);
  const [readIds, setReadIds] = useState<string[]>([]);
  const [selectedNews, setSelectedNews] = useState<ChangelogItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fetchChangelogs = async () => {
    try {
      const res = await fetch("/api/changelogs");
      if (res.ok) {
        const data = await res.json();
        setChangelogs(data.changelogs || []);
      }
    } catch (err) {
      console.error("Failed to fetch news changelogs:", err);
    }
  };

  useEffect(() => {
    fetchChangelogs();

    try {
      const stored = localStorage.getItem("read_changelog_ids");
      if (stored) {
        setReadIds(JSON.parse(stored));
      } else {
        const lastSeen = localStorage.getItem("last_seen_changelog_id");
        if (lastSeen) {
          setReadIds([lastSeen]);
        }
      }
    } catch {
      // fallback
    }

    // Listen for custom read event
    const handleReadEvent = () => {
      try {
        const stored = localStorage.getItem("read_changelog_ids");
        if (stored) setReadIds(JSON.parse(stored));
      } catch {}
    };
    window.addEventListener("changelog_read_updated", handleReadEvent);
    return () => window.removeEventListener("changelog_read_updated", handleReadEvent);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = changelogs.filter((item) => !readIds.includes(item.id)).length;

  const markAsRead = (id: string) => {
    if (!readIds.includes(id)) {
      const updated = [...readIds, id];
      setReadIds(updated);
      localStorage.setItem("read_changelog_ids", JSON.stringify(updated));
      window.dispatchEvent(new Event("changelog_read_updated"));
    }
  };

  const markAllAsRead = () => {
    const allIds = changelogs.map((item) => item.id);
    setReadIds(allIds);
    localStorage.setItem("read_changelog_ids", JSON.stringify(allIds));
    window.dispatchEvent(new Event("changelog_read_updated"));
  };

  const handleOpenNews = (item: ChangelogItem) => {
    markAsRead(item.id);
    setSelectedNews(item);
  };

  const getTitle = (item: ChangelogItem) => {
    if (locale === "ru") return item.titleRu;
    if (locale === "ua") return item.titleUa;
    return item.titleEn;
  };

  const getContent = (item: ChangelogItem) => {
    if (locale === "ru") return item.contentRu;
    if (locale === "ua") return item.contentUa;
    return item.contentEn;
  };

  const headerTitle =
    locale === "ru"
      ? "Новости и обновления"
      : locale === "ua"
      ? "Новини та оновлення"
      : "News & Updates";

  const markAllText =
    locale === "ru"
      ? "Прочитать все"
      : locale === "ua"
      ? "Прочитати все"
      : "Mark all read";

  const emptyText =
    locale === "ru"
      ? "Пока нет новостей"
      : locale === "ua"
      ? "Поки немає новин"
      : "No news yet";

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl glass hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all duration-200 touch-target flex items-center justify-center"
        aria-label="Notifications"
      >
        <NotificationIcon size={20} active={unreadCount > 0} color="currentColor" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold leading-none text-white bg-red-500 rounded-full animate-pulse shadow-md shadow-red-500/50">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 max-w-[calc(100vw-2rem)] rounded-3xl bg-[#11151b]/95 border border-[#caa77d]/30 shadow-2xl p-4.5 z-50 animate-scale-up space-y-3.5 backdrop-blur-2xl text-slate-100">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                <Sparkles className="w-3.5 h-3.5 fill-white" />
              </div>
              <h3 className="font-bold text-sm text-foreground tracking-tight">{headerTitle}</h3>
              {unreadCount > 0 && (
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {unreadCount}
                </span>
              )}
            </div>

            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllAsRead}
                className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 hover:underline font-semibold transition-colors cursor-pointer"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                {markAllText}
              </button>
            )}
          </div>

          {/* List of News */}
          <div className="max-h-80 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
            {changelogs.length === 0 ? (
              <p className="text-xs text-center text-muted-foreground py-6">{emptyText}</p>
            ) : (
              changelogs.map((item) => {
                const isUnread = !readIds.includes(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleOpenNews(item)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 group cursor-pointer ${
                      isUnread
                        ? "bg-amber-500/10 border-amber-500/30 hover:border-amber-400/60 hover:bg-amber-500/15 shadow-sm shadow-amber-500/5"
                        : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                    }`}
                  >
                    <div className="space-y-1.5 overflow-hidden pr-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {item.version}
                        </span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                        {isUnread && (
                          <span className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400 animate-pulse" />
                        )}
                      </div>
                      <h4 className="font-bold text-xs text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                        {getTitle(item)}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {getContent(item).replace(/\[.*?\]/g, "")}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-300 shrink-0 self-center transition-colors" />
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Selected News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full sm:max-w-lg overflow-hidden rounded-t-3xl sm:rounded-3xl border border-[#caa77d]/30 bg-[#11151b]/98 shadow-2xl p-6 sm:p-8 animate-scale-up space-y-5 sm:space-y-6 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25">
                <Sparkles className="w-6 h-6 fill-white" />
              </div>
              <div>
                <span className="text-[11px] font-bold font-mono px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {selectedNews.version}
                </span>
                <h2 className="text-xl font-bold mt-1.5 text-white tracking-tight">
                  {getTitle(selectedNews)}
                </h2>
              </div>
            </div>

            <div className="text-sm text-slate-300 leading-relaxed max-h-60 overflow-y-auto border-t border-b border-white/10 py-4 custom-scrollbar">
              <BBCode content={getContent(selectedNews)} />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="px-6 py-2.5 rounded-xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white hover:opacity-95 transition-all text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 cursor-pointer"
              >
                {locale === "ua" ? "Закрити" : locale === "ru" ? "Закрыть" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
