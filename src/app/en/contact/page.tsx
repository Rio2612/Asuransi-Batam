// app/en/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Contact – Reach Rio, Batam Insurance Practitioner",
  description:
    "Contact Rio for a free insurance consultation in Batam. WhatsApp +62-813-7333-6728, email rio@asuransibatam.com. Batam Center.",
  alternates: {
    canonical: "https://asuransibatam.com/en/contact",
    languages: {
      id: "https://asuransibatam.com/kontak",
      en: "https://asuransibatam.com/en/contact",
    },
  },
};

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://asuransibatam.com/en" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://asuransibatam.com/en/contact" },
  ],
};

export default function ContactPageEN() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/en" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Contact</span>
          </nav>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
          <p className="text-white/70 text-xl">Free insurance consultation. Rio is ready to help you.</p>
        </div>
      </section>

      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { icon: "💬", label: "WhatsApp", value: "+62-813-7333-6728", href: "https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20insurance", primary: true },
              { icon: "📧", label: "Email", value: "rio@asuransibatam.com", href: "mailto:rio@asuransibatam.com", primary: false },
              { icon: "📍", label: "Address", value: "Batam Center, Batam City, Kepulauan Riau", href: null, primary: false },
            ].map((c) => (
              <div key={c.label} className={`p-5 rounded-2xl border-2 ${c.primary ? "bg-[#0a1628] border-[#c9a84c]/30" : "bg-white border-[#e2e8f0]"}`}>
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className={`text-xs font-semibold uppercase tracking-wide mb-1 ${c.primary ? "text-[#c9a84c]" : "text-[#64748b]"}`}>{c.label}</div>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className={`font-bold text-sm ${c.primary ? "text-white hover:text-[#f0d080]" : "text-[#0a1628] hover:text-[#1a4fa0]"} transition-colors`}>
                    {c.value}
                  </a>
                ) : (
                  <div className="font-bold text-sm text-[#0a1628]">{c.value}</div>
                )}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20insurance"
            target="_blank" rel="noopener noreferrer"
            className="block w-full py-5 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-2xl text-center text-lg hover:shadow-xl transition-all"
          >
            💬 Start Consultation via WhatsApp Now
          </a>

          <div className="mt-8 p-6 bg-white rounded-2xl border border-[#e2e8f0]">
            <h2 className="font-display font-bold text-xl text-[#0a1628] mb-4">Office Hours</h2>
            <div className="space-y-2 text-sm text-[#64748b]">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="font-semibold text-[#0a1628]">08:00 – 17:00 WIB</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold text-[#0a1628]">09:00 – 13:00 WIB</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday & Public Holidays</span>
                <span className="font-semibold text-[#64748b]">Closed</span>
              </div>
            </div>
            <p className="text-xs text-[#64748b] mt-4 italic">
              * Emergency claims assistance available 24/7 via WhatsApp
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
