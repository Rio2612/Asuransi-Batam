import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
export const metadata: Metadata = {
  title: "Asuransi Mobil Batam 2025 – Panduan Lengkap, Tarif & Tips Klaim",
  description: "Panduan lengkap asuransi mobil di Batam 2025. Tarif premi, perusahaan terbaik, cara klaim, dan tips memilih polis yang tepat untuk kendaraan Anda di Batam.",
  alternates: { canonical: "https://asuransibatam.id/blog/asuransi-mobil-batam" },
};
const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Asuransi Mobil Batam 2025 – Panduan Lengkap", datePublished: "2025-03-01", author: { "@type": "Person", name: "Rio Mardiansyah" }, publisher: { "@type": "Organization", name: "Asuransi Batam" } };
export default function ArticleAsuransiMobilBatamPage() {
  return (
    <ArticleLayout
      title="Asuransi Mobil Batam 2025: Panduan Lengkap, Tarif & Tips"
      description="Semua yang perlu Anda tahu tentang asuransi mobil di Batam – dari tarif OJK hingga cara klaim."
      date="1 Maret 2025" category="Kendaraan" readTime="10 menit"
      breadcrumbs={[{ label: "Asuransi Mobil Batam", href: "/blog/asuransi-mobil-batam" }]}
      schema={schema}
    >
      <p>Batam, sebagai kota industri dan pariwisata yang berkembang pesat, memiliki tingkat mobilitas kendaraan yang tinggi. Dengan kondisi jalan yang terus berkembang dan trafik yang padat, memiliki asuransi mobil bukan lagi pilihan – ini adalah kebutuhan.</p>

      <h2>Mengapa Asuransi Mobil Penting di Batam?</h2>
      <p>Beberapa faktor yang membuat asuransi mobil di Batam sangat penting:</p>
      <ul>
        <li><strong>Mobilitas tinggi:</strong> Batam memiliki jalanan yang terus berkembang dengan volume kendaraan yang terus bertambah</li>
        <li><strong>Risiko banjir:</strong> Beberapa wilayah Batam rawan banjir, terutama saat musim hujan</li>
        <li><strong>Kendaraan relatif baru:</strong> Banyak warga Batam memiliki kendaraan baru yang nilainya perlu dilindungi</li>
        <li><strong>Aktivitas industri:</strong> Kendaraan niaga dan alat berat yang beroperasi memerlukan perlindungan khusus</li>
      </ul>

      <h2>Tarif Premi Asuransi Mobil di Batam (Wilayah 2)</h2>
      <p>Berdasarkan Surat Edaran OJK, Batam termasuk dalam Wilayah 2. Berikut acuan tarif premi:</p>
      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Harga Kendaraan</th>
              <th className="p-4 text-center">All Risk (Wilayah 2)</th>
              <th className="p-4 text-center">TLO (Wilayah 2)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["s.d. Rp 125 juta", "3.26% - 3.59%", "0.47% - 0.56%"],
              ["Rp 125-200 juta", "2.28% - 2.69%", "0.63% - 0.74%"],
              ["Rp 200-400 juta", "1.69% - 2.00%", "0.53% - 0.63%"],
              ["Rp 400-800 juta", "1.69% - 2.00%", "0.43% - 0.52%"],
              ["Di atas Rp 800 juta", "1.70% - 2.00%", "0.37% - 0.45%"],
            ].map(([a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-center text-[#1a4fa0] font-semibold">{b}</td>
                <td className="p-4 text-center text-[#64748b]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-[#64748b]">*Tarif berdasarkan SE OJK. Tarif final ditentukan masing-masing perusahaan asuransi dalam rentang tersebut.</p>

      <h2>Apa Saja yang Bisa Ditambahkan sebagai Perluasan?</h2>
      <ul>
        <li><strong>Banjir & Genangan:</strong> Sangat direkomendasikan untuk Batam yang rawan banjir</li>
        <li><strong>Gempa Bumi & Tsunami:</strong> Perlindungan bencana alam</li>
        <li><strong>Kerusuhan & Huru-hara:</strong> Perlindungan dari kerusuhan</li>
        <li><strong>Tanggung Jawab Hukum Pihak Ketiga (TPL):</strong> Wajib untuk perlindungan lengkap</li>
        <li><strong>Kecelakaan Diri Pengemudi & Penumpang</strong></li>
      </ul>

      <h2>Tips Memilih Asuransi Mobil di Batam</h2>
      <ol>
        <li><strong>Pilih perusahaan dengan bengkel rekanan di Batam</strong> – Pastikan ada bengkel rekanan yang memadai</li>
        <li><strong>Cek rating perusahaan asuransi</strong> – Pilih yang memiliki rating kesehatan keuangan baik dari OJK</li>
        <li><strong>Pertimbangkan deductible</strong> – Premi lebih murah biasanya ada risiko tanggung sendiri lebih besar</li>
        <li><strong>Gunakan konsultan asuransi</strong> – Konsultan bisa membandingkan beberapa perusahaan untuk Anda</li>
        <li><strong>Baca polis dengan teliti</strong> – Pahami pengecualian sebelum membeli</li>
      </ol>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <h3 className="font-display font-bold text-[#0a1628] mb-3">Konsultasi Asuransi Mobil di Batam</h3>
        <p className="text-[#64748b] mb-4">Rio Mardiansyah membantu Anda menemukan asuransi mobil terbaik di Batam dengan harga kompetitif. Konsultasi gratis, tanpa biaya.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/asuransi-kendaraan/asuransi-mobil-batam" className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm">Asuransi Mobil Batam</Link>
          <Link href="/kalkulator-premi-mobil" className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm">Kalkulator Premi</Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
