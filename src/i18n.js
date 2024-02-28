import { createI18n } from 'vue-i18n';

// Messages object containing all translations
const messages = {
  sk: {    
    navigationBar: {
      sluzby: 'Služby',
      referencie: 'Referencie',
      portfolio: 'Portfólio',
      pcZostavy: 'Údržba počítačov a notebookov',
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
      gameDays: 'S RST.sk spolupracujeme na organizácii konferencie Game Days ale aj mimo nej posledné tri roky. Vďaka svedomitosti a precíznosti p. Baksyho vieme, že sa na náš hardvér a softvér môžeme vždy spoľahnúť. Kvalita jeho práce v pomere k cenám za jeho služby je bezkonkurenčná.<br><br><b>CPO Matej Hudák</b>',
      gamesFarm: 'duri najlepsi zamestnanec',
      tripleHill: 'RST.sk pre nás zabezpečuje všetku techniku a nemenili by sme. Viackrát nás už zachránili pred nešťastným nákupom komponentov, či vyriešili problém na ktorý sme nevedeli prísť. Absolútne skvelý návrh, stavba a servis akejkoľvek IT techniky. Vrelo odporúčam!<br><br><b>CEO Peter Adamondy</b>',
      threeDVision: 'Pre mňa TOP firma keď si chcem nechať poskladať počítač, odbornosť, profesionalita, ochota poradiť, jednoducho odporúčam!<br><br><b>CEO Peter Adamčík</b>',
      // about me
      oMneText: 'Môj záujem o počítače a súvisiace technológie sa formoval od mojej mladosti. S viac ako 15-ročnou skúsenosťou v IT sektore som nadobudol vedomosti a zručnosti, ktoré aplikujem v každom aspekte práce. Ku každému projektu pristupujem s dôkladnosťou a starostlivosťou, aby som zabezpečil, že každá požiadavka je splnená na najvyššej možnej úrovni.',
      kontakt: 'Napíšte mi alebo zavolajte, osobné konzultácie robím v rámci Košíc.'      
    },
    cookies: {
      info: 'Používame súbory cookies na zlepšenie Vášho zážitku. Súhlasom s naším používaním súborov cookies vyjadrujete súhlas s ich použitím.',
      policy: 'GDPR',
      accept: 'Súhlasiť',
      reject: 'Odmietnuť',
    },
    footer: {
      created: 'Created by:',
      design: 'Designed by:',
      privacy: 'Privacy policy',
    } 
  },
  en: {
    navigationBar: {
      sluzby: 'Services',
      referencie: 'References',
      portfolio: 'Portfolio',
      pcZostavy: 'Maintenance of computers and laptops',
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
      gameDays: 'We have been collaborating with RST.sk on organizing the Game Days conference, as well as other projects, for the past three years. Thanks to Mr. Baksys diligence and precision, we know that we can always rely on our hardware and software. The quality of his work in relation to the prices for his services is unmatched. CPO Matej Hudák',
      gamesFarm: 'duri najlepsi zamestnanec',
      tripleHill: 'RST.sk provides all our technical needs, and we wouldnt change it for anything. Theyve saved us from making unfortunate component purchases multiple times and have solved problems we couldnt figure out. Absolutely fantastic design, construction, and service for any IT equipment. Highly recommended! CEO Peter Adamondy',
      threeDVision: 'For me, a TOP company when I want to have a computer assembled, expertise, professionalism, willingness to advise, I simply recommend. CEO Peter Adamčík',
      // about me
      oMneText: 'My enthusiasm for computers and related technology has been a driving force since my youth. Over the span of more than 15 years in the IT sector, Ive honed my skills and expertise. This wealth of experience informs every aspect of my work, ensuring that each project is approached with precision and care. I am dedicated to providing users with an exceptional experience tailored to their needs.',
      kontakt: 'Dont hesitate to call or text me, I conduct personal consultations within the Košice region.'
    },
    cookies: {
      info: 'We use cookies to enhance your experience. By agreeing to our use of cookies, you consent to their use.',
      policy: 'GDPR policy',
      accept: 'Accept',
      reject: 'Reject', 
    },
    footer: {
      created: 'ENCreated by:',
      design: 'Designed by:',
      privacy: 'Privacy policy',
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
