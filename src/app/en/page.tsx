// app/en/page.tsx  ← Homepage English
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Star, Clock, Users, ArrowRight, CheckCircle, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Trusted Batam Insurance – Property, Vehicle, Heavy Equipment & Liability | Rio",
  description:
    "Rio, professional general insurance consultant in Batam with 10+ years of experience. Property, vehicle, heavy equipment, liability & engineering insurance. Free consultation, fast response via WhatsApp. Call now: +62-813-7333-6728.",
  alternates: {
    canonical: "https://asuransibatam.biz.id/en",
    languages: {
      "id": "https://asuransibatam.biz.id/",
      "en": "https://asuransibatam.biz.id/en",
    },
  },
};

const products = [
  {
    icon: "🏠",
    title: "Property Insurance",
    desc: "Protection for hotels, homes, and commercial properties against fire, natural disaster, and damage.",
    href: "/en/property-insurance",
    tags: ["Hotel", "Home", "Commercial"],
  },
  {
    icon: "🚗",
    title: "Vehicle Insurance",
    desc: "All Risk & TLO for cars, dump trucks, and commercial vehicles. Online premium calculator available.",
    href: "/en/vehicle-insurance",
    tags: ["Car", "Dump Truck", "All Risk"],
  },
  {
    icon: "⚙️",
    title: "Machinery Insurance",
    desc: "Protection for heavy equipment, cranes, and industrial machinery from operational damage.",
    href: "/en/machinery-insurance",
    tags: ["Heavy Equipment", "Crane", "Machinery"],
  },
  {
    icon: "⚖️",
    title: "Liability Insurance",
    desc: "Third-party liability coverage, B3 hazardous waste, and public liability protection.",
    href: "/en/liability-insurance",
    tags: ["B3 Waste", "Public Liability"],
  },
  {
    icon: "🔧",
    title: "Engineering Insurance",
    desc: "Coverage for construction projects, machinery installation, and infrastructure.",
    href: "/en/engineering-insurance",
    tags: ["CAR", "EAR", "Construction"],
  },
];

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT. Batam Properti Utama",
    text: "Rio was very professional in explaining insurance products. Our hotel claim was processed quickly and without hassle.",
    rating: 5,
  },
  {
    name: "Hendra Wijaya",
    company: "CV. Trans Batam",
    text: "Our dump truck insurance was handled very well. Competitive premiums and an easy process.",
    rating: 5,
  },
  {
    name: "Susanto",
    company: "PT. Konstruksi Riau",
    text: "We've trusted Rio with our heavy equipment insurance for 5 years. Responsive and trustworthy.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What is general insurance?",
    a: "General insurance provides financial protection against losses due to damage or loss of property, including property, vehicles, heavy equipment, and legal liability.",
  },
  {
    q: "How long does policy issuance take?",
    a: "Insurance policies can generally be issued within 1–3 business days after complete documents are received and the premium is paid.",
  },
  {
    q: "How do I file a claim?",
    a: "Contact us immediately after the incident. Rio will guide you through the entire claims process from start to finish.",
  },
  {
    q: "Can I consult before buying a policy?",
    a: "Absolutely! Free consultation is available via WhatsApp, phone, or in-person visit to our office in Batam Center.",
  },
];

export default function HomePageEN() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["InsuranceAgency", "LocalBusiness"],
        "@id": "https://asuransibatam.biz.id/#organization",
        name: "Batam Insurance – Rio",
        url: "https://asuransibatam.biz.id/en",
        telephone: "+6281373336728",
        email: "rio@asuransibatam.biz.id",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Batam Center",
          addressLocality: "Batam",
          addressRegion: "Kepulauan Riau",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 1.1277,
          longitude: 104.0196,
        },
        openingHours: "Mo-Fr 08:00-17:00",
        employee: {
          "@type": "Person",
          name: "Rio",
          jobTitle: "Insurance Consultant",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] overflow-hidden pt-16">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#1a4fa0]/40 rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#c9a84c] rounded-full opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#c9a84c]/40 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                General Insurance Consultant – Batam
              </div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
                Protect Your Assets &<br />
                <span className="text-gradient-gold">Business</span><br />
                in Batam
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                Rio, a general insurance consultant with 10+ years of experience in Batam.
                The right solution for property, vehicle, heavy equipment, liability, and engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20insurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-xl hover:shadow-xl hover:shadow-[#c9a84c]/30 transition-all text-lg"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Free Consultation
                </a>
                <Link
                  href="/en/car-premium-calculator"
                  className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
                >
                  Calculate Car Premium
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["B", "S", "H", "R"].map((l) => (
                    <div key={l} className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a4fa0] to-[#0a1628] border-2 border-[#c9a84c]/40 flex items-center justify-center text-white text-xs font-bold">
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-[#c9a84c] mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-white/60 text-sm">200+ satisfied clients in Batam</p>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                <h2 className="font-display font-bold text-white text-xl mb-6">
                  Why Choose Us?
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Years Experience", value: "10+" },
                    { label: "Active Clients", value: "200+" },
                    { label: "Claim Success Rate", value: "98%" },
                    { label: "Products Available", value: "20+" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-2xl p-4 text-center">
                      <div className="font-display font-bold text-2xl text-[#c9a84c]">{stat.value}</div>
                      <div className="text-white/60 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "Free consultation, no strings attached",
                    "Full assistance throughout claims",
                    "Policy delivered within 1–3 business days",
                    "OJK-registered insurance partners",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#c9a84c]/20 rounded-2xl flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#c9a84c]" />
                  <div>
                    <div className="text-[#c9a84c] font-bold text-sm">Contact Rio Directly</div>
                    <a href="tel:081373336728" className="text-white font-display font-bold text-lg hover:text-[#f0d080] transition-colors">
                      0813-7333-6728
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Our Products</p>
            <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-4">
              All Your Insurance Needs
            </h2>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              From property to engineering – we provide complete general insurance solutions for individuals and businesses in Batam.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link key={p.href} href={p.href} className="group">
                <div className="h-full p-7 rounded-2xl border-2 border-[#e2e8f0] group-hover:border-[#c9a84c]/60 group-hover:shadow-xl transition-all card-hover bg-white">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="font-display font-bold text-xl text-[#0a1628] mb-3 group-hover:text-[#1a4fa0] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#faf8f3] text-[#1a4fa0] text-xs font-semibold rounded-full border border-[#e2e8f0]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
            {/* Calculator card */}
            <Link href="/en/car-premium-calculator" className="group">
              <div className="h-full p-7 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] group-hover:shadow-xl transition-all card-hover">
                <div className="text-4xl mb-4">🧮</div>
                <h3 className="font-display font-bold text-xl text-white mb-3">Premium Calculator</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Calculate your estimated car and motorcycle premiums online, quickly and accurately.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 text-[#c9a84c] text-xs font-semibold rounded-full border border-[#c9a84c]/30">
                    Car Premium
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-[#c9a84c] text-xs font-semibold rounded-full border border-[#c9a84c]/30">
                    Motorcycle Premium
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Our Advantages</p>
              <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-6">
                Why Trust Your Insurance to Us?
              </h2>
              <p className="text-[#64748b] text-lg leading-relaxed mb-8">
                With over 10 years of experience in the Batam general insurance industry,
                Rio is a trusted partner who understands local needs.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Personal Assistance",
                    desc: "You get a dedicated consultant who guides you from policy selection to claim completion.",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Fast Response",
                    desc: "Questions answered within 1 business hour. Claims processed with a clear timeline.",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "OJK-Registered Partners",
                    desc: "We work with official insurance companies supervised by OJK for your security.",
                  },
                  {
                    icon: <Star className="w-5 h-5" />,
                    title: "Competitive Premiums",
                    desc: "We compare multiple insurance companies to find the best premium for you.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0a1628] text-[#c9a84c] rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[#0a1628] mb-1">{item.title}</h3>
                      <p className="text-[#64748b] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "10+", label: "Years Experience", bg: "bg-[#0a1628]", color: "text-[#c9a84c]" },
                { val: "200+", label: "Active Clients", bg: "bg-[#c9a84c]", color: "text-[#0a1628]" },
                { val: "98%", label: "Claim Success Rate", bg: "bg-[#1a4fa0]", color: "text-white" },
                { val: "24/7", label: "Emergency Service", bg: "bg-[#132040]", color: "text-[#f0d080]" },
              ].map((s) => (
                <div key={s.label} className={`${s.bg} rounded-2xl p-4 sm:p-6 lg:p-8 text-center overflow-hidden`}>
                  <div className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl ${s.color} mb-2 leading-none`}>{s.val}</div>
                  <div className="text-white/60 text-xs sm:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Testimonials</p>
            <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-7 rounded-2xl bg-[#faf8f3] border border-[#e2e8f0] hover:shadow-lg transition-all">
                <div className="flex text-[#c9a84c] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-[#64748b] text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-display font-bold text-[#0a1628]">{t.name}</div>
                  <div className="text-[#c9a84c] text-sm">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">FAQ</p>
            <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-[#0a1628] hover:text-[#1a4fa0] transition-colors list-none">
                  {faq.q}
                  <span className="ml-4 text-[#c9a84c] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-[#64748b] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
