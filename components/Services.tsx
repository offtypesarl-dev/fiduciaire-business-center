"use client";

import { useLang } from "@/lib/i18n";

const icons = [
  // bookkeeping
  "M9 17V9m4 8V5m4 12v-6M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z",
  // advisory
  "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z",
  // company formation
  "M3 21h18M5 21V7l7-4 7 4v14M9 9h0m6 0h0m-6 4h0m6 0h0m-6 4h0m6 0h0",
  // declarations
  "M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z",
  // audit
  "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.35-4.35",
  // training
  "M12 14l9-5-9-5-9 5 9 5zm0 0v6m-6-3.5V12",
  // management consulting
  "M3 13a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4M12 3v6m-9 4v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4",
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="section bg-navy-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="font-serif text-3xl font-bold text-navy-900 md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-navy-900/60">{t.services.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold transition-colors group-hover:bg-gold group-hover:text-navy-950">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[i % icons.length]} />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-900/60">
                {s.desc}
              </p>
            </div>
          ))}

          {/* "and more" card */}
          <div className="rounded-xl border border-gold/30 bg-navy-900 p-7 text-white">
            <h3 className="font-serif text-xl font-bold text-gold">
              {t.services.moreTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {t.services.more.map((m, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                  <svg className="mt-0.5 shrink-0 text-gold" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
