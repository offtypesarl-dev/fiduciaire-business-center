"use client";

import { useState } from "react";
import { useLang, business } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");
    const subject = encodeURIComponent(`Demande de contact — ${name}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* info */}
          <div>
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2 className="h-display text-3xl text-navy-900 md:text-[40px]">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-lg text-navy-900/60">
              {t.contact.subtitle}
            </p>

            <div className="mt-8 space-y-6">
              <ContactRow
                label={t.contact.addressLabel}
                icon="M12 21s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              >
                {t.contact.address}
              </ContactRow>

              <ContactRow
                label={t.contact.phoneLabel}
                icon="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
              >
                {business.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block hover:text-brand-ink"
                  >
                    {p}
                  </a>
                ))}
              </ContactRow>

              <ContactRow
                label={t.contact.emailLabel}
                icon="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6"
              >
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-brand-ink break-all"
                >
                  {business.email}
                </a>
              </ContactRow>

              <ContactRow
                label={t.contact.hoursLabel}
                icon="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2"
              >
                {t.contact.hours.map((h, i) => (
                  <span key={i} className="block">
                    {h}
                  </span>
                ))}
              </ContactRow>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-navy-100">
              <iframe
                title="Localisation"
                src={`https://www.google.com/maps?q=${business.mapsQuery}&output=embed`}
                width="100%"
                height="220"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* form */}
          <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label={`${t.contact.formName} *`} name="name" required />
              <Field
                label={`${t.contact.formEmail} *`}
                name="email"
                type="email"
                required
              />
              <Field label={t.contact.formPhone} name="phone" type="tel" />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy-900">
                  {t.contact.formMessage} *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {t.contact.formSubmit}
              </button>
              {sent && (
                <p className="text-center text-sm text-brand-ink">
                  ✓ {business.email}
                </p>
              )}
              <p className="text-center text-xs text-navy-900/40">
                {t.contact.formNote}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  icon,
  children,
}: {
  label: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand text-navy-900">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d={icon} />
        </svg>
      </div>
      <div>
        <div className="text-sm font-semibold uppercase tracking-wider text-navy-900/40">
          {label}
        </div>
        <div className="mt-1 text-navy-900/80">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-lg border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
      />
    </div>
  );
}
