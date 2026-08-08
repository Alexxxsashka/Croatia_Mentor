import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ensureDefaultChangelogs } from "@/lib/changelog-helper";

export async function GET() {
  try {
    await ensureDefaultChangelogs();

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
