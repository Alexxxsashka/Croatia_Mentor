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
  Mic,
  GraduationCap,
  Layers,
  Gamepad2,
  Compass,
  Check,
  Award,
} from "lucide-react";
import { SocialShare } from "@/components/social-share";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "How It Works & Learn Croatian Online Free | Complete Guide – Croatia Mentor",
    ru: "Как это работает: как выучить хорватский язык с нуля бесплатно | Croatia Mentor",
    ua: "Як це працює: як вивчити хорватську мову з нуля безкоштовно | Croatia Mentor",
  };

  const descriptions: Record<string, string> = {
    en: "Complete guide on how to learn Croatian fast online for free. Step-by-step CEFR methodology (A1-C2), neural voice pronunciation evaluator, AI speaking tutor, and SM-2 spaced repetition vocabulary.",
    ru: "Пошаговое руководство: как быстро выучить хорватский язык онлайн с нуля до C2. Интерактивные уроки CEFR, голосовой тренажер произношения, ИИ-репетитор для диалогов в Хорватии и словарь SRS. 100% бесплатно.",
    ua: "Покрокова інструкція: як швидко вивчити хорватську мову онлайн від A1 до C2. Інтерактивні уроки CEFR, голосовий тренажер вимови, ШІ-репетитор для реального життя в Хорватії та словник SRS. 100% безкоштовно.",
  };

  const keywords: Record<string, string> = {
    en: "learn croatian, how to learn croatian, learn croatian online free, study croatian language, croatian for beginners, croatian language course, croatian grammar, croatian vocabulary, speak croatian, croatian pronunciation, croatia mentor",
    ru: "выучить хорватский, учить хорватский, хорватский язык с нуля, самоучитель хорватского языка, как выучить хорватский язык, хорватский онлайн бесплатно, грамматика хорватского языка, хорватские падежи, разговорный хорватский, курсы хорватского языка, croatia mentor",
    ua: "вивчити хорватську, як вивчити хорватську мову, вчити хорватську мову, хорватська мова з нуля, самовчитель хорватської мови, хорватська онлайн безкоштовно, граматика хорватської мови, хорватські відмінки, курси хорватської мови, уроки хорватської, croatia mentor",
  };

  const baseUrl = "https://croatia-mentor.space";

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: keywords[locale] || keywords.en,
    alternates: {
      canonical: `${baseUrl}/${locale}/learn-croatian`,
      languages: {
        en: `${baseUrl}/en/learn-croatian`,
        uk: `${baseUrl}/ua/learn-croatian`,
        ru: `${baseUrl}/ru/learn-croatian`,
        "x-default": `${baseUrl}/en/learn-croatian`,
      },
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `${baseUrl}/${locale}/learn-croatian`,
      siteName: "Croatia Mentor",
      images: [
        {
          url: "/logos/logo-variant-3.jpg",
          width: 800,
          height: 800,
          alt: "Croatia Mentor – Learn Croatian Online Free",
        },
      ],
      type: "website",
    },
  };
}

const pageData = {
  ua: {
    badge: "МЕТОДОЛОГІЯ ТА ПОКРОКОВИЙ ГАЙД",
    titleStart: "Як це працює:",
    titleHighlight: "Вивчай Хорватську Мову",
    titleEnd: "з нуля до вільного володіння",
    subtitle:
      "Croatia Mentor — це безкоштовна інтерактивна платформа, що поєднує наукову методику CEFR (A1-C2), штучний інтелект, розпізнавання вимови та систему інтервальних повторень SRS для швидкого освоєння хорватської мови.",
    ctaPrimary: "Почати навчання безкоштовно",
    ctaSecondary: "Визначити свій рівень",
    howItWorksTitle: "5 Кроків Вашого Навчання",
    howItWorksSub: "Як побудований навчальний процес для досягнення швидкого результату",
    steps: [
      {
        num: "01",
        title: "Діагностика рівня та персональний маршрут",
        desc: "Швидкий адаптивний тест оцінює ваш поточний рівень (від A1 до B2) та формує оптимальний розклад занять без нудної теорії.",
        tag: "Старт навчання",
      },
      {
        num: "02",
        title: "Інтерактивні мікро-уроки граматики",
        desc: "Короткі уроки на 10-15 хвилин з живими прикладами: 7 відмінків (padeži), дієслова biti/htjeti, порядок слів та інтерактивний ридер з миттєвим перекладом.",
        tag: "Граматика та Читання",
      },
      {
        num: "03",
        title: "Голосовий тренажер вимови та диктанти",
        desc: "Розпізнавання хорватської мови в реальному часі. Тренуйте вимову специфічних звуків (č, ć, đ, š, ž) та пишіть аудіо-диктанти нейромережевим голосом.",
        tag: "Розпізнавання голосу",
      },
      {
        num: "04",
        title: "Розумний словник SRS (Spaced Repetition)",
        desc: "Алгоритм SuperMemo SM-2 автоматично розраховує інтервали повторення слів саме в той момент, коли мозок готовий їх забути. Більше 1500+ слів з озвучкою.",
        tag: "Словниковий запас",
      },
      {
        num: "05",
        title: "AI-Репетитор та симуляції реального життя",
        desc: "Практикуйте діалоги для життєвих ситуацій у Хорватії: оформлення документів у MUP/МУП, візит до лікаря, оренда житла, банк, ресторан та робота.",
        tag: "Розмовна практика",
      },
    ],
    featuresTitle: "Інструменти платформи",
    f1Title: "Міжнародний стандарт CEFR",
    f1Desc: "Чіткі рівні A1, A2, B1, B2, C1, C2 з послідовним ускладненням матеріалу та реальними результатами.",
    f2Title: "AI Наставник з живою мовою",
    f2Desc: "Інтелектуальний чат-репетитор виправляє помилки, пояснює граматику та проводить рольові ігри хорватською.",
    f3Title: "8 Навчальних Міні-Ігор",
    f3Desc: "Аудіо-диктант, Підбір слів, Заповнення пропусків, Склади слово, Виселиця та Швидкий тест для легкого закріплення.",
    guideTitle: "Секрети та особливості хорватської мови",
    guideSub: "Корисні поради для швидкого прогресу",
    guides: [
      {
        title: "Хорватська латиниця (Gajica)",
        desc: "Хорватський алфавіт має 30 літер. Головне — розрізняти тверде 'Č' та м'яке 'Ć', дзвінке 'Đ', шиплячі 'Š' і 'Ž', а також подвійні літери 'Dž', 'Lj', 'Nj'. На платформі є вбудована екранна клавіатура спецсимволів.",
      },
      {
        title: "«Хибні друзі перекладача»",
        desc: "Будьте уважні зі схожими словами: 'stolica' — це стілець, 'trbuh' — живіт, 'pravo' — прямо (а не праворуч), 'godina' — рік, 'trudna' — вагітна.",
      },
      {
        title: "Система 7 відмінків (Padeži)",
        desc: "Хорватська мова зберегла повну систему відмінків: Nominativ, Genitiv, Dativ, Akuzativ, Vokativ, Lokativ, Instrumental. У наших уроках кожен відмінок пояснюється з життєвими прикладами та таблицями закінчень.",
      },
      {
        title: "Правило 15 хвилин щодня",
        desc: "Щоденна коротка практика в 3-4 рази ефективніша за одне довге двогодинне заняття на тиждень. Завдяки системі серій днів (Streak) та щоденним місіям звичка формується природно.",
      },
    ],
    levelsTitle: "Рівні володіння мовою (CEFR)",
    levelsSub: "Структурована програма під будь-яку навчальну ціль",
    levels: [
      {
        badge: "A1 · Початковий",
        title: "Базове виживання",
        desc: "Алфавіт, привітання, числа, дієслова biti/imati, базові фрази в магазині, кафе та на вулиці.",
        color: "emerald",
      },
      {
        badge: "A2 · Елементарний",
        title: "Побут та орієнтування",
        desc: "Минулий час (perfekt), базові відмінки, опис подій, сім'я, оренда житла та візит до лікаря.",
        color: "teal",
      },
      {
        badge: "B1 · Середній",
        title: "Впевнене спілкування",
        desc: "Майбутній час (futur), усі 7 відмінків, ділові листи, впевнена розмова на роботі та документи.",
        color: "indigo",
      },
      {
        badge: "B2 · Вище середнього",
        title: "Вільне мовлення",
        desc: "Розуміння хорватських новин, складні граматичні конструкції, фразеологізми та сленг.",
        color: "purple",
      },
    ],
    faqTitle: "Часті запитання про вивчення хорватської",
    faqs: [
      {
        q: "Чи дійсно платформа Croatia Mentor повністю безкоштовна?",
        a: "Так! Croatia Mentor на 100% безкоштовний: у нас немає платної підписки, прихованих платежів, реклами чи блокування уроків. Усі рівні A1-C2, словник та ШІ-репетитор доступні кожному.",
      },
      {
        q: "Скільки часу потрібно, щоб заговорити хорватською з нуля?",
        a: "При щоденних заняттях по 15-20 хвилин більшість учнів починають впевнено спілкуватися на побутовому рівні (A2) вже через 2-3 місяці, а досягають рівня впевненої розмови (B1) за 4-6 місяців.",
      },
      {
        q: "Як працює розпізнавання вимови та голосовий тренажер?",
        a: "Ви натискаєте кнопку мікрофона та читаєте фразу вголос. Нейромережа розпізнає вашу мову, порівнює її з еталоном з урахуванням хорватських літер (č, ć, đ, š, ž) і дає детальну оцінку з виправленням помилок.",
      },
      {
        q: "Чи допоможе курс підготуватися до складання іспиту на ВНЖ / ПМЖ у Хорватії?",
        a: "Так. Наша програма суворо відповідає офіційним стандартам CEFR, містить тести на підвищення рівня та практичні модулі для взаємодії з держорганами (MUP, податкова, медицина).",
      },
      {
        q: "Чим хорватська мова відрізняється від інших слов'янських мов?",
        a: "Хорватська мова має схожу кореневу систему, але відрізняється наявністю 7 відмінків, строгим порядком слів з энклітиками, двома майбутніми часами (Futur I і Futur II) та латинською абеткою з унікальними діакритиками.",
      },
      {
        q: "Чи можна навчатися зі смартфона?",
        a: "Так, сайт повністю оптимізований для мобільних пристроїв, планшетів і комп'ютерів. Ви можете проходити уроки, слухати вимову та говорити в мікрофон прямо в браузері телефона.",
      },
    ],
    socialTitle: "Поділитися платформою з друзями",
  },
  ru: {
    badge: "МЕТОДОЛОГИЯ И ПОШАГОВЫЙ ГАЙД",
    titleStart: "Как это работает:",
    titleHighlight: "Выучи Хорватский Язык",
    titleEnd: "с нуля до свободного общения",
    subtitle:
      "Croatia Mentor — это бесплатная интерактивная платформа, объединяющая научную методику CEFR (A1-C2), искусственный интеллект, распознавание произношения и систему интервальных повторений SRS для быстрого освоения хорватского языка.",
    ctaPrimary: "Начать обучение бесплатно",
    ctaSecondary: "Определить свой уровень",
    howItWorksTitle: "5 Шагов Вашего Обучения",
    howItWorksSub: "Как выстроен учебный процесс для достижения быстрого и устойчивого результата",
    steps: [
      {
        num: "01",
        title: "Диагностика уровня и умный маршрут",
        desc: "Адаптивный вступительный тест оценивает ваш текущий уровень (от A1 до B2) и подбирает персональный учебный трек без лишней траты времени.",
        tag: "Старт обучения",
      },
      {
        num: "02",
        title: "Интерактивные микро-уроки грамматики",
        desc: "Удобные уроки по 10-15 минут с живыми примерами: 7 падежей (padeži), глаголы biti/htjeti, порядок слов и интерактивный ридер с мгновенным переводом.",
        tag: "Грамматика и Чтение",
      },
      {
        num: "03",
        title: "Голосовой тренажёр произношения и диктанты",
        desc: "Распознавание хорватской речи в реальном времени. Тренируйте произношение звуков (č, ć, đ, š, ž) и пишите аудио-диктанты под нейросетевую озвучку.",
        tag: "Распознавание речи",
      },
      {
        num: "04",
        title: "Умный словарь SRS (Spaced Repetition)",
        desc: "Научный алгоритм SuperMemo SM-2 рассчитывает идеальные интервалы повторения слов именно тогда, когда память готова их упустить. 1500+ озвученных слов.",
        tag: "Словарный запас",
      },
      {
        num: "05",
        title: "ИИ-Репетитор и симуляции реальной жизни",
        desc: "Практикуйте живые диалоги в ситуациях Хорватии: оформление ВНЖ в MUP/МУП, визит к врачу, аренда жилья, банк, кафе и работа.",
        tag: "Разговорная практика",
      },
    ],
    featuresTitle: "Инструменты платформы",
    f1Title: "Международный стандарт CEFR",
    f1Desc: "Четкие уровни A1, A2, B1, B2, C1, C2 с последовательным усложнением материала и реальными измеримыми результатами.",
    f2Title: "AI Наставник с живой речью",
    f2Desc: "Интеллектуальный чат-репетитор исправляет ошибки, объясняет грамматику и разыгрывает ролевые ситуации на хорватском.",
    f3Title: "8 Обучающих Мини-Игр",
    f3Desc: "Аудио-диктант, Подбор слов, Заполни пропуски, Собери слово, Виселица и Быстрый тест для легкого и увлекательного закрепления.",
    guideTitle: "Секреты и особенности хорватского языка",
    guideSub: "Полезные советы для быстрого прогресса",
    guides: [
      {
        title: "Хорватская латиница (Гаевица)",
        desc: "В хорватском алфавите 30 букв. Важно отличать твердое 'Č' и мягкое 'Ć', звонкое 'Đ', шипящие 'Š' и 'Ž', а также диграфы 'Dž', 'Lj', 'Nj'. На платформе встроена экранная панель хорватских спецсимволов.",
      },
      {
        title: "«Ложные друзья переводчика»",
        desc: "Остерегайтесь частых ловушек: 'stolica' — это стул, 'trbuh' — живот, 'pravo' — прямо (а не направо), 'godina' — год, 'trudna' — беременная.",
      },
      {
        title: "Система 7 падежей (Padeži)",
        desc: "Хорватский сохранил полную падежную систему: Именительный (Nominativ), Родительный (Genitiv), Дательный (Dativ), Винительный (Akuzativ), Звательный (Vokativ), Предложный/Местный (Lokativ), Творительный (Instrumental).",
      },
      {
        title: "Правило 15 минут в день",
        desc: "Регулярная микро-практика каждый день в 3-4 раза эффективнее многочасовой зубрежки раз в неделю. Система серий (Streak) помогает закрепить полезную привычку.",
      },
    ],
    levelsTitle: "Уровни владения языком (CEFR)",
    levelsSub: "Структурированная программа под любую цель обучения",
    levels: [
      {
        badge: "A1 · Начинающий",
        title: "Базовое выживание",
        desc: "Алфавит, приветствия, числа, глаголы biti/imati, базовые фразы в магазине, кафе и на улице.",
        color: "emerald",
      },
      {
        badge: "A2 · Элементарный",
        title: "Быт и ориентирование",
        desc: "Прошедшее время (perfekt), базовые падежи, рассказ о себе, аренда жилья и поход к врачу.",
        color: "teal",
      },
      {
        badge: "B1 · Средний",
        title: "Уверенное общение",
        desc: "Будущее время (futur), все 7 падежей, деловая переписка, свободный разговор на работе и документы.",
        color: "indigo",
      },
      {
        badge: "B2 · Выше среднего",
        title: "Свободная речь",
        desc: "Понимание хорватских новостей и радио, сложные обороты речи, фразеологизмы и сленг.",
        color: "purple",
      },
    ],
    faqTitle: "Часто задаваемые вопросы об изучении хорватского",
    faqs: [
      {
        q: "Действительно ли платформа Croatia Mentor полностью бесплатна?",
        a: "Да! Croatia Mentor на 100% бесплатен: без платных подписок, скрытых комиссий, навязчивой рекламы или закрытых уроков. Все уровни A1-C2, словарь и ИИ-репетитор открыты сразу.",
      },
      {
        q: "Сколько времени нужно, чтобы заговорить по-хорватски с нуля?",
        a: "При регулярных занятиях по 15-20 минут в день большинство студентов начинают свободно объясняться в быту (A2) уже через 2-3 месяца, а уровня уверенного общения (B1) достигают за 4-6 месяцев.",
      },
      {
        q: "Как работает распознавание произношения и голосовой тренажёр?",
        a: "Вы нажимаете кнопку микрофона и произносите фразу. Нейросеть распознает вашу речь, сопоставляет её с эталоном с учетом хорватской диакритики (č, ć, đ, š, ž) и показывает точность в процентах с подсветкой ошибок.",
      },
      {
        q: "Поможет ли курс подготовиться к экзамену на ВНЖ / ПМЖ в Хорватии?",
        a: "Да. Наша программа построена по стандартам CEFR и включает тесты на подтверждение уровня, а также специальные модули для общения в госорганах (MUP, налоговая, поликлиника).",
      },
      {
        q: "Сложно ли учить хорватский язык?",
        a: "Для знающих славянские языки хорватский осваивается быстрее благодаря схожей грамматике и лексике. Главное — освоить хорватские падежные окончания, энклитики и специфические ударения.",
      },
      {
        q: "Можно ли учиться со смартфона?",
        a: "Да, сайт адаптирован под смартфоны, планшеты и компьютеры. Все функции, включая голосовой тренажер и озвучку, работают прямо в мобильном браузере.",
      },
    ],
    socialTitle: "Поделиться платформой с друзьями",
  },
  en: {
    badge: "METHODOLOGY & STEP-BY-STEP GUIDE",
    titleStart: "How It Works:",
    titleHighlight: "Learn Croatian Language",
    titleEnd: "from complete beginner to fluent",
    subtitle:
      "Croatia Mentor is a 100% free interactive platform combining CEFR methodology (A1-C2), AI speaking simulations, real-time voice pronunciation evaluator, and SM-2 spaced repetition for rapid Croatian language mastery.",
    ctaPrimary: "Start Learning Free",
    ctaSecondary: "Take Level Assessment Test",
    howItWorksTitle: "5 Steps of Your Learning Journey",
    howItWorksSub: "How our structured methodology ensures rapid and long-lasting Croatian fluency",
    steps: [
      {
        num: "01",
        title: "Diagnostic Level Assessment & Smart Route",
        desc: "Take an adaptive placement test (A1 to B2) that evaluates your current skills and creates a personalized learning trajectory without wasting time.",
        tag: "Getting Started",
      },
      {
        num: "02",
        title: "Interactive Micro-Grammar & Reading Lessons",
        desc: "Bite-sized 10-15 minute lessons with real-life examples: 7 Croatian cases (padeži), verbs biti/htjeti, word order, and interactive reader with one-click translations.",
        tag: "Grammar & Reading",
      },
      {
        num: "03",
        title: "Voice Pronunciation Evaluator & Dictations",
        desc: "Real-time Croatian speech recognition. Master special diacritics (č, ć, đ, š, ž) and practice listening with native neural audio dictations.",
        tag: "Voice Recognition",
      },
      {
        num: "04",
        title: "Scientific SRS Vocabulary (Spaced Repetition)",
        desc: "SuperMemo SM-2 algorithm calculates the ideal review intervals right before you forget. Master 1,500+ vocabulary words with audio and example sentences.",
        tag: "Vocabulary Builder",
      },
      {
        num: "05",
        title: "AI Speaking Tutor & Real-Life Expat Roleplays",
        desc: "Simulate real-life conversations in Croatia: MUP residency paperwork, doctor appointments, apartment rentals, banking, ordering food, and workplace talk.",
        tag: "Speaking Practice",
      },
    ],
    featuresTitle: "Platform Features & Tools",
    f1Title: "International CEFR Standards",
    f1Desc: "Clearly structured levels A1, A2, B1, B2, C1, and C2 with progressive difficulty and tangible milestone achievements.",
    f2Title: "AI Conversational Tutor",
    f2Desc: "Smart AI mentor that analyzes your writing, explains grammar nuances, and engages in realistic roleplays in Croatian.",
    f3Title: "8 Arcade Learning Games",
    f3Desc: "Audio dictation, Word match, Fill in the blanks, Word scramble, Hangman, and Speed quiz for fun daily practice.",
    guideTitle: "Secrets & Insights of Croatian Language",
    guideSub: "Essential tips to accelerate your Croatian fluency",
    guides: [
      {
        title: "Gaj's Latin Alphabet (Gajica)",
        desc: "The Croatian alphabet has 30 letters. Learn the difference between hard 'Č' and soft 'Ć', voiced 'Đ', 'Š', 'Ž', and digraphs 'Dž', 'Lj', 'Nj'. Our built-in diacritic keyboard makes typing easy on any device.",
      },
      {
        title: "Watch Out for 'False Friends'",
        desc: "Beware of tricky false cognates: 'stolica' means chair, 'trbuh' means belly/stomach, 'pravo' means straight ahead (not right), 'godina' means year, and 'trudna' means pregnant.",
      },
      {
        title: "Mastering the 7 Cases (Padeži)",
        desc: "Croatian uses 7 grammatical cases: Nominative, Genitive, Dative, Accusative, Vocative, Locative, and Instrumental. Our lessons demystify case endings with clear tables and real conversational contexts.",
      },
      {
        title: "The 15-Minute Daily Habit Rule",
        desc: "15 minutes of focused daily practice is 3-4x more effective than cramming once a week. Our streak system and daily challenges help you stay consistent effortlessly.",
      },
    ],
    levelsTitle: "Language Levels Covered (CEFR)",
    levelsSub: "Structured lessons tailored for any learning objective",
    levels: [
      {
        badge: "A1 · Beginner",
        title: "Survival & Essentials",
        desc: "Alphabet, greetings, numbers, present tense of biti/imati, basic questions at stores, cafes, and hotels.",
        color: "emerald",
      },
      {
        badge: "A2 · Elementary",
        title: "Daily Life & Navigation",
        desc: "Past tense (perfekt), basic cases, describing routines, renting apartments, and doctor visits.",
        color: "teal",
      },
      {
        badge: "B1 · Intermediate",
        title: "Confident Conversations",
        desc: "Future tense (futur), all 7 cases, formal correspondence, discussing plans, and workplace communications.",
        color: "indigo",
      },
      {
        badge: "B2 · Upper Intermediate",
        title: "Fluent Expression",
        desc: "Understanding native TV/radio news broadcasts, complex sentence structures, idioms, and colloquial slang.",
        color: "purple",
      },
    ],
    faqTitle: "Frequently Asked Questions About Learning Croatian",
    faqs: [
      {
        q: "Is Croatia Mentor really 100% free?",
        a: "Yes! Croatia Mentor is 100% free with no subscription fees, hidden paywalls, microtransactions, or intrusive ads. All levels from A1 to C2, flashcards, and the AI tutor are fully unlocked.",
      },
      {
        q: "How long does it take to learn Croatian from scratch?",
        a: "With daily 15-20 minute sessions, learners typically reach conversational elementary level (A2) in 2-3 months, and achieve solid intermediate fluency (B1) within 4-6 months.",
      },
      {
        q: "How does the voice pronunciation evaluator work?",
        a: "You click the microphone icon and speak the phrase in Croatian. The speech recognition engine evaluates your pronunciation accuracy with tolerance for Croatian accents and diacritics (č, ć, đ, š, ž).",
      },
      {
        q: "Can this course prepare me for Croatian residency (MUP) or citizenship tests?",
        a: "Yes. Our curriculum follows CEFR standards and includes dedicated modules for administrative processes, residency permits (MUP), healthcare, and daily living in Croatia.",
      },
      {
        q: "Is Croatian difficult to learn for English speakers?",
        a: "Croatian has phonetic spelling (each letter corresponds to one sound), but requires understanding cases (padeži) and verb conjugations. Our step-by-step interactive method breaks down complex grammar into easy bites.",
      },
      {
        q: "Can I use Croatia Mentor on mobile devices?",
        a: "Yes! Croatia Mentor is fully responsive and optimized for smartphones, tablets, and desktops with seamless audio and microphone support in any mobile browser.",
      },
    ],
    socialTitle: "Share Croatia Mentor with Friends",
  },
};

export default async function LearnCroatianPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "ru" || locale === "ua" ? locale : "en") as "en" | "ru" | "ua";
  const text = pageData[lang] || pageData.en;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: text.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: text.titleStart + " " + text.titleHighlight + " " + text.titleEnd,
    description: text.subtitle,
    step: text.steps.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.title,
      text: step.desc,
    })),
  };

  return (
    <div className="relative min-h-screen bg-transparent text-slate-100 font-sans selection:bg-purple-600 selection:text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center space-y-6 pt-4 sm:pt-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-300 bg-cyan-950/60 px-4 py-2 rounded-full border border-cyan-500/30 backdrop-blur-sm shadow-lg shadow-cyan-950/50">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>{text.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight font-editorial">
          {text.titleStart}{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            {text.titleHighlight}
          </span>{" "}
          {text.titleEnd}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {text.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/sign-up"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold uppercase text-xs sm:text-sm tracking-[0.2em] transition-all shadow-xl shadow-blue-600/30 rounded-2xl flex items-center justify-center gap-3 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>{text.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/placement-test"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-bold uppercase text-xs sm:text-sm tracking-[0.15em] transition-all rounded-2xl backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-800"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>{text.ctaSecondary}</span>
          </Link>
        </div>
      </section>

      {/* 5-Step Methodology: How It Works */}
      <section className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Step-by-Step</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-editorial text-white">
            {text.howItWorksTitle}
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            {text.howItWorksSub}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {text.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all hover:bg-slate-900/95 group shadow-lg"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400 font-black text-xl font-mono flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.num}
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {step.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="hidden lg:flex items-center text-slate-600 group-hover:text-cyan-400 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights 3-Column Grid */}
      <section className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-editorial text-white">
            {text.featuresTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md space-y-4 group transition-all shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold uppercase font-editorial text-white group-hover:text-cyan-300 transition-colors">
              {text.f1Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {text.f1Desc}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 backdrop-blur-md space-y-4 group transition-all shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Bot className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold uppercase font-editorial text-white group-hover:text-indigo-300 transition-colors">
              {text.f2Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {text.f2Desc}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 backdrop-blur-md space-y-4 group transition-all shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold uppercase font-editorial text-white group-hover:text-purple-300 transition-colors">
              {text.f3Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {text.f3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Language Guide & Linguistic Tips */}
      <section className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-md space-y-8 shadow-2xl">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Linguistic Insights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-editorial text-white">
            {text.guideTitle}
          </h2>
          <p className="text-slate-300 text-sm">{text.guideSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {text.guides.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5"
            >
              <h3 className="font-bold text-white text-base flex items-center gap-2 text-cyan-300">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CEFR Levels Overview */}
      <section className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-editorial text-white">
            {text.levelsTitle}
          </h2>
          <p className="text-slate-300 text-sm">{text.levelsSub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {text.levels.map((lvl, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 inline-block">
                  {lvl.badge}
                </span>
                <h3 className="font-bold text-white uppercase text-sm pt-1">
                  {lvl.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lvl.desc}
                </p>
              </div>

              <Link
                href="/lessons"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 pt-2"
              >
                <span>Уроки рівня</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Localized FAQ Section */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <HelpCircle className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial text-white">
            {text.faqTitle}
          </h2>
        </div>

        <div className="space-y-4">
          {text.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 backdrop-blur-md shadow-md"
            >
              <h3 className="text-base font-bold text-white flex items-start gap-2">
                <span className="text-cyan-400 font-mono text-sm">Q:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-5 font-normal">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Share Section */}
      <section className="max-w-4xl mx-auto">
        <SocialShare title={text.titleStart + " " + text.titleHighlight + " – Croatia Mentor"} />
      </section>

      {/* Final Call to Action */}
      <section className="max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-slate-900 border border-cyan-500/30 space-y-6 shadow-2xl backdrop-blur-xl">
        <Award className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
        <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white font-editorial">
          {lang === "ua"
            ? "Розпочніть свій шлях до вільної хорватської вже сьогодні"
            : lang === "ru"
            ? "Начните свой путь к свободному хорватскому уже сегодня"
            : "Start your journey to fluent Croatian language today"}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          {lang === "ua"
            ? "Приєднуйтесь до тисяч учнів. 100% безкоштовно, без реклами та прихованих підписок."
            : lang === "ru"
            ? "Присоединяйтесь к тысячам учащихся. 100% бесплатно, без рекламы и скрытых подписок."
            : "Join thousands of learners. 100% free with no ads, paywalls, or hidden fees."}
        </p>
        <div className="pt-2">
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-90 text-white font-black uppercase text-xs sm:text-sm tracking-[0.2em] rounded-2xl shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <span>{text.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
