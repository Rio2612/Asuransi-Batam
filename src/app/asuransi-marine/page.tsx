// app/asuransi-marine/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = {
  title: "Asuransi Marine Batam – Marine Hull, Cargo & Builder's Risk",
  description:
    "Asuransi marine di Batam mencakup Marine Hull, Marine Cargo, dan Builder's Risk. Perlindungan kapal, muatan, dan pembangunan kapal.",
  alternates: {
    canonical: "https://asuransibatam.com/asuransi-marine",
    languages: {
      id: "https://asuransibatam.com/asuransi-marine",
      en: "https://asuransibatam.com/en/marine-insurance",
    },
  },
};

const benefits = [
  {
    icon: "🚢",
    title: "Marine Hull Insurance",
    desc: "Perlindungan menyeluruh untuk lambung kapal, mesin penggerak, dan perlengkapan navigasi dari risiko tabrakan, kandas, tenggelam, dan kebakaran.",
    href: "/asuransi-marine/marine-hull",
  },
  {
    icon: "📦",
    title: "Marine Cargo Insurance",
    desc: "Perlindungan barang kiriman selama proses pengiriman laut dari pelabuhan asal hingga tujuan akhir, termasuk bongkar muat.",
    href: "/asuransi-marine/marine-cargo",
  },
  {
    icon: "🏗️",
    title: "Builder's Risk (DSU)",
    desc: "Perlindungan selama proses pembangunan dan perbaikan kapal di galangan, dari tahap keel laying hingga sea trial.",
    href: "/asuransi-marine/builders-risk",
  },
  {
    icon: "⚓",
    title: "Protection & Indemnity (P&I)",
    desc: "Perlindungan tanggung jawab hukum pemilik kapal kepada pihak ketiga, termasuk kru, penumpang, dan pencemaran lingkungan.",
  },
  {
    icon: "🌊",
    title: "War & Strikes Risk",
    desc: "Perlindungan tambahan terhadap risiko perang, pembajakan, dan mogok buruh yang dapat berdampak pada operasional kapal.",
  },
  {
    icon: "🔍",
    title: "Total Loss & Salvage",
    desc: "Kompensasi kerugian total kapal dan biaya penyelamatan, termasuk biaya pengangkatan bangkai kapal jika diperlukan.",
  },
];

const faqs = [
  {
    q: "Apa perbedaan Marine Hull dan Marine Cargo?",
    a: "Marine Hull melindungi fisik kapal beserta mesinnya, sementara Marine Cargo melindungi muatan atau barang yang diangkut oleh kapal. Keduanya bisa dimiliki oleh pihak yang berbeda — pemilik kapal mengambil Hull, sedangkan pemilik barang mengambil Cargo.",
  },
  {
    q: "Apakah kapal nelayan dan speedboat bisa diasuransikan?",
    a: "Ya. Selain kapal niaga dan tanker, kapal nelayan, kapal feri, speedboat, dan kapal wisata juga dapat diasuransikan. Premi dihitung berdasarkan jenis, usia, dan nilai kapal.",
  },
  {
    q: "Siapa yang perlu asuransi marine cargo?",
    a: "Eksportir, importir, trader, dan perusahaan logistik yang mengirim atau menerima barang melalui jalur laut sangat disarankan memiliki marine cargo insurance untuk melindungi nilai kiriman mereka.",
  },
  {
    q: "Apakah ada asuransi untuk kapal yang sedang dibangun?",
    a: "Ya, produk tersebut disebut Builder's Risk atau DSU (Delay in Start-Up). Galangan kapal dan pemilik kapal yang memesan pembangunan kapal baru perlu memiliki perlindungan ini sejak awal konstruksi.",
  },
];

const policyComparison = [
  { feature: "Kerusakan Fisik Kapal/Barang", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Risiko Tabrakan & Kandas", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Tanggung Jawab Pihak Ketiga", basic: "❌", standard: "Terbatas", comprehensive: "✅" },
  { feature: "Risiko Perang & Pembajakan", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Biaya Penyelamatan (Salvage)", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Total Loss Coverage", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Marine Batam",
  description:
    "Layanan asuransi marine di Batam mencakup Marine Hull, Marine Cargo, dan Builder's Risk untuk perlindungan kapal dan pengiriman laut.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    areaServed: "Batam, Kepulauan Riau, Indonesia",
  },
  serviceType: "Marine Insurance",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produk Asuransi Marine",
    itemListElement: [
      { "@type": "Offer", name: "Marine Hull Insurance" },
      { "@type": "Offer", name: "Marine Cargo Insurance" },
      { "@type": "Offer", name: "Builder's Risk Insurance" },
    ],
  },
};

export default function AsuransiMarinePage() {
  return (
    <ProductPageLayout
      title="Asuransi Marine Batam"
      subtitle="Marine Hull, Cargo & Builder's Risk"
      description="Batam sebagai kota kepulauan dengan lalu lintas laut yang tinggi membutuhkan perlindungan yang andal. Asuransi marine kami menjaga kapal, muatan, dan aset maritim Anda dari risiko di lautan."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Marine", href: "/asuransi-marine" }]}
      schema={schema}
    />
  );
}
