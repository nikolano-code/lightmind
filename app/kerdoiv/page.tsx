// app/kerdoiv/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Állapotfelmérő kérdőív | LightMind",
};

export default function KerdoivPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 hero animate">
      {/* Fejléc */}
      <header className="text-center mb-10">
        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Állapotfelmérés
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-[#D8B36A] mb-4">
          Állapotfelmérő kérdőív
        </h1>
        <p className="text-[#F3EFE9]/80 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
          Ez a rövid kérdőív segít felmérni a jelenlegi energetikai, testi és lelki
          állapotodat. A válaszaid alapján személyre szabott, e-mailben érkező
          visszajelzést és útmutatást kapsz a következő lépésedhez.
        </p>
      </header>

      {/* Iframe blokk */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#2A1F2C] to-[#1B1520] px-3 py-4 md:px-6 md:py-6">
        <div className="rounded-2xl overflow-hidden bg-[#1B1520]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSekzR8KaioBfKkkzLbY5CUVRUgb-vD8T9q2ftJo1HwhEhDx1Q/viewform?embedded=true"
            width="100%"
            height="1800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            loading="lazy"
            title="LightMind – Állapotfelmérő kérdőív"
          >
            Betöltés…
          </iframe>
        </div>
        <p className="mt-4 text-center text-xs md:text-sm text-white/60">
          A kérdőív kitöltése nem kötelez semmire. A válaszaid bizalmasan kerülnek
          kezelésre, kizárólag személyre szabott visszajelzéshez használom.
        </p>
      </section>

      {/* Vissza a kapcsolathoz */}
      <section className="mt-10 text-center">
        <p className="text-white/70 mb-3 text-sm md:text-base">
          Ha inkább közvetlenül írnál, azt is megteheted:
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
        >
          Ugrás a kapcsolat oldalra
        </Link>
      </section>
    </main>
  );
}