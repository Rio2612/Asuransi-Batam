import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = {
  title: "Asuransi Hotel Batam – Perlindungan Aset Hotel & Penginapan",
  description: "Asuransi hotel dan penginapan di Batam. Lindungi bangunan, perabot, dan tanggung jawab tamu dari risiko kebakaran, banjir, dan kerusakan. Konsultasi gratis.",
  alternates: { canonical: "https://asuransibatam.id/asuransi-properti/asuransi-hotel-batam" },
};

const benefits = [
  { icon: "🏨", title: "Bangunan Hotel", desc: "Perlindungan struktur bangunan hotel dari kebakaran, bencana alam, dan kerusakan." },
  { icon: "🛋️", title: "Perabot & Interior", desc: "Furniture, dekorasi, perlengkapan kamar, dan semua isi hotel dilindungi." },
  { icon: "⚡", title: "Peralatan Elektronik", desc: "AC, TV, lift, sistem kelistrikan, dan peralatan operasional hotel." },
  { icon: "👤", title: "Tanggung Jawab Tamu", desc: "Perlindungan atas klaim tamu yang mengalami kecelakaan di area hotel." },
  { icon: "💰", title: "Kehilangan Pendapatan", desc: "Kompensasi hilangnya pendapatan sewa selama proses perbaikan berlangsung." },
  { icon: "🔒", title: "Pencurian & Vandalism", desc: "Kerugian akibat pencurian dengan paksa dan tindakan vandalism." },
];

const faqs = [
  { q: "Apakah asuransi menanggung kerusakan akibat tamu nakal?", a: "Umumnya ya, asuransi hotel mencakup kerusakan yang disebabkan oleh tamu termasuk vandalism." },
  { q: "Bagaimana cara menghitung nilai pertanggungan hotel?", a: "Nilai pertanggungan dihitung berdasarkan nilai penggantian bangunan (replacement cost) dan nilai buku perabot." },
  { q: "Apakah bisa klaim kehilangan pendapatan saat hotel ditutup?", a: "Ya, dengan extension Business Interruption, Anda bisa mendapatkan kompensasi atas pendapatan yang hilang selama perbaikan." },
];

const policyComparison = [
  { feature: "Bangunan Hotel", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Perabot & Interior", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Business Interruption", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Tanggung Jawab Tamu", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Pencurian", basic: "❌", standard: "✅", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Hotel Batam",
  description: "Asuransi perlindungan hotel dan penginapan di Batam",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio Mardiansyah", telephone: "+628131556592" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function AsuransiHotelBatamPage() {
  return (
    <ProductPageLayout
      title="Asuransi Hotel Batam"
      subtitle="Perlindungan Industri Perhotelan"
      description="Bisnis hotel dan penginapan di Batam butuh perlindungan menyeluruh. Dari bangunan, perabot, hingga tanggung jawab kepada tamu – semua tercakup dalam satu polis komprehensif."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Asuransi Hotel Batam", href: "/asuransi-properti/asuransi-hotel-batam" },
      ]}
      schema={schema}
    />
  );
}
