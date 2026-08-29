import { NextResponse } from "next/server";
import { auth as getSessionAuth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getSessionAuth();
    const body = await req.json().catch(() => ({}));
    const { email } = body;

    const targetEmail = email || session?.user?.email;

    if (!targetEmail) {
      return NextResponse.json({ error: "Unauthorized or missing email" }, { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: { email: targetEmail },
      data: {
        emailVerified: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      emailVerified: updatedUser.emailVerified,
    });
  } catch (error) {
    console.error("Email verification update error:", error);
    return NextResponse.json({ error: "Failed to mark email as verified" }, { status: 500 });
  }
}
