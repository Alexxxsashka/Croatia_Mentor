export interface LocalizedString {
  en: string;
  ru: string;
  ua: string;
}

export interface LessonData {
  id: string;
  type: "grammar" | "reading" | "dictation" | "communication";
  level: string;
  title: string | LocalizedString;
  content: {
    description: string | LocalizedString;
    sections?: {
      title: string | LocalizedString;
      text: string | LocalizedString;
      examples?: string[] | LocalizedString[];
    }[];
    exercises: {
      type: "multiple-choice" | "fill-blank" | "translation" | "dictation";
      question: string | LocalizedString;
      options?: string[];
      correctAnswer: string | LocalizedString;
      hint?: string | LocalizedString;
    }[];
    dictationText?: string;
  };
}

export function getLocalizedText(
  field: string | LocalizedString | undefined,
  locale: string
): string {
  if (!field) return "";
  if (typeof field === "string") return field;
  
  const normLocale = locale.toLowerCase();
  if (normLocale === "ru" || normLocale === "russian") return field.ru;
  if (normLocale === "ua" || normLocale === "ukrainian") return field.ua;
  return field.en;
}

export const lessonsData: LessonData[] = [
  // ==========================================
  // LEVEL A1
  // ==========================================
  {
    id: "a1-grammar-1",
    type: "grammar",
    level: "A1",
    title: {
      en: "Osobne zamjenice (Personal Pronouns)",
      ru: "Личные местоимения (Osobne zamjenice)",
      ua: "Особові займенники (Osobne zamjenice)"
    },
    content: {
      description: {
        en: "Learn the personal pronouns in Croatian — the building blocks of every sentence.",
        ru: "Изучите личные местоимения в хорватском — основу каждого предложения.",
        ua: "Вивчіть особові займенники в хорватській — основу кожного речення."
      },
      sections: [
        {
          title: { en: "Personal Pronouns", ru: "Личные местоимения", ua: "Особові займенники" },
          text: {
            en: "In Croatian, personal pronouns change based on their function in the sentence. Here are the basic nominative forms:",
            ru: "В хорватском языке личные местоимения изменяются в зависимости от их функции в предложении. Вот основные формы в именительном падеже:",
            ua: "У хорватській мові особові займенники змінюються залежно від їхньої функції в реченні. Ось основні форми в називному відмінку:"
          },
          examples: [
            { en: "ja (I) — Ja sam student. (I am a student)", ru: "ja (я) — Ja sam student. (Я студент)", ua: "ja (я) — Ja sam student. (Я студент)" },
            { en: "ti (you) — Ti si učenik. (You are a pupil)", ru: "ti (ты) — Ti si učenik. (Ты ученик)", ua: "ti (ти) — Ti si učenik. (Ти учень)" },
            { en: "on/ona/ono (he/she/it) — On je dobar. (He is good)", ru: "on/ona/ono (он/она/оно) — On je dobar. (Он хороший)", ua: "on/ona/ono (він/вона/воно) — On je dobar. (Він добрий)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "_____ sam iz Hrvatske. (I am from Croatia.)", ru: "_____ sam iz Hrvatske. (Я из Хорватии.)", ua: "_____ sam iz Hrvatske. (Я з Хорватії.)" },
          options: ["Ja", "Ti", "On", "Mi"],
          correctAnswer: "Ja"
        },
        {
          type: "multiple-choice",
          question: { en: "_____ ste lijepi. (You [formal] are beautiful.)", ru: "_____ ste lijepi. (Вы [вежливо] красивы.)", ua: "_____ ste lijepi. (Ви [ввічливо] красиві.)" },
          options: ["Vi", "Ti", "Oni", "Ja"],
          correctAnswer: "Vi"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: _____ je profesorica. (She is a professor.)", ru: "Заполните: _____ je profesorica. (Она преподаватель.)", ua: "Заповніть: _____ je profesorica. (Вона викладач.)" },
          correctAnswer: "Ona",
          hint: { en: "Think about the feminine 3rd person pronoun", ru: "Подумайте о местоимении 3-го лица женского рода (Она)", ua: "Подумайте про займенник 3-ї особи жіночого роду (Вона)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kako ste _____? (How are you [plural/formal]?)", ru: "Kako ste _____? (Как у вас дела? / Как вы [мн.ч./вежл.]?)", ua: "Kako ste _____? (Як ваші справи? / Як ви [мн.ч./ввічл.]?)" },
          options: ["vi", "ja", "ti", "ona"],
          correctAnswer: "vi"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: _____ smo sretni. (We are happy.)", ru: "Заполните: _____ smo sretni. (Мы счастливы.)", ua: "Заповніть: _____ smo sretni. (Ми щасливі.)" },
          correctAnswer: "Mi",
          hint: { en: "1st person plural pronoun", ru: "Местоимение 1-го лица мн. ч. (Мы)", ua: "Займенник 1-ї особи мн. ч. (Ми)" }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ su u uredu. (They [masc.] are in the office.)", ru: "_____ su u uredu. (Они [м.р.] в офисе.)", ua: "_____ su u uredu. (Вони [ч.р.] в офісі.)" },
          options: ["Oni", "One", "Ona", "Vi"],
          correctAnswer: "Oni"
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'You (informal, singular) are'", ru: "Переведите на хорватский: 'Ты есть'", ua: "Перекладіть на хорватську: 'Ти є'" },
          correctAnswer: "Ti si"
        },
        {
          type: "multiple-choice",
          question: { en: "_____ čitaš knjigu. (You are reading a book.)", ru: "_____ čitaš knjigu. (Ты читаешь книгу.)", ua: "_____ čitaš knjigu. (Ти читаєш книгу.)" },
          options: ["Ti", "Ja", "On", "Mi"],
          correctAnswer: "Ti"
        }
      ]
    }
  },
  {
    id: "a1-grammar-2",
    type: "grammar",
    level: "A1",
    title: {
      en: "Glagol 'biti' i predstavljanje (Verb 'to be' & introductions)",
      ru: "Глагол 'biti' и знакомство (Verb 'biti')",
      ua: "Дієслово 'biti' та знайомство (Verb 'biti')"
    },
    content: {
      description: {
        en: "Master the present tense of the verb 'biti' (to be) and learn to introduce yourself.",
        ru: "Освойте настоящее время глагола 'biti' (быть) и научитесь представляться.",
        ua: "Опануйте теперішній час дієслова 'biti' (бути) та навчіться представлятися."
      },
      sections: [
        {
          title: { en: "Present of Biti", ru: "Настоящее время глагола Biti", ua: "Теперішній час дієслова Biti" },
          text: {
            en: "The short (clitic) forms of 'biti' are: sam, si, je, smo, ste, su. To make questions, we use 'Li' (e.g. Jesi li...?). To introduce yourself: 'Ja sam Marko' or 'Zovem se Marko'.",
            ru: "Краткие формы глагола 'biti': sam, si, je, smo, ste, su. Для вопросов используется частица 'li'. Представление: 'Ja sam Marko' или 'Zovem se Marko'.",
            ua: "Короткі форми дієслова 'biti': sam, si, je, smo, ste, su. Для запитань використовується частка 'li'. Представлення: 'Ja sam Marko' або 'Zovem se Marko'."
          },
          examples: [
            { en: "Kako se zoveš? — Zovem se Ana. (What is your name? — My name is Ana.)", ru: "Kako se zoveš? — Zovem se Ana. (Как тебя зовут? — Меня зовут Ана.)", ua: "Kako se zoveš? — Zovem se Ana. (Як тебе звати? — Мене звати Ана.)" },
            { en: "Odakle si? — Ja sam iz Ukrajine. (Where are you from? — I am from Ukraine.)", ru: "Odakle si? — Ja sam iz Ukrajine. (Откуда ты? — Я из Украины.)", ua: "Odakle si? — Ja sam iz Ukrajine. (Звідки ти? — Я з України.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Kako _____ zoveš? (What is your name?)", ru: "Kako _____ zoveš? (Как тебя зовут?)", ua: "Kako _____ zoveš? (Як тебе звати?)" },
          options: ["se", "si", "sam", "je"],
          correctAnswer: "se"
        },
        {
          type: "multiple-choice",
          question: { en: "Ja _____ Marko. (I am Marko.)", ru: "Ja _____ Marko. (Я Марко.)", ua: "Ja _____ Marko. (Я Марко.)" },
          options: ["sam", "si", "je", "su"],
          correctAnswer: "sam"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Odakle _____ ti? (Where are you from?)", ru: "Заполните: Odakle _____ ti? (Откуда ты?)", ua: "Заповніть: Odakle _____ ti? (Звідки ти?)" },
          correctAnswer: "si",
          hint: { en: "Use present form of 'biti' for 'ti'", ru: "Используйте форму глагола 'biti' для 'ti'", ua: "Використовуйте форму дієслова 'biti' для 'ti'" }
        },
        {
          type: "multiple-choice",
          question: { en: "Oni _____ iz Hrvatske. (They are from Croatia.)", ru: "Oni _____ iz Hrvatske. (Они из Хорватии.)", ua: "Oni _____ iz Hrvatske. (Вони з Хорватії.)" },
          options: ["su", "smo", "ste", "je"],
          correctAnswer: "su"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Ja sam iz Kijeva.'", ru: "Переведите: 'Ja sam iz Kijeva.'", ua: "Перекладіть: 'Ja sam iz Kijeva.'" },
          correctAnswer: { en: "I am from Kyiv.", ru: "Я из Киева.", ua: "Я з Києва." }
        },
        {
          type: "multiple-choice",
          question: { en: "Jeste _____ li umorni? (Are you [plural/formal] tired?)", ru: "Jeste _____ li umorni? (Вы устали?)", ua: "Jeste _____ li umorni? (Ви втомилися?)" },
          options: ["ste", "smo", "su", "si"],
          correctAnswer: "ste"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Mi _____ studenti. (We are students.)", ru: "Заполните: Mi _____ studenti. (Мы студенты.)", ua: "Заповніть: Mi _____ studenti. (Ми студенти.)" },
          correctAnswer: "smo",
          hint: { en: "We are", ru: "Мы есть (smo)", ua: "Ми є (smo)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kako se _____ ona? (What is her name?)", ru: "Kako se _____ ona? (Как её зовут?)", ua: "Kako se _____ ona? (Як її звати?)" },
          options: ["zove", "zovem", "zoveš", "zovu"],
          correctAnswer: "zove"
        }
      ]
    }
  },
  {
    id: "a1-reading-1",
    type: "reading",
    level: "A1",
    title: {
      en: "U kafiću (At the Cafe)",
      ru: "В кафе (U kafiću)",
      ua: "У кафе (U kafiću)"
    },
    content: {
      description: {
        en: "Read a simple dialogue in a Croatian cafe and answer comprehension questions.",
        ru: "Прочитайте простой диалог в хорватском кафе и ответьте на вопросы.",
        ua: "Прочитайте простий діалог у хорватському кафе та дайте відповіді."
      },
      sections: [
        {
          title: { en: "Dialogue", ru: "Диалог", ua: "Діалог" },
          text: {
            en: "Konobar: Dobar dan! Izvolite.\nAna: Dobar dan. Mogu li dobiti kavu s mlijekom?\nKonobar: Naravno. A za Vas?\nIvan: Ja ću čaj s limunom, molim.\nKonobar: U redu. Kava s mlijekom i čaj s limunom. Želite li vodu?\nAna: Da, gaziranu vodu, molim.\nIvan: Za mene negaziranu vodu.\nKonobar: Hvala, stiže odmah.",
            ru: "Официант: Добрый день! Пожалуйста.\nАна: Добрый день. Можно мне кофе с молоком?\nОфициант: Конечно. А для Вас?\nИван: Мне чай с лимоном, пожалуйста.\nОфициант: Хорошо. Кофе с молоком и чай с лимоном. Желаете воду?\nАна: Да, газированную воду, пожалуйста.\nИван: Мне негазированную воду.\nОфициант: Спасибо, сейчас принесу.",
            ua: "Офіціант: Добрий день! Прошу.\nАна: Добрий день. Можна мені каву з молоком?\nОфіціант: Звичайно. А для Вас?\nІван: Мені чай з лимоном, будь ласка.\nОфіціант: Добре. Кава з молоком і чай з лимоном. Бажаєте воду?\nАна: Так, газовану воду, будь ласка.\nІван: Мені негазовану воду.\nОфіціант: Дякую, зараз принесу."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "What does Ana want to drink?", ru: "Что хочет выпить Ана?", ua: "Що хоче випити Ана?" },
          options: ["Kavu s mlijekom", "Čaj s limunom", "Pivo", "Sok"],
          correctAnswer: "Kavu s mlijekom"
        },
        {
          type: "multiple-choice",
          question: { en: "What does Ivan order?", ru: "Что заказывает Иван?", ua: "Що замовляє Іван?" },
          options: ["Čaj s limunom", "Kavu s mlijekom", "Vodu", "Sok"],
          correctAnswer: "Čaj s limunom"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Mogu li dobiti _____ s mlijekom?", ru: "Заполните: Mogu li dobiti _____ s mlijekom?", ua: "Заповніть: Mogu li dobiti _____ s mlijekom?" },
          correctAnswer: "kavu",
          hint: { en: "coffee (accusative)", ru: "кофе (винительный падеж)", ua: "каву (знахідний відмінок)" }
        },
        {
          type: "multiple-choice",
          question: { en: "What kind of water does Ana want?", ru: "Какую воду хочет Ана?", ua: "Яку воду хоче Ана?" },
          options: ["Gaziranu (sparkling)", "Negaziranu (still)", "Hladnu (cold)", "Toplu (warm)"],
          correctAnswer: "Gaziranu (sparkling)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Ja ću čaj s _____ (lemon - instrumental).", ru: "Заполните: Ja ću čaj s _____ (лимон - творительный падеж).", ua: "Заповніть: Ja ću čaj s _____ (лимон - орудний відмінок)." },
          correctAnswer: "limunom",
          hint: { en: "with lemon", ru: "с лимоном", ua: "з лимоном" }
        },
        {
          type: "multiple-choice",
          question: { en: "What does 'stiže odmah' mean?", ru: "Что означает 'stiže odmah'?", ua: "Що означає 'stiže odmah'?" },
          options: ["Coming right up", "Goodbye", "Too expensive", "We don't have it"],
          correctAnswer: "Coming right up"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Dobar dan! Izvolite.'", ru: "Переведите: 'Dobar dan! Izvolite.'", ua: "Перекладіть: 'Dobar dan! Izvolite.'" },
          correctAnswer: { en: "Good day! Here you go.", ru: "Добрый день! Пожалуйста.", ua: "Добрий день! Прошу." }
        },
        {
          type: "multiple-choice",
          question: { en: "Who ordered negazirana voda?", ru: "Кто заказал негазированную воду?", ua: "Хто замовив негазовану воду?" },
          options: ["Ivan", "Ana", "Konobar", "Niko"],
          correctAnswer: "Ivan"
        }
      ]
    }
  },
  {
    id: "a1-dictation-1",
    type: "dictation",
    level: "A1",
    title: {
      en: "Osnovni pozdravi (Basic Greetings)",
      ru: "Основные приветствия (Osnovni pozdravi)",
      ua: "Основні вітання (Osnovni pozdravi)"
    },
    content: {
      description: {
        en: "Listen to basic Croatian greetings and write down what you hear.",
        ru: "Прослушайте базовые приветствия на хорватском языке и запишите услышанное.",
        ua: "Прослухайте базові вітання хорватською мовою та запишіть почуте."
      },
      dictationText: "Dobar dan! Kako si? Ja sam dobro, hvala. Kako se zoveš? Drago mi je. Zbogom i do viđenja!",
      exercises: [
        {
          type: "dictation",
          question: { en: "Listen and type: 'Dobar dan!'", ru: "Прослушайте и напишите: 'Dobar dan!'", ua: "Прослухайте та напишіть: 'Dobar dan!'" },
          correctAnswer: "Dobar dan!"
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'Kako si?'", ru: "Прослушайте и напишите: 'Kako si?'", ua: "Прослухайте та напишіть: 'Kako si?'" },
          correctAnswer: "Kako si?"
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'Ja sam dobro, hvala.'", ru: "Прослушайте и напишите: 'Ja sam dobro, hvala.'", ua: "Прослухайте та напишіть: 'Ja sam dobro, hvala.'" },
          correctAnswer: "Ja sam dobro, hvala."
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'Kako se zoveš?'", ru: "Прослушайте и напишите: 'Kako se zoveš?'", ua: "Прослухайте та напишіть: 'Kako se zoveš?'" },
          correctAnswer: "Kako se zoveš?"
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'Drago mi je.'", ru: "Прослушайте и напишите: 'Drago mi je.'", ua: "Прослухайте та напишіть: 'Drago mi je.'" },
          correctAnswer: "Drago mi je."
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'Zbogom'", ru: "Прослушайте и напишите: 'Zbogom'", ua: "Прослухайте та напишіть: 'Zbogom'" },
          correctAnswer: "Zbogom"
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'do viđenja!'", ru: "Прослушайте и напишите: 'do viđenja!'", ua: "Прослухайте та напишіть: 'do viđenja!'" },
          correctAnswer: "do viđenja!"
        },
        {
          type: "multiple-choice",
          question: { en: "What does 'Drago mi je' mean?", ru: "Что означает 'Drago mi je'?", ua: "Що означає 'Drago mi je'?" },
          options: ["Nice to meet you", "Thank you very much", "Good evening", "Excuse me"],
          correctAnswer: "Nice to meet you"
        }
      ]
    }
  },

  // ==========================================
  // LEVEL A2
  // ==========================================
  {
    id: "a2-grammar-1",
    type: "grammar",
    level: "A2",
    title: {
      en: "Vidovi akuzativa (Accusative Case)",
      ru: "Винительный падеж (Akuzativ)",
      ua: "Відмінки - Знахідний (Akuzativ)"
    },
    content: {
      description: {
        en: "Learn the accusative case (akuzativ) in Croatian — used for direct objects.",
        ru: "Изучите винительный падеж (akuzativ) в хорватском — используется для прямых дополнений.",
        ua: "Вивчіть знахідний відмінок (акузатив) у хорватській — використовується для прямого додатка."
      },
      sections: [
        {
          title: { en: "Accusative Endings", ru: "Окончания винительного падежа", ua: "Закінчення знахідного відмінка" },
          text: {
            en: "Accusative is used with transitive verbs (eg. vidjeti, kupiti). Endings:\n- Feminine singular: -a changes to -u (knjiga -> knjigu)\n- Masculine singular (inanimate): stays same as nominative (stol -> stol)\n- Masculine singular (animate): gets -a (brat -> brata)\n- Neuter singular: stays same as nominative (more -> more)",
            ru: "Винительный падеж используется с переходными глаголами. Окончания:\n- Женский род ед.ч.: -a меняется на -u (knjiga -> knjigu)\n- Мужской род неодуш.: совпадает с именительным (stol -> stol)\n- Мужской род одуш.: получает -a (brat -> brata)\n- Средний род ед.ч.: совпадает с именительным (more -> more)",
            ua: "Знахідний відмінок використовується з перехідними дієсловами. Закінчення:\n- Жіночий рід однини: -a змінюється на -u (knjiga -> knjigu)\n- Чоловічий рід неживий: збігається з називним (stol -> stol)\n- Чоловічий рід живий: отримує -a (brat -> brata)\n- Середній рід однини: збігається з називним (more -> more)"
          },
          examples: [
            { en: "Čitam knjigu. (I am reading a book.)", ru: "Čitam knjigu. (Я читаю книгу.)", ua: "Čitam knjigu. (Я читаю книгу.)" },
            { en: "Vidim prijatelja. (I see a friend [masc. animate]).", ru: "Vidim prijatelja. (Я вижу друга.)", ua: "Vidim prijatelja. (Я бачу друга.)" },
            { en: "Kupujem auto. (I am buying a car [masc. inanimate]).", ru: "Kupujem auto. (Я покупаю машину.)", ua: "Kupujem auto. (Я купую машину.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Čitam _____ (knjiga).", ru: "Čitam _____ (knjiga).", ua: "Čitam _____ (knjiga)." },
          options: ["knjigu", "knjiga", "knjigi", "knjigom"],
          correctAnswer: "knjigu"
        },
        {
          type: "multiple-choice",
          question: { en: "Vidim _____ (pas - animate). (I see a dog.)", ru: "Vidim _____ (pas). (Я вижу собаку.)", ua: "Vidim _____ (pas). (Я бачу собаку.)" },
          options: ["psa", "pas", "psu", "psom"],
          correctAnswer: "psa"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kupujem _____ (telefon - inanimate). (I am buying a phone.)", ru: "Заполните: Kupujem _____ (telefon). (Я покупаю телефон.)", ua: "Заповніть: Kupujem _____ (telefon). (Я купую телефон.)" },
          correctAnswer: "telefon",
          hint: { en: "Inanimate masculine singular stays the same", ru: "Неодушевленный мужской род не меняется", ua: "Неживий чоловічий рід не змінюється" }
        },
        {
          type: "multiple-choice",
          question: { en: "Poznajem tvoju _____ (sestra). (I know your sister.)", ru: "Poznajem tvoju _____ (sestra). (Я знаю твою сестру.)", ua: "Poznajem tvoju _____ (sestra). (Я знаю твою сестру.)" },
          options: ["sestru", "sestra", "sestri", "sestre"],
          correctAnswer: "sestru"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Volim _____ (more - neuter). (I love the sea.)", ru: "Заполните: Volim _____ (more). (Я люблю море.)", ua: "Заповніть: Volim _____ (more). (Я люблю море.)" },
          correctAnswer: "more",
          hint: { en: "Neuter stays the same", ru: "Средний род не меняется", ua: "Середній рід не змінюється" }
        },
        {
          type: "multiple-choice",
          question: { en: "Pijem _____ (kava). (I am drinking coffee.)", ru: "Pijem _____ (kava). (Я пью кофе.)", ua: "Pijem _____ (kava). (Я п'ю каву.)" },
          options: ["kavu", "kava", "kavi", "kave"],
          correctAnswer: "kavu"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Vidim brata.'", ru: "Переведите: 'Vidim brata.'", ua: "Перекладіть: 'Vidim brata.'" },
          correctAnswer: { en: "I see my brother.", ru: "Я вижу брата.", ua: "Я бачу брата." }
        },
        {
          type: "multiple-choice",
          question: { en: "Gledam _____ (film). (I am watching a film.)", ru: "Gledam _____ (film). (Я смотрю фильм.)", ua: "Gledam _____ (film). (Я дивлюся фільм.)" },
          options: ["film", "filma", "filmu", "filmom"],
          correctAnswer: "film"
        }
      ]
    }
  },
  {
    id: "a2-grammar-2",
    type: "grammar",
    level: "A2",
    title: {
      en: "Lokativ i prepozicije (Locative Case)",
      ru: "Предложный падеж (Lokativ)",
      ua: "Місцевий відмінок і прийменники (Lokativ)"
    },
    content: {
      description: {
        en: "Learn the locative case (lokativ) with prepositions 'u', 'na', and 'o' to describe location.",
        ru: "Изучите местный падеж (lokativ) с предлогами 'u', 'na' и 'o' для описания местоположения.",
        ua: "Вивчіть місцевий відмінок (lokativ) з прийменниками 'u', 'na' та 'o' для опису розташування."
      },
      sections: [
        {
          title: { en: "Locative Endings", ru: "Окончания местного падежа", ua: "Закінчення місцевого відмінка" },
          text: {
            en: "Locative is always used with prepositions (u = in, na = on, o = about). Endings:\n- Masculine and Neuter singular: -u (Zagreb -> u Zagrebu, more -> na moru)\n- Feminine singular: -i (škola -> u školi, stanica -> na stanici)",
            ru: "Местный падеж всегда употребляется с предлогами. Окончания:\n- Мужской и Средний род ед.ч.: -u (Zagreb -> u Zagrebu)\n- Женский род ед.ч.: -i (škola -> u školi)",
            ua: "Місцевий відмінок завжди вживається з прийменниками. Закінчення:\n- Чоловічий та Середній рід однини: -u (Zagreb -> u Zagrebu)\n- Жіночий рід однини: -i (škola -> u školi)"
          },
          examples: [
            { en: "Živim u Zagrebu. (I live in Zagreb.)", ru: "Živim u Zagrebu. (Я живу в Загребе.)", ua: "Živim u Zagrebu. (Я живу в Загребі.)" },
            { en: "Knjiga je na stolu. (The book is on the table.)", ru: "Knjiga je na stolu. (Книга на столе.)", ua: "Knjiga je na stolu. (Книга на столі.)" },
            { en: "Razgovaramo o školi. (We talk about school.)", ru: "Razgovaramo o školi. (Мы разговариваем о школе.)", ua: "Razgovaramo o školi. (Ми розмовляємо про школу.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Radim u _____ (ured). (I work in the office.)", ru: "Radim u _____ (ured). (Я работаю в офисе.)", ua: "Radim u _____ (ured). (Я працюю в офісі.)" },
          options: ["uredu", "ureda", "uredu", "uredom"],
          correctAnswer: "uredu"
        },
        {
          type: "multiple-choice",
          question: { en: "Djeca su u _____ (škola). (Children are at school.)", ru: "Djeca su u _____ (škola). (Дети в школе.)", ua: "Djeca su u _____ (škola). (Діти в школі.)" },
          options: ["školi", "školu", "škola", "škole"],
          correctAnswer: "školi"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kava je na _____ (stol). (The coffee is on the table.)", ru: "Заполните: Kava je na _____ (stol). (Кофе на столе.)", ua: "Заповніть: Kava je na _____ (stol). (Кава на столі.)" },
          correctAnswer: "stolu",
          hint: { en: "Masculine singular ending is -u", ru: "Окончание мужского рода — -u", ua: "Закінчення чоловічого роду — -u" }
        },
        {
          type: "multiple-choice",
          question: { en: "Mi smo na _____ (more). (We are at the sea.)", ru: "Mi smo na _____ (more). (Мы на море.)", ua: "Mi smo na _____ (more). (Ми на морі.)" },
          options: ["moru", "more", "mora", "morem"],
          correctAnswer: "moru"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Razgovaramo o _____ (Split). (We talk about Split.)", ru: "Заполните: Razgovaramo o _____ (Split). (Мы говорим о Сплите.)", ua: "Заповніть: Razgovaramo o _____ (Split). (Ми говоримо про Спліт.)" },
          correctAnswer: "Splitu",
          hint: { en: "Add -u to the town name", ru: "Добавьте -u к названию города", ua: "Додайте -u до назви міста" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kišobran je u _____ (torba). (The umbrella is in the bag.)", ru: "Kišobran je u _____ (torba). (Зонт в сумке.)", ua: "Kišobran je u _____ (torba). (Парасолька в сумці.)" },
          options: ["torbi", "torbu", "torbom", "torbe"],
          correctAnswer: "torbi"
        },
        {
          type: "translation",
          question: { en: "Translate: 'On je u Zagrebu.'", ru: "Переведите: 'On je u Zagrebu.'", ua: "Перекладіть: 'On je u Zagrebu.'" },
          correctAnswer: { en: "He is in Zagreb.", ru: "Он в Загребе.", ua: "Він у Загребі." }
        },
        {
          type: "multiple-choice",
          question: { en: "Sastanak je na _____ (fakultet). (The meeting is at the university.)", ru: "Sastanak je na _____ (fakultet). (Встреча в университете.)", ua: "Sustret je na _____ (fakultet). (Зустріч в університеті.)" },
          options: ["fakultetu", "fakulteta", "fakultetom", "fakultete"],
          correctAnswer: "fakultetu"
        }
      ]
    }
  },
  {
    id: "a2-communication-1",
    type: "communication",
    level: "A2",
    title: {
      en: "U restoranu (At the Restaurant)",
      ru: "В ресторане (U restoranu)",
      ua: "У ресторані (U restoranu)"
    },
    content: {
      description: {
        en: "Practice ordering food and drinks at a Croatian restaurant.",
        ru: "Потренируйтесь заказывать еду и напитки в хорватском ресторане.",
        ua: "Потренуйтеся замовляти їжу та напої в хорватському ресторані."
      },
      sections: [
        {
          title: { en: "Useful Phrases", ru: "Полезные фразы", ua: "Корисні фрази" },
          text: {
            en: "Essential phrases for dining out in Croatia:",
            ru: "Ключевые фразы для похода в ресторан в Хорватии:",
            ua: "Ключові фрази для походу в ресторан у Хорватії:"
          },
          examples: [
            { en: "Mogu li dobiti jelovnik? — Can I get the menu?", ru: "Mogu li dobiti jelovnik? — Можно меню?", ua: "Mogu li dobiti jelovnik? — Можна меню?" },
            { en: "Što preporučujete? — What do you recommend?", ru: "Što preporučujete? — Что вы порекомендуете?", ua: "Što preporučujete? — Що ви порадите?" },
            { en: "Želim naručiti... — I would like to order...", ru: "Želim naručiti... — Я хочу заказать...", ua: "Želim naručiti... — Я хочу замовити..." }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "How do you ask for the menu?", ru: "Как попросить меню?", ua: "Як попросити меню?" },
          options: ["Mogu li dobiti jelovnik?", "Koliko košta?", "Gdje je WC?", "Kako se zovete?"],
          correctAnswer: "Mogu li dobiti jelovnik?"
        },
        {
          type: "translation",
          question: { en: "Translate: 'The bill, please.'", ru: "Переведите: 'Счет, пожалуйста.'", ua: "Перекладіть: 'Рахунок, будь ласка.'" },
          correctAnswer: "Račun, molim."
        },
        {
          type: "multiple-choice",
          question: { en: "What does the phrase 'Što preporučujete?' mean?", ru: "Что означает фраза 'Što preporučujete?'?", ua: "Що означає фраза 'Što preporučujete?'?" },
          options: ["What do you recommend?", "What would you like to drink?", "How much does it cost?", "Where is the table?"],
          correctAnswer: "What do you recommend?"
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'Can I get a glass of water?'", ru: "Переведите на хорватский: 'Можно стакан воды?'", ua: "Перекладіть на хорватську: 'Можна склянку води?'" },
          correctAnswer: "Mogu li dobiti čašu vode."
        },
        {
          type: "multiple-choice",
          question: { en: "How do you express 'It was excellent!' in Croatian?", ru: "Как сказать 'Было отлично/великолепно!' по-хорватски?", ua: "Як сказати 'Було чудово/прекрасно!' хорватською?" },
          options: ["Bilo je izvrsno!", "Dobar tek!", "U redu je", "Nema na čemu"],
          correctAnswer: "Bilo je izvrsno!"
        },
        {
          type: "multiple-choice",
          question: { en: "What is 'konobar' in English?", ru: "Что такое 'konobar'?", ua: "Хто такий 'konobar'?" },
          options: ["waiter", "chef", "manager", "cashier"],
          correctAnswer: "waiter"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Dobar _____! (Bon appetit!)", ru: "Заполните: Dobar _____! (Приятного аппетита!)", ua: "Заповніть: Dobar _____! (Приємного апетиту!)" },
          correctAnswer: "tek",
          hint: { en: "tek", ru: "tek", ua: "tek" }
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'I want to order meat.'", ru: "Переведите на хорватский: 'Я хочу заказать мясо.'", ua: "Перекладіть на хорватську: 'Я хочу замовити м'ясо.'" },
          correctAnswer: "Želim naručiti meso."
        }
      ]
    }
  },

  // ==========================================
  // LEVEL B1
  // ==========================================
  {
    id: "b1-grammar-1",
    type: "grammar",
    level: "B1",
    title: {
      en: "Glagolski aspekt (Verb Aspect)",
      ru: "Вид глагола (Glagolski aspekt)",
      ua: "Вид дієслова (Glagolski aspekt)"
    },
    content: {
      description: {
        en: "Understand the perfective and imperfective verb aspects in Croatian.",
        ru: "Поймите совершенный и несовершенный виды глаголов в хорватском языке.",
        ua: "Зрозумійте доконаний та недоконаний види дієслів у хорватській мові."
      },
      sections: [
        {
          title: { en: "Verb Aspects", ru: "Виды глаголов", ua: "Види дієслів" },
          text: {
            en: "Croatian verbs come in pairs: imperfective (ongoing/repeated) and perfective (completed/one-time).",
            ru: "Хорватские глаголы образуют видовые пары: несовершенный вид (длящееся/повторяющееся действие) и совершенный (завершенное/однократное).",
            ua: "Хорватські дієслова утворюють видові пари: недоконаний вид (тривала/повторювана дія) та доконаний (завершена/одноразова)."
          },
          examples: [
            { en: "pisati (impf.) / napisati (pf.) — to write", ru: "pisati (нсв) / napisati (св) — писать / написать", ua: "pisati (нсв) / napisati (св) — писати / написати" },
            { en: "čitati (impf.) / pročitati (pf.) — to read", ru: "čitati (нсв) / pročitati (св) — читать / прочитать", ua: "čitati (нсв) / pročitati (св) — читати / прочитати" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Jučer sam _____ cijelu knjigu. (Yesterday I read the whole book.) — completed", ru: "Jučer sam _____ cijelu knjigu. (Вчера я прочитал всю книгу.) — завершенное", ua: "Jučer sam _____ cijelu knjigu. (Вчора я прочитав всю книгу.) — завершена" },
          options: ["pročitao", "čitao", "čitam", "pročitam"],
          correctAnswer: "pročitao"
        },
        {
          type: "multiple-choice",
          question: { en: "Svaki dan _____ novine. (Every day I read newspapers.) — habitual", ru: "Svaki dan _____ novine. (Каждый день я читаю газеты.) — регулярное", ua: "Svaki dan _____ novine. (Щодня я читаю газети.) — регулярна" },
          options: ["čitam", "pročitam", "pročitao sam", "čitat ću"],
          correctAnswer: "čitam"
        },
        {
          type: "multiple-choice",
          question: { en: "He usually writes letters, but today he wrote one in ten minutes.", ru: "Обычно он пишет письмо, но сегодня он написал его за 10 минут.", ua: "Зазвичай він пише листа, але сьогодні він написав його за 10 хвилин." },
          options: [
            "Obično piše pismo... danas ga je napisao",
            "Obično napiše pismo... danas ga je pisao",
            "Obično pisao pismo... danas ga je piše",
            "Obično piše pismo... danas ga piše"
          ],
          correctAnswer: "Obično piše pismo... danas ga je napisao"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Jučer sam _____ (pisati, impf. past masc) zadaću tri sata.", ru: "Заполните: Jučer sam _____ (pisati, нсв прош. м.р.) zadaću tri sata.", ua: "Заповніть: Jučer sam _____ (pisati, недок. в. мин. ч. ч.р.) zadaću tri sata." },
          correctAnswer: "pisao",
          hint: { en: "Use masculine past form", ru: "Мужской род прош. вр.", ua: "Чоловічий рід мин. ч." }
        },
        {
          type: "multiple-choice",
          question: { en: "Moram _____ (naučiti, perfective) ove riječi do sutra. (I must learn these words by tomorrow.)", ru: "Moram _____ (naučiti, св) ove riječi do sutra.", ua: "Moram _____ (naučiti, док. в.) ove riječi do sutra." },
          options: ["naučiti", "učiti", "naučim", "učim"],
          correctAnswer: "naučiti"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Brzo sam _____ (popiti, pf. past masc) kavu. (I quickly drank the coffee.)", ru: "Заполните: Brzo sam _____ (popiti, св прош. м.р.) kavu.", ua: "Заповніть: Brzo sam _____ (popiti, док. в. мин. ч. ч.р.) kavu." },
          correctAnswer: "popio",
          hint: { en: "perfective past form of popiti", ru: "форма св от popiti", ua: "форма док. в. від popiti" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Oni uvijek piju kavu.'", ru: "Переведите: 'Oni uvijek piju kavu.'", ua: "Перекладіть: 'Oni uvijek piju kavu.'" },
          correctAnswer: { en: "They always drink coffee.", ru: "Они всегда пьют кофе.", ua: "Вони завжди п'ють каву." }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ sam pismo pola sata. (I was writing a letter for half an hour. - ongoing)", ru: "_____ sam pismo pola sata. (Я писал письмо полчаса.)", ua: "_____ sam pismo pola sata. (Я писав листа півгодини.)" },
          options: ["Pisao", "Napisao", "Pišem", "Napišem"],
          correctAnswer: "Pisao"
        }
      ]
    }
  },
  {
    id: "b1-grammar-2",
    type: "grammar",
    level: "B1",
    title: {
      en: "Zemlje, jezici i Futur II (Countries, Languages & Future II)",
      ru: "Страны, языки и Futur II",
      ua: "Країни, мови та Futur II"
    },
    content: {
      description: {
        en: "Learn names of countries, languages and master Future II (Futur drugi) in subordinate clauses.",
        ru: "Изучите названия стран, языков и освойте Futur II в придаточных предложениях.",
        ua: "Вивчіть назви країн, мов та опануйте Futur II у підрядних реченнях."
      },
      sections: [
        {
          title: { en: "Future II", ru: "Будущее время II", ua: "Майбутній час II" },
          text: {
            en: "Future II is used in conditional and temporal subordinate clauses to describe an action that will happen before another future action. Formed with: budem, budeš, bude, budemo, budete, budu + active participle (-o, -la, -lo).",
            ru: "Futur II используется в придаточных времени и условия, выражая действие, которое завершится перед другим будущим действием. Образуется: budem, budeš... + причастие.",
            ua: "Futur II використовується у підрядних реченнях часу та умови, виражаючи дію, що завершиться перед іншою майбутньою дією. Утворюється: budem, budeš... + дієприкметник."
          },
          examples: [
            { en: "Ako budem imao vremena, doći ću. (If I have time, I will come.)", ru: "Ako budem imao vremena, doći ću. (Если у меня будет время, я приду.)", ua: "Ako budem imao vremena, doći ću. (Якщо у мене буде час, я прийду.)" },
            { en: "Njemačka - njemački (Germany - German)", ru: "Njemačka - njemački (Германия - немецкий)", ua: "Njemačka - njemački (Німеччина - німецька)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Ako _____ (budem imao) vremena, čitat ću knjigu. (If I have time...)", ru: "Ako _____ vremena, čitat ću knjigu.", ua: "Ako _____ vremena, čitat ću knjigu." },
          options: ["budem imao", "ću imati", "imam", "bih imao"],
          correctAnswer: "budem imao"
        },
        {
          type: "multiple-choice",
          question: { en: "U Njemačkoj se govori _____ jezik. (In Germany, people speak...)", ru: "U Njemačkoj se govori _____ jezik.", ua: "U Німеччині говорять _____ мовою." },
          options: ["njemački", "engleski", "hrvatski", "talijanski"],
          correctAnswer: "njemački"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kad _____ (budu stigli, they arrive), javit će se. (When they arrive, they will check in.)", ru: "Заполните: Kad _____ na stanicu, javit će se. (Когда они прибудут на станцию...)", ua: "Заповніть: Kad _____ na stanicu, javit će se. (Коли вони прибудуть на станцію...)" },
          correctAnswer: "budu stigli",
          hint: { en: "Future II plural of stići", ru: "Futur II мн.ч. от stići", ua: "Futur II мн. від stići" }
        },
        {
          type: "multiple-choice",
          question: { en: "Francuska -> _____ jezik.", ru: "Francuska -> _____ jezik.", ua: "Francuska -> _____ jezik." },
          options: ["francuski", "talijanski", "španjolski", "njemački"],
          correctAnswer: "francuski"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Ako ti _____ (budeš učio), položit ćeš ispit. (If you study...)", ru: "Заполните: Ako ti _____ (budeš učio), položit ćeš ispit.", ua: "Заповніть: Ako ti _____ (budeš učio), položit ćeš ispit." },
          correctAnswer: "budeš učio",
          hint: { en: "Future II for 'ti' (masc)", ru: "Futur II для 'ti' (м.р.)", ua: "Futur II для 'ti' (ч.р.)" }
        },
        {
          type: "multiple-choice",
          question: { en: "In Italy, they speak:", ru: "В Италии говорят на:", ua: "В Італії говорять:" },
          options: ["talijanski", "engleski", "hrvatski", "njemački"],
          correctAnswer: "talijanski"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Ako budemo znali odgovor, reći ćemo vam.'", ru: "Переведите: 'Ako budemo znali odgovor, reći ćemo vam.'", ua: "Перекладіть: 'Ako budemo znali odgovor, reći ćemo vam.'" },
          correctAnswer: { en: "If we know the answer, we will tell you.", ru: "Если мы будем знать ответ, мы скажем вам.", ua: "Якщо ми будемо знати відповідь, ми скажемо вам." }
        },
        {
          type: "multiple-choice",
          question: { en: "Ukrajina -> _____ jezik.", ru: "Ukrajina -> _____ jezik.", ua: "Ukrajina -> _____ jezik." },
          options: ["ukrajinski", "ruski", "poljski", "češki"],
          correctAnswer: "ukrajinski"
        }
      ]
    }
  },
  {
    id: "b1-grammar-3",
    type: "grammar",
    level: "B1",
    title: {
      en: "Perfekt i prepozicije s genitivom (Past Tense & Genitive Prepositions)",
      ru: "Прошедшее время и предлоги родительного падежа",
      ua: "Минулий час та прийменники з родовим відмінком"
    },
    content: {
      description: {
        en: "Master past tense (perfekt) combinations and learn prepositions that require Genitive: bez, kod, blizu, iz.",
        ru: "Освойте конструкции прошедшего времени (перфект) и предлоги родительного падежа: bez, kod, blizu, iz.",
        ua: "Опануйте конструкції минулого часу (перфект) та прийменники родового відмінка: bez, kod, blizu, iz."
      },
      sections: [
        {
          title: { en: "Past Tense and Genitive", ru: "Прошедшее время и родительный падеж", ua: "Минулий час та родовий відмінок" },
          text: {
            en: "Perfekt = short form of 'biti' + active participle (eg. ja sam radio, mi smo jeli). Prepositions requiring genitive:\n- bez (without) -> bez šećera\n- kod (at/to) -> kod prijatelja\n- blizu (near) -> blizu mora\n- iz (from) -> iz ureda",
            ru: "Перфект = краткая форма 'biti' + причастие. Предлоги родительного падежа:\n- bez (без) -> bez šećera\n- kod (у/к) -> kod prijatelja\n- blizu (около) -> blizu mora\n- iz (из) -> iz ureda",
            ua: "Перфект = коротка форма 'biti' + дієприкметник. Прийменники родового відмінка:\n- bez (без) -> bez šećera\n- kod (у/до) -> kod prijatelja\n- blizu (поблизу) -> blizu mora\n- iz (з) -> iz ureda"
          },
          examples: [
            { en: "Jučer sam išao kod liječnika. (Yesterday I went to the doctor.)", ru: "Jučer sam išao kod liječnika. (Вчера я ходил к врачу.)", ua: "Jučer sam išao kod liječnika. (Вчора я ходив до лікаря.)" },
            { en: "Kava bez šećera. (Coffee without sugar.)", ru: "Kava bez šećera. (Кофе без сахара.)", ua: "Kava bez šećera. (Кава без цукру.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Jučer smo _____ (gledati - plural) film. (Yesterday we watched a movie.)", ru: "Jučer smo _____ film. (Вчера мы смотрели фильм.)", ua: "Вчора ми _____ фільм." },
          options: ["gledali", "gledao", "gledala", "gledati"],
          correctAnswer: "gledali"
        },
        {
          type: "multiple-choice",
          question: { en: "Pijem čaj bez _____ (šećer - genitive). (I drink tea without sugar.)", ru: "Pijem čaj bez _____ (šećer).", ua: "П'ю чай без _____ (šećer)." },
          options: ["šećera", "šećer", "šećeru", "šećerom"],
          correctAnswer: "šećera"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Danas idem kod _____ (doktor - genitive). (Today I go to the doctor.)", ru: "Заполните: Danas idem kod _____ (doktor). (Сегодня я иду к врачу.)", ua: "Заповніть: Danas idem kod _____ (doktor). (Сьогодні я йду до лікаря.)" },
          correctAnswer: "doktora",
          hint: { en: "Genitive singular of doktor", ru: "Родительный падеж от doktor", ua: "Родовий відмінок від doktor" }
        },
        {
          type: "multiple-choice",
          question: { en: "Živim blizu _____ (more - genitive). (I live near the sea.)", ru: "Živim blizu _____ (more). (Я живу около моря.)", ua: "Живу поблизу _____ (more)." },
          options: ["mora", "more", "moru", "morem"],
          correctAnswer: "mora"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Oni su _____ (putovati, past plural masc) u Zadar. (They traveled to Zadar.)", ru: "Заполните: Oni su _____ u Zadar. (Они ездили в Задар.)", ua: "Заповніть: Oni su _____ u Zadar. (Вони їздили до Задара.)" },
          correctAnswer: "putovali",
          hint: { en: "Past participle plural of putovati", ru: "Причастие мн.ч. от putovati", ua: "Дієприкметник мн. від putovati" }
        },
        {
          type: "multiple-choice",
          question: { en: "Dolazim iz _____ (škola - genitive). (I come from school.)", ru: "Dolazim iz _____ (škola). (Я иду из школы.)", ua: "Йду з _____ (škola)." },
          options: ["škole", "školu", "školi", "školom"],
          correctAnswer: "škole"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Kava bez mlijeka, molim.'", ru: "Переведите: 'Kava bez mlijeka, molim.'", ua: "Перекладіть: 'Kava bez mlijeka, molim.'" },
          correctAnswer: { en: "Coffee without milk, please.", ru: "Кофе без молока, пожалуйста.", ua: "Кава без молока, будь ласка." }
        },
        {
          type: "multiple-choice",
          question: { en: "Jesi li _____ (čuti - singular masc) vijest? (Did you hear the news?)", ru: "Jesi li _____ vijest? (Ты слышал новость?)", ua: "Чи ти _____ новину?" },
          options: ["čuo", "čula", "čuli", "čuti"],
          correctAnswer: "čuo"
        }
      ]
    }
  },
  {
    id: "b1-reading-2",
    type: "reading",
    level: "B1",
    title: {
      en: "Kvaliteta života i ekologija (Quality of Life & Ecology)",
      ru: "Качество жизни и экология (Kvaliteta života)",
      ua: "Якість життя та екологія (Kvaliteta života)"
    },
    content: {
      description: {
        en: "Read a short text about environmental protection and standard of living in Croatia.",
        ru: "Прочитайте короткий текст об охране окружающей среды и качестве жизни в Хорватии.",
        ua: "Прочитайте про проблеми екології та стандарти якості життя в Хорватії."
      },
      sections: [
        {
          title: { en: "Ecology in Croatia", ru: "Экология в Хорватии", ua: "Екологія в Хорватії" },
          text: {
            en: "Zaštita okoliša i ekologija postaju sve važnije teme u Hrvatskoj. Zemlja je poznata po čistom moru, brojnim nacionalnim parkovima i bogatoj biološkoj raznolikosti. Međutim, brzi turistički razvoj i zbrinjavanje otpada predstavljaju velike izazove. Mnogi gradovi potiču razvrstavanje otpada i recikliranje. Građani također shvaćaju da očuvanje prirode izravno utječe na kvalitetu života i na zdravlje svih nas.",
            ru: "Охрана окружающей среды и экология становятся всё более важными темами в Хорватии. Страна известна своим чистым морем, многочисленными национальными парками и богатым биоразнообразием. Однако быстрое развитие туризма и утилизация отходов представляют собой серьезные вызовы. Многие города стимулируют сортировку мусора и переработку. Граждане также понимают, что сохранение природы напрямую влияет на качество жизни и здоровье всех нас.",
            ua: "Охорона довкілля та екологія стають дедалі важливішими темами в Хорватії. Країна відома своїм чистим морем, численними національними парками та багатим біорізноманіттям. Проте швидкий розвиток туризму та утилізація відходів є серйозними викликами. Багато міст стимулюють сортування сміття та переробку. Громадяни також розуміють, що збереження природи безпосередньо впливає на якість життя та здоров'я всіх нас."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Why is Croatia famous in terms of nature?", ru: "Чем знаменита Хорватия в плане природы?", ua: "Чим відома Хорватія в плані природи?" },
          options: ["Čisto more i parkovi", "Velike pustinje", "Zagađene rijeke", "Visoke zgrade"],
          correctAnswer: "Čisto more i parkovi"
        },
        {
          type: "multiple-choice",
          question: { en: "What represents a big challenge for ecology in Croatia?", ru: "Что представляет собой вызов для экологии Хорватии?", ua: "Що є викликом для екології Хорватії?" },
          options: ["Turistički razvoj i otpad", "Sadnja stabala", "Nedostatak automobila", "Velike kiše"],
          correctAnswer: "Turistički razvoj i otpad"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Zaštita _____ (environment - genitive) je važna.", ru: "Заполните: Zaštita _____ je važna. (Охрана окружающей среды важна.)", ua: "Заповніть: Zaštita _____ je važna. (Охорона довкілля важлива.)" },
          correctAnswer: "okoliša",
          hint: { en: "Genitive singular of okoliš", ru: "Родительный падеж от okoliš", ua: "Родовий відмінок від okoliš" }
        },
        {
          type: "multiple-choice",
          question: { en: "What are cities encouraging citizens to do?", ru: "К чему города призывают граждан?", ua: "До чого міста закликають громадян?" },
          options: ["Razvrstavanje otpada", "Kupovinu plastike", "Bacanje smeća na ulicu", "Vožnju automobila"],
          correctAnswer: "Razvrstavanje otpada"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Očuvanje prirode utječe na _____ (quality - accusative) života.", ru: "Заполните: Očuvanje prirode utječe na _____ života. (Влияет на качество жизни.)", ua: "Заповніть: Očuvanje prirode utječe na _____ života. (Впливає на якість життя.)" },
          correctAnswer: "kvalitetu",
          hint: { en: "Accusative of kvaliteta", ru: "Винительный падеж от kvaliteta", ua: "Знахідний відмінок від kvaliteta" }
        },
        {
          type: "multiple-choice",
          question: { en: "What does 'razvrstavanje' mean?", ru: "Что означает 'razvrstavanje'?", ua: "Що означає 'razvrstavanje'?" },
          options: ["sorting", "buying", "throwing", "burning"],
          correctAnswer: "sorting"
        },
        {
          type: "translation",
          question: { en: "Translate: 'očuvanje prirode'", ru: "Переведите: 'očuvanje prirode'", ua: "Перекладіть: 'očuvanje prirode'" },
          correctAnswer: { en: "preservation of nature", ru: "сохранение природы", ua: "збереження природи" }
        },
        {
          type: "multiple-choice",
          question: { en: "What is 'otpad' in English?", ru: "Что такое 'otpad'?", ua: "Що таке 'otpad'?" },
          options: ["waste/garbage", "resource", "factory", "water"],
          correctAnswer: "waste/garbage"
        }
      ]
    }
  },
  {
    id: "b1-reading-3",
    type: "reading",
    level: "B1",
    title: {
      en: "Priprema za ispit B1: Znanje jezika (B1 Exam Prep)",
      ru: "Подготовка к экзамену B1: Знание языка",
      ua: "Підготовка до іспиту B1: Знання мови"
    },
    content: {
      description: {
        en: "Practice grammar and vocabulary questions typical for the B1 level Croatian proficiency exam.",
        ru: "Потренируйтесь на грамматических и лексических вопросах, типичных для языкового экзамена уровня B1.",
        ua: "Потренуйтеся на граматичних та лексичних питаннях, типових для іспиту B1."
      },
      sections: [
        {
          title: { en: "Exam Context", ru: "Контекст экзамена", ua: "Контекст іспиту" },
          text: {
            en: "On a B1 language exam, you will encounter reading comprehension tasks, grammar completion (filling in correct endings or pronouns), and vocabulary matching. Let's practice standard queries.",
            ru: "На экзамене уровня B1 вы столкнетесь с заданиями на чтение, грамматическими упражнениями (подстановка падежных окончаний, местоимений) и лексическими тестами.",
            ua: "На іспиті рівня B1 ви зустрінете завдання на розуміння тексту, граматичні вправи (вставка відмінкових закінчень або займенників) та лексичні тести."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Oni se _____ (tuširati, present plural). (They are showering.)", ru: "Oni se _____ (tuširati, наст. вр. мн.ч.).", ua: "Вони _____ (tuširati, теп. ч. мн.)." },
          options: ["tuširaju", "tušira", "tuširamo", "tuširaš"],
          correctAnswer: "tuširaju"
        },
        {
          type: "multiple-choice",
          question: { en: "Želim razgovarati s _____ (direktor - instrumental). (I want to speak with the director.)", ru: "Želim razgovarati s _____ (direktor).", ua: "Хочу поговорити з _____ (direktor)." },
          options: ["direktorom", "direktora", "direktoru", "direktore"],
          correctAnswer: "direktorom"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Idem u _____ (trgovina - accusative). (I go to the store.)", ru: "Заполните: Idem u _____ (trgovina). (Я иду в магазин.)", ua: "Заповніть: Idem u _____ (trgovina). (Я йду в магазин.)" },
          correctAnswer: "trgovinu",
          hint: { en: "Feminine singular accusative", ru: "Винительный падеж ж.р.", ua: "Знахідний відмінок ж.р." }
        },
        {
          type: "multiple-choice",
          question: { en: "Ovo je kuća _____ (moj - genitive feminine singular) bake. (This is the house of my grandmother.)", ru: "Ovo je kuća _____ bake.", ua: "Це будинок _____ бабусі." },
          options: ["moje", "mojoj", "moju", "mojom"],
          correctAnswer: "moje"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kupio sam knjigu _____ (prijatelj - dative). (I bought a book for my friend.)", ru: "Заполните: Kupio sam knjigu _____ (prijatelj). (Я купил книгу другу.)", ua: "Заповніть: Kupio sam knjigu _____ (prijatelj). (Я купив книгу другові.)" },
          correctAnswer: "prijatelju",
          hint: { en: "Dative singular of prijatelj", ru: "Дательный падеж от prijatelj", ua: "Давальний відмінок від prijatelj" }
        },
        {
          type: "multiple-choice",
          question: { en: "Koji je dan nakon nedjelje?", ru: "Какой день идет после воскресенья?", ua: "Який день йде після неділі?" },
          options: ["ponedjeljak", "utorak", "srijeda", "subota"],
          correctAnswer: "ponedjeljak"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Oni su u kući.'", ru: "Переведите: 'Oni su u kući.'", ua: "Перекладіть: 'Oni su u kući.'" },
          correctAnswer: { en: "They are in the house.", ru: "Они в доме.", ua: "Вони в будинку." }
        },
        {
          type: "multiple-choice",
          question: { en: "Nemam _____ (novac - genitive). (I don't have money.)", ru: "Nemam _____ (novac).", ua: "Не маю _____ (novac)." },
          options: ["novca", "novac", "novcu", "novcem"],
          correctAnswer: "novca"
        }
      ]
    }
  },

  // ==========================================
  // LEVEL B2
  // ==========================================
  {
    id: "b2-grammar-1",
    type: "grammar",
    level: "B2",
    title: {
      en: "Pasivni stan i glagolske imenice (Passive & Verbal Nouns)",
      ru: "Пассивный залог и отглагольные имена (Pasivni stan)",
      ua: "Відносини, пасивний стан та отглагольные іменники (Pasivni stan)"
    },
    content: {
      description: {
        en: "Learn how to use passive voice constructions and form verbal nouns in B2 level Croatian.",
        ru: "Научитесь использовать пассивный залог и образовывать отглагольные существительные на уровне B2.",
        ua: "Навчіться використовувати пасивний стан та утворювати віддієслівні іменники на рівні B2."
      },
      sections: [
        {
          title: { en: "Passive and Verbal Nouns", ru: "Пассивный залог и отглагольные имена", ua: "Пасивний стан та віддієслівні іменники" },
          text: {
            en: "Passive voice is formed either reflexively (se + present active, eg. knjiga se čita) or descriptively (biti + passive participle, eg. knjiga je pročitana). Verbal nouns are formed using the suffix -nje with verbs (učiti -> učenje, pisati -> pisanje).",
            ru: "Пассивный залог образуется либо возвратным способом (se + глагол, например, kuća se gradi), либо описательным (biti + страдательное причастие, например, projekt je završen). Отглагольные существительные образуются с суффиксом -nje.",
            ua: "Пасивний стан утворюється або зворотним способом (se + дієслово, наприклад, kuća se gradi), або описовим (biti + пасивний дієприкметник, наприклад, projekt je završen). Віддієслівні іменники утворюються з суфіксом -nje."
          },
          examples: [
            { en: "Učenje jezika je zanimljivo. (Learning a language is interesting.)", ru: "Učenje jezika je zanimljivo. (Изучение языка интересно.)", ua: "Učenje jezika je zanimljivo. (Вивчення мови цікаве.)" },
            { en: "Ova knjiga je tiskana u Zagrebu. (This book was printed in Zagreb.)", ru: "Ova knjiga je tiskana u Zagrebu. (Эта книга была напечатана в Загребе.)", ua: "Ova knjiga je tiskana u Zagrebu. (Ця книга була надрукована в Загребі.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Kuća se _____ (is being built) u centru grada.", ru: "Kuća se _____ (строится) в центре города.", ua: "Будинок _____ (будується) в центрі міста." },
          options: ["gradi", "graditi", "gradila", "grade"],
          correctAnswer: "gradi"
        },
        {
          type: "multiple-choice",
          question: { en: "_____ (learning) jezika traži vremena. (Learning a language takes time.)", ru: "_____ (изучение) языка требует времени.", ua: "_____ (вивчення) мови потребує часу." },
          options: ["Učenje", "Učiti", "Učenik", "Učenost"],
          correctAnswer: "Učenje"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Projekt je _____ (finish - passive participle masc). (The project is completed.)", ru: "Заполните: Projekt je _____ (završiti - страд. причастие). (Проект завершен.)", ua: "Заповніть: Projekt je _____ (završiti - пасивний дієприкметник). (Проект завершено.)" },
          correctAnswer: "završen",
          hint: { en: "Masculine passive form of završiti", ru: "Форма м.р. от završiti", ua: "Форма ч.р. від završiti" }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ (writing) ovog pisma je bilo teško.", ru: "_____ (написание) этого письма было трудным.", ua: "_____ (написання) цього листа було важким." },
          options: ["Pisanje", "Pisati", "Pisac", "Pismeno"],
          correctAnswer: "Pisanje"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Čaša je _____ (slomiti - passive participle fem). (The glass is broken.)", ru: "Заполните: Čaša je _____ (slomiti - страд. причастие ж.р.). (Чашка сломана.)", ua: "Заповніть: Čaša je _____ (slomiti - пасивний дієприкметник ж.р.). (Чашка зламана.)" },
          correctAnswer: "slomljena",
          hint: { en: "Feminine passive form of slomiti", ru: "Форма ж.р. от slomiti", ua: "Форма жіночого роду від slomiti" }
        },
        {
          type: "multiple-choice",
          question: { en: "Pismo je _____ (napisati - passive participle neuter). (The letter was written.)", ru: "Pismo je _____ (napisati - страд. причастие ср.р.). (Письмо написано.)", ua: "Лист був _____ (napisati - пасивний дієприкметник с.р.). (Лист написаний.)" },
          options: ["napisano", "napisana", "napisan", "napisani"],
          correctAnswer: "napisano"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Čitanje knjiga je korisno.'", ru: "Переведите: 'Čitanje knjiga je korisno.'", ua: "Перекладіть: 'Čitanje knjiga je korisno.'" },
          correctAnswer: { en: "Reading books is useful.", ru: "Чтение книг полезно.", ua: "Читання книг корисне." }
        },
        {
          type: "multiple-choice",
          question: { en: "Ugovor je _____ (potpisati - passive participle masc). (The contract is signed.)", ru: "Ugovor je _____ (potpisati - страд. причастие м.р.). (Договор подписан.)", ua: "Договір був _____ (potpisati - пасивний дієприкметник ч.р.). (Договір підписаний.)" },
          options: ["potpisan", "potpisana", "potpisano", "potpisani"],
          correctAnswer: "potpisan"
        }
      ]
    }
  },
  {
    id: "b2-grammar-2",
    type: "grammar",
    level: "B2",
    title: {
      en: "Kondicional I i II (Conditionals I & II)",
      ru: "Условное наклонение I и II (Kondicional)",
      ua: "Умовний спосіб I та II (Kondicional)"
    },
    content: {
      description: {
        en: "Learn how to formulate present and past hypotheticals using Conditional I and II in Croatian.",
        ru: "Научитесь формулировать гипотезы в настоящем и прошлом с помощью условного наклонения I и II.",
        ua: "Навчіться формулювати гіпотези в теперішньому та минулому за допомогою умовного способу I та II."
      },
      sections: [
        {
          title: { en: "Conditionals", ru: "Условное наклонение", ua: "Умовний спосіб" },
          text: {
            en: "Conditional I (present hypothetical): clitic of 'biti' in conditional (bih, bi, bi, bismo, biste, bi) + active participle. E.g. Kupio bih auto (I would buy a car).\nConditional II (past hypothetical): Conditional I of 'biti' (bio bih, bio bi...) + active participle. E.g. Bio bih došao (I would have come).",
            ru: "Conditional I (настоящее): частицы bih, bi... + причастие. Пример: Kupio bih auto (Я бы купил машину).\nConditional II (прошлое): условная форма глагола 'biti' + причастие. Пример: Bio bih došao (Я бы пришел).",
            ua: "Conditional I (теперішнє): частки bih, bi... + дієприкметник. Приклад: Kupio bih auto (Я б купив машину).\nConditional II (минуле): умовна форма дієслова 'biti' + дієприкметник. Приклад: Bio bih došao (Я б прийшов)."
          },
          examples: [
            { en: "Da imam novca, putovao bih. (If I had money, I would travel.)", ru: "Da imam novca, putovao bih. (Если бы у меня были деньги, я бы путешествовал.)", ua: "Da imam novca, putovao bih. (Якби у мене були гроші, я б подорожував.)" },
            { en: "Da sam znao, bio bih ti pomogao. (If I had known, I would have helped you.)", ru: "Da sam znao, bio bih ti pomogao. (Если бы я знал, я бы тебе помог.)", ua: "Da sam znao, bio bih ti pomogao. (Якби я знав, я б тобі поміг.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Ja _____ (would buy) kuću.", ru: "Ja _____ kuću. (Я бы купил дом.)", ua: "Я _____ kuću. (Я б купив будинок.)" },
          options: ["bih kupio", "bi kupio", "bismo kupili", "sam kupio"],
          correctAnswer: "bih kupio"
        },
        {
          type: "multiple-choice",
          question: { en: "Oni _____ (would go) u kino.", ru: "Oni _____ u kino. (Они бы пошли в кино.)", ua: "Вони _____ u kino. (Вони б пішли в кіно.)" },
          options: ["bi išli", "bismo išli", "bih išao", "su išli"],
          correctAnswer: "bi išli"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Da sam to čuo ranije, _____ (I would have come - Conditional II masc).", ru: "Заполните: Da sam to čuo ranije, _____ (я бы пришел - Conditional II м.р.).", ua: "Заповніть: Da sam to čuo ranije, _____ (я б прийшов - Conditional II ч.р.)." },
          correctAnswer: "bio bih došao",
          hint: { en: "Use past conditional for 'ja'", ru: "Форма прошедшего условного времени", ua: "Форма минулого умовного часу" }
        },
        {
          type: "multiple-choice",
          question: { en: "Mi _____ (would help) vam.", ru: "Mi _____ vam. (Мы бы помогли вам.)", ua: "Ми _____ vam. (Ми б допомогли вам.)" },
          options: ["bismo pomogli", "bi pomogli", "bih pomogao", "biste pomogli"],
          correctAnswer: "bismo pomogli"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Da si me zvao, _____ (I would have helped - Conditional II masc).", ru: "Заполните: Da si me zvao, _____ (я бы помог - Conditional II м.р.).", ua: "Заповніть: Da si me zvao, _____ (я б допоміг - Conditional II ч.р.)." },
          correctAnswer: "bio bih pomogao",
          hint: { en: "I would have helped", ru: "Я бы помог", ua: "Я б допоміг" }
        },
        {
          type: "multiple-choice",
          question: { en: "Da _____ (if you had - past condition) novca, bi li putovao?", ru: "Da _____ novca, bi li putovao? (Если бы у тебя были деньги...)", ua: "Da _____ novca, bi li putovao? (Якби у тебе були гроші...)" },
          options: ["si imao", "imaš", "budeš imao", "imao bi"],
          correctAnswer: "si imao"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Kupio bih auto.'", ru: "Переведите: 'Kupio bih auto.'", ua: "Перекладіть: 'Kupio bih auto.'" },
          correctAnswer: { en: "I would buy a car.", ru: "Я бы купил машину.", ua: "Я б купив машину." }
        },
        {
          type: "multiple-choice",
          question: { en: "Vi _____ (would write) bolje.", ru: "Vi _____ bolje. (Вы бы написали лучше.)", ua: "Ви _____ bolje. (Ви б написали краще.)" },
          options: ["biste pisali", "bismo pisali", "bi pisali", "bih pisao"],
          correctAnswer: "biste pisali"
        }
      ]
    }
  },
  {
    id: "b2-communication-1",
    type: "communication",
    level: "B2",
    title: {
      en: "Robota ta robotočinje (Work & Career)",
      ru: "Работа и карьера (Radno okruženje)",
      ua: "Робота та робоче оточення (Radno okruženje)"
    },
    content: {
      description: {
        en: "Learn professional vocabulary, idioms, and how to discuss your career in Croatian.",
        ru: "Выучите профессиональную лексику, идиомы и научитесь рассказывать о своей карьере на хорватском.",
        ua: "Вивчіть професійну лексику, ідіоми та навчіться розповідати про кар'єру хорватською."
      },
      sections: [
        {
          title: { en: "Workplace Phrases", ru: "Фразы на рабочем месте", ua: "Фрази на робочому місці" },
          text: {
            en: "Essential professional terms:\n- radni staž (work experience/years)\n- plaća (salary)\n- natječaj za posao (job opening/vacancy)\n- dati otkaz (to resign/quit)\n- napredovati (to be promoted)",
            ru: "Ключевые карьерные термины:\n- radni staž (стаж работы)\n- plaća (зарплата)\n- natječaj za posao (конкурс на вакансию)\n- dati otkaz (уволиться)\n- napredovati (продвигаться по службе)",
            ua: "Ключові кар'єрні терміни:\n- radni staž (стаж роботи)\n- plaća (зарплата)\n- natječaj za posao (конкурс на вакансію)\n- dati otkaz (звільнитися)\n- napredovati (просуватися по службі)"
          },
          examples: [
            { en: "Želim se prijaviti na natječaj. (I want to apply for the vacancy.)", ru: "Želim se prijaviti na natječaj. (Я хочу подать заявку на вакансию.)", ua: "Želim se prijaviti na natječaj. (Я хочу подати заявку на вакансію.)" },
            { en: "Dobio sam povišicu. (I got a raise.)", ru: "Dobio sam povišicu. (Я получил прибавку.)", ua: "Dobio sam povišicu. (Я отримав надбавку.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "What does 'plaća' mean?", ru: "Что значит 'plaća'?", ua: "Що означає 'plaća'?" },
          options: ["salary (зарплата)", "workplace", "colleague", "interview"],
          correctAnswer: "salary (зарплата)"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Tražim novi posao.'", ru: "Переведите: 'Tražim novi posao.'", ua: "Перекладіть: 'Tražim novi posao.'" },
          correctAnswer: { en: "I am looking for a new job.", ru: "Я ищу новую работу.", ua: "Я шукаю нову роботу." }
        },
        {
          type: "multiple-choice",
          question: { en: "How do you say 'to resign/quit a job'?", ru: "Как сказать 'уволиться'?", ua: "Як сказати 'звільнитися з роботи'?" },
          options: ["dati otkaz", "dati povišicu", "zaposliti se", "raditi prekovremeno"],
          correctAnswer: "dati otkaz"
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'I have five years of work experience.'", ru: "Переведите на хорватский: 'У меня пять лет опыта/стажа.'", ua: "Перекладіть на хорватську: 'Я маю п'ять років досвіду/стажу.'" },
          correctAnswer: "Imam pet godina radnog staža."
        },
        {
          type: "multiple-choice",
          question: { en: "What is 'poslovni sastanak'?", ru: "Что такое 'poslovni sastanak'?", ua: "Що таке 'poslovni sastanak'?" },
          options: ["business meeting", "work contract", "salary raise", "job vacancy"],
          correctAnswer: "business meeting"
        },
        {
          type: "multiple-choice",
          question: { en: "How do you say 'colleague/co-worker'?", ru: "Как сказать 'коллега'?", ua: "Як сказати 'колега'?" },
          options: ["kolega", "direktor", "radnik", "klijent"],
          correctAnswer: "kolega"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Dobio sam _____ (raise). (I got a raise.)", ru: "Заполните: Dobio sam _____ (raise). (Я получил прибавку.)", ua: "Заповніть: Dobio sam _____ (raise). (Я отримав надбавку.)" },
          correctAnswer: "povišicu",
          hint: { en: "povišicu", ru: "povišicu", ua: "povišicu" }
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'The contract is signed.'", ru: "Переведите на хорватский: 'Контракт подписан.'", ua: "Перекладіть на хорватську: 'Контракт підписаний.'" },
          correctAnswer: "Ugovor je potpisan."
        }
      ]
    }
  },

  // ==========================================
  // LEVEL C1
  // ==========================================
  {
    id: "c1-grammar-1",
    type: "grammar",
    level: "C1",
    title: {
      en: "Složene rečenice i veznici (Complex Sentences)",
      ru: "Сложные предложения и союзы (Složene rečenice)",
      ua: "Складні речення та сполучники (Složene rečenice)"
    },
    content: {
      description: {
        en: "Master complex syntactic structures, conditionals, and concessive conjunctions.",
        ru: "Освойте сложные синтаксические структуры, условные предложения и уступительные союзы.",
        ua: "Опануйте складні синтаксичні структури, умовні речення, допустові сполучники."
      },
      sections: [
        {
          title: { en: "Complex Conjunctions", ru: "Сложные союзы", ua: "Складні сполучники" },
          text: {
            en: "Advanced clauses require precise conjunctions:\n- Concessive (although): iako, premda, mada\n- Causal (since/because): budući da, jer, zato što\n- Temporal (as soon as): čim, nakon što\n- Conditional: ukoliko (formal equivalent of ako)",
            ru: "Сложные предложения требуют точных союзов:\n- Уступительные (хотя): iako, premda, mada\n- Причинные (поскольку): budući da, jer\n- Временные (как только): čim, nakon što\n- Условные: ukoliko (если - книжный вариант)",
            ua: "Складні речення вимагають точних сполучників:\n- Допустові (хоча): iako, premda, mada\n- Причинові (оскільки): budući da, jer\n- Часові (як тільки): čim, nakon što\n- Умовні: ukoliko (якщо - книжковий варіант)"
          },
          examples: [
            { en: "Iako je padala kiša, išli smo u šetnju. (Although it was raining, we went for a walk.)", ru: "Iako je padala kiša, išli smo u šetnju. (Хотя шел дождь, мы пошли гулять.)", ua: "Iako je padala kiša, išli smo u šetnju. (Хоча йшов дощ, ми пішли гуляти.)" },
            { en: "Budući da je projekt završen, možemo se odmoriti. (Since the project is finished, we can rest.)", ru: "Budući da je projekt završen, možemo se odmoriti. (Поскольку проект завершен, мы можем отдохнуть.)", ua: "Budući da je projekt završen, možemo se odmoriti. (Оскільки проєкт завершено, ми можемо відпочити.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "_____ je bio bolestan, došao je na posao. (Although he was sick...)", ru: "_____ je bio bolestan, došao je na posao. (Хотя он был болен...)", ua: "_____ je bio bolestan, došao je на роботу." },
          options: ["Iako", "Zato što", "Budući da", "Jer"],
          correctAnswer: "Iako"
        },
        {
          type: "multiple-choice",
          question: { en: "_____ (Since/Because) nemamo dovoljno informacija, odgađamo sastanak.", ru: "_____ nemamo dovoljno informacija, odgađamo sastanak. (Поскольку у нас нет...)", ua: "_____ nemamo dovoljno informacija, odgađamo sastanak. (Оскільки ми не маємо...)" },
          options: ["Budući da", "Iako", "Premda", "Čim"],
          correctAnswer: "Budući da"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Javit ću vam se _____ (as soon as) stignem u ured.", ru: "Заполните: Javit ću vam se _____ stignem u ured. (Как только приеду в офис...)", ua: "Заповніть: Javit ću vam se _____ stignem u ured. (Як тільки приїду в офіс...)" },
          correctAnswer: "čim",
          hint: { en: "conjunction meaning 'as soon as'", ru: "союз со значением 'как только'", ua: "сполучник зі значенням 'як тільки'" }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ (If - formal) potpišete ugovor, obveze stupaju na snagu.", ru: "_____ potpišete ugovor, obveze stupaju na snagu. (В случае если вы подпишете...)", ua: "_____ potpišete ugovor, obveze stupaju na snagu. (У разі якщо ви підпишете...)" },
          options: ["Ukoliko", "Premda", "Jer", "Mada"],
          correctAnswer: "Ukoliko"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Nije položio ispit _____ (although) je puno učio.", ru: "Заполните: Nije položio ispit _____ je puno učio. (Хотя много учился.)", ua: "Заповніть: Nije položio ispit _____ je puno učio. (Хоча багато вчився.)" },
          correctAnswer: "premda",
          hint: { en: "concessive conjunction starting with p-", ru: "уступительный союз на p-", ua: "допустовий сполучник на p-" }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ (After) smo potpisali ugovor, započeli smo s radom.", ru: "_____ smo potpisali ugovor, započeli smo s radom. (После того как мы...)", ua: "_____ smo potpisali ugovor, započeli smo s radom. (Після того як ми...)" },
          options: ["Nakon što", "Prije nego što", "Jer", "Ukoliko"],
          correctAnswer: "Nakon što"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Ukoliko ne dođete, javite nam.'", ru: "Переведите: 'Ukoliko ne dođete, javite nam.'", ua: "Перекладіть: 'Ukoliko ne dođete, javite nam.'" },
          correctAnswer: { en: "If you do not come, let us know.", ru: "Если вы не придете, дайте нам знать.", ua: "Якщо ви не прийдете, дайте нам знати." }
        },
        {
          type: "multiple-choice",
          question: { en: "Ona nije došla _____ (because) je morala raditi prekovremeno.", ru: "Ona nije došla _____ je morala raditi prekovremeno.", ua: "Вона не прийшла _____ мусила працювати понаднормово." },
          options: ["jer", "iako", "premda", "čim"],
          correctAnswer: "jer"
        }
      ]
    }
  },
  {
    id: "c1-grammar-2",
    type: "grammar",
    level: "C1",
    title: {
      en: "Zavisne rečenice i napredni veznici (Subordinate Clauses)",
      ru: "Придаточные предложения и продвинутые союзы",
      ua: "Підрядні речення та складні сполучники"
    },
    content: {
      description: {
        en: "Deepen your understanding of relative clauses, conditional statements, and advanced conjunctions.",
        ru: "Углубите понимание относительных придаточных предложений, условных утверждений и продвинутых союзов.",
        ua: "Поглибте розуміння відносних підрядних речень, складних умовних конструкцій та сполучників."
      },
      sections: [
        {
          title: { en: "Relative and Conditional Clauses", ru: "Относительные и условные придаточные", ua: "Відносні та умовні підрядні речення" },
          text: {
            en: "Focus on:\n- Relative pronoun: koji, čiji, kakav. Remember: čiji (whose) agrees in gender/number with the noun following it.\n- Conjunctions of manner: kao da (as if), tako da (so that).\n- Conditional markers: da + past (past impossible conditions), kad bi + conditional (unlikely present conditions).",
            ru: "В центре внимания:\n- Относительное местоимение čiji (чей) согласуется в роде/числе с последующим существительным.\n- Союзы образа действия: kao da (как будто), tako da (так что).\n- Условные конструкции: da + прош.вр. (нереальное условие в прошлом).",
            ua: "У центрі уваги:\n- Відносний займенник čiji (чий) узгоджується в роді/числі з наступним іменником.\n- Сполучники способу дії: kao da (ніби/начебто), tako da (так що).\n- Умовні конструкції: da + мин.ч. (нереальна умова в минулому)."
          },
          examples: [
            { en: "Izgleda kao da će kiša. (It looks as if it will rain.)", ru: "Izgleda kao da će kiša. (Выглядит так, будто пойдет дождь.)", ua: "Izgleda kao da će kiša. (Виглядає так, ніби піде дощ.)" },
            { en: "Znam čovjeka čiji sin studira kemiju. (I know the man whose son studies chemistry.)", ru: "Znam čovjeka čiji sin studira kemiju. (Я знаю человека, чей сын изучает химию.)", ua: "Znam Znam čovjeka čiji sin studira kemiju. (Я знаю чоловіка, чий син вивчає хімію.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Upoznao sam djevojku _____ (whose) otac radi u vladi.", ru: "Upoznao sam djevojku _____ (чей) otac radi u vladi.", ua: "Я познайомився з дівчиною, _____ (чий) батько працює в уряді." },
          options: ["čiji", "čije", "čija", "čijeg"],
          correctAnswer: "čiji"
        },
        {
          type: "multiple-choice",
          question: { en: "Govori o tom problemu _____ (as if) sve zna.", ru: "Govori o tom problemu _____ (как будто) sve zna.", ua: "Він говорить про цю проблему, _____ (ніби) все знає." },
          options: ["kao da", "tako da", "zato što", "budući da"],
          correctAnswer: "kao da"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Da sam to znao, _____ (I would have reacted - masc). (If I had known, I would have reacted.)", ru: "Заполните: Da sam to znao, _____ (я бы отреагировал - м.р.).", ua: "Заповніть: Da sam to znao, _____ (я б відреагував - ч.р.)." },
          correctAnswer: "bio bih reagirao",
          hint: { en: "Use past conditional I of reagirati", ru: "Форма прошедшего условного времени", ua: "Форма минулого умовного часу" }
        },
        {
          type: "multiple-choice",
          question: { en: "Knjiga _____ (which - accusative feminine) sam čitao je izvrsna.", ru: "Knjiga _____ sam čitao je izvrsna. (Книга, которую я читал...)", ua: "Книга, _____ я читав, чудова." },
          options: ["koju", "koji", "koje", "kojom"],
          correctAnswer: "koju"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Govorio je tiho _____ (so that) ga nitko ne čuje.", ru: "Заполните: Govorio je tiho _____ ga nitko ne čuje. (Так, чтобы его никто не услышал.)", ua: "Заповніть: Govorio je tiho _____ ga nitko ne čuje. (Так, щоб його ніхто не почув.)" },
          correctAnswer: "tako da",
          hint: { en: "so that", ru: "так что / чтобы (tako da)", ua: "так що / щоб (tako da)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Da _____ (if we had) vremena, posjetili bismo vas.", ru: "Da _____ vremena, posjetili bismo vas. (Если бы у нас было время...)", ua: "Da _____ vremena, posjetili bismo vas. (Якби ми мали час...)" },
          options: ["smo imali", "imamo", "budemo imali", "imali bismo"],
          correctAnswer: "smo imali"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Znam ženu čija kćer živi u Londonu.'", ru: "Переведите: 'Znam ženu čija kćer živi u Londonu.'", ua: "Перекладіть: 'Znam ženu čija kćer živi u Londonu.'" },
          correctAnswer: { en: "I know the woman whose daughter lives in London.", ru: "Я знаю женщину, чья дочь живет в Лондоне.", ua: "Я знаю жінку, чия дочка живе в Лондоні." }
        },
        {
          type: "multiple-choice",
          question: { en: "Ukoliko _____ (you need) pomoć, slobodno se javite.", ru: "Ukoliko _____ pomoć, slobodno se javite. (Если вам нужна...)", ua: "Ukoliko _____ pomoć, slobodno se javite. (Якщо вам потрібна...)" },
          options: ["trebate", "biste trebali", "budete trebali", "treba"],
          correctAnswer: "trebate"
        }
      ]
    }
  },

  // ==========================================
  // LEVEL C2
  // ==========================================
  {
    id: "c2-grammar-1",
    type: "grammar",
    level: "C2",
    title: {
      en: "Frazemi i stilske figure (Idioms & Stylistics)",
      ru: "Фразеологизмы и стилистика (Frazemi)",
      ua: "Фразеологізми та стилістичні фігури (Frazemi)"
    },
    content: {
      description: {
        en: "Learn idiomatic expressions, figures of speech, and advanced literary stylistics in Croatian.",
        ru: "Изучите идиоматические выражения, фигуры речи и продвинутую художественную стилистику в хорватском.",
        ua: "Вивчіть ідіоматичні вирази, фігури мовлення та просунуту художню стилістику в хорватській."
      },
      sections: [
        {
          title: { en: "Croatian Idioms", ru: "Хорватские фразеологизмы", ua: "Хорватські фразеологізми" },
          text: {
            en: "Native-level proficiency involves mastership of idioms:\n- mlatiti praznu slamu (talk in vain / waste time)\n- Bogu iza nogu (in the middle of nowhere / very far)\n- baciti koplje u trnje (to give up / surrender)\n- trčati pred rudo (to jump to conclusions / rush things)",
            ru: "Владение языком на уровне носителя включает знание фразеологизмов:\n- mlatiti praznu slamu (молотить пустую солому / болтать попусту)\n- Bogu iza nogu (у черта на куличках / очень далеко)\n- baciti koplje u trnje (бросить копье в терновник / сдаться)\n- trčati pred rudo (бежать впереди телеги / торопить события)",
            ua: "Володіння мовою на рівні носія включає знання фразеологізмів:\n- mlatiti praznu slamu (товкти воду в ступі / базікати марно)\n- Bogu iza nogu (у біса на болоті / дуже далеко)\n- baciti koplje u trnje (кинути списа в тернину / здатися)\n- trčati pred rudo (бігти попереду батька в пекло / квапити події)"
          },
          examples: [
            { en: "Živi Bogu iza nogu. (He lives in the middle of nowhere.)", ru: "Živi Bogu iza nogu. (Он живет у черта на куличках.)", ua: "Živi Bogu iza nogu. (Він живе у біса на болоті.)" },
            { en: "Nemoj baciti koplje u trnje. (Don't give up.)", ru: "Nemoj baciti koplje u trnje. (Не сдавайся.)", ua: "Nemoj baciti koplje u trnje. (Не здавайся.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "What does 'mlatiti praznu slamu' mean?", ru: "Что означает 'mlatiti praznu slamu'?", ua: "Що означає 'mlatiti praznu slamu'?" },
          options: [
            "pričati bez smisla i koristi (talk in vain)",
            "raditi koristan poljoprivredni posao",
            "prikupiti puno pšenice",
            "pomoći prijatelju u nevolji"
          ],
          correctAnswer: "pričati bez smisla i koristi (talk in vain)"
        },
        {
          type: "multiple-choice",
          question: { en: "Where is a place described as 'Bogu iza nogu'?", ru: "Какое место описывают как 'Bogu iza nogu'?", ua: "Яке місце описують як 'Bogu iza nogu'?" },
          options: ["vrlo udaljeno i zabačeno mjesto (very remote)", "mjesto blizu crkve", "centar grada", "planinski vrh"],
          correctAnswer: "vrlo udaljeno i zabačeno mjesto (very remote)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete the idiom: Nemoj baciti _____ u trnje! (Don't give up!)", ru: "Заполните: Nemoj baciti _____ u trnje! (Не сдавайся!)", ua: "Заповніть: Nemoj baciti _____ u trnje! (Не здавайся!)" },
          correctAnswer: "koplje",
          hint: { en: "spear", ru: "копье (koplje)", ua: "спис (koplje)" }
        },
        {
          type: "multiple-choice",
          question: { en: "What does 'trčati pred rudo' refer to?", ru: "К чему относится 'trčati pred rudo'?", ua: "До чого відноситься 'trčati pred rudo'?" },
          options: [
            "brzopleto donositi odluke (rushing things)",
            "sudjelovati u utrci",
            "pomagati u radu",
            "bježati od opasnosti"
          ],
          correctAnswer: "brzopleto donositi odluke (rushing things)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Dosta smo mlatili praznu _____! (We have wasted enough time talking!)", ru: "Заполните: Dosta smo mlatili praznu _____! (Хватит молотить пустую солому!)", ua: "Заповніть: Dosta smo mlatili praznu _____! (Досить товкти воду в ступі!)" },
          correctAnswer: "slamu",
          hint: { en: "straw", ru: "солому (slamu)", ua: "солому (slamu)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Identify the hyperbole:", ru: "Найдите гиперболу:", ua: "Знайдіть гіперболу:" },
          options: [
            "Tisuću puta sam ti rekao! (I told you a thousand times!)",
            "Ona je tiha kao miš. (Quiet as a mouse.)",
            "Vrijeme leti. (Time flies.)",
            "On je dobar čovjek."
          ],
          correctAnswer: "Tisuću puta sam ti rekao! (I told you a thousand times!)"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Oni žive Bogu iza nogu.'", ru: "Переведите: 'Oni žive Bogu iza nogu.'", ua: "Перекладіть: 'Oni žive Bogu iza nogu.'" },
          correctAnswer: { en: "They live in the middle of nowhere.", ru: "Они живут у черта на куличках.", ua: "Вони живуть у біса на болоті." }
        },
        {
          type: "multiple-choice",
          question: { en: "What stylistic device is 'miris vlage šapuće o prošlosti' (smell of moisture whispers of the past)?", ru: "Какое стилистическое средство используется в 'miris vlage šapuće o prošlosti'?", ua: "Який стилістичний засіб використано в 'miris vlage šapuće o prošlosti'?" },
          options: ["personifikacija (personification)", "hiperbola (hyperbole)", "metonimija (metonymy)", "oksimoron (oxymoron)"],
          correctAnswer: "personifikacija (personification)"
        }
      ]
    }
  },
  {
    id: "c2-communication-1",
    type: "communication",
    level: "C2",
    title: {
      en: "Diskusija o društvu (Advanced Discussion)",
      ru: "Дискуссия об обществе (Advanced Discussion)",
      ua: "Дискусія про суспільство (Advanced Discussion)"
    },
    content: {
      description: {
        en: "Engage in advanced socio-cultural arguments, debates, and express opinions on structural topics.",
        ru: "Участвуйте в сложных социально-культурных дискуссиях, дебатах и выражайте мнение на абстрактные темы.",
        ua: "Беріть участь у складних соціально-культурних дискусіях, дебатах та висловлюйте думку на складні теми."
      },
      sections: [
        {
          title: { en: "Debating Phrases", ru: "Фразы для дебатов", ua: "Фрази для дебатів" },
          text: {
            en: "Expressing complex stances:\n- S jedne strane... s druge strane... (On one hand... on the other hand...)\n- Smatram da je ključni problem u... (I consider the key problem to be in...)\n- Ne slažem se u potpunosti s tim stajalištem. (I do not fully agree with that stance.)\n- Unatoč suprotnim tvrdnjama... (Despite opposite assertions...)",
            ru: "Выражение сложных позиций:\n- S jedne strane... s druge strane... (С одной стороны... с другой стороны...)\n- Smatram da je ključni problem u... (Я считаю, что ключевая проблема в...)\n- Ne slažem se u potpunosti s tim stajalištem. (Я не совсем согласен с этой точкой зрения.)",
            ua: "Висловлення складних позицій:\n- S jedne strane... s druge strane... (З одного боку... з іншого боку...)\n- Smatram da je ključni problem u... (Я вважаю, що ключова проблема у...)\n- Ne slažem se u potpunosti s tim stajalištem. (Я не зовсім згоден з цією точкою зору.)"
          },
          examples: [
            { en: "Smatram da tehnologija otuđuje ljude. (I believe technology alienates people.)", ru: "Smatram da tehnologija otuđuje ljude. (Я считаю, что технологии отдаляют людей.)", ua: "Smatram da tehnologija otuđuje ljude. (Я вважаю, що технології віддаляють людей.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "How do you say 'on one hand... on the other hand...'?", ru: "Как сказать 'с одной стороны... с другой стороны...'?", ua: "Як сказати 'з одного боку... з іншого боку...'?" },
          options: [
            "S jedne strane... s druge strane...",
            "Prije svega... nakon svega...",
            "Bez sumnje... bez odgode...",
            "Uglavnom... u potpunosti..."
          ],
          correctAnswer: "S jedne strane... s druge strane..."
        },
        {
          type: "translation",
          question: { en: "Translate: 'Ne slažem se s tim stajalištem.'", ru: "Переведите: 'Ne slažem se s tim stajalištem.'", ua: "Перекладіть: 'Ne slažem se s tim stajalištem.'" },
          correctAnswer: { en: "I do not agree with that stance.", ru: "Я не согласен с этой точкой зрения.", ua: "Я не згоden з цією точкою зору." }
        },
        {
          type: "multiple-choice",
          question: { en: "What does the verb 'otuđiti' mean?", ru: "Что означает глагол 'otuđiti'?", ua: "Що означає дієслово 'otuđiti'?" },
          options: ["to alienate (отчуждать)", "to unite", "to purchase", "to construct"],
          correctAnswer: "to alienate (отчуждать)"
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'I consider that the key problem is global warming.'", ru: "Переведите на хорватский: 'Я считаю, что ключевая проблема — глобальное потепление.'", ua: "Перекладіть на хорватську: 'Я вважаю, що ключова проблема — глобальне потепління.'" },
          correctAnswer: "Smatram da je ključni problem globalno zatopljenje."
        },
        {
          type: "multiple-choice",
          question: { en: "What is 'ravnopravnost'?", ru: "Что такое 'ravnopravnost'?", ua: "Що таке 'ravnopravnost'?" },
          options: ["equality / equal rights", "injustice", "sovereignty", "development"],
          correctAnswer: "equality / equal rights"
        },
        {
          type: "multiple-choice",
          question: { en: "How do you express 'without a doubt' in Croatian?", ru: "Как выразить 'без сомнения' по-хорватски?", ua: "Як виразити 'без сумніву' хорватською?" },
          options: ["bez sumnje", "bez obzira", "bez odgode", "bez razloga"],
          correctAnswer: "bez sumnje"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: To ovisi o _____ (opinion - locative) većine. (That depends on the opinion of the majority.)", ru: "Заполните: To ovisi o _____ većine. (Это зависит от мнения большинства.)", ua: "Заповніть: To ovisi o _____ većine. (Це залежить від думки більшості.)" },
          correctAnswer: "mišljenju",
          hint: { en: "Locative of mišljenje", ru: "Местный падеж от mišljenje", ua: "Місцевий відмінок від mišljenje" }
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'We must preserve cultural heritage.'", ru: "Переведите на хорватский: 'Мы должны сохранить культурное наследие.'", ua: "Перекладіть на хорватську: 'Ми повинні зберегти культурну спадщину.'" },
          correctAnswer: "Moramo očuvati kulturnu baštinu."
        }
      ]
    }
  },
  {
    id: "a1-grammar-5",
    type: "grammar",
    level: "A1",
    title: {
      en: "Rod imenica (Gender of Nouns)",
      ru: "Род существительных (Rod imenica)",
      ua: "Рід іменників (Rod imenica)"
    },
    content: {
      description: {
        en: "Learn how to identify masculine, feminine, and neuter nouns in Croatian.",
        ru: "Узнайте, как определять мужской, женский и средний род существительных в хорватском.",
        ua: "Дізнайтеся, як визначати чоловічий, жіночий та середній рід іменників у хорватській."
      },
      sections: [
        {
          title: { en: "Noun Gender Rules", ru: "Правила рода существительных", ua: "Правила роду іменників" },
          text: {
            en: "In Croatian, nouns can be masculine, feminine, or neuter. You can usually tell the gender by the final letter of the noun in the nominative singular:\n- Masculine (muški rod): end in a consonant (e.g. prozor - window, stol - table).\n- Feminine (ženski rod): end in '-a' (e.g. knjiga - book, ruka - hand).\n- Neuter (srednji rod): end in '-o' or '-e' (e.g. selo - village, sunce - sun).",
            ru: "В хорватском существительные бывают мужского, женского или среднего рода. Род обычно определяется по последней букве в именительном падеже:\n- Мужской род: оканчиваются на согласную (prozor - окно, stol - стол).\n- Женский род: оканчиваются на '-a' (knjiga - книга, ruka - рука).\n- Средний род: оканчиваются на '-o' или '-e' (selo - деревня, sunce - солнце).",
            ua: "У хорватській мові іменники бувають чоловічого, жіночого або середнього роду. Рід зазвичай визначається за останньою літерою у називному відмінку:\n- Чоловічий рід: закінчуються на приголосну (prozor - вікно, stol - стіл).\n- Жіночий рід: закінчуються на '-a' (knjiga - книга, ruka - рука).\n- Середній рід: закінчуються на '-o' або '-e' (selo - село, sunce - сонце)."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "What gender is the noun 'prozor' (window)?", ru: "Какого рода существительное 'prozor'?", ua: "Якого роду іменник 'prozor'?" },
          options: ["muški rod (masculine)", "ženski rod (feminine)", "srednji rod (neuter)"],
          correctAnswer: "muški rod (masculine)"
        },
        {
          type: "multiple-choice",
          question: { en: "What gender is the noun 'pismo' (letter)?", ru: "Какого рода существительное 'pismo'?", ua: "Якого роду іменник 'pismo'?" },
          options: ["muški rod (masculine)", "ženski rod (feminine)", "srednji rod (neuter)"],
          correctAnswer: "srednji rod (neuter)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: 'Knjiga' ends in -a, so it is in _____ rod.", ru: "Заполните: 'Knjiga' заканчивается на -a, значит это _____ род.", ua: "Заповніть: 'Knjiga' закінчується на -a, отже це _____ рід." },
          correctAnswer: "ženski",
          hint: { en: "feminine", ru: "женский (ženski)", ua: "жіночий (ženski)" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Kuća je velika.'", ru: "Переведите: 'Kuća je velika.'", ua: "Перекладіть: 'Kuća je velika.'" },
          correctAnswer: { en: "The house is big.", ru: "Дом большой.", ua: "Будинок великий." }
        }
      ]
    }
  },
  {
    id: "a2-communication-2",
    type: "communication",
    level: "A2",
    title: {
      en: "Trgovina i kupovina (Shopping & Store)",
      ru: "Магазин и покупки (Trgovina i kupovina)",
      ua: "Магазин та покупки (Trgovina i kupovina)"
    },
    content: {
      description: {
        en: "Learn how to ask for prices, pay, and converse in a Croatian shop.",
        ru: "Научитесь спрашивать цены, платить и общаться в хорватском магазине.",
        ua: "Навчіться запитувати ціни, платити та спілкуватися в хорватському магазині."
      },
      sections: [
        {
          title: { en: "Useful Shopping Phrases", ru: "Полезные фразы для покупок", ua: "Корисні фрази для покупок" },
          text: {
            en: "Key expressions in a shop:\n- Koliko košta ovo? (How much does this cost?)\n- Mogu li platiti karticom? (Can I pay by card?)\n- Samo gledam, hvala. (I am just looking, thank you.)\n- Trebam vrećicu, molim. (I need a bag, please.)",
            ru: "Ключевые выражения в магазине:\n- Koliko košta ovo? (Сколько это стоит?)\n- Mogu li platiti karticom? (Можно заплатить картой?)\n- Samo gledam, hvala. (Я просто смотрю, спасибо.)\n- Trebam vrećicu, molim. (Мне нужен пакет, пожалуйста.)",
            ua: "Ключові вирази в магазине:\n- Koliko košta ovo? (Скільки це коштує?)\n- Mogu li platiti karticom? (Можна заплатити карткою?)\n- Samo gledam, hvala. (Я просто дивлюся, дякую.)\n- Trebam vrećicu, molim. (Мне потрібен пакет, будь ласка.)"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "How do you say 'How much does this cost?' in Croatian?", ru: "Как спросить 'Сколько это стоит?' по-хорватски?", ua: "Як запитати 'Скільки це коштує?' хорватською?" },
          options: ["Koliko košta ovo?", "Mogu li platiti?", "Gdje je trgovina?", "Dobar dan!"],
          correctAnswer: "Koliko košta ovo?"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Mogu li platiti _____ (by card)?", ru: "Заполните: Mogu li platiti _____ (картой)?", ua: "Заповніть: Mogu li platiti _____ (карткою)?" },
          correctAnswer: "karticom",
          hint: { en: "with card (instrumental)", ru: "картой (karticom)", ua: "карткою (karticom)" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Trebam vrećicu, molim.'", ru: "Переведите: 'Trebam vrećicu, molim.'", ua: "Перекладіть: 'Trebam vrećicu, molim.'" },
          correctAnswer: { en: "I need a bag, please.", ru: "Мне нужен пакет, пожалуйста.", ua: "Мені потрібен пакет, будь ласка." }
        }
      ]
    }
  }
];
