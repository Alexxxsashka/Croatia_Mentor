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
      "ru": "╨д╨╛╨╜╨╡╤В╨╕╨║╨░ ╨╕ ╨░╨╗╤Д╨░╨▓╨╕╤В",
      "ua": "╨д╨╛╨╜╨╡╤В╨╕╨║╨░ ╤В╨░ ╨░╨╗╤Д╨░╨▓╤Ц╤В"
    },
    "icon": "ЁЯФд",
    "sections": [
      {
        "id": "alphabet",
        "title": {
          "en": "Croatian Alphabet (Abeceda)",
          "ru": "╨е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╣ ╨░╨╗╤Д╨░╨▓╨╕╤В (Abeceda)",
          "ua": "╨е╨╛╤А╨▓╨░╤В╤Б╤М╨║╨╕╨╣ ╨░╨╗╤Д╨░╨▓╤Ц╤В (Abeceda)"
        },
        "icon": "ЁЯУЦ",
        "subsections": [
          {
            "title": {
              "en": "The Alphabet",
              "ru": "╨Р╨╗╤Д╨░╨▓╨╕╤В",
              "ua": "╨Р╨╗╤Д╨░╨▓╤Ц╤В"
            },
            "text": {
              "en": "Croatian uses the Latin alphabet with 30 letters. Each letter corresponds to exactly one sound тАФ Croatian spelling is fully phonetic. There are no silent letters.",
              "ru": "╨е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╣ ╤П╨╖╤Л╨║ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В ╨╗╨░╤В╨╕╨╜╤Б╨║╨╕╨╣ ╨░╨╗╤Д╨░╨▓╨╕╤В ╨╕╨╖ 30 ╨▒╤Г╨║╨▓. ╨Ъ╨░╨╢╨┤╨░╤П ╨▒╤Г╨║╨▓╨░ ╤Б╨╛╨╛╤В╨▓╨╡╤В╤Б╤В╨▓╤Г╨╡╤В ╤А╨╛╨▓╨╜╨╛ ╨╛╨┤╨╜╨╛╨╝╤Г ╨╖╨▓╤Г╨║╤Г тАФ ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨░╤П ╨╛╤А╤Д╨╛╨│╤А╨░╤Д╨╕╤П ╨┐╨╛╨╗╨╜╨╛╤Б╤В╤М╤О ╤Д╨╛╨╜╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П. ╨Э╨╡╤В ╨╜╨╡╨╝╤Л╤Е ╨▒╤Г╨║╨▓.",
              "ua": "╨е╨╛╤А╨▓╨░╤В╤Б╤М╨║╨░ ╨╝╨╛╨▓╨░ ╨▓╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤Ф ╨╗╨░╤В╨╕╨╜╤Б╤М╨║╨╕╨╣ ╨░╨╗╤Д╨░╨▓╤Ц╤В ╤Ц╨╖ 30 ╨╗╤Ц╤В╨╡╤А. ╨Ъ╨╛╨╢╨╜╨░ ╨╗╤Ц╤В╨╡╤А╨░ ╨▓╤Ц╨┤╨┐╨╛╨▓╤Ц╨┤╨░╤Ф ╤А╤Ц╨▓╨╜╨╛ ╨╛╨┤╨╜╨╛╨╝╤Г ╨╖╨▓╤Г╨║╤Г тАФ ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╨░ ╨╛╤А╤Д╨╛╨│╤А╨░╤Д╤Ц╤П ╨┐╨╛╨▓╨╜╤Ц╤Б╤В╤О ╤Д╨╛╨╜╨╡╤В╨╕╤З╨╜╨░. ╨Э╨╡╨╝╨░╤Ф ╨╜╤Ц╨╝╨╕╤Е ╨╗╤Ц╤В╨╡╤А."
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
                    "─М ─Н",
                    "─Нe",
                    "/t╩Г/",
                    "─Нovjek (person)"
                  ]
                },
                {
                  "cells": [
                    "─Ж ─З",
                    "─Зe",
                    "/t╔Х/",
                    "─Зevapi (─Зevapi)"
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
                    "D┼╛ d┼╛",
                    "d┼╛e",
                    "/d╩Т/",
                    "d┼╛em (jam)"
                  ]
                },
                {
                  "cells": [
                    "─Р ─С",
                    "─Сe",
                    "/d╩С/",
                    "─Сak (pupil)"
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
                    "/╔б/",
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
                    "ku─Зa (house)"
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
                    "/╩О/",
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
                    "/╔▓/",
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
                    "┼а ┼б",
                    "e┼б",
                    "/╩Г/",
                    "┼бkola (school)"
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
                    "/╩Л/",
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
                    "┼╜ ┼╛",
                    "┼╛e",
                    "/╩Т/",
                    "┼╛ena (woman)"
                  ]
                }
              ]
            }
          },
          {
            "title": {
              "en": "Special Letters",
              "ru": "╨Ю╤Б╨╛╨▒╤Л╨╡ ╨▒╤Г╨║╨▓╤Л",
              "ua": "╨Ю╤Б╨╛╨▒╨╗╨╕╨▓╤Ц ╨╗╤Ц╤В╨╡╤А╨╕"
            },
            "text": {
              "en": "Croatian has several unique letters: ─М, ─Ж, ─Р, D┼╛, Lj, Nj, ┼а, ┼╜. The digraphs D┼╛, Lj, Nj are each considered single letters. ─М vs ─Ж: ─М is a 'hard' ch (like English 'church'), while ─Ж is a 'soft' ch (palatalized, similar to Italian 'ci').",
              "ru": "╨Т ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╛╨╝ ╨╜╨╡╤Б╨║╨╛╨╗╤М╨║╨╛ ╤Г╨╜╨╕╨║╨░╨╗╤М╨╜╤Л╤Е ╨▒╤Г╨║╨▓: ─М, ─Ж, ─Р, D┼╛, Lj, Nj, ┼а, ┼╜. ╨Ф╨╕╨│╤А╨░╤Д╤Л D┼╛, Lj, Nj ╤Б╤З╨╕╤В╨░╤О╤В╤Б╤П ╨╛╨┤╨╜╨╛╨╣ ╨▒╤Г╨║╨▓╨╛╨╣. ─М vs ─Ж: ─М тАФ ┬л╤В╨▓╤С╤А╨┤╤Л╨╣┬╗ ╨╖╨▓╤Г╨║ (╨║╨░╨║ ╨░╨╜╨│╨╗. 'church'), ╨░ ─Ж тАФ ┬л╨╝╤П╨│╨║╨╕╨╣┬╗ (╨┐╨░╨╗╨░╤В╨░╨╗╨╕╨╖╨╛╨▓╨░╨╜╨╜╤Л╨╣, ╨┐╨╛╤Е╨╛╨╢ ╨╜╨░ ╨╕╤В╨░╨╗╤М╤П╨╜╤Б╨║╨╛╨╡ 'ci').",
              "ua": "╨г ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц╨╣ ╨║╤Ц╨╗╤М╨║╨░ ╤Г╨╜╤Ц╨║╨░╨╗╤М╨╜╨╕╤Е ╨╗╤Ц╤В╨╡╤А: ─М, ─Ж, ─Р, D┼╛, Lj, Nj, ┼а, ┼╜. ╨Ф╨╕╨│╤А╨░╤Д╨╕ D┼╛, Lj, Nj ╨▓╨▓╨░╨╢╨░╤О╤В╤М╤Б╤П ╨╛╨┤╨╜╤Ц╤Ф╤О ╨╗╤Ц╤В╨╡╤А╨╛╤О. ─М vs ─Ж: ─М тАФ ┬л╤В╨▓╨╡╤А╨┤╨╕╨╣┬╗ ╨╖╨▓╤Г╨║ (╤П╨║ ╨░╨╜╨│╨╗. 'church'), ╨░ ─Ж тАФ ┬л╨╝'╤П╨║╨╕╨╣┬╗ (╨┐╨░╨╗╨░╤В╨░╨╗╤Ц╨╖╨╛╨▓╨░╨╜╨╕╨╣, ╤Б╤Е╨╛╨╢╨╕╨╣ ╨╜╨░ ╤Ц╤В╨░╨╗╤Ц╨╣╤Б╤М╨║╨╡ 'ci')."
            },
            "examples": [
              {
                "hr": "─Мovjek je dobar.",
                "translation": {
                  "en": "The person is good.",
                  "ru": "╨з╨╡╨╗╨╛╨▓╨╡╨║ ╤Е╨╛╤А╨╛╤И╨╕╨╣.",
                  "ua": "╨Ы╤О╨┤╨╕╨╜╨░ ╨┤╨╛╨▒╤А╨░."
                }
              },
              {
                "hr": "No─З je lijepa.",
                "translation": {
                  "en": "The night is beautiful.",
                  "ru": "╨Э╨╛╤З╤М ╨║╤А╨░╤Б╨╕╨▓╨░.",
                  "ua": "╨Э╤Ц╤З ╨│╨░╤А╨╜╨░."
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
          "ru": "╨Я╤А╨░╨▓╨╕╨╗╨░ ╨┐╤А╨╛╨╕╨╖╨╜╨╛╤И╨╡╨╜╨╕╤П",
          "ua": "╨Я╤А╨░╨▓╨╕╨╗╨░ ╨▓╨╕╨╝╨╛╨▓╨╕"
        },
        "icon": "ЁЯЧгя╕П",
        "subsections": [
          {
            "title": {
              "en": "Stress and Intonation",
              "ru": "╨г╨┤╨░╤А╨╡╨╜╨╕╨╡ ╨╕ ╨╕╨╜╤В╨╛╨╜╨░╤Ж╨╕╤П",
              "ua": "╨Э╨░╨│╨╛╨╗╨╛╤Б ╤В╨░ ╤Ц╨╜╤В╨╛╨╜╨░╤Ж╤Ц╤П"
            },
            "text": {
              "en": "Croatian has a pitch accent system with four types of stress: short falling, short rising, long falling, long rising. Stress never falls on the last syllable (except in some monosyllabic words). In standard speech, stress tends to be on the first or second syllable.",
              "ru": "╨Т ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╛╨╝ ╤П╨╖╤Л╨║╨╡ ╨╡╤Б╤В╤М ╤В╨╛╨╜╨░╨╗╤М╨╜╨░╤П ╤Б╨╕╤Б╤В╨╡╨╝╨░ ╤Г╨┤╨░╤А╨╡╨╜╨╕╤П ╤Б ╤З╨╡╤В╤Л╤А╤М╨╝╤П ╤В╨╕╨┐╨░╨╝╨╕: ╨║╤А╨░╤В╨║╨╛╨╡ ╨╜╨╕╤Б╤Е╨╛╨┤╤П╤Й╨╡╨╡, ╨║╤А╨░╤В╨║╨╛╨╡ ╨▓╨╛╤Б╤Е╨╛╨┤╤П╤Й╨╡╨╡, ╨┤╨╛╨╗╨│╨╛╨╡ ╨╜╨╕╤Б╤Е╨╛╨┤╤П╤Й╨╡╨╡, ╨┤╨╛╨╗╨│╨╛╨╡ ╨▓╨╛╤Б╤Е╨╛╨┤╤П╤Й╨╡╨╡. ╨г╨┤╨░╤А╨╡╨╜╨╕╨╡ ╨╜╨╕╨║╨╛╨│╨┤╨░ ╨╜╨╡ ╨┐╨░╨┤╨░╨╡╤В ╨╜╨░ ╨┐╨╛╤Б╨╗╨╡╨┤╨╜╨╕╨╣ ╤Б╨╗╨╛╨│ (╨║╤А╨╛╨╝╨╡ ╨╜╨╡╨║╨╛╤В╨╛╤А╤Л╤Е ╨╛╨┤╨╜╨╛╤Б╨╗╨╛╨╢╨╜╤Л╤Е ╤Б╨╗╨╛╨▓).",
              "ua": "╨г ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц╨╣ ╨╝╨╛╨▓╤Ц ╤Ф ╤В╨╛╨╜╨░╨╗╤М╨╜╨░ ╤Б╨╕╤Б╤В╨╡╨╝╨░ ╨╜╨░╨│╨╛╨╗╨╛╤Б╤Г ╨╖ ╤З╨╛╤В╨╕╤А╨╝╨░ ╤В╨╕╨┐╨░╨╝╨╕: ╨║╨╛╤А╨╛╤В╨║╨╕╨╣ ╤Б╨┐╨░╨┤╨╜╨╕╨╣, ╨║╨╛╤А╨╛╤В╨║╨╕╨╣ ╨▓╨╕╤Б╤Е╤Ц╨┤╨╜╨╕╨╣, ╨┤╨╛╨▓╨│╨╕╨╣ ╤Б╨┐╨░╨┤╨╜╨╕╨╣, ╨┤╨╛╨▓╨│╨╕╨╣ ╨▓╨╕╤Б╤Е╤Ц╨┤╨╜╨╕╨╣. ╨Э╨░╨│╨╛╨╗╨╛╤Б ╨╜╤Ц╨║╨╛╨╗╨╕ ╨╜╨╡ ╨┐╨░╨┤╨░╤Ф ╨╜╨░ ╨╛╤Б╤В╨░╨╜╨╜╤Ц╨╣ ╤Б╨║╨╗╨░╨┤ (╨║╤А╤Ц╨╝ ╨┤╨╡╤П╨║╨╕╤Е ╨╛╨┤╨╜╨╛╤Б╨║╨╗╨░╨┤╨╛╨▓╨╕╤Е ╤Б╨╗╤Ц╨▓)."
            },
            "examples": [
              {
                "hr": "v├▓da",
                "translation": {
                  "en": "water (short rising)",
                  "ru": "╨▓╨╛╨┤╨░ (╨║╤А╨░╤В╨║╨╛╨╡ ╨▓╨╛╤Б╤Е╨╛╨┤╤П╤Й╨╡╨╡)",
                  "ua": "╨▓╨╛╨┤╨░ (╨║╨╛╤А╨╛╤В╨║╨╕╨╣ ╨▓╨╕╤Б╤Е╤Ц╨┤╨╜╨╕╨╣)"
                }
              },
              {
                "hr": "gl├вva",
                "translation": {
                  "en": "head (long falling)",
                  "ru": "╨│╨╛╨╗╨╛╨▓╨░ (╨┤╨╛╨╗╨│╨╛╨╡ ╨╜╨╕╤Б╤Е╨╛╨┤╤П╤Й╨╡╨╡)",
                  "ua": "╨│╨╛╨╗╨╛╨▓╨░ (╨┤╨╛╨▓╨│╨╕╨╣ ╤Б╨┐╨░╨┤╨╜╨╕╨╣)"
                }
              }
            ]
          },
          {
            "title": {
              "en": "Syllabic R",
              "ru": "╨б╨╗╨╛╨│╨╛╨▓╨╛╨╡ R",
              "ua": "╨б╨║╨╗╨░╨┤╨╛╨▓╨╡ R"
            },
            "text": {
              "en": "In Croatian, the letter R can function as a vowel and form its own syllable. This is called 'syllabic R' (slogovno R). It appears in many common words.",
              "ru": "╨Т ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╛╨╝ ╨▒╤Г╨║╨▓╨░ R ╨╝╨╛╨╢╨╡╤В ╨▓╤Л╤Б╤В╤Г╨┐╨░╤В╤М ╨▓ ╤А╨╛╨╗╨╕ ╨│╨╗╨░╤Б╨╜╨╛╨│╨╛ ╨╕ ╨╛╨▒╤А╨░╨╖╨╛╨▓╤Л╨▓╨░╤В╤М ╤Б╨╛╨▒╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤Б╨╗╨╛╨│. ╨н╤В╨╛ ╨╜╨░╨╖╤Л╨▓╨░╨╡╤В╤Б╤П ┬л╤Б╨╗╨╛╨│╨╛╨▓╨╛╨╡ R┬╗ (slogovno R). ╨Т╤Б╤В╤А╨╡╤З╨░╨╡╤В╤Б╤П ╨▓╨╛ ╨╝╨╜╨╛╨│╨╕╤Е ╤А╨░╤Б╨┐╤А╨╛╤Б╤В╤А╨░╨╜╤С╨╜╨╜╤Л╤Е ╤Б╨╗╨╛╨▓╨░╤Е.",
              "ua": "╨г ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц╨╣ ╨╗╤Ц╤В╨╡╤А╨░ R ╨╝╨╛╨╢╨╡ ╨▓╨╕╤Б╤В╤Г╨┐╨░╤В╨╕ ╨▓ ╤А╨╛╨╗╤Ц ╨│╨╛╨╗╨╛╤Б╨╜╨╛╨│╨╛ ╤В╨░ ╤Г╤В╨▓╨╛╤А╤О╨▓╨░╤В╨╕ ╨▓╨╗╨░╤Б╨╜╨╕╨╣ ╤Б╨║╨╗╨░╨┤. ╨ж╨╡ ╨╜╨░╨╖╨╕╨▓╨░╤Ф╤В╤М╤Б╤П ┬л╤Б╨║╨╗╨░╨┤╨╛╨▓╨╡ R┬╗ (slogovno R). ╨Ч╤Г╤Б╤В╤А╤Ц╤З╨░╤Ф╤В╤М╤Б╤П ╨▓ ╨▒╨░╨│╨░╤В╤М╨╛╤Е ╨┐╨╛╤И╨╕╤А╨╡╨╜╨╕╤Е ╤Б╨╗╨╛╨▓╨░╤Е."
            },
            "examples": [
              {
                "hr": "krv",
                "translation": {
                  "en": "blood",
                  "ru": "╨║╤А╨╛╨▓╤М",
                  "ua": "╨║╤А╨╛╨▓"
                }
              },
              {
                "hr": "prst",
                "translation": {
                  "en": "finger",
                  "ru": "╨┐╨░╨╗╨╡╤Ж",
                  "ua": "╨┐╨░╨╗╨╡╤Ж╤М"
                }
              },
              {
                "hr": "trg",
                "translation": {
                  "en": "square (plaza)",
                  "ru": "╨┐╨╗╨╛╤Й╨░╨┤╤М",
                  "ua": "╨┐╨╗╨╛╤Й╨░"
                }
              },
              {
                "hr": "crn",
                "translation": {
                  "en": "black",
                  "ru": "╤З╤С╤А╨╜╤Л╨╣",
                  "ua": "╤З╨╛╤А╨╜╨╕╨╣"
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
      "en": "Noun Cases (Pade┼╛i)",
      "ru": "╨Я╨░╨┤╨╡╨╢╨╕ (Pade┼╛i)",
      "ua": "╨Т╤Ц╨┤╨╝╤Ц╨╜╨║╨╕ (Pade┼╛i)"
    },
    "icon": "ЁЯУЭ",
    "sections": [
      {
        "id": "nominativ",
        "title": {
          "en": "Nominative (Nominativ)",
          "ru": "╨Ш╨╝╨╡╨╜╨╕╤В╨╡╨╗╤М╨╜╤Л╨╣ (Nominativ)",
          "ua": "╨Э╨░╨╖╨╕╨▓╨╜╨╕╨╣ (Nominativ)"
        },
        "icon": "1я╕ПтГг",
        "subsections": [
          {
            "title": {
              "en": "Usage",
              "ru": "╨Ш╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡",
              "ua": "╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨░╨╜╨╜╤П"
            },
            "text": {
              "en": "The nominative case is the basic, dictionary form of a noun. It answers the questions 'Tko?' (Who?) and '┼аto?' (What?). It is used for the subject of a sentence.",
              "ru": "╨Ш╨╝╨╡╨╜╨╕╤В╨╡╨╗╤М╨╜╤Л╨╣ ╨┐╨░╨┤╨╡╨╢ тАФ ╨▒╨░╨╖╨╛╨▓╨░╤П, ╤Б╨╗╨╛╨▓╨░╤А╨╜╨░╤П ╤Д╨╛╤А╨╝╨░ ╤Б╤Г╤Й╨╡╤Б╤В╨▓╨╕╤В╨╡╨╗╤М╨╜╨╛╨│╨╛. ╨Ю╤В╨▓╨╡╤З╨░╨╡╤В ╨╜╨░ ╨▓╨╛╨┐╤А╨╛╤Б╤Л 'Tko?' (╨Ъ╤В╨╛?) ╨╕ '┼аto?' (╨з╤В╨╛?). ╨Ш╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П ╨┤╨╗╤П ╨┐╨╛╨┤╨╗╨╡╨╢╨░╤Й╨╡╨│╨╛.",
              "ua": "╨Э╨░╨╖╨╕╨▓╨╜╨╕╨╣ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨╛╨║ тАФ ╨▒╨░╨╖╨╛╨▓╨░, ╤Б╨╗╨╛╨▓╨╜╨╕╨║╨╛╨▓╨░ ╤Д╨╛╤А╨╝╨░ ╤Ц╨╝╨╡╨╜╨╜╨╕╨║╨░. ╨Т╤Ц╨┤╨┐╨╛╨▓╤Ц╨┤╨░╤Ф ╨╜╨░ ╨┐╨╕╤В╨░╨╜╨╜╤П 'Tko?' (╨е╤В╨╛?) ╤Ц '┼аto?' (╨й╨╛?). ╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤Ф╤В╤М╤Б╤П ╨┤╨╗╤П ╨┐╤Ц╨┤╨╝╨╡╤В╨░."
            },
            "examples": [
              {
                "hr": "┼╜ena ─Нita knjigu.",
                "translation": {
                  "en": "The woman reads a book.",
                  "ru": "╨Ц╨╡╨╜╤Й╨╕╨╜╨░ ╤З╨╕╤В╨░╨╡╤В ╨║╨╜╨╕╨│╤Г.",
                  "ua": "╨Ц╤Ц╨╜╨║╨░ ╤З╨╕╤В╨░╤Ф ╨║╨╜╨╕╨│╤Г."
                }
              },
              {
                "hr": "Grad je lijep.",
                "translation": {
                  "en": "The city is beautiful.",
                  "ru": "╨У╨╛╤А╨╛╨┤ ╨║╤А╨░╤Б╨╕╨▓╤Л╨╣.",
                  "ua": "╨Ь╤Ц╤Б╤В╨╛ ╨│╨░╤А╨╜╨╡."
                }
              }
            ]
          },
          {
            "title": {
              "en": "Noun Genders",
              "ru": "╨а╨╛╨┤╤Л ╤Б╤Г╤Й╨╡╤Б╤В╨▓╨╕╤В╨╡╨╗╤М╨╜╤Л╤Е",
              "ua": "╨а╨╛╨┤╨╕ ╤Ц╨╝╨╡╨╜╨╜╨╕╨║╤Ц╨▓"
            },
            "text": {
              "en": "Croatian has three genders: masculine (mu┼бki rod), feminine (┼╛enski rod), neuter (srednji rod). Masculine nouns typically end in a consonant, feminine in -a, neuter in -o or -e.",
              "ru": "╨Т ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╛╨╝ ╤В╤А╨╕ ╤А╨╛╨┤╨░: ╨╝╤Г╨╢╤Б╨║╨╛╨╣ (mu┼бki rod), ╨╢╨╡╨╜╤Б╨║╨╕╨╣ (┼╛enski rod), ╤Б╤А╨╡╨┤╨╜╨╕╨╣ (srednji rod). ╨Ь╤Г╨╢╤Б╨║╨╛╨╣ ╤А╨╛╨┤ ╨╛╨▒╤Л╤З╨╜╨╛ ╨╛╨║╨░╨╜╤З╨╕╨▓╨░╨╡╤В╤Б╤П ╨╜╨░ ╤Б╨╛╨│╨╗╨░╤Б╨╜╤Г╤О, ╨╢╨╡╨╜╤Б╨║╨╕╨╣ ╨╜╨░ -a, ╤Б╤А╨╡╨┤╨╜╨╕╨╣ ╨╜╨░ -o ╨╕╨╗╨╕ -e.",
              "ua": "╨г ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц╨╣ ╤В╤А╨╕ ╤А╨╛╨┤╨╕: ╤З╨╛╨╗╨╛╨▓╤Ц╤З╨╕╨╣ (mu┼бki rod), ╨╢╤Ц╨╜╨╛╤З╨╕╨╣ (┼╛enski rod), ╤Б╨╡╤А╨╡╨┤╨╜╤Ц╨╣ (srednji rod). ╨з╨╛╨╗╨╛╨▓╤Ц╤З╨╕╨╣ ╤А╤Ц╨┤ ╨╖╨░╨╖╨▓╨╕╤З╨░╨╣ ╨╖╨░╨║╤Ц╨╜╤З╤Г╤Ф╤В╤М╤Б╤П ╨╜╨░ ╨┐╤А╨╕╨│╨╛╨╗╨╛╤Б╨╜╤Г, ╨╢╤Ц╨╜╨╛╤З╨╕╨╣ ╨╜╨░ -a, ╤Б╨╡╤А╨╡╨┤╨╜╤Ц╨╣ ╨╜╨░ -o ╨░╨▒╨╛ -e."
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
                    "┼╛ena",
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
          "ru": "╨а╨╛╨┤╨╕╤В╨╡╨╗╤М╨╜╤Л╨╣ (Genitiv)",
          "ua": "╨а╨╛╨┤╨╛╨▓╨╕╨╣ (Genitiv)"
        },
        "icon": "2я╕ПтГг",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "╨Ш╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡ ╨╕ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡",
              "ua": "╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨░╨╜╨╜╤П ╤В╨░ ╤Г╤В╨▓╨╛╤А╨╡╨╜╨╜╤П"
            },
            "text": {
              "en": "The genitive answers 'Koga?' (Whom?) and '─Мega?' (Of what?). It expresses possession, origin, part of a whole, and is used after many prepositions (iz, od, do, bez, kod, blizu, ispred, iza, ispod, iznad, oko, protiv, nakon, prije, tijekom).",
              "ru": "╨а╨╛╨┤╨╕╤В╨╡╨╗╤М╨╜╤Л╨╣ ╨┐╨░╨┤╨╡╨╢ ╨╛╤В╨▓╨╡╤З╨░╨╡╤В ╨╜╨░ ╨▓╨╛╨┐╤А╨╛╤Б╤Л 'Koga?' (╨Ъ╨╛╨│╨╛?) ╨╕ '─Мega?' (╨з╨╡╨│╨╛?). ╨Т╤Л╤А╨░╨╢╨░╨╡╤В ╨┐╤А╨╕╨╜╨░╨┤╨╗╨╡╨╢╨╜╨╛╤Б╤В╤М, ╨┐╤А╨╛╨╕╤Б╤Е╨╛╨╢╨┤╨╡╨╜╨╕╨╡, ╤З╨░╤Б╤В╤М ╤Ж╨╡╨╗╨╛╨│╨╛. ╨Ш╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П ╨┐╨╛╤Б╨╗╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨│╨╛╨▓: iz, od, do, bez, kod, blizu, ispred, iza, ispod, iznad, oko, protiv, nakon, prije, tijekom.",
              "ua": "╨а╨╛╨┤╨╛╨▓╨╕╨╣ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨╛╨║ ╨▓╤Ц╨┤╨┐╨╛╨▓╤Ц╨┤╨░╤Ф ╨╜╨░ ╨┐╨╕╤В╨░╨╜╨╜╤П 'Koga?' (╨Ъ╨╛╨│╨╛?) ╤Ц '─Мega?' (╨з╨╛╨│╨╛?). ╨Т╨╕╤А╨░╨╢╨░╤Ф ╨╜╨░╨╗╨╡╨╢╨╜╤Ц╤Б╤В╤М, ╨┐╨╛╤Е╨╛╨┤╨╢╨╡╨╜╨╜╤П, ╤З╨░╤Б╤В╨╕╨╜╤Г ╤Ж╤Ц╨╗╨╛╨│╨╛. ╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤Ф╤В╤М╤Б╤П ╨┐╤Ц╤Б╨╗╤П ╨┐╤А╨╕╨╣╨╝╨╡╨╜╨╜╨╕╨║╤Ц╨▓: iz, od, do, bez, kod, blizu, ispred, iza, ispod, iznad, oko, protiv, nakon, prije, tijekom."
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
                    "┼╛ena",
                    "┼╛ene",
                    "┼╛ena"
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
                "hr": "To je ku─Зa moga oca.",
                "translation": {
                  "en": "That is my father's house.",
                  "ru": "╨н╤В╨╛ ╨┤╨╛╨╝ ╨╝╨╛╨╡╨│╨╛ ╨╛╤В╤Ж╨░.",
                  "ua": "╨ж╨╡ ╨┤╤Ц╨╝ ╨╝╨╛╨│╨╛ ╨▒╨░╤В╤М╨║╨░."
                }
              },
              {
                "hr": "─Мa┼бa vode, molim.",
                "translation": {
                  "en": "A glass of water, please.",
                  "ru": "╨б╤В╨░╨║╨░╨╜ ╨▓╨╛╨┤╤Л, ╨┐╨╛╨╢╨░╨╗╤Г╨╣╤Б╤В╨░.",
                  "ua": "╨б╨║╨╗╤П╨╜╨║╤Г ╨▓╨╛╨┤╨╕, ╨▒╤Г╨┤╤М ╨╗╨░╤Б╨║╨░."
                }
              },
              {
                "hr": "Dolazim iz Zagreba.",
                "translation": {
                  "en": "I come from Zagreb.",
                  "ru": "╨п ╨╕╨╖ ╨Ч╨░╨│╤А╨╡╨▒╨░.",
                  "ua": "╨п ╤Ц╨╖ ╨Ч╨░╨│╤А╨╡╨▒╨░."
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
          "ru": "╨Ф╨░╤В╨╡╨╗╤М╨╜╤Л╨╣ (Dativ)",
          "ua": "╨Ф╨░╨▓╨░╨╗╤М╨╜╨╕╨╣ (Dativ)"
        },
        "icon": "3я╕ПтГг",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "╨Ш╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡ ╨╕ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡",
              "ua": "╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨░╨╜╨╜╤П ╤В╨░ ╤Г╤В╨▓╨╛╤А╨╡╨╜╨╜╤П"
            },
            "text": {
              "en": "The dative answers 'Komu?' (To whom?) and '─Мemu?' (To what?). It expresses the indirect object тАФ the recipient of an action. Used after prepositions: k/ka (towards), prema (towards), usprkos/unato─Н (despite).",
              "ru": "╨Ф╨░╤В╨╡╨╗╤М╨╜╤Л╨╣ ╨┐╨░╨┤╨╡╨╢ ╨╛╤В╨▓╨╡╤З╨░╨╡╤В ╨╜╨░ ╨▓╨╛╨┐╤А╨╛╤Б╤Л 'Komu?' (╨Ъ╨╛╨╝╤Г?) ╨╕ '─Мemu?' (╨з╨╡╨╝╤Г?). ╨Т╤Л╤А╨░╨╢╨░╨╡╤В ╨║╨╛╤Б╨▓╨╡╨╜╨╜╨╛╨╡ ╨┤╨╛╨┐╨╛╨╗╨╜╨╡╨╜╨╕╨╡. ╨Ш╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П ╨┐╨╛╤Б╨╗╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨│╨╛╨▓: k/ka (╨║), prema (╨║, ╨┐╨╛ ╨╜╨░╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤О), usprkos/unato─Н (╨╜╨╡╤Б╨╝╨╛╤В╤А╤П ╨╜╨░).",
              "ua": "╨Ф╨░╨▓╨░╨╗╤М╨╜╨╕╨╣ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨╛╨║ ╨▓╤Ц╨┤╨┐╨╛╨▓╤Ц╨┤╨░╤Ф ╨╜╨░ ╨┐╨╕╤В╨░╨╜╨╜╤П 'Komu?' (╨Ъ╨╛╨╝╤Г?) ╤Ц '─Мemu?' (╨з╨╛╨╝╤Г?). ╨Т╨╕╤А╨░╨╢╨░╤Ф ╨╜╨╡╨┐╤А╤П╨╝╨╕╨╣ ╨┤╨╛╨┤╨░╤В╨╛╨║. ╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤Ф╤В╤М╤Б╤П ╨┐╤Ц╤Б╨╗╤П ╨┐╤А╨╕╨╣╨╝╨╡╨╜╨╜╨╕╨║╤Ц╨▓: k/ka (╨┤╨╛), prema (╨┤╨╛, ╤Г ╨╜╨░╨┐╤А╤П╨╝╨║╤Г), usprkos/unato─Н (╨╜╨╡╨╖╨▓╨░╨╢╨░╤О╤З╨╕ ╨╜╨░)."
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
                    "bra─Зi"
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
                  "ru": "╨п ╨┤╨░╤А╤О ╨┐╨╛╨┤╨░╤А╨╛╨║ ╨▒╤А╨░╤В╤Г.",
                  "ua": "╨п ╨┤╨░╤О ╨┐╨╛╨┤╨░╤А╤Г╨╜╨╛╨║ ╨▒╤А╨░╤В╤Г."
                }
              },
              {
                "hr": "Pi┼бem pismo prijatelju.",
                "translation": {
                  "en": "I write a letter to a friend.",
                  "ru": "╨п ╨┐╨╕╤И╤Г ╨┐╨╕╤Б╤М╨╝╨╛ ╨┤╤А╤Г╨│╤Г.",
                  "ua": "╨п ╨┐╨╕╤И╤Г ╨╗╨╕╤Б╤В╨░ ╨┤╤А╤Г╨│╤Г."
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
          "ru": "╨Т╨╕╨╜╨╕╤В╨╡╨╗╤М╨╜╤Л╨╣ (Akuzativ)",
          "ua": "╨Ч╨╜╨░╤Е╤Ц╨┤╨╜╨╕╨╣ (Akuzativ)"
        },
        "icon": "4я╕ПтГг",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "╨Ш╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡ ╨╕ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡",
              "ua": "╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨░╨╜╨╜╤П ╤В╨░ ╤Г╤В╨▓╨╛╤А╨╡╨╜╨╜╤П"
            },
            "text": {
              "en": "The accusative answers 'Koga?' (Whom?) and '┼аto?' (What?). It marks the direct object. Used after prepositions: u (into), na (onto), za (for), kroz (through), po (for/to fetch). Key rule: feminine nouns ending in -a change to -u.",
              "ru": "╨Т╨╕╨╜╨╕╤В╨╡╨╗╤М╨╜╤Л╨╣ ╨┐╨░╨┤╨╡╨╢ ╨╛╤В╨▓╨╡╤З╨░╨╡╤В ╨╜╨░ ╨▓╨╛╨┐╤А╨╛╤Б╤Л 'Koga?' (╨Ъ╨╛╨│╨╛?) ╨╕ '┼аto?' (╨з╤В╨╛?). ╨Ю╨▒╨╛╨╖╨╜╨░╤З╨░╨╡╤В ╨┐╤А╤П╨╝╨╛╨╡ ╨┤╨╛╨┐╨╛╨╗╨╜╨╡╨╜╨╕╨╡. ╨Ш╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П ╨┐╨╛╤Б╨╗╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨│╨╛╨▓: u (╨▓), na (╨╜╨░), za (╨┤╨╗╤П), kroz (╤З╨╡╤А╨╡╨╖), po (╨╖╨░). ╨Ъ╨╗╤О╤З╨╡╨▓╨╛╨╡ ╨┐╤А╨░╨▓╨╕╨╗╨╛: ╨╢╨╡╨╜╤Б╨║╨╕╨╣ ╤А╨╛╨┤ ╨╜╨░ -a ╨╝╨╡╨╜╤П╨╡╤В ╨╜╨░ -u.",
              "ua": "╨Ч╨╜╨░╤Е╤Ц╨┤╨╜╨╕╨╣ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨╛╨║ ╨▓╤Ц╨┤╨┐╨╛╨▓╤Ц╨┤╨░╤Ф ╨╜╨░ ╨┐╨╕╤В╨░╨╜╨╜╤П 'Koga?' (╨Ъ╨╛╨│╨╛?) ╤Ц '┼аto?' (╨й╨╛?). ╨Я╨╛╨╖╨╜╨░╤З╨░╤Ф ╨┐╤А╤П╨╝╨╕╨╣ ╨┤╨╛╨┤╨░╤В╨╛╨║. ╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤Ф╤В╤М╤Б╤П ╨┐╤Ц╤Б╨╗╤П ╨┐╤А╨╕╨╣╨╝╨╡╨╜╨╜╨╕╨║╤Ц╨▓: u (╤Г, ╨▓), na (╨╜╨░), za (╨┤╨╗╤П), kroz (╤З╨╡╤А╨╡╨╖), po (╨╖╨░). ╨Ъ╨╗╤О╤З╨╛╨▓╨╡ ╨┐╤А╨░╨▓╨╕╨╗╨╛: ╨╢╤Ц╨╜╨╛╤З╨╕╨╣ ╤А╤Ц╨┤ ╨╜╨░ -a ╨╖╨╝╤Ц╨╜╤О╤Ф ╨╜╨░ -u."
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
                    "┼╛ena",
                    "┼╛enu",
                    "-a тЖТ -u"
                  ]
                },
                {
                  "cells": [
                    "Feminine",
                    "knjiga",
                    "knjigu",
                    "-a тЖТ -u"
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
                  "ru": "╨п ╨▓╨╕╨╢╤Г ╨╝╨╛╤А╨╡.",
                  "ua": "╨п ╨▒╨░╤З╤Г ╨╝╨╛╤А╨╡."
                }
              },
              {
                "hr": "─Мitam knjigu.",
                "translation": {
                  "en": "I read a book.",
                  "ru": "╨п ╤З╨╕╤В╨░╤О ╨║╨╜╨╕╨│╤Г.",
                  "ua": "╨п ╤З╨╕╤В╨░╤О ╨║╨╜╨╕╨│╤Г."
                }
              },
              {
                "hr": "Volim brata.",
                "translation": {
                  "en": "I love my brother.",
                  "ru": "╨п ╨╗╤О╨▒╨╗╤О ╨▒╤А╨░╤В╨░.",
                  "ua": "╨п ╨╗╤О╨▒╨╗╤О ╨▒╤А╨░╤В╨░."
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
          "ru": "╨Ч╨▓╨░╤В╨╡╨╗╤М╨╜╤Л╨╣ (Vokativ)",
          "ua": "╨Ъ╨╗╨╕╤З╨╜╨╕╨╣ (Vokativ)"
        },
        "icon": "5я╕ПтГг",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "╨Ш╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡ ╨╕ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡",
              "ua": "╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨░╨╜╨╜╤П ╤В╨░ ╤Г╤В╨▓╨╛╤А╨╡╨╜╨╜╤П"
            },
            "text": {
              "en": "The vocative is used for direct address тАФ calling someone by name. Masculine nouns add -e or -u, feminine nouns change -a to -o, neuter nouns stay the same.",
              "ru": "╨Ч╨▓╨░╤В╨╡╨╗╤М╨╜╤Л╨╣ ╨┐╨░╨┤╨╡╨╢ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П ╨┤╨╗╤П ╨┐╤А╤П╨╝╨╛╨│╨╛ ╨╛╨▒╤А╨░╤Й╨╡╨╜╨╕╤П тАФ ╨║╨╛╨│╨┤╨░ ╨╖╨╛╨▓╤С╤В╨╡ ╨║╨╛╨│╨╛-╤В╨╛ ╨┐╨╛ ╨╕╨╝╨╡╨╜╨╕. ╨Ь╤Г╨╢╤Б╨║╨╛╨╣ ╤А╨╛╨┤ ╨┤╨╛╨▒╨░╨▓╨╗╤П╨╡╤В -e ╨╕╨╗╨╕ -u, ╨╢╨╡╨╜╤Б╨║╨╕╨╣ ╨╝╨╡╨╜╤П╨╡╤В -a ╨╜╨░ -o, ╤Б╤А╨╡╨┤╨╜╨╕╨╣ ╨╜╨╡ ╨╝╨╡╨╜╤П╨╡╤В╤Б╤П.",
              "ua": "╨Ъ╨╗╨╕╤З╨╜╨╕╨╣ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨╛╨║ ╨▓╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤Ф╤В╤М╤Б╤П ╨┤╨╗╤П ╨┐╤А╤П╨╝╨╛╨│╨╛ ╨╖╨▓╨╡╤А╤В╨░╨╜╨╜╤П. ╨з╨╛╨╗╨╛╨▓╤Ц╤З╨╕╨╣ ╤А╤Ц╨┤ ╨┤╨╛╨┤╨░╤Ф -e ╨░╨▒╨╛ -u, ╨╢╤Ц╨╜╨╛╤З╨╕╨╣ ╨╖╨╝╤Ц╨╜╤О╤Ф -a ╨╜╨░ -o, ╤Б╨╡╤А╨╡╨┤╨╜╤Ц╨╣ ╨╜╨╡ ╨╖╨╝╤Ц╨╜╤О╤Ф╤В╤М╤Б╤П."
            },
            "examples": [
              {
                "hr": "Ivane, do─Сi ovamo!",
                "translation": {
                  "en": "Ivan, come here!",
                  "ru": "╨Ш╨▓╨░╨╜, ╨╕╨┤╨╕ ╤Б╤О╨┤╨░!",
                  "ua": "╨Ж╨▓╨░╨╜╨╡, ╤Ц╨┤╨╕ ╤Б╤О╨┤╨╕!"
                }
              },
              {
                "hr": "Ano, jesi li tu?",
                "translation": {
                  "en": "Ana, are you there?",
                  "ru": "╨Р╨╜╨░, ╤В╤Л ╨╖╨┤╨╡╤Б╤М?",
                  "ua": "╨Р╨╜╨╛, ╤В╨╕ ╤В╤Г╤В?"
                }
              },
              {
                "hr": "Profesore, imam pitanje.",
                "translation": {
                  "en": "Professor, I have a question.",
                  "ru": "╨Я╤А╨╛╤Д╨╡╤Б╤Б╨╛╤А, ╤Г ╨╝╨╡╨╜╤П ╨▓╨╛╨┐╤А╨╛╤Б.",
                  "ua": "╨Я╤А╨╛╤Д╨╡╤Б╨╛╤А╨╡, ╤Г ╨╝╨╡╨╜╨╡ ╨┐╨╕╤В╨░╨╜╨╜╤П."
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
          "ru": "╨Ь╨╡╤Б╤В╨╜╤Л╨╣ (Lokativ)",
          "ua": "╨Ь╤Ц╤Б╤Ж╨╡╨▓╨╕╨╣ (Lokativ)"
        },
        "icon": "6я╕ПтГг",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "╨Ш╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡ ╨╕ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡",
              "ua": "╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨░╨╜╨╜╤П ╤В╨░ ╤Г╤В╨▓╨╛╤А╨╡╨╜╨╜╤П"
            },
            "text": {
              "en": "The locative answers 'O komu?' (About whom?) and 'O ─Нemu?' (About what?), and 'Gdje?' (Where?). Always used with prepositions: u (in), na (on), o (about), po (around/on), pri (at, near). Endings are the same as dative.",
              "ru": "╨Ь╨╡╤Б╤В╨╜╤Л╨╣ ╨┐╨░╨┤╨╡╨╢ ╨╛╤В╨▓╨╡╤З╨░╨╡╤В ╨╜╨░ ╨▓╨╛╨┐╤А╨╛╤Б╤Л 'O komu?' (╨Ю ╨║╨╛╨╝?) ╨╕ 'O ─Нemu?' (╨Ю ╤З╤С╨╝?), 'Gdje?' (╨У╨┤╨╡?). ╨Т╤Б╨╡╨│╨┤╨░ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П ╤Б ╨┐╤А╨╡╨┤╨╗╨╛╨│╨░╨╝╨╕: u (╨▓), na (╨╜╨░), o (╨╛), po (╨┐╨╛), pri (╨┐╤А╨╕). ╨Ю╨║╨╛╨╜╤З╨░╨╜╨╕╤П ╤Б╨╛╨▓╨┐╨░╨┤╨░╤О╤В ╤Б ╨┤╨░╤В╨╡╨╗╤М╨╜╤Л╨╝.",
              "ua": "╨Ь╤Ц╤Б╤Ж╨╡╨▓╨╕╨╣ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨╛╨║ ╨▓╤Ц╨┤╨┐╨╛╨▓╤Ц╨┤╨░╤Ф ╨╜╨░ ╨┐╨╕╤В╨░╨╜╨╜╤П 'O komu?' (╨Я╤А╨╛ ╨║╨╛╨│╨╛?) ╤Ц 'O ─Нemu?' (╨Я╤А╨╛ ╤Й╨╛?), 'Gdje?' (╨Ф╨╡?). ╨Ч╨░╨▓╨╢╨┤╨╕ ╨▓╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤Ф╤В╤М╤Б╤П ╨╖ ╨┐╤А╨╕╨╣╨╝╨╡╨╜╨╜╨╕╨║╨░╨╝╨╕: u (╤Г), na (╨╜╨░), o (╨┐╤А╨╛), po (╨┐╨╛), pri (╨┐╤А╨╕). ╨Ч╨░╨║╤Ц╨╜╤З╨╡╨╜╨╜╤П ╨╖╨▒╤Ц╨│╨░╤О╤В╤М╤Б╤П ╨╖ ╨┤╨░╨▓╨░╨╗╤М╨╜╨╕╨╝."
            },
            "examples": [
              {
                "hr": "┼╜ivim u Zagrebu.",
                "translation": {
                  "en": "I live in Zagreb.",
                  "ru": "╨п ╨╢╨╕╨▓╤Г ╨▓ ╨Ч╨░╨│╤А╨╡╨▒╨╡.",
                  "ua": "╨п ╨╢╨╕╨▓╤Г ╨▓ ╨Ч╨░╨│╤А╨╡╨▒╤Ц."
                }
              },
              {
                "hr": "Knjiga je na stolu.",
                "translation": {
                  "en": "The book is on the table.",
                  "ru": "╨Ъ╨╜╨╕╨│╨░ ╨╜╨░ ╤Б╤В╨╛╨╗╨╡.",
                  "ua": "╨Ъ╨╜╨╕╨│╨░ ╨╜╨░ ╤Б╤В╨╛╨╗╤Ц."
                }
              },
              {
                "hr": "Pri─Нamo o filmu.",
                "translation": {
                  "en": "We're talking about the movie.",
                  "ru": "╨Ь╤Л ╨│╨╛╨▓╨╛╤А╨╕╨╝ ╨╛ ╤Д╨╕╨╗╤М╨╝╨╡.",
                  "ua": "╨Ь╨╕ ╨│╨╛╨▓╨╛╤А╨╕╨╝╨╛ ╨┐╤А╨╛ ╤Д╤Ц╨╗╤М╨╝."
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
          "ru": "╨в╨▓╨╛╤А╨╕╤В╨╡╨╗╤М╨╜╤Л╨╣ (Instrumental)",
          "ua": "╨Ю╤А╤Г╨┤╨╜╨╕╨╣ (Instrumental)"
        },
        "icon": "7я╕ПтГг",
        "subsections": [
          {
            "title": {
              "en": "Usage & Formation",
              "ru": "╨Ш╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡ ╨╕ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡",
              "ua": "╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨░╨╜╨╜╤П ╤В╨░ ╤Г╤В╨▓╨╛╤А╨╡╨╜╨╜╤П"
            },
            "text": {
              "en": "The instrumental answers 'S kim?' (With whom?) and '─Мime?' (With what?). Expresses instrument/means or accompaniment. Used with prepositions: s/sa (with), pred (in front of), za (behind), nad (above), pod (under), me─Сu (between/among).",
              "ru": "╨в╨▓╨╛╤А╨╕╤В╨╡╨╗╤М╨╜╤Л╨╣ ╨┐╨░╨┤╨╡╨╢ ╨╛╤В╨▓╨╡╤З╨░╨╡╤В ╨╜╨░ ╨▓╨╛╨┐╤А╨╛╤Б╤Л 'S kim?' (╨б ╨║╨╡╨╝?) ╨╕ '─Мime?' (╨з╨╡╨╝?). ╨Т╤Л╤А╨░╨╢╨░╨╡╤В ╨╕╨╜╤Б╤В╤А╤Г╨╝╨╡╨╜╤В/╤Б╤А╨╡╨┤╤Б╤В╨▓╨╛ ╨╕╨╗╨╕ ╤Б╨╛╨┐╤А╨╛╨▓╨╛╨╢╨┤╨╡╨╜╨╕╨╡. ╨Я╤А╨╡╨┤╨╗╨╛╨│╨╕: s/sa (╤Б), pred (╨┐╨╡╤А╨╡╨┤), za (╨╖╨░), nad (╨╜╨░╨┤), pod (╨┐╨╛╨┤), me─Сu (╨╝╨╡╨╢╨┤╤Г).",
              "ua": "╨Ю╤А╤Г╨┤╨╜╨╕╨╣ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨╛╨║ ╨▓╤Ц╨┤╨┐╨╛╨▓╤Ц╨┤╨░╤Ф ╨╜╨░ ╨┐╨╕╤В╨░╨╜╨╜╤П 'S kim?' (╨Ч ╨║╨╕╨╝?) ╤Ц '─Мime?' (╨з╨╕╨╝?). ╨Т╨╕╤А╨░╨╢╨░╤Ф ╤Ц╨╜╤Б╤В╤А╤Г╨╝╨╡╨╜╤В/╨╖╨░╤Б╤Ц╨▒ ╨░╨▒╨╛ ╤Б╤Г╨┐╤А╨╛╨▓╤Ц╨┤. ╨Я╤А╨╕╨╣╨╝╨╡╨╜╨╜╨╕╨║╨╕: s/sa (╨╖), pred (╨┐╨╡╤А╨╡╨┤), za (╨╖╨░), nad (╨╜╨░╨┤), pod (╨┐╤Ц╨┤), me─Сu (╨╝╤Ц╨╢)."
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
                    "bra─Зom"
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
                    "┼╛ena",
                    "┼╛enom",
                    "┼╛enama"
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
                "hr": "Pi┼бem olovkom.",
                "translation": {
                  "en": "I write with a pencil.",
                  "ru": "╨п ╨┐╨╕╤И╤Г ╨║╨░╤А╨░╨╜╨┤╨░╤И╨╛╨╝.",
                  "ua": "╨п ╨┐╨╕╤И╤Г ╨╛╨╗╤Ц╨▓╤Ж╨╡╨╝."
                }
              },
              {
                "hr": "Idem s prijateljem.",
                "translation": {
                  "en": "I go with a friend.",
                  "ru": "╨п ╨╕╨┤╤Г ╤Б ╨┤╤А╤Г╨│╨╛╨╝.",
                  "ua": "╨п ╨╣╨┤╤Г ╨╖ ╨┤╤А╤Г╨│╨╛╨╝."
                }
              },
              {
                "hr": "Putujem vlakom.",
                "translation": {
                  "en": "I travel by train.",
                  "ru": "╨п ╨┐╤Г╤В╨╡╤И╨╡╤Б╤В╨▓╤Г╤О ╨┐╨╛╨╡╨╖╨┤╨╛╨╝.",
                  "ua": "╨п ╨┐╨╛╨┤╨╛╤А╨╛╨╢╤Г╤О ╨┐╨╛╤В╤П╨│╨╛╨╝."
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
          "ru": "╨б╨▓╨╛╨┤╨╜╨░╤П ╤В╨░╨▒╨╗╨╕╤Ж╨░ ╨┐╨░╨┤╨╡╨╢╨╡╨╣",
          "ua": "╨Ч╨▓╨╡╨┤╨╡╨╜╨░ ╤В╨░╨▒╨╗╨╕╤Ж╤П ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╤Ц╨▓"
        },
        "icon": "ЁЯУК",
        "subsections": [
          {
            "title": {
              "en": "Summary of Endings",
              "ru": "╨б╨▓╨╛╨┤╨║╨░ ╨╛╨║╨╛╨╜╤З╨░╨╜╨╕╨╣",
              "ua": "╨Ч╨▓╨╡╨┤╨╡╨╜╨╜╤П ╨╖╨░╨║╤Ц╨╜╤З╨╡╨╜╤М"
            },
            "text": {
              "en": "Here is a quick overview of the standard singular and plural endings for masculine, feminine, and neuter nouns across all seven cases in Croatian.",
              "ru": "╨Т╨╛╤В ╨║╤А╨░╤В╨║╨╕╨╣ ╨╛╨▒╨╖╨╛╤А ╤Б╤В╨░╨╜╨┤╨░╤А╤В╨╜╤Л╤Е ╨╛╨║╨╛╨╜╤З╨░╨╜╨╕╨╣ ╨╡╨┤╨╕╨╜╤Б╤В╨▓╨╡╨╜╨╜╨╛╨│╨╛ ╨╕ ╨╝╨╜╨╛╨╢╨╡╤Б╤В╨▓╨╡╨╜╨╜╨╛╨│╨╛ ╤З╨╕╤Б╨╗╨░ ╨┤╨╗╤П ╤Б╤Г╤Й╨╡╤Б╤В╨▓╨╕╤В╨╡╨╗╤М╨╜╤Л╤Е ╨╝╤Г╨╢╤Б╨║╨╛╨│╨╛, ╨╢╨╡╨╜╤Б╨║╨╛╨│╨╛ ╨╕ ╤Б╤А╨╡╨┤╨╜╨╡╨│╨╛ ╤А╨╛╨┤╨░ ╨▓╨╛ ╨▓╤Б╨╡╤Е ╤Б╨╡╨╝╨╕ ╨┐╨░╨┤╨╡╨╢╨░╤Е ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╛╨│╨╛ ╤П╨╖╤Л╨║╨░.",
              "ua": "╨Ю╤Б╤М ╨║╨╛╤А╨╛╤В╨║╨╕╨╣ ╨╛╨│╨╗╤П╨┤ ╤Б╤В╨░╨╜╨┤╨░╤А╤В╨╜╨╕╤Е ╨╖╨░╨║╤Ц╨╜╤З╨╡╨╜╤М ╨╛╨┤╨╜╨╕╨╜╨╕ ╤В╨░ ╨╝╨╜╨╛╨╢╨╕╨╜╨╕ ╨┤╨╗╤П ╤Ц╨╝╨╡╨╜╨╜╨╕╨║╤Ц╨▓ ╤З╨╛╨╗╨╛╨▓╤Ц╤З╨╛╨│╨╛, ╨╢╤Ц╨╜╨╛╤З╨╛╨│╨╛ ╤В╨░ ╤Б╨╡╤А╨╡╨┤╨╜╤М╨╛╨│╨╛ ╤А╨╛╨┤╤Г ╤Г ╨▓╤Б╤Ц╤Е ╤Б╨╡╨╝╨╕ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╨░╤Е ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╨╛╤Ч ╨╝╨╛╨▓╨╕."
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
                    "├Ш (no ending)",
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
                    "├Ш (inanim.) / -a (anim.)",
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
        "id": "vokativ",
        "title": {
          "en": "Vocative (Vokativ)",
          "ru": "╨Ч╨▓╨░╤В╨╡╨╗╤М╨╜╤Л╨╣ ╨┐╨░╨┤╨╡╨╢ (Vokativ)",
          "ua": "╨Ъ╨╗╨╕╤З╨╜╨╕╨╣ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨╛╨║ (Vokativ)"
        },
        "icon": "ЁЯЧгя╕П",
        "subsections": [
          {
            "title": {
              "en": "Usage",
              "ru": "╨Ш╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡",
              "ua": "╨Т╨╕╨║╨╛╤А╨╕╤Б╤В╨░╨╜╨╜╤П"
            },
            "text": {
              "en": "The Vocative is used for addressing or calling someone directly. Standard endings: masculine singular ends in -e or -u (e.g. prijatelju, profesore), feminine singular ends in -o or -a (e.g. ┼╛eno, mama). Plural forms are identical to the Nominative.",
              "ru": "╨Ч╨▓╨░╤В╨╡╨╗╤М╨╜╤Л╨╣ ╨┐╨░╨┤╨╡╨╢ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П ╨┐╤А╨╕ ╨┐╤А╤П╨╝╨╛╨╝ ╨╛╨▒╤А╨░╤Й╨╡╨╜╨╕╨╕ ╨║ ╨║╨╛╨╝╤Г-╨╗╨╕╨▒╨╛. ╨Ю╨║╨╛╨╜╤З╨░╨╜╨╕╤П: ╨╝╤Г╨╢╤Б╨║╨╛╨╣ ╤А╨╛╨┤ ╨╡╨┤. ╤З. ╨╛╨║╨░╨╜╤З╨╕╨▓╨░╨╡╤В╤Б╤П ╨╜╨░ -e ╨╕╨╗╨╕ -u (prijatelju, profesore), ╨╢╨╡╨╜╤Б╨║╨╕╨╣ ╤А╨╛╨┤ ╨╡╨┤. ╤З. ╨╛╨║╨░╨╜╤З╨╕╨▓╨░╨╡╤В╤Б╤П ╨╜╨░ -o ╨╕╨╗╨╕ -a (┼╛eno, mama). ╨д╨╛╤А╨╝╤Л ╨╝╨╜. ╤З. ╤Б╨╛╨▓╨┐╨░╨┤╨░╤О╤В ╤Б ╨╕╨╝╨╡╨╜╨╕╤В╨╡╨╗╤М╨╜╤Л╨╝.",
              "ua": "╨Ъ╨╗╨╕╤З╨╜╨╕╨╣ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨╛╨║ ╨▓╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤Ф╤В╤М╤Б╤П ╨┤╨╗╤П ╨╖╨▓╨╡╤А╨╜╨╡╨╜╨╜╤П ╨░╨▒╨╛ ╨╖╨░╨║╨╗╨╕╨║╤Г. ╨Ч╨░╨║╤Ц╨╜╤З╨╡╨╜╨╜╤П: ╤З╨╛╨╗╨╛╨▓╤Ц╤З╨╕╨╣ ╤А╤Ц╨┤ ╨╛╨┤╨╜╨╕╨╜╨╕ ╨╖╨░╨║╤Ц╨╜╤З╤Г╤Ф╤В╤М╤Б╤П ╨╜╨░ -e ╨░╨▒╨╛ -u (prijatelju, profesore), ╨╢╤Ц╨╜╨╛╤З╨╕╨╣ ╤А╤Ц╨┤ ╨╛╨┤╨╜╨╕╨╜╨╕ ╨╖╨░╨║╤Ц╨╜╤З╤Г╤Ф╤В╤М╤Б╤П ╨╜╨░ -o ╨░╨▒╨╛ -a (┼╛eno, mama). ╨д╨╛╤А╨╝╨╕ ╨╝╨╜╨╛╨╢╨╕╨╜╨╕ ╨╖╨▒╤Ц╨│╨░╤О╤В╤М╤Б╤П ╨╖ ╨╜╨░╨╖╨╕╨▓╨╜╨╕╨╝ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╨╛╨╝."
            },
            "examples": [
              {
                "hr": "Dobar dan, profesore!",
                "translation": {
                  "en": "Good day, professor!",
                  "ru": "╨Ф╨╛╨▒╤А╤Л╨╣ ╨┤╨╡╨╜╤М, ╨┐╤А╨╛╤Д╨╡╤Б╤Б╨╛╤А!",
                  "ua": "╨Ф╨╛╨▒╤А╨╛╨│╨╛ ╨┤╨╜╤П, ╨┐╤А╨╛╤Д╨╡╤Б╨╛╤А╨╡!"
                }
              },
              {
                "hr": "Hej, prijatelju!",
                "translation": {
                  "en": "Hey, friend!",
                  "ru": "╨н╨╣, ╨┤╤А╤Г╨│!",
                  "ua": "╨У╨╡╨╣, ╨┤╤А╤Г╨╢╨╡!"
                }
              },
              {
                "hr": "Mama, gdje si?",
                "translation": {
                  "en": "Mom, where are you?",
                  "ru": "╨Ь╨░╨╝╨░, ╨│╨┤╨╡ ╤В╤Л?",
                  "ua": "╨Ь╨░╨╝╨╛, ╨┤╨╡ ╤В╨╕?"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "plurality",
        "title": {
          "en": "Singular & Plural (Jednina i mno┼╛ina)",
          "ru": "╨з╨╕╤Б╨╗╨╛ (Jednina ╨╕ mno┼╛ina)",
          "ua": "╨з╨╕╤Б╨╗╨╛ (Jednina ╤В╨░ mno┼╛ina)"
        },
        "icon": "ЁЯСе",
        "subsections": [
          {
            "title": {
              "en": "Grammatical Number",
              "ru": "╨У╤А╨░╨╝╨╝╨░╤В╨╕╤З╨╡╤Б╨║╨╛╨╡ ╤З╨╕╤Б╨╗╨╛",
              "ua": "╨У╤А╨░╨╝╨░╤В╨╕╤З╨╜╨╡ ╤З╨╕╤Б╨╗╨╛"
            },
            "text": {
              "en": "Croatian nouns have two numbers: Singular (Jednina) and Plural (Mno┼╛ina). Plural masculine nouns can undergo stem changes, such as adding the infix '-ov-' or '-ev-' for short monosyllabic words (e.g., grad тЖТ gradovi, stol тЖТ stolovi).",
              "ru": "╨е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╡ ╤Б╤Г╤Й╨╡╤Б╤В╨▓╨╕╤В╨╡╨╗╤М╨╜╤Л╨╡ ╨╕╨╝╨╡╤О╤В ╨┤╨▓╨░ ╤З╨╕╤Б╨╗╨░: ╨Х╨┤╨╕╨╜╤Б╤В╨▓╨╡╨╜╨╜╨╛╨╡ (Jednina) ╨╕ ╨Ь╨╜╨╛╨╢╨╡╤Б╤В╨▓╨╡╨╜╨╜╨╛╨╡ (Mno┼╛ina). ╨б╤Г╤Й╨╡╤Б╤В╨▓╨╕╤В╨╡╨╗╤М╨╜╤Л╨╡ ╨╝╤Г╨╢╤Б╨║╨╛╨│╨╛ ╤А╨╛╨┤╨░ ╨▓╨╛ ╨╝╨╜╨╛╨╢╨╡╤Б╤В╨▓╨╡╨╜╨╜╨╛╨╝ ╤З╨╕╤Б╨╗╨╡ ╨╝╨╛╨│╤Г╤В ╨╕╨╖╨╝╨╡╨╜╤П╤В╤М ╨╛╤Б╨╜╨╛╨▓╤Г, ╨┤╨╛╨▒╨░╨▓╨╗╤П╤П ╤Б╤Г╤Д╤Д╨╕╨║╤Б '-ov-' ╨╕╨╗╨╕ '-ev-' ╨┤╨╗╤П ╨║╨╛╤А╨╛╤В╨║╨╕╤Е ╨╛╨┤╨╜╨╛╤Б╨╗╨╛╨╢╨╜╤Л╤Е ╤Б╨╗╨╛╨▓ (╨╜╨░╨┐╤А╨╕╨╝╨╡╤А, grad тЖТ gradovi, stol тЖТ stolovi).",
              "ua": "╨е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц ╤Ц╨╝╨╡╨╜╨╜╨╕╨║╨╕ ╨╝╨░╤О╤В╤М ╨┤╨▓╨░ ╤З╨╕╤Б╨╗╨░: ╨Ю╨┤╨╜╨╕╨╜╤Г (Jednina) ╤В╨░ ╨Ь╨╜╨╛╨╢╨╕╨╜╤Г (Mno┼╛ina). ╨Ж╨╝╨╡╨╜╨╜╨╕╨║╨╕ ╤З╨╛╨╗╨╛╨▓╤Ц╤З╨╛╨│╨╛ ╤А╨╛╨┤╤Г ╤Г ╨╝╨╜╨╛╨╢╨╕╨╜╤Ц ╨╝╨╛╨╢╤Г╤В╤М ╨╖╨╝╤Ц╨╜╤О╨▓╨░╤В╨╕ ╨╛╤Б╨╜╨╛╨▓╤Г, ╨┤╨╛╨┤╨░╤О╤З╨╕ ╤Б╤Г╤Д╤Ц╨║╤Б '-ov-' ╨░╨▒╨╛ '-ev-' ╨┤╨╗╤П ╨║╨╛╤А╨╛╤В╨║╨╕╤Е ╨╛╨┤╨╜╨╛╤Б╨║╨╗╨░╨┤╨╛╨▓╨╕╤Е ╤Б╨╗╤Ц╨▓ (╨╜╨░╨┐╤А╨╕╨║╨╗╨░╨┤, grad тЖТ gradovi, stol тЖТ stolovi)."
            },
            "examples": [
              {
                "hr": "grad (singular) тЖТ gradovi (plural)",
                "translation": {
                  "en": "city тЖТ cities",
                  "ru": "╨│╨╛╤А╨╛╨┤ тЖТ ╨│╨╛╤А╨╛╨┤╨░",
                  "ua": "╨╝╤Ц╤Б╤В╨╛ тЖТ ╨╝╤Ц╤Б╤В╨░"
                }
              },
              {
                "hr": "┼╛ena (singular) тЖТ ┼╛ene (plural)",
                "translation": {
                  "en": "woman тЖТ women",
                  "ru": "╨╢╨╡╨╜╤Й╨╕╨╜╨░ тЖТ ╨╢╨╡╨╜╤Й╨╕╨╜╤Л",
                  "ua": "╨╢╤Ц╨╜╨║╨░ тЖТ ╨╢╤Ц╨╜╨║╨╕"
                }
              },
              {
                "hr": "selo (singular) тЖТ sela (plural)",
                "translation": {
                  "en": "village тЖТ villages",
                  "ru": "╨┤╨╡╤А╨╡╨▓╨╜╤П тЖТ ╨┤╨╡╤А╨╡╨▓╨╜╨╕",
                  "ua": "╤Б╨╡╨╗╨╛ тЖТ ╤Б╨╡╨╗╨░"
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
          "ru": "╨Ю╤В╤Б╤Г╤В╤Б╤В╨▓╨╕╨╡ ╨░╤А╤В╨╕╨║╨╗╨╡╨╣",
          "ua": "╨Т╤Ц╨┤╤Б╤Г╤В╨╜╤Ц╤Б╤В╤М ╨░╤А╤В╨╕╨║╨╗╤Ц╨▓"
        },
        "icon": "тЭМ",
        "subsections": [
          {
            "title": {
              "en": "Grammatical Note",
              "ru": "╨У╤А╨░╨╝╨╝╨░╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨╖╨░╨╝╨╡╤В╨║╨░",
              "ua": "╨У╤А╨░╨╝╨░╤В╨╕╤З╨╜╨░ ╨┐╤А╨╕╨╝╤Ц╤В╨║╨░"
            },
            "text": {
              "en": "Croatian does not have articles (like 'a', 'an', or 'the'). Nouns are used on their own, and definiteness is conveyed by context, word order, or demonstrative pronouns (e.g. ovaj, taj).",
              "ru": "╨Т ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╛╨╝ ╤П╨╖╤Л╨║╨╡ ╨╜╨╡╤В ╨░╤А╤В╨╕╨║╨╗╨╡╨╣ (╤В╨░╨║╨╕╤Е ╨║╨░╨║ ╨░╨╜╨│╨╗╨╕╨╣╤Б╨║╨╕╨╡ 'a' ╨╕╨╗╨╕ 'the'). ╨б╤Г╤Й╨╡╤Б╤В╨▓╨╕╤В╨╡╨╗╤М╨╜╤Л╨╡ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╤О╤В╤Б╤П ╤Б╨░╨╝╨╕ ╨┐╨╛ ╤Б╨╡╨▒╨╡, ╨░ ╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╜╨╛╤Б╤В╤М ╨┐╨╡╤А╨╡╨┤╨░╨╡╤В╤Б╤П ╨║╨╛╨╜╤В╨╡╨║╤Б╤В╨╛╨╝, ╨┐╨╛╤А╤П╨┤╨║╨╛╨╝ ╤Б╨╗╨╛╨▓ ╨╕╨╗╨╕ ╤Г╨║╨░╨╖╨░╤В╨╡╨╗╤М╨╜╤Л╨╝╨╕ ╨╝╨╡╤Б╤В╨╛╨╕╨╝╨╡╨╜╨╕╤П╨╝╨╕ (ovaj, taj).",
              "ua": "╨г ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц╨╣ ╨╝╨╛╨▓╤Ц ╨╜╨╡╨╝╨░╤Ф ╨░╤А╤В╨╕╨║╨╗╤Ц╨▓ (╤В╨░╨║╨╕╤Е ╤П╨║ ╨░╨╜╨│╨╗╤Ц╨╣╤Б╤М╨║╤Ц 'a' ╨░╨▒╨╛ 'the'). ╨Ж╨╝╨╡╨╜╨╜╨╕╨║╨╕ ╨▓╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤О╤В╤М╤Б╤П ╤Б╨░╨╝╤Ц ╨┐╨╛ ╤Б╨╛╨▒╤Ц, ╨░ ╨▓╨╕╨╖╨╜╨░╤З╨╡╨╜╤Ц╤Б╤В╤М ╨┐╨╡╤А╨╡╨┤╨░╤Ф╤В╤М╤Б╤П ╨║╨╛╨╜╤В╨╡╨║╤Б╤В╨╛╨╝, ╨┐╨╛╤А╤П╨┤╨║╨╛╨╝ ╤Б╨╗╤Ц╨▓ ╨░╨▒╨╛ ╨▓╨║╨░╨╖╤Ц╨▓╨╜╨╕╨╝╨╕ ╨╖╨░╨╣╨╝╨╡╨╜╨╜╨╕╨║╨░╨╝╨╕ (ovaj, taj)."
            },
            "examples": [
              {
                "hr": "Knjiga je na stolu.",
                "translation": {
                  "en": "The book is on the table. (or 'A book is on a table.')",
                  "ru": "╨Ъ╨╜╨╕╨│╨░ ╨╜╨░ ╤Б╤В╨╛╨╗╨╡.",
                  "ua": "╨Ъ╨╜╨╕╨│╨░ ╨╜╨░ ╤Б╤В╨╛╨╗╤Ц."
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
      "ru": "╨У╨╗╨░╨│╨╛╨╗╤Л (Glagoli)",
      "ua": "╨Ф╤Ц╤Ф╤Б╨╗╨╛╨▓╨░ (Glagoli)"
    },
    "icon": "ЁЯФД",
    "sections": [
      {
        "id": "present",
        "title": {
          "en": "Present Tense (Prezent)",
          "ru": "╨Э╨░╤Б╤В╨╛╤П╤Й╨╡╨╡ ╨▓╤А╨╡╨╝╤П (Prezent)",
          "ua": "╨в╨╡╨┐╨╡╤А╤Ц╤И╨╜╤Ц╨╣ ╤З╨░╤Б (Prezent)"
        },
        "icon": "тП░",
        "subsections": [
          {
            "title": {
              "en": "Conjugation Groups",
              "ru": "╨У╤А╤Г╨┐╨┐╤Л ╤Б╨┐╤А╤П╨╢╨╡╨╜╨╕╤П",
              "ua": "╨У╤А╤Г╨┐╨╕ ╨┤╤Ц╤Ф╨▓╤Ц╨┤╨╝╤Ц╨╜╤О╨▓╨░╨╜╨╜╤П"
            },
            "text": {
              "en": "Croatian verbs in present tense are conjugated based on the vowel before the personal ending. The three main conjugation groups are: -a- conjugation (e.g. ─Нitati тЖТ ─Нitam), -i- conjugation (e.g. govoriti тЖТ govorim), -e- conjugation (e.g. pisati тЖТ pi┼бem).",
              "ru": "╨е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╡ ╨│╨╗╨░╨│╨╛╨╗╤Л ╨▓ ╨╜╨░╤Б╤В╨╛╤П╤Й╨╡╨╝ ╨▓╤А╨╡╨╝╨╡╨╜╨╕ ╤Б╨┐╤А╤П╨│╨░╤О╤В╤Б╤П ╨┐╨╛ ╨│╨╗╨░╤Б╨╜╨╛╨╝╤Г ╨┐╨╡╤А╨╡╨┤ ╨╗╨╕╤З╨╜╤Л╨╝ ╨╛╨║╨╛╨╜╤З╨░╨╜╨╕╨╡╨╝. ╨в╤А╨╕ ╨╛╤Б╨╜╨╛╨▓╨╜╤Л╨╡ ╨│╤А╤Г╨┐╨┐╤Л: ╨╜╨░ -a- (─Нitati тЖТ ─Нitam), ╨╜╨░ -i- (govoriti тЖТ govorim), ╨╜╨░ -e- (pisati тЖТ pi┼бem).",
              "ua": "╨е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц ╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨░ ╤Г ╤В╨╡╨┐╨╡╤А╤Ц╤И╨╜╤М╨╛╨╝╤Г ╤З╨░╤Б╤Ц ╨┤╤Ц╤Ф╨▓╤Ц╨┤╨╝╤Ц╨╜╤О╤О╤В╤М╤Б╤П ╨╖╨░ ╨│╨╛╨╗╨╛╤Б╨╜╨╕╨╝ ╨┐╨╡╤А╨╡╨┤ ╨╛╤Б╨╛╨▒╨╛╨▓╨╕╨╝ ╨╖╨░╨║╤Ц╨╜╤З╨╡╨╜╨╜╤П╨╝. ╨в╤А╨╕ ╨╛╤Б╨╜╨╛╨▓╨╜╤Ц ╨│╤А╤Г╨┐╨╕: ╨╜╨░ -a- (─Нitati тЖТ ─Нitam), ╨╜╨░ -i- (govoriti тЖТ govorim), ╨╜╨░ -e- (pisati тЖТ pi┼бem)."
            },
            "table": {
              "headers": [
                "Person",
                "─Нitati (read)",
                "govoriti (speak)",
                "pisati (write)"
              ],
              "rows": [
                {
                  "cells": [
                    "ja",
                    "─Нitam",
                    "govorim",
                    "pi┼бem"
                  ]
                },
                {
                  "cells": [
                    "ti",
                    "─Нita┼б",
                    "govori┼б",
                    "pi┼бe┼б"
                  ]
                },
                {
                  "cells": [
                    "on/ona/ono",
                    "─Нita",
                    "govori",
                    "pi┼бe"
                  ]
                },
                {
                  "cells": [
                    "mi",
                    "─Нitamo",
                    "govorimo",
                    "pi┼бemo"
                  ]
                },
                {
                  "cells": [
                    "vi",
                    "─Нitate",
                    "govorite",
                    "pi┼бete"
                  ]
                },
                {
                  "cells": [
                    "oni/one/ona",
                    "─Нitaju",
                    "govore",
                    "pi┼бu"
                  ]
                }
              ]
            }
          },
          {
            "title": {
              "en": "Verb 'biti' (to be)",
              "ru": "╨У╨╗╨░╨│╨╛╨╗ 'biti' (╨▒╤Л╤В╤М)",
              "ua": "╨Ф╤Ц╤Ф╤Б╨╗╨╛╨▓╨╛ 'biti' (╨▒╤Г╤В╨╕)"
            },
            "text": {
              "en": "The verb 'biti' is the most important verb in Croatian. It has both long (stressed) and short (enclitic) forms. Short forms are used more commonly.",
              "ru": "╨У╨╗╨░╨│╨╛╨╗ 'biti' тАФ ╤Б╨░╨╝╤Л╨╣ ╨▓╨░╨╢╨╜╤Л╨╣ ╨│╨╗╨░╨│╨╛╨╗ ╨▓ ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╛╨╝. ╨Ш╨╝╨╡╨╡╤В ╨┤╨╗╨╕╨╜╨╜╤Л╨╡ (╤Г╨┤╨░╤А╨╜╤Л╨╡) ╨╕ ╨║╨╛╤А╨╛╤В╨║╨╕╨╡ (╤Н╨╜╨║╨╗╨╕╤В╨╕╤З╨╡╤Б╨║╨╕╨╡) ╤Д╨╛╤А╨╝╤Л. ╨Ъ╨╛╤А╨╛╤В╨║╨╕╨╡ ╤Д╨╛╤А╨╝╤Л ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╤О╤В╤Б╤П ╤З╨░╤Й╨╡.",
              "ua": "╨Ф╤Ц╤Ф╤Б╨╗╨╛╨▓╨╛ 'biti' тАФ ╨╜╨░╨╣╨▓╨░╨╢╨╗╨╕╨▓╤Ц╤И╨╡ ╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨╛ ╨▓ ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц╨╣. ╨Ь╨░╤Ф ╨┤╨╛╨▓╨│╤Ц (╨╜╨░╨│╨╛╨╗╨╛╤И╨╡╨╜╤Ц) ╤В╨░ ╨║╨╛╤А╨╛╤В╨║╤Ц (╨╡╨╜╨║╨╗╤Ц╤В╨╕╤З╨╜╤Ц) ╤Д╨╛╤А╨╝╨╕. ╨Ъ╨╛╤А╨╛╤В╨║╤Ц ╤Д╨╛╤А╨╝╨╕ ╨▓╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤О╤В╤М╤Б╤П ╤З╨░╤Б╤В╤Ц╤И╨╡."
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
          "ru": "╨Я╤А╨╛╤И╨╡╨┤╤И╨╡╨╡ ╨▓╤А╨╡╨╝╤П (Perfekt)",
          "ua": "╨Ь╨╕╨╜╤Г╨╗╨╕╨╣ ╤З╨░╤Б (Perfekt)"
        },
        "icon": "тПк",
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
          "ru": "╨С╤Г╨┤╤Г╤Й╨╡╨╡ ╨▓╤А╨╡╨╝╤П (Futur I ╨╕ II)",
          "ua": "╨Ь╨░╨╣╨▒╤Г╤В╨╜╤Ц╨╣ ╤З╨░╤Б (Futur I ╤В╨░ II)"
        },
        "icon": "тПй",
        "subsections": [
          {
            "title": {
              "en": "Futur I",
              "ru": "Futur I",
              "ua": "Futur I"
            },
            "text": {
              "en": "Future I is formed with short forms of 'htjeti' (will) + infinitive. Short forms: ─Зu, ─Зe┼б, ─Зe, ─Зemo, ─Зete, ─Зe. When the infinitive ends in -ti and is placed before the auxiliary, the -i is dropped.",
              "ru": "Futur I ╨╛╨▒╤А╨░╨╖╤Г╨╡╤В╤Б╤П ╤Б ╨┐╨╛╨╝╨╛╤Й╤М╤О ╨║╤А╨░╤В╨║╨╕╤Е ╤Д╨╛╤А╨╝ ╨│╨╗╨░╨│╨╛╨╗╨░ 'htjeti' + ╨╕╨╜╤Д╨╕╨╜╨╕╤В╨╕╨▓. ╨Ъ╤А╨░╤В╨║╨╕╨╡ ╤Д╨╛╤А╨╝╤Л: ─Зu, ─Зe┼б, ─Зe, ─Зemo, ─Зete, ─Зe. ╨Х╤Б╨╗╨╕ ╨╕╨╜╤Д╨╕╨╜╨╕╤В╨╕╨▓ ╨╜╨░ -ti ╤Б╤В╨╛╨╕╤В ╨┐╨╡╤А╨╡╨┤ ╨▓╤Б╨┐╨╛╨╝╨╛╨│╨░╤В╨╡╨╗╤М╨╜╤Л╨╝ ╨│╨╗╨░╨│╨╛╨╗╨╛╨╝, -i ╨╛╤В╨▒╤А╨░╤Б╤Л╨▓╨░╨╡╤В╤Б╤П.",
              "ua": "Futur I ╤Г╤В╨▓╨╛╤А╤О╤Ф╤В╤М╤Б╤П ╨╖╨░ ╨┤╨╛╨┐╨╛╨╝╨╛╨│╨╛╤О ╨║╨╛╤А╨╛╤В╨║╨╕╤Е ╤Д╨╛╤А╨╝ ╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨░ 'htjeti' + ╤Ц╨╜╤Д╤Ц╨╜╤Ц╤В╨╕╨▓. ╨Ъ╨╛╤А╨╛╤В╨║╤Ц ╤Д╨╛╤А╨╝╨╕: ─Зu, ─Зe┼б, ─Зe, ─Зemo, ─Зete, ─Зe. ╨п╨║╤Й╨╛ ╤Ц╨╜╤Д╤Ц╨╜╤Ц╤В╨╕╨▓ ╨╜╨░ -ti ╤Б╤В╨╛╤Ч╤В╤М ╨┐╨╡╤А╨╡╨┤ ╨┤╨╛╨┐╨╛╨╝╤Ц╨╢╨╜╨╕╨╝ ╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨╛╨╝, -i ╨▓╤Ц╨┤╨║╨╕╨┤╨░╤Ф╤В╤М╤Б╤П."
            },
            "table": {
              "headers": [
                "Person",
                "─Нitati",
                "govoriti"
              ],
              "rows": [
                {
                  "cells": [
                    "ja",
                    "─Нitat ─Зu",
                    "govorit ─Зu"
                  ]
                },
                {
                  "cells": [
                    "ti",
                    "─Нitat ─Зe┼б",
                    "govorit ─Зe┼б"
                  ]
                },
                {
                  "cells": [
                    "on/ona",
                    "─Нitat ─Зe",
                    "govorit ─Зe"
                  ]
                },
                {
                  "cells": [
                    "mi",
                    "─Нitat ─Зemo",
                    "govorit ─Зemo"
                  ]
                },
                {
                  "cells": [
                    "vi",
                    "─Нitat ─Зete",
                    "govorit ─Зete"
                  ]
                },
                {
                  "cells": [
                    "oni",
                    "─Нitat ─Зe",
                    "govorit ─Зe"
                  ]
                }
              ]
            },
            "examples": [
              {
                "hr": "Sutra ─Зu u─Нiti hrvatski.",
                "translation": {
                  "en": "Tomorrow I will study Croatian.",
                  "ru": "╨Ч╨░╨▓╤В╤А╨░ ╤П ╨▒╤Г╨┤╤Г ╤Г╤З╨╕╤В╤М ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╣.",
                  "ua": "╨Ч╨░╨▓╤В╤А╨░ ╤П ╨▒╤Г╨┤╤Г ╨▓╤З╨╕╤В╨╕ ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Г."
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
              "en": "Future II is used in conditional/temporal subordinate clauses (with 'ako', 'kad'). Formed with present tense of 'biti' (budem, bude┼б...) + active past participle.",
              "ru": "Futur II ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П ╨▓ ╤Г╤Б╨╗╨╛╨▓╨╜╤Л╤Е/╨▓╤А╨╡╨╝╨╡╨╜╨╜╤Л╤Е ╨┐╤А╨╕╨┤╨░╤В╨╛╤З╨╜╤Л╤Е ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╡╨╜╨╕╤П╤Е (╨┐╨╛╤Б╨╗╨╡ 'ako', 'kad'). ╨Ю╨▒╤А╨░╨╖╤Г╨╡╤В╤Б╤П ╤Д╨╛╤А╨╝╨░╨╝╨╕ ╨╜╨░╤Б╤В╨╛╤П╤Й╨╡╨│╨╛ ╨▓╤А╨╡╨╝╨╡╨╜╨╕ 'biti' (budem, bude┼б...) + ╨┐╤А╨╕╤З╨░╤Б╤В╨╕╨╡ ╨┐╤А╨╛╤И╨╡╨┤╤И╨╡╨│╨╛ ╨▓╤А╨╡╨╝╨╡╨╜╨╕.",
              "ua": "Futur II ╨▓╨╕╨║╨╛╤А╨╕╤Б╤В╨╛╨▓╤Г╤Ф╤В╤М╤Б╤П ╨▓ ╤Г╨╝╨╛╨▓╨╜╨╕╤Е/╤З╨░╤Б╨╛╨▓╨╕╤Е ╨┐╤Ц╨┤╤А╤П╨┤╨╜╨╕╤Е ╤А╨╡╤З╨╡╨╜╨╜╤П╤Е (╨┐╤Ц╤Б╨╗╤П 'ako', 'kad'). ╨г╤В╨▓╨╛╤А╤О╤Ф╤В╤М╤Б╤П ╤Д╨╛╤А╨╝╨░╨╝╨╕ ╤В╨╡╨┐╨╡╤А╤Ц╤И╨╜╤М╨╛╨│╨╛ ╤З╨░╤Б╤Г 'biti' (budem, bude┼б...) + ╨┤╤Ц╤Ф╨┐╤А╨╕╨║╨╝╨╡╤В╨╜╨╕╨║ ╨╝╨╕╨╜╤Г╨╗╨╛╨│╨╛ ╤З╨░╤Б╤Г."
            },
            "examples": [
              {
                "hr": "Ako budem imao vremena, do─Зi ─Зu.",
                "translation": {
                  "en": "If I have time, I'll come.",
                  "ru": "╨Х╤Б╨╗╨╕ ╤Г ╨╝╨╡╨╜╤П ╨▒╤Г╨┤╨╡╤В ╨▓╤А╨╡╨╝╤П, ╤П ╨┐╤А╨╕╨┤╤Г.",
                  "ua": "╨п╨║╤Й╨╛ ╤Г ╨╝╨╡╨╜╨╡ ╨▒╤Г╨┤╨╡ ╤З╨░╤Б, ╤П ╨┐╤А╨╕╨╣╨┤╤Г."
                }
              },
              {
                "hr": "Kad budete stigli, javite mi.",
                "translation": {
                  "en": "When you arrive, let me know.",
                  "ru": "╨Ъ╨╛╨│╨┤╨░ ╨┐╤А╨╕╨╡╨┤╨╡╤В╨╡, ╨┤╨░╨╣╤В╨╡ ╨╝╨╜╨╡ ╨╖╨╜╨░╤В╤М.",
                  "ua": "╨Ъ╨╛╨╗╨╕ ╨┐╤А╨╕╤Ч╨┤╨╡╤В╨╡, ╨┤╨░╨╣╤В╨╡ ╨╝╨╡╨╜╤Ц ╨╖╨╜╨░╤В╨╕."
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
          "ru": "╨Т╨╕╨┤ ╨│╨╗╨░╨│╨╛╨╗╨░",
          "ua": "╨Т╨╕╨┤ ╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨░"
        },
        "icon": "ЁЯФА",
        "subsections": [
          {
            "title": {
              "en": "Perfective vs Imperfective",
              "ru": "╨б╨╛╨▓╨╡╤А╤И╨╡╨╜╨╜╤Л╨╣ vs ╨Э╨╡╤Б╨╛╨▓╨╡╤А╤И╨╡╨╜╨╜╤Л╨╣",
              "ua": "╨Ф╨╛╨║╨╛╨╜╨░╨╜╨╕╨╣ vs ╨Э╨╡╨┤╨╛╨║╨╛╨╜╨░╨╜╨╕╨╣"
            },
            "text": {
              "en": "Like Slavic languages, Croatian verbs have aspects. Imperfective verbs express ongoing, repeated, or habitual actions. Perfective verbs express completed, one-time actions. Most verbs form pairs.",
              "ru": "╨Ъ╨░╨║ ╨╕ ╨▓ ╤Б╨╗╨░╨▓╤П╨╜╤Б╨║╨╕╤Е ╤П╨╖╤Л╨║╨░╤Е, ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╡ ╨│╨╗╨░╨│╨╛╨╗╤Л ╨╕╨╝╨╡╤О╤В ╨▓╨╕╨┤╤Л. ╨Э╨╡╤Б╨╛╨▓╨╡╤А╤И╨╡╨╜╨╜╤Л╨╣ ╨▓╨╕╨┤ ╨▓╤Л╤А╨░╨╢╨░╨╡╤В ╨┤╨╗╤П╤Й╨╡╨╡╤Б╤П, ╨┐╨╛╨▓╤В╨╛╤А╤П╤О╤Й╨╡╨╡╤Б╤П ╨╕╨╗╨╕ ╨┐╤А╨╕╨▓╤Л╤З╨╜╨╛╨╡ ╨┤╨╡╨╣╤Б╤В╨▓╨╕╨╡. ╨б╨╛╨▓╨╡╤А╤И╨╡╨╜╨╜╤Л╨╣ тАФ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜╨╜╨╛╨╡, ╨╛╨┤╨╜╨╛╨║╤А╨░╤В╨╜╨╛╨╡. ╨С╨╛╨╗╤М╤И╨╕╨╜╤Б╤В╨▓╨╛ ╨│╨╗╨░╨│╨╛╨╗╨╛╨▓ ╨╛╨▒╤А╨░╨╖╤Г╤О╤В ╨┐╨░╤А╤Л.",
              "ua": "╨п╨║ ╤Ц ╨▓ ╤Б╨╗╨╛╨▓'╤П╨╜╤Б╤М╨║╨╕╤Е ╨╝╨╛╨▓╨░╤Е, ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц ╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨░ ╨╝╨░╤О╤В╤М ╨▓╨╕╨┤╨╕. ╨Э╨╡╨┤╨╛╨║╨╛╨╜╨░╨╜╨╕╨╣ ╨▓╨╕╨┤ ╨▓╨╕╤А╨░╨╢╨░╤Ф ╤В╤А╨╕╨▓╨░╨╗╤Г, ╨┐╨╛╨▓╤В╨╛╤А╤О╨▓╨░╨╜╤Г ╨░╨▒╨╛ ╨╖╨▓╨╕╤З╨╜╤Г ╨┤╤Ц╤О. ╨Ф╨╛╨║╨╛╨╜╨░╨╜╨╕╨╣ тАФ ╨╖╨░╨▓╨╡╤А╤И╨╡╨╜╤Г, ╨╛╨┤╨╜╨╛╤А╨░╨╖╨╛╨▓╤Г. ╨С╤Ц╨╗╤М╤И╤Ц╤Б╤В╤М ╨┤╤Ц╤Ф╤Б╨╗╤Ц╨▓ ╤Г╤В╨▓╨╛╤А╤О╤О╤В╤М ╨┐╨░╤А╨╕."
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
                    "─Нitati",
                    "pro─Нitati",
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
                    "u─Нiti",
                    "nau─Нiti",
                    "to learn"
                  ]
                },
                {
                  "cells": [
                    "govoriti",
                    "re─Зi",
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
                    "do─Зi",
                    "to come"
                  ]
                },
                {
                  "cells": [
                    "odlaziti",
                    "oti─Зi",
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
          "ru": "╨Я╨╛╨▓╨╡╨╗╨╕╤В╨╡╨╗╤М╨╜╨╛╨╡ ╨╜╨░╨║╨╗╨╛╨╜╨╡╨╜╨╕╨╡ (Imperativ)",
          "ua": "╨Э╨░╨║╨░╨╖╨╛╨▓╨╕╨╣ ╤Б╨┐╨╛╤Б╤Ц╨▒ (Imperativ)"
        },
        "icon": "тЭЧ",
        "subsections": [
          {
            "title": {
              "en": "Formation",
              "ru": "╨Ю╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡",
              "ua": "╨г╤В╨▓╨╛╤А╨╡╨╜╨╜╤П"
            },
            "text": {
              "en": "The imperative is formed from the 3rd person plural present tense stem. Endings: -j/-i (2nd sing.), -jmo/-imo (1st pl.), -jte/-ite (2nd pl.).",
              "ru": "╨Я╨╛╨▓╨╡╨╗╨╕╤В╨╡╨╗╤М╨╜╨╛╨╡ ╨╜╨░╨║╨╗╨╛╨╜╨╡╨╜╨╕╨╡ ╨╛╨▒╤А╨░╨╖╤Г╨╡╤В╤Б╤П ╨╛╤В ╨╛╤Б╨╜╨╛╨▓╤Л 3-╨│╨╛ ╨╗╨╕╤Ж╨░ ╨╝╨╜.╤З. ╨╜╨░╤Б╤В╨╛╤П╤Й╨╡╨│╨╛ ╨▓╤А╨╡╨╝╨╡╨╜╨╕. ╨Ю╨║╨╛╨╜╤З╨░╨╜╨╕╤П: -j/-i (2 ╨╗. ╨╡╨┤.╤З.), -jmo/-imo (1 ╨╗. ╨╝╨╜.╤З.), -jte/-ite (2 ╨╗. ╨╝╨╜.╤З.).",
              "ua": "╨Э╨░╨║╨░╨╖╨╛╨▓╨╕╨╣ ╤Б╨┐╨╛╤Б╤Ц╨▒ ╤Г╤В╨▓╨╛╤А╤О╤Ф╤В╤М╤Б╤П ╨▓╤Ц╨┤ ╨╛╤Б╨╜╨╛╨▓╨╕ 3-╤Ч ╨╛╤Б╨╛╨▒╨╕ ╨╝╨╜.╤З. ╤В╨╡╨┐╨╡╤А╤Ц╤И╨╜╤М╨╛╨│╨╛ ╤З╨░╤Б╤Г. ╨Ч╨░╨║╤Ц╨╜╤З╨╡╨╜╨╜╤П: -j/-i (2 ╨╛╤Б. ╨╛╨┤╨╜.), -jmo/-imo (1 ╨╛╤Б. ╨╝╨╜.), -jte/-ite (2 ╨╛╤Б. ╨╝╨╜.)."
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
                    "─Нitati",
                    "─Нitaj",
                    "─Нitajmo",
                    "─Нitajte"
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
                    "pi┼бi",
                    "pi┼бimo",
                    "pi┼бite"
                  ]
                },
                {
                  "cells": [
                    "i─Зi",
                    "idi",
                    "idimo",
                    "idite"
                  ]
                },
                {
                  "cells": [
                    "do─Зi",
                    "do─Сi",
                    "do─Сimo",
                    "do─Сite"
                  ]
                }
              ]
            },
            "examples": [
              {
                "hr": "─Мitaj polako!",
                "translation": {
                  "en": "Read slowly!",
                  "ru": "╨з╨╕╤В╨░╨╣ ╨╝╨╡╨┤╨╗╨╡╨╜╨╜╨╛!",
                  "ua": "╨з╨╕╤В╨░╨╣ ╨┐╨╛╨▓╤Ц╨╗╤М╨╜╨╛!"
                }
              },
              {
                "hr": "Do─Сite ovamo, molim vas!",
                "translation": {
                  "en": "Come here, please!",
                  "ru": "╨Ш╨┤╨╕╤В╨╡ ╤Б╤О╨┤╨░, ╨┐╨╛╨╢╨░╨╗╤Г╨╣╤Б╤В╨░!",
                  "ua": "╨Ж╨┤╤Ц╤В╤М ╤Б╤О╨┤╨╕, ╨▒╤Г╨┤╤М ╨╗╨░╤Б╨║╨░!"
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
          "ru": "╨б╨┐╤А╤П╨╢╨╡╨╜╨╕╨╡ ╤З╨░╤Б╤В╤Л╤Е ╨│╨╗╨░╨│╨╛╨╗╨╛╨▓",
          "ua": "╨Т╤Ц╨┤╨╝╤Ц╨╜╤О╨▓╨░╨╜╨╜╤П ╨┐╨╛╤И╨╕╤А╨╡╨╜╨╕╤Е ╨┤╤Ц╤Ф╤Б╨╗╤Ц╨▓"
        },
        "icon": "ЁЯУЛ",
        "subsections": [
          {
            "title": {
              "en": "Present Tense of Essential Verbs",
              "ru": "╨Э╨░╤Б╤В╨╛╤П╤Й╨╡╨╡ ╨▓╤А╨╡╨╝╤П ╨║╨╗╤О╤З╨╡╨▓╤Л╤Е ╨│╨╗╨░╨│╨╛╨╗╨╛╨▓",
              "ua": "╨в╨╡╨┐╨╡╤А╤Ц╤И╨╜╤Ц╨╣ ╤З╨░╤Б ╨║╨╗╤О╤З╨╛╨▓╨╕╤Е ╨┤╤Ц╤Ф╤Б╨╗╤Ц╨▓"
            },
            "text": {
              "en": "Here is the present tense conjugation for essential auxiliary and modal verbs in Croatian: biti (to be), htjeti (to want), mo─Зi (to be able to), morati (must/have to), i─Зi (to go).",
              "ru": "╨Т╨╛╤В ╤Б╨┐╤А╤П╨╢╨╡╨╜╨╕╨╡ ╨▓ ╨╜╨░╤Б╤В╨╛╤П╤Й╨╡╨╝ ╨▓╤А╨╡╨╝╨╡╨╜╨╕ ╨┤╨╗╤П ╨▓╨░╨╢╨╜╨╡╨╣╤И╨╕╤Е ╨▓╤Б╨┐╨╛╨╝╨╛╨│╨░╤В╨╡╨╗╤М╨╜╤Л╤Е ╨╕ ╨╝╨╛╨┤╨░╨╗╤М╨╜╤Л╤Е ╨│╨╗╨░╨│╨╛╨╗╨╛╨▓: biti (╨▒╤Л╤В╤М), htjeti (╤Е╨╛╤В╨╡╤В╤М), mo─Зi (╨╝╨╛╤З╤М), morati (╨┤╨╛╨╗╨╢╨╡╨╜╤Б╤В╨▓╨╛╨▓╨░╤В╤М), i─Зi (╨╕╨┤╤В╨╕).",
              "ua": "╨Ю╤Б╤М ╨▓╤Ц╨┤╨╝╤Ц╨╜╤О╨▓╨░╨╜╨╜╤П ╨▓ ╤В╨╡╨┐╨╡╤А╤Ц╤И╨╜╤М╨╛╨╝╤Г ╤З╨░╤Б╤Ц ╨┤╨╗╤П ╨╜╨░╨╣╨▓╨░╨╢╨╗╨╕╨▓╤Ц╤И╨╕╤Е ╨┤╨╛╨┐╨╛╨╝╤Ц╨╢╨╜╨╕╤Е ╤В╨░ ╨╝╨╛╨┤╨░╨╗╤М╨╜╨╕╤Е ╨┤╤Ц╤Ф╤Б╨╗╤Ц╨▓: biti (╨▒╤Г╤В╨╕), htjeti (╤Е╨╛╤В╤Ц╤В╨╕), mo─Зi (╨╝╨╛╨│╤В╨╕), morati (╨╝╤Г╤Б╨╕╤В╨╕), i─Зi (╨╣╤В╨╕)."
            },
            "table": {
              "headers": [
                "Pronoun",
                "biti (to be)",
                "htjeti (to want)",
                "mo─Зi (can)",
                "morati (must)",
                "i─Зi (to go)"
              ],
              "rows": [
                {
                  "cells": [
                    "ja (I)",
                    "sam / jesam",
                    "─Зu / ho─Зu",
                    "mogu",
                    "moram",
                    "idem"
                  ]
                },
                {
                  "cells": [
                    "ti (you)",
                    "si / jesi",
                    "─Зe┼б / ho─Зe┼б",
                    "mo┼╛e┼б",
                    "mora┼б",
                    "ide┼б"
                  ]
                },
                {
                  "cells": [
                    "on/ona/ono",
                    "je / jest",
                    "─Зe / ho─Зe",
                    "mo┼╛e",
                    "mora",
                    "ide"
                  ]
                },
                {
                  "cells": [
                    "mi (we)",
                    "smo / jesmo",
                    "─Зemo / ho─Зemo",
                    "mo┼╛emo",
                    "moramo",
                    "idemo"
                  ]
                },
                {
                  "cells": [
                    "vi (you pl./formal)",
                    "ste / jeste",
                    "─Зete / ho─Зete",
                    "mo┼╛ete",
                    "morate",
                    "idete"
                  ]
                },
                {
                  "cells": [
                    "oni/one/ona (they)",
                    "su / jesu",
                    "─Зe / ho─Зe",
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
          "ru": "╨Т╨╛╨╖╨▓╤А╨░╤В╨╜╤Л╨╡ ╨│╨╗╨░╨│╨╛╨╗╤Л",
          "ua": "╨Ч╨▓╨╛╤А╨╛╤В╨╜╤Ц ╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨░"
        },
        "icon": "ЁЯФД",
        "subsections": [
          {
            "title": {
              "en": "Reflexive Particle 'se'",
              "ru": "╨Т╨╛╨╖╨▓╤А╨░╤В╨╜╨░╤П ╤З╨░╤Б╤В╨╕╤Ж╨░ 'se'",
              "ua": "╨Ч╨▓╨╛╤А╨╛╤В╨╜╨░ ╤З╨░╤Б╤В╨║╨░ 'se'"
            },
            "text": {
              "en": "Reflexive verbs in Croatian are accompanied by the reflexive pronoun/particle 'se' (equivalent to Russian '-╤Б╤П' or Ukrainian '-╤Б╤П'). The position of 'se' follows the enclitic rules (usually placed in the second position of the sentence).",
              "ru": "╨Т╨╛╨╖╨▓╤А╨░╤В╨╜╤Л╨╡ ╨│╨╗╨░╨│╨╛╨╗╤Л ╨▓ ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╛╨╝ ╤П╨╖╤Л╨║╨╡ ╤Б╨╛╨┐╤А╨╛╨▓╨╛╨╢╨┤╨░╤О╤В╤Б╤П ╨▓╨╛╨╖╨▓╤А╨░╤В╨╜╤Л╨╝ ╨╝╨╡╤Б╤В╨╛╨╕╨╝╨╡╨╜╨╕╨╡╨╝/╤З╨░╤Б╤В╨╕╤Ж╨╡╨╣ 'se' (╤Н╨║╨▓╨╕╨▓╨░╨╗╨╡╨╜╤В ╤А╤Г╤Б╤Б╨║╨╛╨│╨╛ ╨╕╨╗╨╕ ╤Г╨║╤А╨░╨╕╨╜╤Б╨║╨╛╨│╨╛ '-╤Б╤П'). ╨Я╨╛╨╗╨╛╨╢╨╡╨╜╨╕╨╡ 'se' ╨┐╨╛╨┤╤З╨╕╨╜╤П╨╡╤В╤Б╤П ╨┐╤А╨░╨▓╨╕╨╗╨░╨╝ ╤Н╨╜╨║╨╗╨╕╤В╨╕╨║ (╨╛╨▒╤Л╤З╨╜╨╛ ╤Б╤В╨░╨▓╨╕╤В╤Б╤П ╨╜╨░ ╨▓╤В╨╛╤А╨╛╨╡ ╨╝╨╡╤Б╤В╨╛ ╨▓ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╡╨╜╨╕╨╕).",
              "ua": "╨Ч╨▓╨╛╤А╨╛╤В╨╜╤Ц ╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨░ ╨▓ ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц╨╣ ╨╝╨╛╨▓╤Ц ╤Б╤Г╨┐╤А╨╛╨▓╨╛╨┤╨╢╤Г╤О╤В╤М╤Б╤П ╨╖╨▓╨╛╤А╨╛╤В╨╜╨╕╨╝ ╨╖╨░╨╣╨╝╨╡╨╜╨╜╨╕╨║╨╛╨╝/╤З╨░╤Б╤В╨║╨╛╤О 'se' (╨╡╨║╨▓╤Ц╨▓╨░╨╗╨╡╨╜╤В ╤Г╨║╤А╨░╤Ч╨╜╤Б╤М╨║╨╛╨│╨╛ '-╤Б╤П'). ╨Я╨╛╨╗╨╛╨╢╨╡╨╜╨╜╤П 'se' ╨┐╤Ц╨┤╨┐╨╛╤А╤П╨┤╨║╨╛╨▓╤Г╤Ф╤В╤М╤Б╤П ╨┐╤А╨░╨▓╨╕╨╗╨░╨╝ ╨╡╨╜╨║╨╗╤Ц╤В╨╕╨║ (╨╖╨░╨╖╨▓╨╕╤З╨░╨╣ ╤Б╤В╨░╨▓╨╕╤В╤М╤Б╤П ╨╜╨░ ╨┤╤А╤Г╨│╨╡ ╨╝╤Ц╤Б╤Ж╨╡ ╨▓ ╤А╨╡╤З╨╡╨╜╨╜╤Ц)."
            },
            "table": {
              "headers": [
                "Verb",
                {
                  "en": "English",
                  "ru": "╨Я╨╡╤А╨╡╨▓╨╛╨┤",
                  "ua": "╨Я╨╡╤А╨╡╨║╨╗╨░╨┤"
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
                    "tu┼бirati se",
                    "to shower",
                    "tu┼бiram se",
                    "Tu┼бiram se ujutro. (I shower in the morning.)"
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
      "ru": "╨з╨╕╤Б╨╗╨╕╤В╨╡╨╗╤М╨╜╤Л╨╡ (Brojevi)",
      "ua": "╨з╨╕╤Б╨╗╤Ц╨▓╨╜╨╕╨║╨╕ (Brojevi)"
    },
    "icon": "ЁЯФв",
    "sections": [
      {
        "id": "cardinal",
        "title": {
          "en": "Cardinal Numbers",
          "ru": "╨Ъ╨╛╨╗╨╕╤З╨╡╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╡ ╤З╨╕╤Б╨╗╨╕╤В╨╡╨╗╤М╨╜╤Л╨╡",
          "ua": "╨Ъ╤Ц╨╗╤М╨║╤Ц╤Б╨╜╤Ц ╤З╨╕╤Б╨╗╤Ц╨▓╨╜╨╕╨║╨╕"
        },
        "icon": "ЁЯФв",
        "subsections": [
          {
            "title": {
              "en": "Numbers 0тАУ100",
              "ru": "╨з╨╕╤Б╨╗╨░ 0тАУ100",
              "ua": "╨з╨╕╤Б╨╗╨░ 0тАУ100"
            },
            "text": {
              "en": "Croatian numbers are important for everyday situations: shopping, telling time, giving your phone number.",
              "ru": "╨е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╡ ╤З╨╕╤Б╨╗╨░ ╨▓╨░╨╢╨╜╤Л ╨┤╨╗╤П ╨┐╨╛╨▓╤Б╨╡╨┤╨╜╨╡╨▓╨╜╤Л╤Е ╤Б╨╕╤В╤Г╨░╤Ж╨╕╨╣: ╨┐╨╛╨║╤Г╨┐╨║╨╕, ╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╕╨╡ ╨▓╤А╨╡╨╝╨╡╨╜╨╕, ╨╜╨╛╨╝╨╡╤А ╤В╨╡╨╗╨╡╤Д╨╛╨╜╨░.",
              "ua": "╨е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц ╤З╨╕╤Б╨╗╨░ ╨▓╨░╨╢╨╗╨╕╨▓╤Ц ╨┤╨╗╤П ╨┐╨╛╨▓╤Б╤П╨║╨┤╨╡╨╜╨╜╨╕╤Е ╤Б╨╕╤В╤Г╨░╤Ж╤Ц╨╣: ╨┐╨╛╨║╤Г╨┐╨║╨╕, ╨▓╨╕╨╖╨╜╨░╤З╨╡╨╜╨╜╤П ╤З╨░╤Б╤Г, ╨╜╨╛╨╝╨╡╤А ╤В╨╡╨╗╨╡╤Д╨╛╨╜╤Г."
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
                    "─Нetiri",
                    "14",
                    "─Нetrnaest"
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
                    "┼бest",
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
          "ru": "╨Я╨╛╤А╤П╨┤╨║╨╛╨▓╤Л╨╡ ╤З╨╕╤Б╨╗╨╕╤В╨╡╨╗╤М╨╜╤Л╨╡",
          "ua": "╨Я╨╛╤А╤П╨┤╨║╨╛╨▓╤Ц ╤З╨╕╤Б╨╗╤Ц╨▓╨╜╨╕╨║╨╕"
        },
        "icon": "ЁЯПЖ",
        "subsections": [
          {
            "title": {
              "en": "Formation",
              "ru": "╨Ю╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡",
              "ua": "╨г╤В╨▓╨╛╤А╨╡╨╜╨╜╤П"
            },
            "text": {
              "en": "Ordinal numbers are adjectives and must agree in gender with the noun they describe: prvi/prva/prvo (first), drugi/druga/drugo (second), etc.",
              "ru": "╨Я╨╛╤А╤П╨┤╨║╨╛╨▓╤Л╨╡ ╤З╨╕╤Б╨╗╨╕╤В╨╡╨╗╤М╨╜╤Л╨╡ тАФ ╤Н╤В╨╛ ╨┐╤А╨╕╨╗╨░╨│╨░╤В╨╡╨╗╤М╨╜╤Л╨╡ ╨╕ ╨┤╨╛╨╗╨╢╨╜╤Л ╤Б╨╛╨│╨╗╨░╤Б╨╛╨▓╨░╤В╤М╤Б╤П ╨▓ ╤А╨╛╨┤╨╡: prvi/prva/prvo (╨┐╨╡╤А╨▓╤Л╨╣), drugi/druga/drugo (╨▓╤В╨╛╤А╨╛╨╣) ╨╕ ╤В.╨┤.",
              "ua": "╨Я╨╛╤А╤П╨┤╨║╨╛╨▓╤Ц ╤З╨╕╤Б╨╗╤Ц╨▓╨╜╨╕╨║╨╕ тАФ ╤Ж╨╡ ╨┐╤А╨╕╨║╨╝╨╡╤В╨╜╨╕╨║╨╕ ╤Ц ╨╝╨░╤О╤В╤М ╤Г╨╖╨│╨╛╨┤╨╢╤Г╨▓╨░╤В╨╕╤Б╤П ╨▓ ╤А╨╛╨┤╤Ц: prvi/prva/prvo (╨┐╨╡╤А╤И╨╕╨╣), drugi/druga/drugo (╨┤╤А╤Г╨│╨╕╨╣) ╤В╨╛╤Й╨╛."
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
                    "tre─Зi",
                    "tre─Зa",
                    "tre─Зe"
                  ]
                },
                {
                  "cells": [
                    "4th",
                    "─Нetvrti",
                    "─Нetvrta",
                    "─Нetvrto"
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
      "ru": "╨Я╨╛╨▓╤Б╨╡╨┤╨╜╨╡╨▓╨╜╤Л╨╡ ╤В╨╡╨╝╤Л",
      "ua": "╨Я╨╛╨▓╤Б╤П╨║╨┤╨╡╨╜╨╜╤Ц ╤В╨╡╨╝╨╕"
    },
    "icon": "ЁЯТм",
    "sections": [
      {
        "id": "greetings",
        "title": {
          "en": "Greetings & Farewells",
          "ru": "╨Я╤А╨╕╨▓╨╡╤В╤Б╤В╨▓╨╕╤П ╨╕ ╨┐╤А╨╛╤Й╨░╨╜╨╕╤П",
          "ua": "╨Я╤А╨╕╨▓╤Ц╤В╨░╨╜╨╜╤П ╤В╨░ ╨┐╤А╨╛╤Й╨░╨╜╨╜╤П"
        },
        "icon": "ЁЯСЛ",
        "subsections": [
          {
            "title": {
              "en": "Basic Greetings",
              "ru": "╨Ю╤Б╨╜╨╛╨▓╨╜╤Л╨╡ ╨┐╤А╨╕╨▓╨╡╤В╤Б╤В╨▓╨╕╤П",
              "ua": "╨Ю╤Б╨╜╨╛╨▓╨╜╤Ц ╨┐╤А╨╕╨▓╤Ц╤В╨░╨╜╨╜╤П"
            },
            "text": {
              "en": "Croatian greetings depend on the time of day and the formality of the situation.",
              "ru": "╨е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╡ ╨┐╤А╨╕╨▓╨╡╤В╤Б╤В╨▓╨╕╤П ╨╖╨░╨▓╨╕╤Б╤П╤В ╨╛╤В ╨▓╤А╨╡╨╝╨╡╨╜╨╕ ╤Б╤Г╤В╨╛╨║ ╨╕ ╤Б╤В╨╡╨┐╨╡╨╜╨╕ ╤Д╨╛╤А╨╝╨░╨╗╤М╨╜╨╛╤Б╤В╨╕.",
              "ua": "╨е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц ╨┐╤А╨╕╨▓╤Ц╤В╨░╨╜╨╜╤П ╨╖╨░╨╗╨╡╨╢╨░╤В╤М ╨▓╤Ц╨┤ ╤З╨░╤Б╤Г ╨┤╨╛╨▒╨╕ ╤В╨░ ╤Б╤В╤Г╨┐╨╡╨╜╤П ╤Д╨╛╤А╨╝╨░╨╗╤М╨╜╨╛╤Б╤В╤Ц."
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
                    "Dobra ve─Нer!",
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
                    "Dovi─Сenja!",
                    "Goodbye!",
                    "Formal"
                  ]
                },
                {
                  "cells": [
                    "Laku no─З!",
                    "Good night!",
                    "Evening farewell"
                  ]
                }
              ]
            },
            "examples": [
              {
                "hr": "Bok! Kako si? тАФ Dobro sam, hvala!",
                "translation": {
                  "en": "Hi! How are you? тАФ I'm fine, thanks!",
                  "ru": "╨Я╤А╨╕╨▓╨╡╤В! ╨Ъ╨░╨║ ╨┤╨╡╨╗╨░? тАФ ╨е╨╛╤А╨╛╤И╨╛, ╤Б╨┐╨░╤Б╨╕╨▒╨╛!",
                  "ua": "╨Я╤А╨╕╨▓╤Ц╤В! ╨п╨║ ╤Б╨┐╤А╨░╨▓╨╕? тАФ ╨Ф╨╛╨▒╤А╨╡, ╨┤╤П╨║╤Г╤О!"
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
          "ru": "╨Я╨╛╨║╤Г╨┐╨║╨╕ ╨╕ ╤А╤Л╨╜╨╛╨║",
          "ua": "╨Я╨╛╨║╤Г╨┐╨║╨╕ ╤В╨░ ╤А╨╕╨╜╨╛╨║"
        },
        "icon": "ЁЯЫТ",
        "subsections": [
          {
            "title": {
              "en": "Useful Phrases",
              "ru": "╨Я╨╛╨╗╨╡╨╖╨╜╤Л╨╡ ╤Д╤А╨░╨╖╤Л",
              "ua": "╨Ъ╨╛╤А╨╕╤Б╨╜╤Ц ╤Д╤А╨░╨╖╨╕"
            },
            "text": {
              "en": "Essential phrases for shopping in Croatia тАФ at the market, in stores, and more.",
              "ru": "╨Т╨░╨╢╨╜╤Л╨╡ ╤Д╤А╨░╨╖╤Л ╨┤╨╗╤П ╨┐╨╛╨║╤Г╨┐╨╛╨║ ╨▓ ╨е╨╛╤А╨▓╨░╤В╨╕╨╕ тАФ ╨╜╨░ ╤А╤Л╨╜╨║╨╡, ╨▓ ╨╝╨░╨│╨░╨╖╨╕╨╜╨░╤Е ╨╕ ╤В.╨┤.",
              "ua": "╨Т╨░╨╢╨╗╨╕╨▓╤Ц ╤Д╤А╨░╨╖╨╕ ╨┤╨╗╤П ╨┐╨╛╨║╤Г╨┐╨╛╨║ ╤Г ╨е╨╛╤А╨▓╨░╤В╤Ц╤Ч тАФ ╨╜╨░ ╤А╨╕╨╜╨║╤Г, ╤Г ╨╝╨░╨│╨░╨╖╨╕╨╜╨░╤Е ╤В╨╛╤Й╨╛."
            },
            "table": {
              "headers": [
                "Croatian",
                "English",
                {
                  "en": "Translation",
                  "ru": "╨Я╨╡╤А╨╡╨▓╨╛╨┤",
                  "ua": "╨Я╨╡╤А╨╡╨║╨╗╨░╨┤"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Koliko to ko┼бta?",
                    "How much does it cost?",
                    {
                      "en": "╨б╨║╨╛╨╗╤М╨║╨╛ ╤Н╤В╨╛ ╤Б╤В╨╛╨╕╤В?",
                      "ru": "╨б╨║╨╛╨╗╤М╨║╨╛ ╤Н╤В╨╛ ╤Б╤В╨╛╨╕╤В?",
                      "ua": "╨б╨║╤Ц╨╗╤М╨║╨╕ ╤Ж╨╡ ╨║╨╛╤И╤В╤Г╤Ф?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Imate li...?",
                    "Do you have...?",
                    {
                      "en": "╨г ╨▓╨░╤Б ╨╡╤Б╤В╤М...?",
                      "ru": "╨г ╨▓╨░╤Б ╨╡╤Б╤В╤М...?",
                      "ua": "╨з╨╕ ╤Ф ╤Г ╨▓╨░╤Б...?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Htio/Htjela bih...",
                    "I would like...",
                    {
                      "en": "╨п ╨▒╤Л ╤Е╨╛╤В╨╡╨╗(╨░)...",
                      "ru": "╨п ╨▒╤Л ╤Е╨╛╤В╨╡╨╗(╨░)...",
                      "ua": "╨п ╨▒ ╤Е╨╛╤В╤Ц╨▓/╤Е╨╛╤В╤Ц╨╗╨░..."
                    }
                  ]
                },
                {
                  "cells": [
                    "Mogu li platiti karticom?",
                    "Can I pay by card?",
                    {
                      "en": "╨Ь╨╛╨╢╨╜╨╛ ╨║╨░╤А╤В╨╛╨╣?",
                      "ru": "╨Ь╨╛╨╢╨╜╨╛ ╨║╨░╤А╤В╨╛╨╣?",
                      "ua": "╨з╨╕ ╨╝╨╛╨╢╤Г ╤П ╤А╨╛╨╖╨┐╨╗╨░╤В╨╕╤В╨╕╤Б╤П ╨║╨░╤А╤В╨║╨╛╤О?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Dajte mi kilu...",
                    "Give me a kilo of...",
                    {
                      "en": "╨Ф╨░╨╣╤В╨╡ ╨╝╨╜╨╡ ╨║╨╕╨╗╨╛╨│╤А╨░╨╝╨╝...",
                      "ru": "╨Ф╨░╨╣╤В╨╡ ╨╝╨╜╨╡ ╨║╨╕╨╗╨╛╨│╤А╨░╨╝╨╝...",
                      "ua": "╨Ф╨░╨╣╤В╨╡ ╨╝╨╡╨╜╤Ц ╨║╤Ц╨╗╨╛╨│╤А╨░╨╝..."
                    }
                  ]
                },
                {
                  "cells": [
                    "Je li to na akciji?",
                    "Is it on sale?",
                    {
                      "en": "╨н╤В╨╛ ╨┐╨╛ ╨░╨║╤Ж╨╕╨╕?",
                      "ru": "╨н╤В╨╛ ╨┐╨╛ ╨░╨║╤Ж╨╕╨╕?",
                      "ua": "╨ж╨╡ ╨┐╨╛ ╨░╨║╤Ж╤Ц╤Ч?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Hvala, to je sve.",
                    "Thanks, that's all.",
                    {
                      "en": "╨б╨┐╨░╤Б╨╕╨▒╨╛, ╤Н╤В╨╛ ╨▓╤Б╤С.",
                      "ru": "╨б╨┐╨░╤Б╨╕╨▒╨╛, ╤Н╤В╨╛ ╨▓╤Б╤С.",
                      "ua": "╨Ф╤П╨║╤Г╤О, ╤Ж╨╡ ╨▓╤Б╨╡."
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
          "ru": "╨в╤А╨░╨╜╤Б╨┐╨╛╤А╤В ╨╕ ╨╜╨░╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤П",
          "ua": "╨в╤А╨░╨╜╤Б╨┐╨╛╤А╤В ╤В╨░ ╨╜╨░╨┐╤А╤П╨╝╨║╨╕"
        },
        "icon": "ЁЯЪМ",
        "subsections": [
          {
            "title": {
              "en": "Getting Around",
              "ru": "╨Ъ╨░╨║ ╨┤╨╛╨▒╤А╨░╤В╤М╤Б╤П",
              "ua": "╨п╨║ ╨┤╤Ц╤Б╤В╨░╤В╨╕╤Б╤П"
            },
            "text": {
              "en": "Key phrases for navigating public transport and asking for directions in Croatia.",
              "ru": "╨Ъ╨╗╤О╤З╨╡╨▓╤Л╨╡ ╤Д╤А╨░╨╖╤Л ╨┤╨╗╤П ╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╤П ╨╛╨▒╤Й╨╡╤Б╤В╨▓╨╡╨╜╨╜╨╛╨│╨╛ ╤В╤А╨░╨╜╤Б╨┐╨╛╤А╤В╨░ ╨╕ ╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╕╤П ╨┐╤Г╤В╨╕ ╨▓ ╨е╨╛╤А╨▓╨░╤В╨╕╨╕.",
              "ua": "╨Ъ╨╗╤О╤З╨╛╨▓╤Ц ╤Д╤А╨░╨╖╨╕ ╨┤╨╗╤П ╨║╨╛╤А╨╕╤Б╤В╤Г╨▓╨░╨╜╨╜╤П ╨│╤А╨╛╨╝╨░╨┤╤Б╤М╨║╨╕╨╝ ╤В╤А╨░╨╜╤Б╨┐╨╛╤А╤В╨╛╨╝ ╤В╨░ ╨▓╨╕╨╖╨╜╨░╤З╨╡╨╜╨╜╤П ╤И╨╗╤П╤Е╤Г ╨▓ ╨е╨╛╤А╨▓╨░╤В╤Ц╤Ч."
            },
            "table": {
              "headers": [
                "Croatian",
                "English",
                {
                  "en": "Translation",
                  "ru": "╨Я╨╡╤А╨╡╨▓╨╛╨┤",
                  "ua": "╨Я╨╡╤А╨╡╨║╨╗╨░╨┤"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Gdje je stanica?",
                    "Where is the station?",
                    {
                      "en": "╨У╨┤╨╡ ╤Б╤В╨░╨╜╤Ж╨╕╤П?",
                      "ru": "╨У╨┤╨╡ ╤Б╤В╨░╨╜╤Ж╨╕╤П?",
                      "ua": "╨Ф╨╡ ╤Б╤В╨░╨╜╤Ж╤Ц╤П?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Koliko ko┼бta karta?",
                    "How much is a ticket?",
                    {
                      "en": "╨б╨║╨╛╨╗╤М╨║╨╛ ╤Б╤В╨╛╨╕╤В ╨▒╨╕╨╗╨╡╤В?",
                      "ru": "╨б╨║╨╛╨╗╤М╨║╨╛ ╤Б╤В╨╛╨╕╤В ╨▒╨╕╨╗╨╡╤В?",
                      "ua": "╨б╨║╤Ц╨╗╤М╨║╨╕ ╨║╨╛╤И╤В╤Г╤Ф ╨║╨▓╨╕╤В╨╛╨║?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Skrenite lijevo/desno",
                    "Turn left/right",
                    {
                      "en": "╨Я╨╛╨▓╨╡╤А╨╜╨╕╤В╨╡ ╨╜╨░╨╗╨╡╨▓╨╛/╨╜╨░╨┐╤А╨░╨▓╨╛",
                      "ru": "╨Я╨╛╨▓╨╡╤А╨╜╨╕╤В╨╡ ╨╜╨░╨╗╨╡╨▓╨╛/╨╜╨░╨┐╤А╨░╨▓╨╛",
                      "ua": "╨Я╨╛╨▓╨╡╤А╨╜╤Ц╤В╤М ╨╗╤Ц╨▓╨╛╤А╤Г╤З/╨┐╤А╨░╨▓╨╛╤А╤Г╤З"
                    }
                  ]
                },
                {
                  "cells": [
                    "Idite ravno",
                    "Go straight",
                    {
                      "en": "╨Ш╨┤╨╕╤В╨╡ ╨┐╤А╤П╨╝╨╛",
                      "ru": "╨Ш╨┤╨╕╤В╨╡ ╨┐╤А╤П╨╝╨╛",
                      "ua": "╨Щ╨┤╤Ц╤В╤М ╨┐╤А╤П╨╝╨╛"
                    }
                  ]
                },
                {
                  "cells": [
                    "Je li to daleko?",
                    "Is it far?",
                    {
                      "en": "╨н╤В╨╛ ╨┤╨░╨╗╨╡╨║╨╛?",
                      "ru": "╨н╤В╨╛ ╨┤╨░╨╗╨╡╨║╨╛?",
                      "ua": "╨ж╨╡ ╨┤╨░╨╗╨╡╨║╨╛?"
                    }
                  ]
                },
                {
                  "cells": [
                    "Kako mogu do─Зi do...?",
                    "How can I get to...?",
                    {
                      "en": "╨Ъ╨░╨║ ╨┤╨╛╨▒╤А╨░╤В╤М╤Б╤П ╨┤╨╛...?",
                      "ru": "╨Ъ╨░╨║ ╨┤╨╛╨▒╤А╨░╤В╤М╤Б╤П ╨┤╨╛...?",
                      "ua": "╨п╨║ ╨┤╤Ц╤Б╤В╨░╤В╨╕╤Б╤П ╨┤╨╛...?"
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
          "ru": "╨г ╨▓╤А╨░╤З╨░",
          "ua": "╨г ╨╗╤Ц╨║╨░╤А╤П"
        },
        "icon": "ЁЯПе",
        "subsections": [
          {
            "title": {
              "en": "Medical Vocabulary",
              "ru": "╨Ь╨╡╨┤╨╕╤Ж╨╕╨╜╤Б╨║╨░╤П ╨╗╨╡╨║╤Б╨╕╨║╨░",
              "ua": "╨Ь╨╡╨┤╨╕╤З╨╜╨░ ╨╗╨╡╨║╤Б╨╕╨║╨░"
            },
            "text": {
              "en": "Important vocabulary and phrases for visiting a doctor in Croatia.",
              "ru": "╨Т╨░╨╢╨╜╨░╤П ╨╗╨╡╨║╤Б╨╕╨║╨░ ╨╕ ╤Д╤А╨░╨╖╤Л ╨┤╨╗╤П ╨▓╨╕╨╖╨╕╤В╨░ ╨║ ╨▓╤А╨░╤З╤Г ╨▓ ╨е╨╛╤А╨▓╨░╤В╨╕╨╕.",
              "ua": "╨Т╨░╨╢╨╗╨╕╨▓╨░ ╨╗╨╡╨║╤Б╨╕╨║╨░ ╤В╨░ ╤Д╤А╨░╨╖╨╕ ╨┤╨╗╤П ╨▓╤Ц╨╖╨╕╤В╤Г ╨┤╨╛ ╨╗╤Ц╨║╨░╤А╤П ╨▓ ╨е╨╛╤А╨▓╨░╤В╤Ц╤Ч."
            },
            "table": {
              "headers": [
                "Croatian",
                "English",
                {
                  "en": "Translation",
                  "ru": "╨Я╨╡╤А╨╡╨▓╨╛╨┤",
                  "ua": "╨Я╨╡╤А╨╡╨║╨╗╨░╨┤"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "Boli me glava.",
                    "I have a headache.",
                    {
                      "en": "╨г ╨╝╨╡╨╜╤П ╨▒╨╛╨╗╨╕╤В ╨│╨╛╨╗╨╛╨▓╨░.",
                      "ru": "╨г ╨╝╨╡╨╜╤П ╨▒╨╛╨╗╨╕╤В ╨│╨╛╨╗╨╛╨▓╨░.",
                      "ua": "╨г ╨╝╨╡╨╜╨╡ ╨▒╨╛╨╗╨╕╤В╤М ╨│╨╛╨╗╨╛╨▓╨░."
                    }
                  ]
                },
                {
                  "cells": [
                    "Imam temperaturu.",
                    "I have a fever.",
                    {
                      "en": "╨г ╨╝╨╡╨╜╤П ╤В╨╡╨╝╨┐╨╡╤А╨░╤В╤Г╤А╨░.",
                      "ru": "╨г ╨╝╨╡╨╜╤П ╤В╨╡╨╝╨┐╨╡╤А╨░╤В╤Г╤А╨░.",
                      "ua": "╨г ╨╝╨╡╨╜╨╡ ╤В╨╡╨╝╨┐╨╡╤А╨░╤В╤Г╤А╨░."
                    }
                  ]
                },
                {
                  "cells": [
                    "Trebam lije─Нnika.",
                    "I need a doctor.",
                    {
                      "en": "╨Ь╨╜╨╡ ╨╜╤Г╨╢╨╡╨╜ ╨▓╤А╨░╤З.",
                      "ru": "╨Ь╨╜╨╡ ╨╜╤Г╨╢╨╡╨╜ ╨▓╤А╨░╤З.",
                      "ua": "╨Ь╨╡╨╜╤Ц ╨┐╨╛╤В╤А╤Ц╨▒╨╡╨╜ ╨╗╤Ц╨║╨░╤А."
                    }
                  ]
                },
                {
                  "cells": [
                    "Alergi─Нan/na sam na...",
                    "I'm allergic to...",
                    {
                      "en": "╨г ╨╝╨╡╨╜╤П ╨░╨╗╨╗╨╡╤А╨│╨╕╤П ╨╜╨░...",
                      "ru": "╨г ╨╝╨╡╨╜╤П ╨░╨╗╨╗╨╡╤А╨│╨╕╤П ╨╜╨░...",
                      "ua": "╨п ╨░╨╗╨╡╤А╨│╤Ц╨║ ╨╜╨░..."
                    }
                  ]
                },
                {
                  "cells": [
                    "Ljekarna",
                    "Pharmacy",
                    {
                      "en": "╨Р╨┐╤В╨╡╨║╨░",
                      "ru": "╨Р╨┐╤В╨╡╨║╨░",
                      "ua": "╨Р╨┐╤В╨╡╨║╨░"
                    }
                  ]
                },
                {
                  "cells": [
                    "Hitna pomo─З",
                    "Emergency",
                    {
                      "en": "╨б╨║╨╛╤А╨░╤П ╨┐╨╛╨╝╨╛╤Й╤М",
                      "ru": "╨б╨║╨╛╤А╨░╤П ╨┐╨╛╨╝╨╛╤Й╤М",
                      "ua": "╨и╨▓╨╕╨┤╨║╨░ ╨┤╨╛╨┐╨╛╨╝╨╛╨│╨░"
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
          "ru": "╨з╨╗╨╡╨╜╤Л ╤Б╨╡╨╝╤М╨╕",
          "ua": "╨з╨╗╨╡╨╜╨╕ ╤Б╤Ц╨╝'╤Ч"
        },
        "icon": "ЁЯСитАНЁЯСйтАНЁЯСзтАНЁЯСж",
        "subsections": [
          {
            "title": {
              "en": "Family Vocabulary",
              "ru": "╨б╨╡╨╝╨╡╨╣╨╜╨░╤П ╨╗╨╡╨║╤Б╨╕╨║╨░",
              "ua": "╨б╤Ц╨╝╨╡╨╣╨╜╨░ ╨╗╨╡╨║╤Б╨╕╨║╨░"
            },
            "text": {
              "en": "Croatian family terms тАФ essential vocabulary for introducing your family.",
              "ru": "╨е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╡ ╤В╨╡╤А╨╝╨╕╨╜╤Л ╤А╨╛╨┤╤Б╤В╨▓╨░ тАФ ╨╜╨╡╨╛╨▒╤Е╨╛╨┤╨╕╨╝╨░╤П ╨╗╨╡╨║╤Б╨╕╨║╨░ ╨┤╨╗╤П ╨┐╤А╨╡╨┤╤Б╤В╨░╨▓╨╗╨╡╨╜╨╕╤П ╤Б╨╡╨╝╤М╨╕.",
              "ua": "╨е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц ╤В╨╡╤А╨╝╤Ц╨╜╨╕ ╤Б╨┐╨╛╤А╤Ц╨┤╨╜╨╡╨╜╨╛╤Б╤В╤Ц тАФ ╨╜╨╡╨╛╨▒╤Е╤Ц╨┤╨╜╨░ ╨╗╨╡╨║╤Б╨╕╨║╨░ ╨┤╨╗╤П ╨┐╤А╨╡╨┤╤Б╤В╨░╨▓╨╗╨╡╨╜╨╜╤П ╤Б╤Ц╨╝'╤Ч."
            },
            "table": {
              "headers": [
                "Croatian",
                "English",
                {
                  "en": "Translation",
                  "ru": "╨Я╨╡╤А╨╡╨▓╨╛╨┤",
                  "ua": "╨Я╨╡╤А╨╡╨║╨╗╨░╨┤"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "otac / tata",
                    "father / dad",
                    {
                      "en": "╨╛╤В╨╡╤Ж / ╨┐╨░╨┐╨░",
                      "ru": "╨╛╤В╨╡╤Ж / ╨┐╨░╨┐╨░",
                      "ua": "╨▒╨░╤В╤М╨║╨╛ / ╤В╨░╤В╨╛"
                    }
                  ]
                },
                {
                  "cells": [
                    "majka / mama",
                    "mother / mom",
                    {
                      "en": "╨╝╨░╤В╤М / ╨╝╨░╨╝╨░",
                      "ru": "╨╝╨░╤В╤М / ╨╝╨░╨╝╨░",
                      "ua": "╨╝╨░╤В╨╕ / ╨╝╨░╨╝╨░"
                    }
                  ]
                },
                {
                  "cells": [
                    "brat",
                    "brother",
                    {
                      "en": "╨▒╤А╨░╤В",
                      "ru": "brat",
                      "ua": "╨▒╤А╨░╤В"
                    }
                  ]
                },
                {
                  "cells": [
                    "sestra",
                    "sister",
                    {
                      "en": "╤Б╨╡╤Б╤В╤А╨░",
                      "ru": "╤Б╨╡╤Б╤В╤А╨░",
                      "ua": "╤Б╨╡╤Б╤В╤А╨░"
                    }
                  ]
                },
                {
                  "cells": [
                    "sin",
                    "son",
                    {
                      "en": "╤Б╤Л╨╜",
                      "ru": "╤Б╤Л╨╜",
                      "ua": "╤Б╨╕╨╜"
                    }
                  ]
                },
                {
                  "cells": [
                    "k─Зi / k─Зer",
                    "daughter",
                    {
                      "en": "╨┤╨╛╤З╤М",
                      "ru": "╨┤╨╛╨╜╤М╨║╨░",
                      "ua": "╨┤╨╛╨╜╤М╨║╨░"
                    }
                  ]
                },
                {
                  "cells": [
                    "djed / deda",
                    "grandfather",
                    {
                      "en": "╨┤╨╡╨┤╤Г╤И╨║╨░",
                      "ru": "╨┤╨╡╨┤╤Г╤И╨║╨░",
                      "ua": "╨┤╤Ц╨┤╤Г╤Б╤М"
                    }
                  ]
                },
                {
                  "cells": [
                    "baka",
                    "grandmother",
                    {
                      "en": "╨▒╨░╨▒╤Г╤И╨║╨░",
                      "ru": "╨▒╨░╨▒╤Г╤И╨║╨░",
                      "ua": "╨▒╨░╨▒╤Г╤Б╤П"
                    }
                  ]
                },
                {
                  "cells": [
                    "mu┼╛ / suprug",
                    "husband",
                    {
                      "en": "╨╝╤Г╨╢ / ╤Б╤Г╨┐╤А╤Г╨│",
                      "ru": "╨╝╤Г╨╢ / ╤Б╤Г╨┐╤А╤Г╨│",
                      "ua": "╤З╨╛╨╗╨╛╨▓╤Ц╨║ / ╤З╨╛╨╗╨╛╨▓╤Ц╨║"
                    }
                  ]
                },
                {
                  "cells": [
                    "┼╛ena / supruga",
                    "wife",
                    {
                      "en": "╨╢╨╡╨╜╨░ / ╤Б╤Г╨┐╤А╤Г╨│╨░",
                      "ru": "╨╢╨╡╨╜╨░ / ╤Б╤Г╨┐╤А╤Г╨│╨░",
                      "ua": "╨┤╤А╤Г╨╢╨╕╨╜╨░"
                    }
                  ]
                },
                {
                  "cells": [
                    "ujak",
                    "uncle (mother's side)",
                    {
                      "en": "╨┤╤П╨┤╤П (╨┐╨╛ ╨╝╨░╨╝╨╡)",
                      "ru": "╨┤╤П╨┤╤П (╨┐╨╛ ╨╝╨░╨╝╨╡)",
                      "ua": "╨┤╤П╨┤╤М╨║╨╛ (╨┐╨╛ ╨╝╨░╨╝╤Ц)"
                    }
                  ]
                },
                {
                  "cells": [
                    "stric",
                    "uncle (father's side)",
                    {
                      "en": "╨┤╤П╨┤╤П (╨┐╨╛ ╨┐╨░╨┐╨╡)",
                      "ru": "╨┤╤П╨┤╤П (╨┐╨╛ ╨┐╨░╨┐╨╡)",
                      "ua": "╨┤╤П╨┤╤М╨║╨╛ (╨┐╨╛ ╤В╨░╤В╨╛╨▓╤Ц)"
                    }
                  ]
                },
                {
                  "cells": [
                    "teta / tetka",
                    "aunt",
                    {
                      "en": "╤В╤С╤В╤П",
                      "ru": "╤В╤С╤В╤П",
                      "ua": "╤В╤Ц╤В╨║╨░"
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
      "ru": "╨Ь╨╡╤Б╤В╨╛╨╕╨╝╨╡╨╜╨╕╤П ╨╕ ╨┐╤А╨╡╨┤╨╗╨╛╨│╨╕",
      "ua": "╨Ч╨░╨╣╨╝╨╡╨╜╨╜╨╕╨║╨╕ ╤В╨░ ╨┐╤А╨╕╨╣╨╝╨╡╨╜╨╜╨╕╨║╨╕"
    },
    "icon": "ЁЯФЧ",
    "sections": [
      {
        "id": "pronoun_cases",
        "title": {
          "en": "Personal Pronouns Declension",
          "ru": "╨б╨║╨╗╨╛╨╜╨╡╨╜╨╕╨╡ ╨╝╨╡╤Б╤В╨╛╨╕╨╝╨╡╨╜╨╕╨╣",
          "ua": "╨Т╤Ц╨┤╨╝╤Ц╨╜╤О╨▓╨░╨╜╨╜╤П ╨╖╨░╨╣╨╝╨╡╨╜╨╜╨╕╨║╤Ц╨▓"
        },
        "icon": "ЁЯСе",
        "subsections": [
          {
            "title": {
              "en": "Personal Pronouns Cases",
              "ru": "╨Я╨░╨┤╨╡╨╢╨╕ ╨╗╨╕╤З╨╜╤Л╤Е ╨╝╨╡╤Б╤В╨╛╨╕╨╝╨╡╨╜╨╕╨╣",
              "ua": "╨Т╤Ц╨┤╨╝╤Ц╨╜╨║╨╕ ╨╛╤Б╨╛╨▒╨╛╨▓╨╕╤Е ╨╖╨░╨╣╨╝╨╡╨╜╨╜╨╕╨║╤Ц╨▓"
            },
            "text": {
              "en": "Declension of personal pronouns (ja, ti, on, ona, ono, mi, vi, oni) across all cases. Short forms (enclitics) are listed first, followed by long forms in parentheses.",
              "ru": "╨б╨║╨╗╨╛╨╜╨╡╨╜╨╕╨╡ ╨╗╨╕╤З╨╜╤Л╤Е ╨╝╨╡╤Б╤В╨╛╨╕╨╝╨╡╨╜╨╕╨╣ ╨┐╨╛ ╨┐╨░╨┤╨╡╨╢╨░╨╝. ╨Ъ╤А╨░╤В╨║╨╕╨╡ (╤Н╨╜╨║╨╗╨╕╤В╨╕╨║╨╕) ╤Д╨╛╤А╨╝╤Л ╤Г╨║╨░╨╖╨░╨╜╤Л ╨┐╨╡╤А╨▓╤Л╨╝╨╕, ╨┤╨╗╨╕╨╜╨╜╤Л╨╡ ╤Д╨╛╤А╨╝╤Л ╨┐╤А╨╕╨▓╨╡╨┤╨╡╨╜╤Л ╨▓ ╤Б╨║╨╛╨▒╨║╨░╤Е.",
              "ua": "╨Т╤Ц╨┤╨╝╤Ц╨╜╤О╨▓╨░╨╜╨╜╤П ╨╛╤Б╨╛╨▒╨╛╨▓╨╕╤Е ╨╖╨░╨╣╨╝╨╡╨╜╨╜╨╕╨║╤Ц╨▓ ╨╖╨░ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╨░╨╝╨╕. ╨Ъ╤А╨░╤В╨║╤Ц (╨╡╨╜╨║╨╗╤Ц╤В╨╕╤З╨╜╤Ц) ╤Д╨╛╤А╨╝╨╕ ╨▓╨║╨░╨╖╨░╨╜╤Ц ╨┐╨╡╤А╤И╨╕╨╝╨╕, ╨┤╨╛╨▓╨│╤Ц ╤Д╨╛╤А╨╝╨╕ ╨╜╨░╨▓╨╡╨┤╨╡╨╜╤Ц ╨▓ ╨┤╤Г╨╢╨║╨░╤Е."
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
          "ru": "╨Я╤А╨╡╨┤╨╗╨╛╨│╨╕ ╨╕ ╨┐╨░╨┤╨╡╨╢╨╕",
          "ua": "╨Я╤А╨╕╨╣╨╝╨╡╨╜╨╜╨╕╨║╨╕ ╤В╨░ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╨╕"
        },
        "icon": "ЁЯЧ║я╕П",
        "subsections": [
          {
            "title": {
              "en": "Prepositions Chart",
              "ru": "╨в╨░╨▒╨╗╨╕╤Ж╨░ ╨┐╤А╨╡╨┤╨╗╨╛╨│╨╛╨▓",
              "ua": "╨в╨░╨▒╨╗╨╕╤Ж╤П ╨┐╤А╨╕╨╣╨╝╨╡╨╜╨╜╨╕╨║╤Ц╨▓"
            },
            "text": {
              "en": "In Croatian, each preposition requires a specific noun case. Below is a summary of the most common prepositions grouped by the case they govern.",
              "ru": "╨Т ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╛╨╝ ╤П╨╖╤Л╨║╨╡ ╨║╨░╨╢╨┤╤Л╨╣ ╨┐╤А╨╡╨┤╨╗╨╛╨│ ╤В╤А╨╡╨▒╤Г╨╡╤В ╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╜╨╛╨│╨╛ ╨┐╨░╨┤╨╡╨╢╨░. ╨Э╨╕╨╢╨╡ ╨┐╤А╨╕╨▓╨╡╨┤╨╡╨╜╨░ ╤В╨░╨▒╨╗╨╕╤Ж╨░ ╨╜╨░╨╕╨▒╨╛╨╗╨╡╨╡ ╤Г╨┐╨╛╤В╤А╨╡╨▒╨╗╤П╨╡╨╝╤Л╤Е ╨┐╤А╨╡╨┤╨╗╨╛╨│╨╛╨▓, ╤Б╨│╤А╤Г╨┐╨┐╨╕╤А╨╛╨▓╨░╨╜╨╜╤Л╤Е ╨┐╨╛ ╨┐╨░╨┤╨╡╨╢╨░╨╝.",
              "ua": "╨Т ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц╨╣ ╨╝╨╛╨▓╤Ц ╨║╨╛╨╢╨╡╨╜ ╨┐╤А╨╕╨╣╨╝╨╡╨╜╨╜╨╕╨║ ╨▓╨╕╨╝╨░╨│╨░╤Ф ╨┐╨╡╨▓╨╜╨╛╨│╨╛ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╨░. ╨Э╨╕╨╢╤З╨╡ ╨╜╨░╨▓╨╡╨┤╨╡╨╜╨░ ╤В╨░╨▒╨╗╨╕╤Ж╤П ╨╜╨░╨╣╤Г╨╢╨╕╨▓╨░╨╜╤Ц╤И╨╕╤Е ╨┐╤А╨╕╨╣╨╝╨╡╨╜╨╜╨╕╨║╤Ц╨▓, ╨╖╨│╤А╤Г╨┐╨╛╨▓╨░╨╜╨╕╤Е ╨╖╨░ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╨░╨╝╨╕."
            },
            "table": {
              "headers": [
                "Case",
                "Prepositions",
                {
                  "en": "English Meaning",
                  "ru": "╨Ч╨╜╨░╤З╨╡╨╜╨╕╨╡",
                  "ua": "╨Ч╨╜╨░╤З╨╡╨╜╨╜╤П"
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
                      "ru": "╨▒╨╡╨╖, ╤Г, ╨╕╨╖, ╨▒╨╗╨╕╨╖╨║╨╛, ╨┤╨╛, ╨╛╤В",
                      "ua": "╨▒╨╡╨╖, ╤Г, ╨╖, ╨▒╨╗╨╕╨╖╤М╨║╨╛, ╨┤╨╛, ╨▓╤Ц╨┤"
                    },
                    "bez ┼бe─Зera, kod prijatelja, iz ureda"
                  ]
                },
                {
                  "cells": [
                    "Dativ",
                    "k / ka, prema",
                    {
                      "en": "towards, according to",
                      "ru": "╨║, ╨┐╨╛ ╨╜╨░╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤О ╨║",
                      "ua": "╨┤╨╛, ╤Г ╨╜╨░╨┐╤А╤П╨╝╨║╤Г ╨┤╨╛"
                    },
                    "idem k lije─Нniku, prema gradu"
                  ]
                },
                {
                  "cells": [
                    "Akuzativ",
                    "u, na (motion), kroz, za",
                    {
                      "en": "into, onto, through, for",
                      "ru": "╨▓, ╨╜╨░ (╨┤╨▓╨╕╨╢╨╡╨╜╨╕╨╡), ╤З╨╡╤А╨╡╨╖, ╨┤╨╗╤П",
                      "ua": "╨▓, ╨╜╨░ (╤А╤Г╤Е), ╤З╨╡╤А╨╡╨╖, ╨┤╨╗╤П"
                    },
                    "idem u ╤И╨║╨╛╨╗╤Г, stavi na stol, za tebe"
                  ]
                },
                {
                  "cells": [
                    "Lokativ",
                    "u, na (location), o, po",
                    {
                      "en": "in, on (static), about, along",
                      "ru": "╨▓, ╨╜╨░ (╨╝╨╡╤Б╤В╨╛), ╨╛, ╨┐╨╛",
                      "ua": "╨▓, ╨╜╨░ (╨╝╤Ц╤Б╤Ж╨╡), ╨┐╤А╨╛, ╨┐╨╛"
                    },
                    "┼╛ivim u Zagrebu, na stolu, o knjizi"
                  ]
                },
                {
                  "cells": [
                    "Instrumental",
                    "s / sa, pod, nad, pred",
                    {
                      "en": "with, under, above, in front of",
                      "ru": "╤Б, ╨┐╨╛╨┤, ╨╜╨░╨┤, ╨┐╨╡╤А╨╡╨┤",
                      "ua": "╨╖, ╨┐╤Ц╨┤, ╨╜╨░╨┤, ╨┐╨╡╤А╨╡╨┤"
                    },
                    "s bratom, pod stolom, pred ku─Зom"
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
      "ru": "╨Я╤А╨╛╨┤╨▓╨╕╨╜╤Г╤В╨░╤П ╨│╤А╨░╨╝╨╝╨░╤В╨╕╨║╨░",
      "ua": "╨Я╤А╨╛╤Б╤Г╨╜╤Г╤В╨░ ╨│╤А╨░╨╝╨░╤В╨╕╨║╨░"
    },
    "icon": "ЁЯОУ",
    "sections": [
      {
        "id": "adjective_declension",
        "title": {
          "en": "Adjective Declension",
          "ru": "╨б╨║╨╗╨╛╨╜╨╡╨╜╨╕╨╡ ╨┐╤А╨╕╨╗╨░╨│╨░╤В╨╡╨╗╤М╨╜╤Л╤Е",
          "ua": "╨Т╤Ц╨┤╨╝╤Ц╨╜╤О╨▓╨░╨╜╨╜╤П ╨┐╤А╨╕╨║╨╝╨╡╤В╨╜╨╕╨║╤Ц╨▓"
        },
        "icon": "ЁЯОи",
        "subsections": [
          {
            "title": {
              "en": "Definite vs Indefinite",
              "ru": "╨Ю╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╜╤Л╨╡ ╨╕ ╨╜╨╡╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╜╤Л╨╡",
              "ua": "╨Т╨╕╨╖╨╜╨░╤З╨╡╨╜╤Ц ╤В╨░ ╨╜╨╡╨▓╨╕╨╖╨╜╨░╤З╨╡╨╜╤Ц"
            },
            "text": {
              "en": "Croatian adjectives have two forms: Indefinite (Neodre─Сeni - answers 'kakav?' / what kind of?) and Definite (Odre─Сeni - answers 'koji?' / which one?). Here are their nominative endings:",
              "ru": "╨е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╡ ╨┐╤А╨╕╨╗╨░╨│╨░╤В╨╡╨╗╤М╨╜╤Л╨╡ ╨╕╨╝╨╡╤О╤В ╨┤╨▓╨╡ ╤Д╨╛╤А╨╝╤Л: ╨Э╨╡╨╛╨┐╤А╨╡╨┤╨╡╨╗╤С╨╜╨╜╤Г╤О (╨╛╤В╨▓╨╡╤З╨░╨╡╤В ╨╜╨░ ╨▓╨╛╨┐╤А╨╛╤Б 'kakav?' / ╨║╨░╨║╨╛╨╣?) ╨╕ ╨Ю╨┐╤А╨╡╨┤╨╡╨╗╤С╨╜╨╜╤Г╤О (╨╛╤В╨▓╨╡╤З╨░╨╡╤В ╨╜╨░ 'koji?' / ╨║╨░╨║╨╛╨╣ ╨╕╨╝╨╡╨╜╨╜╨╛?). ╨Т╨╛╤В ╨╛╨║╨╛╨╜╤З╨░╨╜╨╕╤П ╨▓ ╨╕╨╝╨╡╨╜╨╕╤В╨╡╨╗╤М╨╜╨╛╨╝ ╨┐╨░╨┤╨╡╨╢╨╡:",
              "ua": "╨е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц ╨┐╤А╨╕╨║╨╝╨╡╤В╨╜╨╕╨║╨╕ ╨╝╨░╤О╤В╤М ╨┤╨▓╤Ц ╤Д╨╛╤А╨╝╨╕: ╨Э╨╡╨▓╨╕╨╖╨╜╨░╤З╨╡╨╜╤Г (╨▓╤Ц╨┤╨┐╨╛╨▓╤Ц╨┤╨░╤Ф ╨╜╨░ ╨┐╨╕╤В╨░╨╜╨╜╤П 'kakav?' / ╤П╨║╨╕╨╣?) ╤В╨░ ╨Т╨╕╨╖╨╜╨░╤З╨╡╨╜╤Г (╨▓╤Ц╨┤╨┐╨╛╨▓╤Ц╨┤╨░╤Ф ╨╜╨░ 'koji?' / ╤П╨║╨╕╨╣ ╤Б╨░╨╝╨╡?). ╨Ю╤Б╤М ╨╖╨░╨║╤Ц╨╜╤З╨╡╨╜╨╜╤П ╨▓ ╨╜╨░╨╖╨╕╨▓╨╜╨╛╨╝╤Г ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╤Г:"
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
                    "nova ku─Зa (a new house)",
                    "nova ku─Зa (the new house)"
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
          "ru": "╨У╨╗╨░╨│╨╛╨╗╤М╨╜╤Л╨╣ ╨▓╨╕╨┤",
          "ua": "╨Ф╤Ц╤Ф╤Б╨╗╤Ц╨▓╨╜╨╕╨╣ ╨▓╨╕╨┤"
        },
        "icon": "тП│",
        "subsections": [
          {
            "title": {
              "en": "Aspectual Pairs",
              "ru": "╨Т╨╕╨┤╨╛╨▓╤Л╨╡ ╨┐╨░╤А╤Л ╨│╨╗╨░╨│╨╛╨╗╨╛╨▓",
              "ua": "╨Т╨╕╨┤╨╛╨▓╤Ц ╨┐╨░╤А╨╕ ╨┤╤Ц╤Ф╤Б╨╗╤Ц╨▓"
            },
            "text": {
              "en": "Croatian verbs are either Imperfective (Nesvr┼бeni - ongoing actions) or Perfective (Svr┼бeni - completed actions). Many verbs form pairs by changing prefixes or suffixes:",
              "ru": "╨е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╡ ╨│╨╗╨░╨│╨╛╨╗╤Л ╨▒╤Л╨▓╨░╤О╤В ╨╜╨╡╤Б╨╛╨▓╨╡╤А╤И╨╡╨╜╨╜╨╛╨│╨╛ ╨▓╨╕╨┤╨░ (Nesvr┼бeni - ╨┤╨╗╨╕╤В╨╡╨╗╤М╨╜╨╛╨╡ ╨┤╨╡╨╣╤Б╤В╨▓╨╕╨╡) ╨╕╨╗╨╕ ╤Б╨╛╨▓╨╡╤А╤И╨╡╨╜╨╜╨╛╨│╨╛ ╨▓╨╕╨┤╨░ (Svr┼бeni - ╨╖╨░╨▓╨╡╤А╤И╨╡╨╜╨╜╨╛╨╡ ╨┤╨╡╨╣╤Б╤В╨▓╨╕╨╡). ╨Ь╨╜╨╛╨│╨╕╨╡ ╨│╨╗╨░╨│╨╛╨╗╤Л ╨╛╨▒╤А╨░╨╖╤Г╤О╤В ╨▓╨╕╨┤╨╛╨▓╤Л╨╡ ╨┐╨░╤А╤Л ╤Б ╨┐╨╛╨╝╨╛╤Й╤М╤О ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╤П ╨┐╤А╨╕╤Б╤В╨░╨▓╨╛╨║ ╨╕╨╗╨╕ ╤Б╤Г╤Д╤Д╨╕╨║╤Б╨╛╨▓:",
              "ua": "╨е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц ╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨░ ╨▒╤Г╨▓╨░╤О╤В╤М ╨╜╨╡╨┤╨╛╨║╨╛╨╜╨░╨╜╨╛╨│╨╛ ╨▓╨╕╨┤╤Г (Nesvr┼бeni - ╤В╤А╨╕╨▓╨░╨╗╨░ ╨┤╤Ц╤П) ╨░╨▒╨╛ ╨┤╨╛╨║╨╛╨╜╨░╨╜╨╛╨│╨╛ ╨▓╨╕╨┤╤Г (Svr┼бeni - ╨╖╨░╨▓╨╡╤А╤И╨╡╨╜╨░ ╨┤╤Ц╤П). ╨С╨░╨│╨░╤В╨╛ ╨┤╤Ц╤Ф╤Б╨╗╤Ц╨▓ ╤Г╤В╨▓╨╛╤А╤О╤О╤В╤М ╨▓╨╕╨┤╨╛╨▓╤Ц ╨┐╨░╤А╨╕ ╨╖╨░ ╨┤╨╛╨┐╨╛╨╝╨╛╨│╨╛╤О ╨╖╨╝╤Ц╨╜╨╕ ╨┐╤А╨╡╤Д╤Ц╨║╤Б╤Ц╨▓ ╨░╨▒╨╛ ╤Б╤Г╤Д╤Ц╨║╤Б╤Ц╨▓:"
            },
            "table": {
              "headers": [
                "Imperfective Verb",
                "Perfective Verb",
                {
                  "en": "English Meaning",
                  "ru": "╨Ч╨╜╨░╤З╨╡╨╜╨╕╨╡",
                  "ua": "╨Ч╨╜╨░╤З╨╡╨╜╨╜╤П"
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
                      "ru": "╨┐╨╕╤Б╨░╤В╤М / ╨╜╨░╨┐╨╕╤Б╨░╤В╤М",
                      "ua": "╨┐╨╕╤Б╨░╤В╨╕ / ╨╜╨░╨┐╨╕╤Б╨░╤В╨╕"
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
                      "ru": "╨┐╨╛╨║╤Г╨┐╨░╤В╤М / ╨║╤Г╨┐╨╕╤В╤М",
                      "ua": "╨║╤Г╨┐╤Г╨▓╨░╤В╨╕ / ╨║╤Г╨┐╨╕╤В╨╕"
                    },
                    "Suffix change (-ovati -> -iti)"
                  ]
                },
                {
                  "cells": [
                    "dolaziti",
                    "do─Зi",
                    {
                      "en": "to come",
                      "ru": "╨┐╤А╨╕╤Е╨╛╨┤╨╕╤В╤М / ╨┐╤А╨╕╨╣╤В╨╕",
                      "ua": "╨┐╤А╨╕╤Е╨╛╨┤╨╕╤В╨╕ / ╨┐╤А╨╕╨╣╤В╨╕"
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
                      "ru": "╨╛╤В╨║╤А╤Л╨▓╨░╤В╤М / ╨╛╤В╨║╤А╤Л╤В╤М",
                      "ua": "╨▓╤Ц╨┤╨║╤А╨╕╨▓╨░╤В╨╕ / ╨▓╤Ц╨┤╨║╤А╨╕╤В╨╕"
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
          "ru": "╨Я╤А╨╕╨┤╨░╤В╨╛╤З╨╜╤Л╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╡╨╜╨╕╤П",
          "ua": "╨Я╤Ц╨┤╤А╤П╨┤╨╜╤Ц ╤А╨╡╤З╨╡╨╜╨╜╤П"
        },
        "icon": "тЫУя╕П",
        "subsections": [
          {
            "title": {
              "en": "Types of Clauses",
              "ru": "╨в╨╕╨┐╤Л ╨┐╤А╨╕╨┤╨░╤В╨╛╤З╨╜╤Л╤Е",
              "ua": "╨в╨╕╨┐╨╕ ╨┐╤Ц╨┤╤А╤П╨┤╨╜╨╕╤Е ╤А╨╡╤З╨╡╨╜╤М"
            },
            "text": {
              "en": "Subordinate clauses are introduced by specific conjunctions. Here is a summary of the main types:",
              "ru": "╨Я╤А╨╕╨┤╨░╤В╨╛╤З╨╜╤Л╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╡╨╜╨╕╤П ╨▓╨▓╨╛╨┤╤П╤В╤Б╤П ╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╜╤Л╨╝╨╕ ╤Б╨╛╤О╨╖╨░╨╝╨╕. ╨Т╨╛╤В ╨╛╤Б╨╜╨╛╨▓╨╜╤Л╨╡ ╤В╨╕╨┐╤Л:",
              "ua": "╨Я╤Ц╨┤╤А╤П╨┤╨╜╤Ц ╤А╨╡╤З╨╡╨╜╨╜╤П ╨▓╨▓╨╛╨┤╤П╤В╤М╤Б╤П ╨┐╨╡╨▓╨╜╨╕╨╝╨╕ ╤Б╨┐╨╛╨╗╤Г╤З╨╜╨╕╨║╨░╨╝╨╕. ╨Ю╤Б╤М ╨╛╤Б╨╜╨╛╨▓╨╜╤Ц ╤В╨╕╨┐╨╕:"
            },
            "table": {
              "headers": [
                "Clause Type",
                "Conjunctions",
                {
                  "en": "Meaning",
                  "ru": "╨Ч╨╜╨░╤З╨╡╨╜╨╕╨╡",
                  "ua": "╨Ч╨╜╨░╤З╨╡╨╜╨╜╤П"
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
                      "ru": "╨╡╤Б╨╗╨╕ / ╨║╨╛╨│╨┤╨░",
                      "ua": "╤П╨║╤Й╨╛ / ╨║╨╛╨╗╨╕"
                    },
                    "Ako bude padala ki┼бa, ne─Зemo i─Зi."
                  ]
                },
                {
                  "cells": [
                    "Causal (Uzro─Нne)",
                    "jer, zato ┼бto, budu─Зi da",
                    {
                      "en": "because / since",
                      "ru": "╨┐╨╛╤В╨╛╨╝╤Г ╤З╤В╨╛ / ╤В╨░╨║ ╨║╨░╨║",
                      "ua": "╤В╨╛╨╝╤Г ╤Й╨╛ / ╨╛╤Б╨║╤Ц╨╗╤М╨║╨╕"
                    },
                    "Ne idem jer sam umoran."
                  ]
                },
                {
                  "cells": [
                    "Temporal (Vremenske)",
                    "kad, dok, nakon ┼бto",
                    {
                      "en": "when / while / after",
                      "ru": "╨║╨╛╨│╨┤╨░ / ╨┐╨╛╨║╨░ / ╨┐╨╛╤Б╨╗╨╡ ╤В╨╛╨│╨╛ ╨║╨░╨║",
                      "ua": "╨║╨╛╨╗╨╕ / ╨┐╨╛╨║╨╕ / ╨┐╤Ц╤Б╨╗╤П ╤В╨╛╨│╨╛ ╤П╨║"
                    },
                    "Dok ─Нitam, pijem kavu."
                  ]
                },
                {
                  "cells": [
                    "Concessive (Dopusne)",
                    "iako, premda, makar",
                    {
                      "en": "although / even if",
                      "ru": "╤Е╨╛╤В╤П / ╨┐╤Г╤Б╤В╤М ╨┤╨░╨╢╨╡",
                      "ua": "╤Е╨╛╤З╨░ / ╨╜╨░╨▓╤Ц╤В╤М ╤П╨║╤Й╨╛"
                    },
                    "Iako je hladno, ┼бetamo."
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
          "ru": "╨Я╨░╤Б╤Б╨╕╨▓╨╜╤Л╨╣ ╨╖╨░╨╗╨╛╨│",
          "ua": "╨Я╨░╤Б╨╕╨▓╨╜╨╕╨╣ ╤Б╤В╨░╨╜"
        },
        "icon": "ЁЯФТ",
        "subsections": [
          {
            "title": {
              "en": "Passive Construction",
              "ru": "╨Ъ╨╛╨╜╤Б╤В╤А╤Г╨║╤Ж╨╕╤П ╨┐╨░╤Б╤Б╨╕╨▓╨░",
              "ua": "╨Ъ╨╛╨╜╤Б╤В╤А╤Г╨║╤Ж╤Ц╤П ╨┐╨░╤Б╨╕╨▓╤Г"
            },
            "text": {
              "en": "Passive voice is constructed either with the verb 'biti' and the passive participle, or using the reflexive particle 'se':",
              "ru": "╨Я╨░╤Б╤Б╨╕╨▓╨╜╤Л╨╣ ╨╖╨░╨╗╨╛╨│ ╨╛╨▒╤А╨░╨╖╤Г╨╡╤В╤Б╤П ╨╗╨╕╨▒╨╛ ╤Б ╨┐╨╛╨╝╨╛╤Й╤М╤О ╨│╨╗╨░╨│╨╛╨╗╨░ 'biti' ╨╕ ╤Б╤В╤А╨░╨┤╨░╤В╨╡╨╗╤М╨╜╨╛╨│╨╛ ╨┐╤А╨╕╤З╨░╤Б╤В╨╕╤П, ╨╗╨╕╨▒╨╛ ╤Б ╨┐╨╛╨╝╨╛╤Й╤М╤О ╨▓╨╛╨╖╨▓╤А╨░╤В╨╜╨╛╨╣ ╤З╨░╤Б╤В╨╕╤Ж╤Л 'se':",
              "ua": "╨Я╨░╤Б╨╕╨▓╨╜╨╕╨╣ ╤Б╤В╨░╨╜ ╤Г╤В╨▓╨╛╤А╤О╤Ф╤В╤М╤Б╤П ╨░╨▒╨╛ ╨╖╨░ ╨┤╨╛╨┐╨╛╨╝╨╛╨│╨╛╤О ╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨░ 'biti' ╤В╨░ ╨┐╨░╤Б╨╕╨▓╨╜╨╛╨│╨╛ ╨┤╤Ц╤Ф╨┐╤А╨╕╨║╨╝╨╡╤В╨╜╨╕╨║╨░, ╨░╨▒╨╛ ╨╖╨░ ╨┤╨╛╨┐╨╛╨╝╨╛╨│╨╛╤О ╨╖╨▓╨╛╤А╨╛╤В╨╜╨╛╤Ч ╤З╨░╤Б╤В╨║╨╕ 'se':"
            },
            "table": {
              "headers": [
                "Type",
                "Construction",
                "Example",
                {
                  "en": "Translation",
                  "ru": "╨Я╨╡╤А╨╡╨▓╨╛╨┤",
                  "ua": "╨Я╨╡╤А╨╡╨║╨╗╨░╨┤"
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
                      "ru": "╨Ъ╨╜╨╕╨│╨░ ╨╜╨░╨┐╨╕╤Б╨░╨╜╨░.",
                      "ua": "╨Ъ╨╜╨╕╨│╨░ ╨╜╨░╨┐╨╕╤Б╨░╨╜╨░."
                    }
                  ]
                },
                {
                  "cells": [
                    "Reflexive Passive",
                    "verb + reflexive 'se'",
                    "Ku─Зa se gradi.",
                    {
                      "en": "The house is being built.",
                      "ru": "╨Ф╨╛╨╝ ╤Б╤В╤А╨╛╨╕╤В╤Б╤П.",
                      "ua": "╨С╤Г╨┤╨╕╨╜╨╛╨║ ╨▒╤Г╨┤╤Г╤Ф╤В╤М╤Б╤П."
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
          "ru": "╨б╤В╨╡╨┐╨╡╨╜╨╕ ╤Б╤А╨░╨▓╨╜╨╡╨╜╨╕╤П ╨┐╤А╨╕╨╗╨░╨│╨░╤В╨╡╨╗╤М╨╜╤Л╤Е",
          "ua": "╨б╤В╤Г╨┐╨╡╨╜╤Ц ╨┐╨╛╤А╤Ц╨▓╨╜╤П╨╜╨╜╤П ╨┐╤А╨╕╨║╨╝╨╡╤В╨╜╨╕╨║╤Ц╨▓"
        },
        "icon": "ЁЯУИ",
        "subsections": [
          {
            "title": {
              "en": "Positive, Comparative, Superlative",
              "ru": "╨Я╨╛╨╗╨╛╨╢╨╕╤В╨╡╨╗╤М╨╜╨░╤П, ╤Б╤А╨░╨▓╨╜╨╕╤В╨╡╨╗╤М╨╜╨░╤П, ╨┐╤А╨╡╨▓╨╛╤Б╤Е╨╛╨┤╨╜╨░╤П",
              "ua": "╨Ч╨▓╨╕╤З╨░╨╣╨╜╨╕╨╣, ╨▓╨╕╤Й╨╕╨╣, ╨╜╨░╨╣╨▓╨╕╤Й╨╕╨╣ ╤Б╤В╤Г╨┐╨╡╨╜╤Ц"
            },
            "text": {
              "en": "Adjectives have three degrees of comparison. The comparative is formed with suffixes like -iji, -ji, or -┼бi. The superlative is extremely easy as it simply adds the prefix 'naj-' to the comparative form:",
              "ru": "╨Я╤А╨╕╨╗╨░╨│╨░╤В╨╡╨╗╤М╨╜╤Л╨╡ ╨╕╨╝╨╡╤О╤В ╤В╤А╨╕ ╤Б╤В╨╡╨┐╨╡╨╜╨╕ ╤Б╤А╨░╨▓╨╜╨╡╨╜╨╕╤П. ╨б╤А╨░╨▓╨╜╨╕╤В╨╡╨╗╤М╨╜╨░╤П ╤Б╤В╨╡╨┐╨╡╨╜╤М ╨╛╨▒╤А╨░╨╖╤Г╨╡╤В╤Б╤П ╤Б╤Г╤Д╤Д╨╕╨║╤Б╨░╨╝╨╕ -iji, -ji ╨╕╨╗╨╕ -┼бi. ╨Я╤А╨╡╨▓╨╛╤Б╤Е╨╛╨┤╨╜╨░╤П ╤Б╤В╨╡╨┐╨╡╨╜╤М ╨╛╨▒╤А╨░╨╖╤Г╨╡╤В╤Б╤П ╨╛╤З╨╡╨╜╤М ╨┐╤А╨╛╤Б╤В╨╛ тАФ ╨┤╨╛╨▒╨░╨▓╨╗╨╡╨╜╨╕╨╡╨╝ ╨┐╤А╨╕╤Б╤В╨░╨▓╨║╨╕ 'naj-' ╨║ ╤Д╨╛╤А╨╝╨╡ ╤Б╤А╨░╨▓╨╜╨╕╤В╨╡╨╗╤М╨╜╨╛╨╣ ╤Б╤В╨╡╨┐╨╡╨╜╨╕:",
              "ua": "╨Я╤А╨╕╨║╨╝╨╡╤В╨╜╨╕╨║╨╕ ╨╝╨░╤О╤В╤М ╤В╤А╨╕ ╤Б╤В╤Г╨┐╨╡╨╜╤Ц ╨┐╨╛╤А╤Ц╨▓╨╜╤П╨╜╨╜╤П. ╨Т╨╕╤Й╨╕╨╣ ╤Б╤В╤Г╨┐╤Ц╨╜╤М ╤Г╤В╨▓╨╛╤А╤О╤Ф╤В╤М╤Б╤П ╤Б╤Г╤Д╤Ц╨║╤Б╨░╨╝╨╕ -iji, -ji ╨░╨▒╨╛ -┼бi. ╨Э╨░╨╣╨▓╨╕╤Й╨╕╨╣ ╤Б╤В╤Г╨┐╤Ц╨╜╤М ╤Г╤В╨▓╨╛╤А╤О╤Ф╤В╤М╤Б╤П ╨╜╨░╨┤╨╖╨▓╨╕╤З╨░╨╣╨╜╨╛ ╨┐╤А╨╛╤Б╤В╨╛ тАФ ╨┤╨╛╨┤╨░╨▓╨░╨╜╨╜╤П╨╝ ╨┐╤А╨╡╤Д╤Ц╨║╤Б╨░ 'naj-' ╨┤╨╛ ╤Д╨╛╤А╨╝╨╕ ╨▓╨╕╤Й╨╛╨│╨╛ ╤Б╤В╤Г╨┐╨╡╨╜╤П:"
            },
            "table": {
              "headers": [
                "Positive (Pozitiv)",
                "Comparative (Komparativ)",
                "Superlative (Superlativ)",
                {
                  "en": "English Meaning",
                  "ru": "╨Ч╨╜╨░╤З╨╡╨╜╨╕╨╡",
                  "ua": "╨Ч╨╜╨░╤З╨╡╨╜╨╜╤П"
                }
              ],
              "rows": [
                {
                  "cells": [
                    "nov (new)",
                    "noviji",
                    "najnoviji",
                    {
                      "en": "new тЖТ newer тЖТ newest",
                      "ru": "╨╜╨╛╨▓╤Л╨╣ тЖТ ╨╜╨╛╨▓╨╡╨╡ тЖТ ╨╜╨╛╨▓╨╡╨╣╤И╨╕╨╣",
                      "ua": "╨╜╨╛╨▓╨╕╨╣ тЖТ ╨╜╨╛╨▓╤Ц╤И╨╕╨╣ тЖТ ╨╜╨░╨╣╨╜╨╛╨▓╤Ц╤И╨╕╨╣"
                    }
                  ]
                },
                {
                  "cells": [
                    "star (old)",
                    "stariji",
                    "najstariji",
                    {
                      "en": "old тЖТ older тЖТ oldest",
                      "ru": "╤Б╤В╨░╤А╤Л╨╣ тЖТ ╤Б╤В╨░╤А╤И╨╡ тЖТ ╤Б╤В╨░╤А╨╡╨╣╤И╨╕╨╣",
                      "ua": "╤Б╤В╨░╤А╨╕╨╣ тЖТ ╤Б╤В╨░╤А╤И╨╕╨╣ тЖТ ╨╜╨░╨╣╤Б╤В╨░╤А╤И╨╕╨╣"
                    }
                  ]
                },
                {
                  "cells": [
                    "lak (easy / light)",
                    "lak┼бi",
                    "najlak┼бi",
                    {
                      "en": "easy тЖТ easier тЖТ easiest",
                      "ru": "╨╗╨╡╨│╨║╨╕╨╣ тЖТ ╨╗╨╡╨│╤З╨╡ тЖТ ╨╗╨╡╨│╤З╨░╨╣╤И╨╕╨╣",
                      "ua": "╨╗╨╡╨│╨║╨╕╨╣ тЖТ ╨╗╨╡╨│╤И╨╕╨╣ тЖТ ╨╜╨░╨╣╨╗╨╡╨│╤И╨╕╨╣"
                    }
                  ]
                },
                {
                  "cells": [
                    "dobar (good - irregular)",
                    "bolji",
                    "najbolji",
                    {
                      "en": "good тЖТ better тЖТ best",
                      "ru": "╤Е╨╛╤А╨╛╤И╨╕╨╣ тЖТ ╨╗╤Г╤З╤И╨╡ тЖТ ╨╗╤Г╤З╤И╨╕╨╣",
                      "ua": "╨┤╨╛╨▒╤А╨╕╨╣ тЖТ ╨║╤А╨░╤Й╨╕╨╣ тЖТ ╨╜╨░╨╣╨║╤А╨░╤Й╨╕╨╣"
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
          "ru": "╨б╨╛╨│╨╗╨░╤Б╨╛╨▓╨░╨╜╨╕╨╡ ╨┐╤А╨╕╨╗╨░╨│╨░╤В╨╡╨╗╤М╨╜╤Л╤Е",
          "ua": "╨г╨╖╨│╨╛╨┤╨╢╨╡╨╜╨╜╤П ╨┐╤А╨╕╨║╨╝╨╡╤В╨╜╨╕╨║╤Ц╨▓"
        },
        "icon": "ЁЯдЭ",
        "subsections": [
          {
            "title": {
              "en": "Gender, Number, Case",
              "ru": "╨а╨╛╨┤, ╤З╨╕╤Б╨╗╨╛, ╨┐╨░╨┤╨╡╨╢",
              "ua": "╨а╤Ц╨┤, ╤З╨╕╤Б╨╗╨╛, ╨▓╤Ц╨┤╨╝╤Ц╨╜╨╛╨║"
            },
            "text": {
              "en": "Adjectives must agree with the nouns they modify in gender (masculine, feminine, neuter), number (singular, plural), and case (Nominative, Genitive, etc.). Endings change accordingly.",
              "ru": "╨Я╤А╨╕╨╗╨░╨│╨░╤В╨╡╨╗╤М╨╜╤Л╨╡ ╨╛╨▒╤П╨╖╨░╤В╨╡╨╗╤М╨╜╨╛ ╤Б╨╛╨│╨╗╨░╤Б╤Г╤О╤В╤Б╤П ╤Б ╤Б╤Г╤Й╨╡╤Б╤В╨▓╨╕╤В╨╡╨╗╤М╨╜╤Л╨╝╨╕, ╨║ ╨║╨╛╤В╨╛╤А╤Л╨╝ ╨╛╨╜╨╕ ╨╛╤В╨╜╨╛╤Б╤П╤В╤Б╤П, ╨▓ ╤А╨╛╨┤╨╡, ╤З╨╕╤Б╨╗╨╡ ╨╕ ╨┐╨░╨┤╨╡╨╢╨╡. ╨Ю╨║╨╛╨╜╤З╨░╨╜╨╕╤П ╨╕╨╖╨╝╨╡╨╜╤П╤О╤В╤Б╤П ╤Б╨╛╨╛╤В╨▓╨╡╤В╤Б╤В╨▓╤Г╤О╤Й╨╕╨╝ ╨╛╨▒╤А╨░╨╖╨╛╨╝.",
              "ua": "╨Я╤А╨╕╨║╨╝╨╡╤В╨╜╨╕╨║╨╕ ╨╛╨▒╨╛╨▓'╤П╨╖╨║╨╛╨▓╨╛ ╤Г╨╖╨│╨╛╨┤╨╢╤Г╤О╤В╤М╤Б╤П ╨╖ ╤Ц╨╝╨╡╨╜╨╜╨╕╨║╨░╨╝╨╕, ╨┤╨╛ ╤П╨║╨╕╤Е ╨▓╨╛╨╜╨╕ ╨▓╤Ц╨┤╨╜╨╛╤Б╤П╤В╤М╤Б╤П, ╤Г ╤А╨╛╨┤╤Ц, ╤З╨╕╤Б╨╗╤Ц ╤В╨░ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╤Г. ╨Ч╨░╨║╤Ц╨╜╤З╨╡╨╜╨╜╤П ╨╖╨╝╤Ц╨╜╤О╤О╤В╤М╤Б╤П ╨▓╤Ц╨┤╨┐╨╛╨▓╤Ц╨┤╨╜╨╕╨╝ ╤З╨╕╨╜╨╛╨╝."
            },
            "examples": [
              {
                "hr": "lijep pas (Masc. Sing. Nom.)",
                "translation": {
                  "en": "beautiful dog",
                  "ru": "╨║╤А╨░╤Б╨╕╨▓╨░╤П ╤Б╨╛╨▒╨░╨║╨░",
                  "ua": "╨║╤А╨░╤Б╨╕╨▓╨╕╨╣ ╤Б╨╛╨▒╨░╨║╨░"
                }
              },
              {
                "hr": "lijepa ma─Нka (Fem. Sing. Nom.)",
                "translation": {
                  "en": "beautiful cat",
                  "ru": "╨║╤А╨░╤Б╨╕╨▓╨░╤П ╨║╨╛╤И╨║╨░",
                  "ua": "╨║╤А╨░╤Б╨╕╨▓╨░ ╨║╤Ц╤И╨║╨░"
                }
              },
              {
                "hr": "lijepo selo (Neut. Sing. Nom.)",
                "translation": {
                  "en": "beautiful village",
                  "ru": "╨║╤А╨░╤Б╨╕╨▓╨░╤П ╨┤╨╡╤А╨╡╨▓╨╜╤П",
                  "ua": "╨║╤А╨░╤Б╨╕╨▓╨╡ ╤Б╨╡╨╗╨╛"
                }
              },
              {
                "hr": "Vidim lijepog psa. (Masc. Sing. Acc.)",
                "translation": {
                  "en": "I see a beautiful dog.",
                  "ru": "╨п ╨▓╨╕╨╢╤Г ╨║╤А╨░╤Б╨╕╨▓╤Г╤О ╤Б╨╛╨▒╨░╨║╤Г.",
                  "ua": "╨п ╨▒╨░╤З╤Г ╨║╤А╨░╤Б╨╕╨▓╨╛╨│╨╛ ╤Б╨╛╨▒╨░╨║╤Г."
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
          "ru": "╨б╨╛╨│╨╗╨░╤Б╨╛╨▓╨░╨╜╨╕╨╡ ╤З╨╕╤Б╨╗╨╕╤В╨╡╨╗╤М╨╜╤Л╤Е",
          "ua": "╨г╨╖╨│╨╛╨┤╨╢╨╡╨╜╨╜╤П ╤З╨╕╤Б╨╗╤Ц╨▓╨╜╨╕╨║╤Ц╨▓"
        },
        "icon": "ЁЯФв",
        "subsections": [
          {
            "title": {
              "en": "The 1, 2, 3, 4 Rule",
              "ru": "╨Я╤А╨░╨▓╨╕╨╗╨╛ 1, 2, 3, 4",
              "ua": "╨Я╤А╨░╨▓╨╕╨╗╨╛ 1, 2, 3, 4"
            },
            "text": {
              "en": "In Croatian, numbers govern the case of the noun that follows them:\n- Number 1 requires Nominative Singular.\n- Numbers 2, 3, 4 require Genitive Singular.\n- Numbers 5 and above require Genitive Plural.",
              "ru": "╨Т ╤Е╨╛╤А╨▓╨░╤В╤Б╨║╨╛╨╝ ╤З╨╕╤Б╨╗╨╕╤В╨╡╨╗╤М╨╜╤Л╨╡ ╤Г╨┐╤А╨░╨▓╨╗╤П╤О╤В ╨┐╨░╨┤╨╡╨╢╨╛╨╝ ╤Б╨╗╨╡╨┤╤Г╤О╤Й╨╡╨│╨╛ ╨╖╨░ ╨╜╨╕╨╝╨╕ ╤Б╤Г╤Й╨╡╤Б╤В╨▓╨╕╤В╨╡╨╗╤М╨╜╨╛╨│╨╛:\n- ╨з╨╕╤Б╨╗╨╛ 1 ╤В╤А╨╡╨▒╤Г╨╡╤В ╨╕╨╝╨╡╨╜╨╕╤В╨╡╨╗╤М╨╜╨╛╨│╨╛ ╨┐╨░╨┤╨╡╨╢╨░ ╨╡╨┤╨╕╨╜╤Б╤В╨▓╨╡╨╜╨╜╨╛╨│╨╛ ╤З╨╕╤Б╨╗╨░ (Nom. Sing.).\n- ╨з╨╕╤Б╨╗╨░ 2, 3, 4 ╤В╤А╨╡╨▒╤Г╤О╤В ╤А╨╛╨┤╨╕╤В╨╡╨╗╤М╨╜╨╛╨│╨╛ ╨┐╨░╨┤╨╡╨╢╨░ ╨╡╨┤╨╕╨╜╤Б╤В╨▓╨╡╨╜╨╜╨╛╨│╨╛ ╤З╨╕╤Б╨╗╨░ (Gen. Sing.).\n- ╨з╨╕╤Б╨╗╨░ 5 ╨╕ ╨▓╤Л╤И╨╡ ╤В╤А╨╡╨▒╤Г╤О╤В ╤А╨╛╨┤╨╕╤В╨╡╨╗╤М╨╜╨╛╨│╨╛ ╨┐╨░╨┤╨╡╨╢╨░ ╨╝╨╜╨╛╨╢╨╡╤Б╤В╨▓╨╡╨╜╨╜╨╛╨│╨╛ ╤З╨╕╤Б╨╗╨░ (Gen. Plural).",
              "ua": "╨г ╤Е╨╛╤А╨▓╨░╤В╤Б╤М╨║╤Ц╨╣ ╨╝╨╛╨▓╤Ц ╤З╨╕╤Б╨╗╤Ц╨▓╨╜╨╕╨║╨╕ ╨║╨╡╤А╤Г╤О╤В╤М ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╨╛╨╝ ╤Ц╨╝╨╡╨╜╨╜╨╕╨║╨░, ╤Й╨╛ ╤Б╤В╨╛╤Ч╤В╤М ╨┐╤Ц╤Б╨╗╤П ╨╜╨╕╤Е:\n- ╨з╨╕╤Б╨╗╨╛ 1 ╨▓╨╕╨╝╨░╨│╨░╤Ф ╨╜╨░╨╖╨╕╨▓╨╜╨╛╨│╨╛ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╨░ ╨╛╨┤╨╜╨╕╨╜╨╕ (Nom. Sing.).\n- ╨з╨╕╤Б╨╗╨░ 2, 3, 4 ╨▓╨╕╨╝╨░╨│╨░╤О╤В╤М ╤А╨╛╨┤╨╛╨▓╨╛╨│╨╛ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╨░ ╨╛╨┤╨╜╨╕╨╜╨╕ (Gen. Sing.).\n- ╨з╨╕╤Б╨╗╨░ 5 ╤Ц ╨▒╤Ц╨╗╤М╤И╨╡ ╨▓╨╕╨╝╨░╨│╨░╤О╤В╤М ╤А╨╛╨┤╨╛╨▓╨╛╨│╨╛ ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╨░ ╨╝╨╜╨╛╨╢╨╕╨╜╨╕ (Gen. Plural)."
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
                    "dva prozora / ─Нetiri prozora",
                    "two windows / four windows"
                  ]
                },
                {
                  "cells": [
                    "5+",
                    "Genitiv Mno┼╛ina",
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
          "en": "Word Order (Red rije─Нi)",
          "ru": "╨Я╨╛╤А╤П╨┤╨╛╨║ ╤Б╨╗╨╛╨▓",
          "ua": "╨Я╨╛╤А╤П╨┤╨╛╨║ ╤Б╨╗╤Ц╨▓"
        },
        "icon": "тЖФя╕П",
        "subsections": [
          {
            "title": {
              "en": "Free Word Order",
              "ru": "╨б╨▓╨╛╨▒╨╛╨┤╨╜╤Л╨╣ ╨┐╨╛╤А╤П╨┤╨╛╨║ ╤Б╨╗╨╛╨▓",
              "ua": "╨Т╤Ц╨╗╤М╨╜╨╕╨╣ ╨┐╨╛╤А╤П╨┤╨╛╨║ ╤Б╨╗╤Ц╨▓"
            },
            "text": {
              "en": "Croatian has a free word order due to its rich case system (meaning the subject, verb, and object can swap places without changing the fundamental meaning). However, standard neutral word order is Subject-Verb-Object (SVO). Enclitics (short pronouns/verbs) must always stand in the second grammatical position.",
              "ru": "╨е╨╛╤А╨▓╨░╤В╤Б╨║╨╕╨╣ ╤П╨╖╤Л╨║ ╨╕╨╝╨╡╨╡╤В ╤Б╨▓╨╛╨▒╨╛╨┤╨╜╤Л╨╣ ╨┐╨╛╤А╤П╨┤╨╛╨║ ╤Б╨╗╨╛╨▓ ╨▒╨╗╨░╨│╨╛╨┤╨░╤А╤П ╨▒╨╛╨│╨░╤В╨╛╨╣ ╤Б╨╕╤Б╤В╨╡╨╝╨╡ ╨┐╨░╨┤╨╡╨╢╨╡╨╣ (╨┐╨╛╨┤╨╗╨╡╨╢╨░╤Й╨╡╨╡, ╤Б╨║╨░╨╖╤Г╨╡╨╝╨╛╨╡ ╨╕ ╨┤╨╛╨┐╨╛╨╗╨╜╨╡╨╜╨╕╨╡ ╨╝╨╛╨│╤Г╤В ╨╝╨╡╨╜╤П╤В╤М╤Б╤П ╨╝╨╡╤Б╤В╨░╨╝╨╕ ╨▒╨╡╨╖ ╨┐╨╛╤В╨╡╤А╨╕ ╨╛╤Б╨╜╨╛╨▓╨╜╨╛╨│╨╛ ╤Б╨╝╤Л╤Б╨╗╨░). ╨Ю╨┤╨╜╨░╨║╨╛ ╤Б╤В╨░╨╜╨┤╨░╤А╤В╨╜╤Л╨╝ ╨╜╨╡╨╣╤В╤А╨░╨╗╤М╨╜╤Л╨╝ ╨┐╨╛╤А╤П╨┤╨║╨╛╨╝ ╤П╨▓╨╗╤П╨╡╤В╤Б╤П SVO. ╨н╨╜╨║╨╗╨╕╤В╨╕╨║╨╕ (╨║╤А╨░╤В╨║╨╕╨╡ ╨╝╨╡╤Б╤В╨╛╨╕╨╝╨╡╨╜╨╕╤П/╨│╨╗╨░╨│╨╛╨╗╤Л) ╨▓╤Б╨╡╨│╨┤╨░ ╨┤╨╛╨╗╨╢╨╜╤Л ╤Б╤В╨╛╤П╤В╤М ╨╜╨░ ╨▓╤В╨╛╤А╨╛╨╣ ╨┐╨╛╨╖╨╕╤Ж╨╕╨╕.",
              "ua": "╨е╨╛╤А╨▓╨░╤В╤Б╤М╨║╨░ ╨╝╨╛╨▓╨░ ╨╝╨░╤Ф ╨▓╤Ц╨╗╤М╨╜╨╕╨╣ ╨┐╨╛╤А╤П╨┤╨╛╨║ ╤Б╨╗╤Ц╨▓ ╨╖╨░╨▓╨┤╤П╨║╨╕ ╨▒╨░╨│╨░╤В╤Ц╨╣ ╤Б╨╕╤Б╤В╨╡╨╝╤Ц ╨▓╤Ц╨┤╨╝╤Ц╨╜╨║╤Ц╨▓ (╨┐╤Ц╨┤╨╝╨╡╤В, ╨┐╤А╨╕╤Б╤Г╨┤╨╛╨║ ╤Ц ╨┤╨╛╨┤╨░╤В╨╛╨║ ╨╝╨╛╨╢╤Г╤В╤М ╨╝╤Ц╨╜╤П╤В╨╕╤Б╤П ╨╝╤Ц╤Б╤Ж╤П╨╝╨╕ ╨▒╨╡╨╖ ╨▓╤В╤А╨░╤В╨╕ ╨╛╤Б╨╜╨╛╨▓╨╜╨╛╨│╨╛ ╨╖╨╝╤Ц╤Б╤В╤Г). ╨Я╤А╨╛╤В╨╡ ╤Б╤В╨░╨╜╨┤╨░╤А╤В╨╜╨╕╨╝ ╨╜╨╡╨╣╤В╤А╨░╨╗╤М╨╜╨╕╨╝ ╨┐╨╛╤А╤П╨┤╨║╨╛╨╝ ╤Ф SVO. ╨Х╨╜╨║╨╗╤Ц╤В╨╕╨║╨╕ (╨║╨╛╤А╨╛╤В╨║╤Ц ╨╖╨░╨╣╨╝╨╡╨╜╨╜╨╕╨║╨╕/╨┤╤Ц╤Ф╤Б╨╗╨╛╨▓╨░) ╨╖╨░╨▓╨╢╨┤╨╕ ╨┐╨╛╨▓╨╕╨╜╨╜╤Ц ╤Б╤В╨╛╤П╤В╨╕ ╨╜╨░ ╨┤╤А╤Г╨│╤Ц╨╣ ╨┐╨╛╨╖╨╕╤Ж╤Ц╤Ч."
            },
            "examples": [
              {
                "hr": "Ivan ─Нita knjigu. (SVO - Neutral)",
                "translation": {
                  "en": "Ivan reads a book.",
                  "ru": "╨Ш╨▓╨░╨╜ ╤З╨╕╤В╨░╨╡╤В ╨║╨╜╨╕╨│╤Г.",
                  "ua": "╨Ж╨▓╨░╨╜ ╤З╨╕╤В╨░╤Ф ╨║╨╜╨╕╨│╤Г."
                }
              },
              {
                "hr": "Knjigu ─Нita Ivan. (OVS - Emphasizes book)",
                "translation": {
                  "en": "Ivan reads the book.",
                  "ru": "╨Ъ╨╜╨╕╨│╤Г ╤З╨╕╤В╨░╨╡╤В ╨Ш╨▓╨░╨╜.",
                  "ua": "╨Ъ╨╜╨╕╨│╤Г ╤З╨╕╤В╨░╤Ф ╨Ж╨▓╨░╨╜."
                }
              },
              {
                "hr": "Ja mu je dajem. (Enclitics 'mu' and 'je' in 2nd position)",
                "translation": {
                  "en": "I give it to him.",
                  "ru": "╨п ╨┤╨░╤О ╨╡╤С ╨╡╨╝╤Г.",
                  "ua": "╨п ╨┤╨░╤О ╤Ч╤Ч ╨╣╨╛╨╝╤Г."
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
