import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 py-10 border-t border-white/10 text-center text-white/70 text-sm">
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">

        <Link href="/legal" className="text-white/60 hover:text-white transition">
          Jogi nyilatkozat
        </Link>

        <Link href="/aszf" className="text-white/60 hover:text-white transition">
          ÁSZF
        </Link>

        <Link href="/privacy" className="text-white/60 hover:text-white transition">
          Adatvédelem
        </Link>

        

      </div>

      <p className="text-white/40">
        © {new Date().getFullYear()} LightMind – minden jog fenntartva.
      </p>
    </footer>
  );
}
