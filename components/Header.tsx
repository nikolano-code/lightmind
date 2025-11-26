"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  // Desktop linkek stílusa
  const desktopLinkCls = (href: string) =>
    `text-sm transition ${
      isActive(href) ? "text-[#D8B36A]" : "text-white/90 hover:text-[#D8B36A]"
    }`;

  // Mobil linkek stílusa – MIND block, egymás alatt
  const mobileLinkCls = (href: string) =>
    `block text-base transition ${
      isActive(href) ? "text-[#D8B36A]" : "text-white/90 hover:text-[#D8B36A]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#291C29]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logó / márkanév */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white"
          onClick={() => setIsMobileOpen(false)}
        >
          LightMind
        </Link>

        {/* DESKTOP MENÜ */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className={desktopLinkCls("/")}>
            Főoldal
          </Link>

          <Link href="/about" className={desktopLinkCls("/about")}>
            Rólam
          </Link>

          {/* Szolgáltatások legördülő – desktop */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className={`text-sm transition ${
                pathname.startsWith("/services")
                  ? "text-[#D8B36A]"
                  : "text-white/90 hover:text-[#D8B36A]"
              }`}
            >
              Szolgáltatások ▾
            </button>

            {isServicesOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-white/10 bg-[#241827] py-2 shadow-xl z-50">
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

          <Link href="/kerdoiv" className={desktopLinkCls("/kerdoiv")}>
            Kérdőív
          </Link>

          <Link href="/contact" className={desktopLinkCls("/contact")}>
            Kapcsolat
          </Link>

          <Link
            href="/contact"
            className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] text-sm font-medium hover:bg-[#B8903F] transition"
          >
            Időpontot kérek
          </Link>
        </nav>

        {/* MOBIL HAMBURGER GOMB */}
        <button
          type="button"
          onClick={() => setIsMobileOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white"
          aria-label="Menü"
          aria-expanded={isMobileOpen}
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* MOBIL MENÜ */}
      {isMobileOpen && (
        <nav className="md:hidden border-t border-white/10 bg-[#291C29]/95">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setIsMobileOpen(false)}
              className={mobileLinkCls("/")}
            >
              Főoldal
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMobileOpen(false)}
              className={mobileLinkCls("/about")}
            >
              Rólam
            </Link>

            {/* Szolgáltatások – mobil legördülő */}
            <details className="group">
              <summary className="cursor-pointer text-white/90">
                Szolgáltatások
              </summary>
              <div className="mt-2 ml-4 space-y-2 text-white/80">
                <Link
                  href="/services"
                  onClick={() => setIsMobileOpen(false)}
                  className="block hover:text-[#D8B36A]"
                >
                  Összes szolgáltatás
                </Link>

                <Link
                  href="/services/energetikai-harmonizacio"
                  onClick={() => setIsMobileOpen(false)}
                  className="block hover:text-[#D8B36A]"
                >
                  Energetikai harmonizáció
                </Link>

                <Link
                  href="/services/gyogynoveny-tanacsadas"
                  onClick={() => setIsMobileOpen(false)}
                  className="block hover:text-[#D8B36A]"
                >
                  Gyógynövény és kiegészítők
                </Link>

                <Link
                  href="/services/mindfulness-hangolas"
                  onClick={() => setIsMobileOpen(false)}
                  className="block hover:text-[#D8B36A]"
                >
                  Mindfulness hangolás
                </Link>

                <Link
                  href="/services/eletmod-mentoralas"
                  onClick={() => setIsMobileOpen(false)}
                  className="block hover:text-[#D8B36A]"
                >
                  Étrend és életmód mentorálás
                </Link>
              </div>
            </details>

            <Link
              href="/kerdoiv"
              onClick={() => setIsMobileOpen(false)}
              className={mobileLinkCls("/kerdoiv")}
            >
              Kérdőív
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className={mobileLinkCls("/contact")}
            >
              Kapcsolat
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="block rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
            >
              Időpontot kérek
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}