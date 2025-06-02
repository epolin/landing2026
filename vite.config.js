import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  root: '.',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['gsap', 'lenis']
        }
      }
    }
  },
  server: {
    port: 8001,
    open: true,
    host: true
  },
  optimizeDeps: {
    include: ['gsap', 'lenis']
  }
}) 