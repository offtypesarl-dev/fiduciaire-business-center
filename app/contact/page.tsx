import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import { absUrl, breadcrumbLd, ogImages } from "@/lib/seo";

const path = "/contact";

export const metadata: Metadata = {
  title: "Contact — Cabinet comptable à El Jadida",
  description:
    "Contactez Fiduciaire & Business Center à El Jadida : téléphone, WhatsApp, email et adresse. Premier échange gratuit et sans engagement. Réponse rapide.",
  keywords: ["contact comptable El Jadida", "cabinet comptable El Jadida contact"],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Contact — Cabinet comptable à El Jadida",
    description:
      "Contactez Fiduciaire & Business Center à El Jadida. Premier échange gratuit.",
    url: absUrl(path),
    images: ogImages,
  },
};

export default function ContactPage() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Contact", path },
  ];

  return (
    <main className="pb-14 md:pb-0">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd(crumbs)),
        }}
      />
      <div className="container pt-[128px]">
        <Breadcrumbs items={crumbs} />
      </div>
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
