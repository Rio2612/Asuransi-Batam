// app/en/motorcycle-premium-calculator/page.tsx
import KalkulatorMotor from "@/components/KalkulatorMotor";

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://asuransibatam.com/en" },
    { "@type": "ListItem", position: 2, name: "Motorcycle Premium Calculator", item: "https://asuransibatam.com/en/motorcycle-premium-calculator" },
  ],
};

export default function MotorcyclePremiumCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <KalkulatorMotor lang="en" />
    </>
  );
}
