"use client";

import Image from "next/image";
import heroImg from "@/assets/hero-bassist.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luccas Macedo - Baixista"
          priority
          className="w-full h-full object-cover object-top"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center pb-20 md:pb-28 px-4">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#f2f2f2] mb-4">
          BASS <span className="text-[#00D1FF] drop-shadow-[0_0_20px_rgba(0,209,255,0.6)]">WAVES</span> PRESETS
        </h1>
        <p className="font-body text-[#8c8c8c] text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Timbres profissionais para seu pedalboard. Capturas, IRs e presets prontos para o palco.
        </p>
        <a
          href="#presets"
          className="inline-block font-display text-sm tracking-widest px-8 py-4 border-2 border-[#00D1FF] text-[#00D1FF] hover:bg-[#00D1FF] hover:text-[#050505] transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(0,209,255,0.3),inset_0_0_15px_rgba(0,209,255,0.05)]"
        >
          EXPLORAR PRESETS
        </a>
      </div>
    </section>
  );
};
