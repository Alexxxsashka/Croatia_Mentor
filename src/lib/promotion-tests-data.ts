export interface PromotionQuestion {
  id: number;
  question: { en: string; ru: string; ua: string };
  options: string[];
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
          en: 'How do you say "Goodbye" in Croatian?',
          ru: 'Как переводится "До свидания" на хорватский?',
          ua: 'Як перекладається "До побачення" хорватською?'
        },
        options: ["Doviđenja", "Dobar dan", "Molim", "Hvala"],
        correctAnswer: 0,
        explanation: {
          en: '"Doviđenja" is the standard way to say goodbye.',
          ru: '"Doviđenja" — стандартный способ попрощаться.',
          ua: '"Doviđenja" — стандартний спосіб попрощатися.'
        }
      },
      {
        id: 2,
        question: {
          en: "Complete the sentence: On _____ profesor.",
          ru: "Заполните пропуск: On _____ profesor.",
          ua: "Заповніть пропуск: On _____ profesor."
        },
        options: ["sam", "si", "je", "smo"],
        correctAnswer: 2,
        explanation: {
          en: '"je" is the 3rd person singular form of "biti" (to be) for he/she/it.',
          ru: '"je" — форма 3-го лица единственного числа глагола "biti" (быть).',
          ua: '"je" — форма 3-ї особи однини дієслова "biti" (бути).'
        }
      },
      {
        id: 3,
        question: {
          en: "What does the word 'Molim' mean?",
          ru: "Что означает слово 'Molim'?",
          ua: "Що означає слово 'Molim'?"
        },
        options: ["Please", "Thank you", "Sorry", "Hello"],
        correctAnswer: 0,
        explanation: {
          en: '"Molim" translates to "Please" or "You\'re welcome".',
          ru: '"Molim" переводится как "Пожалуйста".',
          ua: '"Molim" перекладається як "Будь ласка".'
        }
      },
      {
        id: 4,
        question: {
          en: "How do you ask 'What is your name?' (informal)?",
          ru: "Как спросить 'Как тебя зовут?' (неформально)?",
          ua: "Як запитати 'Як тебе звати?' (неформально)?"
        },
        options: ["Kako se zoveš?", "Kako ste?", "Odakle si?", "Tko si ti?"],
        correctAnswer: 0,
        explanation: {
          en: '"Kako se zoveš?" is the informal question for asking someone\'s name.',
          ru: '"Kako se zoveš?" — неформальный вопрос о имени.',
          ua: '"Kako se zoveš?" — неформальне запитання про ім\'я.'
        }
      },
      {
        id: 5,
        question: {
          en: "Math: dva + tri = ?",
          ru: "Математика: dva + tri = ?",
          ua: "Математика: dva + tri = ?"
        },
        options: ["četiri", "pet", "šest", "sedam"],
        correctAnswer: 1,
        explanation: {
          en: '"Dva" (2) + "tri" (3) = "pet" (5).',
          ru: '"Dva" (2) + "tri" (3) = "pet" (5).',
          ua: '"Dva" (2) + "tri" (3) = "pet" (5).'
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
          en: "Idem u _____ (store - accusative feminine).",
          ru: "Idem u _____ (магазин - винительный падеж).",
          ua: "Idem u _____ (магазин - знахідний відмінок)."
        },
        options: ["trgovinu", "trgovina", "trgovine", "trgovinom"],
        correctAnswer: 0,
        explanation: {
          en: "After the preposition 'u' indicating direction, the accusative case is used.",
          ru: "После предлога 'u', указывающего направление, используется винительный падеж.",
          ua: "Після прийменника 'u', що вказує напрямок, використовується знахідний відмінок."
        }
      },
      {
        id: 2,
        question: {
          en: "Živim u _____ (Zagreb - locative masculine).",
          ru: "Živim u _____ (Загреб - предложный/местный падеж).",
          ua: "Živim u _____ (Загреб - місцевий відмінок)."
        },
        options: ["Zagrebu", "Zagreb", "Zagreba", "Zagrebom"],
        correctAnswer: 0,
        explanation: {
          en: "Locative case (u + location) ends in -u for masculine nouns.",
          ru: "Местный падеж (u + место) оканчивается на -u для мужского рода.",
          ua: "Місцевий відмінок (u + місце) закінчується на -u для чоловічого роду."
        }
      },
      {
        id: 3,
        question: {
          en: "Translate: Yesterday we went to the beach.",
          ru: "Переведите: Вчера мы ходили на пляж.",
          ua: "Перекладіть: Учора ми ходили на пляж."
        },
        options: [
          "Jučer smo išli na plažu.",
          "Danas idemo na plažu.",
          "Jučer idemo na plažu.",
          "Sutra ćemo ići na plažu."
        ],
        correctAnswer: 0,
        explanation: {
          en: "Jučer (yesterday) + smo išli (we went - past tense) + na plažu (to the beach - accusative).",
          ru: "Jučer (вчера) + smo išli (мы ходили - прош. время) + na plažu (на пляж - вин. п.).",
          ua: "Jučer (учора) + smo išli (ми ходили - мин. час) + na plažu (на пляж - знах. в.)."
        }
      },
      {
        id: 4,
        question: {
          en: "Who is 'konobar'?",
          ru: "Кто такой 'konobar'?",
          ua: "Хто такий 'konobar'?"
        },
        options: ["Waiter", "Chef", "Manager", "Guest"],
        correctAnswer: 0,
        explanation: {
          en: "'Konobar' is the Croatian word for waiter.",
          ru: "'Konobar' переводится как официант.",
          ua: "'Konobar' перекладається як офіціант."
        }
      },
      {
        id: 5,
        question: {
          en: "How do you say 'Turn right'?",
          ru: "Как сказать 'Поверните направо'?",
          ua: "Як сказати 'Поверніть праворуч'?"
        },
        options: ["Skrenite desno", "Idite ravno", "Skrenite lijevo", "Stanite ovdje"],
        correctAnswer: 0,
        explanation: {
          en: '"Desno" means right, "skrenite" is the imperative form of to turn.',
          ru: '"Desno" значит право, "skrenite" — повелительное наклонение глагола повернуть.',
          ua: '"Desno" означає праворуч, "skrenite" — наказовий спосіб дієслова повернути.'
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
          en: "Which verb aspect form is perfective: 'read the whole book'?",
          ru: "Какая форма вида глагола совершенная: 'прочитать всю книгу'?",
          ua: "Яка форма виду дієслова є доконаною: 'прочитати всю книгу'?"
        },
        options: ["pročitati", "čitati", "čitam", "pročitavam"],
        correctAnswer: 0,
        explanation: {
          en: "'Pročitati' is perfective, meaning the action is completed.",
          ru: "'Pročitati' — совершенный вид глагола (означает завершенное действие).",
          ua: "'Pročitati' — доконаний вид дієслова (означає завершену дію)."
        }
      },
      {
        id: 2,
        question: {
          en: "Complete: Ako _____ učio, položit ću ispit. (Future II)",
          ru: "Заполните: Ako _____ učio, položit ću ispit. (Будущее II)",
          ua: "Заповніть: Ako _____ učio, položit ću ispit. (Майбутній II)"
        },
        options: ["budem", "sam", "ću", "bih"],
        correctAnswer: 0,
        explanation: {
          en: "Future II is formed with the present of 'biti' (budem, budeš...) + active verbal adjective.",
          ru: "Будущее II образуется с помощью настоящего времени глагола 'biti' (budem, budeš...) + причастие.",
          ua: "Майбутній II утворюється за допомогою теперішнього часу дієслова 'biti' (budem, budeš...) + дієприкметник."
        }
      },
      {
        id: 3,
        question: {
          en: "Dative case: Pomažem _____ (brother - brat).",
          ru: "Дательный падеж: Pomažem _____ (брату - brat).",
          ua: "Давальний відмінок: Pomažem _____ (братові - brat)."
        },
        options: ["bratu", "bratom", "brata", "brate"],
        correctAnswer: 0,
        explanation: {
          en: "The verb 'pomagati' (to help) requires the dative case. 'Brat' ends in -u (bratu).",
          ru: "Глагол 'pomagati' требует дательного падежа. 'Brat' -> 'bratu'.",
          ua: "Дієслово 'pomagati' вимагає давального відмінка. 'Brat' -> 'bratu'."
        }
      },
      {
        id: 4,
        question: {
          en: "What does 'razvrstavanje' mean?",
          ru: "Что означает 'razvrstavanje'?",
          ua: "Що означає 'razvrstavanje'?"
        },
        options: ["Sorting / separating", "Saving", "Throwing away", "Buying"],
        correctAnswer: 0,
        explanation: {
          en: "'Razvrstavanje otpada' means waste sorting.",
          ru: "'Razvrstavanje otpada' означает сортировка отходов.",
          ua: "'Razvrstavanje otpada' означає сортування відходів."
        }
      },
      {
        id: 5,
        question: {
          en: "Which pronoun is correct: Sviđa _____ se ovaj grad. (I like this city.)",
          ru: "Какое местоимение верное: Sviđa _____ se ovaj grad. (Мне нравится этот город.)",
          ua: "Який займенник правильний: Sviđa _____ se ovaj grad. (Мені подобається це місто.)"
        },
        options: ["mi", "mene", "meni", "ja"],
        correctAnswer: 0,
        explanation: {
          en: "The short dative form 'mi' is used in the expression 'sviđa mi se'.",
          ru: "Краткая форма дательного падежа 'mi' используется в выражении 'sviđa mi se'.",
          ua: "Коротка форма давального відмінка 'mi' використовується у виразі 'sviđa mi se'."
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
          en: "Genitive plural: Tamo ima puno _____ (people - ljudi).",
          ru: "Родительный падеж мн.ч.: Tamo ima puno _____ (людей - ljudi).",
          ua: "Родовий відмінок мн.: Tamo ima puno _____ (людей - ljudi)."
        },
        options: ["ljudi", "ljudima", "čovjeka", "ljudovih"],
        correctAnswer: 0,
        explanation: {
          en: "The genitive plural of 'čovjek' is 'ljudi'. After 'puno', we use genitive.",
          ru: "Родительный падеж множественного числа для 'čovjek' — 'ljudi'. После 'puno' используется родительный.",
          ua: "Родовий відмінок множини для 'čovjek' — 'ljudi'. Після 'puno' використовується родовий."
        }
      },
      {
        id: 2,
        question: {
          en: "Conditional: Kad bih imao novca, _____ (I would travel).",
          ru: "Условное наклонение: Kad bih imao novca, _____ (я бы путешествовал).",
          ua: "Умовний спосіб: Kad bih imao novca, _____ (я б подорожував)."
        },
        options: ["putovao bih", "putovao sam", "putovat ću", "budem putovao"],
        correctAnswer: 0,
        explanation: {
          en: "Conditional is formed with the aorist of 'biti' (bih, bi...) + active verbal adjective.",
          ru: "Условное наклонение образуется с помощью аориста 'biti' (bih, bi...) + причастие.",
          ua: "Умовний спосіб утворюється за допомогою аористу 'biti' (bih, bi...) + дієприкметник."
        }
      },
      {
        id: 3,
        question: {
          en: "Passive voice: Odluka se _____ (is being made).",
          ru: "Пассивный залог: Odluka se _____ (принимается).",
          ua: "Пасивний стан: Odluka se _____ (приймається)."
        },
        options: ["donosi", "donijela", "donositi", "donese"],
        correctAnswer: 0,
        explanation: {
          en: "Passive can be formed reflexively using 'se' + active verb.",
          ru: "Пассив может образовываться рефлексивно с помощью 'se' + активный глагол.",
          ua: "Пасив може утворюватися рефлексивно за допомогою 'se' + активне дієслово."
        }
      },
      {
        id: 4,
        question: {
          en: "What is 'okoliš'?",
          ru: "Что такое 'okoliš'?",
          ua: "Що таке 'okoliš'?"
        },
        options: ["Environment", "Context", "Neighborhood", "Climate"],
        correctAnswer: 0,
        explanation: {
          en: "'Okoliš' means the environment.",
          ru: "'Okoliš' переводится как окружающая среда.",
          ua: "'Okoliš' перекладається як довкілля."
        }
      },
      {
        id: 5,
        question: {
          en: "Verbal noun of 'učiti' (to learn):",
          ru: "Отглагольное существительное от 'učiti' (учить):",
          ua: "Віддієслівний іменник від 'učiti' (вчити):"
        },
        options: ["učenje", "učenik", "učitelj", "učenost"],
        correctAnswer: 0,
        explanation: {
          en: "Verbal nouns end in -nje. 'Učiti' -> 'učenje'.",
          ru: "Отглагольные существительные оканчиваются на -nje. 'Učiti' -> 'učenje'.",
          ua: "Віддієслівні іменники закінчуються на -nje. 'Učiti' -> 'učenje'."
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
          en: "What does the idiom 'Bogu iza nogu' mean?",
          ru: "Что означает идиома 'Bogu iza nogu'?",
          ua: "Що означає ідіома 'Bogu iza nogu'?"
        },
        options: [
          "In the middle of nowhere / very far",
          "Blessed by God",
          "Right next to us",
          "Directly in the center"
        ],
        correctAnswer: 0,
        explanation: {
          en: "'Bogu iza nogu' literally means 'behind God's legs', meaning a very remote place.",
          ru: "'Bogu iza nogu' дословно означает 'у Бога за ногами', то есть очень далекое место.",
          ua: "'Bogu iza nogu' дослівно означає 'у Бога за ногами', тобто дуже далеке місце."
        }
      },
      {
        id: 2,
        question: {
          en: "Double negation: Ne vidim _____ (anyone).",
          ru: "Двойное отрицание: Ne vidim _____ (никого).",
          ua: "Подвійне заперечення: Ne vidim _____ (нікого)."
        },
        options: ["nikoga", "nekoga", "tko", "itko"],
        correctAnswer: 0,
        explanation: {
          en: "Croatian uses double negation. 'Ne' (not) + 'nikoga' (no one).",
          ru: "В хорватском используется двойное отрицание: 'Ne' (не) + 'nikoga' (никого).",
          ua: "У хорватській використовується подвійне заперечення: 'Ne' (не) + 'nikoga' (нікого)."
        }
      },
      {
        id: 3,
        question: {
          en: "Which conjunction means 'Although'?",
          ru: "Какой союз означает 'Хотя'?",
          ua: "Який сполучник означає 'Хоча'?"
        },
        options: ["Iako / Premda", "Zato što", "Kao da", "Budući da"],
        correctAnswer: 0,
        explanation: {
          en: "'Iako' and 'premda' both translate as 'although' or 'even though'.",
          ru: "'Iako' и 'premda' переводятся как 'хотя' или 'несмотря на'.",
          ua: "'Iako' та 'premda' перекладаються як 'хоча' або 'незважаючи на'."
        }
      },
      {
        id: 4,
        question: {
          en: "What is 'dvojezičnost'?",
          ru: "Что такое 'dvojezičnost'?",
          ua: "Що таке 'dvojezičnost'?"
        },
        options: ["Bilingualism", "Translation", "Linguistics", "Speech impediment"],
        correctAnswer: 0,
        explanation: {
          en: "'Dvojezičnost' means bilingualism.",
          ru: "'Dvojezičnost' означает двуязычие.",
          ua: "'Dvojezičnost' означає двомовність."
        }
      },
      {
        id: 5,
        question: {
          en: "Translate: He never tells anyone anything.",
          ru: "Переведите: Он никогда никому ничего не говорит.",
          ua: "Перекладіть: Він ніколи нікому нічого не говорить."
        },
        options: [
          "Nikada nikome ništa ne govori.",
          "On uvijek govori sve svima.",
          "Nikada nekome nešto govori.",
          "On ne govori nikoga ništa."
        ],
        correctAnswer: 0,
        explanation: {
          en: "Triple negation: Nikada (never) + nikome (to no one) + ništa (nothing) + ne govori (doesn't speak).",
          ru: "Тройное отрицание: Nikada (никогда) + nikome (никому) + ništa (ничего) + ne govori (не говорит).",
          ua: "Потрійне заперечення: Nikada (ніколи) + nikome (нікому) + ništa (нічого) + ne govori (не говорить)."
        }
      }
    ]
  }
};
