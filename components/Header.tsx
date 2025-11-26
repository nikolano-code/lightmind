"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkCls = (href: string) =>
    `block transition ${
      isActive(href)
        ? "text-[#D8B36A]"
        : "text-white/90 hover:text-[#D8B36A]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#291C29]/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">

        {/* LOGÓ */}
        <Link href="/" className="font-semibold tracking-wide text-lg">
          LightMind
        </Link>

        {/* DESKTOP MENÜ */}
        <div className="hidden md:flex items-center gap-6 relative">

          <Link href="/" className={linkCls("/")}>Főoldal</Link>
          <Link href="/about" className={linkCls("/about")}>Rólam</Link>

          {/* DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`transition ${
                isActive("/services")
                  ? "text-[#D8B36A]"
                  : "text-white/90 hover:text-[#D8B36A]"
              }`}
            >
              Szolgáltatások ▾
            </button>

            {servicesOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-white/10 bg-[#241827] shadow-xl py-2 z-50">

                <Link
                  href="/services"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-[#D8B36A]"
                >
                  Összes szolgáltatás
                </Link>

                <div className="my-1 h-px bg-white/10" />

                <Link
                  href="/services/energetikai-harmonizacio"
                  className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]"
                >
                  Energetikai harmonizáció
                </Link>

                <Link
                  href="/services/gyogynoveny-tanacsadas"
                  className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]"
                >
                  Gyógynövény- és kiegészítő tanácsadás
                </Link>

                <Link
                  href="/services/mindfulness-hangolas"
                  className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]"
                >
                  Mindfulness hangolás
                </Link>

                <Link
                  href="/services/eletmod-mentoralas"
                  className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]"
                >
                  Étrend & életmód mentorálás
                </Link>

              </div>
            )}
          </div>

          <Link href="/kerdoiv" className={linkCls("/kerdoiv")}>Kérdőív</Link>
          <Link href="/contact" className={linkCls("/contact")}>Kapcsolat</Link>

          <Link
            href="/contact"
            className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] hover:bg-[#B8903F] transition"
          >
            Időpontot kérek
          </Link>
        </div>

        {/* MOBIL HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* MOBIL MENÜ */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#291C29]/95">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-4">

            <Link href="/" onClick={() => setOpen(false)} className={linkCls("/")}>
              Főoldal
            </Link>

            <Link href="/about" onClick={() => setOpen(false)} className={linkCls("/about")}>
              Rólam
            </Link>

            <details className="group">
              <summary className="text-white/90 cursor-pointer">Szolgáltatások</summary>

              <div className="mt-2 ml-4 space-y-2 text-white/70">

                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="block hover:text-[#D8B36A]"
                >
                  Összes szolgáltatás
                </Link>

                <Link
                  href="/services/energetikai-harmonizacio"
                  onClick={() => setOpen(false)}
                  className="block hover:text-[#D8B36A]"
                >
                  Energetikai harmonizáció
                </Link>

                <Link
                  href="/services/gyogynoveny-tanacsadas"
                  onClick={() => setOpen(false)}
                  className="block hover:text-[#D8B36A]"
                >
                  Gyógynövény- & kiegészítők
                </Link>

                <Link
                  href="/services/mindfulness-hangolas"
                  onClick={() => setOpen(false)}
                  className="block hover:text-[#D8B36A]"
                >
                  Mindfulness hangolás
                </Link>

                <Link
                  href="/services/eletmod-mentoralas"
                  onClick={() => setOpen(false)}
                  className="block hover:text-[#D8B36A]"
                >
                  Étrend & életmód mentorálás
                </Link>

              </div>
            </details>

            <Link href="/kerdoiv" onClick={() => setOpen(false)} className={linkCls("/kerdoiv")}>
              Kérdőív
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)} className={linkCls("/contact")}>
              Kapcsolat
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
            >
              Időpontot kérek
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}