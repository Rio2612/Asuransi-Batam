// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://asuransibatam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [

    // ── Homepage ─────────────────────────────────────────────────────────────
    { url: `${BASE_URL}`,    lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/en`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // ────────────────────────────────────────────────────────────────────────
    // PILLAR PAGES – ID
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-properti`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-kendaraan`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-machinery`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-liability`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-marine`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-surety-bond`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // PILLAR PAGES – EN
    { url: `${BASE_URL}/en/property-insurance`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/vehicle-insurance`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/machinery-insurance`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/liability-insurance`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/engineering-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/marine-insurance`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/surety-bond-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – PROPERTI / PROPERTY
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-properti/asuransi-hotel-batam`,                      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-rumah-batam`,                      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-ruko-batam`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-gudang-batam`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-apartemen-batam`,                  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-pabrik-kawasan-industri-batam`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/property-insurance/hotel-insurance-batam`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/home-insurance-batam`,                  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/shophouse-insurance-batam`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/warehouse-insurance-batam`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/apartment-insurance-batam`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/factory-industrial-insurance-batam`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – KENDARAAN / VEHICLE
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-kendaraan/asuransi-mobil-batam`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-kendaraan/asuransi-dumptruck`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/vehicle-insurance/car-insurance-batam`,                    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/vehicle-insurance/dump-truck-insurance`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // PILLAR + SUB-PAGES – PERSONAL ACCIDENT (sebelumnya hilang dari sitemap)
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-personal-accident`,                                  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-personal-accident/pa-individu-keluarga`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-personal-accident/pa-karyawan-grup`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/personal-accident-insurance`,                              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/personal-accident-insurance/individual-family-pa`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/personal-accident-insurance/group-employee-pa`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – MACHINERY
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-machinery/asuransi-alat-berat`,                      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-machinery/asuransi-crane`,                           lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/machinery-insurance/heavy-equipment-insurance`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/machinery-insurance/crane-insurance`,                      lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – LIABILITY
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-liability/asuransi-limbah-b3`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-liability/public-liability`,                         lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/liability-insurance/b3-waste-insurance`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/liability-insurance/public-liability`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/hazardous-waste-insurance-batam`,                          lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – ENGINEERING
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-engineering/contractor-all-risk`,                    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-engineering/erection-all-risk`,                      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-engineering/cecr`,                                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/engineering-insurance/contractor-all-risk`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/engineering-insurance/erection-all-risk`,                  lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – MARINE
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-marine/marine-hull`,                                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-marine/marine-cargo`,                                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-marine/builders-risk`,                               lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/marine-insurance/marine-hull`,                             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/marine-insurance/marine-cargo`,                            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/marine-insurance/builders-risk`,                           lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – SURETY BOND
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-surety-bond/bid-bond`,                               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-surety-bond/performance-bond`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-surety-bond/advance-payment-bond`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-surety-bond/maintenance-bond`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/surety-bond-insurance/performance-bond`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/surety-bond-insurance/advance-payment-bond`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/surety-bond-insurance/maintenance-bond`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/difference-between-bid-bond-and-performance-bond`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ────────────────────────────────────────────────────────────────────────
    // TOOLS / KALKULATOR
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/kalkulator-premi-mobil`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/kalkulator-premi-motor`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kalkulator-premi/mobil`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kalkulator-premi/motor`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/en/car-premium-calculator`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // BLOG – ID
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/blog`,                                       lastModified: now,                    changeFrequency: "weekly",  priority: 0.8 },
    // Kendaraan
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-mobil-batam`,       lastModified: new Date("2026-04-30"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/perbedaan-all-risk-dan-tlo`,            lastModified: new Date("2025-03-05"), changeFrequency: "yearly",  priority: 0.7 },
    // Alat Berat
    { url: `${BASE_URL}/blog/asuransi-excavator-dan-bulldozer`,      lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-alat-berat-proyek-konstruksi`, lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-alat-berat-pertambangan`,      lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-pengiriman-mesin-alat-berat`,  lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    // Properti
    { url: `${BASE_URL}/blog/asuransi-properti-komersial-batam`,     lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-kebakaran-rumah`,   lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    // Liability
    { url: `${BASE_URL}/blog/pentingnya-asuransi-limbah-b3`,         lastModified: new Date("2025-02-20"), changeFrequency: "yearly",  priority: 0.7 },
    // Engineering
    { url: `${BASE_URL}/blog/asuransi-proyek-konstruksi-batam`,      lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-car`,               lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/perbedaan-car-dan-ear`,                 lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    // Marine
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-marine-cargo`,      lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/perbedaan-marine-hull-vs-cargo`,        lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-pengiriman-batam-singapore`,   lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-pengiriman-batam-jakarta`,     lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/premi-asuransi-marine-cargo-batam`,     lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-cargo-ekspor-batam`,           lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/builders-risk-untuk-galangan-kapal`,    lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-mendapatkan-asuransi-builders-risk-batam`,    lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/berapa-premi-asuransi-builders-risk-kapal-batam`,  lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/jenis-jenis-asuransi-kapal-armada`,               lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/premi-asuransi-kapal-batam-2026`,                  lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    // Tambahan blog yang sebelumnya hilang dari sitemap
    { url: `${BASE_URL}/blog/asuransi-motor-batam`,                            lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-dump-truck-batam-proyek-konstruksi`,     lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-erection-all-risk-batam`,                lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam`, lastModified: new Date("2026-05-08"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam`, lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/perbedaan-bid-bond-performance-bond`,             lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-mendapatkan-surety-bond-tender-proyek-batam`, lastModified: new Date("2026-07-02"), changeFrequency: "yearly",  priority: 0.7 },
    // Personal Accident
    { url: `${BASE_URL}/blog/asuransi-kecelakaan-diri-pekerja-industri-batam`, lastModified: new Date("2026-07-02"), changeFrequency: "yearly",  priority: 0.7 },

    // ────────────────────────────────────────────────────────────────────────
    // BLOG – EN
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/en/blog`,                                                        lastModified: now,                    changeFrequency: "weekly", priority: 0.8 },
    // Vehicle
    { url: `${BASE_URL}/en/blog/how-to-claim-car-insurance-batam`,                       lastModified: new Date("2026-04-30"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/how-to-claim-car-insurance-project`,                     lastModified: new Date("2026-04-30"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/all-risk-vs-tlo-car-insurance`,                          lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    // Heavy Equipment
    { url: `${BASE_URL}/en/blog/excavator-and-bulldozer-insurance-batam`,                lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/heavy-equipment-insurance-construction-projects`,        lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/mining-heavy-equipment-insurance`,                       lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/machinery-heavy-equipment-shipping-insurance-batam`,     lastModified: new Date("2026-05-08"), changeFrequency: "yearly", priority: 0.7 },
    // Property
    { url: `${BASE_URL}/en/blog/commercial-property-insurance-batam`,                    lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/how-to-claim-home-fire-insurance`,                       lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    // Liability
    { url: `${BASE_URL}/en/blog/hazardous-waste-insurance-batam`,                        lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    // Engineering
    { url: `${BASE_URL}/en/blog/construction-project-insurance-batam`,                   lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/difference-between-car-and-ear-insurance`,               lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    // Marine
    { url: `${BASE_URL}/en/blog/how-to-claim-marine-cargo-insurance`,                    lastModified: new Date("2026-04-30"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/marine-hull-vs-cargo-insurance`,                         lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/batam-singapore-shipping-insurance`,                     lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/batam-jakarta-cargo-insurance`,                          lastModified: new Date("2026-05-08"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/marine-cargo-insurance-premium-batam`,                   lastModified: new Date("2026-05-08"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/batam-export-cargo-insurance`,                           lastModified: new Date("2026-05-08"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/builders-risk-shipyard-insurance-batam`,                 lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/how-to-get-builders-risk-insurance-batam`,               lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },

    // ────────────────────────────────────────────────────────────────────────
    // INFO PAGES
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/tentang-kami`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/kontak`,       lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/lokasi`,       lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/en/about-us`,  lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/en/contact`,   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/en/location`,  lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  return staticPages;
}
