import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import StructuredData from "@/components/StructuredData";
import { SITE_URL, ogImages, twitterImages } from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Fiduciaire & Business Center | Cabinet comptable agréé à El Jadida",
    template: "%s | Fiduciaire & Business Center",
  },
  description:
    "Cabinet de comptabilité et de conseil agréé à El Jadida dirigé par Adil Obbad. Comptabilité, fiscalité, création de société, audit et conseil pour entreprises et entrepreneurs au Maroc. Premier rendez-vous gratuit.",
  applicationName: "Fiduciaire & Business Center",
  authors: [{ name: "Fiduciaire & Business Center" }],
  creator: "Fiduciaire & Business Center",
  publisher: "Fiduciaire & Business Center",
  keywords: [
    "fiduciaire El Jadida",
    "comptable El Jadida",
    "expert comptable El Jadida",
    "cabinet comptable Maroc",
    "création société Maroc",
    "conseil fiscal Maroc",
    "déclaration TVA IS El Jadida",
    "Adil Obbad",
  ],
  category: "business",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    siteName: "Fiduciaire & Business Center",
    locale: "fr_MA",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    title: "Fiduciaire & Business Center | Cabinet comptable à El Jadida",
    description:
      "Comptabilité, fiscalité, création de société et conseil. Votre partenaire de confiance à El Jadida. Premier échange gratuit.",
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiduciaire & Business Center | Cabinet comptable à El Jadida",
    description:
      "Comptabilité, fiscalité, création de société et conseil. Votre partenaire de confiance à El Jadida.",
    images: twitterImages,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0c2643",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
