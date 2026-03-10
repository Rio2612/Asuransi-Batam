"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { Calculator, MessageCircle } from "lucide-react";

const RATE_ALLRISK: Record<string, number> = {
  "Kategori 1 (s.d Rp 125 juta)": 0.0350,
  "Kategori 2 (Rp 125–200 juta)": 0.0295,
  "Kategori 3 (Rp 200–400 juta)": 0.0250,
  "Kategori 4 (Rp 400–800 juta)": 0.0220,
  "Kategori 5 (di atas Rp 800 juta)": 0.0180,
};

const RATE_TLO: Record<string, number> = {
  "Kategori 1 (s.d Rp 125 juta)": 0.0082,
  "Kategori 2 (Rp 125–200 juta)": 0.0063,
  "Kategori 3 (Rp 200–400 juta)": 0.0053,
  "Kategori 4 (Rp 400–800 juta)": 0.0047,
  "Kategori 5 (di atas Rp 800 juta)": 0.0042,
};

function getCategory(value: number): string {
  if (value <= 125_000_000) return "Kategori 1 (s.d Rp 125 juta)";
  if (value <= 200_000_000) return "Kategori 2 (Rp 125–200 juta)";
  if (value <= 400_000_000) return "Kategori 3 (Rp 200–400 juta)";
  if (value <= 800_000_000) return "Kategori 4 (Rp 400–800 juta)";
  return "Kategori 5 (di atas Rp 800 juta)";
}

function fmt(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export function PremiumCalculatorMobil() {
  const [nilai, setNilai] = useState("");
  const [tipe, setTipe] = useState<"allrisk" | "tlo">("allrisk");
  const [result, setResult] = useState<{
    premi: number;
    rate: number;
    kategori: string;
  } | null>(null);
  const [error, setError] = useState("");

  const hitung = () => {
    const n = parseInt(nilai.replace(/\D/g, ""), 10);
    if (!n || n < 10_000_000) {
      setError("Masukkan nilai kendaraan minimal Rp 10.000.000");
      setResult(null);
      return;
    }
    setError("");
    const kategori = getCategory(n);
    const rate = tipe === "allrisk" ? RATE_ALLRISK[kategori] : RATE_TLO[kategori];
    const premi = n * rate;
    setResult({ premi, rate, kategori });
  };

  const handleNilai = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const formatted = raw ? parseInt(raw).toLocaleString("id-ID") : "";
    setNilai(formatted);
  };

  const waMsg = result
    ? `Halo Rio, saya sudah hitung premi ${tipe === "allrisk" ? "All Risk" : "TLO"} untuk kendaraan nilai ${nilai}. Estimasi premi ${fmt(result.premi)}/tahun. Bisa konsultasi lebih lanjut?`
    : "Halo Rio, saya ingin konsultasi asuransi mobil";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100" style={{ background: "linear-gradient(135deg, #f8faff, #eef2ff)" }}>
        <div className="flex items-center gap-3 mb-1">
          <Calculator size={22} style={{ color: "#1a4fa0" }} />
          <h3 className="font-bold text-navy" style={{ fontFamily: "Syne, sans-serif" }}>
            Kalkulator Premi Asuransi Mobil
          </h3>
        </div>
        <p className="text-gray-500 text-sm">
          Berdasarkan tarif OJK (Surat Edaran OJK No. 6/SEOJK.05/2017)
        </p>
      </div>

      <div className="p-6 space-y-5">
        {/* Tipe */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Jenis Asuransi</label>
          <div className="grid grid-cols-2 gap-3">
            {(["allrisk", "tlo"] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTipe(t); setResult(null); }}
                className="py-3 px-4 rounded-xl text-sm font-semibold border-2 transition-all"
                style={{
                  borderColor: tipe === t ? "#1a4fa0" : "#e2e8f0",
                  background: tipe === t ? "#1a4fa0" : "white",
                  color: tipe === t ? "white" : "#64748b",
                }}
              >
                {t === "allrisk" ? "All Risk (Comprehensive)" : "TLO (Total Loss Only)"}
              </button>
            ))}
          </div>
        </div>

        {/* Nilai */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Nilai Kendaraan (Harga Pasar)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">Rp</span>
            <input
              type="text"
              inputMode="numeric"
              value={nilai}
              onChange={handleNilai}
              placeholder="200.000.000"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <button
          onClick={hitung}
          className="w-full py-3.5 font-bold text-navy rounded-xl transition-all hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
        >
          Hitung Premi Sekarang
        </button>

        {/* Result */}
        {result && (
          <div className="rounded-xl p-5 border" style={{ background: "#f0f4ff", borderColor: "#c7d7f5" }}>
            <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">{result.kategori}</p>
            <p className="text-xs text-gray-500 mb-3">Tarif: {(result.rate * 100).toFixed(2)}% per tahun</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "#0a1628" }}>
                {fmt(result.premi)}
              </span>
              <span className="text-gray-500 text-sm">/ tahun</span>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              ≈ {fmt(result.premi / 12)} / bulan
            </p>
            <p className="text-xs text-gray-400 mt-3 italic">
              *Estimasi berdasarkan tarif OJK. Premi final dapat berbeda setelah survey kendaraan.
            </p>
            <a
              href={WHATSAPP_URL(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white"
              style={{ background: "#25d366" }}
            >
              <MessageCircle size={18} />
              Konsultasi via WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
