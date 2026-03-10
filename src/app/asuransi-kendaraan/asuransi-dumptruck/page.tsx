import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
export const metadata: Metadata = {
  title: "Asuransi Dump Truck Batam – Perlindungan Kendaraan Berat & Armada",
  description: "Asuransi dump truck dan kendaraan niaga berat di Batam. Lindungi armada angkutan Anda dari kerusakan, kecelakaan, dan risiko operasional. 0813-1556-592.",
  alternates: { canonical: "https://asuransibatam.id/asuransi-kendaraan/asuransi-dumptruck" },
};
const benefits = [
  { icon: "🚛", title: "Kerusakan Fisik Kendaraan", desc: "Kerusakan akibat kecelakaan, benturan, terbalik, atau risiko jalan tambang." },
  { icon: "🔥", title: "Kebakaran & Ledakan", desc: "Perlindungan dari kebakaran mesin, ledakan, dan korsleting listrik." },
  { icon: "⚙️", title: "Kerusakan Mesin", desc: "Opsi perlindungan kerusakan mesin akibat kecelakaan (bukan aus normal)." },
  { icon: "👷", title: "Tanggung Jawab Operator", desc: "Biaya tanggung jawab hukum terhadap pihak ketiga yang dirugikan." },
  { icon: "🏗️", title: "Khusus Area Tambang", desc: "Coverage untuk operasi di area tambang, galian, dan konstruksi." },
  { icon: "🚑", title: "Kecelakaan Pengemudi", desc: "Santunan kecelakaan diri untuk pengemudi dump truck." },
];
const faqs = [
  { q: "Apakah dump truck untuk tambang bisa diasuransikan?", a: "Ya, ada polis khusus off-road vehicle untuk dump truck yang beroperasi di area tambang dan tidak melewati jalan umum." },
  { q: "Berapa premi asuransi dump truck?", a: "Premi dump truck umumnya lebih tinggi dari kendaraan biasa karena risiko lebih besar. Konsultasi dengan kami untuk penawaran terbaik." },
  { q: "Apakah bisa asuransi untuk armada banyak unit?", a: "Ya, tersedia fleet insurance dengan harga yang lebih kompetitif untuk kepemilikan banyak unit kendaraan." },
];
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Asuransi Dump Truck Batam", provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio Mardiansyah", telephone: "+628131556592" } };
export default function AsuransiDumpTruckPage() {
  return (
    <ProductPageLayout title="Asuransi Dump Truck Batam" subtitle="Perlindungan Armada Kendaraan Berat"
      description="Armada dump truck Anda adalah aset vital bisnis. Lindungi dari kerusakan, kecelakaan, dan risiko operasional dengan asuransi kendaraan berat terpercaya di Batam."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[{ label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" }, { label: "Asuransi Dump Truck", href: "/asuransi-kendaraan/asuransi-dumptruck" }]}
      schema={schema} />
  );
}
