// Central SEO / business configuration and JSON-LD builders.
// Single source of truth for structured data, sitemap, robots and metadata.

export const SITE_URL = "https://fiduciaire-business-center.vercel.app";

export const BUSINESS = {
  name: "Fiduciaire & Business Center",
  legalName: "Fiduciaire & Business Center SARL AU",
  shortName: "FBC",
  founder: "Adil Obbad",
  foundingYear: "2015",
  email: "fiduciaire.business.center@gmail.com",
  // Landline (primary display) + mobiles. WhatsApp uses the first mobile.
  phones: ["+212 523 39 22 99", "+212 661 71 83 29", "+212 660 33 44 80"],
  primaryPhone: "+212523392299",
  whatsapp: "212661718329", // digits only, no + — used for wa.me links
  street: "Bd Mohammed VI, ang. rue Surcouf, Imm. Chahir, 1er étage, appt. n°5",
  city: "El Jadida",
  region: "Casablanca-Settat",
  postalCode: "24000",
  country: "MA",
  // El Jadida city-centre coordinates (approx — refine with exact pin if available)
  geo: { lat: 33.2316, lng: -8.5007 },
  rc: "11313",
  capital: "50 000 MAD",
  priceRange: "$$",
  areaServed: ["El Jadida", "Casablanca-Settat", "Maroc"],
} as const;

export const WHATSAPP_LINK = (message?: string) =>
  `https://wa.me/${BUSINESS.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

// --- JSON-LD graph -----------------------------------------------------------

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "09:00",
    closes: "13:00",
  },
];

const services = [
  "Tenue de comptabilité",
  "Conseil fiscal & juridique",
  "Création de société",
  "Déclarations fiscales & sociales",
  "Audit & révision comptable",
  "Ingénierie de formation",
  "Conseil en gestion & organisation",
];

export function organizationLd() {
  return {
    "@type": "AccountingService",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    email: BUSINESS.email,
    telephone: BUSINESS.primaryPhone,
    image: `${SITE_URL}/og.png`,
    logo: `${SITE_URL}/logo-full.png`,
    foundingDate: BUSINESS.foundingYear,
    founder: { "@type": "Person", name: BUSINESS.founder },
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "MAD",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: openingHours,
    contactPoint: BUSINESS.phones.map((telephone) => ({
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      areaServed: "MA",
      availableLanguage: ["French", "English", "Arabic"],
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services comptables et de conseil",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
  };
}

export function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    inLanguage: ["fr", "en"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

// Bilingual FAQ — feeds both the on-page FAQ section and FAQPage rich results.
export const FAQ = {
  fr: [
    {
      q: "Où se trouve votre cabinet comptable ?",
      a: "Notre cabinet Fiduciaire & Business Center est situé Bd Mohammed VI, angle rue Surcouf, Imm. Chahir, 1er étage, à El Jadida. Nous accompagnons les entreprises d'El Jadida et de tout le Maroc.",
    },
    {
      q: "Quels services propose Fiduciaire & Business Center ?",
      a: "Nous proposons la tenue de comptabilité, le conseil fiscal et juridique, la création de société, les déclarations fiscales et sociales (TVA, IS, IR, CNSS), l'audit et la révision comptable, l'ingénierie de formation et le conseil en gestion.",
    },
    {
      q: "Accompagnez-vous la création d'une société au Maroc ?",
      a: "Oui. Nous constituons votre entreprise de A à Z : rédaction des statuts, immatriculation au registre du commerce (RC), obtention de l'ICE et l'ensemble des formalités administratives.",
    },
    {
      q: "Le premier rendez-vous est-il gratuit ?",
      a: "Oui, le premier échange est gratuit et sans engagement. Contactez-nous par téléphone, WhatsApp ou via le formulaire pour discuter de votre projet.",
    },
    {
      q: "Travaillez-vous avec les TPE, PME et professions libérales ?",
      a: "Absolument. Le cabinet est dédié aux entrepreneurs, TPE, PME et professions libérales, avec un accompagnement personnalisé et un interlocuteur dédié.",
    },
  ],
  en: [
    {
      q: "Where is your accounting firm located?",
      a: "Fiduciaire & Business Center is located on Bd Mohammed VI, corner of rue Surcouf, Imm. Chahir, 1st floor, in El Jadida. We support businesses in El Jadida and across Morocco.",
    },
    {
      q: "What services does Fiduciaire & Business Center offer?",
      a: "We offer bookkeeping and accounting, tax and legal advisory, company formation, tax and social declarations (VAT, corporate tax, income tax, CNSS), audit and accounting review, training engineering and management consulting.",
    },
    {
      q: "Do you help with setting up a company in Morocco?",
      a: "Yes. We handle your company formation from A to Z: drafting the articles of association, registration with the trade register (RC), obtaining the ICE and all administrative formalities.",
    },
    {
      q: "Is the first consultation free?",
      a: "Yes, the first conversation is free with no obligation. Reach us by phone, WhatsApp or through the form to discuss your project.",
    },
    {
      q: "Do you work with small businesses, SMEs and independent professionals?",
      a: "Absolutely. The firm is dedicated to entrepreneurs, small businesses, SMEs and independent professionals, with personalized support and a dedicated contact.",
    },
  ],
} as const;

export function faqLd(lang: "fr" | "en" = "fr") {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ[lang].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function jsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationLd(), websiteLd(), faqLd("fr")],
  };
}
