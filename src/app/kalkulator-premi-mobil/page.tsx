import type { Metadata } from "next";
import KalkulatorMobil from "@/components/KalkulatorMobil";
export const metadata: Metadata = {
  title: "Kalkulator Premi Asuransi Mobil Batam – Hitung Online Gratis",
  description: "Kalkulator premi asuransi mobil online gratis. Estimasi biaya All Risk dan TLO berdasarkan tarif OJK terbaru. Wilayah 1, 2, dan 3 tersedia.",
  alternates: { canonical: "https://asuransibatam.biz.id/kalkulator-premi-mobil" },
};
export default function KalkulatorPremiMobilPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Kalkulator Online</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Kalkulator Premi Asuransi Mobil</h1>
          <p className="text-white/70 text-xl">Estimasi premi berdasarkan tarif resmi OJK. Gratis, cepat, dan akurat.</p>
        </div>
      </section>
      <section className="section-padding bg-[#faf8f3]">
        <KalkulatorMobil />
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl border border-[#e2e8f0] text-center">
          <p className="text-[#64748b] text-sm mb-4">Ingin penawaran resmi dengan harga kompetitif? Hubungi Rio Mardiansyah untuk simulasi polis dari berbagai perusahaan asuransi terkemuka.</p>
          <a href="https://wa.me/628131556592?text=Halo%20Rio%2C%20saya%20ingin%20simulasi%20premi%20asuransi%20mobil" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] text-white font-bold rounded-xl hover:shadow-lg transition-all">
            Minta Simulasi Resmi
          </a>
        </div>
      </section>
    </div>
  );
}
