// app/asuransi-surety-bond/performance-bond/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performance Bond Batam – Jaminan Pelaksanaan Proyek Konstruksi",
  description:
    "Performance bond atau jaminan pelaksanaan di Batam untuk kontraktor konstruksi, EPC, dan pengadaan. Jaminan proyek selesai sesuai kontrak. Proses cepat, konsultasi gratis dengan Rio.",
  keywords: [
    "performance bond batam",
    "jaminan pelaksanaan batam",
    "jaminan pelaksanaan konstruksi batam",
    "surety bond performance bond batam",
    "jaminan kontrak proyek batam",
  ],
  alternates: {
    canonical: "https://asuransibatam.com/asuransi-surety-bond/performance-bond",
    languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/performance-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/performance-bond",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Performance Bond Batam – Jaminan Pelaksanaan Proyek Konstruksi",
  description:
    "Panduan lengkap performance bond di Batam: pengertian, fungsi, nilai, dokumen, dan cara mendapatkan jaminan pelaksanaan untuk proyek konstruksi dan pengadaan.",
  author: {
    "@type": "Person",
    name: "Rio Mardiansyah",
    jobTitle: "Konsultan Asuransi Kerugian",
  },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Batam",
    url: "https://asuransibatam.com",
  },
  mainEntityOfPage:
    "https://asuransibatam.com/asuransi-surety-bond/performance-bond",
};

export default function PerformanceBondPage() {
  return (
    <ArticleLayout
      title="Performance Bond Batam: Jaminan Pelaksanaan Proyek Sesuai Kontrak"
      description="Panduan lengkap performance bond di Batam — pengertian, fungsi, nilai, dokumen yang dibutuhkan, dan cara mengajukan jaminan pelaksanaan untuk proyek konstruksi, EPC, dan pengadaan barang/jasa."
      date="2025"
      category="Surety Bond"
      readTime="7 menit"
      breadcrumbs={[
        { label: "Surety Bond", href: "/asuransi-surety-bond" },
        { label: "Performance Bond", href: "/asuransi-surety-bond/performance-bond" },
      ]}
      schema={schema}
    >
      {/* ── Intro ── */}
      <p>
        Ketika sebuah kontrak proyek ditandatangani, pemilik proyek membutuhkan kepastian bahwa
        kontraktor akan menyelesaikan pekerjaan sesuai spesifikasi, jadwal, dan nilai kontrak
        yang disepakati. Di sinilah <strong>Performance Bond</strong> atau{" "}
        <strong>Jaminan Pelaksanaan</strong> memainkan perannya.
      </p>
      <p>
        Performance bond adalah instrumen yang paling sering diminta setelah{" "}
        <Link href="/asuransi-surety-bond/bid-bond">Bid Bond</Link> dalam siklus pengadaan
        proyek di Batam. Dokumen ini wajib diserahkan oleh kontraktor pemenang sebelum
        pekerjaan dimulai.
      </p>

      {/* ── H2: Definisi ── */}
      <h2>Apa Itu Performance Bond (Jaminan Pelaksanaan)?</h2>
      <p>
        Performance bond adalah jenis <Link href="/asuransi-surety-bond">surety bond</Link> yang
        memberikan jaminan kepada pemilik proyek (<em>obligee</em>) bahwa kontraktor (
        <em>principal</em>) akan:
      </p>
      <ul>
        <li>Menyelesaikan seluruh pekerjaan sesuai ruang lingkup kontrak</li>
        <li>Memenuhi standar kualitas dan spesifikasi teknis yang disyaratkan</li>
        <li>Menyelesaikan proyek dalam batas waktu yang ditetapkan</li>
        <li>
          Menyerahkan{" "}
          <Link href="/asuransi-surety-bond/maintenance-bond">Maintenance Bond</Link> setelah
          proyek selesai, jika dipersyaratkan
        </li>
      </ul>
      <p>
        Jika kontraktor wanprestasi — misalnya menghentikan pekerjaan di tengah jalan,
        mengerjakan dengan kualitas di bawah standar, atau melampaui waktu tanpa sebab sah —
        pemilik proyek dapat mencairkan performance bond sebagai kompensasi.
      </p>

      {/* ── H2: Siapa yang Membutuhkan ── */}
      <h2>Siapa yang Wajib Menyerahkan Performance Bond di Batam?</h2>
      <p>
        Performance bond umumnya dipersyaratkan kepada:
      </p>
      <ul>
        <li>
          <strong>Kontraktor konstruksi</strong> yang mengerjakan proyek gedung, fasilitas
          industri, atau infrastruktur di Batam
        </li>
        <li>
          <strong>Kontraktor EPC</strong> (Engineering, Procurement & Construction) untuk
          proyek pabrik, kilang, atau instalasi besar di kawasan industri
        </li>
        <li>
          <strong>Supplier pengadaan</strong> yang memasok barang atau peralatan dengan nilai
          kontrak signifikan kepada BUMN atau pemerintah
        </li>
        <li>
          <strong>Kontraktor IT dan jasa</strong> dalam proyek jangka panjang dengan milestone
          penyelesaian yang terukur
        </li>
        <li>
          <strong>Subkontraktor</strong> dalam kontrak back-to-back dengan kontraktor utama
        </li>
      </ul>

      {/* ── H2: Nilai Performance Bond ── */}
      <h2>Berapa Nilai Performance Bond?</h2>
      <p>
        Berdasarkan Perpres 16/2018 dan ketentuan pengadaan yang berlaku, nilai performance bond
        umumnya ditetapkan sebesar <strong>5% dari nilai kontrak</strong>. Namun untuk proyek
        swasta atau kontrak bilateral, nilai ini dapat berbeda sesuai kesepakatan para pihak —
        umumnya berkisar antara 5% hingga 10% dari nilai kontrak.
      </p>
      <p>
        Contoh: Untuk kontrak konstruksi senilai Rp 50 miliar, performance bond yang dibutuhkan
        adalah sekitar <strong>Rp 2,5 miliar</strong>.
      </p>

      {/* ── H2: Masa Berlaku ── */}
      <h2>Masa Berlaku Performance Bond</h2>
      <p>
        Performance bond berlaku sejak tanggal penandatanganan kontrak hingga selesainya seluruh
        pekerjaan dan dilakukannya serah terima proyek (BAST). Masa berlaku biasanya
        mencerminkan durasi kontrak ditambah buffer 30 hari. Jika proyek mengalami perpanjangan
        waktu (addendum), performance bond harus diperpanjang secara bersamaan.
      </p>

      {/* ── H2: Dokumen ── */}
      <h2>Dokumen yang Dibutuhkan untuk Pengajuan Performance Bond</h2>
      <ul>
        <li>Akta pendirian dan seluruh perubahan perusahaan</li>
        <li>NIB (Nomor Induk Berusaha) dan SIUJK (untuk kontraktor konstruksi)</li>
        <li>NPWP perusahaan</li>
        <li>Laporan keuangan 2 tahun terakhir (lebih baik jika sudah diaudit)</li>
        <li>
          Salinan kontrak / Surat Perintah Kerja (SPK) dari pemilik proyek (
          <em>obligee</em>)
        </li>
        <li>
          Salinan <Link href="/asuransi-surety-bond/bid-bond">Bid Bond</Link> yang telah
          diterbitkan (jika ada)
        </li>
        <li>Daftar pengalaman proyek sejenis 3–5 tahun terakhir</li>
        <li>Neraca dan laporan laba rugi tahun berjalan (jika tersedia)</li>
      </ul>

      {/* ── H2: Perbedaan dengan Bid Bond ── */}
      <h2>Perbedaan Performance Bond dan Bid Bond</h2>
      <p>
        Meskipun keduanya termasuk dalam kelompok{" "}
        <Link href="/asuransi-surety-bond">surety bond</Link>, performance bond dan bid bond
        memiliki perbedaan mendasar:
      </p>
      <ul>
        <li>
          <strong>Bid bond</strong> diterbitkan sebelum tender dimulai dan berakhir saat kontrak
          ditandatangani. Tujuannya memastikan pemenang tender tidak mengundurkan diri.
        </li>
        <li>
          <strong>Performance bond</strong> diterbitkan setelah kontrak ditandatangani dan
          berlaku selama masa pelaksanaan proyek. Tujuannya memastikan proyek selesai sesuai
          kontrak.
        </li>
        <li>
          Nilai performance bond umumnya lebih besar dari bid bond karena mencerminkan nilai
          kontrak yang lebih tinggi.
        </li>
      </ul>

      {/* ── H2: Klaim ── */}
      <h2>Bagaimana Proses Klaim Performance Bond?</h2>
      <p>
        Pemilik proyek dapat mengajukan klaim performance bond apabila kontraktor terbukti
        wanprestasi. Proses klaim umumnya melibatkan:
      </p>
      <ol>
        <li>
          <strong>Notifikasi tertulis</strong> dari obligee kepada penanggung (perusahaan
          asuransi) dan principal (kontraktor) mengenai pelanggaran kontrak
        </li>
        <li>
          <strong>Investigasi</strong> oleh penanggung untuk memverifikasi keabsahan klaim dan
          besaran kerugian
        </li>
        <li>
          <strong>Penyelesaian:</strong> penanggung dapat membayar ganti rugi tunai, atau
          membantu menyelesaikan proyek melalui kontraktor pengganti
        </li>
      </ol>

      {/* ── H2: Internal Links ── */}
      <h2>Jenis Surety Bond Lain dalam Siklus Proyek Anda</h2>
      <ul>
        <li>
          <Link href="/asuransi-surety-bond/bid-bond">
            Bid Bond – Jaminan Penawaran Tender
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/advance-payment-bond">
            Advance Payment Bond – Jaminan Uang Muka
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/maintenance-bond">
            Maintenance Bond – Jaminan Pemeliharaan Pasca Proyek
          </Link>
        </li>
        <li>
          <Link href="/asuransi-engineering/contractor-all-risk">
            Contractor All Risk – Asuransi Perlindungan Proyek Konstruksi
          </Link>
        </li>
      </ul>

      {/* ── CTA ── */}
      <h2>Butuh Performance Bond di Batam? Konsultasi Gratis</h2>
      <p>
        Jangan tunda penyerahan performance bond dan berisiko kehilangan kontrak. Hubungi Rio
        sekarang untuk mendapatkan penawaran premi dan proses penerbitan dalam 1–3 hari kerja.
        Kami melayani kontraktor, perusahaan EPC, dan supplier di seluruh wilayah Batam dan
        Kepulauan Riau.
      </p>
      <p>
        <strong>WhatsApp:</strong> 0813-7333-6728 |{" "}
        <strong>Layanan:</strong> Senin–Sabtu, 08.00–17.00 WIB
      </p>
    </ArticleLayout>
  );
}
