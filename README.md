# Fiduciaire & Business Center — Website

Bilingual (FR/EN) marketing website for **Fiduciaire & Business Center**, a certified accounting and advisory firm in El Jadida, Morocco, led by **Adil Obbad**.

Inspired in structure by dimovtax.com, fully adapted to FBC's services, contact details and brand.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Google Fonts (Inter + Playfair Display)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Features

- Bilingual content (French / English) via a lightweight client-side language toggle (`lib/i18n.tsx`)
- Sections: Hero, Services, About (Adil Obbad), Why us, Testimonials, Contact (with map + mailto form), Footer
- Fully responsive, navy & gold professional palette
- SEO metadata + Open Graph

## Editing content

All copy lives in **`lib/i18n.tsx`** under the `content.fr` and `content.en` objects.
Business contact details (phones, email, address, maps query) live in the `business` object in the same file.

## Deployment

Designed for **Vercel**. Push to GitHub, import the repo in Vercel — zero config.

## Notes / placeholders

- Logo is a text wordmark (no logo file supplied yet).
- Adil's photo is an "AO" monogram placeholder.
- Testimonials are representative placeholders — replace with real client reviews when available.
- Opening hours are reasonable defaults — confirm and adjust in `lib/i18n.tsx`.
