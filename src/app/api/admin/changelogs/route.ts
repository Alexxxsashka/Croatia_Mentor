import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = session?.user as any;
    if (!session || user?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const changelogs = await prisma.changelog.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ changelogs });
  } catch (error) {
    console.error("Admin changelogs GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = session?.user as any;
    if (!session || user?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const { version, titleEn, titleRu, titleUa, contentEn, contentRu, contentUa } = body;

    if (!version || !titleEn || !titleRu || !titleUa || !contentEn || !contentRu || !contentUa) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const changelog = await prisma.changelog.create({
      data: {
        version,
        titleEn,
        titleRu,
        titleUa,
        contentEn,
        contentRu,
        contentUa,
      },
    });

    return NextResponse.json({ changelog });
  } catch (error) {
    console.error("Admin changelogs POST error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
