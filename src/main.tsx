import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.scss';
import './i18n/i18n.tsx';
import Header from './Components/Header/Header.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Header />
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);
