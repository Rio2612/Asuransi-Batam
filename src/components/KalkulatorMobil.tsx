"use client";
import { useState } from "react";

type RateCategory = "0-125" | "125-200" | "200-400" | "400-800" | "800+";
type InsuranceType = "allrisk" | "tlo";

// Wilayah 1 – Batam, Kepulauan Riau, dan sebagian besar Sumatera
const RATES: Record<InsuranceType, Record<RateCategory, number>> = {
  allrisk: {
    "0-125":   3.82,
    "125-200": 2.67,
    "200-400": 2.18,
    "400-800": 2.08,
    "800+":    2.09,
  },
  tlo: {
    "0-125":   0.47,
    "125-200": 0.63,
    "200-400": 0.53,
    "400-800": 0.43,
    "800+":    0.37,
  },
};

function getCategory(value: number): RateCategory {
  if (value <= 125) return "0-125";
  if (value <= 200) return "125-200";
  if (value <= 400) return "200-400";
  if (value <= 800) return "400-800";
  return "800+";
}

function formatRupiah(val: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(val);
}

export default function KalkulatorMobil() {
  const [type, setType] = useState<InsuranceType>("allrisk");
  const [vehicleValue, setVehicleValue] = useState("");
  const [result, setResult] = useState<{ min: number; max: number; rate: number } | null>(null);

  function calculate() {
    const value = parseFloat(vehicleValue.replace(/[^0-9]/g, "")) / 1_000_000;
    if (!value || value <= 0) return;
    const cat = getCategory(value);
    const rate = RATES[type][cat];
    const premium = (value * 1_000_000 * rate) / 100;
    setResult({ min: premium * 0.9, max: premium * 1.1, rate });
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2">
          Kalkulator Premi Mobil
        </h2>
        <p className="text-[#64748b]">
          Estimasi premi asuransi berdasarkan tarif OJK – Wilayah 1 (Batam & Kepulauan Riau)
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 shadow-sm">
        {/* Wilayah badge */}
        <div className="flex items-center gap-2 mb-6 px-4 py-3 bg-[#0a1628]/5 rounded-xl border border-[#0a1628]/10">
          <span className="text-lg">📍</span>
          <div>
            <span className="font-display font-bold text-sm text-[#0a1628]">Wilayah 1 – Batam & Kepulauan Riau</span>
            <p className="text-xs text-[#64748b]">Tarif OJK khusus Sumatera termasuk Batam, Bintan, Karimun</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Jenis Asuransi */}
          <div>
            <label className="block font-display font-semibold text-[#0a1628] mb-3">
              Jenis Asuransi
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "allrisk", label: "All Risk (Comprehensive)", sub: "Semua kerusakan ditanggung" },
                { val: "tlo",     label: "TLO (Total Loss Only)",    sub: "Hanya kerusakan total & hilang" },
              ].map((opt) => (
                <button
                  key={opt.val}
                  onClick={() => { setType(opt.val as InsuranceType); setResult(null); }}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    type === opt.val
                      ? "border-[#c9a84c] bg-[#c9a84c]/5"
                      : "border-[#e2e8f0] hover:border-[#c9a84c]/40"
                  }`}
                >
                  <div className="font-semibold text-sm text-[#0a1628]">{opt.label}</div>
                  <div className="text-xs text-[#64748b] mt-0.5">{opt.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Harga Kendaraan */}
          <div>
            <label className="block font-display font-semibold text-[#0a1628] mb-2">
              Harga Kendaraan (Rp)
            </label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Contoh: 250000000"
              value={vehicleValue}
              onChange={(e) => { setVehicleValue(e.target.value); setResult(null); }}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] focus:border-[#1a4fa0] outline-none text-[#0a1628] font-medium transition-colors"
            />
            <p className="text-xs text-[#64748b] mt-1.5">
              Masukkan harga OTR atau nilai pasar kendaraan
            </p>
          </div>

          <button
            onClick={calculate}
            className="w-full py-4 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] text-white font-bold rounded-xl hover:shadow-lg transition-all text-lg"
          >
            Hitung Estimasi Premi
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-6 p-6 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] rounded-2xl text-white">
            <h3 className="font-display font-bold text-lg mb-1 text-[#c9a84c]">
              Estimasi Premi Tahunan
            </h3>
            <p className="text-white/50 text-xs mb-4">
              {type === "allrisk" ? "All Risk" : "TLO"} · Wilayah 1 · Tarif {result.rate.toFixed(2)}%/tahun
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-white/60 text-xs mb-1">Estimasi Minimum</div>
                <div className="font-display font-bold text-xl">{formatRupiah(result.min)}</div>
              </div>
              <div className="bg-[#c9a84c]/20 rounded-xl p-4 border border-[#c9a84c]/40">
                <div className="text-[#c9a84c] text-xs mb-1">Estimasi Maksimum</div>
                <div className="font-display font-bold text-xl text-[#f0d080]">
                  {formatRupiah(result.max)}
                </div>
              </div>
            </div>
            <p className="text-white/50 text-xs mb-4">
              * Estimasi berdasarkan tarif acuan OJK. Premi final ditentukan oleh perusahaan
              asuransi pilihan Anda sesuai kondisi kendaraan.
            </p>
            <a
              href="https://wa.me/628131556592?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20mobil%20di%20Batam"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-center hover:bg-[#f0d080] transition-colors"
            >
              Minta Penawaran Resmi via WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
