import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
export const metadata: Metadata = {
  title: "Asuransi Engineering Batam – CAR, EAR, Contractor All Risk",
  description: "Asuransi engineering di Batam. Contractor All Risk (CAR), Erection All Risk (EAR), dan perlindungan proyek konstruksi. Konsultasi Rio 0813-7333-6728.",
  alternates: { canonical: "https://asuransibatam.biz.id/asuransi-engineering" },
};
const benefits = [
  { icon: "🏗️", title: "Contractor All Risk (CAR)", desc: "Perlindungan proyek konstruksi bangunan dari semua risiko selama masa pembangunan." },
  { icon: "⚙️", title: "Erection All Risk (EAR)", desc: "Perlindungan pemasangan mesin, pabrik, dan instalasi peralatan industri." },
  { icon: "🔧", title: "Plant & Machinery (CPM)", desc: "Perlindungan alat konstruksi dan plant selama proyek berlangsung." },
  { icon: "👷", title: "Tanggung Jawab Pihak Ketiga", desc: "Kerusakan properti dan cedera pihak ketiga di sekitar area proyek." },
  { icon: "💼", title: "Periode Pemeliharaan", desc: "Perlindungan extended selama periode pemeliharaan setelah selesai konstruksi." },
  { icon: "🌊", title: "Bencana Alam Proyek", desc: "Banjir, angin topan, gempa yang merusak proyek selama konstruksi." },
];
const faqs = [
  { q: "Apa perbedaan CAR dan EAR?", a: "CAR (Contractor All Risk) untuk proyek sipil/bangunan. EAR (Erection All Risk) untuk proyek pemasangan mesin, pabrik, dan infrastruktur mekanikal." },
  { q: "Apakah proyek jembatan dan jalan bisa diasuransikan?", a: "Ya, proyek infrastruktur termasuk jembatan, jalan, pelabuhan, dan fasilitas publik dapat diasuransikan dengan CAR." },
  { q: "Kapan sebaiknya membeli asuransi proyek?", a: "Sebaiknya sebelum proyek dimulai. Beberapa tender proyek juga mensyaratkan CAR/EAR sebagai syarat kontrak." },
];
const policyComparison = [
  { feature: "Kerusakan Fisik Proyek", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Alat & Perlengkapan", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Tanggung Jawab Pihak Ketiga", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
  { feature: "Bencana Alam", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Periode Pemeliharaan", basic: "❌", standard: "12 bulan", comprehensive: "24 bulan" },
];
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Asuransi Engineering Batam", provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" } };
export default function AsuransiEngineeringPage() {
  return (
    <ProductPageLayout title="Asuransi Engineering Batam" subtitle="CAR, EAR & Proyek Konstruksi"
      description="Proyek konstruksi dan pemasangan instalasi di Batam penuh dengan risiko. Dengan asuransi engineering yang tepat, nilai investasi proyek Anda terlindungi dari awal hingga selesai."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Engineering", href: "/asuransi-engineering" }]}
      schema={schema} />
  );
}
