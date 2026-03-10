import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
export const metadata: Metadata = {
  title: "Asuransi Public Liability Batam – Tanggung Gugat Publik & Pihak Ketiga",
  description: "Public Liability Insurance di Batam untuk restoran, hotel, pusat perbelanjaan, dan bisnis umum. Lindungi dari tuntutan cedera pengunjung. 0813-1556-592.",
  alternates: { canonical: "https://asuransibatam.id/asuransi-liability/public-liability" },
};
const benefits = [
  { icon: "👤", title: "Cedera Pengunjung/Tamu", desc: "Biaya medis dan ganti rugi jika pengunjung terluka di area bisnis Anda." },
  { icon: "🏗️", title: "Kerusakan Properti Pihak Ketiga", desc: "Kompensasi kerusakan properti milik orang lain yang disebabkan operasional Anda." },
  { icon: "⚖️", title: "Biaya Pembelaan Hukum", desc: "Biaya pengacara dan proses persidangan yang bisa sangat mahal." },
  { icon: "🏥", title: "Biaya Pengobatan", desc: "Biaya rumah sakit pihak ketiga yang menjadi tanggung jawab bisnis Anda." },
  { icon: "💼", title: "Tuntutan Produk (Product Liability)", desc: "Klaim kerusakan atau cedera akibat produk yang Anda jual." },
  { icon: "🌐", title: "Advertising Liability", desc: "Perlindungan dari tuntutan akibat konten iklan yang merugikan pihak lain." },
];
const faqs = [
  { q: "Bisnis apa saja yang butuh Public Liability?", a: "Hotel, restoran, kafe, pusat perbelanjaan, kontraktor, event organizer, gym, klinik, dan semua bisnis yang melayani publik atau beroperasi di area publik." },
  { q: "Berapa limit pertanggungan yang direkomendasikan?", a: "Minimal Rp 1 miliar per kejadian untuk bisnis kecil-menengah. Bisnis besar atau yang menangani acara besar perlu limit lebih tinggi." },
];
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Public Liability Insurance Batam", provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio Mardiansyah", telephone: "+628131556592" } };
export default function PublicLiabilityPage() {
  return (
    <ProductPageLayout title="Public Liability Insurance Batam" subtitle="Lindungi Bisnis dari Tuntutan Publik"
      description="Satu kecelakaan pengunjung di tempat bisnis Anda bisa berujung tuntutan hukum bernilai ratusan juta. Public Liability Insurance melindungi bisnis Anda dari risiko ini."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[{ label: "Asuransi Liability", href: "/asuransi-liability" }, { label: "Public Liability", href: "/asuransi-liability/public-liability" }]}
      schema={schema} />
  );
}
