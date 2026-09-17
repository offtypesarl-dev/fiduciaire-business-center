import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBand from "@/components/content/CtaBand";
import { cities } from "@/lib/content/cities";
import { absUrl, breadcrumbLd } from "@/lib/seo";

const path = "/villes";

export const metadata: Metadata = {
  title: "Zones desservies — El Jadida, Jorf Lasfar, Azemmour & région",
  description:
    "Cabinet comptable à El Jadida au service des entreprises de la région Casablanca-Settat : El Jadida, Jorf Lasfar, Azemmour, Sidi Bennour, Settat, Oualidia et Casablanca.",
  keywords: ["comptable El Jadida", "cabinet comptable Casablanca-Settat"],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Zones desservies — El Jadida & région",
    description:
      "Cabinet comptable à El Jadida au service des entreprises de toute la région.",
    url: absUrl(path),
  },
};

export default function VillesHub() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Zones desservies", path },
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
          <p className="eyebrow mt-6 !text-brand-light">Notre couverture</p>
          <h1 className="h-display max-w-3xl text-3xl text-white md:text-[44px] md:leading-[1.1]">
            Un cabinet comptable proche de vous, dans toute la région
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Basés à El Jadida, nous accompagnons les entreprises et entrepreneurs
            de la province et de la région Casablanca-Settat — sur place ou à
            distance.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/villes/${c.slug}`}
                className="group flex flex-col rounded-xl border border-navy-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <div className="mb-3 flex items-center gap-2 text-brand-ink">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {c.isHeadOffice ? "Siège" : "Zone desservie"}
                  </span>
                </div>
                <h2 className="h-display text-lg text-navy-900 group-hover:text-brand-ink">
                  {c.name}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-900/60">
                  {c.summary}
                </p>
                <span className="learn-more mt-4">
                  En savoir plus
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
