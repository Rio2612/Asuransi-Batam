// app/en/machinery-insurance/crane-insurance/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = {
  title: "Crane Insurance Batam – Comprehensive Lifting Equipment Protection",
  description:
    "Crane insurance in Batam for all types of cranes and lifting equipment. Protection from operational damage, collapse, and third-party liability. Contact Rio: +62-813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/en/machinery-insurance/crane-insurance",
    languages: {
      id: "https://asuransibatam.biz.id/asuransi-machinery/asuransi-crane",
      en: "https://asuransibatam.biz.id/en/machinery-insurance/crane-insurance",
    },
  },
};

const benefits = [
  { icon: "🏗️", title: "Structural Collapse", desc: "Coverage for crane structural failure or collapse during lifting operations." },
  { icon: "💥", title: "Operational Accidents", desc: "Damage from swinging loads, improper operation, or operator error." },
  { icon: "⚙️", title: "Mechanical & Electrical Failure", desc: "Sudden breakdown of mechanical components, hoisting motors, and electrical systems." },
  { icon: "🌊", title: "Natural Disasters", desc: "Damage from strong winds, storms, floods, and earthquakes while deployed on-site." },
  { icon: "👷", title: "Third-Party Liability", desc: "Compensation for property damage or bodily injury to third parties caused by crane operations." },
  { icon: "🚛", title: "Transit Protection", desc: "Coverage while the crane is being transported, disassembled, or re-assembled on a new site." },
];

const faqs = [
  { q: "What types of cranes can be insured?", a: "Tower cranes, mobile cranes, crawler cranes, overhead cranes, gantry cranes, and all types of lifting equipment used in construction or industry." },
  { q: "Is a crane operator certification required for insurance?", a: "Yes, most insurers require operators to hold valid certified competency (SIO) to validate claims. We will advise on the documentation requirements during policy setup." },
  { q: "Are cranes on shipyards or offshore platforms covered?", a: "Yes, but marine or offshore risks require specific clauses. Contact us to tailor coverage for marine or shipyard operations in Batam." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Crane Insurance Batam",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
};

export default function CraneInsurancePage() {
  return (
    <ProductPageLayout
      title="Crane Insurance Batam"
      subtitle="Lifting Equipment – Comprehensive Coverage"
      description="Cranes are critical assets in construction and industrial projects in Batam. One operational failure can halt an entire project and expose you to massive liabilities. The right crane insurance protects your investment and third-party risks."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[
        { label: "Machinery Insurance", href: "/en/machinery-insurance" },
        { label: "Crane Insurance", href: "/en/machinery-insurance/crane-insurance" },
      ]}
      schema={schema}
    />
  );
}
