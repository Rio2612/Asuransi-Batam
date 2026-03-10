import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Asuransi Liability Batam – Tanggung Gugat Pihak Ketiga & Limbah B3",
  description: "Asuransi liability di Batam. Perlindungan public liability, produk liability, dan asuransi khusus limbah B3. Wajib untuk industri di Batam. 0813-1556-592.",
  alternates: { canonical: "https://asuransibatam.id/asuransi-liability" },
};
const benefits = [
  { icon: "⚖️", title: "Tanggung Gugat Pihak Ketiga", desc: "Biaya ganti rugi dan legal jika bisnis Anda menyebabkan kerugian pihak ketiga." },
  { icon: "🏭", title: "Liability Operasional", desc: "Perlindungan atas tanggung jawab hukum akibat kegiatan operasional." },
  { icon: "📋", title: "Biaya Hukum", desc: "Biaya pengacara, persidangan, dan penyelesaian klaim hukum." },
  { icon: "☣️", title: "Pencemaran Lingkungan", desc: "Khusus untuk industri yang berpotensi mencemari lingkungan." },
  { icon: "🛡️", title: "Product Liability", desc: "Perlindungan atas klaim kerusakan akibat produk yang Anda jual/distribusikan." },
  { icon: "👥", title: "Employers Liability", desc: "Perlindungan atas klaim karyawan yang mengalami kecelakaan kerja." },
];
const faqs = [
  { q: "Siapa yang wajib punya asuransi liability?", a: "Bisnis yang berinteraksi dengan publik, industri yang menghasilkan limbah, operator alat berat, dan semua usaha yang berpotensi menimbulkan kerugian pihak ketiga." },
  { q: "Apa itu Public Liability Insurance?", a: "Asuransi yang melindungi bisnis dari tuntutan hukum pihak ketiga (customer, pengunjung, masyarakat) akibat cedera atau kerusakan properti yang disebabkan oleh operasional bisnis." },
];
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Asuransi Liability Batam", provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio Mardiansyah", telephone: "+628131556592" } };
export default function AsuransiLiabilityPage() {
  return (
    <ProductPageLayout title="Asuransi Liability Batam" subtitle="Perlindungan Tanggung Gugat Bisnis"
      description="Satu kejadian tak terduga bisa mengancam bisnis Anda dengan tuntutan hukum bernilai miliaran. Asuransi liability melindungi Anda dari risiko tanggung jawab hukum kepada pihak ketiga."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[{ label: "Asuransi Liability", href: "/asuransi-liability" }]}
      schema={schema}
    >
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6 text-center">Produk Liability Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {[
          { title: "Asuransi Limbah B3", desc: "Perlindungan khusus industri penghasil limbah Bahan Berbahaya & Beracun.", href: "/asuransi-liability/asuransi-limbah-b3" },
          { title: "Public Liability Insurance", desc: "Perlindungan tanggung gugat terhadap publik dan pihak ketiga.", href: "/asuransi-liability/public-liability" },
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
