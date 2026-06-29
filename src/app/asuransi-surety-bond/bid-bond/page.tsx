// app/asuransi-surety-bond/bid-bond/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bid Bond Batam – Jaminan Penawaran Tender & Lelang",
  description:
    "Bid bond atau jaminan penawaran di Batam untuk keperluan tender pemerintah, BUMN, dan swasta. Proses cepat, tanpa agunan, diakui resmi. Hubungi Rio untuk konsultasi gratis.",
  keywords: [
    "bid bond batam",
    "jaminan penawaran batam",
    "jaminan tender batam",
    "bid bond konstruksi batam",
    "surety bond bid bond batam",
  ],
  alternates: {
    canonical: "https://asuransibatam.com/asuransi-surety-bond/bid-bond",
    languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/bid-bond",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bid Bond Batam – Jaminan Penawaran Tender & Lelang",
  description:
    "Panduan lengkap bid bond di Batam: pengertian, fungsi, syarat, dan cara mengajukan jaminan penawaran untuk tender pemerintah dan swasta.",
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
  mainEntityOfPage: "https://asuransibatam.com/asuransi-surety-bond/bid-bond",
};

export default function BidBondPage() {
  return (
    <ArticleLayout
      title="Bid Bond Batam: Jaminan Penawaran untuk Tender & Lelang"
      description="Panduan lengkap bid bond di Batam — pengertian, fungsi, besaran nilai, syarat dokumen, dan cara cepat mendapatkan jaminan penawaran untuk tender pemerintah maupun swasta."
      date="2025"
      category="Surety Bond"
      readTime="6 menit"
      breadcrumbs={[
        { label: "Surety Bond", href: "/asuransi-surety-bond" },
        { label: "Bid Bond", href: "/asuransi-surety-bond/bid-bond" },
      ]}
      schema={schema}
    >
      {/* ── Intro ── */}
      <p>
        Setiap perusahaan yang mengikuti proses tender di Batam — baik proyek pemerintah,
        BUMN, maupun swasta — umumnya diwajibkan menyertakan <strong>Bid Bond</strong> atau
        <strong> Jaminan Penawaran</strong>. Dokumen ini bukan sekadar formalitas administrasi;
        ia adalah bukti keseriusan dan kemampuan perusahaan Anda untuk memenuhi kewajiban
        kontrak jika terpilih sebagai pemenang tender.
      </p>
      <p>
        Halaman ini menjelaskan secara lengkap apa itu bid bond, siapa yang membutuhkannya,
        berapa nilainya, dan bagaimana cara mendapatkannya dengan cepat di Batam.
      </p>

      {/* ── H2: Apa itu Bid Bond ── */}
      <h2>Apa Itu Bid Bond (Jaminan Penawaran)?</h2>
      <p>
        Bid bond adalah salah satu jenis <Link href="/asuransi-surety-bond">surety bond</Link>{" "}
        yang diterbitkan oleh perusahaan asuransi berlisensi OJK. Fungsinya adalah memberikan
        jaminan kepada pemilik proyek (<em>obligee</em>) bahwa peserta tender (<em>principal</em>)
        yang dinyatakan menang akan:
      </p>
      <ul>
        <li>Menandatangani kontrak pekerjaan sesuai penawaran yang diajukan</li>
        <li>
          Menyerahkan{" "}
          <Link href="/asuransi-surety-bond/performance-bond">Performance Bond</Link> dan{" "}
          <Link href="/asuransi-surety-bond/advance-payment-bond">Advance Payment Bond</Link>{" "}
          dalam batas waktu yang ditentukan
        </li>
        <li>Tidak menarik diri secara sepihak setelah pengumuman pemenang</li>
      </ul>
      <p>
        Apabila pemenang tender ingkar janji, pemilik proyek dapat mencairkan bid bond untuk
        menutup biaya tender ulang atau kerugian yang timbul.
      </p>

      {/* ── H2: Siapa yang Butuh Bid Bond ── */}
      <h2>Siapa yang Membutuhkan Bid Bond di Batam?</h2>
      <p>
        Bid bond dibutuhkan oleh berbagai jenis perusahaan yang aktif dalam pengadaan barang dan
        jasa di Batam, antara lain:
      </p>
      <ul>
        <li>
          <strong>Kontraktor konstruksi</strong> yang mengikuti tender proyek gedung, jalan, dan
          infrastruktur
        </li>
        <li>
          <strong>Perusahaan manufaktur dan industri</strong> di kawasan industri Batam yang
          mengikuti pengadaan mesin dan peralatan
        </li>
        <li>
          <strong>Perusahaan pengadaan (procurement)</strong> yang menjadi vendor BUMN, BP Batam,
          atau perusahaan asing
        </li>
        <li>
          <strong>Perusahaan jasa</strong> seperti IT, cleaning service, dan security yang mengikuti
          tender layanan
        </li>
        <li>
          <strong>Subkontraktor</strong> yang mengerjakan bagian proyek dari kontraktor utama
        </li>
      </ul>

      {/* ── H2: Besaran Nilai ── */}
      <h2>Berapa Nilai Bid Bond yang Dibutuhkan?</h2>
      <p>
        Berdasarkan regulasi pengadaan pemerintah (Perpres 16/2018 jo. Perpres 12/2021), nilai
        bid bond umumnya berkisar antara <strong>1% hingga 3%</strong> dari total nilai penawaran
        (Harga Perkiraan Sendiri / HPS). Untuk proyek swasta, besarannya disepakati dalam dokumen
        tender masing-masing.
      </p>
      <p>
        Contoh: jika nilai HPS proyek adalah Rp 10 miliar, maka bid bond yang dibutuhkan
        berkisar Rp 100 juta – Rp 300 juta.
      </p>

      {/* ── H2: Masa Berlaku ── */}
      <h2>Masa Berlaku Bid Bond</h2>
      <p>
        Bid bond berlaku selama periode tender berlangsung, ditambah buffer waktu untuk proses
        penetapan pemenang dan penandatanganan kontrak. Umumnya masa berlaku bid bond adalah
        <strong> 30 hingga 90 hari</strong> sejak tanggal penerbitan, sesuai ketentuan dokumen
        tender. Jika proses tender memanjang, bid bond dapat diperpanjang.
      </p>

      {/* ── H2: Dokumen yang Dibutuhkan ── */}
      <h2>Dokumen yang Dibutuhkan untuk Pengajuan Bid Bond</h2>
      <p>
        Berikut dokumen standar yang perlu disiapkan untuk mengajukan bid bond di Batam:
      </p>
      <ul>
        <li>Akta pendirian perusahaan dan perubahannya (jika ada)</li>
        <li>SIUP / NIB (Nomor Induk Berusaha)</li>
        <li>NPWP perusahaan</li>
        <li>Laporan keuangan 2 tahun terakhir (atau laporan pajak SPT Tahunan)</li>
        <li>Dokumen tender / Undangan Lelang dari pemilik proyek</li>
        <li>Kartu identitas direktur/komisaris</li>
        <li>Pengalaman pekerjaan sejenis (jika tersedia)</li>
      </ul>
      <p>
        Untuk kontraktor baru atau perusahaan yang belum memiliki laporan keuangan audit,
        tetap ada alternatif proses yang dapat didiskusikan bersama konsultan kami.
      </p>

      {/* ── H2: Keunggulan Surety Bond vs Bank Garansi ── */}
      <h2>Bid Bond Asuransi vs Bank Garansi: Mana yang Lebih Menguntungkan?</h2>
      <p>
        Banyak perusahaan di Batam masih menggunakan bank garansi untuk keperluan tender.
        Padahal, bid bond dari perusahaan asuransi menawarkan sejumlah keunggulan signifikan:
      </p>
      <ul>
        <li>
          <strong>Tanpa blokir dana:</strong> Bank garansi mengharuskan Anda menaruh deposit
          atau agunan di bank. Bid bond asuransi tidak — likuiditas perusahaan tetap terjaga.
        </li>
        <li>
          <strong>Premi lebih ringan:</strong> Biaya bid bond asuransi umumnya lebih rendah
          dibandingkan biaya provisi bank garansi.
        </li>
        <li>
          <strong>Proses lebih cepat:</strong> Penerbitan bid bond asuransi dapat selesai dalam
          1–3 hari kerja, jauh lebih cepat dari proses bank garansi.
        </li>
        <li>
          <strong>Diakui secara resmi:</strong> Bid bond dari asuransi berlisensi OJK diterima
          untuk pengadaan pemerintah dan swasta di seluruh Indonesia, termasuk di Batam.
        </li>
      </ul>

      {/* ── H2: Cara Mengajukan ── */}
      <h2>Cara Mengajukan Bid Bond di Batam</h2>
      <ol>
        <li>
          <strong>Hubungi kami</strong> via WhatsApp atau telepon untuk konsultasi awal dan
          pengecekan kelayakan.
        </li>
        <li>
          <strong>Siapkan dokumen</strong> sesuai checklist di atas dan kirimkan ke tim kami.
        </li>
        <li>
          <strong>Proses underwriting</strong> — tim kami mengevaluasi kelayakan dan menyiapkan
          draft bid bond untuk disetujui penanggung.
        </li>
        <li>
          <strong>Penerbitan</strong> — bid bond dicetak dan diserahkan (fisik atau digital sesuai
          kebutuhan) dalam 1–3 hari kerja.
        </li>
      </ol>

      {/* ── H2: Internal Links ── */}
      <h2>Jenis Surety Bond Lainnya yang Mungkin Anda Butuhkan</h2>
      <p>
        Selain bid bond, dalam siklus proyek Anda mungkin memerlukan jenis surety bond lain.
        Pelajari lebih lanjut:
      </p>
      <ul>
        <li>
          <Link href="/asuransi-surety-bond/performance-bond">
            Performance Bond – Jaminan Pelaksanaan Proyek
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/advance-payment-bond">
            Advance Payment Bond – Jaminan Uang Muka
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/maintenance-bond">
            Maintenance Bond – Jaminan Pemeliharaan
          </Link>
        </li>
        <li>
          <Link href="/asuransi-engineering/contractor-all-risk">
            Contractor All Risk (CAR) – Asuransi Proyek Konstruksi
          </Link>
        </li>
      </ul>
      <p>
        Atau kembali ke halaman utama{" "}
        <Link href="/asuransi-surety-bond">Surety Bond Batam</Link> untuk gambaran lengkap.
      </p>

      {/* ── CTA ── */}
      <h2>Konsultasi Bid Bond Gratis dengan Rio</h2>
      <p>
        Anda memiliki dokumen tender di tangan dan membutuhkan bid bond secepatnya? Hubungi
        Rio — konsultan asuransi kerugian dengan pengalaman 10+ tahun di Batam — untuk
        mendapatkan penawaran premi terbaik dan proses penerbitan yang cepat.
      </p>
      <p>
        <strong>WhatsApp:</strong> 0813-7333-6728 |{" "}
        <strong>Layanan:</strong> Senin–Sabtu, 08.00–17.00 WIB
      </p>
    </ArticleLayout>
  );
}
