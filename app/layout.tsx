import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LightMind",
  description: "Spirituális útmutatás és energetikai harmonizáció",
  icons: {
    icon: [
      { url: "/favicon.ico?v=4" },
      { url: "/apple-touch-icon.png?v=4", sizes: "180x180", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=4", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        {/* MailerLite Universal Script */}
        <Script
          id="mailerlite-universal"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '1924871');
            `,
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col bg-[#291C29] text-[#F3EFE9] relative">
        {/* Háttérfény */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 800px at 50% -10%, rgba(139,92,246,0.25), transparent 70%)",
          }}
        />

        <Header />

        {/* Tartalom */}
        <main className="flex-grow bg-gradient-to-b from-[#2A1F2C]/90 via-[#241B27]/90 to-[#1B1520]/95">
          <div className="relative z-10">{children}</div>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-[#1B1520] via-[#241B27] to-[#2A1F2C] border-t border-white/10">
          <Footer />
        </footer>

        {/* Vissza a tetejére gomb */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}