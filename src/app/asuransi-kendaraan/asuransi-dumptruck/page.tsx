import type { Metadata } from "next";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
export const metadata: Metadata = {
  title: "Asuransi Dump Truck Batam – Perlindungan Kendaraan Berat & Armada",
  description: "Asuransi dump truck dan kendaraan niaga berat di Batam. Lindungi armada angkutan Anda dari kerusakan, kecelakaan, dan risiko operasional. 0813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.com/asuransi-kendaraan/asuransi-dumptruck",
    languages: {
      id: "https://asuransibatam.com/asuransi-kendaraan/asuransi-dumptruck",
      en: "https://asuransibatam.com/en/vehicle-insurance/dump-truck-insurance",
    },
  },
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
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Asuransi Dump Truck Batam", provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" } };
export default function AsuransiDumpTruckPage() {
  return (
    <ProductPageLayout title="Asuransi Dump Truck Batam" subtitle="Perlindungan Armada Kendaraan Berat"
      description="Armada dump truck Anda adalah aset vital bisnis. Lindungi dari kerusakan, kecelakaan, dan risiko operasional dengan asuransi kendaraan berat terpercaya di Batam."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[{ label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" }, { label: "Asuransi Dump Truck", href: "/asuransi-kendaraan/asuransi-dumptruck" }]}
      schema={schema}>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Pelengkap untuk Operasional Tambang & Proyek</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-machinery/asuransi-alat-berat" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Alat Berat</h3>
            <p className="text-[#64748b] text-sm">Lindungi excavator, bulldozer, dan alat berat lain yang bekerja bersama dump truck.</p>
          </Link>
          <Link href="/asuransi-liability/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#64748b] text-sm">Perluas tanggung jawab hukum operasional di luar polis kendaraan.</p>
          </Link>
          <Link href="/blog/asuransi-dump-truck-batam-proyek-konstruksi" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Dump Truck untuk Proyek Konstruksi</h3>
            <p className="text-[#64748b] text-sm">Panduan lengkap proteksi armada untuk kebutuhan proyek konstruksi.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
