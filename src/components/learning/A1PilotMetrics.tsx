"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { getLocalizedText } from "@/lib/lessons-data";
import { pilotLessons, pilotText, type PilotId } from "@/lib/a1-pilot";

type Metric = {
  lessonId: PilotId;
  started: number;
  submitted: number;
  ready: number;
  due: number;
  returned: number;
  reviewed: number;
  passedFirstReview: number;
  confirmed: number;
};

export function A1PilotMetrics() {
  const locale = useLocale();
  const [metrics, setMetrics] = useState<Metric[]>();
  const [failed, setFailed] = useState(false);
  const [reload, setReload] = useState(0);
  const t = (en: string, ru: string, ua: string) => pilotText(locale, en, ru, ua);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/a1-pilot?metrics", { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error();
        const { metrics } = await res.json() as { metrics: Metric[] };
        setMetrics(metrics);
      })
      .catch(() => {
        if (!controller.signal.aborted) setFailed(true);
      });
    return () => controller.abort();
  }, [reload]);

  return <section className="panel my-6" aria-labelledby="a1-metrics">
    <h2 id="a1-metrics">{t("A1 pilot results", "Результаты пилота A1", "Результати пілоту A1")}</h2>
    {failed && <div role="alert">
      <p>{t("Could not load pilot results.", "Не удалось загрузить результаты пилота.", "Не вдалося завантажити результати пілоту.")}</p>
      <button type="button" className="btn secondary" onClick={() => { setFailed(false); setReload((n) => n + 1); }}>{t("Retry", "Повторить", "Повторити")}</button>
    </div>}
    {!metrics && !failed && <p role="status">{t("Loading…", "Загружаем…", "Завантажуємо…")}</p>}
    <div className="grid gap-5 lg:grid-cols-3">
      {metrics?.map((row) => <section key={row.lessonId} className="border-t border-[var(--ref-line)] pt-3">
        <h3>{getLocalizedText(pilotLessons[row.lessonId].title, locale)}</h3>
        <dl className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2 text-sm">
          <dt>{t("Started / submitted", "Начали / отправили ответ", "Почали / надіслали відповідь")}</dt><dd>{row.started} / {row.submitted}</dd>
          <dt>{t("Passed the initial task", "Прошли первую проверку", "Пройшли першу перевірку")}</dt><dd>{row.ready}</dd>
          <dt>{t("Seven-day check due", "Наступил срок проверки", "Настав час перевірки")}</dt><dd>{row.due}</dd>
          <dt>{t("Opened / submitted the check", "Открыли / отправили проверку", "Відкрили / надіслали перевірку")}</dt><dd>{row.returned} / {row.reviewed}</dd>
          <dt>{t("Passed first time / due", "Справились сразу / наступил срок", "Впоралися одразу / настав час")}</dt>
          <dd>{row.due ? `${row.passedFirstReview}/${row.due} (${Math.round(row.passedFirstReview / row.due * 100)}%)` : "—"}</dd>
          <dt>{t("Confirmed after any check", "Закрепили с учётом повторов", "Закріпили з урахуванням повторів")}</dt><dd>{row.confirmed}</dd>
        </dl>
      </section>)}
    </div>
  </section>;
}
