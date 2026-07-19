export interface PlacementQuestion {
  id: number;
  level: string;
  question: string;
  type?: "multiple-choice" | "translation";
  options?: { en: string; ru: string; ua: string }[];
  correctAnswer?: number; // index of correct option
  acceptedAnswers?: string[]; // list of accepted Croatian translations
  explanation: {
    en: string;
    ru: string;
    ua: string;
  };
}

export const placementQuestions: PlacementQuestion[] = [
  // ==========================================
  // LEVEL A1 (8 Questions: 5 MC, 3 Translation)
  // ==========================================
  {
    id: 1,
    level: "A1",
    question: 'Što na hrvatskom jeziku znači riječ "obitelj"?',
    type: "multiple-choice",
    options: [
      { en: "Family", ru: "Семья", ua: "Сім'я" },
      { en: "Friend", ru: "Друг", ua: "Друг" },
      { en: "Work", ru: "Работа", ua: "Робота" },
      { en: "House", ru: "Дом", ua: "Будинок" }
    ],
    correctAnswer: 0,
    explanation: {
      en: '"Obitelj" is the Croatian word for family.',
      ru: '"Obitelj" означает "семья" по-хорватски.',
      ua: '"Obitelj" означає "сім\'я" хорватською.'
    }
  },
  {
    id: 2,
    level: "A1",
    question: "Danas radim u _____ (Zagreb - locative singular).",
    type: "multiple-choice",
    options: [
      { en: "Zagrebu", ru: "Zagrebu", ua: "Zagrebu" },
      { en: "Zagreb", ru: "Zagreb", ua: "Zagreb" },
      { en: "Zagreba", ru: "Zagreba", ua: "Zagreba" },
      { en: "Zagrebom", ru: "Zagrebom", ua: "Zagrebom" }
    ],
    correctAnswer: 0,
    explanation: {
      en: "Locative case (u + place) for masculine nouns ends in -u.",
      ru: "Предложный/местный падеж (u + место) для мужского рода оканчивается на -u.",
      ua: "Місцевий відмінок (u + місце) для чоловічого роду закінчується на -u."
    }
  },
  {
    id: 3,
    level: "A1",
    question: "Ja _____ (past tense of 'ići' - masculine singular) u kino jučer navečer.",
    type: "multiple-choice",
    options: [
      { en: "sam išao", ru: "sam išao", ua: "sam išao" },
      { en: "idem", ru: "idem", ua: "idem" },
      { en: "ću ići", ru: "ću ići", ua: "ću ići" },
      { en: "bih išao", ru: "bih išao", ua: "bih išao" }
    ],
    correctAnswer: 0,
    explanation: {
      en: "Past tense (perfect) is formed with the short present of 'biti' + active verbal adjective.",
      ru: "Прошедшее время (перфект) образуется из краткой формы настоящего времени 'biti' + причастие.",
      ua: "Минулий час (перфект) утворюється з короткої форми теперішнього часу 'biti' + дієприкметник."
    }
  },
  {
    id: 4,
    level: "A1",
    question: "Ovo je _____ (possessive pronoun 'my' - feminine singular) torba.",
    type: "multiple-choice",
    options: [
      { en: "moj", ru: "moj", ua: "moj" },
      { en: "moja", ru: "moja", ua: "moja" },
      { en: "moje", ru: "moje", ua: "moje" },
      { en: "moju", ru: "moju", ua: "moju" }
    ],
    correctAnswer: 1,
    explanation: {
      en: "'Torba' is feminine singular, so the possessive pronoun is 'moja'.",
      ru: "'Torba' женского рода единственного числа, поэтому притяжательное местоимение — 'moja'.",
      ua: "'Torba' жіночого роду однини, тому присвійний займенник — 'moja'."
    }
  },
  {
    id: 5,
    level: "A1",
    question: "Svako jutro pijem čaj _____ (preposition 'with') medom.",
    type: "multiple-choice",
    options: [
      { en: "s", ru: "s", ua: "s" },
      { en: "bez", ru: "bez", ua: "bez" },
      { en: "iz", ru: "iz", ua: "iz" },
      { en: "kod", ru: "kod", ua: "kod" }
    ],
    correctAnswer: 0,
    explanation: {
      en: "Preposition 's' (with) indicates accompaniment and triggers the instrumental case.",
      ru: "Предлог 's' (с) означает совместное действие и требует творительного падежа.",
      ua: "Прийменник 's' (з) вимагає орудного відмінка."
    }
  },
  {
    id: 6,
    level: "A1",
    question: "Prevedite na hrvatski: family / семья / сім'я",
    type: "translation",
    acceptedAnswers: ["obitelj", "porodica"],
    explanation: {
      en: 'The translation for family is "obitelj" (or "porodica").',
      ru: 'Перевод слова семья — "obitelj" (или "porodica").',
      ua: 'Переклад слова сім\'я — "obitelj" (або "porodica").'
    }
  },
  {
    id: 7,
    level: "A1",
    question: "Prevedite na hrvatski: dog / собака / собака",
    type: "translation",
    acceptedAnswers: ["pas"],
    explanation: {
      en: 'The translation for dog is "pas".',
      ru: 'Перевод слова собака — "pas".',
      ua: 'Переклад слова собака — "pas".'
    }
  },
  {
    id: 8,
    level: "A1",
    question: "Prevedite na hrvatski: book / книга / книга",
    type: "translation",
    acceptedAnswers: ["knjiga"],
    explanation: {
      en: 'The translation for book is "knjiga".',
      ru: 'Перевод слова книга — "knjiga".',
      ua: 'Переклад слова книга — "knjiga".'
    }
  },

  // ==========================================
  // LEVEL A2 (8 Questions: 6 MC, 2 Translation)
  // ==========================================
  {
    id: 9,
    level: "A2",
    question: 'Koji je suprotan smjer od riječi "lijevo"?',
    type: "multiple-choice",
    options: [
      { en: "ravno", ru: "ravno", ua: "ravno" },
      { en: "desno", ru: "desno", ua: "desno" },
      { en: "natrag", ru: "natrag", ua: "natrag" },
      { en: "gore", ru: "gore", ua: "gore" }
    ],
    correctAnswer: 1,
    explanation: {
      en: '"Lijevo" means left, and its opposite is "desno" (right).',
      ru: 'Противоположностью слова "lijevo" (налево) является "desno" (направо).',
      ua: 'Протилежністю слова "lijevo" (ліворуч) є "desno" (праворуч).'
    }
  },
  {
    id: 10,
    level: "A2",
    question: "Kupio sam prekrasan poklon za svoju _____ (majka - accusative singular).",
    type: "multiple-choice",
    options: [
      { en: "majke", ru: "majke", ua: "majke" },
      { en: "majci", ru: "majci", ua: "majci" },
      { en: "majku", ru: "majku", ua: "majku" },
      { en: "majkom", ru: "majkom", ua: "majkom" }
    ],
    correctAnswer: 2,
    explanation: {
      en: "The preposition 'za' (for) requires the accusative case. 'Majka' (feminine) becomes 'majku'.",
      ru: "Предлог 'za' (для) требует винительного падежа. 'Majka' переходит в 'majku'.",
      ua: "Прийменник 'za' (для) вимагає знахідного відмінка. 'Majka' переходить у 'majku'."
    }
  },
  {
    id: 11,
    level: "A2",
    question: "Mi _____ (future tense of 'putovati') u Split sljedeći tjedan.",
    type: "multiple-choice",
    options: [
      { en: "putovali smo", ru: "putovali smo", ua: "putovali smo" },
      { en: "ćemo putovati", ru: "ćemo putovati", ua: "ćemo putovati" },
      { en: "putujemo", ru: "putujemo", ua: "putujemo" },
      { en: "bismo putovali", ru: "bismo putovali", ua: "bismo putovali" }
    ],
    correctAnswer: 1,
    explanation: {
      en: "Future I is formed with the clitic form of 'htjeti' (ću, ćeš, će, ćemo...) + infinitive.",
      ru: "Будущее время I образуется с помощью краткой формы 'htjeti' (ću, ćeš...) + инфинитив.",
      ua: "Майбутній час I утворюється за допомогою короткої форми 'htjeti' (ću, ćeš...) + інфінітив."
    }
  },
  {
    id: 12,
    level: "A2",
    question: "Jako _____ (short dative pronoun 'me') se sviđa tvoja nova kuća.",
    type: "multiple-choice",
    options: [
      { en: "me", ru: "me", ua: "me" },
      { en: "mi", ru: "mi", ua: "mi" },
      { en: "mene", ru: "mene", ua: "mene" },
      { en: "meni", ru: "meni", ua: "meni" }
    ],
    correctAnswer: 1,
    explanation: {
      en: "The reflexive expression 'sviđati se' requires dative. The short form is 'mi'.",
      ru: "Возвратное выражение 'sviđati se' требует дательного падежа. Краткая форма — 'mi'.",
      ua: "Зворотний вираз 'sviđati se' вимагає давального відмінка. Коротка форма — 'mi'."
    }
  },
  {
    id: 13,
    level: "A2",
    question: "Ja obično _____ (imperfective aspect of 'čitati') vijesti na internetu dok pijem kavu.",
    type: "multiple-choice",
    options: [
      { en: "pročitam", ru: "pročitam", ua: "pročitam" },
      { en: "pročitati", ru: "pročitati", ua: "pročitati" },
      { en: "čitam", ru: "čitam", ua: "čitam" },
      { en: "sam pročitao", ru: "sam pročitao", ua: "sam pročitao" }
    ],
    correctAnswer: 2,
    explanation: {
      en: "For habitual, ongoing actions, the imperfective aspect ('čitam') is used.",
      ru: "Для регулярных, повторяющихся действий используется несовершенный вид глагола ('čitam').",
      ua: "Для регулярних дій, що повторюються, використовується недоконаний вид дієслова ('čitam')."
    }
  },
  {
    id: 14,
    level: "A2",
    question: "Što kupujemo kada idemo u salon namještaja kupiti \"stolicu\"?",
    type: "multiple-choice",
    options: [
      { en: "A chair (piece of furniture to sit on)", ru: "Стул (мебель для сидения)", ua: "Стілець (меблі для сидіння)" },
      { en: "A capital city of a country", ru: "Столицу государства", ua: "Столицю держави" },
      { en: "A dining table", ru: "Обеденный стол", ua: "Обідній стіл" },
      { en: "A large wardrobe", ru: "Большой шкаф", ua: "Велику шафу" }
    ],
    correctAnswer: 0,
    explanation: {
      en: 'Warning: "Stolica" in Croatian means "chair". It is a false friend to Russian/Ukrainian "столица/столиця" (capital city, which is "glavni grad" in Croatian).',
      ru: 'Внимание: "Stolica" в хорватском означает "стул". Это ложный друг переводчика для русского/украинского "столица" (которое по-хорватски звучит как "glavni grad").',
      ua: 'Увага: "Stolica" у хорватській мові означає "стілець". Це хибний друг перекладача для російського/українського "столица/столиця" (яка хорватською буде "glavni grad").'
    }
  },
  {
    id: 15,
    level: "A2",
    question: "Prevedite na hrvatski: table / стол / стіл",
    type: "translation",
    acceptedAnswers: ["stol"],
    explanation: {
      en: 'The translation for table is "stol".',
      ru: 'Перевод слова стол — "stol".',
      ua: 'Переклад слова стіл — "stol".'
    }
  },
  {
    id: 16,
    level: "A2",
    question: "Prevedite na hrvatski: milk / молоко / молоко",
    type: "translation",
    acceptedAnswers: ["mlijeko", "mleko"],
    explanation: {
      en: 'The translation for milk is "mlijeko".',
      ru: 'Перевод слова молоко — "mlijeko".',
      ua: 'Переклад слова молоко — "mlijeko".'
    }
  },

  // ==========================================
  // LEVEL B1 (8 Questions: 6 MC, 2 Translation)
  // ==========================================
  {
    id: 17,
    level: "B1",
    question: "Osoba koja profesionalno popravlja vodovodne cijevi i slavine je:",
    type: "multiple-choice",
    options: [
      { en: "električar", ru: "električar", ua: "električar" },
      { en: "stolar", ru: "stolar", ua: "stolar" },
      { en: "zidar", ru: "zidar", ua: "zidar" },
      { en: "vodoinstalater", ru: "vodoinstalater", ua: "vodoinstalater" }
    ],
    correctAnswer: 3,
    explanation: {
      en: '"Vodoinstalater" means plumber.',
      ru: '"Vodoinstalater" переводится как сантехник.',
      ua: '"Vodoinstalater" перекладається як сантехнік.'
    }
  },
  {
    id: 18,
    level: "B1",
    question: "Jučer smo dugo razgovarali s novim _____ (predsjednik - instrumental singular).",
    type: "multiple-choice",
    options: [
      { en: "predsjedniku", ru: "predsjedniku", ua: "predsjedniku" },
      { en: "predsjednika", ru: "predsjednika", ua: "predsjednika" },
      { en: "predsjednikom", ru: "predsjednikom", ua: "predsjednikom" },
      { en: "predsjednik", ru: "predsjednik", ua: "predsjednik" }
    ],
    correctAnswer: 2,
    explanation: {
      en: "Preposition 's/sa' indicating accompaniment requires the instrumental case ending in -om for masculine nouns.",
      ru: "Предлог 's/sa' (с) требует творительного падежа, оканчивающегося на -om для мужского рода.",
      ua: "Прийменник 's/sa' (з) вимагає орудного відмінка, що закінчується на -om для чоловічого роду."
    }
  },
  {
    id: 19,
    level: "B1",
    question: "Ako _____ (future II of 'učiti') redovito, lako ćeš položiti ovaj ispit.",
    type: "multiple-choice",
    options: [
      { en: "učiš", ru: "učiš", ua: "učiš" },
      { en: "budeš učio", ru: "budeš učio", ua: "budeš učio" },
      { en: "ćeš učiti", ru: "ćeš učiti", ua: "ćeš učiti" },
      { en: "jesi učio", ru: "jesi učio", ua: "jesi učio" }
    ],
    correctAnswer: 1,
    explanation: {
      en: "Future II (budeš učio) is required in conditional clauses expressing future conditions.",
      ru: "Будущее время II (budeš učio) используется в условных предложениях, относящихся к будущему.",
      ua: "Майбутній час II (budeš učio) використовується в умовних реченнях, що відносяться до майбутнього."
    }
  },
  {
    id: 20,
    level: "B1",
    question: "Koji je gramatički ispravan redoslijed zamjenica u rečenici?",
    type: "multiple-choice",
    options: [
      { en: "Jučer su mi ga dali na poslu.", ru: "Jučer su mi ga dali na poslu.", ua: "Jučer su mi ga dali na poslu." },
      { en: "Jučer mi su ga dali na poslu.", ru: "Jučer mi su ga dali na poslu.", ua: "Jučer mi su ga dali na poslu." },
      { en: "Jučer ga mi su dali na poslu.", ru: "Jučer ga mi su dali na poslu.", ua: "Jučer ga mi su dali na poslu." },
      { en: "Jučer dali su mi ga na poslu.", ru: "Jučer dali su mi ga na poslu.", ua: "Jučer dali su mi ga na poslu." }
    ],
    correctAnswer: 0,
    explanation: {
      en: "Clitic order: verbal auxiliary clitic ('su') + dative clitic ('mi') + accusative clitic ('ga').",
      ru: "Порядок энклитик: глагол-связка ('su') + дательный падеж ('mi') + винительный падеж ('ga').",
      ua: "Порядок енклітик: дієслово-зв'язка ('su') + давальний відмінок ('mi') + знахідний відмінок ('ga')."
    }
  },
  {
    id: 21,
    level: "B1",
    question: "Moram pod hitno _____ (perfective aspect of 'napisati') ovaj službeni izvještaj.",
    type: "multiple-choice",
    options: [
      { en: "pisati", ru: "pisati", ua: "pisati" },
      { en: "napisati", ru: "napisati", ua: "napisati" },
      { en: "napišem", ru: "napišem", ua: "napišem" },
      { en: "napisao", ru: "napisao", ua: "napisao" }
    ],
    correctAnswer: 1,
    explanation: {
      en: "An action that needs to be completed as a single whole requires the perfective infinitive ('napisati').",
      ru: "Действие, которое необходимо завершить в полном объеме, требует совершенного вида инфинитива ('napisati').",
      ua: "Дія, яку необхідно завершити в повному обсязі, вимагає доконаного виду інфінітива ('napisati')."
    }
  },
  {
    id: 22,
    level: "B1",
    question: "Kada u restoranu naručujemo \"hranu\", što mi zapправо tražimo?",
    type: "multiple-choice",
    options: [
      { en: "Something to eat (food)", ru: "Что-то поесть (еду)", ua: "Щось поїсти (їжу)" },
      { en: "A treatment or bandage for a wound", ru: "Лекарство или перевязку для раны", ua: "Ліки або перев'язку для рани" },
      { en: "A bill or receipt", ru: "Счёт или чек", ua: "Рахунок або чек" },
      { en: "A quiet place to sleep", ru: "Тихое место для сна", ua: "Тихе місце для сну" }
    ],
    correctAnswer: 0,
    explanation: {
      en: 'Warning: "Hrana" in Croatian means "food". In Russian and Ukrainian, "рана" means "wound" (which is "rana" in Croatian).',
      ru: 'Внимание: "Hrana" в хорватском означает "еда". В русском и украинском "рана" — это повреждение тела (по-хорватски просто "rana").',
      ua: 'Увага: "Hrana" у хорватській означає "їжа". У російській та українській мовах "рана" — це тілесне ушкодження (хорватською просто "rana").'
    }
  },
  {
    id: 23,
    level: "B1",
    question: "Prevedite na hrvatski: bread / хлеб / хліб",
    type: "translation",
    acceptedAnswers: ["kruh"],
    explanation: {
      en: 'The translation for bread is "kruh".',
      ru: 'Перевод слова хлеб — "kruh".',
      ua: 'Переклад слова хліб — "kruh".'
    }
  },
  {
    id: 24,
    level: "B1",
    question: "Prevedite na hrvatski: window / окно / вікно",
    type: "translation",
    acceptedAnswers: ["prozor"],
    explanation: {
      en: 'The translation for window is "prozor".',
      ru: 'Перевод слова окно — "prozor".',
      ua: 'Переклад слова вікно — "prozor".'
    }
  },

  // ==========================================
  // LEVEL B2 (8 Questions: 6 MC, 2 Translation)
  // ==========================================
  {
    id: 25,
    level: "B2",
    question: 'Što točno znači veznik "unatoč"?',
    type: "multiple-choice",
    options: [
      { en: "despite / in spite of", ru: "вопреки / несмотря на", ua: "всупереч / незважаючи на" },
      { en: "because of / due to", ru: "из-за / по причине", ua: "через / з причини" },
      { en: "instead of", ru: "вместо", ua: "замість" },
      { en: "during", ru: "во время", ua: "під час" }
    ],
    correctAnswer: 0,
    explanation: {
      en: '"Unatoč" is a concessive preposition meaning "despite" or "in spite of".',
      ru: '"Unatoč" — уступительный предлог, означающий "вопреки" или "несмотря на".',
      ua: '"Unatoč" — допустовий прийменник, що означає "всупереч" або "незважаючи на".'
    }
  },
  {
    id: 26,
    level: "B2",
    question: "U dvorani je bilo prisutno nekoliko _____ (predsjednik - genitive plural).",
    type: "multiple-choice",
    options: [
      { en: "predsjednici", ru: "predsjednici", ua: "predsjednici" },
      { en: "predsjednika", ru: "predsjednika", ua: "predsjednika" },
      { en: "predsjednike", ru: "predsjednike", ua: "predsjednike" },
      { en: "predsjednicima", ru: "predsjednicima", ua: "predsjednicima" }
    ],
    correctAnswer: 1,
    explanation: {
      en: "Quantifiers like 'nekoliko' require the genitive plural, which for masculine nouns has a long -a ending.",
      ru: "Количественные слова вроде 'nekoliko' требуют родительного падежа множественного числа, имеющего окончание -a для мужского рода.",
      ua: "Кількісні слова на кшталт 'nekoliko' вимагають родового відмінка множини, який має закінчення -a для чоловічого роду."
    }
  },
  {
    id: 27,
    level: "B2",
    question: "Da smo znali za gužvu u prometu, _____ (conditional II of 'krenuti') ranije.",
    type: "multiple-choice",
    options: [
      { en: "bili bismo krenuli", ru: "bili bismo krenuli", ua: "bili bismo krenuli" },
      { en: "krenuli bismo", ru: "krenuli bismo", ua: "krenuli bismo" },
      { en: "krenut ćemo", ru: "krenut ćemo", ua: "krenut ćemo" },
      { en: "krenuli smo", ru: "krenuli smo", ua: "krenuli smo" }
    ],
    correctAnswer: 0,
    explanation: {
      en: "Unreal past conditions require Conditional II (bili bismo krenuli).",
      ru: "Для выражения нереального условия в прошлом используется сослагательное наклонение II (bili bismo krenuli).",
      ua: "Для вираження нереальної умови в минулому використовується умовний спосіб II (bili bismo krenuli)."
    }
  },
  {
    id: 28,
    level: "B2",
    question: "U trgovini nismo zatekli _____ (double negation requirement: 'no one').",
    type: "multiple-choice",
    options: [
      { en: "nekoga", ru: "nekoga", ua: "nekoga" },
      { en: "nikoga", ru: "nikoga", ua: "nikoga" },
      { en: "ikoga", ru: "ikoga", ua: "ikoga" },
      { en: "tko", ru: "tko", ua: "tko" }
    ],
    correctAnswer: 1,
    explanation: {
      en: "Croatian grammar requires double negation: 'nismo' (not) + 'nikoga' (no one).",
      ru: "Хорватская грамматика требует двойного отрицания: 'nismo' (не застали) + 'nikoga' (никого).",
      ua: "Хорватська граматика вимагає подвійного заперечення: 'nismo' (не застали) + 'nikoga' (нікого)."
    }
  },
  {
    id: 29,
    level: "B2",
    question: "Otišao je na spavanje tek _____ (prepositional phrase 'after') je završio sve obaveze.",
    type: "multiple-choice",
    options: [
      { en: "nakon što", ru: "nakon što", ua: "nakon što" },
      { en: "prije nego što", ru: "prije nego što", ua: "prije nego što" },
      { en: "tijekom", ru: "tijekom", ua: "tijekom" },
      { en: "dok", ru: "dok", ua: "dok" }
    ],
    correctAnswer: 0,
    explanation: {
      en: '"Nakon što" translates to "after" when introducing a clause.',
      ru: '"Nakon što" переводится как "после того как" при вводе придаточного предложения.',
      ua: '"Nakon što" перекладається як "після того як" при введенні підрядного речення.'
    }
  },
  {
    id: 30,
    level: "B2",
    question: "Ako za ženu kažemo da je \"trudna\", to znači da ona:",
    type: "multiple-choice",
    options: [
      { en: "Is pregnant (expecting a baby)", ru: "Беременна (ждет ребенка)", ua: "Вагітна (чекає на дитину)" },
      { en: "Is very tired after hard work", ru: "Очень устала после тяжелой работы", ua: "Дуже втомилася після важкої роботи" },
      { en: "Is a difficult person to talk to", ru: "Трудный в общении человек", ua: "Важка у спілкуванні людина" },
      { en: "Works as a professional translator", ru: "Работает профессиональным переводчиком", ua: "Працює професійним перекладачем" }
    ],
    correctAnswer: 0,
    explanation: {
      en: 'Warning: "Trudna" in Croatian means "pregnant". It is a false friend to Russian "трудная" or Ukrainian "трудна" (difficult, which is "teška" in Croatian).',
      ru: 'Внимание: "Trudna" в хорватском означает "беременна". Это ложный друг переводчика для русского "трудная" или украинского "трудна" (которое по-хорватски будет "teška").',
      ua: 'Увага: "Trudna" у хорватській мові означає "вагітна". Це хибний друг перекладача для російського "трудная" або українського "трудна" (що хорватською буде "teška").'
    }
  },
  {
    id: 31,
    level: "B2",
    question: "Prevedite na hrvatski: health / здоровье / здоров'я",
    type: "translation",
    acceptedAnswers: ["zdravlje"],
    explanation: {
      en: 'The translation for health is "zdravlje".',
      ru: 'Перевод слова здоровье — "zdravlje".',
      ua: 'Переклад слова здоров\'я — "zdravlje".'
    }
  },
  {
    id: 32,
    level: "B2",
    question: "Prevedite na hrvatski: mirror / зеркало / дзеркало",
    type: "translation",
    acceptedAnswers: ["ogledalo"],
    explanation: {
      en: 'The translation for mirror is "ogledalo".',
      ru: 'Перевод слова зеркало — "ogledalo".',
      ua: 'Переклад слова дзеркало — "ogledalo".'
    }
  },

  // ==========================================
  // LEVEL C1 (8 Questions: 6 MC, 2 Translation)
  // ==========================================
  {
    id: 33,
    level: "C1",
    question: 'Riječ "protuurječnost" je u književnom jeziku sinonim za:',
    type: "multiple-choice",
    options: [
      { en: "suradnju", ru: "suradnju", ua: "suradnju" },
      { en: "kontradikciju", ru: "kontradikciju", ua: "kontradikciju" },
      { en: "suglasnost", ru: "suglasnost", ua: "suglasnost" },
      { en: "potporu", ru: "potporu", ua: "potporu" }
    ],
    correctAnswer: 1,
    explanation: {
      en: '"Protuurječnost" means contradiction or inconsistency.',
      ru: '"Protuurječnost" означает противоречие (синоним — kontradikcija).',
      ua: '"Protuurječnost" означає суперечність (синонім — kontradikcija).'
    }
  },
  {
    id: 34,
    level: "C1",
    question: "Odluku o imenovanju trebate poslati gospodinu _____ (Kovačić - dative singular).",
    type: "multiple-choice",
    options: [
      { en: "Kovačiću", ru: "Kovačiću", ua: "Kovačiću" },
      { en: "Kovačića", ru: "Kovačića", ua: "Kovačića" },
      { en: "Kovačićem", ru: "Kovačićem", ua: "Kovačićem" },
      { en: "Kovačiće", ru: "Kovačiće", ua: "Kovačiće" }
    ],
    correctAnswer: 0,
    explanation: {
      en: "Addresses/recipients take the dative case. 'Kovačić' ends in -u.",
      ru: "Адресаты требуют дательного падежа. 'Kovačić' -> 'Kovačiću'.",
      ua: "Адресати вимагають давального відмінка. 'Kovačić' -> 'Kovačiću'."
    }
  },
  {
    id: 35,
    level: "C1",
    question: "Odjednom se začu strašan prasak, zemlja se zatrese i iz dubine _____ (aorist of 'izaći') plameni jezici.",
    type: "multiple-choice",
    options: [
      { en: "izađoše", ru: "izađoše", ua: "izađoše" },
      { en: "izašli su", ru: "izašli su", ua: "izašli su" },
      { en: "izaći će", ru: "izaći će", ua: "izaći će" },
      { en: "izlažahu", ru: "izlažahu", ua: "izlažahu" }
    ],
    correctAnswer: 0,
    explanation: {
      en: "Aorist is used in literary contexts to express sudden, successive past actions. 'Izađoše' is the 3rd person plural aorist.",
      ru: "Аорист используется в художественном стиле для описания мгновенных, сменяющих друг друга прошедших действий. 'Izađoše' — 3-е лицо мн.ч.",
      ua: "Аорист використовується у художньому стилі для опису миттєвих минулих дій, що швидко змінюють одна одну. 'Izađoše' — 3-тя особа мн."
    }
  },
  {
    id: 36,
    level: "C1",
    question: "Upoznao sam znanstvenika _____ (whose - genitive masculine singular relative pronoun) rad iznimno cijenim.",
    type: "multiple-choice",
    options: [
      { en: "kojeg", ru: "kojeg", ua: "kojeg" },
      { en: "čiji", ru: "čiji", ua: "čiji" },
      { en: "čiji je", ru: "čiji je", ua: "čiji je" },
      { en: "čijega", ru: "čijega", ua: "čijega" }
    ],
    correctAnswer: 3,
    explanation: {
      en: "The relative possessive pronoun 'čiji' (whose) in genitive masculine singular takes the form 'čijega' or 'čijeg'.",
      ru: "Относительное притяжательное местоимение 'čiji' (чей/которого) в родительном падеже мужского рода имеет форму 'čijega' или 'čijeg'.",
      ua: "Відносний присвійний займенник 'čiji' (чий/якого) в родовому відмінку чоловічого роду має форму 'čijega' або 'čijeg'."
    }
  },
  {
    id: 37,
    level: "C1",
    question: "Novi je zakon usvojen _____ (despite - preposition requiring dative case) brojnim prosvjedima građana.",
    type: "multiple-choice",
    options: [
      { en: "usprkos", ru: "usprkos", ua: "usprkos" },
      { en: "radi", ru: "radi", ua: "radi" },
      { en: "zbog", ru: "zbog", ua: "zbog" },
      { en: "tijekom", ru: "tijekom", ua: "tijekom" }
    ],
    correctAnswer: 0,
    explanation: {
      en: '"Usprkos" (despite) requires the dative case (brojnim prosvjedima).',
      ru: '"Usprkos" (вопреки/несмотря на) требует дательного падежа.',
      ua: '"Usprkos" (всупереч/незважаючи на) вимагає давального відмінка.'
    }
  },
  {
    id: 38,
    level: "C1",
    question: "Ako je netko \"vrijedan radnik\", to znači da je on:",
    type: "multiple-choice",
    options: [
      { en: "Hardworking and productive", ru: "Трудолюбивый и полезный", ua: "Працьовитий і корисний" },
      { en: "Harmful and toxic to others", ru: "Вредный и токсичный для окружающих", ua: "Шкідливий і токсичний для інших" },
      { en: "Slow and lazy", ru: "Медленный и ленивый", ua: "Повільний і лінивий" },
      { en: "Angry and aggressive", ru: "Злой и агрессивный", ua: "Злий і агресивний" }
    ],
    correctAnswer: 0,
    explanation: {
      en: 'Warning: "Vrijedan" in Croatian means hardworking or valuable. It is a false friend to Russian "вредный" or Ukrainian "вредний" (harmful, which is "štetan" in Croatian).',
      ru: 'Внимание: "Vrijedan" в хорватском означает "трудолюбивый" или "ценный". Это ложный друг переводчика для русского "вредный" (которое по-хорватски будет "štetan").',
      ua: 'Увага: "Vrijedan" у хорватській означає "працьовитий" або "цінний". Це хибний друг перекладача для українського "вредний" (що хорватською буде "štetan").'
    }
  },
  {
    id: 39,
    level: "C1",
    question: "Prevedite na hrvatski: influence / влияние / вплив",
    type: "translation",
    acceptedAnswers: ["utjecaj", "uticaj"],
    explanation: {
      en: 'The translation for influence is "utjecaj".',
      ru: 'Перевод слова влияние — "utjecaj".',
      ua: 'Переклад слова вплив — "utjecaj".'
    }
  },
  {
    id: 40,
    level: "C1",
    question: "Prevedite na hrvatski: success / успех / успіх",
    type: "translation",
    acceptedAnswers: ["uspjeh", "uspeh"],
    explanation: {
      en: 'The translation for success is "uspjeh".',
      ru: 'Перевод слова успех — "uspjeh".',
      ua: 'Переклад слова успіх — "uspjeh".'
    }
  },

  // ==========================================
  // LEVEL C2 (5 Questions: 4 MC, 1 Translation)
  // ==========================================
  {
    id: 41,
    level: "C2",
    question: "Koji frazem označava uzaludan posao ili prazno pričanje bez rezultata?",
    type: "multiple-choice",
    options: [
      { en: "mlatiti praznu slamu", ru: "mlatiti praznu slamu", ua: "mlatiti praznu slamu" },
      { en: "obrati bostan", ru: "obrati bostan", ua: "obrati bostan" },
      { en: "trčati pred rudo", ru: "trčati pred rudo", ua: "trčati pred rudo" },
      { en: "baciti koplje u trnje", ru: "baciti koplje u trnje", ua: "baciti koplje u trnje" }
    ],
    correctAnswer: 0,
    explanation: {
      en: '"Mlatiti praznu slamu" means to thrash empty straw, an idiom for doing futile work or talking in vain.',
      ru: '"Mlatiti praznu slamu" (молотить пустую сологу) — идиома, означающая бесполезную работу или пустую болтовню.',
      ua: '"Mlatiti praznu slamu" (товкти воду в ступі / молотити порожню солому) — ідіома, що означає марну роботу або порожні балачки.'
    }
  },
  {
    id: 42,
    level: "C2",
    question: "Pjesnik je ostao zadivljen iskonskom ljepotom _____ (te daleke gore - genitive plural agreement).",
    type: "multiple-choice",
    options: [
      { en: "tih dalekih gora", ru: "tih dalekih gora", ua: "tih dalekih gora" },
      { en: "tim dalekim gorama", ru: "tim dalekim gorama", ua: "tim dalekim gorama" },
      { en: "te daleke gore", ru: "te daleke gore", ua: "te daleke gore" },
      { en: "tima dalekima gorama", ru: "tima dalekima gorama", ua: "tima dalekima gorama" }
    ],
    correctAnswer: 0,
    explanation: {
      en: "Genitive plural of feminine 'gora' is 'gora' with a long -a. 'Tih dalekih gora' matches in case and plural number.",
      ru: "Родительный падеж множественного числа женского рода 'gora' — 'gora' (с долгим 'а'). 'Tih dalekih gora' согласуется в падеже и числе.",
      ua: "Родовий відмінок множини жіночого роду 'gora' — 'gora' (з довгим 'а'). 'Tih dalekih gora' узгоджується у відмінку та числі."
    }
  },
  {
    id: 43,
    level: "C2",
    question: "Da _____ (pluperfect of 'biti') više slušao savjete stručnjaka, izbjegao bi ove poteškoće.",
    type: "multiple-choice",
    options: [
      { en: "bijaše", ru: "bijaše", ua: "bijaše" },
      { en: "si bio", ru: "si bio", ua: "si bio" },
      { en: "bi bio", ru: "bi bio", ua: "bi bio" },
      { en: "budeš bio", ru: "budeš bio", ua: "budeš bio" }
    ],
    correctAnswer: 0,
    explanation: {
      en: "The pluperfect (bijaše/bio je bio) is used here in formal literary conditional syntax to describe actions prior to other past events.",
      ru: "Плюсквамперфект (bijaše/bio je bio) используется в официальном литературном стиле для выражения действий, предшествовавших другим прошедшим событиям.",
      ua: "Плюсквамперфект (bijaše/bio je bio) використовується в офіційному літературному стилі для вираження дій, що передували іншим минулим подіям."
    }
  },
  {
    id: 44,
    level: "C2",
    question: "Ovaj se problem tiče svih zaposlenika, s _____ (whoever - instrumental plural relative pronoun) od njih razgovarali.",
    type: "multiple-choice",
    options: [
      { en: "kojima god", ru: "kojima god", ua: "kojima god" },
      { en: "kime god", ru: "kime god", ua: "kime god" },
      { en: "s kime", ru: "s kime", ua: "s kime" },
      { en: "kojim god", ru: "kojim god", ua: "kojim god" }
    ],
    correctAnswer: 0,
    explanation: {
      en: "Relative pronoun 'tko god' or 'koji god' after preposition 's' in instrumental plural becomes 'kojima god'.",
      ru: "Относительное местоимение после предлога 's' в творительном падеже множественного числа принимает форму 'kojima god'.",
      ua: "Відносний займенник після прийменника 's' в орудному відмінку множини набуває форми 'kojima god'."
    }
  },
  {
    id: 45,
    level: "C2",
    question: "Prevedite na hrvatski: responsibility / ответственность / відповідальність",
    type: "translation",
    acceptedAnswers: ["odgovornost"],
    explanation: {
      en: 'The translation for responsibility is "odgovornost".',
      ru: 'Перевод слова ответственность — "odgovornost".',
      ua: 'Переклад слова відповідальність — "odgovornost".'
    }
  }
];

export function calculateLevel(correctAnswers: number): string {
  if (correctAnswers >= 42) return "C2";
  if (correctAnswers >= 36) return "C1";
  if (correctAnswers >= 27) return "B2";
  if (correctAnswers >= 18) return "B1";
  if (correctAnswers >= 9) return "A2";
  return "A1";
}
