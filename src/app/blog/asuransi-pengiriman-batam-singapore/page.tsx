// app/blog/asuransi-pengiriman-batam-singapore/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asuransi Pengiriman Barang Batam–Singapura – Panduan Lengkap untuk Eksportir",
  description:
    "Panduan asuransi marine cargo rute Batam–Singapura: Incoterms, jenis polis, waktu tempuh, dan risiko spesifik di Selat Singapura. Konsultasi Rio 0813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/blog/asuransi-pengiriman-batam-singapore",
    languages: {
      id: "https://asuransibatam.biz.id/blog/asuransi-pengiriman-batam-singapore",
      en: "https://asuransibatam.biz.id/en/blog/batam-singapore-shipping-insurance",
    },
  },
  openGraph: {
    title: "Asuransi Pengiriman Barang Batam–Singapura – Panduan Lengkap untuk Eksportir",
    description: "Semua yang perlu diketahui eksportir dan importir tentang asuransi kargo rute Batam–Singapura.",
    url: "https://asuransibatam.biz.id/blog/asuransi-pengiriman-batam-singapore",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Pengiriman Barang Batam–Singapura – Panduan Lengkap untuk Eksportir",
  description: "Panduan asuransi marine cargo rute Batam–Singapura: Incoterms, jenis polis, waktu tempuh, dan risiko spesifik di Selat Singapura.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: { "@type": "Person", name: "Rio", jobTitle: "Konsultan Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.biz.id" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.biz.id/blog/asuransi-pengiriman-batam-singapore" },
};

export default function AsuransiPengirimanBatamSingapurePage() {
  return (
    <ArticleLayout
      title="Asuransi Pengiriman Barang Batam–Singapura – Panduan Lengkap untuk Eksportir"
      description="Jarak hanya 20 km, tapi risiko pengiriman Batam–Singapura tidak boleh diremehkan. Panduan memilih polis yang tepat untuk jalur ini."
      date="7 Mei 2026"
      readTime="9 menit"
      category="Marine"
      breadcrumbs={[{ label: "Asuransi Pengiriman Batam–Singapura", href: "/blog/asuransi-pengiriman-batam-singapore" }]}
      schema={schema}
    >
      <h2>Batam dan Singapura: Dua Ekonomi yang Saling Bergantung</h2>
      <p>
        Selat Singapura memisahkan Batam dan Singapura dengan jarak kurang dari 20 kilometer — tetapi secara ekonomi, keduanya terhubung lebih erat dari banyak kota bertetangga. Setiap hari, ratusan pengiriman melintas: komponen elektronik dari kawasan industri Batamindo ke fabrikan Singapura, produk makanan olahan, spare part industri, dan berbagai komoditas ekspor lainnya.
      </p>
      <p>
        Justru karena jaraknya pendek, banyak pelaku usaha menganggap risiko lebih rendah dan mengabaikan asuransi kargo. Ini keliru. <strong>Jarak pendek tidak mengurangi risiko kerusakan saat bongkar-muat, pencurian di dermaga, atau kerusakan akibat air laut.</strong> Selat Singapura adalah salah satu jalur pelayaran tersibuk di dunia — kepadatan lalu lintas justru meningkatkan risiko insiden.
      </p>

      <h2>Jenis Pengiriman di Rute Batam–Singapura</h2>
      <ul>
        <li><strong>Kapal Feri Kargo (RoRo):</strong> Truk atau kontainer masuk langsung ke badan kapal. Waktu tempuh sekitar 45–60 menit.</li>
        <li><strong>Ferry Konvensional + Barge:</strong> Barang diangkut terpisah dari kendaraan, umum untuk kargo berat atau oversized.</li>
        <li><strong>Speedboat / Pompong Kargo:</strong> Untuk pengiriman kecil dan cepat. Rentan terhadap water ingress karena ukuran kapal yang lebih kecil.</li>
        <li><strong>Air Freight via Bandara Hang Nadim:</strong> Untuk barang bernilai tinggi atau mendesak. Polis marine cargo standar umumnya mencakup air freight juga.</li>
      </ul>

      <h2>Risiko Spesifik di Jalur Batam–Singapura</h2>
      <p><strong>Kepadatan Lalu Lintas Selat Singapura:</strong> Lebih dari 1.000 kapal per hari — tanker raksasa, bulk carrier, dan kapal kontainer berbagi jalur yang sama dengan kapal feri kecil. Risiko tubrukan lebih tinggi dibanding jalur terbuka.</p>
      <p><strong>Cuaca Tidak Menentu di Musim Pancaroba:</strong> Antara Maret–Mei dan Oktober–Desember, ombak tinggi dan angin kencang dapat muncul tiba-tiba. Kapal kecil lebih rentan.</p>
      <p><strong>Risiko di Dermaga dan Terminal:</strong> Kerusakan akibat handling yang kasar saat bongkar-muat di Pelabuhan Batam Center, Sekupang, atau Tanah Merah Ferry Terminal Singapura adalah titik risiko tertinggi untuk barang pecah belah dan elektronik.</p>
      <p><strong>Pencurian dan Penggelapan:</strong> Kargo break-bulk yang menunggu di area dermaga lebih rentan, terutama saat malam hari atau saat kepadatan tinggi.</p>
      <p><strong>Kelembaban dan Air Masuk:</strong> Untuk speedboat kargo atau barge terbuka, risiko air hujan atau percikan air laut nyata — terutama untuk barang yang tidak dikemas kedap air.</p>

      <h2>Incoterms dan Siapa yang Wajib Beli Asuransi</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Incoterms</th>
              <th className="text-left px-4 py-3">Risiko Berpindah ke Pembeli</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Siapa Beli Asuransi</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["EXW (Ex Works)", "Di gudang penjual", "Pembeli (importir Singapura)"],
              ["FOB (Free on Board)", "Saat barang naik ke kapal di Batam", "Pembeli"],
              ["CFR (Cost & Freight)", "Saat barang naik ke kapal di Batam", "Pembeli (penjual tanggung ongkir, bukan risiko)"],
              ["CIF (Cost, Insurance & Freight)", "Saat barang naik ke kapal", "Penjual wajib beli untuk kepentingan pembeli"],
              ["DAP (Delivered at Place)", "Di tempat tujuan Singapura", "Penjual"],
            ].map(([inc, risiko, siapa], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-bold text-[#1a4fa0] border-b border-[#e2e8f0]">{inc}</td>
                <td className="px-4 py-3 text-[#374151] border-b border-[#e2e8f0]">{risiko}</td>
                <td className="px-4 py-3 text-[#64748b] border-b border-[#e2e8f0]">{siapa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p><strong>Perhatian khusus untuk CIF:</strong> Banyak eksportir Batam yang berjualan CIF membeli asuransi dengan nilai dan klausa minimum hanya untuk memenuhi persyaratan kontrak — bukan untuk perlindungan optimal. Ini merugikan importir Singapura yang sebenarnya menanggung risiko.</p>

      <h2>Memilih Klausa yang Tepat untuk Rute Ini</h2>
      <p><strong>ICC (A) — direkomendasikan untuk:</strong> elektronik, komponen mesin, peralatan medis, barang bernilai di atas Rp 100 juta per pengiriman, dan barang yang sensitif terhadap kelembaban.</p>
      <p><strong>ICC (B) atau ICC (C) — bisa dipertimbangkan untuk:</strong> bahan baku industri (besi, plastik, kimia bulk), komoditas hasil pertanian atau perikanan, dan barang dengan nilai rendah dan kemasan kuat.</p>
      <p><strong>Klausul tambahan yang sering relevan:</strong> War &amp; Strikes Clause (umumnya otomatis untuk rute internasional), TPND Clause (perlindungan pencurian tambahan), dan Refrigeration Clause (untuk pengiriman makanan beku).</p>

      <h2>Berapa Premi Asuransi Kargo Batam–Singapura?</h2>
      <p>Karena rute ini pendek dan tergolong rutin, premi umumnya lebih kompetitif dibanding rute internasional jarak jauh:</p>
      <ul>
        <li>ICC (A) untuk elektronik: 0,2% – 0,4% dari nilai kargo</li>
        <li>ICC (A) untuk general cargo: 0,1% – 0,25%</li>
        <li>ICC (C) untuk bulk cargo: mulai dari 0,05%</li>
      </ul>
      <p>
        Untuk pengiriman rutin, pertimbangkan <strong>Open Cover Policy</strong> — polis terbuka yang otomatis mencakup setiap pengiriman dalam periode tertentu tanpa harus membuat polis baru setiap kali. Lebih efisien dan sering lebih murah per pengiriman.
      </p>

      <h2>Ilustrasi Kasus: Kerusakan Elektronik di Tanah Merah</h2>
      <p>
        Sebuah perusahaan elektronik di Batamindo mengirimkan 50 karton komponen sirkuit ke pembeli di Singapura via feri kargo. Saat bongkar di Tanah Merah Ferry Terminal, 8 karton jatuh dari forklift dan rusak. Total kerugian sekitar SGD 12.000.
      </p>
      <p>
        Karena polis menggunakan ICC (A) dengan klausul TPND, dan petugas penerima langsung membuat notasi kerusakan di delivery order, klaim berhasil diproses dalam 3 minggu. Tanpa asuransi, perusahaan harus menanggung sendiri atau melalui proses tuntutan ke operator feri yang panjang dan tidak pasti hasilnya.
      </p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="font-display font-bold text-lg text-[#c9a84c] mb-2">Konsultasi Polis Kargo Batam–Singapura</h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Saya membantu eksportir dan importir di Batam memilih polis yang benar sesuai Incoterms, jenis barang, dan frekuensi pengiriman — termasuk penyusunan Open Cover untuk pengiriman reguler.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20kargo%20Batam%20Singapura"
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
          <Link href="/blog/cara-klaim-asuransi-marine-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Cara Klaim Asuransi Marine Cargo</Link>
          <Link href="/blog/perbedaan-marine-hull-vs-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Perbedaan Marine Hull dan Marine Cargo</Link>
          <Link href="/asuransi-marine/marine-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Produk Asuransi Marine Cargo Batam</Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
