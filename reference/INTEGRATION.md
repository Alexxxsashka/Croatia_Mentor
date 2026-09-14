# New design integration

The complete supplied Vite reference source is preserved in `new-design/`, including its assets, translations, scripts and lockfile. Dependency folders, generated builds and logs are excluded. The reference remains a browser-only demo; it is not the production application.

Production remains the original Next.js application. The homepage uses the supplied reference layout and image. The shared navigation, local Manrope font, dark/light colors and practice catalog use the reference design. Existing lesson, game, vocabulary, profile, admin and AI implementations keep their server connections and receive the shared visual theme.

The shell reads the existing NextAuth session and `/api/progress`. Account actions use the original authentication routes. Administrative navigation uses the authenticated role. No demo role selector, fake sign-in, local-only progress or simulated AI replaces a production function. Prisma schema, Neon data and Firebase configuration are unchanged.

The reference's additional demo-only membership, wallet, schedule, onboarding and legal-document screens have not become production services. Its HR locale is preserved in the reference; production retains its existing EN/RU/UA locale coverage. These are remaining scope differences, not verified integrations.

## Verification

- Production build and TypeScript passed locally.
- ESLint passed for the new reference components and adapted practice catalog.
- Browser checks covered the homepage, practice navigation, starting word match, a correct matched pair and mobile navigation.
- Local authenticated/database checks require environment values absent from the cloned repository. They must be verified against an authorized configured environment; a successful build alone does not verify Neon, Firebase or AI calls.

## Development

Run `npm ci`, provide the existing site's environment variables using `.env.example`, and run `npm run dev`.

The `codex/reference-design` branch contains the integration; the original site remains recoverable in Git history. Deployment continues through the existing Vercel Git integration without replacing its environment settings.
