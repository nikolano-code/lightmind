"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname() || "/";

  // Nyelv felismerése
  const isSk = pathname.startsWith("/sk");

  // Egyszerű aktív link ellenőrzés
  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  const linkCls = (href: string) =>
    `block transition ${
      isActive(href)
        ? "text-[#D8B36A]"
        : "text-white/90 hover:text-[#D8B36A]"
    }`;

  // Alap útvonalak
  const homeHref = isSk ? "/sk" : "/";
  const aboutHref = isSk ? "/sk/about" : "/about";
  const servicesHref = isSk ? "/sk/services" : "/services";
  const kerdoivHref = isSk ? "/sk/kerdoiv" : "/kerdoiv";
  const contactHref = isSk ? "/sk/contact" : "/contact";

  // Szolgáltatások aloldalai
  const serviceEnergiaHref = servicesHref + "/energetikai-harmonizacio";
  const serviceHerbsHref = servicesHref + "/gyogynoveny-tanacsadas";
  const serviceMindfulnessHref = servicesHref + "/mindfulness-hangolas";
  const serviceLifestyleHref = servicesHref + "/eletmod-mentoralas";

  // Nyelvváltó logika
  let langToggleHref: string;

  if (isSk) {
    // /sk/contact → /contact
    const huPath = pathname.replace("/sk", "") || "/";
    langToggleHref = huPath;
  } else {
    // /contact → /sk/contact, / → /sk
    langToggleHref = pathname === "/" ? "/sk" : "/sk" + pathname;
  }

  const langLabel = isSk ? "HU" : "SK";

  // Nyelvfüggő szövegek
  const labelHome = isSk ? "Domov" : "Főoldal";
  const labelAbout = isSk ? "O mne" : "Rólam";
  const labelServices = isSk ? "Služby ▾" : "Szolgáltatások ▾";
  const labelAllServices = isSk ? "Všetky služby" : "Összes szolgáltatás";
  const labelServiceEnergia = isSk ? "Energetická harmonizácia" : "Energetikai harmonizáció";
  const labelServiceHerbs = isSk ? "Bylinné a doplnkové poradenstvo" : "Gyógynövény- és kiegészítő tanácsadás";
  const labelServiceMindfulness = isSk ? "Mindfulness naladenie" : "Mindfulness hangolás";
  const labelServiceLifestyle = isSk ? "Stravovanie & životný štýl" : "Étrend & életmód mentorálás";
  const labelForm = isSk ? "Dotazník" : "Kérdőív";
  const labelContact = isSk ? "Kontakt" : "Kapcsolat";
  const labelCta = isSk ? "Chcem termín" : "Időpontot kérek";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#291C29]/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href={homeHref} className="font-semibold tracking-wide text-lg">
          LightMind
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 relative">

          <Link href={homeHref} className={linkCls(homeHref)}>
            {labelHome}
          </Link>

          <Link href={aboutHref} className={linkCls(aboutHref)}>
            {labelAbout}
          </Link>

          {/* DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`transition ${
                isActive(servicesHref)
                  ? "text-[#D8B36A]"
                  : "text-white/90 hover:text-[#D8B36A]"
              }`}
            >
              {labelServices}
            </button>

            {servicesOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-white/10 bg-[#241827] shadow-xl py-2 z-50">

                <Link href={servicesHref} className="block px-4 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-[#D8B36A]">
                  {labelAllServices}
                </Link>

                <div className="my-1 h-px bg-white/10" />

                <Link href={serviceEnergiaHref} className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]">
                  {labelServiceEnergia}
                </Link>

                <Link href={serviceHerbsHref} className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]">
                  {labelServiceHerbs}
                </Link>

                <Link href={serviceMindfulnessHref} className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]">
                  {labelServiceMindfulness}
                </Link>

                <Link href={serviceLifestyleHref} className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#D8B36A]">
                  {labelServiceLifestyle}
                </Link>

              </div>
            )}
          </div>

          <Link href={kerdoivHref} className={linkCls(kerdoivHref)}>
            {labelForm}
          </Link>

          <Link href={contactHref} className={linkCls(contactHref)}>
            {labelContact}
          </Link>

          {/* LANGUAGE SWITCH */}
          <Link
            href={langToggleHref}
            className="text-xs uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-white/25 text-white/80 hover:text-[#D8B36A] hover:border-[#D8B36A] transition"
          >
            {langLabel}
          </Link>

          <Link
            href={contactHref}
            className="rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] hover:bg-[#B8903F] transition"
          >
            {labelCta}
          </Link>

        </div>

        {/* MOBILE HAM */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15"
        >
          <span className="text-xl">☰</span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#291C29]/95">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-4">

            <Link href={homeHref} onClick={() => setOpen(false)} className={linkCls(homeHref)}>
              {labelHome}
            </Link>

            <Link href={aboutHref} onClick={() => setOpen(false)} className={linkCls(aboutHref)}>
              {labelAbout}
            </Link>

            <details className="group">
              <summary className="text-white/90 cursor-pointer">
                {isSk ? "Služby" : "Szolgáltatások"}
              </summary>

              <div className="mt-2 ml-4 space-y-2 text-white/70">

                <Link href={servicesHref} onClick={() => setOpen(false)} className="block hover:text-[#D8B36A]">
                  {labelAllServices}
                </Link>

                <Link href={serviceEnergiaHref} onClick={() => setOpen(false)} className="block hover:text-[#D8B36A]">
                  {labelServiceEnergia}
                </Link>

                <Link href={serviceHerbsHref} onClick={() => setOpen(false)} className="block hover:text-[#D8B36A]">
                  {labelServiceHerbs}
                </Link>

                <Link href={serviceMindfulnessHref} onClick={() => setOpen(false)} className="block hover:text-[#D8B36A]">
                  {labelServiceMindfulness}
                </Link>

                <Link href={serviceLifestyleHref} onClick={() => setOpen(false)} className="block hover:text-[#D8B36A]">
                  {labelServiceLifestyle}
                </Link>

              </div>
            </details>

            <Link href={kerdoivHref} onClick={() => setOpen(false)} className={linkCls(kerdoivHref)}>
              {labelForm}
            </Link>

            <Link href={contactHref} onClick={() => setOpen(false)} className={linkCls(contactHref)}>
              {labelContact}
            </Link>

            {/* NYELVVÁLTÓ */}
            <Link
              href={langToggleHref}
              onClick={() => setOpen(false)}
              className="inline-block text-xs uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-white/25 text-white/80 hover:text-[#D8B36A] hover:border-[#D8B36A] transition"
            >
              {langLabel}
            </Link>

            <Link
              href={contactHref}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2 bg-[#D8B36A] text-[#291C29] font-medium hover:bg-[#B8903F] transition"
            >
              {labelCta}
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}