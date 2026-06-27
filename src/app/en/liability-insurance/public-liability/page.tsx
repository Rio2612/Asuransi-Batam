// app/en/liability-insurance/public-liability/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = {
  title: "Public Liability Insurance Batam – Third-Party & Public Liability Coverage",
  description:
    "Public Liability Insurance in Batam for restaurants, hotels, shopping centres, and general businesses. Protection from visitor injury claims. +62-813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.com/en/liability-insurance/public-liability",
    languages: {
      id: "https://asuransibatam.com/asuransi-liability/public-liability",
      en: "https://asuransibatam.com/en/liability-insurance/public-liability",
    },
  },
};

const benefits = [
  { icon: "👤", title: "Visitor / Guest Injury", desc: "Medical costs and compensation if a visitor is injured in your business premises." },
  { icon: "🏗️", title: "Third-Party Property Damage", desc: "Compensation for damage to others' property caused by your business operations." },
  { icon: "⚖️", title: "Legal Defence Costs", desc: "Lawyer fees and court proceedings costs, which can be extremely expensive." },
  { icon: "🏥", title: "Medical Expenses", desc: "Hospital costs for third parties that become your business's responsibility." },
  { icon: "💼", title: "Product Liability", desc: "Claims for damage or injury caused by products you sell." },
  { icon: "🌐", title: "Advertising Liability", desc: "Protection from claims arising from advertising content that harms others." },
];

const faqs = [
  { q: "What businesses need Public Liability Insurance?", a: "Hotels, restaurants, cafés, shopping centres, contractors, event organisers, gyms, clinics, and all businesses serving the public or operating in public areas." },
  { q: "What sum insured is recommended?", a: "A minimum of Rp 1 billion per incident for small-to-medium businesses. Larger businesses or those handling major events need a higher limit." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Public Liability Insurance Batam",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
};

export default function PublicLiabilityENPage() {
  return (
    <ProductPageLayout
      title="Public Liability Insurance Batam"
      subtitle="Protect Your Business from Public Claims"
      description="A single visitor accident at your business premises can lead to a legal claim worth hundreds of millions of rupiah. Public Liability Insurance protects your business from this risk."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[
        { label: "Liability Insurance", href: "/en/liability-insurance" },
        { label: "Public Liability", href: "/en/liability-insurance/public-liability" },
      ]}
      schema={schema}
    />
  );
}
