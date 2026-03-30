import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
export const metadata: Metadata = {
  title: "Asuransi Limbah B3 Batam – Wajib untuk Industri Penghasil Limbah Berbahaya",
  description: "Asuransi limbah B3 (Bahan Berbahaya & Beracun) di Batam. Kewajiban hukum bagi industri. Perlindungan dari tuntutan pencemaran lingkungan. 0813-1556-592.",
  alternates: { canonical: "https://asuransibatam.biz.id/asuransi-liability/asuransi-limbah-b3" },
};
const benefits = [
  { icon: "☣️", title: "Pencemaran Tanah & Air", desc: "Biaya pembersihan dan pemulihan lingkungan akibat tumpahan atau kebocoran limbah B3." },
  { icon: "⚖️", title: "Tuntutan Hukum Lingkungan", desc: "Biaya hukum dan ganti rugi akibat tuntutan dari masyarakat atau pemerintah." },
  { icon: "🏥", title: "Dampak Kesehatan Pihak Ketiga", desc: "Kompensasi untuk masyarakat yang terkena dampak kesehatan dari limbah Anda." },
  { icon: "🌿", title: "Biaya Pemulihan Ekosistem", desc: "Biaya restorasi lingkungan, termasuk flora dan fauna yang terdampak." },
  { icon: "🚒", title: "Biaya Respons Darurat", desc: "Biaya penanganan darurat saat terjadi kebocoran atau tumpahan limbah B3." },
  { icon: "📋", title: "Denda Regulatori", desc: "Perlindungan atas denda administratif dari regulator lingkungan (sesuai polis)." },
];
const faqs = [
  { q: "Apakah asuransi limbah B3 diwajibkan oleh hukum?", a: "Ya, PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup mewajibkan pelaku usaha pengelola limbah B3 memiliki jaminan finansial, salah satunya asuransi." },
  { q: "Industri apa yang wajib punya asuransi limbah B3?", a: "Industri manufaktur, galangan kapal, bengkel besar, rumah sakit, pertambangan, laboratorium, dan semua industri yang menghasilkan atau mengelola limbah B3." },
  { q: "Batam termasuk kawasan industri – apakah ada risiko khusus?", a: "Batam sebagai kawasan industri bebas memiliki banyak industri yang wajib mengelola limbah B3. Risiko pencemaran di lingkungan kepulauan juga lebih sensitif terhadap ekosistem laut." },
  { q: "Berapa nilai pertanggungan yang disarankan?", a: "Bergantung pada jenis dan volume limbah yang dihasilkan. Kami akan membantu menentukan nilai pertanggungan yang sesuai dengan profil risiko industri Anda." },
];
const policyComparison = [
  { feature: "Pencemaran Tanah", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Pencemaran Air/Laut", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Tuntutan Pihak Ketiga", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Biaya Pemulihan Ekosistem", basic: "❌", standard: "Terbatas", comprehensive: "✅" },
  { feature: "Biaya Respons Darurat", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Denda Regulatori", basic: "❌", standard: "❌", comprehensive: "Opsional" },
];
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Asuransi Limbah B3 Batam", provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio Mardiansyah", telephone: "+628131556592" } };
export default function AsuransiLimbahB3Page() {
  return (
    <ProductPageLayout title="Asuransi Limbah B3 Batam" subtitle="Kewajiban Hukum & Perlindungan Lingkungan"
      description="Industri penghasil limbah B3 di Batam wajib memiliki jaminan finansial berupa asuransi. Lindungi bisnis Anda dari tuntutan hukum lingkungan yang nilainya bisa miliaran rupiah."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Liability", href: "/asuransi-liability" }, { label: "Asuransi Limbah B3", href: "/asuransi-liability/asuransi-limbah-b3" }]}
      schema={schema} />
  );
}
