import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  FileCheck, 
  Clock, 
  ChevronRight, 
  ArrowRight 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Asuransi PA Karyawan Grup Batam | Solusi Perusahaan & Industri',
  description: 'Program Asuransi Kecelakaan Diri Grup (Group PA) untuk perusahaan di Batam. Proteksi karyawan shipyard, pabrik, dan proyek. Premi kompetitif, klaim mudah, melengkapi BPJS Ketenagakerjaan.',
  alternates: {
    canonical: 'https://asuransibatam.biz.id/asuransi-personal-accident/pa-karyawan-grup',
    languages: {
      'id-ID': 'https://asuransibatam.biz.id/asuransi-personal-accident/pa-karyawan-grup',
      'en-US': 'https://asuransibatam.biz.id/en/personal-accident-insurance/group-employee-pa',
    },
  },
  openGraph: {
    title: 'Asuransi PA Grup untuk Perusahaan Batam',
    description: 'Manajemen risiko karyawan yang efektif dengan PA Group. Cover risiko tinggi industri galangan kapal & manufaktur.',
    url: 'https://asuransibatam.biz.id/asuransi-personal-accident/pa-karyawan-grup',
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
      "name": "Berapa jumlah minimum peserta untuk mendaftar PA Grup di Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Umumnya, asuransi PA Grup mensyaratkan minimum 10 peserta untuk polis standar. Namun, untuk perusahaan besar di kawasan industri Batam, kami menyediakan skema fleksibel dengan minimum peserta yang lebih rendah atau opsi polis induk (master policy)."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah PA Grup bisa dikombinasikan dengan BPJS Ketenagakerjaan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sangat bisa dan sangat direkomendasikan. PA Grup berfungsi sebagai 'top-up' atau pelengkap. Jika BPJS JKK menanggung biaya medis, PA Grup memberikan santunan tunai (cash) langsung kepada karyawan yang bisa digunakan untuk biaya tambahan, pemulihan, atau keluarga."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana klasifikasi risiko untuk pekerja galangan kapal (shipyard)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pekerja shipyard biasanya masuk klasifikasi risiko tinggi (Class 2 atau 3). Kami memastikan proses underwriting dilakukan dengan transparan sehingga klaim di masa depan tidak ditolak karena salah klaim klasifikasi pekerjaan."
      }
    }
  ]
};

export default function GroupEmployeePA_ID() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-cream text-navy font-sans">
        
        {/* HERO SECTION */}
        <section className="gradient-navy text-cream section-padding pt-32 md:pt-40">
          <div className="container mx-auto px-6">
            <nav className="text-sm mb-4 opacity-70">
              <Link href="/" className="hover:text-gold">Home</Link>
              <ChevronRight className="inline w-4 h-4 mx-1" />
              <Link href="/asuransi-personal-accident" className="hover:text-gold">Asuransi Personal Accident</Link>
              <ChevronRight className="inline w-4 h-4 mx-1" />
              <span className="text-gold">PA Karyawan Grup</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Lindungi Aset Terpenting Perusahaan: <span className="text-gradient-gold">Karyawan Anda</span>
                </h1>
                <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                  Solusi Asuransi Kecelakaan Diri Grup (Group PA) yang dirancang khusus untuk Pelaku Usaha di Batam. Dari industri berat hingga kantor administratif, pastikan operasional bisnis Anda tetap berjalan saat risiko terjadi.
                </p>
                <Link href="#form-konsultasi" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-8 rounded-full transition-all shadow-lg">
                  Minta Penawaran Premi <ArrowRight size={20} />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="bg-navy-light/20 p-8 rounded-2xl border border-cream/10">
                  <h3 className="font-display text-xl font-bold text-gold mb-4">Keunggulan PA Grup Kami:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><FileCheck className="text-gold" /> Underwriting Klasifikasi Risiko Batam</li>
                    <li className="flex items-center gap-3"><Clock className="text-gold" /> Proses Polis Cepat (24 Jam Kerja)</li>
                    <li className="flex items-center gap-3"><Users className="text-gold" /> Minimum Peserta Fleksibel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE (EEAT Focus) */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Manajemen Risiko Profesional untuk Industri Batam
              </h2>
              <p className="text-navy/70 max-w-3xl mx-auto">
                Keahlian kami dalam menangani klaim di sektor Shipyard, Migas, dan Manufaktur menjadikan kami mitra terpercaya.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-hover border-t-4 border-gold">
                <h3 className="font-display text-xl font-bold mb-3 text-navy">Santunan Tunai Langsung</h3>
                <p className="text-navy/70">
                  Memberikan kompensasi finansial tunai (cash) kepada karyawan atau ahli waris tanpa mengganggu cash flow perusahaan di saat kritis.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg card-hover border-t-4 border-gold">
                <h3 className="font-display text-xl font-bold mb-3 text-navy">Kepatuhan Regulasi</h3>
                <p className="text-navy/70">
                  Membantu perusahaan memenuhi aspek tanggung jawab sosial dan ketenagakerjaan sesuai regulasi Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-navy-light/10">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Pertanyaan Umum PA Grup</h2>
            <div className="space-y-4">
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer font-bold text-navy">
                  Apakah premi PA Grup mahal untuk perusahaan kecil?
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70">
                  Tidak. Karena bersifat kelompok, premi per orang justru jauh lebih ekonomis dibanding asuransi individu. Kami menyesuaikan skema anggaran dengan kebutuhan proteksi perusahaan Anda.
                </p>
              </details>
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer font-bold text-navy">
                  Dokumen apa saja yang diperlukan?
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70">
                  Cukup daftar nama karyawan, tanggal lahir, dan jabatan/profesi. Untuk klasifikasi risiko tinggi, kami mungkin perlu deskripsi tugas (job description) untuk akurasi premi.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="form-konsultasi" className="section-padding gradient-gold">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Dapatkan Penawaran PA Grup Terbaik
            </h2>
            <p className="text-navy/80 mb-8">Konsultasikan kebutuhan proteksi karyawan Anda dengan tim ahli kami.</p>
            <Link href="https://wa.me/6281373336728?text=Halo,%20saya%20ingin%20konsultasi%20PA%20Grup%20untuk%20perusahaan%20di%20Batam" className="inline-flex items-center gap-2 bg-navy text-cream font-bold py-3 px-8 rounded-full shadow-xl hover:bg-navy-mid transition-all">
              <Building2 size={20} /> Konsultasi Via WhatsApp
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
