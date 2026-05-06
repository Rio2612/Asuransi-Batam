// app/en/car-premium-calculator/page.tsx
import type { Metadata } from "next";
import KalkulatorMobil from "@/components/KalkulatorMobil";

export const metadata: Metadata = {
  title: "Car Insurance Premium Calculator Batam – Check OJK Rates Now, Free",
  description:
    "How much is your car insurance premium in Batam? Calculate instantly using official OJK rates — All Risk from 2.08%, TLO from 0.37%. Instant results, no registration required.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/en/car-premium-calculator",
    languages: {
      id: "https://asuransibatam.biz.id/kalkulator-premi-mobil",
      en: "https://asuransibatam.biz.id/en/car-premium-calculator",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is All Risk car insurance premium in Batam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on OJK rates for Region 1 (Batam & Kepulauan Riau), All Risk premiums range from 2.08% to 3.82% of the vehicle price per year, depending on vehicle value. For a car worth Rp 200 million, the estimated All Risk premium is approximately Rp 4.36 million per year.",
      },
    },
    {
      "@type": "Question",
      name: "How much is TLO car insurance premium in Batam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TLO premiums in Region 1 (Batam) range from 0.37% to 0.63% of the vehicle price per year. More affordable than All Risk since it only covers total loss and theft above 75% of vehicle value.",
      },
    },
    {
      "@type": "Question",
      name: "Do OJK rates apply the same in all cities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. OJK divides Indonesia into 3 rating regions. Batam is in Region 1 along with Sumatra and surrounding areas. Region 2 covers Java, Madura, and Bali — rates differ. This calculator uses Region 1 rates specific to Batam.",
      },
    },
    {
      "@type": "Question",
      name: "Is electric vehicle (EV) insurance more expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OJK mandates that electric vehicles use maximum rates, approximately 10% higher than conventional vehicles. This is because EV component repair costs — especially batteries and electric motors — are significantly more expensive.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate car insurance premium myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The formula is: Premium = Vehicle Price × OJK Rate (%). Rates vary based on vehicle value and insurance type (All Risk or TLO). Use the calculator on this page for automatic and accurate results based on OJK Region 1 Batam rates.",
      },
    },
  ],
};

export default function CarPremiumCalculatorPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">
            Online Calculator
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Car Insurance Premium Calculator
          </h1>
          <p className="text-white/70 text-xl">
            Premium estimates based on official OJK rates. Free, fast, and accurate.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#faf8f3]">
        {/* Reuse the same KalkulatorMobil component — UI is number-based, language-agnostic */}
        <KalkulatorMobil />

        {/* CTA */}
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl border border-[#e2e8f0] text-center">
          <p className="text-[#64748b] text-sm mb-4">
            Want an official quote with competitive pricing? Contact Rio for a policy simulation
            from multiple leading insurance companies.
          </p>
          <a
            href="https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20a%20car%20insurance%20premium%20simulation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            Request Official Simulation
          </a>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto mt-12">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-6 text-center">
            Frequently Asked Questions About Car Insurance Premiums in Batam
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How much is All Risk car insurance premium in Batam?",
                a: "Based on OJK Region 1 rates (Batam & Kepulauan Riau), All Risk premiums range from 2.08% to 3.82% of vehicle price per year. The higher the vehicle value, the lower the percentage rate. A car worth Rp 200 million is charged a rate of 2.67%, meaning a premium of approximately Rp 5.34 million per year.",
              },
              {
                q: "How much is TLO car insurance premium in Batam?",
                a: "TLO premiums in Region 1 range from 0.37% to 0.63% per year — far more affordable than All Risk. TLO only covers vehicle theft and total loss above 75% of unit value. Suitable for vehicles older than 5 years or those wanting basic protection with minimal premiums.",
              },
              {
                q: "Do OJK rates apply the same in all Indonesian cities?",
                a: "No. OJK divides Indonesia into 3 rating regions based on traffic risk levels. Batam is in Region 1 with Sumatra. Region 2 covers Java, Madura, and Bali with different rates. This calculator uses the official Region 1 rates applicable for vehicles registered in Batam and the surrounding Kepulauan Riau area.",
              },
              {
                q: "Are electric vehicle (EV) premiums more expensive?",
                a: "Yes. OJK mandates that electric vehicles use maximum rates, approximately 10% higher than conventional vehicles. This is because EV component repair costs — particularly batteries and electric motors — are far more expensive than conventional engine components. Own Risk for EVs is also set at Rp 500,000 per incident.",
              },
              {
                q: "Does the calculator result include taxes and additional fees?",
                a: "The calculator displays estimated base premiums based on OJK reference rates, excluding stamp duty, policy fees, and additional coverage extensions such as flood or third-party liability. The final premium is determined by the insurance company after underwriting. Contact Rio for an official quote that includes all cost components.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
                <h3 className="font-display font-bold text-[#0a1628] mb-2">{item.q}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
