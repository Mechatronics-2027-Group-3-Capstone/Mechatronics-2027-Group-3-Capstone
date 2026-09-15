import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built site works from any GitHub Pages URL
// (org/user page or project page) without extra configuration.
export default defineConfig({
  plugins: [react()],
  base: './',
})
