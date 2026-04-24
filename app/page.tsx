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
    heroBadge: 'AI Telefoonassistent voor Fysiopraktijken',
    heroTitle: 'Geen onderbroken behandelingen meer.',
    heroSubtitle: 'Uw telefoon wordt beantwoord, patiëntgegevens worden genoteerd en netjes naar uw e-mail gestuurd - zodat u ongestoord kunt behandelen.',
    heroPrimaryCta: 'Plan een demo',
    howTitle: 'Hoe werkt ForConnect?',
    howSteps: [
      { title: '1. Patient belt uw praktijk', text: '' },
      { title: '2. De AI assistent voert het gesprek, beantwoordt vragen en handelt directe verzoeken af', text: '' },
      { title: '3. Indien nodig ontvangt u alles per e-mail – klaar om afspraken in te plannen, te wijzigen of te annuleren', text: '' },
    ],
    forWhoTitle: 'Voor wie is ForConnect?',
    forWhoItems: [
      { title: 'Solo fysiotherapeuten', text: 'Geen gemiste patienten tijdens behandelingen. Focus volledig op de patient voor u.' },
      { title: 'Groepspraktijken', text: 'Efficiente intake voor meerdere therapeuten. Alle informatie netjes georganiseerd.' },
      { title: 'Sportfysiotherapie', text: 'Snelle intake voor sporters met blessures. Direct de juiste informatie vastgelegd.' },
      { title: 'Manuele therapie & specialismen', text: 'Professionele bereikbaarheid die past bij uw expertise en specialisatie.' },
    ],
    benefitsTitle: 'Waarom kiezen voor ForConnect?',
    benefits: [
      { title: 'Geen gemiste oproepen', text: 'Altijd bereikbaar voor klanten.' },
      { title: 'Meer afspraken', text: 'Directe afhandeling van oproepen.' },
      { title: 'Natuurlijke Nederlandse stem', text: 'Professioneel en menselijk.' },
      { title: 'Geen personeelskosten', text: 'Vaste maandprijs.' },
    ],
    pricingTitle: 'Prijzen',
    pricingSubtitle: 'Transparante pakketten, afgestemd op jouw bedrijf. 7 dagen gratis proberen.',
    plans: [
      { name: 'Starter', price: '\u20AC39', per: 'per maand', description: 'Voor startende praktijken.', features: ['AI beantwoordt oproepen 24/7', 'Bericht opnemen + doorsturen', 'E-mail notificaties', '1 telefoonnummer', 'Tot 150 belminuten'] },
      { name: 'Basis', price: '\u20AC59', per: 'per maand', description: 'Voor zelfstandigen en kleine bedrijven.', features: ['AI beantwoordt oproepen 24/7', 'Bericht opnemen + doorsturen', 'E-mail notificaties', '1 telefoonnummer', 'Tot 300 belminuten'] },
      { name: 'Plus', price: '\u20AC99', per: 'per maand', description: 'Meest gekozen', features: ['Alles van Basis, plus:', 'Aangepaste gespreksflow', '2 telefoonnummers', 'Prioriteit ondersteuning', 'Tot 600 belminuten'], highlight: true },
      { name: 'Pro Plus', price: 'Prijs op maat', per: '', description: 'Voor bedrijven met speciale wensen.', features: ['Alles van Plus, plus:', 'Agenda integratie (Google/Outlook)', 'Meerdere telefoonnummers/locaties', 'Geavanceerde call flows', 'Onbeperkte belminuten'] },
    ],
    demoTitle: 'Plan een live demo',
    demoSubtitle: 'Ontdek in enkele minuten hoe ForConnect jouw oproepen afhandelt.',
    form: { name: 'Naam', salon: 'Bedrijfsnaam', email: 'E-mailadres (verplicht)', phone: 'Telefoonnummer', message: 'Wat wil je verbeteren?', messagePlaceholder: 'Bijvoorbeeld: minder gemiste oproepen...', submit: 'Verzenden' },
    faqTitle: 'Veelgestelde vragen',
    faqItems: [
      { q: 'Werkt dit met mijn huidige nummer?', a: 'Ja, doorschakeling is mogelijk.' },
      { q: 'Moet ik iets installeren?', a: 'Nee, alles werkt via de cloud.' },
      { q: 'Klinkt de AI natuurlijk?', a: 'Ja, professioneel Nederlands.' },
      { q: 'Kan ik het eerst testen?', a: 'Ja, via een live demo.' },
    ],
    footerTagline: 'Gemaakt voor fysiopraktijken in Nederland.',
    footerRights: '\u00A9 2026 ForConnect. Alle rechten voorbehouden.',
  },
  en: {
    nav: ['Home', 'How it works', 'For whom', 'Benefits', 'Pricing', 'Demo', 'FAQ'],
    heroBadge: 'AI Phone Assistant for Physiotherapy Practices',
    heroTitle: 'No more interrupted treatments.',
    heroSubtitle: 'Your phone is answered, patient details are recorded and sent to your email - so you can treat without interruptions.',
    heroPrimaryCta: 'Book a demo',
    howTitle: 'How does ForConnect work?',
    howSteps: [
  { title: '1. Patient calls your practice', text: '' },
  { title: '2. The AI assistant handles the conversation and processes the request', text: '' },
  { title: '3. If needed, you receive everything by email – ready to schedule, change or cancel appointments', text: '' },
],
    forWhoTitle: 'Who is ForConnect for?',
    forWhoItems: [
      { title: 'Solo physiotherapists', text: 'No missed patients during treatments. Focus fully on the patient in front of you.' },
      { title: 'Group practices', text: 'Efficient intake for multiple therapists. All information neatly organized.' },
      { title: 'Sports physiotherapy', text: 'Quick intake for athletes with injuries. Right information captured immediately.' },
      { title: 'Manual therapy & specialisms', text: 'Professional availability that matches your expertise and specialization.' },
    ],
    benefitsTitle: 'Why choose ForConnect?',
    benefits: [
      { title: 'No missed calls', text: 'Always available.' },
      { title: 'More appointments', text: 'Instant response.' },
      { title: 'Natural voice', text: 'Sounds human.' },
      { title: 'No staff costs', text: 'Fixed monthly fee.' },
    ],
    pricingTitle: 'Pricing',
    pricingSubtitle: 'Flexible plans for growing businesses. 7-day free trial.',
    plans: [
      { name: 'Starter', price: '\u20AC39', per: 'per month', description: 'For starting practices.', features: ['AI answers calls 24/7', 'Message recording + forwarding', 'Email notifications', '1 phone number', 'Up to 150 call minutes'] },
      { name: 'Basis', price: '\u20AC59', per: 'per month', description: 'For small businesses.', features: ['AI answers calls 24/7', 'Message recording + forwarding', 'Email notifications', '1 phone number', 'Up to 300 call minutes'] },
      { name: 'Plus', price: '\u20AC99', per: 'per month', description: 'Most popular', features: ['Everything in Basis, plus:', 'Personalized call flow', '2 phone numbers', 'Priority support', 'Up to 600 call minutes'], highlight: true },
      { name: 'Pro Plus', price: 'Custom', per: '', description: 'For businesses with special needs.', features: ['Everything in Plus, plus:', 'Calendar integration (Google/Outlook)', 'Multiple phone numbers/locations', 'Advanced call flows', 'Unlimited call minutes'] },
    ],
    demoTitle: 'Book a live demo',
    demoSubtitle: 'See how ForConnect handles your calls.',
    form: { name: 'Name', salon: 'Company name', email: 'Email (required)', phone: 'Phone', message: 'What would you like to improve?', messagePlaceholder: 'Example: fewer missed calls...', submit: 'Send' },
    faqTitle: 'FAQ',
    faqItems: [
      { q: 'Works with my current number?', a: 'Yes, call forwarding is possible.' },
      { q: 'Do I need to install anything?', a: 'No, everything is cloud-based.' },
      { q: 'Does it sound natural?', a: 'Yes, professional Dutch voices.' },
      { q: 'Can I test it?', a: 'Yes, via a demo.' },
    ],
    footerTagline: 'Built for physiotherapy practices in the Netherlands.',
    footerRights: '\u00A9 2026 ForConnect. All rights reserved.',
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<'nl' | 'en'>('nl');
  const t = content[lang];
  const scrollToId = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <div className="min-h-screen bg-[#040815] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40 blur-3xl">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#00F0FF33]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#00F0FF22]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-6">
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
              return (<button key={i} onClick={() => scrollToId(ids[i])} className="hover:text-[#00F0FF] transition">{item}</button>);
            })}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex rounded-full border p-1 border-gray-700 bg-[#020617]/70 text-xs">
              <button onClick={() => setLang('nl')} className={`px-3 py-1 rounded-full ${lang === 'nl' ? 'bg-[#00F0FF] text-[#020617]' : 'text-gray-300'}`}>NL</button>
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full ${lang === 'en' ? 'bg-[#00F0FF] text-[#020617]' : 'text-gray-300'}`}>EN</button>
            </div>
          </div>
        </header>

        <section id="hero" className="pt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-gray-700 bg-[#020617]/80 text-xs rounded-full">
              <span className="h-2 w-2 rounded-full bg-[#00F0FF]" />
              <span>{t.heroBadge}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">{t.heroTitle}</h1>
            <p className="text-gray-300 text-sm max-w-md">{t.heroSubtitle}</p>
            <div className="flex gap-4">
              <button onClick={() => scrollToId('demo')} className="px-6 py-3 bg-[#00F0FF] text-[#020617] rounded-full font-semibold shadow-[0_0_20px_#00F0FF88] hover:bg-[#66F6FF] transition">{t.heroPrimaryCta}</button>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:w-[420px] mt-10 md:mt-0">
            <div className="p-6 rounded-3xl bg-[#020617]/70 border border-gray-800 w-full h-[300px] flex flex-col justify-between shadow-[0_0_25px_#00F0FF22]">
              <div>
                <div className="text-xs text-gray-400 mb-4">Live AI demo</div>
                <div className="bg-[#111827] p-3 rounded-xl text-sm mb-3">{lang === 'nl' ? 'Goedemiddag, u spreekt met de digitale assistent. Waarmee kan ik u helpen?' : 'Good afternoon, you are speaking with the digital assistant. How can I help you?'}</div>
                <div className="bg-[#00F0FF22] p-3 rounded-xl text-sm mb-3 text-right">{lang === 'nl' ? 'Ik wil graag een afspraak maken.' : 'I would like to make an appointment.'}</div>
                <div className="bg-[#111827] p-3 rounded-xl text-sm">{lang === 'nl' ? 'Natuurlijk. Ik kijk direct naar beschikbare momenten voor u.' : 'Of course. Let me check available times for you.'}</div>
              </div>
              <div className="text-xs text-gray-500 text-right mt-3">{lang === 'nl' ? '* AI actief' : '* AI active'}</div>
            </div>
            <div className="flex flex-col gap-3 mt-4 w-full">
              <a href="tel:+31634483701" className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#00F0FF] text-[#020617] font-semibold shadow-[0_0_15px_#00F0FF55] hover:bg-[#66F6FF] transition">
                <span>&#x1F4DE;</span> {lang === 'nl' ? 'Bel de demo-lijn' : 'Call demo line'}
              </a>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className="relative p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 to-slate-900 shadow-lg">
            <div className="absolute top-6 left-6 text-cyan-500/20 text-6xl">&ldquo;</div>
            <div className="relative pl-8">
              <p className="text-base md:text-lg text-gray-200 leading-relaxed italic mb-6">{lang === 'nl' ? 'Geen gemiste patienten meer. Ik ontvang alle gesprekken per e-mail met reden en contactgegevens, zodat ik meteen weet wie prioriteit heeft. Patienten zijn ook blij dat ze altijd worden geholpen, en ik kan ongestoord behandelen.' : 'No more missed patients. I receive every call by email with reason and contact details, so I immediately know who has priority. Patients are also happy that they are always helped, and I can treat without interruptions.'}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img src="/arnhem-west-fysio-logo.png" alt="Arnhem West Fysio" className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Nina Radmilovic</p>
                  <p className="font-semibold text-white">Arnhem West Fysio</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="mt-24">
          <h2 className="text-2xl font-bold">{t.howTitle}</h2>

<p className="text-sm text-gray-400 mt-2">
  {lang === 'nl'
    ? 'Afspraak of verzoek wordt doorgestuurd'
    : 'Appointment or request is forwarded'}
</p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {t.howSteps.map((s, i) => (
  <div
    key={i}
    className="group overflow-hidden rounded-xl border border-gray-800 bg-[#020617]/70 transition-all duration-300 hover:scale-[1.03] hover:border-[#00F0FF] hover:shadow-[0_0_25px_#00F0FF33]"
  >
    {/* IMAGE */}
    <div className="relative h-[160px] w-full overflow-hidden">
      <img
        src={`/step-${i + 1}.png`}
        alt={s.title}
        className="w-full h-full object-cover opacity-90 transition-all duration-300 group-hover:scale-[1.15] group-hover:brightness-110"
      />

      {/* blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

      {/* glow effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_40px_#00F0FF22]" />
    </div>

    {/* TEXT */}
    <div className="p-4">
      <h3 className="font-semibold text-white mb-2">{s.title}</h3>
      {s.text && <p className="text-sm text-gray-400">{s.text}</p>}
    </div>
  </div>
))}
          </div>
        </section>

{/* Agenda integration highlight */}
        <div className="mt-6">
          <div className="relative flex items-center gap-6 p-6 rounded-2xl border border-cyan-500/40 bg-cyan-500/8 backdrop-blur-sm shadow-[0_0_30px_#00F0FF20]">
            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg">
                {lang === 'nl' ? 'Agenda-integratie mogelijk' : 'Calendar integration available'}
              </span>
              <p className="text-gray-300 text-base mt-1">
                {lang === 'nl'
                  ? 'Koppel uw Google- of Outlook-agenda en laat de assistent afspraken inplannen op basis van uw beschikbaarheid.'
                  : 'Connect your Google or Outlook calendar and let the assistant schedule appointments based on your availability.'}
              </p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 blur-xl -z-10" />
          </div>
        </div>

{/* SCENARIO */}
<section className="mt-12">
 <h2 className="text-2xl font-bold">
  {lang === 'nl' ? 'Vraag wordt direct opgelost' : 'Question is resolved instantly'}
</h2>

<p className="text-sm text-gray-400 mt-2 max-w-md">
  {lang === 'nl'
    ? 'Niet elke oproep vraagt uw aandacht'
    : 'Not every call requires your attention'}
</p>

<div className="grid md:grid-cols-3 gap-6 mt-6">
  
  {/* STEP 1 */}
  <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#020617]/70 transition-all duration-300 hover:scale-[1.03] hover:border-[#00F0FF] hover:shadow-[0_0_25px_#00F0FF33]">
    <div className="relative h-[160px] w-full overflow-hidden">
      <img
        src="/scenario-1.png"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
    </div>
    <div className="p-4">
      <p className="font-semibold text-white mb-2">
  {lang === 'nl'
    ? '1. Patiënt belt uw praktijk'
    : '1. Patient calls your practice'}
</p>
    </div>
  </div>

  {/* STEP 2 */}
  <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#020617]/70 transition-all duration-300 hover:scale-[1.03] hover:border-[#00F0FF] hover:shadow-[0_0_25px_#00F0FF33]">
    <div className="relative h-[160px] w-full overflow-hidden">
      <img
        src="/scenario-2.png"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
    </div>
    <div className="p-4">
     <p className="font-semibold text-white mb-2">
  {lang === 'nl'
    ? '2. De assistent beantwoordt de vraag en geeft duidelijke informatie'
    : '2. The assistant answers the question and provides clear information'}
</p>
    </div>
  </div>

  {/* STEP 3 */}
  <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#020617]/70 transition-all duration-300 hover:scale-[1.03] hover:border-[#00F0FF] hover:shadow-[0_0_25px_#00F0FF33]">
    <div className="relative h-[160px] w-full overflow-hidden">
      <img
        src="/scenario-3.png"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
    </div>
    <div className="p-4">
      <p className="font-semibold text-white mb-2">
  {lang === 'nl'
    ? '3. De patiënt is geholpen – geen actie van u nodig'
    : '3. The patient is helped – no action required from you'}
</p>
    </div>
  </div>

</div>
</section>

        <section id="forwho" className="mt-24">
          <h2 className="text-2xl font-bold">{t.forWhoTitle}</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {t.forWhoItems.map((f, i) => (<div key={i} className="p-4 bg-[#020617]/80 rounded-xl border border-gray-800"><h3 className="font-semibold">{f.title}</h3><p className="text-sm text-gray-400 mt-2">{f.text}</p></div>))}
          </div>
        </section>
<section className="mt-24">
          <div className="relative p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-slate-950 to-slate-900">
            <div className="relative pl-8">
              <p className="text-sm text-gray-400 mb-4">{lang === 'nl' ? 'Van de oprichter' : 'From the founder'}</p>
              <p className="text-base text-gray-200 leading-relaxed mb-2">{lang === 'nl' ? 'Wanneer u met ForConnect werkt, voelt dat voor mij als samenwerken. Uw patienten worden voor een groot deel ook onze verantwoordelijkheid - en die neem ik serieus.' : 'When you work with ForConnect, it feels like collaboration to me. Your patients become largely our responsibility as well - and I take that seriously.'}</p>
              <p className="text-base text-gray-200 leading-relaxed mb-6">{lang === 'nl' ? 'Daarom is onze assistent er om uw praktijk te ondersteunen - zodat u zich met een gerust gevoel volledig kunt richten op uw patienten.' : 'That is why our assistant is here to support your practice - so you can focus fully on your patients with peace of mind.'}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"><img src="/milos-optimized.jpg" alt="Milos Stevanovic" className="w-full h-full object-cover" /></div>
                <div>
                  <p className="font-semibold text-white">Milos Stevanovic</p>
                  <p className="text-sm text-gray-400">{lang === 'nl' ? 'Oprichter, ForConnect' : 'Founder, ForConnect'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="mt-24">
          <h2 className="text-2xl font-bold">{t.benefitsTitle}</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {t.benefits.map((b, i) => (<div key={i} className="p-4 bg-[#020617]/70 rounded-xl border border-gray-800"><h3 className="font-semibold">{b.title}</h3><p className="text-sm text-gray-400 mt-2">{b.text}</p></div>))}
          </div>
        </section>

        <section id="pricing" className="mt-24">
          <h2 className="text-2xl font-bold">{t.pricingTitle}</h2>
          <p className="text-sm text-gray-400">{t.pricingSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 max-w-7xl mx-auto">
            {t.plans.map((p, i) => (
              <div key={i} className={`p-6 rounded-xl border ${p.highlight ? 'border-[#00F0FF] shadow-[0_0_25px_#00F0FF55]' : 'border-gray-700'} bg-[#020617]/70 flex flex-col`}>
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{p.description}</p>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-sm text-gray-400">{p.per}</span>
                </div>
                <ul className="mt-4 text-sm text-gray-300 space-y-1 flex-1 pb-6">
                  {p.features.map((f, j) => (<li key={j}>&#8226; {f}</li>))}
                </ul>
                <button onClick={() => scrollToId('demo')} className={`mt-auto w-full px-4 py-2 rounded-full font-semibold ${p.highlight ? 'bg-[#00F0FF] text-[#020617]' : 'border border-gray-600 hover:border-[#00F0FF]'}`}>{lang === 'nl' ? 'Kies dit pakket' : 'Choose plan'}</button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-300">{lang === 'nl' ? '7 dagen gratis proberen - Geen creditcard vereist - Geen verplichtingen - Stop op elk moment' : '7-day free trial - No credit card required - No obligations - Cancel anytime'}</p>
          </div>
        </section>

        <section id="demo" className="mt-24 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/contact-bg.png')" }} />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative p-6">
            <h2 className="text-2xl font-bold">{t.demoTitle}</h2>
            <p className="text-sm text-gray-300">{t.demoSubtitle}</p>
            <div className="grid md:grid-cols-2 gap-3 mt-6">
              <form onSubmit={async (e) => { e.preventDefault(); const form = e.currentTarget; const formData = new FormData(form); const email = formData.get('email') as string; if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert(lang === 'nl' ? 'Voer een geldig e-mailadres in.' : 'Please enter a valid email address.'); return; } const res = await fetch('/api/contact', { method: 'POST', body: formData }); if (res.ok) { alert(lang === 'nl' ? 'Uw bericht is succesvol verzonden. Bedankt!' : 'Your message has been sent successfully. Thank you!'); form.reset(); } else { alert(lang === 'nl' ? 'Er is een fout opgetreden. Probeer het opnieuw.' : 'An error occurred. Please try again.'); } }} className="space-y-4 p-4 bg-[#020617]/80 rounded-xl border border-gray-800">
                <input type="text" name="name" placeholder={t.form.name} className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl" />
                <input type="text" name="salon" placeholder={t.form.salon} className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl" />
                <input type="email" name="email" required placeholder={t.form.email} className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl" />
                <input type="tel" name="phone" placeholder={t.form.phone} className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl" />
                <textarea name="message" placeholder={t.form.messagePlaceholder} className="w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl h-24" />
                <button type="submit" className="w-full px-4 py-3 bg-[#00F0FF] text-[#020617] rounded-full font-semibold mb-6">{t.form.submit}</button>
              </form>
              <div className="p-4 bg-[#020617]/85 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="text-sm text-gray-400 mt-3">{lang === 'nl' ? 'Bedrijf' : 'Company'}</p>
                <p className="text-sm">ForConnect</p>
                <p className="text-sm text-gray-400 mt-3">E-mail</p>
                <p className="text-sm">info@forconnect.nl</p>
                <p className="text-sm text-gray-400 mt-3">{lang === 'nl' ? 'Contact nummer' : 'Contact number'}</p>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <span>&#x1F4DE;</span>
                  <a href="tel:+3197010256601" className="hover:text-[#00F0FF] transition">+31 97 010 256 601</a>
                </div>
                <div className="mt-3 text-sm">
                  <a href="https://wa.me/31634483701" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00F0FF] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.38 0 .06 5.33.06 11.94c0 2.1.55 4.16 1.6 5.96L0 24l6.33-1.64a11.88 11.88 0 0 0 5.67 1.44h.01c6.62 0 11.94-5.33 11.94-11.94a11.88 11.88 0 0 0-3.43-8.38zM12 21.42c-1.8 0-3.55-.48-5.08-1.38l-.36-.21-3.76.97 1-3.66-.24-.38A9.46 9.46 0 0 1 2.52 12c0-5.25 4.27-9.5 9.52-9.5 2.54 0 4.94 1 6.75 2.8a9.45 9.45 0 0 1 2.77 6.7c0 5.25-4.27 9.5-9.56 9.5zm5.27-7.1c-.29-.14-1.7-.83-1.97-.92-.27-.1-.47-.15-.67.14-.2.29-.77.92-.95 1.11-.17.2-.35.22-.64.07-.29-.14-1.23-.45-2.34-1.42-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51s.2-.29.3-.48c.1-.2.05-.37-.02-.52-.07-.14-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.19 0-.5.07-.76.37-.26.29-1 1-1 2.43 0 1.42 1.03 2.8 1.17 2.99.14.2 2.02 3.3 5.02 4.63 3.01 1.33 3.01.89 3.55.83.54-.05 1.7-.69 1.94-1.36.24-.68.24-1.26.17-1.36-.07-.1-.26-.17-.55-.31z" /></svg>
                    <span>WhatsApp: +31 6 34 48 37 01</span>
                  </a>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-400 mb-2">{lang === 'nl' ? 'Of probeer onze DEMO praktijk' : 'Or try our DEMO practice'}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">&#x1F3A7;</span>
                    <a href="tel:+31267913273" className="hover:text-[#00F0FF] transition">+31 26 791 32 73</a>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{lang === 'nl' ? '24/7 beschikbaar' : '24/7 available'}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-[#00F0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm font-semibold">{lang === 'nl' ? 'Actief in heel Nederland' : 'Active throughout the Netherlands'}</span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-400">
                    <div className="flex items-center gap-2"><span className="text-[#00F0FF]">&#x2713;</span><span>GDPR compliant</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#00F0FF]">&#x2713;</span><span>{lang === 'nl' ? 'EU servers' : 'EU servers'}</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#00F0FF]">&#x2713;</span><span>{lang === 'nl' ? '7 dagen gratis proberen' : '7-day free trial'}</span></div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-xs text-gray-400 mb-3">{lang === 'nl' ? 'Volg ons' : 'Follow us'}</p>
                  <div className="flex items-center gap-4">
                    <a href="https://www.instagram.com/forconnect.nl" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition" aria-label="Instagram"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                    <a href="https://www.facebook.com/share/1JRDzjsycH/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition" aria-label="Facebook"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
                    <a href="https://www.linkedin.com/company/forconnect-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition" aria-label="LinkedIn"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-24">
          <h2 className="text-2xl font-bold">{t.faqTitle}</h2>
          <div className="mt-6 space-y-3">
            {t.faqItems.map((f, i) => (<div key={i} className="p-4 bg-[#020617]/70 rounded-xl border border-gray-800"><div className="font-semibold">{f.q}</div><div className="text-sm text-gray-400 mt-1">{f.a}</div></div>))}
          </div>
        </section>

        <footer className="mt-24 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-semibold text-white mb-1">ForConnect</p>
              <p>{t.footerTagline}</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/forconnect.nl" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition" aria-label="Instagram"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
              <a href="https://www.facebook.com/share/1JRDzjsycH/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition" aria-label="Facebook"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
              <a href="https://www.linkedin.com/company/forconnect-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition" aria-label="LinkedIn"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
            </div>
          </div>
          <p className="mt-4">{t.footerRights}</p>
        </footer>
      </div>
    </div>
  );
}