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
      oMneText: 'Môj záujem o počítače a súvisiace technológie sa formoval od mojej mladosti. S viac ako 15-ročnou skúsenosťou v IT sektore som nadobudol vedomosti a zručnosti, ktoré aplikujem v každom aspekte práce. Ku každému projektu pristupujem s dôkladnosťou a starostlivosťou, aby som zabezpečil, že každá požiadavka je splnená na najvyššej možnej úrovni.',
      kontakt: 'Napíšte mi alebo zavolajte, osobné konzultácie robím v rámci Košíc.'      
    },
    cookies: {
      info: 'Používame súbory cookies na zlepšenie vášho zážitku. Súhlasom s naším používaním súborov cookies vyjadrujete súhlas s ich použitím.',
      policy: 'GDPR',
      accept: 'Súhlasiť',
      reject: 'Odmietnuť',
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
      oMneText: 'My enthusiasm for computers and related technology has been a driving force since my youth. Over the span of more than 15 years in the IT sector, Ive honed my skills and expertise. This wealth of experience informs every aspect of my work, ensuring that each project is approached with precision and care. I am dedicated to providing users with an exceptional experience tailored to their needs.',
      kontakt: 'Dont hesitate to call or text me, I conduct personal consultations within the Košice region .'
    },
    cookies: {
      info: 'We use cookies to enhance your experience. By agreeing to our use of cookies, you consent to their use.',
      policy: 'GDPR policy',
      accept: 'Accept',
      reject: 'Reject',    
    }    
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
