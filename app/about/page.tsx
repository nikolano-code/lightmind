// app/about/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rólam – LightMind | Nikolas",
  description:
    "Nikolas – energetikai harmonizáció, gyógynövény- és életmód-tanácsadás, mindful beszélgetések. Bizalom, béke, mélység és erő.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* HERO */}
      <section className="grid items-center gap-10 md:grid-cols-[1.05fr,0.95fr]">
        {/* Szövegblokk */}
        <div className="space-y-6">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs tracking-widest text-white/70">
            RÓLAM
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="text-[#D8B36A]">LightMind</span> – ahol a lélek
            lélegezni kezd
          </h1>

          <p className="text-white/80 leading-relaxed">
            Mindig is érdekelt, hogyan működik az ember – mi rejlik a szavak
            mögött, és mi történik az energiáink szintjén. Az évek során
            megtanultam, hogy a valódi harmónia belül születik, amikor az elme,
            a test és a lélek újra összhangba kerül. A{" "}
            <strong>LightMind</strong> ebből az útból nőtt ki: finomhangolt
            figyelem, valódi jelenlét és gyakorlati útmutatás egy elegáns,
            nyugodt térben.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Energetikai harmonizáció", "Finomhangolás, blokkoldás"],
              ["Gyógynövény & életmód", "Tiszta, követhető irányok"],
              ["Lelki beszélgetések", "Mindfulness, csend, fókusz"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 backdrop-blur-sm"
              >
                <h3 className="text-white font-medium">{title}</h3>
                <p className="text-white/70 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/contact"
              className="rounded-xl bg-[#D8B36A] px-5 py-3 font-medium text-[#291C29] hover:bg-[#B8903F] transition"
            >
              Időpont egyeztetés
            </a>
            <a
              href="/services"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Szolgáltatások
            </a>
          </div>
        </div>

        {/* Portré kártya */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(600px_240px_at_70%_10%,rgba(216,179,106,0.25),transparent_70%)]" />
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <Image
              src="/nikolas-portrait.jpg" // tedd a képet a /public mappába ezen a néven
              width={900}
              height={1200}
              priority
              alt="Nikolas portré – elegáns, sötét garbóban, nyugodt erő"
              className="rounded-[20px] object-cover"
            />
          </div>

          {/* Aláírás-kártya */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-white/90 font-medium">Nikolas</p>
            <p className="text-white/60 text-sm">
              Empatikus, földelt és tudatos jelenlét. Bizalom, béke, mélység és
              erő – elegánsan.
            </p>
          </div>
        </div>
      </section>

      {/* TÖRTÉNET & SZEMLÉLET */}
      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 leading-relaxed">
          <h2 className="text-2xl font-semibold text-white mb-3">
            A történetem
          </h2>
          <p className="text-white/75">
            Gyermekkorom óta kísér a finom érzékelés – mindig figyeltem, hogyan
            működnek az emberek, hol akad el az energia, hogyan tükröződik a
            lélek fénye a testben, a mozdulatokban és a szavakban. Ezt a
            látást nem választottam; velem született. A döntés az volt, hogy
            megtanuljam kezelni, fejleszteni és szolgálatba állítani.
          </p>
          <p className="text-white/75 mt-4">
            Tanulmányaim – energetika, mindfulness, szellemgyógyászat,
            agykontroll, pszichotronika, reiki, masszázs – mind hozzátettek
            valamit ahhoz, hogy ma már <em>rendszerként</em> lássam az embert.
            A folyamat lényege nem a „javítás”, hanem a finom hangolás: amikor
            a csendben újra meghallod a saját belső hangod.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Hogyan dolgozom?
          </h2>
          <ul className="space-y-3 text-white/75">
            <li>• Nyugodt, bizalmi tér – ítéletek nélkül, teljes figyelemmel.</li>
            <li>• Finom energetikai érzékelés és célzott harmonizáció.</li>
            <li>• Gyógynövények és táplálékkiegészítők józan, személyre szabott használata.</li>
            <li>• Tudatos étkezés és életmód – egyszerű, követhető lépésekben.</li>
            <li>• Személyesen és online (Zoom) konzultációk.</li>
          </ul>
          <div className="mt-5 rounded-xl border border-white/10 bg-[#2A1F2C]/70 p-4">
            <p className="text-white/80 text-sm">
              Kulcsszavak: <strong>bizalom</strong>, <strong>béke</strong>,{" "}
              <strong>mélység</strong>, <strong>erő</strong>,{" "}
              <strong>elegancia</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-[#2A1F2C] to-[#1B1520] p-8 md:p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Készen állsz visszatérni a belső békédhez?
        </h3>
        <p className="text-white/70 mt-2">
          Foglalj időpontot, és finoman visszahangolunk a saját ritmusodra.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <a
            href="/contact"
            className="rounded-xl bg-[#D8B36A] px-5 py-3 font-medium text-[#291C29] hover:bg-[#B8903F] transition"
          >
            Időpont egyeztetés
          </a>
          <a
            href="/services"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
          >
            Szolgáltatások
          </a>
        </div>
      </section>

      {/* SEO – JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nikolas",
            url: "https://lightmind.hu/about",
            jobTitle: "Energetikai harmonizáció",
            brand: "LightMind",
            image: "https://lightmind.hu/nikolas-portrait.jpg",
            sameAs: [],
          }),
        }}
      />
    </main>
  );
}

