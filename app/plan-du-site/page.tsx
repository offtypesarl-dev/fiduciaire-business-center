import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBand from "@/components/content/CtaBand";
import { services } from "@/lib/content/services";
import { cities } from "@/lib/content/cities";
import { guides } from "@/lib/content/guides";
import { absUrl, breadcrumbLd, ogImages } from "@/lib/seo";

const path = "/plan-du-site";

export const metadata: Metadata = {
  title: "Plan du site",
  description:
    "Toutes les pages de Fiduciaire & Business Center : services comptables, zones desservies à El Jadida et au Maroc, et guides pratiques fiscaux et de création d'entreprise.",
  keywords: ["plan du site", "cabinet comptable El Jadida"],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Plan du site",
    description:
      "Toutes les pages de Fiduciaire & Business Center : services, zones desservies et guides pratiques.",
    url: absUrl(path),
    images: ogImages,
  },
};

const infoPages = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
  { href: "/conditions-generales", label: "Conditions générales" },
];

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="h-display text-lg text-navy-900">{title}</h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

export default function PlanDuSite() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Plan du site", path },
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
          <p className="eyebrow mt-6 !text-brand-light">Navigation</p>
          <h1 className="h-display max-w-3xl text-3xl text-white md:text-[44px] md:leading-[1.1]">
            Plan du site
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Retrouvez l&apos;ensemble des pages de Fiduciaire &amp; Business
            Center — nos services comptables, les zones que nous desservons et
            nos guides pratiques.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Column title="Services">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-navy-900/70 transition-colors hover:text-brand-ink"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title="Zones desservies">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/villes/${c.slug}`}
                    className="text-navy-900/70 transition-colors hover:text-brand-ink"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title="Guides pratiques">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="text-navy-900/70 transition-colors hover:text-brand-ink"
                  >
                    {g.label}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title="Le cabinet">
              {infoPages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-navy-900/70 transition-colors hover:text-brand-ink"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </Column>
          </div>

          <CtaBand />
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
