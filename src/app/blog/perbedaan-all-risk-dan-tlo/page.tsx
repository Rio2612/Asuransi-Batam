import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
export const metadata: Metadata = {
  title: "Perbedaan Asuransi All Risk dan TLO – Mana yang Lebih Baik?",
  description: "Penjelasan lengkap perbedaan All Risk dan TLO, kelebihan kekurangan masing-masing, dan panduan memilih yang sesuai untuk kendaraan Anda di Batam.",
  alternates: { canonical: "https://asuransibatam.biz.id/blog/perbedaan-all-risk-dan-tlo" },
};
const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Perbedaan Asuransi All Risk dan TLO", datePublished: "2025-03-05", author: { "@type": "Person", name: "Rio Mardiansyah" }, publisher: { "@type": "Organization", name: "Asuransi Batam" } };
export default function ArticleAllRiskTLOPage() {
  return (
    <ArticleLayout
      title="Perbedaan Asuransi All Risk dan TLO: Mana yang Lebih Baik untuk Mobil Anda?"
      description="Panduan memilih antara All Risk dan TLO berdasarkan nilai kendaraan, usia, dan kebutuhan Anda."
      date="5 Maret 2025" category="Kendaraan" readTime="6 menit"
      breadcrumbs={[{ label: "Perbedaan All Risk dan TLO", href: "/blog/perbedaan-all-risk-dan-tlo" }]}
      schema={schema}
    >
      <p>Saat membeli asuransi kendaraan, pertanyaan yang paling sering ditanyakan adalah: <em>"Pilih All Risk atau TLO?"</em> Keduanya punya kelebihan dan kekurangan masing-masing. Artikel ini akan membantu Anda membuat keputusan yang tepat.</p>

      <h2>Apa itu Asuransi All Risk (Comprehensive)?</h2>
      <p>All Risk atau Comprehensive adalah jenis asuransi kendaraan yang menanggung <strong>semua kerusakan fisik</strong>, baik ringan, sedang, maupun berat. Sesuai namanya, hampir semua risiko ditanggung, kecuali yang secara eksplisit dikecualikan dalam polis.</p>
      <p><strong>Yang ditanggung All Risk:</strong></p>
      <ul>
        <li>Kerusakan ringan (lecet, penyok, kaca retak)</li>
        <li>Kerusakan sedang akibat tabrakan</li>
        <li>Kerusakan total akibat kecelakaan berat</li>
        <li>Kehilangan kendaraan (pencurian)</li>
        <li>Kebakaran kendaraan</li>
      </ul>

      <h2>Apa itu Asuransi TLO (Total Loss Only)?</h2>
      <p>TLO atau Total Loss Only hanya menanggung kerugian jika kendaraan <strong>rusak total (lebih dari 75% nilai kendaraan) atau hilang dicuri</strong>. Kerusakan ringan dan sedang tidak ditanggung.</p>
      <p><strong>Yang ditanggung TLO:</strong></p>
      <ul>
        <li>Kehilangan kendaraan karena pencurian</li>
        <li>Kerusakan yang nilainya melebihi 75% harga kendaraan</li>
      </ul>
      <p><strong>Yang TIDAK ditanggung TLO:</strong></p>
      <ul>
        <li>Lecet, penyok ringan</li>
        <li>Kerusakan kaca</li>
        <li>Kerusakan akibat kecelakaan yang nilai perbaikannya di bawah 75%</li>
      </ul>

      <h2>Perbandingan Langsung: All Risk vs TLO</h2>
      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Aspek</th>
              <th className="p-4 text-center">All Risk</th>
              <th className="p-4 text-center">TLO</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Kerusakan ringan", "✅ Ditanggung", "❌ Tidak"],
              ["Kerusakan total", "✅ Ditanggung", "✅ Ditanggung"],
              ["Pencurian", "✅ Ditanggung", "✅ Ditanggung"],
              ["Besaran premi", "Lebih mahal (1.5-3.5%)", "Lebih murah (0.2-0.7%)"],
              ["Cocok untuk", "Mobil baru/mahal", "Mobil tua/murah"],
            ].map(([a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-center text-[#64748b]">{b}</td>
                <td className="p-4 text-center text-[#64748b]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Kapan Pilih All Risk?</h2>
      <ul>
        <li>Kendaraan baru atau harga di atas Rp 200 juta</li>
        <li>Kendaraan masih dalam cicilan/KKB (biasanya bank mewajibkan All Risk)</li>
        <li>Sering digunakan di kota besar dengan risiko kecelakaan ringan tinggi</li>
        <li>Anda menginginkan ketenangan pikiran penuh</li>
      </ul>

      <h2>Kapan Pilih TLO?</h2>
      <ul>
        <li>Kendaraan tua berusia di atas 7-10 tahun</li>
        <li>Nilai kendaraan relatif rendah (di bawah Rp 150 juta)</li>
        <li>Anggaran premi terbatas</li>
        <li>Kendaraan hanya untuk keperluan tertentu atau jarang digunakan</li>
      </ul>

      <h2>Rekomendasi Berdasarkan Harga Kendaraan</h2>
      <div className="p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] my-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><span className="text-[#c9a84c] font-bold mt-0.5">→</span><div><strong>Di atas Rp 300 juta:</strong> Sangat disarankan All Risk</div></li>
          <li className="flex items-start gap-3"><span className="text-[#c9a84c] font-bold mt-0.5">→</span><div><strong>Rp 150-300 juta:</strong> All Risk direkomendasikan, TLO jika budget terbatas</div></li>
          <li className="flex items-start gap-3"><span className="text-[#c9a84c] font-bold mt-0.5">→</span><div><strong>Di bawah Rp 150 juta:</strong> TLO sudah memadai</div></li>
          <li className="flex items-start gap-3"><span className="text-[#c9a84c] font-bold mt-0.5">→</span><div><strong>KKB/Kredit:</strong> All Risk wajib selama cicilan berlangsung</div></li>
        </ul>
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <h3 className="font-display font-bold text-[#0a1628] mb-3">Hitung Premi Mobil Anda Sekarang</h3>
        <p className="text-[#64748b] mb-4">Gunakan kalkulator premi kami untuk estimasi biaya All Risk dan TLO berdasarkan tarif OJK terbaru.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/kalkulator-premi-mobil" className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm hover:bg-[#132040] transition-colors">Kalkulator Premi Mobil</Link>
          <Link href="/asuransi-kendaraan/asuransi-mobil-batam" className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm hover:bg-[#0a1628]/5 transition-colors">Info Lengkap Asuransi Mobil</Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
