// app/en/blog/marine-cargo-insurance-premium-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CheckCircle2, Calculator } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Marine Cargo Insurance Premium in Batam – How It's Calculated | Batam Insurance",
  description:
    "How much does marine cargo insurance cost in Batam? Learn the premium formula, factors that affect your rate, and how to get the best coverage for your budget. Contact Rio!",
  canonical: "/en/blog/marine-cargo-insurance-premium-batam",
  languages: {
    id: "https://asuransibatam.biz.id/blog/premi-asuransi-marine-cargo-batam",
    en: "https://asuransibatam.biz.id/en/blog/marine-cargo-insurance-premium-batam",
  },
});

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Is Marine Cargo Insurance Premium in Batam?",
  description:
    "A complete guide to calculating marine cargo insurance premiums in Batam, covering key rating factors, policy types, and tips for getting the best coverage.",
  url: "https://asuransibatam.biz.id/en/blog/marine-cargo-insurance-premium-batam",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  author: {
    "@type": "Person",
    name: "Rio",
    url: "https://asuransibatam.biz.id/en/about-us",
  },
  publisher: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam",
    url: "https://asuransibatam.biz.id",
  },
};

const FAQS = [
  {
    q: "Is the marine cargo premium calculated per shipment or per year?",
    a: "Both options are available. An open cover policy (annual) suits exporters or distributors making regular shipments — the premium is paid upfront and each shipment is declared to obtain a certificate. A per-voyage policy is better suited for one-off or infrequent shipments.",
  },
  {
    q: "Is there a minimum cargo value to qualify for insurance?",
    a: "There is no formal minimum value requirement. However, for goods worth less than IDR 5 million, the cost of the premium relative to the potential claim amount may make insurance less efficient. For shipments exceeding IDR 50 million, cargo insurance is strongly advisable.",
  },
  {
    q: "How do I determine the correct sum insured?",
    a: "The sum insured is typically calculated as the CIF (Cost + Insurance + Freight) value of the goods, plus 10% as an allowance for anticipated profit. Avoid under-insuring — in the event of a claim, any shortfall will be applied proportionally and the payout will be reduced accordingly.",
  },
  {
    q: "What is a deductible in a cargo policy?",
    a: "A deductible (also called an excess) is the portion of any loss that the insured bears before the insurance pays out. For example, if the deductible is IDR 1 million and the loss is IDR 10 million, the insurer pays IDR 9 million. Choosing a higher deductible will lower your premium.",
  },
  {
    q: "Can I get a lower premium if I have a good claims record?",
    a: "Yes. Policyholders with a low loss ratio (few or no claims) typically receive a discount or no-claim reduction at renewal. This is one of the key advantages of an annual open cover policy over per-voyage arrangements.",
  },
];

const FACTORS = [
  {
    title: "Declared Cargo Value (Sum Insured)",
    desc: "The higher the declared value, the larger the absolute premium — even if the percentage rate remains the same.",
  },
  {
    title: "Commodity Type & Condition",
    desc: "Fragile goods, liquids, or chemicals carry a higher rate than steel or construction materials due to their elevated risk profile.",
  },
  {
    title: "Route & Distance",
    desc: "Domestic routes like Batam–Jakarta are rated differently from international routes such as Batam–Singapore or Batam–Port Klang.",
  },
  {
    title: "ICC Clause Selected",
    desc: "ICC (A) carries the highest premium due to its broadest coverage. ICC (C) is the most affordable but offers the most limited protection.",
  },
  {
    title: "Packaging & Loading Method",
    desc: "FCL (Full Container Load) shipments attract lower rates than LCL or break-bulk, as the damage risk is better contained.",
  },
  {
    title: "Claims History",
    desc: "Insureds with minimal past claims receive better rates at renewal — a key advantage of maintaining an annual open cover relationship.",
  },
];

export default function MarineCargoPremiENPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaBreadcrumb([
              { name: "Home", url: "/en" },
              { name: "Blog", url: "/en/blog" },
              { name: "Marine Cargo Premium Batam", url: "/en/blog/marine-cargo-insurance-premium-batam" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d2241 60%, #0e3460 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/en" },
              { label: "Blog", href: "/en/blog" },
              { label: "Cargo Premium Guide" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Calculator size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Premium Guide
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            How Much Is Marine Cargo<br />Insurance in Batam?
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Marine cargo insurance does not have a single fixed rate — the premium depends on
            multiple factors specific to your shipment. Learn how the calculation works, what
            drives the cost, and how to get the best value for your coverage.
          </p>
          <a
            href={WHATSAPP_URL("Hello Rio, I would like a premium estimate for marine cargo insurance from Batam")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
          >
            Get a Free Premium Estimate
          </a>
        </div>
      </section>

      {/* Premium Formula */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Premium Formula"
            title="How Marine Cargo Premium Is Calculated"
          />
          <div className="mt-10 space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <p className="text-sm font-bold text-blue-800 mb-2 uppercase tracking-wide">Basic Formula</p>
              <p className="text-2xl font-bold text-blue-900 font-mono">
                Premium = Sum Insured × Rate (%)
              </p>
              <p className="text-sm text-blue-700 mt-3">
                Sum Insured = CIF value of goods + 10% (anticipated profit allowance)
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-sm font-bold text-gray-700 mb-4">Example Calculation:</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Cargo value (CIF)</span>
                  <span className="font-semibold">IDR 500,000,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Sum Insured (CIF + 10%)</span>
                  <span className="font-semibold">IDR 550,000,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Rate – ICC (B), domestic route</span>
                  <span className="font-semibold">~0.15% – 0.25%</span>
                </div>
                <div className="flex justify-between pt-2 text-blue-800 font-bold">
                  <span>Estimated Premium</span>
                  <span>IDR 825,000 – IDR 1,375,000</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                *Rates are for illustration only. Actual rates are determined by the underwriter based on commodity type, route, and ICC clause selected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Factors */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Rating Factors"
            title="What Drives Your Cargo Premium"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {FACTORS.map((f, i) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-3"
                  style={{ background: "#1a4fa0" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: "#0a1628" }}>
                  {f.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Type Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Per-Voyage vs Open Cover"
            title="Choose the Right Policy Type for Your Business"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              {
                title: "Per-Voyage Policy",
                color: "#4a7fb5",
                points: [
                  "For single or infrequent shipments",
                  "Premium paid per individual shipment",
                  "No periodic reporting required",
                  "Ideal for SMEs or first-time shippers",
                  "Flexible — no annual commitment",
                ],
              },
              {
                title: "Open Cover Policy (Annual)",
                color: "#0a1628",
                points: [
                  "For shippers with regular monthly volumes",
                  "One policy covers all shipments for the year",
                  "Each voyage declared; certificate issued per shipment",
                  "More cost-efficient per shipment at scale",
                  "Potential no-claim discount at renewal",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 border"
                style={{ borderColor: item.color + "40", background: item.color + "08" }}
              >
                <div
                  className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{ background: item.color }}
                >
                  {item.title}
                </div>
                <ul className="space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Marine Cargo Premium – Common Questions"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTASection
        title="Get Your Marine Cargo Premium Calculated"
        waMsg="Hello Rio, I would like a premium estimate for marine cargo insurance from Batam"
      />
    </>
  );
                }
