'use client';

import React, { useState } from 'react';

type ContentType = {
  nav: string[];
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryCta: string;
  howTitle: string;
  howSteps: { title: string; text: string }[];
  forWhoTitle: string;
  forWhoItems: { title: string; text: string }[];
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  pricingTitle: string;
  pricingSubtitle: string;
  plans: {
    name: string;
    price: string;
    per: string;
    description: string;
    features: string[];
    highlight?: boolean;
  }[];
  demoTitle: string;
  demoSubtitle: string;
  form: {
    name: string;
    salon: string;
    email: string;
    phone: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
  };
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  footerTagline: string;
  footerRights: string;
};

const content: Record<'nl' | 'en', ContentType> = {
  nl: {
    nav: ['Home', 'Hoe werkt het', 'Voor wie', 'Voordelen', 'Prijzen', 'Demo', 'FAQ'],
    heroBadge: 'AI voice agent voor servicebedrijven in Nederland',
    heroTitle: 'Altijd bereikbaar, zonder de telefoon op te nemen.',
    heroSubtitle:
      'ForConnect beantwoordt inkomende oproepen in vloeiend Nederlands, plant afspraken en stuurt bevestigingen — 24/7, zonder extra personeel.',
    heroPrimaryCta: 'Plan een demo',

    howTitle: 'Hoe werkt ForConnect?',
    howSteps: [
      {
        title: '1. Klant belt jouw vaste nummer',
        text: 'De oproep wordt automatisch beantwoord door de AI voice assistant.',
      },
      {
        title: '2. AI handelt het verzoek af',
        text: 'Afspraken worden ingepland of berichten genoteerd.',
      },
      {
        title: '3. Bevestiging wordt verstuurd',
        text: 'De klant ontvangt direct een e-mail of SMS.',
      },
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
        title: 'Kapsalons & schoonheidssalons',
        text: 'Minder onderbrekingen tijdens het werk.',
      },
    ],

    benefitsTitle: 'Waarom kiezen voor ForConnect?',
    benefits: [
      {
        title: 'Geen gemiste oproepen',
        text: 'Jouw bedrijf is altijd bereikbaar.',
      },
      {
        title: 'Meer afspraken',
        text: 'Klanten krijgen direct antwoord.',
      },
      {
        title: 'Natuurlijke Nederlandse stem',
        text: 'Klinkt professioneel en menselijk.',
      },
      {
        title: 'Geen personeelskosten',
        text: 'Vaste maandprijs zonder extra personeel.',
      },
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
        description: 'Voor grotere teams of complexe wensen.',
        features: [
          'Meerdere lijnen',
          'Integraties',
          'Persoonlijke onboarding',
        ],
      },
    ],

    demoTitle: 'Plan een live demo',
    demoSubtitle: 'Ontdek in enkele minuten hoe ForConnect jouw oproepen afhandelt.',

    form: {
      name: 'Naam',
      salon: 'Bedrijfsnaam',
      email: 'E-mailadres',
      phone: 'Telefoonnummer',
      message: 'Wat wil je verbeteren?',
      messagePlaceholder: 'Bijvoorbeeld: minder gemiste oproepen…',
      submit: 'Versturen',
    },

    faqTitle: 'Veelgestelde vragen',
    faqItems: [
      {
        q: 'Werkt dit met mijn huidige nummer?',
        a: 'Ja, je huidige nummer kan eenvoudig worden doorgeschakeld.',
      },
      {
        q: 'Moet ik iets installeren?',
        a: 'Nee, alles werkt via de cloud.',
      },
      {
        q: 'Klinkt de AI natuurlijk?',
        a: 'Ja, professioneel en vloeiend Nederlands.',
      },
      {
        q: 'Kan ik het eerst testen?',
        a: 'Ja, via een live demo.',
      },
    ],

    footerTagline: 'Gebouwd voor servicebedrijven in Nederland.',
    footerRights: '© 2025 ForConnect. Alle rechten voorbehouden.',
  },

  en: {
    nav: ['Home', 'How it works', 'For whom', 'Benefits', 'Pricing', 'Demo', 'FAQ'],
    heroBadge: 'AI voice agent for service businesses in the Netherlands',
    heroTitle: 'Always reachable, without picking up the phone.',
    heroSubtitle:
      'ForConnect answers incoming calls in fluent Dutch, schedules appointments and sends confirmations — 24/7.',
    heroPrimaryCta: 'Book a demo',

    howTitle: 'How does ForConnect work?',
    howSteps: [
      {
        title: '1. A customer calls your main number',
        text: 'The AI voice assistant answers immediately.',
      },
      {
        title: '2. AI handles the request',
        text: 'Appointments are scheduled or messages logged.',
      },
      {
        title: '3. Confirmation is sent',
        text: 'By email or SMS.',
      },
    ],

    forWhoTitle: 'Who is ForConnect for?',
    forWhoItems: [
      { title: 'Plumbers', text: 'No missed calls on-site.' },
      { title: 'Electricians', text: 'Always reachable.' },
      { title: 'Service companies', text: 'Better call handling.' },
      { title: 'Hair & beauty salons', text: 'Fewer interruptions.' },
    ],

    benefitsTitle: 'Why choose ForConnect?',
    benefits: [
      { title: 'No missed calls', text: 'Always reachable.' },
      { title: 'More bookings', text: 'Instant response.' },
      { title: 'Natural voice', text: 'Sounds human.' },
      { title: 'No staff costs', text: 'Fixed monthly fee.' },
    ],

    pricingTitle: 'Pricing',
    pricingSubtitle: 'Clear plans for growing businesses.',
    plans: [
      {
        name: 'Start',
        price: 'From €69',
        per: 'per month',
        description: 'For small teams.',
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
        features: ['Multiple lines', 'Integrations', 'Onboarding'],
      },
    ],

    demoTitle: 'Book a live demo',
    demoSubtitle: 'See how ForConnect handles your calls.',

    form: {
      name: 'Name',
      salon: 'Company name',
      email: 'Email',
      phone: 'Phone',
      message: 'What would you like to improve?',
      messagePlaceholder: 'Example: fewer missed calls…',
      submit: 'Send',
    },

    faqTitle: 'FAQ',
    faqItems: [
      { q: 'Works with my number?', a: 'Yes.' },
      { q: 'Installation required?', a: 'No.' },
      { q: 'Natural voice?', a: 'Yes.' },
      { q: 'Can I test it?', a: 'Yes, via demo.' },
    ],

    footerTagline: 'Built for service businesses.',
    footerRights: '© 2025 ForConnect.',
  },
};
export default function HomePage() {
  const [lang, setLang] = useState<'nl' | 'en'>('nl');
  const t = content[lang];

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#040815] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        {/* NAV */}
        <header className="flex items-center justify-between py-4">
          <div className="font-bold text-white">ForConnect</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            {t.nav.map((item, i) => (
              <button
                key={i}
                onClick={() =>
                  scrollToId(
                    ['hero', 'how', 'forwho', 'benefits', 'pricing', 'demo', 'faq'][i]
                  )
                }
                className="hover:text-[#00F0FF]"
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex gap-2">
            <button onClick={() => setLang('nl')}>NL</button>
            <button onClick={() => setLang('en')}>EN</button>
          </div>
        </header>

        {/* HERO */}
        <section id="hero" className="pt-16">
          <p className="text-sm text-gray-400">{t.heroBadge}</p>
          <h1 className="text-4xl font-bold mt-2">{t.heroTitle}</h1>
          <p className="mt-4 max-w-xl text-gray-300">{t.heroSubtitle}</p>
          <button
            onClick={() => scrollToId('demo')}
            className="mt-6 px-6 py-3 bg-[#00F0FF] text-black rounded"
          >
            {t.heroPrimaryCta}
          </button>
        </section>

        {/* HOW */}
        <section id="how" className="mt-24">
          <h2 className="text-2xl font-bold">{t.howTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {t.howSteps.map((s, i) => (
              <div key={i} className="p-4 border border-gray-800 rounded-xl">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOR WHO */}
        <section id="forwho" className="mt-24">
          <h2 className="text-2xl font-bold">{t.forWhoTitle}</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {t.forWhoItems.map((f, i) => (
              <div key={i} className="p-4 border border-gray-800 rounded-xl">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="mt-24">
          <h2 className="text-2xl font-bold">{t.benefitsTitle}</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {t.benefits.map((b, i) => (
              <div key={i} className="p-4 border border-gray-800 rounded-xl">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mt-24">
          <h2 className="text-2xl font-bold">{t.pricingTitle}</h2>
          <p className="text-gray-400">{t.pricingSubtitle}</p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {t.plans.map((p, i) => (
              <div
                key={i}
                className={`p-6 border rounded-xl ${
                  p.highlight ? 'border-[#00F0FF]' : 'border-gray-700'
                }`}
              >
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-400">{p.description}</p>
                <div className="text-3xl font-bold mt-4">{p.price}</div>
                <ul className="mt-4 text-sm text-gray-300 space-y-1">
                  {p.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* DEMO */}
        <section id="demo" className="mt-24">
          <h2 className="text-2xl font-bold">{t.demoTitle}</h2>
          <p className="text-gray-400">{t.demoSubtitle}</p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-24">
          <h2 className="text-2xl font-bold">{t.faqTitle}</h2>
          <div className="mt-6 space-y-3">
            {t.faqItems.map((f, i) => (
              <div key={i} className="p-4 border border-gray-800 rounded-xl">
                <div className="font-semibold">{f.q}</div>
                <div className="text-sm text-gray-400">{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 border-t border-gray-800 pt-4 text-xs text-gray-500">
          <p>{t.footerTagline}</p>
          <p>{t.footerRights}</p>
        </footer>
      </div>
    </div>
  );
}
