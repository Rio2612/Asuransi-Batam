"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import { Calculator, MessageCircle, Info } from "lucide-react";

const WILAYAH = [
  { label: "Wilayah 1 (Sumatera, termasuk Batam)", rate_ar: 2.11, rate_tlo: 0.47 },
  { label: "Wilayah 2 (DKI Jakarta, Banten, Jawa Barat)", rate_ar: 1.76, rate_tlo: 0.42 },
  { label: "Wilayah 3 (Selain Wilayah 1 & 2)", rate_ar: 1.71, rate_tlo: 0.32 },
];

function fmt(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function KalkulatorMotorClient() {
  const [harga, setHarga] = useState("");
  const [wilayah, setWilayah] = useState(0);
  const [jenis, setJenis] = useState<"ar" | "tlo">("tlo");
  const [result, setResult] = useState<{ premi: number; rate: number } | null>(null);

  const calculate = () => {
    const nilai = parseInt(harga.replace(/\D/g, ""), 10);
    if (!nilai || nilai <= 0) return;
    const w = WILAYAH[wilayah];
    const rate = jenis === "ar" ? w.rate_ar : w.rate_tlo;
    const premi = Math.round((nilai * rate) / 100);
    setResult({ premi, rate });
  };

  const hargaNum = parseInt(harga.replace(/\D/g, ""), 10) || 0;

  return (
    <>
      <section className="pt-32 pb-16 px-4" style={{ background: "linear-gradient(135deg, #0a1628 0%, #132040 60%, #1e3a6e 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <Calculator size={32} style={{ color: "#0a1628" }} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Kalkulator Premi Asuransi Motor
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Hitung estimasi premi asuransi sepeda motor All Risk & TLO. Berdasarkan tarif resmi OJK. Gratis & instan.
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0a1628" }}>
                  Harga Motor (Nilai Pertanggungan)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">Rp</span>
                  <input
                    type="text"
                    value={harga}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/\D/g, "");
                      setHarga(raw ? parseInt(raw).toLocaleString("id-ID") : "");
                      setResult(null);
                    }}
                    placeholder="Contoh: 25.000.000"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400"
                  />
                </div>
                {hargaNum > 0 && <p className="text-xs text-gray-400 mt-1">{fmt(hargaNum)}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0a1628" }}>Wilayah</label>
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

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0a1628" }}>Jenis Polis</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: "ar", label: "All Risk", desc: "Kerusakan ringan & berat" },
                    { val: "tlo", label: "TLO", desc: "Kehilangan & rusak total" },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => { setJenis(opt.val as "ar" | "tlo"); setResult(null); }}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${jenis === opt.val ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
                    >
                      <div className={`text-sm font-semibold ${jenis === opt.val ? "text-blue-700" : ""}`} style={{ color: jenis === opt.val ? undefined : "#0a1628" }}>{opt.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={calculate}
                className="w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
              >
                <Calculator size={16} className="inline mr-2" /> Hitung Estimasi Premi
              </button>
            </div>

            {result && (
              <div className="mt-6 p-5 rounded-xl" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
                <p className="text-gray-300 text-sm mb-1">Estimasi Premi per Tahun</p>
                <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>{fmt(result.premi)}</p>
                <p className="text-gray-400 text-xs mb-4">Tarif {result.rate}% × {fmt(hargaNum)}</p>
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-xs mb-4">
                  ⚠️ Estimasi berdasarkan tarif acuan OJK. Premi aktual dapat berbeda.
                </div>
                <a
                  href={WHATSAPP_URL(`Halo Rio, estimasi asuransi motor saya:\n- Nilai: ${fmt(hargaNum)}\n- Jenis: ${jenis === "ar" ? "All Risk" : "TLO"}\n- Estimasi: ${fmt(result.premi)}/tahun\nBoleh minta penawaran?`)}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm"
                  style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
                >
                  <MessageCircle size={16} /> Minta Penawaran via WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kalkulator-premi/mobil" className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-all">
              Kalkulator Premi Mobil →
            </Link>
            <Link href="/blog/perbedaan-all-risk-dan-tlo" className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-all">
              All Risk vs TLO →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
