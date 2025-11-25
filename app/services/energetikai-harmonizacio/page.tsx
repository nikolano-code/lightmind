// app/services/energetikai-harmonizacio/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Energetikai harmonizáció | LightMind",
  description:
    "Energetikai harmonizáció Nikolas vezetésével – finomhangolás, belső rendeződés, idegrendszeri megnyugvás, test–elme–lélek szinten.",
  openGraph: {
    title: "Energetikai harmonizáció | LightMind",
    description:
      "Finom, érintés nélküli energetikai hangolás, amely segít visszatérni a belső erődhöz és az egyensúlyodhoz.",
    url: "https://lightmind.hu/services/energetikai-harmonizacio",
    type: "article",
    images: [
      {
        url: "/lightmind-og-main.jpeg",
        width: 1200,
        height: 630,
        alt: "LightMind energetikai harmonizáció",
      },
    ],
  },
};

export default function EnergetikaiHarmonizacioPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 hero animate">
      {/* HERO – fej cím + intro */}
      <header className="mb-14 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Energetikai harmonizáció
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold text-[#D8B36A] mb-4">
          Energetikai harmonizáció
        </h1>

        <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
          Egy finom, mégis határozott folyamat, amely segít visszatérni a saját
          belső erődhöz. Nem diagnosztika, nem orvosi kezelés, hanem belső
          rendeződés: a test–elme–lélek rendszerének finomhangolása, hogy újra
          legyen energiád önmagadért lépni.
        </p>
      </header>

      {/* 1. szekció – Mi az energetikai harmonizáció valójában? */}
      <section className="mb-12 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Mi az energetikai harmonizáció lényege?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
            <p>
              A mindennapok során rengeteg láthatatlan teher rakódik ránk: döntések,
              megfelelési kényszer, elfojtott érzések, állandó pörgés, múltbeli
              minták. Ezek nemcsak a gondolatainkban, hanem az energiarendszerben is
              nyomot hagynak. Olyan, mintha a tested finom áramkörei
              tele lennének apró zajokkal.
            </p>
            <p>
              Az energetikai harmonizáció célja, hogy ezeket a zajokat finoman
              oldjuk, és segítsük visszaállni a rendszeredet egy rendezettebb,
              nyugodtabb alapállapotra. Nem kívülről teszek rá valamit,
              hanem teret nyitok arra, hogy az, ami benned eredetileg is egész,
              újra aktiválódhasson.
            </p>
            <p>
              Amikor a belső ritmusod rendeződik, gyakran tapasztalható, hogy
              könnyebb lesz a légzés, csökken a feszültség, tisztábbá válik a
              gondolkodás, és megjelenik egyfajta belső csend ebből a térből
              tudsz valódi döntéseket hozni.
            </p>
          </div>
        </div>

        {/* oldalsó illusztráció */}
        <div className="max-w-sm mx-auto">
          <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-white/10 bg-[#1B1420] shadow-[0_0_40px_rgba(216,179,106,0.28)]">
            <Image
              src="/services-energetika.jpeg"
              alt="Finom energetikai harmonizáció – fény és nyugalom"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-white/60 text-center">
            A folyamat lényege: finomhangolás, nem erőltetés. Visszatérés a saját
            belső frekvenciádhoz.
          </p>
        </div>
      </section>

      {/* 2. szekció – Hogyan zajlik egy alkalom lépésről lépésre? */}
      <section className="mb-12 grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Hogyan zajlik egy alkalom?
          </h2>
          <ol className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed list-decimal list-inside">
            <li>
              <span className="font-semibold text-white">
                Rövid ráhangolódás, beszélgetés:
              </span>{" "}
              átbeszéljük, mivel érkeztél, mi terhel most leginkább (testi,
              lelki, élethelyzet). Senzibil segitségével és a látásom segitségével kielemzem hol vannak problémák. Nincs ítélkezés, csak figyelem.
            </li>
            <li>
              <span className="font-semibold text-white">
                Légzés és idegrendszeri megnyugtatás:
              </span>{" "}
              néhány egyszerű, finom gyakorlat segít, hogy az idegrendszer
              elkezdjen lefokozatba kapcsolni. Ezzel nyílik meg a tér a
              mélyebb munkára.
            </li>
            <li>
              <span className="font-semibold text-white">
                Energetikai feltérképezés:
              </span>{" "}
              miközben Te pihensz, én érzékelem, hol van túlterheltség, hol
              gyengébb az áramlás, mely területek kérnek elsőként figyelmet
              (fej, szív, gyomor, derék, lábak stb.).
            </li>
            <li>
              <span className="font-semibold text-white">
                Mély harmonizáció:
              </span>{" "}
              finom, érintés nélküli energetikai irányítással segítem, hogy a
              rendszered rendeződjön. Olyan, mintha egy zajos rádiót addig
              hangolnánk, míg kitisztul az adás.
            </li>
            <li>
              <span className="font-semibold text-white">
                Integráció, lezárás:
              </span>{" "}
              visszahozlak egy stabil, földelt állapotba. Megnézzük, mit
              tapasztaltál, és kapsz pár kapaszkodót arra, hogyan tartsd meg
              ezt a minőséget a következő napokban.
            </li>
          </ol>
        </article>

        {/* Mellékrész: gyakorlati infók kártya */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm md:text-base text-white/80">
            <h3 className="text-xl font-semibold text-white mb-2">
              Gyakorlati tudnivalók
            </h3>
            <ul className="space-y-2">
              <li>• Időtartam: körülbelül 50–70 perc</li>
              <li>• Formátum: személyes vagy online (kamera nem kötelező)</li>
              <li>• Öltözet: kényelmes, laza ruha, amiben jól érzed magad</li>
              <li>
                • Nem kell hinned benne, fejben elég, ha nyitott
                vagy a tapasztalatra.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/75">
            <h3 className="text-lg font-semibold text-white mb-1">
              Első alkalom előtt
            </h3>
            <p>
              Érdemes a kezelés napján több vizet inni, és ha lehet, nem
              rohanásból beesni. Minél nyugodtabb a belépő, annál mélyebb lehet
              a folyamat de ha épp káoszból érkezel, az is teljesen rendben
              van. Ott kezdünk, ahol vagy.
            </p>
          </div>
        </aside>
      </section>

      {/* 3. szekció – Milyen érzés lehet? (visszajelzések) */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Mit tapasztalhatsz közben és utána?
        </h2>
        <p className="text-white/75 max-w-3xl mb-5 text-sm md:text-base">
          Minden ember más, ezért nincs kötelező élmény. A
          visszajelzések mégis gyakran hasonló mintázatokat mutatnak:
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm md:text-base text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="mb-2 text-white font-semibold">Lelassulás, csend</p>
            <p>
              „Mintha valaki belül lejjebb tekert volna mindent. Nem pörögtek
              tovább ugyanazok a gondolatok, és végre kaptam egy belső csendet.
              Sokkal jobb a közérzetem.”
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="mb-2 text-white font-semibold">Könnyedség, megkönnyebbülés</p>
            <p>
              „Olyan érzés volt, mintha levettek volna rólam egy láthatatlan
              terhet. A mellkasom, a vállam, a gyomrom könnyebb lett.”
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="mb-2 text-white font-semibold">Tisztább irány</p>
            <p>
              „Nem oldódott meg egy csapásra az életem, de tisztábban láttam,
              merre akarok lépni. Nem bénított le annyira a félelem és a zaj.”
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-white/60 max-w-3xl">
          Fontos: a fenti visszajelzések személyes élmények, nem jelentik azt,
          hogy mindenkinél ugyanígy történik. Nem ígérek gyógyulást vagy
          konkrét eredményt teret nyitok a rendeződésre, a folyamat egy része
          mindig nálad zajlik.
        </p>
      </section>

      {/* 4. szekció – Mit támogat(hat), és mit NEM helyettesít? */}
      <section className="mb-12 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Mit támogathat ez a folyamat?
          </h2>
          <div className="space-y-3 text-sm md:text-base text-white/80 leading-relaxed">
            <p>
              Amikor a belső energiarendszered rendeződik, gyakran az
              életminőség több területén is változás indulhat el. Sok kliens
              számolt be arról, hogy:
            </p>
            <ul className="space-y-1">
              <li>• nyugodtabbnak érzi magát, kevesebb a belső feszültség,</li>
              <li>• jobban alszik, pihentetőbbnek érzi az éjszakákat,</li>
              <li>• kiegyensúlyozottabb a hangulata,</li>
              <li>• könnyebb neki döntéseket hozni,</li>
              <li>• erősebbnek érzi a saját belső tartását, stabilitását.</li>
              <li>• csökkenhetnek bizonyos testi fájdalmak, feszültségek,</li>
              <li>• javulhat az emésztés és az általános közérzet,</li>
              <li>• nőhet az energiaszint, vitalitás.</li>
              <li>• erősödhet a kapcsolat a testtel és az intuícióval.</li>
            </ul>
            <p className="mt-3">
              Vannak, akik arról számolnak be, hogy amikor energetikailag
              rendeződnek,{" "}
              <span className="italic">
                mintha a testük is könnyebben tudna regenerálódni.
              </span>{" "}
              Ezt úgy értem, hogy ha a szervezet nincs állandó tűzoltó
              üzemmódban, több erő marad az öngondoskodásra és a
              természetes helyreállító folyamatokra.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm md:text-base text-white/80">
          <h3 className="text-lg font-semibold text-white mb-2">
            Mit NEM helyettesít?
          </h3>
          <ul className="space-y-2">
            <li>• nem orvosi vizsgálat vagy diagnosztika,</li>
            <li>• nem gyógyszeres kezelés,</li>
            <li>• nem pszichoterápia vagy pszichiátriai ellátás,</li>
            <li>
              • nem ígérek gyógyulást, nem állítom, hogy betegségeket kezelek.
            </li>
          </ul>
          <p className="mt-3 text-xs text-white/65">
            Amit adni tudok: belső rendeződés, finomhangolás, idegrendszeri
            megnyugvás és energetikai támogatás. Mindez jól kiegészítheti az
            orvosi ellátást vagy más segítő folyamatokat, de nem helyettesíti
            őket.
          </p>
        </div>
      </section>

      {/* 5. szekció – Kinek ajánlott? */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Mikor érdemes energetikai harmonizációt választanod?
        </h2>
        <p className="text-white/75 max-w-3xl mb-4 text-sm md:text-base">
          Nem kell &quot;összetörtnek&quot; lenned ahhoz, hogy jelentkezz. Ez a
          folyamat azoknak is szól, akik &quot;csak&quot; jobban szeretnének
          lenni, tisztábban szeretnének látni, vagy érzik, hogy &quot;ennél
          többre lennének képesek&quot;. Akik le akarnak csak tisztulni.
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-sm md:text-base text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="font-semibold text-white mb-1">Ha fáradt vagy belül</p>
            <p>
              Hosszú ideje érzed, hogy kimerültél, mintha elfogyna a
              tartalékod, de kifelé még mindig tartanod kell magad.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="font-semibold text-white mb-1">
              Ha túl sok minden történt, és valakivel ítélet nélkül, bizalmasan beszélgetnél a kezelés közben.
            </p>
            <p>
              Válás, veszteség, változás, új élethelyzet érzed, hogy jó lenne
              rendezni, ami benned maradt, mielőtt tovább viszed.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <p className="font-semibold text-white mb-1">
              Ha keresed a saját erődet
            </p>
            <p>
              Nem akarsz már kifelé megfelelni, inkább belülről szeretnél
              stabil lenni, és a saját utadat járni.
            </p>
          </div>
        </div>
      </section>

      {/* 6. szekció – Hogyan dolgozom én, személyesen? */}
      <section className="mb-12 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 to-[#1B1520]/90 p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Mitől más a LightMind-folyamat?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
            <p>
              Nem egy átlagos technikát alkalmazok, hanem egy olyan módszert,
              amelyet éveken át tapasztalatból, tanulásból és belső vezetésből
              építettem fel. Ebben keveredik a finom energetikai érzékelés, a
              földelt gondolkodás és a gyakorlati életvezetési szemlélet.
            </p>
            <p>
              Számomra fontos, hogy{" "}
              <span className="font-semibold text-white">
                teljes emberként lássalak
              </span>
               nem &quot;problémaként&quot;, nem &quot;esetként&quot;, hanem
              valakiként, akinek története, mélysége, belső világa van. Ezt a
              teret tartom végig a folyamat alatt.
            </p>
            <p>
              A cél nem az, hogy &quot;megjavítsalak&quot;, hanem az, hogy
              emlékezni kezdj arra, ki vagy valójában, és hogy belül már most is
              ott van minden, amire tudsz építeni.
            </p>
          </div>
        </article>

        {/* portré blokk */}
        <div className="max-w-xs mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#1B1420] shadow-[0_0_30px_rgba(216,179,106,0.28)]">
            <Image
              src="/nikolas-portrait.jpeg"
              alt="Nikolas – LightMind energetikai harmonizáció"
              width={480}
              height={640}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
            <p className="text-white font-semibold">Nikolas</p>
            <p className="text-white/70">
              Spirituális kísérő, energetikai harmonizáció és életmód támogatás.
            </p>
          </div>
        </div>
      </section>

      {/* 7. szekció – Gyakori kérdések */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Gyakori kérdések
        </h2>
        <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <p className="font-semibold text-white mb-1">
              &quot;Mi van, ha nem hiszek az energiákban? Akkor is működhet?&quot;
            </p>
            <p>
              Nem szükséges &quot;elhinni&quot; semmit. Ez nem hitrendszerhez
              kötött folyamat. Elég, ha nyitott vagy egy olyan élményre, amely
              túlmutat a megszokott gondolkodáson. Az, hogy mit tapasztalsz,
              mindig a saját rendszered válasza lesz.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <p className="font-semibold text-white mb-1">
              &quot;Lehet-e rosszabbul lenni tőle?&quot;
            </p>
            <p>
              A folyamat célja a rendeződés. Néha a lazulás, kiengedés hozhat
              magával érzelmi feloldódást például sírást, megkönnyebbülést,
              felismeréseket. Ezek nem &quot;rossz&quot; jelek, hanem annak
              nyomai, hogy a rendszered dolgozik. Mindvégig kísérlek, és
              biztonságos térben tartjuk ezt.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <p className="font-semibold text-white mb-1">
              &quot;Hányszor érdemes jönni?&quot;
            </p>
            <p>
              Ez teljesen egyéni. Van, akinek már egy alkalom is nagy lendületet
              ad, másoknak jót tesz egy folyamat néhány alkalom egymás után,
              vagy időszakosan visszatérve. Az ütemet mindig közösen hangoljuk,
              nincs kötelező &quot;csomag&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* CTA – záró blokk */}
      <section className="mt-6 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/80 to-[#1B1520]/90 px-6 py-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            Készen állsz finoman, de határozottan visszatérni önmagadhoz?
          </h3>
          <p className="max-w-2xl text-white/75 text-sm md:text-base">
            Ha érzed, hogy itt az ideje letenni a felesleges terheket, és
            visszakapni a belső erődet, szeretettel várlak. Írj pár sort
            magadról, és megnézzük, hogyan tudunk a legjobban kapcsolódni.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
            >
              Időpontot kérek
            </Link>
            <Link
              href="/services"
              className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
            >
              Vissza a szolgáltatásokhoz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}