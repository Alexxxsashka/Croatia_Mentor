"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Volume2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { speakText } from "@/lib/speech";
import { getWorkbook } from "@/lib/workbook";
import { getLocalizedText, type LocalizedString } from "@/lib/lessons-data";

const modes = ["gap", "order", "dictation"] as const;
type Mode = (typeof modes)[number];
type WorkbookData = ReturnType<typeof getWorkbook>;

const copy = {
  loading: { en: "Loading word statuses…", ru: "Загружаем статусы слов…", ua: "Завантажуємо статуси слів…" },
  title: { en: "Workbook", ru: "Практика в формате учебника", ua: "Практика у форматі підручника" },
  gap: { en: "Fill in the blanks", ru: "Заполните пропуски", ua: "Заповніть пропуски" },
  orderHint: { en: "Compare your word order with the model after checking.", ru: "После проверки сравните свой порядок слов с образцом.", ua: "Після перевірки порівняйте свій порядок слів зі зразком." },
  order: { en: "Put the words in order", ru: "Восстановите порядок слов", ua: "Відновіть порядок слів" },
  dictation: { en: "Listen and write", ru: "Прослушайте и запишите", ua: "Прослухайте й запишіть" },
  check: { en: "Check answers", ru: "Проверить ответы", ua: "Перевірити відповіді" },
  retry: { en: "Try again", ru: "Попробовать ещё раз", ua: "Спробувати ще раз" },
  listen: { en: "Play sentence", ru: "Прослушать предложение", ua: "Прослухати речення" },
  answer: { en: "Answer", ru: "Ответ", ua: "Відповідь" },
  model: { en: "Model answer", ru: "Ответ по образцу", ua: "Відповідь за зразком" },
  correct: { en: "Correct", ru: "Верно", ua: "Правильно" },
  score: { en: "Matched the model", ru: "Совпало с образцом", ua: "Збіглося зі зразком" },
  next: { en: "Next exercise", ru: "Следующее задание", ua: "Наступне завдання" },
  words: { en: "Vocabulary from this topic", ru: "Слова по теме", ua: "Слова за темою" },
  learning: { en: "To learn", ru: "На обучение", ua: "На вивчення" },
  learned: { en: "I know it", ru: "Готово", ua: "Готово" },
  new: { en: "Reset status", ru: "Сбросить статус", ua: "Скинути статус" },
  signIn: { en: "Sign in to save words for review", ru: "Войдите, чтобы сохранить слова для повторения", ua: "Увійдіть, щоб зберегти слова для повторення" },
  error: { en: "Could not sync the vocabulary. Try again.", ru: "Не удалось синхронизировать словарь. Попробуйте ещё раз.", ua: "Не вдалося синхронізувати словник. Спробуйте ще раз." },
} satisfies Record<string, LocalizedString>;

const normalize = (answer: string) =>
  answer.normalize("NFC").toLocaleLowerCase("hr").replace(/[.,!?;:„“"]/g, "").replace(/\s+/g, " ").trim();

function VocabularyControls({ words, locale }: { words: WorkbookData["words"]; locale: string }) {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const [statuses, setStatuses] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const t = (key: keyof typeof copy) => getLocalizedText(copy[key], locale);

  useEffect(() => {
    if (!userId) return;
    const controller = new AbortController();
    fetch("/api/words/progress", { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error();
        const { wordProgress } = await response.json() as { wordProgress: { wordHr: string; status: string }[] };
        setStatuses(Object.fromEntries(wordProgress.map(({ wordHr, status }) => [wordHr.toLowerCase(), status])));
        setReady(true);
      })
      .catch(() => {
        if (!controller.signal.aborted) setFailed(true);
      });
    return () => controller.abort();
  }, [userId, attempt]);

  const changeStatus = async (wordHr: string, status: "learning" | "learned" | "new") => {
    setFailed(false);
    setSaving(wordHr);
    try {
      const response = await fetch("/api/words/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wordHr, status }),
      });
      if (!response.ok) throw new Error();
      setStatuses((current) => ({ ...current, [wordHr]: status }));
    } catch {
      setFailed(true);
    } finally {
      setSaving(null);
    }
  };

  return (
    <details className="mt-8">
      <summary>{t("words")}</summary>
      {userId && !ready && !failed && <p role="status">{t("loading")}</p>}
      <ul className="mt-4 divide-y divide-[var(--ref-line)]">
        {words.map((word) => {
          const savedStatus = statuses[word.hr] === "mastered" ? "learned" : statuses[word.hr] ?? "new";
          return (
            <li key={word.hr} className="flex flex-wrap items-center justify-between gap-3 py-3">
              <span><strong lang="hr">{word.hr}</strong> · {getLocalizedText(word, locale)}</span>
              {userId && (
                <div className="flex flex-wrap gap-2" role="group" aria-label={word.hr}>
                  {(["learning", "learned", "new"] as const).map((nextStatus) => (
                    <button
                      type="button"
                      key={nextStatus}
                      aria-pressed={savedStatus === nextStatus}
                      disabled={!ready || saving !== null}
                      className={savedStatus === nextStatus ? "btn" : "btn secondary"}
                      onClick={() => {
                        if (savedStatus !== nextStatus) void changeStatus(word.hr, nextStatus);
                      }}
                    >
                      {t(nextStatus)}
                    </button>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {status === "unauthenticated" && <Link className="text-link" href="/sign-in">{t("signIn")}</Link>}
      {failed && <p role="alert">{t("error")}</p>}
      {failed && !ready && (
        <button type="button" className="btn secondary" onClick={() => {
          setFailed(false);
          setAttempt((current) => current + 1);
        }}>{t("retry")}</button>
      )}
    </details>
  );
}

export function Workbook({ data, locale, preview = false }: {
  data: WorkbookData;
  locale: string;
  preview?: boolean;
}) {
  const [mode, setMode] = useState<Mode>("gap");
  const [drafts, setDrafts] = useState<Partial<Record<Mode, string[]>>>({});
  const [checked, setChecked] = useState<Partial<Record<Mode, boolean>>>({});
  const heading = useRef<HTMLHeadingElement>(null);
  const result = useRef<HTMLParagraphElement>(null);
  const id = useId();
  const rows = preview ? data.rows.slice(0, 3) : data.rows;
  const answers = drafts[mode] ?? [];
  const reviewed = checked[mode];
  const t = (key: keyof typeof copy) => getLocalizedText(copy[key], locale);
  const expected = rows.map((row) => mode === "gap" ? row.answer : row.sentence);
  const matches = expected.map((answer, index) => normalize(answer) === normalize(answers[index] ?? ""));
  const nextMode = modes[modes.indexOf(mode) + 1];

  function openMode(next: Mode) {
    setMode(next);
    heading.current?.focus();
  }

  useEffect(() => {
    if (reviewed) result.current?.focus();
  }, [reviewed, mode]);

  return (
    <section className="panel my-8" aria-labelledby={id}>
      <h2 id={id} ref={heading} tabIndex={-1}>{t("title")}</h2>
      {!preview && (
        <div className="flex flex-wrap gap-2 mb-6">
          {modes.map((item) => (
            <button type="button" key={item} className={item === mode ? "btn" : "btn secondary"} aria-pressed={item === mode} onClick={() => openMode(item)}>
              {t(item)}{checked[item] ? " ✓" : ""}
            </button>
          ))}
        </div>
      )}
      <form onSubmit={(event) => {
        event.preventDefault();
        setChecked((current) => ({ ...current, [mode]: true }));
      }}>
        <h3>{t(mode)} · {rows.length}</h3>
        {mode === "order" && <p>{t("orderHint")}</p>}
        <ol className="list-decimal ps-6 divide-y divide-[var(--ref-line)]">
          {rows.map((row, index) => {
            const words = row.sentence.replace(/[.,!?;:]/g, "").toLocaleLowerCase("hr").split(/\s+/).sort((a, b) => a.localeCompare(b, "hr"));
            return (
              <li className="py-4" key={index}>
                {mode === "gap" && <div lang="hr" id={`${id}-prompt-${index}`}>{row.before}<span aria-hidden="true">_____</span><span className="sr-only"> […] </span>{row.after}{row.hint && <span> ({row.hint})</span>}</div>}
                {mode === "order" && <div lang="hr" id={`${id}-prompt-${index}`}>{words.join(" / ")}</div>}
                {mode === "dictation" && (
                  <button type="button" className="btn secondary mb-2" onClick={() => speakText(row.sentence)}>
                    <Volume2 size={18} aria-hidden="true" /> {t("listen")} {index + 1}
                  </button>
                )}
                <label className="max-w-xl">
                  {t("answer")} {index + 1}
                  <input
                    lang="hr"
                    value={answers[index] ?? ""}
                    readOnly={reviewed}
                    aria-describedby={mode === "dictation" ? undefined : `${id}-prompt-${index}`}
                    autoComplete="off"
                    spellCheck={false}
                    onChange={(event) => {
                      const value = event.target.value;
                      setDrafts((current) => {
                        const updated = Array.from(current[mode] ?? []);
                        updated[index] = value;
                        return { ...current, [mode]: updated };
                      });
                    }}
                  />
                </label>
                {reviewed && (matches[index] ? <div className="success">{t("correct")}</div> : <div>{t("model")} · <strong lang="hr">{expected[index]}</strong></div>)}
              </li>
            );
          })}
        </ol>
        {reviewed ? (
          <>
            <p ref={result} tabIndex={-1}>{t("score")} · {matches.filter(Boolean).length}/{rows.length}</p>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn secondary" onClick={() => {
                setChecked((current) => ({ ...current, [mode]: false }));
                setDrafts((current) => ({ ...current, [mode]: [] }));
                heading.current?.focus();
              }}>{t("retry")}</button>
              {!preview && nextMode && <button type="button" className="btn secondary" onClick={() => openMode(nextMode)}>{t("next")}</button>}
            </div>
          </>
        ) : <button type="submit" className="btn" disabled={!answers.some((answer) => answer?.trim())}>{t("check")}</button>}
      </form>
      {!preview && <VocabularyControls words={data.words} locale={locale} />}
    </section>
  );
}
