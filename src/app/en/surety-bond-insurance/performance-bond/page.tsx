// app/en/surety-bond-insurance/performance-bond/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performance Bond Batam – Contract Execution Guarantee",
  description:
    "Performance bond services in Batam for construction contractors, EPC companies, and suppliers. Guarantee your project is completed on time and on spec. Fast issuance, free consultation with Rio.",
  keywords: [
    "performance bond batam",
    "contract execution guarantee batam",
    "construction performance bond batam",
    "surety bond performance bond batam",
    "project completion guarantee batam",
  ],
  alternates: {
    canonical: "https://asuransibatam.com/en/surety-bond-insurance/performance-bond",
    languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/performance-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/performance-bond",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Performance Bond Batam – Contract Execution Guarantee",
  description:
    "Complete guide to performance bonds in Batam: definition, who needs one, value, validity, required documents, and the claims process.",
  author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "General Insurance Consultant" },
  publisher: { "@type": "Organization", name: "Asuransi Batam", url: "https://asuransibatam.com" },
  mainEntityOfPage: "https://asuransibatam.com/en/surety-bond-insurance/performance-bond",
};

export default function PerformanceBondENPage() {
  return (
    <ArticleLayout
      title="Performance Bond Batam: Guaranteeing Contract Execution"
      description="A complete guide to performance bonds in Batam — what they cover, who is required to submit one, how much they cost, required documents, and how the claims process works for construction and procurement projects."
      date="2025"
      category="Surety Bond"
      readTime="7 min"
      breadcrumbs={[
        { label: "Surety Bond Insurance", href: "/en/surety-bond-insurance" },
        { label: "Performance Bond", href: "/en/surety-bond-insurance/performance-bond" },
      ]}
      schema={schema}
    >
      <p>
        Once a contract is signed, the project owner needs certainty that the contractor will
        deliver the work as agreed — on time, on budget, and to specification. This is precisely
        the purpose of a <strong>Performance Bond</strong>, the most critical surety bond in the
        project execution phase.
      </p>
      <p>
        Performance bonds are among the most commonly required documents for contractors
        operating in Batam, whether for government, SOE, or privately funded projects. They are
        typically submitted immediately after the{" "}
        <Link href="/en/surety-bond-insurance">Bid Bond</Link> phase is complete and
        the contract has been formally signed.
      </p>

      <h2>What Is a Performance Bond?</h2>
      <p>
        A performance bond is a type of{" "}
        <Link href="/en/surety-bond-insurance">surety bond</Link> that guarantees to the project
        owner (<em>obligee</em>) that the contractor (<em>principal</em>) will:
      </p>
      <ul>
        <li>Complete all work within the agreed scope of contract</li>
        <li>Meet quality standards and technical specifications as required</li>
        <li>Finish the project within the stipulated timeframe</li>
        <li>
          Submit a{" "}
          <Link href="/en/surety-bond-insurance/maintenance-bond">Maintenance Bond</Link> upon
          project completion, if required by the contract
        </li>
      </ul>
      <p>
        If the contractor defaults — by abandoning the project, delivering substandard work, or
        exceeding the agreed timeline without valid justification — the project owner can claim
        the performance bond as financial compensation.
      </p>

      <h2>Who Is Required to Submit a Performance Bond in Batam?</h2>
      <ul>
        <li>
          <strong>Construction contractors</strong> working on buildings, industrial facilities,
          or infrastructure in Batam
        </li>
        <li>
          <strong>EPC contractors</strong> (Engineering, Procurement & Construction) for factory,
          refinery, or large installation projects in industrial estates
        </li>
        <li>
          <strong>Procurement suppliers</strong> delivering high-value goods or equipment to SOEs
          or government agencies
        </li>
        <li>
          <strong>IT and service contractors</strong> engaged in long-term projects with
          measurable delivery milestones
        </li>
        <li>
          <strong>Subcontractors</strong> in back-to-back arrangements with the main contractor
        </li>
      </ul>

      <h2>How Much Is a Performance Bond?</h2>
      <p>
        Under Indonesian government procurement regulations, performance bond values are
        typically set at <strong>5% of the contract value</strong>. For private contracts in
        Batam, the percentage may range between 5% and 10% depending on project risk profile
        and the parties' agreement.
      </p>
      <p>
        Example: For a construction contract worth IDR 50 billion, the required performance bond
        is approximately <strong>IDR 2.5 billion</strong>.
      </p>

      <h2>Performance Bond Validity Period</h2>
      <p>
        A performance bond is valid from the contract signing date until the completion of all
        works and formal handover (BAST). Validity typically mirrors the project duration plus a
        30-day buffer. If the project timeline is extended through an addendum, the performance
        bond must be extended simultaneously to avoid a coverage gap.
      </p>

      <h2>Required Documents for a Performance Bond Application</h2>
      <ul>
        <li>Company deed of establishment and all amendments</li>
        <li>NIB (Business Registration Number) and SIUJK (for construction contractors)</li>
        <li>Company NPWP (Tax Registration Number)</li>
        <li>Financial statements for the last 2 years (audited preferred)</li>
        <li>Signed contract or Work Order (SPK) from the project owner</li>
        <li>
          Copy of the <Link href="/en/surety-bond-insurance">Bid Bond</Link> previously
          issued (if applicable)
        </li>
        <li>List of similar projects completed in the past 3–5 years</li>
        <li>Current year balance sheet and income statement (if available)</li>
      </ul>

      <h2>Performance Bond vs Bid Bond: Key Differences</h2>
      <ul>
        <li>
          A <strong>bid bond</strong> is issued before the tender begins and expires when the
          contract is signed. Its purpose is to prevent the winning bidder from withdrawing.
        </li>
        <li>
          A <strong>performance bond</strong> is issued after the contract is signed and remains
          valid throughout the project execution phase. Its purpose is to ensure project
          completion per contract terms.
        </li>
        <li>
          Performance bonds are generally larger in value than bid bonds, reflecting the full
          contract value rather than the tender estimate.
        </li>
      </ul>

      <h2>How Does the Claims Process Work?</h2>
      <p>
        If a contractor defaults, the project owner may initiate a performance bond claim through
        the following steps:
      </p>
      <ol>
        <li>
          <strong>Written notification</strong> from the project owner to both the surety
          (insurance company) and the contractor, documenting the breach of contract
        </li>
        <li>
          <strong>Investigation</strong> by the surety to verify the validity of the claim and
          assess the extent of loss
        </li>
        <li>
          <strong>Resolution:</strong> the surety either pays financial indemnity or facilitates
          project completion through a replacement contractor
        </li>
      </ol>

      <h2>Other Surety Bonds in Your Project Cycle</h2>
      <ul>
        <li>
          <Link href="/en/surety-bond-insurance">
            Bid Bond – Pre-Tender Guarantee
          </Link>
        </li>
        <li>
          <Link href="/en/surety-bond-insurance/advance-payment-bond">
            Advance Payment Bond – Down Payment Guarantee
          </Link>
        </li>
        <li>
          <Link href="/en/surety-bond-insurance/maintenance-bond">
            Maintenance Bond – Post-Completion Guarantee
          </Link>
        </li>
        <li>
          <Link href="/en/engineering-insurance/contractor-all-risk">
            Contractor All Risk – Physical Loss Insurance for Construction
          </Link>
        </li>
      </ul>

      <h2>Need a Performance Bond in Batam? Contact Rio</h2>
      <p>
        Don't delay submitting your performance bond and risk losing your contract award. Our
        team handles everything from documentation to issuance within 1–3 business days. We
        serve contractors, EPC companies, and suppliers across Batam and the Riau Islands.
      </p>
      <p>
        <strong>WhatsApp:</strong> +62 813-7333-6728 |{" "}
        <strong>Hours:</strong> Mon–Sat, 08:00–17:00 WIB
      </p>
    </ArticleLayout>
  );
}
