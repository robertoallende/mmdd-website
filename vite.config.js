import { defineConfig } from 'vite'
import { markdownPlugin } from './src/plugins/markdown-plugin.js'
import { rssPlugin } from './src/plugins/rss-plugin.js'
import { copyImagesPlugin } from './src/plugins/copy-images-plugin.js'

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
        main: 'src/index.html'
      }
    }
  },
  // Ensure images and other assets are properly handled
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  plugins: [markdownPlugin(), rssPlugin(), copyImagesPlugin()]
})