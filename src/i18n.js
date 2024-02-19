import { createI18n } from 'vue-i18n';

// Messages object containing all translations
const messages = {
  sk: {
    mainPage: {
      // header
      sluzby: 'Služby',
      referencie: 'Referencie',
      portfolio: 'Portfólio',
      pcZostavy: 'PC zostavy',
      notebooky: 'Notebooky',
      oMne: 'O mne',
      // RST
      rychlejsie: 'RÝCHLEJŠIE',
      spolahlivejsie: 'SPOLAHLIVEJŠIE',
      tichsie: 'TICHŠIE',
      // buttons - the other 3 are in header
      opravaPC: 'Oprava počítačov a notebookov',
      skladaniePC: 'Skladanie počítačov',
      diagnostika: 'Diagnostika',


      

    }
  },
  en: {
    mainPage: {
      sluzby: 'Services',
      referencie: 'References',
      portfolio: 'Portfolio',
      pcZostavy: 'Custom PC',
      notebooky: 'Laptops',
      oMne: 'About me',
      // buttons - the other 3 are in header
      opravaPC: 'Computer and laptop repair',
      skladaniePC: 'Custom built PC',
      diagnostika: 'Diagnosis',
    }
    
  },
  // Add other languages here
};

// Create i18n instance with configuration
const i18n = createI18n({
  locale: 'sk',
  fallbackLocale: 'sk',
  messages,
});

export default i18n;
