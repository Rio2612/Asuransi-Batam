import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
export const metadata: Metadata = {
  title: "Kontak – Hubungi Rio Konsultan Asuransi Batam",
  description: "Hubungi Rio untuk konsultasi asuransi gratis di Batam. WhatsApp 0813-7333-6728, email rio@asuransibatam.com. Batam Center.",
  alternates: {
    canonical: "https://asuransibatam.com/kontak",
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
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Kontak", item: "https://asuransibatam.com/kontak" },
  ],
};

export default function KontakPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-white/70">Kontak</span>
          </nav>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Hubungi Kami</h1>
          <p className="text-white/70 text-xl">Konsultasi asuransi gratis. Rio siap membantu Anda.</p>
        </div>
      </section>
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { icon: "💬", label: "WhatsApp", value: "0813-7333-6728", href: "https://wa.me/6281373336728", primary: true },
              { icon: "💬", label: "WhatsApp (EN)", value: "Chat in English", href: "https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20need%20insurance%20consultation", primary: false },
              { icon: "📧", label: "Email", value: "rio@asuransibatam.com", href: "mailto:rio@asuransibatam.com", primary: false },
              { icon: "📍", label: "Alamat", value: "Batam Center, Kota Batam, Kepulauan Riau", href: null, primary: false },
            ].map((c) => (
              <div key={c.label} className={`p-5 rounded-2xl border-2 ${c.primary ? "bg-[#0a1628] border-[#c9a84c]/30" : "bg-white border-[#e2e8f0]"}`}>
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className={`text-xs font-semibold uppercase tracking-wide mb-1 ${c.primary ? "text-[#c9a84c]" : "text-[#64748b]"}`}>{c.label}</div>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`font-bold text-sm ${c.primary ? "text-white hover:text-[#f0d080]" : "text-[#0a1628] hover:text-[#1a4fa0]"} transition-colors`}>{c.value}</a>
                ) : (
                  <div className="font-bold text-sm text-[#0a1628]">{c.value}</div>
                )}
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi"
            target="_blank" rel="noopener noreferrer"
            className="block w-full py-5 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-2xl text-center text-lg hover:shadow-xl transition-all"
          >
            💬 Mulai Konsultasi via WhatsApp Sekarang
          </a>
        </div>
      </section>
      <CTASection />
    </>
  );
}
