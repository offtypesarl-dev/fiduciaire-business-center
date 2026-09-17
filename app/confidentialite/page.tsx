import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Fiduciaire & Business Center",
  description:
    "Politique de confidentialité et protection des données personnelles (loi 09-08 / CNDP) de Fiduciaire & Business Center, El Jadida.",
  alternates: { canonical: "/confidentialite" },
};

export default function Page() {
  return <LegalPage docKey="confidentialite" />;
}
