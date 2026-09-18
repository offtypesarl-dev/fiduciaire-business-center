import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

/**
 * Custom 404 — keeps mistyped/expired URLs on-site instead of a dead default page.
 * Routes visitors (and any crawler that lands here) back into the internal-link mesh:
 * hubs + highest-intent pages. Next.js serves this with a 404 status, so it stays
 * out of the index automatically — no robots meta needed.
 */

const hubs = [
  { href: "/services", label: "Nos services", desc: "Comptabilité, création d'entreprise, conseil fiscal, paie, audit." },
  { href: "/villes", label: "Zones d'intervention", desc: "El Jadida, sa région et Casablanca." },
  { href: "/guides", label: "Guides pratiques", desc: "Fiscalité, création de société et gestion, expliquées simplement." },
  { href: "/contact", label: "Contact", desc: "Premier échange gratuit et sans engagement." },
];

const popular = [
  { href: "/services/creation-entreprise", label: "Création d'entreprise" },
  { href: "/services/tenue-comptabilite", label: "Tenue de comptabilité" },
  { href: "/services/conseil-fiscal", label: "Conseil fiscal & juridique" },
  { href: "/villes/el-jadida", label: "Comptable à El Jadida" },
  { href: "/guides/creer-sarl-maroc", label: "Créer une SARL au Maroc" },
  { href: "/guides/cout-creation-entreprise-maroc", label: "Coût de création d'entreprise" },
];

export default function NotFound() {
  return (
    <main className="pb-14 md:pb-0">
      <Header />

      <header className="bg-navy-900 py-16 text-white md:py-20">
        <div className="container pt-[60px]">
          <p className="eyebrow mt-2 !text-brand-light">Erreur 404</p>
          <h1 className="h-display max-w-3xl text-3xl text-white md:text-[44px] md:leading-[1.1]">
            Cette page est introuvable
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Le lien est peut-être ancien ou mal saisi. Voici les pages les plus
            utiles pour retrouver ce que vous cherchez — ou contactez directement
            le cabinet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn-primary">
              Retour à l'accueil
            </Link>
            <Link href="/contact" className="btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hubs.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="group flex flex-col rounded-xl border border-navy-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <h2 className="h-display text-lg text-navy-900 group-hover:text-brand-ink">
                  {it.label}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/60">
                  {it.desc}
                </p>
                <span className="learn-more mt-4">
                  Explorer
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="h-display text-2xl text-navy-900 md:text-3xl">
              Pages les plus consultées
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {popular.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-medium text-navy-900/80 transition-all hover:border-brand/40 hover:text-brand-ink hover:shadow-sm"
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
