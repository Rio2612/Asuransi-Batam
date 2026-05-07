// app/en/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insurance Education Blog – Tips, Guides & Batam Insurance Info",
  description:
    "General insurance education articles. Claims guides, product comparisons, tips for choosing insurance, and the latest insurance information in Batam.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/en/blog",
    languages: {
      id: "https://asuransibatam.biz.id/blog",
      en: "https://asuransibatam.biz.id/en/blog",
    },
  },
};

type Article = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
};

const articles: Article[] = [
  // ── Vehicle ─────────────────────────────────────────────────────────────────
  {
    title: "How to File a Car Insurance Claim in Batam Correctly and Quickly",
    slug: "how-to-claim-car-insurance-batam",
    date: "April 30, 2026",
    category: "Vehicle",
    excerpt:
      "A complete step-by-step guide on how to file a car insurance claim in Batam, the documents required, and tips to get your claim approved faster.",
    readTime: "7 min",
  },
  // ── Heavy Equipment ─────────────────────────────────────────────────────────
  {
    title: "Excavator and Bulldozer Insurance in Batam",
    slug: "excavator-and-bulldozer-insurance-batam",
    date: "May 6, 2026",
    category: "Heavy Equipment",
    excerpt:
      "A complete guide to excavator and bulldozer insurance – types of coverage, premium rates, and how to choose the right policy for your heavy equipment.",
    readTime: "8 min",
  },
  {
    title: "Heavy Equipment Insurance for Construction Projects",
    slug: "heavy-equipment-insurance-construction-projects",
    date: "May 6, 2026",
    category: "Heavy Equipment",
    excerpt:
      "Why must heavy equipment on construction sites be insured? Discover the types of coverage, risks covered, and how to file claims efficiently.",
    readTime: "7 min",
  },
  {
    title: "Mining Heavy Equipment Insurance",
    slug: "mining-heavy-equipment-insurance",
    date: "May 6, 2026",
    category: "Heavy Equipment",
    excerpt:
      "Specialized insurance for mining heavy equipment: operational risks in tough terrain, available protection, and tips for choosing a policy that meets regulations.",
    readTime: "8 min",
  },
  // ── Property ────────────────────────────────────────────────────────────────
  {
    title: "Commercial Property Insurance in Batam",
    slug: "commercial-property-insurance-batam",
    date: "May 6, 2026",
    category: "Property",
    excerpt:
      "A guide to choosing commercial property insurance in Batam – shophouses, warehouses, hotels, and office buildings. OJK rates, coverage types, and claims.",
    readTime: "9 min",
  },
  {
    title: "How to File a Home Fire Insurance Claim",
    slug: "how-to-claim-home-fire-insurance",
    date: "May 6, 2026",
    category: "Property",
    excerpt:
      "Step-by-step guide to filing a home fire insurance claim: required documents, reporting deadlines, and tips to prevent your claim from being rejected.",
    readTime: "6 min",
  },
  // ── Marine ──────────────────────────────────────────────────────────────────
  {
    title: "How to File a Marine Cargo Insurance Claim",
    slug: "how-to-claim-marine-cargo-insurance",
    date: "May 7, 2026",
    category: "Marine",
    excerpt:
      "A complete guide to marine cargo insurance claims – damage survey documents, reporting procedures, and how to speed up claim payments.",
    readTime: "7 min",
  },
  {
    title: "Marine Hull vs Marine Cargo Insurance: What's the Difference?",
    slug: "marine-hull-vs-cargo-insurance",
    date: "May 7, 2026",
    category: "Marine",
    excerpt:
      "What's the difference between Marine Hull and Marine Cargo insurance? Learn the coverage, who needs it, and how both policies work together.",
    readTime: "6 min",
  },
  {
    title: "Batam–Singapore Shipping Insurance",
    slug: "batam-singapore-shipping-insurance",
    date: "May 7, 2026",
    category: "Marine",
    excerpt:
      "A guide to cargo insurance for the Batam–Singapore shipping route: import-export regulations, key risks, and how to get the right policy.",
    readTime: "8 min",
  },
  {
    title: "Builder's Risk Insurance for Shipyards in Batam",
    slug: "builders-risk-shipyard-insurance-batam",
    date: "May 7, 2026",
    category: "Marine",
    excerpt:
      "Builder's Risk insurance for shipyards: protection during construction, risks covered, and policy requirements in Batam's shipbuilding industry.",
    readTime: "8 min",
  },
];

const categoryColors: Record<string, string> = {
  Vehicle: "bg-blue-100 text-blue-800",
  "Heavy Equipment": "bg-yellow-100 text-yellow-800",
  Property: "bg-green-100 text-green-800",
  Liability: "bg-orange-100 text-orange-800",
  Marine: "bg-cyan-100 text-cyan-800",
};

const categories = ["Vehicle", "Heavy Equipment", "Property", "Marine"];

export default function BlogPageEN() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">
            Blog & Education
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Insurance Education Articles
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Reliable guides, tips, and information about general insurance to protect your assets
            in Batam.
          </p>
        </div>
      </section>

      {/* ── Articles by category ── */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {categories.map((cat) => {
            const catArticles = articles.filter((a) => a.category === cat);
            if (!catArticles.length) return null;
            return (
              <div key={cat}>
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      categoryColors[cat] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {cat}
                  </span>
                  <div className="flex-1 h-px bg-[#e2e8f0]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catArticles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/en/blog/${a.slug}`}
                      className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-xl transition-all card-hover"
                    >
                      <div className="h-3 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0]" />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                              categoryColors[a.category] ?? "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {a.category}
                          </span>
                          <span className="text-[#64748b] text-xs">{a.readTime} read</span>
                        </div>
                        <h2 className="font-display font-bold text-base text-[#0a1628] mb-2 group-hover:text-[#1a4fa0] transition-colors leading-tight">
                          {a.title}
                        </h2>
                        <p className="text-[#64748b] text-sm leading-relaxed mb-4">{a.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#64748b] text-xs">{a.date}</span>
                          <span className="text-[#1a4fa0] text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">
                            Read →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
