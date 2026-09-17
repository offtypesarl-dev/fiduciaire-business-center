import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import Prose from "@/components/content/Prose";
import CtaBand from "@/components/content/CtaBand";
import RelatedLinks from "@/components/content/RelatedLinks";
import type { Section } from "@/lib/content/types";
import { absUrl, breadcrumbLd, BUSINESS } from "@/lib/seo";

const path = "/a-propos";

export const metadata: Metadata = {
  title: "À propos — Fiduciaire & Business Center, El Jadida",
  description:
    "Fondé en 2015 par Adil Obbad, Fiduciaire & Business Center est un cabinet comptable et de conseil à El Jadida dédié aux TPE, PME et professions libérales du Maroc.",
  keywords: ["Adil Obbad", "cabinet comptable El Jadida", "fiduciaire El Jadida"],
  alternates: { canonical: path },
  openGraph: {
    type: "profile",
    title: "À propos — Fiduciaire & Business Center, El Jadida",
    description:
      "Cabinet comptable et de conseil à El Jadida, fondé en 2015 par Adil Obbad.",
    url: absUrl(path),
  },
};

const sections: Section[] = [
  {
    heading: "Un cabinet à taille humaine, exigeant et engagé",
    body: [
      "Fondé en 2015 à El Jadida par Adil Obbad, Fiduciaire & Business Center est un cabinet de comptabilité et de conseil dédié aux entrepreneurs, TPE, PME et professions libérales. Notre vocation : vous décharger de la complexité administrative, fiscale et comptable pour vous permettre de vous concentrer sur le développement de votre activité.",
      "Nous combinons rigueur technique, réactivité et proximité pour construire une relation de confiance durable avec chacun de nos clients. Chaque dossier est suivi par un interlocuteur dédié qui connaît votre entreprise.",
    ],
  },
  {
    heading: "Adil Obbad, Directeur Général & Fondateur",
    body: [
      "À la tête du cabinet, Adil Obbad met son expertise de la comptabilité et de la fiscalité marocaines au service des projets de ses clients. Sa conviction : une bonne gestion comptable n'est pas une contrainte, mais un levier de décision et de sérénité pour le dirigeant.",
    ],
  },
  {
    heading: "Nos engagements",
    bullets: [
      "Conseil personnalisé et disponible, avec un interlocuteur unique",
      "Maîtrise de la réglementation comptable et fiscale marocaine (CGNC, CGI 2026)",
      "Confidentialité et rigueur garanties sur l'ensemble de vos données",
      "Transparence sur nos honoraires et nos délais",
    ],
  },
  {
    heading: "Informations légales",
    body: [
      `Fiduciaire & Business Center est une ${BUSINESS.legalName.includes("SARL") ? "SARL AU" : "société"} immatriculée au registre du commerce d'El Jadida sous le RC ${BUSINESS.rc}, au capital de ${BUSINESS.capital}. Siège : ${BUSINESS.street}, ${BUSINESS.city}.`,
    ],
  },
];

export default function AProposPage() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path },
  ];

  const serviceItems = [
    { href: "/services/tenue-comptabilite", label: "Tenue de comptabilité", desc: "Votre comptabilité tenue au quotidien." },
    { href: "/services/creation-entreprise", label: "Création d'entreprise", desc: "Créez votre société de A à Z." },
    { href: "/villes/el-jadida", label: "Comptable à El Jadida", desc: "Notre ancrage local." },
  ];

  return (
    <main className="pb-14 md:pb-0">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd(crumbs)),
        }}
      />

      <article className="pt-[116px]">
        <header className="bg-navy-900 py-14 text-white md:py-16">
          <div className="container">
            <Breadcrumbs items={crumbs} tone="light" />
            <p className="eyebrow mt-6 !text-brand-light">À propos</p>
            <h1 className="h-display max-w-3xl text-3xl text-white md:text-[44px] md:leading-[1.1]">
              Fiduciaire &amp; Business Center, votre cabinet comptable à El Jadida
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              Depuis 2015, nous accompagnons les entreprises et entrepreneurs
              d'El Jadida et de tout le Maroc avec exigence et proximité.
            </p>
          </div>
        </header>

        <div className="container max-w-3xl py-16 md:py-20">
          <Prose sections={sections} />
          <CtaBand />
          <RelatedLinks title="Découvrir" items={serviceItems} />
        </div>
      </article>

      <Footer />
      <FloatingActions />
    </main>
  );
}
