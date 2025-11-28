// app/sk/services/gyogynoveny-tanacsadas/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bylinné a doplnkové poradenstvo | LightMind",
  description:
    "Osobné, triezve bylinné a doplnkové poradenstvo s Nikolasom. Trávenie, imunita, nervový systém – bez preháňania, v prehľadnom systéme.",
  openGraph: {
    title: "Bylinné a doplnkové poradenstvo | LightMind",
    description:
      "Prírodná, jemne zladená podpora pre tvoje telo: bylinky, doplnky, životný štýl – osobne nastavené, nie zázračné tabletky, ale systém.",
    url: "https://lightmind.hu/sk/services/gyogynoveny-tanacsadas",
    type: "website",
  },
};

export default function GyogynovenyTanacsadasPageSk() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 hero animate">
      {/* HERO */}
      <header className="mb-14 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Služba
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A] mb-3">
          Bylinné a doplnkové poradenstvo
        </h1>
        <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
          Prírodný, triezvy prístup: pomôžem ti zorientovať sa v tom, aké
          bylinky, vitamíny a iné doplnky môžu podporiť tvoj organizmus a ako
          ich zaradiť do bežného dňa tak, aby nezaťažovali, ale posilňovali.
        </p>
      </header>

      {/* HLAVNÝ BLOK – obrázok + popis */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-start mb-14">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-3">
            O čom je toto poradenstvo?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
            <p>
              Informácií je dnes nekonečno: každý niečo odporúča, niekomu
              zafungovala kapsula, čaj, diéta. Je ľahké sa v tom stratiť,
              predávkovať sa alebo kombinovať prípravky tak, že telo skôr
              zaťažujú, než podporujú.
            </p>
            <p>
              V tomto procese sa spolu pozrieme na to, čo v tvojej
              súčasnej životnej situácii – s reálnym denným rytmom, záťažou
              a citlivosťou –{" "}
              <span className="text-[#F6DFA5]">
                môže byť naozaj užitočné z hľadiska bylín, výťažkov, vitamínov a
                minerálov
              </span>{" "}
              – a čo je skôr zbytočné a oplatí sa pustiť.
            </p>
            <p>
              Nehľadáme „jednu zázračnú kapsulu“, ale budujeme jemne nastavený
              systém, ktorý môže podporiť trávenie, nervový systém, imunitu
              a celkovo dať tvojmu telu viac rezerv pre každodennú záťaž.
            </p>
          </div>
        </article>

        <aside className="max-w-sm mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#1B1420] shadow-[0_0_35px_rgba(216,179,106,0.35)]">
            <Image
              src="/services-herbs.jpeg"
              alt="Prírodné bylinné prípravky a doplnky"
              width={640}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
            <p className="text-white font-semibold">
              Prírodná, prehľadná podpora
            </p>
            <p className="text-white/70">
              Kvalitné prípravky, rozumné dávkovanie, nastavené na tvoje reálne
              potreby.
            </p>
          </div>
        </aside>
      </section>

      {/* TYPY PRÍPRAVKOV */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">
          O akých typoch prípravkov hovoríme?
        </h2>
        <p className="text-white/75 mb-4 max-w-3xl">
          Zameriavame sa na to, aby tvoj organizmus{" "}
          <strong>dostal presne toľko a takú podporu</strong>, akú v tejto
          fáze skutočne potrebuje – ani viac, ani menej.
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-sm md:text-base text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <h3 className="font-semibold text-white mb-2">
              Bylinné výťažky & čaje
            </h3>
            <p>
              Jemná vnútorná podpora trávenia, nervového systému, imunity.
              Často vo formě zmesí, ktoré sa navzájom posilňujú.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <h3 className="font-semibold text-white mb-2">
              Kapsuly & koncentráty
            </h3>
            <p>
              Keď ti kvôli práci či rytmu dňa viac vyhovuje kapsulová forma,
              použijeme ju – s premysleným dávkovaním.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <h3 className="font-semibold text-white mb-2">
              Vitamíny a minerály
            </h3>
            <p>
              Základné piliere ako D-vitamín, horčík, C-vitamín – nie v
              prehnaných dávkach, ale naladené na signály tvojho tela.
            </p>
          </div>
        </div>
      </section>

      {/* PRIEBEH KONZULTÁCIE */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Ako prebieha konzultácia?
        </h2>
        <ol className="space-y-4 text-sm md:text-base text-white/80">
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">1. Nadhľad</span> –{" "}
            preberieme tvoj aktuálny stav: energiu, spánok, trávenie, úroveň
            stresu, hormonálnu záťaž, tendencie imunity. Ak užívaš lieky alebo
            doplnky, spolu ich prejdeme.
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">2. Vyčistenie</span>{" "}
            – pozrieme sa, čo je zbytočné, zdvojené alebo si môže navzájom
            odporovať. Cieľom je, aby sa telo „netopilo“ v kapsulách, ale
            dostávalo čistú, cielene nastavenú podporu.
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              3. Individuálne odporúčanie
            </span>{" "}
            – dostaneš osobný návrh bylín a doplnkov: v akej forme (čaj,
            tinktúra, kapsula, zmes), v akom dávkovaní a v akom období je vhodné
            ich používať.
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              4. Prepojenie so životným štýlom
            </span>{" "}
            – nastavíme, ako to celé prepojiť so stravou, rytmom, príjmom
            tekutín, oddychom, aby to nebol len „prídavok bokom“, ale súčasť
            funkčného systému.
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              5. Písomné zhrnutie
            </span>{" "}
            – dostaneš stručný, prehľadný zápis z konzultácie, aby sa nič
            nestratilo a mohol/la si v kľude nasledovať odporúčania.
          </li>
        </ol>
      </section>

      {/* ZAMERANIE / PRÁVNA POZNÁMKA */}
      <section className="mb-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] px-5 py-5">
          <h3 className="text-xl font-semibold text-white mb-3">
            V akých oblastiach môže pomôcť?
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-white/80">
            <li>• Podpora trávenia, zníženie nafukovania a ťažoby</li>
            <li>• Podpora imunity, pocit častej vyčerpanosti</li>
            <li>• Preťažený nervový systém, stres, zlepšenie kvality spánku</li>
            <li>• Jemné zvýšenie vitality a energetickej hladiny</li>
            <li>• Podpora regenerácie v náročnejších obdobiach</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-red-300/30 bg-[#2A1C24]/80 px-5 py-5">
          <h3 className="text-xl font-semibold text-[#F6DFA5] mb-2">
            Dôležitý odborný a právny dodatok
          </h3>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            Bylinné a doplnkové poradenstvo v rámci LightMind{" "}
            <span className="font-semibold">
              nie je lekárske vyšetrenie, diagnóza ani liečba
            </span>
            . Nahrádza ani nemení odporúčania tvojho lekára, špecialistu
            alebo lekárnika a neupravujeme existujúcu liečbu. Odporúčania sú
            prírodnou, doplnkovou podporou, ktorú používaš na vlastnú
            zodpovednosť – a pri zdravotných ťažkostiach vždy po dohode
            s ošetrujúcim lekárom.
          </p>
        </div>
      </section>

      {/* SKÚSENOSTI */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Čo zažívajú ľudia, ktorí týmto procesom prejdú?
        </h2>
        <p className="text-white/75 mb-4 max-w-3xl">
          Spätné väzby nie sú sľuby, ale{" "}
          <strong>ľudské skúsenosti</strong>. Každý organizmus reaguje inak,
          no predsa sa objavujú podobné motívy:
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-sm text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="italic">
              „Urobili sme poriadok v tom, čo a prečo beriem. Bol to pocit
              úľavy, keď sme odstránili zbytočné doplnky.“
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="italic">
              „Po pár týždňoch bola energia stabilnejšia, poobede som sa
              nerozpadala. Nie zázrak, ale dôsledný systém.“
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="italic">
              „Je dobrý pocit, že niekto berie do úvahy aj zaťažiteľnosť môjho
              tela a nepostaví predo mňa len ďalšiu škatuľku doplnkov.“
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-white/60">
          Skúsenosti sú individuálne a nemožno ich považovať za prísľub
          uzdravenia. Pomáhajú vidieť, že v chaose doplnkov nie si sám/sama
          a že existuje cesta k čistejšiemu, prehľadnejšiemu systému.
        </p>
      </section>

      {/* PRE KOHO JE TENTO PROCES */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Tento proces je pre teba, ak…
        </h2>
        <div className="grid gap-3 md:grid-cols-2 text-sm md:text-base text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            • užívaš príliš veľa rôznych doplnkov a chceš v nich urobiť poriadok.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            • máš pocit, že „na všetko existuje kapsula“, ale ty túžiš skôr po
            čistom, prehľadnom systéme.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            • záleží ti na kvalite: radšej menej, ale premyslene zvolených
            prípravkov.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            • chceš lepšie rozumieť tomu, čo a prečo berieš – a ako môžeš
            skutočne postaviť prírodu na stranu svojho tela.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Chceš mať jasnejší systém vo svojich doplnkoch?
        </h2>
        <p className="text-white/75 max-w-2xl mx-auto mb-6">
          Napíš pár viet o svojom aktuálnom stave a o tom, čo teraz užívaš.
          V odpovedi navrhnem prvý krok a dohodneme sa, ako môžeme najlepšie
          spolupracovať.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/sk/contact"
            className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
          >
            Chcem si dohodnúť termín
          </Link>
          <Link
            href="/sk/kerdoiv"
            className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            Najprv vyplním dotazník
          </Link>
        </div>
      </section>

      {/* NATURHERB / WEBSHOP PÁS */}
      <section className="mb-6">
        <div className="rounded-3xl border border-[#D8B36A]/30 bg-gradient-to-r from-[#2A1F2C]/85 via-[#241B27]/90 to-[#1B1520]/90 px-6 py-6 md:px-8 md:py-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#F6DFA5] mb-1">
                LightMind Naturherb – vlastné prípravky
              </h2>
              <p className="text-sm md:text-base text-white/80 max-w-xl">
                Manuálne, s dôrazom na detail vytvárané bylinné zmesi a kapsuly,
                pri ktorých je najdôležitejšia kvalita, čistota a prítomnosť
                jemnej energie. Čoskoro budú dostupné aj vo forme webshopu
                priamo tu, na stránke LightMind.
              </p>
            </div>

            <div className="w-full md:w-80">
              <div className="rounded-2xl border border-dashed border-white/30 bg-white/[0.03] px-4 py-4 text-center text-sm text-white/70">
                Tu sa neskôr zobrazí{" "}
                <span className="font-semibold text-[#F6DFA5]">
                  produktový pás LightMind Naturherb
                </span>
                : kapsuly, zmesi, čaje. Neskôr sem jednoducho vložíš vlastné
                produktové karty.
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-white/60">
            Prípravky sú výživové doplnky, nie lieky. Nie sú určené na
            diagnostiku, liečbu ani prevenciu ochorení. Pri zdravotných ťažkostiach
            sa vždy obráť na svojho ošetrujúceho lekára.
          </p>
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
            url: "https://lightmind.hu/sk/services/gyogynoveny-tanacsadas",
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