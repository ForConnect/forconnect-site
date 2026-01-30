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

    heroBadge: 'AI voice agent voor servicebedrijven in Nederland',
    heroTitle: 'Altijd bereikbaar, zonder de telefoon op te nemen.',
    heroSubtitle:
      'ForConnect beantwoordt inkomende oproepen in vloeiend Nederlands, plant afspraken en stuurt bevestigingen — 24/7, zonder extra personeel.',
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
        text: 'Geen gemiste oproepen meer, ook wanneer je op locatie werkt. ForConnect plant afspraken en zorgt voor structuur in je planning.',
      },
      {
        title: 'Elektriciens',
        text: 'Altijd professioneel bereikbaar, ook tijdens installaties en storingen. Klanten krijgen direct antwoord en bevestiging.',
      },
      {
        title: 'Installatie- & servicebedrijven',
        text: 'Voor bedrijven die veel inkomende oproepen krijgen. Meer overzicht, minder onderbrekingen en betere opvolging van klanten.',
      },
      {
        title: 'Kapsalons, barbershops & schoonheidssalons',
        text: 'Minder telefoontjes tijdens het werk. Afspraken en herinneringen volledig automatisch geregeld.',
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
        description: 'Voor bedrijven met meerdere medewerkers of speciale wensen.',
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
      'ForConnect answers incoming calls in fluent Dutch, schedules appointments and sends confirmations — 24/7.',
    heroPrimaryCta: 'Book a demo',

    howTitle: 'How does ForConnect work?',
    howSteps: [
      { title: '1. Customer calls your main number', text: '' },
      { title: '2. AI handles the request', text: '' },
      { title: '3. Confirmation is sent automatically', text: '' },
    ],

    forWhoTitle: 'Who is ForConnect for?',
    forWhoItems: [
      {
        title: 'Plumbers',
        text: 'No more missed calls, even when you're on-site. ForConnect schedules appointments and brings structure to your planning.',
      },
      {
        title: 'Electricians',
        text: 'Always professionally reachable, even during installations and emergencies. Customers get immediate response and confirmation.',
      },
      {
        title: 'Installation & service companies',
        text: 'For businesses with high call volumes. Better overview, fewer interruptions and improved customer follow-up.',
      },
      {
        title: 'Hair salons, barbershops & beauty salons',
        text: 'Fewer phone calls during work. Appointments and reminders fully automated.',
      },
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
        description: 'For businesses with multiple employees or special needs.',
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

          {/* Right side – demo preview card */}
          <div className="animate-fade-in-up flex flex-col items-center md:items-start md:w-[420px] mt-10 md:mt-0">
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
                    : 'I'd like to book a haircut appointment.'}
                </div>

                <div className="bg-[#111827] p-3 rounded-xl text-sm">
                  {lang === 'nl' ? 'Prima, ik kijk met u mee.' : 'Great, let me check.'}
                </div>
              </div>

              <div className="text-xs text-gray-500 text-right mt-3">
                • {lang === 'nl' ? 'AI actief' : 'AI active'}
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col gap-3 mt-4 w-full">
              <a
                href="tel:+31267913273"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#00F0FF] text-[#020617] font-semibold shadow-[0_0_15px_#00F0FF55] hover:bg-[#66F6FF] transition"
              >
                <span>📞</span>
                {lang === 'nl' ? 'Bel de demo-lijn' : 'Call demo line'}
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-24">
          <h2 className="text-2xl font-bold">{t.howTitle}</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {t.howSteps.map((s, i) => (
              <div key={i} className="p-4 border border-gray-800 rounded-xl bg-[#020617]/70">
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
        <section id="demo" className="mt-24 relative overflow-hidden rounded-2xl">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/contact-bg.png')" }}
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative">
            <h2 className="text-2xl font-bold">{t.demoTitle}</h2>
            <p className="text-sm text-gray-300">{t.demoSubtitle}</p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* FORM */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  const email = formData.get('email') as string;
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    alert(
                      lang === 'nl'
                        ? 'Voer een geldig e-mailadres in.'
                        : 'Please enter a valid email address.'
                    );
                    return;
                  }

                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    body: formData,
                  });

                  if (res.ok) {
                    alert(
                      lang === 'nl'
                        ? 'Uw bericht is succesvol verzonden. Bedankt!'
                        : 'Your message has been sent successfully. Thank you!'
                    );
                    form.reset();
                  } else {
                    alert(
                      lang === 'nl'
                        ? 'Er is een fout opgetreden. Probeer het opnieuw.'
                        : 'An error occurred. Please try again.'
                    );
                  }
                }}
                className="space-y-4 p-6 bg-[#020617]/80 rounded-xl border border-gray-800"
              >
                <input
                  type="text"
                  name="name"
                  placeholder={t.form.name}
                  className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl"
                />

                <input
                  type="text"
                  name="salon"
                  placeholder={t.form.salon}
                  className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.form.email}
                  className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder={t.form.phone}
                  className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl"
                />

                <textarea
                  name="message"
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

              {/* CONTACT BOX */}
              <div className="p-6 bg-[#020617]/85 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold">Contact</h3>

                <p className="text-sm text-gray-400 mt-3">
                  {lang === 'nl' ? 'Bedrijf' : 'Company'}
                </p>
                <p className="text-sm">ForConnect</p>

                <p className="text-sm text-gray-400 mt-3">E-mail</p>
                <p className="text-sm">info@forconnect.nl</p>

                <p className="text-sm text-gray-400 mt-3">
                  {lang === 'nl' ? 'Contact nummer' : 'Contact number'}
                </p>

                {/* PHONE */}
                <div className="flex items-center gap-2 text-sm mt-1">
                  <span>📞</span>
                  <a
                    href="tel:+31626256648"
                    className="hover:text-[#00F0FF] transition"
                  >
                    +31 6 26 25 66 48
                  </a>
                </div>

                {/* WHATSAPP + VIBER */}
                <div className="flex items-center gap-4 mt-3 text-sm">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/31626256648"
                    target="_blank"
                    className="flex items-center gap-2 hover:text-[#00F0FF] transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#25D366"
                    >
                      <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.38 0 .06 5.33.06 11.94c0 2.1.55 4.16 1.6 5.96L0 24l6.33-1.64a11.88 11.88 0 0 0 5.67 1.44h.01c6.62 0 11.94-5.33 11.94-11.94a11.88 11.88 0 0 0-3.43-8.38zM12 21.42c-1.8 0-3.55-.48-5.08-1.38l-.36-.21-3.76.97 1-3.66-.24-.38A9.46 9.46 0 0 1 2.52 12c0-5.25 4.27-9.5 9.52-9.5 2.54 0 4.94 1 6.75 2.8a9.45 9.45 0 0 1 2.77 6.7c0 5.25-4.27 9.5-9.56 9.5zm5.27-7.1c-.29-.14-1.7-.83-1.97-.92-.27-.1-.47-.15-.67.14-.2.29-.77.92-.95 1.11-.17.2-.35.22-.64.07-.29-.14-1.23-.45-2.34-1.42-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51s.2-.29.3-.48c.1-.2.05-.37-.02-.52-.07-.14-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.19 0-.5.07-.76.37-.26.29-1 1-1 2.43 0 1.42 1.03 2.8 1.17 2.99.14.2 2.02 3.3 5.02 4.63 3.01 1.33 3.01.89 3.55.83.54-.05 1.7-.69 1.94-1.36.24-.68.24-1.26.17-1.36-.07-.1-.26-.17-.55-.31z" />
                    </svg>
                    WhatsApp
                  </a>

                  {/* Viber */}
                  <a
                    href="viber://chat?number=31626256648"
                    className="flex items-center gap-2 hover:text-[#00F0FF] transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#7360F2"
                    >
                      <path d="M17.472 12.382c-.297-.149-1.758-.868-2.03-.966-.273-.099-.472-.148-.671.149-.198.297-.768.966-.941 1.164-.173.199-.347.223-.644.075-.297-.149-1.256-.464-2.392-1.48-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.671-1.611-.92-2.206-.242-.579-.487-.5-.671-.51l-.571-.01c-.198 0-.52.074-.792.372-.272.297-1.044 1.02-1.044 2.479 0 1.459 1.069 2.875 1.219 3.074.148.198 2.107 3.215 5.099 4.509.713.308 1.267.491 1.7.628.713.227 1.362.196 1.874.119.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12.004 2.002c5.514 0 9.994 4.48 9.994 9.994 0 5.513-4.48 9.994-9.994 9.994s-9.994-4.481-9.994-9.994c0-5.514 4.48-9.994 9.994-9.994m0-2.002C5.375 0 .01 5.365.01 11.996.01 18.626 5.375 24 12.004 24c6.629 0 11.994-5.374 11.994-12.004C24 5.365 18.633 0 12.004 0z" />
                    </svg>
                    Viber
                  </a>
                </div>
              </div>
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
