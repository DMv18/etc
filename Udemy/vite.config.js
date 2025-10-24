import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': '/public',
      '@components': '/src/components',
      '@data': '/src/data',
      '@styles': '/src/styles',
      '@hooks': '/src/hooks',
      '@home': '/src/App/pages/Home',
      '@dashboard_products': '/src/App/pages/Product_dashboard',
      '@tic-tac': '/src/App/pages/tic-tac',
      '@Errors': '/src/App/Errors',
      '@routes': '/src/App/Routes',
      '@user': '/src/App/pages/user',
      '@pokedex': '/src/App/pages/Pokedex',
    }
  }
})
