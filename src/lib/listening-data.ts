export interface ListeningItem {
  id: string;
  title: { en: string; ru: string; ua: string };
  type: "song" | "podcast" | "dialogue";
  level: string;
  youtubeId: string;
  description: { en: string; ru: string; ua: string };
  subtitles: { time: string; hr: string; translation: { en: string; ru: string; ua: string } }[];
  questions: {
    question: { en: string; ru: string; ua: string };
    options: string[];
    correctAnswer: string;
  }[];
  fillBlanks: {
    sentence: string;
    blank: string;
    hint: { en: string; ru: string; ua: string };
  }[];
}

export const listeningData: ListeningItem[] = [
  {
    id: "djecja-pjesma-1",
    title: { en: "Croatian Children's Song: Ide maca oko tebe", ru: "Детская песня: Ide maca oko tebe", ua: "Дитяча пісня: Ide maca oko tebe" },
    type: "song",
    level: "A1",
    youtubeId: "dQw4w9WgXcQ",
    description: {
      en: "A popular Croatian children's song about a cat. Great for learning basic vocabulary and practicing listening.",
      ru: "Популярная хорватская детская песня о кошке. Отлично подходит для изучения базовой лексики и аудирования.",
      ua: "Популярна хорватська дитяча пісня про кішку. Чудово підходить для вивчення базової лексики та аудіювання."
    },
    subtitles: [
      { time: "0:00", hr: "Ide maca oko tebe", translation: { en: "A cat walks around you", ru: "Кошка ходит вокруг тебя", ua: "Кішка ходить навколо тебе" } },
      { time: "0:05", hr: "Pazi da te ne ogrebe", translation: { en: "Watch out or she'll scratch you", ru: "Смотри, чтобы не поцарапала", ua: "Дивись, щоб не подряпала" } },
      { time: "0:10", hr: "Maca ima duge nokte", translation: { en: "The cat has long nails", ru: "У кошки длинные когти", ua: "У кішки довгі кігті" } },
      { time: "0:15", hr: "Pazi da te ne ogrebe!", translation: { en: "Watch out or she'll scratch you!", ru: "Смотри, чтобы не поцарапала!", ua: "Дивись, щоб не подряпала!" } },
    ],
    questions: [
      {
        question: { en: "What animal is the song about?", ru: "О каком животном эта песня?", ua: "Про яку тварину ця пісня?" },
        options: ["Maca (cat)", "Pas (dog)", "Ptica (bird)", "Riba (fish)"],
        correctAnswer: "Maca (cat)",
      },
      {
        question: { en: "What does the cat have?", ru: "Что есть у кошки?", ua: "Що є у кішки?" },
        options: ["Duge nokte (long nails)", "Veliku glavu (big head)", "Male uši (small ears)", "Kratki rep (short tail)"],
        correctAnswer: "Duge nokte (long nails)",
      },
    ],
    fillBlanks: [
      { sentence: "Ide _____ oko tebe", blank: "maca", hint: { en: "cat", ru: "кошка", ua: "кішка" } },
      { sentence: "Pazi da te ne _____", blank: "ogrebe", hint: { en: "scratch", ru: "поцарапает", ua: "подряпає" } },
    ],
  },
  {
    id: "razgovor-1",
    title: { en: "Dialogue: At the Market", ru: "Диалог: На рынке", ua: "Діалог: На ринку" },
    type: "dialogue",
    level: "A2",
    youtubeId: "",
    description: {
      en: "A simulated dialogue at a Croatian market. Practice understanding prices, quantities, and common shopping phrases.",
      ru: "Диалог на хорватском рынке. Тренируйте понимание цен, количеств и фраз для покупок.",
      ua: "Діалог на хорватському ринку. Тренуйте розуміння цін, кількостей та фраз для покупок."
    },
    subtitles: [
      { time: "0:00", hr: "Dobar dan! Što želite?", translation: { en: "Good day! What would you like?", ru: "Добрый день! Что желаете?", ua: "Добрий день! Що бажаєте?" } },
      { time: "0:05", hr: "Dajte mi kilu rajčica, molim.", translation: { en: "Give me a kilo of tomatoes, please.", ru: "Дайте мне кило помидоров, пожалуйста.", ua: "Дайте мені кіло помідорів, будь ласка." } },
      { time: "0:10", hr: "Želite li još nešto?", translation: { en: "Would you like anything else?", ru: "Ещё что-нибудь?", ua: "Ще щось?" } },
      { time: "0:15", hr: "Da, pola kile krumpira.", translation: { en: "Yes, half a kilo of potatoes.", ru: "Да, полкило картофеля.", ua: "Так, півкіло картоплі." } },
      { time: "0:20", hr: "To je sve. Koliko?", translation: { en: "That's all. How much?", ru: "Это всё. Сколько?", ua: "Це все. Скільки?" } },
      { time: "0:25", hr: "Tri eura, molim.", translation: { en: "Three euros, please.", ru: "Три евро, пожалуйста.", ua: "Три євро, будь ласка." } },
    ],
    questions: [
      {
        question: { en: "How many tomatoes did the customer ask for?", ru: "Сколько помидоров попросил покупатель?", ua: "Скільки помідорів попросив покупець?" },
        options: ["1 kilo", "2 kilo", "Pola kile", "500 grama"],
        correctAnswer: "1 kilo",
      },
      {
        question: { en: "What was the total price?", ru: "Какова итоговая цена?", ua: "Яка підсумкова ціна?" },
        options: ["3 eura", "5 eura", "2 eura", "4 eura"],
        correctAnswer: "3 eura",
      },
      {
        question: { en: "What else did the customer buy?", ru: "Что ещё купил покупатель?", ua: "Що ще купив покупець?" },
        options: ["Krumpir (potatoes)", "Luk (onion)", "Paprika (pepper)", "Mrkva (carrot)"],
        correctAnswer: "Krumpir (potatoes)",
      },
    ],
    fillBlanks: [
      { sentence: "Dajte mi _____ rajčica", blank: "kilu", hint: { en: "a kilo of", ru: "кило", ua: "кіло" } },
      { sentence: "Pola kile _____", blank: "krumpira", hint: { en: "potatoes (genitive)", ru: "картофеля (род. п.)", ua: "картоплі (род. в.)" } },
    ],
  },
  {
    id: "hrvatska-himna",
    title: { en: "Croatian National Anthem", ru: "Гимн Хорватии", ua: "Гімн Хорватії" },
    type: "song",
    level: "B1",
    youtubeId: "",
    description: {
      en: "Listen to the Croatian national anthem 'Lijepa naša domovino' (Our Beautiful Homeland) and learn key vocabulary about patriotism and nature.",
      ru: "Послушайте гимн Хорватии 'Lijepa naša domovino' (Наша прекрасная родина) и выучите ключевую лексику о патриотизме и природе.",
      ua: "Послухайте гімн Хорватії 'Lijepa naša domovino' (Наша прекрасна батьківщино) і вивчіть ключову лексику про патріотизм та природу."
    },
    subtitles: [
      { time: "0:00", hr: "Lijepa naša domovino", translation: { en: "Our beautiful homeland", ru: "Наша прекрасная родина", ua: "Наша прекрасна батьківщино" } },
      { time: "0:10", hr: "Oj junačka zemljo mila", translation: { en: "Oh dear heroic land", ru: "О, героическая дорогая земля", ua: "О, героїчна дорога земле" } },
      { time: "0:20", hr: "Stare slave djedovino", translation: { en: "Our ancestors' ancient glory", ru: "Древняя слава наших предков", ua: "Стародавня слава наших предків" } },
      { time: "0:30", hr: "Da bi vazda sretna bila!", translation: { en: "May you ever be blessed!", ru: "Чтобы ты была всегда счастлива!", ua: "Щоб ти завжди була щаслива!" } },
    ],
    questions: [
      {
        question: { en: "What is the anthem called?", ru: "Как называется гимн?", ua: "Як називається гімн?" },
        options: ["Lijepa naša domovino", "Hrvatska moja", "Domovina", "Za dom"],
        correctAnswer: "Lijepa naša domovino",
      },
      {
        question: { en: "What word means 'homeland' in the anthem?", ru: "Какое слово означает 'родина' в гимне?", ua: "Яке слово означає 'батьківщина' у гімні?" },
        options: ["domovino", "zemljo", "djedovino", "slave"],
        correctAnswer: "domovino",
      },
    ],
    fillBlanks: [
      { sentence: "Lijepa naša _____", blank: "domovino", hint: { en: "homeland (vocative)", ru: "родина (зв. п.)", ua: "батьківщина (кл. в.)" } },
      { sentence: "Oj _____ zemljo mila", blank: "junačka", hint: { en: "heroic", ru: "героическая", ua: "героїчна" } },
    ],
  },
];
