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

const articles = [
  {
    title: "How to File a Car Insurance Claim Correctly and Quickly",
    slug: "how-to-claim-car-insurance",
    date: "March 10, 2025",
    category: "Vehicle",
    excerpt:
      "A complete step-by-step guide on how to file a car insurance claim, the documents required, and tips to get your claim approved faster.",
    readTime: "7 min",
  },
  {
    title: "All Risk vs TLO Insurance: Which is Better?",
    slug: "all-risk-vs-tlo-insurance",
    date: "March 5, 2025",
    category: "Vehicle",
    excerpt:
      "A complete explanation of the differences between All Risk (Comprehensive) and TLO (Total Loss Only) with recommendations based on vehicle value and age.",
    readTime: "6 min",
  },
  {
    title: "Car Insurance in Batam: Complete Guide 2025",
    slug: "car-insurance-batam",
    date: "March 1, 2025",
    category: "Vehicle",
    excerpt:
      "Everything you need to know about car insurance in Batam – OJK rates, best companies, claims process, and tips for choosing a policy.",
    readTime: "10 min",
  },
  {
    title: "The Importance of B3 Hazardous Waste Insurance for Industry in Batam",
    slug: "b3-hazardous-waste-insurance-importance",
    date: "February 20, 2025",
    category: "Liability",
    excerpt:
      "Why B3 waste insurance is not optional but a legal obligation for industry in Batam. Regulations, penalties, and how to get the right policy.",
    readTime: "8 min",
  },
];

const categoryColors: Record<string, string> = {
  Vehicle: "bg-blue-100 text-blue-800",
  Liability: "bg-orange-100 text-orange-800",
  Property: "bg-green-100 text-green-800",
};

export default function BlogPageEN() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Blog & Education</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Insurance Education Articles</h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Reliable guides, tips, and information about general insurance to protect your assets in Batam.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((a) => (
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
                        categoryColors[a.category] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {a.category}
                    </span>
                    <span className="text-[#64748b] text-xs">{a.readTime} read</span>
                  </div>
                  <h2 className="font-display font-bold text-lg text-[#0a1628] mb-2 group-hover:text-[#1a4fa0] transition-colors leading-tight">
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
      </section>
    </div>
  );
}
