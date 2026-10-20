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
    slug: 'telefoon-opnemen-tijdens-behandeling',
    title: 'Telefoon opnemen tijdens een behandeling: moet dat wel?',
    description:
      'Opnemen of laten gaan? Met een AI-telefoonassistent hoeft u niet meer te kiezen tussen uw patiënt en de beller.',
    date: '2026-10-20',
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
    date: '2026-10-14',
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
