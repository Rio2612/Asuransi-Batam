// app/en/machinery-insurance/heavy-equipment-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Heavy Equipment Insurance Batam – Excavator, Bulldozer, Wheel Loader",
  description: "Heavy equipment insurance in Batam. Protection for excavators, bulldozers, wheel loaders, and construction equipment from damage and accidents. Contact +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/machinery-insurance/heavy-equipment-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-machinery/asuransi-alat-berat",
      en: "https://asuransibatam.com/en/machinery-insurance/heavy-equipment-insurance",
    },
});

const benefits = [
  { icon: "🚜", title: "Equipment All Risk", desc: "Comprehensive protection for heavy equipment against all physical risks." },
  { icon: "💥", title: "Operational Accidents", desc: "Damage during operation, including skidding, overturning, and collisions." },
  { icon: "🌊", title: "Natural Disasters", desc: "Fire, floods, earthquakes, and other natural disasters." },
  { icon: "⚙️", title: "Machinery Breakdown", desc: "Sudden mechanical failure causing unexpected machine breakdown." },
  { icon: "🏗️", title: "During Transit", desc: "Protection while heavy equipment is being moved by flatbed truck or trailer." },
  { icon: "👷", title: "Third-Party Liability", desc: "Property damage or third-party injury costs caused by your heavy equipment." },
];

const faqs = [
  { q: "What types of heavy equipment can be insured?", a: "Excavators, bulldozers, wheel loaders, motor graders, vibro rollers, backhoe loaders, and all types of heavy construction equipment." },
  { q: "Can rented heavy equipment be insured?", a: "Yes, both owners and renters can insure heavy equipment. Coordination is needed to prevent double insurance." },
  { q: "How is the sum insured determined for heavy equipment?", a: "Based on fair market value or book value, depending on agreement. A heavy equipment survey is usually required." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Heavy Equipment Insurance Batam",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
};

export default function HeavyEquipmentInsurancePage() {
  return (
    <ProductPageLayout
      title="Heavy Equipment Insurance Batam"
      subtitle="Equipment All Risk – Total Protection"
      description="Heavy equipment is a major investment supporting your construction and mining projects. Protect your assets from damage, accidents, and natural disaster risks."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[
        { label: "Machinery Insurance", href: "/en/machinery-insurance" },
        { label: "Heavy Equipment Insurance", href: "/en/machinery-insurance/heavy-equipment-insurance" },
      ]}
      schema={schema}
    />
  );
}
