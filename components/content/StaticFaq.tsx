import type { FaqItem } from "@/lib/content/types";

/**
 * No-JS, accessible FAQ using native <details>. First item open by default.
 * FAQPage JSON-LD is emitted separately by the page.
 */
export default function StaticFaq({
  items,
  title = "Questions fréquentes",
}: {
  items: FaqItem[];
  title?: string;
}) {
  if (!items?.length) return null;
  return (
    <section className="mt-16">
      <h2 className="h-display text-2xl text-navy-900 md:text-3xl">{title}</h2>
      <div className="mt-6 divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white">
        {items.map((item, i) => (
          <details key={i} open={i === 0} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
              <span className="text-[15px] font-semibold text-navy-900 md:text-base">
                {item.q}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className="shrink-0 text-brand-ink transition-transform duration-300 group-open:rotate-180"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p className="px-6 pb-5 text-[15px] leading-relaxed text-navy-900/70">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
