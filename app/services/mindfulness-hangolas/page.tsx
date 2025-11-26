// app/services/mindfulness-hangolas/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mindfulness hangolás | LightMind",
  description:
    "Finom, jelenlétalapú folyamat energetikai támogatással. Stresszcsökkentés, idegrendszeri lassulás, belső fókusz tisztítása Nikolas vezetésével.",
  openGraph: {
    title: "Mindfulness hangolás | LightMind",
    description:
      "Vezetett jelenlét, légzés és energetikai hangolás a belső csendért és tisztább fókuszért.",
    url: "https://lightmind.hu/services/mindfulness-hangolas",
    type: "website",
  },
};

export default function MindfulnessHangolasPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 hero animate">
      {/* HERO --------------------------------------------------------------- */}
      <header className="mb-14 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Szolgáltatás
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A] mb-3">
          Mindfulness hangolás
        </h1>

        <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
          Egy különleges, kettős hatású folyamat: vezetett mindfulness-gyakorlatok,
          légzés és fókusz, miközben finom energetikai támogatással dolgozom azokon
          a területeken, ahol gyengébb vagy fáradtabb a rendszered.
        </p>
      </header>

      {/* BEVEZETŐ + KÉP ----------------------------------------------------- */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] gap-8 mb-16">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/80 via-[#241B27]/85 to-[#1B1520]/90 p-6 md:p-7 text-white/80 leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Miről szól a mindfulness hangolás?
          </h2>

          <p>
            A modern ember túlterhelt: nem csak a feladatoktól, hanem a
            <span className="text-[#F6DFA5]"> folyamatos mentális zajtól</span>.
            Értesítések, nyomás, elvárások, gondolatspirálok. Ez az idegrendszert
            állandó készenlétben tartja, és egy idő után a test is kimerül.
          </p>

          <p>
            A mindfulness hangolás célja, hogy visszatalálj ahhoz a belső ponthoz,
            ahol a fókusz tisztább, a légzés mélyebb, az idegrendszer pedig végre
            pihenni tud. A folyamat közben energetikailag is dolgozom: finom,
            érintés nélküli módon támogatom a blokkos, gyenge vagy túlterhelt
            területeket.
          </p>

          <p>
            Ez nem egyszerű „ülünk és meditálunk” alkalom – ez egy
            <span className="text-[#F6DFA5]"> vezetett, mélyre hangoló folyamat</span>,
            ahol a tested, az elméd és az energiameződ együtt rendeződik.
          </p>
        </article>

        <aside className="max-w-sm mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#1B1420] shadow-[0_0_40px_rgba(216,179,106,0.4)]">
            <Image
              src="/services-mindfulness.jpeg"
              alt="Mindfulness, tudatos jelenlét, légzés"
              width={640}
              height={820}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm text-white/70">
            <p className="font-semibold text-white">
              Jelenlét • Csend • Energetikai támogatás
            </p>
            A figyelem, a légzés és az energia együtt rendeződik.
          </div>
        </aside>
      </section>

      {/* MIBEN SEGÍT -------------------------------------------------------- */}
      <section className="mb-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5">
          <h2 className="text-xl font-semibold text-white mb-3">Miben segít?</h2>
          <ul className="text-white/80 space-y-2 text-sm md:text-base">
            <li>• Mentális zaj és belső feszültség csökkentése</li>
            <li>• Túlterheltség, „szétesettség” érzésének enyhítése</li>
            <li>• Alvásminőség javítása, idegrendszeri lassulás</li>
            <li>• Stresszreakciók csillapítása, test-lélek összerendezése</li>
            <li>• Tisztább fókusz, könnyebb döntéshozatal</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/85 to-[#1B1520]/90 px-5 py-5">
          <h2 className="text-xl font-semibold text-white mb-3">
            Mindfulness + energetikai munka
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            A folyamat közben finoman érzékelem, mely területek túlterheltek,
            gyengék vagy blokkosak. Energiát irányítok oda, ahol a rendszered
            több támogatást igényel – ez segíthet az idegrendszer lassulásában,
            a test ellazulásában, és abban, hogy könnyebben kapcsolódj a saját
            belső erődhöz.
          </p>
        </div>
      </section>

      {/* HOGYAN ZAJLIK ------------------------------------------------------- */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-5">
          Hogyan zajlik egy alkalom?
        </h2>

        <ol className="space-y-4 text-white/80 text-sm md:text-base">
          <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <span className="text-[#F6DFA5] font-semibold">1. Ráhangolódás</span> – légzés,
            lassítás, finom állapotfelmérés. Itt már érzed, hogy a tempó elkezd
            lelassulni.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <span className="text-[#F6DFA5] font-semibold">2. Vezetett jelenlét</span> – egyszerű,
            de mély figyelemgyakorlatokkal segítek elcsendesíteni az elme
            zakatolását, és visszatérni a „most”-hoz.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <span className="text-[#F6DFA5] font-semibold">3. Tudatos légzés</span> – olyan
            légzéstechnikákat gyakorlunk, amelyek támogatják az idegrendszeri
            lassulást, a feszültség oldását, és amelyeket később egyedül is
            tudsz használni.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <span className="text-[#F6DFA5] font-semibold">4. Energetikai hangolás</span> – finom,
            érintés nélküli energetikai munka a gyengébb, túlterhelt vagy
            blokkolt területeken. Nem irányítom helyetted az életedet, hanem
            teret nyitok arra, hogy a saját rendszered kezdjen rendeződni.
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <span className="text-[#F6DFA5] font-semibold">5. Integráció</span> – rövid
            visszajelzés arról, mit éltél meg, hogyan érdemes a következő napokban
            figyelned magadra, és milyen egyszerű gyakorlattal tudod fenntartani
            ezt az állapotot.
          </li>
        </ol>
      </section>

      {/* MEDITÁCIÓK & HANGANYAGOK ------------------------------------------- */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Vezetett meditációk & hanganyagok
        </h2>
        <p className="text-white/75 max-w-3xl mb-6">
          Ezeket a meditációkat kifejezetten idegrendszeri lassulásra, belső
          rendeződésre és energetikai finomhangolásra készítettem. Nyugodt,
          békés térben hallgasd őket, lehetőleg fülhallgatóval.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {/* 1. meditáció */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <h3 className="text-white font-semibold mb-1">
              1. Alvást támogató mindfulness hangolás
            </h3>
            <p className="text-white/75 text-sm mb-3">
              Finom légzésgyakorlatokkal segít kilépni a kapkodásból és
              lenyugodni az alváshoz.
            </p>
            <audio controls className="w-full">
              <source src="/audio/mindfulness-1.mp3" type="audio/mpeg" />
              A böngésződ nem támogatja az audiolejátszást.
            </audio>
          </div>

          {/* 2. meditáció */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <h3 className="text-white font-semibold mb-1">
              2. Rezgésemelő gondolatzaj csillapító hangolás
            </h3>
            <p className="text-white/75 text-sm mb-3">
              A gondolatzaj csillapítására, döntés előtti tisztább rálátásra
              segít ráhangolódni. Energiaszint megtartására is alkalmas.
            </p>
            <audio controls className="w-full">
              <source src="/audio/mindfulness-2.mp3" type="audio/mpeg" />
              A böngésződ nem támogatja az audiolejátszást.
            </audio>
          </div>

          {/* 3. meditáció */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <h3 className="text-white font-semibold mb-1">
              3. Ősi meditációs hangolás
            </h3>
            <p className="text-white/75 text-sm mb-3">
              Kapcsolódás, elengedés, lágyabb önkapcsolat, ősszellemmel való Kapcsolódás.
            </p>
            <audio controls className="w-full">
              <source src="/audio/mindfulness-3.mp3" type="audio/mpeg" />
              A böngésződ nem támogatja az audiolejátszást.
            </audio>
          </div>

          {/* 4. meditáció */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <h3 className="text-white font-semibold mb-1">
              4. 
            </h3>
            <p className="text-white/75 text-sm mb-3">
              
            </p>
            <audio controls className="w-full">
              <source src="/audio/mindfulness-4.mp3" type="audio/mpeg" />
              A böngésződ nem támogatja az audiolejátszást.
            </audio>
          </div>
        </div>

        <p className="text-xs text-white/60 mt-3">
          A hanganyagok nem helyettesítik az orvosi vagy pszichológiai ellátást,
          kiegészítő, jól-létet támogató eszközként szolgálnak.
        </p>
      </section>

      {/* JOGI BLOKK --------------------------------------------------------- */}
      <section className="mb-16">
        <div className="rounded-2xl border border-red-300/30 bg-[#2A1C24]/85 px-5 py-5 text-white/80">
          <h2 className="text-xl font-semibold text-[#F6DFA5] mb-3">
            Fontos szakmai és jogi kiegészítés
          </h2>
          A mindfulness hangolás és a kapcsolódó meditációs hanganyagok nem
          minősülnek pszichoterápiának, pszichológiai kezelésnek vagy orvosi
          szolgáltatásnak. Kiegészítő, jól-létet támogató módszerek, amelyek
          nem helyettesítik a szakorvosi vizsgálatot, diagnózist vagy terápiát.
        </div>
      </section>

      {/* CTA --------------------------------------------------------------- */}
      <section className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Készen állsz a belső csendre és tisztább fókuszra?
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-6">
          Írj néhány mondatot arról, hogyan érzed magad most – ajánlok egy
          első lépést, ami már az első alkalom után érezhető változást hozhat.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] hover:bg-[#B8903F] transition"
          >
            Kapcsolatfelvétel
          </Link>

          <Link
            href="/kerdoiv"
            className="rounded-xl px-5 py-3 border border-white/15 text-white hover:bg-white/5 transition"
          >
            Először kitöltöm a kérdőívet
          </Link>
        </div>
      </section>
    </main>
  );
}