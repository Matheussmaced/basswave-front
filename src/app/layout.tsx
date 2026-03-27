import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bass Waves Store",
  description: "Timbres profissionais para seu pedalboard. Capturas, IRs e presets prontos para o palco criados por Luccas Macedo.",
  keywords: ["bass presets", "timbres de baixo", "pedalboard", "bass waves store", "Luccas Macedo"],
  authors: [{ name: "Luccas Macedo" }],
  openGraph: {
    title: "Bass Waves Store",
    description: "Timbres profissionais para seu pedalboard. Capturas, IRs e presets prontos para o palco.",
    url: "https://basswaves.com", // Replace with real URL
    siteName: "Bass Waves Store",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${orbitron.variable} dark`} style={{ colorScheme: "dark" }}>
      <body className="antialiased font-body min-h-screen bg-[#050505] text-foreground">
        {children}
      </body>
    </html>
  );
}
