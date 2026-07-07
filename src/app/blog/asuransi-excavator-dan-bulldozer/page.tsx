import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  TrendingDown,
  Flame,
  Waves,
  Truck,
  ShieldCheck,
  ShieldOff,
  Gauge,
  ClipboardCheck,
  PhoneCall,
  Wrench,
  Hourglass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asuransi Excavator dan Bulldozer di Batam – Proteksi, Coverage & Cara Klaim",
  description: "Excavator dan bulldozer adalah aset mahal yang rentan rusak di lapangan. Pelajari jenis perlindungan yang tepat, apa yang ditanggung, dan bagaimana cara mengasuransikan alat berat Anda di Batam.",
  alternates: { canonical: "https://asuransibatam.com/blog/asuransi-excavator-dan-bulldozer",
        languages: {
      id: "https://asuransibatam.com/blog/asuransi-excavator-dan-bulldozer",
      en: "https://asuransibatam.com/en/blog/excavator-and-bulldozer-insurance-batam",
    },
  },
};

// Article schema (E-E-A-T: authorship & publisher signal)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Excavator dan Bulldozer di Batam: Proteksi, Coverage & Cara Klaim",
  description: "Excavator dan bulldozer adalah aset mahal yang rentan rusak di lapangan. Pelajari jenis perlindungan yang tepat, apa yang ditanggung, dan cara mengasuransikan alat berat Anda di Batam.",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/blog/asuransi-excavator-dan-bulldozer" },
};

// FAQ schema — dirender via prop resmi faqSchema di ArticleLayout
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah excavator sewaan bisa diasuransikan oleh penyewa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bisa, tapi perlu kehati-hatian. Penyewa bisa mengambil polis atas nama sendiri untuk melindungi tanggung jawab selama periode sewa. Namun harus dipastikan tidak terjadi double insurance — jika pemilik alat sudah punya polis aktif yang mencakup periode yang sama, ada risiko komplikasi saat klaim.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana jika excavator rusak karena kesalahan operator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polis EAR umumnya mencakup kerusakan akibat negligence (kelalaian) operator selama kelalaian tersebut tidak bersifat disengaja (willful misconduct). Kerusakan akibat operator yang tidak kompeten atau tidak tersertifikasi bisa menjadi alasan penolakan di beberapa polis.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah polis masih berlaku saat alat tidak beroperasi (standby)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, selama polis aktif dan premi dibayar, perlindungan tetap berlaku meski unit sedang dalam kondisi parkir atau standby — termasuk risiko kebakaran, pencurian, atau bencana alam yang terjadi saat unit tidak digunakan.",
      },
    },
  ],
};

export default function ArticleAsuransiExcavatorBulldozerPage() {
  return (
    <ArticleLayout
      title="Asuransi Excavator dan Bulldozer di Batam: Proteksi, Coverage & Cara Klaim"
      description="Satu unit excavator bisa bernilai miliaran rupiah. Tanpa asuransi yang tepat, satu kerusakan di lapangan bisa menghentikan seluruh proyek Anda."
      date="6 Mei 2026"
      category="Machinery"
      readTime="9 menit"
      breadcrumbs={[
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        { label: "Asuransi Excavator dan Bulldozer", href: "/blog/asuransi-excavator-dan-bulldozer" },
      ]}
      schema={articleSchema}
      faqSchema={faqSchema}
    >
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
        Pendahuluan
      </p>
      <p>
        Di lapangan proyek Batam — dari pembangunan kawasan industri hingga reklamasi pelabuhan —
        excavator dan bulldozer bekerja dalam kondisi yang jauh dari ideal. Tanah keras, medan
        berair, lereng curam, dan tekanan operasional tinggi setiap hari membuat kedua alat ini
        masuk dalam kategori aset paling rentan mengalami kerusakan. Harga satu unit excavator
        kelas menengah berkisar Rp 800 juta hingga Rp 2 miliar. Jika rusak parah tanpa proteksi
        asuransi, kontraktor bisa menanggung kerugian yang nilainya setara dengan margin keuntungan
        beberapa proyek sekaligus.
      </p>
      <p>
        Artikel ini membahas secara spesifik bagaimana proteksi asuransi untuk excavator dan
        bulldozer bekerja, apa saja yang ditanggung, dan bagaimana proses klaimnya di Batam.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Memahami Cakupan
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Mengapa Excavator dan Bulldozer Butuh Asuransi Tersendiri?</h2>
      <p>
        Sebagian kontraktor masih beranggapan bahwa asuransi proyek (CAR/EAR) sudah cukup untuk
        melindungi semua aset di lapangan. Kenyataannya tidak sesederhana itu. Polis CAR
        (Contractor's All Risk) memang bisa mencakup alat berat, tetapi cakupannya terbatas pada
        risiko yang terjadi <em>dalam lingkup proyek tertentu</em> dan selama masa kontrak berjalan.
        Begitu alat berpindah ke proyek lain atau masa kontrak berakhir, perlindungan langsung gugur.
      </p>
      <p>
        Sementara itu, polis <strong>Equipment All Risk (EAR)</strong> dirancang khusus untuk
        melindungi unit alat berat itu sendiri — bukan proyeknya. Polis ini mengikuti unit ke mana
        pun ia beroperasi, selama jangka waktu polis aktif. Inilah yang membuat EAR lebih relevan
        bagi pemilik alat berat yang unitnya berpindah-pindah lokasi proyek sepanjang tahun. Lini{" "}
        <Link href="/asuransi-machinery" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">
          asuransi machinery
        </Link>{" "}
        kami mencakup berbagai jenis alat berat dengan karakteristik risiko yang berbeda-beda.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Risiko Lapangan
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Risiko Nyata Excavator dan Bulldozer di Lapangan</h2>
      <p>
        Sebelum memilih polis, penting memahami jenis risiko yang paling sering terjadi pada
        kedua alat ini berdasarkan kondisi lapangan aktual:
      </p>

      <div className="not-prose mt-8 mb-10 grid gap-4 sm:grid-cols-2">
        {[
          {
            icon: TrendingDown,
            title: "Tergelincir dan Terguling di Medan Miring",
            body: "Excavator yang beroperasi di tepi lereng atau tanggul berisiko kehilangan keseimbangan, terutama saat tanah basah atau longsor. Biaya perbaikan unit yang terguling bisa mencapai ratusan juta rupiah, belum termasuk ongkos evakuasi dari medan sulit.",
          },
          {
            icon: Wrench,
            title: "Kerusakan Boom dan Arm Akibat Benturan",
            body: "Komponen hydraulic arm dan boom excavator sangat rentan saat menggali material keras seperti batu cadas atau beton lama. Penggantian boom membutuhkan suku cadang impor dengan lead time panjang.",
          },
          {
            icon: Gauge,
            title: "Kerusakan Undercarriage Bulldozer",
            body: "Sistem track (rantai roda) bulldozer aus dengan cepat di medan berbatu. Penggantian satu set undercarriage bisa menelan biaya Rp 100 juta ke atas tergantung ukuran unit.",
          },
          {
            icon: Flame,
            title: "Kebakaran Akibat Kebocoran Oli Hidraulik",
            body: "Sistem hidraulik bertekanan tinggi yang bocor dan mengenai komponen panas adalah salah satu penyebab kebakaran yang paling sering tidak diantisipasi operator.",
          },
          {
            icon: Truck,
            title: "Kerusakan Saat Transit Menggunakan Flatbed",
            body: "Perpindahan unit antar lokasi proyek menggunakan trailer berisiko — mulai dari unit jatuh saat pemuatan hingga kerusakan akibat kondisi jalan buruk selama pengiriman.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a1628] mb-4">
                <Icon size={18} className="text-[#c9a84c]" />
              </span>
              <p className="font-display font-bold text-[#0a1628] mb-2">{item.title}</p>
              <p className="text-sm text-[#64748b] leading-relaxed">{item.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Cakupan Polis
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Apa yang Ditanggung Polis EAR untuk Excavator dan Bulldozer?</h2>

      <div className="not-prose my-7 overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-5 py-4 font-display tracking-wide">Jenis Risiko</th>
              <th className="text-left px-5 py-4 font-display tracking-wide">Ditanggung EAR?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Kecelakaan operasional (terguling, benturan, terperosok)", "✅ Ditanggung"],
              ["Kebakaran dan ledakan", "✅ Ditanggung"],
              ["Bencana alam (banjir, angin kencang, gempa)", "✅ Ditanggung"],
              ["Kerusakan saat transit / pengiriman antar lokasi", "✅ Ditanggung"],
              ["Tanggung jawab kepada pihak ketiga (orang/properti)", "✅ Opsional (perluasan)"],
              ["Kerusakan mesin akibat kegagalan mekanis tiba-tiba", "✅ Opsional (perluasan MB)"],
              ["Keausan normal dan deteriorasi bertahap", "❌ Tidak ditanggung"],
              ["Kerusakan akibat overloading yang disengaja", "❌ Tidak ditanggung"],
              ["Biaya perawatan rutin (service berkala)", "❌ Tidak ditanggung"],
            ].map(([a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-5 py-4 font-semibold text-[#0a1628] border-b border-[#e2e8f0]">{a}</td>
                <td className="px-5 py-4 text-[#64748b] leading-relaxed border-b border-[#e2e8f0]">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Profil risiko di atas berlaku khusus untuk excavator dan bulldozer. Unit machinery lain
        seperti{" "}
        <Link href="/asuransi-machinery/asuransi-crane" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">
          crane
        </Link>{" "}
        memiliki karakteristik risiko tambahan — terutama terkait beban angkat dan stabilitas —
        sehingga wording polisnya pun sedikit berbeda.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Menentukan Nilai
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Bagaimana Menentukan Nilai Pertanggungan yang Tepat?</h2>
      <p>
        Ini adalah pertanyaan yang paling sering muncul saat pemilik alat berat pertama kali
        mengurus asuransi. Ada dua pendekatan yang umum digunakan:
      </p>

      <div className="not-prose mt-8 mb-6 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a1628] mb-4">
            <Hourglass size={18} className="text-[#c9a84c]" />
          </span>
          <p className="font-display font-bold text-[#0a1628] mb-2">Nilai Pasar Wajar (Market Value)</p>
          <p className="text-sm text-[#64748b] leading-relaxed">
            Nilai jual unit di pasaran pada kondisi saat ini, memperhitungkan usia dan jam operasi
            mesin. Metode ini lebih umum untuk unit berusia di atas 3 tahun. Jika terjadi klaim
            total loss, ganti rugi dihitung berdasarkan nilai pasar saat kejadian.
          </p>
        </div>

        <div className="rounded-2xl border border-[#e2e8f0] bg-[#faf8f3] p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a1628] mb-4">
            <ShieldCheck size={18} className="text-[#c9a84c]" />
          </span>
          <p className="font-display font-bold text-[#0a1628] mb-2">Nilai Penggantian Baru (Replacement Value)</p>
          <p className="text-sm text-[#64748b] leading-relaxed">
            Nilai unit baru dengan spesifikasi setara di pasaran saat ini. Premi lebih tinggi, tapi
            ganti rugi lebih menguntungkan karena tidak dipotong penyusutan. Cocok untuk unit baru
            atau unit yang masih dalam cicilan pembiayaan.
          </p>
        </div>
      </div>

      <p>
        Perusahaan asuransi biasanya mensyaratkan survei fisik unit sebelum polis diterbitkan.
        Surveyor akan memeriksa kondisi fisik, jam operasi (dari hour meter), dan kelengkapan
        dokumen unit. Pastikan unit dalam kondisi terawat saat survei dilakukan.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Langkah Demi Langkah
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Proses Klaim: Langkah yang Harus Dilakukan Saat Terjadi Kerusakan</h2>

      <div className="not-prose mt-10 mb-4">
        {[
          {
            n: "01",
            title: "Hentikan Operasi dan Amankan Area",
            body: "Segera setelah kerusakan terjadi, hentikan penggunaan unit. Jangan mencoba memperbaiki sendiri sebelum surveyor datang — ini bisa membatalkan klaim karena dianggap mengubah kondisi bukti.",
          },
          {
            n: "02",
            title: "Dokumentasikan Kerusakan Secara Menyeluruh",
            body: "Ambil foto dan video dari berbagai sudut — kerusakan fisik luar, kondisi sekitar lokasi kejadian, dan panel instrumen jika masih bisa diakses. Catat jam dan lokasi kejadian secara spesifik.",
          },
          {
            n: "03",
            title: "Laporkan ke Agen Asuransi Maksimal 3 x 24 Jam",
            body: "Hampir semua polis EAR mewajibkan pelaporan dalam batas waktu ini. Melewati batas waktu adalah alasan penolakan yang paling umum dan paling mudah dihindari.",
          },
          {
            n: "04",
            title: "Tunggu Jadwal Survei",
            body: "Surveyor asuransi akan datang ke lokasi untuk menilai kerusakan. Jangan pindahkan unit ke bengkel sebelum survei selesai kecuali ada izin tertulis dari pihak asuransi.",
          },
          {
            n: "05",
            title: "Ikuti Rekomendasi Bengkel Rekanan",
            body: "Setelah klaim disetujui, perbaikan diarahkan ke bengkel atau dealer rekanan. Perbaikan di luar rekanan tanpa persetujuan tertulis biasanya tidak bisa diklaim.",
          },
        ].map((step, i, arr) => (
          <div key={step.n} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
                {step.n}
              </span>
              {i < arr.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
              )}
            </div>
            <div className={i < arr.length - 1 ? "pb-9" : ""}>
              <h3 className="mt-1.5 mb-2">{step.title}</h3>
              <p className="text-[#475569] leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Pertanyaan Umum
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Pertanyaan yang Sering Muncul Seputar Asuransi Excavator</h2>

      <div className="not-prose mt-8 mb-10 space-y-3">
        {[
          {
            q: "Apakah excavator sewaan bisa diasuransikan oleh penyewa?",
            a: "Bisa, tapi perlu kehati-hatian. Penyewa bisa mengambil polis atas nama sendiri untuk melindungi tanggung jawab selama periode sewa. Namun harus dipastikan tidak terjadi double insurance — jika pemilik alat sudah punya polis aktif yang mencakup periode yang sama, ada risiko komplikasi saat klaim. Koordinasikan dulu dengan pemilik unit sebelum mengambil polis tambahan.",
          },
          {
            q: "Bagaimana jika excavator rusak karena kesalahan operator?",
            a: "Polis EAR umumnya mencakup kerusakan akibat negligence (kelalaian) operator selama kelalaian tersebut tidak bersifat disengaja (willful misconduct). Kerusakan akibat operator yang tidak kompeten atau tidak tersertifikasi bisa menjadi alasan penolakan di beberapa polis — pastikan operator Anda memiliki SIO (Surat Izin Operator) yang masih berlaku.",
          },
          {
            q: "Apakah polis masih berlaku saat alat tidak beroperasi (standby)?",
            a: "Ya, selama polis aktif dan premi dibayar, perlindungan tetap berlaku meski unit sedang dalam kondisi parkir atau standby — termasuk risiko kebakaran, pencurian, atau bencana alam yang terjadi saat unit tidak digunakan.",
          },
        ].map((item) => (
          <div key={item.q} className="rounded-xl border border-[#e2e8f0] bg-white px-5 py-4">
            <p className="font-display font-semibold text-[#0a1628] mb-1.5">{item.q}</p>
            <p className="text-sm text-[#64748b] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-7 sm:p-8 bg-[#0a1628] rounded-2xl text-white not-prose relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c9a84c]/10" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
          Konsultasi Gratis
        </p>
        <h3 className="font-display font-bold text-xl text-white mb-3">
          Konsultasi Asuransi Alat Berat di Batam — Gratis
        </h3>
        <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-2xl">
          Setiap unit alat berat punya profil risiko yang berbeda tergantung jenis pekerjaan,
          medan operasi, dan usia mesin. Rio siap membantu menghitung kebutuhan proteksi yang
          tepat dan membandingkan pilihan polis yang sesuai anggaran proyek Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20alat%20berat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors"
          >
            Konsultasi via WhatsApp
          </a>
          <Link
            href="/asuransi-machinery/asuransi-alat-berat"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors"
          >
            Lihat Produk Asuransi Alat Berat
          </Link>
        </div>
      </div>

      <div className="mt-6 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#0a1628] mb-4">
          Artikel & Halaman Terkait
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/asuransi-machinery" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">
            → Asuransi Machinery Batam
          </Link>
          <Link href="/asuransi-machinery/asuransi-alat-berat" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">
            → Produk Asuransi Alat Berat
          </Link>
          <Link href="/asuransi-machinery/asuransi-crane" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">
            → Produk Asuransi Crane
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
