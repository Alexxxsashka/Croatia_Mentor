import { PrismaClient } from "@prisma/client";
import { lessonsData } from "../src/lib/lessons-data";
import { vocabularyWords } from "../src/lib/vocabulary-data";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding lessons from lessons-data...");
  for (const lesson of lessonsData) {
    await prisma.lesson.upsert({
      where: { id: lesson.id },
      update: {
        type: lesson.type,
        title: typeof lesson.title === "string" ? lesson.title : lesson.title.en,
        level: lesson.level,
        content: lesson.content as any
      },
      create: {
        id: lesson.id,
        type: lesson.type,
        title: typeof lesson.title === "string" ? lesson.title : lesson.title.en,
        level: lesson.level,
        content: lesson.content as any
      }
    });
  }

  console.log("Clearing existing flashcards...");
  await prisma.flashcard.deleteMany({});

  console.log("Seeding flashcards from vocabulary-data...");
  const flashcardData = vocabularyWords.map((word) => ({
    wordHr: word.hr,
    translationEng: word.en,
    translationRu: word.ru,
    translationUa: word.ua,
    level: word.level,
    category: word.category,
  }));

  await prisma.flashcard.createMany({
    data: flashcardData,
  });

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
