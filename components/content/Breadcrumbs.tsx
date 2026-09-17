import Link from "next/link";

export type Crumb = { name: string; path: string };

/** tone="light" for placement on dark/navy hero backgrounds. */
export default function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
}) {
  const base = tone === "light" ? "text-white/60" : "text-navy-900/50";
  const link = tone === "light" ? "hover:text-white" : "hover:text-brand-ink";
  const current = tone === "light" ? "text-white/90" : "text-navy-900/70";
  const sep = tone === "light" ? "text-white/30" : "text-navy-900/30";

  return (
    <nav aria-label="Fil d'Ariane" className="text-sm">
      <ol className={`flex flex-wrap items-center gap-1.5 ${base}`}>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={`font-medium ${current}`}>
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className={link}>
                    {c.name}
                  </Link>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                    className={sep}
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
