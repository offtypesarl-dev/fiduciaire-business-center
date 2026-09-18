import { BUSINESS, SITE_URL } from "@/lib/seo";
import { services } from "@/lib/content/services";
import { cities } from "@/lib/content/cities";
import { guides } from "@/lib/content/guides";

// /llms.txt — a curated, plain-text map of the site for AI search engines
// (ChatGPT, Perplexity, Copilot). Follows the llmstxt.org convention: an H1,
// a blockquote summary, then linked sections with one-line descriptions.
// Every line is generated from content already published on the site — no data
// is invented here. Ignored by Google Search; this targets GEO/AI discovery.
export const dynamic = "force-static";

const url = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${BUSINESS.name}`);
  lines.push("");
  lines.push(
    `> Cabinet comptable et de conseil à ${BUSINESS.city} (région ${BUSINESS.region}, Maroc), ` +
      `dirigé par ${BUSINESS.founder} et fondé en ${BUSINESS.foundingYear}. ` +
      `Comptabilité, fiscalité, création de société, paie, audit et conseil pour les TPE, PME ` +
      `et entrepreneurs d'El Jadida, de sa région et de Casablanca. Premier rendez-vous gratuit.`
  );
  lines.push("");
  lines.push(
    `Adresse : ${BUSINESS.street}, ${BUSINESS.city}. ` +
      `Téléphone : ${BUSINESS.phones[0]}. E-mail : ${BUSINESS.email}. ` +
      `Zones desservies : ${BUSINESS.areaServed.join(", ")}.`
  );
  lines.push("");

  lines.push("## Services");
  for (const s of services) {
    lines.push(`- [${s.h1}](${url(`/services/${s.slug}`)}): ${s.summary}`);
  }
  lines.push("");

  lines.push("## Villes et zones desservies");
  for (const c of cities) {
    lines.push(`- [${c.h1}](${url(`/villes/${c.slug}`)}): ${c.summary}`);
  }
  lines.push("");

  lines.push("## Guides pratiques");
  for (const g of guides) {
    lines.push(`- [${g.h1}](${url(`/guides/${g.slug}`)}): ${g.summary}`);
  }
  lines.push("");

  lines.push("## Informations");
  lines.push(`- [À propos du cabinet](${url("/a-propos")}): présentation, équipe et valeurs.`);
  lines.push(`- [Contact et devis gratuit](${url("/contact")}): coordonnées, horaires et demande de devis.`);
  lines.push(`- [Mentions légales](${url("/mentions-legales")})`);
  lines.push(`- [Politique de confidentialité](${url("/confidentialite")})`);
  lines.push(`- [Conditions générales](${url("/conditions-generales")})`);
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
