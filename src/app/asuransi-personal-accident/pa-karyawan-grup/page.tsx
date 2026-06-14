import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Building2, 
  HardHat, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall 
} from 'lucide-react';

// --- METADATA SEO & HREFLANG ---
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

// --- JSON-LD SCHEMA ---
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
        <section className="gradient-navy text-cream section-padding min-h-[50vh] flex items-center relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <nav className="text-sm mb-4 opacity-80">
                <Link href="/" className="hover:text-gold">Home</Link> 
                <ChevronRight className="inline w-4 h-4 mx-1" /> 
                <Link href="/asuransi-personal-accident" className="hover:text-gold">Asuransi Personal Accident</Link> 
                <ChevronRight className="inline w-4 h-4 mx-1" /> 
                <span className="text-gold">Karyawan Grup</span>
              </nav>
              
              <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
                Asuransi Kecelakaan Kumpulan <span className="text-gradient-gold">(Group PA)</span> untuk Korporat Batam
              </h1>
              <p className="text-base md:text-lg text-cream/90 mb-8 leading-relaxed">
                Optimalkan manajemen risiko perusahaan Anda. Perlindungan finansial kolektif untuk staf kantor hingga buruh lapangan rig, galangan kapal, dan manufaktur berat di seluruh kawasan FTZ Batam.
              </p>
              <Link href="#konsultasi-b2b" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
                <Building2 size={20} /> Minta Penawaran Corporate
              </Link>
            </div>
          </div>
        </section>

        {/* MANFAAT UTAMA UTK PERUSAHAAN */}
        <section className="section-padding bg-cream">
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
                <HardHat className="text-gold w-12 h-12 mb-6" />
                <h3 className="font-display text-xl font-bold mb-3">Kustomisasi Kelas Risiko</h3>
                <p className="text-navy/70 text-sm leading-relaxed">
                  Penentuan kategori premi yang adil berdasarkan penempatan kerja karyawan, mulai dari administrasi kantor, operator mesin pabrik, hingga welder di area shipyard.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <FileText className="text-gold w-12 h-12 mb-6" />
                <h3 className="font-display text-xl font-bold mb-3">Bulk Premium Discount</h3>
                <p className="text-navy/70 text-sm leading-relaxed">
                  Makin besar jumlah tenaga kerja yang didaftarkan, skema tarif premi per kepala menjadi jauh lebih ekonomis dibandingkan asuransi retail konvensional.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <ShieldCheck className="text-gold w-12 h-12 mb-6" />
                <h3 className="font-display text-xl font-bold mb-3">Menjaga Stabilitas Cashflow</h3>
                <p className="text-navy/70 text-sm leading-relaxed">
                  Melindungi keuangan perusahaan dari pengeluaran mendadak yang besar akibat kewajiban santunan kecelakaan fatal di luar jaminan normatif pemerintah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAKUPAN JAMINAN */}
        <section className="section-padding bg-navy-light/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-8 text-center">
              Cakupan Standar Jaminan Polis
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-navy/5 grid md:grid-cols-2 gap-6">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy mb-1">Santunan Meninggal Dunia</h4>
                  <p className="text-navy/70 text-sm">Santunan tunai 100% nilai pertanggungan akibat kecelakaan kerja maupun selama masa aktif jaminan.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy mb-1">Cacat Tetap Keseluruhan/Sebagian</h4>
                  <p className="text-navy/70 text-sm">Kompensasi finansial terstruktur sesuai persentase kehilangan fungsi organ akibat insiden industri.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy mb-1">Biaya Perawatan Medis Swasta</h4>
                  <p className="text-navy/70 text-sm">Reimbursement atau cashless di rumah sakit rekanan atas penanganan medis darurat pasca kecelakaan.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy mb-1">Santunan Harian Rawat Inap</h4>
                  <p className="text-navy/70 text-sm">Pengganti pendapatan harian (income protection) yang hilang selama karyawan menjalani opname.</p>
                </div>
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
              Kirimkan representasi data jumlah karyawan dan klasifikasi pekerjaan kepada account manager kami untuk kalkulasi penawaran premi terbaik.
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
