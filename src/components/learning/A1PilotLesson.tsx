"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { getLocalizedText } from "@/lib/lessons-data";
import { pilotIds, pilotLessons, pilotStatuses, pilotText, type PilotFeedback, type PilotId, type PilotProgress, type PilotTask } from "@/lib/a1-pilot";
import { speakText } from "@/lib/speech";
import { Link } from "@/i18n/navigation";

type LessonState = {
  progress: PilotProgress | null;
  task: PilotTask | null;
  feedback?: PilotFeedback;
};

export function A1PilotLesson({ lessonId, locale }: { lessonId: PilotId; locale: string }) {
  const lesson = pilotLessons[lessonId];
  const next = pilotIds[pilotIds.indexOf(lessonId) + 1];
  const t = (en: string, ru: string, ua: string) => pilotText(locale, en, ru, ua);
  const l = (field: Parameters<typeof getLocalizedText>[0]) => getLocalizedText(field, locale);
  const [state, setState] = useState<LessonState>();
  const [answers, setAnswers] = useState(["", ""]);
  const [showTask, setShowTask] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [reload, setReload] = useState(0);
  const taskHeading = useRef<HTMLHeadingElement>(null);
  const feedbackHeading = useRef<HTMLHeadingElement>(null);
  const player = useRef<ReturnType<typeof speakText> | null>(null);
  const task = state?.task;
  const progress = state?.progress;
  const feedback = state?.feedback;
  const needsRepair = Boolean(progress?.needsPractice && !showTask);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/a1-pilot?lesson=${lessonId}`, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error();
        setState(await res.json());
      })
      .catch(() => {
        if (!controller.signal.aborted) setError(true);
      });
    return () => controller.abort();
  }, [lessonId, reload]);

  useEffect(() => () => player.current?.stop(), []);

  useEffect(() => {
    if (feedback) feedbackHeading.current?.focus();
    else if (showTask && task) taskHeading.current?.focus();
  }, [feedback, showTask, task]);

  async function send(body: { action: "start" | "openReview" } | { action: "submit"; attempt: string; answers: string[] }) {
    setBusy(true);
    setError(false);
    try {
      const res = await fetch("/api/a1-pilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, lessonId }),
      });
      if (!res.ok) throw new Error();
      const data: LessonState = await res.json();
      setState(data);
      setAnswers(["", ""]);
      setShowTask(body.action !== "submit");
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (task && !busy) void send({ action: "submit", attempt: task.attempt, answers });
  }

  function openTask() {
    if (task?.review) {
      void send({ action: "openReview" });
      return;
    }
    if (state) setState({ ...state, feedback: undefined });
    setShowTask(true);
  }

  const isWaiting = progress?.status === "ready" && !task && !progress.needsPractice;
  const retryLabel = t("Try a new situation", "Попробовать новую ситуацию", "Спробувати нову ситуацію");

  return (
    <section id="a1-pilot" aria-labelledby="pilot-heading" className="panel my-8 scroll-mt-8">
      <h2 id="pilot-heading">{l(lesson.title)}</h2>
      <p>{l(lesson.goal)}</p>
      {!showTask && <div className="mb-5">
        <p>{l(lesson.repair.question)}</p>
        <button type="button" className="btn secondary" onClick={() => {
          player.current?.stop();
          setAudioError(false);
          player.current = speakText(lesson.dialogue.join("\n"), { onError: () => setAudioError(true) });
        }}>{t("Listen to the dialogue", "Прослушать диалог", "Прослухати діалог")}</button>
        {audioError && <p role="status">{t("Audio unavailable. You can read the dialogue above.", "Аудио недоступно. Диалог можно прочитать выше.", "Аудіо недоступне. Діалог можна прочитати вище.")}</p>}
        <details className="mt-3">
          <summary>{t("Read the model dialogue", "Прочитать пример диалога", "Прочитати зразок діалогу")}</summary>
          <ol className="my-4 space-y-2" lang="hr">{lesson.dialogue.map((line) => <li key={line}>{line}</li>)}</ol>
        </details>
        <div><a className="text-link" href="#lesson-workbook">{t("Open lesson practice", "Открыть упражнения урока", "Відкрити вправи уроку")}</a></div>
      </div>}

      {progress && <p role="status"><strong>{l(pilotStatuses[progress.status])}</strong></p>}
      {!state && !error && <p role="status">{t("Loading progress…", "Загружаем прогресс…", "Завантажуємо прогрес…")}</p>}

      {feedback && (
        <h3 ref={feedbackHeading} tabIndex={-1}>
          {feedback.passed
            ? feedback.review ? t("Skill confirmed in a new situation", "Навык закреплён в новой ситуации", "Навичку закріплено в новій ситуації")
              : t("You completed the task on your own", "Вы самостоятельно справились с заданием", "Ви самостійно виконали завдання")
            : t("Review your answer", "Разберите свой ответ", "Розберіть свою відповідь")}
        </h3>
      )}

      {needsRepair && (
        <div className="border-t border-[var(--ref-line)] pt-4 mb-5">
          {!feedback && <h3>{t("Review before trying again", "Разбор перед новой попыткой", "Розбір перед новою спробою")}</h3>}
          <ul className="list-disc ps-5 mt-3">
            {progress?.lastMisses.map((index) => <li key={index}>{l(lesson.repair.hints[index])}</li>)}
          </ul>
          <p lang="hr"><strong>{lesson.repair.model}</strong></p>
          <Link className="text-link" href="/grammar#a1-repair">{t("Practise this construction", "Потренировать конструкцию", "Потренувати конструкцію")}</Link>
        </div>
      )}

      {isWaiting && progress.dueAt && (
        <p>{t("A new task will be available on", "Новая проверка будет доступна", "Нова перевірка буде доступна")}{" "}
          <time dateTime={progress.dueAt}>{new Intl.DateTimeFormat(locale === "ua" ? "uk" : locale, { dateStyle: "long", timeStyle: "short" }).format(new Date(progress.dueAt))}</time>.
        </p>
      )}

      {state && !progress && (
        <button type="button" className="btn" disabled={busy} onClick={() => void send({ action: "start" })}>
          {t("Start independent task", "Начать самостоятельное задание", "Почати самостійне завдання")}
        </button>
      )}

      {task && !showTask && (
        <button type="button" className="btn" disabled={busy} onClick={openTask}>
          {needsRepair ? retryLabel : task.review ? t("Take the seven-day check", "Пройти проверку через неделю", "Пройти перевірку через тиждень")
            : t("Continue independent task", "Продолжить самостоятельное задание", "Продовжити самостійне завдання")}
        </button>
      )}

      {task && showTask && (
        <form onSubmit={submit} className="border-t border-[var(--ref-line)] pt-4">
          <h3 ref={taskHeading} tabIndex={-1}>{task.review
            ? t("Seven-day check", "Проверка через неделю", "Перевірка через тиждень")
            : t("Independent task", "Самостоятельное задание", "Самостійне завдання")}</h3>
          <p>{l(task.scenario)}</p>
          {task.criteria.map((criterion, index) => (
            <label key={index}>
              {l(criterion)}
              <input
                lang="hr"
                spellCheck={false}
                autoComplete="off"
                value={answers[index]}
                required
                maxLength={400}
                onChange={(event) => {
                  const value = event.target.value;
                  setAnswers((previous) => previous.map((answer, i) => index === i ? value : answer));
                }}
              />
            </label>
          ))}
          <button className="btn" disabled={busy || answers.some((answer) => !answer.trim())}>
            {busy ? t("Checking…", "Проверяем…", "Перевіряємо…") : t("Check my answer", "Проверить ответ", "Перевірити відповідь")}
          </button>
        </form>
      )}

      {progress && !task && !isWaiting && progress.status !== "confirmed" && (
        <p>{t("All fresh variants have been used. Review the lesson material.", "Все новые варианты использованы. Повторите материал урока.", "Усі нові варіанти використано. Повторіть матеріал уроку.")}</p>
      )}

      {error && (
        <div role="alert">
          <p>{t("Could not sync your progress. Try again or reload the lesson.", "Не удалось синхронизировать прогресс. Повторите действие или обновите урок.", "Не вдалося синхронізувати прогрес. Повторіть дію або оновіть урок.")}</p>
          <button type="button" className="btn secondary" onClick={() => { setError(false); setShowTask(false); setReload((value) => value + 1); }}>
            {t("Reload progress", "Обновить прогресс", "Оновити прогрес")}
          </button>
        </div>
      )}

      {next && progress?.status !== "working" && progress && (
        <div className="mt-5"><Link className="text-link" href={`/lessons/${next}#a1-pilot`}>{t("Next lesson", "Следующий урок", "Наступний урок")} · {l(pilotLessons[next].title)}</Link></div>
      )}
    </section>
  );
}
