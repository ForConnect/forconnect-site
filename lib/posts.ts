export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  image: string; // path in /public, e.g. /blog/name.jpg (1200x630)
  imageAlt: string;
  intro?: string[]; // shown after the cover image, before the first section
  closing?: string; // optional text in the CTA box at the end
  sections: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
    stats?: { value: string; label: string }[];
  }[];
};

export const SITE_URL = 'https://forconnect.nl';

export const posts: Post[] = [
  {
    slug: 'een-assistent-voor-alle-vestigingen',
    title: 'Tien fysiotherapeuten, drie vestigingen, vijf telefoons: hoeveel assistenten heeft u nodig?',
    description:
      'Meerdere vestigingen en telefoons? U heeft maar één digitale assistent nodig, voor alle fysiotherapeuten en alle locaties.',
    date: '2026-10-22',
    readMinutes: 2,
    image: '/blog/een-assistent-alle-vestigingen.jpg',
    imageAlt: 'Een digitale assistent verbindt meerdere vestigingen van een fysiopraktijk',
    intro: [
      'Een reactie die we soms horen: mooi, maar wij hebben 10 fysiotherapeuten, 3 vestigingen en 5 telefoons. Dan hebben we toch meerdere assistenten nodig?',
      'Nee. U heeft er maar één nodig.',
    ],
    sections: [
      {
        heading: 'Eén assistent voor alle vestigingen',
        paragraphs: [
          'De digitale assistent van ForConnect neemt op wanneer niemand kan opnemen. Ze werkt voor al uw fysiotherapeuten en al uw vestigingen tegelijk.',
          'Dus geen aparte assistent per locatie en geen aparte assistent per telefoon.',
        ],
      },
      {
        heading: 'Eenvoudig in te stellen',
        paragraphs: [
          'Het instellen is eenvoudig. Of u het wilt proberen, bepaalt u zelf. Wij zorgen dat het kan.',
        ],
      },
      {
        heading: 'Wat kost het?',
        paragraphs: [
          'Eén assistent kost u per maand ongeveer evenveel als één keer per maand met uw collega\'s een paar drankjes drinken.',
          'Daarvoor krijgt u een assistent die voor uw hele praktijk beschikbaar is:',
        ],
        bullets: [
          'Elke beller wordt geholpen, op elke vestiging.',
          'Alle gegevens komen per e-mail bij u terecht.',
          'Uw team kan ongestoord doorwerken.',
        ],
      },
    ],
    closing:
      'Wilt u het proberen? Neem op elke manier contact met ons op, wij regelen de rest.',
  },
  {
    slug: 'robot-of-prettige-assistent',
    title: 'Praat de beller met een robot of met een prettige assistent?',
    description:
      'Veel mensen willen niet met een robot praten. Lees waarom onze digitale assistent juist prettig, rustig en menselijk klinkt.',
    date: '2026-09-12',
    readMinutes: 2,
    image: '/blog/prettige-assistent.jpg',
    imageAlt: 'Patient belt met een tevreden gezicht terwijl een digitale assistent het gesprek aanneemt',
    intro: [
      'Mensen willen niet met een robot praten. Dat horen we vaak, en dat begrijpen we goed.',
      'Maar praat een beller bij ForConnect echt met een robot, of met een prettige assistent?',
    ],
    sections: [
      {
        heading: 'Geen robot, maar een prettige assistent',
        paragraphs: [
          'De digitale assistent van ForConnect spreekt Nederlands op het niveau van een echt persoon. Zo goed, dat bellers soms denken dat ze met een mens praten, ook al stelt ze zich voor als digitale AI-assistent.',
          'Er zijn geen stijve robotzinnen en geen keuzemenu met toetsen. Ze praat gewoon, zoals een goede baliemedewerker dat doet.',
        ],
      },
      {
        heading: 'Altijd rustig, vriendelijk en empathisch',
        paragraphs: [
          'Ze is altijd rustig en goedgemutst, en heeft aandacht voor de beller. Ook als iemand pijn heeft of haast, blijft ze kalm en luistert ze.',
          'Daardoor is elk gesprek prettig. En de beller weet precies waar hij aan toe is:',
        ],
        bullets: [
          'Zijn verzoek wordt genoteerd.',
          'Hij hoort dat het is doorgegeven aan de praktijk.',
          'Hij weet dat er contact met hem wordt opgenomen.',
        ],
      },
      {
        heading: 'En wat doet u?',
        paragraphs: [
          'U hoeft alleen nog de patiënt te contacteren, als dat nodig is. De gegevens en de reden van het gesprek staan in uw e-mail, dus u kunt gericht terugbellen.',
        ],
      },
      {
        heading: 'Hoor en ervaar het zelf',
        paragraphs: [
          'Lezen is één ding, het zelf horen is wat telt. Doe een proefaanvraag en ervaar hoe het is om met onze assistent te praten.',
        ],
      },
    ],
    closing:
      'Bel de demo-lijn op +31 26 791 32 73 en hoor zelf hoe prettig een gesprek met onze digitale assistent is.',
  },
  {
    slug: 'persoonlijk-contact-blijft-behouden',
    title: 'Blijft het persoonlijke contact behouden? Ja, uw digitale assistent vervangt niemand',
    description:
      'Een AI-telefoonassistent vervangt uw team niet, maar helpt wanneer niemand kan opnemen. Lees wat ze wel en niet doet.',
    date: '2026-08-08',
    readMinutes: 3,
    image: '/blog/persoonlijk-contact.jpg',
    imageAlt: 'Fysiotherapeut praat persoonlijk met een patient in de praktijk',
    intro: [
      'Een vraag die we vaak horen: verdwijnt het persoonlijke contact met mijn patiënten als een AI de telefoon opneemt?',
      'Het antwoord is nee. Persoonlijk contact blijft bij u en uw team, waar het hoort.',
    ],
    sections: [
      {
        heading: 'Uw digitale assistent vervangt u niet',
        paragraphs: [
          'De digitale assistent van ForConnect vervangt u of uw medewerkers niet. Ze helpt wanneer niemand kan opnemen: tijdens een behandeling, in de pauze, buiten openingstijd of als de balie niet bezet is.',
          'Daarna belt u of uw team de patiënt gewoon zelf terug, op uw eigen manier.',
        ],
      },
      {
        heading: 'Wat de assistent wel doet',
        bullets: [
          'Ze neemt op wanneer niemand kan opnemen.',
          'Ze beantwoordt vragen, bijvoorbeeld over tarieven, vergoedingen en verzekeringen, wie er werkt en wanneer.',
          'Ze verzamelt de gegevens voor een afspraak maken, wijzigen of annuleren.',
          'Ze stuurt alles per e-mail naar uw praktijk, zodat u in een oogopslag ziet wat er nodig is.',
        ],
      },
      {
        heading: 'De patiënt weet waar hij aan toe is',
        paragraphs: [
          'Tijdens het gesprek hoort de patiënt dat het verzoek is doorgegeven en dat er iemand contact opneemt zodra het kan. Er is geen onzekerheid, geen voicemail en geen vraag of het bericht wel is aangekomen.',
          'De patiënt weet dat zijn verzoek is gedaan en hoeft alleen nog op uw contact te wachten. Dat geeft rust.',
        ],
      },
      {
        heading: 'Het resultaat',
        bullets: [
          'Het persoonlijke contact blijft bij uw team.',
          'Elke beller wordt geholpen, ook als niemand kan opnemen.',
          'Patiënten zijn gerustgesteld en voelen zich serieus genomen.',
          'U en uw team kunnen ongestoord doorwerken.',
        ],
      },
    ],
    closing: 'Benieuwd hoe dit in uw praktijk werkt? Neem vrijblijvend contact met ons op.',
  },
  {
    slug: 'extra-telefoonassistent-naast-baliemedewerker',
    title: 'Heeft u al een baliemedewerker? Dan is een extra digitale telefoonassistent nog steeds praktisch',
    description:
      'Ook met een baliemedewerker zijn er momenten waarop niemand opneemt. Lees hoe een AI-assistent die gaten dekt, zonder uw team te vervangen.',
    date: '2026-06-22',
    readMinutes: 2,
    image: '/blog/extra-telefoonassistent.jpg',
    imageAlt: 'Lege balie van een fysiopraktijk buiten openingstijden terwijl de telefoon overgaat',
    intro: [
      'Heeft uw praktijk een baliemedewerker of een assistent die de telefoon opneemt? Dan denkt u misschien dat u niets mist.',
      'Toch zijn er momenten waarop niemand kan opnemen. Dat is niemand kwalijk te nemen, maar de beller merkt het wel.',
    ],
    sections: [
      {
        heading: 'Wanneer niemand kan opnemen',
        paragraphs: ['Ook de beste baliemedewerker kan niet altijd aan de telefoon zitten:'],
        bullets: [
          'Tijdens de lunchpauze.',
          'Voor en na openingstijd.',
          'In het weekend en op feestdagen.',
          'Als uw baliemedewerker met vakantie is of ziek thuis zit.',
          'Als de balie druk is en de telefoon blijft overgaan.',
        ],
      },
      {
        heading: 'Ook bij een parttime of fulltime baliemedewerker',
        paragraphs: [
          'Bij een parttime baliemedewerker zijn er dagen of dagdelen zonder bezetting. Maar ook bij een fulltime medewerker blijven er gaten: pauzes, vakanties, ziekte en alle uren buiten kantoortijd.',
          'Eén persoon kan nooit de hele week bereikbaar zijn. En een beller die niemand krijgt, belt vaak gewoon de volgende praktijk.',
        ],
      },
      {
        heading: 'Een extra assistent, geen vervanging',
        paragraphs: [
          'De AI-telefoonassistent van ForConnect vervangt uw baliemedewerker niet. Zie haar als een extra collega die inspringt wanneer niemand kan opnemen.',
          'Zij neemt elk gesprek aan, in goed Nederlands, noteert de gegevens en de reden van het telefoontje en stuurt alles per e-mail naar uw praktijk. Uw baliemedewerker ziet na terugkomst direct wie er heeft gebeld en kan gericht terugbellen.',
        ],
      },
      {
        heading: 'Wat het oplevert',
        bullets: [
          'Uw patiënten zijn de hele week gedekt, ook op momenten dat de balie leeg is.',
          'Tevredenere patiënten, omdat elke beller wordt geholpen.',
          'Minder gemiste nieuwe aanvragen en dus meer omzet.',
          'Minder druk op uw team, dat ongestoord kan werken.',
        ],
      },
    ],
    closing: 'Benieuwd hoe dit naast uw eigen balie werkt? Neem vrijblijvend contact met ons op.',
  },
  {
    slug: 'voicemail-is-geen-oplossing',
    title: 'Voicemail is geen oplossing. Dat merken wij zelf elke dag.',
    description:
      'Een beller die de voicemail krijgt, weet niets. Lees waarom een telefoonassistent die opneemt meer doet dan een voicemail.',
    date: '2026-10-01',
    readMinutes: 3,
    image: '/blog/voicemail-is-geen-oplossing.jpg',
    imageAlt: 'Man met rugpijn kijkt naar zijn telefoon waarop ForConnect het gesprek aanneemt',
    intro: [
      'Wij bellen dagelijks met fysiopraktijken. In de meeste gevallen krijgen we de voicemail. Soms nemen ze helemaal niet op en blijft de telefoon gewoon overgaan.',
      'Dat is niemand kwalijk te nemen. U staat midden in een behandeling.',
    ],
    sections: [
      {
        heading: 'Wat doet een voicemail met de beller?',
        paragraphs: ['Een beller die de voicemail krijgt, weet niets:'],
        bullets: [
          'Wordt er vandaag nog teruggebeld, of pas morgen?',
          'Is mijn bericht wel aangekomen?',
          'Moet ik het nog bij een andere praktijk proberen?',
        ],
      },
      {
        heading: 'Wat een beller eigenlijk nodig heeft',
        paragraphs: [
          'Iemand met pijn of een dringende vraag wil niet wachten in onzekerheid. Veel bellers spreken niets in en bellen de volgende praktijk. U merkt dat nooit, want een gemiste beller laat geen spoor achter.',
          'Niet per se direct een afspraak. Wel het gevoel dat er iemand is:',
        ],
        bullets: [
          'Er neemt iemand op.',
          'De gegevens worden genoteerd.',
          'Er wordt gezegd dat de praktijk zo snel mogelijk terugbelt.',
        ],
      },
      {
        heading: 'Een telefoonassistent die meer doet dan opnemen',
        paragraphs: [
          'Dat is vaak genoeg om iemand gerust te stellen. De patiënt voelt zich serieus genomen.',
          'De AI-telefoonassistent van ForConnect neemt elk gesprek aan, in goed Nederlands. Hij noteert de gegevens en vraagt ook waarvoor de patiënt belt. Zo wordt meteen duidelijk hoe dringend iets is.',
          'Tijdens het gesprek gaat er een e-mail naar de praktijk. Daarin ziet u in één oogopslag:',
        ],
        bullets: [
          'De reden van het telefoontje en hoe urgent het lijkt.',
          'Of er actie nodig is. Een afmelding vraagt bijvoorbeeld niets van de beller. U hoeft alleen de agenda aan te passen.',
          'Of het administratief is. Wordt er binnen 24 uur afgemeld, dan bepaalt u of er een factuur moet volgen.',
          'Of er een gaatje in de agenda ontstaat, zodat u kunt proberen die plek nog op te vullen en geen omzet misloopt.',
        ],
      },
      {
        heading: 'Rust voor de beller en voor u',
        paragraphs: [
          'Ondertussen hoort de beller dat er iemand is, dat zijn gegevens genoteerd zijn en dat de praktijk zo snel mogelijk terugbelt. U gaat rustig door met uw behandeling en pakt de e-mails op wanneer het uitkomt.',
          'Betaalbaar, en zonder extra personeel.',
        ],
      },
      {
        heading: 'Een vraag om mee te nemen',
        paragraphs: [
          'Hoeveel bellers hebben de afgelopen maand de voicemail gekregen en niets ingesproken? U weet het niet. En precies dat is het punt.',
        ],
      },
    ],
    closing: 'Benieuwd hoe dit in uw praktijk zou werken? Neem vrijblijvend contact met ons op.',
  },
  {
    slug: 'telefoon-opnemen-tijdens-behandeling',
    title: 'Telefoon opnemen tijdens een behandeling: moet dat wel?',
    description:
      'Opnemen of laten gaan? Met een AI-telefoonassistent hoeft u niet meer te kiezen tussen uw patiënt en de beller.',
    date: '2025-06-10',
    readMinutes: 2,
    image: '/blog/telefoon-opnemen-tijdens-behandeling.jpg',
    imageAlt: 'Fysiotherapeut neemt de telefoon op terwijl zijn patiënt wacht op de behandeltafel',
    intro: [
      'Het is een bekend dilemma. U bent midden in een behandeling en de telefoon gaat. Opnemen voelt onprofessioneel tegenover de patiënt op de bank. Niet opnemen betekent een gemiste beller.',
    ],
    sections: [
      {
        heading: 'Wat is het probleem?',
        bullets: [
          'Een patiënt die u onderbreekt, krijgt niet uw volledige aandacht.',
          'Een beller die niemand krijgt, belt vaak niet terug. Soms belt hij gewoon de volgende praktijk.',
          'Een nieuwe patiënt die voor het eerst belt, vormt zijn eerste indruk van uw praktijk aan de telefoon.',
        ],
      },
      {
        heading: 'Vroeger was dit de keuze: opnemen of laten gaan',
        paragraphs: [
          'Beide opties kosten iets: aandacht of een patiënt. Een extra balie-medewerker is voor veel praktijken te duur, en een voicemail wordt zelden afgeluisterd door de beller zelf.',
        ],
      },
      {
        heading: 'Dat hoeft niet meer',
        paragraphs: [
          'Met een AI-telefoonassistent wordt elk gesprek direct aangenomen, in goed Nederlands. De assistent noteert waarvoor de patiënt belt en zet het voor u klaar. U kunt rustig doorgaan met uw behandeling en later alles terugkijken.',
        ],
      },
      {
        heading: 'Het resultaat',
        bullets: [
          'Elke beller wordt geholpen.',
          'Uw patiënt op de behandeltafel krijgt uw volledige aandacht.',
          'U verliest geen nieuwe aanvragen meer door gemiste oproepen.',
        ],
      },
    ],
    closing:
      'Benieuwd hoe dit in uw praktijk werkt? Neem contact met ons op voor een vrijblijvend gesprek.',
  },
  {
    slug: 'gemiste-telefoontjes-fysiopraktijk',
    title: 'Gemiste telefoontjes in de fysiopraktijk: wat kost het u echt?',
    description:
      'Elke gemiste oproep is een patient die naar een andere praktijk belt. Lees hoe u dit voorkomt zonder extra personeel.',
    date: '2025-12-01',
    readMinutes: 4,
    image: '/blog/gemiste-telefoontjes.jpg',
    imageAlt: 'Telefoon rinkelt in een fysiopraktijk terwijl de fysiotherapeut een patient behandelt',
    sections: [
      {
        heading: 'Het probleem: u kunt niet tegelijk behandelen en opnemen',
        paragraphs: [
          'Als fysiotherapeut staat u de hele dag bij patienten. Midden in een behandeling neemt u de telefoon niet op, en dat is ook goed zo. Maar de beller weet dat niet. Die ziet alleen een gemiste oproep en belt bij de volgende praktijk.',
          'Vooral nieuwe patienten haken snel af. Wie pijn heeft, wil nu een afspraak, niet over twee uur teruggebeld worden.',
        ],
      },
      {
        heading: 'Een rekenvoorbeeld',
        stats: [
          { value: '2', label: 'gemiste nieuwe patienten per week' },
          { value: '8', label: 'gemiste patienten per maand' },
          { value: '€1.600', label: 'omzet per maand (voorbeeld)' },
        ],
        paragraphs: [
          'Stel dat u per week 2 nieuwe patienten mist doordat de telefoon niet wordt opgenomen. Dat zijn ongeveer 8 patienten per maand.',
          'Als een nieuwe patient u gemiddeld 200 euro oplevert (dit is een voorbeeldbedrag, rekent u met uw eigen cijfers), dan gaat het om ongeveer 1.600 euro omzet per maand die naar andere praktijken gaat.',
        ],
      },
      {
        heading: 'Wat u er normaal aan kunt doen',
        paragraphs: [
          'Een baliemedewerker of telefoonservice lost het op, maar kost al snel meer dan een paar honderd euro per maand en is niet altijd beschikbaar. Een antwoordapparaat helpt weinig: veel mensen spreken geen bericht in.',
          'Een AI-telefoonassistent neemt elke oproep direct op, stelt de juiste vragen en stuurt u daarna de gegevens per e-mail. U ziet na de behandeling in een keer wie er heeft gebeld, waarom en hoe u de persoon bereikt.',
        ],
      },
      {
        heading: 'Waar u op moet letten',
        paragraphs: [
          'Kies een assistent die natuurlijk Nederlands spreekt, geen app of installatie nodig heeft en met uw huidige nummer werkt via doorschakeling.',
          'Vraag ook altijd om een proefperiode of live demo, zodat u zelf hoort hoe het klinkt voordat u een keuze maakt.',
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
