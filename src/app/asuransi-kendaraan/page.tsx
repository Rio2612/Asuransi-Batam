import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asuransi Kendaraan Batam – Mobil, Dump Truck & Kendaraan Niaga",
  description: "Asuransi kendaraan All Risk dan TLO di Batam. Mobil pribadi, dump truck, dan kendaraan niaga. Kalkulator premi online. Konsultasi Rio 0813-7333-6728.",
  alternates: { canonical: "https://asuransibatam.biz.id/asuransi-kendaraan" },
};

const benefits = [
  { icon: "🚗", title: "Kerusakan Total & Sebagian", desc: "All Risk mencakup kerusakan ringan, sedang, hingga total akibat kecelakaan." },
  { icon: "💥", title: "Tabrakan & Benturan", desc: "Kerusakan akibat tabrakan, benturan, atau tergelincir di jalan." },
  { icon: "🔥", title: "Kebakaran Kendaraan", desc: "Kerugian akibat kebakaran, ledakan, dan sambaran petir pada kendaraan." },
  { icon: "🚨", title: "Pencurian Kendaraan", desc: "Ganti rugi apabila kendaraan dicuri (TLO & All Risk)." },
  { icon: "🌊", title: "Bencana Alam", desc: "Kerusakan akibat banjir, angin topan, dan bencana alam lainnya." },
  { icon: "👥", title: "Tanggung Jawab Pihak Ketiga", desc: "Biaya perbaikan kendaraan/properti pihak ketiga yang rusak akibat kendaraan Anda." },
];

const faqs = [
  { q: "Apa perbedaan All Risk dan TLO?", a: "All Risk (Comprehensive) menanggung semua kerusakan termasuk ringan. TLO (Total Loss Only) hanya menanggung jika kendaraan rusak >75% atau dicuri. Premi TLO lebih murah." },
  { q: "Kendaraan dari luar Batam bisa diasuransikan di sini?", a: "Ya, kami bisa mengurus asuransi kendaraan untuk wilayah Kepulauan Riau dan sekitarnya." },
  { q: "Apakah kendaraan modifikasi bisa diasuransikan?", a: "Bisa, namun perlu deklarasi modifikasi saat pembuatan polis. Nilai pertanggungan disesuaikan." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Kendaraan Batam",
  description: "Asuransi mobil dan kendaraan niaga All Risk dan TLO di Batam",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function AsuransiKendaraanPage() {
  return (
    <ProductPageLayout
      title="Asuransi Kendaraan Batam"
      subtitle="All Risk & TLO untuk Semua Jenis Kendaraan"
      description="Dari mobil pribadi hingga armada dump truck – kami menyediakan perlindungan kendaraan yang komprehensif di Batam. All Risk, TLO, dan paket khusus kendaraan niaga."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[{ label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" }]}
      schema={schema}
    >
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6 text-center">Produk Kendaraan Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {[
          { title: "Asuransi Mobil Batam", desc: "All Risk & TLO untuk mobil pribadi dengan kalkulator premi online.", href: "/asuransi-kendaraan/asuransi-mobil-batam" },
          { title: "Asuransi Dump Truck", desc: "Perlindungan armada dump truck dan kendaraan berat komersial.", href: "/asuransi-kendaraan/asuransi-dumptruck" },
        ].map((p) => (
          <Link key={p.href} href={p.href} className="group p-6 bg-white rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">{p.title}</h3>
            <p className="text-[#64748b] text-sm">{p.desc}</p>
          </Link>
        ))}
      </div>
    </ProductPageLayout>
  );
}
