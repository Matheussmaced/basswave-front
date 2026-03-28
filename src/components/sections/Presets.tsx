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
import packMatriboxII from "@/assets/pack-matribox-II.png";
import packHxStomp from "@/assets/pack-hx-stomp.png";
import packZoomB1Four from "@/assets/pack-zoom-b1-four.png";
import { Search } from "lucide-react";

const imageMap: Record<string, any> = {
  packTankb,
  packValeton,
  packAmpero,
  packBoss,
  packDcx,
  packStomp2,
  packPocketMaster,
  packMatriboxII,
  packHxStomp,
  packZoomB1Four,
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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPacks = presetPacks.filter((pack) => {
    const search = searchTerm.toLowerCase();
    return (
      pack.title.toLowerCase().includes(search) ||
      pack.timbres.some((t) => t.toLowerCase().includes(search))
    );
  });

  return (
    <section id="presets" className="relative z-10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-center mb-4 tracking-tight text-[#f2f2f2]">
          NOSSOS <span className="text-[#00D1FF] drop-shadow-[0_0_20px_rgba(0,209,255,0.6)]">PACKS</span>
        </h2>
        <p className="text-center text-[#8c8c8c] mb-8 max-w-lg mx-auto font-body">
          Selecione o pack compatível com seu equipamento e leve seu som ao próximo nível.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00D1FF]/20 to-[#00D1FF]/0 rounded-lg blur opacity-25 group-focus-within:opacity-100 transition duration-1000 group-focus-within:duration-200"></div>
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-[#8c8c8c] group-focus-within:text-[#00D1FF] transition-colors" />
            <input
              type="text"
              placeholder="Pesquisar presets ou timbres..."
              className="w-full bg-[#0a0a0a]/80 border border-[#1a1a1a] hover:border-[#00D1FF]/30 focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF]/20 rounded-lg py-4 pl-12 pr-4 text-[#f2f2f2] font-body transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPacks.map((pack) => (
            <PresetCard
              key={pack.id}
              pack={pack}
              onClick={() => setSelected(pack)}
            />
          ))}
        </div>

        {filteredPacks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#8c8c8c] font-body">Nenhum pack encontrado para "{searchTerm}".</p>
          </div>
        )}
      </div>

      <PresetModal
        selected={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};
