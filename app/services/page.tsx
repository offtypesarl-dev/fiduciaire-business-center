import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBand from "@/components/content/CtaBand";
import { services } from "@/lib/content/services";
import { absUrl, breadcrumbLd } from "@/lib/seo";

const path = "/services";

export const metadata: Metadata = {
  title: "Nos services comptables et de conseil à El Jadida",
  description:
    "Comptabilité, création d'entreprise, conseil fiscal, déclarations TVA/IS/IR, gestion de paie, audit et domiciliation à El Jadida et dans tout le Maroc. Découvrez nos services.",
  keywords: ["cabinet comptable El Jadida", "services comptables Maroc"],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Nos services comptables et de conseil à El Jadida",
    description:
      "Comptabilité, création d'entreprise, conseil fiscal, paie, audit et domiciliation à El Jadida et dans tout le Maroc.",
    url: absUrl(path),
  },
};

export default function ServicesHub() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Services", path },
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
          <p className="eyebrow mt-6 !text-brand-light">Nos expertises</p>
          <h1 className="h-display max-w-3xl text-3xl text-white md:text-[44px] md:leading-[1.1]">
            Des services comptables complets pour votre entreprise
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            De la tenue de comptabilité au conseil stratégique, Fiduciaire &amp;
            Business Center couvre l'ensemble de vos besoins financiers, fiscaux
            et juridiques — à El Jadida et dans tout le Maroc.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-xl border border-navy-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <h2 className="h-display text-lg text-navy-900 group-hover:text-brand-ink">
                  {s.label}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-900/60">
                  {s.summary}
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
