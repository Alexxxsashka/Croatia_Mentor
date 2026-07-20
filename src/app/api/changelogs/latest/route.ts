import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const latestChangelog = await prisma.changelog.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ latestChangelog });
  } catch (error) {
    console.error("Latest changelog GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
