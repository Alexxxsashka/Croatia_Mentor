import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { checkRateLimit } from "@/lib/rate-limit";

export async function PUT(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id && !session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id || session.user.email!;
    const rateLimit = checkRateLimit(`change-password:${userId}`, 5, 24 * 60 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Ви перевищили ліміт зміни пароля на добу (максимум 5 на добу). Спробуйте завтра." },
        { status: 429 }
      );
    }

    const { currentPassword, newPassword, confirmPassword } = await req.json();

    if (!newPassword || newPassword.length < 6) {
      return NextResponse.json(
        { error: "Новий пароль повинен містити не менше 6 символів" },
        { status: 400 }
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { error: "Новий пароль та підтвердження пароля не збігаються" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          session.user.id ? { id: session.user.id } : {},
          session.user.email ? { email: session.user.email } : {},
        ],
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Пользователь не найден" }, { status: 404 });
    }

    // If user has an existing password, verify current password
    if (user.password) {
      if (!currentPassword) {
        return NextResponse.json(
          { error: "Будь ласка, вкажіть ваш поточний пароль" },
          { status: 400 }
        );
      }

      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return NextResponse.json(
          { error: "Поточний пароль вказано невірно" },
          { status: 400 }
        );
      }
    }

    // Hash new password securely
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    return NextResponse.json({
      success: true,
      message: "Пароль успішно оновлено!",
    });
  } catch (error) {
    console.error("Change password route error:", error);
    return NextResponse.json({ error: "Не вдалося оновити пароль" }, { status: 500 });
  }
}
