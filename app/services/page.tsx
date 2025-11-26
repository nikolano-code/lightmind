// app/services/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 hero animate">
      {/* HERO – logó + bevezető */}
      <header className="mb-14 text-center">
        <div className="mx-auto mb-6 relative w-28 h-28 md:w-32 md:h-32">
          {/* aura */}
          <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_50%_30%,rgba(216,179,106,0.35),transparent_70%)] pointer-events-none" />
          <div className="relative w-full h-full rounded-full bg-[#1B1420] ring-1 ring-[#D8B36A]/50 shadow-[0_0_40px_rgba(216,179,106,0.45)] overflow-hidden">
            <Image
              src="/lightmind-logo.jpeg"
              alt="LightMind embléma"
              fill
              className="object-cover object-center"
              sizes="120px"
              priority
            />
          </div>
        </div>

        <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-2">
          LightMind • Szolgáltatások
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A]">
          Szolgáltatások
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed">
          A LightMind térben a test–elme–lélek egységét finoman, mégis határozottan
          hangoljuk újra. Válaszd ki azt a folyamatot, ami most a legjobban hív
          vagy írj nekem, és segítek az első lépés kiválasztásában.
        </p>
      </header>

      {/* Fő szolgáltatás-kártyák – KÉPEKKEL */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">

        {/* ENERGETIKAI HARMONIZÁCIÓ */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(500px_500px_at_0%_0%,rgba(216,179,106,0.25),transparent_70%)]" />
          <div className="relative">

            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-energetika.jpeg"
                alt="Energetikai harmonizáció – fény, energia, nyugalom"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Energetikai harmonizáció
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Finom, érintés nélküli hangolás, amely segít oldani az energiamegakadást,
              tisztítja a teret és támogatja az öngyógyító folyamatokat.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/services/energetikai-harmonizacio"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Részletek
              </Link>
            </div>
          </div>
        </article>

        {/* GYÓGYNÖVÉNYEK + KIEGÉSZÍTŐK */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(500px_500px_at_100%_0%,rgba(41,211,196,0.23),transparent_70%)]" />
          <div className="relative">

            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-herbs.jpeg"
                alt="Gyógynövény és kiegészítő tanácsadás"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Gyógynövény- és kiegészítő tanácsadás
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Személyre szabott növényi támogatás túlzások nélkül, józan rendszerben.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/services/gyogynoveny-tanacsadas"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Részletek
              </Link>
            </div>
          </div>
        </article>

        {/* MINDFULNESS HANGOLÁS */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(480px_480px_at_0%_100%,rgba(173,127,255,0.35),transparent_70%)]" />
          <div className="relative">

            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-mindfulness.jpeg"
                alt="Mindfulness és légzés"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Mindfulness hangolás
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Tudatos jelenlét, légzés és energetikai támogatás mély csendhez és tisztasághoz.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/services/mindfulness-hangolas"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Részletek
              </Link>
            </div>
          </div>
        </article>

        {/* ÉLETMÓD & ÉTREND */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/70 via-[#241B27]/80 to-[#1B1520]/90 p-6 md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(480px_480px_at_100%_100%,rgba(248,214,120,0.25),transparent_70%)]" />
          <div className="relative">

            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/services-lifestyle.jpeg"
                alt="Életmód mentorálás"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Étrend & életmód mentorálás
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Fenntartható, tiszta rendszer: ritmus, alvás, étkezés, mozgás – extrém diéták nélkül.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/services/eletmod-mentoralas"
                className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
              >
                Részletek
              </Link>
            </div>
          </div>
        </article>

      </section>

      {/* CTA */}
      <section className="mt-14 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#2A1F2C]/80 to-[#1B1520]/90 px-6 py-8">
          <h3 className="text-2xl font-semibold text-white">
            Kezdjük el finoman, mégis határozottan.
          </h3>
          <p className="max-w-2xl text-white/75">
            Írj pár sort a jelenlegi helyzetedről, és javaslok egy első, rád szabott lépést.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="rounded-xl px-5 py-3 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
            >
              Időpont egyeztetés
            </Link>
            <Link
              href="/about"
              className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
            >
              Ismerj meg jobban
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}