"use client";

import { useEffect, useState } from "react";

const SCROLL_OFFSET = 200; // ennyi px után jelenjen meg a gomb

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsVisible(window.scrollY > SCROLL_OFFSET);
      }
    };

    // induláskor is lefuttatjuk, ha már lent vagy az oldalon
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Ugrás az oldal tetejére"
      className="
        fixed bottom-6 right-6 z-40
        flex items-center justify-center
        w-12 h-12 md:w-14 md:h-14
        rounded-full
        bg-gradient-to-tr from-[#FDB836] via-[#FACC6B] to-[#F97316]
        text-[#1B1520]
        shadow-[0_0_25px_rgba(253,184,54,0.75)]
        border border-white/40
        hover:scale-105 hover:shadow-[0_0_35px_rgba(253,184,54,0.9)]
        active:scale-95
        transition-all duration-300
        float-soft
      "
    >
      {/* arany aura / fénygyűrű */}
      <span
        className="
          absolute inline-flex h-full w-full rounded-full
          bg-gradient-to-tr from-[#FDB836]/30 to-transparent
          blur-md
          -z-10
        "
      />
      {/* új ikon – elegáns felfelé nyíl */}
      <span className="text-2xl leading-none -mt-[2px]">⮝</span>
    </button>
  );
}