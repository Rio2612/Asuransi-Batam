// app/blog/cara-klaim-asuransi-marine-cargo/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cara Klaim Asuransi Marine Cargo yang Benar – Panduan Lengkap",
  description:
    "Panduan step-by-step mengajukan klaim asuransi marine cargo: dokumen wajib, batas waktu lapor, dan kesalahan umum yang membuat klaim ditolak. Konsultasi Rio 0813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/blog/cara-klaim-asuransi-marine-cargo",
    languages: {
      id: "https://asuransibatam.biz.id/blog/cara-klaim-asuransi-marine-cargo",
      en: "https://asuransibatam.biz.id/en/blog/how-to-claim-marine-cargo-insurance",
    },
  },
  openGraph: {
    title: "Cara Klaim Asuransi Marine Cargo yang Benar – Panduan Lengkap",
    description: "Dokumen wajib, batas waktu, dan langkah klaim marine cargo agar tidak ditolak.",
    url: "https://asuransibatam.biz.id/blog/cara-klaim-asuransi-marine-cargo",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Klaim Asuransi Marine Cargo yang Benar – Panduan Lengkap",
  description: "Panduan step-by-step mengajukan klaim asuransi marine cargo: dokumen wajib, batas waktu lapor, dan kesalahan umum yang membuat klaim ditolak.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: { "@type": "Person", name: "Rio", jobTitle: "Konsultan Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.biz.id" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.biz.id/blog/cara-klaim-asuransi-marine-cargo" },
};

export default function CaraKlaimMarineCargoPage() {
  return (
    <ArticleLayout
      title="Cara Klaim Asuransi Marine Cargo yang Benar – Panduan Lengkap"
      description="Dokumen wajib, batas waktu pelaporan, dan langkah-langkah yang benar agar klaim marine cargo Anda tidak ditolak."
      date="7 Mei 2026"
      readTime="8 menit"
      category="Marine"
      breadcrumbs={[{ label: "Cara Klaim Marine Cargo", href: "/blog/cara-klaim-asuransi-marine-cargo" }]}
      schema={schema}
    >
      <h2>Mengapa Proses Klaim Marine Cargo Sering Gagal?</h2>
      <p>
        Banyak importir dan eksportir di Batam baru menyadari celah polis mereka justru saat kargo tiba dalam kondisi rusak atau hilang. Bukan karena perusahaan asuransi tidak mau membayar — melainkan karena langkah pertama setelah insiden sering dilakukan keliru.
      </p>
      <p>
        Klaim marine cargo punya keunikan dibanding asuransi lain: barang sudah berpindah tangan antar moda transportasi, dokumentasi melibatkan banyak pihak (shipper, carrier, forwarder, bea cukai), dan batas waktu pelaporan sangat ketat.
      </p>

      <h2>Langkah 1 – Segera Buat Catatan Kerusakan di Lokasi</h2>
      <p>
        Begitu kargo tiba dan ditemukan kondisi tidak sesuai — entah basah, penyok, kurang jumlah, atau hilang sebagian — hal pertama yang harus dilakukan adalah <strong>membuat notasi kerusakan (damage notation) pada dokumen penerimaan</strong>.
      </p>
      <p>
        Jangan tanda tangani Delivery Order atau Surat Jalan dalam kondisi bersih jika barang memang bermasalah. Tulis secara eksplisit: <em>&quot;Received with damage – dents on 3 cartons&quot;</em> atau <em>&quot;Short landed – 2 boxes missing&quot;</em>. Notasi ini menjadi bukti bahwa kerusakan sudah ada sebelum barang masuk gudang Anda.
      </p>
      <p>
        <strong>Yang sering terjadi:</strong> Petugas gudang menandatangani dokumen tanpa memeriksa fisik barang karena terburu-buru. Ini membuat klaim sangat sulit dibuktikan karena tidak ada catatan resmi pada titik serah terima.
      </p>

      <h2>Langkah 2 – Laporkan ke Perusahaan Asuransi Dalam 3×24 Jam</h2>
      <p>
        Sebagian besar polis marine cargo mensyaratkan <strong>laporan awal (first notice of loss)</strong> dalam 3 hari kalender sejak barang diterima atau sejak kerusakan diketahui. Beberapa polis bahkan mensyaratkan 24 jam.
      </p>
      <p>Laporan awal tidak harus lengkap — cukup informasikan nomor polis, nomor bill of lading, deskripsi singkat kerusakan, dan estimasi nilai kerugian sementara. Jangan tunggu semua dokumen terkumpul baru lapor.</p>

      <h2>Langkah 3 – Kumpulkan Dokumen Klaim Lengkap</h2>
      <p>Dokumen standar yang diminta surveyor dan perusahaan asuransi:</p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Dokumen</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Polis asuransi / cover note", "Bukti pertanggungan aktif"],
              ["Bill of Lading / Airway Bill", "Bukti pengiriman resmi"],
              ["Commercial Invoice", "Nilai barang yang diasuransikan"],
              ["Packing List", "Detail isi kargo per koli"],
              ["Certificate of Insurance", "Bukti kepesertaan kargo dalam polis"],
              ["Delivery Order / Surat Jalan", "Dokumen penerimaan dari carrier – harus ada notasi kerusakan"],
              ["Foto kerusakan", "Diambil sebelum barang dipindahkan"],
            ].map(([doc, ket], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{doc}</td>
                <td className="px-4 py-3 text-[#64748b] border-b border-[#e2e8f0]">{ket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Dokumen tambahan tergantung jenis klaim: laporan surveyor independen untuk kargo basah/rusak, laporan short landing dari pelabuhan untuk kargo kurang, atau dokumen sengketa impor untuk kargo tertahan bea cukai.</p>

      <h2>Langkah 4 – Proses Survei oleh Loss Adjuster</h2>
      <p>
        Setelah laporan diterima, perusahaan asuransi akan menunjuk <strong>surveyor / loss adjuster independen</strong> untuk menilai kerugian secara objektif. Jangan pindahkan atau buang barang rusak sebelum survei selesai. Pisahkan koli yang rusak dari yang baik agar mudah dihitung, dan siapkan informasi rute pengiriman lengkap.
      </p>
      <p>Hasil survei dituangkan dalam <strong>Survey Report</strong> yang menjadi dasar perhitungan ganti rugi.</p>

      <h2>Langkah 5 – Perhitungan dan Pembayaran Klaim</h2>
      <p>Jumlah ganti rugi dipengaruhi oleh metode penilaian di polis: <strong>Agreed Value</strong> (nilai disepakati di polis), <strong>Market Value</strong> (nilai pasar saat kerugian), atau <strong>Invoice Value + persentase</strong> (biasanya +10% untuk biaya lain).</p>
      <p>
        Perhatikan juga <strong>deductible (risiko sendiri)</strong> — hampir semua polis marine cargo punya deductible. Ketahui besarannya sebelum mengajukan klaim yang nilainya mungkin di bawah threshold tersebut.
      </p>

      <h2>Kesalahan Umum yang Membuat Klaim Ditolak</h2>
      <ol>
        <li>Tidak ada notasi kerusakan di dokumen penerimaan</li>
        <li>Terlambat lapor — melewati batas waktu first notice of loss</li>
        <li>Barang sudah diproses sebelum survei (kargo basah langsung dikeringkan atau dijual)</li>
        <li>Polis tidak menutup rute atau moda pengiriman yang digunakan</li>
        <li>Kemasan tidak sesuai standar — pengecualian umum di hampir semua polis</li>
        <li>Under-insurance — nilai yang diasuransikan lebih rendah dari nilai aktual, ganti rugi dipotong proporsional</li>
      </ol>

      <h2>Tips Sebelum Kargo Dikirim</h2>
      <ul>
        <li>Foto dan video kondisi barang sebelum stuffing ke kontainer</li>
        <li>Pastikan polis aktif sebelum barang berangkat — jangan kirim tanpa cover</li>
        <li>Pilih klausa yang tepat: ICC (A) all-risk lebih luas dari ICC (B) dan ICC (C)</li>
        <li>Simpan semua dokumen pengiriman dalam satu folder per shipment</li>
        <li>Cantumkan nilai yang benar — under-insurance akan merugikan saat klaim</li>
      </ul>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="font-display font-bold text-lg text-[#c9a84c] mb-2">Butuh Bantuan Klaim atau Konsultasi Polis Marine?</h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Proses klaim marine cargo bisa rumit, terutama jika melibatkan beberapa moda transportasi atau transit di beberapa pelabuhan. Sebagai konsultan berbasis di Batam dengan pengalaman di jalur Batam–Singapura–Jakarta, saya siap membantu dari awal hingga klaim cair.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20klaim%20marine%20cargo"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors">
            Konsultasi via WhatsApp
          </a>
          <Link href="/asuransi-marine/marine-cargo"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Lihat Produk Marine Cargo
          </Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Artikel Terkait</p>
        <div className="flex flex-col gap-2">
          <Link href="/blog/perbedaan-marine-hull-vs-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Perbedaan Marine Hull dan Marine Cargo</Link>
          <Link href="/blog/asuransi-pengiriman-batam-singapore" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Asuransi Pengiriman Batam–Singapura</Link>
          <Link href="/asuransi-marine/marine-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Produk Asuransi Marine Cargo Batam</Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
