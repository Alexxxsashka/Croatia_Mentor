import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  nativeLanguage: z.enum(["en", "ru", "ua"]),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, password, nativeLanguage } = parsed.data;
    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists (case-insensitive)
    const existingUser = await prisma.user.findFirst({
      where: {
        email: { equals: normalizedEmail, mode: "insensitive" },
      },
    });

    const hashedPassword = await bcrypt.hash(password, 12);

    if (existingUser) {
      // If user exists and already has a password set, block duplicate registration
      if (existingUser.password) {
        return NextResponse.json(
          { error: "User already exists" },
          { status: 409 }
        );
      }

      // If user was created via OAuth/Firebase sync without password, update existing account
      const updatedUser = await prisma.user.update({
        where: { id: existingUser.id },
        data: {
          name: name || existingUser.name,
          password: hashedPassword,
          nativeLanguage,
          email: normalizedEmail, // Ensure stored email is lowercased
        },
      });

      return NextResponse.json(
        { message: "Password set and account updated successfully", userId: updatedUser.id },
        { status: 200 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        email: normalizedEmail,
        password: hashedPassword,
        nativeLanguage,
        progress: {
          create: {
            currentLevel: "A1",
            totalXP: 0,
            currentStreak: 0,
          },
        },
      },
    });

    return NextResponse.json(
      { message: "User created successfully", userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
