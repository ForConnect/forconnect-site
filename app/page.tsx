const content: Record<'nl' | 'en', ContentType> = {
  nl: {
    nav: ['Home', 'Hoe het werkt', 'Voor wie', 'Voordelen', 'Prijzen', 'Demo', 'FAQ'],

    heroBadge: 'AI voice agent voor servicebedrijven in Nederland',
    heroTitle: 'Altijd bereikbaar, zonder de telefoon op te nemen.',
    heroSubtitle:
      'ForConnect beantwoordt inkomende oproepen in vloeiend Nederlands, plant afspraken en stuurt bevestigingen – 24/7, zonder extra personeel.',
    heroPrimaryCta: 'Plan een demo',

    howTitle: 'Hoe werkt ForConnect?',
    howSteps: [
      { title: '1. Klant belt jouw vaste nummer', text: '' },
      { title: '2. AI handelt het verzoek af', text: '' },
      { title: '3. Bevestiging wordt automatisch verstuurd', text: '' },
    ],

    forWhoTitle: 'Voor wie is ForConnect?',
    forWhoItems: [
      {
        title: 'Loodgieters',
        text: 'Geen gemiste oproepen terwijl je op locatie werkt.',
      },
      {
        title: 'Elektriciens',
        text: 'Altijd professioneel bereikbaar, ook bij storingen.',
      },
      {
        title: 'Installatie- & servicebedrijven',
        text: 'Meer structuur en betere opvolging van klanten.',
      },
      {
        title: 'Kapsalons, barbershops & schoonheidssalons',
        text: 'Minder telefoontjes tijdens het werk.',
      },
    ],

    benefitsTitle: 'Waarom kiezen voor ForConnect?',
    benefits: [
      { title: 'Geen gemiste oproepen', text: 'Altijd bereikbaar voor klanten.' },
      { title: 'Meer afspraken', text: 'Directe afhandeling van oproepen.' },
      { title: 'Natuurlijke Nederlandse stem', text: 'Professioneel en menselijk.' },
      { title: 'Geen personeelskosten', text: 'Vaste maandprijs.' },
    ],

    pricingTitle: 'Prijzen',
    pricingSubtitle: 'Transparante pakketten, afgestemd op jouw bedrijf.',
    plans: [
      {
        name: 'Start',
        price: 'Vanaf €69',
        per: 'per maand',
        description: 'Voor zelfstandigen en kleine bedrijven.',
        features: [
          'AI beantwoordt oproepen',
          'Afspraakregistratie',
          'E-mail bevestigingen',
        ],
      },
      {
        name: 'Pro',
        price: 'Vanaf €119',
        per: 'per maand',
        description: 'Voor drukke servicebedrijven.',
        features: [
          'Meer belminuten',
          'SMS / WhatsApp bevestigingen',
          'Prioriteit ondersteuning',
        ],
        highlight: true,
      },
      {
        name: 'Business',
        price: 'Prijs op maat',
        per: '',
        description: 'Voor bedrijven met meerdere medewerkers.',
        features: [
          'Meerdere lijnen',
          'Complexe planningen',
          'Persoonlijke onboarding',
        ],
      },
    ],

    demoTitle: 'Plan een live demo',
    demoSubtitle: 'Ontdek in enkele minuten hoe ForConnect jouw oproepen afhandelt.',

    form: {
      name: 'Naam',
      salon: 'Bedrijfsnaam',
      email: 'E-mailadres (verplicht)',
      phone: 'Telefoonnummer',
      message: 'Wat wil je verbeteren?',
      messagePlaceholder: 'Bijvoorbeeld: minder gemiste oproepen…',
      submit: 'Verzenden',
    },

    faqTitle: 'Veelgestelde vragen',
    faqItems: [
      { q: 'Werkt dit met mijn huidige nummer?', a: 'Ja, doorschakeling is mogelijk.' },
      { q: 'Moet ik iets installeren?', a: 'Nee, alles werkt via de cloud.' },
      { q: 'Klinkt de AI natuurlijk?', a: 'Ja, professioneel Nederlands.' },
      { q: 'Kan ik het eerst testen?', a: 'Ja, via een live demo.' },
    ],

    footerTagline: 'Gemaakt voor servicebedrijven in Nederland.',
    footerRights: '© 2025 ForConnect. Alle rechten voorbehouden.',
  },

  en: {
    nav: ['Home', 'How it works', 'For whom', 'Benefits', 'Pricing', 'Demo', 'FAQ'],

    heroBadge: 'AI voice agent for service businesses in the Netherlands',
    heroTitle: 'Always reachable, without picking up the phone.',
    heroSubtitle:
      'ForConnect answers incoming calls in fluent Dutch, schedules appointments and sends confirmations – 24/7.',
    heroPrimaryCta: 'Book a demo',

    howTitle: 'How does ForConnect work?',
    howSteps: [
      { title: '1. Customer calls your main number', text: '' },
      { title: '2. AI handles the request', text: '' },
      { title: '3. Confirmation is sent automatically', text: '' },
    ],

    forWhoTitle: 'Who is ForConnect for?',
    forWhoItems: [
      { title: 'Plumbers', text: 'No missed calls on-site.' },
      { title: 'Electricians', text: 'Always reachable for customers.' },
      { title: 'Service companies', text: 'Better structure and follow-up.' },
      { title: 'Hair & beauty salons', text: 'Fewer interruptions during work.' },
    ],

    benefitsTitle: 'Why choose ForConnect?',
    benefits: [
      { title: 'No missed calls', text: 'Always available.' },
      { title: 'More appointments', text: 'Instant response.' },
      { title: 'Natural voice', text: 'Sounds human.' },
      { title: 'No staff costs', text: 'Fixed monthly fee.' },
    ],

    pricingTitle: 'Pricing',
    pricingSubtitle: 'Flexible plans for growing businesses.',
    plans: [
      {
        name: 'Start',
        price: 'From €69',
        per: 'per month',
        description: 'For small businesses.',
        features: ['Call handling', 'Appointments', 'Email confirmations'],
      },
      {
        name: 'Pro',
        price: 'From €119',
        per: 'per month',
        description: 'For busy service businesses.',
        features: ['More minutes', 'SMS / WhatsApp', 'Priority support'],
        highlight: true,
      },
      {
        name: 'Business',
        price: 'Custom',
        per: '',
        description: 'For larger teams.',
        features: ['Multiple lines', 'Advanced scheduling', 'Onboarding'],
      },
    ],

    demoTitle: 'Book a live demo',
    demoSubtitle: 'See how ForConnect handles your calls.',

    form: {
      name: 'Name',
      salon: 'Company name',
      email: 'Email (required)',
      phone: 'Phone',
      message: 'What would you like to improve?',
      messagePlaceholder: 'Example: fewer missed calls…',
      submit: 'Send',
    },

    faqTitle: 'FAQ',
    faqItems: [
      { q: 'Works with my current number?', a: 'Yes, call forwarding is possible.' },
      { q: 'Do I need to install anything?', a: 'No, everything is cloud-based.' },
      { q: 'Does it sound natural?', a: 'Yes, professional Dutch voices.' },
      { q: 'Can I test it?', a: 'Yes, via a demo.' },
    ],

    footerTagline: 'Built for service businesses in the Netherlands.',
    footerRights: '© 2025 ForConnect. All rights reserved.',
  },
};
