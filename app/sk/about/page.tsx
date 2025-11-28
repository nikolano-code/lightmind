// app/sk/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "O mne | LightMind",
  description:
    "Nikolas – spirituálny sprievodca, energetická harmonizácia a vedomý životný štýl. Príbeh LightMind a prístup, na ktorom stojí.",
  alternates: {
    canonical: "https://lightmind.hu/sk/about",
  },
  openGraph: {
    title: "O mne | LightMind",
    description:
      "Jemné energetické vnímanie, uzemnený prístup a praktické kroky – spoznaj človeka, ktorý stojí za LightMind.",
    url: "https://lightmind.hu/sk/about",
    siteName: "LightMind",
    images: [
      {
        url: "/nikolas-portrait-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "sk_SK",
    type: "profile",
  },
};

export default function AboutPageSk() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 hero animate">
      {/* HERO */}
      <header className="text-center mb-14">
        {/* kruhové logo so zlatou aurou */}
        <div className="mx-auto mb-6 relative w-28 h-28 md:w-32 md:h-32">
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
          LightMind • Nikolas
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DBB36A] via-[#F3EFE9] to-[#A290C4]">
            O mne
          </span>
        </h1>

        <p className="mt-5 text-white/80 max-w-3xl mx-auto leading-relaxed">
          Vždy ma zaujímalo, ako človek funguje čo je za slovami a čo sa deje
          na úrovni našej energie. Skutočná harmónia podľa mňa vzniká zvnútra,
          keď sa myseľ, telo a duša znova zosúladia. LightMind z tohto vnútorného
          procesu vyrástol: jemné vnímanie, energetická práca a praktické
          usmernenia v pokojnom, láskavom priestore.
        </p>
      </header>

      {/* Intro blok – text + portrét */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-start mb-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/60 to-[#1B1520]/80 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-3">Kto som?</h2>
          <div className="space-y-4 text-white/80 leading-relaxed text-sm md:text-base">
            <p>
              Ako spirituálny sprievodca a energetický spracovateľ ťa podporujem
              v tom, aby si sa vrátil/a k vlastnej vnútornej sile. Nie je to
              veštenie ani „oprava“ človeka, ale proces, v ktorom jasnejšie
              uvidíš seba samého a svoj smer.
            </p>
            <p>
              Moja práca stojí na stretnutí jemného vnímania a uzemneného,
              praktického prístupu. Pracujeme zároveň s energetickými vrstvami
              aj s úplne bežnými návykmi – tým, čo je na tanieri, tvojím
              rytmom, spánkom, hranicami a tým, koľko toho nesieš.
            </p>
            <p>
              Verím, že každý v sebe nesie schopnosť znova postaviť svoj život
              na pevnejší základ. Moja úloha je sprevádzať ťa, držať zrkadlo
              a pomáhať ti vracať sa k tvojmu vnútornému stredu.
            </p>
          </div>
        </div>

        {/* Portré karta */}
        <div className="max-w-sm mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#1B1420] shadow-[0_0_40px_rgba(216,179,106,0.25)]">
            <Image
              src="/nikolas-portrait.jpeg"
              alt="Nikolas portrét"
              width={720}
              height={960}
              sizes="(max-width: 640px) 100vw, 480px"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="mt-4 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
            <p className="text-white text-lg font-semibold">Nikolas</p>
            <p className="text-white/70 text-sm">zakladateľ LightMind</p>
          </div>
        </div>
      </section>

      {/* 3 piliere – základy LightMind */}
      <section className="mb-12">
        <h2 className="text-center text-2xl font-semibold text-[#D8B36A] mb-5">
          Tri piliere LightMind
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-1">
              Energetická harmonizácia
            </h3>
            <p className="text-sm text-white/70">
              Jemné dolaďovanie, uvoľňovanie blokov a čistenie energetického
              systému, aby sa energia mohla znova prirodzene hýbať.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-1">
              Byliny, životný štýl, strava
            </h3>
            <p className="text-sm text-white/70">
              Striedme, zrozumiteľné odporúčania bez extrémov. Čo jesť,
              aké doplnky môžu podporiť telo a ako si nastaviť systém, ktorý
              ťa neničí, ale drží.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-1">
              Vnútorné rozhovory
            </h3>
            <p className="text-sm text-white/70">
              Mindfulness, ticho a sústredená pozornosť pri otvorených
              rozhovoroch – priestor, kde môžeš pomenovať, čo v tebe žije,
              bez posudzovania.
            </p>
          </div>
        </div>
      </section>

      {/* Príbeh + Ako pracujem */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/40 to-[#1B1520]/70 p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">Môj príbeh</h2>
          <div className="space-y-4 text-white/80 leading-relaxed text-sm md:text-base">
            <p>
              Od detstva ma sprevádza citlivosť na ľudí a energie: vždy som
              sledoval, ako sa kto hýbe, kde sa energia zastaví, kde sa leskne
              duša v tele, v pohľadoch a slovách. Toto videnie som si nevybral
              jednoducho tu bolo. Rozhodnutím bolo naučiť sa s ním pracovať,
              rozvíjať ho a používať ho zodpovedne.
            </p>
            <p>
              Roky som sa venoval smerom, ktoré držia človeka v strede:
              energetická práca, mindfulness, rôzne liečebné systémy, práca
              s vedomím, výživa, životný štýl. Nejde o kúzla, ale o kombináciu
              jemnej pozornosti, prítomnosti a konkrétnych krokov.
            </p>
            <p>
              Postupne sa vyformoval vlastný systém, ktorý sa dotýka koreňa
              problému a zároveň pracuje s energiou, telom aj myslením.
              Podstatou procesu je jemné naladenie: v tichu sa znovu stretneš
              so svojou vnútornou silou a začneš si spomínať, na čo všetko
              vlastne máš.
            </p>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/40 to-[#1B1520]/70 p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">Ako pracujem?</h2>
          <ul className="space-y-3 text-white/85 text-sm md:text-base">
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Tiché, bezpečné prostredie bez súdenia, s plnou pozornosťou na teba.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Jemná energetická práca a cielená harmonizácia nie silou,
              ale v spolupráci s tvojím systémom.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Byliny a doplnky používané rozumne, individuálne a bez honby
              za „zázračnými“ riešeniami.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Vedomé stravovanie a životný štýl v jednoduchých krokoch,
              prispôsobené tvojmu reálnemu životu.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Stretnutia osobne aj online (Zoom) podľa toho, čo je pre teba
              práve dostupné.
            </li>
          </ul>
        </aside>
      </section>

      {/* Pre koho je to určené */}
      <section className="mb-14">
        <h2 className="text-center text-2xl font-semibold text-[#D8B36A] mb-4">
          Pre teba, ak…
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            Chceš vystúpiť z kolotoča vyčerpania a preťaženia a vytvoriť si
            stabilnejšiu, udržateľnú rovnováhu.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            Si otvorený/á spiritualite, ale potrebuješ ostať pri zemi,
            v normálnom, zrozumiteľnom prístupe.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            Nehľadáš „instantné“ riešenie, ale proces, v ktorom preberáš
            zodpovednosť a máš pri sebe sprievodcu.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Rezervácia termínu" className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Pripravený/á vrátiť sa k svojmu vnútornému pokoju?
        </h3>
        <p className="text-white/75 max-w-3xl mx-auto mb-6">
          Ozvi sa, dohodneme si termín a krok za krokom ťa naladíme späť
          na tvoj vlastný rytmus.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/sk/contact"
            className="rounded-xl px-5 py-3 bg-[#DBB36A] text-[#291C29] font-medium hover:bg-[#E8C889] transition"
          >
            Dohodnúť termín
          </Link>
          <Link
            href="/sk/services"
            className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            Pozrieť služby
          </Link>
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
            url: "https://lightmind.hu/sk/about",
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