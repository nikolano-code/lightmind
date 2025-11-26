// app/services/eletmod-mentoralas/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Étrend & életmód mentorálás | LightMind",
  description:
    "Személyre szabott étrend, életmód, ritmus és kiegészítő rendszer Nikolas vezetésével. Fenntartható, nyugodt, működő táplálkozási és életmód-koncepciók.",
  openGraph: {
    title: "Étrend & életmód mentorálás | LightMind",
    description:
      "Biztonságos, személyre szabott életmód-támogatás: étrend, ritmus, alvás, energia, kiegészítők. A LightMind módszerrel.",
    url: "https://lightmind.hu/services/eletmod-mentoralas",
    type: "website",
  },
};

export default function EletmodMentoralasPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 hero animate">
      {/* HERO */}
      <header className="mb-14 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Szolgáltatás
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A] mb-3">
          Étrend & Életmód Mentorálás
        </h1>
        <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
          Letisztult, működő étrendi irányok, valós napi ritmus, stabil energia –
          személyre szabva, túlzások és extrém diéták nélkül. A cél: egy olyan
          rendszer, amihez nem kell akaraterő, mert illik hozzád.
        </p>
      </header>

      {/* KÉP + BEVEZETŐ */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-start mb-14">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/80 via-[#241B27]/85 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Miről szól az életmód mentorálás?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
            <p>
              A legtöbb életmódváltás azért bukik el, mert{" "}
              <span className="text-[#F6DFA5] font-semibold">
                túl bonyolult, túl szélsőséges, vagy nem illik a valós
                élethelyzethez.
              </span>{" "}
              Én ezzel szemben olyan rendszert építek melléd, ami
              működik akkor is, amikor fáradt vagy, rohanásban vagy,
              vagy épp nincs motivációd.
            </p>
            <p>
              Nem diétát kapsz, hanem{" "}
              <span className="text-[#F6DFA5]">egy személyre szabott
              stratégiai rendszert</span>: étkezési ritmust, alapelveket,
              stresszkezelést, alvásminőség-javítást, kiegészítő javaslatot és
              a tested működésének megértését.
            </p>
            <p>
              A cél nem a gyors „csodaeredmény”, hanem az, hogy stabilabb
              legyél, energikusabb, tisztább – és hosszú távon is fenn tudd tartani.
            </p>
          </div>
        </article>

        <aside>
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_40px_rgba(216,179,106,0.35)]">
            <Image
              src="/services-lifestyle.jpeg"
              alt="Életmód, étrend, egyensúly – LightMind"
              width={700}
              height={900}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="mt-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
            <p className="text-white font-semibold">Fenntartható életmód</p>
            <p className="text-white/70">
              Nem diéta. Egy rendszer, ami illik hozzád.
            </p>
          </div>
        </aside>
      </section>

      {/* HOGYAN ZAJLIK */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Hogyan zajlik a program?
        </h2>

        <ol className="space-y-4 text-sm md:text-base text-white/80">
          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">1. Alapállapot feltérképezése</span> – 
            energiaszint, alvás, emésztés, hormonális és idegrendszeri terheltség,
            étkezési minták, stresszforrások.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">2. Táplálkozási stratégia</span> – 
            nem kalóriaszámolás, hanem ritmus, arányok, ételminőség, kombinációk, 
            és a tested jelzéseinek helyes olvasása.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">3. Kiegészítő rendszer</span> – 
            tiszta, tudatos, valóban működő természetes készítmények:
            vitaminok, ásványi anyagok és növényi kivonatok rendszere.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">4. Ritmus és életmód</span> – 
            stresszkezelés, regeneráció, alvásjavítás, mozgásminimum, 
            egész napos energiaszint stabilizálása.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <span className="font-semibold text-[#F6DFA5]">5. Heti mini-check</span> – 
            rövid visszajelzés: mi működött, min kell finomítani, merre lépünk tovább.
          </li>
        </ol>
      </section>

      {/* ÜZLETI STRATÉGIA (MARKETING BLOKK) */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-4">
          A LightMind életmód-stratégia — több mint étrend
        </h2>

        <div className="space-y-4 text-white/80 leading-relaxed text-sm md:text-base">
          <p>
            Ez nem egy egyszerű életmód-tanácsadás. Ez{" "}
            <span className="font-semibold text-[#F6DFA5]">
              prémium, stratégiai személyre szabott program
            </span>, amelyben a tested működését,
            a mindennapi terheltségedet és a céljaidat összekötjük egy
            működő rendszerben.
          </p>

          <p>
            A program felépítése úgy lett kialakítva, hogy{" "}
            <span className="font-semibold">ne igényeljen akaraterőt</span>.
            Nem leszel éhes, nem kell „megerőszakolni” a tested.
          </p>

          <p>
            Olyan rendszert kapsz, amely:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>stabilizálja az energiaszinted,</li>
            <li>javítja az alvásod,</li>
            <li>csökkenti a gyulladást, puffadást és emésztési terhelést,</li>
            <li>növeli a teljesítményed, fókuszod,</li>
            <li>és támogatja a természetes testsúly-egyensúlyt.</li>
          </ul>

          <p className="pt-2">
            *Marketing pozícionálás*:  
            A mentorálás nem tömegtermék.  
            A LightMind életmódprogram azoknak szól, akik:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>nem időszakos diétát akarnak, hanem átalakulást,</li>
            <li>szeretnék tudni, mit miért esznek,</li>
            <li>stabil rendszert akarnak káosz helyett,</li>
            <li>minőséget választanak, nem gyors megoldást.</li>
          </ul>

          <p className="mt-3 text-white/90 font-semibold">
            Ezért a program limitált férőhelyes, egyéni vezetésű,
            és valódi személyes támogatást adok hozzá.
          </p>
        </div>
      </section>

      {/* JOGI / szakmai kiegészítés */}
      <section className="mb-14">
        <div className="rounded-2xl border border-red-300/30 bg-[#2A1C24]/85 px-5 py-5">
          <h2 className="text-xl font-semibold text-[#F6DFA5] mb-3">
            Fontos szakmai és jogi kiegészítés
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            A LightMind életmód mentorálás{" "}
            <span className="font-semibold">
              nem orvosi vizsgálat, nem diagnózis és nem gyógykezelés
            </span>.  
            Nem módosítjuk az orvosi terápiádat, és nem helyettesítjük a
            szakemberrel történő konzultációt.  
            A javaslatok természetes, életmódbeli irányelveket foglalnak magukban.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Készen állsz egy nyugodtabb, tisztább életre?
        </h2>
        <p className="text-white/75 max-w-2xl mx-auto mb-6">
          Írd le, mi az, ami most a leginkább kihívás számodra.
          A válaszomban megkapod az első személyre szabott lépést.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
          >
            Jelentkezem
          </Link>
          <Link
            href="/kerdoiv"
            className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            Kitöltöm a kérdőívet
          </Link>
        </div>
      </section>
    </main>
  );
}