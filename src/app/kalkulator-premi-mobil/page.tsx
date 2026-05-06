import type { Metadata } from "next";
import KalkulatorMobil from "@/components/KalkulatorMobil";

export const metadata: Metadata = {
  title: "Kalkulator Premi Asuransi Mobil Batam – Cek Tarif OJK Sekarang, Gratis",
  description: "Berapa premi asuransi mobil Anda di Batam? Hitung langsung pakai tarif resmi OJK — All Risk mulai 2,08%, TLO mulai 0,37%. Hasil instan, tanpa daftar, langsung hubungi agen.",
  alternates: { canonical: "https://asuransibatam.biz.id/kalkulator-premi-mobil" },
};

// FAQ Schema — membantu Google menampilkan rich result di bawah judul halaman
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa premi asuransi mobil All Risk di Batam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Berdasarkan tarif OJK untuk Wilayah 1 (Batam & Kepulauan Riau), premi All Risk berkisar antara 2,08% hingga 3,82% dari harga kendaraan per tahun, tergantung nilai kendaraan. Mobil seharga Rp 200 juta misalnya, estimasi premi All Risk sekitar Rp 4,36 juta per tahun.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa premi asuransi mobil TLO di Batam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Premi TLO di Wilayah 1 (Batam) berkisar antara 0,37% hingga 0,63% dari harga kendaraan per tahun. Lebih hemat dibanding All Risk karena hanya menanggung kehilangan dan kerusakan total di atas 75% nilai kendaraan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah tarif OJK berlaku sama di semua kota?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. OJK membagi Indonesia menjadi 3 wilayah rating. Batam masuk Wilayah 1 bersama Sumatera dan sekitarnya. Wilayah 2 mencakup Jawa, Madura, dan Bali — tarifnya berbeda. Kalkulator ini menggunakan tarif khusus Wilayah 1.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah premi mobil listrik lebih mahal dari mobil biasa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. OJK mengatur tarif asuransi mobil listrik (EV) menggunakan rate maksimal, sekitar 10% lebih tinggi dari kendaraan konvensional. Hal ini karena biaya perbaikan komponen EV seperti baterai dan motor listrik jauh lebih mahal.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menghitung premi asuransi mobil sendiri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rumusnya: Premi = Harga Kendaraan × Tarif OJK (%). Tarif bervariasi berdasarkan nilai kendaraan dan jenis asuransi (All Risk atau TLO). Gunakan kalkulator di halaman ini untuk hasil otomatis dan akurat sesuai tarif OJK Wilayah 1 Batam.",
      },
    },
  ],
};

export default function KalkulatorPremiMobilPage() {
  return (
    <div className="min-h-screen">
      {/* FAQ Schema untuk rich result di Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">
            Kalkulator Online
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Kalkulator Premi Asuransi Mobil
          </h1>
          <p className="text-white/70 text-xl">
            Estimasi premi berdasarkan tarif resmi OJK. Gratis, cepat, dan akurat.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#faf8f3]">
        <KalkulatorMobil />

        {/* CTA Konsultasi */}
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl border border-[#e2e8f0] text-center">
          <p className="text-[#64748b] text-sm mb-4">
            Ingin penawaran resmi dengan harga kompetitif? Hubungi Rio untuk simulasi polis
            dari berbagai perusahaan asuransi terkemuka.
          </p>
          <a
            href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20simulasi%20premi%20asuransi%20mobil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            Minta Simulasi Resmi
          </a>
        </div>

        {/* FAQ Section — konten tertulis untuk SEO, mendukung FAQ schema di atas */}
        <div className="max-w-2xl mx-auto mt-12">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-6 text-center">
            Pertanyaan Umum Seputar Premi Asuransi Mobil di Batam
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Berapa premi asuransi mobil All Risk di Batam?",
                a: "Berdasarkan tarif OJK Wilayah 1 (Batam & Kepulauan Riau), premi All Risk berkisar antara 2,08% hingga 3,82% dari harga kendaraan per tahun. Semakin tinggi nilai kendaraan, semakin rendah persentase tarifnya. Mobil seharga Rp 200 juta dikenai tarif 2,67%, artinya premi sekitar Rp 5,34 juta per tahun.",
              },
              {
                q: "Berapa premi asuransi mobil TLO di Batam?",
                a: "Premi TLO di Wilayah 1 berkisar 0,37% hingga 0,63% per tahun — jauh lebih hemat dari All Risk. TLO hanya menanggung kehilangan kendaraan dan kerusakan total di atas 75% nilai unit. Cocok untuk mobil berusia di atas 5 tahun atau bagi yang ingin proteksi dasar dengan premi minimal.",
              },
              {
                q: "Apakah tarif OJK berlaku sama di semua kota Indonesia?",
                a: "Tidak. OJK membagi Indonesia menjadi 3 wilayah rating berdasarkan tingkat risiko lalu lintas. Batam masuk Wilayah 1 bersama Sumatera. Wilayah 2 mencakup Jawa, Madura, dan Bali dengan tarif berbeda. Kalkulator ini menggunakan tarif resmi Wilayah 1 yang berlaku untuk kendaraan yang terdaftar di Batam dan sekitar Kepulauan Riau.",
              },
              {
                q: "Apakah premi mobil listrik lebih mahal?",
                a: "Ya. OJK mengatur bahwa kendaraan listrik (EV) menggunakan tarif maksimal, sekitar 10% lebih tinggi dari kendaraan konvensional. Alasannya adalah biaya perbaikan komponen EV — terutama baterai dan motor listrik — yang jauh lebih mahal dibanding komponen mesin konvensional. Own Risk (risiko sendiri) untuk EV juga ditetapkan Rp 500.000 per kejadian.",
              },
              {
                q: "Apakah hasil kalkulator ini sudah termasuk pajak dan biaya tambahan?",
                a: "Hasil kalkulator menampilkan estimasi premi pokok berdasarkan tarif acuan OJK, belum termasuk materai, biaya polis, dan perluasan jaminan tambahan seperti banjir atau tanggung jawab pihak ketiga. Premi final ditentukan oleh perusahaan asuransi setelah proses underwriting. Hubungi Rio untuk mendapatkan penawaran resmi yang sudah mencakup semua komponen biaya.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
                <h3 className="font-display font-bold text-[#0a1628] mb-2">{item.q}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
