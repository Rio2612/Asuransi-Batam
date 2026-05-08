"use client";
import { useState } from "react";

type RateCategory = "0-125" | "125-200" | "200-400" | "400-800" | "800+";
type InsuranceType = "allrisk" | "tlo";
type VehicleType = "konvensional" | "listrik";

// Wilayah 1 – Batam & Kepulauan Riau
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

// ─── Translations ────────────────────────────────────────────────────────────
const TEXT = {
  id: {
    heading: "Kalkulator Premi Mobil",
    subheading: "Estimasi premi asuransi berdasarkan tarif OJK – Wilayah 1 (Batam & Kepulauan Riau)",
    regionTitle: "Wilayah 1 – Batam & Kepulauan Riau",
    regionSub: "Tarif OJK khusus Sumatera termasuk Batam, Bintan, Karimun",
    insuranceType: "Jenis Asuransi",
    allriskSub: "Semua kerusakan ditanggung",
    tloSub: "Hanya kerusakan total & hilang",
    vehiclePrice: "Harga Kendaraan (Rp)",
    placeholder: "Contoh: 250000000",
    priceHint: "Masukkan harga OTR atau nilai pasar kendaraan",
    calculate: "Hitung Estimasi Premi",
    selectVehicle: "Pilih jenis kendaraan Anda:",
    convLabel: "Konvensional",
    convDesc: "Mobil berbahan bakar bensin / solar",
    evLabel: "Mobil Listrik",
    evDesc: "EV / kendaraan bertenaga baterai",
    perYear: "/tahun · tarif",
    convDetailTitle: "Mobil Konvensional",
    convDetailDesc: "Kendaraan bermesin pembakaran internal (bensin / solar / hybrid). Tarif normal sesuai ketentuan OJK.",
    annualPremium: "Estimasi Premi Tahunan",
    ratePerYear: "per tahun",
    ownRiskConv: "Own Risk (risiko sendiri) sesuai polis standar, umumnya Rp 300.000 – Rp 500.000 per kejadian tergantung perusahaan asuransi.",
    evDetailTitle: "Mobil Listrik (EV)",
    evDetailDesc: "Kendaraan bertenaga baterai / full electric. Menggunakan tarif ",
    evDetailDescBold: "maksimal OJK",
    evDetailDescEnd: " karena biaya perbaikan komponen EV yang lebih tinggi.",
    evMaxRate: "(rate maksimal)",
    ownRiskEVTitle: "Own Risk (OR) Khusus Mobil Listrik",
    ownRiskEVDesc: "Risiko sendiri sebesar ",
    ownRiskEVAmount: "Rp 500.000 per kejadian",
    ownRiskEVEnd: ". Artinya setiap klaim, tertanggung menanggung biaya pertama sebesar Rp 500.000.",
    disclaimer: "* Estimasi berdasarkan tarif acuan OJK. Premi final ditentukan perusahaan asuransi sesuai kondisi kendaraan.",
    discount: "Dapatkan ",
    discountAmount: "diskon s/d Rp 1.000.000",
    discountEnd: " dengan menghubungi langsung!",
    ctaButton: "Hubungi Langsung & Klaim Diskon",
    waText: "Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20mobil",
    waTextEV: "Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20mobil%20listrik%20di%20Batam",
  },
  en: {
    heading: "Car Premium Calculator",
    subheading: "Premium estimate based on official OJK rates – Region 1 (Batam & Kepulauan Riau)",
    regionTitle: "Region 1 – Batam & Kepulauan Riau",
    regionSub: "OJK rates for Sumatra including Batam, Bintan, Karimun",
    insuranceType: "Insurance Type",
    allriskSub: "All damage covered",
    tloSub: "Total loss & theft only",
    vehiclePrice: "Vehicle Price (IDR)",
    placeholder: "e.g. 250000000",
    priceHint: "Enter OTR price or current market value of the vehicle",
    calculate: "Calculate Premium Estimate",
    selectVehicle: "Select your vehicle type:",
    convLabel: "Conventional",
    convDesc: "Petrol / diesel engine vehicle",
    evLabel: "Electric Vehicle",
    evDesc: "EV / battery-powered vehicle",
    perYear: "/year · rate",
    convDetailTitle: "Conventional Vehicle",
    convDetailDesc: "Internal combustion engine vehicle (petrol / diesel / hybrid). Standard OJK rate applies.",
    annualPremium: "Estimated Annual Premium",
    ratePerYear: "per year",
    ownRiskConv: "Own Risk per standard policy, typically IDR 300,000 – IDR 500,000 per incident depending on the insurer.",
    evDetailTitle: "Electric Vehicle (EV)",
    evDetailDesc: "Full electric / battery-powered vehicle. Uses the OJK ",
    evDetailDescBold: "maximum rate",
    evDetailDescEnd: " due to higher EV component repair costs.",
    evMaxRate: "(max rate)",
    ownRiskEVTitle: "Own Risk (OR) for Electric Vehicles",
    ownRiskEVDesc: "Own Risk is set at ",
    ownRiskEVAmount: "IDR 500,000 per incident",
    ownRiskEVEnd: ". This means for every claim, the insured bears the first IDR 500,000.",
    disclaimer: "* Estimate based on OJK reference rates. Final premium is determined by the insurer based on vehicle condition.",
    discount: "Get ",
    discountAmount: "discount up to IDR 1,000,000",
    discountEnd: " by contacting us directly!",
    ctaButton: "Contact Now & Claim Discount",
    waText: "Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20car%20insurance",
    waTextEV: "Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20electric%20vehicle%20insurance%20in%20Batam",
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
interface KalkulatorMobilProps {
  lang?: "id" | "en";
}

export default function KalkulatorMobil({ lang = "id" }: KalkulatorMobilProps) {
  const t = TEXT[lang];

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
    const rateListrik = rate * 1.1;
    const premiumKonvensional = (value * 1_000_000 * rate) / 100;
    const premiumListrik = (value * 1_000_000 * rateListrik) / 100;
    setResult({ konvensional: premiumKonvensional, listrik: premiumListrik, rate, rateListrik });
  }

  const waLink = `https://wa.me/6281373336728?text=${vehicleType === "listrik" ? t.waTextEV : t.waText}`;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2">
          {t.heading}
        </h2>
        <p className="text-[#64748b]">{t.subheading}</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 shadow-sm">
        {/* Region badge */}
        <div className="flex items-center gap-2 mb-6 px-4 py-3 bg-[#0a1628]/5 rounded-xl border border-[#0a1628]/10">
          <span className="text-lg">📍</span>
          <div>
            <span className="font-display font-bold text-sm text-[#0a1628]">{t.regionTitle}</span>
            <p className="text-xs text-[#64748b]">{t.regionSub}</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Insurance Type */}
          <div>
            <label className="block font-display font-semibold text-[#0a1628] mb-3">
              {t.insuranceType}
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "allrisk", label: "All Risk (Comprehensive)", sub: t.allriskSub },
                { val: "tlo",     label: "TLO (Total Loss Only)",    sub: t.tloSub },
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

          {/* Vehicle Price */}
          <div>
            <label className="block font-display font-semibold text-[#0a1628] mb-2">
              {t.vehiclePrice}
            </label>
            <input
              type="text"
              inputMode="numeric"
              placeholder={t.placeholder}
              value={vehicleValue}
              onChange={(e) => { setVehicleValue(e.target.value); setResult(null); }}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] focus:border-[#1a4fa0] outline-none text-[#0a1628] font-medium transition-colors"
            />
            <p className="text-xs text-[#64748b] mt-1.5">{t.priceHint}</p>
          </div>

          <button
            onClick={calculate}
            className="w-full py-4 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] text-white font-bold rounded-xl hover:shadow-lg transition-all text-lg"
          >
            {t.calculate}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-6 space-y-4">
            <p className="text-center text-xs text-[#64748b]">
              {type === "allrisk" ? "All Risk" : "TLO"} · {t.regionTitle} · {t.selectVehicle}
            </p>

            {/* Toggle conventional / EV */}
            <div className="grid grid-cols-2 gap-3">
              {/* Conventional */}
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
                  <span className="font-display font-bold text-sm text-[#0a1628]">{t.convLabel}</span>
                </div>
                <p className="text-xs text-[#64748b] mb-2 leading-relaxed">{t.convDesc}</p>
                <div className="font-display font-bold text-lg text-[#0a1628]">
                  {formatRupiah(result.konvensional)}
                </div>
                <div className="text-xs text-[#64748b] mt-0.5">
                  {t.perYear} {result.rate.toFixed(2)}%
                </div>
              </button>

              {/* Electric */}
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
                  <span className="font-display font-bold text-sm text-[#0a1628]">{t.evLabel}</span>
                </div>
                <p className="text-xs text-[#64748b] mb-2 leading-relaxed">{t.evDesc}</p>
                <div className="font-display font-bold text-lg text-[#c9a84c]">
                  {formatRupiah(result.listrik)}
                </div>
                <div className="text-xs text-[#64748b] mt-0.5">
                  {t.perYear} {result.rateListrik.toFixed(2)}%
                </div>
              </button>
            </div>

            {/* Detail card */}
            <div className="p-5 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] rounded-2xl text-white">
              {vehicleType === "konvensional" ? (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">⛽</span>
                    <h3 className="font-display font-bold text-[#c9a84c]">{t.convDetailTitle}</h3>
                  </div>
                  <p className="text-white/60 text-xs mb-4 leading-relaxed">{t.convDetailDesc}</p>
                  <div className="bg-white/10 rounded-xl p-4 mb-4 text-center">
                    <div className="text-white/60 text-xs mb-1">{t.annualPremium}</div>
                    <div className="font-display font-bold text-2xl">{formatRupiah(result.konvensional)}</div>
                    <div className="text-white/40 text-xs mt-1">
                      {lang === "en" ? "Rate" : "Tarif"} {result.rate.toFixed(2)}% {t.ratePerYear}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-white/60 mb-4">
                    <span className="text-[#c9a84c] mt-0.5">ℹ️</span>
                    <span>{t.ownRiskConv}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">⚡</span>
                    <h3 className="font-display font-bold text-[#c9a84c]">{t.evDetailTitle}</h3>
                  </div>
                  <p className="text-white/60 text-xs mb-4 leading-relaxed">
                    {t.evDetailDesc}<strong className="text-white">{t.evDetailDescBold}</strong>{t.evDetailDescEnd}
                  </p>
                  <div className="bg-[#c9a84c]/20 rounded-xl p-4 mb-3 text-center border border-[#c9a84c]/40">
                    <div className="text-[#c9a84c] text-xs mb-1">{t.annualPremium}</div>
                    <div className="font-display font-bold text-2xl text-[#f0d080]">{formatRupiah(result.listrik)}</div>
                    <div className="text-white/40 text-xs mt-1">
                      {lang === "en" ? "Rate" : "Tarif"} {result.rateListrik.toFixed(2)}% {t.ratePerYear} {t.evMaxRate}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl mb-4">
                    <span className="text-base mt-0.5">⚠️</span>
                    <div>
                      <p className="text-xs font-bold text-[#f0d080] mb-0.5">{t.ownRiskEVTitle}</p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {t.ownRiskEVDesc}<strong className="text-white">{t.ownRiskEVAmount}</strong>{t.ownRiskEVEnd}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Disclaimer & CTA */}
              <p className="text-white/40 text-xs mb-3">{t.disclaimer}</p>
              <div className="flex items-center gap-2 mb-3 px-4 py-2.5 bg-[#c9a84c]/20 border border-[#c9a84c]/50 rounded-xl">
                <span>🎁</span>
                <p className="text-xs text-[#f0d080] font-semibold leading-snug">
                  {t.discount}<span className="text-white font-bold">{t.discountAmount}</span>{t.discountEnd}
                </p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-center hover:bg-[#f0d080] transition-colors"
              >
                {t.ctaButton}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
