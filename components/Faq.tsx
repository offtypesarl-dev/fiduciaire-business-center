"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { FAQ } from "@/lib/seo";

export default function Faq() {
  const { t, lang } = useLang();
  const items = FAQ[lang];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-navy-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="h-display text-3xl text-navy-900 md:text-[40px]">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-lg text-navy-900/60">{t.faq.subtitle}</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
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
                      className={`shrink-0 text-brand-ink transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-navy-900/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
