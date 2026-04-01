import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
export const metadata: Metadata = {
  title: "Kontak – Hubungi Rio Konsultan Asuransi Batam",
  description: "Hubungi Rio untuk konsultasi asuransi gratis di Batam. WhatsApp 0813-7333-6728, email rio@asuransibatam.biz.id. Batam Center.",
  alternates: { canonical: "https://asuransibatam.biz.id/kontak" },
};
export default function KontakPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Hubungi Kami</h1>
          <p className="text-white/70 text-xl">Konsultasi asuransi gratis. Rio siap membantu Anda.</p>
        </div>
      </section>
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { icon: "💬", label: "WhatsApp", value: "0813-7333-6728", href: "https://wa.me/6281373336728", primary: true },
              { icon: "📞", label: "Telepon", value: "0813-7333-6728", href: "tel:081373336728", primary: false },
              { icon: "📧", label: "Email", value: "rio@asuransibatam.biz.id", href: "mailto:rio@asuransibatam.biz.id", primary: false },
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
