"use client";

import { useId, useState } from "react";
import { Workbook } from "./Workbook";
import { getLocalizedText, lessonsData } from "@/lib/lessons-data";
import { getWorkbook, theoryWorkbooks } from "@/lib/workbook";

export function TheoryWorkbook({ category, locale }: { category: string; locale: string }) {
  const id = useId();
  const topics = (theoryWorkbooks[category] ?? []).map((lessonId) => lessonsData.find((lesson) => lesson.id === lessonId)!);
  const [selected, setSelected] = useState(topics[0]?.id ?? "");
  const [generated, setGenerated] = useState<{ id: string; run: number; data: ReturnType<typeof getWorkbook> }>();
  const t = (en: string, ru: string, ua: string) => getLocalizedText({ en, ru, ua }, locale);

  if (topics.length === 0) return null;

  const generate = () => {
    const data = getWorkbook(selected);
    const rows = [...data.rows];
    for (let index = rows.length - 1; index > 0; index--) {
      const other = Math.floor(Math.random() * (index + 1));
      [rows[index], rows[other]] = [rows[other], rows[index]];
    }
    setGenerated({ id: selected, run: (generated?.run ?? 0) + 1, data: { ...data, rows } });
  };

  return (
    <section aria-labelledby={id} className="border-t border-[var(--ref-line)] pt-6">
      <h2 id={id}>{t("Generate theory exercises", "Генератор заданий по теории", "Генератор завдань з теорії")}</h2>
      <form onSubmit={(event) => { event.preventDefault(); generate(); }}>
        <label className="max-w-xl">
          {t("Practice topic", "Тема практики", "Тема практики")}
          <select value={selected} onChange={(event) => setSelected(event.target.value)}>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>{topic.level} · {getLocalizedText(topic.title, locale)}</option>
            ))}
          </select>
        </label>
        <button className="btn" type="submit">{t("Generate 3 exercises", "Собрать 3 задания", "Зібрати 3 завдання")}</button>
      </form>
      <p role="status">{generated && t(
        `Exercises ready · ${getLocalizedText(topics.find((topic) => topic.id === generated.id)?.title, locale)}`,
        `Задания готовы · ${getLocalizedText(topics.find((topic) => topic.id === generated.id)?.title, locale)}`,
        `Завдання готові · ${getLocalizedText(topics.find((topic) => topic.id === generated.id)?.title, locale)}`,
      )}</p>
      {generated && <Workbook key={generated.run} data={generated.data} locale={locale} />}
    </section>
  );
}
