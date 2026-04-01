import Link from "next/link";
import CTASection from "./CTASection";

interface FAQ {
  q: string;
  a: string;
}

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface PolicyComparison {
  feature: string;
  basic: string;
  standard: string;
  comprehensive: string;
}

interface ProductPageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  faqs: FAQ[];
  policyComparison?: PolicyComparison[];
  breadcrumbs: { label: string; href: string }[];
  schema: Record<string, unknown>;
  children?: React.ReactNode;
}

export default function ProductPageLayout({
  title,
  subtitle,
  description,
  benefits,
  faqs,
  policyComparison,
  breadcrumbs,
  schema,
  children,
}: ProductPageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Beranda</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-[#c9a84c]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#c9a84c] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">{subtitle}</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-xl hover:shadow-xl transition-all text-center"
              >
                Konsultasi Gratis
              </a>
              <a
                href="tel:081373336728"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-center"
              >
                0813-7333-6728
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">
            Manfaat & Perlindungan
          </h2>
          <p className="text-center text-[#64748b] mb-12 max-w-2xl mx-auto">
            Apa saja yang dicakup dalam polis asuransi ini?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">{b.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional content */}
      {children && (
        <section className="section-padding bg-[#faf8f3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
      )}

      {/* Policy comparison */}
      {policyComparison && (
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">
              Perbandingan Polis
            </h2>
            <p className="text-center text-[#64748b] mb-10">Pilih paket yang sesuai dengan kebutuhan Anda</p>
            <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0a1628]">
                    <th className="text-left py-4 px-6 text-white/70 font-medium text-sm">Fitur</th>
                    <th className="py-4 px-6 text-white font-display font-bold text-center">Basic</th>
                    <th className="py-4 px-6 text-[#c9a84c] font-display font-bold text-center">Standard</th>
                    <th className="py-4 px-6 text-[#f0d080] font-display font-bold text-center">Comprehensive</th>
                  </tr>
                </thead>
                <tbody>
                  {policyComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                      <td className="py-3.5 px-6 text-[#0a1628] font-medium text-sm">{row.feature}</td>
                      <td className="py-3.5 px-6 text-center text-sm text-[#64748b]">{row.basic}</td>
                      <td className="py-3.5 px-6 text-center text-sm text-[#0a1628] font-medium">{row.standard}</td>
                      <td className="py-3.5 px-6 text-center text-sm text-[#1a4fa0] font-bold">{row.comprehensive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-[#64748b] mt-4">
              * Hubungi kami untuk penawaran terbaik sesuai kebutuhan Anda
            </p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">
            Pertanyaan Umum
          </h2>
          <p className="text-center text-[#64748b] mb-10">Jawaban untuk pertanyaan yang sering ditanyakan</p>
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
