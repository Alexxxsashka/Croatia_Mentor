import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ensureDefaultChangelogs } from "@/lib/changelog-helper";

export async function GET() {
  try {
    await ensureDefaultChangelogs();

    const changelogs = await prisma.changelog.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ changelogs });
  } catch (error) {
    console.error("Public changelogs GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
