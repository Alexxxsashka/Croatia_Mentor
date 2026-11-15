import { getLocale } from "next-intl/server";
import { Workbook } from "@/components/learning/Workbook";
import { Link } from "@/i18n/navigation";
import { getLocalizedText } from "@/lib/lessons-data";
import { getWorkbook } from "@/lib/workbook";

export default async function TrialLessonPage() {
  const locale = await getLocale();
  const t = (en: string, ru: string, ua: string) => getLocalizedText({ en, ru, ua }, locale);

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="page-heading">
        <div>
          <h1>{t("Trial lesson · Personal pronouns", "Пробный урок · Личные местоимения", "Пробний урок · Особові займенники")}</h1>
          <p>{t("Try three sentences from the first A1 lesson.", "Попробуйте три предложения из первого урока A1.", "Спробуйте три речення з першого уроку A1.")}</p>
        </div>
      </div>
      <p>{t("Use ja for I, ti for you (informal), and on for he. In Croatian, the verb changes with each person.", "Ja означает «я», ti — «ты», on — «он». В хорватском глагол меняется в зависимости от лица.", "Ja означає «я», ti — «ти», on — «він». У хорватській дієслово змінюється залежно від особи.")}</p>
      <p lang="hr"><strong>Ja sam</strong> Ana. <strong>Ti si</strong> Marko. <strong>On je</strong> Tomislav.</p>
      <Workbook data={getWorkbook("a1-grammar-1")} locale={locale} preview />
      <div className="button-row">
        <Link className="btn" href="/sign-up">{t("Create an account", "Создать аккаунт", "Створити акаунт")}</Link>
        <Link className="btn secondary" href="/placement-test">{t("Find my level", "Определить мой уровень", "Визначити мій рівень")}</Link>
      </div>
    </main>
  );
}
