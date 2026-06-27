// app/en/blog/how-to-claim-home-fire-insurance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "How to Claim Home Fire Insurance – Documents, Procedure & Fatal Mistakes to Avoid",
  description: "Claiming home fire insurance is not as straightforward as it seems. Learn the required documents, the correct procedure, and the common mistakes that cause claims to be rejected — a complete guide for homeowners in Batam.",
  alternates: {
    canonical: "https://asuransibatam.com/en/blog/how-to-claim-home-fire-insurance",
    languages: {
      id: "https://asuransibatam.com/blog/cara-klaim-asuransi-kebakaran-rumah",
      en: "https://asuransibatam.com/en/blog/how-to-claim-home-fire-insurance",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Claim Home Fire Insurance: Documents, Procedure & Fatal Mistakes to Avoid",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

export default function ArticleHomeFireInsuranceClaimPage() {
  return (
    <ArticleLayout
      title="How to Claim Home Fire Insurance: Documents, Procedure & Fatal Mistakes to Avoid"
      description="The fire has happened. The house is damaged. The policy is active. But the claim is rejected — this happens more often than you'd think. Here's the complete guide to getting your claim approved."
      date="6 May 2026"
      category="Property"
      readTime="10 min read"
      breadcrumbs={[{ label: "How to Claim Home Fire Insurance", href: "/en/blog/how-to-claim-home-fire-insurance" }]}
      schema={schema}
    >
      <p>
        Nobody wants to experience a house fire. But it's precisely in those moments that
        we truly find out whether the insurance we've been paying premiums on actually works.
        Many homeowners in Batam end up disappointed not because their insurer acted in bad
        faith, but because the claims procedure wasn't followed correctly from the very
        first minute after the incident. This guide covers in detail what you must do —
        and what you must not do — to ensure your home fire insurance claim is processed
        and paid without unnecessary obstacles.
      </p>

      <h2>First, Understand: What Does Home Fire Insurance Actually Cover?</h2>
      <p>
        Before discussing the procedure, it's important to understand that not all
        fire-related damage is automatically covered by insurance. Standard property
        policies in Indonesia use the <strong>FLEXAS</strong> format as the base:
      </p>
      <ul>
        <li><strong>F</strong>ire</li>
        <li><strong>L</strong>ightning</li>
        <li><strong>E</strong>xplosion</li>
        <li><strong>A</strong>ircraft impact</li>
        <li><strong>S</strong>moke damage</li>
      </ul>
      <p>
        Extensions such as flood, storm, riot, and earthquake are only covered if they
        are explicitly stated in your policy. Before submitting a claim, open your policy
        and check the coverage summary — make sure the cause of the fire or damage you
        experienced is actually included in what was agreed.
      </p>

      <h2>What You Must Do in the First 24 Hours</h2>
      <p>
        The hours immediately following a fire are the most critical for a successful claim.
        Panic is completely understandable, but certain actions taken (or not taken) during
        this phase can determine whether your claim succeeds or fails.
      </p>

      <h3>1. Prioritise Safety, Then Documentation</h3>
      <p>
        Make sure all occupants are safe and the fire is completely extinguished before
        approaching the site. Once it is safe, begin documenting the damage thoroughly:
      </p>
      <ul>
        <li>Photos and video of the building from outside — front, sides, and rear views</li>
        <li>Photos of the interior of every affected room</li>
        <li>Photos of damaged or destroyed items — furniture, electronics, documents</li>
        <li>Photos of the point of origin of the fire if it can still be visually identified</li>
        <li>Document conditions before anything is touched or cleared away</li>
      </ul>
      <p>
        This documentation is the primary evidence that the insurance surveyor will
        evaluate. The more complete and detailed it is, the more smoothly the
        verification process will run.
      </p>

      <h3>2. File a Report with the Fire Brigade or Police</h3>
      <p>
        A letter from the Fire Department (Damkar) is a mandatory document in almost all
        fire insurance claims. It contains the date of the incident, the estimated cause,
        and an initial damage assessment from the fire service. In Batam, reports can be
        filed with the Batam City Fire Department, which has offices across multiple
        districts.
      </p>
      <p>
        For fires causing major losses, damage to neighbouring properties, or where there
        is any suspicion of arson, a police report must also be filed. Request a copy of
        the Surat Tanda Penerimaan Laporan (STPL) as official proof.
      </p>

      <h3>3. Contact Your Insurance Agent or Company</h3>
      <p>
        Don't wait for the situation to calm down or until you feel ready. Reporting must
        be done <strong>within 3 × 24 hours</strong> of the incident being known — this
        is the deadline set by almost every property insurance policy. Missing this window
        can be used as a technical ground for rejection, even when the damage is clearly
        covered by the policy.
      </p>
      <p>
        Provide an honest and straightforward account of what happened. Do not add details
        that didn't occur and do not omit relevant facts — consistency between your initial
        report and the surveyor's findings is scrutinised closely throughout the verification
        process.
      </p>

      <h2>Documents Required for the Claim Submission</h2>
      <p>
        The formal claims process cannot begin until all of these documents have been
        submitted to the insurer. Prepare them from the outset to avoid back-and-forth
        that slows down the payout:
      </p>

      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Document</th>
              <th className="p-4 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Insurance claim form", "Completed and signed by the policyholder; available from your agent or insurer"],
              ["Original or copy of the insurance policy", "Coverage summary page and relevant extension clauses"],
              ["Fire Department letter", "Contains date, location, estimated cause, and scale of the fire"],
              ["Police report (if required)", "For major losses or suspected arson"],
              ["Policyholder's ID card", "Identity of the policy owner submitting the claim"],
              ["Complete photos of the damage", "Visual documentation of building and home contents post-fire"],
              ["Inventory list of damaged/destroyed items", "With estimated value for each item; the more detailed the better"],
              ["Proof of property ownership", "Land certificate (SHM/SHGB) or tenancy agreement if not owner-occupied"],
              ["Purchase evidence for high-value items", "Receipts or invoices for electronics, furniture, or expensive household items"],
            ].map(([a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-[#64748b]">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What Happens After Documents Are Submitted</h2>

      <h3>Survey by a Loss Adjuster</h3>
      <p>
        For fire claims above a certain threshold (typically above Rp 50 million), the
        insurance company will appoint an independent <em>Loss Adjuster</em> — not an
        insurer employee — to objectively assess the damage. The Loss Adjuster will visit
        the site, inspect the building's condition, cross-reference your documentation
        with the actual condition on the ground, and produce a loss assessment report
        that forms the basis for the claim payout.
      </p>
      <p>
        During this process, <strong>do not begin any repairs</strong> before the survey
        is complete and written approval has been given by the insurer. Repairs carried
        out before the survey are considered to have altered the evidence and can result
        in the claim being rejected or the payout being reduced.
      </p>

      <h3>Claim Value Negotiation</h3>
      <p>
        If there is a difference between the loss amount you are claiming and the amount
        assessed by the Loss Adjuster, this is the negotiation stage. You have the right
        to raise an objection with additional supporting evidence — purchase receipts,
        photos showing the condition before the fire, or an opinion from your own
        contractor regarding estimated repair costs. This negotiation is a normal part
        of the claims process and does not mean there is a problem with your claim.
      </p>

      <h2>Fatal Mistakes That Frequently Lead to Rejected Claims</h2>
      <ul>
        <li>
          <strong>Waiting too long to report:</strong> Many homeowners wait for the
          situation to settle or for family members to gather before contacting the
          insurer. If three days have passed, the risk of technical rejection is very high.
        </li>
        <li>
          <strong>Clearing the site before the survey:</strong> The instinct to start
          cleaning up the rubble is understandable, but this is one of the biggest causes
          of claim complications. Wait for written approval before beginning any cleanup.
        </li>
        <li>
          <strong>Underinsurance — sum insured too low:</strong> If a house worth Rp 800
          million is insured for only Rp 400 million, only 50% of the actual loss will
          be approved — in line with the underinsurance ratio. This is not insurer
          misconduct; it is a contractual consequence already stated in the policy.
        </li>
        <li>
          <strong>Cause of fire not covered:</strong> Fires from short circuits are
          generally covered. But fires demonstrably caused by something excluded by the
          policy — for example, storing flammable materials in excess of declared amounts
          — can result in rejection.
        </li>
        <li>
          <strong>Inconsistent information:</strong> If you tell the fire brigade the
          fire started in the kitchen, but later tell the surveyor it started in the
          garage, this inconsistency will be flagged as a red mark in the verification
          process.
        </li>
      </ul>

      <h2>How Long Does a Home Fire Insurance Claim Take to Settle?</h2>
      <p>
        The duration varies considerably depending on the complexity of the damage and
        the completeness of the documents. As a general guide:
      </p>
      <ul>
        <li><strong>Small claims (under Rp 50 million):</strong> 7–14 working days after complete documentation is received</li>
        <li><strong>Mid-range claims (Rp 50 million – Rp 500 million):</strong> 14–30 working days, depending on the Loss Adjuster's schedule</li>
        <li><strong>Large claims (above Rp 500 million):</strong> 30–60 working days or more, as the negotiation process is longer</li>
      </ul>
      <p>
        Complete documentation from the outset is the single most significant factor in
        speeding up the process. Every request for an additional document from the insurer
        can add 5–10 working days to the total processing time.
      </p>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <h3 className="font-display font-bold text-[#0a1628] mb-3">
          Need Help with a Claim or Property Insurance Consultation in Batam?
        </h3>
        <p className="text-[#64748b] mb-4">
          Rio assists with property insurance claims from start to finish — from document
          preparation and coordination with the Loss Adjuster to negotiating the claim
          value if there's a valuation discrepancy. Free consultation, no extra charges
          beyond your policy premium.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/en/property-insurance/home-insurance-batam"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            View Home Insurance Products
          </Link>
          <Link
            href="/en/contact"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
