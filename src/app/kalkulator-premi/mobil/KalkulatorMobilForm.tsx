"use client";
import { useState } from "react";

type Cat = "0-125" | "125-200" | "200-400" | "400-800" | "800+";

// Wilayah 1 – Batam & Kepulauan Riau
const RATES_AR: Record<Cat, number> = {
  "0-125": 3.82, "125-200": 2.67, "200-400": 2.18, "400-800": 2.08, "800+": 2.09,
};
const RATES_TLO: Record<Cat, number> = {
  "0-125": 0.47, "125-200": 0.63, "200-400": 0.53, "400-800": 0.43, "800+": 0.37,
};

function getCategory(val: number): Cat {
  if (val <= 125) return "0-125";
  if (val <= 200) return "125-200";
  if (val <= 400) return "200-400";
  if (val <= 800) return "400-800";
  return "800+";
}

function fmt(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function KalkulatorMobilForm() {
  const [tipe, setTipe] = useState<"allrisk" | "tlo">("allrisk");
  const [nilai, setNilai] = useState("");
  const [result, setResult] = useState<{ min: number; max: number; rate: number } | null>(null);

  function hitung() {
    const v = parseFloat(nilai.replace(/[^0-9]/g, "")) / 1_000_000;
    if (!v || v <= 0) return;
    const cat = getCategory(v);
    const rate = tipe === "allrisk" ? RATES_AR[cat] : RATES_TLO[cat];
    const premi = (v * 1_000_000 * rate) / 100;
    setResult({ min: premi * 0.9, max: premi * 1.1, rate });
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 rounded-xl border border-blue-100">
        <span>📍</span>
        <span className="text-sm font-semibold text-[#0a1628]">Wilayah 1 – Batam & Kepulauan Riau</span>
      </div>
      <div>
        <label className="block font-semibold text-[#0a1628] mb-2 text-sm">Jenis Asuransi</label>
        <div className="grid grid-cols-2 gap-3">
          {[{ v: "allrisk", l: "All Risk" }, { v: "tlo", l: "TLO" }].map((o) => (
            <button key={o.v} onClick={() => { setTipe(o.v as "allrisk" | "tlo"); setResult(null); }}
              className={`py-3 rounded-xl border-2 font-semibold text-sm transition-all ${tipe === o.v ? "border-[#c9a84c] bg-[#c9a84c]/5 text-[#0a1628]" : "border-[#e2e8f0] text-[#64748b] hover:border-[#c9a84c]/40"}`}>
              {o.l}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block font-semibold text-[#0a1628] mb-2 text-sm">Harga Kendaraan (Rp)</label>
        <input type="text" inputMode="numeric" placeholder="Contoh: 250000000" value={nilai}
          onChange={(e) => { setNilai(e.target.value); setResult(null); }}
          className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] focus:border-[#1a4fa0] outline-none text-sm font-medium transition-colors" />
      </div>
      <button onClick={hitung} className="w-full py-3.5 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] text-white font-bold rounded-xl hover:shadow-lg transition-all">
        Hitung Estimasi Premi
      </button>
      {result && (
        <div className="p-5 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] rounded-2xl text-white">
          <p className="text-[#c9a84c] font-bold mb-3">Estimasi Premi – {tipe === "allrisk" ? "All Risk" : "TLO"} · Tarif {result.rate.toFixed(2)}%</p>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white/10 rounded-xl p-3 text-center"><div className="text-white/60 text-xs">Min</div><div className="font-bold">{fmt(result.min)}</div></div>
            <div className="bg-[#c9a84c]/20 rounded-xl p-3 text-center border border-[#c9a84c]/40"><div className="text-[#c9a84c] text-xs">Max</div><div className="font-bold text-[#f0d080]">{fmt(result.max)}</div></div>
          </div>
          <a href="https://wa.me/628131556592" target="_blank" rel="noopener noreferrer"
            className="block w-full py-2.5 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-center text-sm hover:bg-[#f0d080] transition-colors">
            Minta Penawaran Resmi
          </a>
        </div>
      )}
    </div>
  );
}
