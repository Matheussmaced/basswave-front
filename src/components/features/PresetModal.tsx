"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PresetPack } from "./PresetCard";

interface PresetModalProps {
  selected: PresetPack | null;
  onClose: () => void;
}

export const PresetModal = ({ selected, onClose }: PresetModalProps) => {
  if (!selected) return null;

  const handleBuy = () => {
    const text = encodeURIComponent(`Olá! Tenho interesse no pack "${selected.title}". Pode me ajudar?`);
    window.open(`https://wa.me/558899113994?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleDemo = () => {
    window.open("https://www.instagram.com/luccasmacedo_/", "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={!!selected} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="bg-[#0f0f0f] border-[#00354a] max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col gap-4">
          <DialogHeader className="shrink-0">
            <DialogTitle className="font-display text-xl md:text-2xl text-[#f2f2f2]">
              {selected.title}
            </DialogTitle>
            <p className="text-[#8c8c8c] text-sm">{selected.subtitle}</p>
          </DialogHeader>

          {/* YouTube Player */}
          {selected.youtubeId && (
            <div 
              className="relative w-full rounded-lg overflow-hidden bg-[#1a1a1a] shrink-0" 
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selected.youtubeId}`}
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selected.title}
              />
            </div>
          )}

          <div className="space-y-2 shrink-0">
            <h3 className="font-display text-xs tracking-widest text-[#00D1FF] uppercase">
              Timbres Inclusos
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {selected.timbres.map((t, i) => (
                <li key={i} className="text-sm text-[#8c8c8c] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 mt-2 shrink-0">
            <button
              onClick={handleBuy}
              className="flex items-center justify-center gap-2 py-3.5 rounded-lg font-display text-sm tracking-wider text-[#050505] transition-all duration-300 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, hsl(142,71%,40%), hsl(142,71%,50%))",
              }}
            >
              💬 COMPRAR AGORA
            </button>
            <button
              onClick={handleDemo}
              className="flex items-center justify-center gap-2 py-3.5 rounded-lg font-display text-sm tracking-wider text-[#f2f2f2] transition-all duration-300 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #833AB4, #E1306C, #F77737)",
              }}
            >
              📸 VER DEMONSTRAÇÃO
            </button>
            <button
              disabled
              className="flex items-center justify-center gap-2 py-3.5 rounded-lg font-display text-sm tracking-wider bg-[#00D1FF]/20 text-[#00D1FF] border border-[#00D1FF]/30 opacity-70 cursor-not-allowed"
            >
              🎸 COMUNIDADE BASS — Em breve
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
