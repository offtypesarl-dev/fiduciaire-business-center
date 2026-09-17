"use client";

import Link from "next/link";
import { useLang, business } from "@/lib/i18n";
import { legalRoutes } from "@/lib/legal";
import { services } from "@/lib/content/services";
import { cities } from "@/lib/content/cities";

export default function Footer() {
  const { t, lang } = useLang();
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
            {t.footer.servicesTitle}
          </h4>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-brand-light">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/services" className="hover:text-brand-light">{t.nav.services}</Link></li>
            <li><Link href="/villes" className="hover:text-brand-light">{lang === "fr" ? "Zones desservies" : "Areas served"}</Link></li>
            <li><Link href="/guides" className="hover:text-brand-light">Guides</Link></li>
            <li><Link href="/a-propos" className="hover:text-brand-light">{t.nav.about}</Link></li>
            <li><Link href="/contact" className="hover:text-brand-light">{t.nav.contact}</Link></li>
          </ul>
          <ul className="mt-3 space-y-2 text-sm">
            {cities.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link href={`/villes/${c.slug}`} className="text-white/50 hover:text-brand-light">
                  Comptable à {c.name}
                </Link>
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
        <div className="container flex flex-col gap-4 py-6">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/60 sm:justify-start">
            <Link href={legalRoutes.mentions} className="hover:text-brand-light">
              {t.footer.mentions}
            </Link>
            <Link href={legalRoutes.confidentialite} className="hover:text-brand-light">
              {t.footer.privacy}
            </Link>
            <Link href={legalRoutes.conditions} className="hover:text-brand-light">
              {t.footer.terms}
            </Link>
          </nav>
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
            <p>
              © {year} {business.name}. {t.footer.rights}
            </p>
            <p>{t.footer.legal}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
