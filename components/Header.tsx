"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Aktív link logika
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkCls = (href: string) =>
    `transition ${
      isActive(href) ? "text-[#D8B36A]" : "text-white/90 hover:text-[#D8B36A]"
    }`;

  // ---- DESKTOP MENÜ ----
  const NavDesktop = () => (
    <nav className="hidden md:flex flex-row gap-6 items-center">
      <Link href="/" className={linkCls("/")}>
        Főoldal
      </Link>

      <Link href="/about" className={linkCls("/about")}>
        Rólam
      </Link>

      {/* SZOLGÁLTATÁSOK DROPDOWN */}
      <div className="relative group">
        <button
          className={`transition flex items-center gap-1 ${
            pathname.startsWith("/services")
              ? "text-[#D8B36A]"
              : "text-white/90 hover:text-[#D8B36A]"
          }`}
        >
          Szolgáltatások
          <span className="text-xs mt-[1px]">▾</span>
        </button>

        {/* Dropdown box */}
        <div
          className="
            pointer-events-none opacity-0 translate-y-1
            group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0
            absolute left-0 mt-3 w-64 rounded-2xl border border-white/10
            bg-[#1B1420]/95 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.45)]
            transition-all
          "
        >
          <div className="py-2">
            <Link
              href="/services"
              className="block px-4 py-2 text-sm text-white/85 hover:bg-white/5"
            >
              Összes szolgáltatás
            </Link>

            <div className="my-1 h-px bg-white/10"></div>

            <Link
              href="/services/energetikai-harmonizacio"
              className="block px-4 py-2 text-sm text-white/85 hover:bg-white/5"
            >
              Energetikai harmonizáció
            </Link>

            <Link
              href="/services#herbs"
              className="block px-4 py-2 text-sm text-white/85 hover:bg-white/5"
            >
              Gyógynövény & kiegészítők
            </Link>

            <Link
              href="/services#mindfulness"
              className="block px-4 py-2 text-sm text-white/85 hover:bg-white/5"
            >
              Mindfulness hangolás
            </Link>

            <Link
              href="/services#lifestyle"
              className="block px-4 py-2 text-sm text-white/85 hover:bg-white/5"
            >
              Étrend & életmód mentorálás
            </Link>
          </div>
        </div>
      </div>

      <Link href="/kerdoiv" className={linkCls("/kerdoiv")}>
        Kérdőív
      </Link>

      <Link href="/contact" className={linkCls("/contact")}>
        Kapcsolat
      </Link>

      <Link
        href="/contact"
        className="ml-2 rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] hover:bg-[#B8903F] transition"
      >
        Időpontot kérek
      </Link>
    </nav>
  );

  // ---- MOBIL MENÜ ----
  const NavMobile = () => (
    <nav className="flex flex-col gap-4 items-start md:hidden">
      <Link href="/" className={linkCls("/")}>
        Főoldal
      </Link>

      <Link href="/about" className={linkCls("/about")}>
        Rólam
      </Link>

      {/* Mobilon az alkategóriák külön-külön jelennek meg */}
      <Link href="/services" className={linkCls("/services")}>
        Szolgáltatások (áttekintés)
      </Link>
      <Link
        href="/services/energetikai-harmonizacio"
        className={linkCls("/services/energetikai-harmonizacio")}
      >
        • Energetikai harmonizáció
      </Link>
      <Link href="/services#herbs" className="text-white/80 hover:text-[#D8B36A]">
        • Gyógynövény & kiegészítők
      </Link>
      <Link href="/services#mindfulness" className="text-white/80 hover:text-[#D8B36A]">
        • Mindfulness hangolás
      </Link>
      <Link href="/services#lifestyle" className="text-white/80 hover:text-[#D8B36A]">
        • Étrend & életmód mentorálás
      </Link>

      <Link href="/kerdoiv" className={linkCls("/kerdoiv")}>
        Kérdőív
      </Link>

      <Link href="/contact" className={linkCls("/contact")}>
        Kapcsolat
      </Link>

      <Link
        href="/contact"
        className="w-full text-center rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] hover:bg-[#B8903F] transition mt-2"
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

        <NavDesktop />

        {/* Mobil hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* Mobil menü */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#291C29]/95">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <NavMobile />
          </div>
        </div>
      )}
    </header>
  );
}