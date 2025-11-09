import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Kapcsolat | LightMind",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#291C29] text-[#F3EFE9] px-6">
      <section className="relative z-10 mx-auto max-w-2xl px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#D0B36A] mb-6">
          Kapcsolat
        </h1>
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
