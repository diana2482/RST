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
      gameDays: 'S RST.sk spolupracujeme na organizácii konferencie Game Days ale aj mimo nej posledné tri roky. Vďaka svedomitosti a precíznosti p. Baksyho vieme, že sa na náš hardvér a softvér môžeme vždy spoľahnúť. Kvalita jeho práce v pomere k cenám za jeho služby je bezkonkurenčná.<br><br><b>Matej Hudák<br><br>CPO</b>',
      gamesFarm: 'duri najlepsi zamestnanec',
      tripleHill: 'RST.sk pre nás zabezpečuje všetku techniku a nemenili by sme. Viackrát nás už zachránili pred nešťastným nákupom komponentov, či vyriešili problém na ktorý sme nevedeli prísť. Absolútne skvelý návrh, stavba a servis akejkoľvek IT techniky. Vrelo odporúčam!<br><br><b>Peter Adamondy<br><br>Riaditeľ</b>',
      threeDVision: 'Pre mňa TOP firma keď si chcem nechať poskladať počítač, odbornosť, profesionalita, ochota poradiť, jednoducho odporúčam!<br><br><b>Peter Adamčík<br><br>CEO</b>',
      // about me
      oMneText: 'Môj záujem o počítače a súvisiace technológie sa formoval od mojej mladosti. S viac ako 15-ročnou skúsenosťou v IT sektore som nadobudol vedomosti a zručnosti, ktoré aplikujem v každom aspekte práce. Ku každému projektu pristupujem s dôkladnosťou a starostlivosťou, aby som zabezpečil, že každá požiadavka je splnená na najvyššej možnej úrovni.',
      kontakt: 'Napíšte mi alebo zavolajte, osobné konzultácie robím v rámci Košíc.'
    },
    computerPage: {
      p1: 'Navrhnem a zostavím zariadenie podľa Vašich predstáv a potrieb. Dôraz prikladám na kvalitu vyhotovenia zostavy a testovanie v záťaži pre záruku plnej funkčnosti od momentu prvého zapojenia.'
    },
    laptopPage: {
      p1: "V notebookoch nemá zákazník až tak voľnú ruku voľby konkrétnych komponentov ako pri skladaní počítača na mieru. To ale neznamená že si nevieme vybrať lepší, kvalitnejší a trvácnejší. Nie vždy je to o priamom výkone a nie vždy mojim zákaznikom odporúčam vôbec vymeniť ich notebook.",
      p2: 'Stretávam sa často s podobnými problémami - pomalosť systému, trhanie, prehrievanie. Táto situácia zvyčajne vedie zákazníka ku vyhľadávaniu nového notebooku. No, som názoru že je vždy lepšie dané zariadenie vylepšiť alebo dať do stavu "ako nový" (zvyčajne až do lepšieho stavu po technickej stránke) než sa ho zbavovať a kupovať nový. ',
      p3: "Samozrejme aj v prípade kúpy nového notebooku rád poradím a vyhľadám taký aby bol zákazník nie len spokojný s jeho výkonom, kvalitou a prevedením. Ale, aby bol spokojný aj počas celého života notebooku ktorý pri správnej starostlivosti vydrží o dosť dlhšie ako je jeho záručná doba.",
      p4: "Servisovanie notebooku nie je niečo čoho by ste sa mali obávať. Práve naopak, pravidelná starostlivosť so sebou nesie iba benefity. Zariadenie ide svižnejšie, vydrží dlhšie a najmä sa vyhnete náročným (ako finančne tak aj časovo) opravám alebo predčasnej kúpe nového zariadenia. ",
    },
    repairPage: {
      p1: 'Každý stroj si zaslúži druhú šancu. Nech už sa jedná o akútnu poruchu alebo dlhodobé problémy (napr. prehrievanie, nadmerná hlučnosť), pocit spomaleného zariadenia alebo estetickú vadu.',
    },
    newComputerPage: {
      p1: 'Navrhnem a zostavím zariadenie podľa Vašich predstáv a potrieb. Dôraz prikladám na kvalitu vyhotovenia zostavy a testovanie v záťaži pre záruku plnej funkčnosti od momentu prvého zapojenia.'
    },
    diagnosticsPage: {
      p1: 'Pri kúpe použitého počítača, notebooku alebo iných komponentov je dobré si predom overiť 100% funkčnosť. Vyhnete sa dodatočným neočakávaným investíciám a prípadným problémom. Pri predaji Vám viem poskytnúť prvotnú prípravu zariadenia pre bezproblémový predaj.',
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
      gameDays: 'We have been collaborating with RST.sk on organizing the Game Days conference, as well as other projects, for the past three years. Thanks to Mr. Baksys diligence and precision, we know that we can always rely on our hardware and software. The quality of his work in relation to the prices for his services is unmatched. <br><br><b>Matej Hudák<br><br>CPO</b>',
      gamesFarm: 'duri najlepsi zamestnanec',
      tripleHill: 'RST.sk provides all our technical needs, and we wouldnt change it for anything. Theyve saved us from making unfortunate component purchases multiple times and have solved problems we couldnt figure out. Absolutely fantastic design, construction, and service for any IT equipment. Highly recommended!<br><br><b>Peter Adamondy<br><br>Director</b>',
      threeDVision: 'For me, a TOP company when I want to have a computer assembled, expertise, professionalism, willingness to advise, I simply recommend. <br><br><b>Peter Adamčík<br><br>CEO</b>',
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
      created: 'Created by:',
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
