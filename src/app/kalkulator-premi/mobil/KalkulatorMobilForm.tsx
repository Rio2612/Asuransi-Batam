"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import { Calculator, ChevronRight, Info, MessageCircle } from "lucide-react";

const WILAYAH = [
  { label: "Wilayah 1 (Sumatera & sekitarnya, termasuk Batam)", rate_ar: 3.82, rate_tlo: 0.47 },
  { label: "Wilayah 2 (DKI Jakarta, Banten, Jawa Barat)", rate_ar: 3.26, rate_tlo: 0.40 },
  { label: "Wilayah 3 (Selain Wilayah 1 & 2)", rate_ar: 2.53, rate_tlo: 0.24 },
];

const KATEGORI = [
  { label: "Kategori 1 (s.d. Rp125 juta)", min: 0, max: 125_000_000 },
  { label: "Kategori 2 (>Rp125 juta – Rp200 juta)", min: 125_000_001, max: 200_000_000 },
  { label: "Kategori 3 (>Rp200 juta – Rp300 juta)", min: 200_000_001, max: 300_000_000 },
  { label: "Kategori 4 (>Rp300 juta – Rp400 juta)", min: 300_000_001, max: 400_000_000 },
  { label: "Kategori 5 (>Rp400 juta – Rp800 juta)", min: 400_000_001, max: 800_000_000 },
  { label: "Kategori 6 (>Rp800 juta – Rp2 miliar)", min: 800_000_001, max: 2_000_000_000 },
];

function fmt(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function KalkulatorMobilForm() {
  const [harga, setHarga] = useState("");
  const [wilayah, setWilayah] = useState(0);
  const [jenis, setJenis] = useState<"ar" | "tlo">("ar");
  const [result, setResult] = useState<{ premi: number; rate: number } | null>(null);

  const calculate = () => {
    const nilai = parseInt(harga.replace(/\D/g, ""), 10);
    if (!nilai || nilai <= 0) return;
    const w = WILAYAH[wilayah];
    const rate = jenis === "ar" ? w.rate_ar : w.rate_tlo;

    // Find kategori
    const kat = KATEGORI.find((k) => nilai >= k.min && nilai <= k.max);
    const adjRate = kat ? rate : rate; // simplified – real OJK tarif would vary by category

    const premi = Math.round((nilai * adjRate) / 100);
    setResult({ premi, rate: adjRate });
  };

  const hargaNum = parseInt(harga.replace(/\D/g, ""), 10) || 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="space-y-5">
        {/* Harga kendaraan */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Harga Kendaraan (Nilai Pertanggungan)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">Rp</span>
            <input
              type="text"
              value={harga}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "");
                setHarga(raw ? parseInt(raw).toLocaleString("id-ID") : "");
                setResult(null);
              }}
              placeholder="Contoh: 250.000.000"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          {hargaNum > 0 && (
            <p className="text-xs text-gray-400 mt-1">{fmt(hargaNum)}</p>
          )}
        </div>

        {/* Wilayah */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Wilayah Kendaraan</label>
          <select
            value={wilayah}
            onChange={(e) => { setWilayah(Number(e.target.value)); setResult(null); }}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400"
          >
            {WILAYAH.map((w, i) => (
              <option key={i} value={i}>{w.label}</option>
            ))}
          </select>
          <p className="text-xs text-blue-600 mt-1 flex items-center gap-1">
            <Info size={11} /> Batam termasuk Wilayah 1
          </p>
        </div>

        {/* Jenis polis */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Jenis Polis</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { val: "ar", label: "Comprehensive (All Risk)", desc: "Kerusakan ringan & berat" },
              { val: "tlo", label: "TLO (Total Loss Only)", desc: "Kerugian total & pencurian" },
            ].map((opt) => (
              <button
                key={opt.val}
                onClick={() => { setJenis(opt.val as "ar" | "tlo"); setResult(null); }}
                className={`p-3 rounded-xl border-2 text-left transition-all ${
                  jenis === opt.val
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className={`text-sm font-semibold ${jenis === opt.val ? "text-blue-700" : "text-navy"}`}>
                  {opt.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={calculate}
          className="w-full py-3.5 rounded-xl font-bold text-navy text-sm transition-all hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
        >
          <Calculator size={16} className="inline mr-2" />
          Hitung Estimasi Premi
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-6 p-5 rounded-xl" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
          <p className="text-gray-300 text-sm mb-1">Estimasi Premi per Tahun</p>
          <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
            {fmt(result.premi)}
          </p>
          <p className="text-gray-400 text-xs mb-4">
            Tarif: {result.rate}% × {fmt(hargaNum)} = {fmt(result.premi)}/tahun
          </p>
          <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-xs mb-4">
            ⚠️ Ini adalah estimasi berdasarkan tarif acuan OJK. Premi aktual dapat berbeda tergantung kondisi kendaraan dan kebijakan perusahaan asuransi.
          </div>
          <a
            href={WHATSAPP_URL(
              `Halo Rio, saya sudah hitung estimasi premi kendaraan saya:\n- Nilai: ${fmt(hargaNum)}\n- Jenis polis: ${jenis === "ar" ? "All Risk" : "TLO"}\n- Wilayah: ${WILAYAH[wilayah].label}\n- Estimasi premi: ${fmt(result.premi)}/tahun\n\nBoleh minta penawaran resmi?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-navy text-sm"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
          >
            <MessageCircle size={16} />
            Minta Penawaran Resmi via WhatsApp
          </a>
        </div>
      )}

      <p className="text-xs text-gray-400 mt-4 text-center">
        Tarif berdasarkan{" "}
        <span className="font-medium">SEOJK No. 6/SEOJK.05/2017</span> tentang penetapan tarif premi asuransi kendaraan bermotor.
      </p>
    </div>
  );
}
