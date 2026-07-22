"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "@/i18n/navigation";
import {
  Plus,
  Newspaper,
  ShieldAlert,
  Loader2,
  Calendar,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link as LinkIcon,
  Image as ImageIcon,
  Quote,
  Code,
  List,
  Palette,
  ChevronDown,
  ChevronUp,
  Users,
  BarChart3,
  Flame,
  Trophy,
  Sparkles,
  Search,
  Award,
  Shield,
} from "lucide-react";
import { toast } from "sonner";
import { BBCode } from "@/components/bbcode";

interface Changelog {
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

interface AdminStats {
  totalUsers: number;
  totalXP: number;
  avgXP: number;
  maxXP: number;
  avgStreak: number;
  maxStreak: number;
  levelCounts: Record<string, number>;
}

interface AdminUserItem {
  id: string;
  name: string;
  email: string;
  role: string;
  currentLevel: string;
  totalXP: number;
  currentStreak: number;
  completedCount: number;
  createdAt: string;
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"news" | "stats">("news");
  const [changelogs, setChangelogs] = useState<Changelog[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [users, setUsers] = useState<AdminUserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Search state for stats tab
  const [searchQuery, setSearchQuery] = useState("");

  // Expanded items state for logs
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  // Form states
  const [version, setVersion] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [titleUa, setTitleUa] = useState("");
  const [contentEn, setContentEn] = useState("");
  const [contentRu, setContentRu] = useState("");
  const [contentUa, setContentUa] = useState("");

  const textareaEnRef = useRef<HTMLTextAreaElement>(null);
  const textareaRuRef = useRef<HTMLTextAreaElement>(null);
  const textareaUaRef = useRef<HTMLTextAreaElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = session?.user as any;
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    if (status === "unauthenticated" || (status === "authenticated" && !isAdmin)) {
      router.push("/");
    }
  }, [status, isAdmin, router]);

  useEffect(() => {
    if (isAdmin) {
      if (activeTab === "news") {
        fetchChangelogs();
      } else {
        fetchStats();
      }
    }
  }, [isAdmin, activeTab]);

  const fetchChangelogs = async () => {
    try {
      const res = await fetch("/api/admin/changelogs");
      if (res.ok) {
        const data = await res.json();
        setChangelogs(data.changelogs || []);
      } else {
        toast.error("Failed to fetch changelogs");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while fetching changelogs");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    setStatsLoading(true);
    try {
      const res = await fetch("/api/admin/stats");
      if (res.ok) {
        const data = await res.json();
        setStats(data.stats);
        setUsers(data.users || []);
      } else {
        toast.error("Failed to fetch stats");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while fetching statistics");
    } finally {
      setStatsLoading(false);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const insertBBCode = (
    lang: "en" | "ru" | "ua",
    openTag: string,
    closeTag: string = "",
    defaultText: string = ""
  ) => {
    const refMap = {
      en: { ref: textareaEnRef, getter: contentEn, setter: setContentEn },
      ru: { ref: textareaRuRef, getter: contentRu, setter: setContentRu },
      ua: { ref: textareaUaRef, getter: contentUa, setter: setContentUa },
    };

    const target = refMap[lang];
    const textarea = target.ref.current;

    if (!textarea) {
      const textToAppend = openTag + defaultText + closeTag;
      target.setter((prev) => prev + textToAppend);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = target.getter.substring(start, end) || defaultText;
    const replacement = openTag + selectedText + closeTag;

    const newValue =
      target.getter.substring(0, start) + replacement + target.getter.substring(end);

    target.setter(newValue);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + openTag.length,
        start + openTag.length + selectedText.length
      );
    }, 0);
  };

  const insertLinkPrompt = (lang: "en" | "ru" | "ua") => {
    const url = prompt("Enter URL (e.g. https://example.com):");
    if (!url) return;
    insertBBCode(lang, `[url=${url}]`, "[/url]", "link text");
  };

  const insertImagePrompt = (lang: "en" | "ru" | "ua") => {
    const url = prompt("Enter Image URL (e.g. https://example.com/image.png):");
    if (!url) return;
    insertBBCode(lang, `[img]${url}[/img]`, "", "");
  };

  const insertColorPrompt = (lang: "en" | "ru" | "ua") => {
    const color = prompt("Enter Color name or Hex code (e.g. #3b82f6 or red):", "#3b82f6");
    if (!color) return;
    insertBBCode(lang, `[color=${color}]`, "[/color]", "colored text");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!version || !titleEn || !titleRu || !titleUa || !contentEn || !contentRu || !contentUa) {
      toast.error("Please fill in all fields");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/changelogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          version,
          titleEn,
          titleRu,
          titleUa,
          contentEn,
          contentRu,
          contentUa,
        }),
      });

      if (res.ok) {
        toast.success("News changelog added successfully!");
        setVersion("");
        setTitleEn("");
        setTitleRu("");
        setTitleUa("");
        setContentEn("");
        setContentRu("");
        setContentUa("");
        fetchChangelogs();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to create changelog");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  const renderBBCodeToolbar = (lang: "en" | "ru" | "ua") => (
    <div className="flex flex-wrap items-center gap-1 p-1.5 bg-white/5 border border-white/10 rounded-t-xl border-b-0">
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[b]", "[/b]", "bold text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Bold [b]"
      >
        <Bold className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[i]", "[/i]", "italic text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Italic [i]"
      >
        <Italic className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[u]", "[/u]", "underline text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Underline [u]"
      >
        <Underline className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[s]", "[/s]", "strikethrough text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Strikethrough [s]"
      >
        <Strikethrough className="w-3.5 h-3.5" />
      </button>

      <div className="h-4 w-[1px] bg-white/10 mx-0.5" />

      <button
        type="button"
        onClick={() => insertLinkPrompt(lang)}
        className="p-1.5 hover:bg-white/10 rounded text-blue-400 hover:text-blue-300 transition-colors"
        title="Link [url=...]"
      >
        <LinkIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertImagePrompt(lang)}
        className="p-1.5 hover:bg-white/10 rounded text-purple-400 hover:text-purple-300 transition-colors"
        title="Image [img]...[/img]"
      >
        <ImageIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertColorPrompt(lang)}
        className="p-1.5 hover:bg-white/10 rounded text-amber-400 hover:text-amber-300 transition-colors"
        title="Color [color=...]"
      >
        <Palette className="w-3.5 h-3.5" />
      </button>

      <div className="h-4 w-[1px] bg-white/10 mx-0.5" />

      <button
        type="button"
        onClick={() => insertBBCode(lang, "[quote]", "[/quote]", "quoted text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Quote [quote]"
      >
        <Quote className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[code]", "[/code]", "code text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Code block [code]"
      >
        <Code className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() =>
          insertBBCode(lang, "[list]\n[*]", "\n[*]Item 2\n[/list]", "Item 1")
        }
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="List [list]"
      >
        <List className="w-3.5 h-3.5" />
      </button>
    </div>
  );

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === "loading" || (loading && activeTab === "news")) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
        <p className="text-muted-foreground">Loading Admin Panel...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 rounded-3xl glass border border-red-500/20 text-center space-y-6">
        <div className="inline-flex p-4 rounded-2xl bg-red-500/10 text-red-500">
          <ShieldAlert className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-bold text-red-500">Access Denied</h1>
        <p className="text-muted-foreground">You do not have permission to view this page.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-blue-500/15 text-blue-400">
            <Shield className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-black">Admin Panel</h1>
            <p className="text-muted-foreground text-sm">Manage site updates and monitor user statistics</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-white/5 rounded-xl border border-white/5 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("news")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "news"
                ? "bg-blue-500/25 text-blue-400 border border-blue-500/20"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Newspaper className="w-4 h-4" />
            News & Changelog
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "stats"
                ? "bg-blue-500/25 text-blue-400 border border-blue-500/20"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            General Stats
          </button>
        </div>
      </div>

      {activeTab === "news" ? (
        /* NEWS TAB CONTENT */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-up">
          {/* Create Changelog Form */}
          <section className="glass rounded-3xl p-6 border border-white/5 space-y-6 h-fit">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Plus className="w-5 h-5 text-blue-400" />
              Add New Changelog / News
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  Version / Tag (e.g. v1.1.0 or Update)
                </label>
                <input
                  type="text"
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  placeholder="v1.2.0"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              {/* Titles in 3 languages */}
              <div className="grid grid-cols-1 gap-4 border-t border-white/5 pt-4">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Titles</h3>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">English Title</label>
                  <input
                    type="text"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    placeholder="New Grammar Lessons Added!"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Russian Title (RU)</label>
                  <input
                    type="text"
                    value={titleRu}
                    onChange={(e) => setTitleRu(e.target.value)}
                    placeholder="Добавлены новые уроки грамматики!"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Ukrainian Title (UA)</label>
                  <input
                    type="text"
                    value={titleUa}
                    onChange={(e) => setTitleUa(e.target.value)}
                    placeholder="Додано нові уроки граматики!"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Contents in 3 languages */}
              <div className="grid grid-cols-1 gap-5 border-t border-white/5 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Content Descriptions (BBCode supported)
                  </h3>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-1">English Content</label>
                  {renderBBCodeToolbar("en")}
                  <textarea
                    ref={textareaEnRef}
                    value={contentEn}
                    onChange={(e) => setContentEn(e.target.value)}
                    placeholder="Details in English... BBCode supported: [b], [i], [url=https://...], [img]https://...[/img]"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-b-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors font-mono text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Russian Content (RU)</label>
                  {renderBBCodeToolbar("ru")}
                  <textarea
                    ref={textareaRuRef}
                    value={contentRu}
                    onChange={(e) => setContentRu(e.target.value)}
                    placeholder="Детали на русском... BBCode: [b], [i], [url=https://...], [img]https://...[/img]"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-b-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors font-mono text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Ukrainian Content (UA)</label>
                  {renderBBCodeToolbar("ua")}
                  <textarea
                    ref={textareaUaRef}
                    value={contentUa}
                    onChange={(e) => setContentUa(e.target.value)}
                    placeholder="Деталі украинською... BBCode: [b], [i], [url=https://...], [img]https://...[/img]"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-b-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors font-mono text-xs"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-lg disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Publish Update"
                )}
              </button>
            </form>
          </section>

          {/* Existing Changelogs List */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-purple-400" />
              Previous Updates ({changelogs.length})
            </h2>

            <div className="space-y-4 max-h-[850px] overflow-y-auto pr-2">
              {changelogs.length === 0 ? (
                <div className="glass rounded-3xl p-8 text-center text-muted-foreground border border-white/5">
                  No updates published yet.
                </div>
              ) : (
                changelogs.map((item) => {
                  const isExpanded = !!expandedIds[item.id];

                  return (
                    <div key={item.id} className="glass rounded-2xl p-5 border border-white/5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300">
                          {item.version}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors bg-blue-500/10 px-2 py-1 rounded-lg"
                          >
                            {isExpanded ? (
                              <>
                                Collapse <ChevronUp className="w-3.5 h-3.5" />
                              </>
                            ) : (
                              <>
                                Expand <ChevronDown className="w-3.5 h-3.5" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* EN */}
                      <div className="space-y-1">
                        <h4 className="font-bold text-foreground text-xs uppercase tracking-wider text-blue-400">
                          EN: {item.titleEn}
                        </h4>
                        <div
                          className={`text-xs text-muted-foreground transition-all ${
                            isExpanded ? "" : "line-clamp-2 max-h-12 overflow-hidden"
                          }`}
                        >
                          <BBCode content={item.contentEn} />
                        </div>
                      </div>

                      {/* RU */}
                      <div className="border-t border-white/5 pt-3 space-y-1">
                        <h4 className="font-bold text-foreground text-xs uppercase tracking-wider text-purple-400">
                          RU: {item.titleRu}
                        </h4>
                        <div
                          className={`text-xs text-muted-foreground transition-all ${
                            isExpanded ? "" : "line-clamp-2 max-h-12 overflow-hidden"
                          }`}
                        >
                          <BBCode content={item.contentRu} />
                        </div>
                      </div>

                      {/* UA */}
                      <div className="border-t border-white/5 pt-3 space-y-1">
                        <h4 className="font-bold text-foreground text-xs uppercase tracking-wider text-emerald-400">
                          UA: {item.titleUa}
                        </h4>
                        <div
                          className={`text-xs text-muted-foreground transition-all ${
                            isExpanded ? "" : "line-clamp-2 max-h-12 overflow-hidden"
                          }`}
                        >
                          <BBCode content={item.contentUa} />
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </section>
        </div>
      ) : (
        /* STATS TAB CONTENT */
        <div className="space-y-8 animate-slide-up">
          {statsLoading || !stats ? (
            <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
              <p className="text-muted-foreground text-sm">Aggregating Statistics...</p>
            </div>
          ) : (
            <>
              {/* Aggregated Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-blue-500/15 text-blue-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Total Members</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.totalUsers}</h3>
                  </div>
                </div>

                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/15 text-amber-400">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Accumulated XP</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.totalXP}</h3>
                  </div>
                </div>

                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-purple-500/15 text-purple-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Avg XP / User</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.avgXP}</h3>
                  </div>
                </div>

                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-orange-500/15 text-orange-400">
                    <Flame className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Max Streak</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.maxStreak} days</h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Level Distribution Grid */}
                <section className="glass rounded-3xl p-6 border border-white/5 space-y-6 h-fit">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    Level Distribution
                  </h3>
                  <div className="space-y-4">
                    {["A1", "A2", "B1", "B2", "C1", "C2"].map((lvl) => {
                      const count = stats.levelCounts[lvl] || 0;
                      const pct = stats.totalUsers > 0 ? Math.round((count / stats.totalUsers) * 100) : 0;
                      return (
                        <div key={lvl} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="text-foreground">{lvl}</span>
                            <span className="text-muted-foreground">
                              {count} {count === 1 ? "user" : "users"} ({pct}%)
                            </span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Users List Directory Table */}
                <section className="lg:col-span-2 glass rounded-3xl p-6 border border-white/5 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-400" />
                      Participant Directory
                    </h3>
                    <div className="relative w-full sm:w-60">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search users..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 pl-9 text-xs text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                      />
                      <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-2.5" />
                    </div>
                  </div>

                  <div className="overflow-x-auto border border-white/5 rounded-2xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-white/5 border-b border-white/5">
                          <th className="p-3 font-semibold text-muted-foreground uppercase tracking-wider">Participant</th>
                          <th className="p-3 font-semibold text-muted-foreground uppercase tracking-wider">Level</th>
                          <th className="p-3 font-semibold text-muted-foreground uppercase tracking-wider text-right">XP</th>
                          <th className="p-3 font-semibold text-muted-foreground uppercase tracking-wider text-right">Streak</th>
                          <th className="p-3 font-semibold text-muted-foreground uppercase tracking-wider text-right">Lessons</th>
                          <th className="p-3 font-semibold text-muted-foreground uppercase tracking-wider">Joined</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="p-6 text-center text-muted-foreground">
                              No participants matched search query.
                            </td>
                          </tr>
                        ) : (
                          filteredUsers.map((u) => (
                            <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                              <td className="p-3 space-y-0.5">
                                <p className="font-bold text-foreground flex items-center gap-1.5">
                                  {u.name}
                                  {u.role === "admin" && (
                                    <span className="text-[9px] font-bold bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded border border-amber-500/10">
                                      Admin
                                    </span>
                                  )}
                                </p>
                                <p className="text-[10px] text-muted-foreground">{u.email}</p>
                              </td>
                              <td className="p-3">
                                <span className="px-2 py-0.5 rounded font-bold bg-blue-500/10 text-blue-400 border border-blue-500/10">
                                  {u.currentLevel}
                                </span>
                              </td>
                              <td className="p-3 text-right font-semibold text-amber-400">{u.totalXP}</td>
                              <td className="p-3 text-right font-semibold text-orange-400">{u.currentStreak}d</td>
                              <td className="p-3 text-right font-semibold text-purple-400">{u.completedCount}</td>
                              <td className="p-3 text-muted-foreground">
                                {new Date(u.createdAt).toLocaleDateString()}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
