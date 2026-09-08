import { jsonLdGraph } from "@/lib/seo";

// Server component — emits the JSON-LD graph (AccountingService + WebSite + FAQPage)
// into the document so search engines and AI Overviews parse it without JS.
export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph()) }}
    />
  );
}
