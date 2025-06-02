import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/landing2026/' : '/',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    copyPublicDir: true
  },
  server: {
    port: 8003,
    open: true,
    host: true
  }
}) 