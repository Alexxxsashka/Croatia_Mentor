// Server-side Rate Limiting Utility to protect API quotas (Firebase, Email, Database).
// Tracks request timestamps per key (user email / ID / IP) with sliding time windows.

type RateLimitRecord = {
  timestamps: number[];
};

const store = new Map<string, RateLimitRecord>();

// Cleanup stale entries every 15 minutes to prevent memory leaks
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of store.entries()) {
      record.timestamps = record.timestamps.filter((ts) => now - ts < 86400000); // 24 hours
      if (record.timestamps.length === 0) {
        store.delete(key);
      }
    }
  }, 15 * 60 * 1000);
}

/**
  Checks if a request under `key` exceeds `maxRequests` within `windowMs` (milliseconds).
  @param key Identifier (e.g. `verify-email:guardsowh@gmail.com`)
  @param maxRequests Maximum allowed requests in window
  @param windowMs Time window in milliseconds (default: 24 hours = 86400000ms)
 */
export function checkRateLimit(
  key: string,
  maxRequests: number = 3,
  windowMs: number = 86400000
): { allowed: boolean; remaining: number; resetTimeHours: number } {
  const now = Date.now();
  let record = store.get(key);

  if (!record) {
    record = { timestamps: [] };
    store.set(key, record);
  }

  // Filter timestamps within the current window
  record.timestamps = record.timestamps.filter((ts) => now - ts < windowMs);

  if (record.timestamps.length >= maxRequests) {
    const oldest = record.timestamps[0];
    const resetTimeMs = windowMs - (now - oldest);
    const resetTimeHours = Math.ceil(resetTimeMs / (1000 * 60 * 60));
    return {
      allowed: false,
      remaining: 0,
      resetTimeHours,
    };
  }

  record.timestamps.push(now);
  return {
    allowed: true,
    remaining: maxRequests - record.timestamps.length,
    resetTimeHours: 0,
  };
}
