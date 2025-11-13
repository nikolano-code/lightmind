// app/legal/page.tsx
export default function LegalPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
        Jogi információk & Adatvédelem
      </h1>

      {/* Impresszum */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          1. Impresszum (magánszemély)
        </h2>
        <p className="text-white/80 leading-relaxed">
          A LightMind weboldal egy személyes, spirituális témájú online felület,
          amelyet magánszemélyként üzemeltetek. A weboldal fejlesztés alatt áll,
          és jelenleg nem minősül kereskedelmi tevékenységnek, vállalkozásnak
          vagy üzleti szolgáltatásnak.
        </p>

        <div className="mt-4 space-y-2 text-white/70">
          <p><strong>Üzemeltető:</strong> Nikolas (magánszemély)</p>
          <p><strong>E-mail:</strong> info@lightmind.hu (állítsd át a sajátodra)</p>
          <p>
            <strong>Tevékenység:</strong> személyes blog, spirituális tartalmak, 
            önismereti írások és tájékoztatás.
          </p>
          <p>
            A weboldal célja kizárólag információs, önismereti, spirituális
            jellegű tartalmak megosztása.
          </p>
        </div>
      </section>

      {/* Adatvédelem */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          2. Adatkezelési tájékoztató (egyszerűsített)
        </h2>

        <p className="text-white/80 mb-4">
          A weboldalon található kapcsolatfelvételi űrlap (Formspree) használata
          során kizárólag azokat az adatokat kezelem, amelyeket önként megadsz:
        </p>

        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Név</li>
          <li>E-mail cím</li>
          <li>Az üzenet tartalma</li>
        </ul>

        <p className="text-white/80 mt-4">
          Az adatokat kizárólag kapcsolatfelvétel céljából használom fel, harmadik
          félnek nem adom át, és nem kerülnek marketingrendszerbe vagy hírlevélbe
          automatikusan.
        </p>

        <h3 className="text-white font-semibold mt-6">
          2.1 Külső szolgáltató: Formspree
        </h3>
        <p className="text-white/70">
          A kapcsolatfelvétel az <strong>https://formspree.io</strong> rendszerén
          keresztül történik. A Formspree a saját adatvédelmi szabályzata szerint
          kezeli az adatokat.  
          A szolgáltatás igénybevételével elfogadod a Formspree feltételeit.
        </p>

        <h3 className="text-white font-semibold mt-6">
          2.2 Adatok megőrzése
        </h3>
        <p className="text-white/70">
          Az üzeneteket csak addig őrzöm meg, ameddig a kommunikáció szükséges.
          Kérésre bármikor törlöm.
        </p>

        <h3 className="text-white font-semibold mt-6">
          2.3 Érintetti jogok
        </h3>
        <p className="text-white/70">
          Jogosult vagy kérni az általad megadott adatok törlését vagy
          módosítását bármikor az e-mail címen keresztül.
        </p>
      </section>

      {/* Diszklémer */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          3. Felelősségkizárás
        </h2>
        <p className="text-white/80 leading-relaxed">
          A LightMind oldalon található tartalmak spirituális, önismereti és 
          energetikai jellegű információk. 
          Nem helyettesítik:
        </p>

        <ul className="list-disc list-inside text-white/70 space-y-1 mt-2">
          <li>az orvosi diagnózist vagy kezelést,</li>
          <li>a pszichológiai tanácsadást,</li>
          <li>egészségügyi vizsgálatot,</li>
          <li>szakmai terápiákat.</li>
        </ul>

        <p className="text-white/80 mt-4">
          A weboldal tartalma nem tekinthető szakmai tanácsadásnak.  
          Minden információ tájékoztató jellegű.  
          A döntésekért a felhasználó felel.
        </p>
      </section>

      {/* Jövőbeli funkciók */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          4. Későbbi frissítések
        </h2>
        <p className="text-white/80">
          A weboldal később kiegészülhet:
        </p>

        <ul className="list-disc list-inside text-white/70 space-y-1 mt-2">
          <li>webshop / szolgáltatás értékesítés,</li>
          <li>online fizetés,</li>
          <li>fizetős tartalmak,</li>
          <li>hírlevél rendszer.</li>
        </ul>

        <p className="text-white/80 mt-4">
          Amint ezek aktiválódnak, a jogi és adatvédelmi tájékoztatót bővíteni fogom.
        </p>
      </section>

      {/* Footer link */}
      <div className="text-center mt-10 text-white/40 text-sm">
        © {new Date().getFullYear()} LightMind – minden jog fenntartva.
      </div>
    </main>
  );
}