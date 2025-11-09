import Image from "next/image";
import ContactForm from "../components/ContactForm"; // <-- import KÍVÜL, a tetején

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#291C29] text-[#F3EFE9] px-6">
      {/* háttér fény */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(41,211,196,0.20),transparent_60%)] pointer-events-none" />

      {/* HERO */}
      <section className="relative z-10 text-center max-w-3xl pt-24 pb-12">
        {/* LOGÓ – kör alakú maszkolás + gyűrű + fényglow */}
        <div className="mx-auto mb-8 relative">
          {/* puha aura */}
          <div className="absolute inset-0 translate-y-6 blur-3xl opacity-50 pointer-events-none
                          bg-[radial-gradient(120px_60px_at_50%_20%,rgba(41,211,196,0.35),transparent_70%)]" />
          {/* kör-keret */}
          <div className="relative mx-auto w-44 h-44 md:w-56 md:h-56 rounded-full ring-1 ring-[#D8B36A]/40 shadow-[0_0_60px_rgba(41,211,196,0.25)]
                          bg-[#1D141D] overflow-hidden">
            <Image
              src="/lightmind-logo.jpeg"
              alt="LightMind logo"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 176px, 224px"
            />
          </div>
        </div>

        {/* Címsor */}
        <h1 className="font-semibold text-5xl md:text-6xl leading-tight
                       bg-gradient-to-r from-[#D8B36A] via-[#F3EFE9] to-[#29D3C4]
                       bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
          LightMind
        </h1>

        <p className="mt-4 text-lg md:text-xl text-[#F3EFE9]/80">
          Spirituális útmutatás, energetikai egyensúly és tudatos étkezés kifinomult, mégis földelt rendszerekben.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="/contact"
            className="rounded-xl px-6 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
          >
            Időpont egyeztetés
          </a>
          <a
            href="/services"
            className="rounded-xl px-6 py-3 border border-white/15 hover:border-[#D8B36A] hover:text-[#D8B36A] transition"
          >
            Tudj meg többet
          </a>
        </div>
      </section>

      {/* Rólam */}
      <section id="about" className="relative z-10 mx-auto max-w-3xl px-6 mt-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#D8B36A] mb-3">Rólam</h2>
        <p className="text-[#F3EFE9]/80">
          Spirituális tanácsadóként és energetikai segítőként abban támogatok,
          hogy a test–elme–lélek rendszered visszataláljon az egyensúlyba.
          A munkám alapja a tiszta jelenlét, a finom energiahangolás és a
          gyakorlati, tartható étkezési útmutatás.
        </p>
      </section>

      {/* Kapcsolat – AJAX-os űrlap komponenssel */}
      <section id="contact" className="relative z-10 mx-auto max-w-2xl px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#D0B36A] mb-6">Kapcsolat</h2>
        <p className="text-[#F3EFE9]/80 mb-8">
          Kérdésed van, vagy szeretnél időpontot egyeztetni? Töltsd ki az alábbi űrlapot:
        </p>

        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
