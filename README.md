# the-whiz.dev

Personal website for **Radu Chiriac** (`The-Whiz`), HPC & Linux Infrastructure Engineer.

Built with an **Industrial Spec Sheet** layout on **Astro 7**, **Tailwind CSS v4**, and **Vercel**—pre-rendered as static HTML with an edge-cached Astro Server Island for live GitHub activity.

## Features

- Static-first pages (`/`, `/now`, `/colophon`, `/privacy`, `/404`) with native cross-document View Transitions.
- System-default Light/Dark theme (`prefers-color-scheme`) with zero first-paint flash and `localStorage` toggle.
- Edge-cached Astro Server Island (`server:defer`) showing live GitHub public repo count, latest updated code repository, and a 52-week activity trace with interactive bar inspection and static fallback.
- Interactive 5-layer infrastructure stack schematic and accessible `⌘K` / `Ctrl+K` quick-jump palette.
- Self-hosted typography (`Space Grotesk Variable` + `IBM Plex Mono`).
- Cookieless performance telemetry via `@vercel/speed-insights/astro`.

## Tech Stack

- **Framework:** Astro 7 (`output: 'static'` + `@astrojs/vercel` adapter)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Fonts:** `@fontsource-variable/space-grotesk`, `@fontsource/ibm-plex-mono`
- **Package Manager:** Bun
- **Hosting & Telemetry:** Vercel + `@vercel/speed-insights/astro`

## Local Development

Prerequisite: Bun

```bash
bun install
bun run dev
```

Open `http://localhost:4321`.

## Scripts

- `bun run dev`: start the Astro development server
- `bun run check`: run Astro & TypeScript diagnostics (`astro check`)
- `bun run build`: run `astro check && astro build`
- `bun run preview`: preview the production build locally

## License

MIT. See [LICENSE](LICENSE).
