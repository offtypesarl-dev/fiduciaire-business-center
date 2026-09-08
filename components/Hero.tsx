"use client";

import Image from "next/image";
import { useLang, business } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative flex min-h-[640px] items-center overflow-hidden pt-[104px]"
    >
      {/* photographic background — optimized LCP element */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
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
              href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(t.heroWhatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-[#1eb457] hover:shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z" />
              </svg>
              {t.whatsapp}
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
