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
  }
];

const flashcards = [
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
