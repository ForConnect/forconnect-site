"use client";

export default function KappersPage() {


  return (
    <main
      style={{
        backgroundColor: "#0a0f1a",
        color: "#ffffff",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          borderBottom: "1px solid rgba(0,229,255,0.15)",
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
                backgroundColor: "#0d1b2a",
                border: "1px solid rgba(0,229,255,0.4)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#00e5ff", fontWeight: 800, fontSize: "20px" }}>F</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "17px", lineHeight: 1.2 }}>ForConnect</div>
              <div style={{ color: "#64748b", fontSize: "12px" }}>AI Voice Agent</div>
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
                  style={{ color: "#94a3b8", textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="tel:+310970102566001"
              style={{
                backgroundColor: "#00e5ff",
                color: "#0a0f1a",
                fontWeight: 700,
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Bel ons
            </a>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* HERO */}
        <section style={{ padding: "80px 0 60px", textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(0,229,255,0.1)",
              border: "1px solid rgba(0,229,255,0.3)",
              borderRadius: "20px",
              padding: "6px 16px",
              fontSize: "13px",
              color: "#00e5ff",
              marginBottom: "24px",
              letterSpacing: "0.5px",
            }}
          >
            Voor kappers en beauty salons
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-1px",
              marginBottom: "24px",
              maxWidth: "820px",
              margin: "0 auto 24px",
            }}
          >
            Uw telefoon gaat.{" "}
            <span style={{ color: "#00e5ff" }}>U knipt.</span>{" "}
            Wie neemt op?
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              maxWidth: "580px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            ForConnect neemt automatisch op, boekt de afspraak direct in uw Google Agenda
            en stuurt u een bericht. 24 uur per dag, ook in het weekend.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:+31267913273"
              style={{
                backgroundColor: "#00e5ff",
                color: "#0a0f1a",
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Bel de demolijn
            </a>
            <a
              href="#contact"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "16px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Plan een demo
            </a>
          </div>
        </section>

        {/* QUOTE */}
        <section style={{ padding: "20px 0 60px" }}>
          <div
            style={{
              borderLeft: "3px solid #00e5ff",
              padding: "20px 28px",
              backgroundColor: "rgba(0,229,255,0.05)",
              borderRadius: "0 10px 10px 0",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                fontStyle: "italic",
                color: "#e2e8f0",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              "Die beller hangt op - en u weet niet wie het was."
            </p>
          </div>
        </section>

        {/* HOE WERKT HET */}
        <section id="hoe-werkt-het" style={{ padding: "60px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "48px",
              letterSpacing: "-0.5px",
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
                desc: "De assistent vraagt naar naam en gewenste behandeling. Het telefoonnummer wordt automatisch herkend. De afspraak wordt direct geboekt in uw Google Agenda.",
              },
              {
                step: "3",
                title: "Klaar - of u krijgt een bericht",
                desc: "Boekt de agent zelf? Dan staat de afspraak direct in uw agenda - geen verdere actie nodig. Wilt u liever zelf inplannen? Dan ontvangt u een e-mail of WhatsApp met naam, nummer en gewenste behandeling.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(0,229,255,0.15)",
                    border: "1px solid rgba(0,229,255,0.4)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#00e5ff",
                    marginBottom: "16px",
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.6, margin: 0, fontSize: "15px" }}>
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
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "12px",
              letterSpacing: "-0.5px",
            }}
          >
            Wat doet de assistent?
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              marginBottom: "48px",
              fontSize: "16px",
            }}
          >
            Alles wat u van een goede receptionist verwacht - zonder de kosten.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { icon: "📅", title: "Afspraken boeken", desc: "Direct in Google Agenda - naam, behandeling en tijd worden automatisch ingevuld. U hoeft niets te doen." },
              { icon: "🕐", title: "24/7 beschikbaar", desc: "Ook 's avonds, in het weekend en op feestdagen. Geen enkele beller wordt gemist." },
              { icon: "📱", title: "Melding alleen indien nodig", desc: "Boekt de agent zelf? Dan geen melding - alles staat al in uw agenda. Wilt u zelf inplannen? Dan krijgt u een WhatsApp of e-mail." },
              { icon: "📞", title: "Nummer automatisch herkend", desc: "De agent vraagt niet naar het telefoonnummer. Het systeem ziet de beller automatisch en slaat dit op." },
              { icon: "🇳🇱", title: "Volledig Nederlands", desc: "De assistent spreekt vloeiend Nederlands en past zich aan uw klantenbestand aan." },
              { icon: "✂️", title: "Behandelingen herkennen", desc: "Knippen, kleuren, highlights - de assistent kent uw diensten en boekt correct." },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{f.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
                  {f.title}
                </h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.6, margin: 0, fontSize: "14px" }}>
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
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "12px",
              letterSpacing: "-0.5px",
            }}
          >
            Prijzen
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              marginBottom: "48px",
              fontSize: "16px",
            }}
          >
            Geen setup kosten. Maandelijks opzegbaar.
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
                  backgroundColor: pkg.featured ? "rgba(0,229,255,0.06)" : "rgba(255,255,255,0.03)",
                  border: pkg.featured ? "1px solid rgba(0,229,255,0.5)" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "6px" }}>{pkg.name}</h3>
                <p style={{ color: pkg.featured ? "#00e5ff" : "#94a3b8", fontSize: "14px", marginBottom: "20px" }}>
                  {pkg.sub}
                </p>
                {pkg.price ? (
                  <div style={{ marginBottom: "24px" }}>
                    <span style={{ fontSize: "42px", fontWeight: 800 }}>&euro;{pkg.price}</span>
                    <span style={{ color: "#94a3b8", fontSize: "15px", marginLeft: "6px" }}>{pkg.priceLabel}</span>
                  </div>
                ) : (
                  <div style={{ marginBottom: "24px" }}>
                    <span style={{ fontSize: "28px", fontWeight: 800 }}>Prijs op maat</span>
                  </div>
                )}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#cbd5e1", lineHeight: 1.5 }}>
                      <span style={{ color: "#00e5ff", flexShrink: 0, marginTop: "1px" }}>&bull;</span>
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
                    backgroundColor: pkg.featured ? "#00e5ff" : "transparent",
                    border: pkg.featured ? "none" : "1px solid rgba(255,255,255,0.25)",
                    borderRadius: "50px",
                    color: pkg.featured ? "#0a0f1a" : "#ffffff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "15px",
                  }}
                >
                  Kies dit pakket
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" style={{ padding: "60px 0 80px" }}>
          <div
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                marginBottom: "8px",
                letterSpacing: "-0.4px",
              }}
            >
              Interesse? Neem contact op.
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "15px", marginBottom: "32px", lineHeight: 1.6 }}>
              Wij bellen u terug voor een gratis gesprek van 15 minuten.
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
                { label: "Uw naam", name: "name", placeholder: "Jan de Vries", type: "text", required: false },
                { label: "Naam salon", name: "salon", placeholder: "Kapsalon De Vries", type: "text", required: false },
                { label: "Telefoonnummer", name: "telefoon", placeholder: "+31 6 12 34 56 78", type: "tel", required: false },
                { label: "E-mailadres", name: "email", placeholder: "jan@kapsalon.nl", type: "email", required: true },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#94a3b8",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
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
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "8px",
                      padding: "12px 14px",
                      color: "#ffffff",
                      fontSize: "15px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}
              <button
                type="submit"
                style={{
                  backgroundColor: "#00e5ff",
                  color: "#0a0f1a",
                  fontWeight: 700,
                  padding: "14px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                Verzenden
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#475569", fontSize: "14px", margin: "0 0 8px" }}>
          Gemaakt voor kappers en beauty salons in Nederland
        </p>
        <p style={{ color: "#334155", fontSize: "13px", margin: 0 }}>
          ForConnect &copy; 2026 &middot;{" "}
          <a href="/" style={{ color: "#475569", textDecoration: "none" }}>
            Terug naar hoofdpagina
          </a>
        </p>
      </footer>
    </main>
  );
}
