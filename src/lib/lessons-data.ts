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
      correctAnswer: string;
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
  // A1 Grammar
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
          title: {
            en: "Personal Pronouns",
            ru: "Личные местоимения",
            ua: "Особові займенники"
          },
          text: {
            en: "In Croatian, personal pronouns change based on their function in the sentence. Here are the basic nominative forms:",
            ru: "В хорватском языке личные местоимения изменяются в зависимости от их функции в предложении. Вот основные формы в именительном падеже:",
            ua: "У хорватській мові особові займенники змінюються залежно від їхньої функції в реченні. Ось основні форми в називному відмінку:"
          },
          examples: [
            "ja (I / я / я) — Ja sam student. (I am a student / Я студент)",
            "ti (you / ты / ти) — Ti si učenik. (You are a pupil / Ты ученик)",
            "on/ona/ono (he/she/it | он/она/оно) — On je dobar. (He is good / Он хороший)",
            "mi (we / мы / ми) — Mi smo prijatelji. (We are friends / Мы друзья)",
            "vi (you pl./formal | вы) — Vi ste profesori. (You are professors / Вы профессора)",
            "oni/one/ona (they m/f/n | они) — Oni su ovdje. (They are here / Они здесь)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "_____ sam iz Hrvatske. (I am from Croatia.)",
            ru: "_____ sam iz Hrvatske. (Я из Хорватии.)",
            ua: "_____ sam iz Hrvatske. (Я з Хорватії.)"
          },
          options: ["Ja", "Ti", "On", "Mi"],
          correctAnswer: "Ja"
        },
        {
          type: "multiple-choice",
          question: {
            en: "_____ ste lijepi. (You [formal] are beautiful.)",
            ru: "_____ ste lijepi. (Вы [вежливо] красивы.)",
            ua: "_____ ste lijepi. (Ви [ввічливо] красиві.)"
          },
          options: ["Vi", "Ti", "Oni", "Ja"],
          correctAnswer: "Vi"
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete: _____ je profesorica. (She is a professor.)",
            ru: "Заполните: _____ je profesorica. (Она преподаватель.)",
            ua: "Заповніть: _____ je profesorica. (Вона викладач.)"
          },
          correctAnswer: "Ona",
          hint: {
            en: "Think about the feminine 3rd person pronoun",
            ru: "Подумайте о местоимении 3-го лица женского рода (Она)",
            ua: "Подумайте про займенник 3-ї особи жіночого роду (Вона)"
          }
        },
        {
          type: "multiple-choice",
          question: {
            en: "Kako ste _____? (How are you [plural/formal]?)",
            ru: "Kako ste _____? (Как у вас дела? / Как вы [мн.ч./вежл.]?)",
            ua: "Kako ste _____? (Як ваші справи? / Як ви [мн.ч./ввічл.]?)"
          },
          options: ["vi", "ja", "ti", "ona"],
          correctAnswer: "vi"
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete: _____ smo sretni. (We are happy.)",
            ru: "Заполните: _____ smo sretni. (Мы счастливы.)",
            ua: "Заповніть: _____ smo sretni. (Ми щасливі.)"
          },
          correctAnswer: "Mi",
          hint: {
            en: "Think of first person plural pronoun",
            ru: "Подумайте о местоимении 1-го лица множественного числа (Мы)",
            ua: "Подумайте про займенник 1-ї особи множини (Ми)"
          }
        }
      ]
    }
  },
  // A1 Reading
  {
    id: "a1-reading-1",
    type: "reading",
    level: "A1",
    title: {
      en: "U kafiću (At the café)",
      ru: "В кафе (U kafiću)",
      ua: "У кафе (U kafiću)"
    },
    content: {
      description: {
        en: "Read a simple dialogue at a Croatian café and answer comprehension questions.",
        ru: "Прочитайте простой диалог в хорватском кафе и ответьте на вопросы.",
        ua: "Прочитайте простий діалог у хорватському кафе та дайте відповіді."
      },
      sections: [
        {
          title: {
            en: "Dialogue",
            ru: "Диалог",
            ua: "Діалог"
          },
          text: "Konobar: Dobar dan! Što želite?\nAna: Dobar dan! Jednu kavu, molim.\nKonobar: S mlijekom ili bez?\nAna: S mlijekom, hvala.\nKonobar: Želite li još nešto?\nAna: Ne, hvala. Koliko je to?\nKonobar: Dva eura.\nAna: Izvolite. Hvala!\nKonobar: Hvala vama. Doviđenja!"
        },
        {
          title: {
            en: "Vocabulary",
            ru: "Словарь",
            ua: "Словник"
          },
          text: {
            en: "Key words from the dialogue:",
            ru: "Ключевые слова из диалога:",
            ua: "Ключові слова з діалогу:"
          },
          examples: [
            "konobar — waiter / официант / офіціант",
            "kava — coffee / кофе / кава",
            "mlijeko — milk / молоко / молоко",
            "molim — please / пожалуйста / будь ласка",
            "hvala — thank you / спасибо / дякую",
            "koliko — how much / сколько / скільки",
            "doviđenja — goodbye / до свидания / до побачення"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "What does Ana order?",
            ru: "Что заказывает Ана?",
            ua: "Що замовляє Ана?"
          },
          options: ["Coffee with milk", "Tea", "Juice", "Water"],
          correctAnswer: "Coffee with milk"
        },
        {
          type: "multiple-choice",
          question: {
            en: "How much does the coffee cost?",
            ru: "Сколько стоит кофе?",
            ua: "Скільки коштует кава?"
          },
          options: ["2 euros", "3 euros", "1 euro", "5 euros"],
          correctAnswer: "2 euros"
        },
        {
          type: "translation",
          question: {
            en: "Translate to Croatian: \"Thank you\"",
            ru: "Переведите на хорватский: \"Спасибо\"",
            ua: "Перекладіть на хорватську: \"Дякую\""
          },
          correctAnswer: "Hvala"
        },
        {
          type: "multiple-choice",
          question: {
            en: "What does the waiter ask after Ana orders a coffee?",
            ru: "Что спрашивает официант после заказа Аны?",
            ua: "Що запитує офіціант після замовлення Ани?"
          },
          options: ["S mlijekom ili bez?", "Kava ili čaj?", "Toplo ili hladno?", "Sada ili kasnije?"],
          correctAnswer: "S mlijekom ili bez?"
        },
        {
          type: "translation",
          question: {
            en: "Translate to Croatian: \"Goodbye\"",
            ru: "Переведите на хорватский: \"До свидания\"",
            ua: "Перекладіть на хорватську: \"До побачення\""
          },
          correctAnswer: "Doviđenja"
        }
      ]
    }
  },
  // A1 Dictation
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
        en: "Listen to basic Croatian greetings and type what you hear.",
        ru: "Прослушайте базовые приветствия на хорватском и напишите услышанное.",
        ua: "Прослухайте базові вітання хорватською та запишіть почуте."
      },
      dictationText: "Dobar dan. Kako ste? Ja sam dobro, hvala.",
      exercises: [
        {
          type: "dictation",
          question: {
            en: "Type what you hear:",
            ru: "Напишите то, что вы слышите:",
            ua: "Запишіть те, що ви чуєте:"
          },
          correctAnswer: "Dobar dan. Kako ste? Ja sam dobro, hvala."
        },
        {
          type: "multiple-choice",
          question: {
            en: "Which Croatian phrase means \"Good day\"?",
            ru: "Какая хорватская фраза означает \"Добрый день\"?",
            ua: "Яка хорватська фраза означає \"Добрий день\"?"
          },
          options: ["Dobar dan", "Dobra večer", "Laku noć", "Hvala"],
          correctAnswer: "Dobar dan"
        },
        {
          type: "multiple-choice",
          question: {
            en: "Select the correct spelling of the Croatian word for \"thank you\":",
            ru: "Выберите правильное написание слова \"спасибо\" на хорватском:",
            ua: "Оберіть правильне написання слова \"дякую\" хорватською:"
          },
          options: ["Hvala", "Fala", "Xvala", "Havla"],
          correctAnswer: "Hvala"
        }
      ]
    }
  },
  // A2 Grammar
  {
    id: "a2-grammar-1",
    type: "grammar",
    level: "A2",
    title: {
      en: "Padeži - Akuzativ (Cases - Accusative)",
      ru: "Падежи - Винительный (Akuzativ)",
      ua: "Відмінки - Знахідний (Akuzativ)"
    },
    content: {
      description: {
        en: "Learn the accusative case in Croatian — used for direct objects.",
        ru: "Изучите винительный падеж (аккузатив) в хорватском — используется для прямого дополнения.",
        ua: "Вивчіть знахідний відмінок (акузатив) у хорватській — використовується для прямого додатка."
      },
      sections: [
        {
          title: {
            en: "The Accusative Case (Akuzativ)",
            ru: "Винительный падеж (Akuzativ)",
            ua: "Знахідний відмінок (Akuzativ)"
          },
          text: {
            en: "The accusative case is used for direct objects — the thing or person receiving the action of a verb.",
            ru: "Винительный падеж используется для выражения прямого дополнения — предмета или лица, на которое направлено действие глагола.",
            ua: "Знахідний відмінок використовується для прямого додатка — предмета чи особи, на яку безпосередньо спрямована дія глагола."
          },
          examples: [
            "Vidim kuću. (I see a house / Я вижу дом) — kuća → kuću",
            "Čitam knjigu. (I read a book / Я читаю книгу) — knjiga → knjigu",
            "Volim Hrvatsku. (I love Croatia / Я люблю Хорватию) — Hrvatska → Hrvatsku",
            "Jedem jabuku. (I eat an apple / Я ем яблоко) — jabuka → jabuku"
          ]
        },
        {
          title: {
            en: "Feminine Nouns Rule",
            ru: "Правило для женского рода",
            ua: "Правило для жіночого роду"
          },
          text: {
            en: "Feminine nouns ending in -a change to -u in the accusative case.",
            ru: "Существительные женского рода, оканчивающиеся на -a, меняют окончание на -u в винительном падеже.",
            ua: "Іменники жіночого роду, що закінчуються на -a, змінюють закінчення на -u у знахідному відмінку."
          },
          examples: [
            "žena → ženu (woman / женщина)",
            "škola → školu (school / школа)",
            "ulica → ulicu (street / улица)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "Vidim _____ (kuća). (I see the house.)",
            ru: "Vidim _____ (kuća). (Я вижу дом.)",
            ua: "Vidim _____ (kuća). (Я бачу будинок.)"
          },
          options: ["kuću", "kuća", "kuće", "kući"],
          correctAnswer: "kuću"
        },
        {
          type: "fill-blank",
          question: {
            en: "Čitam _____ (knjiga). (I read the book.)",
            ru: "Čitam _____ (knjiga). (Я читаю книгу.)",
            ua: "Čitam _____ (knjiga). (Я читаю книгу.)"
          },
          correctAnswer: "knjigu",
          hint: {
            en: "Feminine -a changes to -u",
            ru: "Окончание женского рода -a меняется на -u",
            ua: "Закінчення жіночого роду -a змінюється на -u"
          }
        },
        {
          type: "multiple-choice",
          question: {
            en: "Volim _____ (Hrvatska). (I love Croatia.)",
            ru: "Volim _____ (Hrvatska). (Я люблю Хорватию.)",
            ua: "Volim _____ (Hrvatska). (Я люблю Хорватію.)"
          },
          options: ["Hrvatsku", "Hrvatska", "Hrvatski", "Hrvatske"],
          correctAnswer: "Hrvatsku"
        },
        {
          type: "fill-blank",
          question: {
            en: "Jedem _____ (jabuka). (I am eating an apple.)",
            ru: "Jedem _____ (jabuka). (Я ем яблоко.)",
            ua: "Jedem _____ (jabuka). (Я їм яблуко.)"
          },
          correctAnswer: "jabuku",
          hint: {
            en: "Change 'jabuka' to accusative form",
            ru: "Поставьте 'jabuka' в винительный падеж",
            ua: "Поставте 'jabuka' у знахідний відмінок"
          }
        },
        {
          type: "multiple-choice",
          question: {
            en: "On traži _____ (adresa). (He is looking for the address.)",
            ru: "On traži _____ (adresa). (Он ищет адрес.)",
            ua: "On traži _____ (adresa). (Він шукає адресу.)"
          },
          options: ["adresu", "adresa", "adrese", "adresi"],
          correctAnswer: "adresu"
        }
      ]
    }
  },
  // A2 Communication
  {
    id: "a2-communication-1",
    type: "communication",
    level: "A2",
    title: {
      en: "U restoranu (At the restaurant)",
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
          title: {
            en: "Useful Phrases",
            ru: "Полезные фразы",
            ua: "Корисні фрази"
          },
          text: {
            en: "Essential phrases for dining out in Croatia:",
            ru: "Ключевые фразы для похода в ресторан в Хорватии:",
            ua: "Ключові фрази для походу в ресторан у Хорватії:"
          },
          examples: [
            "Mogu li dobiti jelovnik? — Can I get the menu? / Можно меню?",
            "Što preporučujete? — What do you recommend? / Что вы порекомендуете?",
            "Želim naručiti... — I would like to order... / Я хочу заказать...",
            "Račun, molim. — The bill, please. / Счет, пожалуйста.",
            "Bilo je izvrsno! — It was excellent! / Было великолепно!"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "How do you ask for the menu?",
            ru: "Как попросить меню?",
            ua: "Як попросити меню?"
          },
          options: [
            "Mogu li dobiti jelovnik?",
            "Koliko košta?",
            "Gdje je WC?",
            "Kako se zovete?"
          ],
          correctAnswer: "Mogu li dobiti jelovnik?"
        },
        {
          type: "translation",
          question: {
            en: "Translate: \"The bill, please.\"",
            ru: "Переведите: \"Счет, пожалуйста.\"",
            ua: "Перекладіть: \"Рахунок, будь ласка.\""
          },
          correctAnswer: "Račun, molim."
        },
        {
          type: "multiple-choice",
          question: {
            en: "What does the phrase \"Što preporučujete?\" mean?",
            ru: "Что означает фраза \"Što preporučujete?\"?",
            ua: "Що означає фраза \"Što preporučujete?\"?"
          },
          options: [
            "What do you recommend?",
            "What would you like to drink?",
            "How much does it cost?",
            "Where is the table?"
          ],
          correctAnswer: "What do you recommend?"
        },
        {
          type: "translation",
          question: {
            en: "Translate to Croatian: \"Can I get a glass of water?\"",
            ru: "Переведите на хорватский: \"Можно стакан воды?\"",
            ua: "Перекладіть на хорватську: \"Можна склянку води?\""
          },
          correctAnswer: "Mogu li dobiti čašu vode."
        },
        {
          type: "multiple-choice",
          question: {
            en: "How do you express \"It was excellent!\" in Croatian?",
            ru: "Как сказать \"Было отлично/великолепно!\" по-хорватски?",
            ua: "Як сказати \"Було чудово/прекрасно!\" хорватською?"
          },
          options: ["Bilo je izvrsno!", "Dobar tek!", "U redu je", "Nema na čemu"],
          correctAnswer: "Bilo je izvrsno!"
        }
      ]
    }
  },
  // B1 Grammar
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
          title: {
            en: "Verb Aspects (Glagolski aspekti)",
            ru: "Виды глаголов",
            ua: "Види дієслів"
          },
          text: {
            en: "Croatian verbs come in pairs: imperfective (ongoing/repeated) and perfective (completed/one-time).",
            ru: "Хорватские глаголы образуют видовые пары: несовершенный вид (длящееся/повторяющееся действие) и совершенный (завершенное/однократное).",
            ua: "Хорватські дієслова утворюють видові пари: недоконаний вид (тривала/повторювана дія) та доконаний (завершена/одноразова)."
          },
          examples: [
            "pisati (impf. | нсв) / napisati (pf. | св) — to write / написать",
            "čitati (impf. | нсв) / pročitati (pf. | св) — to read / прочитать",
            "učiti (impf. | нсв) / naučiti (pf. | св) — to learn / выучить",
            "govoriti (impf. | нсв) / reći (pf. | св) — to speak / сказать"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "Jučer sam _____ cijelu knjigu. (Yesterday I read the whole book.) — completed action",
            ru: "Jučer sam _____ cijelu knjigu. (Вчера я прочитал всю книгу.) — завершенное действие",
            ua: "Jučer sam _____ cijelu knjigu. (Вчора я прочитав всю книгу.) — завершена дія"
          },
          options: ["pročitao", "čitao", "čitam", "pročitam"],
          correctAnswer: "pročitao"
        },
        {
          type: "multiple-choice",
          question: {
            en: "Svaki dan _____ novine. (Every day I read newspapers.) — habitual action",
            ru: "Svaki dan _____ novine. (Каждый день я читаю газеты.) — регулярное действие",
            ua: "Svaki dan _____ novine. (Щодня я читаю газети.) — регулярна дія"
          },
          options: ["čitam", "pročitam", "pročitao sam", "čitat ću"],
          correctAnswer: "čitam"
        },
        {
          type: "multiple-choice",
          question: {
            en: "He usually writes letters for an hour, but today he wrote one in ten minutes.",
            ru: "Обычно он пишет письмо целый час, но сегодня он написал его за 10 минут.",
            ua: "Зазвичай він пише листа цілу годину, але сьогодні він написав його за 10 хвилин."
          },
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
          question: {
            en: "Complete: Jučer sam _____ (pisati, imperfective past) zadaću tri sata.",
            ru: "Заполните: Jučer sam _____ (pisati, нсв прош. вр.) zadaću tri sata. (Вчера я три часа писал домашнее задание.)",
            ua: "Заповніть: Jučer sam _____ (pisati, недок. в. мин. ч.) zadaću tri sata. (Вчора я три години писав домашнє завдання.)"
          },
          correctAnswer: "pisao",
          hint: {
            en: "Use masculine past form for 'ja' (assuming a male speaker)",
            ru: "Используйте мужской род прошедшего времени глагола 'pisati'",
            ua: "Використовуйте чоловічий рід минулого часу дієслова 'pisati'"
          }
        },
        {
          type: "multiple-choice",
          question: {
            en: "Moram _____ (naučiti, perfective) ove riječi do sutra. (I must learn these words by tomorrow.)",
            ru: "Moram _____ (naučiti, св) ove riječi do sutra. (Я должен выучить эти слова к завтрашнему дню.)",
            ua: "Moram _____ (naučiti, док. в.) ove riječi do sutra. (Я мушу вивчити ці слова до завтра.)"
          },
          options: ["naučiti", "učiti", "naučim", "učim"],
          correctAnswer: "naučiti"
        }
      ]
    }
  },
  // B1 Level Lesson 2
  {
    id: "b1-grammar-2",
    type: "grammar",
    level: "B1",
    title: {
      en: "Zemlje, jezici i Futur II (Countries, Languages and Future II)",
      ru: "Страны, языки и Futur II",
      ua: "Країни, мови та Futur II"
    },
    content: {
      description: {
        en: "Explore vocabulary regarding mother tongues and master the Future II tense in relative clauses.",
        ru: "Изучите лексику о родных языках и освойте время Futur II в придаточных предложениях.",
        ua: "Вивчіть лексику про рідні мови та опануйте час Futur II у підрядних реченнях."
      },
      sections: [
        {
          title: {
            en: "Mother tongue and origins",
            ru: "Родной язык и происхождение",
            ua: "Рідна мова та походження"
          },
          text: {
            en: "At B1 level, you communicate about identities, language differences, and where people originate. Common terms: domovina (homeland), materinski jezik (mother tongue), dvojezičnost (bilingualism).",
            ru: "На уровне B1 вы учитесь общаться на темы идентичности, языковых различий и происхождения. Ключевые слова: domovina (родина), materinski jezik (родной язык), dvojezičnost (двуязычие).",
            ua: "На рівні B1 ви вчитеся спілкуватися на теми ідентичності, мовних відмінностей та походження. Ключові слова: domovina (батьківщина), materinski jezik (рідна мова), dvojezičnost (двомовність)."
          },
          examples: [
            "Moj materinski jezik je ukrajinski, ali tečno govorim i hrvatski. (My mother tongue is Ukrainian...)",
            "Dvojezičnost je prednost u suvremenom društvu. (Bilingualism is an advantage...)"
          ]
        },
        {
          title: {
            en: "Futur II (Future Exact / Second Future)",
            ru: "Futur II (Будущее предварительное)",
            ua: "Futur II (Майбутній попередній час)"
          },
          text: {
            en: "Future II is used in subordinate clauses (usually starting with 'ako' or 'kad') to express an action that will happen BEFORE another future action.",
            ru: "Futur II используется в придаточных предложениях (чаще всего после слов 'ako' или 'kad') для выражения действия, которое совершится РАНЕЕ другого действия в будущем.",
            ua: "Futur II використовується в підрядних реченнях (найчастіше після слів 'ako' або 'kad') для вираження дії, яка відбудеться РАНІШЕ за іншу дію в майбутньому."
          },
          examples: [
            "Form: auxiliary verb 'biti' in present (budem, budeš...) + active verbal adjective (-o, -la...).",
            "Ako budem učio, položit ću ispit. (If I study/have studied, I will pass the exam.)",
            "Kad budete stigli u Zagreb, nazovite me. (When you arrive in Zagreb, call me.)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "Ako sutra _____ (padati) kiša, ostat ćemo kod kuće.",
            ru: "Ako sutra _____ (padati) kiša, ostat ćemo kod kuće. (Если завтра будет идти дождь...)",
            ua: "Ako sutra _____ (padati) kiša, ostat ćemo kod kuće. (Якщо завтра йтиме дощ...)"
          },
          options: ["bude padala", "padat će", "bude pala", "pada"],
          correctAnswer: "bude padala",
          hint: {
            en: "Use Future II of 'padati' (feminine singular because of kiša)",
            ru: "Используйте Futur II от 'padati' (женский род, т.к. kiša)",
            ua: "Використовуйте Futur II від 'padati' (жіночий рід, тому що kiša)"
          }
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete: Kad _____ (mi, naučiti) riječi, igrat ćemo kviz.",
            ru: "Заполните: Kad _____ (mi, naučiti) riječi, igrat ćemo kviz. (Когда мы выучим слова...)",
            ua: "Заповніть: Kad _____ (mi, naučiti) riječi, igrat ćemo kviz. (Коли ми вивчимо слова...)"
          },
          correctAnswer: "budemo naučili",
          hint: {
            en: "First-person plural Future II of 'naučiti'",
            ru: "Форма 1-го лица мн. ч. Futur II от 'naučiti'",
            ua: "Форма 1-ї особи мн. ч. Futur II від 'naučiti'"
          }
        },
        {
          type: "multiple-choice",
          question: {
            en: "Kad _____ (ti, završiti) posao, javi mi se. (When you [singular] finish work, let me know.)",
            ru: "Kad _____ (ti, završiti) posao, javi mi se. (Когда закончишь работу, дай мне знать.)",
            ua: "Kad _____ (ti, završiti) posao, javi mi se. (Коли закінчиш роботу, дай мені знати.)"
          },
          options: ["budeš završio", "završiš", "budeš završila", "završit ćeš"],
          correctAnswer: "budeš završio"
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete: Ako _____ (on, doći) na vrijeme, stignut ćemo na vlak.",
            ru: "Заполните: Ako _____ (on, doći) na vrijeme, stignut ćemo na vlak. (Если он придет вовремя, мы успеем на поезд.)",
            ua: "Заповніть: Ako _____ (on, doći) na vrijeme, stignut ćemo na vlak. (Якщо він прийде вчасно, ми встигнемо на поїзд.)"
          },
          correctAnswer: "bude došao",
          hint: {
            en: "Future II masculine third-person singular",
            ru: "Futur II мужского рода 3-го лица единственного числа",
            ua: "Futur II чоловічого роду 3-ї особи однини"
          }
        },
        {
          type: "multiple-choice",
          question: {
            en: "Kad _____ (oni, kupiti) auto, putovat će više. (When they buy the car, they will travel more.)",
            ru: "Kad _____ (oni, kupiti) auto, putovat će više. (Когда они купят машину, они будут путешествовать больше.)",
            ua: "Kad _____ (oni, kupiti) auto, putovat će više. (Коли вони куплять машину, вони будуть подорожувати більше.)"
          },
          options: ["budu kupili", "kupe", "kupit će", "budu kupovali"],
          correctAnswer: "budu kupili"
        }
      ]
    }
  },
  // B1 Level Lesson 2
  {
    id: "b1-reading-2",
    type: "reading",
    level: "B1",
    title: {
      en: "Kvaliteta života i ekologija (Quality of Life & Ecology)",
      ru: "Качество жизни и экология",
      ua: "Якість життя та екологія"
    },
    content: {
      description: {
        en: "Read about environmental concerns and lifestyle standards in Croatia.",
        ru: "Прочитайте о проблемах экологии и стандартах качества жизни в Хорватии.",
        ua: "Прочитайте про проблеми екології та стандарти якості життя в Хорватії."
      },
      sections: [
        {
          title: {
            en: "Text: Green Zagreb",
            ru: "Текст: Зеленый Загреб",
            ua: "Текст: Зелений Загреб"
          },
          text: "Hrvatska ima prekrasnu prirodu, ali briga za ekologiju postaje sve važnija. U Zagrebu se provodi novi sustav razvrstavanja otpada. Građani moraju odvajati papir, plastiku, staklo i biootpad. Mnogi se žale da je sustav kompliciran, ali većina shvaća da bez toga ne možemo sačuvati čisti okoliš. Kvaliteta života ovisi o čistom zraku, čistoj vodi i zelenim površinama u gradu.",
        },
        {
          title: {
            en: "Vocabulary",
            ru: "Словарь",
            ua: "Словник"
          },
          text: {
            en: "Key vocabulary from the text:",
            ru: "Ключевая лексика из текста:",
            ua: "Ключова лексика з тексту:"
          },
          examples: [
            "otpad — waste / отходы / відходи",
            "razvrstavanje — sorting / сортировка / сортування",
            "okoliš — environment / окружающая среда / довкілля",
            "zelene površine — green spaces / зеленые зоны / зелені зони",
            "biootpad — bio-waste / биоотходы / біовідходи",
            "sačuvati — to preserve / сохранить / зберегти"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "What do citizens of Zagreb have to separate?",
            ru: "Что жители Загреба должны сортировать?",
            ua: "Що жителі Загреба мають сортувати?"
          },
          options: ["Papir, plastiku, staklo i biootpad", "Samo metal", "Ništa, sve ide u istu kantu", "Samo papir"],
          correctAnswer: "Papir, plastiku, staklo i biootpad"
        },
        {
          type: "multiple-choice",
          question: {
            en: "What does quality of life depend on, according to the text?",
            ru: "От чего зависит качество жизни согласно тексту?",
            ua: "Від чого залежить якість життя згідно з текстом?"
          },
          options: ["O čistom zraku, vodi i zelenim površinama", "O novcu", "O brzim automobilima", "O velikim trgovinama"],
          correctAnswer: "O čistom zraku, vodi i zelenim površinama"
        },
        {
          type: "multiple-choice",
          question: {
            en: "What does the word \"okoliš\" mean?",
            ru: "Что означает слово \"okoliš\"?",
            ua: "Що означає слово \"okoliš\"?"
          },
          options: ["environment", "waste", "ecology", "air"],
          correctAnswer: "environment"
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete the word: Briga za _____ (ecology) postaje sve važnija.",
            ru: "Заполните слово: Briga za _____ (ecology) postaje sve važnija. (Забота об экологии...)",
            ua: "Заповніть слово: Briga za _____ (ecology) postaje sve važnija. (Турбота про екологію...)"
          },
          correctAnswer: "ekologiju",
          hint: {
            en: "Write 'ekologija' in accusative singular",
            ru: "Напишите 'ekologija' в винительном падеже",
            ua: "Напишіть 'ekologija' у знахідному відмінку"
          }
        },
        {
          type: "translation",
          question: {
            en: "Translate to Croatian: \"clean air\"",
            ru: "Переведите на хорватский: \"чистый воздух\"",
            ua: "Перекладіть на хорватську: \"чисте повітря\""
          },
          correctAnswer: "čisti zrak"
        }
      ]
    }
  },
  // B1 Exam Prep
  {
    id: "b1-reading-3",
    type: "reading",
    level: "B1",
    title: {
      en: "Priprema za B1 ispit: Poznavanje jezika (Language Test Preparation)",
      ru: "Подготовка к экзамену B1: Знание языка",
      ua: "Підготовка до іспиту B1: Знання мови"
    },
    content: {
      description: {
        en: "Practice grammar and vocabulary structure questions typically found in B1 language exams.",
        ru: "Потренируйтесь на грамматических и лексических вопросах, типичных для экзамена B1.",
        ua: "Потренуйтеся на граматичних та лексичних питаннях, типових для іспиту B1."
      },
      sections: [
        {
          title: {
            en: "Grammar Structures in B1 Exam",
            ru: "Грамматика на экзамене B1",
            ua: "Граматика на іспиті B1"
          },
          text: {
            en: "B1 exams check your comprehension of prepositions, verbal aspects, relative pronouns and proper case endings. Pay close attention to verbs that trigger Genitive, Dative, or Locative.",
            ru: "Экзамены B1 проверяют понимание предлогов, видов глагола, относительных местоимений и падежных окончаний. Обратите внимание на управление глаголов (родительный, дательный, местный падежи).",
            ua: "Іспити B1 перевіряють розуміння прийменників, видів дієслова, відносних займенників та відмінкових закінчень. Зверніть увагу на керування дієслів (родовий, давальний, місцевий відмінки)."
          },
          examples: [
            "Zadovoljan sam svojim poslom. (I am satisfied with my job...)",
            "Čestitam ti na uspjehu. (I congratulate you on your success...)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "Putujem u Zagreb _____ (vlak). (I travel to Zagreb by train.)",
            ru: "Putujem u Zagreb _____ (vlak). (Я еду в Загреб на поезде.)",
            ua: "Putujem u Zagreb _____ (vlak). (Я їду до Загреба потягом.)"
          },
          options: ["vlakom", "vlak", "vlaku", "vlaka"],
          correctAnswer: "vlakom",
          hint: {
            en: "Use Instrumental case (vlak → vlakom)",
            ru: "Используйте творительный падеж (vlak → vlakom)",
            ua: "Використовуйте орудний відмінок (vlak → vlakom)"
          }
        },
        {
          type: "multiple-choice",
          question: {
            en: "On se boji _____ (pas). (He is afraid of the dog.)",
            ru: "On se boji _____ (pas). (Он боится собаки.)",
            ua: "On se boji _____ (pas). (Він боїться собаки.)"
          },
          options: ["psa", "pas", "psu", "psi"],
          correctAnswer: "psa",
          hint: {
            en: "Verb 'bojati se' requires Genitive case",
            ru: "Глагол 'bojati se' требует родительного падежа (genitiv)",
            ua: "Дієслово 'bojati se' вимагає родового відмінка (genitiv)"
          }
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete: Radujem se _____ (vikend). (I look forward to the weekend.)",
            ru: "Заполните: Radujem se _____ (vikend). (Я радуюсь выходным.)",
            ua: "Заповніть: Radujem se _____ (vikend). (Я радію вихідним.)"
          },
          correctAnswer: "vikendu",
          hint: {
            en: "Verb 'radovati se' requires Dative case (vikend → vikendu)",
            ru: "Глагол 'radovati se' требует дательного падежа (dativ)",
            ua: "Дієслово 'radovati se' вимагає давального відмінка (dativ)"
          }
        },
        {
          type: "multiple-choice",
          question: {
            en: "Upravljam _____ (automobil). (I drive the car.)",
            ru: "Upravljam _____ (automobil). (Я управляю автомобилем.)",
            ua: "Upravljam _____ (automobil). (Я керую автомобілем.)"
          },
          options: ["automobilom", "automobil", "automobilu", "automobila"],
          correctAnswer: "automobilom"
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete: Zanimam se za _____ (glazba). (I am interested in music.)",
            ru: "Заполните: Zanimam se za _____ (glazba). (Я интересуюсь музыкой.)",
            ua: "Заповніть: Zanimam se za _____ (glazba). (Я цікавлюся музикою.)"
          },
          correctAnswer: "glazbu",
          hint: {
            en: "Accusative feminine of 'glazba'",
            ru: "Винительный падеж женского рода от 'glazba'",
            ua: "Знахідний відмінок жіночого роду від 'glazba'"
          }
        }
      ]
    }
  },
  // B2 Level Lesson 1
  {
    id: "b2-grammar-1",
    type: "grammar",
    level: "B2",
    title: {
      en: "Odnosi, pasiv i glagolske imenice (Relationships, Passive & Verbal Nouns)",
      ru: "Отношения, пассивный залог и отглагольные существительные",
      ua: "Відносини, пасивний стан та отглагольні іменники"
    },
    content: {
      description: {
        en: "Learn how to use passive voice and form verbal nouns to express abstract ideas at B2 level.",
        ru: "Научитесь использовать пассивный залог и образовывать отглагольные существительные на уровне B2.",
        ua: "Навчіться використовувати пасивний стан та утворювати отглагольні іменники на рівні B2."
      },
      sections: [
        {
          title: {
            en: "Pasiv (Passive Voice)",
            ru: "Пассивный залог (Pasiv)",
            ua: "Пасивний стан (Pasiv)"
          },
          text: {
            en: "In B2, passive voice is common in official and written styles. It is formed using the verb 'biti' or 'bivati' + passive verbal adjective, or by using the reflexive particle 'se'.",
            ru: "На уровне B2 пассивный залог часто встречается в официальном и письменном стилях. Он образуется с помощью глагола 'biti' или 'bivati' + пассивное причастие, либо через возвратную частицу 'se'.",
            ua: "На рівні B2 пасивний стан часто зустрічається в офіційному та письмовому стилях. Він утворюється за допомогою дієслова 'biti' або 'bivati' + пасивний дієприкметник, або через зворотну частку 'se'."
          },
          examples: [
            "Knjiga je napisana prošle godine. (The book was written last year.)",
            "Odluka se donosi na sastanku. (The decision is being made...)"
          ]
        },
        {
          title: {
            en: "Glagolske imenice (Verbal Nouns)",
            ru: "Отглагольные существительные",
            ua: "Віддієслівні іменники"
          },
          text: {
            en: "Verbal nouns ending in -nje are formed from verbs (mostly imperfective) and describe process or action.",
            ru: "Отглагольные существительные, оканчивающиеся на -nje, образуются от глаголов (чаще несовершенного вида) и выражают процесс или действие.",
            ua: "Віддієслівні іменники, що закінчуються на -nje, утворюються від дієслів (найчастіше недоконаного виду) і виражають процес або дію."
          },
          examples: [
            "učiti → učenje (learning / обучение)",
            "putovati → putovanje (traveling / путешествие)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "How do you form the verbal noun from 'čitati'?",
            ru: "Как звучит отглагольное существительное от глагола 'čitati'?",
            ua: "Як звучить віддієслівний іменник від дієслова 'čitati'?"
          },
          options: ["čitanje", "čitač", "pročitano", "čitati"],
          correctAnswer: "čitanje"
        },
        {
          type: "multiple-choice",
          question: {
            en: "Passive: Kuća _____ (graditi, present passive) već tri godine.",
            ru: "Пассив: Kuća _____ (graditi) već tri godine. (Дом строится уже три года.)",
            ua: "Пасив: Kuća _____ (graditi) već tri godine. (Будинок будується вже три роки.)"
          },
          options: ["se gradi", "gradi", "je građena", "bila je građena"],
          correctAnswer: "se gradi"
        },
        {
          type: "multiple-choice",
          question: {
            en: "What is the verbal noun for \"putovati\"?",
            ru: "Какое отглагольное существительное образуется от \"putovati\"?",
            ua: "Який віддієслівний іменник утворюється від \"putovati\"?"
          },
          options: ["putovanje", "putovati", "putopis", "putnik"],
          correctAnswer: "putovanje"
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete: Pismo je _____ (napisati, past participle neuter) jučer.",
            ru: "Заполните: Pismo je _____ (napisati, причастие ср. р.) jučer. (Письмо было написано вчера.)",
            ua: "Заповніть: Pismo je _____ (napisati, дієприкметник сер. р.) jučer. (Лист був написаний вчора.)"
          },
          correctAnswer: "napisano",
          hint: {
            en: "Neuter singular forms end in -o",
            ru: "Формы среднего рода ед. ч. оканчиваются на -o",
            ua: "Форми середнього роду однини закінчуються на -o"
          }
        },
        {
          type: "multiple-choice",
          question: {
            en: "Passive: Odluka _____ (donijeti, past passive feminine) na sastanku.",
            ru: "Пассив: Odluka _____ (donijeti, ж.р. прош.вр. пассив) na sastanku. (Решение было принято на собрании.)",
            ua: "Пасив: Odluka _____ (donijeti, ж.р. мин.ч. пасив) na sastanku. (Рішення було прийняте на зборах.)"
          },
          options: ["je donesena", "se donosi", "je donio", "bude donesena"],
          correctAnswer: "je donesena"
        }
      ]
    }
  },
  // B2 Level Lesson 2
  {
    id: "b2-communication-1",
    type: "communication",
    level: "B2",
    title: {
      en: "Posao i radno okruženje (Work & Work Environment)",
      ru: "Работа и рабочее окружение",
      ua: "Робота та робоче оточення"
    },
    content: {
      description: {
        en: "Learn professional vocabulary, idioms, and speak about careers in Croatian.",
        ru: "Изучите профессиональную лексику, идиомы и научитесь рассказывать о карьере на хорватском.",
        ua: "Вивчіть професійну лексику, ідіоми та навчіться розповідати про кар'єру хорватською."
      },
      sections: [
        {
          title: {
            en: "Work environment",
            ru: "Рабочее окружение",
            ua: "Робоче оточення"
          },
          text: {
            en: "Speaking about career paths, professional goals, and job interviews in Croatia. Common terms: zapošljavanje (employment), životopis (resume), razgovor za posao (job interview), prekovremeni rad (overtime work).",
            ru: "Обсуждение карьерного пути, профессиональных целей и собеседований в Хорватии. Понятия: zapošljavanje (трудоустройство), životopis (резюме), razgovor za posao (собеседование), prekovremeni rad (сверхурочная работа).",
            ua: "Обговорення кар'єрного шляху, професійних цілей та співбесід у Хорватії. Поняття: zapošljavanje (працевлаштування), životopis (резюме), razgovor za posao (співбесіда), prekovremeni rad (понаднормова робота)."
          },
          examples: [
            "Poslao sam svoj životopis na natječaj za posao programera. (I sent my resume...)",
            "Radna atmosfera u našem uredu je izuzetno motivirajuća. (The working atmosphere...)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "What does the word 'životopis' mean?",
            ru: "Что означает слово 'životopis'?",
            ua: "Що означає слово 'životopis'?"
          },
          options: ["Resume / CV", "Biography book", "Job contract", "Working hours"],
          correctAnswer: "Resume / CV"
        },
        {
          type: "fill-blank",
          question: {
            en: "Translate: 'job interview' -> razgovor za _____.",
            ru: "Переведите: 'собеседование на работу' -> razgovor za _____.",
            ua: "Перекладіть: 'співбесіда на роботу' -> razgovor za _____."
          },
          correctAnswer: "posao"
        },
        {
          type: "multiple-choice",
          question: {
            en: "What does the term \"prekovremeni rad\" refer to?",
            ru: "К чему относится термин \"prekovremeni rad\"?",
            ua: "До чого відноситься термін \"prekovremeni rad\"?"
          },
          options: ["overtime work", "part-time work", "vacation days", "working from home"],
          correctAnswer: "overtime work"
        },
        {
          type: "translation",
          question: {
            en: "Translate to Croatian: \"employment\"",
            ru: "Переведите на хорватский: \"трудоустройство\"",
            ua: "Перекладіть на хорватську: \"працевлаштування\""
          },
          correctAnswer: "zapošljavanje"
        },
        {
          type: "multiple-choice",
          question: {
            en: "Select the Croatian word for \"employer\":",
            ru: "Выберите хорватское слово, означающее \"работодатель\":",
            ua: "Оберіть хорватське слово, що означає \"роботодавець\":"
          },
          options: ["poslodavac", "radnik", "direktor", "kolega"],
          correctAnswer: "poslodavac"
        }
      ]
    }
  },
  // C1 Level Lesson 1 — Advanced Subordinate Clauses
  {
    id: "c1-grammar-1",
    type: "grammar",
    level: "C1",
    title: {
      en: "Složene rečenice i veznici (Complex Sentences & Conjunctions)",
      ru: "Сложные предложения и союзы (Složene rečenice)",
      ua: "Складні речення та сполучники (Složene rečenice)"
    },
    content: {
      description: {
        en: "Master complex sentence structures, conditional clauses, concessive conjunctions, and logical sentence flow at a professional level.",
        ru: "Освойте сложные синтаксические структуры, условные предложения, уступительные союзы на профессиональном уровне.",
        ua: "Опануйте складні синтаксичні структури, умовні речення, допустові сполучники на професійному рівні."
      },
      sections: [
        {
          title: {
            en: "Concessive Clauses (Dopunske rečenice)",
            ru: "Уступительные предложения",
            ua: "Допустові речення"
          },
          text: {
            en: "Concessive clauses express an action that happens despite an obstacle. The main conjunctions used are: iako (although), premda (albeit / although), mada (even though), makar (at least / even if). Note that 'iako' is the most common and neutral, whereas 'premda' is highly stylistic.",
            ru: "Уступительные предложения выражают действие, происходящее вопреки препятствию. Основные союзы: iako (хотя), premda (хотя), mada (хотя/даже если), makar (хотя бы/пусть даже).",
            ua: "Допустові речення виражають дію, що відбувається всупереч перешкоді. Основні сполучники: iako (хоча), premda (хоча), mada (хоча/навіть якщо), makar (хоча б/хай навіть)."
          },
          examples: [
            "Iako je padala jaka kiša, odlučili smo prošetati gradom. (Although it was raining hard...)",
            "Premda su pregovori bili teški, postigli smo dogovor. (Albeit the negotiations were hard...)"
          ]
        },
        {
          title: {
            en: "Conditional Clauses with 'da' vs 'ako'",
            ru: "Условные предложения с 'da' и 'ako'",
            ua: "Умовні речення з 'da' та 'ako'"
          },
          text: {
            en: "In C1, understanding hypothetical vs real conditions is crucial. 'Ako' presents real/possible conditions (Ako budeš učio, položit ćeš - If you study, you will pass). 'Da' + present or perfect expresses highly hypothetical or impossible/past conditions (Da sam znao, došao bih - If I had known, I would have come).",
            ru: "В C1 важно понимать разницу между реальными и нереальными условиями. 'Ako' — для реальных/возможных (Ako budeš učio, položit ćeš). 'Da' + настоящее или прошедшее время выражает гипотетическое/невозможное условие (Da sam znao, došao bih).",
            ua: "У C1 важливо розуміти різницю між реальними та нереальними умовами. 'Ako' — для реальних/можливих (Ako budeš učio, položit ćeš). 'Da' + теперішній або минулий час виражає гіпотетичну/неможливу умову (Da sam znao, došao bih)."
          },
          examples: [
            "Ako kupiš kartu na vrijeme, proći ćeš jeftinije. (If you buy the ticket on time...)",
            "Da imam više slobodnog vremena, upisao bih tečaj slikanja. (If I had more free time...)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "Choose the correct concessive conjunction: _____ nismo imali mnogo vremena, uspjeli smo dovršiti projekt.",
            ru: "Выберите союз: _____ nismo imali mnogo vremena, uspjeli smo dovršiti projekt.",
            ua: "Оберіть сполучник: _____ nismo imali mnogo vremena, uspjeli smo dovršiti projekt."
          },
          options: ["Iako", "Zato što", "Kao da", "Tijekom"],
          correctAnswer: "Iako"
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete the hypothetical clause: Da sam _____ (znati, past active participle masculine) za sastanak, došao bih.",
            ru: "Заполните гипотетическое условие: Da sam _____ (znati, причастие м.р.) za sastanak, došao bih.",
            ua: "Заповніть гіпотетичну умову: Da sam _____ (znati, дієприкметник ч.р.) za sastanak, došao bih."
          },
          correctAnswer: "znao",
          hint: {
            en: "Past active participle of 'znati' for 'ja' (masculine)",
            ru: "Причастие прошедшего времени глагола 'znati' для м.р.",
            ua: "Дієприкметник минулого часу дієслова 'znati' для ч.р."
          }
        },
        {
          type: "multiple-choice",
          question: {
            en: "What does the conjunction 'premda' mean?",
            ru: "Что означает союз 'premda'?",
            ua: "Що означає сполучник 'premda'?"
          },
          options: ["although", "because", "therefore", "unless"],
          correctAnswer: "although"
        },
        {
          type: "translation",
          question: {
            en: "Translate: 'Da imam novca, kupio bih auto.'",
            ru: "Переведите: 'Da imam novca, kupio bih auto.'",
            ua: "Перекладіть: 'Da imam novca, kupio bih auto.'"
          },
          correctAnswer: "If I had money, I would buy a car"
        },
        {
          type: "multiple-choice",
          question: {
            en: "Complete: Ako _____ (biti, future II) gladan, skuhaj nešto.",
            ru: "Заполните: Ako _____ (biti, будущ. II) gladan, skuhaj nešto.",
            ua: "Заповніть: Ako _____ (biti, майбут. II) gladan, skuhaj nešto."
          },
          options: ["budeš", "jesi", "sam", "bude"],
          correctAnswer: "budeš"
        },
        {
          type: "fill-blank",
          question: {
            en: "Translate 'even though' using a 4-letter Croatian word beginning with 'm':",
            ru: "Переведите 'хотя/даже хотя' 4-буквенным хорватским словом на 'm':",
            ua: "Перекладіть 'хоча/навіть хоча' 4-літерним хорватським словом на 'm':"
          },
          correctAnswer: "mada"
        }
      ]
    }
  },
  // C2 Level Lesson 1 — Advanced Expression, Nuances and Idioms
  {
    id: "c2-communication-1",
    type: "communication",
    level: "C2",
    title: {
      en: "Stilske nijanse i frazeologija (Stylistic Nuances & Idioms)",
      ru: "Стилистические нюансы и фразеология",
      ua: "Стилістичні нюанси та фразеологія"
    },
    content: {
      description: {
        en: "Learn to recognize advanced rhetoric, literary devices, and expressions used by native speakers in academic, literary, or political discourse.",
        ru: "Научитесь распознавать сложную риторику, литературные приёмы и фразеологизмы, используемые носителями языка.",
        ua: "Навчіться розпізнавати складну риторику, літературні прийоми та фразеологізми, які використовують носії мови."
      },
      sections: [
        {
          title: {
            en: "Croatian Idioms (Frazemi)",
            ru: "Хорватские фразеологизмы",
            ua: "Хорватські фразеологізми"
          },
          text: {
            en: "C2 fluency requires a deep grasp of idiomatic expressions. Examples: 'Bogu iza nogu' (literally 'behind God's legs', meaning extremely far away / in the middle of nowhere). 'Mlatiti praznu slamu' (literally 'to beat empty straw', meaning to talk nonsense / waste time). 'Prodavati maglu' (literally 'to sell fog', meaning to deceive or mislead people).",
            ru: "Свободное владение на уровне C2 требует глубокого понимания идиоматических выражений. Примеры: 'Bogu iza nogu' (у чёрта на куличках). 'Mlatiti praznu slamu' (переливать из пустого в порожнее). 'Prodavati maglu' (вешать лапшу на уши / пускать пыль в глаза).",
            ua: "Вільне володіння на рівні C2 вимагає глибокого розуміння ідіоматичних виразів. Приклади: 'Bogu iza nogu' (у біса на болоті / дуже далеко). 'Mlatiti praznu slamu' (толокти воду в ступі). 'Prodavati maglu' (замилювати очі / дурити)."
          },
          examples: [
            "Njegovo selo nalazi se Bogu iza nogu. (His village is located in the middle of nowhere.)",
            "Nemoj mi prodavati maglu, znam pravu istinu. (Don't sell me fog, I know the real truth.)"
          ]
        },
        {
          title: {
            en: "Double Negatives in Formal Discourse",
            ru: "Двойное отрицание",
            ua: "Подвійне заперечення"
          },
          text: {
            en: "Unlike English but similar to Russian and Ukrainian, Croatian requires double negatives when negative pronouns or adverbs are used (e.g. Nitko ne zna - Nobody knows; Nikada nismo išli - We never went). However, in C2 contexts, watch for advanced rhetorical structures combining negation to express subtle affirmation or emphasis.",
            ru: "В хорватском языке требуется двойное отрицание при использовании отрицательных местоимений или наречий (Nitko ne zna - Никто не знает).",
            ua: "У хорватській мові потрібне подвійне заперечення при використанні заперечних займенників або прислівників (Nitko ne zna - Ніхто не знає)."
          },
          examples: [
            "Nikada nikome ništa ne govori. (He never tells anyone anything.)",
            "Nema toga tko ne bi poželio uspjeh. (There is nobody who wouldn't wish for success.)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: {
            en: "What does the idiom 'Bogu iza nogu' mean?",
            ru: "Что означает фразеологизм 'Bogu iza nogu'?",
            ua: "Що означає фразеологізм 'Bogu iza nogu'?"
          },
          options: ["Very far away / middle of nowhere", "Close to church", "Immediately", "Blessed situation"],
          correctAnswer: "Very far away / middle of nowhere"
        },
        {
          type: "multiple-choice",
          question: {
            en: "What does the idiom 'mlatiti praznu slamu' translate to metaphorically?",
            ru: "Чему метафорически соответствует фразеологизм 'mlatiti praznu slamu'?",
            ua: "Чому метафорично відповідає фразеологізм 'mlatiti praznu slamu'?"
          },
          options: ["To talk nonsense / waste breath", "To work hard on a field", "To build a straw house", "To sleep deeply"],
          correctAnswer: "To talk nonsense / waste breath"
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete the idiom 'to deceive/mislead': prodavati _____.",
            ru: "Дополните фразеологизм 'вешать лапшу / обманывать': prodavati _____.",
            ua: "Доповніть фразеологізм 'замилювати очі / дурити': prodavati _____."
          },
          correctAnswer: "maglu"
        },
        {
          type: "translation",
          question: {
            en: "Translate: 'Nitko nije došao.'",
            ru: "Переведите: 'Nitko nije došao.'",
            ua: "Перекладіть: 'Nitko nije došao.'"
          },
          correctAnswer: "Nobody came"
        },
        {
          type: "multiple-choice",
          question: {
            en: "Which sentence correctly demonstrates a double negative in Croatian?",
            ru: "Какое предложение грамматически правильно выражает двойное отрицание?",
            ua: "Яке речення граматично правильно виражає подвійне заперечення?"
          },
          options: [
            "Nikad nisam vidio more.",
            "Nikad sam vidio more.",
            "Ja ne vidio more nikad.",
            "Nisam nikad vidio ništa more."
          ],
          correctAnswer: "Nikad nisam vidio more."
        },
        {
          type: "fill-blank",
          question: {
            en: "Complete the double negative: Nikome _____ (prijati, present negative 3rd sing) hladnoća.",
            ru: "Заполните отрицание: Nikome _____ (prijati, отрицат. наст. вр. 3-е л. ед.ч.) hladnoća. (Никому не нравится холод.)",
            ua: "Заповніть заперечення: Nikome _____ (prijati, запереч. тепер. ч. 3-я ос. одн.) hladnoća. (Нікому не подобається холод.)"
          },
          correctAnswer: "ne prija"
        }
      ]
    }
  }
];
