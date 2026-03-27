"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image, { StaticImageData } from "next/image";

export interface PresetPack {
  id: string;
  title: string;
  subtitle: string;
  image: StaticImageData | string;
  timbres: string[];
  youtubeId?: string;
}

interface PresetCardProps {
  pack: PresetPack;
  onClick: () => void;
}

export const PresetCard = ({ pack, onClick }: PresetCardProps) => {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="reveal group cursor-pointer rounded-xl overflow-hidden border border-[#00354a] bg-[#0f0f0f] transition-all duration-400 hover:shadow-[0_0_30px_rgba(0,209,255,0.4),0_0_60px_rgba(0,209,255,0.15)] hover:scale-[1.03] hover:border-[#00D1FF]/60"
    >
      <div className="overflow-hidden">
        <Image
          src={pack.image}
          alt={pack.title}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="font-display text-sm md:text-base tracking-wide text-[#f2f2f2]">
          {pack.title}
        </h3>
        <p className="text-xs text-[#8c8c8c] mt-1">{pack.subtitle}</p>
        <p className="text-xs text-[#00D1FF] mt-2 font-display tracking-wider">
          VER DETALHES →
        </p>
      </div>
    </div>
  );
};
