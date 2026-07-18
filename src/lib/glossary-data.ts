export interface LocalizedString {
  en: string;
  ru: string;
  ua: string;
}

export interface GlossaryExample {
  hr: string;
  translation: LocalizedString;
}

export interface GlossaryTableRow {
  cells: (string | LocalizedString)[];
}

export interface GlossaryTable {
  headers: (string | LocalizedString)[];
  rows: GlossaryTableRow[];
}

export interface GlossarySubSection {
  title: LocalizedString;
  text: LocalizedString;
  examples?: GlossaryExample[];
  table?: GlossaryTable;
}

export interface GlossarySection {
  id: string;
  title: LocalizedString;
  icon: string;
  subsections: GlossarySubSection[];
}

export interface GlossaryCategory {
  id: string;
  title: LocalizedString;
  icon: string;
  sections: GlossarySection[];
}

export const glossaryData: GlossaryCategory[] = [
  {
    "id": "phonetics",
    "title": {
      "en": "Phonetics & Alphabet",
      "ru": "Фонетика и алфавит",
      "ua": "Фонетика та алфавіт"
    },
    "icon": "🔤",
    "sections": [
      {
        "id": "alphabet",
        "title": {
          "en": "Croatian Alphabet (Abeceda)",
          "ru": "Хорватский алфавит (Abeceda)",
          "ua": "Хорватський алфавіт (Abeceda)"
        },
        "icon": "📖",
        "subsections": [
          {
            "title": {
              "en": "The Alphabet",
              "ru": "Алфавит",
              "ua": "Алфавіт"
            },
            "text": {
              "en": "Croatian uses the Latin alphabet with 30 letters. Each letter corresponds to exactly one sound — Croatian spelling is fully phonetic. There are no silent letters.",
              "ru": "Хорватский язык использует латинский алфавит из 30 букв. Каждая буква соответствует ровно одному звуку — хорватская орфография полностью фонетическая. Нет немых букв.",
              "ua": "Хорватська мова використовує латинський алфавіт із 30 літер. Кожна літера відповідає рівно одному звуку — хорватська орфографія повністю фонетична. Немає німих літер."
            },
            "table": {
              "headers": [
                "Letter",
                "Name",
                "Sound (IPA)",
                "Example"
              ],
              "rows": [
                {
                  "cells": [
                    "A a",
                    "a",
                    "/a/",
                    "auto (car)"
                  ]
                },
                {
                  "cells": [
                    "B b",
                    "be",
                    "/b/",
                    "brat (brother)"
                  ]
                },
                {
                  "cells": [
                    "C c",
                    "ce",
                    "/ts/",
                    "cesta (road)"
                  ]
                },
                {
                  "cells": [
                    "Č č",
                    "če",
                    "/tʃ/",
                    "čovjek (person)"
                  ]
                },
                {
                  "cells": [
                    "Ć ć",
                    "će",
                    "/tɕ/",
                    "ćevapi (ćevapi)"
                  ]
                },
                {
                  "cells": [
                    "D d",
                    "de",
                    "/d/",
                    "dan (day)"
                  ]
                },
                {
                  "cells": [
                    "Dž dž",
                    "dže",
                    "/dʒ/",
                    "džem (jam)"
                  ]
                },
                {
                  "cells": [
                    "Đ đ",
                    "đe",
                    "/dʑ/",
                    "đak (pupil)"
                  ]
                },
                {
                  "cells": [
                    "E e",
                    "e",
                    "/e/",
                    "Europa (Europe)"
                  ]
                },
                {
                  "cells": [
                    "F f",
                    "ef",
                    "/f/",
                    "film (film)"
                  ]
                },
                {
                  "cells": [
                    "G g",
                    "ge",
                    "/ɡ/",
                    "grad (city)"
                  ]
                },
                {
                  "cells": [
                    "H h",
                    "ha",
                    "/x/",
                    "hvala (thanks)"
                  ]
                },
                {
                  "cells": [
                    "I i",
                    "i",
                    "/i/",
                    "ime (name)"
                  ]
                },
                {
                  "cells": [
                    "J j",
                    "je",
                    "/j/",
                    "jabuka (apple)"
                  ]
                },
                {
                  "cells": [
                    "K k",
                    "ka",
                    "/k/",
                    "kuća (house)"
                  ]
                },
                {
                  "cells": [
                    "L l",
                    "el",
                    "/l/",
                    "lijep (beautiful)"
                  ]
                },
                {
                  "cells": [
                    "Lj lj",
                    "elj",
                    "/ʎ/",
                    "ljubav (love)"
                  ]
                },
                {
                  "cells": [
                    "M m",
                    "em",
                    "/m/",
                    "more (sea)"
                  ]
                },
                {
                  "cells": [
                    "N n",
                    "en",
                    "/n/",
                    "nebo (sky)"
                  ]
                },
                {
                  "cells": [
                    "Nj nj",
                    "enj",
                    "/ɲ/",
                    "njega (him)"
                  ]
                },
                {
                  "cells": [
                    "O o",
                    "o",
                    "/o/",
                    "otac (father)"
                  ]
                },
                {
                  "cells": [
                    "P p",
                    "pe",
                    "/p/",
                    "pas (dog)"
                  ]
                },
                {
                  "cells": [
                    "R r",
                    "er",
                    "/r/",
                    "riba (fish)"
                  ]
                },
                {
                  "cells": [
                    "S s",
                    "es",
                    "/s/",
                    "sunce (sun)"
                  ]
                },
                {
                  "cells": [
                    "Š š",
                    "eš",
                    "/ʃ/",
                    "škola (school)"
                  ]
                },
                {
                  "cells": [
                    "T t",
                    "te",
                    "/t/",
                    "tata (dad)"
                  ]
                },
                {
                  "cells": [
                    "U u",
                    "u",
                    "/u/",
                    "ulica (street)"
                  ]
                },
                {
                  "cells": [
                    "V v",
                    "ve",
                    "/ʋ/",
                    "voda (water)"
                  ]
                },
                {
                  "cells": [
                    "Z z",
                    "ze",
                    "/z/",
                    "zemlja (earth)"
                  ]
                },
                {
                  "cells": [
                    "Ž ž",
                    "že",
                    "/ʒ/",
                    "žena (woman)"
                  ]
                }
              ]
            }
          },
          {
            "title": {
              "en": "Special Letters",
              "ru": "Особые буквы",
              "ua": "Особливі літери"
            },
            "text": {
              "en": "Croatian has several unique letters: Č, Ć, Đ, Dž, Lj, Nj, Š, Ž. The digraphs Dž, Lj, Nj are each considered single letters. Č vs Ć: Č is a 'hard' ch (like English 'church'), while Ć is a 'soft' ch (palatalized, similar to Italian 'ci').",
              "ru": "В хорватском несколько уникальных букв: Č, Ć, Đ, Dž, Lj, Nj, Š, Ž. Диграфы Dž, Lj, Nj считаются одной буквой. Č vs Ć: Č — «твёрдый» звук (как англ. 'church'), а Ć — «мягкий» (палатализованный, похож на итальянское 'ci').",
              "ua": "У хорватській кілька унікальних літер: Č, Ć, Đ, Dž, Lj, Nj, Š, Ž. Диграфи Dž, Lj, Nj вважаються однією літерою. Č vs Ć: Č — «твердий» звук (як англ. 'church'), а Ć — «м'який» (палаталізований, схожий на італійське 'ci')."
            },
            "examples": [
              {
                "hr": "Čovjek je dobar.",
                "translation": {
                  "en": "The person is good.",
                  "ru": "Человек хороший.",
                  "ua": "Людина добра."
                }
              },
              {
                "hr": "Noć je lijepa.",
                "translation": {
                  "en": "The night is beautiful.",
                  "ru": "Ночь красива.",
                  "ua": "Ніч гарна."
                }
              }
            ]
          }
        ]
      },
      {
        "id": "pronunciation",
        "title": {
          "en": "Pronunciation Rules",
          "ru": "Правила произношения",
          "ua": "Правила вимови"
        },
        "icon": "🗣️",
        "subsections": [
          {
            "title": {
              "en": "Stress and Intonation",
              "ru": "Ударение и интонация",
              "ua": "Наголос та інтонація"
            },
            "text": {
              "en": "Croatian has a pitch accent system with four types of stress: short falling, short rising, long falling, long rising. Stress never falls on the last syllable (except in some monosyllabic words). In standard speech, stress tends to be on the first or second syllable.",
              "ru": "В хорватском языке есть тональная система ударения с четырьмя типами: краткое нисходящее, краткое восходящее, долгое нисходящее, долгое восходящее. Ударение никогда не падает на последний слог (кроме некоторых односложных слов).",
              "ua": "У хорватській мові є тональна система наголосу з чотирма типами: короткий спадний, короткий висхідний, довгий спадний, довгий висхідний. Наголос ніколи не падає на останній склад (крім деяких односкладових слів)."
            },
            "examples": [
              {
                "hr": "vòda",
                "translation": {
                  "en": "water (short rising)",
                  "ru": "вода (краткое восходящее)",
                  "ua": "вода (короткий висхідний)"
                }
              },
              {
                "hr": "glâva",
                "translation": {
                  "en": "head (long falling)",
                  "ru": "голова (долгое нисходящее)",
                  "ua": "голова (довгий спадний)"
                }
              }
            ]
          },
          {
            "title": {
              "en": "Syllabic R",
              "ru": "Слоговое R",
              "ua": "Складове R"
            },
            "text": {
              "en": "In Croatian, the letter R can function as a vowel and form its own syllable. This is called 'syllabic R' (slogovno R). It appears in many common words.",
              "ru": "В хорватском буква R может выступать в роли гласного и образовывать собственный слог. Это называется «слоговое R» (slogovno R). Встречается во многих распространённых словах.",
              "ua": "У хорватській літера R може виступати в ролі голосного та утворювати власний склад. Це називається «складове R» (slogovno R). Зустрічається в багатьох поширених словах."
            },
            "examples": [
              {
                "hr": "krv",
                "translation": {
                  "en": "blood",
                  "ru": "кровь",
                  "ua": "кров"
                }
              },
              {
                "hr": "prst",
                "translation": {
                  "en": "finger",
                  "ru": "палец",
                  "ua": "палець"
                }
              },
              {
                "hr": "trg",
                "translation": {
                  "en": "square (plaza)",
                  "ru": "площадь",
                  "ua": "площа"
                }
              },
              {
                "hr": "crn",
                "translation": {
                  "en": "black",
                  "ru": "чёрный",
                  "ua": "чорний"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "accentology",
        "title": {
          "en": "Prosody & Accents",
          "ru": "Просодия и ударения",
          "ua": "Просодія та наголоси"
        },
        "icon": "🗣️",
        "subsections": [
          {
            "title": {
              "en": "4 Pitch Accents",
              "ru": "4 тональных ударения",
              "ua": "4 тональні наголоси"
            },
            "text": {
              "en": "Standard Croatian has a system of 4 musical accents (pitch accents) combining tone (rising/falling) and length (short/long), plus post-accentual length (poslijeaccentna duljina):",
              "ru": "Стандартный хорватский имеет систему из 4 музыкальных ударений, сочетающих тон (восходящее/нисходящее) и долготу (краткое/долгое), а также заударную долготу (poslijeaccentna duljina):",
              "ua": "Стандартна хорватська має систему з 4 музичних наголосів, що поєднують тон (висхідний/спадний) і довготу (короткий/довгий), а також заударну довготу (poslijeaccentna duljina):"
            },
            "table": {
              "headers": [
                "Accent Name",
                "Sign",
                "Example",
                {
                  "en": "Description",
                  "ru": "Описание",
                  "ua": "Опис"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Kratkouzlazni",
                    " ̀ (à)",
                    "vòda (water)",
                    {
                      "en": "Short rising",
                      "ru": "Краткое восходящее",
                      "ua": "Короткий висхідний"
                    }
                  ]
                },
                {
                  "cells": [
                    "Kratkosilazni",
                    " ̏ (ȁ)",
                    "kȕća (house)",
                    {
                      "en": "Short falling",
                      "ru": "Краткое нисходящее",
                      "ua": "Короткий спадний"
                    }
                  ]
                },
                {
                  "cells": [
                    "Dugouzlazni",
                    " ́ (á)",
                    "rúka (hand)",
                    {
                      "en": "Long rising",
                      "ru": "Долгое восходящее",
                      "ua": "Довгий висхідний"
                    }
                  ]
                },
                {
                  "cells": [
                    "Dugosilazni",
                    " ̂ (â)",
                    "grâd (city)",
                    {
                      "en": "Long falling",
                      "ru": "Долгое нисходящее",
                      "ua": "Довгий спадний"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "sound_changes",
        "title": {
          "en": "Morphonological Changes",
          "ru": "Звуковые чередования",
          "ua": "Чергування звуків"
        },
        "icon": "🔄",
        "subsections": [
          {
            "title": {
              "en": "Palatalization & Sibilarization",
              "ru": "Палатализация и сибиляризация",
              "ua": "Палаталізація та сибіляризація"
            },
            "text": {
              "en": "Key sound mutations during declension and conjugation:\n- Palatalization (Palatalizacija): k, g, h → č, ž, š before e, i (vuk → vuče).\n- Sibilarization (Sibilarizacija): k, g, h → c, z, s before i (ruka → ruci). Exceptions occur in hypocoristics and names.",
              "ru": "Ключевые изменения звуков при склонении и спряжении:\n- Палатализация: k, g, h → č, ž, š перед e, i (vuk → vuče).\n- Сибиляризация (вторая палатализация): k, g, h → c, z, s перед i (ruka → ruci). Есть исключения в именах собственных и уменьшительных.",
              "ua": "Ключові зміни звуків при відмінюванні та дієвідмінюванні:\n- Палаталізація: k, g, h → č, ž, š перед e, i (vuk → vuče).\n- Сибіляризація (друга палаталізація): k, g, h → c, z, s перед i (ruka → ruci). Є винятки у власних назвах та пестливих словах."
            },
            "table": {
              "headers": [
                "Mutation Type",
                "Rule",
                "Example",
                {
                  "en": "Meaning",
                  "ru": "Значение",
                  "ua": "Значення"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Palatalizacija",
                    "k/g/h -> č/ž/š",
                    "vuk (nom) -> vuče (voc)",
                    {
                      "en": "wolf -> wolf!",
                      "ru": "волк -> волк!",
                      "ua": "вовк -> вовче!"
                    }
                  ]
                },
                {
                  "cells": [
                    "Sibilarizacija",
                    "k/g/h -> c/z/s",
                    "ruka (nom) -> ruci (dat)",
                    {
                      "en": "hand -> to the hand",
                      "ru": "рука -> руке",
                      "ua": "рука -> руці"
                    }
                  ]
                },
                {
                  "cells": [
                    "Jotacija",
                    "consonant + j",
                    "platiti -> plaćen",
                    {
                      "en": "to pay -> paid",
                      "ru": "платить -> оплаченный",
                      "ua": "платити -> оплачений"
                    }
                  ]
                },
                {
                  "cells": [
                    "Epentetsko l",
                    "labial + j -> l",
                    "zemlja (from zem-ja)",
                    {
                      "en": "land / earth",
                      "ru": "земля",
                      "ua": "земля"
                    }
                  ]
                },
                {
                  "cells": [
                    "Nepostojano a",
                    "fleeting a",
                    "pas -> psa",
                    {
                      "en": "dog (nom) -> dog (gen)",
                      "ru": "собака -> собаки",
                      "ua": "собака -> собаки"
                    }
                  ]
                },
                {
                  "cells": [
                    "Vokalizacija",
                    "l -> o at end",
                    "čitao (from čital)",
                    {
                      "en": "read (past masc.)",
                      "ru": "читал",
                      "ua": "читав"
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "cases",
    "title": {
      "en": "Noun Cases (Padeži)",
      "ru": "Падежи (Padeži)",
      "ua": "Відмінки (Padeži)"
    },
    "icon": "📝",
    "sections": [
      {
        "id": "nominativ",
        "title": {
          "en": "Nominative (Nominativ)",
          "ru": "Именительный (Nominativ)",
          "ua": "Називний (Nominativ)"
        },
        "icon": "1️⃣",
        "subsections": [
          {
            "title": {
              "en": "Usage",
              "ru": "Использование",
              "ua": "Використання"
            },
            "text": {
              "en": "The nominative case is the basic, dictionary form of a noun. It answers the questions 'Tko?' (Who?) and 'Što?' (What?). It is used for the subject of a sentence.",
              "ru": "Именительный падеж — базовая, словарная форма существительного. Отвечает на вопросы 'Tko?' (Кто?) и 'Što?' (Что?). Используется для подлежащего.",
              "ua": "Називний відмінок — базова, словникова форма іменника. Відповідає на питання 'Tko?' (Хто?) і 'Što?' (Що?). Використовується для підмета."
            },
            "examples": [
              {
                "hr": "Žena čita knjigu.",
                "translation": {
                  "en": "The woman reads a book.",
                  "ru": "Женщина читает книгу.",
                  "ua": "Жінка читає книгу."
                }
              },
              {
                "hr": "Grad je lijep.",
                "translation": {
                  "en": "The city is beautiful.",
                  "ru": "Город красивый.",
                  "ua": "Місто гарне."
                }
              }
            ]
          },
          {
            "title": {
              "en": "Noun Genders",
              "ru": "Роды существительных",
              "ua": "Роди іменників"
            },
            "text": {
              "en": "Croatian has three genders: masculine (muški rod), feminine (ženski rod), neuter (srednji rod). Masculine nouns typically end in a consonant, feminine in -a, neuter in -o or -e.",
              "ru": "В хорватском три рода: мужской (muški rod), женский (ženski rod), средний (srednji rod). Мужской род обычно оканчивается на согласную, женский на -a, средний на -o или -e.",
              "ua": "У хорватській три роди: чоловічий (muški rod), жіночий (ženski rod), середній (srednji rod). Чоловічий рід зазвичай закінчується на приголосну, жіночий на -a, середній на -o або -e."
            },
            "table": {
              "headers": [
                "Gender",
                "Ending",
                "Example",
                "Translation"
              ],
              "rows": [
                {
                  "cells": [
                    "Masculine",
                    "consonant",
                    "grad",
                    "city"
                  ]
                },
                {
                  "cells": [
                    "Masculine",
                    "consonant",
                    "student",
                    "student"
                  ]
                },
                {
                  "cells": [
                    "Feminine",
                    "-a",
                    "žena",
                    "woman"
                  ]
                },
                {
                  "cells": [
                    "Feminine",
                    "-a",
                    "knjiga",
                    "book"
                  ]
                },
                {
                  "cells": [
                    "Neuter",
                    "-o / -e",
                    "selo",
                    "village"
                  ]
                },
                {
                  "cells": [
                    "Neuter",
                    "-o / -e",
                    "more",
                    "sea"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "genitiv",
        "title": {
          "en": "Genitive (Genitiv)",
          "ru": "Родительный (Genitiv)",
          "ua": "Родовий (Genitiv)"
        },
        "icon": "2️⃣",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "Использование и образование",
              "ua": "Використання та утворення"
            },
            "text": {
              "en": "The genitive answers 'Koga?' (Whom?) and 'Čega?' (Of what?). It expresses possession, origin, part of a whole, and is used after many prepositions (iz, od, do, bez, kod, blizu, ispred, iza, ispod, iznad, oko, protiv, nakon, prije, tijekom).",
              "ru": "Родительный падеж отвечает на вопросы 'Koga?' (Кого?) и 'Čega?' (Чего?). Выражает принадлежность, происхождение, часть целого. Используется после предлогов: iz, od, do, bez, kod, blizu, ispred, iza, ispod, iznad, oko, protiv, nakon, prije, tijekom.",
              "ua": "Родовий відмінок відповідає на питання 'Koga?' (Кого?) і 'Čega?' (Чого?). Виражає належність, походження, частину цілого. Використовується після прийменників: iz, od, do, bez, kod, blizu, ispred, iza, ispod, iznad, oko, protiv, nakon, prije, tijekom."
            },
            "table": {
              "headers": [
                "Gender",
                "Nom. Sing.",
                "Gen. Sing.",
                "Gen. Plural"
              ],
              "rows": [
                {
                  "cells": [
                    "Masc.",
                    "grad",
                    "grada",
                    "gradova"
                  ]
                },
                {
                  "cells": [
                    "Masc.",
                    "student",
                    "studenta",
                    "studenata"
                  ]
                },
                {
                  "cells": [
                    "Fem.",
                    "žena",
                    "žene",
                    "žena"
                  ]
                },
                {
                  "cells": [
                    "Fem.",
                    "knjiga",
                    "knjige",
                    "knjiga"
                  ]
                },
                {
                  "cells": [
                    "Neut.",
                    "selo",
                    "sela",
                    "sela"
                  ]
                },
                {
                  "cells": [
                    "Neut.",
                    "more",
                    "mora",
                    "mora"
                  ]
                }
              ]
            },
            "examples": [
              {
                "hr": "To je kuća moga oca.",
                "translation": {
                  "en": "That is my father's house.",
                  "ru": "Это дом моего отца.",
                  "ua": "Це дім мого батька."
                }
              },
              {
                "hr": "Čaša vode, molim.",
                "translation": {
                  "en": "A glass of water, please.",
                  "ru": "Стакан воды, пожалуйста.",
                  "ua": "Склянку води, будь ласка."
                }
              },
              {
                "hr": "Dolazim iz Zagreba.",
                "translation": {
                  "en": "I come from Zagreb.",
                  "ru": "Я из Загреба.",
                  "ua": "Я із Загреба."
                }
              }
            ]
          }
        ]
      },
      {
        "id": "dativ",
        "title": {
          "en": "Dative (Dativ)",
          "ru": "Дательный (Dativ)",
          "ua": "Давальний (Dativ)"
        },
        "icon": "3️⃣",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "Использование и образование",
              "ua": "Використання та утворення"
            },
            "text": {
              "en": "The dative answers 'Komu?' (To whom?) and 'Čemu?' (To what?). It expresses the indirect object — the recipient of an action. Used after prepositions: k/ka (towards), prema (towards), usprkos/unatoč (despite).",
              "ru": "Дательный падеж отвечает на вопросы 'Komu?' (Кому?) и 'Čemu?' (Чему?). Выражает косвенное дополнение. Используется после предлогов: k/ka (к), prema (к, по направлению), usprkos/unatoč (несмотря на).",
              "ua": "Давальний відмінок відповідає на питання 'Komu?' (Кому?) і 'Čemu?' (Чому?). Виражає непрямий додаток. Використовується після прийменників: k/ka (до), prema (до, у напрямку), usprkos/unatoč (незважаючи на)."
            },
            "table": {
              "headers": [
                "Gender",
                "Nom. Sing.",
                "Dat. Sing.",
                "Dat. Plural"
              ],
              "rows": [
                {
                  "cells": [
                    "Masc.",
                    "brat",
                    "bratu",
                    "braći"
                  ]
                },
                {
                  "cells": [
                    "Masc.",
                    "prijatelj",
                    "prijatelju",
                    "prijateljima"
                  ]
                },
                {
                  "cells": [
                    "Fem.",
                    "sestra",
                    "sestri",
                    "sestrama"
                  ]
                },
                {
                  "cells": [
                    "Fem.",
                    "majka",
                    "majci",
                    "majkama"
                  ]
                },
                {
                  "cells": [
                    "Neut.",
                    "dijete",
                    "djetetu",
                    "djeci"
                  ]
                }
              ]
            },
            "examples": [
              {
                "hr": "Dajem poklon bratu.",
                "translation": {
                  "en": "I give a gift to my brother.",
                  "ru": "Я дарю подарок брату.",
                  "ua": "Я даю подарунок брату."
                }
              },
              {
                "hr": "Pišem pismo prijatelju.",
                "translation": {
                  "en": "I write a letter to a friend.",
                  "ru": "Я пишу письмо другу.",
                  "ua": "Я пишу листа другу."
                }
              }
            ]
          }
        ]
      },
      {
        "id": "akuzativ",
        "title": {
          "en": "Accusative (Akuzativ)",
          "ru": "Винительный (Akuzativ)",
          "ua": "Знахідний (Akuzativ)"
        },
        "icon": "4️⃣",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "Использование и образование",
              "ua": "Використання та утворення"
            },
            "text": {
              "en": "The accusative answers 'Koga?' (Whom?) and 'Što?' (What?). It marks the direct object. Used after prepositions: u (into), na (onto), za (for), kroz (through), po (for/to fetch). Key rule: feminine nouns ending in -a change to -u.",
              "ru": "Винительный падеж отвечает на вопросы 'Koga?' (Кого?) и 'Što?' (Что?). Обозначает прямое дополнение. Используется после предлогов: u (в), na (на), za (для), kroz (через), po (за). Ключевое правило: женский род на -a меняет на -u.",
              "ua": "Знахідний відмінок відповідає на питання 'Koga?' (Кого?) і 'Što?' (Що?). Позначає прямий додаток. Використовується після прийменників: u (у, в), na (на), za (для), kroz (через), po (за). Ключове правило: жіночий рід на -a змінює на -u."
            },
            "table": {
              "headers": [
                "Gender",
                "Nom. Sing.",
                "Acc. Sing.",
                "Rule"
              ],
              "rows": [
                {
                  "cells": [
                    "Masc. inanimate",
                    "grad",
                    "grad",
                    "= Nominative"
                  ]
                },
                {
                  "cells": [
                    "Masc. animate",
                    "brat",
                    "brata",
                    "= Genitive"
                  ]
                },
                {
                  "cells": [
                    "Feminine",
                    "žena",
                    "ženu",
                    "-a → -u"
                  ]
                },
                {
                  "cells": [
                    "Feminine",
                    "knjiga",
                    "knjigu",
                    "-a → -u"
                  ]
                },
                {
                  "cells": [
                    "Neuter",
                    "selo",
                    "selo",
                    "= Nominative"
                  ]
                }
              ]
            },
            "examples": [
              {
                "hr": "Vidim more.",
                "translation": {
                  "en": "I see the sea.",
                  "ru": "Я вижу море.",
                  "ua": "Я бачу море."
                }
              },
              {
                "hr": "Čitam knjigu.",
                "translation": {
                  "en": "I read a book.",
                  "ru": "Я читаю книгу.",
                  "ua": "Я читаю книгу."
                }
              },
              {
                "hr": "Volim brata.",
                "translation": {
                  "en": "I love my brother.",
                  "ru": "Я люблю брата.",
                  "ua": "Я люблю брата."
                }
              }
            ]
          }
        ]
      },
      {
        "id": "vokativ",
        "title": {
          "en": "Vocative (Vokativ)",
          "ru": "Звательный (Vokativ)",
          "ua": "Кличний (Vokativ)"
        },
        "icon": "5️⃣",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "Использование и образование",
              "ua": "Використання та утворення"
            },
            "text": {
              "en": "The vocative is used for direct address — calling someone by name. Masculine nouns add -e or -u, feminine nouns change -a to -o, neuter nouns stay the same.",
              "ru": "Звательный падеж используется для прямого обращения — когда зовёте кого-то по имени. Мужской род добавляет -e или -u, женский меняет -a на -o, средний не меняется.",
              "ua": "Кличний відмінок використовується для прямого звертання. Чоловічий рід додає -e або -u, жіночий змінює -a на -o, середній не змінюється."
            },
            "examples": [
              {
                "hr": "Ivane, dođi ovamo!",
                "translation": {
                  "en": "Ivan, come here!",
                  "ru": "Иван, иди сюда!",
                  "ua": "Іване, іди сюди!"
                }
              },
              {
                "hr": "Ano, jesi li tu?",
                "translation": {
                  "en": "Ana, are you there?",
                  "ru": "Ана, ты здесь?",
                  "ua": "Ано, ти тут?"
                }
              },
              {
                "hr": "Profesore, imam pitanje.",
                "translation": {
                  "en": "Professor, I have a question.",
                  "ru": "Профессор, у меня вопрос.",
                  "ua": "Професоре, у мене питання."
                }
              }
            ]
          }
        ]
      },
      {
        "id": "lokativ",
        "title": {
          "en": "Locative (Lokativ)",
          "ru": "Местный (Lokativ)",
          "ua": "Місцевий (Lokativ)"
        },
        "icon": "6️⃣",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "Использование и образование",
              "ua": "Використання та утворення"
            },
            "text": {
              "en": "The locative answers 'O komu?' (About whom?) and 'O čemu?' (About what?), and 'Gdje?' (Where?). Always used with prepositions: u (in), na (on), o (about), po (around/on), pri (at, near). Endings are the same as dative.",
              "ru": "Местный падеж отвечает на вопросы 'O komu?' (О ком?) и 'O čemu?' (О чём?), 'Gdje?' (Где?). Всегда используется с предлогами: u (в), na (на), o (о), po (по), pri (при). Окончания совпадают с дательным.",
              "ua": "Місцевий відмінок відповідає на питання 'O komu?' (Про кого?) і 'O čemu?' (Про що?), 'Gdje?' (Де?). Завжди використовується з прийменниками: u (у), na (на), o (про), po (по), pri (при). Закінчення збігаються з давальним."
            },
            "examples": [
              {
                "hr": "Živim u Zagrebu.",
                "translation": {
                  "en": "I live in Zagreb.",
                  "ru": "Я живу в Загребе.",
                  "ua": "Я живу в Загребі."
                }
              },
              {
                "hr": "Knjiga je na stolu.",
                "translation": {
                  "en": "The book is on the table.",
                  "ru": "Книга на столе.",
                  "ua": "Книга на столі."
                }
              },
              {
                "hr": "Pričamo o filmu.",
                "translation": {
                  "en": "We're talking about the movie.",
                  "ru": "Мы говорим о фильме.",
                  "ua": "Ми говоримо про фільм."
                }
              }
            ]
          }
        ]
      },
      {
        "id": "instrumental",
        "title": {
          "en": "Instrumental (Instrumental)",
          "ru": "Творительный (Instrumental)",
          "ua": "Орудний (Instrumental)"
        },
        "icon": "7️⃣",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "Использование и образование",
              "ua": "Використання та утворення"
            },
            "text": {
              "en": "The instrumental answers 'S kim?' (With whom?) and 'Čime?' (With what?). Expresses instrument/means or accompaniment. Used with prepositions: s/sa (with), pred (in front of), za (behind), nad (above), pod (under), među (between/among).",
              "ru": "Творительный падеж отвечает на вопросы 'S kim?' (С кем?) и 'Čime?' (Чем?). Выражает инструмент/средство или сопровождение. Предлоги: s/sa (с), pred (перед), za (за), nad (над), pod (под), među (между).",
              "ua": "Орудний відмінок відповідає на питання 'S kim?' (З ким?) і 'Čime?' (Чим?). Виражає інструмент/засіб або супровід. Прийменники: s/sa (з), pred (перед), za (за), nad (над), pod (під), među (між)."
            },
            "table": {
              "headers": [
                "Gender",
                "Nom. Sing.",
                "Instr. Sing.",
                "Instr. Plural"
              ],
              "rows": [
                {
                  "cells": [
                    "Masc.",
                    "brat",
                    "bratom",
                    "braćom"
                  ]
                },
                {
                  "cells": [
                    "Masc.",
                    "auto",
                    "autom",
                    "autima"
                  ]
                },
                {
                  "cells": [
                    "Fem.",
                    "žena",
                    "ženom",
                    "ženama"
                  ]
                },
                {
                  "cells": [
                    "Fem.",
                    "ruka",
                    "rukom",
                    "rukama"
                  ]
                },
                {
                  "cells": [
                    "Neut.",
                    "selo",
                    "selom",
                    "selima"
                  ]
                }
              ]
            },
            "examples": [
              {
                "hr": "Pišem olovkom.",
                "translation": {
                  "en": "I write with a pencil.",
                  "ru": "Я пишу карандашом.",
                  "ua": "Я пишу олівцем."
                }
              },
              {
                "hr": "Idem s prijateljem.",
                "translation": {
                  "en": "I go with a friend.",
                  "ru": "Я иду с другом.",
                  "ua": "Я йду з другом."
                }
              },
              {
                "hr": "Putujem vlakom.",
                "translation": {
                  "en": "I travel by train.",
                  "ru": "Я путешествую поездом.",
                  "ua": "Я подорожую потягом."
                }
              }
            ]
          }
        ]
      },
      {
        "id": "cases-summary",
        "title": {
          "en": "Noun Cases Summary",
          "ru": "Сводная таблица падежей",
          "ua": "Зведена таблиця відмінків"
        },
        "icon": "📊",
        "subsections": [
          {
            "title": {
              "en": "Summary of Endings",
              "ru": "Сводка окончаний",
              "ua": "Зведення закінчень"
            },
            "text": {
              "en": "Here is a quick overview of the standard singular and plural endings for masculine, feminine, and neuter nouns across all seven cases in Croatian.",
              "ru": "Вот краткий обзор стандартных окончаний единственного и множественного числа для существительных мужского, женского и среднего рода во всех семи падежах хорватского языка.",
              "ua": "Ось короткий огляд стандартних закінчень однини та множини для іменників чоловічого, жіночого та середнього роду у всіх семи відмінках хорватської мови."
            },
            "table": {
              "headers": [
                "Case / Pad",
                "Masc. Sing.",
                "Masc. Plur.",
                "Fem. Sing.",
                "Fem. Plur.",
                "Neut. Sing.",
                "Neut. Plur."
              ],
              "rows": [
                {
                  "cells": [
                    "Nominativ",
                    "Ø (no ending)",
                    "-i / -ovi",
                    "-a",
                    "-e",
                    "-o / -e",
                    "-a"
                  ]
                },
                {
                  "cells": [
                    "Genitiv",
                    "-a",
                    "-a",
                    "-e",
                    "-a",
                    "-a",
                    "-a"
                  ]
                },
                {
                  "cells": [
                    "Dativ",
                    "-u",
                    "-ima",
                    "-i",
                    "-ama",
                    "-u",
                    "-ima"
                  ]
                },
                {
                  "cells": [
                    "Akuzativ",
                    "Ø (inanim.) / -a (anim.)",
                    "-e",
                    "-u",
                    "-e",
                    "-o / -e",
                    "-a"
                  ]
                },
                {
                  "cells": [
                    "Vokativ",
                    "-e / -u",
                    "-i",
                    "-o / -e",
                    "-e",
                    "-o / -e",
                    "-a"
                  ]
                },
                {
                  "cells": [
                    "Lokativ",
                    "-u",
                    "-ima",
                    "-i",
                    "-ama",
                    "-u",
                    "-ima"
                  ]
                },
                {
                  "cells": [
                    "Instrumental",
                    "-om / -em",
                    "-ima",
                    "-om",
                    "-ama",
                    "-om / -em",
                    "-ima"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "plurality",
        "title": {
          "en": "Singular & Plural (Jednina i množina)",
          "ru": "Число (Jednina и množina)",
          "ua": "Число (Jednina та množina)"
        },
        "icon": "👥",
        "subsections": [
          {
            "title": {
              "en": "Grammatical Number",
              "ru": "Грамматическое число",
              "ua": "Граматичне число"
            },
            "text": {
              "en": "Croatian nouns have two numbers: Singular (Jednina) and Plural (Množina). Plural masculine nouns can undergo stem changes, such as adding the infix '-ov-' or '-ev-' for short monosyllabic words (e.g., grad → gradovi, stol → stolovi).",
              "ru": "Хорватские существительные имеют два числа: Единственное (Jednina) и Множественное (Množina). Существительные мужского рода во множественном числе могут изменять основу, добавляя суффикс '-ov-' или '-ev-' для коротких односложных слов (например, grad → gradovi, stol → stolovi).",
              "ua": "Хорватські іменники мають два числа: Однину (Jednina) та Множину (Množina). Іменники чоловічого роду у множині можуть змінювати основу, додаючи суфікс '-ov-' або '-ev-' для коротких односкладових слів (наприклад, grad → gradovi, stol → stolovi)."
            },
            "examples": [
              {
                "hr": "grad (singular) → gradovi (plural)",
                "translation": {
                  "en": "city → cities",
                  "ru": "город → города",
                  "ua": "місто → міста"
                }
              },
              {
                "hr": "žena (singular) → žene (plural)",
                "translation": {
                  "en": "woman → women",
                  "ru": "женщина → женщины",
                  "ua": "жінка → жінки"
                }
              },
              {
                "hr": "selo (singular) → sela (plural)",
                "translation": {
                  "en": "village → villages",
                  "ru": "деревня → деревни",
                  "ua": "село → села"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "articles",
        "title": {
          "en": "Absence of Articles",
          "ru": "Отсутствие артиклей",
          "ua": "Відсутність артиклів"
        },
        "icon": "❌",
        "subsections": [
          {
            "title": {
              "en": "Grammatical Note",
              "ru": "Грамматическая заметка",
              "ua": "Граматична примітка"
            },
            "text": {
              "en": "Croatian does not have articles (like 'a', 'an', or 'the'). Nouns are used on their own, and definiteness is conveyed by context, word order, or demonstrative pronouns (e.g. ovaj, taj).",
              "ru": "В хорватском языке нет артиклей (таких как английские 'a' или 'the'). Существительные используются сами по себе, а определенность передается контекстом, порядком слов или указательными местоимениями (ovaj, taj).",
              "ua": "У хорватській мові немає артиклів (таких як англійські 'a' або 'the'). Іменники використовуються самі по собі, а визначеність передається контекстом, порядком слів або вказівними займенниками (ovaj, taj)."
            },
            "examples": [
              {
                "hr": "Knjiga je na stolu.",
                "translation": {
                  "en": "The book is on the table. (or 'A book is on a table.')",
                  "ru": "Книга на столе.",
                  "ua": "Книга на столі."
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "verbs",
    "title": {
      "en": "Verbs (Glagoli)",
      "ru": "Глаголы (Glagoli)",
      "ua": "Дієслова (Glagoli)"
    },
    "icon": "🔄",
    "sections": [
      {
        "id": "present",
        "title": {
          "en": "Present Tense (Prezent)",
          "ru": "Настоящее время (Prezent)",
          "ua": "Теперішній час (Prezent)"
        },
        "icon": "⏰",
        "subsections": [
          {
            "title": {
              "en": "Conjugation Groups",
              "ru": "Группы спряжения",
              "ua": "Групи дієвідмінювання"
            },
            "text": {
              "en": "Croatian verbs in present tense are conjugated based on the vowel before the personal ending. The three main conjugation groups are: -a- conjugation (e.g. čitati → čitam), -i- conjugation (e.g. govoriti → govorim), -e- conjugation (e.g. pisati → pišem).",
              "ru": "Хорватские глаголы в настоящем времени спрягаются по гласному перед личным окончанием. Три основные группы: на -a- (čitati → čitam), на -i- (govoriti → govorim), на -e- (pisati → pišem).",
              "ua": "Хорватські дієслова у теперішньому часі дієвідмінюються за голосним перед особовим закінченням. Три основні групи: на -a- (čitati → čitam), на -i- (govoriti → govorim), на -e- (pisati → pišem)."
            },
            "table": {
              "headers": [
                "Person",
                "čitati (read)",
                "govoriti (speak)",
                "pisati (write)"
              ],
              "rows": [
                {
                  "cells": [
                    "ja",
                    "čitam",
                    "govorim",
                    "pišem"
                  ]
                },
                {
                  "cells": [
                    "ti",
                    "čitaš",
                    "govoriš",
                    "pišeš"
                  ]
                },
                {
                  "cells": [
                    "on/ona/ono",
                    "čita",
                    "govori",
                    "piše"
                  ]
                },
                {
                  "cells": [
                    "mi",
                    "čitamo",
                    "govorimo",
                    "pišemo"
                  ]
                },
                {
                  "cells": [
                    "vi",
                    "čitate",
                    "govorite",
                    "pišete"
                  ]
                },
                {
                  "cells": [
                    "oni/one/ona",
                    "čitaju",
                    "govore",
                    "pišu"
                  ]
                }
              ]
            }
          },
          {
            "title": {
              "en": "Verb 'biti' (to be)",
              "ru": "Глагол 'biti' (быть)",
              "ua": "Дієслово 'biti' (бути)"
            },
            "text": {
              "en": "The verb 'biti' is the most important verb in Croatian. It has both long (stressed) and short (enclitic) forms. Short forms are used more commonly.",
              "ru": "Глагол 'biti' — самый важный глагол в хорватском. Имеет длинные (ударные) и короткие (энклитические) формы. Короткие формы используются чаще.",
              "ua": "Дієслово 'biti' — найважливіше дієслово в хорватській. Має довгі (наголошені) та короткі (енклітичні) форми. Короткі форми використовуються частіше."
            },
            "table": {
              "headers": [
                "Person",
                "Long form",
                "Short form",
                "Negative"
              ],
              "rows": [
                {
                  "cells": [
                    "ja",
                    "jesam",
                    "sam",
                    "nisam"
                  ]
                },
                {
                  "cells": [
                    "ti",
                    "jesi",
                    "si",
                    "nisi"
                  ]
                },
                {
                  "cells": [
                    "on/ona/ono",
                    "jest/jeste",
                    "je",
                    "nije"
                  ]
                },
                {
                  "cells": [
                    "mi",
                    "jesmo",
                    "smo",
                    "nismo"
                  ]
                },
                {
                  "cells": [
                    "vi",
                    "jeste",
                    "ste",
                    "niste"
                  ]
                },
                {
                  "cells": [
                    "oni/one/ona",
                    "jesu",
                    "su",
                    "nisu"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "past",
        "title": {
          "en": "Past Tense (Perfekt)",
          "ru": "Прошедшее время (Perfekt)",
          "ua": "Минулий час (Perfekt)"
        },
        "icon": "⏪",
        "subsections": [
          {
            "title": {
              "en": "Perfekt (Past Tense)",
              "ru": "Перфект (Прошедшее время)",
              "ua": "Перфект (Минулий час)"
            },
            "text": {
              "en": "The perfekt (past tense) is the main past tense in Croatian. It is formed with the short form of 'biti' + active past participle (glagolski pridjev radni). The participle changes by gender and number: -o (masc.), -la (fem.), -lo (neut.), -li (masc. pl.), -le (fem. pl.), -la (neut. pl.).",
              "ru": "Перфект (прошедшее время) — основное прошедшее время в хорватском. Образуется с помощью краткой формы 'biti' + действительное причастие прошедшего времени. Причастие изменяется по роду и числу: -o (м.р.), -la (ж.р.), -lo (ср.р.), -li (м.р. мн.), -le (ж.р. мн.), -la (ср.р. мн.).",
              "ua": "Перфект (минулий час) — основний минулий час у хорватській. Утворюється за допомогою короткої форми 'biti' + активний дієприкметник минулого часу. Дієприкметник змінюється за родом та числом: -o (чол.), -la (жін.), -lo (сер.), -li (чол. мн.), -le (жін. мн.), -la (сер. мн.)."
            },
            "table": {
              "headers": [
                "Person",
                "čitati (read)",
                "govoriti (speak)"
              ],
              "rows": [
                {
                  "cells": [
                    "ja (m/f)",
                    "sam čitao / čitala",
                    "sam govorio / govorila"
                  ]
                },
                {
                  "cells": [
                    "ti (m/f)",
                    "si čitao / čitala",
                    "si govorio / govorila"
                  ]
                },
                {
                  "cells": [
                    "on / ona",
                    "je čitao / čitala",
                    "je govorio / govorila"
                  ]
                },
                {
                  "cells": [
                    "mi (m)",
                    "smo čitali",
                    "smo govorili"
                  ]
                },
                {
                  "cells": [
                    "vi (m)",
                    "ste čitali",
                    "ste govorili"
                  ]
                },
                {
                  "cells": [
                    "oni / one",
                    "su čitali / čitale",
                    "su govorili / govorile"
                  ]
                }
              ]
            }
          },
          {
            "title": {
              "en": "Aorist & Imperfekt & Pluskvamperfekt",
              "ru": "Аорист, Имперфект и Плюсквамперфект",
              "ua": "Аорист, Імперфект та Плюсквамперфект"
            },
            "text": {
              "en": "Besides Perfekt, literary Croatian has three other past tenses:\n- **Aorist**: simple past tense for completed actions (-h / -oh endings from perfective verbs).\n- **Imperfekt**: simple past tense for ongoing actions (-ah / -jah from imperfective verbs).\n- **Pluskvamperfekt**: pluperfect (past before past), formed with Perfekt/Imperfekt of 'biti' + active participle.",
              "ru": "Помимо перфекта, литературный хорватский имеет три других прошедших времени:\n- **Аорист**: простое время для законченных действий (окончания -h / -oh от совершенных глаголов).\n- **Имперфект**: простое время для длящихся действий (окончания -ah / -jah от несовершенных глаголов).\n- **Плюсквамперфект**: предпрошедшее время, образуется через прошедшее время 'biti' + причастие.",
              "ua": "Окрім перфекту, літературна хорватська має три інші минулі часи:\n- **Аорист**: простий час для завершених дій (закінчення -h / -oh від доконаних дієслів).\n- **Імперфект**: простий час для тривалих дій (закінчення -ah / -jah від недоконаних дієслів).\n- **Плюсквамперфект**: передминулий час, утворюється через минулий час 'biti' + дієприкметник."
            },
            "table": {
              "headers": [
                "Tense Name",
                "Formation Example",
                {
                  "en": "English Meaning",
                  "ru": "Значение",
                  "ua": "Значення"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Aorist",
                    "napisah (from napisati)",
                    {
                      "en": "I wrote (just now)",
                      "ru": "я написал (только что)",
                      "ua": "я написав (щойно)"
                    }
                  ]
                },
                {
                  "cells": [
                    "Imperfekt",
                    "pisah (from pisati)",
                    {
                      "en": "I was writing",
                      "ru": "я писал (долго)",
                      "ua": "я писав (довго)"
                    }
                  ]
                },
                {
                  "cells": [
                    "Pluskvamperfekt",
                    "bio sam čitao / bijah čitao",
                    {
                      "en": "I had read",
                      "ru": "я предпрошедшее читал",
                      "ua": "я передминулий читав"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "future",
        "title": {
          "en": "Future Tense (Futur I & II)",
          "ru": "Будущее время (Futur I и II)",
          "ua": "Майбутній час (Futur I та II)"
        },
        "icon": "⏩",
        "subsections": [
          {
            "title": {
              "en": "Futur I",
              "ru": "Futur I",
              "ua": "Futur I"
            },
            "text": {
              "en": "Future I is formed with short forms of 'htjeti' (will) + infinitive. Short forms: ću, ćeš, će, ćemo, ćete, će. When the infinitive ends in -ti and is placed before the auxiliary, the -i is dropped.",
              "ru": "Futur I образуется с помощью кратких форм глагола 'htjeti' + инфинитив. Краткие формы: ću, ćeš, će, ćemo, ćete, će. Если инфинитив на -ti стоит перед вспомогательным глаголом, -i отбрасывается.",
              "ua": "Futur I утворюється за допомогою коротких форм дієслова 'htjeti' + інфінітив. Короткі форми: ću, ćeš, će, ćemo, ćete, će. Якщо інфінітив на -ti стоїть перед допоміжним дієсловом, -i відкидається."
            },
            "table": {
              "headers": [
                "Person",
                "čitati",
                "govoriti"
              ],
              "rows": [
                {
                  "cells": [
                    "ja",
                    "čitat ću",
                    "govorit ću"
                  ]
                },
                {
                  "cells": [
                    "ti",
                    "čitat ćeš",
                    "govorit ćeš"
                  ]
                },
                {
                  "cells": [
                    "on/ona",
                    "čitat će",
                    "govorit će"
                  ]
                },
                {
                  "cells": [
                    "mi",
                    "čitat ćemo",
                    "govorit ćemo"
                  ]
                },
                {
                  "cells": [
                    "vi",
                    "čitat ćete",
                    "govorit ćete"
                  ]
                },
                {
                  "cells": [
                    "oni",
                    "čitat će",
                    "govorit će"
                  ]
                }
              ]
            },
            "examples": [
              {
                "hr": "Sutra ću učiti hrvatski.",
                "translation": {
                  "en": "Tomorrow I will study Croatian.",
                  "ru": "Завтра я буду учить хорватский.",
                  "ua": "Завтра я буду вчити хорватську."
                }
              }
            ]
          },
          {
            "title": {
              "en": "Futur II",
              "ru": "Futur II",
              "ua": "Futur II"
            },
            "text": {
              "en": "Future II is used in conditional/temporal subordinate clauses (with 'ako', 'kad'). Formed with present tense of 'biti' (budem, budeš...) + active past participle.",
              "ru": "Futur II используется в условных/временных придаточных предложениях (после 'ako', 'kad'). Образуется формами настоящего времени 'biti' (budem, budeš...) + причастие прошедшего времени.",
              "ua": "Futur II використовується в умовних/часових підрядних реченнях (після 'ako', 'kad'). Утворюється формами теперішнього часу 'biti' (budem, budeš...) + дієприкметник минулого часу."
            },
            "examples": [
              {
                "hr": "Ako budem imao vremena, doći ću.",
                "translation": {
                  "en": "If I have time, I'll come.",
                  "ru": "Если у меня будет время, я приду.",
                  "ua": "Якщо у мене буде час, я прийду."
                }
              },
              {
                "hr": "Kad budete stigli, javite mi.",
                "translation": {
                  "en": "When you arrive, let me know.",
                  "ru": "Когда приедете, дайте мне знать.",
                  "ua": "Коли приїдете, дайте мені знати."
                }
              }
            ]
          }
        ]
      },
      {
        "id": "aspect",
        "title": {
          "en": "Verb Aspect (Glagolski aspekt)",
          "ru": "Вид глагола",
          "ua": "Вид дієслова"
        },
        "icon": "🔀",
        "subsections": [
          {
            "title": {
              "en": "Perfective vs Imperfective",
              "ru": "Совершенный vs Несовершенный",
              "ua": "Доконаний vs Недоконаний"
            },
            "text": {
              "en": "Like Slavic languages, Croatian verbs have aspects. Imperfective verbs express ongoing, repeated, or habitual actions. Perfective verbs express completed, one-time actions. Most verbs form pairs.",
              "ru": "Как и в славянских языках, хорватские глаголы имеют виды. Несовершенный вид выражает длящееся, повторяющееся или привычное действие. Совершенный — завершённое, однократное. Большинство глаголов образуют пары.",
              "ua": "Як і в слов'янських мовах, хорватські дієслова мають види. Недоконаний вид виражає тривалу, повторювану або звичну дію. Доконаний — завершену, одноразову. Більшість дієслів утворюють пари."
            },
            "table": {
              "headers": [
                "Imperfective",
                "Perfective",
                "Translation"
              ],
              "rows": [
                {
                  "cells": [
                    "čitati",
                    "pročitati",
                    "to read"
                  ]
                },
                {
                  "cells": [
                    "pisati",
                    "napisati",
                    "to write"
                  ]
                },
                {
                  "cells": [
                    "učiti",
                    "naučiti",
                    "to learn"
                  ]
                },
                {
                  "cells": [
                    "govoriti",
                    "reći",
                    "to speak/say"
                  ]
                },
                {
                  "cells": [
                    "kupovati",
                    "kupiti",
                    "to buy"
                  ]
                },
                {
                  "cells": [
                    "jesti",
                    "pojesti",
                    "to eat"
                  ]
                },
                {
                  "cells": [
                    "piti",
                    "popiti",
                    "to drink"
                  ]
                },
                {
                  "cells": [
                    "dolaziti",
                    "doći",
                    "to come"
                  ]
                },
                {
                  "cells": [
                    "odlaziti",
                    "otići",
                    "to leave"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "imperative",
        "title": {
          "en": "Imperative (Imperativ)",
          "ru": "Повелительное наклонение (Imperativ)",
          "ua": "Наказовий спосіб (Imperativ)"
        },
        "icon": "❗",
        "subsections": [
          {
            "title": {
              "en": "Formation",
              "ru": "Образование",
              "ua": "Утворення"
            },
            "text": {
              "en": "The imperative is formed from the 3rd person plural present tense stem. Endings: -j/-i (2nd sing.), -jmo/-imo (1st pl.), -jte/-ite (2nd pl.).",
              "ru": "Повелительное наклонение образуется от основы 3-го лица мн.ч. настоящего времени. Окончания: -j/-i (2 л. ед.ч.), -jmo/-imo (1 л. мн.ч.), -jte/-ite (2 л. мн.ч.).",
              "ua": "Наказовий спосіб утворюється від основи 3-ї особи мн.ч. теперішнього часу. Закінчення: -j/-i (2 ос. одн.), -jmo/-imo (1 ос. мн.), -jte/-ite (2 ос. мн.)."
            },
            "table": {
              "headers": [
                "Verb",
                "ti",
                "mi",
                "vi"
              ],
              "rows": [
                {
                  "cells": [
                    "čitati",
                    "čitaj",
                    "čitajmo",
                    "čitajte"
                  ]
                },
                {
                  "cells": [
                    "govoriti",
                    "govori",
                    "govorimo",
                    "govorite"
                  ]
                },
                {
                  "cells": [
                    "pisati",
                    "piši",
                    "pišimo",
                    "pišite"
                  ]
                },
                {
                  "cells": [
                    "ići",
                    "idi",
                    "idimo",
                    "idite"
                  ]
                },
                {
                  "cells": [
                    "doći",
                    "dođi",
                    "dođimo",
                    "dođite"
                  ]
                }
              ]
            },
            "examples": [
              {
                "hr": "Čitaj polako!",
                "translation": {
                  "en": "Read slowly!",
                  "ru": "Читай медленно!",
                  "ua": "Читай повільно!"
                }
              },
              {
                "hr": "Dođite ovamo, molim vas!",
                "translation": {
                  "en": "Come here, please!",
                  "ru": "Идите сюда, пожалуйста!",
                  "ua": "Ідіть сюди, будь ласка!"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "verb-conjugation",
        "title": {
          "en": "Common Verbs Conjugation",
          "ru": "Спряжение частых глаголов",
          "ua": "Відмінювання поширених дієслів"
        },
        "icon": "📋",
        "subsections": [
          {
            "title": {
              "en": "Present Tense of Essential Verbs",
              "ru": "Настоящее время ключевых глаголов",
              "ua": "Теперішній час ключових дієслів"
            },
            "text": {
              "en": "Here is the present tense conjugation for essential auxiliary and modal verbs in Croatian: biti (to be), htjeti (to want), moći (to be able to), morati (must/have to), ići (to go).",
              "ru": "Вот спряжение в настоящем времени для важнейших вспомогательных и модальных глаголов: biti (быть), htjeti (хотеть), moći (мочь), morati (долженствовать), ići (идти).",
              "ua": "Ось відмінювання в теперішньому часі для найважливіших допоміжних та модальних дієслів: biti (бути), htjeti (хотіти), moći (могти), morati (мусити), ići (йти)."
            },
            "table": {
              "headers": [
                "Pronoun",
                "biti (to be)",
                "htjeti (to want)",
                "moći (can)",
                "morati (must)",
                "ići (to go)"
              ],
              "rows": [
                {
                  "cells": [
                    "ja (I)",
                    "sam / jesam",
                    "ću / hoću",
                    "mogu",
                    "moram",
                    "idem"
                  ]
                },
                {
                  "cells": [
                    "ti (you)",
                    "si / jesi",
                    "ćeš / hoćeš",
                    "možeš",
                    "moraš",
                    "ideš"
                  ]
                },
                {
                  "cells": [
                    "on/ona/ono",
                    "je / jest",
                    "će / hoće",
                    "može",
                    "mora",
                    "ide"
                  ]
                },
                {
                  "cells": [
                    "mi (we)",
                    "smo / jesmo",
                    "ćemo / hoćemo",
                    "možemo",
                    "moramo",
                    "idemo"
                  ]
                },
                {
                  "cells": [
                    "vi (you pl./formal)",
                    "ste / jeste",
                    "ćete / hoćete",
                    "možete",
                    "morate",
                    "idete"
                  ]
                },
                {
                  "cells": [
                    "oni/one/ona (they)",
                    "su / jesu",
                    "će / hoće",
                    "mogu",
                    "moraju",
                    "idu"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": {
          "en": "Reflexive Verbs (Povratni glagoli)",
          "ru": "Возвратные глаголы",
          "ua": "Зворотні дієслова"
        },
        "icon": "🔄",
        "subsections": [
          {
            "title": {
              "en": "Reflexive Particle 'se'",
              "ru": "Возвратная частица 'se'",
              "ua": "Зворотна частка 'se'"
            },
            "text": {
              "en": "Reflexive verbs in Croatian are accompanied by the reflexive pronoun/particle 'se' (equivalent to Russian '-ся' or Ukrainian '-ся'). The position of 'se' follows the enclitic rules (usually placed in the second position of the sentence).",
              "ru": "Возвратные глаголы в хорватском языке сопровождаются возвратным местоимением/частицей 'se' (эквивалент русского или украинского '-ся'). Положение 'se' подчиняется правилам энклитик (обычно ставится на второе место в предложении).",
              "ua": "Зворотні дієслова в хорватській мові супроводжуються зворотним займенником/часткою 'se' (еквівалент українського '-ся'). Положення 'se' підпорядковується правилам енклітик (зазвичай ставиться на друге місце в реченні)."
            },
            "table": {
              "headers": [
                "Verb",
                {
                  "en": "English",
                  "ru": "Перевод",
                  "ua": "Переклад"
                },
                "Present Conjugation (ja)",
                "Example"
              ],
              "rows": [
                {
                  "cells": [
                    "smijati se",
                    "to laugh",
                    "smijem se",
                    "Ja se smijem. (I am laughing.)"
                  ]
                },
                {
                  "cells": [
                    "zvati se",
                    "to be named",
                    "zovem se",
                    "Zovem se Ivan. (My name is Ivan.)"
                  ]
                },
                {
                  "cells": [
                    "tuširati se",
                    "to shower",
                    "tuširam se",
                    "Tuširam se ujutro. (I shower in the morning.)"
                  ]
                },
                {
                  "cells": [
                    "brinuti se",
                    "to worry",
                    "brinem se",
                    "Ne brini se. (Do not worry.)"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "numbers",
    "title": {
      "en": "Numbers (Brojevi)",
      "ru": "Числительные (Brojevi)",
      "ua": "Числівники (Brojevi)"
    },
    "icon": "🔢",
    "sections": [
      {
        "id": "cardinal",
        "title": {
          "en": "Cardinal Numbers",
          "ru": "Количественные числительные",
          "ua": "Кількісні числівники"
        },
        "icon": "🔢",
        "subsections": [
          {
            "title": {
              "en": "Numbers 0–100",
              "ru": "Числа 0–100",
              "ua": "Числа 0–100"
            },
            "text": {
              "en": "Croatian numbers are important for everyday situations: shopping, telling time, giving your phone number.",
              "ru": "Хорватские числа важны для повседневных ситуаций: покупки, определение времени, номер телефона.",
              "ua": "Хорватські числа важливі для повсякденних ситуацій: покупки, визначення часу, номер телефону."
            },
            "table": {
              "headers": [
                "Number",
                "Croatian",
                "Number",
                "Croatian"
              ],
              "rows": [
                {
                  "cells": [
                    "0",
                    "nula",
                    "10",
                    "deset"
                  ]
                },
                {
                  "cells": [
                    "1",
                    "jedan",
                    "11",
                    "jedanaest"
                  ]
                },
                {
                  "cells": [
                    "2",
                    "dva",
                    "12",
                    "dvanaest"
                  ]
                },
                {
                  "cells": [
                    "3",
                    "tri",
                    "13",
                    "trinaest"
                  ]
                },
                {
                  "cells": [
                    "4",
                    "četiri",
                    "14",
                    "četrnaest"
                  ]
                },
                {
                  "cells": [
                    "5",
                    "pet",
                    "15",
                    "petnaest"
                  ]
                },
                {
                  "cells": [
                    "6",
                    "šest",
                    "20",
                    "dvadeset"
                  ]
                },
                {
                  "cells": [
                    "7",
                    "sedam",
                    "30",
                    "trideset"
                  ]
                },
                {
                  "cells": [
                    "8",
                    "osam",
                    "50",
                    "pedeset"
                  ]
                },
                {
                  "cells": [
                    "9",
                    "devet",
                    "100",
                    "sto"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "ordinal",
        "title": {
          "en": "Ordinal Numbers",
          "ru": "Порядковые числительные",
          "ua": "Порядкові числівники"
        },
        "icon": "🏆",
        "subsections": [
          {
            "title": {
              "en": "Formation",
              "ru": "Образование",
              "ua": "Утворення"
            },
            "text": {
              "en": "Ordinal numbers are adjectives and must agree in gender with the noun they describe: prvi/prva/prvo (first), drugi/druga/drugo (second), etc.",
              "ru": "Порядковые числительные — это прилагательные и должны согласоваться в роде: prvi/prva/prvo (первый), drugi/druga/drugo (второй) и т.д.",
              "ua": "Порядкові числівники — це прикметники і мають узгоджуватися в роді: prvi/prva/prvo (перший), drugi/druga/drugo (другий) тощо."
            },
            "table": {
              "headers": [
                "Number",
                "Masc.",
                "Fem.",
                "Neut."
              ],
              "rows": [
                {
                  "cells": [
                    "1st",
                    "prvi",
                    "prva",
                    "prvo"
                  ]
                },
                {
                  "cells": [
                    "2nd",
                    "drugi",
                    "druga",
                    "drugo"
                  ]
                },
                {
                  "cells": [
                    "3rd",
                    "treći",
                    "treća",
                    "treće"
                  ]
                },
                {
                  "cells": [
                    "4th",
                    "četvrti",
                    "četvrta",
                    "četvrto"
                  ]
                },
                {
                  "cells": [
                    "5th",
                    "peti",
                    "peta",
                    "peto"
                  ]
                },
                {
                  "cells": [
                    "10th",
                    "deseti",
                    "deseta",
                    "deseto"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topics",
    "title": {
      "en": "Everyday Topics",
      "ru": "Повседневные темы",
      "ua": "Повсякденні теми"
    },
    "icon": "💬",
    "sections": [
      {
        "id": "greetings",
        "title": {
          "en": "Greetings & Farewells",
          "ru": "Приветствия и прощания",
          "ua": "Привітання та прощання"
        },
        "icon": "👋",
        "subsections": [
          {
            "title": {
              "en": "Basic Greetings",
              "ru": "Основные приветствия",
              "ua": "Основні привітання"
            },
            "text": {
              "en": "Croatian greetings depend on the time of day and the formality of the situation.",
              "ru": "Хорватские приветствия зависят от времени суток и степени формальности.",
              "ua": "Хорватські привітання залежать від часу доби та ступеня формальності."
            },
            "table": {
              "headers": [
                "Croatian",
                "English",
                "Usage"
              ],
              "rows": [
                {
                  "cells": [
                    "Dobar dan!",
                    "Good day!",
                    "Formal, daytime"
                  ]
                },
                {
                  "cells": [
                    "Dobro jutro!",
                    "Good morning!",
                    "Until ~10am"
                  ]
                },
                {
                  "cells": [
                    "Dobra večer!",
                    "Good evening!",
                    "Evening"
                  ]
                },
                {
                  "cells": [
                    "Bok!",
                    "Hi! / Bye!",
                    "Informal"
                  ]
                },
                {
                  "cells": [
                    "Zdravo!",
                    "Hello!",
                    "Informal"
                  ]
                },
                {
                  "cells": [
                    "Kako ste?",
                    "How are you? (formal)",
                    "Formal"
                  ]
                },
                {
                  "cells": [
                    "Kako si?",
                    "How are you? (informal)",
                    "Informal"
                  ]
                },
                {
                  "cells": [
                    "Doviđenja!",
                    "Goodbye!",
                    "Formal"
                  ]
                },
                {
                  "cells": [
                    "Laku noć!",
                    "Good night!",
                    "Evening farewell"
                  ]
                }
              ]
            },
            "examples": [
              {
                "hr": "Bok! Kako si? — Dobro sam, hvala!",
                "translation": {
                  "en": "Hi! How are you? — I'm fine, thanks!",
                  "ru": "Привет! Как дела? — Хорошо, спасибо!",
                  "ua": "Привіт! Як справи? — Добре, дякую!"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "shopping",
        "title": {
          "en": "Shopping & Market",
          "ru": "Покупки и рынок",
          "ua": "Покупки та ринок"
        },
        "icon": "🛒",
        "subsections": [
          {
            "title": {
              "en": "Useful Phrases",
              "ru": "Полезные фразы",
              "ua": "Корисні фрази"
            },
            "text": {
              "en": "Essential phrases for shopping in Croatia — at the market, in stores, and more.",
              "ru": "Важные фразы для покупок в Хорватии — на рынке, в магазинах и т.д.",
              "ua": "Важливі фрази для покупок у Хорватії — на ринку, у магазинах тощо."
            },
            "table": {
              "headers": [
                "Croatian",
                "English",
                {
                  "en": "Translation",
                  "ru": "Перевод",
                  "ua": "Переклад"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Koliko to košta?",
                    "How much does it cost?",
                    {
                      "en": "Сколько это стоит?",
                      "ru": "Сколько это стоит?",
                      "ua": "Скільки це коштує?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Imate li...?",
                    "Do you have...?",
                    {
                      "en": "У вас есть...?",
                      "ru": "У вас есть...?",
                      "ua": "Чи є у вас...?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Htio/Htjela bih...",
                    "I would like...",
                    {
                      "en": "Я бы хотел(а)...",
                      "ru": "Я бы хотел(а)...",
                      "ua": "Я б хотів/хотіла..."
                    }
                  ]
                },
                {
                  "cells": [
                    "Mogu li platiti karticom?",
                    "Can I pay by card?",
                    {
                      "en": "Можно картой?",
                      "ru": "Можно картой?",
                      "ua": "Чи можу я розплатитися карткою?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Dajte mi kilu...",
                    "Give me a kilo of...",
                    {
                      "en": "Дайте мне килограмм...",
                      "ru": "Дайте мне килограмм...",
                      "ua": "Дайте мені кілограм..."
                    }
                  ]
                },
                {
                  "cells": [
                    "Je li to na akciji?",
                    "Is it on sale?",
                    {
                      "en": "Это по акции?",
                      "ru": "Это по акции?",
                      "ua": "Це по акції?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Hvala, to je sve.",
                    "Thanks, that's all.",
                    {
                      "en": "Спасибо, это всё.",
                      "ru": "Спасибо, это всё.",
                      "ua": "Дякую, це все."
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "transport",
        "title": {
          "en": "Transport & Directions",
          "ru": "Транспорт и направления",
          "ua": "Транспорт та напрямки"
        },
        "icon": "🚌",
        "subsections": [
          {
            "title": {
              "en": "Getting Around",
              "ru": "Как добраться",
              "ua": "Як дістатися"
            },
            "text": {
              "en": "Key phrases for navigating public transport and asking for directions in Croatia.",
              "ru": "Ключевые фразы для использования общественного транспорта и определения пути в Хорватии.",
              "ua": "Ключові фрази для користування громадським транспортом та визначення шляху в Хорватії."
            },
            "table": {
              "headers": [
                "Croatian",
                "English",
                {
                  "en": "Translation",
                  "ru": "Перевод",
                  "ua": "Переклад"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Gdje je stanica?",
                    "Where is the station?",
                    {
                      "en": "Где станция?",
                      "ru": "Где станция?",
                      "ua": "Де станція?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Koliko košta karta?",
                    "How much is a ticket?",
                    {
                      "en": "Сколько стоит билет?",
                      "ru": "Сколько стоит билет?",
                      "ua": "Скільки коштує квиток?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Skrenite lijevo/desno",
                    "Turn left/right",
                    {
                      "en": "Поверните налево/направо",
                      "ru": "Поверните налево/направо",
                      "ua": "Поверніть ліворуч/праворуч"
                    }
                  ]
                },
                {
                  "cells": [
                    "Idite ravno",
                    "Go straight",
                    {
                      "en": "Идите прямо",
                      "ru": "Идите прямо",
                      "ua": "Йдіть прямо"
                    }
                  ]
                },
                {
                  "cells": [
                    "Je li to daleko?",
                    "Is it far?",
                    {
                      "en": "Это далеко?",
                      "ru": "Это далеко?",
                      "ua": "Це далеко?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Kako mogu doći do...?",
                    "How can I get to...?",
                    {
                      "en": "Как добраться до...?",
                      "ru": "Как добраться до...?",
                      "ua": "Як дістатися до...?"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "doctor",
        "title": {
          "en": "At the Doctor",
          "ru": "У врача",
          "ua": "У лікаря"
        },
        "icon": "🏥",
        "subsections": [
          {
            "title": {
              "en": "Medical Vocabulary",
              "ru": "Медицинская лексика",
              "ua": "Медична лексика"
            },
            "text": {
              "en": "Important vocabulary and phrases for visiting a doctor in Croatia.",
              "ru": "Важная лексика и фразы для визита к врачу в Хорватии.",
              "ua": "Важлива лексика та фрази для візиту до лікаря в Хорватії."
            },
            "table": {
              "headers": [
                "Croatian",
                "English",
                {
                  "en": "Translation",
                  "ru": "Перевод",
                  "ua": "Переклад"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Boli me glava.",
                    "I have a headache.",
                    {
                      "en": "У меня болит голова.",
                      "ru": "У меня болит голова.",
                      "ua": "У мене болить голова."
                    }
                  ]
                },
                {
                  "cells": [
                    "Imam temperaturu.",
                    "I have a fever.",
                    {
                      "en": "У меня температура.",
                      "ru": "У меня температура.",
                      "ua": "У мене температура."
                    }
                  ]
                },
                {
                  "cells": [
                    "Trebam liječnika.",
                    "I need a doctor.",
                    {
                      "en": "Мне нужен врач.",
                      "ru": "Мне нужен врач.",
                      "ua": "Мені потрібен лікар."
                    }
                  ]
                },
                {
                  "cells": [
                    "Alergičan/na sam na...",
                    "I'm allergic to...",
                    {
                      "en": "У меня аллергия на...",
                      "ru": "У меня аллергия на...",
                      "ua": "Я алергік на..."
                    }
                  ]
                },
                {
                  "cells": [
                    "Ljekarna",
                    "Pharmacy",
                    {
                      "en": "Аптека",
                      "ru": "Аптека",
                      "ua": "Аптека"
                    }
                  ]
                },
                {
                  "cells": [
                    "Hitna pomoć",
                    "Emergency",
                    {
                      "en": "Скорая помощь",
                      "ru": "Скорая помощь",
                      "ua": "Швидка допомога"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "family",
        "title": {
          "en": "Family Members",
          "ru": "Члены семьи",
          "ua": "Члени сім'ї"
        },
        "icon": "👨‍👩‍👧‍👦",
        "subsections": [
          {
            "title": {
              "en": "Family Vocabulary",
              "ru": "Семейная лексика",
              "ua": "Сімейна лексика"
            },
            "text": {
              "en": "Croatian family terms — essential vocabulary for introducing your family.",
              "ru": "Хорватские термины родства — необходимая лексика для представления семьи.",
              "ua": "Хорватські терміни спорідненості — необхідна лексика для представлення сім'ї."
            },
            "table": {
              "headers": [
                "Croatian",
                "English",
                {
                  "en": "Translation",
                  "ru": "Перевод",
                  "ua": "Переклад"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "otac / tata",
                    "father / dad",
                    {
                      "en": "отец / папа",
                      "ru": "отец / папа",
                      "ua": "батько / тато"
                    }
                  ]
                },
                {
                  "cells": [
                    "majka / mama",
                    "mother / mom",
                    {
                      "en": "мать / мама",
                      "ru": "мать / мама",
                      "ua": "мати / мама"
                    }
                  ]
                },
                {
                  "cells": [
                    "brat",
                    "brother",
                    {
                      "en": "брат",
                      "ru": "brat",
                      "ua": "брат"
                    }
                  ]
                },
                {
                  "cells": [
                    "sestra",
                    "sister",
                    {
                      "en": "сестра",
                      "ru": "сестра",
                      "ua": "сестра"
                    }
                  ]
                },
                {
                  "cells": [
                    "sin",
                    "son",
                    {
                      "en": "сын",
                      "ru": "сын",
                      "ua": "син"
                    }
                  ]
                },
                {
                  "cells": [
                    "kći / kćer",
                    "daughter",
                    {
                      "en": "дочь",
                      "ru": "донька",
                      "ua": "донька"
                    }
                  ]
                },
                {
                  "cells": [
                    "djed / deda",
                    "grandfather",
                    {
                      "en": "дедушка",
                      "ru": "дедушка",
                      "ua": "дідусь"
                    }
                  ]
                },
                {
                  "cells": [
                    "baka",
                    "grandmother",
                    {
                      "en": "бабушка",
                      "ru": "бабушка",
                      "ua": "бабуся"
                    }
                  ]
                },
                {
                  "cells": [
                    "muž / suprug",
                    "husband",
                    {
                      "en": "муж / супруг",
                      "ru": "муж / супруг",
                      "ua": "чоловік / чоловік"
                    }
                  ]
                },
                {
                  "cells": [
                    "žena / supruga",
                    "wife",
                    {
                      "en": "жена / супруга",
                      "ru": "жена / супруга",
                      "ua": "дружина"
                    }
                  ]
                },
                {
                  "cells": [
                    "ujak",
                    "uncle (mother's side)",
                    {
                      "en": "дядя (по маме)",
                      "ru": "дядя (по маме)",
                      "ua": "дядько (по мамі)"
                    }
                  ]
                },
                {
                  "cells": [
                    "stric",
                    "uncle (father's side)",
                    {
                      "en": "дядя (по папе)",
                      "ru": "дядя (по папе)",
                      "ua": "дядько (по татові)"
                    }
                  ]
                },
                {
                  "cells": [
                    "teta / tetka",
                    "aunt",
                    {
                      "en": "тётя",
                      "ru": "тётя",
                      "ua": "тітка"
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "pronouns_prepositions",
    "title": {
      "en": "Pronouns & Prepositions",
      "ru": "Местоимения и предлоги",
      "ua": "Займенники та прийменники"
    },
    "icon": "🔗",
    "sections": [
      {
        "id": "pronoun_cases",
        "title": {
          "en": "Personal Pronouns Declension",
          "ru": "Склонение местоимений",
          "ua": "Відмінювання займенників"
        },
        "icon": "👥",
        "subsections": [
          {
            "title": {
              "en": "Personal Pronouns Cases",
              "ru": "Падежи личных местоимений",
              "ua": "Відмінки особових займенників"
            },
            "text": {
              "en": "Declension of personal pronouns (ja, ti, on, ona, ono, mi, vi, oni) across all cases. Short forms (enclitics) are listed first, followed by long forms in parentheses.",
              "ru": "Склонение личных местоимений по падежам. Краткие (энклитики) формы указаны первыми, длинные формы приведены в скобках.",
              "ua": "Відмінювання особових займенників за відмінками. Краткі (енклітичні) форми вказані першими, довгі форми наведені в дужках."
            },
            "table": {
              "headers": [
                "Case",
                "ja (I)",
                "ti (you)",
                "on / ono (he/it)",
                "ona (she)",
                "mi (we)",
                "vi (you pl.)",
                "oni (they)"
              ],
              "rows": [
                {
                  "cells": [
                    "Nominativ",
                    "ja",
                    "ti",
                    "on / ono",
                    "ona",
                    "mi",
                    "vi",
                    "oni"
                  ]
                },
                {
                  "cells": [
                    "Genitiv",
                    "me (mene)",
                    "te (tebe)",
                    "ga (njega)",
                    "je (nje)",
                    "nas",
                    "vas",
                    "ih (njih)"
                  ]
                },
                {
                  "cells": [
                    "Dativ",
                    "mi (meni)",
                    "ti (tebi)",
                    "mu (njemu)",
                    "joj (njoj)",
                    "nam",
                    "vam",
                    "im (njima)"
                  ]
                },
                {
                  "cells": [
                    "Akuzativ",
                    "me (mene)",
                    "te (tebe)",
                    "ga (njega)",
                    "ju / je (nju)",
                    "nas",
                    "vas",
                    "ih (njih)"
                  ]
                },
                {
                  "cells": [
                    "Lokativ",
                    "meni",
                    "tebi",
                    "njemu",
                    "njoj",
                    "nama",
                    "vama",
                    "njima"
                  ]
                },
                {
                  "cells": [
                    "Instrumental",
                    "mnom (mnome)",
                    "tobom",
                    "njim (njime)",
                    "njom (njome)",
                    "nama",
                    "vama",
                    "njima"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "prepositions",
        "title": {
          "en": "Prepositions and Cases",
          "ru": "Предлоги и падежи",
          "ua": "Прийменники та відмінки"
        },
        "icon": "🗺️",
        "subsections": [
          {
            "title": {
              "en": "Prepositions Chart",
              "ru": "Таблица предлогов",
              "ua": "Таблиця прийменників"
            },
            "text": {
              "en": "In Croatian, each preposition requires a specific noun case. Below is a summary of the most common prepositions grouped by the case they govern.",
              "ru": "В хорватском языке каждый предлог требует определенного падежа. Ниже приведена таблица наиболее употребляемых предлогов, сгруппированных по падежам.",
              "ua": "В хорватській мові кожен прийменник вимагає певного відмінка. Нижче наведена таблиця найуживаніших прийменників, згрупованих за відмінками."
            },
            "table": {
              "headers": [
                "Case",
                "Prepositions",
                {
                  "en": "English Meaning",
                  "ru": "Значение",
                  "ua": "Значення"
                },
                "Examples"
              ],
              "rows": [
                {
                  "cells": [
                    "Genitiv",
                    "bez, kod, iz, blizu, do, od",
                    {
                      "en": "without, at, from, near, to, from",
                      "ru": "без, у, из, близко, до, от",
                      "ua": "без, у, з, близько, до, від"
                    },
                    "bez šećera, kod prijatelja, iz ureda"
                  ]
                },
                {
                  "cells": [
                    "Dativ",
                    "k / ka, prema",
                    {
                      "en": "towards, according to",
                      "ru": "к, по направлению к",
                      "ua": "до, у напрямку до"
                    },
                    "idem k liječniku, prema gradu"
                  ]
                },
                {
                  "cells": [
                    "Akuzativ",
                    "u, na (motion), kroz, za",
                    {
                      "en": "into, onto, through, for",
                      "ru": "в, на (движение), через, для",
                      "ua": "в, на (рух), через, для"
                    },
                    "idem u школу, stavi na stol, za tebe"
                  ]
                },
                {
                  "cells": [
                    "Lokativ",
                    "u, na (location), o, po",
                    {
                      "en": "in, on (static), about, along",
                      "ru": "в, на (место), о, по",
                      "ua": "в, на (місце), про, по"
                    },
                    "živim u Zagrebu, na stolu, o knjizi"
                  ]
                },
                {
                  "cells": [
                    "Instrumental",
                    "s / sa, pod, nad, pred",
                    {
                      "en": "with, under, above, in front of",
                      "ru": "с, под, над, перед",
                      "ua": "з, під, над, перед"
                    },
                    "s bratom, pod stolom, pred kućom"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "advanced_grammar",
    "title": {
      "en": "Advanced Grammar",
      "ru": "Продвинутая грамматика",
      "ua": "Просунута граматика"
    },
    "icon": "🎓",
    "sections": [
      {
        "id": "adjective_declension",
        "title": {
          "en": "Adjective Declension",
          "ru": "Склонение прилагательных",
          "ua": "Відмінювання прикметників"
        },
        "icon": "🎨",
        "subsections": [
          {
            "title": {
              "en": "Definite vs Indefinite",
              "ru": "Определенные и неопределенные",
              "ua": "Визначені та невизначені"
            },
            "text": {
              "en": "Croatian adjectives have two forms: Indefinite (Neodređeni - answers 'kakav?' / what kind of?) and Definite (Određeni - answers 'koji?' / which one?). Here are their nominative endings:",
              "ru": "Хорватские прилагательные имеют две формы: Неопределённую (отвечает на вопрос 'kakav?' / какой?) и Определённую (отвечает на 'koji?' / какой именно?). Вот окончания в именительном падеже:",
              "ua": "Хорватські прикметники мають дві форми: Невизначену (відповідає на питання 'kakav?' / який?) та Визначену (відповідає на 'koji?' / який саме?). Ось закінчення в називному відмінку:"
            },
            "table": {
              "headers": [
                "Gender",
                "Indefinite Ending",
                "Definite Ending",
                "Example (Indefinite)",
                "Example (Definite)"
              ],
              "rows": [
                {
                  "cells": [
                    "Masc.",
                    "Consonant (nov)",
                    "-i (novi)",
                    "nov kaput (a new coat)",
                    "novi kaput (the new coat)"
                  ]
                },
                {
                  "cells": [
                    "Fem.",
                    "-a (nova)",
                    "-a (nova)",
                    "nova kuća (a new house)",
                    "nova kuća (the new house)"
                  ]
                },
                {
                  "cells": [
                    "Neut.",
                    "-o / -e (novo)",
                    "-o / -e (novo)",
                    "novo auto (a new car)",
                    "novo auto (the new car)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "verbal_aspect",
        "title": {
          "en": "Verbal Aspect (Glagolski vid)",
          "ru": "Глагольный вид",
          "ua": "Дієслівний вид"
        },
        "icon": "⏳",
        "subsections": [
          {
            "title": {
              "en": "Aspectual Pairs",
              "ru": "Видовые пары глаголов",
              "ua": "Видові пари дієслів"
            },
            "text": {
              "en": "Croatian verbs are either Imperfective (Nesvršeni - ongoing actions) or Perfective (Svršeni - completed actions). Many verbs form pairs by changing prefixes or suffixes:",
              "ru": "Хорватские глаголы бывают несовершенного вида (Nesvršeni - длительное действие) или совершенного вида (Svršeni - завершенное действие). Многие глаголы образуют видовые пары с помощью изменения приставок или суффиксов:",
              "ua": "Хорватські дієслова бувають недоконаного виду (Nesvršeni - тривала дія) або доконаного виду (Svršeni - завершена дія). Багато дієслів утворюють видові пари за допомогою зміни префіксів або суфіксів:"
            },
            "table": {
              "headers": [
                "Imperfective Verb",
                "Perfective Verb",
                {
                  "en": "English Meaning",
                  "ru": "Значение",
                  "ua": "Значення"
                },
                "Type of Change"
              ],
              "rows": [
                {
                  "cells": [
                    "pisati",
                    "napisati",
                    {
                      "en": "to write",
                      "ru": "писать / написать",
                      "ua": "писати / написати"
                    },
                    "Prefix addition (na-)"
                  ]
                },
                {
                  "cells": [
                    "kupovati",
                    "kupiti",
                    {
                      "en": "to buy",
                      "ru": "покупать / купить",
                      "ua": "купувати / купити"
                    },
                    "Suffix change (-ovati -> -iti)"
                  ]
                },
                {
                  "cells": [
                    "dolaziti",
                    "doći",
                    {
                      "en": "to come",
                      "ru": "приходить / прийти",
                      "ua": "приходити / прийти"
                    },
                    "Suppletive / Irregular stem"
                  ]
                },
                {
                  "cells": [
                    "otvarati",
                    "otvoriti",
                    {
                      "en": "to open",
                      "ru": "открывать / открыть",
                      "ua": "відкривати / відкрити"
                    },
                    "Vowel change in stem"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "subordinate_clauses",
        "title": {
          "en": "Subordinate Clauses",
          "ru": "Придаточные предложения",
          "ua": "Підрядні речення"
        },
        "icon": "⛓️",
        "subsections": [
          {
            "title": {
              "en": "Types of Clauses",
              "ru": "Типы придаточных",
              "ua": "Типи підрядних речень"
            },
            "text": {
              "en": "Subordinate clauses are introduced by specific conjunctions. Here is a summary of the main types:",
              "ru": "Придаточные предложения вводятся определенными союзами. Вот основные типы:",
              "ua": "Підрядні речення вводяться певними сполучниками. Ось основні типи:"
            },
            "table": {
              "headers": [
                "Clause Type",
                "Conjunctions",
                {
                  "en": "Meaning",
                  "ru": "Значение",
                  "ua": "Значення"
                },
                "Example"
              ],
              "rows": [
                {
                  "cells": [
                    "Conditional (Uvjetne)",
                    "ako, kad, da",
                    {
                      "en": "if / when",
                      "ru": "если / когда",
                      "ua": "якщо / коли"
                    },
                    "Ako bude padala kiša, nećemo ići."
                  ]
                },
                {
                  "cells": [
                    "Causal (Uzročne)",
                    "jer, zato što, budući da",
                    {
                      "en": "because / since",
                      "ru": "потому что / так как",
                      "ua": "тому що / оскільки"
                    },
                    "Ne idem jer sam umoran."
                  ]
                },
                {
                  "cells": [
                    "Temporal (Vremenske)",
                    "kad, dok, nakon što",
                    {
                      "en": "when / while / after",
                      "ru": "когда / пока / после того как",
                      "ua": "коли / поки / після того як"
                    },
                    "Dok čitam, pijem kavu."
                  ]
                },
                {
                  "cells": [
                    "Concessive (Dopusne)",
                    "iako, premda, makar",
                    {
                      "en": "although / even if",
                      "ru": "хотя / пусть даже",
                      "ua": "хоча / навіть якщо"
                    },
                    "Iako je hladno, šetamo."
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "passive_voice",
        "title": {
          "en": "Passive Voice (Pasiv)",
          "ru": "Пассивный залог",
          "ua": "Пасивний стан"
        },
        "icon": "🔒",
        "subsections": [
          {
            "title": {
              "en": "Passive Construction",
              "ru": "Конструкция пассива",
              "ua": "Конструкція пасиву"
            },
            "text": {
              "en": "Passive voice is constructed either with the verb 'biti' and the passive participle, or using the reflexive particle 'se':",
              "ru": "Пассивный залог образуется либо с помощью глагола 'biti' и страдательного причастия, либо с помощью возвратной частицы 'se':",
              "ua": "Пасивний стан утворюється або за допомогою дієслова 'biti' та пасивного дієприкметника, або за допомогою зворотної частки 'se':"
            },
            "table": {
              "headers": [
                "Type",
                "Construction",
                "Example",
                {
                  "en": "Translation",
                  "ru": "Перевод",
                  "ua": "Переклад"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Participle Passive",
                    "biti + past participle",
                    "Knjiga je napisana.",
                    {
                      "en": "The book is written.",
                      "ru": "Книга написана.",
                      "ua": "Книга написана."
                    }
                  ]
                },
                {
                  "cells": [
                    "Reflexive Passive",
                    "verb + reflexive 'se'",
                    "Kuća se gradi.",
                    {
                      "en": "The house is being built.",
                      "ru": "Дом строится.",
                      "ua": "Будинок будується."
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "adjective_comparison",
        "title": {
          "en": "Comparison of Adjectives",
          "ru": "Степени сравнения прилагательных",
          "ua": "Ступені порівняння прикметників"
        },
        "icon": "📈",
        "subsections": [
          {
            "title": {
              "en": "Positive, Comparative, Superlative",
              "ru": "Положительная, сравнительная, превосходная",
              "ua": "Звичайний, вищий, найвищий ступені"
            },
            "text": {
              "en": "Adjectives have three degrees of comparison. The comparative is formed with suffixes like -iji, -ji, or -ši. The superlative is extremely easy as it simply adds the prefix 'naj-' to the comparative form:",
              "ru": "Прилагательные имеют три степени сравнения. Сравнительная степень образуется суффиксами -iji, -ji или -ši. Превосходная степень образуется очень просто — добавлением приставки 'naj-' к форме сравнительной степени:",
              "ua": "Прикметники мають три ступені порівняння. Вищий ступінь утворюється суфіксами -iji, -ji або -ši. Найвищий ступінь утворюється надзвичайно просто — додаванням префікса 'naj-' до форми вищого ступеня:"
            },
            "table": {
              "headers": [
                "Positive (Pozitiv)",
                "Comparative (Komparativ)",
                "Superlative (Superlativ)",
                {
                  "en": "English Meaning",
                  "ru": "Значение",
                  "ua": "Значення"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "nov (new)",
                    "noviji",
                    "najnoviji",
                    {
                      "en": "new → newer → newest",
                      "ru": "новый → новее → новейший",
                      "ua": "новий → новіший → найновіший"
                    }
                  ]
                },
                {
                  "cells": [
                    "star (old)",
                    "stariji",
                    "najstariji",
                    {
                      "en": "old → older → oldest",
                      "ru": "старый → старше → старейший",
                      "ua": "старий → старший → найстарший"
                    }
                  ]
                },
                {
                  "cells": [
                    "lak (easy / light)",
                    "lakši",
                    "najlakši",
                    {
                      "en": "easy → easier → easiest",
                      "ru": "легкий → легче → легчайший",
                      "ua": "легкий → легший → найлегший"
                    }
                  ]
                },
                {
                  "cells": [
                    "dobar (good - irregular)",
                    "bolji",
                    "najbolji",
                    {
                      "en": "good → better → best",
                      "ru": "хороший → лучше → лучший",
                      "ua": "добрий → кращий → найкращий"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "adjective_agreement",
        "title": {
          "en": "Adjective-Noun Agreement",
          "ru": "Согласование прилагательных",
          "ua": "Узгодження прикметників"
        },
        "icon": "🤝",
        "subsections": [
          {
            "title": {
              "en": "Gender, Number, Case",
              "ru": "Род, число, падеж",
              "ua": "Рід, число, відмінок"
            },
            "text": {
              "en": "Adjectives must agree with the nouns they modify in gender (masculine, feminine, neuter), number (singular, plural), and case (Nominative, Genitive, etc.). Endings change accordingly.",
              "ru": "Прилагательные обязательно согласуются с существительными, к которым они относятся, в роде, числе и падеже. Окончания изменяются соответствующим образом.",
              "ua": "Прикметники обов'язково узгоджуються з іменниками, до яких вони відносяться, у роді, числі та відмінку. Закінчення змінюються відповідним чином."
            },
            "examples": [
              {
                "hr": "lijep pas (Masc. Sing. Nom.)",
                "translation": {
                  "en": "beautiful dog",
                  "ru": "красивая собака",
                  "ua": "красивий собака"
                }
              },
              {
                "hr": "lijepa mačka (Fem. Sing. Nom.)",
                "translation": {
                  "en": "beautiful cat",
                  "ru": "красивая кошка",
                  "ua": "красива кішка"
                }
              },
              {
                "hr": "lijepo selo (Neut. Sing. Nom.)",
                "translation": {
                  "en": "beautiful village",
                  "ru": "красивая деревня",
                  "ua": "красиве село"
                }
              },
              {
                "hr": "Vidim lijepog psa. (Masc. Sing. Acc.)",
                "translation": {
                  "en": "I see a beautiful dog.",
                  "ru": "Я вижу красивую собаку.",
                  "ua": "Я бачу красивого собаку."
                }
              }
            ]
          }
        ]
      },
      {
        "id": "numeral_agreement",
        "title": {
          "en": "Numeral Agreement",
          "ru": "Согласование числительных",
          "ua": "Узгодження числівників"
        },
        "icon": "🔢",
        "subsections": [
          {
            "title": {
              "en": "The 1, 2, 3, 4 Rule",
              "ru": "Правило 1, 2, 3, 4",
              "ua": "Правило 1, 2, 3, 4"
            },
            "text": {
              "en": "In Croatian, numbers govern the case of the noun that follows them:\n- Number 1 requires Nominative Singular.\n- Numbers 2, 3, 4 require Genitive Singular.\n- Numbers 5 and above require Genitive Plural.",
              "ru": "В хорватском числительные управляют падежом следующего за ними существительного:\n- Число 1 требует именительного падежа единственного числа (Nom. Sing.).\n- Числа 2, 3, 4 требуют родительного падежа единственного числа (Gen. Sing.).\n- Числа 5 и выше требуют родительного падежа множественного числа (Gen. Plural).",
              "ua": "У хорватській мові числівники керують відмінком іменника, що стоїть після них:\n- Число 1 вимагає називного відмінка однини (Nom. Sing.).\n- Числа 2, 3, 4 вимагають родового відмінка однини (Gen. Sing.).\n- Числа 5 і більше вимагають родового відмінка множини (Gen. Plural)."
            },
            "table": {
              "headers": [
                "Number",
                "Required Case",
                "Example",
                "Translation"
              ],
              "rows": [
                {
                  "cells": [
                    "1 (jedan)",
                    "Nominativ Jednina",
                    "jedan prozor",
                    "one window"
                  ]
                },
                {
                  "cells": [
                    "2, 3, 4",
                    "Genitiv Jednina",
                    "dva prozora / četiri prozora",
                    "two windows / four windows"
                  ]
                },
                {
                  "cells": [
                    "5+",
                    "Genitiv Množina",
                    "pet prozora / deset prozora",
                    "five windows / ten windows"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "word_order",
        "title": {
          "en": "Word Order (Red riječi)",
          "ru": "Порядок слов",
          "ua": "Порядок слів"
        },
        "icon": "↔️",
        "subsections": [
          {
            "title": {
              "en": "Free Word Order",
              "ru": "Свободный порядок слов",
              "ua": "Вільний порядок слів"
            },
            "text": {
              "en": "Croatian has a free word order due to its rich case system (meaning the subject, verb, and object can swap places without changing the fundamental meaning). However, standard neutral word order is Subject-Verb-Object (SVO). Enclitics (short pronouns/verbs) must always stand in the second grammatical position.",
              "ru": "Хорватский язык имеет свободный порядок слов благодаря богатой системе падежей (подлежащее, сказуемое и дополнение могут меняться местами без потери основного смысла). Однако стандартным нейтральным порядком является SVO. Энклитики (краткие местоимения/глаголы) всегда должны стоять на второй позиции.",
              "ua": "Хорватська мова має вільний порядок слів завдяки багатій системі відмінків (підмет, присудок і додаток можуть мінятися місцями без втрати основного змісту). Проте стандартним нейтральним порядком є SVO. Енклітики (короткі займенники/дієслова) завжди повинні стояти на другій позиції."
            },
            "examples": [
              {
                "hr": "Ivan čita knjigu. (SVO - Neutral)",
                "translation": {
                  "en": "Ivan reads a book.",
                  "ru": "Иван читает книгу.",
                  "ua": "Іван читає книгу."
                }
              },
              {
                "hr": "Knjigu čita Ivan. (OVS - Emphasizes book)",
                "translation": {
                  "en": "Ivan reads the book.",
                  "ru": "Книгу читает Иван.",
                  "ua": "Книгу читає Іван."
                }
              },
              {
                "hr": "Ja mu je dajem. (Enclitics 'mu' and 'je' in 2nd position)",
                "translation": {
                  "en": "I give it to him.",
                  "ru": "Я даю её ему.",
                  "ua": "Я даю її йому."
                }
              }
            ]
          }
        ]
      },
      {
        "id": "enclitics",
        "title": {
          "en": "The Law of Enclitics",
          "ru": "Закон энклитик",
          "ua": "Закон енклітик"
        },
        "icon": "🔗",
        "subsections": [
          {
            "title": {
              "en": "Wackernagel's Law (Second Position)",
              "ru": "Закон Ваккернагеля",
              "ua": "Закон Ваккернагеля"
            },
            "text": {
              "en": "Enclitics are short, unstressed pronouns and auxiliary verbs that must always occupy the second syntactic position in a sentence. Their hierarchy is strict:\n1. Question particle 'li'\n2. Auxiliaries (sam, si...) except 'je'\n3. Dative pronouns (mi, ti...)\n4. Genitive/Accusative pronouns (me, te...)\n5. Reflexive particle 'se'\n6. Auxiliary 'je' (always goes to the very end of the chain).",
              "ru": "Энклитики — краткие, безударные местоимения и вспомогательные глаголы, которые должны стоять на второй синтаксической позиции в предложении. Их порядок строгий:\n1. Вопросительная частица 'li'\n2. Вспомог. глаголы (sam, si...) кроме 'je'\n3. Местоимения в Дательном падеже (mi, ti...)\n4. Местоимения в Винительном/Родительном падеже (me, te...)\n5. Возвратная частица 'se'\n6. Вспомог. глагол 'je' (всегда ставится в самый конец цепочки).",
              "ua": "Енклітики — короткі, ненаголошені займенники та допоміжні дієслова, які повинні стояти на другій синтаксичній позіції в реченні. Їхній порядок суворий:\n1. Питальна частка 'li'\n2. Допоміжні дієслова (sam, si...) крім 'je'\n3. Займенники в Давальному відмінку (mi, ti...)\n4. Займенники в Знахідному/Родовому відмінку (me, te...)\n5. Зворотна частка 'se'\n6. Допоміжне дієслово 'je' (завжди ставиться в самий кінець ланцюжка)."
            },
            "table": {
              "headers": [
                "Position 1 (Stressed)",
                "Position 2 (Enclitics)",
                "Rest of Sentence",
                {
                  "en": "Translation",
                  "ru": "Перевод",
                  "ua": "Переклад"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Ivan",
                    "mi je",
                    "dizao knjigu.",
                    {
                      "en": "Ivan was lifting the book for me.",
                      "ru": "Иван поднимал мне книгу.",
                      "ua": "Іван піднімав мені книгу."
                    }
                  ]
                },
                {
                  "cells": [
                    "Da",
                    "li mu ga",
                    "daješ?",
                    {
                      "en": "Are you giving it to him?",
                      "ru": "Даешь ли ты это ему?",
                      "ua": "Чи даєш ти це йому?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Oni",
                    "su se",
                    "smijali.",
                    {
                      "en": "They were laughing.",
                      "ru": "Они смеялись.",
                      "ua": "Вони сміялися."
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "orthography",
        "title": {
          "en": "Orthography & Punctuation",
          "ru": "Орфография и пунктуация",
          "ua": "Орфографія та пунктуація"
        },
        "icon": "✍️",
        "subsections": [
          {
            "title": {
              "en": "Phonetic Spelling Principle",
              "ru": "Фонетический принцип",
              "ua": "Фонетичний принцип"
            },
            "text": {
              "en": "Croatian orthography strictly mirrors sound changes (assimilation of voice and place). For example, the prefix 'pod-' + 'pisati' is written as 'potpisati' (the voiced d turns into unvoiced t).",
              "ru": "Хорватское правописание строго отражает звуковые изменения (ассимиляцию по глухости/звонкости). Например, приставка 'pod-' перед глухой p в слове 'pisati' переходит в 'potpisati'.",
              "ua": "Хорватський правопис строго відображає звукові зміни (асиміляцію за глухістю/дзвінкістю). Наприклад, префікс 'pod-' перед глухою p у слові 'pisati' переходить у 'potpisati'."
            },
            "examples": [
              {
                "hr": "pod + pisati → potpisati",
                "translation": {
                  "en": "to sign",
                  "ru": "подписать",
                  "ua": "підписати"
                }
              },
              {
                "hr": "vrabac (nom) → vrapca (gen)",
                "translation": {
                  "en": "sparrow",
                  "ru": "воробей",
                  "ua": "горобець"
                }
              }
            ]
          }
        ]
      }
    ]
  }
];
