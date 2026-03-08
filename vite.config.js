import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for GitHub Pages deployment
// The base path must match the repository name

export default defineConfig({
  base: "/ThreadState/",
  plugins: [react()],
})
