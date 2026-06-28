import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fiduciaire-business-center.vercel.app"),
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
    images: [{ url: "/og.png", width: 1600, height: 552, alt: "Fiduciaire & Business Center" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiduciaire & Business Center | Cabinet comptable à El Jadida",
    description:
      "Comptabilité, fiscalité, création de société et conseil. Votre partenaire de confiance à El Jadida.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
