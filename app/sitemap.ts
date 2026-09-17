import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { serviceSlugs } from "@/lib/content/services";
import { citySlugs } from "@/lib/content/cities";
import { guideSlugs } from "@/lib/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ): MetadataRoute.Sitemap[number] => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  const core: MetadataRoute.Sitemap = [
    entry("/", 1, "weekly"),
    entry("/services", 0.9, "monthly"),
    entry("/villes", 0.8, "monthly"),
    entry("/guides", 0.8, "weekly"),
    entry("/a-propos", 0.6, "yearly"),
    entry("/contact", 0.7, "yearly"),
  ];

  const servicePages = serviceSlugs().map((slug) =>
    entry(`/services/${slug}`, 0.85, "monthly")
  );
  const cityPages = citySlugs().map((slug) =>
    entry(`/villes/${slug}`, 0.75, "monthly")
  );
  const guidePages = guideSlugs().map((slug) =>
    entry(`/guides/${slug}`, 0.7, "monthly")
  );

  const legal: MetadataRoute.Sitemap = [
    entry("/mentions-legales", 0.3, "yearly"),
    entry("/confidentialite", 0.3, "yearly"),
    entry("/conditions-generales", 0.3, "yearly"),
  ];

  return [...core, ...servicePages, ...cityPages, ...guidePages, ...legal];
}
