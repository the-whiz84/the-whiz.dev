import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://the-whiz.dev',
  trailingSlash: 'never',
  output: 'static',
  adapter: vercel({ maxDuration: 10 }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
