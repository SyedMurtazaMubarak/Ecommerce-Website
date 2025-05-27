import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-Project-2/', // Your GitHub repo name here
  plugins: [react()],
})
