import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Tablero from './tic-tac/tablero.jsx'
import App from './App.jsx';
import ErrorBoundary from './Errors/ErrorBoundary.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Header />
      <Tablero/>
    </ErrorBoundary>
  </StrictMode>,
)
