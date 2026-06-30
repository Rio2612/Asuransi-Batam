import type { Metadata } from "next";
import KalkulatorMotor from "@/components/KalkulatorMotor";

export const metadata: Metadata = {
  title: "Kalkulator Premi Asuransi Motor Batam – Cek Tarif OJK Sekarang, Gratis",
  description: "Berapa premi asuransi motor Anda di Batam? Hitung langsung pakai tarif resmi OJK — All Risk mulai 1,76%, TLO mulai 0,47%. Hasil instan, tanpa daftar, langsung hubungi agen.",
  alternates: {
    canonical: "https://asuransibatam.com/kalkulator-premi-motor",
    languages: {
      id: "https://asuransibatam.com/kalkulator-premi-motor",
      en: "https://asuransibatam.com/en/motorcycle-insurance-calculator",
    },
  },
};

export default function KalkulatorPremiMotorPage() {
  return <KalkulatorMotor />;
}
