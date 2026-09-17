// Shared content-model types for the data-driven SEO pages
// (services, villes, guides). All copy is French — the ranking market.

export type Table = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type Section = {
  heading: string; // rendered as <h2>
  body?: string[]; // paragraphs
  bullets?: string[]; // optional bullet list
  table?: Table; // optional data table (e.g. tax brackets)
};

export type FaqItem = { q: string; a: string };

export type ServicePage = {
  slug: string;
  /** Primary target keyword (used in metadata + copy). */
  keyword: string;
  /** Short label for cards / nav / breadcrumbs. */
  label: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** One-line summary for service cards. */
  summary: string;
  /** Intro paragraph(s) under the H1. */
  lead: string;
  sections: Section[];
  faq: FaqItem[];
  /** Related service slugs for internal linking. */
  related: string[];
};

export type CityPage = {
  slug: string;
  /** Display name, e.g. "El Jadida". */
  name: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  lead: string;
  sections: Section[];
  faq: FaqItem[];
  /** Nearby city slugs for internal linking. */
  nearby: string[];
  /** Whether this is the head-office city (El Jadida). */
  isHeadOffice?: boolean;
};

export type GuidePage = {
  slug: string;
  keyword: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  /** ISO date, e.g. "2026-09-18". */
  datePublished: string;
  lead: string;
  sections: Section[];
  faq: FaqItem[];
  /** Related guide/service slugs (path-qualified, e.g. "services/creation-entreprise"). */
  related: string[];
};
