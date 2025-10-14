import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': '/public',
      '@home': '/src/App/pages/Home',
      '@components': '/src/components',
      '@dashboard_products': '/src/App/pages/Product_dashboard',
      '@tic-tac': '/src/App/pages/tic-tac',
      '@Errors': '/src/App/Errors',
      '@data': '/src/data',
      '@routes': '/src/App/Routes',
      '@styles': '/src/styles',
      '@user': '/src/App/pages/user',
      '@pokedex': '/src/App/pages/Pokedex',
    }
  }
})
