import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.scss';
import './i18n/i18n.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import ParticlesContainer from './Components/ParticlesContainer/ParticlesContainer.tsx';
import Footer from './Components/Footer/Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <ParticlesContainer />
      <App />
      <Footer />
    </LanguageProvider>
  </React.StrictMode>,
);
