// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Edukasi Asuransi – Tips, Panduan & Info Asuransi Batam",
  description:
    "Artikel edukasi asuransi kerugian. Panduan klaim, perbedaan produk, tips memilih asuransi, dan informasi terkini tentang asuransi di Batam.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/blog",
    languages: {
      id: "https://asuransibatam.biz.id/blog",
      en: "https://asuransibatam.biz.id/en/blog",
    },
  },
};

type Article = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
};

const articles: Article[] = [
  // ── Kendaraan ───────────────────────────────────────────────────────────────
  {
    title: "Cara Klaim Asuransi Mobil Batam yang Benar dan Cepat",
    slug: "cara-klaim-asuransi-mobil-batam",
    date: "30 April 2026",
    category: "Kendaraan",
    excerpt:
      "Panduan lengkap langkah demi langkah cara mengajukan klaim asuransi mobil di Batam, dokumen yang dibutuhkan, dan tips agar klaim disetujui lebih cepat.",
    readTime: "7 menit",
  },
  // ── Alat Berat ──────────────────────────────────────────────────────────────
  {
    title: "Asuransi Excavator dan Bulldozer di Batam",
    slug: "asuransi-excavator-dan-bulldozer",
    date: "6 Mei 2026",
    category: "Alat Berat",
    excerpt:
      "Panduan lengkap asuransi excavator dan bulldozer – jenis perlindungan, tarif premi, dan cara memilih polis yang tepat untuk alat berat Anda.",
    readTime: "8 menit",
  },
  {
    title: "Asuransi Alat Berat untuk Proyek Konstruksi",
    slug: "asuransi-alat-berat-proyek-konstruksi",
    date: "6 Mei 2026",
    category: "Alat Berat",
    excerpt:
      "Kenapa alat berat di proyek konstruksi wajib diasuransikan? Cari tahu jenis coverage, risiko yang ditanggung, dan cara klaim yang efisien.",
    readTime: "7 menit",
  },
  {
    title: "Asuransi Alat Berat Pertambangan",
    slug: "asuransi-alat-berat-pertambangan",
    date: "6 Mei 2026",
    category: "Alat Berat",
    excerpt:
      "Asuransi khusus alat berat pertambangan: risiko operasional di medan berat, perlindungan yang tersedia, dan tips memilih polis yang sesuai regulasi.",
    readTime: "8 menit",
  },
  // ── Properti ────────────────────────────────────────────────────────────────
  {
    title: "Asuransi Properti Komersial di Batam",
    slug: "asuransi-properti-komersial-batam",
    date: "6 Mei 2026",
    category: "Properti",
    excerpt:
      "Panduan memilih asuransi properti komersial di Batam – ruko, gudang, hotel, dan gedung kantor. Tarif OJK, jenis coverage, dan cara klaim.",
    readTime: "9 menit",
  },
  {
    title: "Cara Klaim Asuransi Kebakaran Rumah",
    slug: "cara-klaim-asuransi-kebakaran-rumah",
    date: "6 Mei 2026",
    category: "Properti",
    excerpt:
      "Langkah-langkah klaim asuransi kebakaran rumah yang benar: dokumen yang diperlukan, tenggat waktu pelaporan, dan tips agar klaim tidak ditolak.",
    readTime: "6 menit",
  },
  // ── Marine ──────────────────────────────────────────────────────────────────
  {
    title: "Cara Klaim Asuransi Marine Cargo",
    slug: "cara-klaim-asuransi-marine-cargo",
    date: "7 Mei 2026",
    category: "Marine",
    excerpt:
      "Panduan lengkap klaim asuransi pengiriman laut (marine cargo) – dokumen survey kerusakan, prosedur pelaporan, dan cara mempercepat pembayaran klaim.",
    readTime: "7 menit",
  },
  {
    title: "Perbedaan Marine Hull vs Marine Cargo",
    slug: "perbedaan-marine-hull-vs-cargo",
    date: "7 Mei 2026",
    category: "Marine",
    excerpt:
      "Apa bedanya asuransi Marine Hull dan Marine Cargo? Pelajari cakupan, siapa yang perlu membelinya, dan bagaimana keduanya bekerja bersama.",
    readTime: "6 menit",
  },
  {
    title: "Asuransi Pengiriman Batam–Singapore",
    slug: "asuransi-pengiriman-batam-singapore",
    date: "7 Mei 2026",
    category: "Marine",
    excerpt:
      "Panduan asuransi kargo untuk jalur pengiriman Batam–Singapore: regulasi ekspor-impor, risiko utama, dan cara mendapatkan polis yang tepat.",
    readTime: "8 menit",
  },
  {
    title: "Builder's Risk untuk Galangan Kapal di Batam",
    slug: "builders-risk-untuk-galangan-kapal",
    date: "7 Mei 2026",
    category: "Marine",
    excerpt:
      "Asuransi Builder's Risk khusus galangan kapal: perlindungan selama masa pembangunan, risiko yang ditanggung, dan syarat polis di industri perkapalan Batam.",
    readTime: "8 menit",
  },
];

const categoryColors: Record<string, string> = {
  Kendaraan: "bg-blue-100 text-blue-800",
  "Alat Berat": "bg-yellow-100 text-yellow-800",
  Properti: "bg-green-100 text-green-800",
  Liability: "bg-orange-100 text-orange-800",
  Marine: "bg-cyan-100 text-cyan-800",
};

// Group articles by category for display
const categories = ["Kendaraan", "Alat Berat", "Properti", "Marine"];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">
            Blog & Edukasi
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Artikel Edukasi Asuransi
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Panduan, tips, dan informasi terpercaya tentang asuransi kerugian untuk melindungi
            aset Anda di Batam.
          </p>
        </div>
      </section>

      {/* ── Articles by category ── */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {categories.map((cat) => {
            const catArticles = articles.filter((a) => a.category === cat);
            if (!catArticles.length) return null;
            return (
              <div key={cat}>
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      categoryColors[cat] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {cat}
                  </span>
                  <div className="flex-1 h-px bg-[#e2e8f0]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catArticles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/blog/${a.slug}`}
                      className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-xl transition-all card-hover"
                    >
                      <div className="h-3 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0]" />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                              categoryColors[a.category] ?? "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {a.category}
                          </span>
                          <span className="text-[#64748b] text-xs">{a.readTime} baca</span>
                        </div>
                        <h2 className="font-display font-bold text-base text-[#0a1628] mb-2 group-hover:text-[#1a4fa0] transition-colors leading-tight">
                          {a.title}
                        </h2>
                        <p className="text-[#64748b] text-sm leading-relaxed mb-4">{a.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#64748b] text-xs">{a.date}</span>
                          <span className="text-[#1a4fa0] text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">
                            Baca →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
