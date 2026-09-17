import Link from "next/link";

export type RelatedItem = { href: string; label: string; desc?: string };

/** Grid of internal links — powers the internal-linking mesh between pages. */
export default function RelatedLinks({
  title,
  items,
}: {
  title: string;
  items: RelatedItem[];
}) {
  if (!items?.length) return null;
  return (
    <section className="mt-16">
      <h2 className="h-display text-2xl text-navy-900 md:text-3xl">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="group flex flex-col rounded-xl border border-navy-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg"
          >
            <span className="font-display font-semibold text-navy-900 group-hover:text-brand-ink">
              {it.label}
            </span>
            {it.desc && (
              <span className="mt-1.5 text-sm leading-relaxed text-navy-900/55">
                {it.desc}
              </span>
            )}
            <span className="learn-more mt-3">
              En savoir plus
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
