import type { MetadataRoute } from "next";

const BASE_URL = "https://asuransibatam.biz.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage – highest priority
    { url: `${BASE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Pillar pages
    { url: `${BASE_URL}/asuransi-properti`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-kendaraan`,  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-machinery`,  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-liability`,  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-engineering`,lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Sub-pages Properti
    { url: `${BASE_URL}/asuransi-properti/asuransi-hotel-batam`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-rumah-batam`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Sub-pages Kendaraan
    { url: `${BASE_URL}/asuransi-kendaraan/asuransi-mobil-batam`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-kendaraan/asuransi-dumptruck`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Sub-pages Machinery
    { url: `${BASE_URL}/asuransi-machinery/asuransi-alat-berat`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-machinery/asuransi-crane`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Sub-pages Liability
    { url: `${BASE_URL}/asuransi-liability/asuransi-limbah-b3`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-liability/public-liability`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Tools / Kalkulator
    { url: `${BASE_URL}/kalkulator-premi-mobil`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/kalkulator-premi-motor`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Blog index
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Blog articles
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-mobil`,       lastModified: new Date("2025-03-10"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/perbedaan-all-risk-dan-tlo`,       lastModified: new Date("2025-03-05"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-mobil-batam`,             lastModified: new Date("2025-03-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog/pentingnya-asuransi-limbah-b3`,    lastModified: new Date("2025-02-20"), changeFrequency: "yearly", priority: 0.7 },

    // Info pages
    { url: `${BASE_URL}/tentang-kami`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/kontak`,       lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  return staticPages;
}
