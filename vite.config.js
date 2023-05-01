import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import prettierPlugin from 'vite-plugin-prettier'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),

    eslintPlugin({
      fix: true,
      cache: true,
      include: './src/*/.@(js)|jsx|ts|tsx),',
    }),
    prettierPlugin()],
})
