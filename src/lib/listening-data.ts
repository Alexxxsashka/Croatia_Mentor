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
    youtubeId: "lIiYqQkwgkQ",
    description: {
      en: "A popular Croatian children's song about a cat. Great for learning basic vocabulary and practicing listening.",
      ru: "Популярная хорватская детская песня о кошке. Отлично подходит для изучения базовой лексики и аудирования.",
      ua: "Популярна хорватська дитяча пісня про кішку. Чудово підходить для вивчення базової лексики та аудіювання."
    },
    subtitles: [
      // Loop 1
      { time: "0:00", hr: "Ide maca oko tebe,", translation: { en: "A cat walks around you", ru: "Кошка ходит вокруг тебя", ua: "Кішка ходить навколо тебе" } },
      { time: "0:03", hr: "pazi da te ne ogrebe.", translation: { en: "watch out or she'll scratch you", ru: "смотри, чтобы не поцарапала", ua: "дивись, щоб не подряпала" } },
      { time: "0:06", hr: "Čuvaj, Mijo, rep,", translation: { en: "watch your tail, Mijo", ru: "береги, Мийо, хвост", ua: "бережи, Мійо, хвіст" } },
      { time: "0:09", hr: "nemoj biti slijep.", translation: { en: "don't be blind", ru: "не будь слепым", ua: "не будь сліпим" } },
      { time: "0:12", hr: "Ako budeš slijep,", translation: { en: "if you are blind", ru: "если будешь слепым", ua: "якщо будеш сліпим" } },
      { time: "0:15", hr: "otpast će ti rep!", translation: { en: "your tail will fall off!", ru: "отвалится у тебя хвост!", ua: "відпаде у тебе хвіст!" } },

      // Loop 2
      { time: "0:25", hr: "Ide maca oko tebe,", translation: { en: "A cat walks around you", ru: "Кошка ходит вокруг тебя", ua: "Кішка ходить навколо тебе" } },
      { time: "0:28", hr: "pazi da te ne ogrebe.", translation: { en: "watch out or she'll scratch you", ru: "смотри, чтобы не поцарапала", ua: "дивись, щоб не подряпала" } },
      { time: "0:31", hr: "Čuvaj, Mijo, rep,", translation: { en: "watch your tail, Mijo", ru: "береги, Мийо, хвост", ua: "бережи, Мійо, хвіст" } },
      { time: "0:34", hr: "nemoj biti slijep.", translation: { en: "don't be blind", ru: "не будь слепым", ua: "не будь сліпим" } },
      { time: "0:37", hr: "Ako budeš slijep,", translation: { en: "if you are blind", ru: "если будешь слепым", ua: "якщо будеш сліпим" } },
      { time: "0:40", hr: "otpast će ti rep!", translation: { en: "your tail will fall off!", ru: "отвалится у тебя хвост!", ua: "відпаде у тебе хвіст!" } },

      // Loop 3
      { time: "0:50", hr: "Ide maca oko tebe,", translation: { en: "A cat walks around you", ru: "Кошка ходит вокруг тебя", ua: "Кішка ходить навколо тебе" } },
      { time: "0:53", hr: "pazi da te ne ogrebe.", translation: { en: "watch out or she'll scratch you", ru: "смотри, чтобы не поцарапала", ua: "дивись, щоб не подряпала" } },
      { time: "0:56", hr: "Čuvaj, Mijo, rep,", translation: { en: "watch your tail, Mijo", ru: "береги, Мийо, хвост", ua: "бережи, Мійо, хвіст" } },
      { time: "0:59", hr: "nemoj biti slijep.", translation: { en: "don't be blind", ru: "не будь слепым", ua: "не будь сліпим" } },
      { time: "1:02", hr: "Ako budeš slijep,", translation: { en: "if you are blind", ru: "если будешь слепым", ua: "якщо будеш сліпим" } },
      { time: "1:05", hr: "otpast će ti rep!", translation: { en: "your tail will fall off!", ru: "отвалится у тебя хвост!", ua: "відпаде у тебе хвіст!" } },

      // Loop 4
      { time: "1:15", hr: "Ide maca oko tebe,", translation: { en: "A cat walks around you", ru: "Кошка ходит вокруг тебя", ua: "Кішка ходить навколо тебе" } },
      { time: "1:18", hr: "pazi da te ne ogrebe.", translation: { en: "watch out or she'll scratch you", ru: "смотри, чтобы не поцарапала", ua: "дивись, щоб не подряпала" } },
      { time: "1:21", hr: "Čuvaj, Mijo, rep,", translation: { en: "watch your tail, Mijo", ru: "береги, Мийо, хвост", ua: "бережи, Мійо, хвіст" } },
      { time: "1:24", hr: "nemoj biti slijep.", translation: { en: "don't be blind", ru: "не будь слепым", ua: "не будь сліпим" } },
      { time: "1:27", hr: "Ako budeš slijep,", translation: { en: "if you are blind", ru: "если будешь слепым", ua: "якщо будеш сліпим" } },
      { time: "1:30", hr: "otpast će ti rep!", translation: { en: "your tail will fall off!", ru: "отвалится у тебя хвост!", ua: "відпаде у тебе хвіст!" } }
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
    id: "hrvatska-himna",
    title: { en: "Croatian National Anthem", ru: "Гимн Хорватии", ua: "Гімн Хорватії" },
    type: "song",
    level: "B1",
    youtubeId: "q2Y5c4XWk1c",
    description: {
      en: "Listen to the Croatian national anthem 'Lijepa naša domovino' (Our Beautiful Homeland) and learn key vocabulary about patriotism and nature.",
      ru: "Послушайте гимн Хорватии 'Lijepa naša domovino' (Наша прекрасная родина) и выучите ключевую лексику о патриотизме и природе.",
      ua: "Послухайте гімн Хорватії 'Lijepa naša domovino' (Наша прекрасна батьківщино) і вивчіть ключову лексику про патріотизм та природу."
    },
    subtitles: [
      { time: "0:00", hr: "Lijepa naša domovino,", translation: { en: "Our beautiful homeland,", ru: "Наша прекрасная родина,", ua: "Наша прекрасна батьківщино," } },
      { time: "0:08", hr: "Oj junačka zemljo mila,", translation: { en: "Oh dear heroic land,", ru: "О, героическая дорогая земля,", ua: "О, героїчна дорога земле," } },
      { time: "0:17", hr: "Stare slave djedovino,", translation: { en: "Our ancestors' ancient glory,", ru: "Древняя слава наших предков,", ua: "Стародавня слава наших предків," } },
      { time: "0:25", hr: "Da bi vazda sretna bila!", translation: { en: "May you ever be happy!", ru: "Чтобы ты была всегда счастлива!", ua: "Щоб ти завжди була щаслива!" } },
      { time: "0:34", hr: "Mila, kano si nam slavna,", translation: { en: "Dear, as you are famous to us,", ru: "Дорогая, так как ты славна для нас,", ua: "Дорога, так як ти славна для нас," } },
      { time: "0:42", hr: "Mila si nam ti jedina.", translation: { en: "You are our only dear one.", ru: "Ты наша единственная дорогая.", ua: "Ти наша єдина дорога." } },
      { time: "0:50", hr: "Mila, kuda si nam ravna,", translation: { en: "Dear, where you are flat plains,", ru: "Дорогая, где ты равнинная,", ua: "Дорога, де ти рівнинна," } },
      { time: "0:58", hr: "Mila, kuda si planina!", translation: { en: "Dear, where you are mountains!", ru: "Дорогая, где ты гористая!", ua: "Дорога, де ти гірська!" } }
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
  {
    id: "cesarica-1",
    title: { en: "Oliver Dragojević: Cesarica", ru: "Оливер Драгоевич: Cesarica", ua: "Олівер Драгоєвич: Cesarica" },
    type: "song",
    level: "B2",
    youtubeId: "GTZh0ZU4yAs",
    description: {
      en: "Listen to the legendary Dalmatian love song 'Cesarica' (Empress) by Oliver Dragojević. Practice poetic language and Dalmatian dialect features.",
      ru: "Послушайте легендарную далматинскую песню о любви 'Cesarica' (Императрица) Оливера Драгоевича. Изучайте поэтическую лексику и особенности далматинского диалекта.",
      ua: "Послухайте легендарну далматинську пісню про кохання 'Cesarica' (Імператриця) Олівера Драгоєвича. Вивчайте поетичну лексику та особливості далматинського діалекту."
    },
    subtitles: [
      { time: "0:13", hr: "Zlatni konci litnje zore", translation: { en: "The golden threads of the summer dawn", ru: "Золотые нити летнего рассвета", ua: "Золоті нитки літнього світанку" } },
      { time: "0:18", hr: "Došli su u njene dvore", translation: { en: "Came into her court", ru: "Пришли в её покои", ua: "Прийшли в її покої" } },
      { time: "0:24", hr: "Da bi moju ljubav budili", translation: { en: "To awaken my love", ru: "Чтобы разбудить мою любовь", ua: "Щоб розбудити моє кохання" } },
      { time: "0:30", hr: "Svitlo nek' joj ljubi lice", translation: { en: "Let the light kiss her face", ru: "Пусть свет целует её лицо", ua: "Нехай світло цілує її обличчя" } },
      { time: "0:36", hr: "Lipo ka' u cesarice", translation: { en: "Beautiful as an empress", ru: "Прекрасное, как у императрицы", ua: "Прекрасне, як у імператриці" } },
      { time: "0:42", hr: "Kad je ja ne mogu ljubiti", translation: { en: "Since I cannot kiss her", ru: "Раз я не могу её поцеловать", ua: "Раз я не можу її поцілувати" } },
      { time: "0:50", hr: "Zlatna mriža njenog tila", translation: { en: "The golden net of her body", ru: "Золотая сеть её тела", ua: "Золота сітка її тіла" } },
      { time: "0:55", hr: "Dušu mi je uvatila", translation: { en: "Has captured my soul", ru: "Захватила мою душу", ua: "Захопила мою душу" } },
      { time: "1:01", hr: "Da je baci nazad u more", translation: { en: "To throw it back to the sea", ru: "Чтобы бросить её обратно в море", ua: "Щоб кинути її назад у море" } },
      { time: "1:07", hr: "Svake noći prije zore", translation: { en: "Every night before dawn", ru: "Каждую ночь перед рассветом", ua: "Щоночі перед світанком" } },
      { time: "1:13", hr: "Dolazim u njene dvore", translation: { en: "I come to her court", ru: "Я прихожу в её покои", ua: "Я приходжу в її покої" } },
      { time: "1:19", hr: "Bile dvore moje pokore", translation: { en: "White court of my penance (torment)", ru: "Белый порог моего искупления (мук)", ua: "Білий поріг мого спокутування (мук)" } },
      { time: "1:26", hr: "Cilega života ja sam tija samo nju", translation: { en: "All my life I wanted only her", ru: "Всю жизнь я хотел только её", ua: "Все життя я хотів тільки її" } },
      { time: "1:32", hr: "Da do njenog srca nađem put", translation: { en: "To find the way to her heart", ru: "Чтобы проложить путь к её сердцу", ua: "Щоб знайти шлях до її серця" } },
      { time: "1:38", hr: "Cilega života moje tilo je bez nje", translation: { en: "All my life my body is without her", ru: "Всю жизнь моё тело без неё", ua: "Все життя моє тіло без неї" } },
      { time: "1:44", hr: "Ka' cviće bez vode", translation: { en: "Like a flower without water", ru: "Как цветок без воды", ua: "Як квітка без води" } }
    ],
    questions: [
      {
        question: { en: "What does 'Cesarica' mean?", ru: "Что означает слово 'Cesarica'?", ua: "Що означає слово 'Cesarica'?" },
        options: ["Empress (Императрица)", "Princess (Принцесса)", "Queen (Королева)", "Angel (Ангел)"],
        correctAnswer: "Empress (Императрица)",
      },
      {
        question: { en: "What is compared to 'cviće bez vode' (flower without water)?", ru: "Что сравнивается с цветком без воды?", ua: "Що порівнюється з квіткою без води?" },
        options: ["His body without her (Его тело без неё)", "The sea (Море)", "The summer dawn (Летний рассвет)", "Her palace (Её покои)"],
        correctAnswer: "His body without her (Его тело без неё)",
      },
      {
        question: { en: "Which dialect feature is prominent in 'tija' (wanted) and 'tilo' (body)?", ru: "Какая диалектная особенность заметна в словах 'tija' (хотел) и 'tilo' (тело)?", ua: "Яка діалектна особливість помітна у словах 'tija' (хотів) та 'tilo' (тіло)?" },
        options: ["Dalmatian Ikavian dialect", "Kajkavian dialect", "Standard Croatian", "Istrian dialect"],
        correctAnswer: "Dalmatian Ikavian dialect",
      }
    ],
    fillBlanks: [
      { sentence: "Zlatni konci _____ zore", blank: "litnje", hint: { en: "summer (Dalmatian)", ru: "летнего (далм.)", ua: "літнього (далм.)" } },
      { sentence: "Ka' cviće bez _____.", blank: "vode", hint: { en: "water (genitive)", ru: "воды (род. п.)", ua: "води (род. в.)" } }
    ]
  }
];
