import React from "react";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './translations/en.json';
import ptBrJson from './translations/ptBr.json';

// Site Inicia em Pt-BR
i18n.use(initReactI18next).init({
  fallbackLng: 'ptBr',
  interpolation: { 
    escapeValue: false 
  },

  // Quais linguagens o site suporta ou vai ter
  resources:{
    en: enJson,
    ptBr: ptBrJson,
  }
});

export default i18n;