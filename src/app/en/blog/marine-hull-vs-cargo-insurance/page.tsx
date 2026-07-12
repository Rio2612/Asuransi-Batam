// app/en/blog/marine-hull-vs-cargo-insurance/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Ship,
  Package,
  Gavel,
  Percent,
  Anchor,
  Container,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marine Hull vs Marine Cargo Insurance – What's the Difference?",
  description:
    "Clear explanation of marine hull (vessel) and marine cargo (goods) insurance: who buys each, what they cover, and how they work together. Consult Rio +62813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.com/en/blog/marine-hull-vs-cargo-insurance",
    languages: {
      en: "https://asuransibatam.com/en/blog/marine-hull-vs-cargo-insurance",
      id: "https://asuransibatam.com/blog/perbedaan-marine-hull-vs-cargo",
    },
  },
  openGraph: {
    title: "Marine Hull vs Marine Cargo Insurance – What's the Difference?",
    description: "Vessel insurance vs goods insurance: different objects, different policyholders, different claims.",
    url: "https://asuransibatam.com/en/blog/marine-hull-vs-cargo-insurance",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marine Hull vs Marine Cargo Insurance – What's the Difference?",
  description: "Clear explanation of marine hull (vessel) and marine cargo (goods) insurance: who buys each, what they cover, and how they work together.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  inLanguage: "en",
  author: { "@type": "Person", name: "Rio", jobTitle: "Insurance Practitioner", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/en/blog/marine-hull-vs-cargo-insurance" },
};

export default function MarineHullVsCargoPage() {
  return (
    <ArticleLayout
      title="Marine Hull vs Marine Cargo Insurance – What's the Difference?"
      description="The ship being insured does not mean your cargo is covered. Understand the fundamental difference between these two products before choosing."
      date="May 7, 2026"
      readTime="7 min read"
      category="Marine"
      breadcrumbs={[{ label: "Marine Hull vs Cargo Insurance", href: "/en/blog/marine-hull-vs-cargo-insurance" }]}
      schema={schema}
    >
      <h2>The Costly Misconception: &quot;The Ship Is Insured, So My Cargo Is Safe&quot;</h2>
      <p>
        This is one of the most common and expensive misunderstandings I encounter when advising clients in Batam. Cargo owners frequently assume that because the vessel carrying their goods is insured, their shipment is automatically protected too.
      </p>
      <p>
        It is not. <strong>Marine hull insurance and marine cargo insurance are two entirely separate products</strong> — covering different objects, for different parties, through different claims processes.
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
        <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#0a162820", background: "#0a16280a" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
            <Ship size={24} className="text-white" />
          </div>
          <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1628" }}>Marine Hull Insurance</h3>
          <p className="text-sm text-[#475569] mb-3">
            Protects the <strong className="text-[#0a1628]">physical vessel and its permanently fitted equipment</strong> — the hull structure, machinery, navigation systems, and everything that forms a permanent part of the ship.
          </p>
          <p className="text-sm text-[#475569] mb-1"><strong className="text-[#0a1628]">Who buys it:</strong> ship owners and fleet operators — shipping companies, ferry operators, tug boat owners, patrol vessel operators.</p>
          <p className="text-sm text-[#475569]"><strong className="text-[#0a1628]">Covers:</strong> hull damage from collision, grounding, or severe weather; machinery breakdown (optional); collision liability; total loss.</p>
        </div>
        <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <Package size={24} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1628" }}>Marine Cargo Insurance</h3>
          <p className="text-sm text-[#475569] mb-3">
            Protects <strong className="text-[#0a1628]">the goods being transported</strong>, not the vessel. Follows the goods from the shipper's warehouse to the consignee's warehouse — including terminal time, inside the container, and across transport modes.
          </p>
          <p className="text-sm text-[#475569]"><strong className="text-[#0a1628]">Who buys it:</strong> the cargo owner — shipper, importer, exporter, or trading company. Who bears the risk depends on the agreed Incoterms.</p>
        </div>
      </div>

      <h2>Three Coverage Levels Under Institute Cargo Clauses (ICC)</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Clause</th>
              <th className="text-left px-4 py-3">Coverage Scope</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Best For</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ICC (A)", "All risks — everything not explicitly excluded", "High-value goods, electronics, machinery"],
              ["ICC (B)", "Named perils — fire, collision, sinking, etc.", "Bulk goods, commodities"],
              ["ICC (C)", "Limited perils — major losses and total loss only", "Low-value, low-risk cargo"],
            ].map(([clause, scope, best], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-bold text-[#1a4fa0] border-b border-[#e2e8f0]">{clause}</td>
                <td className="px-4 py-3 text-[#374151] border-b border-[#e2e8f0]">{scope}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Side-by-Side Comparison: Hull vs Cargo</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Aspect</th>
              <th className="text-left px-4 py-3">Marine Hull</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Marine Cargo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Insured object", "The vessel", "The goods"],
              ["Policyholder", "Ship owner", "Cargo owner"],
              ["Follows", "The vessel", "The cargo journey"],
              ["Active during", "Vessel operations", "Goods in transit"],
              ["Valuation basis", "Market value of vessel", "Invoice value + margin"],
              ["Claim filed by", "Ship owner / operator", "Shipper / consignee"],
            ].map(([aspect, hull, cargo], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{aspect}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{hull}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{cargo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>How Both Work Together in a Single Incident</h2>
      <div className="not-prose my-6 p-5 rounded-2xl border-l-4 border-[#c9a84c] bg-[#faf8f3] flex items-start gap-4">
        <Container size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
        <p className="text-sm text-[#374151] m-0">
          Consider a small cargo vessel on the Batam–Jakarta route that catches fire on deck, destroying part of the cargo. The ship owner claims hull and structural damage against their hull policy. Each cargo owner independently claims their damaged goods against their own cargo policy. Both claims run <strong style={{ color: "#0a1628" }}>in parallel and independently</strong> — one does not affect the other. This is why a single incident can generate dozens of separate cargo claims from different cargo owners, while there is only one hull claim from the vessel owner.
        </p>
      </div>

      <h2>Does the Carrier Cover Cargo Damage?</h2>
      <div className="not-prose my-6 p-5 rounded-2xl border flex items-start gap-4" style={{ borderColor: "#0a162820", background: "#0a16280a" }}>
        <Gavel size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#0a1628" }} />
        <p className="text-sm text-[#374151] m-0">
          Under international maritime law — the Hague-Visby Rules — carriers do have limited liability for cargo damage. But there are three practical problems: carrier liability is capped (calculated per package or per kilogram, often far below actual value), pursuing a carrier takes months or years through legal proceedings, and carriers have broad exclusions including acts of God and force majeure. This is why cargo owners should hold their own cargo policy rather than relying solely on carrier responsibility.
        </p>
      </div>

      <h2>Who Should Buy What?</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
          <Anchor size={20} className="mb-2" style={{ color: "#0a1628" }} />
          <p className="font-bold text-sm mb-1" style={{ color: "#0a1628" }}>Buy Marine Hull if you</p>
          <p className="text-sm text-[#475569]">Own or operate a commercial vessel, or run a fleet of tug boats, ferries, or patrol vessels in Batam waters.</p>
        </div>
        <div className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
          <Package size={20} className="mb-2" style={{ color: "#0a1628" }} />
          <p className="font-bold text-sm mb-1" style={{ color: "#0a1628" }}>Buy Marine Cargo if you</p>
          <p className="text-sm text-[#475569]">Import or export goods regularly by sea or air, run a trading company, or distribute large inbound shipments.</p>
        </div>
        <div className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
          <Layers size={20} className="mb-2" style={{ color: "#0a1628" }} />
          <p className="font-bold text-sm mb-1" style={{ color: "#0a1628" }}>Buy both if you</p>
          <p className="text-sm text-[#475569]">Own the vessel and also carry your own cargo on board.</p>
        </div>
      </div>

      <h2>What Does It Cost?</h2>
      <div className="not-prose my-6 p-5 rounded-2xl border flex items-start gap-4" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
        <Percent size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
        <p className="text-sm text-[#374151] m-0">
          Marine cargo premiums typically range from <strong style={{ color: "#0a1628" }}>0.1% to 0.5% of cargo value</strong>, depending
          on the type of goods, route, and coverage clause. Short routes like Batam–Singapore or Batam–Jakarta
          tend to attract lower rates than long-haul international corridors.
        </p>
      </div>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="font-display font-bold text-lg text-[#c9a84c] mb-2">Free Consultation – Find the Right Cover</h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Not sure whether you need hull, cargo, or both? The right answer depends on your role in the supply chain and your Incoterms. I can help you work it out.
        </p>
        <a href="https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20marine%20insurance"
          target="_blank" rel="noopener noreferrer"
          className="inline-block px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors">
          WhatsApp Consultation
        </a>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Related Articles</p>
        <div className="flex flex-col gap-2">
          <Link href="/en/blog/how-to-claim-marine-cargo-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ How to Claim Marine Cargo Insurance</Link>
          <Link href="/en/blog/batam-singapore-shipping-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Batam–Singapore Cargo Shipping Insurance</Link>
          <Link href="/en/marine-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ All Marine Insurance Products</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Products &amp; Services</p>
            <ul className="space-y-2">
              <li><a href="/en/marine-insurance/marine-hull" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull Insurance Batam</a></li>
              <li><a href="/en/marine-insurance/marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Batam</a></li>
              <li><a href="/en/marine-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/marine-cargo-insurance-premium-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Premium Batam</a></li>
              <li><a href="/en/blog/batam-export-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam Export Cargo Insurance</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
