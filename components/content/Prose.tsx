import type { Section } from "@/lib/content/types";
import { headingId } from "@/lib/content/toc";

/** Renders an ordered list of content sections (H2 + paragraphs + bullets + table). */
export default function Prose({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-12">
      {sections.map((s, i) => (
        <section key={i} id={headingId(s.heading, i)} className="scroll-mt-28">
          <h2 className="h-display text-2xl text-navy-900 md:text-3xl">
            {s.heading}
          </h2>
          {s.body?.map((p, j) => (
            <p key={j} className="mt-4 leading-relaxed text-navy-900/70">
              {p}
            </p>
          ))}
          {s.bullets && s.bullets.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {s.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3 text-navy-900/70">
                  <svg
                    className="mt-1 shrink-0 text-brand-ink"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          )}
          {s.table && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                {s.table.caption && (
                  <caption className="mb-2 text-left text-xs text-navy-900/50">
                    {s.table.caption}
                  </caption>
                )}
                <thead>
                  <tr className="bg-navy-900 text-white">
                    {s.table.headers.map((h, j) => (
                      <th key={j} className="px-4 py-2.5 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.table.rows.map((row, j) => (
                    <tr
                      key={j}
                      className="border-b border-navy-100 odd:bg-white even:bg-navy-50/50"
                    >
                      {row.map((cell, k) => (
                        <td key={k} className="px-4 py-2.5 text-navy-900/80">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
