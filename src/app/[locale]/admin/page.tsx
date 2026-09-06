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
  Pencil,
  Trash2,
  X,
  Clock,
  CheckCircle2,
  Globe,
  BookOpen,
  TrendingUp,
  RefreshCw,
  FileText,
  Activity,
  Brain,
  ShieldCheck,
  Smartphone,
  KeyRound,
  Filter,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import { BBCode } from "@/components/bbcode";
import { Flag } from "@/components/flag";

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
  dau: number;
  wau: number;
  mau: number;
  activeStreaksCount: number;
  newUsersToday: number;
  newUsersThisWeek: number;
  verifiedUsersCount: number;
  unverifiedUsersCount: number;
  levelCounts: Record<string, number>;
  languageCounts: Record<string, number>;
  providerCounts: Record<string, number>;
  wordStatusCounts: {
    new: number;
    learning: number;
    learned: number;
    mastered: number;
    total: number;
  };
  learningActivity: {
    totalMinutesSpent: number;
    totalHoursSpent: number;
    totalWordsLearned: number;
    totalWordsReviewed: number;
    totalLessonsCompleted: number;
    totalTestsCompleted: number;
  };
}

interface AdminUserItem {
  id: string;
  name: string;
  email: string;
  role: string;
  emailVerified: boolean;
  nativeLanguage: string;
  currentLevel: string;
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  totalWordsLearned: number;
  completedCount: number;
  lastActivityDate: string | null;
  createdAt: string;
  providers: string[];
}

interface AdminMemoryItem {
  id: string;
  userId: string | null;
  category: string;
  key: string;
  content: string;
  sourceMessage: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"news" | "stats" | "memory">("news");
  const [changelogs, setChangelogs] = useState<Changelog[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [users, setUsers] = useState<AdminUserItem[]>([]);
  const [memories, setMemories] = useState<AdminMemoryItem[]>([]);
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(false);
  const [memoryLoading, setMemoryLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [cleaningDuplicates, setCleaningDuplicates] = useState(false);

  // Search & Filters state for stats tab
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [roleFilter, setRoleFilter] = useState<string>("all");

  // Expanded items state for logs
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  // Form states
  const [editingId, setEditingId] = useState<string | null>(null);
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
      } else if (activeTab === "stats") {
        fetchStats();
      } else if (activeTab === "memory") {
        fetchMemories();
      }
    }
  }, [isAdmin, activeTab]);

  const fetchMemories = async () => {
    setMemoryLoading(true);
    try {
      const res = await fetch("/api/admin/memory");
      if (res.ok) {
        const data = await res.json();
        setMemories(data.memories || []);
        setLearnedWordsCount(data.learnedWordsCount || 0);
      } else {
        toast.error("Failed to fetch AI memory");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while fetching AI memory");
    } finally {
      setMemoryLoading(false);
    }
  };

  const deleteMemory = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/memory?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Memory item removed successfully!");
        fetchMemories();
      } else {
        toast.error("Failed to remove memory item");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while deleting memory item");
    }
  };

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

  const runDuplicateCleanup = async () => {
    setCleaningDuplicates(true);
    try {
      const res = await fetch("/api/admin/clean-duplicate-users", { method: "POST" });
      const data = await res.json();
      if (res.ok && data.success) {
        if (data.mergedGroups > 0) {
          toast.success(`Cleaned up ${data.deletedUsers} duplicate account(s) across ${data.mergedGroups} user group(s)!`);
        } else {
          toast.info("No duplicate accounts found in the database. All user accounts are clean!");
        }
        fetchStats();
      } else {
        toast.error(data.error || "Failed to run duplicate user cleanup");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error running duplicate user cleanup");
    } finally {
      setCleaningDuplicates(false);
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

  const startEdit = (item: Changelog) => {
    setEditingId(item.id);
    setVersion(item.version);
    setTitleEn(item.titleEn);
    setTitleRu(item.titleRu);
    setTitleUa(item.titleUa);
    setContentEn(item.contentEn);
    setContentRu(item.contentRu);
    setContentUa(item.contentUa);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setVersion("");
    setTitleEn("");
    setTitleRu("");
    setTitleUa("");
    setContentEn("");
    setContentRu("");
    setContentUa("");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this changelog update?")) return;

    try {
      const res = await fetch(`/api/admin/changelogs/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("News update deleted successfully!");
        if (editingId === id) cancelEdit();
        fetchChangelogs();
      } else {
        toast.error("Failed to delete changelog");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while deleting");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!version || !titleEn || !titleRu || !titleUa || !contentEn || !contentRu || !contentUa) {
      toast.error("Please fill in all title and content fields for all 3 languages");
      return;
    }

    setSubmitting(true);
    try {
      const url = editingId ? `/api/admin/changelogs/${editingId}` : "/api/admin/changelogs";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
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
        toast.success(editingId ? "News update edited successfully!" : "News changelog added successfully!");
        cancelEdit();
        fetchChangelogs();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to save changelog");
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
        title="Bold"
      >
        <Bold className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[i]", "[/i]", "italic text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Italic"
      >
        <Italic className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[u]", "[/u]", "underlined text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Underline"
      >
        <Underline className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[s]", "[/s]", "strikethrough text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Strikethrough"
      >
        <Strikethrough className="w-3.5 h-3.5" />
      </button>
      <div className="w-px h-4 bg-white/10 mx-1" />
      <button
        type="button"
        onClick={() => insertLinkPrompt(lang)}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Link"
      >
        <LinkIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertImagePrompt(lang)}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Image"
      >
        <ImageIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertColorPrompt(lang)}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Text Color"
      >
        <Palette className="w-3.5 h-3.5" />
      </button>
      <div className="w-px h-4 bg-white/10 mx-1" />
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[quote]", "[/quote]", "quoted text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Quote"
      >
        <Quote className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[code]", "[/code]", "code text")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Code"
      >
        <Code className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => insertBBCode(lang, "[list]\n[*]", "\n[/list]", "item 1\n[*]item 2")}
        className="p-1.5 hover:bg-white/10 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="List"
      >
        <List className="w-3.5 h-3.5" />
      </button>
    </div>
  );

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel = levelFilter === "all" || u.currentLevel === levelFilter;
    const matchesRole = roleFilter === "all" || u.role === roleFilter;

    return matchesSearch && matchesLevel && matchesRole;
  });

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

  const getCountryFlagCode = (lang: string) => {
    if (lang === "ua") return "ua";
    if (lang === "ru") return "ru";
    return "gb";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-blue-500/15 text-blue-400">
            <Shield className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-black">Admin Control Center</h1>
            <p className="text-muted-foreground text-sm">Manage news updates, system metrics and user accounts</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-white/5 rounded-xl border border-white/5 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("news")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "news"
                ? "bg-blue-500/25 text-blue-400 border border-blue-500/20 shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Newspaper className="w-4 h-4" />
            News & Changelog
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "stats"
                ? "bg-blue-500/25 text-blue-400 border border-blue-500/20 shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Analytics & Stats
          </button>
          <button
            onClick={() => setActiveTab("memory")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "memory"
                ? "bg-purple-500/25 text-purple-400 border border-purple-500/20 shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            AI Memory & Learning
          </button>
        </div>
      </div>

      {activeTab === "news" ? (
        /* NEWS TAB CONTENT */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-up">
          {/* Create / Edit Changelog Form */}
          <section className="glass rounded-3xl p-6 border border-white/5 space-y-6 h-fit">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                {editingId ? <Pencil className="w-5 h-5 text-amber-400" /> : <Plus className="w-5 h-5 text-blue-400" />}
                {editingId ? `Edit News Update (${version})` : "Add New Changelog / News"}
              </h2>
              {editingId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  Cancel Edit
                </button>
              )}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  Version Tag
                </label>
                <input
                  type="text"
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  placeholder="v1.5.0"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              {/* Titles in 3 languages */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Update Titles (3 Languages)
                </label>
                <div>
                  <input
                    type="text"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    placeholder="English Title (e.g. New Grammar Features)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={titleRu}
                    onChange={(e) => setTitleRu(e.target.value)}
                    placeholder="Russian Title (e.g. Новые функции грамматики)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={titleUa}
                    onChange={(e) => setTitleUa(e.target.value)}
                    placeholder="Ukrainian Title (e.g. Нові функції граматики)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
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
                    placeholder="Деталі українською... BBCode: [b], [i], [url=https://...], [img]https://...[/img]"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-b-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors font-mono text-xs"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-white transition-all shadow-lg disabled:opacity-50 cursor-pointer ${
                  editingId
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                }`}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {editingId ? "Saving..." : "Creating..."}
                  </>
                ) : editingId ? (
                  "Save Changes"
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
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground flex items-center gap-1 mr-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                          <button
                            type="button"
                            onClick={() => startEdit(item)}
                            className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors cursor-pointer"
                            title="Edit News"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(item.id)}
                            className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer"
                            title="Delete News"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors bg-blue-500/10 px-2 py-1 rounded-lg cursor-pointer"
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
      ) : activeTab === "stats" ? (
        /* STATS TAB CONTENT */
        <div className="space-y-8 animate-slide-up">
          {/* Header Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass p-4 rounded-2xl border border-white/5">
            <div>
              <h2 className="text-lg font-bold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                Platform Analytics & System Health
              </h2>
              <p className="text-xs text-muted-foreground">
                Real-time aggregated metrics across users, learning activity, and accounts.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={fetchStats}
                disabled={statsLoading}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-foreground transition-all cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${statsLoading ? "animate-spin text-blue-400" : ""}`} />
                Refresh Metrics
              </button>
              <button
                onClick={runDuplicateCleanup}
                disabled={cleaningDuplicates}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-xs font-semibold text-purple-300 transition-all cursor-pointer disabled:opacity-50"
              >
                {cleaningDuplicates ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                )}
                Clean Duplicate Users
              </button>
            </div>
          </div>

          {statsLoading || !stats ? (
            <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
              <p className="text-muted-foreground text-sm">Aggregating Statistics...</p>
            </div>
          ) : (
            <>
              {/* 8 KPI Quick Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. Total Registered */}
                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4 relative overflow-hidden">
                  <div className="p-3.5 rounded-xl bg-blue-500/15 text-blue-400 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Registered Users</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.totalUsers}</h3>
                    <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-3 h-3" /> +{stats.newUsersThisWeek} this week (+{stats.newUsersToday} today)
                    </span>
                  </div>
                </div>

                {/* 2. Active Users (DAU / WAU / MAU) */}
                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4 relative overflow-hidden">
                  <div className="p-3.5 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Active Users (DAU)</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.dau}</h3>
                    <p className="text-[10px] text-muted-foreground font-medium mt-0.5">
                      {stats.wau} WAU • {stats.mau} MAU
                    </p>
                  </div>
                </div>

                {/* 3. Verified Accounts Rate */}
                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4 relative overflow-hidden">
                  <div className="p-3.5 rounded-xl bg-purple-500/15 text-purple-400 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Email Verified Rate</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">
                      {stats.totalUsers > 0 ? Math.round((stats.verifiedUsersCount / stats.totalUsers) * 100) : 0}%
                    </h3>
                    <p className="text-[10px] text-muted-foreground font-medium mt-0.5">
                      {stats.verifiedUsersCount} verified / {stats.unverifiedUsersCount} pending
                    </p>
                  </div>
                </div>

                {/* 4. Active Streaks */}
                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4 relative overflow-hidden">
                  <div className="p-3.5 rounded-xl bg-orange-500/15 text-orange-400 shrink-0">
                    <Flame className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Active Streaks</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.activeStreaksCount} users</h3>
                    <p className="text-[10px] text-orange-400 font-semibold mt-0.5">
                      Record Streak: {stats.maxStreak} days
                    </p>
                  </div>
                </div>

                {/* 5. Total Learning Hours */}
                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4 relative overflow-hidden">
                  <div className="p-3.5 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Total Time Spent</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.learningActivity.totalHoursSpent} hrs</h3>
                    <p className="text-[10px] text-muted-foreground font-medium mt-0.5">
                      {stats.learningActivity.totalMinutesSpent} total mins logged
                    </p>
                  </div>
                </div>

                {/* 6. Words Mastered & Learned */}
                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4 relative overflow-hidden">
                  <div className="p-3.5 rounded-xl bg-pink-500/15 text-pink-400 shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Words Mastered</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.wordStatusCounts.mastered}</h3>
                    <p className="text-[10px] text-pink-400 font-semibold mt-0.5">
                      {stats.wordStatusCounts.learned} learned / {stats.wordStatusCounts.total} SRS items
                    </p>
                  </div>
                </div>

                {/* 7. Lessons & Tests Completed */}
                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4 relative overflow-hidden">
                  <div className="p-3.5 rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Lessons & Tests</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.learningActivity.totalLessonsCompleted}</h3>
                    <p className="text-[10px] text-muted-foreground font-medium mt-0.5">
                      {stats.learningActivity.totalTestsCompleted} interactive tests taken
                    </p>
                  </div>
                </div>

                {/* 8. Total Accumulated XP */}
                <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4 relative overflow-hidden">
                  <div className="p-3.5 rounded-xl bg-yellow-500/15 text-yellow-400 shrink-0">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Total Platform XP</p>
                    <h3 className="text-2xl font-black text-foreground mt-0.5">{stats.totalXP.toLocaleString()}</h3>
                    <p className="text-[10px] text-yellow-400 font-semibold mt-0.5">
                      Avg: {stats.avgXP} XP / user
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Visual Analytics Cards (Level, Native Lang, SRS Vocabulary) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Level Distribution */}
                <section className="glass rounded-3xl p-6 border border-white/5 space-y-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    Level Distribution (CEFR)
                  </h3>
                  <div className="space-y-3.5">
                    {["A1", "A2", "B1", "B2", "C1", "C2"].map((lvl) => {
                      const count = stats.levelCounts[lvl] || 0;
                      const pct = stats.totalUsers > 0 ? Math.round((count / stats.totalUsers) * 100) : 0;
                      return (
                        <div key={lvl} className="space-y-1">
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="text-foreground flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-blue-400" />
                              {lvl}
                            </span>
                            <span className="text-muted-foreground text-[11px]">
                              {count} {count === 1 ? "user" : "users"} ({pct}%)
                            </span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* 2. Native Language Breakdown */}
                <section className="glass rounded-3xl p-6 border border-white/5 space-y-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-400" />
                    Native Languages
                  </h3>
                  <div className="space-y-3.5">
                    {[
                      { code: "ua", name: "Ukrainian (Українська)" },
                      { code: "ru", name: "Russian (Русский)" },
                      { code: "en", name: "English" },
                      { code: "other", name: "Other Languages" },
                    ].map(({ code, name }) => {
                      const count = stats.languageCounts[code] || 0;
                      const pct = stats.totalUsers > 0 ? Math.round((count / stats.totalUsers) * 100) : 0;
                      return (
                        <div key={code} className="space-y-1">
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="text-foreground flex items-center gap-2">
                              {code !== "other" ? (
                                <Flag countryCode={getCountryFlagCode(code)} className="w-4 h-3 rounded-[2px] shadow-sm" />
                              ) : (
                                <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                              )}
                              {name}
                            </span>
                            <span className="text-muted-foreground text-[11px]">
                              {count} ({pct}%)
                            </span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* 3. Vocabulary SRS Mastery Breakdown */}
                <section className="glass rounded-3xl p-6 border border-white/5 space-y-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-emerald-400" />
                    SRS Vocabulary Progress
                  </h3>
                  <div className="space-y-3.5">
                    {[
                      { key: "mastered", label: "Mastered (Впевнено)", color: "from-emerald-500 to-teal-400", count: stats.wordStatusCounts.mastered },
                      { key: "learned", label: "Learned (Вивчено)", color: "from-blue-500 to-cyan-400", count: stats.wordStatusCounts.learned },
                      { key: "learning", label: "Learning (Вивчається)", color: "from-amber-500 to-yellow-400", count: stats.wordStatusCounts.learning },
                      { key: "new", label: "New Words (Нові)", color: "from-purple-500 to-indigo-400", count: stats.wordStatusCounts.new },
                    ].map(({ key, label, color, count }) => {
                      const total = stats.wordStatusCounts.total || 1;
                      const pct = Math.round((count / total) * 100);
                      return (
                        <div key={key} className="space-y-1">
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="text-foreground">{label}</span>
                            <span className="text-muted-foreground text-[11px]">
                              {count} ({pct}%)
                            </span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
                            <div
                              className={`bg-gradient-to-r ${color} h-full rounded-full transition-all duration-500`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>

              {/* Participant Directory Table with Search & Filters */}
              <section className="glass rounded-3xl p-6 border border-white/5 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-400" />
                      Participant Directory ({filteredUsers.length} of {users.length})
                    </h3>
                    <p className="text-xs text-muted-foreground">Detailed audit log of all registered users on the platform</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Level Filter */}
                    <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs">
                      <Filter className="w-3.5 h-3.5 text-muted-foreground" />
                      <select
                        value={levelFilter}
                        onChange={(e) => setLevelFilter(e.target.value)}
                        className="bg-transparent text-foreground focus:outline-none text-xs font-semibold cursor-pointer"
                      >
                        <option value="all" className="bg-slate-900">All Levels</option>
                        <option value="A1" className="bg-slate-900">A1</option>
                        <option value="A2" className="bg-slate-900">A2</option>
                        <option value="B1" className="bg-slate-900">B1</option>
                        <option value="B2" className="bg-slate-900">B2</option>
                        <option value="C1" className="bg-slate-900">C1</option>
                        <option value="C2" className="bg-slate-900">C2</option>
                      </select>
                    </div>

                    {/* Role Filter */}
                    <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs">
                      <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        className="bg-transparent text-foreground focus:outline-none text-xs font-semibold cursor-pointer"
                      >
                        <option value="all" className="bg-slate-900">All Roles</option>
                        <option value="admin" className="bg-slate-900">Admins</option>
                        <option value="user" className="bg-slate-900">Users</option>
                      </select>
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full sm:w-60">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search name or email..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-1.5 pl-9 text-xs text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                      />
                      <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-2" />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto border border-white/5 rounded-2xl">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/5 text-muted-foreground uppercase tracking-wider font-semibold text-[10px]">
                        <th className="p-3">Participant</th>
                        <th className="p-3">Native Lang</th>
                        <th className="p-3">Level</th>
                        <th className="p-3 text-right">XP</th>
                        <th className="p-3 text-right">Streak</th>
                        <th className="p-3 text-right">Words</th>
                        <th className="p-3 text-right">Lessons</th>
                        <th className="p-3">Auth Provider</th>
                        <th className="p-3">Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="p-8 text-center text-muted-foreground">
                            No participants match your selected filters.
                          </td>
                        </tr>
                      ) : (
                        filteredUsers.map((u) => (
                          <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-3 space-y-0.5">
                              <div className="flex items-center gap-1.5 font-bold text-foreground">
                                <span>{u.name}</span>
                                {u.role === "admin" && (
                                  <span className="text-[9px] font-bold bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded border border-amber-500/20">
                                    Admin
                                  </span>
                                )}
                                {u.emailVerified ? (
                                  <span title="Email Verified"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /></span>
                                ) : (
                                  <span title="Email Unverified"><AlertCircle className="w-3.5 h-3.5 text-amber-400" /></span>
                                )}
                              </div>
                              <p className="text-[10px] text-muted-foreground font-mono">{u.email}</p>
                            </td>
                            <td className="p-3">
                              <span className="inline-flex items-center gap-1.5 text-foreground font-medium">
                                <Flag countryCode={getCountryFlagCode(u.nativeLanguage)} className="w-4 h-3 rounded-[2px] shadow-sm" />
                                <span className="uppercase text-[10px]">{u.nativeLanguage}</span>
                              </span>
                            </td>
                            <td className="p-3">
                              <span className="px-2 py-0.5 rounded font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                {u.currentLevel}
                              </span>
                            </td>
                            <td className="p-3 text-right font-semibold text-amber-400">{u.totalXP.toLocaleString()}</td>
                            <td className="p-3 text-right font-semibold text-orange-400">
                              {u.currentStreak}d <span className="text-[9px] text-muted-foreground">(max {u.longestStreak}d)</span>
                            </td>
                            <td className="p-3 text-right font-semibold text-pink-400">{u.totalWordsLearned}</td>
                            <td className="p-3 text-right font-semibold text-purple-400">{u.completedCount}</td>
                            <td className="p-3">
                              <div className="flex items-center gap-1">
                                {u.providers.includes("google") && (
                                  <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-semibold border border-blue-500/20">
                                    Google
                                  </span>
                                )}
                                {u.providers.includes("phone") && (
                                  <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[10px] font-semibold border border-purple-500/20 flex items-center gap-0.5">
                                    <Smartphone className="w-2.5 h-2.5" /> Phone
                                  </span>
                                )}
                                {(!u.providers.length || u.providers.includes("credentials")) && (
                                  <span className="px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground text-[10px] font-semibold border border-white/10 flex items-center gap-0.5">
                                    <KeyRound className="w-2.5 h-2.5" /> Email
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="p-3 text-[11px] text-muted-foreground">
                              {new Date(u.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}
        </div>
      ) : (
        /* AI MEMORY TAB CONTENT */
        <div className="space-y-6 animate-slide-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-5 border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Saved AI Memory Items
              </div>
              <p className="text-3xl font-black">{memories.length}</p>
            </div>
            <div className="glass rounded-2xl p-5 border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <Award className="w-4 h-4" />
                Auto-Learned Words in Dictionary
              </div>
              <p className="text-3xl font-black">{learnedWordsCount}</p>
            </div>
          </div>

          <section className="glass rounded-3xl p-6 border border-white/5 space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Learned Facts, Corrections & User Profile Context
            </h2>
            {memoryLoading ? (
              <div className="flex items-center justify-center p-12 text-muted-foreground">
                <Loader2 className="w-6 h-6 animate-spin text-purple-400 mr-2" />
                Loading learned AI memories...
              </div>
            ) : memories.length === 0 ? (
              <p className="text-center py-12 text-muted-foreground">
                No background AI memories learned yet. Chat with the AI tutor to automatically gather vocabulary and facts!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {memories.map((m) => (
                  <div key={m.id} className="p-4 rounded-2xl glass border border-white/10 space-y-2 relative group">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                        {m.category}
                      </span>
                      <button
                        onClick={() => deleteMemory(m.id)}
                        className="text-muted-foreground hover:text-red-400 p-1 transition-colors"
                        title="Delete memory item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs font-semibold text-foreground">{m.key}</p>
                    <p className="text-xs text-muted-foreground">{m.content}</p>
                    {m.sourceMessage && (
                      <p className="text-[10px] text-muted-foreground/60 italic border-t border-white/5 pt-1">
                        Source: &quot;{m.sourceMessage}&quot;
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
