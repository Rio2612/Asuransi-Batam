// app/asuransi-marine/builders-risk/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Wrench, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Builder's Risk Insurance Batam – Asuransi Pembangunan Kapal | Asuransi Batam",
  description:
    "Builder's Risk Insurance di Batam untuk perlindungan selama proses pembangunan dan perbaikan kapal di galangan. Dari keel laying hingga sea trial. Konsultasi dengan Rio!",
  canonical: "/asuransi-marine/builders-risk",
  languages: {
    id: "https://asuransibatam.biz.id/asuransi-marine/builders-risk",
    en: "https://asuransibatam.biz.id/en/marine-insurance/builders-risk",
  },
});

const FAQS = [
  {
    q: "Apa itu Builder's Risk Insurance untuk kapal?",
    a: "Builder's Risk Insurance (atau dikenal juga sebagai Marine Builder's Risk atau DSU – Delay in Start-Up) adalah asuransi yang melindungi kapal selama proses pembangunan di galangan kapal. Perlindungan dimulai sejak peletakan lunas (keel laying) hingga selesainya uji coba laut (sea trial) dan penyerahan kapal.",
  },
  {
    q: "Siapa yang perlu memiliki Builder's Risk Insurance?",
    a: "Pihak yang perlu memiliki perlindungan ini adalah pemilik kapal yang memesan pembangunan kapal baru, dan galangan kapal (shipyard) yang menanggung risiko selama proses konstruksi. Keduanya memiliki kepentingan yang perlu dilindungi.",
  },
  {
    q: "Apakah Builder's Risk menanggung kerusakan saat sea trial?",
    a: "Ya. Sebagian besar polis Builder's Risk mencakup periode sea trial (uji coba laut) sebagai bagian dari periode pertanggungan, karena risiko kerusakan selama uji coba termasuk dalam proses pembangunan kapal.",
  },
  {
    q: "Apakah perbaikan kapal besar (drydocking) juga bisa diasuransikan?",
    a: "Ya. Selain kapal baru, polis Builder's Risk juga dapat digunakan untuk perlindungan selama proses renovasi besar, konversi kapal, atau perbaikan berat di galangan (major refit) yang membutuhkan periode drydocking yang lama.",
  },
  {
    q: "Apa yang dimaksud dengan Increased Value (IV) dalam Builder's Risk?",
    a: "Increased Value adalah tambahan pertanggungan yang memberikan kompensasi atas selisih antara nilai kapal setelah selesai dibangun dan nilai pertanggungan utama, terutama jika nilai kapal meningkat secara signifikan selama proses pembangunan.",
  },
];

const BENEFITS = [
  "Kerusakan fisik selama konstruksi",
  "Kebakaran dan ledakan di galangan",
  "Banjir dan cuaca ekstrem",
  "Kesalahan desain & konstruksi",
  "Kerusakan saat sea trial",
  "Third Party Liability (TPL) galangan",
  "Kerusakan akibat kelalaian pekerja",
  "Biaya pembongkaran & perbaikan",
  "Increased Value coverage",
  "Risiko selama peluncuran (launching)",
];

const STAGES = [
  {
    no: "01",
    title: "Keel Laying",
    desc: "Perlindungan dimulai sejak peletakan lunas sebagai fondasi utama konstruksi kapal.",
  },
  {
    no: "02",
    title: "Proses Konstruksi",
    desc: "Seluruh tahap pembangunan rangka, lambung, dek, dan instalasi sistem kapal terlindungi.",
  },
  {
    no: "03",
    title: "Peluncuran (Launching)",
    desc: "Risiko saat kapal pertama kali diturunkan ke air, termasuk risiko capsize dan kerusakan lambung.",
  },
  {
    no: "04",
    title: "Sea Trial & Penyerahan",
    desc: "Perlindungan extended hingga uji coba laut selesai dan kapal diserahkan kepada pemilik.",
  },
];

export default function BuildersRiskPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaInsuranceProduct({
              name: "Builder's Risk Insurance Batam",
              description:
                "Asuransi pembangunan kapal di Batam mencakup perlindungan selama proses konstruksi di galangan dari keel laying hingga sea trial.",
              url: "/asuransi-marine/builders-risk",
              category: "Asuransi Marine",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaBreadcrumb([
              { name: "Beranda", url: "/" },
              { name: "Asuransi Marine", url: "/asuransi-marine" },
              { name: "Builder's Risk Insurance", url: "/asuransi-marine/builders-risk" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d2241 60%, #0e3460 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Asuransi Marine", href: "/asuransi-marine" },
              { label: "Builder's Risk Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Wrench size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Asuransi Marine
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Builder&apos;s Risk Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Pembangunan kapal adalah investasi besar yang penuh risiko. Dari keel laying hingga sea trial, setiap tahap konstruksi kapal Anda di Batam terlindungi dengan Builder's Risk Insurance.
          </p>
          <a
            href={WHATSAPP_URL("Halo Rio, saya butuh Builder's Risk Insurance untuk pembangunan kapal di Batam")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
          >
            Konsultasi Builder&apos;s Risk
          </a>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Periode Pertanggungan"
            title="Perlindungan di Setiap Tahap Pembangunan Kapal"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {STAGES.map((s) => (
              <div key={s.no} className="relative p-6 rounded-2xl border border-gray-100 bg-gray-50">
                <div
                  className="text-3xl font-black mb-3 opacity-20"
                  style={{ color: "#1a4fa0" }}
                >
                  {s.no}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Cakupan Builder's Risk"
            title="Risiko yang Ditanggung Selama Pembangunan Kapal"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl border border-blue-100 bg-white"
              >
                <CheckCircle2
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#1a4fa0" }}
                />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan Seputar Builder's Risk Insurance"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTASection
        title="Amankan Proyek Pembangunan Kapal Anda"
        waMsg="Halo Rio, saya ingin Builder's Risk Insurance untuk pembangunan kapal di Batam"
      />
    </>
  );
}
