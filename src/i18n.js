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
      gameDays: 'S RST.sk spolupracujeme na organizácii konferencie Game Days ale aj mimo nej posledné tri roky. Vďaka svedomitosti a precíznosti p. Baksyho vieme, že sa na náš hardvér a softvér môžeme vždy spoľahnúť. Kvalita jeho práce v pomere k cenám za jeho služby je bezkonkurenčná.<br><br><b>Matej Hudák<br>CPO</b>',
      gamesFarm: 'RST.sk pre Games Farm zabezpečuje kompletnú technickú podporu už viac ako 5 rokov. Či potrebujeme nový spoľahlivý hardvér pre zamestnancov alebo dôkladnú údržbu, vždy sa obraciame na pána Baksyho a vieme, že všetko bude zvládnuté včas a v tej najvyššej kvalite.<br><br><b>Peter Nagy<br>CEO</b>',
      tripleHill: 'RST.sk pre nás zabezpečuje všetku techniku a nemenili by sme. Viackrát nás už zachránili pred nešťastným nákupom komponentov, či vyriešili problém na ktorý sme nevedeli prísť. Absolútne skvelý návrh, stavba a servis akejkoľvek IT techniky. Vrelo odporúčam!<br><br><b>Peter Adamondy<br>Riaditeľ</b>',
      threeDVision: 'Pre mňa TOP firma keď si chcem nechať poskladať počítač. Odbornosť, profesionalita, ochota poradiť, jednoducho odporúčam!<br><br><b>Peter Adamčík<br>CEO</b>',
      // about me
      oMneText: 'Môj záujem o počítače a súvisiace technológie sa formoval od mojej mladosti. S viac ako 15-ročnou skúsenosťou v IT sektore som nadobudol vedomosti a zručnosti, ktoré aplikujem v každom aspekte práce. Ku každému projektu pristupujem s dôkladnosťou a starostlivosťou, aby som zabezpečil, že každá požiadavka je splnená na najvyššej možnej úrovni.',
      kontakt: 'Napíšte mi alebo zavolajte, osobné konzultácie robím v rámci Košíc.'
    },
    computerPage: {
      p1: 'Návrh - realizácia - testovanie - podpora po odovzdaní.',
      p2: '<b>Návrh</b> zostavy je o získaní dôležitých informácii od vás, ktoré budú základom pre celú zostavu, ako napríklad - na čo bude počítač slúžiť, aké konkrétne špecifické vlastnosti má spĺnať, a podobne. Spoločnou diskusiou dôjdeme k finálnemu návrhu a po odsúhlasení nasleduje ďalšia etapa.',
      p3: 'Pod <b>realizáciou</b> si jednoducho môžete predstaviť metodické, precízne a s ohľadom na efektivitu a estetiku skladanie počítača. Môže to znieť až prehnane, ale, je dôležité pochopiť že ako každý človek, tak kaźdý jeho počítač je unikát. V tomto čase vás sem tam poteším fotkou z procesu, prípadne preberieme nejaké drobnosti ako napríklad či si krabice odkladáte alebo to zrecyklujeme a podobne.',
      p4: '<b>Testovanie</b> je pre mňa osobne tou najdôležitejšou častou samotnej realizácie. Jednak tomu predchádza vyladenie BIOSu a Windowsu no za druhé si dokonale a dôkladne overujem funkčnosť a najmä spoľahlivosť daných komponentov. Kaźdému komponentu venujem hodiny času aby som si bol istý, že váš zážitok bude bez akejkoľvek prekážky alebo prestoja.',
      p5: '<b>Podpora po odovzdaní</b> zostavy je pre mňa samozrejmosťou, akýkoľvek problém hneď po zapojení hoci aj pár dní po užívaní budeme riešiť spoločne. Sem tam sa môže vyskytnúť špecifický problém s konkrétnym programom, ktorý je u daného človeka využívaný a jeho dianie spôsobuje nestabilitu. Preto, vždy po určitom krátkom čase od odovzdania sa aj ja sám ozvem vám, aby som sa uistil, že je všetko presne tak, ako sme sa dohodli a počítač spĺňa všetky očakávania.',
    },
    laptopPage: {
      p1: "V notebookoch nemá zákazník až tak voľnú ruku voľby konkrétnych komponentov ako pri zostavovaní počítača na mieru. To ale neznamená, že si nevieme vybrať lepší, kvalitnejší a spoľahlivejší. Nie vždy je to o priamom výkone a nie vždy mojim zákaznikom odporúčam vôbec vymeniť ich notebook.",
      p2: 'Často sa stretávam s podobnými problémami - pomalosť systému, trhanie, prehrievanie. Táto situácia zvyčajne vedie zákazníka k vyhľadávaniu nového notebooku. No, som názoru, že je vždy lepšie dané zariadenie vylepšiť alebo dať do stavu "ako nový" (zvyčajne až do lepšieho stavu po technickej stránke) než sa ho zbavovať a kupovať nový. ',
      p3: "Samozrejme, aj v prípade kúpy nového notebooku rád poradím a vyhľadám taký aby bol zákazník nie len spokojný s jeho výkonom, kvalitou a prevedením. Ale, aby bol spokojný aj počas celého života notebooku ktorý pri správnej starostlivosti vydrží o dosť dlhšie ako je jeho záručná doba.",
      p4: "Servisovanie notebooku nie je niečo, čoho by ste sa mali obávať. Práve naopak, pravidelná starostlivosť so sebou nesie iba benefity. Zariadenie ide svižnejšie, vydrží dlhšie a najmä sa vyhnete náročným (ako finančne tak aj časovo) opravám alebo predčasnej kúpe nového zariadenia. ",
    },
    repairPage: {
      p1: 'Každý stroj si zaslúži druhú šancu.',
      p2: 'V dnešnej dobe je jednak z ekonomického ale aj z ekologického hľadiska dobré sa vždy zamyslieť, či nemá zmysel opraviť dané zariadenie. Najmä ak sa jedná o notebook, môže jeho repasovanie častokrát zlepšiť funkčnosť natoľko, že pominie dôvod na kúpu nového modelu.',
      p3: 'Dôležitou súčasťou opravy je použitie kvalitných náhradných dielov, čím sa zvýši spoľahlivosť zariadenia a predĺži jeho životnosť.',
    },
    newComputerPage: {
      p1: 'S údržbou zariadenia je to veľmi podobné starostlivosti o seba. Viete sa o počítač starať, čistiť ho sám a raz za rok či dva zabehnúť ho dať profesionálne skontrolovať.',
      p2: 'Je u mňa samozrejmosťou že pri preberaní vašej novej zostavy si spolu preberieme presne postup čistenia a údržby. Kde sú prachové filtre, ako sa vyberajú, čo môže pomôcť a čo naopak uškodí a kumuluje prach v počítači.',
      p3: 'V dokonalom svete sa tento postup dodrží a vy sa môžete tešiť dlhodobo tichému a výkonnému stroju. Samozrejme, v živote to nie vždy ide tak, ako si predstavujeme a vtedy vám rád pomôžem.',
      p4: 'Samozrejme, nie je prekážkou ani to, ak bol počítač zostavený niekým iným. Veľmi rád sa na to pozriem a navrhnem prípadne zlepšenia, ak to situácia vyžaduje.',
    },
    diagnosticsPage: {
      p1: 'Diagnostika pomáha riešiť ale aj prechádzať problémom.',
      p2: 'Pri kúpe použitého počítača, notebooku alebo iných komponentov je dobré si vopred overiť 100% funkčnosť. Vyhnete sa dodatočným neočakávaným investíciám a prípadným problémom.',
      p3: 'Zároveň, ak plánujete predať svoj počítač. Je dobré ho na predaj pripraviť tak, aby bolo všetko pretestované, prečistené s dokladmi o stabilite daného zariadenia.',
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
      pcZostavy: 'Computer and laptop maintenance',
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
      gameDays: 'We have been collaborating with RST.sk on organizing the Game Days conference, as well as other projects, for the past three years. Thanks to Mr. Baksys diligence and precision, we know that we can always rely on our hardware and software. The quality of his work in relation to the prices for his services is unmatched. <br><br><b>Matej Hudák<br>CPO</b>',
      gamesFarm: 'RST.sk has been providing complete technical support for Games Farm for over 5 years. Whether we need new reliable hardware for our employees or thorough maintenance, we always turn to Mr. Baksy, knowing that everything will be handled on time and with the highest quality.<br><br><b>Peter Nagy<br>CEO</b>',
      tripleHill: 'RST.sk provides all our technical needs, and we wouldnt change it for anything. Theyve saved us from making unfortunate component purchases multiple times and have solved problems we couldnt figure out. Absolutely fantastic design, construction, and service for any IT equipment. Highly recommended!<br><br><b>Peter Adamondy<br>Director</b>',
      threeDVision: 'For me, a TOP company when I want to have a computer assembled, expertise, professionalism, willingness to advise, I simply recommend. <br><br><b>Peter Adamčík<br>CEO</b>',
      // about me
      oMneText: 'My enthusiasm for computers and related technology has been a driving force since my youth. Over the span of more than 15 years in the IT sector, Ive honed my skills and expertise. This wealth of experience informs every aspect of my work, ensuring that each project is approached with precision and care. I am dedicated to providing users with an exceptional experience tailored to their needs.',
      kontakt: 'Dont hesitate to call or text me, I conduct personal consultations within the Košice region.'
  },
  computerPage: {
    p1: 'Design - implementation - testing - post-delivery support.',
    p2: "The design involves gathering important information from you, which will serve as the cornerstone for the entire setup. Based on your specifications, such as the computer's purpose and specific requirements, we collaboratively arrive at a final design, followed by approval and moving to the next stage.",
    p3: 'Implementation involves methodical, precise assembly of the computer with a focus on efficiency and aesthetics. Every computer, like every person, is unique. During this phase, I may occasionally delight you with photos of the process, or we may discuss details like whether you prefer to keep or recycle the packaging.',
    p4: 'Testing is the most crucial part of the process for me. It involves fine-tuning the BIOS and Windows settings, followed by thorough testing of the functionality and, most importantly, the reliability of the components. I dedicate hours to each component to ensure your experience is smooth and without any obstacles or hiccups.',
    p5: "Post-delivery support: The process doesnt end with the delivery of the finished computer build. Any issues, whether immediate or after a few days of usage, will be addressed together. Specific problems with particular programs causing instability may arise, which we'll resolve. Periodically, I'll reach out to ensure everything is exactly as agreed upon and your computer meets all the expectations."
  },
  laptopPage: {
    p1: "In laptops, customers don't have as much freedom to choose specific components as they do when customizing a computer. However, that doesn't mean we can't select better, higher-quality, and more reliable options. It's not always about raw performance, and I don't always recommend replacing laptops to my customers.",
    p2: "I often encounter similar issues - system slowness, stuttering, overheating. This situation typically leads customers to seek a new laptop. However, I believe it's always better to upgrade or restore the device to a like-new condition (usually better in technical terms) than to dispose of it and buy a new one.",
    p3: "Of course, in the case of purchasing a new laptop, I'm happy to advise and find one that meets not only your performance, quality, and design expectations but also ensures satisfaction throughout the device's lifespan with proper care, which can extend far beyond its warranty period.",
    p4: "Servicing a laptop is nothing to be feared. On the contrary, regular maintenance only brings benefits. The device runs faster, lasts longer, and, most importantly, avoids costly (both financially and in terms of time) repairs or premature replacement."
  },
  repairPage: {
    p1: 'Every machine deserves a second chance.',
    p2: "In today's world, it's good both economically and ecologically to consider repairing a device. Especially with laptops, refurbishment can often improve functionality to the point where there's no need to buy a new model.",
    p3: 'Using high-quality spare parts is an essential part of the repair process. This ensures the durability and reliability of the device for an extended period.'
  },
  newComputerPage: {
    p1: 'Taking care of your device is much like taking care of yourself. You can maintain your computer, clean it yourself, and once every year or two, have it professionally serviced.',
    p2: "When receiving your new setup, we'll go through the exact cleaning and maintenance procedures together. We'll discuss where the dust filters are, how to remove them, what can help, and what might harm and accumulate dust in the computer.",
    p3: "In an ideal world, this process is followed, and you can enjoy a consistently quiet and powerful machine. Of course, life doesn't always go as planned, and that's where I'm happy to help.",
    p4: "Certainly, it's not a problem if the computer was assembled by someone else. I'm more than happy to take a look and suggest even any improvements if the situation requires."
  },
  diagnosticsPage: {
    p1: 'Diagnostics help solve problems but also anticipate them.',
    p2: "When buying a used computer, laptop, or other components, it's good to verify their functionality beforehand. This prevents additional unexpected investments and potential issues.",
    p3: "Likewise, if you plan to sell your computer, it's good to prepare it for sale with everything thoroughly tested, cleaned, and with documentation confirming the stability of the device."
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

// function getBrowserLanguage(options = { supportedLanguages: ['en', 'sk'], defaultLanguage: 'sk' }) {
//   const browserLocale = navigator.language.split('-')[0]; // Get the language code
//   return options.supportedLanguages.includes(browserLocale) ? browserLocale : options.defaultLanguage;
// }

// Create i18n instance with configuration
const i18n = createI18n({
  locale: 'sk', // Automatically detect and set locale
  fallbackLocale: 'sk', // Fallback to Slovak if the detected locale is not supported
  messages,
});

export default i18n;
