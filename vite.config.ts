import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2,
          },
        },
      },
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@/config': resolve(__dirname, 'src', 'shared', 'config'),
      '@': resolve(__dirname, 'src'),
      vue: '@vue/compat',
    },
  },
})
