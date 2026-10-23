import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Split vendor chunks for better caching
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules\/(?:react|react-dom|react-router)\//,
            },
          ],
        },
      },
    },
    // Vite 8 uses Oxc by default; keep the build on its bundled minifier.
    minify: 'oxc',
    // Target modern browsers
    target: 'esnext',
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
})
