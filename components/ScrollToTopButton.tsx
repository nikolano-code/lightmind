"use client";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

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
      "
    >
      <span className="text-2xl leading-none -mt-[2px]">↑</span>
    </button>
  );
}
