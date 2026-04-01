import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
export const metadata: Metadata = {
  title: "Asuransi Crane Batam – Perlindungan Tower Crane & Mobile Crane",
  description: "Asuransi crane di Batam. Tower crane, mobile crane, dan lifting equipment dilindungi dari kerusakan dan tanggung jawab pihak ketiga. Konsultasi gratis.",
  alternates: { canonical: "https://asuransibatam.biz.id/asuransi-machinery/asuransi-crane" },
};
const benefits = [
  { icon: "🏗️", title: "Kerusakan Fisik Crane", desc: "Perlindungan boom, cabin, sistem hidrolik, dan komponen utama crane." },
  { icon: "💥", title: "Kegagalan Struktural", desc: "Kerusakan akibat kegagalan struktur, overload, atau kelelahan material." },
  { icon: "⚡", title: "Kerusakan Elektrikal", desc: "Sistem kontrol, motor, dan komponen elektrikal crane." },
  { icon: "👤", title: "Tanggung Jawab Pihak Ketiga", desc: "Krusial untuk crane – kerusakan properti/gedung di sekitar area proyek." },
  { icon: "🚑", title: "Kecelakaan Operator", desc: "Santunan kecelakaan untuk operator crane." },
  { icon: "🔧", title: "Biaya Pembongkaran & Pasang", desc: "Biaya mengangkat dan memasang kembali crane untuk perbaikan." },
];
const faqs = [
  { q: "Mengapa asuransi crane sangat penting?", a: "Crane beroperasi di ketinggian dengan beban berat. Risiko kecelakaan dan kerusakan properti sekitar sangat tinggi, termasuk tanggung jawab hukum yang besar." },
  { q: "Apakah ada persyaratan khusus untuk asuransi crane?", a: "Umumnya diperlukan sertifikat kelayakan crane, riwayat perawatan, dan data operator bersertifikat." },
  { q: "Berapa nilai pertanggungan yang disarankan untuk crane?", a: "Minimal sebesar nilai penggantian crane baru (replacement cost). Untuk tanggung jawab pihak ketiga, nilai harus memadai sesuai risiko lokasi proyek." },
];
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Asuransi Crane Batam", provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" } };
export default function AsuransiCranePage() {
  return (
    <ProductPageLayout title="Asuransi Crane Batam" subtitle="Perlindungan Lifting Equipment"
      description="Tower crane dan mobile crane adalah peralatan berisiko tinggi. Pastikan aset Anda dan tanggung jawab kepada pihak ketiga terlindungi dengan polis yang tepat."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[{ label: "Asuransi Machinery", href: "/asuransi-machinery" }, { label: "Asuransi Crane", href: "/asuransi-machinery/asuransi-crane" }]}
      schema={schema} />
  );
}
