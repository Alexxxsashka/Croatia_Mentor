import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const allUsers = await prisma.user.findMany({
      include: {
        progress: true,
        accounts: true,
      },
    });

    // Group users by lowercased trimmed email
    const emailGroups = new Map<string, typeof allUsers>();

    for (const u of allUsers) {
      if (!u.email) continue;
      const normEmail = u.email.toLowerCase().trim();
      if (!emailGroups.has(normEmail)) {
        emailGroups.set(normEmail, []);
      }
      emailGroups.get(normEmail)!.push(u);
    }

    let mergedCount = 0;
    let deletedCount = 0;
    const report: string[] = [];

    for (const [normEmail, users] of emailGroups.entries()) {
      // 1. Normalize single users' emails if stored with uppercase
      if (users.length === 1) {
        const singleUser = users[0];
        if (singleUser.email !== normEmail) {
          await prisma.user.update({
            where: { id: singleUser.id },
            data: { email: normEmail },
          });
        }
        continue;
      }

      // 2. We have duplicate users for the same email!
      mergedCount++;
      report.push(`Found ${users.length} duplicate accounts for email: ${normEmail}`);

      // Select primary user: preferring one with a password, then max XP, then earliest created
      users.sort((a, b) => {
        if (a.password && !b.password) return -1;
        if (!a.password && b.password) return 1;

        const xpA = a.progress?.totalXP || 0;
        const xpB = b.progress?.totalXP || 0;
        if (xpA !== xpB) return xpB - xpA;

        return a.createdAt.getTime() - b.createdAt.getTime();
      });

      const primaryUser = users[0];
      const duplicates = users.slice(1);

      // Merge data from duplicates into primaryUser
      for (const dup of duplicates) {
        // Re-link accounts
        await prisma.account.updateMany({
          where: { userId: dup.id },
          data: { userId: primaryUser.id },
        });

        // Re-link sessions
        await prisma.session.updateMany({
          where: { userId: dup.id },
          data: { userId: primaryUser.id },
        });

        // Re-link badges (ignoring conflicts)
        try {
          await prisma.userBadge.updateMany({
            where: { userId: dup.id },
            data: { userId: primaryUser.id },
          });
        } catch {
          // ignore duplicate badge constraint violations
        }

        // Delete duplicate progress row if primary also has one, or transfer if primary doesn't
        if (dup.progress) {
          if (!primaryUser.progress) {
            await prisma.progress.update({
              where: { id: dup.progress.id },
              data: { userId: primaryUser.id },
            });
          } else {
            // Add XP from duplicate if any
            if (dup.progress.totalXP > 0) {
              await prisma.progress.update({
                where: { id: primaryUser.progress.id },
                data: {
                  totalXP: primaryUser.progress.totalXP + dup.progress.totalXP,
                },
              });
            }
            await prisma.progress.delete({ where: { id: dup.progress.id } }).catch(() => {});
          }
        }

        // Delete duplicate user
        await prisma.user.delete({ where: { id: dup.id } });
        deletedCount++;
      }

      // Ensure primary user email is cleanly lowercased
      await prisma.user.update({
        where: { id: primaryUser.id },
        data: { email: normEmail },
      });
    }

    return NextResponse.json({
      success: true,
      mergedGroups: mergedCount,
      deletedUsers: deletedCount,
      report,
    });
  } catch (error) {
    console.error("Clean duplicate users error:", error);
    return NextResponse.json({ error: "Failed to clean duplicate users" }, { status: 500 });
  }
}
