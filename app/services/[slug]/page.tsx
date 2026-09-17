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
import { services, getService, serviceSlugs } from "@/lib/content/services";
import {
  absUrl,
  breadcrumbLd,
  serviceLd,
  faqLdFrom,
} from "@/lib/seo";

export function generateStaticParams() {
  return serviceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  const path = `/services/${s.slug}`;
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    keywords: [s.keyword],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: s.metaTitle,
      description: s.metaDescription,
      url: absUrl(path),
    },
    twitter: {
      card: "summary_large_image",
      title: s.metaTitle,
      description: s.metaDescription,
    },
  };
}

export default function ServicePageRoute({
  params,
}: {
  params: { slug: string };
}) {
  const s = getService(params.slug);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.label, path },
  ];

  const relatedItems = s.related
    .map((slug) => getService(slug))
    .filter(Boolean)
    .map((r) => ({
      href: `/services/${r!.slug}`,
      label: r!.label,
      desc: r!.summary,
    }));

  const jsonLd = [
    breadcrumbLd(crumbs),
    serviceLd({
      name: s.label,
      description: s.metaDescription,
      path,
    }),
    faqLdFrom(s.faq, path),
  ];

  return (
    <main className="pb-14 md:pb-0">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-[116px]">
        {/* Hero */}
        <header className="bg-navy-900 py-14 text-white md:py-16">
          <div className="container">
            <Breadcrumbs items={crumbs} tone="light" />
            <p className="eyebrow mt-6 !text-brand-light">Service</p>
            <h1 className="h-display max-w-3xl text-3xl text-white md:text-[44px] md:leading-[1.1]">
              {s.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {s.lead}
            </p>
          </div>
        </header>

        <div className="container max-w-3xl py-16 md:py-20">
          <Prose sections={s.sections} />
          <StaticFaq items={s.faq} />
          <CtaBand
            waMessage={`Bonjour, je souhaite un devis pour : ${s.label}.`}
          />
          <RelatedLinks title="Services associés" items={relatedItems} />
        </div>
      </article>

      <Footer />
      <FloatingActions />
    </main>
  );
}
