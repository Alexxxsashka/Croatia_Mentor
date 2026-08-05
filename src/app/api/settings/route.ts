import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

// GET — fetch user settings
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const settings = await prisma.userSettings.findUnique({
      where: { userId: session.user.id },
    });

    return NextResponse.json({
      settings: settings || {
        dailyGoalMinutes: 10,
        reminderEnabled: true,
        reminderTime: "09:00",
        notificationsEnabled: false,
      },
    });
  } catch (error) {
    console.error("Settings fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT — update user settings
export async function PUT(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { dailyGoalMinutes, reminderEnabled, reminderTime, notificationsEnabled } = body;

    const updateData: Record<string, unknown> = {};
    if (dailyGoalMinutes !== undefined) updateData.dailyGoalMinutes = dailyGoalMinutes;
    if (reminderEnabled !== undefined) updateData.reminderEnabled = reminderEnabled;
    if (reminderTime !== undefined) updateData.reminderTime = reminderTime;
    if (notificationsEnabled !== undefined) updateData.notificationsEnabled = notificationsEnabled;

    const settings = await prisma.userSettings.upsert({
      where: { userId: session.user.id },
      update: updateData,
      create: {
        userId: session.user.id,
        dailyGoalMinutes: dailyGoalMinutes ?? 10,
        reminderEnabled: reminderEnabled ?? true,
        reminderTime: reminderTime ?? "09:00",
        notificationsEnabled: notificationsEnabled ?? false,
      },
    });

    return NextResponse.json({ settings });
  } catch (error) {
    console.error("Settings update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
