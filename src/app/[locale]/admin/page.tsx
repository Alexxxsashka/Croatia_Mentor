"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "@/i18n/navigation";
import { Plus, Newspaper, ShieldAlert, Loader2, Calendar } from "lucide-react";
import { toast } from "sonner";

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

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [changelogs, setChangelogs] = useState<Changelog[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Form states
  const [version, setVersion] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [titleUa, setTitleUa] = useState("");
  const [contentEn, setContentEn] = useState("");
  const [contentRu, setContentRu] = useState("");
  const [contentUa, setContentUa] = useState("");

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
      fetchChangelogs();
    }
  }, [isAdmin]);

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

  if (status === "loading" || loading) {
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
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Title */}
      <div className="flex items-center gap-4 border-b border-white/5 pb-6">
        <div className="p-3 rounded-2xl bg-blue-500/15 text-blue-400">
          <Newspaper className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-black">Admin Panel</h1>
          <p className="text-muted-foreground text-sm">Manage site updates and news changelogs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            <div className="grid grid-cols-1 gap-4 border-t border-white/5 pt-4">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Content Descriptions</h3>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">English Content</label>
                <textarea
                  value={contentEn}
                  onChange={(e) => setContentEn(e.target.value)}
                  placeholder="Details of the update in English..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Russian Content (RU)</label>
                <textarea
                  value={contentRu}
                  onChange={(e) => setContentRu(e.target.value)}
                  placeholder="Детали обновления на русском..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Ukrainian Content (UA)</label>
                <textarea
                  value={contentUa}
                  onChange={(e) => setContentUa(e.target.value)}
                  placeholder="Деталі оновлення українською..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-colors"
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

          <div className="space-y-4 max-h-[750px] overflow-y-auto pr-2">
            {changelogs.length === 0 ? (
              <div className="glass rounded-3xl p-8 text-center text-muted-foreground border border-white/5">
                No updates published yet.
              </div>
            ) : (
              changelogs.map((item) => (
                <div key={item.id} className="glass rounded-2xl p-5 border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300">
                      {item.version}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">EN: {item.titleEn}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.contentEn}</p>
                  </div>
                  <div className="border-t border-white/5 pt-2">
                    <h4 className="font-bold text-foreground text-sm">RU: {item.titleRu}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.contentRu}</p>
                  </div>
                  <div className="border-t border-white/5 pt-2">
                    <h4 className="font-bold text-foreground text-sm">UA: {item.titleUa}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.contentUa}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
