"use client";

import { useLang, business } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative flex min-h-[640px] items-center overflow-hidden pt-[104px]"
    >
      {/* photographic background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-900/80 to-navy-900/55" />
      </div>

      <div className="container relative py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white animate-fade-up">
            {t.hero.eyebrow}
          </span>
          <h1
            className="h-display text-4xl leading-[1.1] text-white md:text-[56px] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            {t.hero.title}
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            {t.hero.subtitle}
          </p>
          <div
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <a href="#contact" className="btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <a
              href={`tel:${business.primaryPhone}`}
              className="inline-flex items-center gap-3 text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="text-sm">
                <span className="block text-white/60">{t.hero.ctaSecondary}</span>
                <span className="font-bold">{business.phones[0]}</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/10 bg-navy-950/60 backdrop-blur md:block">
        <div className="container grid grid-cols-3 divide-x divide-white/10">
          {[
            { v: t.hero.stat1, l: t.hero.stat1label },
            { v: t.hero.stat2, l: t.hero.stat2label },
            { v: t.hero.stat3, l: t.hero.stat3label },
          ].map((s, i) => (
            <div key={i} className="px-6 py-5 text-center">
              <div className="h-display text-2xl text-white">{s.v}</div>
              <div className="mt-1 text-xs text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
