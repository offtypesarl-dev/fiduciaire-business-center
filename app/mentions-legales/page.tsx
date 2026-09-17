import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales | Fiduciaire & Business Center",
  description:
    "Mentions légales de Fiduciaire & Business Center, cabinet comptable à El Jadida (SARL AU, RC 11313, ICE 000103774000044).",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return <LegalPage docKey="mentions" />;
}
