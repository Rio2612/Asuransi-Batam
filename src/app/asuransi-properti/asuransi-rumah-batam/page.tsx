import type { Metadata } from "next";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = {
  title: "Asuransi Rumah Batam – Lindungi Rumah & Isi Rumah Anda",
  description: "Asuransi rumah tinggal di Batam. Perlindungan dari kebakaran, banjir, pencurian, dan bencana alam. Premi terjangkau, proses mudah. Hubungi 0813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.com/asuransi-properti/asuransi-rumah-batam",
    languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-rumah-batam",
      en: "https://asuransibatam.com/en/property-insurance/home-insurance-batam",
    },
  },
};

const benefits = [
  { icon: "🏠", title: "Struktur Bangunan", desc: "Dinding, atap, lantai, dan pondasi rumah dilindungi dari kebakaran, petir, dan bencana." },
  { icon: "📺", title: "Isi Rumah & Elektronik", desc: "TV, kulkas, AC, laptop, dan perabot berharga lainnya." },
  { icon: "💎", title: "Perhiasan & Berharga", desc: "Perhiasan dan barang berharga hingga batas tertentu dengan endorsement khusus." },
  { icon: "🌊", title: "Banjir & Genangan", desc: "Kerusakan akibat banjir bandang dan genangan air (dengan perluasan)." },
  { icon: "🔐", title: "Pencurian dengan Paksaan", desc: "Kehilangan akibat pencurian yang disertai kekerasan atau pembobolan." },
  { icon: "🏗️", title: "Biaya Sewa Sementara", desc: "Kompensasi biaya sewa tempat tinggal sementara selama rumah diperbaiki." },
];

const faqs = [
  { q: "Apakah KPR mewajibkan asuransi rumah?", a: "Ya, hampir semua bank penyedia KPR mewajibkan asuransi kebakaran/properti minimal selama tenor kredit berlaku." },
  { q: "Berapa premi asuransi rumah di Batam?", a: "Premi biasanya 0.1% - 0.3% dari nilai bangunan per tahun tergantung risiko dan cakupan perlindungan." },
  { q: "Apa bedanya asuransi rumah dan asuransi isi rumah?", a: "Asuransi rumah melindungi struktur bangunan, sedangkan asuransi isi rumah melindungi perabot dan barang di dalamnya. Keduanya bisa digabungkan." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Rumah Batam",
  description: "Asuransi rumah tinggal di Batam untuk perlindungan bangunan dan isi rumah",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function AsuransiRumahBatamPage() {
  return (
    <ProductPageLayout
      title="Asuransi Rumah Batam"
      subtitle="Proteksi Hunian Anda"
      description="Rumah adalah investasi terbesar keluarga Anda. Lindungi dengan asuransi properti yang tepat – dari kebakaran, banjir, hingga pencurian. Premi mulai dari ratusan ribu per tahun."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Asuransi Rumah Batam", href: "/asuransi-properti/asuransi-rumah-batam" },
      ]}
      schema={schema}
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Lengkapi Proteksi Keluarga Anda</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/blog/cara-klaim-asuransi-kebakaran-rumah" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Cara Klaim Asuransi Kebakaran Rumah</h3>
            <p className="text-[#64748b] text-sm">Panduan langkah demi langkah agar proses klaim lancar.</p>
          </Link>
          <Link href="/asuransi-personal-accident/pa-individu-keluarga" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">PA Individu & Keluarga</h3>
            <p className="text-[#64748b] text-sm">Lindungi juga diri dan anggota keluarga dari risiko kecelakaan.</p>
          </Link>
          <Link href="/asuransi-kendaraan/asuransi-mobil-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Mobil Batam</h3>
            <p className="text-[#64748b] text-sm">Lengkapi proteksi aset rumah dengan kendaraan Anda.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
