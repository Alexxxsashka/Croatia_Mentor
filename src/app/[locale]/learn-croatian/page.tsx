import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
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
    ru: "Начните учить хорватский язык онлайн бесплатно. Интерактивные уроки грамматики, словари с озвучкой, ШИ-репетитор и упражнения CEFR.",
    ua: "Почніть вивчати хорватську мову онлайн безкоштовно. Інтерактивні уроки граматики, словники з озвучкою, ШІ-репетитор та вправи CEFR.",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: "learn croatian, learn croatia, study croatian online, croatian language course, learn croatian free, croatian grammar, croatia mentor",
  };
}

export default async function LearnCroatianPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const faqs = [
    {
      question: "Is Croatia Mentor completely free to learn Croatian?",
      answer: "Yes! Croatia Mentor is 100% free with no ads, paywalls, or microtransactions.",
    },
    {
      question: "How long does it take to learn Croatian?",
      answer: "With daily practice (15-20 minutes/day) on Croatia Mentor, learners achieve basic conversational fluency (A2 level) in 3-6 months.",
    },
    {
      question: "Does the course cover Croatian grammar and Gaj's Latin alphabet?",
      answer: "Absolutely. All vocabulary and examples strictly follow standard Croatian orthography (č, ć, đ, š, ž) with native grammar explanations.",
    },
    {
      question: "Can I practice speaking Croatian with AI?",
      answer: "Yes! Croatia Mentor includes 4 specialized AI Tutor modes including Tutor, Essay Correction, Examiner, and Real-Life Roleplay scenarios.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <section className="max-w-5xl mx-auto text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-sm font-medium text-blue-400">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Online Croatian Course</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Learn <span className="gradient-text">Croatian Language</span> Online for Free
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Master Croatian vocabulary, grammar rules, audio pronunciation, and interactive dialogues with an AI tutor. No ads, no limits, no paywalls.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/sign-up"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-xl shadow-blue-500/25 glow-hover flex items-center justify-center gap-2"
          >
            Start Learning Now Free
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/lessons"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-lg font-semibold border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            Browse Lessons (A1 - B2)
            <BookOpen className="w-5 h-5 text-purple-400" />
          </Link>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-blue-500/30 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">CEFR Aligned Curriculum</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Progress systematically from basic greetings (A1) to intermediate grammar, cases, and complex verb conjugations (B2).
          </p>
        </div>

        <div className="glass p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-purple-500/30 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">AI Speaking & Roleplay Tutor</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Practice real-life conversations in bakery, restaurant, and apartment renting scenarios with personalized instant feedback.
          </p>
        </div>

        <div className="glass p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-emerald-500/30 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Brain className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Audio & Spaced Repetition</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Remember words long-term with built-in TTS audio pronunciation, interactive flashcards, and mini-games.
          </p>
        </div>
      </section>

      {/* Levels Overview */}
      <section className="max-w-5xl mx-auto glass p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white">Croatian Language Levels Covered</h2>
          <p className="text-slate-400">Structured lessons for every stage of your learning journey.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">A1 Beginner</span>
            <h3 className="font-semibold text-white">Alphabet & Essentials</h3>
            <p className="text-xs text-slate-400">Basic greetings, numbers, self-introduction, and simple phrases.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">A2 Elementary</span>
            <h3 className="font-semibold text-white">Everyday Conversations</h3>
            <p className="text-xs text-slate-400">Shopping, ordering food, directions, daily routine, and present tense verbs.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">B1 Intermediate</span>
            <h3 className="font-semibold text-white">Grammar & Cases</h3>
            <p className="text-xs text-slate-400">Mastering 7 Croatian cases, past/future tenses, and complex sentence structure.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">B2 Upper Interm.</span>
            <h3 className="font-semibold text-white">Fluency & Nuances</h3>
            <p className="text-xs text-slate-400">Idioms, media comprehension, essay writing, and advanced conversation practice.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="text-lg font-semibold text-slate-100">{faq.question}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
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
