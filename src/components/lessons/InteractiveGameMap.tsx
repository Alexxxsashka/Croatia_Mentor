"use client";

import { useState } from "react";
import { LessonData, getLocalizedText } from "@/lib/lessons-data";
import { Link } from "@/i18n/navigation";
import {
  BookOpen,
  Languages,
  Headphones,
  MessageSquare,
  Lock,
  CheckCircle2,
  Star,
  Sparkles,
  Trophy,
  Castle,
  ArrowRight,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];

interface InteractiveGameMapProps {
  lessons: LessonData[];
  completedLessons: string[];
  userLevel: string;
  locale: string;
  onStartPromoTest: (level: string) => void;
}

type MapNodeItem =
  | { type: "lesson"; data: LessonData; indexInLevel: number }
  | { type: "exam"; level: string; targetLevel: string };

export function InteractiveGameMap({
  lessons,
  completedLessons,
  userLevel,
  locale,
  onStartPromoTest,
}: InteractiveGameMapProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const typeIcons: Record<string, typeof BookOpen> = {
    grammar: BookOpen,
    reading: Languages,
    dictation: Headphones,
    communication: MessageSquare,
  };

  const typeColors: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
    grammar: {
      bg: "bg-blue-500/20",
      border: "border-blue-500/40",
      text: "text-blue-400",
      gradient: "from-blue-600 to-cyan-500",
    },
    reading: {
      bg: "bg-purple-500/20",
      border: "border-purple-500/40",
      text: "text-purple-400",
      gradient: "from-purple-600 to-pink-500",
    },
    dictation: {
      bg: "bg-amber-500/20",
      border: "border-amber-500/40",
      text: "text-amber-400",
      gradient: "from-amber-600 to-yellow-500",
    },
    communication: {
      bg: "bg-emerald-500/20",
      border: "border-emerald-500/40",
      text: "text-emerald-400",
      gradient: "from-emerald-600 to-teal-500",
    },
  };

  // Group lessons by level order
  const nodesList: MapNodeItem[] = [];

  // Group by levels present or standard LEVEL_ORDER
  const presentLevels = LEVEL_ORDER.filter((lvl) =>
    lessons.some((l) => l.level === lvl)
  );
  const activeLevels = presentLevels.length > 0 ? presentLevels : ["A1"];

  activeLevels.forEach((lvl) => {
    const levelLessons = lessons.filter((l) => l.level === lvl);
    levelLessons.forEach((l, idx) => {
      nodesList.push({ type: "lesson", data: l, indexInLevel: idx + 1 });
    });

    // Add exam checkpoint node after lessons of each level except max level C2
    if (lvl !== "C2") {
      const nextLevelIndex = LEVEL_ORDER.indexOf(lvl) + 1;
      const targetLevel = LEVEL_ORDER[nextLevelIndex] || lvl;
      nodesList.push({ type: "exam", level: lvl, targetLevel });
    }
  });

  // Calculate X positions for serpentine winding effect (percentage: 50%, 25%, 50%, 75%, etc.)
  const xPositions = [50, 25, 50, 75];

  // Helper to determine node status
  const getNodeStatus = (item: MapNodeItem) => {
    if (item.type === "exam") {
      const userLevelIdx = LEVEL_ORDER.indexOf(userLevel);
      const examLevelIdx = LEVEL_ORDER.indexOf(item.level);
      
      if (userLevelIdx > examLevelIdx) {
        return "completed";
      } else if (userLevelIdx === examLevelIdx) {
        return "unlocked";
      } else {
        return "locked";
      }
    }

    const isCompleted = completedLessons.includes(item.data.id);
    const userLevelIdx = LEVEL_ORDER.indexOf(userLevel);
    const itemLevelIdx = LEVEL_ORDER.indexOf(item.data.level);

    if (isCompleted) return "completed";
    if (itemLevelIdx < userLevelIdx) return "unlocked";
    if (itemLevelIdx === userLevelIdx) return "current";
    return "locked";
  };

  // Selected lesson data for detail drawer
  const selectedLesson = lessons.find((l) => l.id === selectedNodeId);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10 px-4 select-none">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Map Header / Level Progress Legend */}
      <div className="glass rounded-2xl p-4 mb-10 flex flex-wrap items-center justify-between gap-4 border border-white/10 shadow-lg relative z-10">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400 animate-bounce" />
          <span className="font-bold text-sm">
            {locale === "ua"
              ? "Інтерактивна карта пригод"
              : locale === "ru"
              ? "Интерактивная карта приключений"
              : "Interactive Adventure Map"}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-sm" />
            <span className="text-muted-foreground">
              {locale === "ua" ? "Пройдено" : locale === "ru" ? "Пройдено" : "Completed"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-ping" />
            <span className="text-blue-400">
              {locale === "ua" ? "Поточний" : locale === "ru" ? "Текущий" : "Current"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-gray-600 opacity-60" />
            <span className="text-muted-foreground/60">
              {locale === "ua" ? "Заблоковано" : locale === "ru" ? "Заблокировано" : "Locked"}
            </span>
          </div>
        </div>
      </div>

      {/* Map Path Nodes Container */}
      <div className="relative flex flex-col items-center gap-16 py-8">
        {nodesList.map((item, idx) => {
          const xPosPct = xPositions[idx % xPositions.length];
          const status = getNodeStatus(item);
          const isExam = item.type === "exam";

          // Calculate path segment connection to next node
          const nextItem = nodesList[idx + 1];
          const nextXPosPct = nextItem ? xPositions[(idx + 1) % xPositions.length] : 50;

          return (
            <div
              key={isExam ? `exam-${item.level}` : item.data.id}
              className="relative w-full flex flex-col items-center justify-center z-10"
              style={{
                paddingLeft: `${Math.max(0, xPosPct - 25)}%`,
                paddingRight: `${Math.max(0, 75 - xPosPct)}%`,
              }}
            >
              {/* Connecting Line to Next Node */}
              {nextItem && (
                <div className="absolute top-12 left-0 right-0 h-24 pointer-events-none z-0">
                  <svg className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id={`grad-active-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                      <linearGradient id={`grad-done-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    <path
                      d={`M ${xPosPct}% 0 C ${xPosPct}% 50, ${nextXPosPct}% 50, ${nextXPosPct}% 100`}
                      fill="none"
                      stroke={
                        status === "completed"
                          ? `url(#grad-done-${idx})`
                          : status === "current" || status === "unlocked"
                          ? `url(#grad-active-${idx})`
                          : "rgba(100, 116, 139, 0.25)"
                      }
                      strokeWidth={status === "current" ? "5" : "4"}
                      strokeDasharray={status === "locked" ? "6 6" : status === "current" ? "8 6" : "none"}
                      className={status === "current" ? "animate-dash-flow" : ""}
                    />
                  </svg>
                </div>
              )}

              {/* Node Render: EXAM CHECKPOINT CASTLE */}
              {isExam ? (
                <div className="flex flex-col items-center group cursor-pointer animate-game-float">
                  {/* Gate Title */}
                  <div className="mb-2 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg border border-amber-300/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {locale === "ua"
                        ? `Іспит: ${item.level} ➔ ${item.targetLevel}`
                        : locale === "ru"
                        ? `Экзамен: ${item.level} ➔ ${item.targetLevel}`
                        : `Exam: ${item.level} ➔ ${item.targetLevel}`}
                    </span>
                  </div>

                  {/* Castle Island Button */}
                  <button
                    onClick={() => {
                      if (status === "locked") {
                        toast.error(
                          locale === "ua"
                            ? `Іспит заблоковано. Пройдіть уроки рівня ${item.level}!`
                            : locale === "ru"
                            ? `Экзамен заблокирован. Пройдите уроки уровня ${item.level}!`
                            : `Exam is locked. Complete ${item.level} lessons first!`
                        );
                        return;
                      }
                      onStartPromoTest(item.level);
                    }}
                    className={`w-24 h-24 rounded-3xl flex flex-col items-center justify-center relative transition-all duration-300 game-island-btn border-2 ${
                      status === "completed"
                        ? "bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 border-amber-300 text-white glow-gold"
                        : status === "unlocked" || status === "current"
                        ? "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 border-purple-300 text-white glow-blue animate-pulse-ring"
                        : "bg-gray-800/80 border-gray-700 text-gray-400 opacity-60"
                    }`}
                  >
                    <Castle className="w-10 h-10 mb-1 drop-shadow-md" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">
                      {status === "completed"
                        ? locale === "ua"
                          ? "Складено"
                          : locale === "ru"
                          ? "Сдано"
                          : "Passed"
                        : locale === "ua"
                        ? "Іспит"
                        : locale === "ru"
                        ? "Экзамен"
                        : "Exam"}
                    </span>

                    {/* Badge */}
                    {status === "completed" && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 text-white border-2 border-white flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                    {status === "locked" && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gray-900 text-gray-400 border border-gray-700 flex items-center justify-center shadow-md">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </button>
                </div>
              ) : (
                /* Node Render: LESSON ISLAND NODE */
                <div className="flex flex-col items-center relative group">
                  {/* Floating Hero Avatar for Current Active Lesson */}
                  {status === "current" && (
                    <div className="absolute -top-12 z-20 flex flex-col items-center animate-game-float">
                      <div className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg border border-white/20 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                        <span>
                          {locale === "ua" ? "СТАРТ" : locale === "ru" ? "СТАРТ" : "START"}
                        </span>
                      </div>
                      <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-blue-500" />
                    </div>
                  )}

                  {/* Island Button */}
                  <button
                    onClick={() => {
                      if (status === "locked") {
                        toast.error(
                          locale === "ua"
                            ? `Урок заблоковано. Складіть іспит на рівень ${item.data.level}!`
                            : locale === "ru"
                            ? `Урок заблокирован. Сдайте экзамен на уровень ${item.data.level}!`
                            : `Lesson is locked. Pass ${item.data.level} exam first!`
                        );
                        return;
                      }
                      setSelectedNodeId(
                        selectedNodeId === item.data.id ? null : item.data.id
                      );
                    }}
                    className={`w-20 h-20 rounded-3xl flex flex-col items-center justify-center relative transition-all duration-300 game-island-btn border-2 ${
                      status === "completed"
                        ? "bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 border-emerald-300 text-white glow-emerald"
                        : status === "current"
                        ? "bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 border-cyan-300 text-white glow-blue ring-4 ring-blue-500/30"
                        : status === "unlocked"
                        ? "bg-gradient-to-br from-slate-700 to-slate-800 border-slate-500 text-slate-200 hover:border-blue-400"
                        : "bg-slate-900/90 border-slate-800 text-slate-500 opacity-60"
                    }`}
                  >
                    {/* Lesson Type Icon */}
                    {(() => {
                      const IconComp = typeIcons[item.data.type] || BookOpen;
                      return <IconComp className="w-8 h-8 drop-shadow-md" />;
                    })()}

                    {/* Step badge */}
                    <span className="text-[10px] font-black mt-0.5">
                      #{item.indexInLevel}
                    </span>

                    {/* Status Top Badge */}
                    {status === "completed" && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-amber-400 text-gray-900 border-2 border-white flex items-center justify-center shadow-md font-bold text-[10px]">
                        ★
                      </div>
                    )}
                    {status === "locked" && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 text-gray-400 border border-gray-700 flex items-center justify-center shadow-md">
                        <Lock className="w-3 h-3" />
                      </div>
                    )}
                  </button>

                  {/* Title Preview under Node */}
                  <div className="mt-2 text-center max-w-[140px]">
                    <span className="text-xs font-semibold line-clamp-1 block text-foreground/90">
                      {getLocalizedText(item.data.title, locale)}
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">
                      {item.data.level} • {item.data.type}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Lesson Popup Drawer / Card */}
      {selectedLesson && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-slide-up">
          <div className="glass rounded-3xl p-5 border border-white/20 shadow-2xl bg-black/80 backdrop-blur-xl text-white relative">
            <button
              onClick={() => setSelectedNodeId(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-white text-xs px-2 py-1 rounded-lg bg-white/10"
            >
              ✕
            </button>

            <div className="flex items-start gap-4 mb-3">
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${
                  typeColors[selectedLesson.type]?.gradient || "from-blue-600 to-indigo-600"
                } flex items-center justify-center shrink-0 shadow-lg`}
              >
                {(() => {
                  const Icon = typeIcons[selectedLesson.type] || BookOpen;
                  return <Icon className="w-6 h-6 text-white" />;
                })()}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/20 uppercase tracking-wider">
                    {selectedLesson.level}
                  </span>
                  <span className="text-[10px] font-bold text-cyan-400 capitalize">
                    {selectedLesson.type}
                  </span>
                  {completedLessons.includes(selectedLesson.id) && (
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {locale === "ua" ? "Вивчено" : locale === "ru" ? "Пройдено" : "Done"}
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-base line-clamp-1">
                  {getLocalizedText(selectedLesson.title, locale)}
                </h4>
              </div>
            </div>

            <p className="text-xs text-gray-300 line-clamp-2 mb-4 leading-relaxed">
              {getLocalizedText(selectedLesson.content.description, locale)}
            </p>

            <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>+50 XP</span>
              </div>

              <Link
                href={`/lessons/${selectedLesson.id}`}
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:opacity-90 transition-all text-white flex items-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <span>
                  {completedLessons.includes(selectedLesson.id)
                    ? locale === "ua"
                      ? "Повторити урок"
                      : locale === "ru"
                      ? "Повторить урок"
                      : "Review Lesson"
                    : locale === "ua"
                    ? "Розпочати урок"
                    : locale === "ru"
                    ? "Начать урок"
                    : "Start Lesson"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
