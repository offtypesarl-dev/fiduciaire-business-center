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
import { getGuide, guideSlugs, guides } from "@/lib/content/guides";
import { getService } from "@/lib/content/services";
import { absUrl, breadcrumbLd, articleLd, faqLdFrom, ogImages, twitterImages } from "@/lib/seo";

export function generateStaticParams() {
  return guideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  const path = `/guides/${g.slug}`;
  return {
    title: { absolute: g.metaTitle },
    description: g.metaDescription,
    keywords: [g.keyword],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: g.metaTitle,
      description: g.metaDescription,
      url: absUrl(path),
      publishedTime: g.datePublished,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: g.metaTitle,
      description: g.metaDescription,
      images: twitterImages,
    },
  };
}

/** Resolve a path-qualified related slug ("services/x" | "guides/y") to a link. */
function resolveRelated(qualified: string) {
  const [kind, slug] = qualified.split("/");
  if (kind === "services") {
    const s = getService(slug);
    return s ? { href: `/services/${s.slug}`, label: s.label, desc: s.summary } : null;
  }
  if (kind === "guides") {
    const g = guides.find((x) => x.slug === slug);
    return g ? { href: `/guides/${g.slug}`, label: g.label, desc: g.summary } : null;
  }
  return null;
}

export default function GuidePageRoute({
  params,
}: {
  params: { slug: string };
}) {
  const g = getGuide(params.slug);
  if (!g) notFound();

  const path = `/guides/${g.slug}`;
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: g.label, path },
  ];

  const relatedItems = g.related
    .map(resolveRelated)
    .filter(Boolean) as { href: string; label: string; desc?: string }[];

  const jsonLd = [
    breadcrumbLd(crumbs),
    articleLd({
      headline: g.h1,
      description: g.metaDescription,
      path,
      datePublished: g.datePublished,
    }),
    faqLdFrom(g.faq, path),
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
            <p className="eyebrow mt-6 !text-brand-light">Guide</p>
            <h1 className="h-display max-w-3xl text-3xl text-white md:text-[44px] md:leading-[1.1]">
              {g.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {g.lead}
            </p>
          </div>
        </header>

        <div className="container max-w-3xl py-16 md:py-20">
          <Prose sections={g.sections} />
          <StaticFaq items={g.faq} />
          <CtaBand
            title="Besoin d'aide sur ce sujet ?"
            subtitle="Fiduciaire & Business Center vous accompagne concrètement. Premier échange gratuit."
            waMessage={`Bonjour, j'ai une question au sujet de : ${g.label}.`}
          />
          <RelatedLinks title="À lire aussi" items={relatedItems} />
        </div>
      </article>

      <Footer />
      <FloatingActions />
    </main>
  );
}
