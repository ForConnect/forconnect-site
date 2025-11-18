'use client';

import React, { useState } from 'react';

type ContentType = {
  nav: string[];
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryCta: string;
  heroSecondaryCta?: string;
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
    nav: ['Home', 'Hoe het werkt', 'Voor wie', 'Voordelen', 'Prijzen', 'Demo', 'FAQ'],
    heroBadge: 'AI telefoniste voor salons in Nederland',
    heroTitle: 'AI telefoniste voor jouw salon.',
    heroSubtitle:
      'ForConnect beantwoordt je telefoontjes in vloeiend Nederlands, plant afspraken in je agenda en stuurt herinneringen – 24/7, zonder extra personeel.',
    heroPrimaryCta: 'Plan een demo',

    howTitle: 'Hoe werkt ForConnect?',
    howSteps: [
      { title: '1. Klant belt naar jouw eigen telefoonnummer', text: '' },
      { title: '2. AI assistent plant de afspraak in', text: '' },
      { title: '3. Klant krijgt bevestiging en herinnering per email/sms', text: '' },
    ],

    forWhoTitle: 'Voor wie is ForConnect?',
    forWhoItems: [
      { title: 'Kapsalons & barbershops', text: 'Mis geen afspraken meer.' },
      { title: 'Schoonheidssalons', text: 'Werk rustig terwijl AI de telefoon opneemt.' },
      { title: 'Nagelstudio’s', text: 'Meer structuur, minder gemiste klanten.' },
      { title: 'Tandartsen', text: 'Professionele eerste indruk.' },
    ],

    benefitsTitle: 'Wat levert het je op?',
    benefits: [
      { title: 'Nooit meer gemiste oproepen', text: 'Altijd bereikbaar.' },
      { title: 'Meer afspraken', text: 'Slimme planning.' },
      { title: 'Vloeiend Nederlands', text: 'AI klinkt natuurlijk.' },
      { title: 'Geen extra personeel', text: 'Vaste prijs per maand.' },
    ],

    pricingTitle: 'Prijzen',
    pricingSubtitle: 'Transparante pakketten voor salons.',
    plans: [
      {
        name: 'Start',
        price: '€69',
        per: 'per maand',
        description: 'Voor kleine salons.',
        features: ['300 min/maand', 'E-mail bevestigingen', 'Basis agenda integratie'],
      },
      {
        name: 'Pro',
        price: '€99',
        per: 'per maand',
        description: 'Voor drukke salons.',
        features: ['600 min/maand', 'Agenda koppeling', 'SMS/WhatsApp herinneringen', 'Onboarding'],
        highlight: true,
      },
      {
        name: 'Multi',
        price: '€149',
        per: 'per maand',
        description: 'Voor ketens.',
        features: ['Meerdere salons', 'Priority support', 'Maatwerk integraties'],
      },
    ],

    demoTitle: 'Plan een live demo',
    demoSubtitle: 'We demonstreren in 5 minuten hoe ForConnect uw salon ondersteunt',

    form: {
      name: 'Naam',
      salon: 'Naam van je salon',
      email: 'E-mailadres',
      phone: 'Telefoonnummer',
      message: 'Wat wil je bereiken?',
      messagePlaceholder: 'Bijvoorbeeld: minder gemiste oproepen…',
      submit: 'Verzenden',
    },

    faqTitle: 'Veelgestelde vragen',
    faqItems: [
      { q: 'Werkt dit met mijn huidige nummer?', a: 'Ja, nummer kan doorgestuurd worden.' },
      { q: 'Moet ik iets installeren?', a: 'Nee, alles gaat via de cloud.' },
      { q: 'Klinkt AI natuurlijk?', a: 'Ja, moderne NL AI stemmen.' },
      { q: 'Kan ik testen?', a: 'Ja, via demo gesprek.' },
    ],

    footerTagline: 'Gemaakt voor salons in Nederland.',
    footerRights: '© 2025 ForConnect. Alle rechten voorbehouden.',
  },

  en: {
    nav: ['Home', 'How it works', 'For whom', 'Benefits', 'Pricing', 'Demo', 'FAQ'],
    heroBadge: 'AI voice agent for salons in the Netherlands',
    heroTitle: 'AI voice receptionist for your salon.',
    heroSubtitle:
      'ForConnect answers calls in fluent Dutch, books appointments, and sends reminders – 24/7, without extra staff.',
    heroPrimaryCta: 'Book a demo',

    howTitle: 'How does ForConnect work?',
    howSteps: [
      { title: '1. Client calls your main phone number', text: '' },
      { title: '2. AI assistant schedules the appointment', text: '' },
      { title: '3. Client receives confirmation + reminder by email/sms', text: '' },
    ],

    forWhoTitle: 'Who is ForConnect for?',
    forWhoItems: [
      { title: 'Hair salons', text: 'Never miss a booking again.' },
      { title: 'Beauty salons', text: 'Work without interruptions.' },
      { title: 'Nail studios', text: 'Better structure.' },
      { title: 'Dentists', text: 'Professional first impression.' },
    ],

    benefitsTitle: 'Why choose ForConnect?',
    benefits: [
      { title: 'No missed calls', text: 'Always reachable.' },
      { title: 'More bookings', text: 'Smarter scheduling.' },
      { title: 'Fluent Dutch voice', text: 'Sounds like a real receptionist.' },
      { title: 'No hiring costs', text: 'Fixed monthly fee.' },
    ],

    pricingTitle: 'Pricing',
    pricingSubtitle: 'Simple transparent plans.',
    plans: [
      {
        name: 'Start',
        price: '€69',
        per: 'per month',
        description: 'For small salons.',
        features: ['300 min/month', 'Email confirmations', 'Basic calendar integration'],
      },
      {
        name: 'Pro',
        price: '€99',
        per: 'per month',
        description: 'For busy salons.',
        features: ['600 min/month', 'Calendar integration', 'SMS/WhatsApp reminders', 'Onboarding'],
        highlight: true,
      },
      {
        name: 'Multi',
        price: '€149',
        per: 'per month',
        description: 'For multi-location brands.',
        features: ['Multiple salons', 'Priority support', 'Custom integrations'],
      },
    ],

    demoTitle: 'Book a live demo',
    demoSubtitle: 'We demonstrate in 5 minutes how ForConnect supports your salon.',

    form: {
      name: 'Name',
      salon: 'Salon name',
      email: 'Email',
      phone: 'Phone',
      message: 'What do you want to achieve?',
      messagePlaceholder: 'Example: fewer missed calls…',
      submit: 'Send',
    },

    faqTitle: 'FAQ',
    faqItems: [
      { q: 'Works with my current number?', a: 'Yes, we can forward your number.' },
      { q: 'Do I install anything?', a: 'No installation needed.' },
      { q: 'Is AI natural?', a: 'Very natural voices.' },
      { q: 'Can I test it?', a: 'Yes, via demo call.' },
    ],

    footerTagline: 'Built for salons in the Netherlands.',
    footerRights: '© 2025 ForConnect. All rights reserved.',
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<'nl' | 'en'>('nl');
  const t = content[lang];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#040815] text-white">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 opacity-40 blur-3xl">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#00F0FF33]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#00F0FF22]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-6">
        {/* Nav */}
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl border border-[#00F0FF55] shadow-[0_0_20px_#00F0FF66]">
              <span className="text-xl text-[#00F0FF] font-bold">F</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">ForConnect</div>
              <div className="text-xs text-[#9CA3AF]">AI Voice Agent</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            {t.nav.map((item, i) => {
              const ids = ['hero', 'how', 'forwho', 'benefits', 'pricing', 'demo', 'faq'];
              return (
                <button
                  key={i}
                  onClick={() => scrollToId(ids[i])}
                  className="hover:text-[#00F0FF] transition"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full border p-1 border-gray-700 bg-[#020617]/70 text-xs">
              <button
                onClick={() => setLang('nl')}
                className={`px-3 py-1 rounded-full ${
                  lang === 'nl' ? 'bg-[#00F0FF] text-[#020617]' : 'text-gray-300'
                }`}
              >
                NL
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full ${
                  lang === 'en' ? 'bg-[#00F0FF] text-[#020617]' : 'text-gray-300'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="hero" className="pt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-gray-700 bg-[#020617]/80 text-xs rounded-full">
              <span className="h-2 w-2 rounded-full bg-[#00F0FF]" />
              <span>{t.heroBadge}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold">{t.heroTitle}</h1>
            <p className="text-gray-300 text-sm max-w-md">{t.heroSubtitle}</p>

            <div className="flex gap-4">
              <button
                onClick={() => scrollToId('demo')}
                className="px-6 py-3 bg-[#00F0FF] text-[#020617] rounded-full font-semibold shadow-[0_0_20px_#00F0FF88] hover:bg-[#66F6FF] transition"
              >
                {t.heroPrimaryCta}
              </button>
            </div>
          </div>
          {/* Right side – A variant (wide, low chat box) */}
          <div className="animate-fade-in-up flex flex-col items-center md:items-start md:w-[420px] mt-10 md:mt-0">

            {/* CHAT BOX */}
            <div className="p-6 rounded-3xl bg-[#020617]/70 border border-gray-800 w-full h-[300px] flex flex-col justify-between shadow-[0_0_25px_#00F0FF22]">

              <div>
                <div className="text-xs text-gray-400 mb-4">
                  {lang === 'nl' ? 'Live AI demo' : 'Live AI demo'}
                </div>

                <div className="bg-[#111827] p-3 rounded-xl text-sm mb-3">
                  {lang === 'nl'
                    ? 'Goedemiddag, met de AI-receptionist van uw salon. Hoe kan ik helpen?'
                    : 'Good afternoon, AI receptionist speaking. How can I assist?'}
                </div>

                <div className="bg-[#00F0FF22] p-3 rounded-xl text-sm mb-3 text-right">
                  {lang === 'nl'
                    ? 'Ik zou graag een knipafspraak willen.'
                    : 'I’d like to book a haircut appointment.'}
                </div>

                <div className="bg-[#111827] p-3 rounded-xl text-sm">
                  {lang === 'nl'
                    ? 'Prima, ik kijk met u mee.'
                    : 'Great, let me check.'}
                </div>
              </div>

              <div className="text-xs text-gray-500 text-right mt-3">• {lang === 'nl' ? 'AI actief' : 'AI active'}</div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col gap-3 mt-4 w-full">

              {/* Call button */}
              <a
                href="tel:+3162656648"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#00F0FF] text-[#020617] font-semibold shadow-[0_0_15px_#00F0FF55] hover:bg-[#66F6FF] transition"
              >
                <span>📞</span>
                {lang === 'nl' ? 'Bel de demo-lijn' : 'Call demo line'}
              </a>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/3162656648"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-gray-600 hover:border-[#00F0FF] hover:text-[#00F0FF] transition"
              >
                <span>💬</span>
                {lang === 'nl' ? 'WhatsApp ons' : 'WhatsApp us'}
              </a>

            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-24">
          <h2 className="text-2xl font-bold">{t.howTitle}</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {t.howSteps.map((s, i) => (
              <div
                key={i}
                className="p-4 border border-gray-800 rounded-xl bg-[#020617]/70"
              >
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                {s.text && <p className="text-sm text-gray-400">{s.text}</p>}
              </div>
            ))}
          </div>
        </section>
        {/* For Who */}
        <section id="forwho" className="mt-24">
          <h2 className="text-2xl font-bold">{t.forWhoTitle}</h2>

          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {t.forWhoItems.map((f, i) => (
              <div
                key={i}
                className="p-4 bg-[#020617]/80 rounded-xl border border-gray-800"
              >
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mt-24">
          <h2 className="text-2xl font-bold">{t.benefitsTitle}</h2>

          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {t.benefits.map((b, i) => (
              <div
                key={i}
                className="p-4 bg-[#020617]/70 rounded-xl border border-gray-800"
              >
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-24">
          <h2 className="text-2xl font-bold">{t.pricingTitle}</h2>
          <p className="text-sm text-gray-400">{t.pricingSubtitle}</p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {t.plans.map((p, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border ${
                  p.highlight
                    ? 'border-[#00F0FF] shadow-[0_0_25px_#00F0FF55]'
                    : 'border-gray-700'
                } bg-[#020617]/70`}
              >
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{p.description}</p>

                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-sm text-gray-400">{p.per}</span>
                </div>

                <ul className="mt-4 text-sm text-gray-300 space-y-1">
                  {p.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToId('demo')}
                  className={`mt-6 w-full px-4 py-2 rounded-full font-semibold ${
                    p.highlight
                      ? 'bg-[#00F0FF] text-[#020617]'
                      : 'border border-gray-600 hover:border-[#00F0FF]'
                  }`}
                >
                  {lang === 'nl' ? 'Kies dit pakket' : 'Choose plan'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Demo */}
        <section id="demo" className="mt-24">
          <h2 className="text-2xl font-bold">{t.demoTitle}</h2>
          <p className="text-sm text-gray-400">{t.demoSubtitle}</p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <form className="space-y-4 p-6 bg-[#020617]/70 rounded-xl border border-gray-800">
              <input
                type="text"
                placeholder={t.form.name}
                className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl"
              />
              <input
                type="text"
                placeholder={t.form.salon}
                className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl"
              />
              <input
                type="email"
                placeholder={t.form.email}
                className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl"
              />
              <input
                type="tel"
                placeholder={t.form.phone}
                className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl"
              />
              <textarea
                placeholder={t.form.messagePlaceholder}
                className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl h-24"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#00F0FF] text-[#020617] rounded-full font-semibold"
              >
                {t.form.submit}
              </button>
            </form>

            <div className="p-6 bg-[#020617]/80 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold">Contact</h3>

              <p className="text-sm text-gray-400 mt-3">E-mail</p>
              <p className="text-sm">info@forconnect.nl</p>

              <p className="text-sm text-gray-400 mt-3">
                {lang === 'nl' ? 'Demo nummer' : 'Demo number'}
              </p>
              <p className="text-sm">+31 20 123 45 67</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-24">
          <h2 className="text-2xl font-bold">{t.faqTitle}</h2>

          <div className="mt-6 space-y-3">
            {t.faqItems.map((f, i) => (
              <div
                key={i}
                className="p-4 bg-[#020617]/70 rounded-xl border border-gray-800"
              >
                <div className="font-semibold">{f.q}</div>
                <div className="text-sm text-gray-400 mt-1">{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-gray-800 pt-4 text-xs text-gray-500">
          <p>{t.footerTagline}</p>
          <p className="mt-1">{t.footerRights}</p>
        </footer>
      </div>
    </div>
  );
}
