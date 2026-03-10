import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO, schemaInsuranceProduct, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Truck, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Dump Truck Batam – Perlindungan Kendaraan Niaga Berat",
  description:
    "Asuransi dump truck di Batam untuk kendaraan niaga berat. All risk maupun TLO tersedia. Perlindungan komprehensif, klaim cepat, premi kompetitif. Hubungi Rio Mardiansyah!",
  canonical: "/asuransi-kendaraan/asuransi-dump-truck",
});

const FAQS = [
  {
    q: "Apakah dump truck bisa diasuransikan All Risk?",
    a: "Ya, dump truck bisa diasuransikan dengan polis Comprehensive (All Risk) maupun TLO (Total Loss Only). Polis All Risk memberikan perlindungan lebih luas termasuk kerusakan partial.",
  },
  {
    q: "Berapa premi asuransi dump truck?",
    a: "Premi asuransi dump truck dihitung berdasarkan tahun pembuatan, nilai kendaraan, wilayah operasional, dan jenis polis. Untuk polis TLO umumnya 0,8%–1,5% dari nilai kendaraan per tahun.",
  },
  {
    q: "Apakah dump truck proyek bisa diasuransikan?",
    a: "Ya. Dump truck yang digunakan di area proyek, pertambangan, atau jalan umum semuanya bisa diasuransikan. Kami berpengalaman menangani fleet kendaraan niaga berat di Batam dan sekitarnya.",
  },
  {
    q: "Apa bedanya asuransi kendaraan niaga dan kendaraan pribadi?",
    a: "Kendaraan niaga seperti dump truck memiliki risiko penggunaan lebih tinggi sehingga premi cenderung lebih tinggi dibanding kendaraan pribadi. Polis kendaraan niaga juga mencakup tanggung jawab pengangkutan barang.",
  },
];

const BENEFITS = [
  "Kerusakan tabrakan & terbalik",
  "Kebakaran & sambaran petir",
  "Kehilangan akibat pencurian",
  "Tanggung jawab pihak ketiga (TPL)",
  "Banjir & bencana alam (opsional)",
  "Kecelakaan pengemudi & penumpang",
  "Biaya derek & pengangkutan",
  "Penggantian kendaraan sementara",
];

export default function AsuransiDumpTruckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaInsuranceProduct({
        name: "Asuransi Dump Truck Batam",
        description: "Asuransi kendaraan niaga berat dump truck di Batam dengan perlindungan All Risk dan TLO.",
        url: "/asuransi-kendaraan/asuransi-dump-truck",
        category: "Asuransi Kendaraan",
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Beranda", url: "/" },
        { name: "Asuransi Kendaraan", url: "/asuransi-kendaraan" },
        { name: "Asuransi Dump Truck", url: "/asuransi-kendaraan/asuransi-dump-truck" },
      ])) }} />

      <section className="pt-32 pb-16 px-4" style={{ background: "linear-gradient(135deg, #0a1628 0%, #132040 60%, #1e3a6e 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Beranda", href: "/" },
            { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
            { label: "Asuransi Dump Truck" },
          ]} />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
              <Truck size={24} style={{ color: "#0a1628" }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "#c9a84c20", color: "#f0d080" }}>Asuransi Kendaraan</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
            Asuransi Dump Truck Batam
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Lindungi armada dump truck Anda dari risiko kerusakan, kecelakaan, dan kehilangan. Polis All Risk dan TLO tersedia dengan premi kompetitif.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_URL("Halo Rio, saya butuh asuransi dump truck di Batam")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
              Minta Penawaran
            </a>
            <Link href="/kalkulator-premi/mobil" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-white border border-white/30 rounded-xl hover:border-gold hover:text-gold transition-all">
              Estimasi Premi
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Manfaat" title="Perlindungan Asuransi Dump Truck" />
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

      {/* Perbandingan TLO vs All Risk */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Perbandingan Polis" title="All Risk vs TLO untuk Dump Truck" center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "TLO (Total Loss Only)",
                price: "Mulai 0,8% p.a.",
                desc: "Cocok untuk dump truck tua atau armada besar",
                features: ["Kehilangan akibat pencurian", "Kerusakan total (>75%)", "Harga premi lebih murah", "Untuk kendaraan >5 tahun"],
                best: false,
              },
              {
                name: "Comprehensive (All Risk)",
                price: "Mulai 1,5% p.a.",
                desc: "Perlindungan maksimal untuk dump truck baru/berharga",
                features: ["Semua perlindungan TLO", "Kerusakan partial", "Goresan & benturan ringan", "Untuk kendaraan ≤10 tahun"],
                best: true,
              },
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl p-6 border-2 ${p.best ? "border-gold" : "border-gray-200 bg-white"}`}
                style={p.best ? { background: "linear-gradient(135deg, #0a1628, #1a4fa0)", borderColor: "#c9a84c" } : {}}>
                <h3 className={`font-bold text-xl mb-1 ${p.best ? "text-white" : "text-navy"}`} style={{ fontFamily: "Syne, sans-serif" }}>{p.name}</h3>
                <p className="text-sm mb-1" style={{ color: p.best ? "#c9a84c" : "#1a4fa0" }}>{p.price}</p>
                <p className={`text-xs mb-5 ${p.best ? "text-gray-300" : "text-gray-500"}`}>{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${p.best ? "text-gray-200" : "text-gray-600"}`}>
                      <CheckCircle2 size={14} style={{ color: p.best ? "#c9a84c" : "#1a4fa0" }} /> {f}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL(`Halo Rio, saya tertarik dengan polis ${p.name} untuk dump truck`)} target="_blank" rel="noopener noreferrer"
                  className={`block text-center py-2.5 rounded-xl text-sm font-semibold ${p.best ? "text-navy" : "text-white"}`}
                  style={{ background: p.best ? "linear-gradient(135deg, #c9a84c, #f0d080)" : "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
                  Konsultasi Polis Ini
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Baca juga: <Link href="/blog/perbedaan-all-risk-dan-tlo" className="text-blue-600 hover:underline">Perbedaan All Risk dan TLO – Mana yang Lebih Baik?</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Pertanyaan Seputar Asuransi Dump Truck" center />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTASection
        title="Lindungi Armada Dump Truck Anda"
        subtitle="Konsultasi gratis dengan Rio Mardiansyah untuk mendapatkan penawaran asuransi dump truck terbaik di Batam."
        waMsg="Halo Rio, saya ingin konsultasi asuransi dump truck di Batam"
      />
    </>
  );
}
