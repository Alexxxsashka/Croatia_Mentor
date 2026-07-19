"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { glossaryData, type GlossaryCategory, type GlossarySection } from "@/lib/glossary-data";
import { lessonsData } from "@/lib/lessons-data";
import {
  Search,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Volume2,
  GraduationCap,
} from "lucide-react";
import { speakText } from "@/lib/speech";

function getLocalized(obj: { en: string; ru: string; ua: string }, locale: string): string {
  if (locale === "ru") return obj.ru;
  if (locale === "ua") return obj.ua;
  return obj.en;
}

const TRANSLATIONS: Record<string, Record<string, string>> = {
  ua: {
    // Headers
    "Letter": "Літера",
    "Name": "Назва",
    "Sound (IPA)": "Звук (МФА)",
    "Example": "Приклад",
    "Gender": "Рід",
    "Ending": "Закінчення",
    "Translation": "Переклад",
    "Nom. Sing.": "Наз. одн.",
    "Gen. Sing.": "Род. одн.",
    "Gen. Plural": "Род. мн.",
    "Dat. Sing.": "Дав. одн.",
    "Dat. Plural": "Дав. мн.",
    "Acc. Sing.": "Знах. одн.",
    "Rule": "Правило",
    "Instr. Sing.": "Оруд. одн.",
    "Instr. Plural": "Оруд. мн.",
    "Case / Pad": "Відмінок / Pad",
    "Masc. Sing.": "Чол. одн.",
    "Masc. Plur.": "Чол. мн.",
    "Fem. Sing.": "Жін. одн.",
    "Fem. Plur.": "Жін. мн.",
    "Neut. Sing.": "Сер. одн.",
    "Neut. Plur.": "Сер. мн.",
    "Person": "Особа",
    "čitati (read)": "čitati (читати)",
    "govoriti (speak)": "govoriti (говорити)",
    "pisati (write)": "pisati (писати)",
    "Long form": "Повна форма",
    "Short form": "Коротка форма",
    "Negative": "Заперечна форма",
    "Imperfective": "Недоконаний",
    "Perfective": "Доконаний",
    "Verb": "Дієслово",
    "Pronoun": "Займенник",
    "biti (to be)": "biti (бути)",
    "htjeti (to want)": "htjeti (хотіти)",
    "moći (can)": "moći (могти)",
    "morati (must)": "morati (мусити)",
    "ići (to go)": "ići (йти)",
    "Number": "Число / Номер",
    "Croatian": "Хорватська",
    "Masc.": "Чол.",
    "Fem.": "Жін.",
    "Neut.": "Сер.",
    "English": "Англійська",
    "Usage": "Вживання",
    "Case": "Відмінок",
    "Prepositions": "Прийменники",
    "English Meaning": "Значення (англ.)",
    "Examples": "Приклади",
    "Indefinite Ending": "Невизначене закінчення",
    "Definite Ending": "Визначене закінчення",
    "Example (Indefinite)": "Приклад (Невизначене)",
    "Example (Definite)": "Приклад (Визначене)",
    "Imperfective Verb": "Дієслово недоконанного виду",
    "Perfective Verb": "Дієслово доконанного виду",
    "Type of Change": "Тип зміни",
    "Clause Type": "Тип речення",
    "Conjunctions": "Сполучники",
    "Meaning": "Значення",
    "Construction": "Конструкція",
    "Positive (Pozitiv)": "Звичайний ступінь (Pozitiv)",
    "Comparative (Komparativ)": "Вищий ступінь (Komparativ)",
    "Superlative (Superlativ)": "Найвищий ступінь (Superlativ)",
    "Required Case": "Необхідний відмінок",

    // Common cell contents
    "ja (I)": "ja (я)",
    "ti (you)": "ti (ти)",
    "on / ono (he/it)": "on / ono (він / воно)",
    "ona (she)": "ona (вона)",
    "vi (you pl.)": "vi (ви)",
    "oni (they)": "oni (вони)",
    "on/ona/ono (he/she/it)": "on/ona/ono (він/вона/воно)",
    "on/ona/ono": "on/ona/ono (він/вона/воно)",
    "mi (we)": "mi (ми)",
    "vi (you pl./formal)": "vi (ви)",
    "oni/one/ona (they)": "oni/one/ona (вони)",
    "oni/one/ona": "oni/one/ona (вони)",
    "Ø (no ending)": "Ø (без закінчення)",
    "Ø (inanim.) / -a (anim.)": "Ø (неживе) / -a (живе)",
  },
  ru: {
    // Headers
    "Letter": "Буква",
    "Name": "Название",
    "Sound (IPA)": "Звук (МФА)",
    "Example": "Пример",
    "Gender": "Род",
    "Ending": "Окончание",
    "Translation": "Перевод",
    "Nom. Sing.": "Им. ед.",
    "Gen. Sing.": "Род. ед.",
    "Gen. Plural": "Род. мн.",
    "Dat. Sing.": "Дат. ед.",
    "Dat. Plural": "Дат. мн.",
    "Acc. Sing.": "Вин. ед.",
    "Rule": "Правило",
    "Instr. Sing.": "Твор. ед.",
    "Instr. Plural": "Твор. мн.",
    "Case / Pad": "Падеж / Pad",
    "Masc. Sing.": "Муж. ед.",
    "Masc. Plur.": "Муж. мн.",
    "Fem. Sing.": "Жен. ед.",
    "Fem. Plur.": "Жен. мн.",
    "Neut. Sing.": "Ср. ед.",
    "Neut. Plur.": "Ср. мн.",
    "Person": "Лицо",
    "čitati (read)": "čitati (читать)",
    "govoriti (speak)": "govoriti (говорить)",
    "pisati (write)": "pisati (писать)",
    "Long form": "Полная форма",
    "Short form": "Краткая форма",
    "Negative": "Отрицание",
    "Imperfective": "Несовершенный",
    "Perfective": "Совершенный",
    "Verb": "Глагол",
    "Pronoun": "Местоимение",
    "biti (to be)": "biti (быть)",
    "htjeti (to want)": "htjeti (хотеть)",
    "moći (can)": "moći (мочь)",
    "morati (must)": "morati (долженствовать)",
    "ići (to go)": "ići (идти)",
    "Number": "Число / Номер",
    "Croatian": "Хорватский",
    "Masc.": "Муж.",
    "Fem.": "Жен.",
    "Neut.": "Ср.",
    "English": "Английский",
    "Usage": "Употребление",
    "Case": "Падеж",
    "Prepositions": "Предлоги",
    "English Meaning": "Значение (англ.)",
    "Examples": "Примеры",
    "Indefinite Ending": "Неопределенное окончание",
    "Definite Ending": "Определенное окончание",
    "Example (Indefinite)": "Пример (Неопределенное)",
    "Example (Definite)": "Пример (Определенное)",
    "Imperfective Verb": "Глагол несовершенного вида",
    "Perfective Verb": "Глагол совершенного вида",
    "Type of Change": "Тип изменения",
    "Clause Type": "Тип придаточного",
    "Conjunctions": "Союзы",
    "Meaning": "Значение",
    "Construction": "Конструкция",
    "Positive (Pozitiv)": "Положительная степень (Pozitiv)",
    "Comparative (Komparativ)": "Сравнительная степень (Komparativ)",
    "Superlative (Superlativ)": "Превосходная степень (Superlativ)",
    "Required Case": "Необходимый падеж",

    // Common cell contents
    "ja (I)": "ja (я)",
    "ti (you)": "ti (ты)",
    "on / ono (he/it)": "on / ono (он / оно)",
    "ona (she)": "ona (она)",
    "vi (you pl.)": "vi (вы)",
    "oni (they)": "oni (они)",
    "on/ona/ono (he/she/it)": "on/ona/ono (он/она/оно)",
    "on/ona/ono": "on/ona/ono (он/она/оно)",
    "mi (we)": "mi (мы)",
    "vi (you pl./formal)": "vi (вы)",
    "oni/one/ona (they)": "oni/one/ona (они)",
    "oni/one/ona": "oni/one/ona (они)",
    "Ø (no ending)": "Ø (без окончания)",
    "Ø (inanim.) / -a (anim.)": "Ø (неодуш.) / -a (одуш.)",
  }
};

function translateText(text: string, locale: string): string {
  const normLocale = locale.toLowerCase();
  const dict = TRANSLATIONS[normLocale];
  if (dict && dict[text]) {
    return dict[text];
  }
  return text;
}

const LESSON_MAPPING: Record<string, string[]> = {
  cases: ["a1-grammar-5", "a2-grammar-1", "a2-grammar-2", "a2-grammar-5", "a2-grammar-6"],
  verbs: ["a1-grammar-1", "a1-grammar-2", "a1-grammar-4", "a2-grammar-3", "a2-grammar-4", "a2-grammar-8"],
  numbers: ["a1-grammar-3"],
  pronouns_prepositions: ["a1-grammar-6"],
  advanced_grammar: ["a1-grammar-7", "a2-grammar-7"],
  topics: ["a1-reading-1", "a1-dictation-1", "a2-communication-1", "a2-communication-2"]
};

export default function GlossaryPage() {
  const t = useTranslations("glossary");
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>(glossaryData[0]?.id || "");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategory = glossaryData.find((c) => c.id === selectedCategory) || glossaryData[0];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const speakWord = (text: string) => {
    speakText(text);
  };

  // Convert lessons into glossary sections dynamically
  const getMappedSections = (categoryId: string): GlossarySection[] => {
    const lessonIds = LESSON_MAPPING[categoryId] || [];
    const mappedLessons = lessonsData.filter((lesson) => lessonIds.includes(lesson.id));
    return mappedLessons.map((lesson) => {
      const subsections = (lesson.content.sections || []).map((sec: any) => {
        let examples = undefined;
        if (sec.examples) {
          examples = sec.examples.map((ex: any) => {
            const hr = ex.hr || ex.en || '';
            const translation = ex.translation || {
              en: ex.en || '',
              ru: ex.ru || '',
              ua: ex.ua || ''
            };
            return { hr, translation };
          });
        }
        return {
          title: sec.title,
          text: sec.text,
          examples
        };
      });

      const getLocalizedTitle = (titleObj: any): { en: string; ru: string; ua: string } => {
        if (!titleObj) return { en: '', ru: '', ua: '' };
        if (typeof titleObj === 'string') {
          return { en: titleObj, ru: titleObj, ua: titleObj };
        }
        return {
          en: titleObj.en || '',
          ru: titleObj.ru || '',
          ua: titleObj.ua || ''
        };
      };

      const titleLoc = getLocalizedTitle(lesson.title);

      return {
        id: lesson.id,
        title: {
          en: titleLoc.en,
          ru: titleLoc.ru,
          ua: titleLoc.ua
        },
        icon: "📖",
        subsections
      };
    });
  };

  const baseSections = activeCategory.sections;
  const mappedSections = getMappedSections(activeCategory.id);
  const allSections = [...baseSections, ...mappedSections];

  // Filter sections based on search
  const filteredSections = (() => {
    if (!searchQuery.trim()) return allSections;
    const q = searchQuery.toLowerCase();
    return allSections.filter((section) => {
      const titleMatch = getLocalized(section.title, locale).toLowerCase().includes(q);
      const subsectionMatch = section.subsections.some((sub) => {
        const subTitle = getLocalized(sub.title, locale).toLowerCase().includes(q);
        const subText = getLocalized(sub.text, locale).toLowerCase().includes(q);
        const exMatch = sub.examples?.some(
          (ex) =>
            ex.hr.toLowerCase().includes(q) ||
            getLocalized(ex.translation, locale).toLowerCase().includes(q)
        );
        return subTitle || subText || exMatch;
      });
      return titleMatch || subsectionMatch;
    });
  })();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 shadow-2xl shadow-indigo-500/25">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold">
          <span className="gradient-text">{t("title")}</span>
        </h1>
        <p className="text-muted-foreground mt-2 max-w-lg mx-auto">{t("subtitle")}</p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-8 animate-slide-up">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 pl-12 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 transition-colors"
          />
          <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-3.5" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar: Categories */}
        <aside className="lg:w-64 shrink-0">
          <nav className="glass rounded-2xl p-3 lg:sticky lg:top-24 space-y-1">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
              {t("categories")}
            </h3>
            {glossaryData.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setExpandedSections(new Set());
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                  selectedCategory === category.id
                    ? "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="truncate">{getLocalized(category.title, locale)}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 space-y-4 stagger-children">
          {filteredSections.length === 0 ? (
            <div className="text-center py-16 glass rounded-2xl">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">{t("noResults")}</p>
            </div>
          ) : (
            filteredSections.map((section) => (
              <div key={section.id} className="glass rounded-2xl overflow-hidden">
                {/* Section header (collapsible) */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center gap-3 p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl">{section.icon}</span>
                  <h2 className="text-lg font-bold flex-1">
                    {getLocalized(section.title, locale)}
                  </h2>
                  {expandedSections.has(section.id) ? (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                {/* Section content */}
                {expandedSections.has(section.id) && (
                  <div className="px-5 pb-5 space-y-6 border-t border-white/5 pt-4 animate-fade-in">
                    {section.subsections.map((sub, subIdx) => (
                      <div key={subIdx} className="space-y-3">
                        <h3 className="font-semibold text-blue-400 text-sm uppercase tracking-wider">
                          {getLocalized(sub.title, locale)}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                          {getLocalized(sub.text, locale)}
                        </p>

                        {/* Table */}
                        {sub.table && (
                          <div className="overflow-x-auto mt-3">
                            <table className="w-full text-sm border-collapse">
                              <thead>
                                <tr>
                                  {sub.table.headers.map((h, i) => (
                                    <th
                                      key={i}
                                      className="text-left px-3 py-2 border-b border-white/10 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-white/5"
                                    >
                                      {typeof h === "string" ? translateText(h, locale) : getLocalized(h, locale)}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {sub.table.rows.map((row, ri) => (
                                  <tr
                                    key={ri}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                  >
                                    {row.cells.map((cell, ci) => (
                                      <td key={ci} className="px-3 py-2 text-foreground">
                                        {typeof cell === "string" ? translateText(cell, locale) : getLocalized(cell, locale)}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* Examples */}
                        {sub.examples && sub.examples.length > 0 && (
                          <div className="space-y-2 mt-3">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                              {t("examples")}:
                            </span>
                            {sub.examples.map((ex, ei) => (
                              <div
                                key={ei}
                                className="pl-4 border-l-2 border-blue-500/30 py-2 flex items-start gap-2"
                              >
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-foreground">{ex.hr}</p>
                                  <p className="text-xs text-muted-foreground mt-0.5">
                                    {getLocalized(ex.translation, locale)}
                                  </p>
                                </div>
                                <button
                                  onClick={() => speakWord(ex.hr)}
                                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors shrink-0"
                                  title="Listen"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {subIdx < section.subsections.length - 1 && (
                          <hr className="border-white/5 mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
}
