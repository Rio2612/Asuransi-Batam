import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import KonsultasiForm from "./KonsultasiForm";
export const metadata: Metadata = {
  title: "Tentang Kami – Rio Mardiansyah, Konsultan Asuransi Batam",
  description: "Profil Rio Mardiansyah, konsultan asuransi kerugian profesional di Batam dengan pengalaman 10+ tahun. Spesialis properti, kendaraan, alat berat, dan liability.",
  alternates: { canonical: "https://asuransibatam.id/tentang-kami" },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rio Mardiansyah",
  jobTitle: "Konsultan Asuransi Kerugian",
  worksFor: { "@type": "InsuranceAgency", name: "Asuransi Batam" },
  telephone: "+628131556592",
  email: "marketing.btma@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Batam Center", addressRegion: "Kepulauan Riau", addressCountry: "ID" },
};
export default function TentangKamiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Tentang Kami</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Rio Mardiansyah</h1>
          <p className="text-white/70 text-xl max-w-2xl">Konsultan Asuransi Kerugian Profesional di Batam dengan pengalaman lebih dari 10 tahun melayani klien individu dan korporat.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Profile photo placeholder */}
              <div className="w-full max-w-md mx-auto lg:mx-0 aspect-square bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#c9a84c] to-[#f0d080] rounded-full flex items-center justify-center mx-auto mb-4 text-5xl font-display font-bold text-[#0a1628]">RM</div>
                  <p className="text-white/60 text-sm">Foto: rio-mardiansyah.jpg</p>
                </div>
                {/* Decorative */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#c9a84c]/20 to-transparent" />
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-4">Profil Rio Mardiansyah</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Rio Mardiansyah adalah konsultan asuransi kerugian berpengalaman yang telah melayani klien di Batam dan Kepulauan Riau selama lebih dari 10 tahun. Dengan pemahaman mendalam tentang industri asuransi lokal dan kebutuhan bisnis di kawasan industri Batam, Rio hadir sebagai mitra terpercaya untuk solusi perlindungan aset Anda.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-8">
                Spesialisasi Rio meliputi asuransi properti komersial, kendaraan niaga dan armada, alat berat dan machinery, serta asuransi liability khusus industri termasuk limbah B3 – bidang yang sangat relevan dengan karakteristik industri Batam sebagai kawasan ekonomi khusus.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: "10+", label: "Tahun Pengalaman" },
                  { val: "200+", label: "Klien Aktif" },
                  { val: "98%", label: "Kepuasan Klien" },
                  { val: "20+", label: "Produk Asuransi" },
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

      {/* Contact form */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">Hubungi Kami</h2>
              <div className="space-y-5">
                {[
                  { icon: "📱", label: "WhatsApp / Telepon", value: "0813-1556-592", href: "https://wa.me/628131556592" },
                  { icon: "📧", label: "Email", value: "marketing.btma@gmail.com", href: "mailto:marketing.btma@gmail.com" },
                  { icon: "📍", label: "Alamat", value: "Batam Center, Kepulauan Riau", href: null },
                  { icon: "🕐", label: "Jam Operasional", value: "Senin–Jumat, 08:00–17:00", href: null },
                ].map((c) => (
                  <div key={c.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0a1628] rounded-xl flex items-center justify-center text-lg flex-shrink-0">{c.icon}</div>
                    <div>
                      <div className="text-[#64748b] text-sm">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-[#0a1628] hover:text-[#c9a84c] transition-colors">{c.value}</a>
                      ) : (
                        <div className="font-semibold text-[#0a1628]">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Consultation form */}
              <KonsultasiForm />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
