// Lesson vocabulary uses dictionary forms so every saved word can be reviewed.
export const workbookVocabulary = {
  "a1-grammar-1": "brat|brother|брат|брат;sestra|sister|сестра|сестра;dijete|child|ребёнок|дитина",
  "a1-grammar-2": "učitelj|teacher|учитель|учитель;prijatelj|friend|друг|друг;kolega|colleague|коллега|колега",
  "a1-grammar-3": "ključ|key|ключ|ключ;karta|ticket|билет|квиток;stolica|chair|стул|стілець",
  "a1-grammar-4": "morati|must|быть должным|мусити;moći|can|мочь|могти;htjeti|want|хотеть|хотіти",
  "a1-reading-1": "kava|coffee|кофе|кава;račun|bill / receipt|счёт / чек|рахунок / чек;gotovina|cash|наличные|готівка",
  "a1-dictation-1": "dobro jutro|good morning|доброе утро|добрий ранок;doviđenja|goodbye|до свидания|до побачення;oprostite|excuse me|извините|перепрошую",
  "a1-grammar-5": "stol|table|стол|стіл;selo|village|деревня|село;most|bridge|мост|міст",
  "a1-grammar-6": "obitelj|family|семья|сім’я;dvorište|yard|двор|подвір’я;baka|grandmother|бабушка|бабуся",
  "a1-grammar-7": "hladan|cold|холодный|холодний;topao|warm|тёплый|теплий;jakna|jacket|куртка|куртка",
  "a2-grammar-1": "kaput|coat|пальто|пальто;prijateljica|female friend|подруга|подруга;večera|dinner|ужин|вечеря",
  "a2-grammar-2": "knjižnica|library|библиотека|бібліотека;povijest|history|история|історія;novčanik|wallet|кошелёк|гаманець",
  "a2-communication-1": "jelovnik|menu|меню|меню;predjelo|starter|закуска|закуска;sladoled|ice cream|мороженое|морозиво",
  "a2-grammar-3": "zaboraviti|to forget|забыть|забути;putovati|to travel|путешествовать|подорожувати;poruka|message|сообщение|повідомлення",
  "a2-grammar-4": "tržnica|market|рынок|ринок;zakasniti|to be late|опоздать|запізнитися;sastanak|meeting|встреча|зустріч",
  "a2-communication-2": "blagajna|checkout|касса|каса;sniženje|discount|скидка|знижка;vrećica|small bag|пакетик|пакетик",
  "a2-grammar-5": "olovka|pencil|карандаш|олівець;nož|knife|нож|ніж;liječnica|female doctor|врач|лікарка",
  "a2-grammar-6": "zahvaliti|to thank|поблагодарить|подякувати;unatoč|despite|несмотря на|попри;učenik|pupil|ученик|учень",
  "a2-grammar-7": "vrh|peak|вершина|вершина;kratak|short|короткий|короткий;jeftin|cheap|дешёвый|дешевий",
  "a2-grammar-8": "buditi se|to wake up|просыпаться|прокидатися;odmarati se|to rest|отдыхать|відпочивати;brinuti se|to worry|беспокоиться|хвилюватися",
  "b1-grammar-1": "dovršiti|to finish|закончить|закінчити;izvještaj|report|отчёт|звіт;pronaći|to find|найти|знайти",
  "b1-grammar-2": "napredovati|to make progress|продвигаться|просуватися;svratiti|to drop by|заглянуть|завітати;javiti se|to get in touch|связаться|зв’язатися",
  "b1-grammar-3": "utakmica|match|матч|матч;kolodvor|station|вокзал|вокзал;lebdjeti|to hover|парить|ширяти",
  "b1-reading-2": "onečišćenje|pollution|загрязнение|забруднення;stanište|habitat|среда обитания|середовище існування;okoliš|environment|окружающая среда|довкілля",
  "b1-reading-3": "sažetak|summary|краткое изложение|стислий виклад;potkrijepiti|to support with evidence|подкрепить|підкріпити;pravopis|spelling rules|правописание|правопис",
  "b2-grammar-1": "pošiljka|shipment|отправление|відправлення;jednoglasno|unanimously|единогласно|одноголосно;stupiti na snagu|to enter into force|вступить в силу|набути чинності",
  "b2-grammar-2": "prihvatiti|to accept|принять|прийняти;ponuda|offer|предложение|пропозиція;uspjeti|to succeed|добиться успеха|досягти успіху",
  "b2-communication-1": "životopis|résumé|резюме|резюме;poslodavac|employer|работодатель|роботодавець;plaća|salary|зарплата|зарплата",
  "c1-grammar-1": "premda|although|хотя|хоча;obilazno|by a detour|в объезд|в об’їзд;pod uvjetom da|provided that|при условии что|за умови що",
  "c1-grammar-2": "čak i ako|even if|даже если|навіть якщо;primjerak|copy|экземпляр|примірник;uplata|payment|платёж|платіж",
  "c2-grammar-1": "baciti koplje u trnje|to give up|сдаться|здатися;prodavati maglu|to deceive|обманывать|обманювати;praviti od muhe slona|to make a mountain out of a molehill|делать из мухи слона|робити з мухи слона",
  "c2-communication-1": "stajalište|standpoint|точка зрения|точка зору;ustupak|concession|уступка|поступка;obrazloženje|reasoned explanation|обоснование|обґрунтування",
};

export const workbookWordsByLesson = Object.fromEntries(
  Object.entries(workbookVocabulary).map(([id, words]) => [
    id,
    words.split(";").map((entry) => {
      const [hr, en, ru, ua] = entry.split("|");
      return { hr, en, ru, ua, level: id.slice(0, 2).toUpperCase(), category: "general" };
    }),
  ]),
);
