"use client";

import { useLang } from "@/lib/i18n";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="section bg-white">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        {/* visual / director card */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-xl border-2 border-gold/40" />
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-navy-50" />
          <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-10 shadow-xl">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gold/15 text-5xl font-serif font-bold text-gold">
              AO
            </div>
            <div className="mt-6">
              <div className="font-serif text-2xl font-bold text-white">
                {t.about.directorName}
              </div>
              <div className="mt-1 text-sm font-medium uppercase tracking-wider text-gold-light">
                {t.about.directorRole}
              </div>
            </div>
            <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
              {t.about.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <svg className="mt-0.5 shrink-0 text-gold" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* text */}
        <div className="order-1 lg:order-2">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="font-serif text-3xl font-bold text-navy-900 md:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-4 text-xl font-medium text-gold-dark">
            {t.about.lead}
          </p>
          <div className="mt-6 space-y-4 text-navy-900/70 leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
