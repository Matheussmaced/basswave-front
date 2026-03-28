"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-basswaves.png";

export const Header = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToPresets = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("presets");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#00354a]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" onClick={scrollToTop}>
          <Image
            src={logo}
            alt="Bass Waves Store"
            className="h-14 w-auto md:h-20"
            priority
          />
        </Link>
        <a
          href="#presets"
          onClick={scrollToPresets}
          className="font-display text-xs md:text-sm tracking-widest text-[#00D1FF] hover:drop-shadow-[0_0_10px_rgba(0,209,255,0.6)] transition-all"
        >
          PRESETS
        </a>
      </div>
    </header>
  );
};
