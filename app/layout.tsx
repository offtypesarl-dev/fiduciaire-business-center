import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fiduciaire & Business Center | Cabinet comptable agréé à El Jadida",
  description:
    "Cabinet de comptabilité et de conseil agréé à El Jadida dirigé par Adil Obbad. Comptabilité, fiscalité, création de société, audit et conseil pour entreprises et entrepreneurs au Maroc.",
  keywords: [
    "fiduciaire El Jadida",
    "comptable El Jadida",
    "Adil Obbad",
    "création société Maroc",
    "conseil fiscal Maroc",
    "expert comptable El Jadida",
  ],
  openGraph: {
    title: "Fiduciaire & Business Center | Cabinet comptable à El Jadida",
    description:
      "Comptabilité, fiscalité, création de société et conseil. Votre partenaire de confiance à El Jadida.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
