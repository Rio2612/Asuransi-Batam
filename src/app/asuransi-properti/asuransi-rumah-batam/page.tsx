import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = {
  title: "Asuransi Rumah Batam – Lindungi Rumah & Isi Rumah Anda",
  description: "Asuransi rumah tinggal di Batam. Perlindungan dari kebakaran, banjir, pencurian, dan bencana alam. Premi terjangkau, proses mudah. Hubungi 0813-1556-592.",
  alternates: { canonical: "https://asuransibatam.id/asuransi-properti/asuransi-rumah-batam" },
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
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio Mardiansyah", telephone: "+628131556592" },
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
    />
  );
}
