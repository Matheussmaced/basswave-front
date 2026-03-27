import { ParticleCanvas } from "@/components/layout/ParticleCanvas";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { PresetsSection } from "@/components/sections/Presets";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] bg-grid-pattern overflow-hidden">
      <ParticleCanvas />
      
      <Header />
      
      <main>
        <Hero />
        <PresetsSection />
        <About />
      </main>

      <Footer />
    </div>
  );
}
