import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: BUSINESS.shortName,
    description:
      "Cabinet comptable et de conseil agréé à El Jadida — comptabilité, fiscalité, création de société et audit.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0c2643",
    lang: "fr",
    dir: "ltr",
    categories: ["business", "finance"],
    icons: [
      { src: "/icon.png", sizes: "any", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
