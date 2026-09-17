import Link from "next/link";
import { BUSINESS, WHATSAPP_LINK } from "@/lib/seo";

/** Reusable conversion band for content pages. */
export default function CtaBand({
  title = "Un premier échange gratuit, sans engagement",
  subtitle = "Parlez de votre projet à Fiduciaire & Business Center. Réponse rapide par téléphone, WhatsApp ou email.",
  waMessage = "Bonjour Fiduciaire & Business Center, je souhaite un premier échange gratuit.",
}: {
  title?: string;
  subtitle?: string;
  waMessage?: string;
}) {
  return (
    <section className="mt-16 overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 text-center text-white md:px-12">
      <h2 className="h-display text-2xl text-white md:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-white/70">{subtitle}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href={`tel:${BUSINESS.primaryPhone}`} className="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Appeler le cabinet
        </a>
        <a
          href={WHATSAPP_LINK(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#128C4B] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-[#0f7a41] hover:shadow-lg"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.9 9.9 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.36-.5.05-1.13.24-3.8-.79-3.2-1.26-5.26-4.5-5.42-4.71-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4.84-.4.21 0 .42 0 .6.01.2.01.46-.07.72.55.27.63.9 2.2.98 2.36.08.16.13.35.03.55-.1.21-.16.34-.31.52-.16.18-.33.4-.47.54-.16.16-.32.33-.14.64.18.32.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.54.31.16.5.13.68-.08.18-.21.79-.92.99-1.24.21-.32.42-.26.71-.16.29.11 1.86.88 2.18 1.04.32.16.53.24.61.37.08.14.08.79-.16 1.47z" />
          </svg>
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:border-white hover:bg-white/10"
        >
          Demander un devis
        </Link>
      </div>
      <p className="mt-5 text-xs text-white/50">
        {BUSINESS.phones.join(" · ")}
      </p>
    </section>
  );
}
