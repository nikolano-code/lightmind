import ContactForm from "../../components/ContactForm";

// 🔹 SEO meta erre az oldalra
export const metadata = {
  title: "Kapcsolat | LightMind",
  description:
    "Vedd fel velem a kapcsolatot időpont-egyeztetéshez, kérdésekhez vagy finom energetikai, életmód-támogatáshoz.",
  alternates: {
    canonical: "https://lightmind.hu/contact",
  },
  openGraph: {
    title: "Kapcsolat | LightMind",
    description:
      "Írj üzenetet, ha időpontot szeretnél vagy kérdésed van a LightMind folyamataival kapcsolatban.",
    url: "https://lightmind.hu/contact",
    siteName: "LightMind",
    locale: "hu_HU",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 hero animate">
      {/* HERO */}
      <header className="text-center mb-12">
        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Kapcsolat
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-[#D0B36A]">
          Kapcsolat
        </h1>
        <p className="mt-4 text-[#F3EFE9]/80 max-w-3xl mx-auto leading-relaxed">
          Ha úgy érzed, eljött az ideje, hogy változtass – írj nyugodtan.
          Röviden leírhatod, mi az, amiben most támogatást keresel, én pedig
          emailben válaszolok, és javaslok egy első lépést.
        </p>
      </header>

      {/* Két hasáb: leírás + űrlap */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-start mb-16">
        {/* Szöveges blokk – hogyan dolgozunk itt együtt */}
        <div className="space-y-6 text-sm md:text-base text-[#F3EFE9]/85">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/80 p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              Miről írhatsz nekem?
            </h2>
            <ul className="space-y-2">
              <li>• ha belső feszültséget, kifáradást, „túl sokat” érzel</li>
              <li>• ha szeretnél tisztább belső irányt, döntéshez támogatást</li>
              <li>• ha az étrendedet, szokásaidat hangolnád újra</li>
              <li>• ha érdekel az energetikai harmonizáció vagy a mindfulness munka</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Hogyan válaszolok?
            </h3>
            <p className="mb-3">
              Jelenleg minden megkeresésre <span className="font-semibold">emailben adok tájékoztatást</span>.
              Röviden jelzem, hogyan tudok segíteni, és ha szeretnéd, egyeztetünk
              egy időpontot egyéni alkalomra vagy online konzultációra.
            </p>
            <p className="text-[#F3EFE9]/70 text-sm">
              Kérlek, adj meg egy működő email címet, és ha szeretnéd, egy-két
              mondatban írd le az aktuális helyzeted. Nincs rossz kérdés.
            </p>
          </div>
        </div>

        {/* Kontakt űrlap kártyában */}
        <div className="max-w-xl w-full mx-auto">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#2A1F2C] to-[#1B1520] px-6 py-7 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 text-center">
              Írj nekem üzenetet
            </h2>
            <p className="text-[#F3EFE9]/75 text-sm mb-5 text-center">
              Az alábbi űrlapon keresztül közvetlenül emailt küldesz nekem.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MailerLite hírlevél blokk */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Csatlakozz a LightMind hírlevélhez
        </h2>

        <p className="text-[#F3EFE9]/80 mb-6">
          Ha szeretnél időnként finom emlékeztetőket, gyakorlatokat és
          energetikai–életmódbeli útmutatást kapni, iratkozz fel a
          hírlevélre. Minden anyag emailben érkezik, nyugodt, tiszta hangnemben.
        </p>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#2A1F2C] to-[#1B1520] px-6 py-8">
          {/* MailerLite embed – NE módosítsd az attribútumait */}
          <div className="ml-embedded" data-form="wWqAni"></div>
        </div>
      </section>
    </main>
  );
}