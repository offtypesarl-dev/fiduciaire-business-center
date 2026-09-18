import type { Section } from "@/lib/content/types";
import { tocItems } from "@/lib/content/toc";

/**
 * "Sur cette page" jump-link nav built entirely from the guide's own H2 headings.
 * Improves navigation/dwell on long-form guides and exposes in-page anchors.
 * Rendered only when there are enough sections to be worth it.
 */
export default function TableOfContents({ sections }: { sections: Section[] }) {
  const items = tocItems(sections);
  if (items.length < 3) return null;

  return (
    <nav
      aria-label="Sommaire"
      className="mb-12 rounded-xl border border-navy-100 bg-navy-50/50 p-5 md:p-6"
    >
      <p className="eyebrow !text-brand-ink">Sur cette page</p>
      <ol className="mt-3 space-y-2">
        {items.map((it, i) => (
          <li key={it.id} className="flex gap-2.5 text-navy-900/80">
            <span className="shrink-0 tabular-nums text-navy-900/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${it.id}`}
              className="leading-snug underline-offset-2 hover:text-brand-ink hover:underline"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
