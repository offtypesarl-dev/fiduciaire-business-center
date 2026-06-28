"use client";

import { useLang, business } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-navy-700/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light animate-fade-up">
            {t.hero.eyebrow}
          </span>
          <h1
            className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            {t.hero.title}
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            {t.hero.subtitle}
          </p>
          <div
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              {t.hero.ctaPrimary}
            </a>
            <a href="#services" className="btn-outline w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <a
            href={`tel:${business.primaryPhone}`}
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-gold animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {business.phones[0]}
          </a>
        </div>

        {/* stats bar */}
        <div
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-3 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          {[
            { v: t.hero.stat1, l: t.hero.stat1label },
            { v: t.hero.stat2, l: t.hero.stat2label },
            { v: t.hero.stat3, l: t.hero.stat3label },
          ].map((s, i) => (
            <div key={i} className="bg-navy-900/40 px-6 py-8 text-center">
              <div className="font-serif text-2xl font-bold text-gold md:text-3xl">
                {s.v}
              </div>
              <div className="mt-2 text-sm text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
