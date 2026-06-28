import type { Lang } from "./i18n";

export type LegalKey = "mentions" | "confidentialite" | "conditions";

type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  links?: { label: string; href: string }[];
};

export type LegalDoc = {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
};

export const legalRoutes: Record<LegalKey, string> = {
  mentions: "/mentions-legales",
  confidentialite: "/confidentialite",
  conditions: "/conditions-generales",
};

export const legalContent: Record<Lang, Record<LegalKey, LegalDoc>> = {
  fr: {
    mentions: {
      title: "Mentions légales",
      updated: "Dernière mise à jour : 28 juin 2026",
      sections: [
        {
          heading: "Éditeur du site",
          paragraphs: [
            "Le présent site est édité par la société Fiduciaire & Business Center, cabinet de comptabilité et de conseil situé à El Jadida.",
          ],
          list: [
            "Raison sociale : Fiduciaire & Business Center",
            "Forme juridique : Société à Responsabilité Limitée à Associé Unique (SARL AU)",
            "Capital social : 50 000 MAD",
            "Siège social : Bd Mohammed VI, ang. rue Surcouf, Imm. Chahir, 1er étage, appt. n°5, El Jadida, Maroc",
            "Registre du Commerce (RC) : 11313 – El Jadida",
            "Identifiant Commun de l'Entreprise (ICE) : 000103774000044",
            "Téléphone : +212 523 39 22 99",
            "Email : fiduciaire.business.center@gmail.com",
          ],
        },
        {
          heading: "Direction de la publication",
          paragraphs: [
            "Le directeur de la publication est M. Adil Obbad, en sa qualité de Directeur Général et fondateur de Fiduciaire & Business Center.",
          ],
        },
        {
          heading: "Hébergement",
          paragraphs: [
            "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis (https://vercel.com).",
          ],
        },
        {
          heading: "Propriété intellectuelle",
          paragraphs: [
            "L'ensemble des éléments du site (textes, logo, charte graphique, images et structure) est la propriété exclusive de Fiduciaire & Business Center, sauf mention contraire. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite et constituerait une contrefaçon au sens de la législation marocaine.",
          ],
        },
        {
          heading: "Données personnelles",
          paragraphs: [
            "Le traitement de vos données personnelles est décrit dans notre Politique de confidentialité.",
          ],
          links: [{ label: "Lire la Politique de confidentialité", href: "/confidentialite" }],
        },
        {
          heading: "Droit applicable",
          paragraphs: [
            "Les présentes mentions légales sont régies par le droit marocain. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence exclusive des tribunaux d'El Jadida.",
          ],
        },
      ],
    },
    confidentialite: {
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : 28 juin 2026",
      sections: [
        {
          heading: "Préambule",
          paragraphs: [
            "Fiduciaire & Business Center accorde une grande importance à la protection de votre vie privée et de vos données personnelles, conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et aux prescriptions de la CNDP (Commission Nationale de contrôle de la protection des Données à caractère Personnel).",
          ],
        },
        {
          heading: "Responsable du traitement",
          paragraphs: [
            "Le responsable du traitement des données est la société Fiduciaire & Business Center, représentée par M. Adil Obbad. Pour toute question : fiduciaire.business.center@gmail.com.",
          ],
        },
        {
          heading: "Données collectées",
          paragraphs: [
            "Lorsque vous utilisez notre formulaire de contact, nous traitons les données que vous choisissez de nous communiquer : nom complet, adresse email, numéro de téléphone et le contenu de votre message.",
          ],
        },
        {
          heading: "Mode de collecte",
          paragraphs: [
            "Notre formulaire de contact ouvre votre logiciel de messagerie afin que vous nous adressiez votre demande par email. Les informations que vous saisissez ne sont donc pas enregistrées sur ce site web : elles sont transmises directement à notre adresse email.",
          ],
        },
        {
          heading: "Finalité du traitement",
          paragraphs: [
            "Vos données sont utilisées uniquement pour répondre à vos demandes, vous recontacter et assurer le suivi de notre relation. Elles ne sont jamais vendues ni cédées à des tiers à des fins commerciales.",
          ],
        },
        {
          heading: "Durée de conservation",
          paragraphs: [
            "Vos données sont conservées pour la durée nécessaire au traitement de votre demande et, le cas échéant, pour la durée de notre relation contractuelle, augmentée des délais légaux de conservation applicables.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Ce site ne dépose pas de cookies de suivi publicitaire ou de mesure d'audience. Certaines pages intègrent un plan Google Maps susceptible de déposer des cookies tiers émanant de Google ; vous pouvez les contrôler via les paramètres de votre navigateur.",
          ],
        },
        {
          heading: "Hébergement et sécurité",
          paragraphs: [
            "Le site est hébergé par Vercel Inc. Des journaux techniques (adresse IP, données de connexion) peuvent être générés automatiquement à des fins de sécurité et de bon fonctionnement du service.",
          ],
        },
        {
          heading: "Vos droits",
          paragraphs: [
            "Conformément à la loi 09-08, vous disposez des droits suivants sur vos données :",
          ],
          list: [
            "Droit d'accès et d'information",
            "Droit de rectification",
            "Droit d'opposition",
            "Droit de suppression",
          ],
        },
        {
          heading: "Exercice de vos droits & contact",
          paragraphs: [
            "Pour exercer vos droits ou pour toute question relative à la présente politique, contactez-nous à fiduciaire.business.center@gmail.com ou au +212 523 39 22 99.",
          ],
        },
      ],
    },
    conditions: {
      title: "Conditions générales d'utilisation",
      updated: "Dernière mise à jour : 28 juin 2026",
      sections: [
        {
          heading: "Objet",
          paragraphs: [
            "Les présentes conditions générales d'utilisation (CGU) régissent l'accès et l'utilisation du site internet de Fiduciaire & Business Center. En accédant au site, vous acceptez sans réserve les présentes CGU.",
          ],
        },
        {
          heading: "Accès au site",
          paragraphs: [
            "Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Fiduciaire & Business Center s'efforce d'assurer la disponibilité du site mais ne saurait être tenue responsable des interruptions, notamment pour des raisons de maintenance, de mise à jour ou de force majeure.",
          ],
        },
        {
          heading: "Contenu et responsabilité",
          paragraphs: [
            "Les informations présentées sur ce site le sont à titre informatif et général. Elles ne constituent pas un conseil comptable, fiscal ou juridique personnalisé et n'engagent pas contractuellement le cabinet. Toute prestation fait l'objet d'une lettre de mission ou d'un contrat distinct. Fiduciaire & Business Center s'efforce d'assurer l'exactitude des informations diffusées mais ne peut en garantir l'exhaustivité ni l'actualité permanente.",
          ],
        },
        {
          heading: "Propriété intellectuelle",
          paragraphs: [
            "L'ensemble des contenus du site est protégé par le droit de la propriété intellectuelle. Toute utilisation non autorisée est interdite (voir les Mentions légales).",
          ],
          links: [{ label: "Voir les Mentions légales", href: "/mentions-legales" }],
        },
        {
          heading: "Liens externes",
          paragraphs: [
            "Le site peut contenir des liens vers des sites tiers. Fiduciaire & Business Center n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou à leur politique de confidentialité.",
          ],
        },
        {
          heading: "Données personnelles",
          paragraphs: [
            "Le traitement de vos données personnelles est détaillé dans notre Politique de confidentialité.",
          ],
          links: [{ label: "Lire la Politique de confidentialité", href: "/confidentialite" }],
        },
        {
          heading: "Droit applicable & juridiction",
          paragraphs: [
            "Les présentes CGU sont soumises au droit marocain. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence exclusive des tribunaux d'El Jadida.",
          ],
        },
        {
          heading: "Modification des CGU",
          paragraphs: [
            "Fiduciaire & Business Center se réserve le droit de modifier les présentes CGU à tout moment. La version applicable est celle en vigueur au moment de votre visite.",
          ],
        },
      ],
    },
  },

  en: {
    mentions: {
      title: "Legal notice",
      updated: "Last updated: 28 June 2026",
      sections: [
        {
          heading: "Site publisher",
          paragraphs: [
            "This website is published by Fiduciaire & Business Center, an accounting and advisory firm based in El Jadida, Morocco.",
          ],
          list: [
            "Company name: Fiduciaire & Business Center",
            "Legal form: Single-member Limited Liability Company (SARL AU)",
            "Share capital: 50,000 MAD",
            "Registered office: Bd Mohammed VI, corner rue Surcouf, Imm. Chahir, 1st floor, apt. n°5, El Jadida, Morocco",
            "Trade Register (RC): 11313 – El Jadida",
            "Common Enterprise Identifier (ICE): 000103774000044",
            "Phone: +212 523 39 22 99",
            "Email: fiduciaire.business.center@gmail.com",
          ],
        },
        {
          heading: "Publication director",
          paragraphs: [
            "The publication director is Mr. Adil Obbad, in his capacity as General Manager and founder of Fiduciaire & Business Center.",
          ],
        },
        {
          heading: "Hosting",
          paragraphs: [
            "This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (https://vercel.com).",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "All elements of the site (text, logo, visual identity, images and structure) are the exclusive property of Fiduciaire & Business Center unless otherwise stated. Any reproduction, representation, modification or distribution, in whole or in part, without prior written authorization is prohibited and would constitute infringement under Moroccan law.",
          ],
        },
        {
          heading: "Personal data",
          paragraphs: [
            "The processing of your personal data is described in our Privacy Policy.",
          ],
          links: [{ label: "Read the Privacy Policy", href: "/confidentialite" }],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "This legal notice is governed by Moroccan law. Any dispute relating to its interpretation or performance falls under the exclusive jurisdiction of the courts of El Jadida.",
          ],
        },
      ],
    },
    confidentialite: {
      title: "Privacy policy",
      updated: "Last updated: 28 June 2026",
      sections: [
        {
          heading: "Introduction",
          paragraphs: [
            "Fiduciaire & Business Center places great importance on protecting your privacy and personal data, in accordance with Law No. 09-08 on the protection of individuals with regard to the processing of personal data and the requirements of the CNDP (the Moroccan national data protection authority).",
          ],
        },
        {
          heading: "Data controller",
          paragraphs: [
            "The data controller is Fiduciaire & Business Center, represented by Mr. Adil Obbad. For any question: fiduciaire.business.center@gmail.com.",
          ],
        },
        {
          heading: "Data collected",
          paragraphs: [
            "When you use our contact form, we process the data you choose to provide: full name, email address, phone number and the content of your message.",
          ],
        },
        {
          heading: "How data is collected",
          paragraphs: [
            "Our contact form opens your email client so that you can send us your request by email. The information you enter is therefore not stored on this website: it is sent directly to our email address.",
          ],
        },
        {
          heading: "Purpose of processing",
          paragraphs: [
            "Your data is used solely to respond to your requests, contact you back and follow up on our relationship. It is never sold or transferred to third parties for commercial purposes.",
          ],
        },
        {
          heading: "Retention period",
          paragraphs: [
            "Your data is kept for the time necessary to process your request and, where applicable, for the duration of our contractual relationship, plus any applicable legal retention periods.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "This site does not place advertising or analytics tracking cookies. Some pages embed a Google Maps map that may set third-party cookies from Google; you can control these through your browser settings.",
          ],
        },
        {
          heading: "Hosting and security",
          paragraphs: [
            "The site is hosted by Vercel Inc. Technical logs (IP address, connection data) may be generated automatically for security and proper operation of the service.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "In accordance with Law 09-08, you have the following rights over your data:",
          ],
          list: [
            "Right of access and information",
            "Right to rectification",
            "Right to object",
            "Right to erasure",
          ],
        },
        {
          heading: "Exercising your rights & contact",
          paragraphs: [
            "To exercise your rights or for any question regarding this policy, contact us at fiduciaire.business.center@gmail.com or +212 523 39 22 99.",
          ],
        },
      ],
    },
    conditions: {
      title: "Terms of use",
      updated: "Last updated: 28 June 2026",
      sections: [
        {
          heading: "Purpose",
          paragraphs: [
            "These terms of use govern access to and use of the Fiduciaire & Business Center website. By accessing the site, you accept these terms without reservation.",
          ],
        },
        {
          heading: "Access to the site",
          paragraphs: [
            "The site is freely accessible to any user with an internet connection. Fiduciaire & Business Center strives to keep the site available but cannot be held liable for interruptions, in particular for maintenance, updates or force majeure.",
          ],
        },
        {
          heading: "Content and liability",
          paragraphs: [
            "The information presented on this site is provided for general informational purposes. It does not constitute personalized accounting, tax or legal advice and does not contractually bind the firm. Any engagement is subject to a separate engagement letter or contract. Fiduciaire & Business Center strives to ensure the accuracy of the information published but cannot guarantee its completeness or that it is always up to date.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "All site content is protected by intellectual property law. Any unauthorized use is prohibited (see the Legal notice).",
          ],
          links: [{ label: "See the Legal notice", href: "/mentions-legales" }],
        },
        {
          heading: "External links",
          paragraphs: [
            "The site may contain links to third-party websites. Fiduciaire & Business Center has no control over these sites and disclaims any responsibility for their content or privacy practices.",
          ],
        },
        {
          heading: "Personal data",
          paragraphs: [
            "The processing of your personal data is detailed in our Privacy Policy.",
          ],
          links: [{ label: "Read the Privacy Policy", href: "/confidentialite" }],
        },
        {
          heading: "Governing law & jurisdiction",
          paragraphs: [
            "These terms are governed by Moroccan law. Any dispute relating to their interpretation or performance falls under the exclusive jurisdiction of the courts of El Jadida.",
          ],
        },
        {
          heading: "Changes to the terms",
          paragraphs: [
            "Fiduciaire & Business Center reserves the right to modify these terms at any time. The applicable version is the one in force at the time of your visit.",
          ],
        },
      ],
    },
  },
};
