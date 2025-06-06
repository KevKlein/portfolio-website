import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
    '/shenanigans': { target: 'http://localhost:3000' },
    '/movies':    { target: 'http://localhost:3001' }
  }
  }
})
