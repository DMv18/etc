import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from '@components/Header/Header.jsx';
import Footer from '@components/Footer/Footer.jsx';
import App from './App.jsx';
import ErrorBoundary from '@Errors/ErrorBoundary.jsx'
import '@styles/Global.css';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
