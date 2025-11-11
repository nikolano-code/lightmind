import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LightMind",
  description: "Spirituális útmutatás és energetikai harmonizáció",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },                            // cache-busting
      { url: "/icon-192.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest", // hagyd benne, ha használsz PWA-t
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className="min-h-screen flex flex-col bg-[#291C29] text-[#F3EFE9] relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(139,92,246,0.25),transparent_70%)]" />
        <Header />
        <main className="flex-grow bg-gradient-to-b from-[#2A1F2C]/90 via-[#241B27]/90 to-[#1B1520]/95">
          <div className="relative z-10">{children}</div>
        </main>
        <footer className="bg-gradient-to-b from-[#1B1520] via-[#241B27] to-[#2A1F2C] border-t border-white/10">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
        <Header />

        {/* Tartalom szekció és footer közti átmenet */}
        <main className="flex-grow bg-gradient-to-b from-[#2A1F2C]/90 via-[#241B27]/90 to-[#1B1520]/95">
          <div className="relative z-10">{children}</div>
        </main>

        {/* Footer – szintén lilás átmenet */}
        <footer className="bg-gradient-to-b from-[#1B1520] via-[#241B27] to-[#2A1F2C] border-t border-white/10">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
