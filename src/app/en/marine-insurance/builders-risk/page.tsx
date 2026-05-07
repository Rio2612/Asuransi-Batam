// app/en/marine-insurance/builders-risk/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Wrench, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Builder's Risk Insurance Batam – Shipbuilding & Vessel Construction Cover | Batam Insurance",
  description:
    "Builder's Risk Insurance in Batam for vessel construction and repair at shipyards. Coverage from keel laying through sea trials and delivery. Consult Rio!",
  canonical: "/en/marine-insurance/builders-risk",
  languages: {
    id: "https://asuransibatam.biz.id/asuransi-marine/builders-risk",
    en: "https://asuransibatam.biz.id/en/marine-insurance/builders-risk",
  },
});

const FAQS = [
  {
    q: "What is Builder's Risk Insurance for vessels?",
    a: "Builder's Risk Insurance (also known as Marine Builder's Risk or DSU – Delay in Start-Up) protects a vessel under construction at a shipyard. Coverage commences at keel laying and extends through sea trials and final delivery to the vessel owner.",
  },
  {
    q: "Who needs Builder's Risk Insurance?",
    a: "Both the vessel owner commissioning a new build and the shipyard carrying out the construction have insurable interests that need protection. Builder's Risk policies can be structured to cover either or both parties depending on the contractual arrangement.",
  },
  {
    q: "Does Builder's Risk cover damage during sea trials?",
    a: "Yes. Most Builder's Risk policies include the sea trial period as part of the overall coverage, since damage during sea trials is considered an inherent part of the construction and commissioning process.",
  },
  {
    q: "Can major vessel repair or conversion work also be covered?",
    a: "Yes. In addition to new builds, Builder's Risk policies can be arranged to protect vessels undergoing major renovation, ship conversion, or heavy repair (major refit) that requires extended drydocking.",
  },
  {
    q: "What is Increased Value (IV) in a Builder's Risk policy?",
    a: "Increased Value is a supplemental coverage that compensates for the difference between the completed vessel's worth and the primary insured value — particularly relevant when the vessel's market value rises significantly during the construction period.",
  },
];

const BENEFITS = [
  "Physical damage during construction",
  "Fire and explosion at the shipyard",
  "Flood and extreme weather",
  "Design and construction errors",
  "Damage during sea trials",
  "Third-Party Liability (shipyard)",
  "Worker negligence damage",
  "Demolition and repair costs",
  "Increased Value coverage",
  "Launching risk coverage",
];

const STAGES = [
  {
    no: "01",
    title: "Keel Laying",
    desc: "Coverage begins at the moment the keel — the vessel's primary structural foundation — is laid down in the shipyard.",
  },
  {
    no: "02",
    title: "Construction Phase",
    desc: "All stages of building the frame, hull, decks, and installation of on-board systems are covered throughout the construction period.",
  },
  {
    no: "03",
    title: "Launching",
    desc: "Risks at the moment the vessel first enters the water, including capsize and hull damage during launch, are fully covered.",
  },
  {
    no: "04",
    title: "Sea Trial & Delivery",
    desc: "Extended coverage through sea trials until the vessel is formally accepted and delivered to the owner.",
  },
];

export default function BuildersRiskENPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaInsuranceProduct({
              name: "Builder's Risk Insurance Batam",
              description:
                "Shipbuilding insurance in Batam covering the vessel construction process from keel laying through sea trials and delivery.",
              url: "/en/marine-insurance/builders-risk",
              category: "Marine Insurance",
            })
          ),
        }}
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
              { name: "Marine Insurance", url: "/en/marine-insurance" },
              { name: "Builder's Risk Insurance", url: "/en/marine-insurance/builders-risk" },
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
              { label: "Marine Insurance", href: "/en/marine-insurance" },
              { label: "Builder's Risk Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Wrench size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Marine Insurance
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Builder&apos;s Risk Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Vessel construction is a major investment carrying significant risk. From keel laying to sea trials, every stage of your shipbuilding project in Batam is protected under Builder's Risk Insurance.
          </p>
          <a
            href={WHATSAPP_URL("Hello Rio, I need Builder's Risk Insurance for a vessel construction project in Batam")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
          >
            Consult Builder&apos;s Risk Cover
          </a>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Coverage Period"
            title="Protection at Every Stage of Vessel Construction"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {STAGES.map((s) => (
              <div
                key={s.no}
                className="relative p-6 rounded-2xl border border-gray-100 bg-gray-50"
              >
                <div
                  className="text-3xl font-black mb-3 opacity-20"
                  style={{ color: "#1a4fa0" }}
                >
                  {s.no}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Builder's Risk Coverage"
            title="Risks Covered During Vessel Construction"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl border border-blue-100 bg-white"
              >
                <CheckCircle2
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#1a4fa0" }}
                />
                <span className="text-sm text-gray-700">{b}</span>
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
            title="Builder's Risk Insurance – Common Questions"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTASection
        title="Secure Your Shipbuilding Project"
        waMsg="Hello Rio, I would like Builder's Risk Insurance for a vessel construction project in Batam"
      />
    </>
  );
}
