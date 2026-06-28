// app/en/blog/how-to-claim-marine-cargo-insurance/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Claim Marine Cargo Insurance the Right Way – Complete Guide",
  description:
    "Step-by-step guide to filing a marine cargo insurance claim in Indonesia: required documents, reporting deadlines, and common mistakes that get claims rejected. Call Rio +62813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.com/en/blog/how-to-claim-marine-cargo-insurance",
    languages: {
      en: "https://asuransibatam.com/en/blog/how-to-claim-marine-cargo-insurance",
      id: "https://asuransibatam.com/blog/cara-klaim-asuransi-marine-cargo",
    },
  },
  openGraph: {
    title: "How to Claim Marine Cargo Insurance the Right Way – Complete Guide",
    description: "Required documents, deadlines, and step-by-step process to get your marine cargo claim paid.",
    url: "https://asuransibatam.com/en/blog/how-to-claim-marine-cargo-insurance",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Claim Marine Cargo Insurance the Right Way – Complete Guide",
  description: "Step-by-step guide to filing a marine cargo insurance claim in Indonesia: required documents, reporting deadlines, and common mistakes that get claims rejected.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  inLanguage: "en",
  author: { "@type": "Person", name: "Rio", jobTitle: "Insurance Consultant", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/en/blog/how-to-claim-marine-cargo-insurance" },
};

export default function HowToClaimMarineCargoPage() {
  return (
    <ArticleLayout
      title="How to Claim Marine Cargo Insurance the Right Way – Complete Guide"
      description="Required documents, reporting deadlines, and the correct steps to ensure your marine cargo claim is paid without rejection."
      date="May 7, 2026"
      readTime="8 min read"
      category="Marine"
      breadcrumbs={[{ label: "How to Claim Marine Cargo Insurance", href: "/en/blog/how-to-claim-marine-cargo-insurance" }]}
      schema={schema}
    >
      <h2>Why Marine Cargo Claims Often Fall Apart</h2>
      <p>
        Many importers and exporters in Batam only discover the gaps in their policy when cargo arrives damaged or short-landed. The problem is rarely a reluctant insurer — it is almost always a misstep in the first hours after the incident.
      </p>
      <p>
        Marine cargo claims are uniquely complex: goods pass through multiple carriers and modes of transport, documentation involves shippers, freight forwarders, carriers, and customs authorities, and reporting windows are unforgiving.
      </p>

      <h2>Step 1 – Create a Damage Notation on the Spot</h2>
      <p>
        The moment cargo arrives and something looks wrong — wet cartons, visible dents, short count, or missing packages — your first action is to <strong>note the discrepancy directly on the receiving documents</strong> before signing anything.
      </p>
      <p>
        Do not sign a clean Delivery Order or Gate Pass if the cargo is not in the condition described. Write explicitly: <em>&quot;Received with damage – dents on 3 cartons&quot;</em> or <em>&quot;Short landed – 2 boxes missing.&quot;</em>
      </p>
      <p>
        <strong>What commonly goes wrong:</strong> Warehouse staff sign documents clean under time pressure without physically inspecting the cargo. This single mistake can void an otherwise valid claim.
      </p>

      <h2>Step 2 – Notify the Insurer Within 3×24 Hours</h2>
      <p>
        Most marine cargo policies require a <strong>first notice of loss</strong> within 3 calendar days of receiving the cargo or discovering the damage. Some policies narrow this to 24 hours.
      </p>
      <p>The initial notice does not need to be complete. Communicate the policy number, bill of lading number, a brief description of the damage, and a preliminary loss estimate. File the notice first — gather full documentation after.</p>

      <h2>Step 3 – Compile the Full Claims Document Package</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Document</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Insurance policy / cover note", "Proof of active coverage"],
              ["Bill of Lading / Airway Bill", "Official shipment record"],
              ["Commercial Invoice", "Insured value of the goods"],
              ["Packing List", "Contents per carton or pallet"],
              ["Certificate of Insurance", "Confirms cargo is under the policy"],
              ["Delivery Order / Gate Pass", "Handover document – must carry damage notation"],
              ["Damage photographs", "Taken before goods are moved"],
            ].map(([doc, purpose], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{doc}</td>
                <td className="px-4 py-3 text-[#64748b] border-b border-[#e2e8f0]">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Additional documents depend on the claim type: an independent marine survey report for wet or damaged cargo, a short-landing report from the port authority for short-landed cargo, or customs dispute documents for detained cargo.</p>

      <h2>Step 4 – The Loss Adjuster Survey</h2>
      <p>
        After your notice is filed, the insurer will appoint an <strong>independent surveyor / loss adjuster</strong> to assess the damage objectively. Do not move, repair, or dispose of damaged cargo before the survey is complete. Separate damaged from undamaged units, and provide the surveyor with the full routing history from port of loading to warehouse.
      </p>
      <p>The output is a <strong>Survey Report</strong> that forms the basis of the settlement calculation.</p>

      <h2>Step 5 – Settlement Calculation and Payment</h2>
      <p>Three common valuation bases: <strong>Agreed Value</strong> (fixed at policy inception), <strong>Market Value</strong> (at the time and place of loss), or <strong>Invoice Value + margin</strong> (typically +10% to cover ancillary costs).</p>
      <p>
        Know your <strong>deductible</strong> before filing — virtually all marine cargo policies carry one. Filing a claim below the deductible threshold creates a claims record without a payout.
      </p>

      <h2>Common Reasons Marine Cargo Claims Are Rejected</h2>
      <ol>
        <li>No damage notation on delivery documents</li>
        <li>Late notification — first notice filed after the policy deadline</li>
        <li>Cargo altered before the survey (wet goods dried or sold before the loss adjuster visited)</li>
        <li>Policy does not cover the transport mode used</li>
        <li>Inadequate packaging — explicitly excluded in most policies</li>
        <li>Under-insurance — payout reduced proportionally under the Average Clause</li>
      </ol>

      <h2>Pre-Shipment Habits That Make Claims Easier</h2>
      <ul>
        <li>Photograph and video cargo condition before loading into the container</li>
        <li>Confirm the policy is active before goods depart</li>
        <li>Choose the right coverage terms: ICC (A) covers all risks; ICC (B) and (C) are named-perils</li>
        <li>Keep one folder per shipment: B/L, invoice, packing list, certificate of insurance</li>
        <li>Insure at the correct value — under-declaring to save on premium will cost more at claim time</li>
      </ul>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="font-display font-bold text-lg text-[#c9a84c] mb-2">Need Help Filing a Claim or Reviewing Your Policy?</h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Marine cargo claims become significantly more complicated when multiple modes of transport are involved or when goods have transited through several ports. As a Batam-based insurance consultant with direct experience on the Batam–Singapore–Jakarta corridor, I can assist from the first notice through to settlement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20a%20marine%20cargo%20claim"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors">
            WhatsApp Consultation
          </a>
          <Link href="/en/marine-insurance/marine-cargo"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Marine Cargo Insurance
          </Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Related Articles</p>
        <div className="flex flex-col gap-2">
          <Link href="/en/blog/marine-hull-vs-cargo-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Marine Hull vs Cargo Insurance: Key Differences</Link>
          <Link href="/en/blog/batam-singapore-shipping-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Batam–Singapore Cargo Shipping Insurance</Link>
          <Link href="/en/marine-insurance/marine-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Marine Cargo Insurance Batam</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/marine-cargo-insurance-premium-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Premium Batam</a></li>
              <li><a href="/en/blog/batam-export-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam Export Cargo Insurance</a></li>
              <li><a href="/en/blog/machinery-heavy-equipment-shipping-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Machinery & Heavy Equipment Shipping Insurance</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
