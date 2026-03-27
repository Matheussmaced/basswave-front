"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const About = () => {
  const aboutRef = useScrollReveal();

  return (
    <section className="relative z-10 py-20 md:py-32">
      <div ref={aboutRef} className="reveal container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-8 tracking-tight text-[#f2f2f2]">
          SOBRE O <span className="text-[#00D1FF] drop-shadow-[0_0_20px_rgba(0,209,255,0.6)]">ARTISTA</span>
        </h2>
        <div className="space-y-5 text-[#8c8c8c] leading-relaxed">
          <p className="text-lg md:text-xl text-[#f2f2f2] font-light">
            Luccas Macedo é baixista, produtor e criador da <strong className="text-[#00D1FF]">Bass Waves Store</strong> — uma referência em presets profissionais para baixo elétrico.
          </p>
          <p>
            Com anos de experiência em palcos e estúdios, Luccas dedicou-se a capturar a essência dos amplificadores e pedais mais icônicos do mundo em presets digitais de alta fidelidade. Cada pack é meticulosamente ajustado para entregar timbres prontos para o palco, sem necessidade de edição.
          </p>
          <p>
            Dos clássicos Ampeg e Aguilar às texturas modernas de Darkglass e sintetizadores, a coleção Bass Waves cobre desde o groove limpo até a distorção mais agressiva — tudo ao alcance de um clique.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://www.instagram.com/luccasmacedo_/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs tracking-widest px-6 py-3 border border-[#00D1FF]/40 text-[#00D1FF] rounded-sm hover:bg-[#00D1FF]/10 transition-all"
          >
            @LUCCASMACEDO_
          </a>
          <a
            href="https://wa.me/558899113994"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs tracking-widest px-6 py-3 border border-[#00D1FF]/40 text-[#00D1FF] rounded-sm hover:bg-[#00D1FF]/10 transition-all"
          >
            CONTATO
          </a>
        </div>
      </div>
    </section>
  );
};
