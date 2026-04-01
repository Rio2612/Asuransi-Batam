import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Siap Melindungi Aset Anda?",
  subtitle = "Konsultasikan kebutuhan asuransi Anda bersama Rio, konsultan asuransi terpercaya di Batam.",
  primaryLabel = "Konsultasi Gratis via WhatsApp",
  primaryHref = "https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi",
  secondaryLabel = "Hitung Premi Mobil",
  secondaryHref = "/kalkulator-premi-mobil",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/10 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a84c]/10 rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
          {title}
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryHref}
            target={primaryHref.startsWith("http") ? "_blank" : undefined}
            rel={primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-xl hover:shadow-xl hover:shadow-[#c9a84c]/30 transition-all text-center"
          >
            {primaryLabel}
          </a>
          <Link
            href={secondaryHref}
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-center"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
