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
      return NextResponse.json({ error: "Користувача не знайдено" }, { status: 404 });
    }

    // Verify current password if user has an existing password in DB
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

    // 1. Hash new password securely and save to Prisma DB
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    // 2. Sync updated password to Firebase Auth
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
    if (apiKey && user.email) {
      try {
        // Authenticate with Firebase to get idToken, then update password
        const signInRes = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: user.email,
              password: currentPassword || `MentorAuth_${user.id}_2026!`,
              returnSecureToken: true,
            }),
          }
        );
        const signInData = await signInRes.json();

        if (signInData.idToken) {
          await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                idToken: signInData.idToken,
                password: newPassword,
                returnSecureToken: true,
              }),
            }
          );
        }
      } catch (fbErr) {
        console.error("Firebase Auth password sync warning:", fbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Пароль успішно оновлено!",
    });
  } catch (error) {
    console.error("Change password route error:", error);
    return NextResponse.json({ error: "Не вдалося оновити пароль" }, { status: 500 });
  }
}
