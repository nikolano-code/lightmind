import Link from "next/link";

const Card = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/70">{desc}</p>
  </div>
);

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold text-[#D8B36A] mb-8">
        Szolgáltatások
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="Energetikai tisztítás & egyensúly"
          desc="Finom energetikai munka a blokkok oldására, megkönnyebbülés és fókusz visszanyerése."
        />
        <Card
          title="Spirituális konzultáció"
          desc="Kérdés-válasz, iránykijelölés, döntéstámogatás – gyakorlati, földelt szemlélettel."
        />
        <Card
          title="Étkezési & kiegészítő tanácsadás"
          desc="Személyre szabott, tartható étrendi irány + kiegészítők józan, célzott használata."
        />
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-block rounded-xl px-6 py-3 font-medium bg-[#D8B36A] text-[#291C29] hover:bg-[#B8903F] transition"
        >
          Időpontot kérek
        </Link>
      </div>
    </main>
  );
}
