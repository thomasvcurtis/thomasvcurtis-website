import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/thomasvcurtis-website/',
  build: {
    sourcemap: false,
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
