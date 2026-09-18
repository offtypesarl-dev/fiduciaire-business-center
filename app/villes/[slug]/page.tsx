import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import Prose from "@/components/content/Prose";
import StaticFaq from "@/components/content/StaticFaq";
import CtaBand from "@/components/content/CtaBand";
import RelatedLinks from "@/components/content/RelatedLinks";
import { getCity, citySlugs } from "@/lib/content/cities";
import { services } from "@/lib/content/services";
import { absUrl, breadcrumbLd, serviceLd, faqLdFrom, ogImages, twitterImages } from "@/lib/seo";

export function generateStaticParams() {
  return citySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getCity(params.slug);
  if (!c) return {};
  const path = `/villes/${c.slug}`;
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    keywords: [c.keyword],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: c.metaTitle,
      description: c.metaDescription,
      url: absUrl(path),
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
      images: twitterImages,
    },
  };
}

export default function CityPageRoute({
  params,
}: {
  params: { slug: string };
}) {
  const c = getCity(params.slug);
  if (!c) notFound();

  const path = `/villes/${c.slug}`;
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Zones desservies", path: "/villes" },
    { name: c.name, path },
  ];

  const nearbyItems = c.nearby
    .map((slug) => getCity(slug))
    .filter(Boolean)
    .map((n) => ({
      href: `/villes/${n!.slug}`,
      label: `Comptable à ${n!.name}`,
      desc: n!.summary,
    }));

  // Surface top services on every city page for the internal-link mesh.
  const serviceItems = services.slice(0, 6).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.label,
    desc: s.summary,
  }));

  const jsonLd = [
    breadcrumbLd(crumbs),
    serviceLd({
      name: `Cabinet comptable — ${c.name}`,
      description: c.metaDescription,
      path,
      areaName: c.name,
    }),
    faqLdFrom(c.faq, path),
  ];

  return (
    <main className="pb-14 md:pb-0">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-[116px]">
        <header className="bg-navy-900 py-14 text-white md:py-16">
          <div className="container">
            <Breadcrumbs items={crumbs} tone="light" />
            <p className="eyebrow mt-6 !text-brand-light">Zone desservie</p>
            <h1 className="h-display max-w-3xl text-3xl text-white md:text-[44px] md:leading-[1.1]">
              {c.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {c.lead}
            </p>
          </div>
        </header>

        <div className="container max-w-3xl py-16 md:py-20">
          <Prose sections={c.sections} />
          <StaticFaq items={c.faq} />
          <CtaBand
            waMessage={`Bonjour, je suis à ${c.name} et je souhaite un premier échange.`}
          />
          <RelatedLinks title="Nos services" items={serviceItems} />
          {nearbyItems.length > 0 && (
            <RelatedLinks title="Villes à proximité" items={nearbyItems} />
          )}
        </div>
      </article>

      <Footer />
      <FloatingActions />
    </main>
  );
}
