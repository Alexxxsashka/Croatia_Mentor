import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { uid, email, displayName, photoURL, phoneNumber, providerId } = await req.json();

    if (!email && !phoneNumber && !uid) {
      return NextResponse.json({ error: "Missing identity info" }, { status: 400 });
    }

    // Identify target user by email or phone or linked provider
    const searchEmail = email || `${uid}@firebase.user`;
    
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          email ? { email } : {},
          phoneNumber ? { phone: phoneNumber } : {},
        ],
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: searchEmail,
          name: displayName || email?.split("@")[0] || "User",
          image: photoURL || null,
          phone: phoneNumber || null,
          progress: {
            create: {
              currentLevel: "A1",
              totalXP: 0,
              currentStreak: 0,
            },
          },
        },
      });
    } else {
      // Update phone or name/image if missing
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          ...(phoneNumber && !user.phone ? { phone: phoneNumber } : {}),
          ...(displayName && !user.name ? { name: displayName } : {}),
          ...(photoURL && !user.image ? { image: photoURL } : {}),
        },
      });
    }

    // Sync account provider if specified
    if (providerId) {
      const existingAccount = await prisma.account.findFirst({
        where: {
          userId: user.id,
          provider: providerId,
        },
      });

      if (!existingAccount) {
        await prisma.account.create({
          data: {
            userId: user.id,
            type: "oauth",
            provider: providerId,
            providerAccountId: uid,
          },
        });
      }
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("Firebase sync error:", error);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
