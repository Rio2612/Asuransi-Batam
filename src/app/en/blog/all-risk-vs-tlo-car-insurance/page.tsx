// src/app/en/blog/all-risk-vs-tlo-car-insurance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "All Risk vs TLO Car Insurance – Which One Is Right for You?",
  description:
    "A clear explanation of the difference between Comprehensive (All Risk) and Total Loss Only (TLO) car insurance in Batam — what each covers, their pros and cons, and how to choose the right one for your vehicle.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/en/blog/all-risk-vs-tlo-car-insurance",
    languages: {
      id: "https://asuransibatam.biz.id/blog/perbedaan-all-risk-dan-tlo",
      en: "https://asuransibatam.biz.id/en/blog/all-risk-vs-tlo-car-insurance",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "All Risk vs TLO Car Insurance: Which One Is Right for You?",
  datePublished: "2025-03-05",
  dateModified: "2025-03-05",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Batam Insurance" },
  inLanguage: "en",
};

export default function ArticleAllRiskTLOENPage() {
  return (
    <ArticleLayout
      title="All Risk vs TLO Car Insurance: Which One Is Right for You?"
      description="A practical guide to choosing between Comprehensive and Total Loss Only cover — based on your vehicle's value, age, and how you use it."
      date="5 March 2025"
      category="Vehicle"
      readTime="6 min read"
      breadcrumbs={[{ label: "All Risk vs TLO Car Insurance", href: "/en/blog/all-risk-vs-tlo-car-insurance" }]}
      schema={schema}
    >
      <p>
        When purchasing car insurance in Indonesia, the question that comes up most often is:{" "}
        <em>"Should I go with All Risk or TLO?"</em> Both have their place — and choosing the
        wrong one can mean either paying for cover you don't need or being underprotected when
        it matters most. This article walks you through both options clearly so you can make
        the right call for your situation.
      </p>

      <h2>What Is All Risk (Comprehensive) Insurance?</h2>
      <p>
        All Risk — also called Comprehensive cover — is a type of car insurance that covers
        <strong> all physical damage</strong> to your vehicle, whether minor, moderate, or
        severe. True to its name, almost every risk is covered unless it is explicitly excluded
        in the policy wording.
      </p>
      <p>
        <strong>What All Risk covers:</strong>
      </p>
      <ul>
        <li>Minor damage (scratches, dents, cracked windscreen)</li>
        <li>Moderate damage from collisions</li>
        <li>Total loss from a serious accident</li>
        <li>Theft (vehicle stolen)</li>
        <li>Vehicle fire</li>
      </ul>

      <h2>What Is TLO (Total Loss Only) Insurance?</h2>
      <p>
        TLO — Total Loss Only — covers your vehicle only if it is{" "}
        <strong>written off (damage exceeding 75% of the vehicle's value) or stolen</strong>.
        Minor and moderate damage is not covered under this type of policy.
      </p>
      <p>
        <strong>What TLO covers:</strong>
      </p>
      <ul>
        <li>Theft (vehicle stolen)</li>
        <li>Damage where the repair cost exceeds 75% of the vehicle's market value</li>
      </ul>
      <p>
        <strong>What TLO does NOT cover:</strong>
      </p>
      <ul>
        <li>Scratches and minor dents</li>
        <li>Glass damage</li>
        <li>Accident damage where the repair cost is below 75% of the vehicle's value</li>
      </ul>

      <h2>Side-by-Side Comparison: All Risk vs TLO</h2>
      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Aspect</th>
              <th className="p-4 text-center">All Risk</th>
              <th className="p-4 text-center">TLO</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Minor damage", "✅ Covered", "❌ Not covered"],
              ["Total loss", "✅ Covered", "✅ Covered"],
              ["Theft", "✅ Covered", "✅ Covered"],
              ["Premium rate", "Higher (1.5–3.5%)", "Lower (0.2–0.7%)"],
              ["Best suited for", "New or high-value cars", "Older or lower-value cars"],
            ].map(([a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-center text-[#64748b]">{b}</td>
                <td className="p-4 text-center text-[#64748b]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>When Should You Choose All Risk?</h2>
      <ul>
        <li>Your vehicle is new or valued above Rp 200 million</li>
        <li>
          Your vehicle is under a financing agreement (KKB) — most banks in Indonesia
          require All Risk cover throughout the loan period
        </li>
        <li>
          You drive frequently in busy urban areas where minor accidents and parking
          damage are a realistic daily risk
        </li>
        <li>You want complete peace of mind regardless of the type of damage</li>
      </ul>

      <h2>When Should You Choose TLO?</h2>
      <ul>
        <li>Your vehicle is more than 7–10 years old</li>
        <li>The vehicle's current market value is relatively low (below Rp 150 million)</li>
        <li>You have a limited insurance budget and want to keep premiums minimal</li>
        <li>The vehicle is used occasionally or only for specific purposes</li>
      </ul>

      <h2>Recommendation by Vehicle Value</h2>
      <div className="p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] my-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#c9a84c] font-bold mt-0.5">→</span>
            <div>
              <strong>Above Rp 300 million:</strong> All Risk is strongly recommended
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#c9a84c] font-bold mt-0.5">→</span>
            <div>
              <strong>Rp 150–300 million:</strong> All Risk is recommended; TLO if budget is a constraint
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#c9a84c] font-bold mt-0.5">→</span>
            <div>
              <strong>Below Rp 150 million:</strong> TLO is generally sufficient
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#c9a84c] font-bold mt-0.5">→</span>
            <div>
              <strong>Under financing (KKB):</strong> All Risk is mandatory for the duration of the loan
            </div>
          </li>
        </ul>
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <h3 className="font-display font-bold text-[#0a1628] mb-3">
          Calculate Your Car Insurance Premium Now
        </h3>
        <p className="text-[#64748b] mb-4">
          Use our premium calculator to get an instant estimate for both All Risk and TLO cover,
          based on the latest OJK official rate tables for Batam.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/en/car-insurance-calculator"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm hover:bg-[#132040] transition-colors"
          >
            Car Insurance Calculator
          </Link>
          <Link
            href="/en/vehicle-insurance/car-insurance-batam"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm hover:bg-[#0a1628]/5 transition-colors"
          >
            Full Car Insurance Details
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}

