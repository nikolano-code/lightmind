// app/sk/services/energetikai-harmonizacio/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Energetická harmonizácia | LightMind",
  description:
    "Energetická harmonizácia s Nikolasom – jemné dolaďovanie, vnútorné usporiadanie, upokojenie nervového systému na úrovni tela, mysle a duše.",
  openGraph: {
    title: "Energetická harmonizácia | LightMind",
    description:
      "Jemná, bezdotyková energetická harmonizácia, ktorá ti pomáha vrátiť sa k vlastnej vnútornej sile a rovnováhe.",
    url: "https://lightmind.hu/sk/services/energetikai-harmonizacio",
    type: "article",
    images: [
      {
        url: "/lightmind-og-main.jpeg",
        width: 1200,
        height: 630,
        alt: "LightMind energetická harmonizácia",
      },
    ],
  },
};

export default function EnergetikaiHarmonizacioPageSk() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 hero animate">
      {/* HERO – nadpis + intro */}
      <header className="mb-14 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Energetická harmonizácia
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold text-[#D8B36A] mb-4">
          Energetická harmonizácia
        </h1>

        <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
          Jemný, a pritom veľmi rozhodný proces, ktorý ti pomáha vrátiť sa k
          vlastnej vnútornej sile. Nie je to diagnóza ani lekárske ošetrenie,
          ale vnútorné usporiadanie: jemné dolaďovanie systému telo–myseľ–duša,
          aby si znovu mal/a energiu urobiť kroky sám za seba.
        </p>
      </header>

      {/* 1. sekcia – čo je energetická harmonizácia? */}
      <section className="mb-12 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            V čom spočíva podstata energetickej harmonizácie?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
            <p>
              V bežných dňoch sa na nás nabaluje množstvo neviditeľnej záťaže:
              rozhodnutia, tlak na výkon, potlačené pocity, neustály zhon,
              staré vzorce. Nezostávajú len v myšlienkach, ale zapisujú sa aj
              do energetického systému. Ako keby jemné obvody tela boli plné
              drobného šumu.
            </p>
            <p>
              Cieľom energetickej harmonizácie je tento šum jemne uvoľniť
              a pomôcť tvojmu systému vrátiť sa do usporiadanejšieho,
              pokojnejšieho základného stavu. Nepridávam na teba nič zvonku,
              ale otváram priestor, aby to, čo je v tebe pôvodne celé,
              mohlo znova ožiť a aktivovať sa.
            </p>
            <p>
              Keď sa vnútorný rytmus začne usporadúvať, často sa objaví ľahšie
              dýchanie, menšie napätie, čistejšie myslenie a vznikne
              akýsi vnútorný pokoj – práve z tohto priestoru vieš robiť
              skutočné rozhodnutia.
            </p>
          </div>
        </div>

        {/* bočný obrázok */}
        <div className="max-w-sm mx-auto">
          <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-white/10 bg-[#1B1420] shadow-[0_0_40px_rgba(216,179,106,0.28)]">
            <Image
              src="/services-energetika.jpeg"
              alt="Jemná energetická harmonizácia – svetlo a pokoj"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-white/60 text-center">
            Podstata procesu: dolaďovanie, nie nátlak. Návrat k vlastnej
            vnútornej frekvencii.
          </p>
        </div>
      </section>

      {/* 2. sekcia – priebeh stretnutia */}
      <section className="mb-12 grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ako prebieha jedno stretnutie?
          </h2>
          <ol className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed list-decimal list-inside">
            <li>
              <span className="font-semibold text-white">
                Krátke naladenie, rozhovor:
              </span>{" "}
              preberieme, s čím prichádzaš, čo ťa teraz najviac zaťažuje
              (telo, psychika, životná situácia). Pomocou senzibility a videnia
              sa pozriem, kde sú hlavné bloky. Bez súdenia, s plnou pozornosťou.
            </li>
            <li>
              <span className="font-semibold text-white">
                Dýchanie a upokojenie nervového systému:
              </span>{" "}
              niekoľko jednoduchých, jemných cvičení pomôže nervovému systému
              prepnúť do pokojnejšieho režimu. Tým sa otvára priestor pre
              hlbšiu prácu.
            </li>
            <li>
              <span className="font-semibold text-white">
                Energetické zmapovanie:
              </span>{" "}
              zatiaľ čo ty odpočívaš, vnímam, kde je preťaženie, kde je tok
              oslabený a ktoré oblasti žiadajú najviac pozornosti (hlava,
              srdce, žalúdok, driek, nohy atď.).
            </li>
            <li>
              <span className="font-semibold text-white">
                Hlboká harmonizácia:
              </span>{" "}
              jemným, bezdotykovým energetickým vedením podporujem, aby sa tvoj
              systém usporiadal. Je to, akoby sme rušné rádio ladili dovtedy,
              kým sa vysielanie nevyčistí.
            </li>
            <li>
              <span className="font-semibold text-white">
                Integrácia a uzatvorenie:
              </span>{" "}
              vrátim ťa späť do stabilného, uzemneného stavu. Pozrieme sa, čo si
              vnímal/a, a dostaneš niekoľko bodov, ako si tento stav môžeš
              udržať v najbližších dňoch.
            </li>
          </ol>
        </article>

        {/* praktické info */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm md:text-base text-white/80">
            <h3 className="text-xl font-semibold text-white mb-2">
              Praktické informácie
            </h3>
            <ul className="space-y-2">
              <li>• Trvanie: približne 50–70 minút</li>
              <li>• Forma: osobne alebo online (kamera nie je nutná)</li>
              <li>• Oblečenie: pohodlné, v ktorom sa cítiš dobre</li>
              <li>
                • Nemusíš v to „veriť“, stačí vnútorná otvorenosť
                pre samotný zážitok.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/75">
            <h3 className="text-lg font-semibold text-white mb-1">
              Pred prvým stretnutím
            </h3>
            <p>
              V deň stretnutia je dobré vypiť trochu viac vody a ak sa dá,
              neprichádzať úplne v strese. Čím pokojnejší vstup, tým hlbší môže
              byť proces – ale ak práve prichádzaš z chaosu, je to v poriadku.
              Začíname presne tam, kde si.
            </p>
          </div>
        </aside>
      </section>

      {/* 3. sekcia – zážitky / spätné väzby */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Čo môžeš cítiť počas a po procese?
        </h2>
        <p className="text-white/75 max-w-3xl mb-5 text-sm md:text-base">
          Každý človek je iný, preto neexistuje „povinný“ zážitok. Spätné
          väzby však často prinášajú podobné vzorce:
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm md:text-base text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="mb-2 text-white font-semibold">Spomalenie, ticho</p>
            <p>
              „Ako keby niekto vo vnútri stíšil všetko na minimum. Myšlienky už
              nebežali v rovnakých slučkách a konečne prišiel vnútorný pokoj.
              Cítim sa oveľa lepšie.“
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="mb-2 text-white font-semibold">Ľahkosť, úľava</p>
            <p>
              „Bolo to, akoby zo mňa niekto zložil neviditeľné bremeno. Hrudník,
              ramená a žalúdok sú ľahšie.“
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="mb-2 text-white font-semibold">Jasnejší smer</p>
            <p>
              „Život sa mi neotočil naruby za jeden deň, ale oveľa jasnejšie
              som videla, kam chcem ísť. Strach a vnútorný hluk ma už tak
              neparalyzovali.“
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-white/60 max-w-3xl">
          Dôležité: ide o osobné skúsenosti klientov, neznamenajú, že sa u
          každého prejaví to isté. Nesľubujem uzdravenie ani konkrétny výsledok
          – vytváram priestor pre usporiadanie, a podstatná časť procesu sa
          vždy odohráva v tvojom vlastnom systéme.
        </p>
      </section>

      {/* 4. sekcia – čo podporuje a čo nenahrádza */}
      <section className="mb-12 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Čo môže tento proces podporiť?
          </h2>
          <div className="space-y-3 text-sm md:text-base text-white/80 leading-relaxed">
            <p>
              Keď sa energetický systém upokojí a usporiada, často sa rozbehne
              zmena vo viacerých oblastiach života. Mnohí klienti hovoria, že:
            </p>
            <ul className="space-y-1">
              <li>• cítia sa vnútorne pokojnejší, je menej napätia,</li>
              <li>• lepšie spia a noc je oddychovejšia,</li>
              <li>• nálada je vyrovnanejšia,</li>
              <li>• ľahšie robia rozhodnutia,</li>
              <li>• majú pocit väčšej vnútornej stability,</li>
              <li>• môžu ustupovať niektoré telesné bolesti a napätia,</li>
              <li>• zlepšuje sa trávenie a celkový pocit v tele,</li>
              <li>• rastie energetická hladina a vitalita,</li>
              <li>• posilňuje sa kontakt s telom a intuíciou.</li>
            </ul>
            <p className="mt-3">
              Niektorí opisujú, že keď sa energeticky usporiadajú,{" "}
              <span className="italic">
                akoby sa ich telo ľahšie dokázalo regenerovať.
              </span>{" "}
              Rozumiem tomu tak, že ak organizmus nie je stále v režime hasenia
              požiarov, má viac sily na prirodzené regeneračné a
              samoliečebné procesy.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm md:text-base text-white/80">
          <h3 className="text-lg font-semibold text-white mb-2">
            Čo tento proces NENÁHRADZUJE?
          </h3>
          <ul className="space-y-2">
            <li>• nie je to lekárske vyšetrenie ani diagnostika,</li>
            <li>• nie je to liečba liekmi,</li>
            <li>• nie je to psychoterapia ani psychiatrická starostlivosť,</li>
            <li>
              • nesľubujem uzdravenie a netvrdím, že liečim konkrétne choroby.
            </li>
          </ul>
          <p className="mt-3 text-xs text-white/65">
            Čo ti môžem ponúknuť: vnútorné usporiadanie, jemné dolaďovanie,
            upokojenie nervového systému a energetickú podporu. To všetko môže
            veľmi dobre dopĺňať lekársku starostlivosť alebo iné pomáhajúce
            procesy, ale nikdy ich nenahrádza.
          </p>
        </div>
      </section>

      {/* 5. sekcia – komu sa odporúča */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Kedy je vhodné zvoliť energetickú harmonizáciu?
        </h2>
        <p className="text-white/75 max-w-3xl mb-4 text-sm md:text-base">
          Nemusíš byť „úplne na dne“, aby si prišiel/la. Tento proces je aj pre
          tých, ktorí „len“ chcú byť lepšie, vidieť jasnejšie alebo cítia, že
          „majú na viac“. Alebo jednoducho túžia prečistiť sa od nánosov,
          ktoré už neslúžia.
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-sm md:text-base text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="font-semibold text-white mb-1">
              Keď si vnútorne unavený/á
            </p>
            <p>
              Dlhodobo cítiš vyčerpanie, akoby ti dochádzali rezervy, ale navonok
              ešte stále musíš „fungovať“.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="font-semibold text-white mb-1">
              Keď sa udialo priveľa vecí
            </p>
            <p>
              Rozchod, strata, zmena, nová životná situácia – cítiš, že by bolo
              dobré upratať to, čo v tebe zostalo, skôr než pôjdeš ďalej,
              a chceš o tom hovoriť v bezpečnom, nesúdiacom priestore.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="font-semibold text-white mb-1">
              Keď hľadáš vlastnú silu
            </p>
            <p>
              Už nechceš žiť pre očakávania zvonku, ale z vnútra, z vlastnej
              stability a pravdy o sebe.
            </p>
          </div>
        </div>
      </section>

      {/* 6. sekcia – ako pracujem ja osobne */}
      <section className="mb-12 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Čím je proces LightMind iný?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
            <p>
              Nepoužívam „jednu techniku“, ale systém, ktorý som roky
              skladal z osobnej skúsenosti, štúdia a vnútorného vedenia.
              Spája sa v ňom jemné energetické vnímanie, uzemnené uvažovanie
              a praktický pohľad na život.
            </p>
            <p>
              Dôležité je pre mňa, aby som ťa{" "}
              <span className="font-semibold text-white">
                vnímal ako celého človeka
              </span>
              , nie ako „problém“ alebo „prípad“. Máš svoj príbeh, hĺbku,
              vnútorný svet – a práve pre to všetko držím priestor počas
              celého procesu.
            </p>
            <p>
              Cieľom nie je „opraviť ťa“, ale aby si si spomenul/a na to,
              kto si v skutočnosti, a že v tebe už teraz existuje všetko,
              o čo sa môžeš oprieť.
            </p>
          </div>
        </article>

        {/* portrét */}
        <div className="max-w-xs mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#1B1420] shadow-[0_0_30px_rgba(216,179,106,0.28)]">
            <Image
              src="/nikolas-portrait.jpeg"
              alt="Nikolas – LightMind energetická harmonizácia"
              width={480}
              height={640}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
            <p className="text-white font-semibold">Nikolas</p>
            <p className="text-white/70">
              Spirituálny sprievodca, energetická harmonizácia a podpora
              životného štýlu.
            </p>
          </div>
        </div>
      </section>

      {/* 7. sekcia – FAQ */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Často kladené otázky
        </h2>
        <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <p className="font-semibold text-white mb-1">
              &quot;Čo ak neverím na energie? Môže to fungovať aj tak?&quot;
            </p>
            <p>
              Nie je potrebné niečomu „veriť“. Proces nie je viazaný na
              konkrétny systém viery. Stačí otvorenosť pre skúsenosť, ktorá
              presahuje bežný mentálny rámec. To, čo zažiješ, bude vždy
              odpoveďou tvojho vlastného systému.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <p className="font-semibold text-white mb-1">
              &quot;Môžem sa po tom cítiť horšie?&quot;
            </p>
            <p>
              Cieľom procesu je usporiadanie. Niekedy uvoľnenie a
              povolenie môže priniesť emocionálne reakcie napríklad plač,
              úľavu, silné uvedomenia. Nie sú to „zlé“ príznaky, ale skôr
              známka toho, že tvoj systém pracuje. Počas celého procesu ťa
              sprevádzam v bezpečnom priestore.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <p className="font-semibold text-white mb-1">
              &quot;Ako často by som mal/a prísť?&quot;
            </p>
            <p>
              Je to veľmi individuálne. Niekto cíti veľký posun už po jednom
              stretnutí, inému prospieva séria viacerých stretnutí po sebe
              alebo opakované návraty v kľúčových obdobiach. Tempo vždy
              nastavujeme spoločne, neexistuje povinný „balík“.
            </p>
          </div>
        </div>
      </section>

      {/* CTA – záverečný blok */}
      <section className="mt-6 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/80 to-[#1B1520]/90 px-6 py-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            Pripravený/á jemne, ale rozhodne sa vrátiť k sebe?
          </h3>
          <p className="max-w-2xl text-white/75 text-sm md:text-base">
            Ak cítiš, že prišiel čas položiť zbytočné bremená a získať späť
            svoju vnútornú silu, rád ťa privítam. Napíš pár viet o sebe
            a pozrieme sa, ako vieme najlepšie nadviazať spoluprácu.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/sk/contact"
              className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
            >
              Chcem si dohodnúť termín
            </Link>
            <Link
              href="/sk/services"
              className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
            >
              Späť na služby
            </Link>
          </div>
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
            url: "https://lightmind.hu/sk/services/energetikai-harmonizacio",
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