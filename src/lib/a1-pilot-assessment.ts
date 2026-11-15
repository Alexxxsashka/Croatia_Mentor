import "server-only";
import type { PilotId, PilotTask } from "./a1-pilot";

const words = (en: string, ru: string, ua: string) => ({ en, ru, ua });
const clean = (text: string) => text.toLocaleLowerCase("hr").normalize("NFD")
  .replace(/\p{M}/gu, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, " ").trim();

const has = (text: string, phrase: string) => ` ${text} `.includes(` ${clean(phrase)} `);
const any = (text: string, phrases: string[]) => phrases.some((phrase) => has(text, phrase));

const names = [["Iva", "Petar", "Marta", "Luka"], ["Mia", "Ivan", "Ema", "Filip"]];
const countries = [
  [["Germany", "Германия", "Німеччина", "Njemačke"], ["Ukraine", "Украина", "Україна", "Ukrajine"], ["Spain", "Испания", "Іспанія", "Španjolske"], ["Poland", "Польша", "Польща", "Poljske"]],
  [["Austria", "Австрия", "Австрія", "Austrije"], ["France", "Франция", "Франція", "Francuske"], ["Italy", "Италия", "Італія", "Italije"], ["Canada", "Канада", "Канада", "Kanade"]],
];
const drinks = [
  [["tea", "чай", "чай", "čaj"], ["water", "вода", "вода", "vodu"], ["juice", "сок", "сік", "sok"], ["milk", "молоко", "молоко", "mlijeko"]],
  [["lemonade", "лимонад", "лимонад", "limunadu"], ["mineral water", "минеральная вода", "мінеральна вода", "mineralnu vodu"], ["orange juice", "апельсиновый сок", "апельсиновий сік", "sok od naranče"], ["hot chocolate", "горячий шоколад", "гарячий шоколад", "vruću čokoladu"]],
];
const destinations = [
  [["Zagreb", "Загреб", "Загреб", "Zagreb", "Zagreba"], ["Zadar", "Задар", "Задар", "Zadar", "Zadra"], ["Rijeka", "Риека", "Рієка", "Rijeku", "Rijeke"], ["Pula", "Пула", "Пула", "Pulu", "Pule"]],
  [["Šibenik", "Шибеник", "Шибеник", "Šibenik", "Šibenika"], ["Osijek", "Осиек", "Осієк", "Osijek", "Osijeka"], ["Varaždin", "Вараждин", "Вараждин", "Varaždin", "Varaždina"], ["Dubrovnik", "Дубровник", "Дубровник", "Dubrovnik", "Dubrovnika"]],
];

const venues = [
  words("at a café counter", "у стойки кафе", "біля стійки кафе"),
  words("at a station café", "в кафе на вокзале", "у кафе на вокзалі"),
  words("at a bakery café", "в кафе-пекарне", "у кафе-пекарні"),
  words("at an outdoor café", "в уличном кафе", "у вуличному кафе"),
];

export const variantCount = 16;

export function makeAssessment(lessonId: PilotId, review: boolean, index: number) {
  const pool = review ? 1 : 0;
  const slot = index % 4;
  const other = Math.floor(index / 4);
  let scenario: PilotTask["scenario"];
  let rules: { label: PilotTask["criteria"][number]; accepts: (text: string) => boolean }[];

  if (lessonId === "a1-grammar-2") {
    const name = names[pool][slot];
    const [en, ru, ua, hr] = countries[pool][other];
    scenario = words(
      `You meet another student. Your name is ${name}. Your country is ${en}. Write what you would say.`,
      `Вы знакомитесь с другим учеником. Вас зовут ${name}. Ваша страна — ${ru}. Напишите, что скажете.`,
      `Ви знайомитеся з іншим учнем. Вас звати ${name}. Ваша країна — ${ua}. Напишіть, що скажете.`,
    );
    rules = [
      { label: words("Introduce yourself by name", "Представьтесь по имени", "Представтеся на ім’я"), accepts: (text) => any(text, [`zovem se ${name}`, `ja sam ${name}`, `${name} sam`, `moje ime je ${name}`]) },
      { label: words("Say where you are from", "Скажите, откуда вы", "Скажіть, звідки ви"), accepts: (text) => any(text, [`iz ${hr} sam`, `sam iz ${hr}`, `dolazim iz ${hr}`]) },
    ];
  } else if (lessonId === "a1-reading-1") {
    const [en, ru, ua, hr] = drinks[pool][slot];
    const venue = venues[other];
    scenario = words(
      `You are ${venue.en}. You want to order: ${en}. Then ask for the bill. Write both requests in Croatian.`,
      `Вы ${venue.ru}. Ваш заказ — ${ru}. Затем нужно попросить счёт. Напишите обе просьбы по-хорватски.`,
      `Ви ${venue.ua}. Ваше замовлення — ${ua}. Потім попросіть рахунок. Напишіть обидва прохання хорватською.`,
    );
    rules = [
      { label: words("Order the drink politely", "Вежливо закажите напиток", "Ввічливо замовте напій"), accepts: (text) => has(text, hr) && any(text, ["molim", "može", "mogu li dobiti", "htio bih", "htjela bih", "želio bih", "željela bih"]) },
      { label: words("Ask for the bill", "Попросите счёт", "Попросіть рахунок"), accepts: (text) => has(text, "račun") && any(text, ["molim", "može", "mogu li dobiti", "možete li donijeti", "donesite", "htio bih", "htjela bih"]) },
    ];
  } else {
    const [en, ru, ua, hr, genitive] = destinations[pool][slot];
    const count = other % 2 === 0 ? 1 : 2;
    const online = other >= 2;
    const location = online ? words("You are messaging a ticket office.", "Вы пишете в билетную кассу.", "Ви пишете до квиткової каси.")
      : words("You are at the ticket counter.", "Вы у билетной кассы.", "Ви біля квиткової каси.");
    scenario = words(
      `${location.en} Destination: ${en}. Tickets: ${count}. Ask the price, then request the tickets.`,
      `${location.ru} Пункт назначения — ${ru}. Билетов — ${count}. Спросите цену, затем попросите билеты.`,
      `${location.ua} Пункт призначення — ${ua}. Квитків — ${count}. Запитайте ціну, потім попросіть квитки.`,
    );
    const ticketForms = count === 1 ? ["jednu kartu", "jedna karta", "kartu", "karta", "1 kartu"] : ["dvije karte", "2 karte"];
    rules = [
      { label: words("Ask the price", "Спросите цену", "Запитайте ціну"), accepts: (text) => any(text, ["koliko košta", "koliko koštaju", "koja je cijena", "koliko je", "koliko su"]) },
      { label: words("Request the tickets for the destination", "Попросите нужные билеты до указанного города", "Попросіть потрібні квитки до вказаного міста"), accepts: (text) => any(text, ticketForms) && any(text, ["molim", "može", "mogu li kupiti", "htio bih", "htjela bih"]) && any(text, [`za ${hr}`, `do ${genitive}`]) },
    ];
  }
  return { scenario, rules };
}

export function gradeAssessment(rules: ReturnType<typeof makeAssessment>["rules"], answers: string[]) {
  return rules.flatMap((rule, index) => {
    const answer = clean(answers[index] ?? "");
    return rule.accepts(answer) && !any(answer, ["ne želim", "ne bih", "ne trebam", "nemojte", "nisam"]) ? [] : [index];
  });
}
