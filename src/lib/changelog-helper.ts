// Helper file for changelogs.
// Automatic auto-seeding on GET requests has been disabled so admin deletions in the admin panel are strictly preserved.

export async function ensureDefaultChangelogs() {
  // Intentionally no-op to allow administrators full control over creating, editing, and deleting news/changelogs without automatic re-seeding.
  return;
}
