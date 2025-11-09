export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A] mb-6">Rólam</h1>

      <p className="text-white/80 leading-relaxed mb-6">
        Spirituális tanácsadóként és energetikai segítőként abban támogatok,
        hogy a test–elme–lélek rendszerek visszataláljanak az egyensúlyhoz.
        Munkám alapja a tiszta jelenlét, a finom energiák érzékelése és
        a gyakorlati, tartható életmódbeli útmutatás.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Látás & intuíció</h2>
          <p className="text-white/70">
            Finomhangolt figyelemmel dolgozom: energetikai blokkok, ismétlődő
            minták és érzelmi csomók oldása.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Tudatos étkezés</h2>
          <p className="text-white/70">
            Testet támogató, egyszerű és követhető étrendi irányok – kiegészítők
            józan, személyre szabott használatával.
          </p>
        </div>
      </div>
    </main>
  );
}
