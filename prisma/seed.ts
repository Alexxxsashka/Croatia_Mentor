import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const lessons = [
  // A1 Grammar
  {
    id: "a1-grammar-1",
    type: "grammar",
    title: "Osobne zamjenice (Personal Pronouns)",
    level: "A1",
    content: {
      description: "Learn the personal pronouns in Croatian — the building blocks of every sentence.",
      sections: [
        {
          title: "Personal Pronouns",
          text: "In Croatian, personal pronouns change based on their function in the sentence. Here are the basic nominative forms:",
          examples: [
            "ja (I) — Ja sam student. (I am a student.)",
            "ti (you) — Ti si učenik. (You are a pupil.)",
            "on/ona/ono (he/she/it) — On je dobar. (He is good.)",
            "mi (we) — Mi smo prijatelji. (We are friends.)",
            "vi (you pl./formal) — Vi ste profesori. (You are professors.)",
            "oni/one/ona (they m/f/n) — Oni su ovdje. (They are here.)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "_____ sam iz Hrvatske. (I am from Croatia.)",
          options: ["Ja", "Ti", "On", "Mi"],
          correctAnswer: "Ja"
        },
        {
          type: "multiple-choice",
          question: "_____ ste lijepi. (You [formal] are beautiful.)",
          options: ["Vi", "Ti", "Oni", "Ja"],
          correctAnswer: "Vi"
        },
        {
          type: "fill-blank",
          question: "Complete: _____ je profesorica. (She is a professor.)",
          correctAnswer: "Ona",
          hint: "Think about the feminine 3rd person pronoun"
        }
      ]
    }
  },
  // A1 Reading
  {
    id: "a1-reading-1",
    type: "reading",
    title: "U kafiću (At the café)",
    level: "A1",
    content: {
      description: "Read a simple dialogue at a Croatian café and answer comprehension questions.",
      sections: [
        {
          title: "Dijalog",
          text: "Konobar: Dobar dan! Što želite?\nAna: Dobar dan! Jednu kavu, molim.\nKonobar: S mlijekom ili bez?\nAna: S mlijekom, hvala.\nKonobar: Želite li još nešto?\nAna: Ne, hvala. Koliko je to?\nKonobar: Dva eura.\nAna: Izvolite. Hvala!\nKonobar: Hvala vama. Doviđenja!"
        },
        {
          title: "Vocabulary",
          text: "Key words from the dialogue:",
          examples: [
            "konobar — waiter",
            "kava — coffee",
            "mlijeko — milk",
            "molim — please",
            "hvala — thank you",
            "koliko — how much",
            "doviđenja — goodbye"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "What does Ana order?",
          options: ["Coffee with milk", "Tea", "Juice", "Water"],
          correctAnswer: "Coffee with milk"
        },
        {
          type: "multiple-choice",
          question: "How much does the coffee cost?",
          options: ["2 euros", "3 euros", "1 euro", "5 euros"],
          correctAnswer: "2 euros"
        },
        {
          type: "translation",
          question: "Translate to Croatian: \"Thank you\"",
          correctAnswer: "Hvala"
        }
      ]
    }
  },
  // A1 Dictation
  {
    id: "a1-dictation-1",
    type: "dictation",
    title: "Osnovni pozdravi (Basic Greetings)",
    level: "A1",
    content: {
      description: "Listen to basic Croatian greetings and type what you hear.",
      dictationText: "Dobar dan. Kako ste? Ja sam dobro, hvala.",
      exercises: [
        {
          type: "dictation",
          question: "Type what you hear:",
          correctAnswer: "Dobar dan. Kako ste? Ja sam dobro, hvala."
        }
      ]
    }
  },
  // A2 Grammar
  {
    id: "a2-grammar-1",
    type: "grammar",
    title: "Padeži - Akuzativ (Cases - Accusative)",
    level: "A2",
    content: {
      description: "Learn the accusative case in Croatian — used for direct objects.",
      sections: [
        {
          title: "The Accusative Case (Akuzativ)",
          text: "The accusative case is used for direct objects — the thing or person receiving the action of a verb.",
          examples: [
            "Vidim kuću. (I see a house.) — kuća → kuću",
            "Čitam knjigu. (I read a book.) — knjiga → knjigu",
            "Volim Hrvatsku. (I love Croatia.) — Hrvatska → Hrvatsku",
            "Jedem jabuku. (I eat an apple.) — jabuka → jabuku"
          ]
        },
        {
          title: "Feminine Nouns Rule",
          text: "Feminine nouns ending in -a change to -u in the accusative case.",
          examples: [
            "žena → ženu (woman)",
            "škola → školu (school)",
            "ulica → ulicu (street)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Vidim _____ (kuća). (I see the house.)",
          options: ["kuću", "kuća", "kuće", "kući"],
          correctAnswer: "kuću"
        },
        {
          type: "fill-blank",
          question: "Čitam _____ (knjiga). (I read the book.)",
          correctAnswer: "knjigu",
          hint: "Feminine -a changes to -u"
        }
      ]
    }
  },
  // A2 Communication
  {
    id: "a2-communication-1",
    type: "communication",
    title: "U restoranu (At the restaurant)",
    level: "A2",
    content: {
      description: "Practice ordering food and drinks at a Croatian restaurant.",
      sections: [
        {
          title: "Useful Phrases",
          text: "Essential phrases for dining out in Croatia:",
          examples: [
            "Mogu li dobiti jelovnik? — Can I get the menu?",
            "Što preporučujete? — What do you recommend?",
            "Želim naručiti... — I would like to order...",
            "Račun, molim. — The bill, please.",
            "Bilo je izvrsno! — It was excellent!"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "How do you ask for the menu?",
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
          question: "Translate: \"The bill, please.\"",
          correctAnswer: "Račun, molim."
        }
      ]
    }
  },
  // B1 Grammar
  {
    id: "b1-grammar-1",
    type: "grammar",
    title: "Glagolski aspekt (Verb Aspect)",
    level: "B1",
    content: {
      description: "Understand the perfective and imperfective verb aspects in Croatian.",
      sections: [
        {
          title: "Verb Aspects (Glagolski aspekti)",
          text: "Croatian verbs come in pairs: imperfective (ongoing/repeated) and perfective (completed/one-time).",
          examples: [
            "pisati (impf.) / napisati (pf.) — to write / to write (complete)",
            "čitati (impf.) / pročitati (pf.) — to read / to read (finish)",
            "učiti (impf.) / naučiti (pf.) — to learn / to learn (master)",
            "govoriti (impf.) / reći (pf.) — to speak / to say"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Jučer sam _____ cijelu knjigu. (Yesterday I read the whole book.) — completed action",
          options: ["pročitao", "čitao", "čitam", "pročitam"],
          correctAnswer: "pročitao"
        },
        {
          type: "multiple-choice",
          question: "Svaki dan _____ novine. (Every day I read newspapers.) — habitual action",
          options: ["čitam", "pročitam", "pročitao sam", "čitat ću"],
          correctAnswer: "čitam"
        }
      ]
    }
  },
  // B1 Level Lesson 1 (From Book "Razgovarajte s nama B1-B2")
  {
    id: "b1-grammar-2",
    type: "grammar",
    title: "Zemlje, jezici i Futur II (Countries, Languages and Future II)",
    level: "B1",
    content: {
      description: "Explore vocabulary regarding mother tongues and master the Future II tense in relative clauses.",
      sections: [
        {
          title: "Materinski jezik i podrijetlo (Mother tongue and origins)",
          text: "At B1 level, you communicate about identities, language differences, and where people originate. Common terms: domovina (homeland), materinski jezik (mother tongue), dvojezičnost (bilingualism).",
          examples: [
            "Moj materinski jezik je ukrajinski, ali tečno govorim i hrvatski. (My mother tongue is Ukrainian, but I also speak Croatian fluently.)",
            "Dvojezičnost je prednost u suvremenom društvu. (Bilingualism is an advantage in modern society.)"
          ]
        },
        {
          title: "Futur II (Future Exact / Second Future)",
          text: "Future II is used in subordinate clauses (usually starting with 'ako' or 'kad') to express an action that will happen BEFORE another future action.",
          examples: [
            "Form: auxiliary verb 'biti' in present tense (budem, budeš, bude, budemo, budete, budu) + active verbal adjective (-o, -la, -lo, -li, -le, -la).",
            "Ako budem učio, položit ću ispit. (If I study/have studied, I will pass the exam.)",
            "Kad budete stigli u Zagreb, nazovite me. (When you arrive in Zagreb, call me.)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Ako sutra _____ (padati) kiša, ostat ćemo kod kuće.",
          options: ["bude padala", "padat će", "bude pala", "pada"],
          correctAnswer: "bude padala",
          hint: "Use Future II of 'padati' (feminine singular because of kiša)"
        },
        {
          type: "fill-blank",
          question: "Complete: Kad _____ (mi, naučiti) riječi, igrat ćemo kviz.",
          correctAnswer: "budemo naučili",
          hint: "First-person plural Future II of 'naučiti'"
        }
      ]
    }
  },
  // B1 Level Lesson 2 (From Book "Razgovarajte s nama B1-B2" Unit 2)
  {
    id: "b1-reading-2",
    type: "reading",
    title: "Kvaliteta života i ekologija (Quality of Life & Ecology)",
    level: "B1",
    content: {
      description: "Read about environmental concerns and lifestyle standards in Croatia.",
      sections: [
        {
          title: "Tekst: Zeleni Zagreb",
          text: "Hrvatska ima prekrasnu prirodu, ali briga za ekologiju postaje sve važnija. U Zagrebu se provodi novi sustav razvrstavanja otpada. Građani moraju odvajati papir, plastiku, staklo i biootpad. Mnogi se žale da je sustav kompliciran, ali većina shvaća da bez toga ne možemo sačuvati čisti okoliš. Kvaliteta života ovisi o čistom zraku, čistoj vodi i zelenim površinama u gradu.",
        },
        {
          title: "Rječnik (Vocabulary)",
          examples: [
            "otpad — waste / garbage",
            "razvrstavanje — sorting",
            "okoliš — environment",
            "zelene površine — green spaces",
            "biootpad — bio-waste",
            "sačuvati — to preserve"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Što građani Zagreba moraju odvajati?",
          options: ["Papir, plastiku, staklo i biootpad", "Samo metal", "Ništa, sve ide u istu kantu", "Samo papir"],
          correctAnswer: "Papir, plastiku, staklo i biootpad"
        },
        {
          type: "multiple-choice",
          question: "O čemu ovisi kvaliteta života prema tekstu?",
          options: ["O čistom zraku, vodi i zelenim površinama", "O novcu", "O brzim automobilima", "O velikim trgovinama"],
          correctAnswer: "O čistom zraku, vodi i zelenim površinama"
        }
      ]
    }
  },
  // B1 Test preparation (Based on B1-test document questions)
  {
    id: "b1-reading-3",
    type: "reading",
    title: "Priprema za B1 ispit: Poznavanje jezika (Language Test Preparation)",
    level: "B1",
    content: {
      description: "Practice grammar and vocabulary structure questions typically found in B1 language exams.",
      sections: [
        {
          title: "Gramatičke strukture na B1 ispitu",
          text: "B1 exams check your comprehension of prepositions, verbal aspects, relative pronouns and proper case endings. Pay close attention to verbs that trigger Genitive, Dative, or Locative.",
          examples: [
            "Zadovoljan sam svojim poslom. (I am satisfied with my job - Locative/Instrumental)",
            "Čestitam ti na uspjehu. (I congratulate you on your success - Dative)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Putujem u Zagreb _____ (vlak). (I travel to Zagreb by train.)",
          options: ["vlakom", "vlak", "vlaku", "vlaka"],
          correctAnswer: "vlakom",
          hint: "Use Instrumental case (vlak → vlakom)"
        },
        {
          type: "multiple-choice",
          question: "On se boji _____ (pas). (He is afraid of the dog.)",
          options: ["psa", "pas", "psu", "psi"],
          correctAnswer: "psa",
          hint: "Verb 'bojati se' requires Genitive case"
        },
        {
          type: "fill-blank",
          question: "Complete: Radujem se _____ (vikend). (I look forward to the weekend.)",
          correctAnswer: "vikendu",
          hint: "Verb 'radovati se' requires Dative case (vikend → vikendu)"
        }
      ]
    }
  },
  // B2 Level Lesson 1 (From Book "Razgovarajte s nama B1-B2" Unit 5)
  {
    id: "b2-grammar-1",
    type: "grammar",
    title: "Odnosi, pasiv i glagolske imenice (Relationships, Passive & Verbal Nouns)",
    level: "B2",
    content: {
      description: "Learn how to use passive voice and form verbal nouns to express abstract ideas at B2 level.",
      sections: [
        {
          title: "Pasiv (Passive Voice)",
          text: "In B2, passive voice is common in official and written styles. It is formed using the verb 'biti' or 'bivati' + passive verbal adjective, or by using the reflexive particle 'se'.",
          examples: [
            "Knjiga je napisana prošle godine. (The book was written last year.)",
            "Odluka se donosi na sastanku. (The decision is being made at the meeting.)",
            "Porezi su povećani. (Taxes have been increased.)"
          ]
        },
        {
          title: "Glagolske imenice (Verbal Nouns)",
          text: "Verbal nouns ending in -nje are formed from verbs (mostly imperfective) and describe process or action.",
          examples: [
            "učiti → učenje (learning / studying)",
            "putovati → putovanje (traveling / trip)",
            "razgovarati → razgovaranje (conversation / chatting)",
            "donijeti → donošenje (bringing / decision making)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Kako glasi glagolska imenica od glagola 'čitati'?",
          options: ["čitanje", "čitač", "pročitano", "čitati"],
          correctAnswer: "čitanje"
        },
        {
          type: "multiple-choice",
          question: "Passive: Kuća _____ (graditi, present passive) već tri godine.",
          options: ["se gradi", "gradi", "je građena", "bila je građena"],
          correctAnswer: "se gradi"
        }
      ]
    }
  },
  // B2 Level Lesson 2 (From Book "Razgovarajte s nama B1-B2" Unit 6)
  {
    id: "b2-communication-1",
    type: "communication",
    title: "Posao i radno okruženje (Work & Work Environment)",
    level: "B2",
    content: {
      description: "Learn professional vocabulary, idioms, and speak about careers in Croatian.",
      sections: [
        {
          title: "Tko radi, ne boji se gladi (Idiom: Who works doesn't fear hunger)",
          text: "Speaking about career paths, professional goals, and job interviews in Croatia. Common terms: zapošljavanje (employment), životopis (resume), razgovor za posao (job interview), prekovremeni rad (overtime work).",
          examples: [
            "Poslao sam svoj životopis na natječaj za posao programera. (I sent my resume to the developer job opening.)",
            "Radna atmosfera u našem uredu je izuzetno motivirajuća. (The working atmosphere in our office is extremely motivating.)"
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Što znači riječ 'životopis'?",
          options: ["Resume / CV", "Biography book", "Job contract", "Working hours"],
          correctAnswer: "Resume / CV"
        },
        {
          type: "fill-blank",
          question: "Translate: 'job interview' -> razgovor za _____.",
          correctAnswer: "posao"
        }
      ]
    }
  }
];

const flashcards = [
  // A1 Words
  {
    wordHr: "Hvala",
    translationEng: "Thank you",
    translationRu: "Спасибо",
    translationUa: "Дякую",
    level: "A1",
    category: "basics"
  },
  {
    wordHr: "Dobar dan",
    translationEng: "Good day / Hello",
    translationRu: "Добрый день",
    translationUa: "Добрий день",
    level: "A1",
    category: "basics"
  },
  {
    wordHr: "Pekara",
    translationEng: "Bakery",
    translationRu: "Пекарня",
    translationUa: "Пекарня",
    level: "A1",
    category: "food"
  },
  {
    wordHr: "Kava",
    translationEng: "Coffee",
    translationRu: "Кофе",
    translationUa: "Кава",
    level: "A1",
    category: "food"
  },
  {
    wordHr: "More",
    translationEng: "Sea",
    translationRu: "Море",
    translationUa: "Море",
    level: "A1",
    category: "travel"
  },
  {
    wordHr: "Prijatelj",
    translationEng: "Friend",
    translationRu: "Друг",
    translationUa: "Друг",
    level: "A1",
    category: "people"
  },
  // A2 Words
  {
    wordHr: "Knjiga",
    translationEng: "Book",
    translationRu: "Книга",
    translationUa: "Книга",
    level: "A2",
    category: "education"
  },
  {
    wordHr: "Jelovnik",
    translationEng: "Menu",
    translationRu: "Меню",
    translationUa: "Меню",
    level: "A2",
    category: "food"
  },
  {
    wordHr: "Račun",
    translationEng: "Bill / Account",
    translationRu: "Счет",
    translationUa: "Рахунок",
    level: "A2",
    category: "basics"
  },
  {
    wordHr: "Kuća",
    translationEng: "House",
    translationRu: "Дом",
    translationUa: "Будинок",
    level: "A2",
    category: "basics"
  },
  // B1 Words (From scribd B1 book & test)
  {
    wordHr: "Domovina",
    translationEng: "Homeland",
    translationRu: "Родина",
    translationUa: "Батьківщина",
    level: "B1",
    category: "society"
  },
  {
    wordHr: "Dvojezičnost",
    translationEng: "Bilingualism",
    translationRu: "Двуязычие",
    translationUa: "Двомовність",
    level: "B1",
    category: "education"
  },
  {
    wordHr: "Okoliš",
    translationEng: "Environment",
    translationRu: "Окружающая среда",
    translationUa: "Довкілля",
    level: "B1",
    category: "ecology"
  },
  {
    wordHr: "Otpad",
    translationEng: "Waste / Garbage",
    translationRu: "Отходы / Мусор",
    translationUa: "Відходи / Сміття",
    level: "B1",
    category: "ecology"
  },
  {
    wordHr: "Uspjeh",
    translationEng: "Success",
    translationRu: "Успех",
    translationUa: "Успіх",
    level: "B1",
    category: "basics"
  },
  // B2 Words
  {
    wordHr: "Učenje",
    translationEng: "Learning / Studying",
    translationRu: "Обучение",
    translationUa: "Навчання",
    level: "B2",
    category: "education"
  },
  {
    wordHr: "Životopis",
    translationEng: "Resume / CV",
    translationRu: "Резюме",
    translationUa: "Резюме",
    level: "B2",
    category: "career"
  },
  {
    wordHr: "Zapošljavanje",
    translationEng: "Employment",
    translationRu: "Трудоустройство",
    translationUa: "Працевлаштування",
    level: "B2",
    category: "career"
  },
  {
    wordHr: "Odgovornost",
    translationEng: "Responsibility",
    translationRu: "Ответственность",
    translationUa: "Відповідальність",
    level: "B2",
    category: "society"
  },
  {
    wordHr: "Prilika",
    translationEng: "Opportunity",
    translationRu: "Возможность / Шанс",
    translationUa: "Можливість / Шанс",
    level: "B2",
    category: "basics"
  }
];

async function main() {
  console.log("Seeding lessons...");
  for (const lesson of lessons) {
    await prisma.lesson.upsert({
      where: { id: lesson.id },
      update: {
        type: lesson.type,
        title: lesson.title,
        level: lesson.level,
        content: lesson.content
      },
      create: {
        id: lesson.id,
        type: lesson.type,
        title: lesson.title,
        level: lesson.level,
        content: lesson.content
      }
    });
  }

  console.log("Seeding flashcards...");
  for (const card of flashcards) {
    const existing = await prisma.flashcard.findFirst({
      where: { wordHr: card.wordHr }
    });

    if (existing) {
      await prisma.flashcard.update({
        where: { id: existing.id },
        data: card
      });
    } else {
      await prisma.flashcard.create({
        data: card
      });
    }
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
