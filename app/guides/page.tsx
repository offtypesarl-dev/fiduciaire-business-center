import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBand from "@/components/content/CtaBand";
import { guides } from "@/lib/content/guides";
import { absUrl, breadcrumbLd, ogImages } from "@/lib/seo";

const path = "/guides";

export const metadata: Metadata = {
  title: "Guides comptables & fiscaux au Maroc",
  description:
    "Guides pratiques 2026 : créer une SARL, coût de création, auto-entrepreneur ou SARL, barème IR, taux de TVA et d'IS au Maroc. Par le cabinet Fiduciaire & Business Center.",
  keywords: ["guide fiscal Maroc", "créer une entreprise Maroc"],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Guides comptables & fiscaux au Maroc",
    description:
      "Guides pratiques 2026 pour créer et gérer votre entreprise au Maroc.",
    url: absUrl(path),
    images: ogImages,
  },
};

export default function GuidesHub() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Guides", path },
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

      <header className="bg-navy-900 py-14 text-white md:py-16">
        <div className="container pt-[60px]">
          <Breadcrumbs items={crumbs} tone="light" />
          <p className="eyebrow mt-6 !text-brand-light">Ressources</p>
          <h1 className="h-display max-w-3xl text-3xl text-white md:text-[44px] md:leading-[1.1]">
            Guides comptables &amp; fiscaux pour les entreprises marocaines
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Des explications claires et à jour sur la création d'entreprise et la
            fiscalité au Maroc — rédigées par notre cabinet et alignées sur la Loi
            de Finances 2026.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group flex flex-col rounded-xl border border-navy-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <h2 className="h-display text-lg text-navy-900 group-hover:text-brand-ink">
                  {g.label}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-900/60">
                  {g.summary}
                </p>
                <span className="learn-more mt-4">
                  Lire le guide
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <CtaBand />
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
