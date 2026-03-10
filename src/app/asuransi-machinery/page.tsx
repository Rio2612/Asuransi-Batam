import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Asuransi Machinery Batam – Alat Berat, Crane & Mesin Industri",
  description: "Asuransi machinery, alat berat, dan crane di Batam. Perlindungan dari kerusakan operasional, kecelakaan, dan breakdown. Konsultasi Rio Mardiansyah.",
  alternates: { canonical: "https://asuransibatam.id/asuransi-machinery" },
};
const benefits = [
  { icon: "⚙️", title: "Kerusakan Mesin (MB)", desc: "Machinery Breakdown – perlindungan kerusakan mesin akibat kegagalan operasional." },
  { icon: "💥", title: "Kecelakaan Operasional", desc: "Kerusakan akibat benturan, terjatuh, atau kesalahan operator." },
  { icon: "⚡", title: "Kerusakan Listrik", desc: "Lonjakan tegangan, korsleting, dan kerusakan elektrikal." },
  { icon: "🏗️", title: "Selama Konstruksi/Pemasangan", desc: "Perlindungan saat mesin sedang dipasang atau dalam proses commissioning." },
  { icon: "💼", title: "Biaya Pengiriman Suku Cadang", desc: "Biaya pengiriman darurat suku cadang untuk mempercepat perbaikan." },
  { icon: "📉", title: "Kehilangan Keuntungan (LoP)", desc: "Kompensasi atas hilangnya keuntungan akibat mesin tidak beroperasi." },
];
const faqs = [
  { q: "Apa itu Machinery Breakdown Insurance?", a: "Asuransi yang menanggung kerusakan tiba-tiba dan tidak terduga pada mesin dan peralatan industri, termasuk kerusakan mekanis dan elektrikal." },
  { q: "Apakah keausan normal ditanggung?", a: "Tidak. Asuransi machinery menanggung kerusakan tiba-tiba, bukan keausan normal, korosi, atau deteriorasi bertahap." },
  { q: "Apa yang dimaksud Equipment All Risk?", a: "Equipment All Risk (EAR) menanggung semua risiko kerusakan fisik alat berat selama proyek, termasuk kecelakaan dan bencana alam." },
];
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Asuransi Machinery Batam", provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio Mardiansyah", telephone: "+628131556592" } };
export default function AsuransiMachineryPage() {
  return (
    <ProductPageLayout title="Asuransi Machinery Batam" subtitle="Perlindungan Mesin & Alat Industri"
      description="Mesin dan alat berat adalah jantung operasional bisnis Anda. Dengan asuransi machinery yang tepat, downtime akibat kerusakan tidak lagi mengancam keberlangsungan bisnis."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[{ label: "Asuransi Machinery", href: "/asuransi-machinery" }]}
      schema={schema}
    >
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6 text-center">Produk Machinery Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {[
          { title: "Asuransi Alat Berat", desc: "Perlindungan excavator, bulldozer, dan alat berat konstruksi.", href: "/asuransi-machinery/asuransi-alat-berat" },
          { title: "Asuransi Crane", desc: "Perlindungan menyeluruh untuk crane dan lifting equipment.", href: "/asuransi-machinery/asuransi-crane" },
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
