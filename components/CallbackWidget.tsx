"use client";

import { useState } from "react";
import { useLang, business } from "@/lib/i18n";

// Low-friction lead capture: visitor drops only their phone number and one tap
// sends a callback request to the firm's WhatsApp. No backend required.
export default function CallbackWidget() {
  const { t } = useLang();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const num = phone.trim();
    if (!num) return;
    const text = `${t.callback.msg} ${num}`;
    window.open(
      `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="rounded-2xl border border-brand/40 bg-brand-50 p-6 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand text-navy-900">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <div>
          <h3 className="h-display text-lg text-navy-900">{t.callback.title}</h3>
          <p className="mt-1 text-sm text-navy-900/60">{t.callback.subtitle}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="callback-phone" className="sr-only">
          {t.callback.placeholder}
        </label>
        <input
          id="callback-phone"
          type="tel"
          inputMode="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t.callback.placeholder}
          className="w-full flex-1 rounded-lg border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
        />
        <button
          type="submit"
          className="shrink-0 rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy-800"
        >
          {t.callback.button}
        </button>
      </form>
      <p className="mt-3 text-xs text-navy-900/40">{t.callback.note}</p>
    </div>
  );
}
