// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://asuransibatam.biz.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    // ── Homepage ────────────────────────────────────────────────────────────
    { url: `${BASE_URL}`,     lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/en`,  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },

    // ── Pillar pages – ID ────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-properti`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-kendaraan`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-machinery`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-liability`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // ── Pillar pages – EN ────────────────────────────────────────────────────
    { url: `${BASE_URL}/en/property-insurance`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/vehicle-insurance`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/machinery-insurance`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/liability-insurance`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/engineering-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // ── Sub-pages Properti – ID ──────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-properti/asuransi-hotel-batam`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-rumah-batam`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-ruko-batam`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-gudang-batam`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Sub-pages Property – EN ──────────────────────────────────────────────
    { url: `${BASE_URL}/en/property-insurance/hotel-insurance-batam`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/home-insurance-batam`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/shophouse-insurance-batam`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/warehouse-insurance-batam`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Sub-pages Kendaraan – ID ─────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-kendaraan/asuransi-mobil-batam`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-kendaraan/asuransi-dumptruck`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Sub-pages Vehicle – EN ───────────────────────────────────────────────
    { url: `${BASE_URL}/en/vehicle-insurance/car-insurance-batam`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/vehicle-insurance/dump-truck-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Sub-pages Machinery – ID ─────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-machinery/asuransi-alat-berat`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-machinery/asuransi-crane`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Sub-pages Machinery – EN ─────────────────────────────────────────────
    { url: `${BASE_URL}/en/machinery-insurance/heavy-equipment-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/machinery-insurance/crane-insurance`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Sub-pages Liability – ID ─────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-liability/asuransi-limbah-b3`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-liability/public-liability`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Sub-pages Liability – EN ─────────────────────────────────────────────
    { url: `${BASE_URL}/en/liability-insurance/b3-waste-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/liability-insurance/public-liability`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Sub-pages Engineering – ID ───────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-engineering/contractor-all-risk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Sub-pages Engineering – EN ───────────────────────────────────────────
    { url: `${BASE_URL}/en/engineering-insurance/contractor-all-risk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Tools / Kalkulator ───────────────────────────────────────────────────
    { url: `${BASE_URL}/kalkulator-premi-mobil`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/kalkulator-premi-motor`,            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/en/car-premium-calculator`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/motorcycle-premium-calculator`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Blog – ID ────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/blog`,                                          lastModified: now,                    changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-mobil`,                lastModified: new Date("2025-03-10"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/perbedaan-all-risk-dan-tlo`,               lastModified: new Date("2025-03-05"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-mobil-batam`,                     lastModified: new Date("2025-03-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog/pentingnya-asuransi-limbah-b3`,            lastModified: new Date("2025-02-20"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-mobil-batam`,          lastModified: new Date("2026-04-30"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-excavator-dan-bulldozer`,         lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-alat-berat-proyek-konstruksi`,    lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-alat-berat-pertambangan`,         lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-properti-komersial-batam`,        lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-kebakaran-rumah`,      lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },

    // ── Blog – EN ────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/en/blog`,                                                         lastModified: now,                    changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/blog/how-to-claim-car-insurance-batam`,                        lastModified: new Date("2026-04-30"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/excavator-and-bulldozer-insurance-batam`,                 lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/heavy-equipment-insurance-construction-projects`,         lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/mining-heavy-equipment-insurance`,                        lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/commercial-property-insurance-batam`,                     lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/how-to-claim-home-fire-insurance`,                        lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },

    // ── Info pages – ID ──────────────────────────────────────────────────────
    { url: `${BASE_URL}/tentang-kami`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/kontak`,       lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // ── Info pages – EN ──────────────────────────────────────────────────────
    { url: `${BASE_URL}/en/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/en/contact`,  lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  return staticPages;
}
