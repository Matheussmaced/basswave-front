import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-basswaves.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#00354a]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          {/* We import the image asset so Next.js Image component uses its generic src string */}
          <Image
            src={logo}
            alt="Bass Waves Store"
            className="h-14 w-auto md:h-20"
            priority
          />
        </Link>
        <a
          href="#presets"
          className="font-display text-xs md:text-sm tracking-widest text-[#00D1FF] hover:drop-shadow-[0_0_10px_rgba(0,209,255,0.6)] transition-all"
        >
          PRESETS
        </a>
      </div>
    </header>
  );
};
