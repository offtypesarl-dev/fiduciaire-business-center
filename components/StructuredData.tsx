import { jsonLdGraph } from "@/lib/seo";

// Server component — emits the site-wide JSON-LD graph (AccountingService + WebSite)
// into the document so search engines and AI Overviews parse it without JS.
// Per-page FAQPage / Breadcrumb / Service / Article schema is added by each page.
export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph()) }}
    />
  );
}
