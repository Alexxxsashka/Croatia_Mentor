"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getLocalizedText, lessonsData } from "@/lib/lessons-data";
import { pilotIds, pilotLessons, pilotText, isPilotId } from "@/lib/a1-pilot";

export function A1PilotMap() {
  const locale = useLocale();
  const t = (en: string, ru: string, ua: string) => pilotText(locale, en, ru, ua);
  const baseLessons = lessonsData.filter((lesson) => lesson.level === "A1" && !isPilotId(lesson.id));

  return (
    <section id="a1-map" className="panel my-8 scroll-mt-8" aria-labelledby="a1-map-heading">
      <h2 id="a1-map-heading">{t("A1 skills map", "Карта навыков A1", "Карта навичок A1")}</h2>
      <ol className="grid gap-5 lg:grid-cols-3">
        {pilotIds.map((id) => {
          const lesson = pilotLessons[id];
          return <li key={id} className="border-t border-[var(--ref-line)] pt-3 min-w-0">
            <h3><Link className="text-link" href={`/lessons/${id}#a1-pilot`}>{getLocalizedText(lesson.title, locale)}</Link></h3>
            <dl className="grid gap-2 text-sm">
              {[
                [t("Before the lesson", "До урока", "До уроку"), lesson.ready],
                [t("Skill", "Навык", "Навичка"), lesson.goal],
                [t("Use again", "Где пригодится снова", "Де знадобиться знову"), lesson.reuse],
                [t("Check", "Проверка", "Перевірка"), lesson.check],
              ].map(([label, field]) => <div key={label as string}>
                <dt className="font-semibold">{label as string}</dt><dd>{getLocalizedText(field, locale)}</dd>
              </div>)}
            </dl>
          </li>;
        })}
      </ol>
      <details className="mt-5">
        <summary>{t("Other A1 material", "Другие материалы A1", "Інші матеріали A1")}</summary>
        <ul className="grid gap-1 mt-3 sm:grid-cols-2">
          {baseLessons.map((lesson) => <li key={lesson.id}><Link className="text-link" href={`/lessons/${lesson.id}`}>{getLocalizedText(lesson.title, locale)}</Link></li>)}
        </ul>
        <p>{t("The pilot checks short written responses. A1 listening and speaking checks still need separate coverage.", "Пилот проверяет короткие письменные ответы. Аудирование и устная речь A1 требуют отдельных проверок.", "Пілот перевіряє короткі письмові відповіді. Аудіювання й усне мовлення A1 потребують окремих перевірок.")}</p>
      </details>
    </section>
  );
}
