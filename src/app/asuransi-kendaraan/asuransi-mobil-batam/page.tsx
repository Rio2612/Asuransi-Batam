import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
import KalkulatorMobil from "@/components/KalkulatorMobil";

export const metadata: Metadata = {
  title: "Asuransi Mobil Batam – All Risk & TLO | Kalkulator Premi Online",
  description: "Asuransi mobil All Risk dan TLO di Batam. Hitung premi online gratis. Perlindungan lengkap dari kecelakaan, pencurian, banjir. Konsultasi Rio 0813-1556-592.",
  alternates: { canonical: "https://asuransibatam.biz.id/asuransi-kendaraan/asuransi-mobil-batam" },
};

const benefits = [
  { icon: "🛡️", title: "All Risk / Comprehensive", desc: "Menanggung semua kerusakan fisik kendaraan, baik ringan maupun berat, akibat kecelakaan." },
  { icon: "🔑", title: "TLO (Total Loss Only)", desc: "Premi lebih hemat, menanggung kehilangan/kerusakan total lebih dari 75% nilai kendaraan." },
  { icon: "🌊", title: "Perluasan Banjir", desc: "Kerusakan akibat banjir bisa ditambahkan sebagai perluasan perlindungan." },
  { icon: "👤", title: "Tanggung Jawab Pihak Ketiga", desc: "Biaya kerusakan kendaraan, properti, atau cedera pihak ketiga yang disebabkan kendaraan Anda." },
  { icon: "🚑", title: "Kecelakaan Diri", desc: "Santunan untuk pengemudi dan penumpang yang mengalami kecelakaan." },
  { icon: "🔧", title: "Bengkel Rekanan", desc: "Akses ke jaringan bengkel rekanan terpercaya di seluruh Indonesia." },
];

const faqs = [
  { q: "Berapa premi asuransi mobil All Risk di Batam?", a: "Premi All Risk berkisar 1.5% - 3.5% dari nilai kendaraan per tahun, tergantung wilayah dan jenis kendaraan. Gunakan kalkulator di bawah untuk estimasi." },
  { q: "Apa itu wilayah rating dalam asuransi mobil?", a: "OJK membagi Indonesia menjadi 3 wilayah. Batam termasuk Wilayah 1 (Sumatera & sekitarnya). Setiap wilayah memiliki tarif premi berbeda berdasarkan tingkat risiko." },
  { q: "Apakah bisa klaim tanpa surat polisi jika kecelakaan ringan?", a: "Untuk kerusakan ringan (bumper lecet, dll) biasanya tidak perlu surat polisi. Namun untuk kerusakan berat atau tabrakan pihak ketiga, laporan polisi diperlukan." },
  { q: "Berapa lama proses klaim asuransi mobil?", a: "Proses survey 1-2 hari kerja, persetujuan klaim 3-7 hari kerja, perbaikan di bengkel sesuai kerusakan." },
];

const policyComparison = [
  { feature: "Kerusakan sebagian (lecet, dll)", basic: "❌ TLO", standard: "✅ All Risk", comprehensive: "✅ All Risk" },
  { feature: "Kerusakan total (>75%)", basic: "✅ TLO", standard: "✅", comprehensive: "✅" },
  { feature: "Kehilangan/Pencurian", basic: "✅ TLO", standard: "✅", comprehensive: "✅" },
  { feature: "Perluasan Banjir", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Tanggung Jawab Pihak Ketiga", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Kecelakaan Diri Pengemudi", basic: "❌", standard: "Opsional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Mobil Batam",
  description: "Asuransi mobil All Risk dan TLO di Batam dengan kalkulator premi online",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio Mardiansyah", telephone: "+628131556592" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function AsuransiMobilBatamPage() {
  return (
    <ProductPageLayout
      title="Asuransi Mobil Batam"
      subtitle="All Risk & TLO – Perlindungan Kendaraan Terlengkap"
      description="Lindungi mobil Anda di Batam dengan asuransi All Risk atau TLO terpercaya. Hitung estimasi premi Anda sekarang dengan kalkulator online kami, gratis dan mudah."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
        { label: "Asuransi Mobil Batam", href: "/asuransi-kendaraan/asuransi-mobil-batam" },
      ]}
      schema={schema}
    >
      <KalkulatorMobil />
    </ProductPageLayout>
  );
}
