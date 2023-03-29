import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), 
  
  eslintPlugin({
    fix: true, 
    cache: true,
    include: './src/*/.@(js)|jsx|ts|tsx),'
  }),
prettierPlugin(),],
})
