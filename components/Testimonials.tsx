"use client";

import { useLang } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2 className="h-display text-3xl text-navy-900 md:text-[40px]">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((it, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-xl border border-navy-100 bg-white p-7 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 text-navy-900/70 leading-relaxed">
                &ldquo;{it.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-navy-100 pt-4">
                <div className="font-semibold text-navy-900">{it.author}</div>
                <div className="text-sm text-navy-900/50">{it.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
