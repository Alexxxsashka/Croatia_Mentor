export const pilotIds = ["a1-grammar-2", "a1-reading-1", "a1-grammar-3"] as const;
export type PilotId = (typeof pilotIds)[number];
export type PilotLocale = "en" | "ru" | "ua";

export const pilotText = (locale: string, en: string, ru: string, ua: string) =>
  locale === "ru" ? ru : locale === "ua" ? ua : en;

const words = (en: string, ru: string, ua: string) => ({ en, ru, ua });

type PilotLesson = {
  title: ReturnType<typeof words>;
  ready: ReturnType<typeof words>;
  goal: ReturnType<typeof words>;
  reuse: ReturnType<typeof words>;
  check: ReturnType<typeof words>;
  dialogue: string[];
  repair: { question: ReturnType<typeof words>; hints: [ReturnType<typeof words>, ReturnType<typeof words>]; model: string };
};

export const pilotLessons: Record<PilotId, PilotLesson> = {
  "a1-grammar-2": {
    title: words("Meet someone", "Познакомиться", "Познайомитися"),
    ready: words("Recognise a basic greeting.", "Узнавать простое приветствие.", "Розпізнавати просте привітання."),
    goal: words("Introduce yourself and say where you are from.", "Представиться и сказать, откуда вы.", "Представитися й сказати, звідки ви."),
    reuse: words("Use a greeting when you order at the café.", "Поздороваться при заказе в кафе.", "Привітатися під час замовлення в кафе."),
    check: words("Respond with the name and origin given for your role.", "Ответить, назвав имя и страну из вашей роли.", "Відповісти, назвавши ім’я та країну зі своєї ролі."),
    dialogue: ["Bok! Kako se zoveš?", "Bok! Zovem se Ana.", "Odakle si?", "Iz Hrvatske sam."],
    repair: {
      question: words("Introduce yourself as Ana from Croatia.", "Представьтесь как Ана из Хорватии.", "Представтеся як Ана з Хорватії."),
      hints: [
        words("Put the name after zovem se.", "Поставьте имя после zovem se.", "Поставте ім’я після zovem se."),
        words("Use iz with the genitive of the country.", "После iz поставьте название страны в родительном падеже.", "Після iz поставте назву країни в родовому відмінку."),
      ],
      model: "Zovem se Ana. Iz Hrvatske sam.",
    },
  },
  "a1-reading-1": {
    title: words("Order at a café", "Сделать заказ в кафе", "Зробити замовлення в кафе"),
    ready: words("Greet someone and recognise a simple question.", "Поздороваться и понять простой вопрос.", "Привітатися й зрозуміти просте запитання."),
    goal: words("Order a drink and ask for the bill politely.", "Вежливо заказать напиток и попросить счёт.", "Ввічливо замовити напій і попросити рахунок."),
    reuse: words("Use the same polite request at the ticket counter.", "Использовать вежливую просьбу в билетной кассе.", "Використати ввічливе прохання в квитковій касі."),
    check: words("Order the requested drink and ask for the bill.", "Заказать нужный напиток и попросить счёт.", "Замовити потрібний напій і попросити рахунок."),
    dialogue: ["Dobar dan! Što želite?", "Jednu kavu, molim.", "Izvolite.", "Hvala. Molim vas, račun."],
    repair: {
      question: words("Politely ask for a coffee, then ask for the bill.", "Вежливо попросите кофе, а затем счёт.", "Ввічливо попросіть каву, а потім рахунок."),
      hints: [
        words("Name the drink in the accusative and use a polite request.", "Назовите напиток в винительном падеже и добавьте вежливую просьбу.", "Назвіть напій у знахідному відмінку й додайте ввічливе прохання."),
        words("Ask for the bill using račun in your second reply.", "Во второй реплике попросите счёт, используя račun.", "У другій репліці попросіть рахунок, уживши račun."),
      ],
      model: "Jednu kavu, molim. Molim vas, račun.",
    },
  },
  "a1-grammar-3": {
    title: words("Ask the price and buy a ticket", "Спросить цену и купить билет", "Запитати ціну й купити квиток"),
    ready: words("Make a polite request and recognise basic numbers.", "Вежливо попросить и распознать простые числа.", "Ввічливо попросити й розпізнати прості числа."),
    goal: words("Ask for the price and request a ticket to a destination.", "Узнать цену и попросить билет до нужного города.", "Дізнатися ціну й попросити квиток до потрібного міста."),
    reuse: words("Use the price question for other purchases and A2 travel tasks.", "Использовать вопрос о цене в других покупках и поездках уровня A2.", "Використати запитання про ціну в інших покупках і подорожах рівня A2."),
    check: words("Ask the price and specify the destination in your request.", "Спросить цену и указать город в просьбе о билете.", "Запитати ціну й зазначити місто у проханні про квиток."),
    dialogue: ["Dobar dan! Izvolite.", "Koliko košta karta za Split?", "Osam eura.", "Jednu kartu za Split, molim."],
    repair: {
      question: words("Ask the price and request a ticket to Split.", "Спросите цену и попросите билет до Сплита.", "Запитайте ціну й попросіть квиток до Спліта."),
      hints: [
        words("Use koliko košta to ask for the price.", "Используйте koliko košta, чтобы спросить цену.", "Ужийте koliko košta, щоб запитати ціну."),
        words("Include the number of tickets and the city in your request.", "Укажите количество билетов и город в просьбе.", "Зазначте кількість квитків і місто у проханні."),
      ],
      model: "Koliko košta karta? Molim jednu kartu za Split.",
    },
  },
};

export function isPilotId(id: string): id is PilotId {
  return pilotIds.some((pilotId) => pilotId === id);
}

export const pilotStatuses = {
  working: words("In progress", "В работе", "У процесі"),
  ready: words("Can do it", "Получается", "Виходить"),
  confirmed: words("Confirmed", "Закреплено", "Закріплено"),
};

export const reviewDelay = 7 * 24 * 60 * 60 * 1000;

export type PilotProgress = {
  lessonId: PilotId;
  status: keyof typeof pilotStatuses;
  dueAt: string | null;
  due: boolean;
  needsPractice: boolean;
  lastMisses: number[];
};

export type PilotTask = {
  attempt: string;
  review: boolean;
  scenario: ReturnType<typeof words>;
  criteria: ReturnType<typeof words>[];
};

export type PilotFeedback = {
  passed: boolean;
  misses: number[];
  review: boolean;
};
