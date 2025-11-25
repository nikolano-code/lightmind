"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);          // mobil főmenü
  const [servicesOpen, setServicesOpen] = useState(false); // desktop Szolgáltatások lenyíló
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkCls = (href: string) =>
    `transition ${
      isActive(href) ? "text-[#D8B36A]" : "text-white/90 hover:text-[#D8B36A]"
    }`;

  const Nav = () => (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
      <Link href="/" className={linkCls("/")}>
        Főoldal
      </Link>

      <Link href="/about" className={linkCls("/about")}>
        Rólam
      </Link>

      {/* --- SZOLGÁLTATÁSOK DROPDOWN (DESKTOPON HOVER, MOBILON SIMA LINK + ALMENÜ) --- */}
      <div
        className="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <button
          type="button"
          className={`inline-flex items-center gap-1 ${
            isActive("/services")
              ? "text-[#D8B36A]"
              : "text-white/90 hover:text-[#D8B36A]"
          }`}
        >
          Szolgáltatások
          <span className="text-xs">▾</span>
        </button>

        {/* DESKTOP lenyíló */}
        {servicesOpen && (
          <div className="hidden md:block absolute right-0 mt-2 w-64 rounded-2xl border border-white/10 bg-[#241827] shadow-xl py-2 z-50">
            <Link
              href="/services"
              className="block px-4 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-[#D8B36A]"
            >
              Összes szolgáltatás
            </Link>
            <div className="my-1 h-px bg-white/10" />
            <Link
              href="/services#energetikai-harmonizacio"
              className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]"
            >
              Energetikai harmonizáció
            </Link>
            <Link
              href="/services#gyogynoveny-tanacsadas"
              className="block px-4 py-2 text-sm text-white/80 hover:bg:white/5 hover:text-[#D8B36A]"
            >
              Gyógynövény- és kiegészítő tanácsadás
            </Link>
            <Link
              href="/services#mindfulness-hangolas"
              className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]"
            >
              Mindfulness hangolás
            </Link>
            <Link
              href="/services#eletmod-mentoralas"
              className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]"
            >
              Étrend &amp; életmód mentorálás
            </Link>
          </div>
        )}

        {/* MOBIL almenü – a fő /services link alatt simán listában jelenik meg */}
        <div className="md:hidden mt-1 space-y-1 text-sm">
          <Link
            href="/services"
            className="block text-white/80 hover:text-[#D8B36A]"
          >
            Összes szolgáltatás
          </Link>
          <Link
            href="/services#energetikai-harmonizacio"
            className="block text-white/70 hover:text-[#D8B36A]"
          >
            Energetikai harmonizáció
          </Link>
          <Link
            href="/services#gyogynoveny-tanacsadas"
            className="block text-white/70 hover:text-[#D8B36A]"
          >
            Gyógynövény- és kiegészítők
          </Link>
          <Link
            href="/services#mindfulness-hangolas"
            className="block text-white/70 hover:text-[#D8B36A]"
          >
            Mindfulness hangolás
          </Link>
          <Link
            href="/services#eletmod-mentoralas"
            className="block text-white/70 hover:text-[#D8B36A]"
          >
            Életmód mentorálás
          </Link>
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