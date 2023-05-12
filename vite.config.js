/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: vite.config.js
     @version: I
     Creation: 28/03/2023
     Last modification: 01/05/2023 */

import { defineConfig } from 'vite'
// Implement prettier and eslint
import eslintPlugin from 'vite-plugin-eslint'
import prettierPlugin from 'vite-plugin-prettier'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),

    eslintPlugin({
      fix: true,
      cache: true,
      include: './src/*/.@(js)|jsx|ts|tsx),',
    }),
    prettierPlugin(),
  ],
})
