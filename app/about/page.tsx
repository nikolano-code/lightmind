// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero – LIGHTMIND + főnix jelvény */}
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.02em] text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DBB36A] via-[#F3EFE9] to-[#A290C4]">
            LIGHTMIND
          </span>{" "}
         
        </h1>

        <p className="mt-5 text-white/80 max-w-3xl mx-auto leading-relaxed">
          Mindig is érdekelt, hogyan működik az ember, mi rejlik a szavak mögött, és mi történik
          az energiáink szintjén. Az évek során megtanultam, hogy a valódi harmónia belül születik,
          amikor az elme, a test és a lélek újra összhangba kerül. A LightMind ebből az útból nőtt ki:
          finomhangolt figyelem, valódi jelenlét és gyakorlati útmutatás egy békés, nyugodt, szeretetteljes térben.
        </p>
      </header>

      {/* 3 pillér – marad ugyanígy */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">Energetikai harmonizáció</h3>
          <p className="text-sm text-white/70">Finomhangolás, blokkoldás, energiatöltés</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">Gyógynövény &amp; életmód, étkezés</h3>
          <p className="text-sm text-white/70">Tiszta, követhető irányok</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">Lelki beszélgetések</h3>
          <p className="text-sm text-white/70">Mindfulness, csend, fókusz</p>
        </div>
      </section>

      {/* Portré kártya */}
      <section className="mb-12">
        <div className="max-w-sm">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#1B1420] shadow-[0_0_40px_rgba(216,179,106,0.25)]">
            <Image
              src="/nikolas-portrait.jpeg"
              alt="Nikolas portré"
              width={720}
              height={960}
              sizes="(max-width: 640px) 100vw, 480px"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="mt-4 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
            <p className="text-white text-lg font-semibold">Nikolas</p>
            <p className="text-white/70 text-sm">
              LIGHTMIND megálmodója
            </p>
          </div>
        </div>
      </section>

      {/* Történet + Hogyan dolgozom – két hasáb */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/40 to-[#1B1520]/70 p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">A történetem</h2>
          <p className="space-y-3 text-white/80 leading-relaxed">
            <span>
              Gyermekkorom óta kísér az érzékelés, mindig figyeltem, hogyan működnek az emberek,
              hol akad el az energia, hogyan tükröződik a lélek energiája a testben, a mozdulatokban
              és a szavakban. Ezt a látást nem választottam, ez egy velem született képesség.
              A döntés és a feladat az volt, hogy megtanuljam kezelni, fejleszteni és szolgálatba állítani.
            </span>{" "}
            <span>
              Az évek során olyan módszereket tanulmányoztam, amelyek megtartják az embert a
              középpontban: energetika, mindfulness, szellemgyógyászat, agykontroll, pszichotronika,
              reiki, számmisztika, asztrológia, étkezés és életmód. Nem varázslat, hanem finomhangolt
              figyelem, jelenlét és gyakorlati lépések kombinációja. Idővel kialakult a saját technikám,
              amely a gyökérben oldja meg a problémákat.
            </span>{" "}
            <span>
              A folyamat lényege a finom hangolás amikor a csendben újra felfedezed a saját belső
              erőd. Az erőt, amellyel bármi lehetséges, ha a hit és a kitartás rendben van.
            </span>
          </p>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/40 to-[#1B1520]/70 p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">Hogyan dolgozom?</h2>
          <ul className="space-y-3 text-white/85">
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Nyugodt, bizalmi tér teljes figyelemmel.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Finom energetikai érzékelés és célzott harmonizáció.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Gyógynövények &amp; táplálékkiegészítők személyre szabott ajánlása.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Tudatos étkezés és életmód egyszerű, követhető lépésekben.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Személyesen és online (Zoom) konzultációk.
            </li>
          </ul>
        </aside>
      </section>

      {/* CTA – ez marad */}
      <section aria-label="Időpont foglalás" className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Készen állsz visszatérni a belső békédhez?
        </h3>
        <p className="text-white/75 max-w-3xl mx-auto mb-6">
          Foglalj időpontot, és finoman visszahangolunk a saját ritmusodra.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl px-5 py-3 bg-[#DBB36A] text-[#291C29] font-medium hover:bg-[#E8C889] transition"
          >
            Időpont egyeztetés
          </Link>
          <Link
            href="/services"
            className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            Szolgáltatások
          </Link>
        </div>
      </section>
    </main>
  );
}
