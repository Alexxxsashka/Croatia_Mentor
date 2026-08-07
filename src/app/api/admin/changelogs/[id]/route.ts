import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = session?.user as any;
    if (!session || user?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { id } = await params;
    const body = await req.json();
    const { version, titleEn, titleRu, titleUa, contentEn, contentRu, contentUa } = body;

    if (!id || !version || !titleEn || !titleRu || !titleUa || !contentEn || !contentRu || !contentUa) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const changelog = await prisma.changelog.update({
      where: { id },
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
    console.error("Admin changelog PUT error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = session?.user as any;
    if (!session || user?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { id } = await params;
    await prisma.changelog.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin changelog DELETE error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
