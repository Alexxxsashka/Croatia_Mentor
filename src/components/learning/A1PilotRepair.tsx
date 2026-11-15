"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getLocalizedText } from "@/lib/lessons-data";
import { pilotLessons, pilotText, type PilotId, type PilotProgress } from "@/lib/a1-pilot";

const drills: Record<PilotId, [string, string][]> = {
  "a1-grammar-2": [["Ja ___ Dora. (biti)", "sam"], ["Dolazim ___ Portugala.", "iz"]],
  "a1-reading-1": [["Jednu ___, molim. (kava)", "kavu"], ["Molim vas, ___. (bill / счёт / рахунок)", "račun"]],
  "a1-grammar-3": [["___ košta karta?", "Koliko"], ["Jednu ___ za Split, molim. (karta)", "kartu"]],
};

function RepairDrill({ item, locale }: { item: [string, string]; locale: string }) {
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const t = (en: string, ru: string, ua: string) => pilotText(locale, en, ru, ua);
  return <form className="border-t border-[var(--ref-line)] py-3" onSubmit={(event) => {
    event.preventDefault();
    setChecked(true);
  }}>
    <label className="max-w-md">
      <span lang="hr">{item[0]}</span>
      <input lang="hr" value={answer} required onChange={(event) => { setAnswer(event.target.value); setChecked(false); }} autoComplete="off" />
    </label>
    <button className="btn secondary" disabled={!answer.trim()}>{t("Check answer", "Проверить ответ", "Перевірити відповідь")}</button>
    {checked && <p role="status">{answer.trim().toLocaleLowerCase("hr") === item[1].toLocaleLowerCase("hr")
      ? t("Correct", "Верно", "Правильно") : <>{t("Expected form", "Нужная форма", "Потрібна форма")} · <strong lang="hr">{item[1]}</strong></>}</p>}
  </form>;
}

export function A1PilotRepair({ locale }: { locale: string }) {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState<{ userId: string; skills: PilotProgress[] }>();
  const [failed, setFailed] = useState(false);
  const [reload, setReload] = useState(0);
  const t = (en: string, ru: string, ua: string) => pilotText(locale, en, ru, ua);
  const errors = loaded?.userId === userId ? loaded?.skills.filter((skill) => skill.needsPractice) : undefined;

  useEffect(() => {
    if (!open || !userId) return;
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
  }, [userId, open, reload]);

  if (!userId) return null;

  return <section id="a1-repair" className="panel my-6 scroll-mt-32" aria-labelledby="repair-heading">
    <h2 id="repair-heading">{t("Review my mistakes", "Разобрать мои ошибки", "Розібрати мої помилки")}</h2>
    <p>{t("Practise the constructions you missed in the A1 pilot.", "Потренируйте конструкции, в которых ошиблись в пилоте A1.", "Потренуйте конструкції, у яких помилилися в пілоті A1.")}</p>
    {!open && <button type="button" className="btn" onClick={() => setOpen(true)}>{t("Find exercises", "Подобрать упражнения", "Підібрати вправи")}</button>}
    {open && !errors && !failed && <p role="status">{t("Loading…", "Загружаем…", "Завантажуємо…")}</p>}
    {failed && <div role="alert">
      <p>{t("Could not load your mistakes.", "Не удалось загрузить ошибки.", "Не вдалося завантажити помилки.")}</p>
      <button type="button" className="btn secondary" onClick={() => { setFailed(false); setReload((value) => value + 1); }}>{t("Retry", "Повторить", "Повторити")}</button>
    </div>}
    {errors?.length === 0 && <p role="status">{t("There are no pilot mistakes to review.", "Сейчас нет ошибок из пилота для разбора.", "Зараз немає помилок із пілоту для розбору.")}</p>}
    {errors?.map(({ lessonId, lastMisses }) => <div key={lessonId} className="my-5">
      <h3>{getLocalizedText(pilotLessons[lessonId].title, locale)}</h3>
      {lastMisses.map((index) => <RepairDrill key={index} item={drills[lessonId][index]} locale={locale} />)}
    </div>)}
  </section>;
}
