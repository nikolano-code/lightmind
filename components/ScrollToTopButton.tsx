"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 200px görgetés után jelenjen meg
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Ugrás az oldal tetejére"
      className="
        fixed bottom-6 right-6 z-40
        rounded-full
        bg-[#FDB836]
        text-[#1B1520]
        shadow-lg shadow-black/40
        w-12 h-12
        flex items-center justify-center
        text-xl
        hover:bg-[#f9c75b]
        transition
        border border-white/50
      "
    >
      ↑
    </button>
  );
}