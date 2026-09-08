"use client";

import { useLang, business } from "@/lib/i18n";

const waLink = (msg: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24z" />
    </svg>
  );
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function FloatingActions() {
  const { t } = useLang();
  const message = t.heroWhatsappMsg;

  return (
    <>
      {/* Floating WhatsApp — desktop + mobile (sits above the mobile bar) */}
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp}
        className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-[#25D366]/20 transition-transform hover:scale-105 md:bottom-6"
      >
        <WhatsAppIcon size={28} />
      </a>

      {/* Sticky mobile action bar — Call + WhatsApp + Devis */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-navy-100 bg-white/95 backdrop-blur md:hidden">
        <a
          href={`tel:${business.primaryPhone}`}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold text-navy-900"
        >
          <PhoneIcon />
          {t.callNow}
        </a>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 border-x border-navy-100 py-2.5 text-xs font-semibold text-[#128C4B]"
        >
          <WhatsAppIcon />
          {t.whatsapp}
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-0.5 bg-brand py-2.5 text-xs font-bold text-navy-900"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6" />
          </svg>
          {t.getQuote}
        </a>
      </div>
    </>
  );
}
