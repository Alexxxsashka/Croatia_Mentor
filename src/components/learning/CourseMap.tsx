"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { courseLevels, courseMap, courseSkills, skillNames, type CourseLevel, type CourseSkill } from "@/lib/course-map";
import { getLocalizedText, type LocalizedString } from "@/lib/lessons-data";
import { listeningData } from "@/lib/listening-data";
import { readingTexts } from "@/lib/reading-data";

const skillPractice: Record<CourseSkill, LocalizedString> = {
  reading: { en: "Read the text and answer the questions about it.", ru: "Прочитайте текст и ответьте на вопросы по нему.", ua: "Прочитайте текст і дайте відповіді на запитання до нього." },
  listening: { en: "Open Dictation, listen and write what you heard.", ru: "Откройте «Диктант», прослушайте и запишите услышанное.", ua: "Відкрийте «Диктант», прослухайте й запишіть почуте." },
  writing: { en: "Write your answers, then compare them with the models.", ru: "Запишите ответы и сравните их с образцами.", ua: "Запишіть відповіді й порівняйте їх зі зразками." },
  speaking: { en: "Practise pronunciation in a Croatian translation or dictation question.", ru: "Потренируйте произношение в задании с переводом на хорватский или диктантом.", ua: "Потренуйте вимову в завданні з перекладом хорватською або диктантом." },
  grammar: { en: "Read the rule, then apply it in the workbook.", ru: "Прочитайте правило и примените его в упражнениях.", ua: "Прочитайте правило й застосуйте його у вправах." },
  vocabulary: { en: "Open the topic vocabulary and save phrases to review.", ru: "Откройте слова по теме и сохраните нужные для повторения.", ua: "Відкрийте слова за темою й збережіть потрібні для повторення." },
};

export function CourseMap({ userLevel, completedLessons, catalogLevel }: {
  userLevel: string;
  completedLessons: string[];
  catalogLevel: string;
}) {
  const locale = useLocale();
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>();
  const [skill, setSkill] = useState<CourseSkill | "all">("all");
  const t = (en: string, ru: string, ua: string) => getLocalizedText({ en, ru, ua }, locale);
  const activeLevel = courseLevels.find((item) => item === userLevel) ?? "A1";
  const level = selectedLevel ?? courseLevels.find((item) => item === catalogLevel) ?? activeLevel;
  const locked = courseLevels.indexOf(level) > courseLevels.indexOf(activeLevel);
  const lessons = courseMap.filter((item) => item.level === level && (skill === "all" || item.skills.includes(skill)));
  const reading = skill === "all" || skill === "reading" ? readingTexts.filter((item) => item.level === level) : [];
  const listening = skill === "all" || skill === "listening" ? listeningData.filter((item) => item.level === level) : [];
  const resources = [
    ...reading.map((item) => ({ id: item.id, title: item.title, href: `/games/reading?id=${encodeURIComponent(item.id)}`, skill: "reading" as const })),
    ...listening.map((item) => ({ id: item.id, title: item.title, href: `/games/listening?id=${encodeURIComponent(item.id)}`, skill: "listening" as const })),
  ];
  const titleById = (id: string) => getLocalizedText(courseMap.find((item) => item.id === id)?.title, locale);
  const field = (label: string, value: string | LocalizedString) => <div>
    <dt className="font-semibold">{label}</dt><dd>{getLocalizedText(value, locale)}</dd>
  </div>;

  return (
    <section id="skills-map" className="panel my-8 scroll-mt-8" aria-labelledby="skills-map-heading">
      <span id="a1-map" className="block scroll-mt-8" aria-hidden="true" />
      <h2 id="skills-map-heading">{t("Skills map", "Карта навыков", "Карта навичок")}</h2>
      <div className="grid gap-x-4 sm:grid-cols-2 max-w-xl">
        <label>
          {t("Course level", "Уровень курса", "Рівень курсу")}
          <select value={level} onChange={(event) => setSelectedLevel(event.target.value as CourseLevel)}>
            {courseLevels.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          {t("Skill", "Навык", "Навичка")}
          <select value={skill} onChange={(event) => setSkill(event.target.value as CourseSkill | "all")}>
            <option value="all">{t("All skills", "Все навыки", "Усі навички")}</option>
            {courseSkills.map((item) => <option key={item} value={item}>{getLocalizedText(skillNames[item], locale)}</option>)}
          </select>
        </label>
      </div>
      <p role="status">{level} · {t("Lessons", "Уроки", "Уроки")}: {lessons.length} · {t("Extra practice", "Дополнительная практика", "Додаткова практика")}: {resources.length}</p>
      {locked && lessons.length > 0 && <p>{t("Complete the preceding levels to open these lessons.", "Пройдите предыдущие уровни, чтобы открыть эти уроки.", "Пройдіть попередні рівні, щоб відкрити ці уроки.")}</p>}
      <ul className="divide-y divide-[var(--ref-line)]">
        {lessons.map((item) => (
          <li key={item.id}>
            <details>
              <summary className="gap-3">
                <span>{getLocalizedText(item.title, locale)}</span>
                <span className="text-sm muted shrink-0">{completedLessons.includes(item.id) ? t("Completed", "Пройдено", "Пройдено") : <span aria-hidden="true">+</span>}</span>
              </summary>
              <ul className="flex flex-wrap gap-2 my-4">
                {item.skills.map((id) => <li key={id} className="tag">{getLocalizedText(skillNames[id], locale)}</li>)}
              </ul>
              <dl className="grid gap-3 text-sm sm:grid-cols-2">
                {field(t("Goal", "Цель", "Мета"), item.goal)}
                {item.ready && field(t("Before the lesson", "До урока", "До уроку"), item.ready)}
                {!item.ready && item.previous && field(t("Recommended preparation", "Что повторить перед уроком", "Що повторити перед уроком"), titleById(item.previous))}
                {item.reuse && field(t("Use again", "Где пригодится снова", "Де знадобиться знову"), item.reuse)}
                {!item.reuse && item.next && field(t("Next on the route", "Дальше по маршруту", "Далі за маршрутом"), titleById(item.next))}
                {field(t("How to check", "Как проверить себя", "Як перевірити себе"), item.check)}
              </dl>
              {skill !== "all" && <p className="text-sm">{getLocalizedText(skillPractice[skill], locale)}</p>}
              {!locked && <Link href={skill === "listening" || skill === "writing" || skill === "vocabulary" ? `/lessons/${item.id}#lesson-workbook` : skill === "speaking" ? `/lessons/${item.id}#lesson-quiz` : item.href} className="btn secondary mt-4">{t("Open lesson", "Открыть урок", "Відкрити урок")}</Link>}
            </details>
          </li>
        ))}
      </ul>
      {resources.length > 0 && <div className="mt-5">
        <h3>{t("Extra practice", "Дополнительная практика", "Додаткова практика")}</h3>
        <ul className="mt-2">
          {resources.map((item) => <li key={item.href}>
            <Link className="text-link" href={item.href}>
              {getLocalizedText(skillNames[item.skill], locale)} · {getLocalizedText(item.title, locale)}
            </Link>
          </li>)}
        </ul>
      </div>}
      {!lessons.length && !resources.length && <p>{t("There are no activities for this skill at the selected level.", "Для этого навыка на выбранном уровне пока нет заданий.", "Для цієї навички на вибраному рівні поки немає завдань.")}</p>}
    </section>
  );
}
