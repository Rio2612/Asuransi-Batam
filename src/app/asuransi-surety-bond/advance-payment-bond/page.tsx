// app/asuransi-surety-bond/advance-payment-bond/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advance Payment Bond Batam – Jaminan Uang Muka Proyek",
  description:
    "Advance payment bond atau jaminan uang muka di Batam. Lindungi pemberi kerja dari risiko kontraktor gagal setelah menerima uang muka proyek. Proses cepat, premi kompetitif. Hubungi Rio.",
  keywords: [
    "advance payment bond batam",
    "jaminan uang muka batam",
    "jaminan uang muka proyek batam",
    "surety bond uang muka batam",
    "jaminan down payment konstruksi batam",
  ],
  alternates: {
    canonical:
      "https://asuransibatam.com/asuransi-surety-bond/advance-payment-bond",
    languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/advance-payment-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/advance-payment-bond",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Advance Payment Bond Batam – Jaminan Uang Muka Proyek",
  description:
    "Panduan advance payment bond di Batam: fungsi, besaran nilai, dokumen, dan cara pengajuan jaminan uang muka untuk proyek konstruksi dan pengadaan.",
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
    "https://asuransibatam.com/asuransi-surety-bond/advance-payment-bond",
};

export default function AdvancePaymentBondPage() {
  return (
    <ArticleLayout
      title="Advance Payment Bond Batam: Jaminan Keamanan Uang Muka Proyek"
      description="Panduan lengkap advance payment bond di Batam — pengertian, fungsi, besaran nilai, mekanisme pengurangan, dan cara mendapatkan jaminan uang muka untuk proyek konstruksi dan pengadaan."
      date="2025"
      category="Surety Bond"
      readTime="6 menit"
      breadcrumbs={[
        { label: "Surety Bond", href: "/asuransi-surety-bond" },
        {
          label: "Advance Payment Bond",
          href: "/asuransi-surety-bond/advance-payment-bond",
        },
      ]}
      schema={schema}
    >
      {/* ── Intro ── */}
      <p>
        Dalam banyak kontrak proyek di Batam, pemilik proyek memberikan uang muka kepada
        kontraktor untuk membiayai mobilisasi, pembelian material awal, atau pengadaan
        peralatan. Namun pembayaran uang muka ini membawa risiko: bagaimana jika kontraktor
        menghilang atau gagal memulai pekerjaan setelah menerima dana tersebut?
      </p>
      <p>
        Jawabannya adalah <strong>Advance Payment Bond</strong> (APB) atau{" "}
        <strong>Jaminan Uang Muka</strong>. Dokumen ini melindungi pemilik proyek dari risiko
        kerugian finansial akibat kegagalan kontraktor setelah menerima pembayaran awal.
      </p>

      {/* ── H2: Definisi ── */}
      <h2>Apa Itu Advance Payment Bond?</h2>
      <p>
        Advance payment bond adalah jenis <Link href="/asuransi-surety-bond">surety bond</Link>{" "}
        yang memberikan jaminan kepada pemilik proyek (<em>obligee</em>) bahwa apabila kontraktor
        (<em>principal</em>) gagal menjalankan kewajibannya setelah menerima uang muka, maka
        perusahaan asuransi (<em>surety</em>) akan mengganti kerugian senilai uang muka yang
        belum dikembalikan.
      </p>
      <p>
        Nilai advance payment bond mengikuti besaran uang muka yang diberikan dan secara
        otomatis berkurang seiring dengan penyerapan uang muka dalam tagihan progress
        pembayaran kontraktor.
      </p>

      {/* ── H2: Mekanisme Pengurangan ── */}
      <h2>Bagaimana Mekanisme Pengurangan Nilai Advance Payment Bond?</h2>
      <p>
        Salah satu keunikan advance payment bond dibanding jenis surety bond lainnya adalah
        nilai jaminannya berkurang secara proporsional. Berikut ilustrasinya:
      </p>
      <ul>
        <li>
          Nilai kontrak: <strong>Rp 20 miliar</strong>, uang muka 20% ={" "}
          <strong>Rp 4 miliar</strong>
        </li>
        <li>
          Advance payment bond diterbitkan senilai <strong>Rp 4 miliar</strong> (setara uang
          muka)
        </li>
        <li>
          Setiap kali kontraktor mengajukan tagihan progress dan di dalamnya terdapat potongan
          uang muka, nilai bond otomatis berkurang secara proporsional
        </li>
        <li>
          Ketika uang muka telah dipotong penuh dari tagihan, advance payment bond dinyatakan
          lunas dan tidak berlaku lagi
        </li>
      </ul>
      <p>
        Mekanisme ini memastikan bahwa nilai jaminan selalu mencerminkan sisa uang muka yang
        belum diserap, sehingga pemilik proyek mendapatkan perlindungan yang akurat sepanjang
        proyek berjalan.
      </p>

      {/* ── H2: Besaran Nilai ── */}
      <h2>Berapa Besaran Uang Muka dan Nilai Advance Payment Bond?</h2>
      <p>
        Untuk pengadaan pemerintah, ketentuan uang muka diatur dalam peraturan pengadaan yang
        berlaku:
      </p>
      <ul>
        <li>
          <strong>Usaha Kecil:</strong> uang muka maksimal 30% dari nilai kontrak
        </li>
        <li>
          <strong>Usaha Non-Kecil / Badan Usaha:</strong> uang muka maksimal 20% dari nilai
          kontrak
        </li>
      </ul>
      <p>
        Untuk kontrak swasta di Batam, besaran uang muka disepakati dalam kontrak — umumnya
        berkisar 10%–30% dari nilai kontrak. Advance payment bond harus senilai penuh dengan
        uang muka yang diterima.
      </p>

      {/* ── H2: Kapan APB Dibutuhkan ── */}
      <h2>Kapan Advance Payment Bond Dibutuhkan?</h2>
      <p>
        Advance payment bond diperlukan saat kontraktor menerima uang muka dari:
      </p>
      <ul>
        <li>
          Proyek konstruksi pemerintah di Batam (wajib sesuai regulasi pengadaan)
        </li>
        <li>
          Proyek BUMN dan badan usaha yang mempersyaratkan uang muka dalam kontrak
        </li>
        <li>
          Proyek EPC di kawasan industri Batam (Batamindo, Kabil, Tanjung Uncang, dll.)
        </li>
        <li>
          Kontrak pengadaan mesin, peralatan, atau material dengan pembayaran awal yang
          signifikan
        </li>
        <li>
          Proyek swasta yang melibatkan investor asing (<em>foreign direct investment</em>) di
          Batam dengan persyaratan jaminan ketat
        </li>
      </ul>

      {/* ── H2: Dokumen ── */}
      <h2>Dokumen yang Dibutuhkan untuk Advance Payment Bond</h2>
      <ul>
        <li>Salinan kontrak / SPK yang memuat klausul uang muka</li>
        <li>
          Salinan <Link href="/asuransi-surety-bond/performance-bond">Performance Bond</Link>{" "}
          yang telah diterbitkan (biasanya APB menyusul setelah PB)
        </li>
        <li>Akta pendirian perusahaan dan NIB/SIUP</li>
        <li>NPWP perusahaan</li>
        <li>Laporan keuangan 2 tahun terakhir</li>
        <li>Rekening koran 3 bulan terakhir</li>
        <li>Surat permohonan uang muka dari kontraktor kepada pemilik proyek</li>
      </ul>

      {/* ── H2: Internal Links ── */}
      <h2>Surety Bond Lain yang Relevan untuk Proyek Anda</h2>
      <ul>
        <li>
          <Link href="/asuransi-surety-bond/bid-bond">
            Bid Bond – Jaminan Penawaran sebelum Tender
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/performance-bond">
            Performance Bond – Jaminan Pelaksanaan Kontrak
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/maintenance-bond">
            Maintenance Bond – Jaminan Pemeliharaan setelah Proyek Selesai
          </Link>
        </li>
        <li>
          <Link href="/asuransi-engineering/contractor-all-risk">
            Contractor All Risk – Asuransi Fisik Proyek Konstruksi di Batam
          </Link>
        </li>
      </ul>

      {/* ── CTA ── */}
      <h2>Ajukan Advance Payment Bond di Batam Sekarang</h2>
      <p>
        Jangan biarkan pencairan uang muka tertunda hanya karena penerbitan advance payment bond
        yang lambat. Tim kami membantu proses dari dokumen hingga penerbitan dalam 1–3 hari
        kerja. Hubungi Rio untuk konsultasi gratis.
      </p>
      <p>
        <strong>WhatsApp:</strong> 0813-7333-6728 |{" "}
        <strong>Layanan:</strong> Senin–Sabtu, 08.00–17.00 WIB
      </p>
    </ArticleLayout>
  );
}
