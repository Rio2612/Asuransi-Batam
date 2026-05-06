// app/en/about-us/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us – Rio, Batam Insurance Consultant",
  description:
    "Profile of Rio, a professional general insurance consultant in Batam with 10+ years of experience. Specialist in property, vehicles, heavy equipment, and liability insurance.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/en/about-us",
    languages: {
      id: "https://asuransibatam.biz.id/tentang-kami",
      en: "https://asuransibatam.biz.id/en/about-us",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rio",
  jobTitle: "General Insurance Consultant",
  worksFor: { "@type": "InsuranceAgency", name: "Batam Insurance" },
  telephone: "+6281373336728",
  email: "rio@asuransibatam.biz.id",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batam Center",
    addressRegion: "Kepulauan Riau",
    addressCountry: "ID",
  },
};

export default function AboutUsPageEN() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">About Us</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Rio</h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Professional General Insurance Consultant in Batam with over 10 years of experience
            serving individual and corporate clients.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/rio-mardiansyah.jpg"
                  alt="Rio – General Insurance Consultant Batam"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3">
                    <p className="font-display font-bold text-white text-lg leading-tight">Rio</p>
                    <p className="text-[#c9a84c] text-sm font-medium">General Insurance Consultant</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-4">Rio's Profile</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Rio is an experienced general insurance consultant who has served clients in Batam and
                Kepulauan Riau for over 10 years. With deep understanding of the local insurance industry
                and the needs of businesses in Batam's industrial zone, Rio is a trusted partner for
                comprehensive asset protection solutions.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-8">
                Rio's specialisations include commercial property insurance, commercial vehicles and fleet,
                heavy equipment and machinery, and specialist liability insurance including B3 hazardous
                waste — areas highly relevant to Batam's unique characteristics as a special economic zone.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: "10+", label: "Years Experience" },
                  { val: "200+", label: "Active Clients" },
                  { val: "98%", label: "Client Satisfaction" },
                  { val: "20+", label: "Insurance Products" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] text-center">
                    <div className="font-display font-bold text-3xl text-[#c9a84c]">{s.val}</div>
                    <div className="text-[#64748b] text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              { icon: "📱", label: "WhatsApp / Phone", value: "+62-813-7333-6728", href: "https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20insurance" },
              { icon: "📧", label: "Email", value: "rio@asuransibatam.biz.id", href: "mailto:rio@asuransibatam.biz.id" },
              { icon: "📍", label: "Address", value: "Batam Center, Kepulauan Riau", href: null },
              { icon: "🕐", label: "Office Hours", value: "Mon–Fri, 08:00–17:00 WIB", href: null },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 bg-white p-5 rounded-2xl border border-[#e2e8f0]">
                <div className="w-10 h-10 bg-[#0a1628] rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-[#64748b] text-sm">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="font-semibold text-[#0a1628] hover:text-[#c9a84c] transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-semibold text-[#0a1628]">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
