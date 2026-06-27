import type { Metadata } from "next";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = {
  title: "Asuransi Alat Berat Batam – Excavator, Bulldozer, Crane & Alat Konstruksi",
  description:
    "Asuransi alat berat terpercaya di Batam. Perlindungan Equipment All Risk untuk excavator, bulldozer, wheel loader, crane, dan alat galangan kapal. Proses klaim mudah. Hubungi 0813-7333-6728.",
  alternates: {
    canonical:
      "https://asuransibatam.com/asuransi-machinery/asuransi-alat-berat",
    languages: {
      id: "https://asuransibatam.com/asuransi-machinery/asuransi-alat-berat",
      en: "https://asuransibatam.com/en/machinery-insurance/heavy-equipment-insurance",
    },
  },
};

const benefits = [
  {
    icon: "🚜",
    title: "Equipment All Risk",
    desc: "Perlindungan menyeluruh alat berat dari semua risiko fisik yang tidak terduga — mulai dari kecelakaan di lokasi kerja, kerusakan struktural, hingga insiden di luar jam operasi. Cocok untuk alat berat di proyek konstruksi, pertambangan, maupun galangan kapal di Batam.",
  },
  {
    icon: "💥",
    title: "Kecelakaan Operasional",
    desc: "Menanggung kerusakan akibat tergelincir di permukaan lumpur, terguling di lereng galian, benturan antar unit, atau tabrakan dengan struktur bangunan saat manuver. Risiko ini sangat umum di lingkungan proyek padat seperti kawasan industri Batamindo dan Nongsa.",
  },
  {
    icon: "🌊",
    title: "Bencana Alam",
    desc: "Perlindungan finansial atas kerusakan akibat kebakaran, banjir, angin puting beliung, gempa bumi, dan petir. Batam sebagai wilayah kepulauan rentan cuaca ekstrem dan banjir rob di area pesisir, menjadikan perlindungan ini sangat relevan untuk alat berat di lahan terbuka.",
  },
  {
    icon: "⚙️",
    title: "Kerusakan Mesin (Breakdown)",
    desc: "Menanggung biaya perbaikan akibat kegagalan mekanis atau elektrikal yang tiba-tiba — seperti kerusakan pompa hidrolik, sistem transmisi, atau komponen engine akibat cacat material. Tidak termasuk keausan normal (wear and tear).",
  },
  {
    icon: "🏗️",
    title: "Perlindungan Selama Transit",
    desc: "Alat berat yang dimobilisasi antar lokasi proyek via flatbed atau trailer tetap terlindungi dari kecelakaan lalu lintas dan kerusakan saat bongkar muat. Perlindungan mencakup jalur darat di Pulau Batam maupun mobilisasi via kapal tongkang ke pulau-pulau sekitar.",
  },
  {
    icon: "👷",
    title: "Tanggung Jawab Pihak Ketiga (TPL)",
    desc: "Menanggung tuntutan hukum dan biaya ganti rugi kepada pihak ketiga jika alat berat Anda menyebabkan kerusakan properti atau cedera saat beroperasi. Perlindungan ini krusial untuk proyek yang berdekatan dengan permukiman atau fasilitas publik.",
  },
];

const faqs = [
  {
    q: "Alat berat apa saja yang bisa diasuransikan?",
    a: "Hampir semua jenis alat berat dapat diasuransikan, termasuk excavator (crawler & wheeled), bulldozer, wheel loader, motor grader, vibro roller, backhoe loader, skid steer loader, crane (crawler, mobile, tower), forklift, dump truck off-road, dan alat khusus galangan kapal seperti gantry crane dan floating crane. Jika alat Anda tidak tercantum di sini, hubungi kami untuk konsultasi — kemungkinan besar bisa kami akomodasi.",
  },
  {
    q: "Apakah alat berat sewaan bisa diasuransikan?",
    a: "Ya. Baik pemilik (lessor) maupun penyewa (lessee) dapat mengasuransikan alat berat sesuai kepentingan masing-masing. Dalam banyak kontrak sewa, penyewa diwajibkan secara kontraktual untuk memasang asuransi atas alat yang disewanya. Kami dapat membantu menyusun struktur polis yang sesuai dengan klausul kontrak sewa Anda agar tidak terjadi double insurance.",
  },
  {
    q: "Bagaimana cara menentukan nilai pertanggungan alat berat?",
    a: "Nilai pertanggungan didasarkan pada nilai pasar wajar (market value) atau nilai buku (book value), tergantung kesepakatan dengan penanggung. Untuk alat berat berusia di atas 5 tahun atau bernilai di atas Rp 2 miliar, biasanya diperlukan appraisal atau survei fisik. Kami menyarankan untuk tidak under-insure karena akan berdampak pada proporsionalitas pembayaran klaim.",
  },
  {
    q: "Berapa lama proses penerbitan polis asuransi alat berat?",
    a: "Untuk alat berat standar dengan dokumen lengkap, cover note (bukti sementara perlindungan) dapat diterbitkan dalam 1–2 hari kerja. Polis definitif umumnya terbit dalam 7–10 hari kerja. Untuk program khusus atau nilai pertanggungan besar yang memerlukan survei, prosesnya bisa memakan 7–14 hari kerja setelah survei selesai.",
  },
  {
    q: "Apakah perlindungan mencakup alat berat yang beroperasi di area galangan kapal atau sekitar air?",
    a: "Ya, dengan klausul perluasan yang tepat. Untuk alat berat di galangan kapal, dermaga, atau lahan reklamasi di Batam, kami dapat menyertakan perluasan risiko transit via tongkang, risiko terjatuh ke air, dan endorsement khusus lingkungan korosif. Kami berpengalaman menangani kebutuhan ini untuk klien di kawasan shipyard Tanjung Uncang dan Sekupang.",
  },
  {
    q: "Apa saja yang tidak ditanggung (eksklusi) dalam asuransi alat berat?",
    a: "Eksklusi umum meliputi: keausan normal (wear and tear), kerusakan akibat perawatan yang lalai, kerusakan akibat operator tidak berlisensi, kerugian akibat perang atau terorisme (kecuali ada endorsement khusus), serta kerusakan yang sudah ada sebelum polis diterbitkan (pre-existing damage). Detail eksklusi lengkap tercantum dalam dokumen polis.",
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
    url: "https://asuransibatam.com",
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
        "Alat berat adalah investasi strategis bernilai miliaran rupiah yang menopang " +
        "proyek konstruksi, pertambangan, dan operasi galangan kapal di Batam. " +
        "Satu insiden tanpa proteksi yang tepat dapat menghentikan proyek, " +
        "membebani arus kas, dan berujung pada tuntutan hukum pihak ketiga. " +
        "Program Asuransi Alat Berat kami memberikan perlindungan Equipment All Risk " +
        "yang komprehensif — dirancang khusus untuk kondisi operasional di Batam, " +
        "termasuk lingkungan pesisir, kawasan industri, dan fasilitas shipyard."
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
    >
      {/* ── KONTEKS LOKAL BATAM ── */}
      <section className="prose prose-slate max-w-none mb-10">
        <h2>Mengapa Asuransi Alat Berat Sangat Penting di Batam?</h2>
        <p>
          Di Batam, alat berat bukan sekadar mesin kerja — ia adalah aset strategis
          yang menentukan jalannya proyek konstruksi, pengembangan kawasan industri,
          hingga aktivitas galangan kapal (shipyard). Nilai satu unit excavator kelas
          menengah berkisar antara Rp 800 juta hingga Rp 1,5 miliar, sementara crane
          besar di fasilitas docking bisa melampaui Rp 5 miliar. Tanpa proteksi yang
          tepat, satu insiden dapat menghentikan seluruh proyek dan menguras arus kas
          perusahaan secara signifikan.
        </p>
        <p>
          Sebagai kota industri dan pusat logistik maritim, Batam memiliki karakteristik
          risiko yang unik: kondisi tanah pesisir yang labil, curah hujan tinggi
          sepanjang tahun, serta mobilisasi alat berat lintas pulau yang intensif.
          Program asuransi alat berat kami dirancang spesifik untuk mengakomodasi
          kondisi operasional di lingkungan seperti ini.
        </p>
      </section>

      {/* ── STUDI KASUS NYATA ── */}
      <section className="prose prose-slate max-w-none mb-10">
        <h2>Studi Kasus Nyata: Galangan Kapal di Batam</h2>
        <p>
          Salah satu permintaan nyata yang kami tangani adalah dari perusahaan
          galangan kapal (shipyard) yang beroperasi di kawasan Tanjung Uncang, Batam.
          Mereka membutuhkan perlindungan untuk armada alat berat yang terdiri dari
          2 unit crawler crane kapasitas 50 ton, 3 unit forklift heavy-duty, dan
          1 unit excavator amphibious untuk pekerjaan di area pasang surut.
        </p>
        <p>
          Kebutuhan mereka cukup kompleks: alat-alat tersebut beroperasi di lingkungan
          yang sangat korosif (terpapar air laut dan uap garam), sering dimobilisasi
          antar dok via tongkang, dan harus tetap beroperasi meski cuaca buruk.
          Setelah asesmen risiko, kami menyusun program asuransi Equipment All Risk
          dengan perluasan klausul <strong>Marine Transit</strong> dan tambahan{" "}
          <strong>endorsement corrosion</strong> untuk komponen tertentu.
        </p>
        <p>
          Nilai pertanggungan total yang disepakati adalah Rp 12 miliar dengan premi
          kompetitif setelah negosiasi dengan underwriter. Ini adalah contoh nyata
          bagaimana kebutuhan spesifik industri galangan kapal di Batam dapat dipenuhi
          melalui program asuransi yang dikustomisasi — bukan produk generik.
        </p>
      </section>

      {/* ── SIMULASI KLAIM ── */}
      <section className="prose prose-slate max-w-none mb-10">
        <h2>Simulasi Klaim: Excavator Terguling di Proyek Reklamasi</h2>
        <p>
          <strong>Skenario:</strong> Sebuah excavator Komatsu PC 200 sedang mengerjakan
          proyek reklamasi di area pesisir Nongsa. Akibat tanah yang tidak stabil,
          unit terguling ke arah lereng dan mengalami kerusakan pada boom, arm, dan
          kabin senilai estimasi Rp 380 juta.
        </p>
        <ol>
          <li>
            <strong>Laporan awal (H+1)</strong> — Pemilik menghubungi agen di{" "}
            <strong>0813-7333-6728</strong> dan melaporkan kejadian. Foto dan video
            lokasi dikirim via WhatsApp sebagai bukti awal.
          </li>
          <li>
            <strong>Pengajuan klaim tertulis (H+3)</strong> — Formulir klaim resmi
            diisi dan dilampiri: foto kerusakan, laporan kronologi kejadian, dan surat
            keterangan proyek.
          </li>
          <li>
            <strong>Survei loss adjuster (H+5)</strong> — Adjuster dari perusahaan
            asuransi datang ke lokasi untuk inspeksi fisik dan konfirmasi nilai
            kerusakan.
          </li>
          <li>
            <strong>Persetujuan &amp; pencairan klaim (H+14)</strong> — Nilai ganti
            rugi Rp 362 juta (setelah deductible) disetujui dan dicairkan ke rekening
            bengkel rekanan yang ditunjuk.
          </li>
        </ol>
        <p>
          Total waktu penyelesaian: <strong>18 hari kerja</strong>. Proyek dapat
          dilanjutkan dengan unit pengganti sementara atas rekomendasi agen.
        </p>
      </section>

      {/* ── SYARAT DOKUMEN ── */}
      <section className="prose prose-slate max-w-none mb-10">
        <h2>Syarat Dokumen Pengajuan Asuransi Alat Berat</h2>
        <p>Untuk proses penerbitan polis yang lancar, siapkan dokumen berikut:</p>
        <ul>
          <li>
            <strong>Data Alat Berat:</strong> Merek, tipe/model, tahun pembuatan,
            nomor seri/serial number, dan kapasitas operasi.
          </li>
          <li>
            <strong>Foto Terkini:</strong> Minimal 4 sudut (depan, belakang, kiri,
            kanan) dan foto komponen utama (engine, arm/boom, kabin).
          </li>
          <li>
            <strong>Bukti Kepemilikan:</strong> Invoice pembelian, BPKB (untuk alat
            yang terdaftar), atau kontrak sewa guna usaha (leasing).
          </li>
          <li>
            <strong>Dokumen Perusahaan:</strong> SIUP/NIB, NPWP perusahaan, dan akta
            pendirian (untuk klien korporasi).
          </li>
          <li>
            <strong>Lokasi Operasi:</strong> Alamat proyek atau site yang menjadi
            wilayah penggunaan alat.
          </li>
          <li>
            <strong>Nilai Pertanggungan:</strong> Estimasi nilai pasar wajar atau nilai
            buku (bisa dibantu dengan appraisal jika diperlukan).
          </li>
        </ul>
        <p>
          Untuk alat berat di atas nilai Rp 2 miliar atau dengan kondisi penggunaan
          khusus (seperti di lingkungan galangan kapal atau pertambangan), biasanya
          diperlukan survei fisik oleh tim underwriter sebelum polis diterbitkan.
        </p>
      </section>

      {/* ── INTERNAL LINKING ── */}
      <section className="prose prose-slate max-w-none mb-10">
        <h2>Perlindungan Mesin &amp; Alat Industri Lainnya di Batam</h2>
        <p>
          Asuransi alat berat merupakan bagian dari ekosistem perlindungan mesin dan
          peralatan yang lebih luas. Jika bisnis Anda juga mengoperasikan mesin-mesin
          produksi, generator, atau peralatan pabrik, pelajari lebih lanjut tentang{" "}
          <Link href="/asuransi-machinery">
            program Asuransi Machinery komprehensif kami
          </Link>{" "}
          yang mencakup berbagai jenis mesin industri dalam satu payung perlindungan
          yang terintegrasi.
        </p>
        <p>
          Khusus untuk kebutuhan perlindungan alat angkat di kawasan industri,
          pelabuhan, dan galangan kapal Batam, kami juga menyediakan{" "}
          <Link href="/asuransi-machinery/asuransi-crane">
            Asuransi Crane dengan perlindungan spesifik untuk operasi pengangkatan
            beban berat
          </Link>{" "}
          yang sesuai dengan standar keselamatan kerja di lingkungan shipyard.
        </p>
      </section>
    </ProductPageLayout>
  );
}
