// app/kerdoiv/page.tsx
export default function KerdoivPage() {
  return (
    <main className="relative min-h-screen bg-[#291C29] text-[#F3EFE9] px-6">
      <section className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#D8B36A] mb-4 text-center">
          LightMind – Állapotfelmérő kérdőív
        </h1>

        <p className="text-[#F3EFE9]/80 mb-8 text-center">
          Ez a rövid kérdőív segít felmérni a jelenlegi energetikai, testi és lelki
          állapotodat. A válaszaid alapján személyre szabott útmutatást kapsz, hogy
          milyen folyamat lenne számodra a legjobb első lépés.
        </p>

        {/* KÉRDŐÍV – GOOGLE FORMS IFRAME */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#2A1F2C] to-[#1B1520] px-4 py-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSekzR8KaioBfKkkzLbY5CUVRUgb-vD8T9q2ftJo1HwhEhDx1Q/viewform?embedded=true"
            width="100%"
            height="1400"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Betöltés…
          </iframe>
        </div>

        {/* Vissza a kapcsolathoz */}
        <section className="mt-10 text-center">
          <p className="text-white/70 mb-3 text-sm md:text-base">
            Ha inkább közvetlenül írnál, azt is megteheted:
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
          >
            Vissza a kapcsolat oldalra
          </a>
        </section>
      </section>
    </main>
  );
}