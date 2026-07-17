export interface ReadingText {
  id: string;
  title: { en: string; ru: string; ua: string };
  author: string;
  level: string;
  text: string;
  vocabulary: { hr: string; en: string; ru: string; ua: string }[];
  questions: {
    question: { en: string; ru: string; ua: string };
    options: string[];
    correctAnswer: string;
  }[];
  translationTasks: {
    hr: string;
    answer: { en: string; ru: string; ua: string };
  }[];
}

export const readingTexts: ReadingText[] = [
  {
    id: "mali-princ",
    title: { en: "The Little Prince (Excerpt)", ru: "Маленький принц (Отрывок)", ua: "Маленький принц (Уривок)" },
    author: "Antoine de Saint-Exupéry (Croatian translation)",
    level: "A2",
    text: `Kad sam imao šest godina, vidio sam prekrasnu sliku u jednoj knjizi o prašumi. Na slici je bio boa koji je gutao neku životinju. Nacrtao sam svoju prvu sliku. Pokazao sam svoje remek-djelo odraslima i upitao ih plaši li ih moj crtež. Odgovorili su: "Zašto bi nas šešir plašio?" Moj crtež nije prikazivao šešir. Prikazivao je boa koji je probavljao slona.`,
    vocabulary: [
      { hr: "prašuma", en: "jungle", ru: "джунгли", ua: "джунглі" },
      { hr: "boa", en: "boa constrictor", ru: "удав", ua: "удав" },
      { hr: "životinju", en: "animal", ru: "животное", ua: "тварина" },
      { hr: "nacrtao", en: "drew", ru: "нарисовал", ua: "намалював" },
      { hr: "remek-djelo", en: "masterpiece", ru: "шедевр", ua: "шедевр" },
      { hr: "odrasli", en: "adults", ru: "взрослые", ua: "дорослі" },
      { hr: "crtež", en: "drawing", ru: "рисунок", ua: "малюнок" },
      { hr: "šešir", en: "hat", ru: "шляпа", ua: "капелюх" },
      { hr: "slon", en: "elephant", ru: "слон", ua: "слон" },
    ],
    questions: [
      {
        question: { en: "How old was the narrator?", ru: "Сколько лет было рассказчику?", ua: "Скільки років було оповідачу?" },
        options: ["6", "8", "10", "12"],
        correctAnswer: "6",
      },
      {
        question: { en: "What did the adults think the drawing showed?", ru: "Что, по мнению взрослых, изображал рисунок?", ua: "Що, на думку дорослих, зображував малюнок?" },
        options: ["Šešir (hat)", "Boa", "Slon (elephant)", "Prašuma (jungle)"],
        correctAnswer: "Šešir (hat)",
      },
      {
        question: { en: "What was the drawing actually showing?", ru: "Что на самом деле изображал рисунок?", ua: "Що насправді зображував малюнок?" },
        options: ["Boa koji probavlja slona", "Šešir na stolu", "Prašuma", "Dijete"],
        correctAnswer: "Boa koji probavlja slona",
      },
    ],
    translationTasks: [
      { hr: "Kad sam imao šest godina", answer: { en: "When I was six years old", ru: "Когда мне было шесть лет", ua: "Коли мені було шість років" } },
      { hr: "prekrasnu sliku", answer: { en: "a beautiful picture", ru: "прекрасную картинку", ua: "прекрасну картинку" } },
      { hr: "remek-djelo", answer: { en: "masterpiece", ru: "шедевр", ua: "шедевр" } },
    ],
  },
  {
    id: "zagreb-opis",
    title: { en: "Zagreb — The Croatian Capital", ru: "Загреб — столица Хорватии", ua: "Загреб — столиця Хорватії" },
    author: "Croatia Mentor",
    level: "B1",
    text: `Zagreb je glavni grad Hrvatske i najveći grad u zemlji. Smješten je na rijeci Savi, u sjeverozapadnom dijelu države. Grad ima bogatu povijest koja seže u 11. stoljeće. Zagreb se sastoji od dva dijela: Gornji grad i Donji grad. Gornji grad je stariji dio s katedralom, crkvom svetog Marka i starim uličicama. Donji grad je moderniji, s parkovima, muzejima i glavnim trgom — Trgom bana Jelačića. Zagreb je kulturno središte s brojnim kazalištima, galerijama i festivalima. Grad je poznat po živoj kavaškoj kulturi i po tradiciji adventskih božićnih sajmova.`,
    vocabulary: [
      { hr: "glavni grad", en: "capital city", ru: "столица", ua: "столиця" },
      { hr: "smješten", en: "located", ru: "расположен", ua: "розташований" },
      { hr: "stoljeće", en: "century", ru: "столетие", ua: "століття" },
      { hr: "katedrala", en: "cathedral", ru: "собор", ua: "собор" },
      { hr: "uličice", en: "small streets", ru: "улочки", ua: "вуличках" },
      { hr: "kazalište", en: "theatre", ru: "театр", ua: "театр" },
      { hr: "galerija", en: "gallery", ru: "галерея", ua: "галерея" },
      { hr: "sajam", en: "fair/market", ru: "ярмарка", ua: "ярмарок" },
    ],
    questions: [
      {
        question: { en: "On which river is Zagreb located?", ru: "На какой реке расположен Загреб?", ua: "На якій річці розташований Загреб?" },
        options: ["Sava", "Drava", "Dunav", "Kupa"],
        correctAnswer: "Sava",
      },
      {
        question: { en: "What are the two parts of Zagreb?", ru: "Из каких двух частей состоит Загреб?", ua: "З яких двох частин складається Загреб?" },
        options: ["Gornji grad i Donji grad", "Stari grad i Novi grad", "Centar i Periferija", "Zapad i Istok"],
        correctAnswer: "Gornji grad i Donji grad",
      },
      {
        question: { en: "What is the main square called?", ru: "Как называется главная площадь?", ua: "Як називається головна площа?" },
        options: ["Trg bana Jelačića", "Trg Republike", "Trg svetog Marka", "Trg slobode"],
        correctAnswer: "Trg bana Jelačića",
      },
    ],
    translationTasks: [
      { hr: "Grad ima bogatu povijest", answer: { en: "The city has a rich history", ru: "Город имеет богатую историю", ua: "Місто має багату історію" } },
      { hr: "kulturno središte", answer: { en: "cultural center", ru: "культурный центр", ua: "культурний центр" } },
    ],
  },
  {
    id: "plitvice",
    title: { en: "Plitvice Lakes", ru: "Плитвицкие озёра", ua: "Плітвицькі озера" },
    author: "Croatia Mentor",
    level: "A2",
    text: `Plitvička jezera su nacionalni park u središnjoj Hrvatskoj. Park je poznat po šesnaest jezera koja su povezana prekrasnim slapovima. Voda u jezerima ima posebnu tirkiznu boju. Park je na UNESCO-vom popisu svjetske baštine od 1979. godine. Svake godine park posjeti više od milijun turista. U parku žive razne životinje: medvjedi, vukovi, jeleni i mnoge ptice. Posjetitelji mogu šetati po drvenim stazama iznad vode i uživati u prirodi.`,
    vocabulary: [
      { hr: "nacionalni park", en: "national park", ru: "национальный парк", ua: "національний парк" },
      { hr: "jezero", en: "lake", ru: "озеро", ua: "озеро" },
      { hr: "slapovi", en: "waterfalls", ru: "водопады", ua: "водоспади" },
      { hr: "tirkizna", en: "turquoise", ru: "бирюзовая", ua: "бірюзова" },
      { hr: "baština", en: "heritage", ru: "наследие", ua: "спадщина" },
      { hr: "medvjed", en: "bear", ru: "медведь", ua: "ведмідь" },
      { hr: "vuk", en: "wolf", ru: "волк", ua: "вовк" },
      { hr: "jelen", en: "deer", ru: "олень", ua: "олень" },
      { hr: "drvene staze", en: "wooden paths", ru: "деревянные тропы", ua: "дерев'яні стежки" },
    ],
    questions: [
      {
        question: { en: "How many lakes does the park have?", ru: "Сколько озёр в парке?", ua: "Скільки озер у парку?" },
        options: ["16", "12", "20", "8"],
        correctAnswer: "16",
      },
      {
        question: { en: "Since when is it a UNESCO site?", ru: "С какого года парк в списке ЮНЕСКО?", ua: "З якого року парк у списку ЮНЕСКО?" },
        options: ["1979", "1985", "1990", "2000"],
        correctAnswer: "1979",
      },
    ],
    translationTasks: [
      { hr: "prekrasnim slapovima", answer: { en: "beautiful waterfalls", ru: "прекрасными водопадами", ua: "прекрасними водоспадами" } },
      { hr: "uživati u prirodi", answer: { en: "to enjoy nature", ru: "наслаждаться природой", ua: "насолоджуватися природою" } },
    ],
  },
];
