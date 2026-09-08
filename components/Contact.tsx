"use client";

import { useState } from "react";
import { useLang, business } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const buildLead = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const message = (data.get("message") as string) || "";
    return { name, email, phone, message };
  };

  // Primary lead path: WhatsApp deep link (works reliably on every device in Morocco).
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone, message } = buildLead(e.currentTarget);
    const text =
      `${t.heroWhatsappMsg}\n\n` +
      `${t.contact.formName}: ${name}\n` +
      `${t.contact.formEmail}: ${email}\n` +
      `${t.contact.formPhone}: ${phone}\n\n${message}`;
    window.open(
      `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  };

  // Fallback lead path: prefilled email.
  const handleEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const form = e.currentTarget.closest("form");
    if (!form) return;
    const { name, email, phone, message } = buildLead(form);
    const subject = encodeURIComponent(`Demande de contact — ${name}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\n${message}`
    );
    e.currentTarget.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
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
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-[#1eb457] hover:shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z" />
                </svg>
                {t.formWhatsapp}
              </button>
              <a
                href={`mailto:${business.email}`}
                onClick={handleEmail}
                className="block text-center text-sm font-medium text-brand-ink underline-offset-2 hover:underline"
              >
                {t.formEmailAlt}
              </a>
              {sent && (
                <p className="text-center text-sm font-medium text-accent-green">
                  ✓ {t.formSuccess}
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
