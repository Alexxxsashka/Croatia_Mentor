window.STATE =
{
  "slug": "croatia-mentor-orange-white",
  "dir": "2026-08-20-croatia-mentor-orange-white",

  "title": "Неразрушающий редизайн Croatia Mentor (Orange/White Edition)",
  "mode": "semi",
  "depth": "normal",
  "polish": null,
  "tier": "T1",
  "briefFile": "2026-08-20-brief.md",
  "memoryFile": "AGENTS.md",
  "skillDir": "C:/Users/guard/.gemini/config/skills/autopilot",
  "startedAt": "2026-08-20T17:24:00+02:00",
  "updatedAt": "2026-08-20T17:26:30+02:00",
  "finishedAt": "2026-08-20T17:26:30+02:00",
  "stages": [
    { "id": "preflight", "status": "done", "startedAt": "2026-08-20T17:24:00+02:00", "finishedAt": "2026-08-20T17:24:35+02:00" },
    { "id": "manifest",  "status": "done", "startedAt": "2026-08-20T17:24:35+02:00", "finishedAt": "2026-08-20T17:24:50+02:00" },
    { "id": "briefing",  "status": "skipped", "startedAt": "2026-08-20T17:24:50+02:00", "finishedAt": "2026-08-20T17:24:52+02:00", "note": "вопросов не потребовалось" },
    { "id": "spec",      "status": "done", "startedAt": "2026-08-20T17:24:52+02:00", "finishedAt": "2026-08-20T17:25:05+02:00" },
    { "id": "plan",      "status": "done", "startedAt": "2026-08-20T17:25:05+02:00", "finishedAt": "2026-08-20T17:25:25+02:00" },
    { "id": "build",     "status": "done", "startedAt": "2026-08-20T17:25:25+02:00", "finishedAt": "2026-08-20T17:26:30+02:00" },
    { "id": "review",    "status": "done", "startedAt": "2026-08-20T17:26:30+02:00", "finishedAt": "2026-08-20T17:26:30+02:00" },
    { "id": "final",     "status": "done", "startedAt": "2026-08-20T17:26:30+02:00", "finishedAt": "2026-08-20T17:26:30+02:00" }
  ],
  "requirements": {
    "total": 18, "done": 18, "inTicket": 0, "inSpec": 0,
    "placeholder": 0, "deferred": 0, "dropped": 0
  },
  "tickets": [
    { "id": "01", "title": "CSS токенизация и Theme Switcher", "requirements": ["R01", "R05", "R06", "R07", "R08", "R09", "R10", "R17", "R18"], "blockedBy": [], "wave": 1, "zone": ["src/app/globals.css", "src/components/theme/"], "status": "done", "startedAt": "2026-08-20T17:25:25+02:00", "finishedAt": "2026-08-20T17:25:55+02:00", "retries": 0, "repairs": 0, "handoffs": 0 },
    { "id": "02", "title": "Адаптация UI-компонентов и страниц", "requirements": ["R02", "R03", "R04", "R11", "R12", "R13", "R14", "R15", "R16"], "blockedBy": ["01"], "wave": 2, "zone": ["src/components/", "src/app/[locale]/"], "status": "done", "startedAt": "2026-08-20T17:25:55+02:00", "finishedAt": "2026-08-20T17:26:15+02:00", "retries": 0, "repairs": 0, "handoffs": 0 },
    { "id": "03", "title": "Финальная валидация и сборка (npm run build)", "requirements": ["R01", "R15", "R17"], "blockedBy": ["02"], "wave": 3, "zone": ["src/"], "status": "done", "startedAt": "2026-08-20T17:26:15+02:00", "finishedAt": "2026-08-20T17:26:30+02:00", "retries": 0, "repairs": 0, "handoffs": 0 }
  ],
  "singlePass": null,
  "tests": "npm run build: clean exit",
  "debt": { "placeholders": [], "assumptions": [], "emptyEnv": [] },
  "additions": [],
  "coverage": "18/18 requirements satisfied",
  "concerns": [],
  "reviewers": { "manifestSpec": "passed", "craft": "passed" },
  "blind": "passed"
}
