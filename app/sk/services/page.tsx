// app/sk/services/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ServicesPageSk() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 hero animate">
      {/* HERO – logo + úvod */}
      <header className="mb-14 text-center">
        <div className="mx-auto mb-6 relative w-28 h-28 md:w-32 md:h-32">
          {/* aura */}
          <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_50%_30%,rgba(216,179,106,0.35),transparent_70%)] pointer-events-none" />
          <div className="relative w-full h-full rounded-full bg-[#1B1420] ring-1 ring-[#D8B36A]/50 shadow-[0_0_40px_rgba(216,179,106,0.45)] overflow-hidden">
            <Image
              src="/lightmind-logo.jpeg"
              alt="LightMind embléma"
              fill
              className="object-cover object-center"
              sizes="120px"
              priority
            />
          </div>
        </div>

        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Služby
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A]">
          Služby
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed">
          V priestore LightMind jemne, ale rozhodne dolaďujeme jednotu
          tela, mysle a duše. Vyber si proces, ktorý ťa práve najviac volá –
          alebo mi napíš pár viet o sebe a spolu nájdeme prvý vhodný krok.
        </p>
      </header>

      {/* Hlavné karty služieb – S OBRÁZKAMI + PODROBNÝ POPIS */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Energetická harmonizácia */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(500px_500px_at_0%_0%,rgba(216,179,106,0.25),transparent_70%)]" />
          <div className="relative">
            {/* Obrázok */}
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-energetika.jpeg"
                alt="Energetická harmonizácia – svetlo, energia, pokoj"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Energetická harmonizácia
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Jemné, bezdotykové ladenie, ktoré pomáha uvoľniť energetické
              zablokovanie, čistí priestor a podporuje prirodzené
              samoliečebné procesy. Počas procesu ťa sprevádzam v tichom,
              bezpečnom priestore, aby znovu vznikol priestor pre vnútorné ticho.
            </p>
            <ul className="mt-4 text-white/70 space-y-1 text-sm">
              <li>• Odporúčané pri napätí, vnútornej nepokoji, vyčerpaní</li>
              <li>• Trvanie: 60–75 minút</li>
              <li>• Miesto: osobne alebo s online vedením</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/sk/services/energetikai-harmonizacio"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Detaily
              </Link>
              <Link
                href="/sk/contact"
                className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition"
              >
                Chcem termín
              </Link>
            </div>
          </div>
        </article>

        {/* Byliny & doplnky */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(500px_500px_at_100%_0%,rgba(41,211,196,0.23),transparent_70%)]" />
          <div className="relative">
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-herbs.jpeg"
                alt="Bylinky a prírodné doplnky"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Bylinné a doplnkové poradenstvo
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Prirodzený, triezvy prístup: odporúčania na bylinky a
              výživové doplnky prispôsobené tebe, bez extrémov a bez
              zbytočných kombinácií. Namiesto „zázračných“ produktov budujeme
              prehľadný, jemne naladený systém podpory.
            </p>
            <ul className="mt-4 text-white/70 space-y-1 text-sm">
              <li>• Fókus: trávenie, podpora imunity, nervový systém</li>
              <li>• Trvanie: 45–60 minút (aj online)</li>
              <li>• Následne: krátke písomné zhrnutie odporúčaní</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/sk/services/gyogynoveny-tanacsadas"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Detaily
              </Link>
              <Link
                href="/sk/contact"
                className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition"
              >
                Chcem konzultáciu
              </Link>
            </div>
          </div>
        </article>

        {/* Mindfulness naladenie */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(480px_480px_at_0%_100%,rgba(173,127,255,0.35),transparent_70%)]" />
          <div className="relative">
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-mindfulness.jpeg"
                alt="Mindfulness, meditácia, dychové cvičenia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Mindfulness naladenie
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Vedené cvičenia prítomnosti, dych a jemné sústredenie, aby sa
              vnútorný hluk stíšil a ty si jasnejšie počul/a svoj vnútorný
              smer. Dostaneš konkrétne cviky, ktoré vieš používať aj doma,
              v bežných dňoch.
            </p>
            <ul className="mt-4 text-white/70 space-y-1 text-sm">
              <li>• Odporúčané pri strese, preťažení, dôležitých rozhodnutiach</li>
              <li>• Trvanie: 45 minút (online / osobne)</li>
              <li>• Bonus: 1 krátka vedená nahrávka</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/sk/services/mindfulness-hangolas"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Detaily
              </Link>
              <Link
                href="/sk/contact"
                className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition"
              >
                Chcem termín
              </Link>
            </div>
          </div>
        </article>

        {/* Jedálniček & životný štýl */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(480px_480px_at_100%_100%,rgba(248,214,120,0.25),transparent_70%)]" />
          <div className="relative">
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-lifestyle.jpeg"
                alt="Životný štýl, strava, jemná rovnováha"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Jedálniček & životný štýl – mentorovanie
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Stabilný, udržateľný systém: jednoduché, funkčné stravovacie
              smerovanie, nastavenie spánku a denného rytmu, minimum pohybu.
              Bez extrémnych diét – len také kroky, ktoré zapadajú do tvojho
              reálneho života a záťaže.
            </p>
            <ul className="mt-4 text-white/70 space-y-1 text-sm">
              <li>• Štart balík: 1×90 minút + týždenné následné vedenie</li>
              <li>• Pokročilý: 4-týždňové sprevádzanie s priebežnými check-inmi</li>
              <li>• Osobný písomný plán a poznámky</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/sk/services/eletmod-mentoralas"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Detaily
              </Link>
              <Link
                href="/sk/contact"
                className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition"
              >
                Chcem sa prihlásiť
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Formáty stretnutí + mini portrét */}
      <section className="mt-14 grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ako prebieha stretnutie?
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <h3 className="font-semibold text-white mb-1">Osobné stretnutia</h3>
              <p className="text-white/75">
                Tichý, pokojný priestor – tempo celého procesu prispôsobíme
                tvojim hraniciam a potrebám.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <h3 className="font-semibold text-white mb-1">Online konzultácia</h3>
              <p className="text-white/75">
                Cez Zoom, z pohodlia domova. Pred stretnutím dostaneš krátky
                technický návod, ako sa pripojiť.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <h3 className="font-semibold text-white mb-1">
                Krátka predbežná konzultácia
              </h3>
              <p className="text-white/75">
                Ak si nie si istý/á, ktorý proces je pre teba vhodný ako prvý,
                napíš pár viet o sebe a ozvem sa späť.
              </p>
            </div>
          </div>
        </div>

        {/* mini portrét blok */}
        <div className="max-w-xs mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#1B1420] shadow-[0_0_30px_rgba(216,179,106,0.28)]">
            <Image
              src="/nikolas-portrait.jpeg"
              alt="Nikolas LightMind portrét"
              width={480}
              height={640}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
            <p className="text-white font-semibold">Nikolas</p>
            <p className="text-white/70">
              Spirituálny sprievodca, energetická harmonizácia a mentorovanie
              životného štýlu.
            </p>
          </div>
        </div>
      </section>

      {/* Časté situácie */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Kedy má zmysel ozvať sa?
        </h2>
        <p className="text-white/75 mb-4 max-w-3xl">
          Niekoľko príkladov, kedy ti spoločná práca môže veľa priniesť:
        </p>
        <ul className="grid md:grid-cols-2 gap-3 text-white/80 text-sm">
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            • Už dlhšie cítiš, že „nemáš svoj rytmus“ a vyčerpáva ťa trvalé
              vnútorné napätie.
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            • Spánok, energia alebo trávenie ti naznačujú, že je čas niečo
              zmeniť.
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            • Stojíš pred dôležitým rozhodnutím a potrebuješ jasnejší vnútorný
              smer.
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            • V oblasti stravy, doplnkov a bylín je priveľa informácií a
              potrebuješ čistý, prehľadný systém šitý na teba.
          </li>
        </ul>
      </section>

      {/* Záverečná CTA */}
      <section className="mt-14 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/80 to-[#1B1520]/90 px-6 py-8">
          <h3 className="text-2xl font-semibold text-white">
            Začnime jemne, ale rozhodne.
          </h3>
          <p className="max-w-2xl text-white/75">
            Napíš mi pár viet o tvojej aktuálnej situácii a navrhnem ti prvý
            krok, ktorý bude šitý na teba. Celý proces budeme ladiť podľa
            tvojho vlastného tempa – s dôverou, pokojom a hĺbkou.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/sk/contact"
              className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
            >
              Dohodnúť termín
            </Link>
            <Link
              href="/sk/about"
              className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
            >
              Spoznaj ma lepšie
            </Link>
          </div>
        </div>
      </section>

      {/* SEO – JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name:
              "LightMind – Energetikai harmonizáció, mindfulness, gyógynövény tanácsadás",
            url: "https://lightmind.hu/sk/services",
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