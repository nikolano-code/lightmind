"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import "../app/globals.css";


// 👇 ÚJ: Google fontok
import { Inter, Playfair_Display } from "next/font/google";
// 👇 ÚJ: betűtípusok inicializálása (latin + latin-ext a magyar ékezetekhez)
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"], // normál, félkövér
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"], // címsorokhoz elegánsabb
  variable: "--font-playfair",
  display: "swap",
});
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Ha pontos egyezést szeretnél (/services csak ott aktív):
  // const isActive = (href: string) => pathname === href;

  // Ha alútvonalaknál is legyen aktív (pl. /services/valami):
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkCls = (href: string) =>
    `transition ${
      isActive(href) ? "text-[#D8B36A]" : "text-white/90 hover:text-[#D8B36A]"
    }`;

  const Nav = () => (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
      <Link href="/" className={linkCls("/")}>Főoldal</Link>
      <Link href="/about" className={linkCls("/about")}>Rólam</Link>
      <Link href="/services" className={linkCls("/services")}>Szolgáltatások</Link>
      <Link href="/contact" className={linkCls("/contact")}>Kapcsolat</Link>
      <Link
        href="/contact"
        className="md:ml-2 rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] hover:bg-[#B8903F] transition"
      >
        Időpontot kérek
      </Link>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#291C29]/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-lg">
          LightMind
        </Link>

        {/* Desktop */}
        <div className="hidden md:block">
          <Nav />
        </div>

        {/* Mobil hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15"
          aria-label="Menu"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* Mobil menü lenyíló */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#291C29]/95">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <Nav />
          </div>
        </div>
      )}
    </header>
  );
}
