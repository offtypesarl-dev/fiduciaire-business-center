"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

export const content = {
  fr: {
    topbar: "Besoin d'un expert-comptable ? Appelez le",
    learnMore: "En savoir plus",
    nav: {
      services: "Services",
      about: "À propos",
      whyus: "Pourquoi nous",
      contact: "Contact",
      cta: "Demander un devis",
    },
    hero: {
      eyebrow: "Cabinet comptable agréé · El Jadida",
      title: "Votre partenaire de confiance en comptabilité et conseil",
      subtitle:
        "Fiduciaire & Business Center accompagne les entreprises et entrepreneurs d'El Jadida et de tout le Maroc : comptabilité, fiscalité, création de société et conseil stratégique.",
      ctaPrimary: "Prendre rendez-vous",
      ctaSecondary: "Découvrir nos services",
      stat1: "Depuis 2015",
      stat1label: "Au service des entreprises",
      stat2: "100%",
      stat2label: "Conformité fiscale & légale",
      stat3: "El Jadida",
      stat3label: "Présence locale, portée nationale",
    },
    trust: {
      title: "La rigueur d'un expert, la proximité d'un partenaire",
      text: "Dirigé par Adil Obbad, le cabinet met son expertise au service de votre réussite, avec un accompagnement personnalisé à chaque étape.",
    },
    services: {
      eyebrow: "Nos expertises",
      title: "Des services complets pour votre entreprise",
      subtitle:
        "De la tenue comptable au conseil stratégique, nous couvrons l'ensemble de vos besoins financiers, fiscaux et juridiques.",
      items: [
        {
          title: "Tenue de comptabilité",
          desc: "Gestion comptable complète, saisie, lettrage et établissement des états de synthèse selon les normes marocaines.",
        },
        {
          title: "Conseil fiscal & juridique",
          desc: "Optimisation fiscale, accompagnement juridique et sécurisation de vos décisions stratégiques.",
        },
        {
          title: "Création de société",
          desc: "Constitution de votre entreprise de A à Z : statuts, immatriculation RC, ICE et formalités administratives.",
        },
        {
          title: "Déclarations fiscales & sociales",
          desc: "TVA, IS, IR, CNSS : préparation et dépôt de vos déclarations dans le respect des délais légaux.",
        },
        {
          title: "Audit & révision comptable",
          desc: "Contrôle, fiabilisation et révision de vos comptes pour une transparence totale.",
        },
        {
          title: "Ingénierie de formation",
          desc: "Conception et mise en œuvre de programmes de formation adaptés à vos équipes.",
        },
        {
          title: "Conseil en gestion & organisation",
          desc: "Diagnostic, organisation et accompagnement pour piloter et développer votre activité.",
        },
      ],
      moreTitle: "Et bien plus encore",
      more: [
        "Accompagnement à la création d'entreprise",
        "Gestion de la paie",
        "Conseil social",
        "Études de faisabilité",
        "Dématérialisation comptable",
        "Assistance aux contrôles fiscaux",
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Fiduciaire & Business Center",
      lead: "Un cabinet à taille humaine, exigeant et engagé.",
      p1: "Fondé en 2015 à El Jadida par Adil Obbad, Fiduciaire & Business Center est un cabinet de comptabilité et de conseil dédié aux entrepreneurs, TPE, PME et professions libérales.",
      p2: "Notre mission : vous décharger de la complexité administrative, fiscale et comptable pour vous permettre de vous concentrer sur l'essentiel — développer votre activité en toute sérénité.",
      p3: "Nous combinons rigueur technique, réactivité et proximité pour bâtir une relation de confiance durable avec chacun de nos clients.",
      directorName: "Adil Obbad",
      directorRole: "Directeur Général & Fondateur",
      points: [
        "Conseil personnalisé et disponible",
        "Maîtrise de la réglementation marocaine",
        "Confidentialité et rigueur garanties",
      ],
    },
    why: {
      eyebrow: "Pourquoi nous choisir",
      title: "Une expertise au service de votre tranquillité",
      items: [
        {
          title: "Expertise locale",
          desc: "Une connaissance fine du tissu économique d'El Jadida et de la réglementation marocaine.",
        },
        {
          title: "Accompagnement sur mesure",
          desc: "Chaque client bénéficie d'un suivi personnalisé et d'un interlocuteur dédié.",
        },
        {
          title: "Réactivité",
          desc: "Des réponses claires et rapides à vos questions comptables et fiscales.",
        },
        {
          title: "Confidentialité",
          desc: "Vos données et vos intérêts sont protégés avec la plus grande rigueur.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Témoignages",
      title: "La confiance de nos clients",
      items: [
        {
          quote:
            "Un accompagnement comptable sérieux et toujours disponible. Le cabinet a structuré toute notre gestion administrative.",
          author: "Gérant de PME",
          role: "Secteur du BTP, El Jadida",
        },
        {
          quote:
            "Adil et son équipe nous ont accompagnés dès la création de notre société. Professionnalisme et clarté au rendez-vous.",
          author: "Entrepreneur",
          role: "Commerce & distribution",
        },
        {
          quote:
            "Des conseils fiscaux précieux qui nous ont fait gagner du temps et de l'argent. Je recommande vivement.",
          author: "Profession libérale",
          role: "Santé, El Jadida",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre projet",
      subtitle:
        "Contactez-nous pour un premier échange gratuit. Nous vous répondons rapidement.",
      addressLabel: "Adresse",
      address:
        "Bd Mohammed VI, ang. rue Surcouf, Imm. Chahir, 1er étage, appt. n°5, El Jadida",
      phoneLabel: "Téléphone",
      emailLabel: "Email",
      hoursLabel: "Horaires",
      hours: [
        "Lundi – Vendredi : 9h00 – 18h30",
        "Samedi : 9h00 – 13h00",
        "Dimanche : Fermé",
      ],
      formName: "Nom complet",
      formEmail: "Email",
      formPhone: "Téléphone",
      formMessage: "Votre message",
      formSubmit: "Envoyer le message",
      formNote: "* Champs obligatoires",
    },
    footer: {
      tagline:
        "Cabinet de comptabilité et de conseil agréé à El Jadida. Comptabilité, fiscalité, création de société et conseil.",
      quickLinks: "Liens rapides",
      servicesTitle: "Services",
      contactTitle: "Contact",
      rights: "Tous droits réservés.",
      legal: "SARL AU · Capital 50 000 MAD · RC 11313 · El Jadida",
    },
  },

  en: {
    topbar: "Need a certified accountant? Call us at",
    learnMore: "Learn more",
    nav: {
      services: "Services",
      about: "About",
      whyus: "Why us",
      contact: "Contact",
      cta: "Request a quote",
    },
    hero: {
      eyebrow: "Certified accounting firm · El Jadida",
      title: "Your trusted partner in accounting and business advisory",
      subtitle:
        "Fiduciaire & Business Center supports companies and entrepreneurs in El Jadida and across Morocco: accounting, taxation, company formation and strategic advisory.",
      ctaPrimary: "Book a meeting",
      ctaSecondary: "Explore our services",
      stat1: "Since 2015",
      stat1label: "Serving businesses",
      stat2: "100%",
      stat2label: "Tax & legal compliance",
      stat3: "El Jadida",
      stat3label: "Local presence, national reach",
    },
    trust: {
      title: "The rigor of an expert, the closeness of a partner",
      text: "Led by Adil Obbad, the firm puts its expertise at the service of your success, with personalized support at every step.",
    },
    services: {
      eyebrow: "Our expertise",
      title: "Complete services for your business",
      subtitle:
        "From bookkeeping to strategic advisory, we cover all your financial, tax and legal needs.",
      items: [
        {
          title: "Bookkeeping & accounting",
          desc: "Full accounting management, data entry, reconciliation and financial statements compliant with Moroccan standards.",
        },
        {
          title: "Tax & legal advisory",
          desc: "Tax optimization, legal guidance and securing your strategic decisions.",
        },
        {
          title: "Company formation",
          desc: "Setting up your company from A to Z: articles, RC registration, ICE and administrative formalities.",
        },
        {
          title: "Tax & social declarations",
          desc: "VAT, corporate tax, income tax, CNSS: preparing and filing your declarations within legal deadlines.",
        },
        {
          title: "Audit & accounting review",
          desc: "Control, validation and review of your accounts for full transparency.",
        },
        {
          title: "Training engineering",
          desc: "Designing and delivering training programs tailored to your teams.",
        },
        {
          title: "Management & organization consulting",
          desc: "Diagnosis, organization and support to steer and grow your business.",
        },
      ],
      moreTitle: "And much more",
      more: [
        "Business start-up support",
        "Payroll management",
        "Social advisory",
        "Feasibility studies",
        "Accounting digitalization",
        "Tax audit assistance",
      ],
    },
    about: {
      eyebrow: "About",
      title: "Fiduciaire & Business Center",
      lead: "A human-scale firm — demanding and committed.",
      p1: "Founded in 2015 in El Jadida by Adil Obbad, Fiduciaire & Business Center is an accounting and advisory firm dedicated to entrepreneurs, small businesses, SMEs and independent professionals.",
      p2: "Our mission: to free you from administrative, tax and accounting complexity so you can focus on what matters — growing your business with peace of mind.",
      p3: "We combine technical rigor, responsiveness and closeness to build a lasting relationship of trust with each of our clients.",
      directorName: "Adil Obbad",
      directorRole: "General Manager & Founder",
      points: [
        "Personalized, available advice",
        "Command of Moroccan regulations",
        "Guaranteed confidentiality and rigor",
      ],
    },
    why: {
      eyebrow: "Why choose us",
      title: "Expertise for your peace of mind",
      items: [
        {
          title: "Local expertise",
          desc: "Deep knowledge of El Jadida's business landscape and Moroccan regulations.",
        },
        {
          title: "Tailored support",
          desc: "Every client benefits from personalized follow-up and a dedicated contact.",
        },
        {
          title: "Responsiveness",
          desc: "Clear, fast answers to your accounting and tax questions.",
        },
        {
          title: "Confidentiality",
          desc: "Your data and interests are protected with the utmost rigor.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Trusted by our clients",
      items: [
        {
          quote:
            "Serious and always-available accounting support. The firm structured our entire administrative management.",
          author: "SME Manager",
          role: "Construction sector, El Jadida",
        },
        {
          quote:
            "Adil and his team supported us from the very creation of our company. Professional and clear throughout.",
          author: "Entrepreneur",
          role: "Trade & distribution",
        },
        {
          quote:
            "Valuable tax advice that saved us time and money. Highly recommended.",
          author: "Independent professional",
          role: "Healthcare, El Jadida",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project",
      subtitle:
        "Get in touch for a free first conversation. We reply quickly.",
      addressLabel: "Address",
      address:
        "Bd Mohammed VI, corner rue Surcouf, Imm. Chahir, 1st floor, apt. n°5, El Jadida",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Hours",
      hours: [
        "Monday – Friday: 9:00 AM – 6:30 PM",
        "Saturday: 9:00 AM – 1:00 PM",
        "Sunday: Closed",
      ],
      formName: "Full name",
      formEmail: "Email",
      formPhone: "Phone",
      formMessage: "Your message",
      formSubmit: "Send message",
      formNote: "* Required fields",
    },
    footer: {
      tagline:
        "Certified accounting and advisory firm in El Jadida. Accounting, taxation, company formation and consulting.",
      quickLinks: "Quick links",
      servicesTitle: "Services",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      legal: "SARL AU · Capital 50,000 MAD · RC 11313 · El Jadida",
    },
  },
};

export type Dict = (typeof content)["fr"];

export const business = {
  name: "Fiduciaire & Business Center",
  shortName: "FBC",
  phones: ["+212 523 39 22 99", "+212 661 71 83 29", "+212 660 33 44 80"],
  primaryPhone: "+212523392299",
  email: "fiduciaire.business.center@gmail.com",
  mapsQuery:
    "Fiduciaire+%26+Business+Center,+Bd+Mohammed+VI,+El+Jadida",
};

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
