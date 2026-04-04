import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_es from './translations/es/common'
import common_en from './translations/en/common'

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: 'en',
  resources: {
    es: {
      common: common_es
    },
    en: {
      common: common_en
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);