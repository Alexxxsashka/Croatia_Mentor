export interface PlacementQuestion {
  id: number;
  level: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: {
    en: string;
    ru: string;
    ua: string;
  };
}

export const placementQuestions: PlacementQuestion[] = [
  // A1 Level - Basic
  {
    id: 1,
    level: "A1",
    question: 'Kako se kaže "Hello" na hrvatskom?',
    options: ["Dobar dan", "Hvala", "Molim", "Zbogom"],
    correctAnswer: 0,
    explanation: {
      en: '"Dobar dan" means "Good day/Hello" in Croatian.',
      ru: '"Dobar dan" означает "Добрый день/Здравствуйте" по-хорватски.',
      ua: '"Dobar dan" означає "Добрий день/Здрастуйте" хорватською.',
    },
  },
  {
    id: 2,
    level: "A1",
    question: "Ja _____ student.",
    options: ["sam", "si", "je", "smo"],
    correctAnswer: 0,
    explanation: {
      en: '"Sam" is the 1st person singular form of "biti" (to be).',
      ru: '"Sam" — форма 1-го лица единственного числа глагола "biti" (быть).',
      ua: '"Sam" — форма 1-ї особи однини дієслова "biti" (бути).',
    },
  },
  {
    id: 3,
    level: "A1",
    question: "Koliko je sat? (What time is it?) — _____ je tri sata.",
    options: ["Sada", "Danas", "Sutra", "Jučer"],
    correctAnswer: 0,
    explanation: {
      en: '"Sada" means "Now" — "Sada je tri sata" = "It is now three o\'clock".',
      ru: '"Sada" означает "Сейчас" — "Sada je tri sata" = "Сейчас три часа".',
      ua: '"Sada" означає "Зараз" — "Sada je tri sata" = "Зараз третя година".',
    },
  },
  {
    id: 4,
    level: "A1",
    question: 'Kako se kaže "Thank you"?',
    options: ["Hvala", "Molim", "Oprosti", "Zdravo"],
    correctAnswer: 0,
    explanation: {
      en: '"Hvala" means "Thank you" in Croatian.',
      ru: '"Hvala" означает "Спасибо" по-хорватски.',
      ua: '"Hvala" означає "Дякую" хорватською.',
    },
  },
  // A2 Level
  {
    id: 5,
    level: "A2",
    question: "Idem u _____. (I'm going to the store.)",
    options: ["trgovinu", "trgovina", "trgovinom", "trgovine"],
    correctAnswer: 0,
    explanation: {
      en: 'After "u" (to), we use the accusative case: "trgovinu".',
      ru: 'После "u" (в) используется винительный падеж: "trgovinu".',
      ua: 'Після "u" (до) використовується знахідний відмінок: "trgovinu".',
    },
  },
  {
    id: 6,
    level: "A2",
    question: "Moja sestra _____ u Zagrebu.",
    options: ["živi", "živim", "živiš", "žive"],
    correctAnswer: 0,
    explanation: {
      en: '"Živi" is the 3rd person singular — she lives (ona živi).',
      ru: '"Živi" — 3-е лицо единственного числа — она живёт (ona živi).',
      ua: '"Živi" — 3-тя особа однини — вона живе (ona živi).',
    },
  },
  {
    id: 7,
    level: "A2",
    question: "Jučer sam _____ na more. (Yesterday I went to the sea.)",
    options: ["išao", "idem", "ići", "iđem"],
    correctAnswer: 0,
    explanation: {
      en: '"Išao" is the past tense masculine form of "ići" (to go).',
      ru: '"Išao" — прошедшее время мужского рода глагола "ići" (идти).',
      ua: '"Išao" — минулий час чоловічого роду дієслова "ići" (йти).',
    },
  },
  {
    id: 8,
    level: "A2",
    question: "_____ je tvoj omiljeni film? (What is your favourite movie?)",
    options: ["Koji", "Kako", "Koliko", "Kada"],
    correctAnswer: 0,
    explanation: {
      en: '"Koji" means "Which/What" when asking about a specific item.',
      ru: '"Koji" означает "Который/Какой" при вопросе о конкретном предмете.',
      ua: '"Koji" означає "Який" при запитанні про конкретний предмет.',
    },
  },
  // B1 Level
  {
    id: 9,
    level: "B1",
    question: "Kad bih imao vremena, _____ na putovanje. (If I had time, I would go on a trip.)",
    options: ["otišao bih", "idem", "išao sam", "ići ću"],
    correctAnswer: 0,
    explanation: {
      en: "The conditional form uses the past participle + 'bih' for hypothetical situations.",
      ru: "Условная форма использует причастие прошедшего времени + 'bih' для гипотетических ситуаций.",
      ua: "Умовна форма використовує дієприкметник минулого часу + 'bih' для гіпотетичних ситуацій.",
    },
  },
  {
    id: 10,
    level: "B1",
    question: "Razgovaramo o _____ projektu. (We are talking about a new project.)",
    options: ["novom", "novi", "novo", "novu"],
    correctAnswer: 0,
    explanation: {
      en: 'After "o" (about), we use the locative case: "novom" (masculine locative).',
      ru: 'После "o" (о) используется предложный падеж: "novom" (мужской род, предложный).',
      ua: 'Після "o" (про) використовується місцевий відмінок: "novom" (чоловічий рід, місцевий).',
    },
  },
  {
    id: 11,
    level: "B1",
    question: "Ona je rekla da _____ sutra doći. (She said she would come tomorrow.)",
    options: ["će", "bi", "je", "hoće"],
    correctAnswer: 0,
    explanation: {
      en: '"Će" is the 3rd person future auxiliary used in reported speech.',
      ru: '"Će" — вспомогательный глагол будущего времени 3-го лица в косвенной речи.',
      ua: '"Će" — допоміжне дієслово майбутнього часу 3-ї особи в непрямій мові.',
    },
  },
  {
    id: 12,
    level: "B1",
    question: "Moram _____ ovaj posao do petka. (I have to finish this job by Friday.)",
    options: ["završiti", "završavam", "završio", "završim"],
    correctAnswer: 0,
    explanation: {
      en: 'After "moram" (I must), we use the infinitive form: "završiti".',
      ru: 'После "moram" (я должен) используется инфинитив: "završiti".',
      ua: 'Після "moram" (я повинен) використовується інфінітив: "završiti".',
    },
  },
  // B2 Level
  {
    id: 13,
    level: "B2",
    question: "Unatoč _____ vremenu, otišli smo na izlet. (Despite the bad weather, we went on a trip.)",
    options: ["lošem", "loše", "loš", "lošeg"],
    correctAnswer: 0,
    explanation: {
      en: '"Unatoč" requires the dative case: "lošem" (dative masculine/neuter).',
      ru: '"Unatoč" требует дательного падежа: "lošem" (дательный мужской/средний род).',
      ua: '"Unatoč" вимагає давального відмінка: "lošem" (давальний чоловічий/середній рід).',
    },
  },
  {
    id: 14,
    level: "B2",
    question: "Knjiga _____ sam pročitao bila je zanimljiva. (The book I read was interesting.)",
    options: ["koju", "koja", "koje", "kojoj"],
    correctAnswer: 0,
    explanation: {
      en: '"Koju" is the feminine accusative relative pronoun — the book (knjiga) is feminine, and it\'s the object of "pročitao".',
      ru: '"Koju" — относительное местоимение женского рода в винительном падеже — книга (knjiga) женского рода, является объектом "pročitao".',
      ua: '"Koju" — відносний займенник жіночого роду в знахідному відмінку — книга (knjiga) жіночого роду, є об\'єктом "pročitao".',
    },
  },
  {
    id: 15,
    level: "B2",
    question: "Da sam to znao ranije, _____ drugačije. (If I had known that earlier, I would have acted differently.)",
    options: ["postupio bih", "postupam", "postupit ću", "postupio sam"],
    correctAnswer: 0,
    explanation: {
      en: "This is the conditional perfect (past conditional) — expresses an unrealized past action.",
      ru: "Это условное совершенное (прошедшее условное) — выражает нереализованное действие в прошлом.",
      ua: "Це умовний доконаний (минулий умовний) — виражає нереалізовану дію в минулому.",
    },
  },
  {
    id: 16,
    level: "B2",
    question: "Svi su bili iznenađeni _____ rezultatima. (Everyone was surprised by the results.)",
    options: ["s", "na", "u", "od"],
    correctAnswer: 0,
    explanation: {
      en: '"Iznenađen s/sa" (surprised by) uses the instrumental preposition "s".',
      ru: '"Iznenađen s/sa" (удивлён) использует инструментальный предлог "s".',
      ua: '"Iznenađen s/sa" (здивований) використовує орудний прийменник "s".',
    },
  },
  // C1 Level
  {
    id: 17,
    level: "C1",
    question: "Premda je situacija složena, ne smijemo _____ optimizam. (Although the situation is complex, we must not lose optimism.)",
    options: ["izgubiti", "gubiti", "izgubimo", "gubimo"],
    correctAnswer: 0,
    explanation: {
      en: 'After "ne smijemo" (we must not), the perfective infinitive "izgubiti" is used for a completed action.',
      ru: 'После "ne smijemo" (мы не должны), совершенный инфинитив "izgubiti" используется для завершённого действия.',
      ua: 'Після "ne smijemo" (ми не повинні), доконаний інфінітив "izgubiti" використовується для завершеної дії.',
    },
  },
  {
    id: 18,
    level: "C1",
    question: "Ovaj zakon stupa na snagu s _____ na dan objave. (This law enters into force on the day of publication.)",
    options: ["danom", "dan", "danu", "dana"],
    correctAnswer: 0,
    explanation: {
      en: '"S danom" (with the day) uses the instrumental case after the preposition "s".',
      ru: '"S danom" (с днём) использует творительный падеж после предлога "s".',
      ua: '"S danom" (з днем) використовує орудний відмінок після прийменника "s".',
    },
  },
  // C2 Level
  {
    id: 19,
    level: "C2",
    question: 'Koja je stilistička figura u rečenici: "Tisuću puta sam ti rekao!" (What is the stylistic figure in the sentence?)',
    options: ["Hiperbola", "Metafora", "Alegorija", "Ironija"],
    correctAnswer: 0,
    explanation: {
      en: '"Tisuću puta" (a thousand times) is a hyperbole — an exaggeration for emphasis.',
      ru: '"Tisuću puta" (тысячу раз) — это гипербола — преувеличение для усиления.',
      ua: '"Tisuću puta" (тисячу разів) — це гіпербола — перебільшення для підсилення.',
    },
  },
  {
    id: 20,
    level: "C2",
    question: "U kojemu se padežu nalazi riječ 'djecom' u rečenici: 'Igrao se s djecom.'?",
    options: ["Instrumental", "Dativ", "Lokativ", "Genitiv"],
    correctAnswer: 0,
    explanation: {
      en: '"S djecom" (with children) — "s" + instrumental case.',
      ru: '"S djecom" (с детьми) — "s" + творительный падеж.',
      ua: '"S djecom" (з дітьми) — "s" + орудний відмінок.',
    },
  },
];

export function calculateLevel(correctAnswers: number): string {
  if (correctAnswers >= 18) return "C2";
  if (correctAnswers >= 16) return "C1";
  if (correctAnswers >= 13) return "B2";
  if (correctAnswers >= 9) return "B1";
  if (correctAnswers >= 5) return "A2";
  return "A1";
}
