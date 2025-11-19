// app/services/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 hero animate">
      {/* HERO – logó + bevezető */}
      <header className="mb-14 text-center">
        <div className="mx-auto mb-6 relative w-28 h-28 md:w-32 md:h-32">
          {/* aura */}
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
          LightMind • Szolgáltatások
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A]">
          Szolgáltatások
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed">
          A LightMind térben a test–elme–lélek egységét finoman, mégis határozottan
          hangoljuk újra. Válaszd ki azt a folyamatot, ami most a legjobban hív
          vagy írj nekem, és segítek az első lépés kiválasztásában.
        </p>
      </header>

      {/* Fő szolgáltatás-kártyák – KÉPEKKEL */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Energetikai harmonizáció */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(500px_500px_at_0%_0%,rgba(216,179,106,0.25),transparent_70%)]" />
          <div className="relative">
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-energetika.jpeg"
                alt="Energetikai harmonizáció – fény, energia, nyugalom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Energetikai harmonizáció
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Finom, érintés nélküli hangolás, amely segít oldani az
              energiamegakadást, tisztítja a teret és támogatja a természetes
              öngyógyító folyamatokat. A folyamat közben végig nyugodt,
              biztonságos jelenlétben kísérlek.
            </p>
            <ul className="mt-4 text-white/70 space-y-1 text-sm">
              <li>• Javasolt: feszültség, belső nyugtalanság, kimerültség</li>
              <li>• Időtartam: 60–75 perc</li>
              <li>• Helyszín: személyesen vagy online vezetés</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Időpontot kérek
              </Link>
              <Link
                href="/about"
                className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition"
              >
                Rólam bővebben
              </Link>
            </div>
          </div>
        </article>

        {/* Gyógynövény & kiegészítő tanácsadás */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(500px_500px_at_100%_0%,rgba(41,211,196,0.23),transparent_70%)]" />
          <div className="relative">
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-herbs.jpeg"
                alt="Gyógynövényes és természetes kiegészítők"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Gyógynövény- és kiegészítő tanácsadás
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Természetes, józan megközelítés: személyre szabott gyógynövény-ajánlások,
              étrend-kiegészítők átgondolt használata, kölcsönhatások és túlzások nélkül.
              Nem csodaszerekben gondolkodunk, hanem rendszerben.
            </p>
            <ul className="mt-4 text-white/70 space-y-1 text-sm">
              <li>• Fókusz: emésztés, immun­támogatás, idegrendszeri egyensúly</li>
              <li>• Időtartam: 45–60 perc (online is)</li>
              <li>• Utánkövetés: rövid, írásos összefoglaló</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Konzultációt kérek
              </Link>
              <Link
                href="/contact"
                className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition"
              >
                Kérdezek előtte
              </Link>
            </div>
          </div>
        </article>

        {/* Mindfulness hangolás */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(480px_480px_at_0%_100%,rgba(173,127,255,0.35),transparent_70%)]" />
          <div className="relative">
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-mindfulness.jpeg"
                alt="Mindfulness, meditáció, légzésgyakorlat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">Mindfulness hangolás</h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Vezetett jelenlétgyakorlatok, légzés és finom fókusz, hogy a zaj
              lecsendesedjen, és tisztábban halld a belső irányt. Konkrét,
              otthon is végezhető gyakorlatokat kapsz.
            </p>
            <ul className="mt-4 text-white/70 space-y-1 text-sm">
              <li>• Javasolt: stressz, döntéshelyzet, túlterheltség</li>
              <li>• Időtartam: 45 perc (online / személyes)</li>
              <li>• Ajándék: 1 rövid vezetett hanganyag</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Időpontot kérek
              </Link>
              <Link
                href="/about"
                className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition"
              >
                Mit adhat nekem?
              </Link>
            </div>
          </div>
        </article>

        {/* Étrend & életmód mentorálás */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(480px_480px_at_100%_100%,rgba(248,214,120,0.25),transparent_70%)]" />
          <div className="relative">
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-lifestyle.jpeg"
                alt="Életmódváltás, étkezés, finom egyensúly"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Étrend & életmód mentorálás
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Stabil, fenntartható rendszer: egyszerű, működő étrendi irányok,
              alvás- és ritmusbeállítás, mozgás-minimum. Nincsenek extrém diéták,
              csak olyan lépések, amelyek illenek az életedhez.
            </p>
            <ul className="mt-4 text-white/70 space-y-1 text-sm">
              <li>• Kezdő csomag: 1×90 perc + egyhetes követés</li>
              <li>• Haladó: 4 hetes kísérés, köztes check-inek</li>
              <li>• Személyre szabott jegyzet és lépésterv</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Jelentkezem
              </Link>
              <Link
                href="/contact"
                className="rounded-xl px-4 py-2 border border-white/15 text-white/90 hover:bg-white/5 transition"
              >
                Kérek visszajelzést
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Formátumok + mini portré kép */}
      <section className="mt-14 grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Hogyan találkozunk?
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <h3 className="font-semibold text-white mb-1">
                Személyes alkalmak
              </h3>
              <p className="text-white/75">
                Csendes, nyugodt tér a tempót végig hozzád igazítjuk.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <h3 className="font-semibold text-white mb-1">
                Online konzultáció
              </h3>
              <p className="text-white/75">
                Zoomon keresztül, kényelmesen otthonról. Időpont előtt rövid
                technikai útmutatót küldök.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <h3 className="font-semibold text-white mb-1">
                Előzetes mini-egyeztetés
              </h3>
              <p className="text-white/75">
                Ha bizonytalan vagy, melyik folyamat lenne a legjobb első
                lépés, írj pár sort, és válaszolok.
              </p>
            </div>
          </div>
        </div>

        {/* mini portré blokk */}
        <div className="max-w-xs mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#1B1420] shadow-[0_0_30px_rgba(216,179,106,0.28)]">
            <Image
              src="/nikolas-portrait.jpeg"
              alt="Nikolas LightMind portré"
              width={480}
              height={640}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
            <p className="text-white font-semibold">Nikolas</p>
            <p className="text-white/70">
              Spirituális kísérő, energetikai harmonizáció és életmód mentorálás.
            </p>
          </div>
        </div>
      </section>

      {/* Gyakori helyzetek */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Mikor érdemes felvenned velem a kapcsolatot?
        </h2>
        <p className="text-white/75 mb-4 max-w-3xl">
          Néhány példa, amikor a közös munka sokat tud adni:
        </p>
        <ul className="grid md:grid-cols-2 gap-3 text-white/80 text-sm">
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            • Huzamos ideje érzed, hogy „nem találod a ritmusod”, és kifáraszt a
            folyamatos belső feszültség.
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            • Az alvásod, energiaszinted, emésztésed jelzi, hogy valamin
            változtatni kellene.
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            • Döntéshelyzetben vagy, és szükséged van tisztább belső irányra,
            megerősítésre.
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            • Étkezés, kiegészítők, gyógynövények terén túl sok az információ,
            és jó lenne egy tiszta, rád szabott rendszer.
          </li>
        </ul>
      </section>

      {/* Záró CTA */}
      <section className="mt-14 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/80 to-[#1B1520]/90 px-6 py-8">
          <h3 className="text-2xl font-semibold text-white">
            Kezdjük el finoman, mégis határozottan.
          </h3>
          <p className="max-w-2xl text-white/75">
            Írj pár sort az aktuális helyzetedről, és javaslok egy első, rád
            szabott lépést. A folyamatot végig a saját ritmusodra hangoljuk –
            bizalommal, békében, mélységben.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
            >
              Időpont egyeztetés
            </Link>
            <Link
              href="/about"
              className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
            >
              Ismerj meg jobban
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}