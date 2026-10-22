import type { Metadata } from "next";
import type { CSSProperties } from "react";
import ContactForm from "./ContactForm";
import NeuralNet from "@/components/NeuralNet";

export const metadata: Metadata = {
  title: "ForConnect voor winkels - AI telefoonassistent",
  description:
    "AI telefoonassistent voor winkels. Beantwoordt vragen over artikelen en voorraad, handelt klachten rustig af, maakt afspraken en neemt berichten aan.",
};

// Edit contact data here
const PHONE = "+31 6 34 48 37 01";
const PHONE_HREF = "tel:+31634483701";
const WHATSAPP = "https://wa.me/31634483701";
const EMAIL = "info@forconnect.nl";
const DEMO_NL = "+31 26 669 04 70";
const DEMO_NL_HREF = "tel:+31266690470";
const DEMO_BE = "+32 78 700 402";
const DEMO_BE_HREF = "tel:+3278700402";

const BG = "#111d38";
const DARK = "#0a0f1a";
const TEXT = "#ffffff";
const CYAN = "#00e5ff";
const ACCENT = "#00e5ff";
const MUTED = "#9ca3af";
const LINE = "rgba(255,255,255,0.08)";

const CARD: CSSProperties = {
  background: "#111827",
  border: `1px solid ${LINE}`,
  borderRadius: 16,
  padding: 22,
};
const WRAP: CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "0 24px" };
const SECTION: CSSProperties = { padding: "36px 0" };
const H2: CSSProperties = { fontSize: 36, fontWeight: 700, margin: "0 0 10px", textAlign: "center" };
const SUB: CSSProperties = {
  color: MUTED,
  textAlign: "center",
  maxWidth: 640,
  margin: "0 auto 28px",
  lineHeight: 1.6,
};
const BTN: CSSProperties = {
  display: "inline-block",
  background: CYAN,
  color: DARK,
  fontWeight: 600,
  padding: "14px 28px",
  borderRadius: 10,
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
  fontSize: 16,
};
const BTN2: CSSProperties = {
  ...BTN,
  background: "transparent",
  color: TEXT,
  border: "1px solid rgba(255,255,255,0.25)",
};
const IMG: CSSProperties = {
  width: "100%",
  height: "auto",
  borderRadius: 12,
  display: "block",
  marginBottom: 20,
  background: "#111827",
};
const INPUT: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "#0a0f1a",
  color: TEXT,
  fontSize: 15,
  marginBottom: 12,
  boxSizing: "border-box",
};

const nav = [
  ["Home", "#home"],
  ["Hoe het werkt", "#hoe"],
  ["Voor wie", "#voorwie"],
  ["Voordelen", "#voordelen"],
  ["Prijzen", "#prijzen"],
  ["Demo", "#demo"],
  ["Contact", "#contact"],
  ["FAQ", "#faq"],
];

const steps = [
  { img: "/winkel-druk.jpg", t: "1. Klant belt uw winkel", d: "U staat in de winkel en heeft geen tijd om op te nemen." },
  {
    img: "/winkel-voorraad.jpg",
    t: "2. De AI assistent voert het gesprek",
    d: "Beantwoordt vragen over prijs, voorraad en openingstijden, en handelt directe verzoeken af.",
  },
  {
    img: "/winkel-email.jpg",
    t: "3. U ontvangt alles per e-mail",
    d: "Met een samenvatting, klaar voor afspraken, berichten of opvolging.",
  },
];

const features = [
  {
    t: "Alles over uw winkel",
    d: "Openingstijden, adres, verzending, retourbeleid en betaalmethodes. Direct beantwoord.",
  },
  {
    t: "Vragen over artikelen",
    d: "Geeft informatie over producten en verwijst klanten naar de juiste plek op uw website.",
  },
  {
    t: "Doorgeven aan de winkel",
    d: "Weet de assistent het niet zeker? Dan stuurt ze de vraag door naar uw winkel, als de klant dat wil.",
  },
  {
    t: "Afspraken maken",
    d: "Voor pasafspraken of advies. De afspraak gaat direct per e-mail naar uw winkel.",
  },
  {
    t: "Bericht achterlaten",
    d: "Als een voicemail, maar met een gesprek. U krijgt een samenvatting en het volledige bericht.",
  },
  {
    t: "Altijd vriendelijk",
    d: "Ook als een klant boos is of met verheven stem praat, blijft de assistent rustig en empathisch.",
  },
];

const audience = [
  { t: "Kleding en schoenen", d: "Vragen over maten, retour en beschikbaarheid, terwijl uw team klanten helpt." },
  { t: "Elektronica en wonen", d: "Productvragen en klachten professioneel afgehandeld, zonder wachttijd." },
  { t: "Speciaalzaken", d: "Uw kennis en regels vastgelegd, zodat elke beller hetzelfde goede antwoord krijgt." },
  { t: "Winkels met meerdere filialen", d: "Eén assistent voor al uw locaties, met de juiste informatie per winkel." },
];

const why = [
  { t: "Geen gemiste oproepen", d: "Altijd bereikbaar voor klanten." },
  { t: "Tevreden klanten", d: "Ook klachten worden rustig en netjes opgevangen." },
  { t: "Natuurlijke Nederlandse stem", d: "Professioneel en menselijk." },
  { t: "Geen personeelskosten", d: "Vaste maandprijs." },
];

const plans = [
  {
    name: "Starter Lite",
    sub: "Voor kleine winkels.",
    price: "19",
    hl: false,
    items: ["AI beantwoordt oproepen 24/7", "Gespreksrapportage per e-mail", "1 telefoonnummer", "Tot 60 belminuten"],
  },
  {
    name: "Starter",
    sub: "Voor startende winkels.",
    price: "39",
    hl: true,
    items: [
      "AI beantwoordt oproepen 24/7",
      "Volledige gespreksrapportage per e-mail",
      "E-mail notificaties",
      "1 telefoonnummer",
      "Tot 150 belminuten",
    ],
  },
  {
    name: "Basis",
    sub: "Voor drukke winkels.",
    price: "59",
    hl: false,
    items: [
      "AI beantwoordt oproepen 24/7",
      "Volledige gespreksrapportage per e-mail",
      "E-mail notificaties",
      "1 telefoonnummer",
      "Tot 300 belminuten",
    ],
  },
  {
    name: "Pro Plus",
    sub: "Voor bedrijven met speciale wensen.",
    price: "",
    hl: false,
    items: [
      "Alles van Basis, plus:",
      "Agenda integratie (Google/Outlook)",
      "Meerdere telefoonnummers/locaties",
      "Geavanceerde call flows",
      "Onbeperkte belminuten",
    ],
  },
];

const faqs = [
  { q: "Werkt dit met mijn huidige nummer?", a: "Ja, doorschakeling is mogelijk." },
  { q: "Moet ik iets installeren?", a: "Nee, alles werkt via de cloud." },
  { q: "Klinkt de AI natuurlijk?", a: "Ja, professioneel Nederlands." },
  { q: "Kan ik het eerst testen?", a: "Ja, via een live demo." },
  {
    q: "Wat als de assistent een antwoord niet weet?",
    a: "Dan zegt ze dat eerlijk en biedt aan de vraag door te sturen naar uw winkel. De klant beslist of dat gebeurt.",
  },
  {
    q: "Hoe gaat de assistent om met boze klanten?",
    a: "Altijd rustig en met empathie, ongeacht hoe de klant praat. De details gaan naar u per e-mail.",
  },
];

export default function WinkelsPage() {
  return (
    <main
      style={{
        background: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <NeuralNet />
      <div style={{ position: "relative", zIndex: 1 }}>
      <style>{`
        html { scroll-behavior: smooth; }
        .fc-nav { display: flex; gap: 22px; }
        @media (max-width: 960px) { .fc-nav { display: none; } .fc-h1 { font-size: 38px !important; } }
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>

      {/* Nav */}
      <header
        style={{
          ...WRAP,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 72,
        }}
      >
        <a href="/" style={{ color: TEXT, textDecoration: "none", lineHeight: 1.1 }}>
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            For<span style={{ color: ACCENT }}>Connect</span>
          </span>
          <br />
          <span style={{ color: MUTED, fontSize: 11 }}>AI Voice Agent</span>
        </a>
        <nav className="fc-nav">
          {nav.map(([l, h]) => (
            <a key={h} href={h} style={{ color: MUTED, textDecoration: "none", fontSize: 14 }}>
              {l}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section id="home" style={{ ...SECTION, paddingTop: 24, paddingBottom: 8 }}>
        <div
          style={{
            ...WRAP,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: 13,
                padding: "6px 14px",
                borderRadius: 20,
                marginBottom: 14,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: 8, background: CYAN, display: "inline-block" }} />
              AI Telefoonassistent voor Winkels
            </span>
            <div style={{ color: MUTED, fontSize: 15, margin: "0 0 16px" }}>&#10003; Actief sinds 2023</div>
            <h1 className="fc-h1" style={{ fontSize: 56, lineHeight: 1.08, fontWeight: 800, margin: "0 0 18px" }}>
              Uw persoonlijke telefoonassistent.
            </h1>
            <p style={{ color: "#d1d5db", fontSize: 17, lineHeight: 1.6, margin: "0 0 24px", maxWidth: 560 }}>
              Uw telefoon wordt beantwoord, vragen over artikelen en voorraad worden afgehandeld en alles wordt netjes
              naar uw e-mail gestuurd - zodat u zich kunt richten op de klanten in uw winkel.
            </p>
            <a href="#demo" style={BTN}>
              Plan een demo
            </a>
          </div>

          <div>
            <div style={{ ...CARD, padding: 24, borderRadius: 24 }}>
              <div style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>Live AI demo</div>
              <div
                style={{
                  background: "#1f2937",
                  borderRadius: 12,
                  padding: "12px 16px",
                  marginBottom: 12,
                  maxWidth: "88%",
                  fontSize: 15,
                  lineHeight: 1.5,
                }}
              >
                Goedemiddag, u spreekt met de digitale assistent van de winkel. Waarmee kan ik u helpen?
              </div>
              <div
                style={{
                  background: "rgba(0,229,255,0.12)",
                  border: "1px solid rgba(0,229,255,0.3)",
                  borderRadius: 12,
                  padding: "12px 16px",
                  marginLeft: "auto",
                  marginBottom: 12,
                  maxWidth: "88%",
                  fontSize: 15,
                  lineHeight: 1.5,
                  textAlign: "right",
                }}
              >
                Hebben jullie deze jas nog in maat M?
              </div>
              <div
                style={{
                  background: "#1f2937",
                  borderRadius: 12,
                  padding: "12px 16px",
                  maxWidth: "88%",
                  fontSize: 15,
                  lineHeight: 1.5,
                }}
              >
                Natuurlijk, ik kijk direct voor u. U kunt de jas ook bekijken op onze website.
              </div>
              <div style={{ color: MUTED, fontSize: 13, textAlign: "right", marginTop: 14 }}>* AI actief</div>
            </div>
            <a
              href={DEMO_NL_HREF}
              style={{ ...BTN, display: "block", textAlign: "center", borderRadius: 30, marginTop: 16 }}
            >
              &#128222; Bel de demo-lijn
            </a>
          </div>
        </div>
      </section>

      {/* Hoe werkt */}
      <section id="hoe" style={SECTION}>
        <div style={WRAP}>
          <h2 style={H2}>Hoe werkt ForConnect?</h2>
          <p style={SUB}>Afspraak of verzoek wordt doorgestuurd</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {steps.map((s) => (
              <div key={s.t} style={CARD}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.t} style={IMG} />
                <h3 style={{ fontSize: 18, margin: "0 0 8px" }}>{s.t}</h3>
                <p style={{ color: MUTED, lineHeight: 1.6, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ ...CARD, marginTop: 16, textAlign: "center" }}>
            <h3 style={{ fontSize: 18, margin: "0 0 8px", color: ACCENT }}>Agenda-integratie mogelijk</h3>
            <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>
              Koppel uw Google- of Outlook-agenda en laat de assistent afspraken inplannen op basis van uw
              beschikbaarheid.
            </p>
          </div>
        </div>
      </section>

      {/* Boze klant */}
      <section style={SECTION}>
        <div
          style={{
            ...WRAP,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
            alignItems: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/winkel-klacht.jpg" alt="Boze klant, rustige assistent" style={{ ...IMG, marginBottom: 0 }} />
          <div>
            <h2 style={{ ...H2, textAlign: "left" }}>Rustig, ook bij een boze klant</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 20px" }}>
              Niet elke oproep is vriendelijk. De assistent blijft altijd kalm, luistert, toont begrip en zoekt naar een
              oplossing - ongeacht hoe de klant praat.
            </p>
            <ol style={{ color: "#e5e7eb", lineHeight: 1.9, paddingLeft: 20, margin: 0 }}>
              <li>Klant belt, geïrriteerd over een bestelling</li>
              <li>De assistent erkent het probleem en noteert de details</li>
              <li>U ontvangt een duidelijke samenvatting en pakt het op</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Functies */}
      <section style={SECTION}>
        <div style={WRAP}>
          <h2 style={H2}>Wat de assistent voor uw winkel doet</h2>
          <p style={SUB}>Niet elke oproep vraagt uw aandacht.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {features.map((f) => (
              <div key={f.t} style={CARD}>
                <div style={{ width: 8, height: 8, borderRadius: 8, background: CYAN, marginBottom: 20 }} />
                <h3 style={{ fontSize: 20, margin: "0 0 10px" }}>{f.t}</h3>
                <p style={{ color: MUTED, lineHeight: 1.6, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section id="voorwie" style={SECTION}>
        <div style={WRAP}>
          <h2 style={H2}>Voor wie is ForConnect?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 24 }}>
            {audience.map((a) => (
              <div key={a.t} style={CARD}>
                <h3 style={{ fontSize: 18, margin: "0 0 10px" }}>{a.t}</h3>
                <p style={{ color: MUTED, lineHeight: 1.6, margin: 0 }}>{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oprichter */}
      <section style={SECTION}>
        <div style={WRAP}>
          <div
            style={{
              ...CARD,
              padding: 28,
              display: "flex",
              gap: 28,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/milos-optimized.jpg"
              alt="Milos Stevanovic"
              width={120}
              height={120}
              style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
            />
            <div style={{ flex: "1 1 320px" }}>
              <p style={{ color: ACCENT, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", margin: "0 0 12px" }}>
                Van de oprichter
              </p>
              <p style={{ lineHeight: 1.7, margin: "0 0 10px", fontSize: 17 }}>
                Wanneer u met ForConnect werkt, voelt dat voor mij als samenwerken. Uw klanten worden voor een groot
                deel ook onze verantwoordelijkheid - en die neem ik serieus.
              </p>
              <p style={{ lineHeight: 1.7, margin: "0 0 16px", fontSize: 17, color: "#d1d5db" }}>
                Daarom is onze assistent er om uw winkel te ondersteunen - zodat u zich met een gerust gevoel volledig
                kunt richten op uw klanten.
              </p>
              <div style={{ fontWeight: 600 }}>Milos Stevanovic</div>
              <div style={{ color: MUTED, fontSize: 14 }}>Oprichter, ForConnect</div>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section id="voordelen" style={SECTION}>
        <div style={WRAP}>
          <h2 style={H2}>Waarom kiezen voor ForConnect?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16, marginTop: 24 }}>
            {why.map((w) => (
              <div key={w.t} style={CARD}>
                <h3 style={{ fontSize: 18, margin: "0 0 8px", color: ACCENT }}>{w.t}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bericht voorbeeld */}
      <section style={SECTION}>
        <div
          style={{
            ...WRAP,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div style={{ ...CARD, padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "14px 22px", borderBottom: `1px solid ${LINE}` }}>
              <div style={{ fontSize: 13, color: MUTED }}>Van: ForConnect</div>
              <div style={{ fontWeight: 600, marginTop: 4 }}>Nieuw bericht: vraag over retour</div>
            </div>
            <div style={{ padding: 22, lineHeight: 1.9, fontSize: 15 }}>
              <div>
                <span style={{ color: MUTED }}>Naam:</span> Jansen
              </div>
              <div>
                <span style={{ color: MUTED }}>Telefoon:</span> automatisch herkend
              </div>
              <div>
                <span style={{ color: MUTED }}>Reden:</span> Retour van schoenen, maat te klein
              </div>
              <div>
                <span style={{ color: MUTED }}>Urgentie:</span> Normaal
              </div>
              <div style={{ marginTop: 10, color: ACCENT, fontSize: 14 }}>Bekijk het volledige bericht</div>
            </div>
          </div>
          <div>
            <h2 style={{ ...H2, textAlign: "left" }}>Een bericht dat u echt helpt</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 16px" }}>
              Bij een afspraak of bericht ontvangt u een korte samenvatting per e-mail, met het volledige bericht
              erbij. Zo ziet u in een oogopslag wat er nodig is.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#d1d5db", lineHeight: 1.9 }}>
              <li>
                <span style={{ color: ACCENT }}>&#10003;</span> Samenvatting en volledig bericht in uw inbox
              </li>
              <li>
                <span style={{ color: ACCENT }}>&#10003;</span> Afspraken direct per e-mail naar uw winkel
              </li>
              <li>
                <span style={{ color: ACCENT }}>&#10003;</span> Urgente vragen duidelijk gemarkeerd
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prijzen */}
      <section id="prijzen" style={SECTION}>
        <div style={WRAP}>
          <h2 style={H2}>Prijzen</h2>
          <p style={SUB}>Transparante pakketten, afgestemd op uw bedrijf. 14 dagen gratis proberen.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16 }}>
            {plans.map((p) => (
              <div
                key={p.name}
                style={{
                  ...CARD,
                  border: p.hl ? `1px solid ${CYAN}` : CARD.border,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {p.hl && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: CYAN,
                      color: DARK,
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: 20,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Meest gekozen
                  </div>
                )}
                <h3 style={{ fontSize: 20, margin: "0 0 4px" }}>{p.name}</h3>
                <p style={{ color: MUTED, fontSize: 14, margin: "0 0 20px" }}>{p.sub}</p>
                <div style={{ fontSize: 34, fontWeight: 800, marginBottom: 20 }}>
                  {p.price ? `\u20AC${p.price}` : "Prijs op maat"}
                  {p.price && <span style={{ fontSize: 15, color: MUTED, fontWeight: 400 }}> per maand</span>}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1 }}>
                  {p.items.map((i) => (
                    <li key={i} style={{ color: "#d1d5db", fontSize: 14, lineHeight: 1.5, marginBottom: 8 }}>
                      <span style={{ color: ACCENT }}>&#10003;</span> {i}
                    </li>
                  ))}
                </ul>
                <a href="#demo" style={{ ...(p.hl ? BTN : BTN2), textAlign: "center", fontSize: 14, padding: "12px 20px" }}>
                  Kies dit pakket
                </a>
              </div>
            ))}
          </div>
          <p style={{ color: MUTED, textAlign: "center", fontSize: 14, marginTop: 32 }}>
            14 dagen gratis proberen - Geen creditcard vereist - Geen verplichtingen - Stop op elk moment
          </p>
        </div>
      </section>

      {/* Demo + Contact */}
      <section id="demo" style={SECTION}>
        <div style={WRAP}>
          <h2 style={H2}>Plan een live demo</h2>
          <p style={SUB}>Ontdek in enkele minuten hoe ForConnect uw oproepen afhandelt.</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
              alignItems: "stretch",
            }}
          >
            <div style={{ display: "flex" }}>
              <ContactForm />
            </div>
            <div id="contact" style={{ ...CARD, display: "flex", flexDirection: "column" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/winkel-hero.jpg"
                alt="Winkel in Nederland"
                style={{ ...IMG, marginBottom: 16, height: 170, objectFit: "cover" }}
              />
              <h3 style={{ fontSize: 20, margin: "0 0 8px" }}>Contact</h3>
              <div style={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 15 }}>
                <div>
                  <span style={{ color: MUTED }}>Bedrijf:</span> ForConnect
                </div>
                <div>
                  <span style={{ color: MUTED }}>KVK-nummer:</span> 42126595
                </div>
                <div>
                  <span style={{ color: MUTED }}>E-mail:</span>{" "}
                  <a href={`mailto:${EMAIL}`} style={{ color: ACCENT }}>
                    {EMAIL}
                  </a>
                </div>
                <div>
                  <span style={{ color: MUTED }}>Telefoon:</span>{" "}
                  <a href={PHONE_HREF} style={{ color: ACCENT }}>
                    {PHONE}
                  </a>
                </div>
                <div>
                  <a href={WHATSAPP} style={{ color: ACCENT }}>
                    WhatsApp: {PHONE}
                  </a>
                </div>
              </div>
              <p style={{ margin: "14px 0 4px", fontWeight: 600 }}>Of probeer onze DEMO-lijn</p>
              <div style={{ lineHeight: 1.8, fontSize: 15 }}>
                <a href={DEMO_NL_HREF} style={{ color: ACCENT, textDecoration: "none" }}>
                  {DEMO_NL}
                </a>{" "}
                <span style={{ color: MUTED }}>Nederland</span>
                <br />
                <a href={DEMO_BE_HREF} style={{ color: ACCENT, textDecoration: "none" }}>
                  {DEMO_BE}
                </a>{" "}
                <span style={{ color: MUTED }}>België</span>
              </div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: "14px 0 0" }}>
                24/7 beschikbaar - Actief in Nederland en België
                <br />
                &#10003; Actief sinds 2023 &#10003; AVG-proof &#10003; Veilige gegevensverwerking &#10003; 14 dagen
                gratis proberen
              </p>
              <div style={{ display: "flex", gap: 16, marginTop: "auto", paddingTop: 12, fontSize: 14 }}>
                <a href="https://www.instagram.com/forconnect.nl" style={{ color: ACCENT }}>
                  Instagram
                </a>
                <a href="https://www.facebook.com/share/1JRDzjsycH/" style={{ color: ACCENT }}>
                  Facebook
                </a>
                <a href="https://www.linkedin.com/company/forconnect-ai/" style={{ color: ACCENT }}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={SECTION}>
        <div style={{ ...WRAP, maxWidth: 760 }}>
          <h2 style={H2}>Veelgestelde vragen</h2>
          <div style={{ marginTop: 24 }}>
            {faqs.map((f) => (
              <details key={f.q} style={{ ...CARD, padding: "16px 20px", marginBottom: 10 }}>
                <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>{f.q}</summary>
                <p style={{ color: MUTED, lineHeight: 1.6, margin: "12px 0 0" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ ...WRAP, paddingBottom: 28 }}>
        <div
          style={{
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 24,
            flexWrap: "wrap",
            color: MUTED,
            fontSize: 14,
            lineHeight: 1.8,
          }}
        >
          <div>
            <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>ForConnect</div>
            <div>Gemaakt voor winkels in Nederland.</div>
            <div>Actief sinds 2023</div>
            <div>KVK: 42126595 &middot; {PHONE}</div>
            <div style={{ marginTop: 14 }}>&copy; 2026 ForConnect. Alle rechten voorbehouden.</div>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center", paddingTop: 6 }}>
            <a href="https://www.instagram.com/forconnect.nl" aria-label="Instagram" style={{ color: MUTED, display: "flex" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1JRDzjsycH/" aria-label="Facebook" style={{ color: MUTED, display: "flex" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/forconnect-ai/" aria-label="LinkedIn" style={{ color: MUTED, display: "flex" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
