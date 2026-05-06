# Asuransi Batam – Website Next.js 15.2.6

Website asuransi kerugian profesional untuk Rio Mardiansyah, Konsultan Asuransi Batam.

## Setup & Instalasi

```bash
# 1. Masuk ke folder project
cd asuransi-batam

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka di browser
# http://localhost:3000
```

## Build untuk Production

```bash
npm run build
npm start
```

## Struktur Halaman

### Halaman Utama
- `/` – Homepage (Hero, Produk, Keunggulan, Testimoni, FAQ)

### Produk Asuransi
- `/asuransi-properti` – Pilar Properti
  - `/asuransi-properti/asuransi-hotel-batam`
  - `/asuransi-properti/asuransi-rumah-batam`
- `/asuransi-kendaraan` – Pilar Kendaraan
  - `/asuransi-kendaraan/asuransi-mobil-batam` ← Ada Kalkulator Premi
  - `/asuransi-kendaraan/asuransi-dumptruck`
- `/asuransi-machinery` – Pilar Machinery
  - `/asuransi-machinery/asuransi-alat-berat`
  - `/asuransi-machinery/asuransi-crane`
- `/asuransi-liability` – Pilar Liability
  - `/asuransi-liability/asuransi-limbah-b3`
  - `/asuransi-liability/public-liability`
- `/asuransi-engineering`

### Blog / Artikel
- `/blog` – Daftar artikel
- `/blog/cara-klaim-asuransi-mobil`
- `/blog/perbedaan-all-risk-dan-tlo`
- `/blog/asuransi-mobil-batam`
- `/blog/pentingnya-asuransi-limbah-b3`

### Tools
- `/kalkulator-premi-mobil` – Kalkulator dengan tarif OJK wilayah 1/2/3
- `/kalkulator-premi-motor`

### Info
- `/tentang-kami` – Profil Rio Mardiansyah + Form Konsultasi
- `/kontak`

## SEO yang Sudah Terpasang

✅ Title + Meta Description unik setiap halaman
✅ Canonical URL setiap halaman
✅ Open Graph tags
✅ Schema JSON-LD: InsuranceAgency, LocalBusiness, Service, Article, FAQPage, Person
✅ URL SEO-friendly
✅ Structured data per halaman produk
✅ Internal linking antar halaman

