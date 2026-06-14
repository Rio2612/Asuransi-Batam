import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Building2, 
  HardHat, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall,
  AlertTriangle,
  FileCheck,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Asuransi Kecelakaan Kerja Kumpulan (Group PA) Batam | Proteksi Karyawan',
  description: 'Solusi Asuransi Kecelakaan Diri Kumpulan (Group Personal Accident) untuk perusahaan, pabrik manufaktur, dan galangan kapal di Batam. Premi ekonomis, suplemen BPJS TK, perlindungan proyek 24 jam.',
  alternates: {
    canonical: 'https://asuransibatam.biz.id/asuransi-personal-accident/pa-karyawan-grup',
    languages: {
      'id-ID': 'https://asuransibatam.biz.id/asuransi-personal-accident/pa-karyawan-grup',
      'en-US': 'https://asuransibatam.biz.id/en/personal-accident-insurance/group-employee-pa',
    },
  },
  openGraph: {
    title: 'Group Personal Accident Batam | Proteksi Kecelakaan Kumpulan',
    description: 'Asuransi kecelakaan kerja kumpulan untuk pekerja industri & kontraktor Batam. Proses underwriting transparan & penyesuaian klausul jaminan proyek.',
    url: 'https://asuransibatam.biz.id/asuransi-personal-accident/pa-karyawan-grup',
    siteName: 'Asuransi Batam',
    locale: 'id_ID',
    type: 'website',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.biz.id" },
    { "@type": "ListItem", "position": 2, "name": "Asuransi Personal Accident", "item": "https://asuransibatam.biz.id/asuransi-personal-accident" },
    { "@type": "ListItem", "position": 3, "name": "PA Karyawan Grup", "item": "https://asuransibatam.biz.id/asuransi-personal-accident/pa-karyawan-grup" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa jumlah minimum karyawan untuk mendaftar Group PA di Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pendaftaran Asuransi Kecelakaan Kumpulan (Group PA) umumnya dapat memproses kepesertaan mulai dari minimal 10 orang karyawan dalam satu perusahaan atau kontrak kerja proyek."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah skema Group PA ini mencakup risiko pekerja saat berada di area offshore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, perluasan jaminan untuk pekerjaan berisiko tinggi seperti galangan kapal (shipyard), loading-unloading pelabuhan, hingga aktivitas penunjang offshore dapat dimasukkan ke dalam klausul polis khusus dengan penyesuaian rate premi."
      }
    }
  ]
};

export default function GroupPAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-cream text-navy font-sans">
        
        {/* HERO */}
        <section className="gradient-navy text-cream section-padding min-h-[55vh] flex items-center relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <nav className="text-sm mb-4 opacity-80">
                <Link href="/" className="hover:text-gold">Home</Link> 
                <ChevronRight className="inline w-4 h-4 mx-1" /> 
                <Link href="/asuransi-personal-accident" className="hover:text-gold">Asuransi Personal Accident</Link> 
                <ChevronRight className="inline w-4 h-4 mx-1" /> 
                <span className="text-gold">Karyawan Grup</span>
              </nav>
              
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Asuransi Kecelakaan Kumpulan <span className="text-gradient-gold">(Group PA)</span> untuk Korporat Batam
              </h1>
              <p className="text-base md:text-xl text-cream/90 mb-8 leading-relaxed max-w-3xl">
                Optimalkan manajemen risiko logistik dan ketenagakerjaan perusahaan Anda. Perlindungan finansial kolektif untuk staf kantor hingga buruh lapangan rig, galangan kapal, dan manufaktur berat di seluruh kawasan FTZ Batam.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#konsultasi-b2b" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg">
                  <Building2 size={20} /> Minta Penawaran Corporate
                </Link>
                <Link href="#edukasi-risiko" className="inline-flex items-center justify-center gap-2 border border-cream/30 hover:border-cream text-cream py-3.5 px-6 rounded-full text-sm transition-all">
                  Pelajari Klasifikasi Risiko
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION EEAT 1: KONTEKS MANAJEMEN RISIKO DI BATAM */}
        <section id="edukasi-risiko" className="section-padding bg-cream">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-gold font-bold text-sm tracking-widest uppercase block mb-2">Mitigasi Risiko Perusahaan</span>
                <h2 className="font-display text-3xl font-bold text-navy mb-6">
                  Mengapa BPJS Ketenagakerjaan Saja Tidak Cukup bagi Vendor Industri?
                </h2>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed mb-4">
                  Batam bertindak sebagai poros manufaktur dan galangan kapal dengan regulasi keselamatan kerja yang ketat (HSE standar internasional). Ketika kecelakaan fatal terjadi, beban keuangan perusahaan tidak hanya terbatas pada biaya medis, melainkan tuntutan hukum keluarga, hilangnya produktivitas, hingga denda tenggat waktu proyek.
                </p>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  Asuransi Group Personal Accident (PA) bertindak sebagai **suplemen likuiditas**. Berbeda dengan dana BPJS yang memerlukan verifikasi birokrasi ketenagakerjaan yang rigid, dana santunan PA cair secara tunai (lump-sum) langsung ke korporasi atau ahli waris untuk meredam sengketa industrial.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-navy/5 space-y-6">
                <h4 className="font-display font-bold text-navy text-lg border-b pb-3">Parameter Penilaian Risiko Underwriting:</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-gold/10 text-gold p-2 rounded-lg h-10 w-10 flex items-center justify-center font-bold">I</div>
                    <div>
                      <h5 className="font-bold text-navy text-sm">Kelas Risiko Rendah (Class I)</h5>
                      <p className="text-xs text-navy/60">Staf administrasi, akuntan, manajemen internal gudang, direksi FTZ.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gold/10 text-gold p-2 rounded-lg h-10 w-10 flex items-center justify-center font-bold">II</div>
                    <div>
                      <h5 className="font-bold text-navy text-sm">Kelas Risiko Sedang (Class II)</h5>
                      <p className="text-xs text-navy/60">Supervisor lapangan pabrik elektronik, kurir logistik darat, teknisi *maintenance* presisi.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gold/10 text-gold p-2 rounded-lg h-10 w-10 flex items-center justify-center font-bold">III</div>
                    <div>
                      <h5 className="font-bold text-navy text-sm">Kelas Risiko Tinggi (Class III & IV)</h5>
                      <p className="text-xs text-navy/60">Welder galangan kapal, operator crane pelabuhan, supir truk kontainer, pekerja ketinggian & *offshore*.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN FITUR */}
        <section className="section-padding bg-navy-light/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-navy mb-4">
                Keunggulan Perlindungan Group PA Kami
              </h2>
              <p className="text-navy/70 max-w-2xl mx-auto">
                Dirancang khusus untuk menyesuaikan dinamika operasional perusahaan manufaktur skala internasional dan vendor lokal di Batam.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Briefcase className="text-gold w-12 h-12 mb-6" />
                <h3 className="font-display text-xl font-bold mb-3">Sistem Unnamed Basis</h3>
                <p className="text-navy/70 text-sm leading-relaxed">
                  Perusahaan dengan tingkat *turn-over* karyawan lapangan yang tinggi dapat mendaftarkan kuota posisi jabatan tanpa harus menyetor nama per kepala secara real-time. Memudahkan administrasi HRD.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <FileText className="text-gold w-12 h-12 mb-6" />
                <h3 className="font-display text-xl font-bold mb-3">Bulk Premium Discount</h3>
                <p className="text-navy/70 text-sm leading-relaxed">
                  Makin besar jumlah tenaga kerja yang didaftarkan, skema tarif premi per kepala menjadi jauh lebih ekonomis dibandingkan asuransi retail konvensional dengan metode pembayaran fleksibel.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <ShieldCheck className="text-gold w-12 h-12 mb-6" />
                <h3 className="font-display text-xl font-bold mb-3">Menjaga Stabilitas Cashflow</h3>
                <p className="text-navy/70 text-sm leading-relaxed">
                  Melindungi keuangan perusahaan dari pengeluaran mendadak yang besar akibat kewajiban santunan kecelakaan fatal di luar jaminan normatif pemerintah atau tuntutan tak terduga.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAKUPAN JAMINAN & PENGECUALIAN (EEAT TRANSMISSION) */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-12 text-center">
              Struktur Pertanggungan & Transparansi Polis
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-navy/5">
                <h3 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" /> Manfaat Jaminan Utama
                </h3>
                <ul className="space-y-4 text-sm text-navy/80">
                  <li className="border-b pb-2"><strong>Kematian Akibat Kecelakaan:</strong> Pembayaran 100% nilai santunan jika kematian terjadi dalam batas waktu 12 bulan sejak tanggal insiden.</li>
                  <li className="border-b pb-2"><strong>Cacat Tetap Permanen:</strong> Kehilangan fungsi anggota tubuh secara total/sebagian dihitung proporsional sesuai tabel skala medis internasional (OJK approved).</li>
                  <li className="border-b pb-2"><strong>Biaya Medis & Ambulans:</strong> Penggantian kuitansi pengobatan rumah sakit swasta kelas utama di Batam akibat trauma fisik kecelakaan kerja.</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-navy/5">
                <h3 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-2">
                  <AlertTriangle className="text-amber-500" /> Pengecualian Umum Polis (Exclusions)
                </h3>
                <ul className="space-y-4 text-sm text-navy/80">
                  <li className="border-b pb-2">Kecelakaan yang dipicu oleh penyakit bawaan laten (*occupational illness*) atau serangan jantung mendadak tanpa trauma eksternal fisik.</li>
                  <li className="border-b pb-2">Keterlibatan langsung tenaga kerja dalam aksi kejahatan, huru-hara politik, atau mengemudi di bawah pengaruh alkohol/zat narkotika ilegal.</li>
                  <li className="border-b pb-2">Partisipasi aktif dalam olahraga dirgantara ekstrem atau penugasan militer aktif kecuali ada endorsement klausul tambahan.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION EEAT 2: ALUR KLAIM B2B */}
        <section className="section-padding bg-navy-light/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2">Alur & Administrasi Klaim Korporasi</h2>
              <p className="text-sm text-navy/60">Transparansi tata kelola klaim demi percepatan pencairan dana hak pekerja</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 relative">
              <div className="bg-white p-6 rounded-xl border border-navy/5 relative">
                <div className="text-xs font-bold text-gold mb-2">Langkah 01</div>
                <h4 className="font-bold text-sm text-navy mb-2">Pelaporan Awal</h4>
                <p className="text-xs text-navy/70 leading-relaxed">Pihak HRD atau perwakilan K3 (HSE) wajib melaporkan insiden secara tertulis / WhatsApp dalam kurun waktu maksimal 3x24 jam.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-navy/5 relative">
                <div className="text-xs font-bold text-gold mb-2">Langkah 02</div>
                <h4 className="font-bold text-sm text-navy mb-2">Dokumentasi Medis</h4>
                <p className="text-xs text-navy/70 leading-relaxed">Melampirkan Visum et Repertum, resume medis dokter dari RS Batam, kronologi internal bertanda tangan manajemen, dan absensi kerja.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-navy/5 relative">
                <div className="text-xs font-bold text-gold mb-2">Langkah 03</div>
                <h4 className="font-bold text-sm text-navy mb-2">Pencairan Likuiditas</h4>
                <p className="text-xs text-navy/70 leading-relaxed">Proses analisa *loss adjuster* rampung dalam waktu 14 hari kerja setelah berkas dokumen dinyatakan lengkap secara hukum.</p>
              </div>
            </div>
          </div>
        </section>

        {/* B2B CTA */}
        <section id="konsultasi-b2b" className="gradient-gold section-padding">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
              Diskusikan Kebutuhan Polis Kumpulan Perusahaan Anda
            </h2>
            <p className="text-navy/85 text-sm md:text-base mb-8 max-w-xl mx-auto">
              Kirimkan representasi data jumlah karyawan dan klasifikasi pekerjaan kepada corporate consultant kami untuk kalkulasi premi terbaik.
            </p>
            <Link href="https://wa.me/6281234567890?text=Halo,%20perusahaan%20kami%20tertarik%20dengan%20skema%20Group%20PA%20Batam" target="_blank" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-cream font-bold py-3.5 px-8 rounded-full transition-all shadow-md">
              <PhoneCall size={18} /> Hubungi Corporate Consultant
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
