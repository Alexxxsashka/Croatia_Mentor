"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { lessonsData } from "@/lib/lessons-data";
import {
  BookOpen,
  Languages,
  Headphones,
  MessageSquare,
  ArrowRight,
  Filter,
} from "lucide-react";

export default function LessonsPage() {
  const t = useTranslations("lessons");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterLevel, setFilterLevel] = useState<string>("all");

  const types = [
    { value: "all", label: t("all") },
    { value: "grammar", label: t("grammar"), icon: BookOpen },
    { value: "reading", label: t("reading"), icon: Languages },
    { value: "dictation", label: t("dictation"), icon: Headphones },
    { value: "communication", label: t("communication"), icon: MessageSquare },
  ];

  const levels = ["all", "A1", "A2", "B1", "B2", "C1", "C2"];

  const typeIcons: Record<string, typeof BookOpen> = {
    grammar: BookOpen,
    reading: Languages,
    dictation: Headphones,
    communication: MessageSquare,
  };

  const typeGradients: Record<string, string> = {
    grammar: "from-blue-500 to-cyan-400",
    reading: "from-purple-500 to-pink-400",
    dictation: "from-orange-500 to-yellow-400",
    communication: "from-green-500 to-emerald-400",
  };

  const filtered = lessonsData.filter((lesson) => {
    if (filterType !== "all" && lesson.type !== filterType) return false;
    if (filterLevel !== "all" && lesson.level !== filterLevel) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground mt-1">{t("subtitle")}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-8 animate-slide-up">
        {/* Type filter */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            {t("filterByType")}
          </div>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type.value}
                onClick={() => setFilterType(type.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterType === type.value
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : "glass hover:bg-white/10"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Level filter */}
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">{t("filterByLevel")}</div>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setFilterLevel(level)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterLevel === level
                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    : "glass hover:bg-white/10"
                }`}
              >
                {level === "all" ? t("all") : level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {filtered.map((lesson) => {
          const Icon = typeIcons[lesson.type] || BookOpen;
          const gradient = typeGradients[lesson.type] || "from-gray-500 to-gray-400";

          return (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.id}`}
              className="group glass rounded-2xl p-6 card-hover block"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-md level-${lesson.level.toLowerCase()} text-white`}
                  >
                    {lesson.level}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2 capitalize">
                    {t(lesson.type as "grammar" | "reading" | "dictation" | "communication")}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {lesson.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {lesson.content.description}
              </p>
              <div className="flex items-center gap-1 mt-4 text-sm text-blue-400 font-medium">
                {t("startLesson")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No lessons found with the selected filters.</p>
        </div>
      )}
    </div>
  );
}
