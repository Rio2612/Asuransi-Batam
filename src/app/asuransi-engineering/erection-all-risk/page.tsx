import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Hammer, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Erection All Risk (EAR) Insurance Batam – Asuransi Pemasangan Mesin & Plant",
  description:
    "Erection All Risk Insurance di Batam untuk pemasangan mesin, pabrik, dan plant industri. Perlindungan selama masa erection hingga commissioning. Hubungi Rio!",
  canonical: "/asuransi-engineering/erection-all-risk",
});

const FAQS = [
  {
    q: "Apa perbedaan EAR dan CAR Insurance?",
    a: "CAR (Contractor All Risk) digunakan untuk proyek konstruksi sipil seperti gedung dan jalan. EAR (Erection All Risk) digunakan untuk proyek pemasangan mesin, plant industri, menara, dan struktur baja/besi.",
  },
  {
    q: "Apa saja proyek yang membutuhkan EAR?",
    a: "EAR cocok untuk: pemasangan mesin pabrik, pembangunan plant kimia, konstruksi menara telekomunikasi, pemasangan PLTU/PLTG, instalasi sistem HVAC skala besar, dan proyek offshore.",
  },
  {
    q: "Apakah EAR mencakup pengujian awal (testing & commissioning)?",
    a: "Ya, EAR umumnya mencakup periode testing & commissioning dengan tambahan klausul khusus. Ini sangat penting karena risiko tertinggi sering terjadi saat pertama kali mesin/plant diuji.",
  },
  {
    q: "Berapa premi EAR Insurance?",
    a: "Premi EAR bergantung pada nilai kontrak, kompleksitas erection, risiko uji coba, dan lokasi proyek. Umumnya berkisar 0,5%–2% dari nilai kontrak. Hubungi kami untuk kalkulasi spesifik.",
  },
];

const BENEFITS = [
  "Kerusakan selama erection",
  "Kesalahan desain atau material",
  "Kerusakan akibat uji coba",
  "Bencana alam & cuaca",
  "Kebakaran & ledakan",
  "Third Party Liability",
  "Testing & commissioning period",
  "Biaya pembongkaran & pengiriman ulang",
];

export default function ErectionAllRiskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaInsuranceProduct({
        name: "Erection All Risk Insurance Batam",
        description: "Asuransi pemasangan mesin dan plant industri di Batam untuk proyek erection hingga commissioning.",
        url: "/asuransi-engineering/erection-all-risk",
        category: "Asuransi Engineering",
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }} />

      <section className="pt-32 pb-16 px-4" style={{ background: "linear-gradient(135deg, #0a1628 0%, #132040 60%, #1e3a6e 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Beranda", href: "/" },
            { label: "Asuransi Engineering", href: "/asuransi-engineering" },
            { label: "Erection All Risk" },
          ]} />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
              <Hammer size={24} style={{ color: "#0a1628" }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "#c9a84c20", color: "#f0d080" }}>Asuransi Engineering</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
            Erection All Risk (EAR) Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Perlindungan all risk untuk proyek pemasangan mesin, plant industri, dan instalasi peralatan — dari mobilisasi hingga commissioning dan maintenance period.
          </p>
          <a href={WHATSAPP_URL("Halo Rio, saya butuh Erection All Risk Insurance")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            Konsultasi Proyek Anda
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Perlindungan EAR" title="Apa yang Ditanggung EAR Insurance?" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Pertanyaan Seputar EAR Insurance" center />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTASection title="Proteksi Proyek Erection Anda" waMsg="Halo Rio, saya ingin Erection All Risk Insurance" />
    </>
  );
}
