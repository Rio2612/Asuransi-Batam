// app/blog/cara-mendapatkan-asuransi-builders-risk-batam/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cara Mendapatkan Asuransi Builders Risk yang Tepat di Batam",
  description:
    "Panduan lengkap memilih asuransi builders risk untuk proyek konstruksi & galangan kapal di Batam: studi kasus klaim nyata, kesalahan umum, dan langkah memilih sum insured yang tepat. Konsultasi Rio 0813-7333-6728.",
  alternates: {
    canonical:
      "https://asuransibatam.biz.id/blog/cara-mendapatkan-asuransi-builders-risk-batam",
    languages: {
      id: "https://asuransibatam.biz.id/blog/cara-mendapatkan-asuransi-builders-risk-batam",
      en: "https://asuransibatam.biz.id/en/blog/how-to-get-builders-risk-insurance-batam",
    },
  },
  openGraph: {
    title: "Cara Mendapatkan Asuransi Builders Risk yang Tepat di Batam",
    description:
      "Studi kasus klaim builders risk di galangan kapal Batam dan langkah memilih polis yang tepat agar proyek konstruksi Anda terlindungi.",
    url: "https://asuransibatam.biz.id/blog/cara-mendapatkan-asuransi-builders-risk-batam",
    type: "article",
  },
};

// Article schema (E-E-A-T: authorship & publisher signal)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Mendapatkan Asuransi Builders Risk yang Tepat di Batam",
  description:
    "Panduan lengkap memilih asuransi builders risk untuk proyek konstruksi & galangan kapal di Batam, dilengkapi studi kasus klaim nyata.",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  author: {
    "@type": "Person",
    name: "Rio",
    jobTitle: "Konsultan Asuransi Kerugian",
    telephone: "+6281373336728",
  },
  publisher: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    url: "https://asuransibatam.biz.id",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.biz.id/blog/cara-mendapatkan-asuransi-builders-risk-batam",
  },
};

// FAQ schema (wajib sesuai requirement — terpisah dari Article schema)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu asuransi Builders Risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Asuransi Builders Risk (Contractors' All Risks / Erection All Risks) adalah polis yang menjamin kerugian fisik pada proyek yang sedang dibangun — termasuk bangunan, instalasi, atau kapal yang sedang dikonstruksi/direparasi di galangan — akibat risiko seperti kebakaran, kebocoran air, kecelakaan kerja, atau bencana alam selama periode konstruksi berlangsung.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah galangan kapal di Batam butuh asuransi Builders Risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ya. Selama proses pembangunan atau reparasi kapal di galangan, nilai aset yang sedang dikerjakan biasanya sangat tinggi namun belum bisa diasuransikan dengan polis marine hull standar karena kapal belum jadi atau belum berlayar. Builders Risk mengisi celah perlindungan ini dari awal proyek sampai serah terima.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses klaim Builders Risk biasanya selesai?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tergantung kompleksitas kerugian dan kelengkapan dokumen, namun secara umum proses survei oleh loss adjuster hingga keputusan klaim memakan waktu beberapa minggu sampai 2-3 bulan untuk kasus dengan nilai kerugian besar yang memerlukan investigasi mendalam.",
      },
    },
    {
      "@type": "Question",
      name: "Apa kesalahan paling umum saat membeli polis Builders Risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Kesalahan paling umum adalah menetapkan sum insured terlalu rendah (under-insurance), tidak memasukkan klausul untuk pekerjaan subkontraktor, serta tidak memeriksa pengecualian terkait defect/desain yang sering jadi sumber sengketa klaim.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Builders Risk mencakup pekerjaan subkontraktor?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tergantung wording polis. Banyak proyek melibatkan beberapa subkontraktor untuk pekerjaan berbeda, dan polis perlu secara eksplisit menyebutkan bahwa seluruh pihak yang bekerja di proyek tersebut tercakup sebagai joint insured atau additional insured, agar tidak ada celah tanggung jawab saat klaim terjadi.",
      },
    },
  ],
};

export default function CaraMendapatkanBuildersRiskPage() {
  return (
    <ArticleLayout
      title="Cara Mendapatkan Asuransi Builders Risk yang Tepat di Batam"
      description="Studi kasus klaim nyata di galangan kapal Batam dan langkah-langkah memilih polis Builders Risk yang benar-benar melindungi proyek Anda."
      date="23 Juni 2026"
      readTime="10 menit"
      category="Marine"
      breadcrumbs={[
        { label: "Asuransi Marine", href: "/asuransi-marine" },
        { label: "Builders Risk", href: "/asuransi-marine/builders-risk" },
        {
          label: "Cara Mendapatkan Asuransi Builders Risk",
          href: "/blog/cara-mendapatkan-asuransi-builders-risk-batam",
        },
      ]}
      schema={articleSchema}
    >
      {/* ArticleLayout hanya menerima satu object schema (Article).
          FAQ schema disuntikkan langsung di sini agar Rich Result FAQ tetap tampil. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2>Mengapa Builders Risk Sering Diabaikan, Padahal Risikonya Besar</h2>
      <p>
        Saat sebuah proyek konstruksi atau pekerjaan reparasi kapal dimulai, perhatian biasanya tersedot habis ke jadwal, anggaran, dan teknis pengerjaan. Asuransi sering dianggap urusan administratif yang bisa diurus &quot;belakangan&quot; — sampai sebuah insiden terjadi di tengah proyek dan baru disadari bahwa aset senilai miliaran rupiah belum punya perlindungan yang memadai.
      </p>
      <p>
        Builders Risk Insurance (di beberapa wording juga disebut Contractors&apos; All Risks atau Erection All Risks) dirancang khusus untuk mengisi celah ini: melindungi proyek yang sedang dibangun, bukan aset yang sudah jadi. Untuk proyek seperti pembangunan gedung, instalasi pabrik, hingga konstruksi dan reparasi kapal di galangan, periode pengerjaan inilah yang justru paling rentan terhadap kerugian besar.
      </p>

      <h2>Studi Kasus: Klaim Builders Risk di Galangan Kapal Batam</h2>
      <p>
        Salah satu kasus yang pernah saya tangani langsung melibatkan sebuah galangan kapal di Batam yang sedang mengerjakan proyek reparasi dan modifikasi struktur kapal niaga. Pekerjaan melibatkan proses pengelasan, penggantian pelat lambung, serta instalasi ulang sebagian sistem mekanikal di area dok.
      </p>
      <p>
        Di tengah proses pengerjaan, terjadi insiden kebakaran kecil yang berasal dari aktivitas pengelasan di area yang berdekatan dengan material mudah terbakar. Api berhasil dipadamkan dengan cepat oleh tim galangan, namun kerusakan tetap terjadi pada sebagian struktur yang sedang dikerjakan serta beberapa peralatan kerja yang berada di lokasi.
      </p>

      <div className="my-8">
        <Image
          src="/images/potoartikel/klaimbuilderisk.webp"
          alt="Dokumentasi proses penanganan klaim asuransi Builders Risk di galangan kapal, Batam"
          width={1200}
          height={800}
          className="rounded-2xl w-full h-auto"
        />
        <p className="text-sm text-[#64748b] mt-2 text-center italic">
          Dokumentasi proses penanganan klaim Builders Risk di salah satu galangan kapal, Batam.
        </p>
      </div>

      <p>Berikut alur penanganan klaim yang berjalan pada kasus tersebut:</p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Tahap</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Yang Dilakukan</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Notifikasi awal",
                "Galangan melaporkan insiden ke perusahaan asuransi dalam 24 jam, sebelum lokasi dibersihkan",
              ],
              [
                "Pengamanan lokasi",
                "Area yang terdampak diisolasi, tidak dilakukan perbaikan apa pun sebelum survei",
              ],
              [
                "Survei loss adjuster",
                "Surveyor independen menilai tingkat kerusakan struktur, peralatan, dan estimasi biaya perbaikan",
              ],
              [
                "Verifikasi sum insured & wording",
                "Dicek apakah nilai pertanggungan proyek sesuai progress pekerjaan dan apakah penyebab kebakaran termasuk dalam coverage",
              ],
              [
                "Negosiasi & perhitungan ganti rugi",
                "Penyesuaian nilai klaim berdasarkan hasil survei, dikurangi deductible sesuai polis",
              ],
              [
                "Pencairan klaim",
                "Dana ganti rugi dicairkan untuk menutup biaya perbaikan struktur dan penggantian peralatan kerja",
              ],
            ].map(([tahap, ket], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}
              >
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">
                  {tahap}
                </td>
                <td className="px-4 py-3 text-[#64748b] border-b border-[#e2e8f0]">
                  {ket}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Faktor yang membuat klaim ini dapat diproses relatif lancar bukan kebetulan. Galangan tersebut, atas saran konsultan asuransi, sudah menetapkan sum insured yang disesuaikan secara berkala dengan progress proyek (bukan nilai tetap di awal kontrak), dan polis mereka secara eksplisit mencantumkan seluruh subkontraktor yang bekerja di area dok sebagai pihak yang dijamin. Dua hal inilah yang paling sering menjadi sumber sengketa pada klaim Builders Risk lain yang tidak dipersiapkan dengan baik.
      </p>

      <h2>Apa yang Dijamin dan Tidak Dijamin dalam Polis Builders Risk</h2>
      <p>Secara umum, polis Builders Risk menjamin kerugian fisik selama periode konstruksi akibat:</p>
      <ul>
        <li>Kebakaran, ledakan, dan sambaran petir di lokasi proyek</li>
        <li>Kerusakan akibat kecelakaan kerja atau kesalahan operasional alat berat</li>
        <li>Bencana alam: banjir, angin kencang, gempa (umumnya sebagai extended cover)</li>
        <li>Pencurian material atau peralatan yang sedang terpasang di lokasi proyek</li>
        <li>Kerusakan selama proses testing & commissioning, sesuai wording yang disepakati</li>
      </ul>
      <p>Sementara itu, pengecualian (exclusion) yang paling umum dan sering jadi titik sengketa:</p>
      <ul>
        <li>Kerugian akibat cacat desain (design defect) yang sudah ada sejak awal</li>
        <li>Keausan wajar (wear and tear) dan kerusakan bertahap akibat korosi normal</li>
        <li>Denda keterlambatan proyek atau kerugian konsekuensial (kecuali ada extension khusus)</li>
        <li>Kerugian yang terjadi setelah masa pemeliharaan (maintenance period) berakhir tanpa perpanjangan cover</li>
      </ul>

      <h2>Langkah Memilih Asuransi Builders Risk yang Tepat</h2>

      <h3>1. Petakan Risiko Spesifik Proyek Anda</h3>
      <p>
        Proyek konstruksi gedung, instalasi pabrik, dan reparasi kapal di galangan memiliki profil risiko yang berbeda. Sebelum membeli polis, identifikasi titik-titik rawan: apakah ada pekerjaan hot work (pengelasan, pemotongan), area dengan material mudah terbakar, atau pekerjaan di ketinggian yang berisiko tinggi.
      </p>

      <h3>2. Tentukan Sum Insured Berdasarkan Nilai Kontrak Penuh, Bukan Progress Saat Ini</h3>
      <p>
        Kesalahan paling sering terjadi: menetapkan sum insured berdasarkan nilai pekerjaan yang sudah selesai, padahal seharusnya berdasarkan <strong>nilai kontrak total proyek</strong> ditambah biaya material dan peralatan yang akan terpasang. Sum insured yang terlalu rendah membuat ganti rugi dipotong proporsional (average clause) saat klaim terjadi.
      </p>

      <h3>3. Pastikan Seluruh Pihak yang Bekerja Tercakup sebagai Insured</h3>
      <p>
        Jika proyek melibatkan subkontraktor, pastikan polis secara eksplisit mencantumkan mereka sebagai joint insured atau additional insured. Tanpa klausul ini, perusahaan asuransi berpotensi menolak klaim atau melakukan recovery (subrogasi) terhadap subkontraktor yang justru merupakan mitra kerja Anda sendiri.
      </p>

      <h3>4. Periksa Periode Pertanggungan dan Maintenance Period</h3>
      <p>
        Polis Builders Risk umumnya berlaku sejak mobilisasi material ke lokasi sampai serah terima proyek, ditambah periode pemeliharaan (biasanya 12 bulan). Pastikan periode ini sesuai dengan jadwal proyek riil, termasuk jika ada potensi keterlambatan.
      </p>

      <h3>5. Baca Wording dan Pengecualian dengan Teliti, atau Libatkan Konsultan</h3>
      <p>
        Perbedaan satu klausul pengecualian bisa menentukan apakah klaim senilai ratusan juta rupiah dibayar penuh atau ditolak. Melibatkan konsultan asuransi yang memahami karakteristik proyek konstruksi dan industri galangan kapal — bukan sekadar membandingkan premi termurah — adalah langkah yang paling sering menyelamatkan proyek saat insiden benar-benar terjadi.
      </p>

      <h2>FAQ Seputar Asuransi Builders Risk</h2>

      <h3>Apa itu asuransi Builders Risk?</h3>
      <p>
        Builders Risk (Contractors&apos; All Risks / Erection All Risks) adalah polis yang menjamin kerugian fisik pada proyek yang sedang dibangun — termasuk kapal yang sedang dikonstruksi atau direparasi di galangan — akibat risiko seperti kebakaran, kecelakaan kerja, atau bencana alam selama periode konstruksi.
      </p>

      <h3>Apakah galangan kapal di Batam butuh asuransi Builders Risk?</h3>
      <p>
        Ya. Selama proses pembangunan atau reparasi, kapal belum bisa diasuransikan dengan polis marine hull standar karena belum jadi atau belum berlayar. Builders Risk mengisi celah perlindungan ini dari awal proyek sampai serah terima.
      </p>

      <h3>Berapa lama proses klaim Builders Risk biasanya selesai?</h3>
      <p>
        Bergantung pada kompleksitas kerugian dan kelengkapan dokumen — umumnya beberapa minggu hingga 2-3 bulan untuk kasus dengan nilai kerugian besar yang memerlukan investigasi mendalam dari loss adjuster.
      </p>

      <h3>Apa kesalahan paling umum saat membeli polis Builders Risk?</h3>
      <p>
        Menetapkan sum insured terlalu rendah (under-insurance), tidak memasukkan subkontraktor sebagai pihak yang dijamin, dan tidak memeriksa pengecualian terkait cacat desain yang sering menjadi sumber sengketa klaim.
      </p>

      <h3>Apakah Builders Risk mencakup pekerjaan subkontraktor?</h3>
      <p>
        Tergantung wording polis. Polis perlu secara eksplisit mencantumkan seluruh pihak yang bekerja di proyek sebagai joint insured atau additional insured, agar tidak ada celah tanggung jawab saat klaim terjadi.
      </p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="font-display font-bold text-lg text-[#c9a84c] mb-2">
          Sedang Memulai Proyek Konstruksi atau Pekerjaan di Galangan Kapal?
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Saya membantu menyusun sum insured yang tepat, memastikan seluruh pihak terkait tercakup dalam polis, dan mendampingi Anda jika suatu saat klaim benar-benar terjadi — berdasarkan pengalaman langsung menangani klaim di lapangan, bukan sekadar membandingkan premi.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20Builders%20Risk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors"
          >
            Konsultasi via WhatsApp
          </a>
          <Link
            href="/asuransi-marine/builders-risk"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors"
          >
            Lihat Produk Builders Risk
          </Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">
          Artikel & Halaman Terkait
        </p>
        <div className="flex flex-col gap-2">
          <Link
            href="/asuransi-marine"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Asuransi Marine Batam
          </Link>
          <Link
            href="/asuransi-marine/builders-risk"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Produk Asuransi Builders Risk Batam
          </Link>
          <Link
            href="/blog/cara-klaim-asuransi-marine-cargo"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Cara Klaim Asuransi Marine Cargo
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
