// app/sk/contact/page.tsx
import ContactForm from "@/components/ContactForm";

// 🔹 SEO meta pre túto stránku
export const metadata = {
  title: "Kontakt | LightMind",
  description:
    "Spoj sa so mnou kvôli dohodnutiu termínu, otázkam alebo jemnej energetickej a životnoštýlovej podpore.",
  alternates: {
    canonical: "https://lightmind.hu/sk/contact",
  },
  openGraph: {
    title: "Kontakt | LightMind",
    description:
      "Napíš správu, ak chceš termín alebo máš otázku k procesom LightMind.",
    url: "https://lightmind.hu/sk/contact",
    siteName: "LightMind",
    locale: "sk_SK",
    type: "website",
  },
};

export default function ContactPageSk() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 hero animate">
      {/* HERO */}
      <header className="text-center mb-12">
        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Kontakt
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-[#D0B36A]">
          Kontakt
        </h1>
        <p className="mt-4 text-[#F3EFE9]/80 max-w-3xl mx-auto leading-relaxed">
          Ak cítiš, že prišiel čas urobiť krok k zmene, pokojne mi napíš.
          Stručne môžeš opísať, v čom teraz hľadáš podporu. Na email ti
          odpíšem a navrhnem prvý vhodný krok alebo stretnutie.
        </p>
      </header>

      {/* Dva stĺpce: popis + formulár */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-start mb-16">
        {/* Textový blok – ako tu spolu pracujeme */}
        <div className="space-y-6 text-sm md:text-base text-[#F3EFE9]/85">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/80 p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              S čím sa na mňa môžeš obrátiť?
            </h2>
            <ul className="space-y-2">
              <li>• ak cítiš vnútorné napätie, vyčerpanie alebo „je toho priveľa“</li>
              <li>• ak potrebuješ jasnejší vnútorný smer alebo podporu pri rozhodnutí</li>
              <li>• ak chceš zmeniť svoje stravovanie a návyky udržateľným spôsobom</li>
              <li>• ak ťa zaujíma energetická harmonizácia alebo mindfulness práca</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ako odpovedám?
            </h3>
            <p className="mb-3">
              V tejto fáze na všetky správy{" "}
              <span className="font-semibold">odpovedám emailom</span>.
              Stručne napíšem, ako ti viem pomôcť, a ak budeš chcieť, dohodneme
              si termín na osobné stretnutie alebo online konzultáciu.
            </p>
            <p className="text-[#F3EFE9]/70 text-sm">
              Prosím, uveď funkčnú emailovú adresu a ak chceš, v pár vetách
              opíš svoju aktuálnu situáciu. Neexistuje „zlá“ otázka.
            </p>
          </div>
        </div>

        {/* Kontaktný formulár v karte */}
        <div className="max-w-xl w-full mx-auto">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#2A1F2C] to-[#1B1520] px-6 py-7 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 text-center">
              Napíš mi správu
            </h2>
            <p className="text-[#F3EFE9]/75 text-sm mb-5 text-center">
              Cez tento formulár mi posielaš správu priamo na email.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MailerLite newsletter blok */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Pridaj sa k newsletteru LightMind
        </h2>

        <p className="text-[#F3EFE9]/80 mb-6">
          Ak chceš občas jemné pripomenutia, cvičenia a usmernenia
          z oblasti energetiky a životného štýlu, prihlás sa na newsletter.
          Všetky materiály prídu emailom, v pokojnom a zrozumiteľnom tóne.
        </p>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#2A1F2C] to-[#1B1520] px-6 py-8">
          {/* MailerLite embed – NEUPRAVUJ atribúty */}
          <div className="ml-embedded" data-form="wWqAni"></div>
        </div>
      </section>

      {/* SEO – JSON-LD štruktúrované dáta */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name:
              "LightMind – Energetikai harmonizáció, mindfulness, gyógynövény tanácsadás",
            url: "https://lightmind.hu/sk/contact",
            description:
              "Energetikai harmonizáció, mindfulness hangolás, gyógynövény- és kiegészítő tanácsadás, étrend és életmód mentorálás személyre szabva.",
            areaServed: [
              "Slovakia",
              "Hungary",
              "Dunaszerdahely",
              "Šamorín",
              "Győr",
            ],
            keywords: [
              "energetikai harmonizáció",
              "energiakezeles",
              "energia kezeles",
              "energia kezelés",
              "energia gyógyászat",
              "energiagyogyaszat",
              "spirituális gyógyítás",
              "spiritualis gyogyitas",
              "relaxáció",
              "stresszoldás",
              "szorongás csökkentés",
              "alvás javítás",
              "immunerősítés természetesen",
              "szellemgyogyaszat",
              "spirituális útmutatás",
              "szellem gyógyászat",
              "átokoldás",
              "energetikai tisztítás",
              "test-lélek egyensúly",
              "holisztikus tanácsadás",
              "spirituális kezelés",
              "meditációs energetika",
              "blokkok oldása",
              "gyógynövény tanácsadás",
              "gyogynoveny tanacsadas",
              "étrend kiegészítők",
              "etrend kiegeszitok",
              "életmód mentorálás",
              "eletmod mentoralas",
              "rontás oldás",
              "rontas oldas",
              "szellem leoldás",
              "szellemleoldas",
              "szellem távolítás",
              "szellem tavolitas",
              "ház tisztítás",
              "haz tisztitas",
              "energia tisztítás",
              "energia tisztitas",
              "mindfulness",
              "mindfulness hangolás",
              "vezetett meditáció",
              "lightmind",
              "Nikolas energiakezelés",
              "energetikai tisztítás",
              "test-lélek egyensúly",
              "holisztikus tanácsadás",
              "spirituális kezelés",
              "változás támogatás",
              "belső erő visszanyerése",
              "fejlődés támogatás",
              "fejlesztő energetika",
              "meditációs energetika",
            ],
            provider: {
              "@type": "Person",
              name: "Nikolas",
            },
          }),
        }}
      />
    </main>
  );
}