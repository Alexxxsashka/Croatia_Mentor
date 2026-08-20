import { Link } from "@/i18n/navigation";
import {
  BookOpen,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Brain,
  ShieldCheck,
  ArrowRight,
  Globe2,
  HelpCircle,
  Zap,
  Play,
  Volume2,
  ChevronRight,
  Trophy,
  Bot,
} from "lucide-react";
import { SocialShare } from "@/components/social-share";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "Learn Croatian Online Free | Complete Interactive Course – Croatia Mentor",
    ru: "Учить хорватский язык онлайн бесплатно | Полный курс – Croatia Mentor",
    ua: "Вивчення хорватської мови онлайн безкоштовно | Повний курс – Croatia Mentor",
  };

  const descriptions: Record<string, string> = {
    en: "Start learning Croatian language online for free. Interactive grammar lessons, audio vocabulary, AI mentor roleplay, and CEFR-aligned exercises.",
    ru: "Начните учить хорватский язык онлайн бесплатно. Интерактивные уроки грамматики, словари с озвучкой, ИИ-репетитор и упражнения CEFR.",
    ua: "Почніть вивчати хорватську мову онлайн безкоштовно. Інтерактивні уроки граматики, словники з озвучкою, ШІ-репетитор та вправи CEFR.",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: "learn croatian, learn croatia, study croatian online, croatian language course, learn croatian free, croatian grammar, croatia mentor",
  };
}

const pageTexts = {
  ua: {
    tagline: "ІНТЕРАКТИВНА МОВНА ПРИГОДА",
    titleStart: "Опануй",
    titleHighlight: "Хорватську Мову",
    titleEnd: "Онлайн Безкоштовно",
    subtitle: "Структуровані уроки CEFR (A1-C2), тренажер слів SRS, аудіо-диктанти та живі діалоги з AI репетитором. Безкоштовно, без реклами та підписок.",
    ctaPrimary: "Почати навчання зараз",
    ctaSecondary: "Переглянути уроки (A1-C2)",
    divider: "ІНТЕРАКТИВНІ МОДУЛІ НАВЧАННЯ",
    h1Title: "Чому саме Croatia Mentor?",
    f1Title: "Програма CEFR (A1 - C2)",
    f1Desc: "Систематичний прогрес від базових привітань до впевненого ділового мовлення та розуміння хорватських новин.",
    f2Title: "AI Симулятор та диктофон",
    f2Desc: "Живі діалоги з віртуальним репетитором на базі Google GenAI та точною вимовою від Edge TTS.",
    f3Title: "Інтервальні повторення (SRS)",
    f3Desc: "Науковий алгоритм SM-2 розраховує ідеальні інтервали для гарантованого запам'ятовування слів.",
    levelsTitle: "Рівні володіння мовою",
    levelsSub: "Обирайте свій рівень та навчайтесь у власному темпі",
    a1Title: "A1 · Початковий",
    a1Desc: "Алфавіт, привітання, числа, теперішній час (biti, imati) та базові фрази для життя.",
    a2Title: "A2 · Елементарний",
    a2Desc: "Замовлення в кафе, орієнтування в місті, минулий час (perfekt) та базові відмінки.",
    b1Title: "B1 · Середній",
    b1Desc: "Вільна розмова, висловлювання думки, документи, відмінки та майбутній час (futur).",
    b2Title: "B2 · Вище середнього",
    b2Desc: "Розуміння хорватських новин, опанування всіх 7 відмінків (padeži) та ідіом.",
    faqTitle: "Часті запитання",
  },
  ru: {
    tagline: "ИНТЕРАКТИВНОЕ ЯЗЫКОВОЕ ПРИКЛЮЧЕНИЕ",
    titleStart: "Освой",
    titleHighlight: "Хорватский Язык",
    titleEnd: "Онлайн Бесплатно",
    subtitle: "Структурированные уроки CEFR (A1-C2), тренажер слов SRS, аудио-диктанты и живые диалоги с AI репетитором. Бесплатно, без рекламы и подписок.",
    ctaPrimary: "Начать обучение сейчас",
    ctaSecondary: "Просмотреть уроки (A1-C2)",
    divider: "ИНТЕРАКТИВНЫЕ МОДУЛИ ОБУЧЕНИЯ",
    h1Title: "Почему именно Croatia Mentor?",
    f1Title: "Программа CEFR (A1 - C2)",
    f1Desc: "Систематический прогресс от базовых приветствий до уверенной деловой речи и понимания новостей.",
    f2Title: "AI Симулятор и диктофон",
    f2Desc: "Живые диалоги с виртуальным репетитором на базе Google GenAI и точным произношением Edge TTS.",
    f3Title: "Интервальные повторения (SRS)",
    f3Desc: "Научный алгоритм SM-2 рассчитывает идеальные интервалы для гарантированного запоминания слов.",
    levelsTitle: "Уровни владения языком",
    levelsSub: "Выбирайте свой уровень и учитесь в собственном темпе",
    a1Title: "A1 · Начинающий",
    a1Desc: "Алфавит, приветствия, числа, настоящее время (biti, imati) и базовые фразы.",
    a2Title: "A2 · Элементарный",
    a2Desc: "Заказ в кафе, ориентирование в городе, прошедшее время (perfekt) и падежи.",
    b1Title: "B1 · Средний",
    b1Desc: "Свободный разговор, выражение мнения, документы, падежи и будущее время (futur).",
    b2Title: "B2 · Выше среднего",
    b2Desc: "Понимание хорватских новостей, освоение всех 7 падежей (padeži) и идиом.",
    faqTitle: "Часто задаваемые вопросы",
  },
  en: {
    tagline: "INTERACTIVE LANGUAGE ADVENTURE",
    titleStart: "Learn",
    titleHighlight: "Croatian Language",
    titleEnd: "Online for Free",
    subtitle: "Structured CEFR lessons from A1 to C2, SRS spaced repetition, audio dictation, and interactive AI roleplay. 100% free with no ads.",
    ctaPrimary: "Start Learning Now",
    ctaSecondary: "Browse Lessons (A1-C2)",
    divider: "INTERACTIVE LEARNING MODULES",
    h1Title: "Why Choose Croatia Mentor?",
    f1Title: "CEFR Aligned Curriculum",
    f1Desc: "Progress systematically from basic greetings to intermediate grammar, cases, and news comprehension.",
    f2Title: "AI Speaking & Voice Tutor",
    f2Desc: "Simulate natural conversation with an intelligent AI tutor powered by Google GenAI and Edge TTS.",
    f3Title: "SRS Spaced Repetition",
    f3Desc: "Scientific SM-2 algorithm calculates ideal review intervals for long-term vocabulary retention.",
    levelsTitle: "Language Levels Covered",
    levelsSub: "Structured lessons for every stage of your learning journey",
    a1Title: "A1 · Beginner",
    a1Desc: "Alphabet, basic greetings, present tense (biti, imati), numbers, and daily survival phrases.",
    a2Title: "A2 · Elementary",
    a2Desc: "Ordering food, asking directions, travel, past tense (perfekt), and basic cases.",
    b1Title: "B1 · Intermediate",
    b1Desc: "Holding natural conversations, future tense (futur), bureaucracy, and expressing opinions.",
    b2Title: "B2 · Upper Intermediate",
    b2Desc: "Understanding Croatian news broadcasts, mastering all 7 cases (padeži), and idioms.",
    faqTitle: "Frequently Asked Questions",
  },
};

export default async function LearnCroatianPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "ru" || locale === "ua" ? locale : "en") as "en" | "ru" | "ua";
  const text = pageTexts[lang];

  const faqs = [
    {
      q: "Is Croatia Mentor completely free to learn Croatian?",
      a: "Yes! Croatia Mentor is 100% free with no ads, paywalls, or microtransactions.",
    },
    {
      q: "How long does it take to learn Croatian?",
      a: "With daily practice (15-20 minutes/day) on Croatia Mentor, learners achieve conversational fluency (A2/B1 level) in 3-6 months.",
    },
    {
      q: "Does the course cover Croatian grammar and Gaj's Latin alphabet?",
      a: "Absolutely. All vocabulary and examples strictly follow standard Croatian orthography (č, ć, đ, š, ž) with native grammar explanations.",
    },
    {
      q: "Can I practice speaking Croatian with AI?",
      a: "Yes! Croatia Mentor includes specialized AI Tutor modes for real-life speaking practice and roleplays.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <div className="relative min-h-screen bg-transparent text-slate-100 font-sans selection:bg-purple-600 selection:text-white py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-300 bg-purple-950/50 px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm shadow-lg shadow-purple-950/50">
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>{text.tagline}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight font-editorial">
          {text.titleStart}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            {text.titleHighlight}
          </span>{" "}
          {text.titleEnd}
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {text.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/sign-up"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold uppercase text-xs sm:text-sm tracking-[0.2em] transition-all shadow-xl shadow-purple-600/30 rounded-xl glow-hover flex items-center justify-center gap-3"
          >
            <span>{text.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/lessons"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 border border-slate-700 hover:border-purple-400 text-slate-300 hover:text-white font-bold uppercase text-xs sm:text-sm tracking-[0.15em] transition-all rounded-xl backdrop-blur-md flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>{text.ctaSecondary}</span>
          </Link>
        </div>
      </section>

      {/* Feature Highlights 3-Column Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 backdrop-blur-md space-y-4 group transition-all">
          <div className="w-14 h-14 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <BookOpen className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold uppercase font-editorial text-white group-hover:text-purple-300 transition-colors">
            {text.f1Title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {text.f1Desc}
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 backdrop-blur-md space-y-4 group transition-all">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Bot className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold uppercase font-editorial text-white group-hover:text-indigo-300 transition-colors">
            {text.f2Title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {text.f2Desc}
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-pink-500/50 backdrop-blur-md space-y-4 group transition-all">
          <div className="w-14 h-14 rounded-2xl bg-pink-600/20 text-pink-400 border border-pink-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Brain className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold uppercase font-editorial text-white group-hover:text-pink-300 transition-colors">
            {text.f3Title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {text.f3Desc}
          </p>
        </div>
      </section>

      {/* Levels Overview */}
      <section className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-md space-y-8 shadow-2xl">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold uppercase font-editorial text-white">{text.levelsTitle}</h2>
          <p className="text-slate-300 text-sm">{text.levelsSub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">A1 Beginner</span>
            <h3 className="font-bold text-white uppercase text-sm pt-1">{text.a1Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{text.a1Desc}</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30">A2 Elementary</span>
            <h3 className="font-bold text-white uppercase text-sm pt-1">{text.a2Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{text.a2Desc}</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">B1 Intermediate</span>
            <h3 className="font-bold text-white uppercase text-sm pt-1">{text.b1Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{text.b1Desc}</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">B2 Upper Interm.</span>
            <h3 className="font-bold text-white uppercase text-sm pt-1">{text.b2Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{text.b2Desc}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-purple-400" />
          <h2 className="text-2xl font-bold uppercase font-editorial text-white">{text.faqTitle}</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 backdrop-blur-md">
              <h3 className="text-base font-bold text-white">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Share Section */}
      <section className="max-w-4xl mx-auto">
        <SocialShare title="Learn Croatian Online for Free – Interactive Lessons & AI Tutor" />
      </section>
    </div>
  );
}
