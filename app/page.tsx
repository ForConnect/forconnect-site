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
    heroSubtitle:
      'Uw telefoon wordt beantwoord, patiëntgegevens worden genoteerd en netjes naar uw e-mail gestuurd — zodat u ongestoord kunt behandelen.',
    heroPrimaryCta: 'Plan een demo',

    howTitle: 'Hoe werkt ForConnect?',
    howSteps: [
      { title: '1. Patiënt belt uw praktijk', text: '' },
      { title: '2. Assistent noteert naam, geboortedatum, reden en contactgegevens', text: '' },
      { title: '3. U ontvangt alles per e-mail — klaar om terug te bellen', text: '' },
    ],

    forWhoTitle: 'Voor wie is ForConnect?',
    forWhoItems: [
      {
        title: 'Solo fysiotherapeuten',
        text: 'Geen gemiste patiënten tijdens behandelingen. Focus volledig op de patiënt voor u.',
      },
      {
        title: 'Groepspraktijken',
        text: 'Efficiënte intake voor meerdere therapeuten. Alle informatie netjes georganiseerd.',
      },
      {
        title: 'Sportfysiotherapie',
        text: 'Snelle intake voor sporters met blessures. Direct de juiste informatie vastgelegd.',
      },
      {
        title: 'Manuele therapie & specialismen',
        text: 'Professionele bereikbaarheid die past bij uw expertise en specialisatie.',
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
    pricingSubtitle: 'Transparante pakketten, afgestemd op jouw bedrijf. 7 dagen gratis proberen.',
    plans: [
      {
        name: 'Basis',
        price: '€59',
        per: 'per maand',
        description: 'Voor zelfstandigen en kleine bedrijven.',
        features: [
          'AI beantwoordt oproepen 24/7',
          'Bericht opnemen + doorsturen',
          'E-mail notificaties',
          '1 telefoonnummer',
          'Tot 300 belminuten',
        ],
      },
      {
        name: 'Plus',
        price: '€99',
        per: 'per maand',
        description: 'Meest gekozen',
        features: [
          'Alles van Basis, plus:',
          'Agenda integratie (Google/Outlook)',
          '2 telefoonnummers',
          'Prioriteit ondersteuning',
          'Tot 600 belminuten',
        ],
        highlight: true,
      },
      {
        name: 'Pro Plus',
        price: 'Prijs op maat',
        per: '',
        description: 'Voor bedrijven met speciale wensen.',
        features: [
          'Alles van Plus, plus:',
          'Meerdere telefoonnummers/locaties',
          'Geavanceerde call flows',
          'Persoonlijke onboarding',
          'Onbeperkte belminuten',
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
      messagePlaceholder: 'Bijvoorbeeld: minder gemiste oproepen...',
      submit: 'Verzenden',
    },

    faqTitle: 'Veelgestelde vragen',
    faqItems: [
      { q: 'Werkt dit met mijn huidige nummer?', a: 'Ja, doorschakeling is mogelijk.' },
      { q: 'Moet ik iets installeren?', a: 'Nee, alles werkt via de cloud.' },
      { q: 'Klinkt de AI natuurlijk?', a: 'Ja, professioneel Nederlands.' },
      { q: 'Kan ik het eerst testen?', a: 'Ja, via een live demo.' },
    ],

    footerTagline: 'Gemaakt voor fysiopraktijken in Nederland.',
    footerRights: '© 2026 ForConnect. Alle rechten voorbehouden.',
  },

  en: {
    nav: ['Home', 'How it works', 'For whom', 'Benefits', 'Pricing', 'Demo', 'FAQ'],

    heroBadge: 'AI Phone Assistant for Physiotherapy Practices',
    heroTitle: 'No more interrupted treatments.',
    heroSubtitle:
      'Your phone is answered, patient details are recorded and sent to your email — so you can treat without interruptions.',
    heroPrimaryCta: 'Book a demo',

    howTitle: 'How does ForConnect work?',
    howSteps: [
      { title: '1. Patient calls your practice', text: '' },
      { title: '2. Assistant records name, date of birth, reason and contact details', text: '' },
      { title: '3. You receive everything by email — ready to call back', text: '' },
    ],

    forWhoTitle: 'Who is ForConnect for?',
    forWhoItems: [
      {
        title: 'Solo physiotherapists',
        text: 'No missed patients during treatments. Focus fully on the patient in front of you.',
      },
      {
        title: 'Group practices',
        text: 'Efficient intake for multiple therapists. All information neatly organized.',
      },
      {
        title: 'Sports physiotherapy',
        text: 'Quick intake for athletes with injuries. Right information captured immediately.',
      },
      {
        title: 'Manual therapy & specialisms',
        text: 'Professional availability that matches your expertise and specialization.',
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
    pricingSubtitle: 'Flexible plans for growing businesses. 7-day free trial.',
    plans: [
      {
        name: 'Basis',
        price: '€59',
        per: 'per month',
        description: 'For small businesses.',
        features: [
          'AI answers calls 24/7',
          'Message recording + forwarding',
          'Email notifications',
          '1 phone number',
          'Up to 300 call minutes',
        ],
      },
      {
        name: 'Plus',
        price: '€99',
        per: 'per month',
        description: 'Most popular',
        features: [
          'Everything in Basis, plus:',
          'Calendar integration (Google/Outlook)',
          '2 phone numbers',
          'Priority support',
          'Up to 600 call minutes',
        ],
        highlight: true,
      },
      {
        name: 'Pro Plus',
        price: 'Custom',
        per: '',
        description: 'For businesses with special needs.',
        features: [
          'Everything in Plus, plus:',
          'Multiple phone numbers/locations',
          'Advanced call flows',
          'Personal onboarding',
          'Unlimited call minutes',
        ],
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
      messagePlaceholder: 'Example: fewer missed calls...',
      submit: 'Send',
    },

    faqTitle: 'FAQ',
    faqItems: [
      { q: 'Works with my current number?', a: 'Yes, call forwarding is possible.' },
      { q: 'Do I need to install anything?', a: 'No, everything is cloud-based.' },
      { q: 'Does it sound natural?', a: 'Yes, professional Dutch voices.' },
      { q: 'Can I test it?', a: 'Yes, via a demo.' },
    ],

    footerTagline: 'Built for physiotherapy practices in the Netherlands.',
    footerRights: '© 2026 ForConnect. All rights reserved.',
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

          {/* Right side demo preview card */}
          <div className="animate-fade-in-up flex flex-col items-center md:items-start md:w-[420px] mt-10 md:mt-0">
            <div className="p-6 rounded-3xl bg-[#020617]/70 border border-gray-800 w-full h-[300px] flex flex-col justify-between shadow-[0_0_25px_#00F0FF22]">
              <div>
                <div className="text-xs text-gray-400 mb-4">
                  {lang === 'nl' ? 'Live AI demo' : 'Live AI demo'}
                </div>

                <div className="bg-[#111827] p-3 rounded-xl text-sm mb-3">
                  {lang === 'nl'
                    ? 'Goedemiddag, u spreekt met de digitale assistent. Waarmee kan ik u helpen?'
                    : 'Good afternoon, you are speaking with the digital assistant. How can I help you?'}
                </div>

                <div className="bg-[#00F0FF22] p-3 rounded-xl text-sm mb-3 text-right">
                  {lang === 'nl'
                    ? 'Ik wil graag een afspraak maken.'
                    : 'I would like to make an appointment.'}
                </div>

                <div className="bg-[#111827] p-3 rounded-xl text-sm">
                  {lang === 'nl' ? 'Natuurlijk. Ik kijk direct naar beschikbare momenten voor u.' : 'Of course. Let me check available times for you.'}
                </div>
              </div>

              <div className="text-xs text-gray-500 text-right mt-3">
                • {lang === 'nl' ? 'AI actief' : 'AI active'}
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col gap-3 mt-4 w-full">
              <a
                href="tel:+31634483701"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#00F0FF] text-[#020617] font-semibold shadow-[0_0_15px_#00F0FF55] hover:bg-[#66F6FF] transition"
              >
                <span>📞</span>
                {lang === 'nl' ? 'Bel de demo-lijn' : 'Call demo line'}
              </a>
            </div>
          </div>
        </section>

        </section>

        {/* Founder Statement */}
        <section className="mt-24">
          <div className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold text-center text-gray-200 mb-8">
              {lang === 'nl' ? 'Van de oprichter' : 'From the founder'}
            </h3>
            
            <p className="text-base text-gray-300 leading-relaxed mb-4 text-center max-w-2xl mx-auto">
              {lang === 'nl' 
                ? 'Wanneer u met ForConnect werkt, voelt dat voor mij als samenwerken. Uw patiënten worden voor een groot deel ook onze verantwoordelijkheid — en die neem ik serieus.'
                : 'When you work with ForConnect, it feels like collaboration to me. Your patients become largely our responsibility as well — and I take that seriously.'}
            </p>
            
            <p className="text-base text-gray-300 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              {lang === 'nl'
                ? 'Daarom is onze assistent er om uw praktijk te ondersteunen — zodat u zich met een gerust gevoel volledig kunt richten op uw patiënten.'
                : 'That is why our assistant is here to support your practice — so you can focus fully on your patients with peace of mind.'}
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-700">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABQAFADASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABAUDBgcCAQAI/8QAMBAAAgEDAwIFAwMEAwAAAAAAAQIDAAQRBRIhBjETIkFRYRRxkQcVgRUjobEy0eH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAwQCAQX/xAAfEQACAgMAAgMAAAAAAAAAAAAAAQIRAxIhBDETMkH/2gAMAwEAAhEDEQA/ANIhiBo1IwB2qCNSK8jmdnJ3Hg4raZimw5UqQJXkAyvNThadB8FvjI9tfba5mu4IDh2OfZRmh49XspJfDMhjb08QYB/eufNBOrNLHJq0ggpUTLRZHFRMtak+GBfMCoODQTFjIPMaW3CjGaWM4EyrSGx0FwZIOKhheNp2TjcDRI7cCgrW28O7llb7m4rh2I4gGOK6lc+J4SnHGWauI25yKWanq8entvME07vwscQyTj/yszyaxCONykQ6jdR2+9d2SP8ANcT9ZWesytb2lnOJVbLLKoDcd+BVd1fqS3S9aGO3kd842oAMfzUMlb4epijrHpeumdel+risZ33RSeRM/a3p+3p/FW2Tc+cdqxjTtTklLSCJ4ZIiHAJBzg54/itVv7G9x4tncnYRuCk4NWYJy11ZF5OOKna/SSdnAIIpftDTrzk8mgLiXUIv+6Nj85ppawexpjcqT3o5e9VvW9Ta1u9kZySeaDMej176K2jZ3PCjJxQ9zZw6np4d2dZDGdhRtp5pDb3cmoSRw8eGGyzD7vimd3qf9arc4d0LGIEqo/xU+VKKQrEltiLQekrTpx7m+uZo/ESFlVc52BvcnuTVHvtBhvbuWRWHnbJ+ee+aP1nqGwubKRPDnvNV3MxlWXbGjEAbQM+YAevvVWs9Zj0+4YSQSRFmzvzuUn1zSdX7RfCUV9i22NlHaxsoJOQc5Oa1fSI3i6fsI5JC8ggTcx9cjNZbbGS9ZY7dC8kowqj1JrV7cNHZwRvgMsaqQO2QKd4120T+XXEhVqZnVvIRs9a9sZzKVJ9sUTcMCGDDy0NboscyhDlcGnpvtkj9DBHFUfqUT3mqSWluwQkZ+fzVxR6WXGkJJeSXgkCswwS3oKASoTfVLo9nbkkNtAVQPuY1Lr96sti7ZGWUBvilfUGr6HYoi/VJcTwfpSLkA/J7VTdO6ia96hms5j/xTWpVQx7sGz/uk5EtRmO90N7nTJ4tAtY7K1tTsjBLSAAk0huNOVrST6iKFXxyU9DXmpS39s2yG8k8P0Uk8fg0mNzcu+Jp2I9Rnik1wtWSlqzR+kJ4pdUUb1V0jZkGe57cfjNX2PUVkBQOA6nGK/OA6hubLUo7iykKGEFVPfOe+f4q46F10l1dbb6dbct95B2k/PtVGJVGnwizS2laNgmnRlHfOOagt8LdAqfKQaUaddNLCHMiyxMPK6HIP70bblRdqVY4wc00WhX1F1YujL9NbgSXjDPm/TGPc/6rNNY6i1HUW3Xl7LIvOEBwv4AFLNa1+S/1Ge+cY8RsqmfTsopfFK9zNI8mMKBGoHYe+KU3ZpBIkJQM/wCo8/A+KAaUwajbSoxVlfAajZOB3pbdrvHviirBOnZerxZLi2RjDuYjkrVH1a88O5ktIxtC8OfUn2p9onV0dhpTpfK0s0OBGPWQegP4qn3UzXd5NcNwZXZyPyc0rHBptMfmyRcVqcA5/FdA47Gua+zTyUb6T1HquiSh7G8kiGclAcq35U8GtI0n+r1rJBs1bT2jl2kGa3wVJx3KnkfsTWP5r4thT+KFwD//2Q=="
                  alt="Milos Stevanovic"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <p className="font-semibold text-white">
                  {lang === 'nl' ? '— Milos Stevanovic, oprichter' : '— Milos Stevanovic, founder'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mt-24">
          <div className="relative p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 to-slate-900 shadow-lg">
            <div className="absolute top-6 left-6 text-cyan-500/20 text-6xl">&ldquo;</div>
            
            <div className="relative pl-8">
              <p className="text-base md:text-lg text-gray-200 leading-relaxed italic mb-6">
                {lang === 'nl' 
                  ? 'Geen gemiste patiënten meer. Ik ontvang alle gesprekken per e-mail met reden en contactgegevens, zodat ik meteen weet wie prioriteit heeft. Patiënten zijn ook blij dat ze altijd worden geholpen, en ik kan ongestoord behandelen.'
                  : 'No more missed patients. I receive every call by email with reason and contact details, so I immediately know who has priority. Patients are also happy that they are always helped, and I can treat without interruptions.'}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAcABwDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAACAIGBwP/xAAnEAACAQQCAQMEAwAAAAAAAAABAgMEBQYRAAcSITFRCBMUQRUWIv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwBkVE0NPA89RLHDEg8nd2Cqo+ST7cz7uvserwCnxwW2wNfKm+3WO3xokpX7QZSxk0qsX0AToa+d+nLD2fYKjK+uMjxqkmjhqLpbKikhkk34K7xsqlteutkb5hnTnax6t6p/rnbeM3HFJ8Zj/DgnfxkS6EeqrTgHcj6YbKeUYGmLrsAAknngSdKd5o1mkBKRlgGYD3IHudc6cOHRNPlnY3eld3ddcblxvHpLN/G2iCpfc9WhcMJSP0pAJ3oD/ShSwBbiP4Fc7Qv9RivW+SZLRxRy1NttdRVwpJvwZ0jZlDa9dbA3zBugenaTOLJQ9u9lXytyfJ7zTGajeZVEVtU+QQxxkFGddlhtfBSRpNjyKZniinheGeNJY3GmR1BVh8EH35MAAaA0BwDp0vX5rgv1B3Xp+/5bV5ZZZbS13t1XX7aqg3IB4s5JLb2wOyRtVKhdsvEXyDQwvMkzRI0sYIRyoLLv30f1vk+B/9k="
                    alt="Arnhem West Fysio"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Nina Radmilovic</p>
                  <p className="font-semibold text-white">Arnhem West Fysio</p>
                </div>
              </div>
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

        {/* Founder Statement */}
        <section className="mt-24">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-gray-800">
            <h3 className="text-lg font-semibold text-gray-300 mb-6">
              {lang === 'nl' ? 'Van de oprichter' : 'From the founder'}
            </h3>
            
            <p className="text-base text-gray-200 leading-relaxed mb-4">
              {lang === 'nl' 
                ? 'Wanneer u met ForConnect werkt, voelt dat voor mij als samenwerken. Uw patiënten worden voor een groot deel ook onze verantwoordelijkheid — en die neem ik serieus.'
                : 'When you work with ForConnect, it feels like collaboration to me. Your patients become largely our responsibility as well — and I take that seriously.'}
            </p>
            
            <p className="text-base text-gray-200 leading-relaxed mb-6">
              {lang === 'nl'
                ? 'Daarom is onze assistent er om uw praktijk te ondersteunen — zodat u zich met een gerust gevoel volledig kunt richten op uw patiënten.'
                : 'That is why our assistant is here to support your practice — so you can focus fully on your patients with peace of mind.'}
            </p>
            
            <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img 
                  src="data:image/jpeg;base64,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"
                  alt="Miloš Stevanović"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <p className="font-semibold text-white">
                  {lang === 'nl' ? '— Miloš Stevanović, oprichter' : '— Miloš Stevanović, founder'}
                </p>
              </div>
            </div>
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
                } bg-[#020617]/70 flex flex-col`}
              >
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{p.description}</p>

                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-sm text-gray-400">{p.per}</span>
                </div>

                <ul className="mt-4 text-sm text-gray-300 space-y-1 flex-1 pb-6">
                  {p.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToId('demo')}
                  className={`mt-auto w-full px-4 py-2 rounded-full font-semibold ${
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

          {/* Trial disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-300">
              {lang === 'nl' 
                ? '7 dagen gratis proberen • Geen creditcard vereist • Geen verplichtingen • Stop op elk moment'
                : '7-day free trial • No credit card required • No obligations • Cancel anytime'}
            </p>
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

            <div className="grid md:grid-cols-2 gap-3 mt-6">
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
                className="space-y-4 p-4 bg-[#020617]/80 rounded-xl border border-gray-800"
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
                  className="w-full px-4 py-3 bg-[#00F0FF] text-[#020617] rounded-full font-semibold mb-6"
                >
                  {t.form.submit}
                </button>
              </form>

              {/* CONTACT BOX */}
              <div className="p-4 bg-[#020617]/85 rounded-xl border border-gray-800">
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
                    href="tel:+3197010256601"
                    className="hover:text-[#00F0FF] transition"
                  >
                    +31 97 010 256 601
                  </a>
                </div>

                {/* WHATSAPP */}
                <div className="mt-3 text-sm">
                  <a
                    href="https://wa.me/31634483701"
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
                    <span>WhatsApp: +31 6 34 48 37 01</span>
                  </a>
                </div>

                {/* DEMO PRAKTIJK */}
                <div className="mt-5 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-400 mb-2">
                    {lang === 'nl' ? 'Of probeer onze DEMO praktijk' : 'Or try our DEMO practice'}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">🎧</span>
                    <a
                      href="tel:+31267913273"
                      className="hover:text-[#00F0FF] transition"
                    >
                      +31 26 791 32 73
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {lang === 'nl' ? '24/7 beschikbaar' : '24/7 available'}
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-[#00F0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-semibold">
                      {lang === 'nl' ? 'Actief in heel Nederland' : 'Active throughout the Netherlands'}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00F0FF]">✓</span>
                      <span>GDPR compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00F0FF]">✓</span>
                      <span>{lang === 'nl' ? 'Nederlandse servers' : 'Dutch servers'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00F0FF]">✓</span>
                      <span>{lang === 'nl' ? '7 dagen gratis proberen' : '7-day free trial'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00F0FF]">✓</span>
                      <span>{lang === 'nl' ? 'Geen setup kosten' : 'No setup fees'}</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-xs text-gray-400 mb-3">
                    {lang === 'nl' ? 'Volg ons' : 'Follow us'}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/forconnect.nl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00F0FF] transition"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    <a
                      href="https://www.facebook.com/share/1JRDzjsycH/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00F0FF] transition"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    <a
                      href="https://www.linkedin.com/company/forconnect-ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00F0FF] transition"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
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
        <footer className="mt-24 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-semibold text-white mb-1">ForConnect</p>
              <p>{t.footerTagline}</p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/forconnect.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00F0FF] transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/share/1JRDzjsycH/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00F0FF] transition"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/forconnect-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00F0FF] transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <p className="mt-4">{t.footerRights}</p>
        </footer>
      </div>
    </div>
  );
}