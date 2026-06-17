import type { Metadata } from "next";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = {
  title: "Asuransi Alat Berat Batam – Excavator, Bulldozer, Crane & Alat Konstruksi",
  description:
    "Asuransi alat berat terpercaya di Batam. Perlindungan Equipment All Risk untuk excavator, bulldozer, wheel loader, crane, dan alat galangan kapal. Proses klaim mudah. Hubungi 0813-7333-6728.",
  alternates: {
    canonical:
      "https://asuransibatam.biz.id/asuransi-machinery/asuransi-alat-berat",
    languages: {
      id: "https://asuransibatam.biz.id/asuransi-machinery/asuransi-alat-berat",
      en: "https://asuransibatam.biz.id/en/machinery-insurance/heavy-equipment-insurance",
    },
  },
};

const benefits = [
  {
    icon: "🚜",
    title: "Equipment All Risk",
    desc: "Perlindungan menyeluruh alat berat dari semua risiko fisik yang tidak terduga — mulai dari kecelakaan di lokasi kerja, kerusakan struktural, hingga insiden yang terjadi di luar jam operasi. Cocok untuk alat berat yang digunakan di proyek konstruksi, pertambangan, maupun galangan kapal di Batam.",
  },
  {
    icon: "💥",
    title: "Kecelakaan Operasional",
    desc: "Menanggung kerusakan akibat tergelincir di permukaan lumpur, terguling di lereng galian, benturan antar unit, atau tabrakan dengan struktur bangunan saat manuver. Risiko ini sangat umum terjadi di lingkungan proyek padat seperti kawasan industri Batamindo dan Nongsa.",
  },
  {
    icon: "🌊",
    title: "Bencana Alam",
    desc: "Memberikan perlindungan finansial atas kerusakan yang disebabkan oleh kebakaran, banjir, angin puting beliung, gempa bumi, dan petir. Batam sebagai wilayah kepulauan rentan terhadap cuaca ekstrem dan banjir rob di area pesisir, sehingga perlindungan ini sangat relevan untuk alat berat yang beroperasi di lahan terbuka.",
  },
  {
    icon: "⚙️",
    title: "Kerusakan Mesin (Breakdown)",
    desc: "Menanggung biaya perbaikan akibat kegagalan mekanis atau elektrikal yang tiba-tiba pada mesin utama alat berat — seperti kerusakan pompa hidrolik, sistem transmisi, atau komponen engine yang rusak karena cacat material. Tidak termasuk keausan normal (wear and tear).",
  },
  {
    icon: "🏗️",
    title: "Perlindungan Selama Transit",
    desc: "Alat berat yang dimobilisasi antar lokasi proyek menggunakan flatbed atau trailer tetap terlindungi dari risiko kecelakaan lalu lintas, tergelincir saat bongkar muat, maupun kerusakan akibat kondisi jalan yang buruk. Perlindungan ini mencakup jalur darat di Pulau Batam maupun mobilisasi via kapal tongkang menuju pulau-pulau sekitar.",
  },
  {
    icon: "👷",
    title: "Tanggung Jawab Pihak Ketiga (TPL)",
    desc: "Menanggung tuntutan hukum dan biaya ganti rugi kepada pihak ketiga jika alat berat Anda menyebabkan kerusakan properti orang lain atau cedera pada pihak ketiga saat beroperasi. Perlindungan ini krusial untuk proyek yang berdekatan dengan permukiman atau fasilitas publik.",
  },
];

// ─── Konten tambahan untuk enrichment — dirender via prop `extraSections` ───
// Jika ProductPageLayout belum mendukung prop ini, konten di bawah dapat
// dipindahkan ke dalam slot children atau section terpisah sesuai arsitektur layout Anda.

export const extraContent = {
  intro: `
Di Batam, alat berat bukan sekadar mesin kerja — ia adalah aset strategis yang menentukan 
jalannya proyek konstruksi, pengembangan kawasan industri, hingga aktivitas galangan kapal 
(shipyard). Nilai satu unit excavator kelas menengah berkisar antara Rp 800 juta hingga 
Rp 1,5 miliar, sementara crane besar di fasilitas docking bisa melampaui Rp 5 miliar. 
Tanpa proteksi yang tepat, satu insiden bisa menghentikan seluruh proyek dan menguras 
arus kas perusahaan secara signifikan.

Sebagai kota industri dan pusat logistik maritim, Batam memiliki karakteristik risiko yang 
unik: kondisi tanah pesisir yang labil, curah hujan tinggi sepanjang tahun, serta mobilisasi 
alat berat lintas pulau yang intensif. Asuransi alat berat yang kami tawarkan dirancang 
spesifik untuk mengakomodasi kondisi operasional di lingkungan seperti ini.
  `,

  caseStudy: `
**Studi Kasus Nyata: Galangan Kapal di Batam**

Salah satu klien kami adalah perusahaan galangan kapal (shipyard) yang beroperasi di 
kawasan Tanjung Uncang, Batam. Mereka memiliki armada alat berat yang terdiri dari 
2 unit crawler crane kapasitas 50 ton, 3 unit forklift heavy-duty, dan 1 unit excavator 
amphibious untuk pekerjaan di area pasang surut.

Kebutuhan mereka cukup kompleks: alat-alat tersebut beroperasi di lingkungan yang 
sangat korosif (terpapar air laut dan uap garam), sering dimobilisasi antar dok via 
tongkang, dan harus tetap beroperasi meski cuaca buruk. Setelah asesmen risiko, 
kami menyusun program asuransi Equipment All Risk dengan perluasan klausul 
"Marine Transit" dan tambahan endorsement corrosion untuk komponen tertentu.

Nilai pertanggungan total yang disepakati adalah Rp 12 miliar dengan premi kompetitif 
setelah negosiasi dengan underwriter. Ini adalah contoh nyata bagaimana kebutuhan 
spesifik industri galangan kapal di Batam dapat dipenuhi melalui program asuransi 
yang dikustomisasi — bukan produk generik.
  `,

  claimSimulation: `
**Simulasi Klaim: Excavator Terguling di Proyek Reklamasi**

Skenario: Sebuah excavator Komatsu PC 200 sedang mengerjakan proyek reklamasi 
di area pesisir Nongsa. Akibat tanah yang tidak stabil, unit terguling ke arah lereng 
dan mengalami kerusakan pada boom, arm, dan kabin senilai estimasi Rp 380 juta.

Langkah klaim yang dilakukan:
1. **Laporan awal (H+1)** — Pemilik menghubungi agen (0813-7333-6728) dan melaporkan 
   kejadian. Foto dan video lokasi kejadian dikirim via WhatsApp sebagai bukti awal.
2. **Pengajuan klaim tertulis (H+3)** — Formulir klaim resmi diisi dan dilampiri: 
   foto kerusakan, laporan kronologi kejadian, dan surat keterangan proyek.
3. **Survei adjuster (H+5)** — Loss adjuster dari perusahaan asuransi datang ke lokasi 
   untuk melakukan inspeksi fisik dan mengkonfirmasi nilai kerusakan.
4. **Persetujuan klaim (H+14)** — Setelah verifikasi selesai, nilai ganti rugi 
   Rp 362 juta (setelah deductible) disetujui dan dicairkan ke rekening bengkel 
   rekanan yang ditunjuk.

Total waktu penyelesaian: 18 hari kerja. Proyek dapat dilanjutkan dengan unit pengganti 
sementara yang disediakan atas rekomendasi agen.
  `,

  requirements: `
**Syarat Dokumen Pengajuan Asuransi Alat Berat**

Untuk proses penerbitan polis yang lancar, siapkan dokumen berikut:

• **Data Alat Berat**: Merek, tipe/model, tahun pembuatan, nomor seri/serial number, 
  dan kapasitas operasi.
• **Foto Terkini**: Minimal 4 sudut (depan, belakang, kiri, kanan) dan foto 
  komponen utama (engine, arm/boom untuk excavator, kabin).
• **Bukti Kepemilikan**: Invoice pembelian, BPKB (untuk alat yang terdaftar), 
  atau kontrak sewa guna usaha (leasing).
• **Dokumen Perusahaan**: SIUP/NIB, NPWP perusahaan, dan akta pendirian 
  (untuk klien korporasi).
• **Lokasi Operasi**: Alamat proyek atau site yang menjadi wilayah penggunaan alat.
• **Nilai Pertanggungan**: Estimasi nilai pasar wajar atau nilai buku yang ingin 
  dipertanggungkan (bisa dibantu dengan appraisal jika diperlukan).

Untuk alat berat di atas nilai Rp 2 miliar atau dengan kondisi penggunaan khusus 
(seperti di lingkungan galangan kapal atau pertambangan), biasanya diperlukan 
survei fisik oleh tim underwriter sebelum polis diterbitkan.
  `,

  internalLinkParagraph: (
    <>
      <p>
        Asuransi alat berat merupakan bagian dari ekosistem perlindungan mesin dan
        peralatan yang lebih luas. Jika bisnis Anda juga mengoperasikan mesin-mesin
        produksi, generator, atau peralatan pabrik, kami mengajak Anda untuk
        mempelajari lebih lanjut tentang{" "}
        <Link href="/asuransi-machinery">
          program Asuransi Machinery komprehensif kami
        </Link>{" "}
        yang mencakup berbagai jenis mesin industri dalam satu payung perlindungan
        yang terintegrasi.
      </p>
      <p>
        Khusus untuk kebutuhan perlindungan alat angkat dan alat angkut di kawasan
        industri, pelabuhan, dan galangan kapal Batam, kami juga menyediakan{" "}
        <Link href="/asuransi-machinery/asuransi-crane">
          Asuransi Crane dengan perlindungan spesifik untuk operasi pengangkatan
          beban berat
        </Link>{" "}
        yang sesuai dengan standar keselamatan kerja di lingkungan shipyard.
      </p>
    </>
  ),
};

const faqs = [
  {
    q: "Alat berat apa saja yang bisa diasuransikan?",
    a: "Hampir semua jenis alat berat dapat diasuransikan, termasuk excavator (crawler & wheeled), bulldozer, wheel loader, motor grader, vibro roller, backhoe loader, skid steer loader, crane (crawler, mobile, tower), forklift, dump truck off-road, dan alat khusus galangan kapal seperti gantry crane dan floating crane. Jika alat Anda tidak tercantum di sini, hubungi kami untuk konsultasi — kemungkinan besar bisa kami akomodasi.",
  },
  {
    q: "Apakah alat berat sewaan bisa diasuransikan?",
    a: "Ya. Baik pemilik (lessor) maupun penyewa (lessee) dapat mengasuransikan alat berat sesuai kepentingan masing-masing. Perlu koordinasi agar tidak terjadi double insurance. Dalam banyak kasus kontrak sewa, perusahaan penyewa diwajibkan secara kontraktual untuk memasang asuransi atas alat yang disewanya. Kami dapat membantu menyusun struktur polis yang sesuai dengan klausul kontrak sewa Anda.",
  },
  {
    q: "Bagaimana cara menentukan nilai pertanggungan alat berat?",
    a: "Nilai pertanggungan dapat didasarkan pada nilai pasar wajar (market value) atau nilai buku (book value), tergantung kesepakatan dengan penanggung. Untuk alat berat berusia di atas 5 tahun atau dengan nilai di atas Rp 2 miliar, biasanya diperlukan appraisal atau survei fisik oleh loss adjuster. Kami menyarankan untuk tidak under-insure (menanggung di bawah nilai wajar) karena akan berdampak pada proporsionalitas pembayaran klaim.",
  },
  {
    q: "Berapa lama proses penerbitan polis asuransi alat berat?",
    a: "Untuk alat berat standar dengan dokumen lengkap, cover note (bukti sementara perlindungan) dapat diterbitkan dalam 1–2 hari kerja. Polis definitif umumnya terbit dalam 7–10 hari kerja. Untuk program khusus atau nilai pertanggungan besar yang memerlukan survei, prosesnya bisa memakan 7–14 hari kerja setelah survei selesai.",
  },
  {
    q: "Apakah perlindungan mencakup alat berat yang beroperasi di atas atau sekitar air?",
    a: "Ya, dengan klausul perluasan yang tepat. Untuk alat berat yang beroperasi di area galangan kapal, dermaga, atau lahan reklamasi di Batam, kami dapat menyertakan perluasan risiko transit via tongkang, risiko terjatuh ke air, dan endorsement khusus untuk lingkungan korosif. Ini adalah kebutuhan yang cukup spesifik dan kami berpengalaman menanganinya untuk klien-klien di kawasan shipyard Tanjung Uncang dan Sekupang.",
  },
  {
    q: "Apa saja yang tidak ditanggung (eksklusi) dalam asuransi alat berat?",
    a: "Eksklusi umum meliputi: keausan normal (wear and tear), kerusakan akibat perawatan yang lalai atau tidak mengikuti manual operasi, kerusakan akibat operator tidak memiliki lisensi yang diperlukan, kerugian akibat perang atau terorisme (kecuali ada endorsement khusus), serta kerusakan yang sudah ada sebelum polis diterbitkan (pre-existing damage). Detail eksklusi lengkap akan tercantum dalam polis.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Alat Berat Batam",
  description:
    "Perlindungan Equipment All Risk untuk excavator, bulldozer, crane, wheel loader, dan alat berat di galangan kapal serta proyek konstruksi di Batam.",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressRegion: "Kepulauan Riau",
    addressCountry: "ID",
  },
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    url: "https://asuransibatam.biz.id",
  },
  serviceType: "Equipment All Risk Insurance",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    areaServed: "Batam, Kepulauan Riau",
  },
};

export default function AsuransiAlatBeratPage() {
  return (
    <ProductPageLayout
      title="Asuransi Alat Berat Batam"
      subtitle="Equipment All Risk – Perlindungan Total untuk Aset Berat Anda"
      description={
        `Alat berat adalah investasi strategis bernilai miliaran rupiah yang menopang ` +
        `proyek konstruksi, pertambangan, dan operasi galangan kapal di Batam. ` +
        `Satu insiden tanpa proteksi yang tepat dapat menghentikan proyek, ` +
        `membebani arus kas, dan berujung pada tuntutan hukum pihak ketiga. ` +
        `Program Asuransi Alat Berat kami memberikan perlindungan Equipment All Risk ` +
        `yang komprehensif — dirancang khusus untuk kondisi operasional di Batam, ` +
        `termasuk lingkungan pesisir, kawasan industri, dan fasilitas shipyard.`
      }
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        {
          label: "Asuransi Alat Berat",
          href: "/asuransi-machinery/asuransi-alat-berat",
        },
      ]}
      schema={schema}
    />
  );
}
