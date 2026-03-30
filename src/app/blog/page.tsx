import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Blog Edukasi Asuransi – Tips, Panduan & Info Asuransi Batam",
  description: "Artikel edukasi asuransi kerugian. Panduan klaim, perbedaan produk, tips memilih asuransi, dan informasi terkini tentang asuransi di Batam.",
  alternates: { canonical: "https://asuransibatam.biz.id/blog" },
};
const articles = [
  { title: "Cara Klaim Asuransi Mobil yang Benar dan Cepat", slug: "cara-klaim-asuransi-mobil", date: "10 Maret 2025", category: "Kendaraan", excerpt: "Panduan lengkap langkah demi langkah cara mengajukan klaim asuransi mobil, dokumen yang dibutuhkan, dan tips agar klaim disetujui lebih cepat.", readTime: "7 menit" },
  { title: "Perbedaan Asuransi All Risk dan TLO: Mana yang Lebih Baik?", slug: "perbedaan-all-risk-dan-tlo", date: "5 Maret 2025", category: "Kendaraan", excerpt: "Penjelasan lengkap perbedaan All Risk (Comprehensive) dan TLO (Total Loss Only) beserta rekomendasi berdasarkan nilai dan usia kendaraan.", readTime: "6 menit" },
  { title: "Asuransi Mobil Batam: Panduan Lengkap 2025", slug: "asuransi-mobil-batam", date: "1 Maret 2025", category: "Kendaraan", excerpt: "Semua yang perlu Anda ketahui tentang asuransi mobil di Batam – tarif OJK, perusahaan terbaik, proses klaim, dan tips memilih polis.", readTime: "10 menit" },
  { title: "Pentingnya Asuransi Limbah B3 untuk Industri di Batam", slug: "pentingnya-asuransi-limbah-b3", date: "20 Februari 2025", category: "Liability", excerpt: "Mengapa asuransi limbah B3 bukan pilihan tapi kewajiban hukum bagi industri di Batam. Regulasi, sanksi, dan cara mendapatkan polis yang tepat.", readTime: "8 menit" },
];
const categoryColors: Record<string, string> = {
  "Kendaraan": "bg-blue-100 text-blue-800",
  "Liability": "bg-orange-100 text-orange-800",
  "Properti": "bg-green-100 text-green-800",
};
export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Blog & Edukasi</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Artikel Edukasi Asuransi</h1>
          <p className="text-white/70 text-xl max-w-2xl">Panduan, tips, dan informasi terpercaya tentang asuransi kerugian untuk melindungi aset Anda di Batam.</p>
        </div>
      </section>
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-xl transition-all card-hover">
                <div className="h-3 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0]" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[a.category] || "bg-gray-100 text-gray-600"}`}>{a.category}</span>
                    <span className="text-[#64748b] text-xs">{a.readTime} baca</span>
                  </div>
                  <h2 className="font-display font-bold text-lg text-[#0a1628] mb-2 group-hover:text-[#1a4fa0] transition-colors leading-tight">{a.title}</h2>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748b] text-xs">{a.date}</span>
                    <span className="text-[#1a4fa0] text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">Baca →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
