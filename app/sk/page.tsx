// app/sk/page.tsx
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "LightMind – Energetická harmonizácia • Vedomý životný štýl • Nikolas",
  description:
    "Jemná energetická harmonizácia, mindfulness, podpora životného štýlu a prirodzené sprevádzanie s Nikolasom. LightMind – priestor, kde sa telo, myseľ a duša opäť dostávajú do súladu.",
  alternates: {
    canonical: "https://lightmind.hu/sk",
  },
  openGraph: {
    title: "LightMind – Energetická harmonizácia • Vedomý životný štýl",
    description:
      "Energetická harmonizácia, bylinné a životnoštýlové poradenstvo, mindfulness podpora – pod vedením Nikolasa, osobne aj online.",
    url: "https://lightmind.hu/sk",
    siteName: "LightMind",
    images: [
      {
        url: "/lightmind-og-main.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LightMind – Energetická harmonizácia • Vedomý životný štýl",
    description:
      "Jemné energetické ladenie, duševná podpora a smerovanie v oblasti životného štýlu v láskavom priestore. Osobne aj online.",
    images: ["/lightmind-og-main.jpg"],
  },
  keywords: [
    "energetická harmonizácia",
    "energetické ošetrenie",
    "energia liečenie",
    "spirituálne sprevádzanie",
    "mindfulness",
    "meditácia",
    "poradenstvo životného štýlu",
    "bylinné poradenstvo",
    "nikolas lightmind",
    "duševná podpora",
    "lightmind",
    "nikolas póda",
  ],
};

export default function HomeSk() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-[#291C29] text-[#F3EFE9] px-6">
      {/* Pozadie – jemné svetlo */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(41,211,196,0.20),transparent_60%)] pointer-events-none" />

      {/* HERO */}
      <section className="relative z-10 text-center max-w-4xl pt-24 pb-16 hero animate">
        {/* LOGO */}
        <div className="mx-auto mb-10 relative">
          <div className="absolute inset-0 translate-y-6 blur-3xl opacity-50 pointer-events-none bg-[radial-gradient(160px_80px_at_50%_20%,rgba(41,211,196,0.35),transparent_70%)]" />
          <div className="relative mx-auto w-44 h-44 md:w-56 md:h-56 rounded-full ring-1 ring-[#D8B36A]/40 shadow-[0_0_60px_rgba(41,211,196,0.25)] bg-[#1D141D] overflow-hidden">
            <Image
              src="/lightmind-logo.jpeg"
              alt="LightMind logo"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 176px, 224px"
            />
          </div>
        </div>

        {/* Nadpis */}
        <h1 className="font-semibold text-5xl md:text-6xl leading-tight bg-gradient-to-r from-[#D8B36A] via-[#F3EFE9] to-[#29D3C4] bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
          LIGHTMIND
        </h1>

        <p className="mt-4 text-lg md:text-xl text-[#F3EFE9]/85">
          Spirituálne sprevádzanie, energetická rovnováha a vedomé stravovanie
          v jemných, ale uzemnených systémoch – aby si sa mohol/la vrátiť
          k vlastnému vnútornému rytmu.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/sk/contact"
            className="rounded-xl px-6 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#E4C67E] transition shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            Dohodnúť termín
          </Link>
          <Link
            href="/sk/services"
            className="rounded-xl px-6 py-3 border border-white/15 text-[#F3EFE9] hover:border-[#D8B36A] hover:text-[#D8B36A] transition"
          >
            Zisti viac o službách
          </Link>
        </div>
      </section>

      {/* 3 piliere – náhľad služieb */}
      <section className="relative z-10 w-full max-w-5xl pb-12">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#D8B36A] mb-6">
          Čo tu môžeš dostať?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Energetická harmonizácia
            </h3>
            <p className="text-sm text-white/75 mb-3">
              Jemné dolaďovanie, uvoľňovanie blokov a opätovné usporiadanie
              energetického systému.
            </p>
            <p className="text-xs text-white/50">
              Pracujeme na úrovni tela–mysle–duše, aby sa zmena opierala o pevný základ.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Byliny & životný štýl
            </h3>
            <p className="text-sm text-white/75 mb-3">
              Čisté, zrozumiteľné odporúčania k stravovaniu, doplnkom
              a denným návykom – bez extrémov, prispôsobené tvojmu reálnemu životu.
            </p>
            <p className="text-xs text-white/50">
              Nenedostaneš ďalšiu diétu, ale kompas pre vedomejší každodenný život.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Vnútorné sprevádzanie
            </h3>
            <p className="text-sm text-white/75 mb-3">
              Hlbšie rozhovory, v ktorých je priestor pre tvoje otázky,
              pocity a vnútorné odpovede.
            </p>
            <p className="text-xs text-white/50">
              Mindfulness, fokus a prítomnosť – bezpečný priestor pre úprimnosť.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link
            href="/sk/services"
            className="text-sm text-white/70 hover:text-[#D8B36A] transition underline underline-offset-4"
          >
            Pozri si služby podrobnejšie →
          </Link>
        </div>
      </section>

      {/* Krátke „O mne“ prepojenie */}
      <section className="relative z-10 w-full max-w-4xl pb-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/90 px-6 md:px-10 py-10 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#D8B36A] mb-4 text-center md:text-left">
            Krátko o mne
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
            LightMind som vytvoril preto, aby existovalo miesto, kde spiritualita,
            energetika a vedomý životný štýl nie sú „odtrhnuté od reality“, ale
            hlboko ľudské a prežiteľné. Pracujem s jemným vnímaním, ale zároveň
            uzemneným, praktickým prístupom – aby si to, čo tu dostaneš, vedel/a
            skutočne vniesť do každodenného života.
          </p>
          <p className="text-sm md:text-base text-white/75 leading-relaxed">
            Ak ma chceš lepšie spoznať, môj príbeh a pozadie mojej práce nájdeš
            na stránke{" "}
            <Link
              href="/sk/about"
              className="text-[#D8B36A] hover:text-[#F3EFE9] underline underline-offset-4"
            >
              O mne
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Ako spolupracujeme – kroky */}
      <section className="relative z-10 w-full max-w-4xl pb-16">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#D8B36A] mb-6">
          Ako prebieha spoločná práca?
        </h2>

        <ol className="space-y-4 text-white/80">
          <li className="flex gap-4">
            <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#D8B36A] text-[#291C29] text-sm font-bold">
              1
            </span>
            <div>
              <p className="font-semibold">Prvé spojenie</p>
              <p className="text-sm text-white/75">
                Napíšeš mi cez formulár, stručne opíšeš, s čím potrebuješ
                podporu, a dohodneme si termín.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#D8B36A] text-[#291C29] text-sm font-bold">
              2
            </span>
            <div>
              <p className="font-semibold">Prvé stretnutie</p>
              <p className="text-sm text-white/75">
                V pokojnom priestore sa pozrieme na tvoju aktuálnu energetickú
                a životnoštýlovú situáciu a spoločne nastavíme smer.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#D8B36A] text-[#291C29] text-sm font-bold">
              3
            </span>
            <div>
              <p className="font-semibold">Proces & sprevádzanie</p>
              <p className="text-sm text_white/75 text-white/75">
                Energetická práca, praktické usmernenia, stravovacie a
                životnoštýlové doladenia – krok za krokom, v tvojom tempe.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Kontakt – rovnaký formulár, mint HU (egyelőre magyarul, majd külön lefordítjuk a ContactFormot) */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-2xl px-6 pb-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#D0B36A] mb-6">
          Kontakt
        </h2>
        <p className="text-[#F3EFE9]/80 mb-8">
          Ak máš otázku alebo cítiš, že je čas urobiť krok k sebe,
          vyplň prosím formulár nižšie a ozvem sa ti.
        </p>

        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}