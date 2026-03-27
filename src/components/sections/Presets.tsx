"use client";

import { useState } from "react";
import { PresetCard, PresetPack } from "@/components/features/PresetCard";
import { PresetModal } from "@/components/features/PresetModal";

import presetsJson from "../../../public/data/presets.json";
import videosJson from "../../../public/data/videos.json";

import packTankb from "@/assets/pack-tankb-blackbox.png";
import packValeton from "@/assets/pack-valeton-gp200.png";
import packAmpero from "@/assets/pack-ampero-mini.png";
import packBoss from "@/assets/pack-boss-gt1b.png";
import packDcx from "@/assets/pack-tankb-dcx.png";
import packStomp2 from "@/assets/pack-ampero-stomp2.png";
import packPocketMaster from "@/assets/pack-pocket-master.png";

const imageMap: Record<string, any> = {
  packTankb,
  packValeton,
  packAmpero,
  packBoss,
  packDcx,
  packStomp2,
  packPocketMaster,
};

const videos = videosJson as Record<string, string>;

const presetPacks: PresetPack[] = (presetsJson as any[]).map((p) => ({
  id: p.id,
  title: p.title,
  subtitle: p.subtitle,
  image: imageMap[p.imageKey] || "",
  timbres: p.timbres,
  youtubeId: videos[p.id] || undefined,
}));

export const PresetsSection = () => {
  const [selected, setSelected] = useState<PresetPack | null>(null);

  return (
    <section id="presets" className="relative z-10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-center mb-4 tracking-tight text-[#f2f2f2]">
          NOSSOS <span className="text-[#00D1FF] drop-shadow-[0_0_20px_rgba(0,209,255,0.6)]">PACKS</span>
        </h2>
        <p className="text-center text-[#8c8c8c] mb-12 max-w-lg mx-auto font-body">
          Selecione o pack compatível com seu equipamento e leve seu som ao próximo nível.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {presetPacks.map((pack) => (
            <PresetCard
              key={pack.id}
              pack={pack}
              onClick={() => setSelected(pack)}
            />
          ))}
        </div>
      </div>

      <PresetModal
        selected={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};
