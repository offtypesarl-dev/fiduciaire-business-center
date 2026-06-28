"use client";

import { useLang, business } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const year = 2026;

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <picture>
            <source srcSet="/logo-full.webp" type="image/webp" />
            <img
              src="/logo-full.png"
              alt="Fiduciaire & Business Center"
              width={220}
              height={66}
              className="h-12 w-auto"
            />
          </picture>
          <p className="mt-4 text-sm leading-relaxed">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#services" className="hover:text-brand-light">{t.nav.services}</a></li>
            <li><a href="#about" className="hover:text-brand-light">{t.nav.about}</a></li>
            <li><a href="#why" className="hover:text-brand-light">{t.nav.whyus}</a></li>
            <li><a href="#contact" className="hover:text-brand-light">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.servicesTitle}
          </h4>
          <ul className="space-y-2.5 text-sm">
            {t.services.items.slice(0, 5).map((s, i) => (
              <li key={i}>
                <a href="#services" className="hover:text-brand-light">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.contactTitle}
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>{t.contact.address}</li>
            <li>
              <a href={`tel:${business.primaryPhone}`} className="hover:text-brand-light">
                {business.phones[0]}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="break-all hover:text-brand-light">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {business.name}. {t.footer.rights}
          </p>
          <p>{t.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
