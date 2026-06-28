"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang, business } from "@/lib/i18n";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#services", label: t.nav.services },
    { href: "/#about", label: t.nav.about },
    { href: "/#why", label: t.nav.whyus },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* green announcement bar */}
      <div className="bg-accent-green text-white">
        <div className="container flex h-9 items-center justify-center gap-2 text-xs font-medium sm:text-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>{t.topbar}</span>
          <a href={`tel:${business.primaryPhone}`} className="font-bold underline-offset-2 hover:underline">
            {business.phones[0]}
          </a>
        </div>
      </div>

      {/* main header */}
      <div
        className={`transition-shadow duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur"
        }`}
      >
        <div className="container flex h-[68px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/logo-mark.png"
              alt="Fiduciaire & Business Center"
              width={44}
              height={44}
              className="h-10 w-10 shrink-0"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[18px] font-extrabold text-navy-900 sm:text-[19px]">
                Fiduciaire <span className="text-brand-ink">&amp;</span> Business Center
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-navy-900/50">
                S.A.R.L · El Jadida
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-navy-900/80 transition-colors hover:text-brand-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center rounded-full bg-navy-50 p-0.5 text-xs font-bold sm:flex">
              <button
                onClick={() => setLang("fr")}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  lang === "fr" ? "bg-brand text-navy-900" : "text-navy-900/60"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  lang === "en" ? "bg-brand text-navy-900" : "text-navy-900/60"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={`tel:${business.primaryPhone}`}
              className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-brand-dark md:inline-flex"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {business.phones[0]}
            </a>

            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-navy-900 lg:hidden"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-navy-100 bg-white lg:hidden">
            <nav className="container flex flex-col py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-navy-50 py-3 text-[15px] font-medium text-navy-900/80"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => setLang("fr")}
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    lang === "fr" ? "bg-brand text-navy-900" : "bg-navy-50 text-navy-900"
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    lang === "en" ? "bg-brand text-navy-900" : "bg-navy-50 text-navy-900"
                  }`}
                >
                  EN
                </button>
                <a
                  href={`tel:${business.primaryPhone}`}
                  className="ml-auto text-sm font-bold text-brand-ink"
                >
                  {business.phones[0]}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
