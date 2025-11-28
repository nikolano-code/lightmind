// app/sk/services/eletmod-mentoralas/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stravovacie a životné mentorstvo | LightMind",
  description:
    "Osobne nastavený jedálniček, životný rytmus a systém doplnkov s Nikolasom. Udržateľné, pokojné a funkčné prístupy k výžive a životnému štýlu.",
  openGraph: {
    title: "Stravovacie a životné mentorstvo | LightMind",
    description:
      "Bezpečná, osobná podpora životného štýlu: strava, rytmus, spánok, energia, doplnky. V duchu prístupu LightMind.",
    url: "https://lightmind.hu/sk/services/eletmod-mentoralas",
    type: "website",
  },
};

export default function EletmodMentoralasPageSk() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 hero animate">
      {/* HERO */}
      <header className="mb-14 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Služba
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A] mb-3">
          Mentoring stravy & životného štýlu
        </h1>
        <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
          Jednoduché, funkčné stravovacie smerovanie, reálny denný rytmus a
          stabilná energia – nastavené na teba, bez extrémnych diét a
          zbytočných výkyvov. Cieľom je systém, ktorý nevyžaduje silu vôle,
          pretože prirodzene zapadne do tvojho života.
        </p>
      </header>

      {/* OBRÁZOK + ÚVOD */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-start mb-14">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/80 via-[#241B27]/85 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-3">
            O čom je toto životné mentorstvo?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
            <p>
              Väčšina pokusov o „zmenu životného štýlu“ stroskotá preto, že je{" "}
              <span className="text-[#F6DFA5] font-semibold">
                príliš komplikovaná, príliš extrémna alebo nezodpovedá reálnej
                životnej situácii.
              </span>{" "}
              Ja ti naopak budujem systém, ktorý funguje aj vtedy, keď si
              unavený/á, v strese, v behu – alebo jednoducho nemáš motiváciu.
            </p>
            <p>
              Nenedostaneš diétu, ale{" "}
              <span className="text-[#F6DFA5]">
                osobne nastavený strategický systém
              </span>
              : stravovací rytmus, základné princípy, prácu so stresom,
              zlepšenie kvality spánku, odporúčania doplnkov a porozumenie
              tomu, ako tvoj organizmus reaguje.
            </p>
            <p>
              Cieľom nie je rýchly „zázračný výsledok“, ale to, aby si bol/a
              stabilnejší/ia, energickejší/ia, jasnejší/ia – a aby si to vedel/a
              udržať dlhodobo.
            </p>
          </div>
        </article>

        <aside>
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_40px_rgba(216,179,106,0.35)]">
            <Image
              src="/services-lifestyle.jpeg"
              alt="Životný štýl, strava, rovnováha – LightMind"
              width={700}
              height={900}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="mt-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
            <p className="text-white font-semibold">Udržateľný životný štýl</p>
            <p className="text-white/70">
              Nie diéta. Systém, ktorý sa ti prispôsobí.
            </p>
          </div>
        </aside>
      </section>

      {/* AKO PREBIEHA PROGRAM */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Ako prebieha program?
        </h2>

        <ol className="space-y-4 text-sm md:text-base text-white/80">
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              1. Zmapovanie východiskového stavu
            </span>{" "}
            – energetická hladina, spánok, trávenie, hormonálna a nervová
            záťaž, stravovacie návyky, zdroje stresu.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              2. Stravovacia stratégia
            </span>{" "}
            – nejde o počítanie kalórií, ale o rytmus, pomery, kvalitu
            potravín, kombinácie a správne čítanie signálov tela.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              3. Systém doplnkov
            </span>{" "}
            – čisté, premyslené a naozaj funkčné prírodné prípravky:
            vitamíny, minerály a bylinné výťažky v logickom systéme.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              4. Rytmus a životný štýl
            </span>{" "}
            – zvládanie stresu, regenerácia, podpora spánku, minimum pohybu,
            stabilizácia energie počas celého dňa.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              5. Týždenný mini-check
            </span>{" "}
            – krátka spätná väzba: čo fungovalo, čo potrebujeme doladiť a kam
            sa posúvame ďalej.
          </li>
        </ol>
      </section>

      {/* MARKETING BLOK */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-4">
          LightMind stratégia životného štýlu — viac než jedálniček
        </h2>

        <div className="space-y-4 text-white/80 leading-relaxed text-sm md:text-base">
          <p>
            Toto nie je klasické „poradenstvo o životospráve“. Je to{" "}
            <span className="font-semibold text-[#F6DFA5]">
              prémiový, strategicky osobne nastavený program
            </span>
            , v ktorom spájame fungovanie tvojho tela, každodennú záťaž a ciele
            do jedného funkčného systému.
          </p>

          <p>
            Program je postavený tak, aby{" "}
            <span className="font-semibold">nebol závislý od sily vôle</span>.
            Nemáš byť hladný/á, nemáš „lámať“ svoje telo.
          </p>

          <p>Výsledkom je systém, ktorý:</p>

          <ul className="list-disc ml-6 space-y-1">
            <li>stabilizuje tvoju energiu,</li>
            <li>zlepšuje kvalitu spánku,</li>
            <li>znižuje zápal, nafukovanie a záťaž trávenia,</li>
            <li>zvyšuje výkon a sústredenie,</li>
            <li>podporuje prirodzenú rovnováhu telesnej hmotnosti.</li>
          </ul>

          <p className="pt-2">
            <span className="italic">*Marketingové pozicionovanie*:</span>{" "}
            mentorstvo nie je masový produkt.  
            Program LightMind je pre tých, ktorí:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>nechcú sezónnu diétu, ale skutočnú zmenu,</li>
            <li>chcú vedieť, čo a prečo jedia,</li>
            <li>túžia po stabilnom systéme namiesto chaosu,</li>
            <li>volia kvalitu, nie rýchle riešenia.</li>
          </ul>

          <p className="mt-3 text-white/90 font-semibold">
            Preto je program kapacitne obmedzený, prebieha individuálne
            a dostávaš v ňom skutočnú osobnú podporu.
          </p>
        </div>
      </section>

      {/* PRÁVNY / ODBORNÝ DODATOK */}
      <section className="mb-14">
        <div className="rounded-2xl border border-red-300/30 bg-[#2A1C24]/85 px-5 py-5">
          <h2 className="text-xl font-semibold text-[#F6DFA5] mb-3">
            Dôležitý odborný a právny dodatok
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            Mentoring životného štýlu LightMind{" "}
            <span className="font-semibold">
              nie je lekárske vyšetrenie, diagnóza ani liečba
            </span>
            .  
            Neupravujeme tvoju lekársku terapiu a nenahrádzame konzultáciu
            s odborníkom.  
            Odporúčania obsahujú prírodné, životno-štýlové smerovanie, ktoré
            vždy používaš s vlastnou zodpovednosťou a podľa potreby
            po dohode s ošetrujúcim lekárom.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Pripravený/á na pokojnejší, jasnejší život?
        </h2>
        <p className="text-white/75 max-w-2xl mx-auto mb-6">
          Napíš mi, čo je pre teba teraz najväčšia výzva. V odpovedi odo mňa
          dostaneš prvý osobne nastavený krok.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/sk/contact"
            className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
          >
            Chcem sa prihlásiť
          </Link>
          <Link
            href="/sk/kerdoiv"
            className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            Najprv vyplním dotazník
          </Link>
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
            url:
              "https://lightmind.hu/sk/services/eletmod-mentoralas",
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
              "gyógynövény tanácsadás",
              "étrend kiegészítők",
              "életmód mentorálás",
              "spirituális útmutatás",
              "stresszoldás",
              "szorongás csökkentés",
              "alvás javítás",
              "immunerősítés természetesen",
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