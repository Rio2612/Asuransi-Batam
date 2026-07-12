// app/blog/cara-klaim-asuransi-kebakaran-rumah/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  ShieldCheck,
  Flame,
  Zap,
  AlertTriangle,
  PlaneTakeoff,
  Wind,
  Camera,
  FileWarning,
  PhoneCall,
  ClipboardList,
  Search,
  Scale,
  Clock,
  Trash2,
  TrendingDown,
  MessageSquareWarning,
  Timer,
  FileSearch,
  BadgeCheck,
  Home,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Cara Klaim Asuransi Kebakaran Rumah – Dokumen, Prosedur & Kesalahan Fatal yang Harus Dihindari",
  description: "Mengklaim asuransi kebakaran rumah tidak semudah kelihatannya. Pelajari dokumen yang diperlukan, prosedur yang benar, dan kesalahan umum yang menyebabkan klaim ditolak — panduan lengkap untuk pemilik rumah di Batam.",
  canonical: "https://asuransibatam.com/blog/cara-klaim-asuransi-kebakaran-rumah",
  languages: {
      id: "https://asuransibatam.com/blog/cara-klaim-asuransi-kebakaran-rumah",
      en: "https://asuransibatam.com/en/blog/how-to-claim-home-fire-insurance",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Klaim Asuransi Kebakaran Rumah: Dokumen, Prosedur & Kesalahan Fatal yang Harus Dihindari",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

// FAQPage JSON-LD — sumber tunggal untuk schema & accordion FAQ visual di bawah.
const faqItems = [
  {
    question: "Apakah kerusakan akibat asap saja (tanpa api langsung) ditanggung polis?",
    answer:
      "Ya, smoke damage adalah bagian dari format dasar FLEXAS yang menjadi standar polis properti di Indonesia. Selama asap berasal dari peristiwa kebakaran yang ditanggung, kerusakan pada dinding, furnitur, atau barang akibat asap tetap dapat diklaim.",
  },
  {
    question: "Apakah saya wajib menggunakan kontraktor rekanan asuransi untuk perbaikan?",
    answer:
      "Umumnya tidak wajib. Anda bebas memilih kontraktor sendiri, selama biaya perbaikan yang diajukan sesuai dengan estimasi yang sudah disepakati bersama Loss Adjuster. Beberapa penanggung menawarkan rekanan kontraktor sebagai opsi, bukan kewajiban.",
  },
  {
    question: "Bagaimana jika klaim saya ditolak padahal merasa sudah mengikuti prosedur?",
    answer:
      "Anda berhak mengajukan keberatan tertulis kepada penanggung dengan menyertakan bukti pendukung tambahan. Jika tidak ditemukan kesepakatan, Anda dapat menempuh jalur mediasi melalui OJK atau Badan Mediasi Asuransi Indonesia (BMAI) sebelum melanjutkan ke jalur hukum.",
  },
  {
    question: "Apakah barang elektronik dan furnitur ikut ditanggung, atau hanya bangunan?",
    answer:
      "Tergantung jenis pertanggungan pada polis Anda. Polis dasar biasanya hanya menanggung struktur bangunan, sementara isi rumah (household contents) seperti elektronik dan furnitur memerlukan perluasan pertanggungan tersendiri. Periksa ringkasan polis untuk memastikan keduanya tercakup.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

// --- Helper presentational components (lokal, konsisten dengan artikel sebelumnya) ---

function SectionHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 not-prose font-display font-bold text-[#0a1628] text-2xl md:text-[1.65rem] mt-12 mb-4">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
        <Icon className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
      </span>
      {children}
    </h2>
  );
}

function SubHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2.5 not-prose font-display font-bold text-[#0a1628] text-lg mt-8 mb-3">
      <Icon className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
      {children}
    </h3>
  );
}

function IconList({ items }: { items: { icon: React.ElementType; title?: string; text: React.ReactNode }[] }) {
  return (
    <ul className="not-prose grid sm:grid-cols-2 gap-3 my-5 list-none p-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#e2e8f0] shrink-0 mt-0.5">
              <Icon className="w-[14px] h-[14px] text-[#1a4fa0]" strokeWidth={2} />
            </span>
            <span className="text-sm text-[#374151] leading-relaxed">
              {item.title && <span className="font-semibold text-[#0a1628] block">{item.title}</span>}
              {item.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function Steps({ items }: { items: { title: string; desc?: React.ReactNode }[] }) {
  return (
    <ol className="not-prose relative my-6 list-none p-0 space-y-5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0a1628] text-[#c9a84c] font-display font-bold text-sm shrink-0">
            {i + 1}
          </span>
          <div className="pt-0.5">
            <p className="font-semibold text-[#0a1628] m-0 text-[15px]">{item.title}</p>
            {item.desc && <p className="text-sm text-[#475569] mt-1 mb-0">{item.desc}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ArticleCaraKlaimAsuransiKebakaranRumahPage() {
  return (
    <ArticleLayout
      title="Cara Klaim Asuransi Kebakaran Rumah: Dokumen, Prosedur & Kesalahan Fatal yang Harus Dihindari"
      description="Kebakaran sudah terjadi. Rumah rusak. Polis masih aktif. Tapi klaim ditolak — ini terjadi lebih sering dari yang Anda kira. Berikut panduan lengkap agar klaim Anda disetujui."
      date="6 Mei 2026"
      category="Properti"
      readTime="10 menit baca"
      breadcrumbs={[{ label: "Cara Klaim Asuransi Kebakaran Rumah", href: "/blog/cara-klaim-asuransi-kebakaran-rumah" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Tidak ada yang ingin mengalami kebakaran rumah. Namun justru di saat itulah kita
        benar-benar mengetahui apakah{" "}
        <Link href="/asuransi-properti" className="font-medium">
          asuransi properti
        </Link>{" "}
        yang selama ini preminya kita bayar sungguh-sungguh bekerja. Banyak pemilik rumah di
        Batam akhirnya kecewa bukan karena penanggung berlaku tidak jujur, melainkan karena
        prosedur klaim tidak diikuti dengan benar sejak menit pertama setelah insiden. Panduan
        ini membahas secara terperinci apa yang harus — dan tidak boleh — Anda lakukan agar
        klaim asuransi kebakaran rumah diproses dan dibayarkan tanpa hambatan yang tidak perlu.
      </p>
      <p>
        Meski pembahasan ini berfokus pada rumah tinggal, prinsip prosedur klaim yang sama pada
        dasarnya juga berlaku untuk properti komersial lain seperti{" "}
        <Link href="/asuransi-properti/asuransi-ruko-batam" className="font-medium">
          ruko
        </Link>{" "}
        maupun{" "}
        <Link href="/asuransi-properti/asuransi-apartemen-batam" className="font-medium">
          apartemen
        </Link>{" "}
        — hanya saja dokumen kepemilikan dan pihak yang terlibat dalam survei bisa sedikit berbeda.
      </p>

      <SectionHeading icon={ShieldCheck}>
        Pertama, Pahami Dulu: Apa yang Sebenarnya Ditanggung Asuransi Kebakaran Rumah?
      </SectionHeading>
      <p>
        Sebelum membahas prosedur, penting untuk dipahami bahwa tidak semua kerusakan akibat
        kebakaran otomatis ditanggung oleh asuransi. Polis properti standar di Indonesia
        menggunakan format <strong>FLEXAS</strong> sebagai dasar:
      </p>
      <IconList
        items={[
          { icon: Flame, title: "Fire", text: "Kebakaran" },
          { icon: Zap, title: "Lightning", text: "Sambaran petir" },
          { icon: AlertTriangle, title: "Explosion", text: "Ledakan" },
          { icon: PlaneTakeoff, title: "Aircraft impact", text: "Kejatuhan pesawat terbang" },
          { icon: Wind, title: "Smoke damage", text: "Kerusakan akibat asap" },
        ]}
      />
      <p>
        Perluasan seperti banjir, badai, kerusuhan, dan gempa bumi hanya ditanggung jika secara
        eksplisit tercantum dalam polis Anda. Sebelum mengajukan klaim, buka polis dan periksa
        ringkasan pertanggungan — pastikan penyebab kebakaran atau kerusakan yang Anda alami
        memang termasuk dalam yang telah disepakati.
      </p>

      <SectionHeading icon={Timer}>Yang Harus Anda Lakukan dalam 24 Jam Pertama</SectionHeading>
      <p>
        Jam-jam pertama setelah kebakaran adalah yang paling kritis untuk keberhasilan klaim.
        Kepanikan adalah hal yang sangat wajar, namun tindakan tertentu yang diambil — atau
        tidak diambil — pada fase ini dapat menentukan apakah klaim Anda berhasil atau gagal.
      </p>

      <SubHeading icon={Camera}>1. Utamakan Keselamatan, Baru Dokumentasi</SubHeading>
      <p>
        Pastikan semua penghuni aman dan api sudah benar-benar padam sebelum mendekati lokasi
        kejadian. Setelah kondisi aman, mulailah mendokumentasikan kerusakan secara menyeluruh:
      </p>
      <IconList
        items={[
          { icon: Camera, text: "Foto dan video bangunan dari luar — tampak depan, samping, dan belakang" },
          { icon: Home, text: "Foto interior setiap ruangan yang terdampak" },
          { icon: FileWarning, text: "Foto barang-barang yang rusak atau hancur — furnitur, elektronik, dokumen" },
          { icon: Flame, text: "Foto titik asal kebakaran jika masih dapat diidentifikasi secara visual" },
          { icon: ClipboardList, text: "Dokumentasikan kondisi sebelum ada yang disentuh atau dibersihkan" },
        ]}
      />
      <p>
        Dokumentasi ini merupakan bukti utama yang akan dievaluasi oleh surveyor asuransi.
        Semakin lengkap dan terperinci, semakin lancar proses verifikasi berjalan.
      </p>

      <SubHeading icon={FileWarning}>2. Buat Laporan ke Pemadam Kebakaran atau Kepolisian</SubHeading>
      <p>
        Surat keterangan dari Dinas Pemadam Kebakaran (Damkar) adalah dokumen wajib dalam
        hampir semua klaim asuransi kebakaran. Surat ini memuat tanggal kejadian, perkiraan
        penyebab, dan penilaian kerusakan awal dari pihak pemadam. Di Batam, laporan dapat
        dibuat ke Dinas Pemadam Kebakaran Kota Batam yang memiliki kantor di berbagai kecamatan.
      </p>
      <p>
        Untuk kebakaran yang menimbulkan kerugian besar, kerusakan pada properti tetangga, atau
        jika ada dugaan unsur kesengajaan, laporan polisi juga wajib dibuat. Minta salinan Surat
        Tanda Penerimaan Laporan (STPL) sebagai bukti resmi.
      </p>

      <SubHeading icon={PhoneCall}>3. Hubungi Agen atau Perusahaan Asuransi Anda</SubHeading>
      <p>
        Jangan menunggu situasi tenang atau sampai Anda merasa siap. Pelaporan wajib dilakukan{" "}
        <strong>dalam 3 × 24 jam</strong> sejak insiden diketahui — ini adalah tenggat waktu yang
        ditetapkan oleh hampir semua polis asuransi properti. Melewati batas waktu ini dapat
        dijadikan alasan teknis penolakan, bahkan saat kerusakannya jelas-jelas ditanggung oleh
        polis.
      </p>
      <p>
        Sampaikan kejadian dengan jujur dan apa adanya. Jangan menambahkan detail yang tidak
        terjadi dan jangan menghilangkan fakta yang relevan — konsistensi antara laporan awal
        Anda dan temuan surveyor dicermati ketat sepanjang proses verifikasi berlangsung.
      </p>

      <SectionHeading icon={ClipboardList}>Dokumen yang Diperlukan untuk Pengajuan Klaim</SectionHeading>
      <p>
        Proses klaim resmi tidak dapat dimulai sebelum seluruh dokumen berikut diserahkan kepada
        penanggung. Siapkan dari awal untuk menghindari bolak-balik yang memperlambat pencairan:
      </p>

      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Dokumen</th>
              <th className="p-4 text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Formulir klaim asuransi", "Diisi dan ditandatangani oleh tertanggung; tersedia dari agen atau penanggung"],
              ["Polis asuransi asli atau salinan", "Halaman ringkasan pertanggungan dan klausul perluasan yang relevan"],
              ["Surat keterangan pemadam kebakaran", "Memuat tanggal, lokasi, perkiraan penyebab, dan skala kebakaran"],
              ["Laporan polisi (jika diperlukan)", "Untuk kerugian besar atau dugaan unsur kesengajaan"],
              ["KTP tertanggung", "Identitas pemilik polis yang mengajukan klaim"],
              ["Foto lengkap kerusakan", "Dokumentasi visual bangunan dan isi rumah pasca kebakaran"],
              ["Daftar inventaris barang yang rusak/hancur", "Dengan perkiraan nilai masing-masing barang; semakin terperinci semakin baik"],
              ["Bukti kepemilikan properti", "Sertifikat tanah (SHM/SHGB) atau perjanjian sewa jika bukan pemilik"],
              ["Bukti pembelian barang bernilai tinggi", "Nota atau faktur untuk elektronik, furnitur, atau perabot mahal"],
            ].map(([a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-[#475569]">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading icon={Search}>Apa yang Terjadi Setelah Dokumen Diserahkan</SectionHeading>

      <SubHeading icon={Search}>Survei oleh Loss Adjuster</SubHeading>
      <p>
        Untuk klaim kebakaran di atas nilai tertentu (umumnya di atas Rp 50 juta), perusahaan
        asuransi akan menunjuk <em>Loss Adjuster</em> independen — bukan karyawan penanggung —
        untuk menilai kerugian secara objektif. Loss Adjuster akan mengunjungi lokasi, memeriksa
        kondisi bangunan, mencocokkan dokumentasi Anda dengan kondisi nyata di lapangan, dan
        menghasilkan laporan penilaian kerugian yang menjadi dasar pembayaran klaim.
      </p>
      <p>
        Selama proses ini, <strong>jangan memulai perbaikan apapun</strong> sebelum survei
        selesai dan persetujuan tertulis diberikan oleh penanggung. Perbaikan yang dilakukan
        sebelum survei dianggap telah mengubah bukti dan dapat mengakibatkan klaim ditolak atau
        jumlah pembayaran dikurangi.
      </p>

      <SubHeading icon={Scale}>Negosiasi Nilai Klaim</SubHeading>
      <p>
        Jika terdapat selisih antara jumlah kerugian yang Anda ajukan dan jumlah yang dinilai
        oleh Loss Adjuster, inilah tahap negosiasinya. Anda berhak mengajukan keberatan dengan
        bukti pendukung tambahan — nota pembelian, foto kondisi sebelum kebakaran, atau pendapat
        kontraktor Anda mengenai estimasi biaya perbaikan. Negosiasi ini adalah bagian normal
        dari proses klaim dan tidak berarti ada masalah dengan klaim Anda.
      </p>

      <SectionHeading icon={AlertTriangle}>Kesalahan Fatal yang Sering Mengakibatkan Klaim Ditolak</SectionHeading>
      <IconList
        items={[
          {
            icon: Clock,
            title: "Terlambat melapor",
            text: "Banyak pemilik rumah menunggu situasi mereda sebelum menghubungi penanggung. Jika tiga hari telah berlalu, risiko penolakan teknis sangat tinggi.",
          },
          {
            icon: Trash2,
            title: "Membersihkan lokasi sebelum survei",
            text: "Dorongan untuk segera membersihkan puing-puing sangat wajar, namun ini salah satu penyebab terbesar komplikasi klaim. Tunggu persetujuan tertulis sebelum memulai pembersihan.",
          },
          {
            icon: TrendingDown,
            title: "Underinsurance — uang pertanggungan terlalu rendah",
            text: "Jika rumah senilai Rp 800 juta diasuransikan hanya Rp 400 juta, hanya 50% dari kerugian sesungguhnya yang disetujui, sesuai rasio underinsurance.",
          },
          {
            icon: Flame,
            title: "Penyebab kebakaran tidak ditanggung",
            text: "Kebakaran akibat korsleting umumnya ditanggung. Namun penyebab yang terbukti dikecualikan polis — misalnya penyimpanan bahan mudah terbakar berlebih — dapat mengakibatkan penolakan.",
          },
          {
            icon: MessageSquareWarning,
            title: "Informasi yang tidak konsisten",
            text: "Jika Anda menyampaikan ke pemadam bahwa api bermula dari dapur, namun ke surveyor menyebut garasi, inkonsistensi ini ditandai sebagai catatan merah dalam verifikasi.",
          },
        ]}
      />

      <SectionHeading icon={Timer}>Berapa Lama Proses Klaim Asuransi Kebakaran Rumah?</SectionHeading>
      <p>Durasinya bervariasi tergantung kompleksitas kerusakan dan kelengkapan dokumen. Sebagai panduan umum:</p>
      <Steps
        items={[
          { title: "Klaim kecil (di bawah Rp 50 juta)", desc: "7–14 hari kerja setelah dokumen lengkap diterima." },
          { title: "Klaim menengah (Rp 50 juta – Rp 500 juta)", desc: "14–30 hari kerja, tergantung jadwal Loss Adjuster." },
          { title: "Klaim besar (di atas Rp 500 juta)", desc: "30–60 hari kerja atau lebih, karena proses negosiasi yang lebih panjang." },
        ]}
      />
      <p>
        Kelengkapan dokumen sejak awal adalah faktor tunggal paling signifikan dalam mempercepat
        proses. Setiap permintaan dokumen tambahan dari penanggung dapat menambah 5–10 hari
        kerja pada total waktu pemrosesan. Jika Anda belum memiliki polis dan ingin memastikan
        proses klaim di masa depan berjalan lancar, mulailah dengan memilih{" "}
        <Link href="/asuransi-properti/asuransi-rumah-batam" className="font-medium">
          asuransi rumah
        </Link>{" "}
        dengan nilai pertanggungan yang sesuai dari awal.
      </p>

      <SectionHeading icon={FileSearch}>Pertanyaan yang Sering Diajukan</SectionHeading>
      <div className="space-y-3 not-prose">
        {faqItems.map((item) => (
          <details key={item.question} className="group p-5 rounded-xl border border-[#e2e8f0] bg-[#faf8f3]">
            <summary className="font-semibold text-[#0a1628] cursor-pointer list-none flex items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <BadgeCheck className="w-[16px] h-[16px] text-[#c9a84c] shrink-0" strokeWidth={2} />
                {item.question}
              </span>
              <span className="text-[#c9a84c] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
            </summary>
            <p className="text-[#374151] text-sm mt-3 mb-0 leading-relaxed pl-7">{item.answer}</p>
          </details>
        ))}
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <div className="flex items-center gap-2.5 mb-3">
          <ShieldCheck className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">
            Butuh Bantuan Klaim atau Konsultasi Asuransi Properti di Batam?
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Rio membantu proses klaim asuransi properti dari awal hingga akhir — mulai dari
          persiapan dokumen dan koordinasi dengan Loss Adjuster hingga negosiasi nilai klaim
          jika ada selisih penilaian. Konsultasi gratis, tanpa biaya tambahan di luar premi
          polis Anda.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-properti/asuransi-rumah-batam"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Produk Asuransi Rumah
          </Link>
          <Link
            href="/kontak"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-properti/asuransi-gudang-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Batam</a></li>
              <li><a href="/asuransi-properti/asuransi-hotel-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Hotel Batam</a></li>
              <li><a href="/asuransi-properti/asuransi-pabrik-kawasan-industri-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pabrik & Kawasan Industri Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/asuransi-properti-komersial-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Properti Komersial Batam</a></li>
              <li><a href="/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Kawasan Industri Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
