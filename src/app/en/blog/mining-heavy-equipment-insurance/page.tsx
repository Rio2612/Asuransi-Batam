// app/en/blog/mining-heavy-equipment-insurance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Mining Heavy Equipment Insurance – Mandatory, What's Covered & How to Choose",
  description: "Operating a mine without heavy equipment insurance is an unacceptably large financial risk. Learn about mandatory coverage types, applicable K3 regulations, and how to choose the right policy for equipment in mining areas.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/en/blog/mining-heavy-equipment-insurance",
    languages: {
      id: "https://asuransibatam.biz.id/blog/asuransi-alat-berat-pertambangan",
      en: "https://asuransibatam.biz.id/en/blog/mining-heavy-equipment-insurance",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mining Heavy Equipment Insurance: Mandatory, What's Covered & How to Choose",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

export default function ArticleMiningHeavyEquipmentInsurancePage() {
  return (
    <ArticleLayout
      title="Mining Heavy Equipment Insurance: Mandatory, What's Covered & How to Choose"
      description="Mining sites are among the harshest working environments in the world. Heavy equipment operating there faces risks far greater than those on a typical construction project."
      date="6 May 2026"
      category="Machinery"
      readTime="10 min read"
      breadcrumbs={[{ label: "Mining Heavy Equipment Insurance", href: "/en/blog/mining-heavy-equipment-insurance" }]}
      schema={schema}
    >
      <p>
        Mining operations — whether nickel, bauxite, silica sand, or coal — rely on fleets
        of heavy equipment working under extreme conditions: silica dust, thick mud, sharp
        slopes, and 10–20 hour operational cycles every day. A single mining dump truck
        unit can be worth Rp 3–5 billion. A mining-class excavator can reach Rp 5–8 billion.
        When equipment like this suffers serious damage or total loss without insurance
        coverage, the loss is not just the unit's value — it's also the daily production
        stoppage, which can amount to tens of millions of rupiah per day.
      </p>
      <p>
        This isn't simply a matter of being financially prudent. In the Indonesian mining
        context, there is a regulatory dimension that makes heavy equipment insurance not
        just optional, but effectively mandatory.
      </p>

      <h2>Regulations That Require Asset Protection in Mining Areas</h2>
      <p>
        Under <strong>Ministry of Energy and Mineral Resources Decree No. 1827 K/30/MEM/2018</strong>
        on Good Mining Technical Practice Guidelines, mining companies are required to
        implement risk management that includes protection of operational assets. In practice,
        financial institutions that finance heavy equipment purchases for mines (leasing or
        instalment financing) almost invariably require an active insurance policy as a
        disbursement condition and throughout the repayment period.
      </p>
      <p>
        This means that if your equipment is still under a financing arrangement — which
        is the situation for the majority of mid-scale mining contractors — insurance has
        effectively already become a contractual obligation, not a choice.
      </p>

      <h2>Mining Risk vs General Construction: The Key Differences</h2>
      <p>
        Many equipment owners insure their mining units with the same standard policy
        they use for building construction projects. This is a potentially costly mistake.
        Insurance underwriters distinguish between these two contexts because the risk
        profiles are genuinely and significantly different:
      </p>

      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Risk Factor</th>
              <th className="p-4 text-left">General Construction</th>
              <th className="p-4 text-left">Mining</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Daily operating hours", "8–10 hours", "10–20 hours (double shift)"],
              ["Terrain conditions", "Relatively controlled", "Extreme: slopes, mud, bedrock"],
              ["Abrasive dust exposure", "Moderate", "High (silica, abrasive minerals)"],
              ["Landslide / ground failure risk", "Low–moderate", "High (especially open pit)"],
              ["Distance from repair facilities", "Close (in town)", "Far (remote area)"],
              ["Unit value in operation", "Rp 500M – 2B", "Rp 2B – 8B+"],
            ].map(([a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-[#64748b]">{b}</td>
                <td className="p-4 text-[#64748b]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        These risk profile differences are reflected in higher premiums and specific clauses
        that must be present in any policy for mining operations. If you use a standard
        policy without a mining clause, claims that arise on a mining site may be rejected
        on the grounds that the situation falls outside the agreed scope.
      </p>

      <h2>Relevant Policy Types for Mining Heavy Equipment</h2>

      <h3>1. Equipment All Risk (EAR) with Mining Clause</h3>
      <p>
        The primary policy that protects the equipment unit from physical damage caused
        by all risks not explicitly excluded. For mining operations, a mining clause is
        added to accommodate specific risks such as burial by landslide material, damage
        from ground subsidence, and operations within a mining licence area (IUP).
      </p>

      <h3>2. Machinery Breakdown (MB)</h3>
      <p>
        Protection against sudden and unexpected mechanical failure not caused by an
        external event. Examples include a piston fracturing without warning, a bearing
        collapsing suddenly, or a transmission system failing abruptly. MB coverage is
        highly relevant for mining equipment because the high operating hours accelerate
        wear on internal components even in well-maintained machines.
      </p>

      <h3>3. Third Party Liability (TPL)</h3>
      <p>
        In mining areas dense with workers, light vehicles, and infrastructure, the risk
        of heavy equipment striking or damaging assets or people is significant. TPL
        covers compensation claims from third parties who suffer loss as a result of your
        equipment's operations.
      </p>

      <h2>What Is Typically Not Covered — Read Before Buying</h2>
      <p>
        This is the most important section and the most frequently overlooked. Some common
        exclusions you need to understand before signing a policy:
      </p>
      <ul>
        <li>
          <strong>Normal wear and gradual deterioration:</strong> Components that wear
          slowly due to age and normal use are not the insurer's responsibility. This
          includes filter replacements, seals, and other consumable components.
        </li>
        <li>
          <strong>Damage from intentional overloading:</strong> If a dump truck is loaded
          beyond the capacity stated in its technical specifications, resulting damage is
          generally not covered.
        </li>
        <li>
          <strong>Operations outside the declared area:</strong> If the policy is issued
          for operations in Batam but the unit is used in Kalimantan without notification,
          a claim can be rejected due to the difference in operating location.
        </li>
        <li>
          <strong>Damage while the unit is undergoing repair or modification:</strong>
          Units that are dismantled at a workshop for repairs are generally not covered
          during that process.
        </li>
      </ul>

      <h2>How Mining Equipment Insurance Premiums Are Calculated</h2>
      <p>
        There is no published standard tariff for heavy equipment insurance as there is
        for motor vehicle insurance (which is regulated by OJK). Premiums are calculated
        on a <em>case-by-case</em> basis by the underwriter based on a number of factors:
      </p>
      <ul>
        <li><strong>Unit type and brand</strong> — brands with easily available spare parts tend to attract lower premiums</li>
        <li><strong>Unit age and operating hours (hour meter)</strong> — older units and higher hours mean higher premiums</li>
        <li><strong>Location and type of operation</strong> — open pit mining is riskier than a standard quarry</li>
        <li><strong>Sum insured basis</strong> — market value or replacement value</li>
        <li><strong>Claims history</strong> — companies with a clean claims record get more competitive rates</li>
        <li><strong>Number of units on a single policy</strong> — fleet policies covering multiple units are typically more efficient</li>
      </ul>
      <p>
        As a general guide, EAR premiums for mining heavy equipment typically range from
        <strong> 1.5% to 3.5%</strong> of the sum insured per year, depending on the
        factors above. To get an accurate figure for your specific fleet, a direct
        consultation with an experienced insurance agent in this sector is the most
        reliable approach.
      </p>

      <h2>Tips for Choosing the Right Policy for Your Mining Operation</h2>
      <ol>
        <li>
          <strong>Ensure a mining or heavy equipment clause is included</strong> —
          don't accept a standard policy that doesn't explicitly name the type of
          operation.
        </li>
        <li>
          <strong>Check the territorial coverage:</strong> Make sure the policy covers
          all areas where the unit operates, including transit routes if units are
          frequently moved between locations.
        </li>
        <li>
          <strong>Compare the indemnity basis:</strong> Agreed Value (a fixed agreed
          sum) is more favourable than Indemnity Value (market value at claim time)
          for expensive units with fluctuating values.
        </li>
        <li>
          <strong>Check the sublimit for evacuation costs:</strong> Evacuating an
          excavator from a remote mining area can be extremely expensive. Make sure
          these costs are covered or an adequate sublimit is in place.
        </li>
        <li>
          <strong>Use a fleet policy if you have more than 3 units:</strong> Insuring
          all units under one fleet policy is usually more cost-effective and simpler
          to manage administratively, especially at claims time.
        </li>
      </ol>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <h3 className="font-display font-bold text-[#0a1628] mb-3">
          Discuss Your Mining Equipment Insurance Needs
        </h3>
        <p className="text-[#64748b] mb-4">
          Every mining fleet has a unique risk profile. Rio can help analyse the right
          coverage requirements, compare offers from multiple insurers, and ensure no
          protection gaps are left in your policy.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/en/machinery-insurance/heavy-equipment-insurance"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            View Heavy Equipment Insurance
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
