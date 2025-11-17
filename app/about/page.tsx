// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 hero animate">
      {/* HERO – logó + cím + rövid intro */}
      <header className="text-center mb-14">
        {/* kör logó arany aurával – mint a Szolgáltatások oldalon */}
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
            Rólam
          </span>
        </h1>

        <p className="mt-5 text-white/80 max-w-3xl mx-auto leading-relaxed">
          Mindig is érdekelt, hogyan működik az ember, mi rejlik a szavak mögött,
          és mi történik az energiáink szintjén. A valódi harmónia szerintem belül
          születik meg, amikor az elme, a test és a lélek újra összhangba kerül.
          A LightMind ebből az útból nőtt ki: finomhangolt figyelem és gyakorlati
          útmutatás egy békés, nyugodt, szeretetteljes térben.
        </p>
      </header>

      {/* Intro blokk: szöveg + portré egymás mellett nagyobb kijelzőn */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-start mb-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/60 to-[#1B1520]/80 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-3">Ki vagyok én?</h2>
          <div className="space-y-4 text-white/80 leading-relaxed text-sm md:text-base">
            <p>
              Spirituális kísérőként és energetikai segítőként abban támogatok,
              hogy visszatalálj a saját belső erődhöz. Nem jóslás, nem „megjavítás”,
              hanem egy olyan folyamat, amelyben tisztábban látod önmagad
              és az utadat.
            </p>
            <p>
              A munkám lényege a finom érzékelés és a földelt, gyakorlatias
              szemlélet találkozása. Egyszerre dolgozunk az energetikai
              rétegekkel és a mindennapi szokásokkal az étkezéseddel,
              ritmusoddal, terhelhetőségeddel.
            </p>
            <p>
              Hiszem, hogy mindenkiben ott van a képesség, hogy újra felépítse
              önmagát. Az én feladatom az, hogy ebben kísérjelek, tükröt tartsak,
              és segítsek visszahangolni a saját belső középpontodra.
            </p>
          </div>
        </div>

        {/* Portré kártya */}
        <div className="max-w-sm mx-auto">
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
            <p className="text-white/70 text-sm">a LightMind megálmodója</p>
          </div>
        </div>
      </section>

      {/* 3 pillér – LightMind alapok */}
      <section className="mb-12">
        <h2 className="text-center text-2xl font-semibold text-[#D8B36A] mb-5">
          A LightMind három pillére
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-1">
              Energetikai harmonizáció
            </h3>
            <p className="text-sm text-white/70">
              Finomhangolás, blokkoldás, az energiarendszer tisztítása és töltése,
              hogy újra áramlást élj meg.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-1">
              Gyógynövény, életmód, étkezés
            </h3>
            <p className="text-sm text-white/70">
              Józan, átlátható irányok túlzások nélkül. Mit érdemes enned,
              milyen kiegészítők segíthetnek, hogyan támogasd a tested.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white mb-1">
              Lelki beszélgetések
            </h3>
            <p className="text-sm text-white/70">
              Mindfulness, csend, fókusz, ahol kimondhatod, ami benned van,
              ítéletek nélkül, teljes figyelemmel.
            </p>
          </div>
        </div>
      </section>

      {/* Történetem + Hogyan dolgozom – két hasáb mélyebben */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/40 to-[#1B1520]/70 p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">A történetem</h2>
          <div className="space-y-4 text-white/80 leading-relaxed text-sm md:text-base">
            <p>
              Gyermekkorom óta kísér az érzékelés: mindig figyeltem, hogyan
              működnek az emberek, hol akad el az energia, hogyan tükröződik
              a lélek fénye a testben, a mozdulatokban és a szavakban. Ezt a
              látást nem választottam velem született. A döntés és a feladat
              az volt, hogy megtanuljam kezelni, fejleszteni és szolgálatba állítani.
            </p>
            <p>
              Az évek során olyan módszereket tanulmányoztam, amelyek megtartják
              az embert a középpontban: energetika, mindfulness, szellemgyógyászat,
              agykontroll, pszichotronika, reiki, számmisztika, asztrológia,
              étkezés és életmód. Nem varázslat, hanem finomhangolt figyelem,
              jelenlét és gyakorlati lépések kombinációja.
            </p>
            <p>
              Idővel kialakult a saját technikám egy rendszer, amely a gyökérben
              kezdi oldani a problémákat, és egyszerre hat az energiaszintre,
              a testre és a gondolkodásra. A folyamat lényege a finom hangolás:
              amikor a csendben újra felfedezed a saját belső erőd, és emlékezni
              kezdesz, mire vagy valójában képes.
            </p>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/40 to-[#1B1520]/70 p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">Hogyan dolgozom?</h2>
          <ul className="space-y-3 text-white/85 text-sm md:text-base">
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Nyugodt, bizalmi tér ítéletek nélkül, teljes figyelemmel.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Finom energetikai érzékelés és célzott harmonizáció nem erőből,
              hanem együttműködve a rendszereddel.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Gyógynövények és táplálékkiegészítők személyre szabott,
              józan használata, túlzások és „csodaszerek” nélkül.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Tudatos étkezés és életmód egyszerű, követhető lépésekben,
              a hétköznapi valóságodra szabva.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              Személyesen és online (Zoom) konzultációk ott, ahol épp vagy.
            </li>
          </ul>
        </aside>
      </section>

      {/* Kinek szól? */}
      <section className="mb-14">
        <h2 className="text-center text-2xl font-semibold text-[#D8B36A] mb-4">
          Neked szól ez, ha…
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            Szeretnél kilépni a kimerültség, a túlpörgés köréből, és valós, tartós
            egyensúlyt építeni magadnak.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            Nyitott vagy a spiritualitásra, de fontos, hogy földelt,
            józan szemléletben maradj.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            Nem „instant megoldást” keresel, hanem valódi folyamatot,
            kíséréssel és felelősségvállalással.
          </div>
        </div>
      </section>

      {/* CTA */}
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