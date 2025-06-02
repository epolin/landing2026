import { defineConfig } from 'vite'

export default defineConfig({
  base: '/landing2026/',
  root: '.',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 8001,
    open: true,
    host: true
  }
}) 