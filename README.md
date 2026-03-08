# The-Whiz.dev | Neon Portfolio

![The-Whiz Portfolio Preview](public/assets/img/preview-hero-grid.png)

Source for [the-whiz.dev](https://the-whiz.dev), a React and Tailwind CSS v4 portfolio with a neon terminal aesthetic, custom SVG icon system, and a hero-scoped wireframe horizon.

## Features

- Neon cyan and pink visual system with glitch typography and terminal-style stats.
- Hero-scoped animated wireframe horizon with restrained ambient motion.
- Custom local SVG icon family used across navigation, CTAs, stats, skills, footer, and utility controls.
- Dual shimmer CTAs in the hero for resume download and location.
- Responsive card-driven layout for projects, experience, skills, and certifications.
- Mobile-friendly hover-state fallback using `IntersectionObserver`.
- Live GitHub repo count and developer uptime in the hero terminal card.
- Vercel Speed Insights integration for real-user performance monitoring.

## Tech Stack

- Framework: React 19 with Vite
- Language: TypeScript
- Styling: Tailwind CSS v4
- Animation: Motion
- Routing: React Router 7
- Utilities: `clsx`, `tailwind-merge`, `class-variance-authority`
- Package manager: Bun
- Deployment: Vercel

## Local Development

Prerequisite: Bun

1. Clone the repository.
   ```bash
   git clone https://github.com/the-whiz84/the-whiz.dev.git
   cd the-whiz.dev
   ```
2. Install dependencies.
   ```bash
   bun install
   ```
3. Start the development server.
   ```bash
   bun run dev
   ```
4. Open `http://localhost:5173`.

## Scripts

- `bun run dev`: start the Vite development server
- `bun run build`: run TypeScript build and production bundle
- `bun run lint`: run ESLint
- `bun run preview`: preview the production build locally

## Performance Notes

- Hero animation is isolated to the top section to limit continuous work lower in the page.
- Static sections rely on lightweight CSS effects and deferred image loading.
- Current production build output is split into cached vendor and app chunks through Vite manual chunking.

## License

MIT. See [LICENSE](LICENSE).
