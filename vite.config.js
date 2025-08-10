import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pier-maker92.github.io',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
}) 