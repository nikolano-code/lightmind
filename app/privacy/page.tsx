// app/privacy/page.tsx

export default function PrivacyPage() {
  const lastUpdated = "2025. 11. 13.";

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white/80 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#D8B36A] mb-8 text-center">
        Adatvédelmi tájékoztató
      </h1>

      <p className="mb-6 text-sm text-white/60 italic">
        Ez az egyszerűsített adatvédelmi tájékoztató a LightMind weboldal jelenlegi
        állapotára vonatkozik. A weboldalt magánszemélyként üzemeltetem, jelenleg
        nincs webshop, online fizetés vagy automatizált marketingrendszer. A
        tájékoztató később bővülhet, ha új funkciók (webshop, előfizetés, hírlevél)
        kerülnek bevezetésre.
      </p>

      {/* 1. Adatkezelő */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          1. Adatkezelő adatai
        </h2>
        <p className="mb-2">
          <strong>Adatkezelő:</strong> Nikolas (magánszemély)
        </p>
        <p className="mb-2">
          <strong>Weboldal:</strong> LightMind – spirituális és önismereti tartalmak
        </p>
        <p className="mb-2">
          <strong>E-mail:</strong> nikolano@icloud.com
        </p>
        <p>
          A weboldal elsődleges célja információátadás és kapcsolatfelvétel
          lehetőségének biztosítása.
        </p>
      </section>

      {/* 2. Milyen adatokat kezelek? */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          2. Milyen adatokat kezelek?
        </h2>
        <p className="mb-4">
          A LightMind weboldalon jelenleg csak a kapcsolatfelvételhez szükséges
          minimális adatokat kezelem, amelyeket önként adsz meg:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Név</li>
          <li>E-mail cím</li>
          <li>Az üzenet tartalma</li>
        </ul>
        <p className="mt-4">
          Ezeket az adatokat kizárólag arra használom, hogy válaszoljak a
          megkeresésedre, és kommunikáljak veled. Nem kerülnek automatikusan
          hírlevélre vagy marketinglistára.
        </p>
      </section>

      {/* 3. Kapcsolatfelvételi űrlap / Formspree */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          3. Kapcsolatfelvételi űrlap (Formspree)
        </h2>
        <p className="mb-4">
          A weboldalon található kapcsolatfelvételi űrlap technikai megvalósítása
          az <strong>https://formspree.io</strong> szolgáltatáson keresztül
          történik. Amikor az űrlapon keresztül üzensz, az adataid a Formspree
          rendszerébe kerülnek továbbításra, amely ezeket e-mail formájában
          továbbítja számomra.
        </p>
        <p>
          A Formspree a saját adatvédelmi szabályzata szerint kezeli az adatokat.
          Az űrlap használatával elfogadod a Formspree szolgáltatás igénybevételét.
        </p>
      </section>

      {/* 4. Adatkezelés célja és időtartama */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          4. Az adatkezelés célja és időtartama
        </h2>
        <p className="mb-4">
          Az adatkezelés célja kizárólag:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>a kapcsolatfelvétel és kommunikáció,</li>
          <li>kérdések megválaszolása,</li>
          <li>egy esetleges további együttműködés előkészítése (pl. konzultáció).</li>
        </ul>
        <p className="mt-4">
          Az e-mailes megkereséseket csak addig őrzöm meg, ameddig a kommunikáció
          szükséges. Kérésedre az e-mailjeidet törlöm.
        </p>
      </section>

      {/* 5. Hozzáférés, módosítás, törlés */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          5. Milyen jogaid vannak az adataiddal kapcsolatban?
        </h2>
        <p className="mb-4">
          Személyes adataiddal kapcsolatban az alábbi jogok illetnek meg:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>tájékoztatást kérhetsz arról, milyen adatokat kezelek rólad,</li>
          <li>kérheted adataid helyesbítését, ha pontatlanok,</li>
          <li>kérheted adataid törlését, ha már nincs szükség rájuk,</li>
          <li>kérheted az adatkezelés korlátozását bizonyos esetekben.</li>
        </ul>
        <p className="mt-4">
          Ezeket a jogaidat az e-mail címemre küldött üzenetben tudod gyakorolni.
        </p>
      </section>

      {/* 6. Cookie-k (jelenlegi állapot) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          6. Cookie-k (sütik)
        </h2>
        <p>
          A LightMind jelenlegi állapotában nem használ egyedi követő vagy
          marketing célú cookie-kat. Amennyiben a jövőben statisztikai vagy
          analitikai eszközök (pl. Google Analytics) kerülnek bevezetésre, a
          cookie-kezelésről külön, részletes tájékoztatót fogok közzétenni.
        </p>
      </section>

      {/* 7. Változások */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          7. Az adatvédelmi tájékoztató módosítása
        </h2>
        <p>
          Fenntartom a jogot, hogy a jelen adatvédelmi tájékoztatót a jövőben,
          különösen új funkciók (webshop, online fizetés, hírlevél, tagság)
          bevezetése esetén módosítsam vagy kibővítsem. Az aktuális,
          hatályos verzió mindig ezen az oldalon érhető el.
        </p>
      </section>

      <p className="mt-10 text-center text-white/60 text-sm">
        Utolsó frissítés: {lastUpdated}
      </p>
    </main>
  );
}