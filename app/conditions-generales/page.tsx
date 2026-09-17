import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Fiduciaire & Business Center",
  description:
    "Conditions générales d'utilisation du site de Fiduciaire & Business Center, cabinet comptable à El Jadida.",
  alternates: { canonical: "/conditions-generales" },
};

export default function Page() {
  return <LegalPage docKey="conditions" />;
}
