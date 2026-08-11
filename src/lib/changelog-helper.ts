import { prisma } from "@/lib/prisma";

export async function ensureDefaultChangelogs() {
  try {
    await prisma.changelog.upsert({
      where: { id: "changelog-v1.4.0" },
      update: {
        version: "v1.4.0",
        titleUa: "🤖 Точність ШІ-перекладів та чиста хорватська латинка!",
        titleRu: "🤖 Точность ИИ-переводов и чистая хорватская латиница!",
        titleEn: "🤖 Enhanced AI Accuracy & Pure Croatian Latin Script!",
        contentUa: `[b]Що нового у версії 1.4.0:[/b]

• [b]Чиста хорватська латинка[/b]: Виправлено генерацію хорватських слів та фраз — тепер усі переклади та приклади подаються виключно правильними хорватськими буквами (č, ć, đ, š, ž) без кирилиці.
• [b]Зрозумілі пояснення[/b]: Усі пояснення граматики та розбори фраз надаються вашою рідною мовою, а самі переклади — точного хорватською.
• [b]Підвищена точність[/b]: Оптимізовано роботу ШІ-моделей для більш чітких та достовірних відповідей.

❤️ [b]Підтримайте проєкт:[/b]
1. [b]Поділіться посиланням[/b] на сайт з друзями, знайомими та колегами, які вивчають хорватську мову!
2. [b]Підтримайте нас донатом[/b] — це допомагає покривати витрати на сервер та ШІ-моделі, щоб платформа залишалася безкоштовною для всіх!`,
        contentRu: `[b]Что нового в версии 1.4.0:[/b]

• [b]Чистая хорватская латиница[/b]: Исправлена генерация хорватских слов и фраз — теперь все переводы и примеры выводятся исключительно правильными хорватскими буквами (č, ć, đ, š, ž) без кириллицы.
• [b]Понятные объяснения[/b]: Все объяснения грамматики и разборы фраз даются на вашем родном языке, а сами переводы — точно на хорватском.
• [b]Повышенная точность[/b]: Оптимизирована работа ИИ-моделей для более четких и достоверных ответов.

❤️ [b]Поддержите проект:[/b]
1. [b]Поделитесь ссылкой[/b] на сайт с друзьями, знакомыми и коллегами, которые изучают хорватский язык!
2. [b]Поддержите нас донатом[/b] — это помогает покрывать расходы на сервер и ИИ-модели, чтобы платформа оставалась бесплатной для всех!`,
        contentEn: `[b]What's new in version 1.4.0:[/b]

• [b]Pure Croatian Latin Script[/b]: Fixed AI generation for Croatian translations — all words and example sentences are now strictly formatted in Gaj's Croatian Latin alphabet (č, ć, đ, š, ž).
• [b]Native Language Explanations[/b]: Grammar breakdowns and hints are provided in your native language, while translations remain in pure Croatian.
• [b]Higher Accuracy & Determinism[/b]: Fine-tuned AI generation parameters for clearer and more accurate responses.

❤️ [b]Support the Project:[/b]
1. [b]Share the website link[/b] with friends, family, and colleagues learning Croatian!
2. [b]Consider supporting us with a donation[/b] — this helps keep the servers and AI models running for everyone for free!`,
        createdAt: new Date(),
      },
      create: {
        id: "changelog-v1.4.0",
        version: "v1.4.0",
        titleUa: "🤖 Точність ШІ-перекладів та чиста хорватська латинка!",
        titleRu: "🤖 Точность ИИ-переводов и чистая хорватская латиница!",
        titleEn: "🤖 Enhanced AI Accuracy & Pure Croatian Latin Script!",
        contentUa: `[b]Що нового у версії 1.4.0:[/b]

• [b]Чиста хорватська латинка[/b]: Виправлено генерацію хорватських слів та фраз — тепер усі переклади та приклади подаються виключно правильними хорватськими буквами (č, ć, đ, š, ž) без кирилиці.
• [b]Зрозумілі пояснення[/b]: Усі пояснення граматики та розбори фраз надаються вашою рідною мовою, а самі переклади — точного хорватською.
• [b]Підвищена точність[/b]: Оптимізовано роботу ШІ-моделей для більш чітких та достовірних відповідей.

❤️ [b]Підтримайте проєкт:[/b]
1. [b]Поділіться посиланням[/b] на сайт з друзями, знайомими та колегами, які вивчають хорватську мову!
2. [b]Підтримайте нас донатом[/b] — це допомагає покривати витрати на сервер та ШІ-моделі, щоб платформа залишалася безкоштовною для всіх!`,
        contentRu: `[b]Что нового в версии 1.4.0:[/b]

• [b]Чистая хорватская латиница[/b]: Исправлена генерация хорватских слов и фраз — теперь все переводы и примеры выводятся исключительно правильными хорватскими буквами (č, ć, đ, š, ž) без кириллицы.
• [b]Понятные объяснения[/b]: Все объяснения грамматики и разборы фраз даются на вашем родном языке, а сами переводы — точно на хорватском.
• [b]Повышенная точность[/b]: Оптимизирована работа ИИ-моделей для более четких и достоверных ответов.

❤️ [b]Поддержите проект:[/b]
1. [b]Поделитесь ссылкой[/b] на сайт с друзьями, знакомыми и коллегами, которые изучают хорватский язык!
2. [b]Поддержите нас донатом[/b] — это помогает покрывать расходы на сервер и ИИ-модели, чтобы платформа оставалась бесплатной для всех!`,
        contentEn: `[b]What's new in version 1.4.0:[/b]

• [b]Pure Croatian Latin Script[/b]: Fixed AI generation for Croatian translations — all words and example sentences are now strictly formatted in Gaj's Croatian Latin alphabet (č, ć, đ, š, ž).
• [b]Native Language Explanations[/b]: Grammar breakdowns and hints are provided in your native language, while translations remain in pure Croatian.
• [b]Higher Accuracy & Determinism[/b]: Fine-tuned AI generation parameters for clearer and more accurate responses.

❤️ [b]Support the Project:[/b]
1. [b]Share the website link[/b] with friends, family, and colleagues learning Croatian!
2. [b]Consider supporting us with a donation[/b] — this helps keep the servers and AI models running for everyone for free!`
      },
    });

    const existing = await prisma.changelog.findUnique({
      where: { id: "changelog-v1.3.0" },
    });

    if (!existing) {
      await prisma.changelog.upsert({
        where: { id: "changelog-v1.3.0" },
        update: {},
        create: {
          id: "changelog-v1.3.0",
          version: "v1.3.0",
          titleUa: "🤖 Оновлений ШІ-чат, 4 режими навчання та адаптація світлої теми!",
          titleRu: "🤖 Обновленный ИИ-чат, 4 режима обучения и адаптация светлой темы!",
          titleEn: "🤖 Overhauled AI Chat, 4 Learning Modes & Light Theme Fixes!",
          contentUa: `[b]Що нового у версії 1.3.0:[/b]

• [b]Відкритий доступ до ШІ-чату для всіх[/b]: Вкладка «AI Чат» тепер доступна у головному меню для всіх користувачів та гостей!
• [b]4 спеціалізовані режими ШІ-наставника[/b]:
  1. [b]🎓 Чат-репетитор[/b]: Інтерактивне тренування з поясненнями граматики під ваш рівень (A1–C2).
  2. [b]📝 Перевірка творів[/b]: Повний аналіз ваших текстів з виправленням помилок, гачеків (č/ć/š/ž/đ) та детальною оцінкою.
  3. [b]🏆 Екзаменатор[/b]: Покроковий іспит хорватської мови з виставлянням балів.
  4. [b]🎭 Рольова гра[/b]: Практика діалогів у пекарні, ресторані, оренді житла та на ринку.
• [b]Миттєве перемикання та ізоляція режимів[/b]: Кожен режим зберігає свою історію повідомлень та привітання без змішування контексту. Додана кнопка «Очистити чат».
• [b]Строге дотримання тематики (Guardrails)[/b]: ШІ зосереджений виключно на вивченні хорватської мови та ввічливо відхиляє сторонні запити.
• [b]Повна підтримка світлої теми[/b]: Виправлено відображення випадаючих списків, селектів та полів вводу в усіх іграх і профілі у світлій темі.`,
          contentRu: `[b]Что нового в версии 1.3.0:[/b]

• [b]Открытый доступ к ИИ-чату для всех[/b]: Вкладка «AI Чат» теперь доступна в главном меню для всех пользователей и гостей!
• [b]4 специализированных режима ИИ-наставника[/b]:
  1. [b]🎓 Чат-репетитор[/b]: Интерактивная тренировка с объяснениями грамматики под ваш уровень (A1–C2).
  2. [b]📝 Проверка сочинений[/b]: Полный анализ ваших текстов с исправлением ошибок, гачеков (č/ć/š/ž/đ) и детальной оценкой.
  3. [b]🏆 Экзаменатор[/b]: Пошаговый экзамен хорватского языка с выставлением баллов.
  4. [b]🎭 Ролевая игра[/b]: Практика диалогов в пекарне, ресторане, аренде жилья и на рынке.
• [b]Мгновенное переключение и изоляция режимов[/b]: Каждый режим сохраняет свою историю сообщений и приветствие без смешивания контекста. Добавлена кнопка «Очистить чат».
• [b]Строгое следование тематике (Guardrails)[/b]: ИИ сосредоточен исключительно на обучении хорватскому языку и вежливо отклоняет сторонние запросы.
• [b]Полная поддержка светлой темы[/b]: Исправлено отображение выпадающих списков, селектов и полей ввода во всех играх и профиле в светлой теме.`,
          contentEn: `[b]What's new in version 1.3.0:[/b]

• [b]Open Access to AI Chat[/b]: The "AI Chat" tab is now visible in the main navigation menu for all users and guests!
• [b]4 Dedicated AI Mentor Modes[/b]:
  1. [b]🎓 Chat Tutor[/b]: Interactive conversation with grammar explanations tailored to your level (A1–C2).
  2. [b]📝 Essay Correction[/b]: Detailed text analysis with spelling fixes, diacritics check (č/ć/š/ž/đ), and scoring.
  3. [b]🏆 Examiner[/b]: Step-by-step Croatian exam with scoring.
  4. [b]🎭 Roleplay[/b]: Real-life conversation scenarios (Bakery, Restaurant, Apartment Renting, Open Market).
• [b]Instant Mode Switch & Isolated History[/b]: Each mode retains its own message history and specialized greeting. Added a "Clear Chat" button.
• [b]Strict Tutor Guardrails[/b]: AI focuses strictly on Croatian language tutoring and politely declines off-topic prompts.
• [b]Full Light Theme Support[/b]: Fixed select dropdowns, option elements, and inputs across all games and profile for light mode.`
        }
      });
    }
  } catch (err) {
    console.error("ensureDefaultChangelogs error:", err);
  }
}
