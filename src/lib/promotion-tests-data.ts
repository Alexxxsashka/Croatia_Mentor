export interface PromotionQuestion {
  id: number;
  question: { en: string; ru: string; ua: string };
  options: { en: string; ru: string; ua: string }[];
  correctAnswer: number;
  explanation: { en: string; ru: string; ua: string };
}

export const promotionTests: Record<string, {
  targetLevel: string;
  questions: PromotionQuestion[];
}> = {
  A1: {
    targetLevel: "A2",
    questions: [
      {
        id: 1,
        question: {
          en: "How do you ask 'What is your name?' (informal) in Croatian?",
          ru: "Как спросить 'Как тебя зовут?' (неформально) по-хорватски?",
          ua: "Як запитати 'Як тебе звати?' (неформально) хорватською?"
        },
        options: [
          { en: "Kako se zoveš?", ru: "Kako se zoveš?", ua: "Kako se zoveš?" },
          { en: "Kako ste?", ru: "Kako ste?", ua: "Kako ste?" },
          { en: "Odakle si?", ru: "Odakle si?", ua: "Odakle si?" },
          { en: "Tko si ti?", ru: "Tko si ti?", ua: "Tko si ti?" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Kako se zoveš?" is the informal question for asking someone\'s name.',
          ru: '"Kako se zoveš?" — неформальный вопрос об имени.',
          ua: '"Kako se zoveš?" — неформальне запитання про ім\'я.'
        }
      },
      {
        id: 2,
        question: {
          en: "Complete: Oni _____ učenici. (They are students.)",
          ru: "Заполните: Oni _____ učenici. (Они ученики.)",
          ua: "Заповніть: Oni _____ učenici. (Вони учні.)"
        },
        options: [
          { en: "sam", ru: "sam", ua: "sam" },
          { en: "si", ru: "si", ua: "si" },
          { en: "je", ru: "je", ua: "je" },
          { en: "su", ru: "su", ua: "su" }
        ],
        correctAnswer: 3,
        explanation: {
          en: '"su" is the 3rd person plural form of "biti" (to be).',
          ru: '"su" — форма 3-го лица мн.ч. глагола "biti" (быть).',
          ua: '"su" — форма 3-ї особи множини дієслова "biti" (бути).'
        }
      },
      {
        id: 3,
        question: {
          en: "What does the word 'Molim' mean in a dialog?",
          ru: "Что означает слово 'Molim' в диалоге?",
          ua: "Що означає слово 'Molim' у діалозі?"
        },
        options: [
          { en: "Please / You're welcome", ru: "Пожалуйста / Не за что", ua: "Будь ласка / Прошу" },
          { en: "Thank you", ru: "Спасибо", ua: "Дякую" },
          { en: "Sorry", ru: "Извините", ua: "Вибачте" },
          { en: "Hello", ru: "Здравствуйте", ua: "Вітаю" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Molim" translates to "Please" or "You\'re welcome" in reply to thank you.',
          ru: '"Molim" переводится как "Пожалуйста" или "Не за что".',
          ua: '"Molim" перекладається як "Будь ласка" або "Нема за що".'
        }
      },
      {
        id: 4,
        question: {
          en: "Complete: Mi _____ kavu. (We drink coffee.)",
          ru: "Заполните: Mi _____ kavu. (Мы пьем кофе.)",
          ua: "Заповніть: Mi _____ kavu. (Ми п'ємо каву.)"
        },
        options: [
          { en: "pijem", ru: "pijem", ua: "pijem" },
          { en: "pijemo", ru: "pijemo", ua: "pijemo" },
          { en: "piješ", ru: "piješ", ua: "piješ" },
          { en: "piju", ru: "piju", ua: "piju" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"Pijemo" is the 1st person plural form of "piti" (to drink).',
          ru: '"Pijemo" — форма 1-го лица мн.ч. глагола "piti".',
          ua: '"Pijemo" — форма 1-ї особи множини дієслова "piti".'
        }
      },
      {
        id: 5,
        question: {
          en: "Complete: Idem u _____ (school - škola - accusative).",
          ru: "Заполните: Idem u _____ (школа - škola - винительный падеж).",
          ua: "Заповніть: Idem u _____ (школа - škola - знахідний відмінок)."
        },
        options: [
          { en: "škola", ru: "škola", ua: "škola" },
          { en: "školi", ru: "školi", ua: "školi" },
          { en: "škole", ru: "škole", ua: "škole" },
          { en: "škou", ru: "škou", ua: "škou" },
          { en: "školu", ru: "školu", ua: "školu" }
        ],
        correctAnswer: 4,
        explanation: {
          en: 'Feminine singular nouns change ending from -a to -u in the accusative case.',
          ru: 'Существительные женского рода ед.ч. меняют окончание с -a на -u в винительном падеже.',
          ua: 'Іменники жіночого роду однини змінюють закінчення з -a на -u у знахідному відмінку.'
        }
      },
      {
        id: 6,
        question: {
          en: "Which form of 'to be' goes with 'ti'?",
          ru: "Какая форма глагола 'быть' сочетается с 'ti'?",
          ua: "Яка форма дієслова 'бути' поєднується з 'ti'?"
        },
        options: [
          { en: "sam", ru: "sam", ua: "sam" },
          { en: "si", ru: "si", ua: "si" },
          { en: "je", ru: "je", ua: "je" },
          { en: "ste", ru: "ste", ua: "ste" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"Ti si" is the present form of "biti" for the 2nd person singular.',
          ru: '"Ti si" — форма настоящего времени глагола "biti" для 2-го лица ед.ч.',
          ua: '"Ti si" — форма теперішнього часу дієслова "biti" для 2-ї особи однини.'
        }
      },
      {
        id: 7,
        question: {
          en: "What is the accusative singular of 'kava'?",
          ru: "Какова форма винительного падежа ед.ч. для 'kava'?",
          ua: "Яка форма знахідного відмінка однини для 'kava'?"
        },
        options: [
          { en: "kavi", ru: "kavi", ua: "kavi" },
          { en: "kavu", ru: "kavu", ua: "kavu" },
          { en: "kave", ru: "kave", ua: "kave" },
          { en: "kavom", ru: "kavom", ua: "kavom" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"Kavu" is the accusative singular of "kava".',
          ru: '"Kavu" — форма винительного падежа для "kava".',
          ua: '"Kavu" — форма знахідного відмінка для "kava".'
        }
      },
      {
        id: 8,
        question: {
          en: "What does 'Hvala lijepa' mean?",
          ru: "Что означает 'Hvala lijepa'?",
          ua: "Що означає 'Hvala lijepa'?"
        },
        options: [
          { en: "Thank you very much", ru: "Большое спасибо", ua: "Дуже дякую" },
          { en: "Goodbye", ru: "До свидания", ua: "До побачення" },
          { en: "Good morning", ru: "Доброе утро", ua: "Доброго ранку" },
          { en: "Please", ru: "Пожалуйста", ua: "Будь ласка" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Hvala lijepa" means "Thank you very much".',
          ru: '"Hvala lijepa" означает "Большое спасибо".',
          ua: '"Hvala lijepa" означає "Дуже дякую".'
        }
      },
      {
        id: 9,
        question: {
          en: "How do you say 'I am from Ukraine' in Croatian?",
          ru: "Как сказать 'Я из Украины' по-хорватски?",
          ua: "Як сказати 'Я з України' хорватською?"
        },
        options: [
          { en: "Ja sam iz Ukrajine.", ru: "Ja sam iz Ukrajine.", ua: "Ja sam iz Ukrajine." },
          { en: "Ja sam u Ukrajini.", ru: "Ja sam u Ukrajini.", ua: "Ja sam u Ukrajini." },
          { en: "Ja idem u Ukrajinu.", ru: "Ja idem u Ukrajinu.", ua: "Ja idem u Ukrajinu." },
          { en: "Ja volim Ukrajina.", ru: "Ja volim Ukrajina.", ua: "Ja volim Ukrajina." }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Ja sam iz Ukrajine" uses the preposition "iz" (from) requiring Genitive.',
          ru: '"Ja sam iz Ukrajine" использует предлог "iz" (из) с родительным падежом.',
          ua: '"Ja sam iz Ukrajine" використовує прийменник "iz" (з) з родовим відмінком.'
        }
      },
      {
        id: 10,
        question: {
          en: "Conjugate 'zvati se' (to be called) for 'ti' (you singular):",
          ru: "Спрягайте 'zvati se' для местоимения 'ti':",
          ua: "Відміняйте 'zvati se' для займенника 'ti':"
        },
        options: [
          { en: "zovem se", ru: "zovem se", ua: "zovem se" },
          { en: "zoveš se", ru: "zoveš se", ua: "zoveš se" },
          { en: "zove se", ru: "zove se", ua: "zove se" },
          { en: "zovemo se", ru: "zovemo se", ua: "zovemo se" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"zoveš se" is the correct 2nd person singular form.',
          ru: '"zoveš se" — форма 2-го лица ед.ч. настоящего времени.',
          ua: '"zoveš se" — форма 2-ї особи однини теперішнього часу.'
        }
      },
      {
        id: 11,
        question: {
          en: "What is the nominative plural of 'dječak' (boy)?",
          ru: "Каков именительный падеж мн.ч. от 'dječak'?",
          ua: "Який називний відмінок множини від 'dječak'?"
        },
        options: [
          { en: "dječaki", ru: "dječaki", ua: "dječaki" },
          { en: "dječake", ru: "dječake", ua: "dječake" },
          { en: "dječaci", ru: "dječaci", ua: "dječaci" },
          { en: "dječakov", ru: "dječakov", ua: "dječakov" }
        ],
        correctAnswer: 2,
        explanation: {
          en: 'Nouns ending in -k undergo sibilarization in nominative plural (k -> ci).',
          ru: 'Существительные на -k претерпевают сибиляризацию во мн.ч. (k -> ci).',
          ua: 'Іменники на -k зазнають сибіляризації у множині (k -> ci).'
        }
      },
      {
        id: 12,
        question: {
          en: "What is the nominative plural of 'knjiga' (book)?",
          ru: "Каков именительный падеж мн.ч. от 'knjiga'?",
          ua: "Який називний відмінок множини від 'knjiga'?"
        },
        options: [
          { en: "knjige", ru: "knjige", ua: "knjige" },
          { en: "knjigi", ru: "knjigi", ua: "knjigi" },
          { en: "knjiga", ru: "knjiga", ua: "knjiga" },
          { en: "knjigom", ru: "knjigom", ua: "knjigom" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Feminine nouns ending in -a have the ending -e in nominative plural.',
          ru: 'Существительные женского рода на -a имеют окончание -e во мн.ч.',
          ua: 'Іменники жіночого роду на -a мають закінчення -e у множині.'
        }
      },
      {
        id: 13,
        question: {
          en: "Complete: Ja _____ (have) trideset godina. (I am 30 years old.)",
          ru: "Заполните: Ja _____ trideset godina. (Мне 30 лет.)",
          ua: "Заповніть: Ja _____ trideset godina. (Мені 30 років.)"
        },
        options: [
          { en: "imam", ru: "imam", ua: "imam" },
          { en: "imaš", ru: "imaš", ua: "imaš" },
          { en: "ima", ru: "ima", ua: "ima" },
          { en: "imamo", ru: "imamo", ua: "imamo" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Imam" is the 1st person singular form of "imati".',
          ru: '"Imam" — форма 1-го лица ед.ч. глагола "imati" (иметь).',
          ua: '"Imam" — форма 1-ї особи однини дієслова "imati" (мати).'
        }
      },
      {
        id: 14,
        question: {
          en: "Which question word asks about target destination (to where)?",
          ru: "Какое вопросительное слово спрашивает о пункте назначения (куда)?",
          ua: "Яке питальне слово запитує про напрямок руху (куди)?"
        },
        options: [
          { en: "Gdje", ru: "Gdje", ua: "Gdje" },
          { en: "Kamo", ru: "Kamo", ua: "Kamo" },
          { en: "Tko", ru: "Tko", ua: "Tko" },
          { en: "Kada", ru: "Kada", ua: "Kada" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"Kamo" asks about target movement destination, whereas "Gdje" asks about static location.',
          ru: '"Kamo" спрашивает о направлении движения (куда), а "Gdje" — о месте (где).',
          ua: '"Kamo" запитує про напрямок руху (куди), а "Gdje" — про місцезнаходження (де).'
        }
      },
      {
        id: 15,
        question: {
          en: "What day comes after Monday (ponedjeljak)?",
          ru: "Какой день идет за понедельником (ponedjeljak)?",
          ua: "Який день йде після понеділка (ponedjeljak)?"
        },
        options: [
          { en: "srijeda", ru: "srijeda", ua: "srijeda" },
          { en: "utorak", ru: "utorak", ua: "utorak" },
          { en: "četvrtak", ru: "četvrtak", ua: "četvrtak" },
          { en: "petak", ru: "petak", ua: "petak" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"Utorak" means Tuesday in Croatian.',
          ru: '"Utorak" — это вторник.',
          ua: '"Utorak" — це вівторок.'
        }
      },
      {
        id: 16,
        question: {
          en: "What is the meaning of the color 'crveno'?",
          ru: "Каково значение цвета 'crveno'?",
          ua: "Яке значення кольору 'crveno'?"
        },
        options: [
          { en: "blue", ru: "синий", ua: "синій" },
          { en: "red", ru: "красный", ua: "червоний" },
          { en: "green", ru: "зеленый", ua: "зелений" },
          { en: "yellow", ru: "желтый", ua: "жовтий" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"Crveno" means red.',
          ru: '"Crveno" означает красный.',
          ua: '"Crveno" означає червоний.'
        }
      },
      {
        id: 17,
        question: {
          en: "How do you write the number 15 in Croatian?",
          ru: "Как пишется число 15 по-хорватски?",
          ua: "Як пишеться число 15 хорватською?"
        },
        options: [
          { en: "petnaest", ru: "petnaest", ua: "petnaest" },
          { en: "pedeset", ru: "pedeset", ua: "pedeset" },
          { en: "petnaestak", ru: "petnaestak", ua: "petnaestak" },
          { en: "pet", ru: "pet", ua: "pet" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Petnaest" is 15. "Pedeset" is 50.',
          ru: '"Petnaest" — это 15. "Pedeset" — это 50.',
          ua: '"Petnaest" — це 15. "Pedeset" — це 50.'
        }
      },
      {
        id: 18,
        question: {
          en: "What does the word 'kruh' mean?",
          ru: "Что означает слово 'kruh'?",
          ua: "Що означає слово 'kruh'?"
        },
        options: [
          { en: "bread", ru: "хлеб", ua: "хліб" },
          { en: "water", ru: "вода", ua: "вода" },
          { en: "milk", ru: "молоко", ua: "молоко" },
          { en: "sugar", ru: "сахар", ua: "цукор" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Kruh" means bread in Croatian.',
          ru: '"Kruh" переводится как хлеб.',
          ua: '"Kruh" перекладається як хліб.'
        }
      },
      {
        id: 19,
        question: {
          en: "Complete: Oni _____ (have) auto. (They have a car.)",
          ru: "Заполните: Oni _____ auto. (У них есть машина.)",
          ua: "Заповніть: Oni _____ auto. (У них є машина.)"
        },
        options: [
          { en: "imaju", ru: "imaju", ua: "imaju" },
          { en: "imamo", ru: "imamo", ua: "imamo" },
          { en: "imaš", ru: "imaš", ua: "imaš" },
          { en: "imate", ru: "imate", ua: "imate" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Imaju" is the 3rd person plural of "imati".',
          ru: '"Imaju" — форма 3-го лица мн.ч. от "imati".',
          ua: '"Imaju" — форма 3-ї особи множини від "imati".'
        }
      },
      {
        id: 20,
        question: {
          en: "What is the accusative singular form of 'čaj' (tea - inanimate masculine)?",
          ru: "Какова форма винительного падежа ед.ч. для 'čaj'?",
          ua: "Яка форма знахідного відмінка однини для 'čaj'?"
        },
        options: [
          { en: "čaja", ru: "čaja", ua: "čaja" },
          { en: "čaj", ru: "čaj", ua: "čaj" },
          { en: "čaju", ru: "čaju", ua: "čaju" },
          { en: "čajom", ru: "čajom", ua: "čajom" }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'Inanimate masculine nouns do not change in the accusative case.',
          ru: 'Неодушевленные существительные мужского рода не изменяются в винительном падеже.',
          ua: 'Неживі іменники чоловічого роду не змінюються у знахідному відмінку.'
        }
      }
    ]
  },
  A2: {
    targetLevel: "B1",
    questions: [
      {
        id: 1,
        question: {
          en: "Complete: Jučer je on _____ (raditi, past tense). (Yesterday he worked.)",
          ru: "Заполните: Jučer je on _____ (raditi, прош. вр.). (Вчера он работал.)",
          ua: "Заповніть: Jučer je on _____ (raditi, мин. ч.). (Вчора він працював.)"
        },
        options: [
          { en: "radila", ru: "radila", ua: "radila" },
          { en: "radio", ru: "radio", ua: "radio" },
          { en: "radili", ru: "radili", ua: "radili" },
          { en: "radit", ru: "radit", ua: "radit" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"radio" is the masculine singular past participle of "raditi".',
          ru: '"radio" — причастие прош. вр. мужского рода ед.ч. от "raditi".',
          ua: '"radio" — дієприкметник мин. ч. чоловічого роду однини від "raditi".'
        }
      },
      {
        id: 2,
        question: {
          en: "Which preposition fits: Mi smo _____ uredu. (We are in the office.)",
          ru: "Какой предлог подходит: Mi smo _____ uredu. (Мы в офисе.)",
          ua: "Який прийменник підходить: Mi smo _____ uredu. (Ми в офісі.)"
        },
        options: [
          { en: "u", ru: "u", ua: "u" },
          { en: "na", ru: "na", ua: "na" },
          { en: "o", ru: "o", ua: "o" },
          { en: "kod", ru: "kod", ua: "kod" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'The preposition "u" (in) + Locative indicates static location inside.',
          ru: 'Предлог "u" (в) + предложный падеж выражает нахождение внутри.',
          ua: 'Прийменник "u" (в) + місцевий відмінок виражає перебування всередині.'
        }
      },
      {
        id: 3,
        question: {
          en: "What is the dative pronoun for 'to me' in Croatian (short form)?",
          ru: "Каково дательное местоимение 'мне' в хорватском (краткая форма)?",
          ua: "Який давальний займенник 'мені' в хорватській (коротка форма)?"
        },
        options: [
          { en: "me", ru: "me", ua: "me" },
          { en: "mi", ru: "mi", ua: "mi" },
          { en: "meni", ru: "meni", ua: "meni" },
          { en: "mne", ru: "mne", ua: "mne" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"mi" is the clitic (short form) dative pronoun for ja (me/to me).',
          ru: '"mi" — краткая форма дательного падежа местоимения ja.',
          ua: '"mi" — коротка форма давального відмінка займенника ja.'
        }
      },
      {
        id: 4,
        question: {
          en: "What is the genitive singular ending for masculine nouns?",
          ru: "Каково окончание родительного падежа ед.ч. для мужского рода?",
          ua: "Яке закінчення родового відмінка однини для чоловічого роду?"
        },
        options: [
          { en: "-u", ru: "-u", ua: "-u" },
          { en: "-a", ru: "-a", ua: "-a" },
          { en: "-e", ru: "-e", ua: "-e" },
          { en: "-i", ru: "-i", ua: "-i" }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'Masculine nouns end in -a in the genitive singular (eg. stol -> stola).',
          ru: 'Существительные мужского рода оканчиваются на -a в родительном падеже ед.ч.',
          ua: 'Іменники чоловічого роду закінчуються на -a в родовому відмінку однини.'
        }
      },
      {
        id: 5,
        question: {
          en: "How do you say 'I wash myself' in Croatian using the reflexive pronoun?",
          ru: "Как сказать 'Я моюсь' по-хорватски, используя возвратное местоимение?",
          ua: "Як сказати 'Я миюся' хорватською, використовуючи зворотний займенник?"
        },
        options: [
          { en: "Ja perem se.", ru: "Ja perem se.", ua: "Ja perem se." },
          { en: "Ja se perem.", ru: "Ja se perem.", ua: "Ja se perem." },
          { en: "Ja sam perem.", ru: "Ja sam perem.", ua: "Ja sam perem." },
          { en: "Ja perem mene.", ru: "Ja perem mene.", ua: "Ja perem mene." }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'The clitic reflexive pronoun "se" must be placed in the second syntactic position.',
          ru: 'Возвратная частица "se" должна занимать вторую позицию в предложении.',
          ua: 'Зворотна частка "se" має займати другу позицію в реченні.'
        }
      },
      {
        id: 6,
        question: {
          en: "Complete: Oni _____ (ići, past plural) u Split. (They went to Split.)",
          ru: "Заполните: Oni _____ u Split. (Они ездили в Сплит.)",
          ua: "Заповніть: Oni _____ u Split. (Вони їздили до Спліта.)"
        },
        options: [
          { en: "su išli", ru: "su išli", ua: "su išli" },
          { en: "su išle", ru: "su išle", ua: "su išle" },
          { en: "su išla", ru: "su išla", ua: "su išla" },
          { en: "su išao", ru: "su išao", ua: "su išao" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"išli" is the masculine plural past participle of "ići".',
          ru: '"išli" — причастие прош. вр. мн.ч. мужского рода от "ići".',
          ua: '"išli" — дієприкметник мин. ч. множини чоловічого роду від "ići".'
        }
      },
      {
        id: 7,
        question: {
          en: "Complete: Putujem s _____ (brat - instrumental). (I travel with my brother.)",
          ru: "Заполните: Putujem s _____ (brat). (Я путешествую с братом.)",
          ua: "Заповніть: Putujem s _____ (brat). (Я подорожую з братом.)"
        },
        options: [
          { en: "bratom", ru: "bratom", ua: "bratom" },
          { en: "brata", ru: "brata", ua: "brata" },
          { en: "bratu", ru: "bratu", ua: "bratu" },
          { en: "brate", ru: "brate", ua: "brate" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'The preposition "s" requires the instrumental case. Masculine singular ending is -om.',
          ru: 'Предлог "s" (с) требует творительного падежа. Окончание м.р. ед.ч. — -om.',
          ua: 'Прийменник "s" (з) вимагає орудного відмінка. Закінчення ч.р. однини — -om.'
        }
      },
      {
        id: 8,
        question: {
          en: "Complete: Mi _____ (biti, past plural) sretni. (We were happy.)",
          ru: "Заполните: Mi _____ sretni. (Мы были счастливы.)",
          ua: "Заповніть: Mi _____ sretni. (Ми були щасливі.)"
        },
        options: [
          { en: "smo bili", ru: "smo bili", ua: "smo bili" },
          { en: "ste bili", ru: "ste bili", ua: "ste bili" },
          { en: "su bili", ru: "su bili", ua: "su bili" },
          { en: "sam bio", ru: "sam bio", ua: "sam bio" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Mi smo bili" is the past tense of "biti" for the 1st person plural.',
          ru: '"Mi smo bili" — прошедшее время глагола "biti" для 1-го лица мн.ч.',
          ua: '"Mi smo bili" — минулий час дієслова "biti" для 1-ї особи множини.'
        }
      },
      {
        id: 9,
        question: {
          en: "Select correct: Idem u _____ (destination), a sada sam u _____ (static location).",
          ru: "Выберите верно: Idem u _____ (куда), а сейчас я в _____ (где).",
          ua: "Виберіть правильно: Idem u _____ (куди), а зараз я в _____ (де)."
        },
        options: [
          { en: "Zagrebu / Zagreb", ru: "Zagrebu / Zagreb", ua: "Zagrebu / Zagreb" },
          { en: "Zagreb / Zagrebu", ru: "Zagreb / Zagrebu", ua: "Zagreb / Zagrebu" },
          { en: "Zagrebu / Zagrebu", ru: "Zagrebu / Zagrebu", ua: "Zagrebu / Zagrebu" },
          { en: "Zagreb / Zagreb", ru: "Zagreb / Zagreb", ua: "Zagreb / Zagreb" }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'Destination requires Accusative ("u Zagreb"), while location requires Locative ("u Zagrebu").',
          ru: 'Направление требует винительного падежа ("u Zagreb"), а нахождение — местного ("u Zagrebu").',
          ua: 'Напрямок вимагає знахідного відмінка ("u Zagreb"), а місцезнаходження — місцевого ("u Zagrebu").'
        }
      },
      {
        id: 10,
        question: {
          en: "Complete: Ja _____ (must) učiti. (I must study.)",
          ru: "Заполните: Ja _____ učiti. (Я должен учиться.)",
          ua: "Заповніть: Ja _____ učiti. (Я мушу вчитися.)"
        },
        options: [
          { en: "moram", ru: "moram", ua: "moram" },
          { en: "moraš", ru: "moraš", ua: "moraš" },
          { en: "mora", ru: "mora", ua: "mora" },
          { en: "moraju", ru: "moraju", ua: "moraju" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Moram" is the 1st person singular form of "morati".',
          ru: '"Moram" — форма 1-го лица ед.ч. глагола "morati".',
          ua: '"Moram" — форма 1-ї особи однини дієслова "morati".'
        }
      },
      {
        id: 11,
        question: {
          en: "How is the future tense 'I will write' formed in Croatian?",
          ru: "Как образуется будущее время 'я буду писать' в хорватском?",
          ua: "Як утворюється майбутній час 'я буду писати' хорватською?"
        },
        options: [
          { en: "Pisat ću", ru: "Pisat ću", ua: "Pisat ću" },
          { en: "Pisati ću", ru: "Pisati ću", ua: "Pisati ću" },
          { en: "Ja ću pisati", ru: "Ja ću pisati", ua: "Ja ću pisati" },
          { en: "Both A and C are correct", ru: "И А, и С верны", ua: "І А, і С правильні" }
        ],
        correctAnswer: 3,
        explanation: {
          en: 'Both "Pisat ću" (with infinitive truncated) and "Ja ću pisati" are grammatically correct.',
          ru: 'И "Pisat ću", и "Ja ću pisati" грамматически верны.',
          ua: 'І "Pisat ću", і "Ja ću pisati" граматично правильні.'
        }
      },
      {
        id: 12,
        question: {
          en: "What is the partitive genitive expression for 'some water'?",
          ru: "Каково партитивное (количественное) выражение для 'немного воды'?",
          ua: "Який партитивний (кількісний) вираз для 'трохи води'?"
        },
        options: [
          { en: "čaša vode", ru: "čaša vode", ua: "čaša vode" },
          { en: "malo vode", ru: "malo vode", ua: "malo vode" },
          { en: "piti vodu", ru: "piti vodu", ua: "piti vodu" },
          { en: "Both A and B use Genitive", ru: "И А, и В используют род.п.", ua: "І А, і В використовують род.в." }
        ],
        correctAnswer: 3,
        explanation: {
          en: 'Both expressions use the Genitive singular of "voda" ("vode") for quantities.',
          ru: 'Оба выражения используют родительный падеж ("vode") для выражения количества.',
          ua: 'Обидва вирази використовують родовий відмінок ("vode") для вираження кількості.'
        }
      },
      {
        id: 13,
        question: {
          en: "What does the word 'trgovina' mean?",
          ru: "Что означает слово 'trgovina'?",
          ua: "Что означает слово 'trgovina'?"
        },
        options: [
          { en: "store / shop", ru: "магазин", ua: "магазин" },
          { en: "market", ru: "рынок", ua: "ринок" },
          { en: "office", ru: "офис", ua: "офіс" },
          { en: "station", ru: "вокзал / станция", ua: "вокзал / станція" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Trgovina" means shop or store.',
          ru: '"Trgovina" переводится как магазин.',
          ua: '"Trgovina" перекладається як магазин.'
        }
      },
      {
        id: 14,
        question: {
          en: "Match adjective with feminine noun: '_____ kuća' (beautiful house).",
          ru: "Согласуйте прилагательное с женским родом: '_____ kuća'.",
          ua: "Узгодьте прикметник з жіночим родом: '_____ kuća'."
        },
        options: [
          { en: "Lijep", ru: "Lijep", ua: "Lijep" },
          { en: "Lijepa", ru: "Lijepa", ua: "Lijepa" },
          { en: "Lijepo", ru: "Lijepo", ua: "Lijepo" },
          { en: "Lijepe", ru: "Lijepe", ua: "Lijepe" }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'Feminine adjectives end in -a to agree with feminine nouns (lijepa kuća).',
          ru: 'Прилагательные женского рода оканчиваются на -a (lijepa kuća).',
          ua: 'Прикметники жіночого роду закінчуються на -a (lijepa kuća).'
        }
      },
      {
        id: 15,
        question: {
          en: "What is the negation of 'ja sam' (I am)?",
          ru: "Каково отрицание формы 'ja sam'?",
          ua: "Яке заперечення форми 'ja sam'?"
        },
        options: [
          { en: "ja ne sam", ru: "ja ne sam", ua: "ja ne sam" },
          { en: "ja nisam", ru: "ja nisam", ua: "ja nisam" },
          { en: "ja neću", ru: "ja neću", ua: "ja neću" },
          { en: "ja nemam", ru: "ja nemam", ua: "ja nemam" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"Nisam" is the negative present form of "biti" for the 1st person singular.',
          ru: '"Nisam" — отрицательная форма глагола "biti" для 1-го лица ед.ч.',
          ua: '"Nisam" — заперечна форма дієслова "biti" для 1-ї особи однини.'
        }
      },
      {
        id: 16,
        question: {
          en: "Complete: Ovo je _____ (your - informal singular feminine) knjiga.",
          ru: "Заполните: Ovo je _____ knjiga. (Это твоя книга.)",
          ua: "Заповніть: Ovo je _____ knjiga. (Це твоя книга.)"
        },
        options: [
          { en: "tvoj", ru: "tvoj", ua: "tvoj" },
          { en: "tvoja", ru: "tvoja", ua: "tvoja" },
          { en: "tvoje", ru: "tvoje", ua: "tvoje" },
          { en: "tvoji", ru: "tvoji", ua: "tvoji" }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'Possessive pronoun "tvoja" agrees with the feminine noun "knjiga".',
          ru: 'Притяжательное местоимение "tvoja" согласуется с женским родом "knjiga".',
          ua: 'Присвійний займенник "tvoja" узгоджується з жіночим родом "knjiga".'
        }
      },
      {
        id: 17,
        question: {
          en: "What is the plural of the masculine noun 'stan' (apartment)?",
          ru: "Каков именительный падеж мн.ч. от 'stan'?",
          ua: "Який називний відмінок множини від 'stan'?"
        },
        options: [
          { en: "stani", ru: "stani", ua: "stani" },
          { en: "stane", ru: "stane", ua: "stane" },
          { en: "stanovi", ru: "stanovi", ua: "stanovi" },
          { en: "stanove", ru: "stanove", ua: "stanove" }
        ],
        correctAnswer: 2,
        explanation: {
          en: 'Monosyllabic masculine nouns get the plural insert -ov- (stan -> stanovi).',
          ru: 'Односложные существительные мужского рода получают суффикс -ov- во мн.ч.',
          ua: 'Односкладові іменники чоловічого роду отримують суфікс -ov- у множині.'
        }
      },
      {
        id: 18,
        question: {
          en: "Complete: Ja _____ (love) glazbu.",
          ru: "Заполните: Ja _____ glazbu. (Я люблю музыку.)",
          ua: "Заповніть: Ja _____ glazbu. (Я люблю музику.)"
        },
        options: [
          { en: "volim", ru: "volim", ua: "volim" },
          { en: "voliš", ru: "voliš", ua: "voliš" },
          { en: "voli", ru: "voli", ua: "voli" },
          { en: "volimo", ru: "volimo", ua: "volimo" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Volim" is the 1st person present form of "voljeti".',
          ru: '"Volim" — форма настоящего времени 1-го лица ед.ч. от "voljeti".',
          ua: '"Volim" — форма теперішнього часу 1-ї особи однини від "voljeti".'
        }
      },
      {
        id: 19,
        question: {
          en: "What does the word 'glava' mean?",
          ru: "Что означает слово 'glava'?",
          ua: "Что означает слово 'glava'?"
        },
        options: [
          { en: "head", ru: "голова", ua: "голова" },
          { en: "hand", ru: "рука", ua: "рука" },
          { en: "foot", ru: "нога", ua: "нога" },
          { en: "eye", ru: "глаз", ua: "око" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Glava" means head.',
          ru: '"Glava" означает голова.',
          ua: '"Glava" означає голова.'
        }
      },
      {
        id: 20,
        question: {
          en: "How do you ask 'What time is it?' in Croatian?",
          ru: "Как спросить 'Который час?' по-хорватски?",
          ua: "Як запитати 'Котра година?' хорватською?"
        },
        options: [
          { en: "Koliko je sati?", ru: "Koliko je sati?", ua: "Koliko je sati?" },
          { en: "Koje je vrijeme?", ru: "Koje je vrijeme?", ua: "Koje je vrijeme?" },
          { en: "Koliko sati imaš?", ru: "Koliko sati imaš?", ua: "Koliko sati imaš?" },
          { en: "Gdje je sat?", ru: "Gdje je sat?", ua: "Gdje je sat?" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Koliko je sati?" is the standard way to ask for the time.',
          ru: '"Koliko je sati?" — стандартный вопрос о времени.',
          ua: '"Koliko je sati?" — стандартне запитання про час.'
        }
      }
    ]
  },
  B1: {
    targetLevel: "B2",
    questions: [
      {
        id: 1,
        question: {
          en: "Which verb aspect form is used for a completed action: 'Jučer sam _____ pismo.' (I wrote a letter.)",
          ru: "Какая видовая форма используется для завершенного действия: 'Jučer sam _____ pismo.' (Я написал письмо.)",
          ua: "Яка видова форма використовується для завершеної дії: 'Jučer sam _____ pismo.' (Я написав листа.)"
        },
        options: [
          { en: "pisao", ru: "pisao", ua: "pisao" },
          { en: "napisao", ru: "napisao", ua: "napisao" },
          { en: "pišem", ru: "pišem", ua: "pišem" },
          { en: "napišem", ru: "napišem", ua: "napišem" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"Napisao" is the perfective past participle, showing a completed action.',
          ru: '"Napisao" — причастие прош. вр. совершенного вида, выражает завершенное действие.',
          ua: '"Napisao" — дієприкметник мин. ч. доконаного виду, виражає завершену дію.'
        }
      },
      {
        id: 2,
        question: {
          en: "Complete with Future II: Kad _____ (you arrive), javi mi se.",
          ru: "Заполните с Future II: Kad _____ (ты приедешь), javi mi se.",
          ua: "Заповніть з Future II: Kad _____ (ти приїдеш), javi mi se."
        },
        options: [
          { en: "budeš stigao", ru: "budeš stigao", ua: "budeš stigao" },
          { en: "ćeš stići", ru: "ćeš stići", ua: "ćeš stići" },
          { en: "stigneš", ru: "stigneš", ua: "stigneš" },
          { en: "bi stigao", ru: "bi stigao", ua: "bi stigao" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Future II is formed with budem/budeš... + participle for pre-actions in future clauses.',
          ru: 'Future II образуется с помощью будешь + причастие для предшествующих действий.',
          ua: 'Future II утворюється за допомогою будеш + дієприкметник для передуючих дій.'
        }
      },
      {
        id: 3,
        question: {
          en: "Which preposition requires the Genitive case?",
          ru: "Какой предлог требует родительного падежа?",
          ua: "Який прийменник вимагає родового відмінка?"
        },
        options: [
          { en: "bez", ru: "bez", ua: "bez" },
          { en: "u", ru: "u", ua: "u" },
          { en: "s / sa", ru: "s / sa", ua: "s / sa" },
          { en: "o", ru: "o", ua: "o" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"bez" (without) always requires the Genitive case.',
          ru: 'Предлог "bez" (без) всегда требует родительного падежа.',
          ua: 'Прийменник "bez" (без) завжди вимагає родового відмінка.'
        }
      },
      {
        id: 4,
        question: {
          en: "What is the comparative form of the adjective 'dobar' (good)?",
          ru: "Какова сравнительная степень прилагательного 'dobar'?",
          ua: "Який вищий ступінь порівняння прикметника 'dobar'?"
        },
        options: [
          { en: "dobriji", ru: "dobriji", ua: "dobriji" },
          { en: "bolji", ru: "bolji", ua: "bolji" },
          { en: "najbolji", ru: "najbolji", ua: "najbolji" },
          { en: "dobro", ru: "dobro", ua: "dobro" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"bolji" is the irregular comparative form of "dobar".',
          ru: '"bolji" — неправильная сравнительная степень от "dobar".',
          ua: '"bolji" — неправильний вищий ступінь від "dobar".'
        }
      },
      {
        id: 5,
        question: {
          en: "Choose the correct clitic pronoun order: 'On _____ (it to me) je dao.'",
          ru: "Выберите верный порядок местоимений-энклитик: 'On _____ je dao.' (Он дал это мне.)",
          ua: "Виберіть правильний порядок займенників-енклітик: 'On _____ je dao.' (Він дав це мені.)"
        },
        options: [
          { en: "ga mi", ru: "ga mi", ua: "ga mi" },
          { en: "mi ga", ru: "mi ga", ua: "mi ga" },
          { en: "mi je ga", ru: "mi je ga", ua: "mi je ga" },
          { en: "ga je mi", ru: "ga je mi", ua: "ga je mi" }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'Dative clitics (mi) always precede accusative clitics (ga) (mi ga).',
          ru: 'Дательные энклитики (mi) всегда предшествуют винительным (ga) (mi ga).',
          ua: 'Давальні енклітики (mi) завжди передують знахідним (ga) (mi ga).'
        }
      },
      {
        id: 6,
        question: {
          en: "What is the perfective counterpart of 'pisati'?",
          ru: "Каков совершенный вид глагола 'pisati'?",
          ua: "Який доконаний вид дієслова 'pisati'?"
        },
        options: [
          { en: "prepisati", ru: "prepisati", ua: "prepisati" },
          { en: "napisati", ru: "napisati", ua: "napisati" },
          { en: "zapisati", ru: "zapisati", ua: "zapisati" },
          { en: "upisati", ru: "upisati", ua: "upisati" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"napisati" is the basic perfective pair for "pisati".',
          ru: '"napisati" — основная пара совершенного вида для "pisati".',
          ua: '"napisati" — основна пара доконаного виду для "pisati".'
        }
      },
      {
        id: 7,
        question: {
          en: "Which case ending follows the numbers 2, 3, and 4 in Croatian?",
          ru: "Какой падеж используется после числительных 2, 3 и 4?",
          ua: "Який відмінок використовується після числівників 2, 3 та 4?"
        },
        options: [
          { en: "Nominative plural", ru: "Именительный мн.ч.", ua: "Називний множини" },
          { en: "Genitive singular", ru: "Родительный ед.ч.", ua: "Родовий однини" },
          { en: "Genitive plural", ru: "Родительный мн.ч.", ua: "Родовий множини" },
          { en: "Dative plural", ru: "Дательный мн.ч.", ua: "Давальний множини" }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'Nouns after 2, 3, 4 require Genitive singular form (eg. tri brata, četiri stola).',
          ru: 'После 2, 3, 4 требуется родительный падеж ед.ч. (паукальный).',
          ua: 'Після 2, 3, 4 потрібен родовий відмінок однини.'
        }
      },
      {
        id: 8,
        question: {
          en: "Complete with relative pronoun: To je žena _____ (who) je vidjela nesreću.",
          ru: "Заполните относительным местоимением: To je žena _____ je vidjela nesreću.",
          ua: "Заповніть відносним займенником: To je žena _____ je vidjela nesreću."
        },
        options: [
          { en: "koja", ru: "koja", ua: "koja" },
          { en: "koju", ru: "koju", ua: "koju" },
          { en: "koje", ru: "koje", ua: "koje" },
          { en: "kojem", ru: "kojem", ua: "kojem" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"koja" is the feminine nominative singular relative pronoun.',
          ru: '"koja" — относительное местоимение ж.р. именительного падежа ед.ч.',
          ua: '"koja" — відносний займенник ж.р. називного відмінка однини.'
        }
      },
      {
        id: 9,
        question: {
          en: "What does the preposition 'kod' mean in: 'Danas sam kod Ivana.'?",
          ru: "Что означает предлог 'kod' в предложении 'Danas sam kod Ivana.'?",
          ua: "Що означає прийменник 'kod' у реченні 'Danas sam kod Ivana.'?"
        },
        options: [
          { en: "at Ivan's place", ru: "у Ивана дома / в гости у", ua: "у Івана вдома / в гостях у" },
          { en: "with Ivan in town", ru: "с Иваном в городе", ua: "з Іваном у місті" },
          { en: "to Ivan's place (movement)", ru: "к Ивану (направление)", ua: "до Івана (напрямок)" },
          { en: "under Ivan", ru: "под Иваном", ua: "під Іваном" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"kod" + Genitive indicates location at someone\'s place or home.',
          ru: '"kod" + родительный падеж выражает местонахождение у кого-то дома.',
          ua: '"kod" + родовий відмінок виражає перебування у когось вдома.'
        }
      },
      {
        id: 10,
        question: {
          en: "Compare the adverb 'brzo' (quickly):",
          ru: "Образуйте сравнительную степень наречия 'brzo':",
          ua: "Утворіть вищий ступінь порівняння прислівника 'brzo':"
        },
        options: [
          { en: "brzije", ru: "brzije", ua: "brzije" },
          { en: "brže", ru: "brže", ua: "brže" },
          { en: "najbrže", ru: "najbrže", ua: "najbrže" },
          { en: "brzo", ru: "brzo", ua: "brzo" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"brže" is the comparative form of "brzo" (quickly).',
          ru: '"brže" — сравнительная степень наречия "brzo".',
          ua: '"brže" — вищий ступінь прислівника "brzo".'
        }
      },
      {
        id: 11,
        question: {
          en: "What is the genitive plural ending of feminine nouns ending in -a?",
          ru: "Каково окончание родительного падежа мн.ч. существительных ж.р. на -a?",
          ua: "Яке закінчення родового відмінка множини іменників ж.р. на -a?"
        },
        options: [
          { en: "-a (long vowel)", ru: "-a (долгий гласный)", ua: "-a (довгий голосний)" },
          { en: "-e", ru: "-e", ua: "-e" },
          { en: "-i", ru: "-i", ua: "-i" },
          { en: "-u", ru: "-u", ua: "-u" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Feminine nouns ending in -a have the ending -a with a long vowel in Genitive plural (eg. žena -> žena).',
          ru: 'Существительные ж.р. на -a во мн.ч. родительного падежа имеют окончание -a.',
          ua: 'Іменники ж.р. на -a у множині родового відмінка мають закінчення -a.'
        }
      },
      {
        id: 12,
        question: {
          en: "What is the past tense form of 'reći' (to say) for 'on' (he)?",
          ru: "Какова форма прошедшего времени глагола 'reći' для местоимения 'on'?",
          ua: "Яка форма минулого часу дієслова 'reći' для займенника 'on'?"
        },
        options: [
          { en: "rekao je", ru: "rekao je", ua: "rekao je" },
          { en: "reći je", ru: "reći je", ua: "reći je" },
          { en: "reče je", ru: "reče je", ua: "reče je" },
          { en: "reko je", ru: "reko je", ua: "reko je" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"rekao je" is the past tense form of the irregular verb "reći".',
          ru: '"rekao je" — прошедшее время глагола "reći".',
          ua: '"rekao je" — минулий час дієслова "reći".'
        }
      },
      {
        id: 13,
        question: {
          en: "Choose the correct pairing for location vs movement verbs:",
          ru: "Выберите правильную пару глаголов местонахождения и движения:",
          ua: "Виберіть правильну пару дієслів місцезнаходження та руху:"
        },
        options: [
          { en: "leži / leže", ru: "leži / leže", ua: "leži / leže" },
          { en: "stoji / stavlja", ru: "stoji / stavlja", ua: "stoji / stavlja" },
          { en: "sjedi / sjeda", ru: "sjedi / sjeda", ua: "sjedi / sjeda" },
          { en: "All of the above show location vs placement", ru: "Все вышеперечисленное верно", ua: "Все вищезазначене правильно" }
        ],
        correctAnswer: 3,
        explanation: {
          en: 'Croatian distinguishes between state of being (sjedi, stoji) and action/placement (sjeda, stavlja).',
          ru: 'Хорватский различает статическое состояние и динамическое действие.',
          ua: 'Хорватська розрізняє статичний стан та динамічну дію.'
        }
      },
      {
        id: 14,
        question: {
          en: "Is double negation allowed in Croatian ('I don't know anything')?",
          ru: "Разрешено ли двойное отрицание в хорватском языке ('Я ничего не знаю')?",
          ua: "Чи дозволено подвійне заперечення в хорватській мові ('Я нічого не знаю')?"
        },
        options: [
          { en: "Yes: Ne znam ništa.", ru: "Да: Ne znam ništa.", ua: "Так: Ne znam ništa." },
          { en: "No: Znam ništa.", ru: "Нет: Znam ništa.", ua: "Ні: Znam ništa." },
          { en: "No: Ne znam nešto.", ru: "Нет: Ne znam nešto.", ua: "Ні: Ne znam nešto." },
          { en: "Only in dialects", ru: "Только в диалектах", ua: "Тільки в діалектах" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Double (and multiple) negation is standard in Croatian syntax.',
          ru: 'Двойное отрицание является нормой в хорватском синтаксисе.',
          ua: 'Подвійне заперечення є нормою в хорватському синтаксисі.'
        }
      },
      {
        id: 15,
        question: {
          en: "What is the reflexive pronoun 'sebe/se' used for?",
          ru: "Для чего используется возвратное местоимение 'sebe/se'?",
          ua: "Для чого використовується зворотний займенник 'sebe/se'?"
        },
        options: [
          { en: "To direct action back to subject", ru: "Для возвращения действия на субъект", ua: "Для повернення дії на суб'єкт" },
          { en: "To form passive sentences", ru: "Для образования пассива", ua: "Для утворення пасиву" },
          { en: "To express reciprocal actions", ru: "Для взаимных действий (друг друга)", ua: "Для взаємних дій (один одного)" },
          { en: "All of the above", ru: "Все вышеперечисленное", ua: "Все вищезазначене" }
        ],
        correctAnswer: 3,
        explanation: {
          en: '"se" serves reflexivity, reciprocal meanings, and passive formations.',
          ru: '"se" обслуживает возвратность, взаимность и пассивный залог.',
          ua: '"se" обслуговує зворотність, взаємність та пасивний стан.'
        }
      },
      {
        id: 16,
        question: {
          en: "Complete: Sutra _____ (we will watch) utakmicu.",
          ru: "Заполните: Sutra _____ utakmicu. (Завтра мы будем смотреть матч.)",
          ua: "Заповніть: Sutra _____ utakmicu. (Завтра ми будемо дивитися матч.)"
        },
        options: [
          { en: "ćemo gledati", ru: "ćemo gledati", ua: "ćemo gledati" },
          { en: "gledat ćemo", ru: "gledat ćemo", ua: "gledat ćemo" },
          { en: "bismo gledali", ru: "bismo gledali", ua: "bismo gledali" },
          { en: "Both A and B are correct", ru: "И А, и В верны", ua: "І А, і В правильні" }
        ],
        correctAnswer: 3,
        explanation: {
          en: 'Future I clitics can be placed after infinitive (gledat ćemo) or after subject/adverb (ćemo gledati).',
          ru: 'Энклитики будущего времени могут следовать за инфинитивом или за наречием.',
          ua: 'Енклітики майбутнього часу можуть йти за інфінітивом або за прислівником.'
        }
      },
      {
        id: 17,
        question: {
          en: "What case follows negation: 'Nemam _____ (novac)?'",
          ru: "Какой падеж следует за отрицанием: 'Nemam _____ (novac)?'",
          ua: "Який відмінок йде після заперечення: 'Nemam _____ (novac)?'"
        },
        options: [
          { en: "Genitive: novca", ru: "Родительный: novca", ua: "Родовий: novca" },
          { en: "Accusative: novac", ru: "Винительный: novac", ua: "Знахідний: novac" },
          { en: "Dative: novcu", ru: "Дательный: novcu", ua: "Давальний: novcu" },
          { en: "Nominative: novac", ru: "Именительный: novac", ua: "Називний: novac" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Negation takes Genitive (genitiv slavenski) in Croatian (eg. nemam novca, nema problema).',
          ru: 'Отрицание часто требует родительного падежа (славянский генитив).',
          ua: 'Заперечення часто вимагає родового відмінка (слов\'янський генітив).'
        }
      },
      {
        id: 18,
        question: {
          en: "Which preposition requires Instrumental case?",
          ru: "Какой предлог требует творительного падежа?",
          ua: "Який прийменник вимагає орудного відмінка?"
        },
        options: [
          { en: "s / sa (with)", ru: "s / sa (с)", ua: "s / sa (з)" },
          { en: "kod", ru: "kod", ua: "kod" },
          { en: "k", ru: "k", ua: "k" },
          { en: "iz", ru: "iz", ua: "iz" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"s/sa" (with) requires the Instrumental case (eg. sa mnom - with me).',
          ru: 'Предлог "s/sa" (с) требует творительного падежа.',
          ua: 'Прийменник "s/sa" (з) вимагає орудного відмінка.'
        }
      },
      {
        id: 19,
        question: {
          en: "What is the superlative form of 'loš' (bad)?",
          ru: "Какова превосходная степень от 'loš'?",
          ua: "Який найвищий ступінь порівняння від 'loš'?"
        },
        options: [
          { en: "lošiji", ru: "lošiji", ua: "lošiji" },
          { en: "najlošiji", ru: "najlošiji", ua: "najlošiji" },
          { en: "gori", ru: "gori", ua: "gori" },
          { en: "najgori", ru: "najgori", ua: "najgori" }
        ],
        correctAnswer: 3,
        explanation: {
          en: '"najgori" is the irregular superlative of "loš" (bad -> worse -> worst).',
          ru: '"najgori" — превосходная степень от "loš" (loš -> gori -> najgori).',
          ua: '"najgori" — найвищий ступінь від "loš" (loš -> gori -> najgori).'
        }
      },
      {
        id: 20,
        question: {
          en: "What is the meaning of the word 'svaki'?",
          ru: "Что означает слово 'svaki'?",
          ua: "Что означает слово 'svaki'?"
        },
        options: [
          { en: "every / each", ru: "каждый", ua: "кожен" },
          { en: "someone", ru: "кто-то", ua: "хтось" },
          { en: "never", ru: "никогда", ua: "ніколи" },
          { en: "always", ru: "всегда", ua: "завжди" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"svaki" means every or each in Croatian.',
          ru: '"svaki" переводится как каждый.',
          ua: '"svaki" перекладається як кожен.'
        }
      }
    ]
  },
  B2: {
    targetLevel: "C1",
    questions: [
      {
        id: 1,
        question: {
          en: "How do you form Conditional I (present hypothetical) for 'ja'?",
          ru: "Как образуется условное наклонение I (настоящее) для 'ja'?",
          ua: "Як утворюється умовний спосіб I (теперішнє) для 'ja'?"
        },
        options: [
          { en: "bih + active participle", ru: "bih + причастие", ua: "bih + дієприкметник" },
          { en: "bi + active participle", ru: "bi + причастие", ua: "bi + дієприкметник" },
          { en: "sam + active participle", ru: "sam + причастие", ua: "sam + дієприкметник" },
          { en: "budem + active participle", ru: "budem + причастие", ua: "budem + дієприкметник" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Conditional I for 1st person singular uses clitic "bih" + participle (eg. ja bih išao).',
          ru: 'Conditional I для 1-го лица ед.ч. использует частицу "bih" + причастие.',
          ua: 'Conditional I для 1-ї особи однини використовує частку "bih" + дієприкметник.'
        }
      },
      {
        id: 2,
        question: {
          en: "Formulate Conditional II (past hypothetical) for 'on': 'He would have come.'",
          ru: "Сформулируйте условное наклонение II (прошедшее) для 'on': 'Он бы пришел.'",
          ua: "Сформулюйте умовний спосіб II (минуле) для 'on': 'Він би прийшов.'"
        },
        options: [
          { en: "bio bi došao", ru: "bio bi došao", ua: "bio bi došao" },
          { en: "bio bih došao", ru: "bio bih došao", ua: "bio bih došao" },
          { en: "bude došao", ru: "bude došao", ua: "bude došao" },
          { en: "bi došao", ru: "bi došao", ua: "bi došao" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Conditional II is formed with Conditional I of "biti" (bio bi) + participle (došao).',
          ru: 'Conditional II образуется с помощью условного наклонения глагола "biti" + причастие.',
          ua: 'Conditional II утворюється за допомогою умовного способу дієслова "biti" + дієприкметник.'
        }
      },
      {
        id: 3,
        question: {
          en: "What is the passive reflexive structure of 'The house is being built'?",
          ru: "Какова пассивно-возвратная структура для 'Дом строится'?",
          ua: "Яка пасивно-зворотна структура для 'Будинок будується'?"
        },
        options: [
          { en: "Kuća se gradi.", ru: "Kuća se gradi.", ua: "Kuća se gradi." },
          { en: "Kuća je građena.", ru: "Kuća je građena.", ua: "Kuća je građena." },
          { en: "Kuću grade.", ru: "Kuću grade.", ua: "Kuću grade." },
          { en: "Both A and B are passive forms", ru: "И А, и В являются формами пассива", ua: "І А, і В є формами пасиву" }
        ],
        correctAnswer: 3,
        explanation: {
          en: 'Both reflexive "se" passive and descriptive participle passive exist in Croatian.',
          ru: 'Как возвратный пассив с "se", так и страдательное причастие выражают пассив.',
          ua: 'Як зворотний пасив із "se", так і пасивний дієприкметник виражають пасив.'
        }
      },
      {
        id: 4,
        question: {
          en: "Complete with verbal noun: _____ (writing) pisama je staromodno.",
          ru: "Заполните отглагольным именем: _____ (написание) pisama je staromodno.",
          ua: "Заповніть віддієслівним іменником: _____ (написання) pisama je staromodno."
        },
        options: [
          { en: "Pisati", ru: "Pisati", ua: "Pisati" },
          { en: "Pisanje", ru: "Pisanje", ua: "Pisanje" },
          { en: "Pisan", ru: "Pisan", ua: "Pisan" },
          { en: "Pisac", ru: "Pisac", ua: "Pisac" }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'Verbal nouns (glagolske imenice) are formed using the suffix -nje (pisanje).',
          ru: 'Отглагольные имена образуются с помощью суффикса -nje (pisanje).',
          ua: 'Віддієслівні іменники утворюються за допомогою суфікса -nje (pisanje).'
        }
      },
      {
        id: 5,
        question: {
          en: "Which case ending is used after number 5 (pet) and above?",
          ru: "Какой падеж используется после числительного 5 и выше?",
          ua: "Який відмінок використовується після числівника 5 і вище?"
        },
        options: [
          { en: "Genitive singular", ru: "Родительный ед.ч.", ua: "Родовий однини" },
          { en: "Genitive plural", ru: "Родительный мн.ч.", ua: "Родовий множини" },
          { en: "Nominative plural", ru: "Именительный мн.ч.", ua: "Називний множини" },
          { en: "Dative plural", ru: "Дательный мн.ч.", ua: "Давальний множини" }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'Numbers 5 and above take Genitive plural (eg. pet učenika, deset stolova).',
          ru: 'Числительные от 5 и выше требуют родительного падежа мн.ч.',
          ua: 'Числівники від 5 і вище вимагають родового відмінка множини.'
        }
      },
      {
        id: 6,
        question: {
          en: "What is the instrumental singular of the pronoun 'ja'?",
          ru: "Каков творительный падеж ед.ч. от местоимения 'ja'?",
          ua: "Який орудний відмінок однини від займенника 'ja'?"
        },
        options: [
          { en: "sa mnom", ru: "sa mnom", ua: "sa mnom" },
          { en: "s me", ru: "s me", ua: "s me" },
          { en: "sa mene", ru: "sa mene", ua: "sa mene" },
          { en: "sa meni", ru: "sa meni", ua: "sa meni" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"sa mnom" is the irregular instrumental form of the pronoun ja.',
          ru: '"sa mnom" — форма творительного падежа местоимения ja.',
          ua: '"sa mnom" — форма орудного відмінка займенника ja.'
        }
      },
      {
        id: 7,
        question: {
          en: "What is the genitive plural of 'tjedan' (week)?",
          ru: "Каков родительный падеж мн.ч. от 'tjedan'?",
          ua: "Який родовий відмінок множини від 'tjedan'?"
        },
        options: [
          { en: "tjedana", ru: "tjedana", ua: "tjedana" },
          { en: "tjedni", ru: "tjedni", ua: "tjedni" },
          { en: "tjedna", ru: "tjedna", ua: "tjedna" },
          { en: "tjedanaom", ru: "tjedanaom", ua: "tjedanaom" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"tjedana" contains the fleeting "a" and has the genitive plural ending -a.',
          ru: '"tjedana" — родительный мн.ч. с беглым "a".',
          ua: '"tjedana" — родовий множини із біглим "a".'
        }
      },
      {
        id: 8,
        question: {
          en: "Translate: 'whose book' (with relative pronoun 'čiji'):",
          ru: "Переведите: 'чья книга' (с относительным местоимением 'čiji'):",
          ua: "Перекладіть: 'чия книга' (з відносним займенником 'čiji'):"
        },
        options: [
          { en: "čija knjiga", ru: "čija knjiga", ua: "čija knjiga" },
          { en: "čije knjiga", ru: "čije knjiga", ua: "čije knjiga" },
          { en: "čiji knjiga", ru: "čiji knjiga", ua: "čiji knjiga" },
          { en: "čiju knjiga", ru: "čiju knjiga", ua: "čiju knjiga" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"čija" agrees in gender (feminine) and number with "knjiga".',
          ru: '"čija" согласуется в женском роде с "knjiga".',
          ua: '"čija" узгоджується в жіночому роді з "knjiga".'
        }
      },
      {
        id: 9,
        question: {
          en: "What is the collective plural of 'brat'?",
          ru: "Каково собирательное множественное число от 'brat'?",
          ua: "Яке збірне множинне число від 'brat'?"
        },
        options: [
          { en: "braća (behaves as feminine singular in grammar)", ru: "braća (грамматически ж.р. ед.ч.)", ua: "braća (граматично ж.р. однини)" },
          { en: "brati", ru: "brati", ua: "brati" },
          { en: "bratovi", ru: "bratovi", ua: "bratovi" },
          { en: "brate", ru: "brate", ua: "brate" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"braća" is grammatically feminine singular, but semantically plural.',
          ru: '"braća" — собирательное существительное, грамматически женского рода.',
          ua: '"braća" — збірний іменник, граматично жіночого роду.'
        }
      },
      {
        id: 10,
        question: {
          en: "What sound change happens in: 'platiti' -> 'plaćen' (paid)?",
          ru: "Какое звуковое изменение происходит в паре: 'platiti' -> 'plaćen'?",
          ua: "Яке звукове чергування відбувається в парі: 'platiti' -> 'plaćen'?"
        },
        options: [
          { en: "Jotacija (Jotation: t + j -> ć)", ru: "Jotacija (Йотация: t + j -> ć)", ua: "Jotacija (Йотація: t + j -> ć)" },
          { en: "Palatalizacija (k -> č)", ru: "Palatalizacija", ua: "Palatalizacija" },
          { en: "Sibilarizacija (k -> c)", ru: "Sibilarizacija", ua: "Sibilarizacija" },
          { en: "Fleeting A", ru: "Беглая А", ua: "Бігла А" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Jotation (jotacija) causes dental consonant "t" to merge with "j" into "ć".',
          ru: 'Йотация соединяет согласный "t" с "j" в звук "ć".',
          ua: 'Йотація поєднує приголосний "t" з "j" у звук "ć".'
        }
      },
      {
        id: 11,
        question: {
          en: "What does 'poslodavac' mean in a business context?",
          ru: "Что означает 'poslodavac' в бизнесе?",
          ua: "Что означает 'poslodavac' в бизнесе?"
        },
        options: [
          { en: "employer", ru: "работодатель", ua: "роботодавець" },
          { en: "employee", ru: "наемный работник", ua: "найнятий працівник" },
          { en: "client", ru: "клиент", ua: "клієнт" },
          { en: "job center", ru: "биржа труда", ua: "біржа праці" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"poslodavac" is the employer (one who gives work).',
          ru: '"poslodavac" — это работодатель.',
          ua: '"poslodavac" — це роботодавець.'
        }
      },
      {
        id: 12,
        question: {
          en: "Which preposition fits: 'Ovisno _____ (about) odluci.'",
          ru: "Какой предлог подходит: 'Ovisno _____ odluci.' (В зависимости от решения.)",
          ua: "Який прийменник підходить: 'Ovisno _____ odluci.' (Залежно від рішення.)"
        },
        options: [
          { en: "o", ru: "o", ua: "o" },
          { en: "na", ru: "na", ua: "na" },
          { en: "od", ru: "od", ua: "od" },
          { en: "u", ru: "u", ua: "u" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'The phrase is "ovisno o" + Locative.',
          ru: 'Устойчивое сочетание "ovisno o" + предложный падеж.',
          ua: 'Стійке сполучення "ovisno o" + місцевий відмінок.'
        }
      },
      {
        id: 13,
        question: {
          en: "What is the definite form of the adjective 'nov' (new)?",
          ru: "Какова определенная форма прилагательного 'nov'?",
          ua: "Яка визначена форма прикметника 'nov'?"
        },
        options: [
          { en: "novi", ru: "novi", ua: "novi" },
          { en: "novog", ru: "novog", ua: "novog" },
          { en: "novom", ru: "novom", ua: "novom" },
          { en: "noviom", ru: "noviom", ua: "noviom" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Definite adjectives add the ending -i in nominative masculine singular (eg. novi grad).',
          ru: 'Определенная форма прилагательного мужского рода получает окончание -i.',
          ua: 'Визначена форма прикметника чоловічого роду отримує закінчення -i.'
        }
      },
      {
        id: 14,
        question: {
          en: "Complete: Prije nego što _____ (I speak), razmislim.",
          ru: "Заполните: Prije nego što _____ (я скажу), razmislim.",
          ua: "Заповніть: Prije nego što _____ (я скажу), razmislim."
        },
        options: [
          { en: "progovorim", ru: "progovorim", ua: "progovorim" },
          { en: "govorim", ru: "govorim", ua: "govorim" },
          { en: "budem govorio", ru: "budem govorio", ua: "budem govorio" },
          { en: "bi govorio", ru: "bi govorio", ua: "bi govorio" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Present perfective "progovorim" is used after temporal "prije nego što".',
          ru: 'Презенс совершенного вида используется после союза "prije nego što".',
          ua: 'Теперішній час доконаного виду використовується після сполучника "prije nego što".'
        }
      },
      {
        id: 15,
        question: {
          en: "What is the dative plural ending for all genders in adjectives?",
          ru: "Каково окончание дательного падежа мн.ч. для прилагательных всех родов?",
          ua: "Яке закінчення давального відмінка множини для прикметників усіх родів?"
        },
        options: [
          { en: "-ima / -ima / -ima", ru: "-ima", ua: "-ima" },
          { en: "-ima / -ima / -ima or -ima", ru: "-ima", ua: "-ima" },
          { en: "-im", ru: "-im", ua: "-im" },
          { en: "-ima / -ima / -ima (same as Locative/Instrumental)", ru: "одинаково для D/L/I", ua: "однаково для D/L/I" }
        ],
        correctAnswer: 3,
        explanation: {
          en: 'Dative, Locative, and Instrumental plural share the ending -ima (or -im for adjectives).',
          ru: 'Дательный, предложный и творительный падежи мн.ч. имеют одинаковые окончания.',
          ua: 'Давальний, місцевий та орудний відмінки множини мають однакові закінчення.'
        }
      },
      {
        id: 16,
        question: {
          en: "What sound change happens in: 'ruka' -> 'ruci' (in hand)?",
          ru: "Какое звуковое изменение происходит в паре: 'ruka' -> 'ruci'?",
          ua: "Яке звукове чергування відбувається в парі: 'ruka' -> 'ruci'?"
        },
        options: [
          { en: "Sibilarizacija (k -> c)", ru: "Sibilarizacija (k -> c)", ua: "Sibilarizacija (k -> c)" },
          { en: "Palatalizacija (k -> č)", ru: "Palatalizacija", ua: "Palatalizacija" },
          { en: "Jotacija", ru: "Jotacija", ua: "Jotacija" },
          { en: "Vowel lengthening", ru: "Удлинение гласного", ua: "Подовження голосного" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Sibilarization (sibilarizacija) turns k -> c before locative ending -i.',
          ru: 'Сибиляризация переводит "k" в "c" перед гласным "i".',
          ua: 'Сибіляризація переводить "k" в "c" перед голосним "i".'
        }
      },
      {
        id: 17,
        question: {
          en: "Select correct preposition: 'Brod plovi _____ (under) mostom.'",
          ru: "Выберите правильный предлог: 'Brod plovi _____ mostom.' (Корабль плывет под мостом.)",
          ua: "Виберіть правильний прийменник: 'Brod plovi _____ mostom.' (Корабель пливе під мостом.)"
        },
        options: [
          { en: "pod", ru: "pod", ua: "pod" },
          { en: "nad", ru: "nad", ua: "nad" },
          { en: "pred", ru: "pred", ua: "pred" },
          { en: "za", ru: "za", ua: "za" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"pod" + Instrumental expresses location underneath.',
          ru: '"pod" + творительный падеж выражает нахождение снизу.',
          ua: '"pod" + орудний відмінок виражає знаходження знизу.'
        }
      },
      {
        id: 18,
        question: {
          en: "What does particle 'zar' express?",
          ru: "Что выражает частица 'zar'?",
          ua: "Що виражає частка 'zar'?"
        },
        options: [
          { en: "disbelief / surprise (really?)", ru: "неверие / удивление (неужели?)", ua: "зневіру / здивування (невже?)" },
          { en: "politeness", ru: "вежливость", ua: "ввічливість" },
          { en: "negation", ru: "отрицание", ua: "заперечення" },
          { en: "obligation", ru: "обязанность", ua: "обов'язок" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Zar" is used to ask questions expressing doubt or surprise.',
          ru: '"Zar" используется для выражения сомнения или удивления.',
          ua: '"Zar" використовується для вираження сумніву або здивування.'
        }
      },
      {
        id: 19,
        question: {
          en: "What is the collective plural of 'djete' (child)?",
          ru: "Каково собирательное множественное число от 'dijete'?",
          ua: "Яке збірне множинне число від 'dijete'?"
        },
        options: [
          { en: "djeca (feminine singular endings in grammar)", ru: "djeca (ж.р. ед.ч. грамматически)", ua: "djeca (ж.р. однини граматично)" },
          { en: "djeteta", ru: "djeteta", ua: "djeteta" },
          { en: "djeteti", ru: "djeteti", ua: "djeteti" },
          { en: "dječaci", ru: "dječaci", ua: "dječaci" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"djeca" is grammatically feminine singular, representing children collectively.',
          ru: '"djeca" — собирательное существительное, грамматически ж.р. ед.ч.',
          ua: '"djeca" — збірний іменник, граматично жіночого роду однини.'
        }
      },
      {
        id: 20,
        question: {
          en: "Complete: Da imam krila, _____ (I would fly - Conditional I masc).",
          ru: "Заполните: Da imam krila, _____ (я бы полетел - Conditional I м.р.).",
          ua: "Заповніть: Da imam krila, _____ (я б полетів - Conditional I ч.р.)."
        },
        options: [
          { en: "letio bih", ru: "letio bih", ua: "letio bih" },
          { en: "letio bi", ru: "letio bi", ua: "letio bi" },
          { en: "sam letio", ru: "sam letio", ua: "sam letio" },
          { en: "budem letio", ru: "budem letio", ua: "budem letio" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"letio bih" is the 1st person singular Conditional I form.',
          ru: '"letio bih" — форма условного наклонения для 1-го лица ед.ч.',
          ua: '"letio bih" — форма умовного способу для 1-ї особи однини.'
        }
      }
    ]
  },
  C1: {
    targetLevel: "C2",
    questions: [
      {
        id: 1,
        question: {
          en: "Which concessive conjunction fits best: '_____ je bio umoran, završio je izvještaj.' (Although he was tired...)",
          ru: "Какой уступительный союз подходит лучше: '_____ je bio umoran, završio je izvještaj.' (Хотя он устал...)",
          ua: "Який допустовий сполучник підходить найкраще: '_____ je bio umoran, završio je izvještaj.' (Хоча він втомився...)"
        },
        options: [
          { en: "Iako", ru: "Iako", ua: "Iako" },
          { en: "Budući da", ru: "Budući da", ua: "Budući da" },
          { en: "Stoga", ru: "Stoga", ua: "Stoga" },
          { en: "Zato što", ru: "Zato što", ua: "Zato što" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Iako" is the most common concessive conjunction meaning "although".',
          ru: '"Iako" — уступительный союз "хотя".',
          ua: '"Iako" — допустовий сполучник "хоча".'
        }
      },
      {
        id: 2,
        question: {
          en: "Which conjunction is a formal synonym of 'iako'?",
          ru: "Какой союз является книжным синонимом 'iako'?",
          ua: "Який сполучник є книжковим синонімом 'iako'?"
        },
        options: [
          { en: "premda", ru: "premda", ua: "premda" },
          { en: "jer", ru: "jer", ua: "jer" },
          { en: "zato što", ru: "zato što", ua: "zato što" },
          { en: "čim", ru: "čim", ua: "čim" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"premda" is the formal concessive conjunction meaning "although".',
          ru: '"premda" — книжный уступительный союз "хотя/несмотря на".',
          ua: '"premda" — книжковий допустовий сполучник "хоча/незважаючи на".'
        }
      },
      {
        id: 3,
        question: {
          en: "Complete with manner conjunction: 'Gleda me _____ (as if) sam kriv za sve.'",
          ru: "Заполните союзом образа действия: 'Gleda me _____ sam kriv za sve.' (Смотрит на меня так, будто...)",
          ua: "Заповніть сполучником способу дії: 'Gleda me _____ sam kriv za sve.' (Дивиться на мене так, ніби...)"
        },
        options: [
          { en: "kao da", ru: "kao da", ua: "kao da" },
          { en: "tako da", ru: "tako da", ua: "tako da" },
          { en: "nakon što", ru: "nakon što", ua: "nakon što" },
          { en: "budući da", ru: "budući da", ua: "budući da" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"kao da" translates to "as if" or "as though" (expressing hypothetical manners).',
          ru: '"kao da" переводится как "будто / как будто".',
          ua: '"kao da" перекладається як "ніби / наче".'
        }
      },
      {
        id: 4,
        question: {
          en: "Select correct relative structure: 'Djevojka _____ (whose) majka radi ovdje.'",
          ru: "Выберите правильную относительную структуру: 'Djevojka _____ majka radi ovdje.' (Чья мать...)",
          ua: "Виберіть правильну відносну структуру: 'Djevojka _____ majka radi ovdje.' (Чия мати...)"
        },
        options: [
          { en: "čiji", ru: "čiji", ua: "čiji" },
          { en: "čija", ru: "čija", ua: "čija" },
          { en: "čije", ru: "čije", ua: "čije" },
          { en: "čijoj", ru: "čijoj", ua: "čijoj" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"čija" agrees with the feminine singular noun "majka".',
          ru: '"čija" согласуется с существительным женского рода "majka".',
          ua: '"čija" узгоджується з іменником жіночого роду "majka".'
        }
      },
      {
        id: 5,
        question: {
          en: "What is the genitive singular of the irregular noun 'kći' (daughter)?",
          ru: "Каков родительный падеж ед.ч. от 'kći'?",
          ua: "Який родовий відмінок однини від 'kći'?"
        },
        options: [
          { en: "kćeri", ru: "kćeri", ua: "kćeri" },
          { en: "kći", ru: "kći", ua: "kći" },
          { en: "kćer", ru: "kćer", ua: "kćer" },
          { en: "kćerom", ru: "kćerom", ua: "kćerom" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'The noun "kći" expands its stem in oblique cases (Genitive: kćeri, Accusative: kćer).',
          ru: 'Существительное "kći" расширяет основу в косвенных падежах (Р.п.: kćeri).',
          ua: 'Іменник "kći" розширює основу в непрямих відмінках (Р.в.: kćeri).'
        }
      },
      {
        id: 6,
        question: {
          en: "Nouns ending in -ost (eg. radost, mladost) belong to which gender?",
          ru: "К какому роду относятся существительные на -ost (напр. radost, mladost)?",
          ua: "До якого роду належать іменники на -ost (напр. radost, mladost)?"
        },
        options: [
          { en: "Feminine (i-declension)", ru: "Женский (i-склонение)", ua: "Жіночий (i-відміна)" },
          { en: "Masculine", ru: "Мужской", ua: "Чоловічий" },
          { en: "Neuter", ru: "Средний", ua: "Середній" },
          { en: "Varies depending on dialect", ru: "Зависит от диалекта", ua: "Залежить від діалекту" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Nouns ending in -ost are abstract feminine nouns belonging to the i-declension.',
          ru: 'Существительные на -ost — это абстрактные имена женского рода (i-склонение).',
          ua: 'Іменники на -ost — це абстрактні назви жіночого роду (i-відміна).'
        }
      },
      {
        id: 7,
        question: {
          en: "What is the meaning of the idiom 'mlatiti praznu slamu'?",
          ru: "Каково значение фразеологизма 'mlatiti praznu slamu'?",
          ua: "Яке значення фразеологізму 'mlatiti praznu slamu'?"
        },
        options: [
          { en: "to talk in vain / waste time", ru: "переливать из пустого в порожнее / пустословить", ua: "товкти воду в ступі / базікати марно" },
          { en: "to work hard in the field", ru: "тяжело работать в поле", ua: "важко працювати в полі" },
          { en: "to argue about money", ru: "спорить о деньгах", ua: "сперечатися про гроші" },
          { en: "to sleep all day", ru: "спать весь день", ua: "спати весь день" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"mlatiti praznu slamu" means to speak without purpose or waste time talking.',
          ru: '"mlatiti praznu slamu" означает вести пустые, бесполезные разговоры.',
          ua: '"mlatiti praznu slamu" означає вести порожні, марні розмови.'
        }
      },
      {
        id: 8,
        question: {
          en: "Complete with the correct participle of manner: '_____ (reading) knjigu, zaspao sam.'",
          ru: "Заполните деепричастием настоящего времени: '_____ (читая) knjigu, zaspao sam.'",
          ua: "Заповніть дієприслівником теперішнього часу: '_____ (читаючи) knjigu, zaspao sam.'"
        },
        options: [
          { en: "Čitajući", ru: "Čitajući", ua: "Čitajući" },
          { en: "Čitan", ru: "Čitan", ua: "Čitan" },
          { en: "Čitavši", ru: "Čitavši", ua: "Čitavši" },
          { en: "Pročitan", ru: "Pročitan", ua: "Pročitan" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'The present verbal adverb (participle of manner) is formed with -ći (čitajući).',
          ru: 'Деепричастие настоящего времени образуется суффиксом -ći (čitajući).',
          ua: 'Дієприслівник теперішнього часу утворюється суфіксом -ći (čitajući).'
        }
      },
      {
        id: 9,
        question: {
          en: "Which preposition requires the Dative case?",
          ru: "Какой предлог требует дательного падежа?",
          ua: "Який прийменник вимагає давального відмінка?"
        },
        options: [
          { en: "unatoč (despite)", ru: "unatoč (вопреки)", ua: "unatoč (всупереч)" },
          { en: "tijekom (during)", ru: "tijekom (в течение)", ua: "tijekom (протягом)" },
          { en: "bez (without)", ru: "bez (без)", ua: "bez (без)" },
          { en: "blizu (near)", ru: "blizu (около)", ua: "blizu (поблизу)" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"unatoč" (despite/contrary to) is one of the few prepositions requiring the Dative case.',
          ru: 'Предлог "unatoč" (вопреки) требует дательного падежа.',
          ua: 'Прийменник "unatoč" (всупереч) вимагає давального відмінка.'
        }
      },
      {
        id: 10,
        question: {
          en: "What does the idiom 'Bogu iza nogu' refer to?",
          ru: "К чему относится выражение 'Bogu iza nogu'?",
          ua: "До чого відноситься вираз 'Bogu iza nogu'?"
        },
        options: [
          { en: "a place in the middle of nowhere / very remote", ru: "у черта на куличках / очень глухое место", ua: "у біса на болоті / дуже глухе місце" },
          { en: "a church sanctuary", ru: "священное место", ua: "священне місце" },
          { en: "a crowded city market", ru: "людный городской рынок", ua: "людне міське місце" },
          { en: "a mountain shelter", ru: "горный приют", ua: "гірський притулок" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Bogu iza nogu" is an idiom describing a very remote place (in the middle of nowhere).',
          ru: '"Bogu iza nogu" описывает очень далекое, глухое место.',
          ua: '"Bogu iza nogu" описує дуже далеке, глухе місце.'
        }
      },
      {
        id: 11,
        question: {
          en: "What is the correct clitic order: 'Pitao sam se _____ (will he to him it) dati.'",
          ru: "Выберите правильный порядок энклитик: 'Pitao sam se _____ dati.' (Подарит ли он ему это.)",
          ua: "Виберіть правильний порядок енклітик: 'Pitao sam se _____ dati.' (Чи подарує він йому це.)"
        },
        options: [
          { en: "hoće li mu ga", ru: "hoće li mu ga", ua: "hoće li mu ga" },
          { en: "li mu ga hoće", ru: "li mu ga hoće", ua: "li mu ga hoće" },
          { en: "mu ga li hoće", ru: "mu ga li hoće", ua: "mu ga li hoće" },
          { en: "hoće mu ga li", ru: "hoće mu ga li", ua: "hoće mu ga li" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Verbal clitic (hoće) + interrogative (li) + Dative (mu) + Accusative (ga) is the correct sequence.',
          ru: 'Глагол (hoće) + ли (li) + Дательный (mu) + Винительный (ga) — правильный порядок.',
          ua: 'Дієслово (hoće) + чи (li) + Давальний (mu) + Знахідний (ga) — правильний порядок.'
        }
      },
      {
        id: 12,
        question: {
          en: "Which verbal aspect suffix represents continuous habituality: 'prepisati' -> '_____'",
          ru: "Какой видовой суффикс выражает длительную регулярность: 'prepisati' -> '_____'",
          ua: "Який видовий суфікс виражає тривалу регулярність: 'prepisati' -> '_____'"
        },
        options: [
          { en: "prepisivati", ru: "prepisivati", ua: "prepisivati" },
          { en: "prepisati", ru: "prepisati", ua: "prepisati" },
          { en: "prepisan", ru: "prepisan", ua: "prepisan" },
          { en: "prepišem", ru: "prepišem", ua: "prepišem" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'Suffix -ivati (prepisivati) converts perfective verbs to imperfective iterative forms.',
          ru: 'Суффикс -ivati переводит глагол совершенного вида в многократный несовершенный.',
          ua: 'Суфікс -ivati переводить дієслово доконаного виду в багаторазове недоконане.'
        }
      },
      {
        id: 13,
        question: {
          en: "What sound change is present in the genitive plural: 'tjedan' -> 'tjedana'?",
          ru: "Какое звуковое явление присутствует в родительном мн.ч.: 'tjedan' -> 'tjedana'?",
          ua: "Яке звукове явище наявне в родовому множини: 'tjedan' -> 'tjedana'?"
        },
        options: [
          { en: "nepostojano a (fleeting A)", ru: "nepostojano a (беглая А)", ua: "nepostojano a (бігла А)" },
          { en: "jotacija", ru: "jotacija", ua: "jotacija" },
          { en: "palatalizacija", ru: "palatalizacija", ua: "palatalizacija" },
          { en: "sibilarizacija", ru: "sibilarizacija", ua: "sibilarizacija" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'The fleeting "a" (nepostojano a) disappears in singular oblique cases (tjedna) but appears in genitive plural (tjedana).',
          ru: 'Беглая "a" исчезает в косвенных падежах ед.ч. (tjedna), но появляется в родительном мн.ч. (tjedana).',
          ua: 'Бігла "a" зникає в непрямих відмінках однини (tjedna), але з\'являється в родовому множини (tjedana).'
        }
      },
      {
        id: 14,
        question: {
          en: "Form the participle of manner for 'raditi' (while working):",
          ru: "Образуйте деепричастие настоящего времени для 'raditi':",
          ua: "Утворіть дієприслівник теперішнього часу для 'raditi':"
        },
        options: [
          { en: "radeći", ru: "radeći", ua: "radeći" },
          { en: "radivši", ru: "radivši", ua: "radivši" },
          { en: "rađen", ru: "rađen", ua: "rađen" },
          { en: "raditi", ru: "raditi", ua: "raditi" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"radeći" is the present verbal adverb of "raditi".',
          ru: '"radeći" — деепричастие настоящего времени.',
          ua: '"radeći" — дієприслівник теперішнього часу.'
        }
      },
      {
        id: 15,
        question: {
          en: "What does the idiom 'baciti koplje u trnje' mean?",
          ru: "Что означает идиома 'baciti koplje u trnje'?",
          ua: "Що означає ідіома 'baciti koplje u trnje'?"
        },
        options: [
          { en: "to give up / surrender", ru: "опустить руки / сдаться", ua: "опустити руки / здатися" },
          { en: "to attack an enemy", ru: "напасть на врага", ua: "напасти на ворога" },
          { en: "to go hunting", ru: "отправиться на охоту", ua: "відправитися на полювання" },
          { en: "to clean the garden", ru: "навести порядок в саду", ua: "навести лад у саду" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"baciti koplje u trnje" (throw the spear into the thorns) means to surrender or give up.',
          ru: '"baciti koplje u trnje" означает сдаться или отказаться от борьбы.',
          ua: '"baciti koplje u trnje" означає здатися або відмовитися від боротьби.'
        }
      },
      {
        id: 16,
        question: {
          en: "Which relative pronoun is used in: 'To je projekt _____ (about which - locative masculine) raspravljamo.'",
          ru: "Какое относительное местоимение подходит: 'To je projekt _____ raspravljamo.' (Это проект, о котором...)",
          ua: "Який відносний займенник підходить: 'To je projekt _____ raspravljamo.' (Це проєкт, про який...)"
        },
        options: [
          { en: "o kojemu", ru: "o kojemu", ua: "o kojemu" },
          { en: "o kojoj", ru: "o kojoj", ua: "o kojoj" },
          { en: "o kojih", ru: "o kojih", ua: "o kojih" },
          { en: "o kojima", ru: "o kojima", ua: "o kojima" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"o kojemu" is the locative singular masculine relative pronoun.',
          ru: '"o kojemu" — форма местного падежа ед.ч. мужского рода.',
          ua: '"o kojemu" — форма місцевого відмінка однини чоловічого роду.'
        }
      },
      {
        id: 17,
        question: {
          en: "What does the word 'dvosmislen' mean in a text?",
          ru: "Что означает слово 'dvosmislen' в тексте?",
          ua: "Что означает слово 'dvosmislen' в тексте?"
        },
        options: [
          { en: "ambiguous / double-meaning", ru: "двусмысленный", ua: "двозначний" },
          { en: "clear / direct", ru: "ясный", ua: "ясний" },
          { en: "short", ru: "короткий", ua: "короткий" },
          { en: "translated", ru: "переведенный", ua: "перекладений" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"dvosmislen" means ambiguous (having two meanings).',
          ru: '"dvosmislen" означает двусмысленный.',
          ua: '"dvosmislen" означає двозначний.'
        }
      },
      {
        id: 18,
        question: {
          en: "Identify the correct relative clause structure for 'whose book':",
          ru: "Выберите правильную относительную придаточную структуру для 'книга которой/чьей':",
          ua: "Виберіть правильну відносну підрядну структуру для 'книга якої/чиєї':"
        },
        options: [
          { en: "žena čiju sam knjigu čitao", ru: "žena čiju sam knjigu čitao", ua: "žena čiju sam knjigu čitao" },
          { en: "žena čije sam knjigu čitao", ru: "žena čije sam knjigu čitao", ua: "žena čije sam knjigu čitao" },
          { en: "žena čiji sam knjigu čitao", ru: "žena čiji sam knjigu čitao", ua: "žena čiji sam knjigu čitao" },
          { en: "žena čijoj sam knjigu čitao", ru: "žena čijoj sam knjigu čitao", ua: "žena čijoj sam knjigu čitao" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"čiju" is accusative singular feminine, agreeing with "knjigu" (direct object).',
          ru: '"čiju" согласуется в винительном падеже ж.р. с существительным "knjigu".',
          ua: '"čiju" узгоджується в знахідному відмінку ж.р. з іменником "knjigu".'
        }
      },
      {
        id: 19,
        question: {
          en: "Which suffix forms abstract nouns from adjectives (eg. 'lijep' -> '_____')?",
          ru: "Какой суффикс образует абстрактные имена от прилагательных (напр., 'lijep' -> '_____')?",
          ua: "Який суфікс утворює абстрактні іменники від прикметників (напр., 'lijep' -> '_____')?"
        },
        options: [
          { en: "-ost (ljepota is standard, but also -ost)", ru: "-ost (ljepota - стандарт, но также -ost)", ua: "-ost (ljepota - стандарт, але також -ost)" },
          { en: "-ost / -ota (ljepota, nježnost)", ru: "-ost / -ota", ua: "-ost / -ota" },
          { en: "-ost is the most productive", ru: "-ost наиболее продуктивный", ua: "-ost найпродуктивніший" },
          { en: "Both B and C are correct", ru: "И В, и С верны", ua: "І В, і С правильні" }
        ],
        correctAnswer: 3,
        explanation: {
          en: 'Abstract nouns are frequently formed using -ost (nježnost) or -ota (ljepota).',
          ru: 'Абстрактные имена образуются с помощью суффиксов -ost и -ota.',
          ua: 'Абстрактні іменники утворюються за допомогою суфіксів -ost та -ota.'
        }
      },
      {
        id: 20,
        question: {
          en: "What does the prefix 'raz-' indicate in verbs like 'razdijeliti' or 'razbiti'?",
          ru: "Что означает приставка 'raz-' в глаголах?",
          ua: "Що означає префікс 'raz-' у дієсловах?"
        },
        options: [
          { en: "separation / dispersion / destruction", ru: "разделение / разрушение / дисперсия", ua: "розділення / руйнування / дисперсія" },
          { en: "repetition", ru: "повторение", ua: "повторення" },
          { en: "location", ru: "местонахождение", ua: "місцезнаходження" },
          { en: "negation", ru: "отрицание", ua: "заперечення" }
        ],
        correctAnswer: 0,
        explanation: {
          en: 'The prefix "raz-" indicates division, scattering, or disintegration.',
          ru: 'Приставка "raz-" указывает на разделение, разброс или разрушение.',
          ua: 'Префікс "raz-" вказує на розділення, розкидання або руйнування.'
        }
      }
    ]
  }
};
