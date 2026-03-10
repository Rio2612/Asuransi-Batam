import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO, schemaBreadcrumb } from "@/lib/seo";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import { WHATSAPP_URL } from "@/lib/constants";
import KalkulatorMobilForm from "./KalkulatorMobilForm";
import { Calculator, Shield, ChevronRight } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Kalkulator Premi Asuransi Mobil 2025 – Estimasi Premi All Risk & TLO",
  description:
    "Hitung estimasi premi asuransi mobil secara online. Berdasarkan tarif resmi OJK. All Risk dan TLO tersedia. Gratis, cepat, akurat. Batam & seluruh Indonesia.",
  canonical: "/kalkulator-premi/mobil",
});

const FAQS_KALKULATOR = [
  { q: "Apakah perhitungan kalkulator ini akurat?", a: "Kalkulator ini menggunakan tarif acuan OJK (SEOJK No. 6/SEOJK.05/2017). Premi aktual dapat sedikit berbeda karena setiap perusahaan asuransi menerapkan kebijakan masing-masing. Untuk penawaran resmi, silakan hubungi kami." },
  { q: "Apa perbedaan All Risk dan TLO?", a: "All Risk (Comprehensive) menanggung semua kerusakan termasuk lecet dan penyok ringan. TLO hanya menanggung kerugian total (>75% nilai kendaraan) dan pencurian." },
  { q: "Bagaimana cara mendapatkan premi lebih murah?", a: "Dengan memilih TLO untuk kendaraan berusia di atas 5 tahun, memilih deductible yang lebih tinggi, atau membandingkan penawaran dari beberapa perusahaan asuransi melalui konsultan kami." },
];

export default function KalkulatorPremiMobilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Beranda", url: "/" },
        { name: "Kalkulator Premi", url: "/kalkulator-premi/mobil" },
        { name: "Kalkulator Premi Mobil", url: "/kalkulator-premi/mobil" },
      ])) }} />

      <section className="pt-32 pb-16 px-4" style={{ background: "linear-gradient(135deg, #0a1628 0%, #132040 60%, #1e3a6e 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Breadcrumb items={[
            { label: "Beranda", href: "/" },
            { label: "Kalkulator Premi Mobil" },
          ]} />
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <Calculator size={32} style={{ color: "#0a1628" }} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Kalkulator Premi Asuransi Mobil
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Hitung estimasi premi asuransi mobil All Risk & TLO secara instan. Berdasarkan tarif resmi OJK. Gratis & tanpa registrasi.
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
              Hitung Estimasi Premi Anda
            </h2>
            <KalkulatorMobilForm />
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                <Shield size={18} style={{ color: "#1a4fa0" }} /> Panduan Memilih Polis
              </h3>
              <div className="space-y-3">
                {[
                  { label: "All Risk (Comprehensive)", desc: "Cocok untuk mobil baru/mahal (<5 tahun). Menanggung semua kerusakan.", color: "#1a4fa0" },
                  { label: "TLO (Total Loss Only)", desc: "Cocok untuk mobil tua (>5 tahun) atau armada. Premi lebih terjangkau.", color: "#c9a84c" },
                ].map((p) => (
                  <div key={p.label} className="p-3 rounded-xl" style={{ background: `${p.color}10`, border: `1px solid ${p.color}30` }}>
                    <div className="font-semibold text-sm" style={{ color: p.color }}>{p.label}</div>
                    <div className="text-xs text-gray-600 mt-0.5">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-navy mb-2">Wilayah di Batam</h3>
              <p className="text-sm text-gray-600">
                Batam termasuk <strong>Wilayah 1</strong> (Sumatera). Tarif All Risk berkisar <strong>2,47%–3,82%</strong> tergantung kategori harga kendaraan.
              </p>
              <Link href="/blog/perbedaan-all-risk-dan-tlo" className="flex items-center gap-1 text-sm text-blue-600 mt-3 font-medium hover:underline">
                Baca: Perbedaan All Risk vs TLO <ChevronRight size={14} />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-navy mb-2">Butuh Penawaran Resmi?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Rio Mardiansyah akan membantu Anda mendapatkan penawaran dari beberapa perusahaan asuransi terbaik dengan premi paling kompetitif.
              </p>
              <a href={WHATSAPP_URL("Halo Rio, saya ingin penawaran asuransi mobil")} target="_blank" rel="noopener noreferrer"
                className="block text-center py-2.5 rounded-xl font-semibold text-navy text-sm"
                style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
                Minta Penawaran Gratis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Pertanyaan Seputar Kalkulator Premi" center />
          <div className="space-y-3">
            {FAQS_KALKULATOR.map((f) => (
              <div key={f.q} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy text-sm mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-navy mb-5" style={{ fontFamily: "Syne, sans-serif" }}>Jelajahi Lebih Lanjut</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kalkulator-premi/motor" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-all">
              Kalkulator Premi Motor →
            </Link>
            <Link href="/asuransi-kendaraan/asuransi-mobil-batam" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-all">
              Asuransi Mobil Batam →
            </Link>
            <Link href="/blog/perbedaan-all-risk-dan-tlo" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-all">
              All Risk vs TLO →
            </Link>
            <Link href="/blog/cara-klaim-asuransi-mobil" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-all">
              Cara Klaim Asuransi →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
