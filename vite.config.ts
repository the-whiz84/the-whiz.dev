import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Split vendor chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'icons': ['lucide-react'],
        },
      },
    },
    // Enable minification
    minify: 'esbuild',
    // Target modern browsers
    target: 'esnext',
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
})
