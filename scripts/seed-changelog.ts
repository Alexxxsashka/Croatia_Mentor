import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const version = "v1.3.0";
  const titleEn = "Major Update: Neural Audio TTS, Audio Dictation Game & Improved Placement Tests!";
  const titleRu = "Большое обновление: Нейросетевая озвучка, Аудио-диктант и улучшенные тесты!";
  const titleUa = "Велике оновлення: Нейромережева озвучка, Аудіо-диктант та покращені тести!";

  const contentEn = `[b]I’ve taken all your suggestions and comments into account, and here are the major new changes:[/b]

[list]
[*] [b]Placement Test Upgrade:[/b] The language proficiency test has been improved and made more challenging, with translations from native languages and a 15-minute timer added.
[*] [b]Lessons & Exercises:[/b] All lessons have been revised, and the number of practice exercises has been increased.
[*] [b]New A1 & A2 Lessons:[/b] New lessons for levels A1 and A2 have been added, based on the textbook "toaz info hrvatski za pocetnike."
[*] [b]Expanded Vocabulary:[/b] The number of useful words in the dictionary has been significantly increased.
[*] [b]Grammar Glossary Expansion:[/b] The theory section in the Glossary has been expanded and revised.
[*] [b]Neural Speech Engine (TTS):[/b] High-quality Croatian voice synthesis powered by Microsoft Edge Neural Speech, correctly pronouncing diacritics (č, ć, đ, š, ž).
[*] [b]Audio Dictation Game:[/b] New dedicated "Audio Dictation" mini-game and practice mode for spelling Croatian words on hearing without visual text hints.
[*] [b]Fuzzy Diacritic Recognition ("Almost Correct"): [/b] Intelligent spelling checker that recognizes standard Latin characters (c, s, z, d) as "Almost Correct" with diacritic guidance.
[*] [b]Automatic Spaced Repetition (SM-2):[/b] Automated word status tracking (New, Learning, Due for Review, Learned) after every test.
[/list]

[b]Thank you all for your support![/b] I’d also like to remind you that the website has a [url=/contacts][b]"Contacts"[/b][/url] section, where you’ll find a Ukrainian Monobank account for donations toward further development, as well as Croatian bank details. We have many plans for development, but they will be costly. Since the site has no ads or microtransactions, we need external support and investments. You can also find my contact information there for feedback.`;

  const contentRu = `[b]Учтены все ваши пожелания и замечания! Вот список главных нововведений:[/b]

[list]
[*] [b]Обновление теста уровня:[/b] Тест на определение уровня языка был улучшен и усложнён, добавлены переводы с родного языка и 15-минутный таймер.
[*] [b]Улучшение уроков:[/b] Все уроки переработаны, а количество практических упражнений увеличено.
[*] [b]Новые уроки A1 и A2:[/b] Добавлены новые уроки для уровней A1 и A2 на основе учебника «toaz info hrvatski za pocetnike».
[*] [b]Расширение словаря:[/b] Значительно увеличено количество полезных слов в словаре.
[*] [b]Доработка Глоссария:[/b] Раздел теории в Глоссарии расширен и переработан.
[*] [b]Нейросетевая озвучка (TTS):[/b] Подключен высококачественный нейросетевой голос Microsoft Edge для идеального чтения хорватского языка со спецсимволами (č, ć, đ, š, ž).
[*] [b]Режим «Аудио-диктант»:[/b] Добавлена новая мини-игра и режим тестов для написания слов на слух без визуальных подсказок.
[*] [b]Интеллектуальная проверка «Почти правильно»:[/b] Система автоматически подсказывает при вводе с обычной латинской клавиатуры (c → č/ć, s → š, z → ž, d → đ).
[*] [b]Автоматическое отслеживание прогресса (SM-2):[/b] Система сама определяет выученные слова и формирует график повторений после каждого теста.
[/list]

[b]Спасибо всем за поддержку![/b] Напоминаю, что на сайте есть раздел [url=/contacts][b]«Контакты»[/b][/url], где вы найдёте украинскую банку Mono-bank для донатов на дальнейшее развитие, а также хорватские банковские реквизиты. У нас много планов по развитию, но они требуют ресурсов. Так как на сайте нет рекламы и микротранзакций, нам очень важна ваша поддержка. Также там вы можете найти мои контакты для обратной связи.`;

  const contentUa = `[b]Враховано всі ваші побажання та зауваження! Ось список головних оновлень:[/b]

[list]
[*] [b]Оновлення тесту рівня:[/b] Тест на визначення рівня мови було покращено та ускладнено, додано переклади з рідної мови та 15-хвилинний таймер.
[*] [b]Покращення уроків:[/b] Усі уроки перероблено, а кількість практичних вправ збільшено.
[*] [b]Нові уроки A1 та A2:[/b] Додано нові уроки для рівнів A1 та A2 на основі підручника «toaz info hrvatski za pocetnike».
[*] [b]Розширення словника:[/b] Значно збільшено кількість корисних слів у словнику.
[*] [b]Допрацювання Глосарію:[/b] Розділ теорії в Глосарії розширено та перероблено.
[*] [b]Нейромережева озвучка (TTS):[/b] Підключено високоякісний нейромережевий голос Microsoft Edge для ідеального читання хорватської мови зі спецсимволами (č, ć, đ, š, ž).
[*] [b]Режим «Аудіо-диктант»:[/b] Додано нову міні-гру та режим тестів для написання слів на слух без візуальних підказок.
[*] [b]Інтелектуальна перевірка «Майже правильно»:[/b] Система автоматично підказує при вводі зі звичайної латинської клавіатури (c → č/ć, s → š, z → ž, d → đ).
[*] [b]Автоматичне відстеження прогресу (SM-2):[/b] Система сама визначає вивчені слова та формує графік повторень після кожного тесту.
[/list]

[b]Дякуємо усім за підтримку![/b] Нагадуємо, що на сайті є розділ [url=/contacts][b]«Контакти»[/b][/url], де ви знайдете українську банку Mono-bank для донатів на подальший розвиток, а також хорватські банківські реквізити. У нас багато планів щодо розвитку, але вони потребують ресурсів. Оскільки на сайті немає реклами та мікротранзакцій, нам дуже важлива ваша підтримка. Також там ви можете знайти мої контакти для зворотного зв'язку.`;

  const newChangelog = await prisma.changelog.create({
    data: {
      version,
      titleEn,
      titleRu,
      titleUa,
      contentEn,
      contentRu,
      contentUa,
    },
  });

  console.log("Created Changelog entry successfully:", newChangelog.id);
}

main()
  .catch((err) => {
    console.error("Error creating changelog:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
