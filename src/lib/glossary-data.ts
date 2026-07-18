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
      "en": "Phonetics & Morphonology",
      "ru": "Фонетика и морфонология",
      "ua": "Фонетика та морфонологія"
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
              "en": "The 30 Letters",
              "ru": "30 букв алфавита",
              "ua": "30 літер алфавіту"
            },
            "text": {
              "en": "Croatian uses the Latin alphabet with 30 letters. Each letter corresponds to exactly one sound. The digraphs Dž, Lj, Nj are considered single letters. Note Č/Ć (hard/soft ch) and Dž/Đ (hard/soft j).",
              "ru": "Хорватский использует латиницу из 30 букв. Каждая буква обозначает ровно один звук. Диграфы Dž, Lj, Nj считаются одной буквой. Обратите внимание на пары Č/Ć и Dž/Đ.",
              "ua": "Хорватська використовує латиницю з 30 літер. Кожна літера позначає рівно один звук. Диграфи Dž, Lj, Nj вважаються однією літерою. Зверніть увагу на пари Č/Ć та Dž/Đ."
            },
            "table": {
              "headers": [
                "Letter",
                "Sound (IPA)",
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
                    "Č č",
                    "/tʃ/",
                    "čovjek",
                    {
                      "en": "man",
                      "ru": "человек",
                      "ua": "людина"
                    }
                  ]
                },
                {
                  "cells": [
                    "Ć ć",
                    "/tɕ/",
                    "kuća",
                    {
                      "en": "house",
                      "ru": "дом",
                      "ua": "будинок"
                    }
                  ]
                },
                {
                  "cells": [
                    "Dž dž",
                    "/dʒ/",
                    "džep",
                    {
                      "en": "pocket",
                      "ru": "карман",
                      "ua": "кишеня"
                    }
                  ]
                },
                {
                  "cells": [
                    "Đ đ",
                    "/dʑ/",
                    "đak",
                    {
                      "en": "pupil",
                      "ru": "ученик",
                      "ua": "учень"
                    }
                  ]
                },
                {
                  "cells": [
                    "Lj lj",
                    "/ʎ/",
                    "ljubav",
                    {
                      "en": "love",
                      "ru": "любовь",
                      "ua": "любов"
                    }
                  ]
                },
                {
                  "cells": [
                    "Nj nj",
                    "/ɲ/",
                    "njen",
                    {
                      "en": "her",
                      "ru": "её",
                      "ua": "її"
                    }
                  ]
                }
              ]
            }
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
              "en": "Standard Croatian has a system of 4 musical accents (pitch accents) combining tone and length, plus post-accentual length (zauдарная долгота / poslijeaccentna duljina):",
              "ru": "Стандартный хорватский имеет систему из 4 музыкальных ударений, сочетающих тон и долготу, а также заударную долготу (poslijeaccentna duljina):",
              "ua": "Стандартна хорватська має систему з 4 музичних наголосів, що поєднують тон і довготу, а також заударну довготу (poslijeaccentna duljina):"
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
                    "vòda",
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
                    "kȕća",
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
                    "rúka",
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
                    "grâd",
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
    "id": "nouns_adjectives",
    "title": {
      "en": "Nouns & Adjectives",
      "ru": "Существительные и прилагательные",
      "ua": "Іменники та прикметники"
    },
    "icon": "🏷️",
    "sections": [
      {
        "id": "nouns",
        "title": {
          "en": "Noun Declensions (A, E, I Types)",
          "ru": "Склонения существительных (A, E, I)",
          "ua": "Відміни іменників (A, E, I)"
        },
        "icon": "📝",
        "subsections": [
          {
            "title": {
              "en": "Three Academic Types",
              "ru": "Три академических типа склонения",
              "ua": "Три академічні типи відмінювання"
            },
            "text": {
              "en": "Nouns are declined in three classes:\n- A-Type: Masculine (consonant) and Neuter (-o/-e). Monosyllabic masculine nouns get long plural infixes (-ov- / -ev-).\n- E-Type: Feminine and masculine nouns ending in -a (žena, sluga).\n- I-Type: Feminine nouns ending in a consonant (kost, noć).",
              "ru": "Существительные склоняются по трем типам:\n- А-тип: Мужской (на согласный) и Средний (-o/-e) род. Односложные мужские слова получают долгое множ. число (-ov- / -ev-).\n- Е-тип: Женский и мужской род на -a (žena, sluga).\n- I-тип: Женский род на согласный (kost, noć).",
              "ua": "Іменники відмінюються за трьома типами:\n- А-тип: Чоловічий (на приголосну) та Середній (-o/-e) рід. Односкладові чоловічі слова отримують довгу множину (-ov- / -ev-).\n- Е-тип: Жіночий та чоловічий рід на -a (žena, sluga).\n- І-тип: Жіночий рід на приголосну (kost, noć)."
            },
            "table": {
              "headers": [
                "Declension Type",
                "Gender / Ending",
                "Examples",
                {
                  "en": "Plural Form",
                  "ru": "Форма мн.ч.",
                  "ua": "Форма мн.ч."
                }
              ],
              "rows": [
                {
                  "cells": [
                    "A-type",
                    "Masc (consonant)",
                    "grad, muž",
                    "gradovi, muževi"
                  ]
                },
                {
                  "cells": [
                    "A-type",
                    "Neut (-o / -e)",
                    "selo, ime",
                    "sela, imena"
                  ]
                },
                {
                  "cells": [
                    "E-type",
                    "Fem/Masc (-a)",
                    "knjiga, sluga",
                    "knjige, sluge"
                  ]
                },
                {
                  "cells": [
                    "I-type",
                    "Fem (consonant)",
                    "noć, kost",
                    "noći, kosti (or koštane)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "adjectives",
        "title": {
          "en": "Adjective Types & Comparisons",
          "ru": "Прилагательные и сравнение",
          "ua": "Прикметники та порівняння"
        },
        "icon": "🎨",
        "subsections": [
          {
            "title": {
              "en": "Definite vs Indefinite",
              "ru": "Определенные и неопределенные формы",
              "ua": "Визначені та невизначені форми"
            },
            "text": {
              "en": "Indefinite adjectives answer 'kakav?' (what kind of?) and have a zero ending (nov). Definite adjectives answer 'koji?' (which one?) and end in -i (novi). Degrees of comparison: comparative uses -iji, -ji, or -ši; superlative adds the prefix 'naj-' (e.g. najnoviji).",
              "ru": "Неопределенные формы отвечают на 'kakav?' и имеют нулевое окончание (nov). Определенные отвечают на 'koji?' и оканчиваются на -i (novi). Степени сравнения: сравнительная использует -iji, -ji, -ši; превосходная добавляет приставку 'naj-' (najnoviji).",
              "ua": "Невизначені форми відповідають на 'kakav?' та мають нульове закінчення (nov). Визначені відповідають на 'koji?' та закінчуються на -i (novi). Ступені порівняння: вищий використовує -iji, -ji, -ši; найвищий додає префікс 'naj-' (najnoviji)."
            },
            "table": {
              "headers": [
                "Positive",
                "Comparative",
                "Superlative",
                {
                  "en": "Translation",
                  "ru": "Перевод",
                  "ua": "Переклад"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "nov",
                    "noviji",
                    "najnoviji",
                    {
                      "en": "new -> newest",
                      "ru": "новый -> новейший",
                      "ua": "новий -> найновіший"
                    }
                  ]
                },
                {
                  "cells": [
                    "mlad",
                    "mlađi",
                    "najmlađi",
                    {
                      "en": "young -> youngest",
                      "ru": "молодой -> младший",
                      "ua": "молодий -> наймолодший"
                    }
                  ]
                },
                {
                  "cells": [
                    "dobar",
                    "bolji",
                    "najbolji",
                    {
                      "en": "good -> best (irregular)",
                      "ru": "хороший -> лучший",
                      "ua": "добрий -> найкращий"
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
    "id": "pronouns_numerals",
    "title": {
      "en": "Pronouns & Numerals",
      "ru": "Местоимения и числительные",
      "ua": "Займенники та числівники"
    },
    "icon": "🔗",
    "sections": [
      {
        "id": "pronouns",
        "title": {
          "en": "Pronoun Classifications",
          "ru": "Классификация местоимений",
          "ua": "Класифікація займенників"
        },
        "icon": "👥",
        "subsections": [
          {
            "title": {
              "en": "Demonstrative & Possessive Pronouns",
              "ru": "Указательные и притяжательные",
              "ua": "Вказівні та притяжальні"
            },
            "text": {
              "en": "Croatian has a triple space orientation system for demonstrative pronouns:\n- ovaj (close to speaker),\n- taj (close to listener),\n- onaj (far from both).\nPossessive pronouns: moj, tvoj, njegov, njezin, naš, vaš, njihov + reflexive svoj.",
              "ru": "Хорватский имеет тройную систему ориентации для указательных местоимений:\n- ovaj (близко к говорящему),\n- taj (близко к слушателю),\n- onaj (далеко от обоих).\nПритяжательные местоимения: moj, tvoj, njegov, njezin, naš, vaš, njihov + возвратное svoj.",
              "ua": "Хорватська має потрійну систему орієнтації для вказівних займенників:\n- ovaj (близько до мовця),\n- taj (близько до слухача),\n- onaj (далеко від обох).\nПритяжальні займенники: moj, tvoj, njegov, njezin, naš, vaš, njihov + зворотний svoj."
            },
            "table": {
              "headers": [
                "Type",
                "Masc. Sing.",
                "Fem. Sing.",
                "Neut. Sing.",
                {
                  "en": "English",
                  "ru": "Перевод",
                  "ua": "Переклад"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Demonstrative",
                    "ovaj",
                    "ova",
                    "ovo",
                    {
                      "en": "this (near me)",
                      "ru": "этот (около меня)",
                      "ua": "цей (біля мене)"
                    }
                  ]
                },
                {
                  "cells": [
                    "Demonstrative",
                    "taj",
                    "ta",
                    "to",
                    {
                      "en": "that (near you)",
                      "ru": "этот (около тебя)",
                      "ua": "цей (біля тебе)"
                    }
                  ]
                },
                {
                  "cells": [
                    "Demonstrative",
                    "onaj",
                    "ona",
                    "ono",
                    {
                      "en": "that (far away)",
                      "ru": "тот (вдали)",
                      "ua": "той (вдалині)"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "numerals",
        "title": {
          "en": "Numeral Agreement (1, 2, 3, 4 Rule)",
          "ru": "Согласование числительных (1, 2, 3, 4)",
          "ua": "Узгодження числівників (1, 2, 3, 4)"
        },
        "icon": "🔢",
        "subsections": [
          {
            "title": {
              "en": "Slavic Case Agreement",
              "ru": "Славянское правило падежа",
              "ua": "Слов'янське правило відмінка"
            },
            "text": {
              "en": "Numbers govern the case of the noun they modify:\n- 1 (jedan) requires Nominative Singular.\n- 2, 3, 4 (dva, tri, četiri) require Genitive Singular.\n- 5 and above require Genitive Plural (non-declinable syntactic nouns).",
              "ru": "Числительные управляют падежом существительного:\n- 1 требует именительного падежа единственного числа.\n- 2, 3, 4 требуют родительного падежа единственного числа (Gen. Sing.).\n- 5 и выше требуют родительного падежа множественного числа (Gen. Plur.).",
              "ua": "Числівники керують відмінком іменника:\n- 1 вимагає називного відмінка однини.\n- 2, 3, 4 вимагають родового відмінка однини (Gen. Sing.).\n- 5 і більше вимагають родового відмінка множини (Gen. Plur.)."
            },
            "table": {
              "headers": [
                "Number",
                "Required Case",
                "Example",
                {
                  "en": "English",
                  "ru": "Перевод",
                  "ua": "Переклад"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "1",
                    "Nominativ Jednina",
                    "jedan stol",
                    "one table"
                  ]
                },
                {
                  "cells": [
                    "2, 3, 4",
                    "Genitiv Jednina",
                    "dva stola / četiri stola",
                    "two tables / four tables"
                  ]
                },
                {
                  "cells": [
                    "5+",
                    "Genitiv Množina",
                    "pet stolova",
                    "five tables"
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
    "id": "verbs",
    "title": {
      "en": "Verbs & Tenses",
      "ru": "Глаголы и времена",
      "ua": "Дієслова та часи"
    },
    "icon": "⏳",
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
              "en": "Conjugations",
              "ru": "Спряжения",
              "ua": "Дієвідміни"
            },
            "text": {
              "en": "Conjugation groups are classified by the thematic vowel before personal endings (-am, -em, -im, -jem).",
              "ru": "Группы спряжения классифицируются по тематической гласной перед личными окончаниями (-am, -em, -im, -jem).",
              "ua": "Групи дієвідмінювання класифікуються за тематичним голосним перед особовими закінченнями (-am, -em, -im, -jem)."
            },
            "table": {
              "headers": [
                "Person",
                "čitati (-a-)",
                "pisati (-e-)",
                "govoriti (-i-)"
              ],
              "rows": [
                {
                  "cells": [
                    "ja",
                    "čitam",
                    "pišem",
                    "govorim"
                  ]
                },
                {
                  "cells": [
                    "ti",
                    "čitaš",
                    "pišeš",
                    "govoriš"
                  ]
                },
                {
                  "cells": [
                    "on/ona",
                    "čita",
                    "piše",
                    "govori"
                  ]
                },
                {
                  "cells": [
                    "mi",
                    "čitamo",
                    "pišemo",
                    "govorimo"
                  ]
                },
                {
                  "cells": [
                    "vi",
                    "čitate",
                    "pišete",
                    "govorite"
                  ]
                },
                {
                  "cells": [
                    "oni",
                    "čitaju",
                    "pišu",
                    "govore"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "past_tenses",
        "title": {
          "en": "Past Tense System",
          "ru": "Система прошедших времен",
          "ua": "Система минулих часів"
        },
        "icon": "⏪",
        "subsections": [
          {
            "title": {
              "en": "Perfekt, Aorist, Imperfekt, Pluskvamperfekt",
              "ru": "Прошедшие времена",
              "ua": "Минулі часи"
            },
            "text": {
              "en": "Croatian has four past tenses:\n- Perfekt: auxiliary 'biti' + -l participle (most common).\n- Aorist: simple fast tense for completed actions (-h / -oh endings).\n- Imperfekt: simple tense for ongoing actions (-ah / -jah).\n- Pluskvamperfekt: predprošedšeje (pluperfect).",
              "ru": "В хорватском четыре прошедших времени:\n- Perfekt: вспомогательный глагол 'biti' + причастие на -l (самый частый).\n- Aorist: простое прошедшее совершенного вида (окончания -h / -oh).\n- Imperfekt: простое прошедшее несовершенного вида (окончания -ah / -jah).\n- Pluskvamperfekt: предпрошедшее время.",
              "ua": "У хорватській чотири минулі часи:\n- Perfekt: допоміжне дієслово 'biti' + дієприкметник на -l (найуживаніший).\n- Aorist: простий минулий час доконаного виду (закінчення -h / -oh).\n- Imperfekt: простий минулий час недоконаного виду (закінчення -ah / -jah).\n- Pluskvamperfekt: передминулий час."
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
                    "Perfekt",
                    "čitao sam / napisao sam",
                    {
                      "en": "I read / I wrote",
                      "ru": "я читал / я написал",
                      "ua": "я читав / я написав"
                    }
                  ]
                },
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
                    "bio sam čitao",
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
        "id": "future_tenses",
        "title": {
          "en": "Future Tense System",
          "ru": "Система будущих времен",
          "ua": "Система майбутніх часів"
        },
        "icon": "⏩",
        "subsections": [
          {
            "title": {
              "en": "Futur I & Futur II",
              "ru": "Futur I и Futur II",
              "ua": "Futur I та Futur II"
            },
            "text": {
              "en": "Future I is formed with short forms of 'htjeti' + infinitive (ću čitati). Spelling inversion: when infinitive is first, drop the 'i' (čitat ću).\nFuture II uses precise present of 'biti' (budem, budeš...) + -l participle in subordinate clauses.",
              "ru": "Futur I образуется через краткую форму 'htjeti' + инфинитив (ću čitati). При инверсии отбрасывается 'i' (čitat ću).\nFutur II использует точное настоящее время 'biti' (budem, budeš...) + -l причастие в придаточных.",
              "ua": "Futur I утворюється через коротку форму 'htjeti' + інфінітив (ću čitati). При інверсії відкидається 'i' (čitat ću).\nFutur II використовує точний теперішній час 'biti' (budem, budeš...) + -l дієприкметник у підрядних."
            },
            "table": {
              "headers": [
                "Futur Type",
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
                    "Futur I (Standard)",
                    "Ja ću pisati / Pisat ću",
                    {
                      "en": "I will write",
                      "ru": "Я буду писать / Я напишу",
                      "ua": "Я буду писати / Я напишу"
                    }
                  ]
                },
                {
                  "cells": [
                    "Futur II (Subordinate)",
                    "Ako budem pisao...",
                    {
                      "en": "If I write (in future)",
                      "ru": "Если я буду писать...",
                      "ua": "Якщо я буду писати..."
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
    "id": "syntax",
    "title": {
      "en": "Syntax & Word Order",
      "ru": "Синтаксис и порядок слов",
      "ua": "Синтаксис та порядок слів"
    },
    "icon": "↔️",
    "sections": [
      {
        "id": "enclitics",
        "title": {
          "en": "The Law of Enclitics (Second Position)",
          "ru": "Правило энклитик (Второе место)",
          "ua": "Правило енклітик (Друге місце)"
        },
        "icon": "🔗",
        "subsections": [
          {
            "title": {
              "en": "Wackernagel's Law",
              "ru": "Закон Ваккернагеля",
              "ua": "Закон Ваккернагеля"
            },
            "text": {
              "en": "Enclitics are short, unstressed pronouns and auxiliary verbs that must always occupy the second syntactic position in a sentence. Their hierarchy is strict:\n1. Question particle 'li'\n2. Auxiliaries (sam, si...) except 'je'\n3. Dative pronouns (mi, ti...)\n4. Genitive/Accusative pronouns (me, te...)\n5. Reflexive particle 'se'\n6. Auxiliary 'je' (always goes to the very end of the chain).",
              "ru": "Энклитики — краткие, безударные местоимения и вспомогательные глаголы, которые должны стоять на второй синтаксической позиции в предложении. Их порядок строгий:\n1. Вопросительная частица 'li'\n2. Вспомог. глаголы (sam, si...) кроме 'je'\n3. Местоимения в Дательном падеже (mi, ti...)\n4. Местоимения в Винительном/Родительном падеже (me, te...)\n5. Возвратная частица 'se'\n6. Вспомог. глагол 'je' (всегда ставится в самый конец цепочки).",
              "ua": "Енклітики — короткі, ненаголошені займенники та допоміжні дієслова, які повинні стояти на другій синтаксичній позиції в реченні. Їхній порядок суворий:\n1. Питальна частка 'li'\n2. Допоміжні дієслова (sam, si...) крім 'je'\n3. Займенники в Давальному відмінку (mi, ti...)\n4. Займенники в Знахідному/Родовому відмінку (me, te...)\n5. Зворотна частка 'se'\n6. Допоміжне дієслово 'je' (завжди ставиться в самий кінець ланцюжка)."
            },
            "table": {
              "headers": [
                "Position 1 (Stressed)",
                "Position 2 (Enclitics Chain)",
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
        "id": "clauses",
        "title": {
          "en": "Subordinate Clauses (Zavisne rečenice)",
          "ru": "Придаточные предложения",
          "ua": "Підрядні речення"
        },
        "icon": "⛓️",
        "subsections": [
          {
            "title": {
              "en": "Conditional Clauses",
              "ru": "Условные придаточные",
              "ua": "Умовні підрядні"
            },
            "text": {
              "en": "Croatian divides conditional clauses into:\n- Real condition: 'ako' + present/future.\n- Potential condition: 'ako'/'kad' + Kondicional I.\n- Unreal condition: 'da' + present/perfekt.",
              "ru": "В хорватском три вида условных придаточных:\n- Реальное условие: 'ako' + настоящее/будущее время.\n- Потенциальное условие: 'ako'/'kad' + кондиционал I.\n- Нереальное условие: 'da' + настоящее/прошедшее время.",
              "ua": "У хорватській три види умовних підрядних:\n- Реальна умова: 'ako' + теперішній/майбутній час.\n- Потенційна умова: 'ako'/'kad' + кондиціонал I.\n- Нереальна умова: 'da' + теперішній/минулий час."
            },
            "table": {
              "headers": [
                "Condition Type",
                "Conjunction",
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
                    "Real",
                    "ako",
                    "Ako budem imao vremena, doći ću.",
                    {
                      "en": "If I have time, I will come.",
                      "ru": "Если у меня будет время, я приду.",
                      "ua": "Якщо у мене буде час, я прийду."
                    }
                  ]
                },
                {
                  "cells": [
                    "Potential",
                    "kad bi / ako",
                    "Kad bih imao vremena, došao bih.",
                    {
                      "en": "If I had time (possible), I'd come.",
                      "ru": "Если бы у меня было время, я бы пришел.",
                      "ua": "Якби у мене був час, я б прийшов."
                    }
                  ]
                },
                {
                  "cells": [
                    "Unreal",
                    "da",
                    "Da sam imao vremena, došao bih.",
                    {
                      "en": "If I had had time (impossible), I'd have come.",
                      "ru": "Если бы у меня было время (тогда), я бы пришел.",
                      "ua": "Якби я мав час (тоді), я б прийшов."
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
    "id": "orthography",
    "title": {
      "en": "Orthography & Punctuation",
      "ru": "Орфография и пунктуация",
      "ua": "Орфографія та пунктуація"
    },
    "icon": "✍️",
    "sections": [
      {
        "id": "phonetic_spelling",
        "title": {
          "en": "Phonetic Spelling Principle",
          "ru": "Фонетический принцип",
          "ua": "Фонетичний принцип"
        },
        "icon": "🗣️",
        "subsections": [
          {
            "title": {
              "en": "Write as you Speak",
              "ru": "Пиши как говоришь",
              "ua": "Пиши як говориш"
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
