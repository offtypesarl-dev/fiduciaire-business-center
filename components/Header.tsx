"use client";

import { useEffect, useState } from "react";
import { useLang, business } from "@/lib/i18n";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#why", label: t.nav.whyus },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 shadow-lg backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold font-serif text-lg font-bold text-navy-950">
            F
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold text-white">
              Fiduciaire <span className="text-gold">&amp;</span> Business
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold-light">
              Center · El Jadida
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center rounded-full border border-white/20 text-xs font-semibold sm:flex">
            <button
              onClick={() => setLang("fr")}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                lang === "fr" ? "bg-gold text-navy-950" : "text-white/70"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                lang === "en" ? "bg-gold text-navy-950" : "text-white/70"
              }`}
            >
              EN
            </button>
          </div>

          <a href="#contact" className="btn-primary hidden md:inline-flex">
            {t.nav.cta}
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <nav className="container flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-medium text-white/80"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => setLang("fr")}
                className={`rounded-md px-4 py-2 text-sm font-semibold ${
                  lang === "fr" ? "bg-gold text-navy-950" : "bg-white/10 text-white"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-md px-4 py-2 text-sm font-semibold ${
                  lang === "en" ? "bg-gold text-navy-950" : "bg-white/10 text-white"
                }`}
              >
                EN
              </button>
              <a
                href={`tel:${business.primaryPhone}`}
                className="ml-auto text-sm font-semibold text-gold"
              >
                {business.phones[0]}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
