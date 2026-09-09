"use client";

export default function BeautyPage() {
  const serif = "Georgia, 'Iowan Old Style', 'Times New Roman', serif";
  const sans = "'Segoe UI', system-ui, sans-serif";

  const bg = "#0c0a16";
  const cardBg = "rgba(255,255,255,0.04)";
  const cardBorder = "rgba(0,229,255,0.22)";
  const cyan = "#00e5ff";
  const purple = "#8b5cf6";
  const text = "#f5f0ea";
  const textMuted = "#b9b3c9";
  const textBody = "#d7d2e0";

  const glowBorder = "0 0 0 1px rgba(139,92,246,0.12), 0 12px 32px rgba(0,229,255,0.08)";

  return (
    <main
      style={{
        backgroundColor: bg,
        color: text,
        fontFamily: sans,
        minHeight: "100vh",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          borderBottom: `1px solid ${cardBorder}`,
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: "rgba(0,229,255,0.06)",
                border: `1px solid ${cardBorder}`,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: cyan, fontWeight: 800, fontSize: "20px", fontFamily: serif }}>F</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "17px", lineHeight: 1.2 }}>ForConnect</div>
              <div style={{ color: textMuted, fontSize: "12px" }}>AI Voice Agent</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
              {[
                { label: "Hoe het werkt", href: "#hoe-werkt-het" },
                { label: "Voordelen", href: "#voordelen" },
                { label: "Prijzen", href: "#prijzen" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ color: textMuted, textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="tel:+31XXXXXXXXX" /* TODO: demo nummer beauty toevoegen */
              style={{
                backgroundColor: cyan,
                color: "#0c0a16",
                fontWeight: 700,
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
                whiteSpace: "nowrap",
                flexShrink: 0,
                boxShadow: "0 0 16px rgba(0,229,255,0.3)",
              }}
            >
              Bel ons
            </a>
          </div>
        </div>
      </nav>

      {/* HERO - full-bleed background, outside the maxWidth wrapper */}
      <section style={{ padding: "80px 0 60px", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #0c0a16 0%, #1a1030 55%, #0c0a16 100%)" }}>
        <div style={{ position: "absolute", top: "-100px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${cyan}33 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-120px", right: "8%", width: "450px", height: "450px", borderRadius: "50%", background: `radial-gradient(circle, ${purple}40 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "15%", right: "2%", width: "300px", height: "300px", borderRadius: "50%", background: `radial-gradient(circle, ${cyan}25 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
            <div>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(0,229,255,0.08)",
                  border: `1px solid rgba(0,229,255,0.35)`,
                  borderRadius: "20px",
                  padding: "6px 16px",
                  fontSize: "13px",
                  color: cyan,
                  marginBottom: "24px",
                  letterSpacing: "0.3px",
                }}
              >
                Voor beauty salons - nagels, wimpers, gezichtsbehandelingen
              </div>
              <h1
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(32px, 5vw, 52px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.5px",
                  marginBottom: "24px",
                  color: text,
                }}
              >
                Uw telefoon gaat. Uw handen zijn vol.{" "}
                <span
                  style={{
                    background: `linear-gradient(90deg, ${cyan}, ${purple})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Wie neemt op?
                </span>
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: textMuted,
                  maxWidth: "480px",
                  marginBottom: "40px",
                  lineHeight: 1.7,
                }}
              >
                Een digitale persoonlijke assistente neemt de telefoon voor u op wanneer u
                dat zelf niet kunt - en voert het gesprek in vloeiend, natuurlijk Nederlands.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a
                  href="tel:+31XXXXXXXXX" /* TODO: demo nummer beauty toevoegen */
                  style={{
                    backgroundColor: cyan,
                    color: "#0c0a16",
                    fontWeight: 700,
                    padding: "14px 28px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "16px",
                    boxShadow: "0 0 24px rgba(0,229,255,0.4)",
                  }}
                >
                  Bel de demolijn
                </a>
                <a
                  href="#contact"
                  style={{
                    backgroundColor: "transparent",
                    color: text,
                    fontWeight: 600,
                    padding: "14px 28px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "16px",
                    border: "1px solid rgba(245,240,234,0.25)",
                  }}
                >
                  Plan een demo
                </a>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,229,255,0.4)",
                  boxShadow: "0 0 0 1px rgba(139,92,246,0.2), 0 30px 80px rgba(0,229,255,0.2), 0 20px 60px rgba(139,92,246,0.22)",
                  backgroundColor: "#161226",
                }}
              >
                <img
                  src="/beauty-hero-woman.png"
                  alt="Glimlachende vrouw belt met haar telefoon in een beauty salon"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  left: "-24px",
                  backgroundColor: "rgba(15,12,28,0.78)",
                  border: "1px solid rgba(0,229,255,0.35)",
                  borderRadius: "14px",
                  padding: "16px 20px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                  maxWidth: "230px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: cyan, boxShadow: `0 0 8px ${cyan}` }} />
                  <span style={{ fontSize: "11px", color: cyan, fontWeight: 700, letterSpacing: "0.5px" }}>
                    NIEUWE AANVRAAG
                  </span>
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "2px" }}>
                  Lisa - Gellak manicure
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginBottom: "8px" }}>
                  45 min
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.85)",
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                    paddingTop: "8px",
                    lineHeight: 1.5,
                  }}
                >
                  Gewenst: do 26 okt · 14:00<br />Doorgestuurd naar salon
                </div>
              </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* QUOTE */}
        <section style={{ padding: "70px 0 50px" }}>
          <div
            style={{
              borderLeft: `3px solid ${cyan}`,
              padding: "20px 28px",
              backgroundColor: "rgba(0,229,255,0.05)",
              borderRadius: "0 8px 8px 0",
              maxWidth: "920px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontFamily: serif,
                fontSize: "22px",
                fontStyle: "italic",
                color: text,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              "U bent midden in een behandeling - en de telefoon blijft rinkelen."
            </p>
          </div>
        </section>

        {/* HOE WERKT HET */}
        <section id="hoe-werkt-het" style={{ padding: "60px 0" }}>
          <h2
            style={{
              fontFamily: serif,
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "48px",
              letterSpacing: "-0.3px",
              color: text,
            }}
          >
            Hoe werkt het?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                step: "1",
                title: "Telefoon gaat",
                desc: "Een klant belt uw salon. ForConnect neemt direct op - professioneel en in het Nederlands.",
              },
              {
                step: "2",
                title: "Agent regelt alles",
                desc: "De assistent vraagt naar naam en gewenste behandeling - bijvoorbeeld manicure, wimpers of een gezichtsbehandeling. Het telefoonnummer wordt automatisch herkend.",
              },
              {
                step: "3",
                title: "Klaar - of u krijgt een bericht",
                desc: "U ontvangt direct een e-mail of WhatsApp met naam, nummer en gewenste behandeling - zodat u zelf kunt inplannen. Automatisch boeken in uw agenda is optioneel beschikbaar.",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "8px",
                  padding: "28px",
                  boxShadow: glowBorder,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: idx % 2 === 0 ? "rgba(0,229,255,0.1)" : "rgba(139,92,246,0.12)",
                    border: `1px solid ${idx % 2 === 0 ? "rgba(0,229,255,0.35)" : "rgba(139,92,246,0.4)"}`,
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: 800,
                    color: idx % 2 === 0 ? cyan : purple,
                    marginBottom: "16px",
                    fontFamily: serif,
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px", color: text }}>
                  {item.title}
                </h3>
                <p style={{ color: textMuted, lineHeight: 1.6, margin: 0, fontSize: "15px" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section id="voordelen" style={{ padding: "60px 0" }}>
          <h2
            style={{
              fontFamily: serif,
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "12px",
              letterSpacing: "-0.3px",
              color: text,
            }}
          >
            Wat doet de assistent?
          </h2>
          <p
            style={{
              textAlign: "center",
              color: textMuted,
              marginBottom: "48px",
              fontSize: "16px",
            }}
          >
            Alles wat u van een goede receptionist verwacht - zonder de kosten.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { icon: "🕐", title: "24/7 beschikbaar", desc: "Ook 's avonds, in het weekend en op feestdagen. Geen enkele beller wordt gemist." },
              { icon: "📞", title: "Nummer automatisch herkend", desc: "De agent vraagt niet naar het telefoonnummer. Het systeem ziet de beller automatisch en slaat dit op." },
              { icon: "🇳🇱", title: "Volledig Nederlands", desc: "De assistent spreekt vloeiend Nederlands." },
              { icon: "💆", title: "Behandelingen herkennen", desc: "Manicure, wimpers, gezichtsbehandeling - de assistent vraagt door naar de gewenste behandeling en stuurt dit direct naar u door." },
              { icon: "🔄", title: "Wijzigen of annuleren", desc: "Wilt u een afspraak annuleren? De assistent vraagt naar de huidige tijd. Wilt u verzetten? Dan vraagt hij naar de huidige tijd en de gewenste nieuwe tijd, en past de agenda direct aan." },
              { icon: "ℹ️", title: "Alle salon-info paraat", desc: "Prijzen, behandelingen, duur, openingstijden en wie welke behandeling doet - de assistent beantwoordt dit direct aan de telefoon." },
            ].map((f, idx) => (
              <div
                key={f.title}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "8px",
                  padding: "24px",
                  boxShadow: glowBorder,
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: idx % 2 === 0 ? "rgba(0,229,255,0.1)" : "rgba(139,92,246,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginBottom: "14px",
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", color: text }}>
                  {f.title}
                </h3>
                <p style={{ color: textMuted, lineHeight: 1.6, margin: 0, fontSize: "14px" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="prijzen" style={{ padding: "60px 0" }}>
          <h2
            style={{
              fontFamily: serif,
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "12px",
              letterSpacing: "-0.3px",
              color: text,
            }}
          >
            Prijzen
          </h2>
          <p
            style={{
              textAlign: "center",
              color: textMuted,
              marginBottom: "48px",
              fontSize: "16px",
            }}
          >
            Maandelijks opzegbaar.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              alignItems: "stretch",
            }}
          >
            {[
              {
                name: "Starter",
                sub: "Voor startende salons.",
                price: "39",
                priceLabel: "per maand",
                featured: false,
                features: [
                  "AI beantwoordt oproepen 24/7",
                  "Volledige gespreksrapportage per e-mail",
                  "E-mail notificaties",
                  "1 telefoonnummer",
                  "Tot 150 belminuten",
                ],
              },
              {
                name: "Basis",
                sub: "Meest gekozen",
                price: "59",
                priceLabel: "per maand",
                featured: true,
                features: [
                  "AI beantwoordt oproepen 24/7",
                  "Volledige gespreksrapportage per e-mail",
                  "E-mail notificaties",
                  "1 telefoonnummer",
                  "Tot 300 belminuten",
                ],
              },
              {
                name: "Plus",
                sub: "Voor groeiende salons.",
                price: "99",
                priceLabel: "per maand",
                featured: false,
                features: [
                  "Alles van Basis, plus:",
                  "Aangepaste gespreksflow",
                  "2 telefoonnummers",
                  "Prioriteit ondersteuning",
                  "Tot 600 belminuten",
                ],
              },
              {
                name: "Pro Plus",
                sub: "Voor salons met speciale wensen.",
                price: null,
                priceLabel: null,
                featured: false,
                features: [
                  "Alles van Plus, plus:",
                  "Agenda integratie (Google/Outlook)",
                  "Meerdere telefoonnummers/locaties",
                  "Geavanceerde call flows",
                  "Onbeperkte belminuten",
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                style={{
                  backgroundColor: pkg.featured ? "rgba(0,229,255,0.06)" : cardBg,
                  border: pkg.featured ? `1.5px solid ${cyan}` : `1px solid ${cardBorder}`,
                  borderRadius: "10px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxSizing: "border-box",
                  boxShadow: pkg.featured ? "0 0 32px rgba(0,229,255,0.15)" : glowBorder,
                }}
              >
                <h3 style={{ fontFamily: serif, fontSize: "20px", fontWeight: 700, marginBottom: "6px", color: text }}>{pkg.name}</h3>
                <p style={{ color: pkg.featured ? cyan : textMuted, fontSize: "14px", marginBottom: "20px" }}>
                  {pkg.sub}
                </p>
                {pkg.price ? (
                  <div style={{ marginBottom: "24px" }}>
                    <span style={{ fontFamily: serif, fontSize: "42px", fontWeight: 700, color: text }}>&euro;{pkg.price}</span>
                    <span style={{ color: textMuted, fontSize: "15px", marginLeft: "6px" }}>{pkg.priceLabel}</span>
                  </div>
                ) : (
                  <div style={{ marginBottom: "24px" }}>
                    <span style={{ fontFamily: serif, fontSize: "28px", fontWeight: 700, color: text }}>Prijs op maat</span>
                  </div>
                )}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: textBody, lineHeight: 1.5 }}>
                      <span style={{ color: cyan, flexShrink: 0, marginTop: "1px" }}>&bull;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "13px",
                    backgroundColor: pkg.featured ? cyan : "transparent",
                    border: pkg.featured ? "none" : `1px solid ${cardBorder}`,
                    borderRadius: "50px",
                    color: pkg.featured ? "#0c0a16" : text,
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "15px",
                    boxShadow: pkg.featured ? "0 0 20px rgba(0,229,255,0.35)" : "none",
                  }}
                >
                  Kies dit pakket
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "60px 0 80px", position: "relative" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              alignItems: "stretch",
            }}
          >
            {/* Form */}
            <div
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "12px",
                padding: "40px",
                boxShadow: glowBorder,
              }}
            >
              <h2
                style={{
                  fontFamily: serif,
                  fontSize: "28px",
                  fontWeight: 700,
                  marginBottom: "8px",
                  letterSpacing: "-0.3px",
                  color: text,
                }}
              >
                Plan een live demo
              </h2>
              <p style={{ color: textMuted, fontSize: "15px", marginBottom: "32px", lineHeight: 1.6 }}>
                Ontdek in enkele minuten hoe ForConnect uw salon bereikbaar houdt.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const email = formData.get("email") as string;
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    alert("Voer een geldig e-mailadres in.");
                    return;
                  }
                  const res = await fetch("/api/contact", { method: "POST", body: formData });
                  if (res.ok) {
                    alert("Uw bericht is succesvol verzonden. Bedankt!");
                    form.reset();
                  } else {
                    alert("Er is een fout opgetreden. Probeer het opnieuw.");
                  }
                }}
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                {[
                  { label: "Naam", name: "name", placeholder: "Sanne Jansen", type: "text", required: false },
                  { label: "Salonnaam", name: "salon", placeholder: "Glow Beauty Studio", type: "text", required: false },
                  { label: "E-mailadres (verplicht)", name: "email", placeholder: "info@beautystudio.nl", type: "email", required: true },
                  { label: "Telefoonnummer", name: "telefoon", placeholder: "+31 6 12 34 56 78", type: "tel", required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: textMuted,
                        marginBottom: "6px",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.03)",
                        border: `1px solid ${cardBorder}`,
                        borderRadius: "6px",
                        padding: "12px 14px",
                        color: text,
                        fontSize: "15px",
                        boxSizing: "border-box",
                        outline: "none",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: textMuted,
                      marginBottom: "6px",
                      letterSpacing: "0.3px",
                    }}
                  >
                    Bericht
                  </label>
                  <textarea
                    name="bericht"
                    placeholder="Bijvoorbeeld: minder gemiste afspraken..."
                    rows={3}
                    style={{
                      width: "100%",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: `1px solid ${cardBorder}`,
                      borderRadius: "6px",
                      padding: "12px 14px",
                      color: text,
                      fontSize: "15px",
                      boxSizing: "border-box",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: sans,
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    marginTop: "8px",
                    backgroundColor: cyan,
                    color: "#0c0a16",
                    fontWeight: 700,
                    padding: "14px",
                    borderRadius: "6px",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    boxShadow: "0 0 24px rgba(0,229,255,0.35)",
                  }}
                >
                  Verzenden
                </button>
              </form>
            </div>

            {/* Contact info panel */}
            <div
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "12px",
                padding: "40px",
                boxShadow: glowBorder,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "8px",
                  fontFamily: serif,
                  fontSize: "120px",
                  fontWeight: 800,
                  color: "rgba(0,229,255,0.05)",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                F
              </span>

              <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "24px", color: text, position: "relative" }}>
                Contact
              </h3>

              <div style={{ marginBottom: "18px" }}>
                <div style={{ fontSize: "12px", color: textMuted, marginBottom: "2px" }}>Bedrijf</div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: text }}>ForConnect</div>
                <div style={{ fontSize: "13px", color: textMuted }}>Nederlandse onderneming</div>
              </div>

              <div style={{ marginBottom: "18px" }}>
                <div style={{ fontSize: "12px", color: textMuted, marginBottom: "2px" }}>KVK-nummer</div>
                <div style={{ fontSize: "15px", color: text }}>42126595</div>
              </div>

              <div style={{ marginBottom: "18px" }}>
                <div style={{ fontSize: "12px", color: textMuted, marginBottom: "2px" }}>E-mail</div>
                <a href="mailto:info@forconnect.nl" style={{ fontSize: "15px", color: cyan, textDecoration: "none" }}>info@forconnect.nl</a>
              </div>

              <div style={{ marginBottom: "18px" }}>
                <div style={{ fontSize: "12px", color: textMuted, marginBottom: "6px" }}>Contact nummer</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", color: text, marginBottom: "6px" }}>
                  <span>📞</span> +31 6 34 48 37 01
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "#25d366" }}>
                  <span>💬</span> WhatsApp: +31 6 34 48 37 01
                </div>
              </div>

              <div style={{ borderTop: `1px solid ${cardBorder}`, paddingTop: "18px", marginBottom: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 700, color: text, marginBottom: "10px" }}>
                  <span>📍</span> Actief in Nederland en België
                </div>
                {[
                  "Actief sinds 2023",
                  "AVG-proof",
                  "Veilige gegevensverwerking",
                  "14 dagen gratis proberen",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: textBody, marginBottom: "6px" }}>
                    <span style={{ color: cyan }}>✓</span> {item}
                  </div>
                ))}
              </div>

              <div style={{ borderTop: `1px solid ${cardBorder}`, paddingTop: "18px" }}>
                <div style={{ fontSize: "13px", color: textMuted, marginBottom: "10px" }}>Volg ons</div>
                <div style={{ display: "flex", gap: "10px" }}>
                  {["IG", "FB", "in"].map((label) => (
                    <div
                      key={label}
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        border: `1px solid ${cardBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: cyan,
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "0 0 80px" }}>
          <h2
            style={{
              fontFamily: serif,
              fontSize: "28px",
              fontWeight: 700,
              marginBottom: "24px",
              letterSpacing: "-0.3px",
              color: text,
            }}
          >
            Veelgestelde vragen
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "Werkt dit met mijn huidige nummer?", a: "Ja, doorschakeling is mogelijk." },
              { q: "Moet ik iets installeren?", a: "Nee, alles werkt via de cloud." },
              { q: "Klinkt de AI natuurlijk?", a: "Ja, professioneel Nederlands." },
              { q: "Kan ik het eerst testen?", a: "Ja, via een live demo." },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "10px",
                  padding: "20px 24px",
                }}
              >
                <div style={{ fontSize: "16px", fontWeight: 700, color: text, marginBottom: "4px" }}>
                  {item.q}
                </div>
                <div style={{ fontSize: "14px", color: textMuted }}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: `1px solid ${cardBorder}`,
          padding: "32px 24px",
          textAlign: "center",
          color: textMuted,
          fontSize: "14px",
        }}
      >
        Gemaakt voor beauty salons in Nederland &copy; 2026
      </footer>
    </main>
  );
}