import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

// Láblécet közvetlenül itt definiáljuk, hogy ne legyen import gond
function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/70 text-center">
        <div>© {new Date().getFullYear()} LightMind • Minden jog fenntartva.</div>
        <div className="mt-2">
          Oktatási célú információk, nem minősülnek orvosi tanácsnak.
        </div>
      </div>
    </footer>
  );
}


export const metadata = {
  metadataBase: new URL("https://lightmind.vercel.app"),
  title: "LightMind – Spirituális útmutatás",
  description: "Spiritualitás • Energetikai egyensúly • Tudatos étkezés",
  alternates: { canonical: "/" },
  openGraph: {
    title: "LightMind – Spirituális útmutatás",
    description: "Spiritualitás • Energetikai egyensúly • Tudatos étkezés",
    url: "/",
    siteName: "LightMind",
    type: "website",
    images: ["/og.png"], // <-- ez használja a public/og.png képet
  },
  twitter: {
    card: "summary_large_image",
    title: "LightMind – Spirituális útmutatás",
    description: "Spiritualitás • Energetikai egyensúly • Tudatos étkezés",
    images: ["/lightmind-logo.jpeg"],

  },
  robots: { index: true, follow: true },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className="bg-[#291C29] text-[#F3EFE9] min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
