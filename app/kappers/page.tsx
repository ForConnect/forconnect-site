export default function KappersPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <span className="text-lg font-semibold tracking-tight text-white">ForConnect</span>
        <a
          href="tel:+31634483701"
          className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition"
        >
          Bel ons
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block text-xs uppercase tracking-widest text-neutral-400 mb-4 border border-neutral-700 px-3 py-1 rounded-full">
          Voor kappers & schoonheidssalons
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight mb-6">
          Nooit meer een{" "}
          <span className="text-[#c9f542]">gemiste afspraak.</span>
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
          Onze AI-assistent neemt de telefoon op, beantwoordt vragen en plant
          afspraken direct in uw agenda — zodat u zich kunt focussen op uw
          klanten.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="bg-[#c9f542] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#d8ff55] transition"
          >
            Gratis proberen — 14 dagen
          </a>
          <a
            href="tel:+31267913273"
            className="border border-neutral-600 text-white px-6 py-3 rounded-full hover:border-neutral-400 transition text-sm"
          >
            🎧 Bel de demo-lijn
          </a>
        </div>
      </section>

      {/* QUOTE */}
      <section className="max-w-3xl mx-auto px-6 py-10 text-center">
        <blockquote className="text-xl sm:text-2xl text-neutral-300 italic leading-relaxed border-l-4 border-[#c9f542] pl-6 text-left">
          „Die beller hangt op — en u weet niet wie het was."
        </blockquote>
        <p className="text-neutral-500 mt-4 text-sm pl-6">
          Dat hoeft niet meer zo te zijn.
        </p>
      </section>

      {/* HOE WERKT HET */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">Hoe werkt het?</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Telefoon gaat over",
              desc: "U bent bezig met een klant. De AI neemt automatisch op.",
            },
            {
              step: "02",
              title: "AI handelt het af",
              desc: "Beantwoordt vragen, plant afspraken in uw Google Agenda, noteert naam en nummer.",
            },
            {
              step: "03",
              title: "U ontvangt een bericht",
              desc: "Per e-mail of WhatsApp — overzichtelijk, direct bruikbaar.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
            >
              <span className="text-[#c9f542] text-xs font-bold tracking-widest">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WAT KAN HET */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-10">Wat kan de assistent?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "📅 Afspraken inplannen in Google Agenda",
            "🔁 Bezette tijden herkennen en alternatieven aanbieden",
            "💬 Vragen beantwoorden over prijzen, locatie en openingstijden",
            "📋 Naam, nummer en reden van elk gesprek noteren",
            "📩 Overzicht sturen per e-mail of WhatsApp",
            "🌙 24/7 bereikbaar — ook buiten openingstijden",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-5 py-4 text-sm text-neutral-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PRIJS */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-3">Transparante prijzen</h2>
        <p className="text-neutral-400 mb-10 text-sm">
          Geen verrassingen. Geen verborgen kosten. 14 dagen gratis proberen.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              name: "Starter",
              price: "€39",
              desc: "Tot 150 belminuten",
              features: ["AI beantwoordt oproepen 24/7", "E-mail rapportage", "1 telefoonnummer"],
              highlight: false,
            },
            {
              name: "Basis",
              price: "€59",
              desc: "Meest gekozen",
              features: ["AI beantwoordt oproepen 24/7", "E-mail rapportage", "Tot 300 belminuten"],
              highlight: true,
            },
            {
              name: "Plus",
              price: "€99",
              desc: "Met agenda-integratie",
              features: ["Agenda-koppeling (Google)", "Aangepaste gespreksflow", "Prioriteit support"],
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border text-left ${
                plan.highlight
                  ? "border-[#c9f542] bg-neutral-900"
                  : "border-neutral-800 bg-neutral-900"
              }`}
            >
              {plan.highlight && (
                <span className="text-xs bg-[#c9f542] text-black px-2 py-0.5 rounded-full font-semibold mb-3 inline-block">
                  Meest gekozen
                </span>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="text-3xl font-bold mt-2">
                {plan.price}
                <span className="text-sm font-normal text-neutral-400">/maand</span>
              </p>
              <p className="text-neutral-500 text-xs mt-1 mb-4">{plan.desc}</p>
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-neutral-300 flex gap-2">
                    <span className="text-[#c9f542]">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 text-xs mt-6">
          Ongeveer één behandeling per maand — en u mist nooit meer een klant.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-xl mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-2xl font-bold mb-3">Gratis proberen</h2>
        <p className="text-neutral-400 text-sm mb-8">
          Vul uw gegevens in — wij bellen u terug en stellen alles in.
        </p>
        <form
          action="https://formsubmit.co/info@forconnect.nl"
          method="POST"
          className="flex flex-col gap-4 text-left"
        >
          <input type="hidden" name="_subject" value="Nieuwe aanvraag - Kappers" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="naam"
            placeholder="Uw naam"
            required
            className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c9f542]"
          />
          <input
            type="text"
            name="salon"
            placeholder="Naam van uw salon"
            required
            className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c9f542]"
          />
          <input
            type="tel"
            name="telefoon"
            placeholder="Uw telefoonnummer"
            required
            className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c9f542]"
          />
          <button
            type="submit"
            className="bg-[#c9f542] text-black font-semibold py-3 rounded-full hover:bg-[#d8ff55] transition"
          >
            Stuur mijn aanvraag →
          </button>
        </form>
        <p className="text-neutral-600 text-xs mt-4">
          Of stuur een WhatsApp:{" "}
          <a
            href="https://wa.me/31634483701"
            className="text-neutral-400 hover:text-white transition"
          >
            +31 6 34 48 37 01
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 text-center text-neutral-600 text-xs py-6">
        © 2026 ForConnect — Gemaakt voor kappers & schoonheidssalons in Nederland.
      </footer>
    </main>
  );
}
