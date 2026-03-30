import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
export const metadata: Metadata = {
  title: "Asuransi Alat Berat Batam – Excavator, Bulldozer, Wheel Loader",
  description: "Asuransi alat berat di Batam. Perlindungan excavator, bulldozer, wheel loader, dan alat konstruksi dari kerusakan dan kecelakaan. Hubungi 0813-1556-592.",
  alternates: { canonical: "https://asuransibatam.biz.id/asuransi-machinery/asuransi-alat-berat" },
};
const benefits = [
  { icon: "🚜", title: "Equipment All Risk", desc: "Perlindungan menyeluruh alat berat dari semua risiko fisik." },
  { icon: "💥", title: "Kecelakaan Operasional", desc: "Kerusakan saat operasi, termasuk tergelincir, terguling, dan benturan." },
  { icon: "🌊", title: "Bencana Alam", desc: "Kebakaran, banjir, gempa bumi, dan bencana alam lainnya." },
  { icon: "⚙️", title: "Kerusakan Mesin", desc: "Breakdown mesin akibat kegagalan mekanis yang tiba-tiba." },
  { icon: "🏗️", title: "Selama Transit", desc: "Perlindungan saat alat berat dipindahkan menggunakan flatbed atau trailer." },
  { icon: "👷", title: "Tanggung Jawab Pihak Ketiga", desc: "Biaya kerusakan properti atau cedera pihak ketiga akibat alat berat Anda." },
];
const faqs = [
  { q: "Alat berat apa saja yang bisa diasuransikan?", a: "Excavator, bulldozer, wheel loader, motor grader, vibro roller, backhoe loader, dan semua jenis alat konstruksi berat." },
  { q: "Apakah alat berat sewaan bisa diasuransikan?", a: "Ya, baik pemilik maupun penyewa bisa mengasuransikan alat berat. Koordinasi perlu dilakukan agar tidak terjadi double insurance." },
  { q: "Bagaimana cara menentukan nilai pertanggungan alat berat?", a: "Berdasarkan nilai pasar wajar (market value) atau nilai buku, tergantung kesepakatan. Survei alat berat biasanya diperlukan." },
];
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Asuransi Alat Berat Batam", provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio Mardiansyah", telephone: "+628131556592" } };
export default function AsuransiAlatBeratPage() {
  return (
    <ProductPageLayout title="Asuransi Alat Berat Batam" subtitle="Equipment All Risk – Perlindungan Total"
      description="Alat berat adalah investasi besar yang menopang proyek konstruksi dan pertambangan. Lindungi aset Anda dari kerusakan, kecelakaan, dan risiko bencana alam."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[{ label: "Asuransi Machinery", href: "/asuransi-machinery" }, { label: "Asuransi Alat Berat", href: "/asuransi-machinery/asuransi-alat-berat" }]}
      schema={schema} />
  );
}
