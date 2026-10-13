export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  sections: { heading: string; paragraphs: string[] }[];
};

export const SITE_URL = 'https://forconnect.nl';

export const posts: Post[] = [
  {
    slug: 'gemiste-telefoontjes-fysiopraktijk',
    title: 'Gemiste telefoontjes in de fysiopraktijk: wat kost het u echt?',
    description:
      'Elke gemiste oproep is een patient die naar een andere praktijk belt. Lees hoe u dit voorkomt zonder extra personeel.',
    date: '2026-10-14',
    readMinutes: 4,
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
