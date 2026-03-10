import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Hammer, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Contractor All Risk (CAR) Insurance Batam – Asuransi Proyek Konstruksi",
  description:
    "Contractor All Risk Insurance di Batam untuk proyek konstruksi gedung, jalan, jembatan, dan infrastruktur. Perlindungan material & TPL. Konsultasi dengan Rio Mardiansyah!",
  canonical: "/asuransi-engineering/contractor-all-risk",
});

const FAQS = [
  {
    q: "Apa itu Contractor All Risk (CAR) Insurance?",
    a: "CAR Insurance adalah asuransi proyek konstruksi yang melindungi kontraktor dari risiko kerugian selama masa pembangunan, mulai dari kerusakan material, peralatan konstruksi, hingga tanggung jawab hukum kepada pihak ketiga.",
  },
  {
    q: "Proyek apa saja yang cocok menggunakan CAR?",
    a: "CAR cocok untuk semua jenis proyek konstruksi: gedung bertingkat, perumahan, jalan & jembatan, pelabuhan, bendungan, dan proyek infrastruktur lainnya.",
  },
  {
    q: "Apakah CAR Insurance wajib?",
    a: "Untuk proyek pemerintah dan tender besar, CAR Insurance seringkali diwajibkan dalam dokumen kontrak. Untuk proyek swasta, sangat direkomendasikan untuk melindungi nilai investasi.",
  },
  {
    q: "Berapa lama periode pertanggungan CAR?",
    a: "CAR biasanya mengikuti periode konstruksi proyek, plus maintenance period (biasanya 12 bulan setelah proyek selesai). Premi dihitung berdasarkan nilai kontrak dan durasi proyek.",
  },
];

const BENEFITS = [
  "Kerusakan pekerjaan konstruksi",
  "Peralatan & mesin kontraktor",
  "Third Party Liability (TPL)",
  "Bencana alam & cuaca ekstrem",
  "Kebakaran & ledakan",
  "Pencurian material proyek",
  "Biaya pembongkaran & pembersihan",
  "Maintenance period coverage",
];

export default function ContractorAllRiskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaInsuranceProduct({
        name: "Contractor All Risk Insurance Batam",
        description: "Asuransi proyek konstruksi untuk kontraktor di Batam mencakup material, peralatan, dan tanggung jawab pihak ketiga.",
        url: "/asuransi-engineering/contractor-all-risk",
        category: "Asuransi Engineering",
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Beranda", url: "/" },
        { name: "Asuransi Engineering", url: "/asuransi-engineering" },
        { name: "Contractor All Risk", url: "/asuransi-engineering/contractor-all-risk" },
      ])) }} />

      <section className="pt-32 pb-16 px-4" style={{ background: "linear-gradient(135deg, #0a1628 0%, #132040 60%, #1e3a6e 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Beranda", href: "/" },
            { label: "Asuransi Engineering", href: "/asuransi-engineering" },
            { label: "Contractor All Risk" },
          ]} />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
              <Hammer size={24} style={{ color: "#0a1628" }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "#c9a84c20", color: "#f0d080" }}>Asuransi Engineering</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
            Contractor All Risk (CAR) Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Proteksi menyeluruh untuk proyek konstruksi Anda di Batam — dari ground breaking hingga masa pemeliharaan. Material, peralatan, dan tanggung jawab pihak ketiga semua terlindungi.
          </p>
          <a href={WHATSAPP_URL("Halo Rio, saya butuh Contractor All Risk Insurance untuk proyek di Batam")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            Konsultasi Proyek Anda
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Perlindungan CAR" title="Apa yang Ditanggung Contractor All Risk?" />
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
          <SectionHeader eyebrow="FAQ" title="Pertanyaan Seputar CAR Insurance" center />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTASection title="Amankan Proyek Konstruksi Anda" waMsg="Halo Rio, saya ingin Contractor All Risk Insurance" />
    </>
  );
}
