import type { Metadata } from "next";
import { generateSEO, schemaBreadcrumb } from "@/lib/seo";
import KalkulatorMotorClient from "./KalkulatorMotorClient";

export const metadata: Metadata = generateSEO({
  title: "Kalkulator Premi Asuransi Motor Batam – Cek Tarif OJK Sekarang, Gratis",
  description:
    "Hitung estimasi premi asuransi motor secara online gratis. Berdasarkan tarif OJK. All Risk dan TLO tersedia. Batam & seluruh Indonesia.",
  canonical: "https://asuransibatam.com/kalkulator-premi-motor",
});

export default function KalkulatorPremiMotorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
          { name: "Beranda", url: "/" },
          { name: "Kalkulator Premi Motor", url: "/kalkulator-premi/motor" },
        ])) }}
      />
      <KalkulatorMotorClient />
    </>
  );
}
