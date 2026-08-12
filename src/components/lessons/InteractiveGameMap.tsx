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
  Castle,
  ArrowRight,
  Zap,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];

const MODULE_TITLES: Record<string, { ua: string; ru: string; en: string; descUa: string; descRu: string; descEn: string }> = {
  A1: {
    ua: "Модуль 1: Рівень A1 — Початковий",
    ru: "Модуль 1: Уровень A1 — Начальный",
    en: "Module 1: Level A1 — Beginner",
    descUa: "Основи граматики, займенники, привітання та базовий словниковий запас",
    descRu: "Основы грамматики, местоимения, приветствия и базовый словарный запас",
    descEn: "Grammar fundamentals, pronouns, greetings, and core vocabulary",
  },
  A2: {
    ua: "Модуль 2: Рівень A2 — Базовий",
    ru: "Модуль 2: Уровень A2 — Базовый",
    en: "Module 2: Level A2 — Elementary",
    descUa: "Відмінники, часи дієслів, побутові теми та повсякденне спілкування",
    descRu: "Падежи, времена глаголов, бытовые темы и повседневное общение",
    descEn: "Cases, verb tenses, everyday topics, and daily communication",
  },
  B1: {
    ua: "Модуль 3: Рівень B1 — Середній",
    ru: "Модуль 3: Уровень B1 — Средний",
    en: "Module 3: Level B1 — Intermediate",
    descUa: "Складні граматичні конструкції, діалоги та вільне висловлення думки",
    descRu: "Сложные грамматические конструкции, диалоги и свободное выражение мыслей",
    descEn: "Complex grammar structures, dialogues, and confident speaking",
  },
  B2: {
    ua: "Модуль 4: Рівень B2 — Вище середнього",
    ru: "Модуль 4: Уровень B2 — Выше среднего",
    en: "Module 4: Level B2 — Upper Intermediate",
    descUa: "Професійна лексика, публіцистика, аудіювання та диктанти",
    descRu: "Профессиональная лексика, публицистика, аудирование и диктанты",
    descEn: "Professional vocabulary, media texts, listening, and dictations",
  },
  C1: {
    ua: "Модуль 5: Рівень C1 — Професійний",
    ru: "Модуль 5: Уровень C1 — Продвинутый",
    en: "Module 5: Level C1 — Advanced",
    descUa: "Глибоке розуміння ідіом, стилістика та поглиблена комунікація",
    descRu: "Глубокое понимание идиом, стилистика и углубленная коммуникация",
    descEn: "Idiomatic expressions, stylistic nuances, and advanced fluency",
  },
  C2: {
    ua: "Модуль 6: Рівень C2 — Досконалий",
    ru: "Модуль 6: Уровень C2 — Mastery",
    en: "Module 6: Level C2 — Mastery",
    descUa: "Повне володіння мовою на рівні носія",
    descRu: "Полное владение языком на уровне носителя",
    descEn: "Full native-level language mastery",
  },
};

interface InteractiveGameMapProps {
  lessons: LessonData[];
  completedLessons: string[];
  userLevel: string;
  locale: string;
  hasCompletedLessonToday?: boolean;
  onStartPromoTest: (level: string) => void;
}

interface LessonNodeItem {
  type: "lesson";
  data: LessonData;
  indexInLevel: number;
  globalIndex: number;
}

interface ExamNodeItem {
  type: "exam";
  level: string;
  targetLevel: string;
  globalIndex: number;
}

type MapNodeItem = LessonNodeItem | ExamNodeItem;

interface ModuleGroup {
  level: string;
  nodes: MapNodeItem[];
}

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

  // Group lessons into module groups by level (A1, A2, B1, B2, C1, C2)
  const presentLevels = LEVEL_ORDER.filter((lvl) =>
    lessons.some((l) => l.level === lvl)
  );
  const activeLevels = presentLevels.length > 0 ? presentLevels : ["A1"];

  let globalCounter = 0;
  const moduleGroups: ModuleGroup[] = activeLevels.map((lvl) => {
    const levelLessons = lessons.filter((l) => l.level === lvl);
    const nodes: MapNodeItem[] = [];

    levelLessons.forEach((l, idx) => {
      nodes.push({
        type: "lesson",
        data: l,
        indexInLevel: idx + 1,
        globalIndex: globalCounter++,
      });
    });

    if (lvl !== "C2") {
      const nextLevelIndex = LEVEL_ORDER.indexOf(lvl) + 1;
      const targetLevel = LEVEL_ORDER[nextLevelIndex] || lvl;
      nodes.push({
        type: "exam",
        level: lvl,
        targetLevel,
        globalIndex: globalCounter++,
      });
    }

    return { level: lvl, nodes };
  });

  // Flattened array of all nodes for path calculation
  const allNodesFlat: MapNodeItem[] = moduleGroups.flatMap((g) => g.nodes);

  // X positions for serpentine path (percentages: 50%, 25%, 50%, 75%)
  const xPositions = [50, 25, 50, 75];

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

  const selectedLesson = lessons.find((l) => l.id === selectedNodeId);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-6 px-2 sm:px-4 select-none">
      {/* Outer Card Container with tech grid background */}
      <div className="glass rounded-3xl p-4 sm:p-8 border border-white/10 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl overflow-hidden">
        {/* Tech Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" />

        {/* Ambient Glow Orbs */}
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Professional Header & Legend */}
        <div className="glass rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4 border border-white/10 relative z-10 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-foreground">
                {locale === "ua"
                  ? "Карта навчальних модулів"
                  : locale === "ru"
                  ? "Карта учебных модулей"
                  : "Course Module Map"}
              </h3>
              <p className="text-xs text-muted-foreground">
                {locale === "ua"
                  ? "Послідовне освоєння курсу хорватської мови"
                  : locale === "ru"
                  ? "Последовательное освоение курса хорватского языка"
                  : "Structured Croatian language curriculum path"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
              <span className="text-muted-foreground">
                {locale === "ua" ? "Пройдено" : locale === "ru" ? "Пройдено" : "Completed"}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
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

        {/* Modules List */}
        <div className="space-y-12 relative z-10">
          {moduleGroups.map((group) => {
            const modMeta = MODULE_TITLES[group.level] || {
              ua: `Модуль: ${group.level}`,
              ru: `Модуль: ${group.level}`,
              en: `Module: ${group.level}`,
              descUa: "",
              descRu: "",
              descEn: "",
            };

            const levelTotal = group.nodes.filter((n) => n.type === "lesson").length;
            const levelDone = group.nodes.filter(
              (n) => n.type === "lesson" && completedLessons.includes(n.data.id)
            ).length;
            const levelPercent = levelTotal > 0 ? (levelDone / levelTotal) * 100 : 0;

            return (
              <div key={group.level} className="space-y-8">
                {/* Module Section Banner */}
                <div className="glass rounded-2xl p-5 border border-white/10 bg-slate-900/90 shadow-lg relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-black level-${group.level.toLowerCase()} shadow-lg shrink-0`}>
                        {group.level}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground">
                          {locale === "ru" ? modMeta.ru : locale === "ua" ? modMeta.ua : modMeta.en}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {locale === "ru" ? modMeta.descRu : locale === "ua" ? modMeta.descUa : modMeta.descEn}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <span className="text-xs font-bold text-blue-400 block">
                          {levelDone}/{levelTotal} {locale === "ua" ? "уроків" : locale === "ru" ? "уроков" : "lessons"}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {Math.round(levelPercent)}% {locale === "ua" ? "завершено" : locale === "ru" ? "завершено" : "completed"}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {levelPercent === 100 ? (
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <span className="text-xs font-bold text-muted-foreground">{group.level}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nodes on Serpentine Path inside Module */}
                <div className="relative flex flex-col items-center gap-20 py-4">
                  {group.nodes.map((item) => {
                    const gIdx = item.globalIndex;
                    const xPosPct = xPositions[gIdx % xPositions.length];
                    const status = getNodeStatus(item);
                    const isExam = item.type === "exam";

                    // Connection to next node across entire list
                    const nextNode = allNodesFlat[gIdx + 1];
                    const nextXPosPct = nextNode ? xPositions[(gIdx + 1) % xPositions.length] : 50;

                    return (
                      <div
                        key={isExam ? `exam-${item.level}` : item.data.id}
                        className="relative w-full flex flex-col items-center justify-center z-10"
                        style={{
                          paddingLeft: `${Math.max(0, xPosPct - 25)}%`,
                          paddingRight: `${Math.max(0, 75 - xPosPct)}%`,
                        }}
                      >
                        {/* Connecting Line to Next Node (Valid SVG viewBox syntax) */}
                        {nextNode && (
                          <div className="absolute top-12 left-0 right-0 h-28 pointer-events-none z-0">
                            <svg
                              className="w-full h-full overflow-visible"
                              viewBox="0 0 100 120"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id={`line-done-${gIdx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#10b981" />
                                  <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                                <linearGradient id={`line-active-${gIdx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#3b82f6" />
                                  <stop offset="100%" stopColor="#8b5cf6" />
                                </linearGradient>
                              </defs>
                              <path
                                d={`M ${xPosPct} 0 C ${xPosPct} 60, ${nextXPosPct} 60, ${nextXPosPct} 120`}
                                fill="none"
                                stroke={
                                  status === "completed"
                                    ? `url(#line-done-${gIdx})`
                                    : status === "current" || status === "unlocked"
                                    ? `url(#line-active-${gIdx})`
                                    : "rgba(148, 163, 184, 0.25)"
                                }
                                strokeWidth="5"
                                vectorEffect="non-scaling-stroke"
                                strokeDasharray={status === "locked" ? "8 6" : status === "current" ? "10 6" : "none"}
                                className={status === "current" ? "animate-dash-flow" : ""}
                              />
                            </svg>
                          </div>
                        )}

                        {/* EXAM CHECKPOINT NODE */}
                        {isExam ? (
                          <div className="flex flex-col items-center group cursor-pointer animate-game-float">
                            <div className="mb-2 px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg border border-amber-300/30 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>
                                {locale === "ua"
                                  ? `Модульний іспит: ${item.level} ➔ ${item.targetLevel}`
                                  : locale === "ru"
                                  ? `Модульный экзамен: ${item.level} ➔ ${item.targetLevel}`
                                  : `Module Exam: ${item.level} ➔ ${item.targetLevel}`}
                              </span>
                            </div>

                            <button
                              onClick={() => {
                                if (status === "locked") {
                                  toast.error(
                                    locale === "ua"
                                      ? `Іспит заблоковано. Пройдіть уроки модуля ${item.level}!`
                                      : locale === "ru"
                                      ? `Экзамен заблокирован. Пройдите уроки модуля ${item.level}!`
                                      : `Exam is locked. Complete ${item.level} module lessons first!`
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
                                  : "bg-slate-800/90 border-slate-700 text-slate-400 opacity-60"
                              }`}
                            >
                              <Castle className="w-10 h-10 mb-1 drop-shadow-md" />
                              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                                {status === "completed"
                                  ? locale === "ua" ? "Складено" : locale === "ru" ? "Сдано" : "Passed"
                                  : locale === "ua" ? "Іспит" : locale === "ru" ? "Экзамен" : "Exam"}
                              </span>

                              {status === "completed" && (
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 text-white border-2 border-white flex items-center justify-center shadow-md">
                                  <CheckCircle2 className="w-4 h-4" />
                                </div>
                              )}
                              {status === "locked" && (
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-900 text-slate-400 border border-slate-700 flex items-center justify-center shadow-md">
                                  <Lock className="w-3.5 h-3.5" />
                                </div>
                              )}
                            </button>
                          </div>
                        ) : (
                          /* LESSON ISLAND NODE */
                          <div className="flex flex-col items-center relative group">
                            {/* Floating Active Badge */}
                            {status === "current" && (
                              <div className="absolute -top-12 z-20 flex flex-col items-center animate-game-float">
                                <div className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg border border-white/20 flex items-center gap-1">
                                  <Zap className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                                  <span>
                                    {locale === "ua" ? "ПОТОЧНИЙ" : locale === "ru" ? "ТЕКУЩИЙ" : "ACTIVE"}
                                  </span>
                                </div>
                                <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-blue-500" />
                              </div>
                            )}

                            {/* Node Button */}
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
                              {(() => {
                                const IconComp = typeIcons[item.data.type] || BookOpen;
                                return <IconComp className="w-8 h-8 drop-shadow-md" />;
                              })()}

                              <span className="text-[10px] font-black mt-0.5">
                                #{item.indexInLevel}
                              </span>

                              {status === "completed" && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-amber-400 text-gray-900 border-2 border-white flex items-center justify-center shadow-md font-bold text-[10px]">
                                  ★
                                </div>
                              )}
                              {status === "locked" && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-slate-400 border border-slate-700 flex items-center justify-center shadow-md">
                                  <Lock className="w-3 h-3" />
                                </div>
                              )}
                            </button>

                            {/* Title preview under node */}
                            <div className="mt-2 text-center max-w-[150px]">
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
              </div>
            );
          })}
        </div>

        {/* Selected Lesson Popup Drawer / Card */}
        {selectedLesson && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-slide-up">
            <div className="glass rounded-3xl p-5 border border-white/20 shadow-2xl bg-slate-950/90 backdrop-blur-xl text-white relative">
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
                        {locale === "ua" ? "Пройдено" : locale === "ru" ? "Пройдено" : "Done"}
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
                      ? locale === "ua" ? "Повторити урок" : locale === "ru" ? "Повторить урок" : "Review Lesson"
                      : locale === "ua" ? "Розпочати урок" : locale === "ru" ? "Начать урок" : "Start Lesson"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
