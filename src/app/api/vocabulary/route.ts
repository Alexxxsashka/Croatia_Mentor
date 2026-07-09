import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const flashcards = await prisma.flashcard.findMany({
      orderBy: { level: "asc" },
    });

    return NextResponse.json({ flashcards });
  } catch (error) {
    console.error("Failed to fetch vocabulary:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
