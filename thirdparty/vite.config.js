import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    manifest: true
  },
  rollupOptions: {
    input: resolve(__dirname, 'resources/js/nova.js'),
    external: ['vue', 'Framework'],
    output: {
      globals: {
        vue: 'Vue',
        framework: 'Framework',
      }
    }
  }
})
