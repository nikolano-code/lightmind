import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-white/60 text-sm space-y-4">

      <div className="flex justify-center gap-6">
        <Link href="/legal" className="hover:text-white transition">
          Jogi nyilatkozat
        </Link>

        {/* Ha később lesz külön oldal (ÁSZF, Adatvédelem), ide jönnek */}
        {/* <Link href="/privacy" className="hover:text-white transition">Adatvédelem</Link> */}
        {/* <Link href="/terms" className="hover:text-white transition">ÁSZF</Link> */}
      </div>

      <p className="text-white/40">
        © {new Date().getFullYear()} LightMind — minden jog fenntartva.
      </p>

    </footer>
  );
}
