/* REF: https://vitejs.dev/config/ */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../build'
  },
  server: {
    port: 3000,
  }
})
