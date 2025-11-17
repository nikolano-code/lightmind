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

        <div className="max-w-xl mx-auto mb-16">
          <ContactForm />
        </div>

        {/* MailerLite hírlevél blokk */}
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-3">
            Csatlakozz a LightMind hírlevélhez
          </h2>

          <p className="text-center text-[#F3EFE9]/80 mb-8">
            Időnként küldök üzeneteket útmutatást, gyakorlatokat
            és friss híreket. 
          </p>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#2A1F2C] to-[#1B1520] px-6 py-8">
            <div className="ml-embedded" data-form="wWqAni"></div>
          </div>
        </div>
      </section>
    </main>
  );
}