import { defineConfig } from 'vite'
import { markdownPlugin } from './src/plugins/markdown-plugin.js'
import { rssPlugin } from './src/plugins/rss-plugin.js'

export default defineConfig({
  root: 'src',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        js: 'src/js/main.js'
      }
    }
  },
  plugins: [markdownPlugin(), rssPlugin()]
})