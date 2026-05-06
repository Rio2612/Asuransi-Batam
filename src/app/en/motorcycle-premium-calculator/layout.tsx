// app/en/motorcycle-premium-calculator/layout.tsx
// Metadata must live in a Server Component.
// The page itself is "use client" (interactive calculator), so metadata goes here.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motorcycle Insurance Premium Calculator Batam – Check OJK Rates, Free",
  description:
    "Calculate your motorcycle insurance premium in Batam instantly. OJK Region 1 official rates — All Risk from 1.76%, TLO from 0.47%. Free, no registration required. Contact Rio: +62-813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/en/motorcycle-premium-calculator",
    languages: {
      id: "https://asuransibatam.biz.id/kalkulator-premi-motor",
      en: "https://asuransibatam.biz.id/en/motorcycle-premium-calculator",
    },
  },
};

export default function MotorcycleCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
