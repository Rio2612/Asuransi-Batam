// app/en/blog/how-to-get-builders-risk-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = generateSEO({
  title: "How to Get Builders Risk Insurance Batam",
  description:
    "A complete guide to choosing Builders Risk insurance for construction projects and shipyards in Batam: a real claim case study, common mistakes, and how to set the right sum insured. Consult Rio +62 813-7333-6728.",
  canonical:
    "https://asuransibatam.com/en/blog/how-to-get-builders-risk-insurance-batam",
  languages: {
    id: "https://asuransibatam.com/blog/cara-mendapatkan-asuransi-builders-risk-batam",
    en: "https://asuransibatam.com/en/blog/how-to-get-builders-risk-insurance-batam",
  },
});

// Article schema (E-E-A-T: authorship & publisher signal)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get the Right Builders Risk Insurance in Batam",
  description:
    "A complete guide to choosing Builders Risk insurance for construction projects and shipyards in Batam, featuring a real claim case study.",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: "Rio",
    jobTitle: "Insurance Practitioner",
    telephone: "+6281373336728",
  },
  publisher: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    url: "https://asuransibatam.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/en/blog/how-to-get-builders-risk-insurance-batam",
  },
};

// FAQ schema (required — kept separate from Article schema)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Builders Risk insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Builders Risk insurance (also known as Contractors' All Risks or Erection All Risks) is a policy that covers physical loss or damage to a project under construction — including buildings, installations, or vessels being built or repaired at a shipyard — caused by risks such as fire, water damage, workplace accidents, or natural disasters during the construction period.",
      },
    },
    {
      "@type": "Question",
      name: "Do shipyards in Batam need Builders Risk insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. During construction or repair, the asset being worked on at a shipyard is typically very high in value, yet it cannot be insured under a standard marine hull policy because the vessel is not yet complete or seaworthy. Builders Risk fills this protection gap from the start of the project until handover.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Builders Risk claim usually take to settle?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "It depends on the complexity of the loss and how complete the documentation is, but generally the process — from loss adjuster survey to claim decision — takes anywhere from a few weeks to 2-3 months for larger losses that require in-depth investigation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most common mistake when buying a Builders Risk policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The most common mistake is setting the sum insured too low (under-insurance), failing to include subcontractors as covered parties, and not checking exclusions related to design defects, which are a frequent source of claim disputes.",
      },
    },
    {
      "@type": "Question",
      name: "Does Builders Risk cover subcontractor work?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "It depends on the policy wording. Many projects involve multiple subcontractors handling different scopes of work, and the policy needs to explicitly state that every party working on the project is covered as a joint insured or additional insured, so there is no gap in liability when a claim occurs.",
      },
    },
  ],
};

export default function HowToGetBuildersRiskPage() {
  return (
    <ArticleLayout
      title="How to Get the Right Builders Risk Insurance in Batam"
      description="A real claim case study from a Batam shipyard, and the steps to choosing a Builders Risk policy that truly protects your project."
      date="June 23, 2026"
      readTime="10 min read"
      category="Marine"
      breadcrumbs={[
        { label: "Marine Insurance", href: "/en/marine-insurance" },
        { label: "Builders Risk", href: "/en/marine-insurance/builders-risk" },
        {
          label: "How to Get Builders Risk Insurance",
          href: "/en/blog/how-to-get-builders-risk-insurance-batam",
        },
      ]}
      schema={articleSchema}
    >
      {/* ArticleLayout only accepts a single schema object (Article).
          The FAQ schema is injected directly here so the FAQ rich result still appears. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f] mb-3">
        Understanding the Risk
      </p>
      <h2>Why Builders Risk Insurance Gets Overlooked, Despite the High Stakes</h2>
      <p>
        Once a construction project or a ship repair job kicks off, attention is almost entirely absorbed by schedules, budgets, and technical execution. Insurance often gets treated as administrative paperwork that can be sorted out &quot;later&quot; — until an incident happens mid-project and everyone realizes an asset worth billions of rupiah was never properly protected.
      </p>
      <p>
        <Link href="/en/marine-insurance/builders-risk" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">Builders Risk insurance</Link> (sometimes also written as Contractors&apos; All Risks or Erection All Risks) was built specifically to close that gap: it protects a project while it is being built, not an asset that is already finished. For projects like building construction, plant installation, and especially ship construction or repair at a shipyard, the construction period itself is exactly when the project is most exposed to major loss.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f] whitespace-nowrap">
          Field Experience
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Case Study: A Builders Risk Claim at a Batam Shipyard</h2>
      <p>
        One case I handled directly involved a shipyard in Batam carrying out a repair and structural modification project on a commercial vessel. The work involved welding, replacing hull plating, and reinstalling part of the mechanical system in the dock area.
      </p>
      <p>
        Midway through the job, a small fire broke out, originating from welding activity near combustible material nearby. The yard&apos;s team managed to extinguish it quickly, but the fire still caused damage to part of the structure under work, as well as some equipment on site.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-[#e2e8f0] bg-white p-3 shadow-[0_20px_48px_-12px_rgba(10,22,40,0.15)]">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/images/potoartikel/klaimbuilderisk.webp"
            alt="Documentation of a Builders Risk insurance claim being handled at a shipyard in Batam"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="flex items-center gap-2 px-2 pt-4 pb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c]" />
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#0a1628]">
            Field Documentation
          </span>
          <span className="text-xs text-[#475569]">
            — Handling a Builders Risk claim at a shipyard in Batam
          </span>
        </figcaption>
      </figure>

      <p>Here is how the claim was handled in that case:</p>
      <div className="not-prose my-7 overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-5 py-4 font-display tracking-wide">Stage</th>
              <th className="text-left px-5 py-4 font-display tracking-wide">What Happened</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Initial notification",
                "The shipyard reported the incident to the insurer within 24 hours, before cleaning up the site",
              ],
              [
                "Site preservation",
                "The affected area was isolated; no repairs were made before the survey",
              ],
              [
                "Loss adjuster survey",
                "An independent surveyor assessed the extent of damage to the structure and equipment, and estimated repair costs",
              ],
              [
                "Sum insured & wording verification",
                "Checked whether the insured value matched project progress, and whether the cause of the fire fell within the policy's coverage",
              ],
              [
                "Negotiation & loss adjustment",
                "The claim value was adjusted based on the survey findings, less the deductible per the policy",
              ],
              [
                "Claim settlement",
                "Funds were released to cover structural repairs and replacement of damaged equipment",
              ],
            ].map(([stage, detail], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}
              >
                <td className="px-5 py-4 font-semibold text-[#0a1628] border-b border-[#e2e8f0]">
                  {stage}
                </td>
                <td className="px-5 py-4 text-[#475569] leading-relaxed border-b border-[#e2e8f0]">
                  {detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="not-prose my-8 rounded-2xl border-l-4 border-[#c9a84c] bg-[#faf8f3] px-6 py-5">
        <p className="text-[#0a1628] leading-relaxed">
          <span className="font-display font-bold">Insight from the field:</span> This claim went through relatively smoothly, and that was no accident. On the advice of an insurance consultant, the shipyard had already set its sum insured to be adjusted periodically against project progress (rather than a fixed value locked in at contract signing), and the policy explicitly listed every subcontractor working in the dock area as a covered party. Those two details are the most common source of disputes in Builders Risk claims that were not properly prepared.
        </p>
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f] whitespace-nowrap">
          Policy Coverage
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">What Is and Isn&apos;t Covered Under a Builders Risk Policy</h2>
      <p>
        Builders Risk is one of the products within the <Link href="/en/marine-insurance" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">marine insurance</Link> line we handle in Batam, with coverage characteristics specific to the construction period. Generally speaking, here is how covered risks and exclusions break down:
      </p>

      <div className="not-prose mt-8 mb-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
          <p className="font-display font-bold text-[#0a1628] mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a1628] text-[#c9a84c] text-xs">
              ✓
            </span>
            Covered
          </p>
          <ul className="space-y-3 text-sm text-[#475569] leading-relaxed">
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Fire, explosion, and lightning strikes at the project site</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Damage caused by workplace accidents or heavy equipment operator error</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Natural disasters: flood, strong winds, earthquake (usually as extended cover)</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Theft of material or equipment installed on site</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Damage occurring during testing and commissioning, per agreed wording</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[#e2e8f0] bg-[#faf8f3] p-6">
          <p className="font-display font-bold text-[#0a1628] mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a1628]/10 text-[#0a1628] text-xs">
              ✕
            </span>
            Excluded
          </p>
          <ul className="space-y-3 text-sm text-[#475569] leading-relaxed">
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Loss caused by pre-existing design defects</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Normal wear and tear and gradual damage from regular corrosion</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Delay penalties or consequential loss (unless a specific extension applies)</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Loss occurring after the maintenance period ends without an extension of cover</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f] whitespace-nowrap">
          Practical Steps
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Steps to Choosing the Right Builders Risk Insurance</h2>

      <div className="not-prose mt-10 mb-12">
        {[
          {
            n: "01",
            title: "Map the Specific Risks of Your Project",
            body: "Building construction, plant installation, and ship repair at a shipyard each carry a different risk profile. Before buying a policy, identify the trouble spots: is there hot work involved (welding, cutting), areas with combustible material, or high-risk work at height?",
          },
          {
            n: "02",
            title: "Set the Sum Insured Based on Full Contract Value, Not Current Progress",
            body: "The most common mistake is setting the sum insured based on work already completed, when it should instead be based on the project's total contract value plus the cost of materials and equipment yet to be installed. An insured sum that's too low triggers proportional reduction (average clause) when a claim is made.",
          },
          {
            n: "03",
            title: "Make Sure Every Party on Site Is Covered as an Insured",
            body: "If the project involves subcontractors, make sure the policy explicitly names them as a joint insured or additional insured. Without this clause, the insurer could deny the claim or pursue recovery (subrogation) against subcontractors who are, after all, your own working partners.",
          },
          {
            n: "04",
            title: "Check the Insurance Period and Maintenance Period",
            body: "A Builders Risk policy typically runs from the mobilization of materials to the site through to project handover, plus a maintenance period (usually 12 months). Make sure this period actually matches your real project schedule, including any potential delays.",
          },
          {
            n: "05",
            title: "Read the Wording and Exclusions Carefully, or Bring In a Consultant",
            body: (
              <>
                A single exclusion clause can determine whether a claim worth hundreds of millions of rupiah gets paid in full or denied. Working with an insurance consultant who understands the nature of construction and shipyard projects — not just shopping for the cheapest premium — is the step that most often saves a project when an incident actually happens. You can review{" "}
                <Link href="/en/marine-insurance/builders-risk" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">
                  our Builders Risk policy coverage here
                </Link>
                .
              </>
            ),
          },
        ].map((step, i, arr) => (
          <div key={step.n} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
                {step.n}
              </span>
              {i < arr.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
              )}
            </div>
            <div className={i < arr.length - 1 ? "pb-9" : ""}>
              <h3 className="mt-1.5 mb-2">{step.title}</h3>
              <p className="text-[#475569] leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f] whitespace-nowrap">
          Frequently Asked Questions
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">FAQ About Builders Risk Insurance</h2>

      <div className="not-prose mt-8 mb-10 space-y-3">
        {[
          {
            q: "What is Builders Risk insurance?",
            a: "Builders Risk insurance (also known as Contractors' All Risks or Erection All Risks) covers physical loss or damage to a project under construction — including a vessel being built or repaired at a shipyard — caused by risks such as fire, workplace accidents, or natural disasters during the construction period.",
          },
          {
            q: "Do shipyards in Batam need Builders Risk insurance?",
            a: "Yes. During construction or repair, a vessel cannot be insured under a standard marine hull policy because it is not yet complete or seaworthy. Builders Risk fills that protection gap from the start of the project until handover.",
          },
          {
            q: "How long does a Builders Risk claim usually take to settle?",
            a: "It depends on the complexity of the loss and how complete the documentation is — generally a few weeks to 2-3 months for larger losses that require in-depth investigation by the loss adjuster.",
          },
          {
            q: "What is the most common mistake when buying a Builders Risk policy?",
            a: "Setting the sum insured too low (under-insurance), failing to include subcontractors as covered parties, and not checking exclusions related to design defects, which are a frequent source of claim disputes.",
          },
          {
            q: "Does Builders Risk cover subcontractor work?",
            a: "It depends on the policy wording. The policy needs to explicitly list every party working on the project as a joint insured or additional insured, so there is no gap in liability when a claim occurs.",
          },
        ].map((item) => (
          <div
            key={item.q}
            className="rounded-xl border border-[#e2e8f0] bg-white px-5 py-4"
          >
            <p className="font-display font-semibold text-[#0a1628] mb-1.5">
              {item.q}
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-7 sm:p-8 bg-[#0a1628] rounded-2xl text-white not-prose relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c9a84c]/10" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
          Free Consultation
        </p>
        <h3 className="font-display font-bold text-xl text-white mb-3">
          Starting a Construction Project or Shipyard Job?
        </h3>
        <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-2xl">
          I help set the right sum insured, make sure every relevant party is covered under the policy, and support you if a claim ever actually happens — based on hands-on experience handling claims in the field, not just comparing premiums.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/6281373336728?text=Hi%20Rio%2C%20I%27d%20like%20to%20consult%20about%20Builders%20Risk%20insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors"
          >
            Consult via WhatsApp
          </a>
          <Link
            href="/en/marine-insurance/builders-risk"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors"
          >
            View Builders Risk Product
          </Link>
        </div>
      </div>

      <div className="mt-6 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#0a1628] mb-4">
          Related Articles & Pages
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/en/marine-insurance"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Marine Insurance Batam
          </Link>
          <Link
            href="/en/marine-insurance/builders-risk"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Builders Risk Insurance Product (Batam)
          </Link>
          <Link
            href="/blog/cara-mendapatkan-asuransi-builders-risk-batam"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Versi Bahasa Indonesia / Indonesian Version
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
