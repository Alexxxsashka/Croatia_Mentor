# Learning visuals and depth

Five project-owned images were generated with the built-in imagegen tool (not a CLI fallback). Files are in `public/assets/learning/`: island.png, words.png, grammar.png, audio.png, travel.png.

The island is a Croatian limestone village diorama. Vocabulary uses letter tiles and puzzle pieces; grammar uses a notebook and building blocks; audio uses headphones near Plitvice; reading uses a Split street. These four topic covers are shared by related games and lesson types, including matrix and list views.

The scroll controller observes visible blocks, schedules one animation frame per scroll update, and resets depth for reduced motion. It does not modify lesson progression, authentication, exercises, or database state. The interior background is darkened with an 88–97% navy overlay. Light theme keeps readable light content surfaces.

Landing additions: practical goals, a Split photo scene, a three-step learning sequence and native accessible FAQ disclosures. New copy supports RU, UA and EN. No invented pricing, counts, or testimonials.

The original DESIGN.md at the workspace root has no explicit island specification. The user explicitly requested islands and motion for interior pages, superseding its original recommendation to omit exercise parallax.

Validation: Next production build and TypeScript passed. New components, game catalog and map pass focused ESLint; the pre-existing lessons localStorage hydration effect still triggers `react-hooks/set-state-in-effect` in a broader lint run. Desktop and 390px mobile landing checks confirmed no horizontal overflow, working FAQ disclosures and scroll-driven photo transforms. Local protected routes redirect to sign-in; authenticated progress, Neon and Firebase flows were not tested without credentials.

The current hero uses the static mountain image and separate foreground scroll layers, preserving subsequent edits on this branch. Earlier rendered MP4 files remain available but are not mounted by the current hero component.
