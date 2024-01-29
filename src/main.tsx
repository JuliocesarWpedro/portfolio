import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.scss';
import './i18n/i18n.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndividualProject from './Components/Projects/IndividualProject.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/project/:projectName"
            element={<IndividualProject  />}
          />
        </Routes>
      </Router>
    </LanguageProvider>
  </React.StrictMode>,

);

