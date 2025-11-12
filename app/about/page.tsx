import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero – LIGHTMIND + főnix/logó */}
      <header className="text-center mb-10">
        <div className="mx-auto w-16 h-16 rounded-full ring-1 ring-[#D8B36A]/40 shadow-[0_0_40px_rgba(216,179,106,0.25)] bg-[#1D141D] overflow-hidden flex items-center justify-center mb-4">
          {/* Használjuk a már feltöltött ikonodat / logódat */}
          <Image
            src="/apple-touch-icon.png"
            alt="LightMind embléma"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-[0.2em] text-center
                       bg-gradient-to-r from-[#D8B36A] via-[#F3EFE9] to-[#29D3C4]
                       bg-clip-text text-transparent">
          LIGHTMIND
        </h1>

        <p className="mt-5 text-white/80 max-w-3xl mx-auto leading-relaxed">
          Mindig is érdekelt, hogyan működik az ember, mi rejlik a szavak mögött, és mi történik az energiáink szintjén. 
          Az évek során megtanultam, hogy a valódi harmónia belül születik, amikor az elme, a test és a lélek újra összhangba kerül. 
          A LightMind ebből az útból nőtt ki: finomhangolt figyelem, valódi jelenlét és gyakorlati útmutatás egy békés, nyugodt, szeretetteljes térben.
        </p>
      </header>

      {/* 3 pillér – ez maradhat ugyanúgy */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">Energetikai harmonizáció</h3>
          <p className="mt-2 text-white/75">Finomhangolás, blokkoldás</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">Gyógynövény & életmód</h3>
          <p className="mt-2 text-white/75">Tiszta, követhető irányok</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">Lelki beszélgetések</h3>
          <p className="mt-2 text-white/75">Mindfulness, csend, fókusz</p>
        </div>
      </section>

      {/* Névblokk – csak a név, nagyobb tipóval */}
      <section className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Nikolas
        </h2>
      </section>

      {/* A történetem – a Te szövegeddel */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/60 to-[#1B1520]/70 p-6 mb-12">
        <h2 className="text-2xl font-semibold text-white">A történetem</h2>
        <div className="mt-3 space-y-4 text-white/80 leading-relaxed">
          <p>
            Gyermekkorom óta kísér az érzékelés, mindig figyeltem, hogyan működnek az emberek, hol akad el az energia, 
            hogyan tükröződik a lélek energiája a testben, a mozdulatokban és a szavakban. 
            Ezt a látást nem választottam, ez egy velem született képesség. 
            A döntés és a feladat az volt, hogy megtanuljam kezelni, fejleszteni és szolgálatba állítani.
          </p>
          <p>
            Az évek során olyan módszereket tanulmányoztam, amelyek megtartják az embert a középpontban: energetika, mindfulness, 
            szellemgyógyászat, agykontroll, pszichotronika, reiki, számmisztika, asztrológia, étkezés és életmód. 
            Mindez nem varázslat, hanem finomhangolt figyelem, jelenlét és gyakorlati lépések kombinációja. 
            Az idő során megjött információban a saját technikám, amit rengeteg munkával fejlesztettem erre a szintre. 
            Ez a technika a gyökérben oldja meg a problémákat.
          </p>
          <p>
            A folyamat lényege a finom hangolás, amikor a csendben újra felfedezed a saját belső erőd. 
            Az erőt, amivel bármire képes lehet valaki, ha a hit és a kitartás rendben van.
          </p>
        </div>
      </section>

      {/* Hogyan dolgozom? – bullet lista */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-12">
        <h2 className="text-2xl font-semibold text-white">Hogyan dolgozom?</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-white/80">
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            Nyugodt, bizalmi tér – ítéletek nélkül, teljes figyelemmel.
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            Finom energetikai érzékelés és célzott harmonizáció.
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            Gyógynövények és táplálékkiegészítők józan, személyre szabott használata.
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            Tudatos étkezés és életmód – egyszerű, követhető lépésekben.
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            Személyesen és online (Zoom) konzultációk.
          </li>
        </ul>
      </section>

      {/* Záró CTA – ezt meghagyjuk */}
      <section className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Készen állsz visszatérni a belső békédhez?
        </h3>
        <p className="mt-3 text-white/75 max-w-3xl mx-auto">
          Foglalj időpontot, és finoman visszahangolunk a saját ritmusodra.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="/contact"
            className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
          >
            Időpont egyeztetés
          </a>
          <a
            href="/services"
            className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            Szolgáltatások
          </a>
        </div>
      </section>
    </main>
  );
}
