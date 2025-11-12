// app/services/page.tsx
export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Fejléc */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A]">
          Szolgáltatások
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed">
          A LightMind térben a test–elme–lélek egységét finoman, mégis
          határozottan hangoljuk újra. Válaszd ki, amire most leginkább
          szükséged van vagy kérj rövid útmutatást, és segítek a döntésben.
        </p>
      </header>

      {/* Fő szolgáltatás-kártyák */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Energetikai harmonizáció */}
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Energetikai harmonizáció</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Finom érintés nélküli hangolás, amely segít oldani az energiamegakadást,
            tisztítja a teret és támogatja a természetes öngyógyító folyamatokat.
            A folyamat közben végig biztonságos, nyugodt jelenlétben kísérlek.
          </p>
          <ul className="mt-4 text-white/70 space-y-1">
            <li>• Javasolt: feszültség, belső nyugtalanság, kimerültség</li>
            <li>• Időtartam: 60–75 perc</li>
            <li>• Helyszín: személyesen vagy online vezetéssel</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="/contact" className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition">
              Időpontot kérek
            </a>
            <a href="/about" className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition">
              Részletek
            </a>
          </div>
        </article>

        {/* Gyógynövény & kiegészítő tanácsadás */}
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Gyógynövény- és kiegészítő tanácsadás</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Természetes, józan megközelítés: személyre szabott gyógynövény-ajánlások,
            étrend-kiegészítők átgondolt használata, kölcsönhatások és túlzások nélkül.
          </p>
          <ul className="mt-4 text-white/70 space-y-1">
            <li>• Fókusz: emésztés, immun­támogatás, idegrendszeri egyensúly</li>
            <li>• Időtartam: 45–60 perc (online is)</li>
            <li>• Utánkövetés: rövid írásos összefoglaló</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="/contact" className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition">
              Konzultációt kérek
            </a>
            <a href="/contact" className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition">
              Kérdezek előtte
            </a>
          </div>
        </article>

        {/* Mindfulness & belső hangolás */}
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Mindfulness hangolás</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Vezetett jelenlétgyakorlatok és légzés, hogy a zaj lecsendesedjen,
            és tisztábban hallhasd a belső irányt. Gyakorlati, otthon is végezhető
            eszközöket kapsz.
          </p>
          <ul className="mt-4 text-white/70 space-y-1">
            <li>• Javasolt: stressz, döntés­helyzet, túlterheltség</li>
            <li>• Időtartam: 45 perc (online/élő)</li>
            <li>• Ajándék: 1 rövid, vezetett hanganyag</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="/contact" className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition">
              Időpontot kérek
            </a>
            <a href="/about" className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition">
              Mit adhat?
            </a>
          </div>
        </article>

        {/* Étrend & életmódváltás – mentoring */}
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Étrend & életmód mentorálás</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Stabil, fenntartható rendszer: egyszerű, működő étrendi irányok, alvás- és
            ritmusbeállítás, mozgás-minimum, reális szokásváltás túlzások nélkül.
          </p>
          <ul className="mt-4 text-white/70 space-y-1">
            <li>• Kezdő csomag: 1×90 perc + egyhetes követés</li>
            <li>• Haladó: 4 hetes kísérés, köztes check-in</li>
            <li>• Személyre szabott jegyzet és lépésterv</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="/contact" className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition">
              Jelentkezem
            </a>
            <a href="/contact" className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition">
              Kérek visszahívást
            </a>
          </div>
        </article>
      </section>

      {/* Egyéni / Online blokk */}
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Személyes alkalmak</h3>
          <p className="mt-2 text-white/75">
            Nyugodt tér, tiszta fókusz, mély kísérés. A folyamat ritmusát mindig
            hozzád igazítjuk.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Online konzultáció (Zoom)</h3>
          <p className="mt-2 text-white/75">
            Ugyanaz a minőség kényelmesen, távolról. Időpont előtt rövid technikai útmutatót küldök.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Rövid elő-eligazítás</h3>
          <p className="mt-2 text-white/75">
            Bizonytalan vagy melyik szolgáltatás illik most? Írj pár sort a helyzetedről, válaszolok,
            és ajánlok első lépést.
          </p>
        </div>
      </section>

      {/* Gyakori helyzetek */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Gyakori helyzetek, amikor érdemes jelentkezni</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-white/75">
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">Huzamos belső feszültség, „nem találom a ritmusom” érzés</li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">Alvásminőség, energiagazdálkodás, kifáradás</li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">Döntéshelyzet, tisztább belső irányra van szükség</li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">Étrend, kiegészítők, gyógynövények: hogyan kezdjek jól?</li>
        </ul>
      </section>

      {/* Záró CTA */}
      <section className="mt-12 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/80 px-6 py-8">
          <h3 className="text-2xl font-semibold text-white">Kezdjük el finoman, mégis határozottan.</h3>
          <p className="max-w-2xl text-white/75">
            Írj pár sort az aktuális helyzetedről, és javaslok első lépést.
            A folyamatot teljesen rád hangoljuk bizalommal, békében, mélységben.
          </p>
          <div className="flex gap-3">
            <a href="/contact" className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition">
              Időpont egyeztetés
            </a>
            <a href="/about" className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition">
              Rólam bővebben
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
