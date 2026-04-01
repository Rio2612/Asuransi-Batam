"use client";
import { useState } from "react";

type RateCategory = "0-125" | "125-200" | "200-400" | "400-800" | "800+";
type InsuranceType = "allrisk" | "tlo";
type VehicleType = "konvensional" | "listrik";

// Wilayah 1 – Batam & Kepulauan Riau
// Mobil konvensional: tarif normal OJK
// Mobil listrik: tarif maksimal OJK (rate * 1.1), Own Risk Rp 500.000/kejadian
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
  const [vehicleType, setVehicleType] = useState<VehicleType>("konvensional");
  const [vehicleValue, setVehicleValue] = useState("");
  const [result, setResult] = useState<{
    konvensional: number;
    listrik: number;
    rate: number;
    rateListrik: number;
  } | null>(null);

  function calculate() {
    const value = parseFloat(vehicleValue.replace(/[^0-9]/g, "")) / 1_000_000;
    if (!value || value <= 0) return;
    const cat = getCategory(value);
    const rate = RATES[type][cat];
    const rateListrik = rate * 1.1; // rate maksimal untuk EV
    const premiumKonvensional = (value * 1_000_000 * rate) / 100;
    const premiumListrik = (value * 1_000_000 * rateListrik) / 100;
    setResult({
      konvensional: premiumKonvensional,
      listrik: premiumListrik,
      rate,
      rateListrik,
    });
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
          <div className="mt-6 space-y-4">
            <p className="text-center text-xs text-[#64748b]">
              {type === "allrisk" ? "All Risk" : "TLO"} · Wilayah 1 · Pilih jenis kendaraan Anda:
            </p>

            {/* Toggle konvensional / listrik */}
            <div className="grid grid-cols-2 gap-3">
              {/* Konvensional */}
              <button
                onClick={() => setVehicleType("konvensional")}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  vehicleType === "konvensional"
                    ? "border-[#1a4fa0] bg-[#1a4fa0]/5"
                    : "border-[#e2e8f0] hover:border-[#1a4fa0]/30"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⛽</span>
                  <span className="font-display font-bold text-sm text-[#0a1628]">Konvensional</span>
                </div>
                <p className="text-xs text-[#64748b] mb-2 leading-relaxed">
                  Mobil berbahan bakar bensin / solar
                </p>
                <div className="font-display font-bold text-lg text-[#0a1628]">
                  {formatRupiah(result.konvensional)}
                </div>
                <div className="text-xs text-[#64748b] mt-0.5">
                  /tahun · tarif {result.rate.toFixed(2)}%
                </div>
              </button>

              {/* Listrik */}
              <button
                onClick={() => setVehicleType("listrik")}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  vehicleType === "listrik"
                    ? "border-[#c9a84c] bg-[#c9a84c]/5"
                    : "border-[#e2e8f0] hover:border-[#c9a84c]/30"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⚡</span>
                  <span className="font-display font-bold text-sm text-[#0a1628]">Mobil Listrik</span>
                </div>
                <p className="text-xs text-[#64748b] mb-2 leading-relaxed">
                  EV / kendaraan bertenaga baterai
                </p>
                <div className="font-display font-bold text-lg text-[#c9a84c]">
                  {formatRupiah(result.listrik)}
                </div>
                <div className="text-xs text-[#64748b] mt-0.5">
                  /tahun · tarif {result.rateListrik.toFixed(2)}%
                </div>
              </button>
            </div>

            {/* Detail kartu terpilih */}
            <div className="p-5 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] rounded-2xl text-white">
              {vehicleType === "konvensional" ? (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">⛽</span>
                    <h3 className="font-display font-bold text-[#c9a84c]">Mobil Konvensional</h3>
                  </div>
                  <p className="text-white/60 text-xs mb-4 leading-relaxed">
                    Kendaraan bermesin pembakaran internal (bensin / solar / hybrid). Tarif normal sesuai ketentuan OJK.
                  </p>
                  <div className="bg-white/10 rounded-xl p-4 mb-4 text-center">
                    <div className="text-white/60 text-xs mb-1">Estimasi Premi Tahunan</div>
                    <div className="font-display font-bold text-2xl">{formatRupiah(result.konvensional)}</div>
                    <div className="text-white/40 text-xs mt-1">Tarif {result.rate.toFixed(2)}% per tahun</div>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-white/60 mb-4">
                    <span className="text-[#c9a84c] mt-0.5">ℹ️</span>
                    <span>Own Risk (risiko sendiri) sesuai polis standar, umumnya Rp 300.000 – Rp 500.000 per kejadian tergantung perusahaan asuransi.</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">⚡</span>
                    <h3 className="font-display font-bold text-[#c9a84c]">Mobil Listrik (EV)</h3>
                  </div>
                  <p className="text-white/60 text-xs mb-4 leading-relaxed">
                    Kendaraan bertenaga baterai / full electric. Menggunakan tarif <strong className="text-white">maksimal OJK</strong> karena biaya perbaikan komponen EV yang lebih tinggi.
                  </p>
                  <div className="bg-[#c9a84c]/20 rounded-xl p-4 mb-3 text-center border border-[#c9a84c]/40">
                    <div className="text-[#c9a84c] text-xs mb-1">Estimasi Premi Tahunan</div>
                    <div className="font-display font-bold text-2xl text-[#f0d080]">{formatRupiah(result.listrik)}</div>
                    <div className="text-white/40 text-xs mt-1">Tarif {result.rateListrik.toFixed(2)}% per tahun (rate maksimal)</div>
                  </div>
                  {/* OR badge khusus EV */}
                  <div className="flex items-start gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl mb-4">
                    <span className="text-base mt-0.5">⚠️</span>
                    <div>
                      <p className="text-xs font-bold text-[#f0d080] mb-0.5">Own Risk (OR) Khusus Mobil Listrik</p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Risiko sendiri sebesar <strong className="text-white">Rp 500.000 per kejadian</strong>. Artinya setiap klaim, tertanggung menanggung biaya pertama sebesar Rp 500.000.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Catatan & diskon — sama untuk keduanya */}
              <p className="text-white/40 text-xs mb-3">
                * Estimasi berdasarkan tarif acuan OJK. Premi final ditentukan perusahaan asuransi sesuai kondisi kendaraan.
              </p>
              <div className="flex items-center gap-2 mb-3 px-4 py-2.5 bg-[#c9a84c]/20 border border-[#c9a84c]/50 rounded-xl">
                <span>🎁</span>
                <p className="text-xs text-[#f0d080] font-semibold leading-snug">
                  Dapatkan <span className="text-white font-bold">diskon s/d Rp 1.000.000</span> dengan menghubungi langsung!
                </p>
              </div>
              <a
                href={`https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20mobil%20${vehicleType === "listrik" ? "listrik" : ""}%20di%20Batam`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-center hover:bg-[#f0d080] transition-colors"
              >
                Hubungi Langsung & Klaim Diskon
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
