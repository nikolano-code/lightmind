// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

// app/page.tsx

export const metadata = {
  title: "LightMind – Energetikai harmonizáció • Tudatos életmód • Nikolas",
  description:
    "Finom energetikai harmonizáció, mindfulness, életmód-támogatás és természetes iránymutatás Nikolasszal. LightMind – egy tér, ahol a test, az elme és a lélek újra összhangba kerül.",
  alternates: {
    canonical: "https://lightmind.hu",
  },
  openGraph: {
    title: "LightMind – Energetikai harmonizáció • Tudatos életmód",
    description:
      "Energetikai harmonizáció, gyógynövényes és életmód tanácsadás, mindfulness támogatás – Nikolas vezetésével, személyesen és online.",
    url: "https://lightmind.hu",
    siteName: "LightMind",
    images: [
      {
        url: "/lightmind-og-main.jpg", // ha szeretnéd, generálok hozzá képet
        width: 1200,
        height: 630,
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LightMind – Energetikai harmonizáció • Tudatos életmód",
    description:
      "Finom energetikai hangolás, lelki támogatás és életmód iránymutatás egy szeretetteljes térben. Személyesen és online.",
    images: ["/lightmind-og-main.jpg"],
  },
  keywords: [
    "energetikai harmonizáció",
    "energia kezelés",
    "spirituális útmutatás",
    "mindfulness",
    "meditáció",
    "életmód tanácsadás",
    "gyógynövény tanácsadás",
    "nikolas lightmind",
    "lelki támogatás",
    "energetika",
    "lightmind",
    "nikolas póda",
    "Póda Nikolas",
  ],
};
export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-[#291C29] text-[#F3EFE9] px-6">
      {/* Háttér fény */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(41,211,196,0.20),transparent_60%)] pointer-events-none" />

      {/* HERO */}
      <section className="relative z-10 text-center max-w-4xl pt-24 pb-16 hero animate">
        {/* LOGÓ */}
        <div className="mx-auto mb-10 relative">
          {/* puha aura */}
          <div className="absolute inset-0 translate-y-6 blur-3xl opacity-50 pointer-events-none bg-[radial-gradient(160px_80px_at_50%_20%,rgba(41,211,196,0.35),transparent_70%)]" />
          {/* kör-keret */}
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

        {/* Címsor */}
        <h1 className="font-semibold text-5xl md:text-6xl leading-tight bg-gradient-to-r from-[#D8B36A] via-[#F3EFE9] to-[#29D3C4] bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
          LIGHTMIND
        </h1>

        <p className="mt-4 text-lg md:text-xl text-[#F3EFE9]/85">
          Spirituális útmutatás, energetikai egyensúly és tudatos étkezés, finomított, mégis földelt
          rendszerekben, hogy visszatalálj a saját belső ritmusodhoz.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl px-6 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#E4C67E] transition shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            Időpont egyeztetés
          </Link>
          <Link
            href="/services"
            className="rounded-xl px-6 py-3 border border-white/15 text-[#F3EFE9] hover:border-[#D8B36A] hover:text-[#D8B36A] transition"
          >
            Tudj meg többet
          </Link>
        </div>
      </section>

      {/* 3 pillér – szolgáltatások előnézet */}
      <section className="relative z-10 w-full max-w-5xl pb-12">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#D8B36A] mb-6">
          Mit kapsz itt?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Energetikai harmonizáció
            </h3>
            <p className="text-sm text-white/75 mb-3">
              Finomhangolás, blokkoldás, az energiarendszer visszarendezése.
            </p>
            <p className="text-xs text-white/50">
              Test–elme–lélek szinten dolgozunk, gyökerében támogatva a változást.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Gyógynövény és életmód
            </h3>
            <p className="text-sm text-white/75 mb-3">
              Tiszta, követhető útmutatás étkezésre, kiegészítőkre és napi szokásokra
              túlzások nélkül, a valós életedre szabva.
            </p>
            <p className="text-xs text-white/50">
              Nem diétát kapsz, hanem iránytűt a tudatosabb mindennapokhoz.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Lelki kísérés</h3>
            <p className="text-sm text-white/75 mb-3">
              Mély beszélgetések, ahol teret adunk a kérdéseidnek, érzéseidnek és a belső
              válaszaidnak.
            </p>
            <p className="text-xs text-white/50">
              Mindfulness, fókusz és jelenlét 
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link
            href="/services"
            className="text-sm text-white/70 hover:text-[#D8B36A] transition underline underline-offset-4"
          >
            Nézd meg részletesen a szolgáltatásokat →
          </Link>
        </div>
      </section>

      {/* Rövid “Rólam” blokk – átkötés a Rólam oldalra */}
      <section className="relative z-10 w-full max-w-4xl pb-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/90 px-6 md:px-10 py-10 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#D8B36A] mb-4 text-center md:text-left">
            Rólam röviden
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
            A LightMindot azért hoztam létre, hogy legyen egy hely, ahol a spiritualitás,
            az energetika és a tudatos életmód nem elszállt, hanem mélyen emberi és
            megélhető. Finom érzékeléssel dolgozom, mégis földelt, gyakorlatias
            szemlélettel, hogy ne csak megértsd, hanem át is tudd ültetni a mindennapokba,
            amit itt kapsz.
          </p>
          <p className="text-sm md:text-base text-white/75 leading-relaxed">
            Ha szeretnél jobban megismerni, a történetemről és a munkám hátteréről a{" "}
            <Link
              href="/about"
              className="text-[#D8B36A] hover:text-[#F3EFE9] underline underline-offset-4"
            >
              Rólam
            </Link>{" "}
            oldalon olvashatsz bővebben.
          </p>
        </div>
      </section>

      {/* Egyszerű “hogyan dolgozunk együtt” lépések */}
      <section className="relative z-10 w-full max-w-4xl pb-16">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#D8B36A] mb-6">
          Hogyan zajlik a közös munka?
        </h2>

        <ol className="space-y-4 text-white/80">
          <li className="flex gap-4">
            <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#D8B36A] text-[#291C29] text-sm font-bold">
              1
            </span>
            <div>
              <p className="font-semibold">Kapcsolatfelvétel</p>
              <p className="text-sm text-white/75">
                Írsz nekem az űrlapon keresztül, röviden leírod, miben kérsz támogatást,
                és egyeztetünk időpontot.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#D8B36A] text-[#291C29] text-sm font-bold">
              2
            </span>
            <div>
              <p className="font-semibold">Első alkalom</p>
              <p className="text-sm text-white/75">
                Nyugodt térben beszélgetünk, felmérem az energetikai és életmódbeli
                helyzeted, és közösen kijelölünk egy irányt.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#D8B36A] text-[#291C29] text-sm font-bold">
              3
            </span>
            <div>
              <p className="font-semibold">Folyamat és kísérés</p>
              <p className="text-sm text-white/75">
                Energetikai munka, gyakorlati útmutatás, étkezési és életmódbeli finomhangolás
                lépésről lépésre, a saját tempódban.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Kapcsolat szekció – működő űrlappal */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-2xl px-6 pb-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#D0B36A] mb-6">
          Kapcsolat
        </h2>
        <p className="text-[#F3EFE9]/80 mb-8">
          Kérdésed van, vagy szeretnél időpontot egyeztetni? Töltsd ki az alábbi űrlapot,
          és hamarosan válaszolok.
        </p>

        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );

}
