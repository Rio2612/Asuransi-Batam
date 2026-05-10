// app/asuransi-surety-bond/maintenance-bond/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maintenance Bond Batam – Jaminan Pemeliharaan Pasca Proyek",
  description:
    "Maintenance bond atau jaminan pemeliharaan di Batam untuk proyek konstruksi setelah serah terima. Lindungi pemilik proyek dari cacat tersembunyi. Proses cepat, konsultasi gratis dengan Rio.",
  keywords: [
    "maintenance bond batam",
    "jaminan pemeliharaan batam",
    "jaminan masa pemeliharaan batam",
    "surety bond maintenance bond batam",
    "jaminan retensi konstruksi batam",
  ],
  alternates: {
    canonical:
      "https://asuransibatam.biz.id/asuransi-surety-bond/maintenance-bond",
    languages: {
      id: "https://asuransibatam.biz.id/asuransi-surety-bond/maintenance-bond",
      en: "https://asuransibatam.biz.id/en/surety-bond-insurance/maintenance-bond",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Maintenance Bond Batam – Jaminan Pemeliharaan Pasca Proyek",
  description:
    "Panduan maintenance bond di Batam: fungsi, nilai, masa berlaku, dan cara mendapatkan jaminan pemeliharaan untuk proyek konstruksi dan pengadaan.",
  author: {
    "@type": "Person",
    name: "Rio Mardiansyah",
    jobTitle: "Konsultan Asuransi Kerugian",
  },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Batam",
    url: "https://asuransibatam.biz.id",
  },
  mainEntityOfPage:
    "https://asuransibatam.biz.id/asuransi-surety-bond/maintenance-bond",
};

export default function MaintenanceBondPage() {
  return (
    <ArticleLayout
      title="Maintenance Bond Batam: Jaminan Pemeliharaan Setelah Proyek Selesai"
      description="Panduan lengkap maintenance bond di Batam — pengertian, fungsi, nilai jaminan, masa berlaku, dan cara pengajuan jaminan pemeliharaan untuk proyek konstruksi dan pengadaan pemerintah maupun swasta."
      date="2025"
      category="Surety Bond"
      readTime="5 menit"
      breadcrumbs={[
        { label: "Surety Bond", href: "/asuransi-surety-bond" },
        {
          label: "Maintenance Bond",
          href: "/asuransi-surety-bond/maintenance-bond",
        },
      ]}
      schema={schema}
    >
      {/* ── Intro ── */}
      <p>
        Serah terima proyek bukan berarti tanggung jawab kontraktor berakhir. Dalam masa
        pemeliharaan setelah selesainya pekerjaan, kontraktor masih wajib memperbaiki segala
        cacat tersembunyi (<em>latent defect</em>) atau kerusakan yang timbul akibat mutu
        pekerjaan yang tidak memenuhi standar. Untuk menjamin kewajiban ini,{" "}
        <strong>Maintenance Bond</strong> atau <strong>Jaminan Pemeliharaan</strong>{" "}
        diterbitkan.
      </p>
      <p>
        Maintenance bond melengkapi siklus penuh surety bond dalam sebuah proyek — mulai dari{" "}
        <Link href="/asuransi-surety-bond/bid-bond">Bid Bond</Link> (pra-tender),{" "}
        <Link href="/asuransi-surety-bond/performance-bond">Performance Bond</Link> (masa
        pelaksanaan), hingga maintenance bond (pasca serah terima).
      </p>

      {/* ── H2: Definisi ── */}
      <h2>Apa Itu Maintenance Bond (Jaminan Pemeliharaan)?</h2>
      <p>
        Maintenance bond adalah jenis <Link href="/asuransi-surety-bond">surety bond</Link> yang
        memberikan jaminan kepada pemilik proyek bahwa selama masa pemeliharaan yang disepakati,
        kontraktor akan:
      </p>
      <ul>
        <li>
          Memperbaiki cacat, retak, kebocoran, atau kerusakan lain yang ditemukan setelah serah
          terima pertama (BAST I)
        </li>
        <li>
          Merespons keluhan pemilik proyek dalam batas waktu yang ditetapkan kontrak
        </li>
        <li>
          Menyelesaikan seluruh kewajiban pemeliharaan hingga serah terima akhir (BAST II)
        </li>
      </ul>
      <p>
        Jika kontraktor mengabaikan kewajiban pemeliharaan, pemilik proyek dapat mencairkan
        maintenance bond untuk membiayai perbaikan oleh pihak ketiga.
      </p>

      {/* ── H2: Manfaat bagi Pemilik Proyek ── */}
      <h2>Mengapa Pemilik Proyek di Batam Membutuhkan Maintenance Bond?</h2>
      <p>
        Kerusakan pasca konstruksi lebih umum terjadi daripada yang banyak orang bayangkan —
        terutama di lingkungan Batam dengan kondisi iklim tropis, kelembaban tinggi, dan
        karakteristik tanah tertentu. Beberapa risiko yang dijamin maintenance bond antara lain:
      </p>
      <ul>
        <li>Retakan pada dinding atau struktur akibat penurunan pondasi</li>
        <li>Kebocoran atap atau sistem waterproofing yang gagal</li>
        <li>Kerusakan sistem MEP (mekanikal, elektrikal, plumbing) pasca serah terima</li>
        <li>Cacat pada finishing yang tidak terdeteksi saat inspeksi akhir</li>
        <li>Kerusakan jalan atau perkerasan akibat mutu campuran aspal yang kurang memadai</li>
      </ul>

      {/* ── H2: Nilai dan Masa Berlaku ── */}
      <h2>Berapa Nilai dan Masa Berlaku Maintenance Bond?</h2>
      <p>
        Nilai maintenance bond umumnya ditetapkan sebesar <strong>5% dari nilai kontrak</strong>,
        sama dengan nilai performance bond. Namun untuk proyek tertentu, nilai ini dapat
        disesuaikan dengan kesepakatan kontrak.
      </p>
      <p>
        Masa berlaku maintenance bond mencerminkan durasi masa pemeliharaan yang ditetapkan
        dalam kontrak. Untuk proyek pemerintah, masa pemeliharaan umumnya:
      </p>
      <ul>
        <li>
          <strong>6 bulan</strong> untuk pekerjaan sederhana seperti pengecatan, landscape, atau
          interior ringan
        </li>
        <li>
          <strong>12 bulan</strong> untuk konstruksi bangunan gedung standar
        </li>
        <li>
          <strong>24 bulan</strong> untuk proyek infrastruktur berskala besar, instalasi
          mekanikal, atau proyek EPC
        </li>
      </ul>
      <p>
        Maintenance bond berlaku sejak tanggal BAST I (serah terima pertama) dan berakhir
        pada saat BAST II (serah terima akhir) atau sesuai tanggal kedaluwarsa yang tertera.
      </p>

      {/* ── H2: Alternatif – Retensi vs Maintenance Bond ── */}
      <h2>Maintenance Bond vs Uang Retensi: Mana yang Lebih Menguntungkan Kontraktor?</h2>
      <p>
        Secara tradisional, pemilik proyek menahan sebagian pembayaran kontraktor sebagai{" "}
        <em>uang retensi</em> (biasanya 5%) untuk menjamin kewajiban pemeliharaan. Namun
        praktik ini merugikan kontraktor karena mengikat arus kas.
      </p>
      <p>
        Dengan menerbitkan maintenance bond, kontraktor dapat meminta pencairan penuh pembayaran
        terakhir dan menggantikan uang retensi dengan jaminan asuransi. Hasilnya:
      </p>
      <ul>
        <li>Kontraktor menerima 100% pembayaran tanpa retensi ditahan</li>
        <li>Pemilik proyek tetap mendapatkan perlindungan setara melalui jaminan asuransi</li>
        <li>Arus kas kontraktor lebih sehat untuk proyek berikutnya</li>
      </ul>
      <p>
        Opsi ini sangat relevan bagi kontraktor aktif di Batam yang sering menangani beberapa
        proyek secara bersamaan dan membutuhkan fleksibilitas likuiditas.
      </p>

      {/* ── H2: Dokumen ── */}
      <h2>Dokumen untuk Pengajuan Maintenance Bond</h2>
      <ul>
        <li>Salinan kontrak yang memuat klausul masa pemeliharaan</li>
        <li>
          Salinan{" "}
          <Link href="/asuransi-surety-bond/performance-bond">Performance Bond</Link> yang
          pernah diterbitkan
        </li>
        <li>Berita Acara Serah Terima Pertama (BAST I)</li>
        <li>Akta pendirian dan NIB/SIUP perusahaan</li>
        <li>NPWP perusahaan</li>
        <li>Laporan keuangan terbaru</li>
      </ul>

      {/* ── H2: Internal Links ── */}
      <h2>Siklus Lengkap Surety Bond untuk Proyek Anda di Batam</h2>
      <p>
        Proyek yang berjalan mulus membutuhkan jaminan yang tepat di setiap tahapnya. Pelajari
        selengkapnya:
      </p>
      <ul>
        <li>
          <Link href="/asuransi-surety-bond/bid-bond">
            Bid Bond – Jaminan Penawaran (Pra-Tender)
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/performance-bond">
            Performance Bond – Jaminan Pelaksanaan (Masa Konstruksi)
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/advance-payment-bond">
            Advance Payment Bond – Jaminan Uang Muka
          </Link>
        </li>
        <li>
          <Link href="/asuransi-engineering/erection-all-risk">
            Erection All Risk – Asuransi Instalasi Mesin dan Peralatan
          </Link>
        </li>
      </ul>
      <p>
        Lihat gambaran lengkap layanan kami di halaman{" "}
        <Link href="/asuransi-surety-bond">Surety Bond Batam</Link>.
      </p>

      {/* ── CTA ── */}
      <h2>Ganti Uang Retensi dengan Maintenance Bond — Hubungi Rio</h2>
      <p>
        Jangan biarkan uang retensi ratusan juta hingga miliaran rupiah tertahan di tangan
        pemilik proyek selama berbulan-bulan. Terbitkan maintenance bond dan cairkan retensi
        Anda sekarang. Proses 1–3 hari kerja, konsultasi gratis.
      </p>
      <p>
        <strong>WhatsApp:</strong> 0813-7333-6728 |{" "}
        <strong>Layanan:</strong> Senin–Sabtu, 08.00–17.00 WIB
      </p>
    </ArticleLayout>
  );
}
