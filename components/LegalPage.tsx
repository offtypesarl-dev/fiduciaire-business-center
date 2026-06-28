"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { legalContent, LegalKey } from "@/lib/legal";

export default function LegalPage({ docKey }: { docKey: LegalKey }) {
  const { t, lang } = useLang();
  const doc = legalContent[lang][docKey];
  const backLabel = lang === "fr" ? "Retour à l'accueil" : "Back to home";

  return (
    <main>
      <Header />

      <article className="bg-white pb-20 pt-[136px]">
        <div className="container max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink transition-colors hover:text-navy-900"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            {backLabel}
          </Link>

          <h1 className="h-display mt-6 text-3xl text-navy-900 md:text-[40px]">
            {doc.title}
          </h1>
          <p className="mt-2 text-sm text-navy-900/50">{doc.updated}</p>

          <div className="mt-10 space-y-10">
            {doc.sections.map((s, i) => (
              <section key={i}>
                <h2 className="h-display text-xl text-navy-900">{s.heading}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-navy-900/70">
                  {s.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((li, k) => (
                      <li key={k} className="flex items-start gap-2.5 text-navy-900/70">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}

                {s.links && (
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {s.links.map((l, k) => (
                      <Link
                        key={k}
                        href={l.href}
                        className="text-sm font-semibold text-brand-ink underline-offset-4 hover:underline"
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
