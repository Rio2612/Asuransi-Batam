// app/asuransi-marine/marine-cargo/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Package, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Marine Cargo Insurance Batam – Asuransi Pengiriman Barang Laut | Asuransi Batam",
  description:
    "Marine Cargo Insurance di Batam untuk perlindungan barang kiriman via laut, udara, dan darat. Ekspor, impor, dan pengiriman domestik. Konsultasi dengan Rio!",
  canonical: "/asuransi-marine/marine-cargo",
  languages: {
    id: "https://asuransibatam.biz.id/asuransi-marine/marine-cargo",
    en: "https://asuransibatam.biz.id/en/marine-insurance/marine-cargo",
  },
});

// ─── Schema: Service — tidak mensyaratkan image/price seperti Product ───
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marine Cargo Insurance Batam",
  description:
    "Asuransi pengiriman barang laut di Batam mencakup perlindungan muatan selama pengiriman ekspor, impor, dan domestik.",
  url: "https://asuransibatam.biz.id/asuransi-marine/marine-cargo",
  serviceType: "Asuransi Marine – Marine Cargo",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressCountry: "ID",
  },
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam",
    telephone: "081373336728",
    url: "https://asuransibatam.biz.id",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produk Asuransi Marine",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marine Cargo Insurance",
        },
      },
    ],
  },
}; = [
  {
    q: "Apa itu Marine Cargo Insurance?",
    a: "Marine Cargo Insurance adalah asuransi yang melindungi barang atau muatan selama proses pengiriman dari satu tempat ke tempat lain — baik melalui jalur laut, udara, maupun darat. Perlindungan mencakup risiko kerusakan, kehilangan, maupun pencurian selama perjalanan.",
  },
  {
    q: "Siapa yang sebaiknya memiliki Marine Cargo Insurance?",
    a: "Semua pihak yang terlibat dalam pengiriman barang bernilai tinggi: eksportir, importir, perusahaan dagang (trader), distributor, perusahaan manufaktur, dan freight forwarder. Asuransi ini melindungi nilai barang yang sedang dalam perjalanan.",
  },
  {
    q: "Apa perbedaan klausul ICC A, B, dan C?",
    a: "ICC (A) memberikan perlindungan paling luas — all risks kecuali yang dikecualikan secara eksplisit. ICC (B) menanggung risiko tertentu seperti kebakaran, kandas, dan banjir. ICC (C) menanggung risiko paling terbatas, hanya risiko utama seperti kebakaran dan kapal kandas. Pemilihan klausul tergantung jenis barang dan kebutuhan.",
  },
  {
    q: "Apakah pengiriman antar pulau di Indonesia bisa diasuransikan?",
    a: "Ya. Marine Cargo Insurance juga menanggung pengiriman domestik antar pulau, termasuk rute Batam–Jakarta, Batam–Surabaya, dan rute-rute dalam negeri lainnya.",
  },
  {
    q: "Apakah klaim bisa diajukan jika barang rusak saat bongkar muat?",
    a: "Ya, selama barang masih dalam periode pertanggungan dan kerusakan terjadi akibat risiko yang dijamin polis, klaim bongkar muat dapat diajukan. Polis biasanya mencakup dari gudang pengirim hingga gudang penerima (warehouse-to-warehouse).",
  },
];

const BENEFITS = [
  "Kerusakan akibat kebakaran & ledakan",
  "Kandas, tabrakan, dan karam kapal pengangkut",
  "Banjir air laut masuk ke kapal",
  "Pencurian dan perompakan",
  "Kerusakan akibat cuaca ekstrem",
  "Kontaminasi dan kerusakan basah",
  "Kerusakan saat bongkar muat",
  "General Average contribution",
  "Biaya survei dan salvage",
  "Perlindungan warehouse-to-warehouse",
];

export default function MarineCargoPage() {
  return (
    <>
      {/* Schema: Service — tidak mensyaratkan image/price seperti Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
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
              { name: "Marine Cargo Insurance", url: "/asuransi-marine/marine-cargo" },
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
              { label: "Marine Cargo Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Package size={24} style={{ color: "#0a1628" }} />
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
            Marine Cargo Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Barang kiriman Anda terlindungi dari gudang pengirim hingga tangan penerima. Ekspor, impor, maupun pengiriman domestik — semua risiko selama perjalanan laut tertanggung.
          </p>
          <a
            href={WHATSAPP_URL("Halo Rio, saya butuh Marine Cargo Insurance untuk pengiriman barang dari Batam")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
          >
            Konsultasi Marine Cargo
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Cakupan Marine Cargo"
            title="Risiko yang Ditanggung Marine Cargo Insurance"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50"
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

      {/* Klausul ICC */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Klausul Cargo" title="Pilihan Tingkat Perlindungan (ICC Clauses)" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                label: "ICC (C)",
                title: "Perlindungan Dasar",
                color: "#4a7fb5",
                desc: "Menanggung risiko utama: kebakaran, ledakan, kapal kandas/karam, dan tabrakan. Cocok untuk barang dengan nilai lebih rendah atau risiko terbatas.",
              },
              {
                label: "ICC (B)",
                title: "Perlindungan Menengah",
                color: "#1a4fa0",
                desc: "Mencakup semua risiko ICC (C) ditambah gempa bumi, gunung meletus, petir, banjir air laut, kerusakan akibat cuaca, dan pencurian sebagian.",
              },
              {
                label: "ICC (A)",
                title: "Perlindungan Terluas",
                color: "#0a1628",
                desc: "All risks — menanggung semua risiko kehilangan atau kerusakan yang tidak secara spesifik dikecualikan. Direkomendasikan untuk barang bernilai tinggi.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100"
              >
                <div
                  className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background: item.color }}
                >
                  {item.label}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#0a1628" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
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
            title="Pertanyaan Seputar Marine Cargo Insurance"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTASection
        title="Lindungi Barang Kiriman Anda"
        waMsg="Halo Rio, saya ingin Marine Cargo Insurance untuk pengiriman dari Batam"
      />
    </>
  );
          }
