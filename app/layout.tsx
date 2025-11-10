import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "LightMind",
  description: "Spirituális útmutatás és energetikai harmonizáció",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className="min-h-screen flex flex-col bg-[#291C29] text-[#F3EFE9] relative">
        {/* Lila háttér fény */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(139,92,246,0.25),transparent_70%)]" />

        <Header />

        {/* Tartalom szekció és footer közti átmenet */}
        <main className="flex-grow bg-gradient-to-b from-[#2A1F2C]/90 via-[#241B27]/90 to-[#1B1520]/95">
          <div className="relative z-10">{children}</div>
        </main>

        {/* Footer – szintén lilás átmenet */}
        <footer className="bg-gradient-to-b from-[#1B1520] via-[#241B27] to-[#2A1F2C] border-t border-white/10">
          <SiteFooter />
        </footer>
      </body>
    </html>
  );
}
