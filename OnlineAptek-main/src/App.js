import React from 'react';
import Router from './router/Router';
import { LanguageProvider } from './LanguageContext/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  );
};

export default App;
