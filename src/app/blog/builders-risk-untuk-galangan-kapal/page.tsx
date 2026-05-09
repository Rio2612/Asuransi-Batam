// app/blog/builders-risk-untuk-galangan-kapal/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Builders Risk untuk Galangan Kapal – Asuransi Pembangunan Kapal di Batam",
  description:
    "Panduan lengkap asuransi builders risk untuk galangan kapal di Batam: apa yang dilindungi, periode coverage, dan mengapa berbeda dari marine hull biasa. Konsultasi Rio 0813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/blog/builders-risk-untuk-galangan-kapal",
    languages: {
      id: "https://asuransibatam.biz.id/blog/builders-risk-untuk-galangan-kapal",
      en: "https://asuransibatam.biz.id/en/blog/builders-risk-shipyard-insurance-batam",
    },
  },
  openGraph: {
    title: "Builders Risk untuk Galangan Kapal – Asuransi Pembangunan Kapal di Batam",
    description: "Asuransi builders risk melindungi kapal yang sedang dibangun, dimodifikasi, atau direparasi besar. Panduan untuk galangan kapal di Batam.",
    url: "https://asuransibatam.biz.id/blog/builders-risk-untuk-galangan-kapal",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Builders Risk untuk Galangan Kapal – Asuransi Pembangunan Kapal di Batam",
  description: "Panduan lengkap asuransi builders risk untuk galangan kapal di Batam: apa yang dilindungi, periode coverage, dan mengapa berbeda dari marine hull biasa.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: { "@type": "Person", name: "Rio", jobTitle: "Konsultan Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.biz.id" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.biz.id/blog/builders-risk-untuk-galangan-kapal" },
};

export default function BuildersRiskGalanganKapalPage() {
  return (
    <ArticleLayout
      title="Builders Risk untuk Galangan Kapal – Asuransi Pembangunan Kapal di Batam"
      description="Kapal dalam proses pembangunan berada dalam kondisi paling rentan. Builders Risk adalah satu-satunya produk yang dirancang khusus untuk fase ini."
      date="7 Mei 2026"
      readTime="10 menit"
      category="Marine"
      breadcrumbs={[{ label: "Builders Risk Galangan Kapal", href: "/blog/builders-risk-untuk-galangan-kapal" }]}
      schema={schema}
    >
      <h2>Batam: Pusat Galangan Kapal Indonesia yang Terus Berkembang</h2>
      <p>
        Batam bukan hanya kota industri elektronik dan logistik — kota ini juga merupakan salah satu pusat galangan kapal terbesar di Indonesia. Dengan lokasi strategis di Selat Malaka dan Selat Singapura, puluhan galangan kapal beroperasi di Batam — dari galangan kecil yang memperbaiki kapal nelayan hingga galangan berskala internasional yang membangun kapal platform dan kapal angkat.
      </p>
      <p>
        Setiap kapal yang sedang dalam proses pembangunan, konversi, atau reparasi besar berada dalam kondisi yang <strong>paling rentan secara fisik</strong> — belum sepenuhnya berfungsi, banyak pekerjaan manusia di atas dan di dalam lambungnya, dan terparkir di fasilitas yang juga menyimpan bahan berbahaya seperti gas las, cat, dan bahan bakar. Di sinilah <strong>Builders Risk Insurance</strong> menjadi kebutuhan kritis.
      </p>

      <h2>Apa Itu Builders Risk Insurance untuk Kapal?</h2>
      <p>
        Builders Risk Insurance melindungi <strong>kapal yang sedang dalam proses pembangunan atau reparasi besar</strong>, sejak peletakan lunas (keel laying) atau awal pekerjaan hingga kapal selesai dan diserahterimakan kepada pemilik.
      </p>
      <p>Ini bukan asuransi hull biasa. Kapal yang sudah beroperasi dilindungi oleh Marine Hull Insurance. Builders Risk khusus dirancang untuk fase pembangunan — periode di mana kapal belum memiliki sertifikat operasional dan belum bisa berlayar sendiri.</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Aspek</th>
              <th className="text-left px-4 py-3">Builders Risk</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Marine Hull</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Fase", "Pembangunan / reparasi", "Operasional"],
              ["Status kapal", "Belum selesai / tidak berlayar", "Beroperasi aktif"],
              ["Dasar nilai", "Nilai konstruksi bertahap", "Nilai pasar kapal"],
              ["Tertanggung utama", "Galangan dan/atau pemilik kapal", "Pemilik/operator kapal"],
              ["Uji coba laut", "Termasuk (sea trial coverage)", "Tidak relevan"],
            ].map(([aspek, br, hull], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{aspek}</td>
                <td className="px-4 py-3 text-[#374151] border-b border-[#e2e8f0]">{br}</td>
                <td className="px-4 py-3 text-[#64748b] border-b border-[#e2e8f0]">{hull}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Siapa yang Butuh Builders Risk?</h2>
      <p><strong>Galangan Kapal (Shipyard):</strong> Galangan bertanggung jawab atas kapal selama proses pembangunan. Jika terjadi kebakaran, kapal tenggelam saat diluncurkan, atau kecelakaan kerja merusak struktur kapal, galangan menanggung kerugiannya — kecuali ada Builders Risk yang menutup ini.</p>
      <p><strong>Pemilik Kapal Baru:</strong> Pemilik yang memesan kapal baru memiliki kepentingan finansial sejak pembayaran DP dilakukan. Mereka perlu memastikan investasi terlindungi bahkan sebelum kapal jadi.</p>
      <p><strong>Pemilik Kapal yang Mereparasi Besar:</strong> Kapal yang masuk galangan untuk konversi besar atau drydock juga bisa ditutup dengan Builders Risk selama periode tersebut.</p>

      <h2>Apa Saja yang Dilindungi Builders Risk?</h2>
      <ul>
        <li><strong>Kerusakan Fisik Material dan Komponen:</strong> Bahan bangunan, pelat baja, pipa, kabel, dan semua material yang sudah terpasang atau menunggu pemasangan di area galangan.</li>
        <li><strong>Kerusakan Akibat Kesalahan Konstruksi:</strong> Cacat desain atau pemasangan yang menyebabkan kerusakan pada bagian lain kapal. Catatan: biaya perbaikan bagian yang cacat itu sendiri biasanya tidak ditanggung.</li>
        <li><strong>Kebakaran dan Ledakan:</strong> Risiko tertinggi di galangan kapal, terutama saat pengelasan, sandblasting, dan pengecatan.</li>
        <li><strong>Risiko Peluncuran (Launching Risk):</strong> Momen kapal pertama kali masuk ke air — risiko miring, tenggelam, atau menabrak struktur saat diluncurkan.</li>
        <li><strong>Sea Trial Coverage:</strong> Periode uji coba berlayar setelah kapal selesai, biasanya 30–90 hari sebelum polis berakhir dan Marine Hull mulai berlaku.</li>
        <li><strong>Tanggung Jawab Pihak Ketiga:</strong> Kerusakan pada kapal atau properti lain di galangan akibat kapal yang sedang dibangun.</li>
      </ul>

      <h2>Yang Tidak Ditutup (Pengecualian Umum)</h2>
      <ul>
        <li>Keausan normal (wear and tear)</li>
        <li>Biaya perbaikan bagian yang cacat itu sendiri — hanya kerusakan konsekuensial yang ditanggung</li>
        <li>Kerusakan akibat mogok kerja atau kerusuhan (kecuali ada klausul khusus)</li>
        <li>Kerugian finansial akibat keterlambatan proyek — ini produk terpisah bernama Delay in Start-Up</li>
        <li>Kerusakan yang sudah ada sebelum polis dimulai</li>
      </ul>

      <h2>Bagaimana Nilai Pertanggungan Dihitung?</h2>
      <p>
        Nilai kapal tidak tetap — ia bertumbuh seiring progress pembangunan. Ada dua metode umum:
      </p>
      <p><strong>Agreed Value / Contract Price:</strong> Nilai pertanggungan = nilai kontrak penuh dari hari pertama. Premi dihitung dari nilai kontrak total. Coverage penuh sejak polis dimulai.</p>
      <p><strong>Progressive Value:</strong> Nilai pertanggungan meningkat bertahap mengikuti persentase penyelesaian. Lebih akurat secara aktuarial tapi lebih kompleks dalam administrasi.</p>
      <p>Untuk galangan di Batam, metode Agreed Value lebih umum digunakan karena lebih mudah dikelola dan memberikan kepastian coverage sejak awal.</p>

      <h2>Berapa Premi Builders Risk?</h2>
      <p>
        Faktor yang mempengaruhi premi: jenis kapal, nilai kontrak, durasi pembangunan, reputasi galangan, dan klausa yang dipilih. Sebagai gambaran, tarif Builders Risk umumnya berkisar <strong>0,5% hingga 1,5% dari nilai kontrak</strong> per proyek — jauh lebih tinggi dari Marine Hull biasa karena risiko fase konstruksi memang lebih tinggi.
      </p>

      <h2>Siapa yang Bertindak sebagai Tertanggung?</h2>
      <p><strong>Opsi 1 — Galangan sebagai tertanggung utama:</strong> Galangan memegang polis dan memasukkan kepentingan pemilik kapal sebagai additional insured. Umum untuk kontrak di mana galangan memegang kendali penuh.</p>
      <p><strong>Opsi 2 — Pemilik kapal sebagai tertanggung utama:</strong> Pemilik memegang polis sendiri, galangan sebagai additional insured. Memberi pemilik lebih banyak kontrol atas klaim.</p>
      <p><strong>Opsi 3 — Joint Policy:</strong> Keduanya sebagai co-insured. Paling umum untuk proyek besar dengan nilai tinggi.</p>
      <p>Pilihan ini bergantung pada isi kontrak pembangunan dan sebaiknya diputuskan sebelum proyek dimulai.</p>

      <h2>Kapan Polis Builders Risk Berakhir?</h2>
      <p>Polis berakhir pada yang lebih awal antara: tanggal serah terima kapal kepada pemilik, selesainya sea trial yang berhasil, atau tanggal berakhir polis. Segera setelah delivery, pemilik kapal harus mengaktifkan Marine Hull Insurance agar kapal terlindungi saat mulai beroperasi.</p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="font-display font-bold text-lg text-[#c9a84c] mb-2">Konsultasi Builders Risk untuk Proyek Galangan Anda</h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Saya membantu galangan kapal dan pemesan kapal baru di Batam merancang struktur asuransi yang tepat — dari Builders Risk selama konstruksi hingga Marine Hull saat kapal mulai beroperasi.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20builders%20risk%20untuk%20galangan%20kapal"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors">
            Konsultasi via WhatsApp
          </a>
          <Link href="/asuransi-marine/builders-risk"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Lihat Produk Builders Risk
          </Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Artikel Terkait</p>
        <div className="flex flex-col gap-2">
          <Link href="/blog/perbedaan-marine-hull-vs-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Perbedaan Marine Hull dan Marine Cargo</Link>
          <Link href="/asuransi-marine/marine-hull" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Asuransi Marine Hull Batam</Link>
          <Link href="/asuransi-marine" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Semua Produk Asuransi Marine</Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
