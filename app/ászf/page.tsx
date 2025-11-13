// app/aszf/page.tsx

export default function AszfPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white/80 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#D8B36A] mb-8 text-center">
        Általános Szerződési Feltételek (ÁSZF)
      </h1>

      <p className="mb-6 text-sm text-white/60 italic">
        Jelen ÁSZF egy magánszemély által működtetett, fejlesztés alatt álló
        weboldalra vonatkozó, tájékoztató jellegű dokumentum. Nem minősül
        hivatalos jogi tanácsadásnak. A később bevezetésre kerülő fizetős
        szolgáltatások, webshop vagy előfizetés esetén az ÁSZF kiegészítésre,
        módosításra kerül.
      </p>

      {/* 1. Szolgáltató és a weboldal jellege */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          1. A szolgáltató és a weboldal jellege
        </h2>
        <p className="mb-4">
          A <strong>LightMind</strong> weboldal egy személyes, spirituális és
          önismereti témákkal foglalkozó online felület, amelyet magánszemélyként
          üzemeltetek. Jelenleg az oldal elsődleges célja a tartalommegosztás,
          információátadás és a kapcsolatfelvétel lehetőségének biztosítása.
        </p>
        <p>
          A weboldalon jelen pillanatban <strong>nem működik webshop</strong>,{" "}
          <strong>nem történik online fizetés</strong>, és{" "}
          <strong>nem jön létre automatikus szerződés</strong> a
          felhasználó és köztem digitális felületen keresztül. Amennyiben a
          jövőben fizetős szolgáltatást, webshopot vagy előfizetéses rendszert
          vezetek be, az ÁSZF ennek megfelelően frissítésre kerül.
        </p>
      </section>

      {/* 2. A szolgáltatások jellege */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          2. A szolgáltatások jellege
        </h2>
        <p className="mb-4">
          A LightMind keretében bemutatott tartalmak spirituális, energetikai
          és önismereti megközelítést tükröznek. Ide tartozhat többek között:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>spirituális szemléletű írások, gondolatok,</li>
          <li>önismereti, életmódbeli témák,</li>
          <li>energetikai egyensúlyról szóló leírások,</li>
          <li>kapcsolatfelvételi lehetőség egyéni konzultációhoz.</li>
        </ul>
        <p className="mt-4">
          A weboldalon megjelenő tartalmak{" "}
          <strong>nem minősülnek orvosi, pszichológiai, jogi vagy pénzügyi</strong>{" "}
          tanácsadásnak, és nem helyettesítik az ilyen jellegű szakmai ellátást.
        </p>
      </section>

      {/* 3. A weboldal használata */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          3. A weboldal használata
        </h2>
        <p className="mb-4">
          A LightMind weboldalt a felhasználó saját felelősségére használja. A
          tartalmak befogadása önkéntes, a megfogalmazott gondolatok, nézőpontok
          és gyakorlatok alkalmazása mindig a felhasználó szabad döntése.
        </p>
        <p>
          A weboldal használata során a felhasználó köteles tartózkodni minden
          olyan magatartástól, amely jogszabályba ütközik, másokat sért, vagy
          a weboldal működését szándékosan akadályozza.
        </p>
      </section>

      {/* 4. Kapcsolatfelvétel és kommunikáció */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          4. Kapcsolatfelvétel és kommunikáció
        </h2>
        <p className="mb-4">
          A weboldalon keresztül elérhető kapcsolatfelvételi űrlap, illetve
          e-mail cím használata során megadott adatok (név, e-mail cím, üzenet)
          kizárólag a kommunikációra szolgálnak. A megkeresésekre igyekszem
          ésszerű időn belül, a lehetőségeimhez mérten válaszolni, azonban
          erre jogi értelemben nem vállalok garantált határidőt.
        </p>
        <p>
          A kapcsolatfelvétel önmagában{" "}
          <strong>nem hoz létre szerződéses jogviszonyt</strong> a
          felhasználó és köztem. Bármilyen későbbi együttműködés egyedi egyeztetés
          eredménye.
        </p>
      </section>

      {/* 5. Felelősség */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          5. Felelősségvállalás és felelősségkorlátozás
        </h2>
        <p className="mb-4">
          A weboldalon található információk, leírások, önismereti gondolatok
          és energetikai szemléletű megközelítések{" "}
          <strong>nem helyettesítik</strong> az orvosi, pszichológiai vagy
          más szakmai tanácsadást. Egészségügyi probléma, krónikus betegség,
          súlyos lelki nehézség esetén minden esetben javasolt szakorvos,
          pszichológus vagy megfelelő szakember felkeresése.
        </p>
        <p>
          A felhasználó tudomásul veszi, hogy a weboldalon található tartalmak
          alkalmazása saját felelősségére történik, és az üzemeltető
          semmilyen közvetlen vagy közvetett kárért nem vállal felelősséget,
          amely a tartalom félreértelmezéséből vagy nem rendeltetésszerű
          használatából fakad.
        </p>
      </section>

      {/* 6. Szerzői jog */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          6. Szerzői jogok
        </h2>
        <p className="mb-4">
          A LightMind név, a hozzá kapcsolódó logó, szövegek, leírások,
          struktúra és egyéb tartalmi elemek szerzői jogi védelem alatt állnak.
        </p>
        <p>
          A weboldal tartalmainak másolása, terjesztése, módosítása vagy
          üzleti célú felhasználása az üzemeltető előzetes írásbeli engedélye
          nélkül nem engedélyezett.
        </p>
      </section>

      {/* 7. Változtatás joga */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          7. Az ÁSZF módosítása
        </h2>
        <p>
          Fenntartom a jogot, hogy jelen ÁSZF-et a jövőben – különösen új
          funkciók (pl. webshop, online fizetés, előfizetés) bevezetése esetén –
          egyoldalúan módosítsam vagy bővítsem. Az aktuális, hatályos verzió
          mindig ezen az oldalon érhető el.
        </p>
      </section>

      <p className="mt-10 text-center text-white/60 text-sm">
        Utolsó frissítés: {new Date().toLocaleDateString("hu-HU")}
      </p>
    </main>
  );
}