-- Additive deployment for projects already managed with prisma db push.
CREATE TABLE IF NOT EXISTS "PilotSkill" (
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  "lessonId" TEXT NOT NULL,
  "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "seed" INTEGER NOT NULL,
  "attempts" INTEGER NOT NULL DEFAULT 0,
  "reviews" INTEGER NOT NULL DEFAULT 0,
  "readyAt" TIMESTAMP(3),
  "dueAt" TIMESTAMP(3),
  "reviewOpenedAt" TIMESTAMP(3),
  "firstReviewAt" TIMESTAMP(3),
  "firstReviewPassed" BOOLEAN,
  "confirmedAt" TIMESTAMP(3),
  "lastAttempt" TEXT,
  "lastMisses" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
  CONSTRAINT "PilotSkill_pkey" PRIMARY KEY ("userId", "lessonId")
);
CREATE INDEX IF NOT EXISTS "PilotSkill_dueAt_idx" ON "PilotSkill" ("dueAt");
