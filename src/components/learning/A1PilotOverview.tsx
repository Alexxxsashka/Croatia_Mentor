"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getLocalizedText } from "@/lib/lessons-data";
import { pilotIds, pilotLessons, pilotStatuses, pilotText, type PilotProgress } from "@/lib/a1-pilot";

export function A1PilotOverview() {
  const locale = useLocale();
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [loaded, setLoaded] = useState<{ userId: string; skills: PilotProgress[] }>();
  const [failed, setFailed] = useState(false);
  const [reload, setReload] = useState(0);
  const skills = loaded?.userId === userId ? loaded?.skills : undefined;
  const t = (en: string, ru: string, ua: string) => pilotText(locale, en, ru, ua);

  useEffect(() => {
    if (!userId) return;
    const controller = new AbortController();
    fetch("/api/a1-pilot", { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error();
        const { skills } = await res.json() as { skills: PilotProgress[] };
        setLoaded({ userId, skills });
      })
      .catch(() => {
        if (!controller.signal.aborted) setFailed(true);
      });
    return () => controller.abort();
  }, [userId, reload]);

  if (!userId) return null;

  const next = pilotIds.find((id) => {
    const skill = skills?.find((item) => item.lessonId === id);
    return !skill || skill.status === "working";
  });
  const due = skills?.filter((item) => item.due);

  return (
    <section className="panel my-6" aria-labelledby="a1-overview">
      <h2 id="a1-overview">{t("A1 · Everyday conversations", "A1 · Разговоры на каждый день", "A1 · Розмови на щодень")}</h2>
      {failed && <div role="alert">
        <p>{t("Could not load your skills.", "Не удалось загрузить навыки.", "Не вдалося завантажити навички.")}</p>
        <button type="button" className="btn secondary" onClick={() => { setFailed(false); setReload((value) => value + 1); }}>
          {t("Retry", "Повторить", "Повторити")}
        </button>
      </div>}
      {!skills && !failed && <p role="status">{t("Loading your skills…", "Загружаем навыки…", "Завантажуємо навички…")}</p>}
      {skills && <>
        <ul className="divide-y divide-[var(--ref-line)]">
          {pilotIds.map((id) => {
            const skill = skills.find((item) => item.lessonId === id);
            const repeat = due?.some((item) => item.lessonId === id);
            return <li key={id} className="flex flex-wrap justify-between items-center gap-3 py-3">
              <div>
                <strong>{getLocalizedText(pilotLessons[id].title, locale)}</strong>
                <div className="text-sm muted">
                  {skill ? getLocalizedText(pilotStatuses[skill.status], locale) : t("To start", "Предстоит", "Попереду")}
                </div>
              </div>
              {repeat && <Link className="btn secondary" href={`/lessons/${id}#a1-pilot`}>{t("Review today", "Повторить сегодня", "Повторити сьогодні")}</Link>}
            </li>;
          })}
        </ul>
        <div className="flex flex-wrap gap-3 mt-5">
          {next && <Link className="btn" href={`/lessons/${next}#a1-pilot`}>
            {skills.some((skill) => skill.lessonId === next) ? t("Continue lesson", "Продолжить урок", "Продовжити урок")
              : t("Start next lesson", "Начать следующий урок", "Почати наступний урок")}
          </Link>}
          <Link className="text-link" href="/lessons?level=A1#skills-map">{t("View the skills map", "Открыть карту навыков", "Відкрити карту навичок")}</Link>
        </div>
      </>}
    </section>
  );
}
