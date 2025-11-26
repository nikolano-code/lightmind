// app/services/gyogynoveny-tanacsadas/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gyógynövény- és kiegészítő tanácsadás | LightMind",
  description:
    "Személyre szabott, józan gyógynövény- és kiegészítő tanácsadás Nikolas vezetésével. Emésztés, immunrendszer, idegrendszeri egyensúly – túlzások nélkül, átlátható rendszerben.",
  openGraph: {
    title: "Gyógynövény- és kiegészítő tanácsadás | LightMind",
    description:
      "Természetes, finomhangolt támogatás a testednek: gyógynövények, kiegészítők, életmódbeli irányok – személyre szabva, csodaszerek helyett rendszerben gondolkodva.",
    url: "https://lightmind.hu/services/gyogynoveny-tanacsadas",
    type: "website",
  },
};

export default function GyogynovenyTanacsadasPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 hero animate">
      {/* HERO */}
      <header className="mb-14 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Szolgáltatás
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A] mb-3">
          Gyógynövény- és kiegészítő tanácsadás
        </h1>
        <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
          Természetes, józan megközelítés: segítek átlátni, milyen
          gyógynövények, vitaminok és egyéb kiegészítők támogathatják a
          szervezetedet, és hogyan illeszthetők be úgy a mindennapjaidba, hogy
          ne terheljenek, hanem erősítsenek.
        </p>
      </header>

      {/* FŐ BLOKK – kép + leírás */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-start mb-14">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Miről szól ez a tanácsadás?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
            <p>
              Az információ ma végtelen: mindenki ajánl valamit, minden
              ismerősnek bevált egy kapszula, egy tea, egy diéta. Könnyű
              elveszni, túlszedni magunkat, vagy olyan kombinációkat használni,
              amik már inkább terhelnek, mint támogatnak.
            </p>
            <p>
              Ebben a folyamatban közösen átnézzük, hogy a jelenlegi
              élethelyzetedben – a valós napirendeddel, terheléseddel,
              érzékenységeiddel együtt –{" "}
              <span className="text-[#F6DFA5]">
                melyik gyógynövények, kivonatok, vitaminok és ásványi anyagok
                lehetnek számodra igazán hasznosak
              </span>{" "}
              – és melyeket érdemes elengedni.
            </p>
            <p>
              Nem „egy csodakapszulát” keresünk, hanem egy finomra hangolt
              rendszert építünk, amely segíti az emésztésed, az
              idegrendszeredet, az immunrendszered működését, és összességében
              több tartalékot ad a testednek.
            </p>
          </div>
        </article>

        <aside className="max-w-sm mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#1B1420] shadow-[0_0_35px_rgba(216,179,106,0.35)]">
            <Image
              src="/services-herbs.jpeg"
              alt="Természetes gyógynövény-készítmények és kiegészítők"
              width={640}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
            <p className="text-white font-semibold">
              Természetes, átlátható támogatás
            </p>
            <p className="text-white/70">
              Minőségi készítmények, józan adagolás, valós igényeidhez igazítva.
            </p>
          </div>
        </aside>
      </section>

      {/* HOGYAN ZAJLIK – lépések */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Hogyan zajlik egy tanácsadás?
        </h2>
        <ol className="space-y-4 text-sm md:text-base text-white/80">
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">1. Rálátás</span>{" "}
            – Átbeszéljük a jelenlegi állapotodat: energiaszint, alvás,
            emésztés, stressz-szint, hormonális terhelés, immunrendszeri
            hajlamok. Ha szedsz már valamilyen gyógyszert vagy kiegészítőt,
            ezeket is végignézzük.
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">2. Letisztítás</span>{" "}
            – megnézzük, mi az, ami felesleges, duplázódik, vagy akár
            ellentétesen hathat egymással. A cél, hogy a szervezeted ne
            „fulladjon” kapszulákba, hanem tisztábban, célzottabban kapjon
            támogatást.
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              3. Egyéni javaslat
            </span>{" "}
            – személyre szabott növényi és kiegészítő javaslatot kapsz:
            melyik formában (tea, tinktúra, kapszula, keverék), milyen
            adagolásban, milyen időszakban érdemes használnod.
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              4. Életmód-kapcsolás
            </span>{" "}
            – megnézzük, hogyan tudod ezt összekötni étkezéssel, ritmussal,
            folyadékbevitellel, pihenéssel, hogy ne csak „mellé szedj” valamit,
            hanem egy működő rendszerré álljon össze.
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">
              5. Írásos összefoglaló
            </span>{" "}
            – kapsz egy rövid, átlátható leírást a megbeszéltekről, hogy
            ne vesszen el semmi, és nyugodtan tudd követni a lépéseket.
          </li>
        </ol>
      </section>

      {/* MIRE FÓKUSZÁLUNK / NEM ORVOSI TANÁCS */}
      <section className="mb-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] px-5 py-5">
          <h3 className="text-xl font-semibold text-white mb-3">
            Milyen területeken segíthet?
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-white/80">
            <li>• Emésztés támogatása, puffadás, nehéz érzet csökkentése</li>
            <li>• Immunrendszeri támogatás, gyakori kimerültség érzése</li>
            <li>• Idegrendszeri túlterheltség, stressz, alvásminőség javítása</li>
            <li>• Általános vitalitás, energiaszint finom emelése</li>
            <li>• Regeneráció támogatása megterhelőbb időszakokban</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-red-300/30 bg-[#2A1C24]/80 px-5 py-5">
          <h3 className="text-xl font-semibold text-[#F6DFA5] mb-2">
            Fontos jogi / szakmai kiegészítés
          </h3>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            A LightMind keretében zajló gyógynövény- és kiegészítő tanácsadás{" "}
            <span className="font-semibold">
              nem minősül orvosi vizsgálatnak, diagnózisnak vagy
              gyógykezelésnek
            </span>
            . Nem helyettesíti az orvossal, szakorvossal, gyógyszerésszel
            történő konzultációt, és nem módosítjuk a meglévő gyógyszeres
            terápiádat. A javaslatok természetes, kiegészítő támogatást kínálnak,
            amelyet mindig a saját felelősségedre, és szükség esetén a kezelőorvosoddal
            egyeztetve alkalmazz.
          </p>
        </div>
      </section>

      {/* NEKED SZÓL / TAPASZTALATOK JELLEGŰ BLOKK */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Neked szól ez a folyamat, ha…
        </h2>
        <div className="grid gap-3 md:grid-cols-2 text-sm md:text-base text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            • túl sok különböző készítményt szedsz, és szeretnél rendet tenni
            közöttük.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            • érzed, hogy „mindenre van egy kapszula”, de te inkább egy tiszta,
            átlátható rendszerre vágysz.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            • fontos neked a minőség: kevés, de gondosan összeállított
            készítményt használnál.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            • szeretnéd jobban érteni, mit miért szedsz – és hogyan tudod
            valóban a tested mellé állítani a természet erejét.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Szeretnél tisztább rendszert a kiegészítőidben?
        </h2>
        <p className="text-white/75 max-w-2xl mx-auto mb-6">
          Írj néhány mondatot a jelenlegi állapotodról és arról, mit szedsz
          most. Válaszként javaslok egy első lépést, és megbeszéljük,
          hogyan tudunk a legjobban együtt dolgozni.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
          >
            Időpontot kérek
          </Link>
          <Link
            href="/kerdoiv"
            className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            Először kitöltöm a kérdőívet
          </Link>
        </div>
      </section>

      {/* NATURHERB / WEBSHOP SÁV – itt lesznek majd a termékek */}
      <section className="mb-6">
        <div className="rounded-3xl border border-[#D8B36A]/30 bg-gradient-to-r from-[#2A1F2C]/85 via-[#241B27]/90 to-[#1B1520]/90 px-6 py-6 md:px-8 md:py-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#F6DFA5] mb-1">
                LightMind Naturherb – saját készítmények
              </h2>
              <p className="text-sm md:text-base text-white/80 max-w-xl">
                Manufakturális, gondosan összeállított növényi keverékek és
                kapszulák, amelyeknél a minőség, a tisztaság és az energia
                jelenléte a legfontosabb. Hamarosan webshop formában is
                elérhetők lesznek itt, a LightMind felületén.
              </p>
            </div>

            {/* TERMÉK SÁV – egyelőre placeholder, ide később könnyen beteheted a termékeket */}
            <div className="w-full md:w-80">
              <div className="rounded-2xl border border-dashed border-white/30 bg-white/[0.03] px-4 py-4 text-center text-sm text-white/70">
                Itt fog megjelenni a{" "}
                <span className="font-semibold text-[#F6DFA5]">
                  LightMind Naturherb
                </span>{" "}
                termék-sáv: kapszulák, keverékek, teák. 
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}