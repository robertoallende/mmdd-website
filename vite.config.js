import { defineConfig } from 'vite'
import { markdownPlugin } from './src/plugins/markdown-plugin.js'

export default defineConfig({
  root: 'src',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [markdownPlugin()]
})