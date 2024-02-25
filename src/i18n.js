import { createI18n } from 'vue-i18n';

// Messages object containing all translations
const messages = {
  sk: {    
    navigationBar: {
      sluzby: 'Služby',
      referencie: 'Referencie',
      portfolio: 'Portfólio',
      pcZostavy: 'PC zostavy',
      notebooky: 'Notebooky',
      oMne: 'O mne',
    },
    mainPage: {
      // RST
      rychlejsie: 'RÝCHLEJŠIE',
      spolahlivejsie: 'SPOLAHLIVEJŠIE',
      tichsie: 'TICHŠIE',
      // buttons - the other 3 are in header
      opravaPC: 'Oprava počítačov a notebookov',
      skladaniePC: 'Skladanie počítačov',
      diagnostika: 'Diagnostika',
      // partners, references
      gameDays: 'gamedays je uzasny event urcite tam treba ist kazdy rok',
      gamesFarm: 'duri najlepsi zamestnanec',
      tripleHill: 'daliborko milovany',
      threeDVision: '3D',
      // about me
      oMneText: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      kontakt: 'Napíšte mi alebo zavolajte, osobné konzultácie robím v rámci Košíc.'      
    },
    cookies: {
      info: 'pouzivame cookies treba prijat',
      policy: 'GDPR policia',
      accept: 'Accept',
      reject: 'Reject',
    }
  },
  en: {
    navigationBar: {
      sluzby: 'Services',
      referencie: 'References',
      portfolio: 'Portfolio',
      pcZostavy: 'Custom PC',
      notebooky: 'Laptops',
      oMne: 'About me',
    },
    mainPage: {
      // RST
      rychlejsie: 'RÝCHLEJŠIE',
      spolahlivejsie: 'SPOLAHLIVEJŠIE',
      tichsie: 'TICHŠIE',
      // buttons - the other 3 are in header
      opravaPC: 'Computer and laptop repair',
      skladaniePC: 'Custom built PC',
      diagnostika: 'Diagnosis',
      // partners, references
      gameDays: 'gamedays in inglish',
      gamesFarm: 'duri najlepsi zamestnanec',
      tripleHill: 'daliborko milovany',
      threeDVision: '3D',
      // about me
      oMneText: 'Lorem ipsum',
      kontakt: 'Napíšte mi alebo zavolajte, osobné konzultácie robím v rámci Košíc.'
    },
    cookies: {
      info: 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
      policy: 'GDPR policy',
      accept: 'Accept',
      reject: 'Reject',    }
    
  },
  // Add other languages here
};

function getBrowserLanguage(options = { supportedLanguages: ['en', 'sk'], defaultLanguage: 'sk' }) {
  const browserLocale = navigator.language.split('-')[0]; // Get the language code
  return options.supportedLanguages.includes(browserLocale) ? browserLocale : options.defaultLanguage;
}

// Create i18n instance with configuration
const i18n = createI18n({
  locale: getBrowserLanguage(), // Automatically detect and set locale
  fallbackLocale: 'sk', // Fallback to Slovak if the detected locale is not supported
  messages,
});

export default i18n;