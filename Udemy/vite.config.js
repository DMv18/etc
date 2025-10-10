import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': '/public',
      '@home': '/src/pages/Home',
      '@components': '/src/components',
      '@dashboard_products': '/src/pages/Product_dashboard',
      '@tic-tac': '/src/pages/tic-tac',
      '@Errors': '/src/pages/Errors',
      '@data': '/src/data',
      '@routes': '/src/pages/Routes',
      '@styles': '/src/styles',
      '@user': '/src/pages/user',
    }
  }
})
