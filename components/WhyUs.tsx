"use client";

import { useLang } from "@/lib/i18n";

const icons = [
  "M12 21s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
];

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section id="why" className="section relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            {t.why.eyebrow}
          </span>
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            {t.why.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((it, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-gold ring-1 ring-white/10 sm:mx-0">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[i % icons.length]} />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
