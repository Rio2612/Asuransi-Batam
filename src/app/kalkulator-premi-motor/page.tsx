"use client";
import { useState } from "react";
import Link from "next/link";

function formatRupiah(val: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(val);
}

export default function KalkulatorPremiMotorPage() {
  const [type, setType] = useState<"allrisk" | "tlo">("allrisk");
  const [motorValue, setMotorValue] = useState("");
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  function calculate() {
    const val = parseFloat(motorValue.replace(/[^0-9]/g, ""));
    if (!val) return;
    const rate = type === "allrisk" ? { min: 1.76, max: 2.35 } : { min: 0.47, max: 0.56 };
    setResult({ min: (val * rate.min) / 100, max: (val * rate.max) / 100 });
  }

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Kalkulator Online</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Kalkulator Premi Asuransi Motor</h1>
          <p className="text-white/70 text-xl">Estimasi premi asuransi sepeda motor berdasarkan tarif OJK.</p>
        </div>
      </section>
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block font-display font-semibold text-[#0a1628] mb-3">Jenis Asuransi</label>
                <div className="grid grid-cols-2 gap-3">
                  {[{ val: "allrisk", label: "All Risk", sub: "Semua kerusakan" }, { val: "tlo", label: "TLO", sub: "Total loss & hilang" }].map((opt) => (
                    <button key={opt.val} onClick={() => setType(opt.val as "allrisk" | "tlo")} className={`p-4 rounded-xl border-2 text-left transition-all ${type === opt.val ? "border-[#c9a84c] bg-[#c9a84c]/5" : "border-[#e2e8f0] hover:border-[#c9a84c]/40"}`}>
                      <div className="font-semibold text-sm text-[#0a1628]">{opt.label}</div>
                      <div className="text-xs text-[#64748b]">{opt.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-display font-semibold text-[#0a1628] mb-2">Harga Motor (Rp)</label>
                <input type="text" placeholder="Contoh: 25000000" value={motorValue} onChange={(e) => setMotorValue(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] focus:border-[#1a4fa0] outline-none text-[#0a1628] font-medium" />
              </div>
              <button onClick={calculate} className="w-full py-4 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] text-white font-bold rounded-xl hover:shadow-lg transition-all text-lg">
                Hitung Estimasi Premi
              </button>
            </div>
            {result && (
              <div className="mt-6 p-6 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] rounded-2xl text-white">
                <h3 className="font-display font-bold text-lg mb-4 text-[#c9a84c]">Estimasi Premi Tahunan</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center"><div className="text-white/60 text-xs mb-1">Minimum</div><div className="font-bold text-xl">{formatRupiah(result.min)}</div></div>
                  <div className="bg-[#c9a84c]/20 rounded-xl p-4 text-center border border-[#c9a84c]/40"><div className="text-[#c9a84c] text-xs mb-1">Maksimum</div><div className="font-bold text-xl text-[#f0d080]">{formatRupiah(result.max)}</div></div>
                </div>
                <p className="text-white/60 text-xs mb-4">* Estimasi berdasarkan tarif acuan OJK. Tarif final ditentukan perusahaan asuransi.</p>
                <a href="https://wa.me/628131556592" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-center hover:bg-[#f0d080] transition-colors">
                  Minta Penawaran via WhatsApp
                </a>
              </div>
            )}
          </div>
          <div className="mt-8 text-center">
            <Link href="/kalkulator-premi-mobil" className="text-[#1a4fa0] font-semibold hover:text-[#c9a84c] transition-colors">
              → Coba Kalkulator Premi Mobil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
