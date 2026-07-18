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
    id: "moja-obitelj",
    title: { en: "My Family", ru: "Моя семья", ua: "Моя сім'я" },
    author: "Croatia Mentor",
    level: "A1",
    text: `Ja se zovem Marko. Imam dvadeset i pet godina i živim u Splitu. Moja obitelj nije velika. Imam suprugu, kćer i psa. Moja supruga se zove Jelena. Ona radi kao učiteljica u školi. Naša kći se zove Mia i ima tri godine. Naš pas se zove Rex. Rex je velik i voli trčati u parku. Vikendom idemo na plažu ili šetamo uz more. Sretni smo jer živimo u lijepom gradu.`,
    vocabulary: [
      { hr: "se zovem", en: "my name is", ru: "меня зовут", ua: "мене звати" },
      { hr: "obitelj", en: "family", ru: "семья", ua: "сім'я" },
      { hr: "supruga", en: "wife", ru: "жена", ua: "дружина" },
      { hr: "kći", en: "daughter", ru: "дочь", ua: "донька" },
      { hr: "pas", en: "dog", ru: "собака", ua: "собака" },
      { hr: "učiteljica", en: "female teacher", ru: "учительница", ua: "вчителька" },
      { hr: "vikendom", en: "on weekends", ru: "по выходным", ua: "по вихідних" },
      { hr: "sretni", en: "happy", ru: "счастливы", ua: "щасливі" },
    ],
    questions: [
      {
        question: { en: "Where does Marko live?", ru: "Где живет Марко?", ua: "Де живе Марко?" },
        options: ["U Splitu (in Split)", "U Zagrebu (in Zagreb)", "U Dubrovniku (in Dubrovnik)", "U Zadru (in Zadar)"],
        correctAnswer: "U Splitu (in Split)",
      },
      {
        question: { en: "What is Marko's wife's job?", ru: "Кем работает жена Марко?", ua: "Ким працює дружина Марко?" },
        options: ["Učiteljica (teacher)", "Liječnica (doctor)", "Konobarica (waitress)", "Kuharica (cook)"],
        correctAnswer: "Učiteljica (teacher)",
      },
      {
        question: { en: "How old is their daughter Mia?", ru: "Сколько лет их дочери Мие?", ua: "Скільки років їхній доньці Мії?" },
        options: ["3", "5", "2", "4"],
        correctAnswer: "3",
      }
    ],
    translationTasks: [
      { hr: "Moja obitelj nije velika", answer: { en: "My family is not big", ru: "Моя семья небольшая", ua: "Моя сім'я невелика" } },
      { hr: "Rex voli trčati u parku", answer: { en: "Rex loves to run in the park", ru: "Рекс любит бегать в парке", ua: "Рекс любить бігати в парку" } }
    ]
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
    id: "glagoljica",
    title: { en: "Glagolitic — Old Croatian Script", ru: "Глаголица — старинное хорватское письмо", ua: "Глаголиця — старовинне хорватське письмо" },
    author: "Croatia Mentor",
    level: "B2",
    text: `Glagoljica je staroslavensko pismo koje su u 9. stoljeću kreirali sveta braća Ćiril i Metod kako bi širili kršćanstvo među Slavenima. Iako je stvorena za sve Slavene, glagoljica se najduže zadržala u Hrvatskoj, gdje se koristila sve do 19. stoljeća. Hrvati su razvili vlastiti stil pisma, poznat kao uglata glagoljica. Najvažniji spomenik hrvatske pismenosti pisan glagoljicom je Bašćanska ploča iz 1100. godine, pronađena na otoku Krku. Danas se glagoljica smatra važnim dijelom hrvatskog kulturnog identiteta i povijesne baštine.`,
    vocabulary: [
      { hr: "pismo", en: "script / writing", ru: "письмо", ua: "письмо" },
      { hr: "širiti", en: "to spread", ru: "распространять", ua: "поширювати" },
      { hr: "uglata", en: "angular", ru: "угловатая", ua: "незграбна / кутаста" },
      { hr: "spomenik", en: "monument", ru: "памятник", ua: "пам'ятник" },
      { hr: "baština", en: "heritage", ru: "наследие", ua: "спадщина" }
    ],
    questions: [
      {
        question: { en: "Who created the Glagolitic script?", ru: "Кто создал глаголицу?", ua: "Хто створив глаголицю?" },
        options: ["Ćiril i Metod", "Kralj Tomislav", "Ljudevit Gaj", "Juraj Dalmatinac"],
        correctAnswer: "Ćiril i Metod",
      },
      {
        question: { en: "Where was Bašćanska ploča found?", ru: "Где была найдена Башчанская плита?", ua: "Де було знайдено Башчанську плиту?" },
        options: ["Na otoku Krku (on Krk island)", "U Zagrebu (in Zagreb)", "U Splitu (in Split)", "U Dubrovniku (in Dubrovnik)"],
        correctAnswer: "Na otoku Krku (on Krk island)",
      }
    ],
    translationTasks: [
      { hr: "hrvatskog kulturnog identiteta", answer: { en: "Croatian cultural identity", ru: "хорватской культурной идентичности", ua: "хорватської культурної ідентичності" } },
      { hr: "staro hrvatsko pismo", answer: { en: "old Croatian script", ru: "старинное хорватское письмо", ua: "старовинне хорватське письмо" } }
    ]
  },
  {
    id: "povratak-filipa",
    title: { en: "Povratak Filipa Latinovicza (Excerpt)", ru: "Возвращение Филипа Латиновича (Отрывок)", ua: "Повернення Філіпа Латиновича (Уривок)" },
    author: "Miroslav Krleža",
    level: "C1",
    text: `Svitalo je kada je Filip stigao na kaptolski kolodvor. Bilo je to sive, blatnjave nedjelje, poslije jedanaest godina izbivanja. Filip se osjećao stranim i dalekim u tom gradu svog djetinjstva. Sve je bilo isto, a opet tako tuđe: miris vlage, stare drvene kapije, sivi zidovi pokriveni prašinom vremena. Osjetio je umor u kostima i neku tešku, neobjašnjivu tjeskobu koja ga je pratila od samog prelaska granice. Vratio se kući, ali osjećaj doma bio je davno izgubljen u magli njegovih europskih lutanja.`,
    vocabulary: [
      { hr: "svitalo je", en: "it was dawning", ru: "светало", ua: "світало" },
      { hr: "izbivanje", en: "absence", ru: "отсутствие", ua: "відсутність" },
      { hr: "tuđe", en: "foreign / alien", ru: "чужое", ua: "чуже" },
      { hr: "vlaga", en: "moisture / humidity", ru: "влага / сырость", ua: "волога / сирість" },
      { hr: "tjeskoba", en: "anxiety / anguish", ru: "тревога / тоска", ua: "тривога / туга" },
      { hr: "lutanje", en: "wandering", ru: "скитание", ua: "блукання" }
    ],
    questions: [
      {
        question: { en: "How many years was Filip absent?", ru: "Сколько лет отсутствовал Филип?", ua: "Скільки років був відсутній Філіп?" },
        options: ["11", "10", "15", "5"],
        correctAnswer: "11",
      },
      {
        question: { en: "What day of the week did he arrive?", ru: "В какой день недели он прибыл?", ua: "У який день тижня він прибув?" },
        options: ["Nedjelja (Sunday)", "Subota (Saturday)", "Petak (Friday)", "Ponedjeljak (Monday)"],
        correctAnswer: "Nedjelja (Sunday)",
      }
    ],
    translationTasks: [
      { hr: "grad svog djetinjstva", answer: { en: "the city of his childhood", ru: "город своего детства", ua: "місто свого дитинства" } },
      { hr: "miris vlage", answer: { en: "the smell of moisture", ru: "запах сырости", ua: "запах вологи" } }
    ]
  }
];
