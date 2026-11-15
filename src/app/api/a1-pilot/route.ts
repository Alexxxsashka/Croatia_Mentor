import { randomInt } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import type { PilotSkill } from "@prisma/client";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { isPilotId, pilotIds, reviewDelay, type PilotId, type PilotProgress } from "@/lib/a1-pilot";
import { gradeAssessment, makeAssessment, variantCount } from "@/lib/a1-pilot-assessment";

const response = (data: unknown, status = 200) =>
  NextResponse.json(data, { status, headers: { "Cache-Control": "private, no-store" } });

const inputSchema = z.discriminatedUnion("action", [
  z.object({ action: z.literal("start"), lessonId: z.string() }),
  z.object({ action: z.literal("openReview"), lessonId: z.string() }),
  z.object({
    action: z.literal("submit"), lessonId: z.string(),
    attempt: z.string().max(12), answers: z.array(z.string().trim().min(1).max(400)).length(2),
  }),
]);

function progress(row: PilotSkill, lessonId: PilotId, now: Date): PilotProgress {
  return {
    lessonId,
    status: row.confirmedAt ? "confirmed" : row.readyAt ? "ready" : "working",
    dueAt: row.dueAt?.toISOString() ?? null,
    due: Boolean(!row.confirmedAt && row.dueAt && row.dueAt <= now),
    needsPractice: row.lastMisses.length > 0,
    lastMisses: row.lastMisses,
  };
}

function assessment(row: PilotSkill, lessonId: PilotId, now: Date) {
  if (row.confirmedAt || (row.dueAt && row.dueAt > now)) return null;
  const review = row.readyAt !== null;
  const number = review ? row.reviews : row.attempts;
  if (number >= variantCount) return null;
  const attempt = `${review ? "review" : "initial"}-${number}`;
  return { attempt, review, ...makeAssessment(lessonId, review, (row.seed + number) % variantCount) };
}

function lessonState(row: PilotSkill, lessonId: PilotId, now: Date) {
  const task = assessment(row, lessonId, now);
  return {
    progress: progress(row, lessonId, now),
    task: task && { attempt: task.attempt, review: task.review, scenario: task.scenario, criteria: task.rules.map((rule) => rule.label) },
  };
}

export async function GET(request: Request) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return response({ error: "unauthorized" }, 401);
  const params = new URL(request.url).searchParams;
  const lessonId = params.get("lesson");
  const now = new Date();
  try {
    if (params.has("metrics")) {
      if (!session?.user || !("role" in session.user) || session.user.role !== "admin") return response({ error: "forbidden" }, 403);
      const rows = await prisma.pilotSkill.findMany({ select: {
        lessonId: true, attempts: true, readyAt: true, dueAt: true, reviewOpenedAt: true,
        firstReviewAt: true, firstReviewPassed: true, confirmedAt: true,
      } });
      return response({ metrics: pilotIds.map((id) => {
        const cohort = rows.filter((row) => row.lessonId === id);
        const due = cohort.filter((row) => row.dueAt && row.dueAt <= now);
        return {
          lessonId: id, started: cohort.length, submitted: cohort.filter((row) => row.attempts > 0).length,
          ready: cohort.filter((row) => row.readyAt).length, due: due.length,
          returned: due.filter((row) => row.reviewOpenedAt).length,
          reviewed: due.filter((row) => row.firstReviewAt).length,
          passedFirstReview: due.filter((row) => row.firstReviewPassed === true).length,
          confirmed: due.filter((row) => row.confirmedAt).length,
        };
      }) });
    }
    if (lessonId !== null) {
      if (!isPilotId(lessonId)) return response({ error: "invalid_lesson" }, 400);
      const row = await prisma.pilotSkill.findUnique({ where: { userId_lessonId: { userId, lessonId } } });
      return response(row ? lessonState(row, lessonId, new Date()) : { progress: null, task: null });
    }
    const rows = await prisma.pilotSkill.findMany({ where: { userId } });
    return response({ skills: rows.flatMap((row) => isPilotId(row.lessonId) ? [progress(row, row.lessonId, now)] : []) });
  } catch (error) {
    console.error("A1 pilot read failed", error);
    return response({ error: "unavailable" }, 503);
  }
}

export async function POST(request: Request) {
  const userId = (await auth())?.user?.id;
  if (!userId) return response({ error: "unauthorized" }, 401);
  const result = inputSchema.safeParse(await request.json().catch(() => null));
  if (!result.success || !isPilotId(result.data.lessonId)) return response({ error: "invalid_request" }, 400);
  const input = result.data;
  const lessonId = result.data.lessonId;
  const where = { userId_lessonId: { userId, lessonId } };
  const now = new Date();

  try {
    if (input.action === "start") {
      const row = await prisma.pilotSkill.upsert({
        where, update: {}, create: { userId, lessonId, seed: randomInt(variantCount) },
      });
      return response(lessonState(row, lessonId, now));
    }

    const row = await prisma.pilotSkill.findUnique({ where });
    if (!row) return response({ error: "not_started" }, 409);
    if (input.action === "openReview") {
      if (!row.dueAt || row.dueAt > now) return response({ error: "review_not_due" }, 409);
      await prisma.pilotSkill.updateMany({ where: { userId, lessonId, reviewOpenedAt: null }, data: { reviewOpenedAt: now } });
      return response(lessonState(await prisma.pilotSkill.findUniqueOrThrow({ where }), lessonId, now));
    }
    const replay = (saved: PilotSkill) => response({
      ...lessonState(saved, lessonId, now),
      feedback: { passed: saved.lastMisses.length === 0, misses: saved.lastMisses, review: input.attempt.startsWith("review-") },
    });
    if (row.lastAttempt === input.attempt) return replay(row);
    const task = assessment(row, lessonId, now);
    if (!task || task.attempt !== input.attempt) return response({ error: "stale_attempt" }, 409);
    const misses = gradeAssessment(task.rules, input.answers);
    const passed = misses.length === 0;
    const updated = await prisma.pilotSkill.updateMany({
      where: { userId, lessonId, attempts: row.attempts, reviews: row.reviews },
      data: {
        lastAttempt: task.attempt,
        lastMisses: misses,
        ...(task.review ? {
          reviews: { increment: 1 },
          reviewOpenedAt: row.reviewOpenedAt ?? now,
          ...(row.firstReviewAt ? {} : { firstReviewAt: now, firstReviewPassed: passed }),
          ...(passed ? { confirmedAt: now } : {}),
        } : {
          attempts: { increment: 1 },
          ...(passed ? { readyAt: now, dueAt: new Date(now.getTime() + reviewDelay) } : {}),
        }),
      },
    });
    const saved = await prisma.pilotSkill.findUniqueOrThrow({ where });
    if (updated.count === 0 && saved.lastAttempt !== input.attempt) return response({ error: "stale_attempt" }, 409);
    return replay(saved);
  } catch (error) {
    console.error("A1 pilot write failed", error);
    return response({ error: "unavailable" }, 503);
  }
}
