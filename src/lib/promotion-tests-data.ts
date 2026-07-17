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
          en: "Complete the sentence: Oni _____ učenici. (They are students.)",
          ru: "Завершите предложение: Oni _____ učenici. (Они ученики.)",
          ua: "Завершіть речення: Oni _____ učenici. (Вони учні.)"
        },
        options: [
          { en: "sam", ru: "sam", ua: "sam" },
          { en: "si", ru: "si", ua: "si" },
          { en: "je", ru: "je", ua: "je" },
          { en: "su", ru: "su", ua: "su" }
        ],
        correctAnswer: 3,
        explanation: {
          en: '"su" is the 3rd person plural form of "biti" (to be) for they (oni).',
          ru: '"su" — форма 3-го лица множественного числа глагола "biti" (быть) для местоимения они (oni).',
          ua: '"su" — форма 3-ї особи множини дієслова "biti" (бути) для займенника вони (oni).'
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
          { en: "Please / You are welcome", ru: "Пожалуйста / Не за что", ua: "Будь ласка / Прошу" },
          { en: "Thank you", ru: "Спасибо", ua: "Дякую" },
          { en: "Sorry", ru: "Извините", ua: "Вибачте" },
          { en: "Hello", ru: "Здравствуйте", ua: "Вітаю" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Molim" translates to "Please" or "You\'re welcome" in reply to thank you.',
          ru: '"Molim" переводится как "Пожалуйста" или "Не за что" в ответ на спасибо.',
          ua: '"Molim" перекладається як "Будь ласка" або "Нема за що" у відповідь на дякую.'
        }
      },
      {
        id: 4,
        question: {
          en: "Complete the sentence: Mi _____ kavu. (We drink coffee.)",
          ru: "Завершите предложение: Mi _____ kavu. (Мы пьем кофе.)",
          ua: "Завершіть речення: Mi _____ kavu. (Ми п'ємо каву.)"
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
          ru: '"Pijemo" — форма 1-го лица множественного числа глагола "piti" (пить).',
          ua: '"Pijemo" — форма 1-ї особи множини дієслова "piti" (пити).'
        }
      },
      {
        id: 5,
        question: {
          en: "Complete the sentence: Idem u _____ (school - škola - accusative singular).",
          ru: "Завершите предложение: Idem u _____ (школа - škola - винительный падеж).",
          ua: "Завершіть речення: Idem u _____ (школа - škola - знахідний відмінок)."
        },
        options: [
          { en: "školu", ru: "školu", ua: "školu" },
          { en: "škola", ru: "škola", ua: "škola" },
          { en: "školi", ru: "školi", ua: "školi" },
          { en: "školom", ru: "školom", ua: "školom" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Preposition 'u' indicating direction requires the accusative case ('školu').",
          ru: "Предлог 'u', указывающий на направление движения, требует винительного падежа ('školu').",
          ua: "Прийменник 'u', що вказує на напрямок руху, вимагає знахідного відмінника ('školu')."
        }
      },
      {
        id: 6,
        question: {
          en: "Which day comes after Tuesday (utorak)?",
          ru: "Какой день недели идет после вторника (utorak)?",
          ua: "Який день тижня йде після вівторка (utorak)?"
        },
        options: [
          { en: "ponedjeljak (Monday)", ru: "ponedjeljak (понедельник)", ua: "ponedjeljak (понеділок)" },
          { en: "srijeda (Wednesday)", ru: "srijeda (среда)", ua: "srijeda (середа)" },
          { en: "četvrtak (Thursday)", ru: "četvrtak (четверг)", ua: "četvrtak (четвер)" },
          { en: "petak (Friday)", ru: "petak (пятница)", ua: "petak (п'ятниця)" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"Srijeda" is Wednesday, the day after Tuesday (utorak).',
          ru: '"Srijeda" — это среда, следующий день после вторника (utorak).',
          ua: '"Srijeda" — це середа, наступний день після вівторка (utorak).'
        }
      },
      {
        id: 7,
        question: {
          en: "Math check: koliko je dva + tri?",
          ru: "Математика: сколько будет dva + tri?",
          ua: "Математика: скільки буде dva + tri?"
        },
        options: [
          { en: "četiri", ru: "četiri", ua: "četiri" },
          { en: "pet", ru: "pet", ua: "pet" },
          { en: "šest", ru: "šest", ua: "šest" },
          { en: "tri", ru: "tri", ua: "tri" }
        ],
        correctAnswer: 1,
        explanation: {
          en: 'Dva (2) + tri (3) = pet (5).',
          ru: 'Dva (2) + tri (3) = pet (5).',
          ua: 'Dva (2) + tri (3) = pet (5).'
        }
      },
      {
        id: 8,
        question: {
          en: "Complete: Moja braća _____ ovdje. (My brothers are here.)",
          ru: "Завершите: Moja braća _____ ovdje. (Мои братья здесь.)",
          ua: "Завершіть: Moja braća _____ ovdje. (Мої брати тут.)"
        },
        options: [
          { en: "sam", ru: "sam", ua: "sam" },
          { en: "je", ru: "je", ua: "je" },
          { en: "su", ru: "su", ua: "su" },
          { en: "si", ru: "si", ua: "si" }
        ],
        correctAnswer: 2,
        explanation: {
          en: '"Braća" is a collective noun acting as plural, requiring the plural verb "su".',
          ru: '"Braća" — собирательное существительное, согласуемое во множественном числе, требует глагола "su".',
          ua: '"Braća" — збірний іменник, що узгоджується у множині, вимагає дієслова "su".'
        }
      },
      {
        id: 9,
        question: {
          en: "Complete: To je _____ kuća. (This is our house.)",
          ru: "Завершите: To je _____ kuća. (Это наш дом.)",
          ua: "Завершіть: To je _____ kuća. (Це наш будинок.)"
        },
        options: [
          { en: "naš", ru: "naš", ua: "naš" },
          { en: "naša", ru: "naša", ua: "naša" },
          { en: "naše", ru: "naše", ua: "naše" },
          { en: "naši", ru: "naši", ua: "naši" }
        ],
        correctAnswer: 1,
        explanation: {
          en: '"Kuća" is feminine singular, so the possessive pronoun is "naša".',
          ru: '"Kuća" — женского рода единственного числа, поэтому притяжательное местоимение — "naša".',
          ua: '"Kuća" — жіночого роду однини, тому присвійний займенник — "naša".'
        }
      },
      {
        id: 10,
        question: {
          en: "Complete: Živim u _____ (Zagreb - locative singular).",
          ru: "Завершите: Živim u _____ (Загреб - locative).",
          ua: "Завершіть: Živim u _____ (Загреб - locative)."
        },
        options: [
          { en: "Zagrebu", ru: "Zagrebu", ua: "Zagrebu" },
          { en: "Zagreb", ru: "Zagreb", ua: "Zagreb" },
          { en: "Zagreba", ru: "Zagreba", ua: "Zagreba" },
          { en: "Zagrebom", ru: "Zagrebom", ua: "Zagrebom" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Locative case ending for masculine town names is -u: 'Zagrebu'.",
          ru: "Окончание местного падежа для названий городов мужского рода — -u: 'Zagrebu'.",
          ua: "Закінчення місцевого відмінка для назв міст чоловічого роду — -u: 'Zagrebu'."
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
          en: "Complete: Idem u _____ (store - trgovina - accusative singular).",
          ru: "Завершите: Idem u _____ (магазин - trgovina - винительный падеж).",
          ua: "Завершіть: Idem u _____ (магазин - trgovina - знахідний відмінок)."
        },
        options: [
          { en: "trgovinu", ru: "trgovinu", ua: "trgovinu" },
          { en: "trgovina", ru: "trgovina", ua: "trgovina" },
          { en: "trgovini", ru: "trgovini", ua: "trgovini" },
          { en: "trgovine", ru: "trgovine", ua: "trgovine" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Preposition 'u' indicating destination requires accusative ('trgovinu').",
          ru: "Предлог 'u' с направлением движения требует винительного падежа ('trgovinu').",
          ua: "Прийменник 'u' з напрямком руху вимагає знахідного відмінка ('trgovinu')."
        }
      },
      {
        id: 2,
        question: {
          en: "Complete: Radim u _____ (office - ured - locative singular).",
          ru: "Завершите: Radim u _____ (офис - ured - местный падеж).",
          ua: "Завершіть: Radim u _____ (офіс - ured - місцевий відмінок)."
        },
        options: [
          { en: "uredu", ru: "uredu", ua: "uredu" },
          { en: "ured", ru: "ured", ua: "ured" },
          { en: "ureda", ru: "ureda", ua: "ureda" },
          { en: "uredom", ru: "uredom", ua: "uredom" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Locative case of masculine 'ured' ends in -u: 'uredu'.",
          ru: "Местный падеж для неодушевленного существительного мужского рода 'ured' оканчивается на -u: 'uredu'.",
          ua: "Місцевий відмінок для неживого іменника чоловічого роду 'ured' закінчується на -u: 'uredu'."
        }
      },
      {
        id: 3,
        question: {
          en: "Complete: Jučer smo _____ (watched - masculine plural) odličan film.",
          ru: "Завершите: Jučer smo _____ (смотрели - м.р. мн.ч.) odličan film.",
          ua: "Завершіть: Jučer smo _____ (дивилися - ч.р. мн.) odličan film."
        },
        options: [
          { en: "gledali", ru: "gledali", ua: "gledali" },
          { en: "gledao", ru: "gledao", ua: "gledao" },
          { en: "gledala", ru: "gledala", ua: "gledala" },
          { en: "gledati", ru: "gledati", ua: "gledati" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Gledali" is the past active participle for masculine plural (mi - we).',
          ru: '"Gledali" — причастие прошедшего времени для мужского рода множественного числа.',
          ua: '"Gledali" — дієприкметник минулого часу для чоловічого роду множини.'
        }
      },
      {
        id: 4,
        question: {
          en: "Who professionaly works in a restaurant serving guests?",
          ru: "Кто профессионально работает в ресторане, обслуживая гостей?",
          ua: "Хто професійно працює в ресторані, обслуговуючи гостей?"
        },
        options: [
          { en: "konobar (waiter)", ru: "konobar (официант)", ua: "konobar (офіціант)" },
          { en: "kuhar (chef)", ru: "kuhar (повар)", ua: "kuhar (кухар)" },
          { en: "liječnik (doctor)", ru: "liječnik (врач)", ua: "liječnik (лікар)" },
          { en: "učitelj (teacher)", ru: "učitelj (учитель)", ua: "učitelj (вчитель)" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Konobar" is the Croatian word for waiter.',
          ru: '"Konobar" означает официант по-хорватски.',
          ua: '"Konobar" означає офіціант хорватською.'
        }
      },
      {
        id: 5,
        question: {
          en: "Complete: Putujem _____ (by train - vlak - instrumental singular).",
          ru: "Завершите: Putujem _____ (поездом - vlak - творительный падеж).",
          ua: "Завершіть: Putujem _____ (поїздом - vlak - орудний відмінок)."
        },
        options: [
          { en: "vlakom", ru: "vlakom", ua: "vlakom" },
          { en: "s vlakom", ru: "s vlakom", ua: "s vlakom" },
          { en: "u vlaku", ru: "u vlaku", ua: "u vlaku" },
          { en: "na vlak", ru: "na vlak", ua: "na vlak" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "When describing a means of transport, use the instrumental case without prepositions ('vlakom').",
          ru: "Для выражения средства передвижения используется творительный падеж без предлога ('vlakom').",
          ua: "Для вираження засобу пересування використовується орудний відмінок без прийменника ('vlakom')."
        }
      },
      {
        id: 6,
        question: {
          en: "Complete: Nažalost, nemam _____ (money - novac - genitive singular).",
          ru: "Завершите: Nažalost, nemam _____ (денег - novac - родительный падеж).",
          ua: "Завершіть: Nažalost, nemam _____ (грошей - novac - родовий відмінок)."
        },
        options: [
          { en: "novca", ru: "novca", ua: "novca" },
          { en: "novac", ru: "novac", ua: "novac" },
          { en: "novcu", ru: "novcu", ua: "novcu" },
          { en: "novcem", ru: "novcem", ua: "novcem" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Negative statements (nemam) require the genitive case of the object ('novca').",
          ru: "Отрицания (nemam) требуют родительного падежа для дополнения ('novca').",
          ua: "Заперечення (nemam) вимагають родового відмінка для додатка ('novca')."
        }
      },
      {
        id: 7,
        question: {
          en: "Which adverb correctly answers 'Kamo ideš?' (Where are you going?)?",
          ru: "На какой вопрос правильно отвечает наречие 'tamo' (туда)?",
          ua: "Яке прислівник правильно відповідає на питання 'Kamo ideš?' (Куди ти йдеш?)?"
        },
        options: [
          { en: "tamo (there - direction)", ru: "tamo (туда - направление)", ua: "tamo (туди - напрямок)" },
          { en: "ovdje (here - location)", ru: "ovdje (тут - место)", ua: "ovdje (тут - місце)" },
          { en: "gdje (where - location)", ru: "gdje (где - место)", ua: "gdje (де - місце)" },
          { en: "nikamo (nowhere - location)", ru: "nikamo (никуда - место)", ua: "nikamo (нікуди - місце)" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Kamo" asks about direction, so the answer must be "tamo" (there/thither).',
          ru: '"Kamo" спрашивает о направлении движения, поэтому ответом является "tamo" (туда).',
          ua: '"Kamo" запитує про напрямок руху, тому відповіддю є "tamo" (туди).'
        }
      },
      {
        id: 8,
        question: {
          en: "Complete: Ujutro se ustajem _____ (myself - reflexive pronoun).",
          ru: "Завершите: Ujutro se ustajem _____ (себя - возвратная частица).",
          ua: "Завершіть: Ujutro se ustajem _____ (себе - зворотна частка)."
        },
        options: [
          { en: "se (already included)", ru: "se (уже включено)", ua: "se (вже включено)" },
          { en: "si", ru: "si", ua: "si" },
          { en: "me", ru: "me", ua: "me" },
          { en: "mi", ru: "mi", ua: "mi" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Ustajati se" is a reflexive verb containing the particle "se".',
          ru: '"Ustajati se" (вставать) — возвратный глагол с частицей "se".',
          ua: '"Ustajati se" (вставати) — зворотне дієслово з часткою "se".'
        }
      },
      {
        id: 9,
        question: {
          en: "Complete: Sutra _____ u Dubrovnik. (Tomorrow we will travel to Dubrovnik.)",
          ru: "Завершите: Sutra _____ u Dubrovnik. (Завтра мы поедем в Дубровник.)",
          ua: "Завершіть: Sutra _____ u Dubrovnik. (Завтра ми поїдемо в Дубровник.)"
        },
        options: [
          { en: "ćemo putovati", ru: "ćemo putovati", ua: "ćemo putovati" },
          { en: "putovali smo", ru: "putovali smo", ua: "putovali smo" },
          { en: "putujemo", ru: "putujemo", ua: "putujemo" },
          { en: "bismo putovali", ru: "bismo putovali", ua: "bismo putovali" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Future I is formed with 'ćemo' + infinitive 'putovati'.",
          ru: "Будущее время I образуется с помощью вспомогательного глагола 'ćemo' + инфинитив 'putovati'.",
          ua: "Майбутній час I утворюється за допомогою допоміжного дієслова 'ćemo' + інфінітив 'putovati'."
        }
      },
      {
        id: 10,
        question: {
          en: "Complete: Danas idem kod _____ (doctor - liječnik - genitive singular).",
          ru: "Завершите: Danas idem kod _____ (врач - liječnik - родительный падеж).",
          ua: "Завершіть: Danas idem kod _____ (лікар - liječnik - родовий відмінок)."
        },
        options: [
          { en: "liječnika", ru: "liječnika", ua: "liječnika" },
          { en: "liječniku", ru: "liječniku", ua: "liječniku" },
          { en: "liječnikom", ru: "liječnikom", ua: "liječnikom" },
          { en: "liječnik", ru: "liječnik", ua: "liječnik" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Preposition 'kod' (at / to someone's place) requires the genitive case ('liječnika').",
          ru: "Предлог 'kod' (у / к кому-то) требует родительного падежа ('liječnika').",
          ua: "Прийменник 'kod' (у / до когось) вимагає родового відмінка ('liječnika')."
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
          en: "Complete: Moram pod hitno _____ (finish - perfective infinitive) ovaj projekt.",
          ru: "Завершите: Moram pod hitno _____ (закончить - совершенный вид) ovaj projekt.",
          ua: "Завершіть: Moram pod hitno _____ (закінчити - доконаний вид) ovaj projekt."
        },
        options: [
          { en: "završiti", ru: "završiti", ua: "završiti" },
          { en: "završavati", ru: "završavati", ua: "završavati" },
          { en: "završim", ru: "završim", ua: "završim" },
          { en: "završio", ru: "završio", ua: "završio" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "For a single completed action in the future, the perfective infinitive 'završiti' is used.",
          ru: "Для единичного законченного действия в инфинитиве используется совершенный вид 'završiti'.",
          ua: "Для одиничної завершеної дії в інфінітиві використовується доконаний вид 'završiti'."
        }
      },
      {
        id: 2,
        question: {
          en: "Complete: Ako _____ (future II of 'imati') vremena, svakako dođi.",
          ru: "Завершите: Ako _____ (будущее II от 'imati') vremena, svakako dođi.",
          ua: "Завершіть: Ako _____ (майбутній II від 'imati') vremena, svakako dođi."
        },
        options: [
          { en: "budem imao", ru: "budem imao", ua: "budem imao" },
          { en: "ću imati", ru: "ću imati", ua: "ću imati" },
          { en: "bih imao", ru: "bih imao", ua: "bih imao" },
          { en: "imam", ru: "imam", ua: "imam" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Future II is used in conditional sentences that express conditions prior to another future action.",
          ru: "Будущее время II (budem imao) используется в придаточных условных предложениях будущего времени.",
          ua: "Майбутній час II (budem imao) використовується в підрядних умовних реченнях майбутнього часу."
        }
      },
      {
        id: 3,
        question: {
          en: "Complete: Pomažem _____ (friend - prijatelj - dative singular).",
          ru: "Завершите: Pomažem _____ (друг - prijatelj - дательный падеж).",
          ua: "Завершіть: Pomažem _____ (друг - prijatelj - давальний відмінок)."
        },
        options: [
          { en: "prijatelju", ru: "prijatelju", ua: "prijatelju" },
          { en: "prijatelja", ru: "prijatelja", ua: "prijatelja" },
          { en: "prijateljem", ru: "prijateljem", ua: "prijateljem" },
          { en: "prijatelje", ru: "prijatelje", ua: "prijatelje" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "The verb 'pomagati' (to help) requires the dative case ('prijatelju').",
          ru: "Глагол 'pomagati' (помогать) управляет дательным падежом ('prijatelju').",
          ua: "Дієслово 'pomagati' (допомагати) керує давальним відмінком ('prijatelju')."
        }
      },
      {
        id: 4,
        question: {
          en: "What does 'razvrstavanje otpada' refer to?",
          ru: "Что означает выражение 'razvrstavanje otpada'?",
          ua: "Що означає вираз 'razvrstavanje otpada'?"
        },
        options: [
          { en: "sorting waste", ru: "сортировка отходов", ua: "сортування сміття" },
          { en: "saving money", ru: "экономия денег", ua: "економія грошей" },
          { en: "buying furniture", ru: "покупка мебели", ua: "купівля меблів" },
          { en: "cooking food", ru: "приготовление еды", ua: "приготування їжі" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "'Razvrstavanje' means sorting/separating, and 'otpad' means waste/refuse.",
          ru: "'Razvrstavanje' означает сортировку, а 'otpad' — отходы.",
          ua: "'Razvrstavanje' означає сортування, а 'otpad' — відходи."
        }
      },
      {
        id: 5,
        question: {
          en: "Choose the grammatically correct clitic order:",
          ru: "Выберите грамматически верный порядок энклитик:",
          ua: "Оберіть граматично правильний порядок енклітик:"
        },
        options: [
          { en: "Jučer su mi ga dali.", ru: "Jučer su mi ga dali.", ua: "Jučer su mi ga dali." },
          { en: "Jučer mi su ga dali.", ru: "Jučer mi su ga dali.", ua: "Jučer mi su ga dali." },
          { en: "Jučer ga mi su dali.", ru: "Jučer ga mi su dali.", ua: "Jučer ga mi su dali." },
          { en: "Jučer dali su mi ga.", ru: "Jučer dali su mi ga.", ua: "Jučer dali su mi ga." }
        ],
        correctAnswer: 0,
        explanation: {
          en: "The correct order of clitics: verbal auxiliary ('su') + dative pronoun ('mi') + accusative pronoun ('ga').",
          ru: "Правильный порядок энклитик: глагол-связка ('su') + дательный падеж ('mi') + винительный падеж ('ga').",
          ua: "Правильний порядок енклітик: дієслово-зв'язка ('su') + давальний відмінок ('mi') + знахідний відмінок ('ga')."
        }
      },
      {
        id: 6,
        question: {
          en: "Complete: Često razgovaramo o _____ (new plans - locative plural).",
          ru: "Завершите: Često razgovaramo o _____ (новые планы - locative plural).",
          ua: "Завершіть: Često razgovaramo o _____ (нові плани - locative plural)."
        },
        options: [
          { en: "novim planovima", ru: "novim planovima", ua: "novim planovima" },
          { en: "novi planovi", ru: "novi planovi", ua: "novi planovi" },
          { en: "novih planova", ru: "novih planova", ua: "novih planova" },
          { en: "novim planom", ru: "novim planom", ua: "novim planom" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Preposition 'o' (about) requires locative plural ending in -ima for adjectives and masculine nouns.",
          ru: "Предлог 'o' (о) требует предложного падежа во множественном числе с окончанием -ima.",
          ua: "Прийменник 'o' (про) вимагає місцевого відмінка у множині із закінченням -ima."
        }
      },
      {
        id: 7,
        question: {
          en: "Complete: Znam ženu _____ sin studira u Zagrebu. (I know the woman whose son is studying...)",
          ru: "Завершите: Znam ženu _____ sin studira u Zagrebu. (Я знаю женщину, чей сын...)",
          ua: "Завершіть: Znam ženu _____ sin studira u Zagrebu. (Я знаю жінку, чий син...)"
        },
        options: [
          { en: "čiji", ru: "čiji", ua: "čiji" },
          { en: "kojeg", ru: "kojeg", ua: "kojeg" },
          { en: "čijeg", ru: "čijeg", ua: "čijeg" },
          { en: "čijem", ru: "čijem", ua: "čijem" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Relative pronoun 'čiji' (whose) must agree with the masculine singular noun 'sin' in nominative.",
          ru: "Относительное притяжательное местоимение 'čiji' (чей) согласуется с определяемым существительным 'sin' (мужской род, именительный падеж).",
          ua: "Відносний присвійний займенник 'čiji' (чий) узгоджується з означуваним іменником 'sin' (чоловічий рід, називний відмінок)."
        }
      },
      {
        id: 8,
        question: {
          en: "Complete: Kupio _____ (conditional auxiliary 'I would') novi auto da imam novca.",
          ru: "Завершите: Kupio _____ (условная частица 'я бы') novi auto da imam novca.",
          ua: "Завершіть: Kupio _____ (умовна частка 'я б') novi auto da imam novca."
        },
        options: [
          { en: "bih", ru: "bih", ua: "bih" },
          { en: "bi", ru: "bi", ua: "bi" },
          { en: "bismo", ru: "bismo", ua: "bismo" },
          { en: "su", ru: "su", ua: "su" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Conditional clause for the 1st person singular requires the auxiliary 'bih' (I would).",
          ru: "Для сослагательного наклонения 1-го лица единственного числа требуется частица 'bih' (я бы).",
          ua: "Для умовного способу 1-ї особи однини потрібна частка 'bih' (я б)."
        }
      },
      {
        id: 9,
        question: {
          en: "Which word is the verbal noun (gerund) of 'učiti' (to learn)?",
          ru: "Какое слово является отглагольным существительным от 'učiti' (учить)?",
          ua: "Яке слово є віддієслівним іменником від 'učiti' (вчити)?"
        },
        options: [
          { en: "učenje (learning)", ru: "učenje (обучение)", ua: "učenje (навчання)" },
          { en: "učiti (to learn)", ru: "učiti (учить)", ua: "učiti (вчити)" },
          { en: "učenik (student)", ru: "učenik (ученик)", ua: "učenik (учень)" },
          { en: "učenost (erudition)", ru: "učenost (ученость)", ua: "učenost (вченість)" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Croatian verbal nouns are formed with the suffix -nje: 'učenje'.",
          ru: "Отглагольные существительные образуются с суффиксом -nje: 'učenje'.",
          ua: "Віддієслівні іменники утворюються із суфіксом -nje: 'učenje'."
        }
      },
      {
        id: 10,
        question: {
          en: "Complete: Pijem kavu bez _____ (sugar - šećer - genitive singular).",
          ru: "Завершите: Pijem kavu bez _____ (сахар - šećer - родительный падеж).",
          ua: "Завершіть: Pijem kavu bez _____ (цукор - šećer - родовий відмінок)."
        },
        options: [
          { en: "šećera", ru: "šećera", ua: "šećera" },
          { en: "šećeru", ru: "šećeru", ua: "šećeru" },
          { en: "šećerom", ru: "šećerom", ua: "šećerom" },
          { en: "šećera", ru: "šećera", ua: "šećera" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Preposition 'bez' (without) requires the genitive case ('šećera').",
          ru: "Предлог 'bez' (без) требует родительного падежа ('šećera').",
          ua: "Прийменник 'bez' (без) вимагає родового відмінка ('šećera')."
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
          en: "Complete: Tamo na trgu ima puno _____ (people - genitive plural).",
          ru: "Завершите: Tamo na trgu ima puno _____ (людей - родительный падеж).",
          ua: "Завершіть: Tamo na trgu ima puno _____ (людей - родовий відмінок)."
        },
        options: [
          { en: "ljudi", ru: "ljudi", ua: "ljudi" },
          { en: "ljudima", ru: "ljudima", ua: "ljudima" },
          { en: "čovjeka", ru: "čovjeka", ua: "čovjeka" },
          { en: "ljudih", ru: "ljudih", ua: "ljudih" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Quantifier 'puno' requires genitive plural, which is 'ljudi' for people.",
          ru: "Количественное слово 'puno' требует родительного падежа множественного числа, форма которого — 'ljudi'.",
          ua: "Кількісне слово 'puno' вимагає родового відмінка множини, форма якого — 'ljudi'."
        }
      },
      {
        id: 2,
        question: {
          en: "Complete: Da sam to znao ranije, _____ (conditional II of 'doći').",
          ru: "Завершите: Da sam to znao ranije, _____ (условное II от 'doći' - я бы пришел).",
          ua: "Завершіть: Da sam to znao ranije, _____ (умовний II від 'doći' - я б прийшов)."
        },
        options: [
          { en: "bio bih došao", ru: "bio bih došao", ua: "bio bih došao" },
          { en: "došao bih", ru: "došao bih", ua: "došao bih" },
          { en: "doći ću", ru: "doći ću", ua: "doći ću" },
          { en: "došao sam", ru: "došao sam", ua: "došao sam" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Past hypothetical conditions require Conditional II: 'bio bih došao'.",
          ru: "Нереальное условие в прошлом выражается сослагательным наклонением II: 'bio bih došao'.",
          ua: "Нереальна умова в минулому виражається умовним способом II: 'bio bih došao'."
        }
      },
      {
        id: 3,
        question: {
          en: "Complete: U ovom trenutku nova zgrada se _____ (passive - is being built).",
          ru: "Завершите: U ovom trenutku nova zgrada se _____ (пассив - строится).",
          ua: "Завершіть: U ovom trenutku nova zgrada se _____ (пасив - будується)."
        },
        options: [
          { en: "gradi", ru: "gradi", ua: "gradi" },
          { en: "gradila", ru: "gradila", ua: "gradila" },
          { en: "graditi", ru: "graditi", ua: "graditi" },
          { en: "grade", ru: "grade", ua: "grade" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Reflexive passive is formed with 'se' + 3rd person singular present active verb: 'se gradi'.",
          ru: "Возвратный пассив образуется с помощью 'se' + глагол в 3-м лице единственного числа: 'se gradi'.",
          ua: "Зворотний пасив утворюється за допомогою 'se' + дієслово у 3-й особі однини: 'se gradi'."
        }
      },
      {
        id: 4,
        question: {
          en: "Complete: Usprkos _____ (difficulties - poteškoće - dative plural) završili smo projekt.",
          ru: "Завершите: Usprkos _____ (трудности - poteškoće - дательный падеж).",
          ua: "Завершіть: Usprkos _____ (труднощі - poteškoće - давальний відмінок)."
        },
        options: [
          { en: "poteškoćama", ru: "poteškoćama", ua: "poteškoćama" },
          { en: "poteškoća", ru: "poteškoća", ua: "poteškoća" },
          { en: "poteškoćama", ru: "poteškoćama", ua: "poteškoćama" },
          { en: "poteškoće", ru: "poteškoće", ua: "poteškoće" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Preposition 'usprkos' (despite) requires the dative case ('poteškoćama').",
          ru: "Предлог 'usprkos' (вопреки) управляет дательным падежом ('poteškoćama').",
          ua: "Прийменник 'usprkos' (всупереч) керує давальним відмінком ('poteškoćama')."
        }
      },
      {
        id: 5,
        question: {
          en: "Complete: Moje _____ (children - djeca - collective plural agreement) su u školi.",
          ru: "Завершите: Moje _____ (дети - djeca - собирательное соглашение) su u školi.",
          ua: "Завершіть: Moje _____ (діти - djeca - збірне узгодження) su u školi."
        },
        options: [
          { en: "djeca", ru: "djeca", ua: "djeca" },
          { en: "dijete", ru: "dijete", ua: "dijete" },
          { en: "djece", ru: "djece", ua: "djece" },
          { en: "djeci", ru: "djeci", ua: "djeci" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Djeca" is a collective feminine singular grammatically but behaves as plural in meaning, taking feminine plural adjectives ("moje").',
          ru: '"Djeca" грамматически является собирательным существительным женского рода, согласуется с притяжательным местоимением во множественном числе ("moje").',
          ua: '"Djeca" граматично є збірним іменником жіночого роду, узгоджується з присвійним займенником у множині ("moje").'
        }
      },
      {
        id: 6,
        question: {
          en: "In literary Croatian, what is 'protuurječnost' a synonym for?",
          ru: "В литературном хорватском языке, синонимом какого слова является 'protuurječnost'?",
          ua: "У літературній хорватській мові, синонімом якого слова є 'protuurječnost'?"
        },
        options: [
          { en: "kontradikciju (contradiction)", ru: "kontradikciju (противоречие)", ua: "kontradikciju (суперечність)" },
          { en: "suglasnost (agreement)", ru: "suglasnost (согласие)", ua: "suglasnost (згода)" },
          { en: "suradnju (cooperation)", ru: "suradnju (сотрудничество)", ua: "suradnju (співпраця)" },
          { en: "potporu (support)", ru: "potporu (поддержку)", ua: "potporu (підтримка)" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Protuurječnost" and "kontradikcija" both mean contradiction or discrepancy.',
          ru: '"Protuurječnost" и "kontradikcija" означают противоречие.',
          ua: '"Protuurječnost" та "kontradikcija" означають суперечність.'
        }
      },
      {
        id: 7,
        question: {
          en: "Complete: Čim _____ (future II of 'stići' - plural) na kolodvor, javite nam se.",
          ru: "Завершите: Čim _____ (будущее II от 'stići' - они прибудут), javite nam se.",
          ua: "Завершіть: Čim _____ (майбутній II від 'stići' - вони прибудуть), javite nam se."
        },
        options: [
          { en: "budu stigli", ru: "budu stigli", ua: "budu stigli" },
          { en: "stignu", ru: "stignu", ua: "stignu" },
          { en: "će stići", ru: "će stići", ua: "će stići" },
          { en: "stizali su", ru: "stizali su", ua: "stizali su" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Conjunction 'čim' (as soon as) expressing future action requires Future II ('budu stigli').",
          ru: "Союз 'čim' (как только) для будущего времени требует будущего II ('budu stigli').",
          ua: "Сполучник 'čim' (як тільки) для майбутнього часу вимагає майбутнього II ('budu stigli')."
        }
      },
      {
        id: 8,
        question: {
          en: "Complete: Nije došao na predavanje _____ (because) je bio bolestan.",
          ru: "Завершите: Nije došao na predavanje _____ (потому что) je bio bolestan.",
          ua: "Завершіть: Nije došao na predavanje _____ (тому що) je bio bolestan."
        },
        options: [
          { en: "jer", ru: "jer", ua: "jer" },
          { en: "iako", ru: "iako", ua: "iako" },
          { en: "premda", ru: "premda", ua: "premda" },
          { en: "dok", ru: "dok", ua: "dok" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Jer" is the standard causal conjunction meaning "because".',
          ru: '"Jer" — стандартный союз причины, переводящийся как "потому что".',
          ua: '"Jer" — стандартний сполучник причини, що перекладається як "тому що".'
        }
      },
      {
        id: 9,
        question: {
          en: "Complete: Cijeli tekst pišem _____ (with a pen - olovka - instrumental singular).",
          ru: "Завершите: Cijeli tekst pišem _____ (карандашом/ручкой - olovka - творительный падеж).",
          ua: "Завершіть: Cijeli tekst pišem _____ (олівцем/ручкою - olovka - орудний відмінок)."
        },
        options: [
          { en: "olovkom", ru: "olovkom", ua: "olovkom" },
          { en: "s olovkom", ru: "s olovkom", ua: "s olovkom" },
          { en: "olovku", ru: "olovku", ua: "olovku" },
          { en: "olovci", ru: "olovci", ua: "olovci" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Instrumental of tool/instrument is used without preposition 's' ('olovkom'). Using 's' would imply accompaniment (writing along with the pen).",
          ru: "Инструментальный творительный падеж (орудие действия) употребляется без предлога ('olovkom').",
          ua: "Орудний відмінок інструмента (знаряддя дії) вживається без прийменника ('olovkom')."
        }
      },
      {
        id: 10,
        question: {
          en: "Complete: Danas nisam vidio _____ (nothing - double negation).",
          ru: "Завершите: Danas nisam vidio _____ (ничего - двойное отрицание).",
          ua: "Завершіть: Danas nisam vidio _____ (нічого - подвійне заперечення)."
        },
        options: [
          { en: "ništa", ru: "ništa", ua: "ništa" },
          { en: "nešto", ru: "nešto", ua: "nešto" },
          { en: "išta", ru: "išta", ua: "išta" },
          { en: "sve", ru: "sve", ua: "sve" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Double negation requirement: negative verb 'nisam' + negative pronoun 'ništa'.",
          ru: "Правило двойного отрицания: отрицательный глагол 'nisam' + отрицательное местоимение 'ništa'.",
          ua: "Правило подвійного заперечення: заперечне дієслово 'nisam' + заперечний займенник 'ništa'."
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
          en: "What does the colloquial idiom 'Bogu iza nogu' mean?",
          ru: "Что означает разговорная идиома 'Bogu iza nogu'?",
          ua: "Що означає розмовна ідіома 'Bogu iza nogu'?"
        },
        options: [
          { en: "in the middle of nowhere / very far away", ru: "у черта на куличках / очень далеко", ua: "у біса на болоті / дуже далеко" },
          { en: "blessed by God / highly successful", ru: "благословенный Богом / успешный", ua: "благословенний Богом / успішний" },
          { en: "close by / just around the corner", ru: "совсем близко / под носом", ua: "зовсім поруч / під носом" },
          { en: "in the town square / very crowded", ru: "в центре города / людно", ua: "в центрі міста / людно" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Bogu iza nogu" (literally "behind God\'s legs") is an idiom for a very remote, hard-to-reach place.',
          ru: '"Bogu iza nogu" (дословно "у Бога за ногами") означает глухое, труднодоступное или очень отдаленное место.',
          ua: '"Bogu iza nogu" (дослівно "у Бога за ногами") означає глухе, важкодоступне або дуже віддалене місце.'
        }
      },
      {
        id: 2,
        question: {
          en: "Which concessive conjunction translates to 'although'?",
          ru: "Какой уступительный союз переводится как 'хотя / несмотря на то, что'?",
          ua: "Який допустовий сполучник перекладається як 'хоча / незважаючи на те, що'?"
        },
        options: [
          { en: "iako / premda", ru: "iako / premda", ua: "iako / premda" },
          { en: "zato što", ru: "zato što", ua: "zato što" },
          { en: "kako god", ru: "kako god", ua: "kako god" },
          { en: "budući da", ru: "budući da", ua: "budući da" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Iako" and "premda" are standard concessive conjunctions meaning "although".',
          ru: '"Iako" и "premda" — уступительные союзы со значением "хотя".',
          ua: '"Iako" та "premda" — допустові сполучники зі значенням "хоча".'
        }
      },
      {
        id: 3,
        question: {
          en: "Complete: Preporučujem da detaljno _____ (you review - present subjunctive equivalent) ove materijale.",
          ru: "Завершите: Preporučujem da detaljno _____ (вы просмотрите - настоящее время).",
          ua: "Завершіть: Preporučujem da detaljno _____ (ви переглянете - теперішній час)."
        },
        options: [
          { en: "pogledate", ru: "pogledate", ua: "pogledate" },
          { en: "pogledati", ru: "pogledati", ua: "pogledati" },
          { en: "ćete pogledati", ru: "ćete pogledati", ua: "ćete pogledati" },
          { en: "pogledali biste", ru: "pogledali biste", ua: "pogledali biste" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Subordinate recommendation clauses with 'da' require the present tense indicative ('pogledate').",
          ru: "После союза 'da' в изъяснительных предложениях рекомендации используется настоящее время глагола ('pogledate').",
          ua: "Після сполучника 'da' у з'ясувальних реченнях рекомендації використовується теперішній час дієслова ('pogledate')."
        }
      },
      {
        id: 4,
        question: {
          en: "What does the term 'dvojezičnost' mean?",
          ru: "Что означает термин 'dvojezičnost'?",
          ua: "Що означає термін 'dvojezičnost'?"
        },
        options: [
          { en: "bilingualism", ru: "двуязычие", ua: "двомовність" },
          { en: "linguistic translation", ru: "языковой перевод", ua: "мовний переклад" },
          { en: "general linguistics", ru: "языкознание", ua: "мовознавство" },
          { en: "speech pathology", ru: "логопедия", ua: "логопедія" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Dvojezičnost" refers to the ability to speak two languages fluently (bilingualism).',
          ru: '"Dvojezičnost" означает владение двумя языками (двуязычие).',
          ua: '"Dvojezičnost" означає володіння двома мовами (двомовність).'
        }
      },
      {
        id: 5,
        question: {
          en: "Complete the triple negation: On nikada nikome ništa _____ (does not say).",
          ru: "Завершите тройное отрицание: On nikada nikome ništa _____ (не говорит).",
          ua: "Завершіть потрійне заперечення: On nikada nikome ništa _____ (не говорить)."
        },
        options: [
          { en: "ne govori", ru: "ne govori", ua: "ne govori" },
          { en: "govori", ru: "govori", ua: "govori" },
          { en: "ne govore", ru: "ne govore", ua: "ne govore" },
          { en: "govorio", ru: "govorio", ua: "govorio" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Even with multiple negative adverbs/pronouns, the verb itself must be negative ('ne govori').",
          ru: "В хорватском языке отрицательная частица 'ne' обязательна у глагола даже при наличии других отрицательных слов.",
          ua: "У хорватській мові заперечна частка 'ne' є обов'язковою біля дієслова навіть за наявності інших заперечних слів."
        }
      },
      {
        id: 6,
        question: {
          en: "Complete: Ispred zgrade okupila su se dvadeset i dva _____ (citizen - građanin - case after 22).",
          ru: "Завершите: Ispred zgrade okupila su se dvadeset i dva _____ (гражданина - падеж после 22).",
          ua: "Завершіть: Ispred zgrade okupila su se dvadeset i dva _____ (громадянина - відмінок після 22)."
        },
        options: [
          { en: "građanina (genitive singular)", ru: "građanina (родительный ед.ч.)", ua: "građanina (родовий однини)" },
          { en: "građana (genitive plural)", ru: "građana (родительный мн.ч.)", ua: "građana (родовий множини)" },
          { en: "građani (nominative plural)", ru: "građani (именительный мн.ч.)", ua: "građani (називний множини)" },
          { en: "građanima (dative plural)", ru: "građanima (дательный мн.ч.)", ua: "građanima (давальний множини)" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Numbers ending in 2, 3, 4 (like 22) require the genitive singular ('građanina'), whereas numbers 5-20 require the genitive plural ('građana').",
          ru: "Числительные, оканчивающиеся на 2, 3, 4 (например, 22), требуют родительного падежа единственного числа ('građanina').",
          ua: "Числівники, що закінчуються на 2, 3, 4 (наприклад, 22), вимагають родового відмінка однини ('građanina')."
        }
      },
      {
        id: 7,
        question: {
          en: "Complete: Cijeli dan smo proveli u _____ (living room - dnevni boravak - locative singular).",
          ru: "Завершите: Cijeli dan smo proveli u _____ (гостиная - locative singular).",
          ua: "Завершіть: Cijeli dan smo proveli u _____ (вітальня - locative singular)."
        },
        options: [
          { en: "dnevnom boravku", ru: "dnevnom boravku", ua: "dnevnom boravku" },
          { en: "dnevni boravak", ru: "dnevni boravak", ua: "dnevni boravak" },
          { en: "dnevnog boravka", ru: "dnevnog boravka", ua: "dnevnog boravka" },
          { en: "dnevnim boravkom", ru: "dnevnim boravkom", ua: "dnevnim boravkom" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Substantive adjective + noun in locative masculine singular ends in -om and -u: 'dnevnom boravku'.",
          ru: "Сочетание прилагательного и существительного в предложном падеже мужского рода: 'dnevnom boravku'.",
          ua: "Поєднання прикметника та іменника у місцевому відмінку чоловічого роду: 'dnevnom boravku'."
        }
      },
      {
        id: 8,
        question: {
          en: "What is the meaning of the prefixed verb 'preletjeti'?",
          ru: "Каково значение приставочного глагола 'preletjeti'?",
          ua: "Яке значення префіксального дієслова 'preletjeti'?"
        },
        options: [
          { en: "to fly over / fly across", ru: "перелететь / пролететь над чем-то", ua: "перелетіти / пролетіти над чимось" },
          { en: "to fly into / enter flying", ru: "влететь / залететь внутрь", ua: "влетіти / залетіти всередину" },
          { en: "to fly away / escape flying", ru: "улететь / скрыться в полете", ua: "полетіти геть / втекти в польоті" },
          { en: "to stop flying / land", ru: "приземлиться / прекратить полет", ua: "приземлитися / припинити політ" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Prefix 'pre-' indicates movement over, across or transition. 'Preletjeti' is to fly over/across.",
          ru: "Префикс 'pre-' означает движение через, над или переход. 'Preletjeti' — перелететь.",
          ua: "Префікс 'pre-' означає рух через, над або перехід. 'Preletjeti' — перелетіти."
        }
      },
      {
        id: 9,
        question: {
          en: "What is the correct vocative address for 'gospodin Kovačić'?",
          ru: "Какое правильное звательное обращение (Vocative) для 'gospodin Kovačić'?",
          ua: "Яке правильне кличне звертання (Vocative) для 'gospodin Kovačić'?"
        },
        options: [
          { en: "gospodine Kovačiću", ru: "gospodine Kovačiću", ua: "gospodine Kovačiću" },
          { en: "gospodin Kovačić", ru: "gospodin Kovačić", ua: "gospodin Kovačić" },
          { en: "gospodina Kovačića", ru: "gospodina Kovačića", ua: "gospodina Kovačića" },
          { en: "gospodinom Kovačićem", ru: "gospodinom Kovačićem", ua: "gospodinom Kovačićem" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Vocative of 'gospodin' is 'gospodine', and 'Kovačić' ending in palatal sound gets -u ending: 'Kovačiću'.",
          ru: "Звательный падеж для 'gospodin' — 'gospodine', а фамилия на шипящий/мягкий согласный получает окончание -u: 'Kovačiću'.",
          ua: "Кличний відмінок для 'gospodin' — 'gospodine', а прізвище на шиплячий/м'який приголосний набуває закінчення -u: 'Kovačiću'."
        }
      },
      {
        id: 10,
        question: {
          en: "Identify the stylistic figure in the sentence: 'Tisuću puta sam ti rekao da šutiš!' (I told you a thousand times...)",
          ru: "Определите стилистическую фигуру в предложении: 'Tisuću puta sam ti rekao...'",
          ua: "Визначте стилістичну фігуру в реченні: 'Tisuću puta sam ti rekao...'"
        },
        options: [
          { en: "hiperbola (hyperbole)", ru: "hiperbola (гипербола)", ua: "hiperbola (гіпербола)" },
          { en: "metafora (metaphor)", ru: "metafora (метафора)", ua: "metafora (метафора)" },
          { en: "alegorija (allegory)", ru: "alegorija (аллегория)", ua: "alegorija (алегорія)" },
          { en: "ironija (irony)", ru: "ironija (ирония)", ua: "ironija (іронія)" }
        ],
        correctAnswer: 0,
        explanation: {
          en: '"Tisuću puta" (a thousand times) is an extreme exaggeration for stylistic emphasis, which is hyperbole.',
          ru: '"Tisuću puta" (тысячу раз) — стилистическое преувеличение, то есть гипербола.',
          ua: '"Tisuću puta" (тисячу разів) — стилістичне перебільшення, тобто гіпербола.'
        }
      }
    ]
  }
};
