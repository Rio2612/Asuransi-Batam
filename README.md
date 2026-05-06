# Panduan Implementasi Bilingual – AsuransiBatam.biz.id

## File yang Diberikan

| File | Ganti File Lama |
|---|---|
| `app/layout.tsx` | `app/layout.tsx` |
| `app/sitemap.ts` | `app/sitemap.ts` |
| `next.config.ts` | `next.config.ts` |
| `components/Navbar.tsx` | `components/Navbar.tsx` |
| `components/WhatsAppButton.tsx` | `components/WhatsAppButton.tsx` |
| `app/en/layout.tsx` | **BARU** – buat file ini |
| `app/en/page.tsx` | **BARU** – buat file ini |

---

## Langkah Implementasi

### Step 1 – Ganti file yang ada
Copy-paste konten file ke project Anda sesuai tabel di atas.

### Step 2 – Buat folder `app/en/`
```
app/
├── en/
│   ├── layout.tsx    ← baru
│   └── page.tsx      ← baru (homepage English)
```

### Step 3 – Test lokal
```bash
npm run dev
```
Buka:
- http://localhost:3000 → halaman Indonesia (tidak berubah)
- http://localhost:3000/en → halaman English baru ✅
- Klik tombol `EN` di navbar → pindah ke /en ✅
- Klik tombol `ID` di halaman /en → kembali ke / ✅

### Step 4 – Build halaman English berikutnya (prioritas)
Duplikat pola yang sama untuk halaman pillar:

```
app/en/
├── layout.tsx
├── page.tsx                          ✅ sudah ada
├── property-insurance/
│   └── page.tsx                      ← buat ini berikutnya
├── vehicle-insurance/
│   └── page.tsx
├── machinery-insurance/
│   └── page.tsx
├── liability-insurance/
│   └── page.tsx
├── engineering-insurance/
│   └── page.tsx
├── about-us/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── blog/
│   └── page.tsx
├── car-premium-calculator/
│   └── page.tsx
└── motorcycle-premium-calculator/
    └── page.tsx
```

Setiap kali satu halaman selesai, **hapus redirect sementara** (permanent: false)
yang bersangkutan di `next.config.ts`.

---

## Cara Kerja Language Switcher

Navbar mendeteksi bahasa dari URL:
- URL mulai dengan `/en` → EN mode
- URL lainnya → ID mode

Tombol `EN` / `ID` menggunakan URL_MAP di Navbar.tsx untuk
navigasi langsung ke versi bahasa yang tepat dari halaman yang sedang dibuka.

---

## SEO Checklist

- [x] Halaman Indonesia tidak berubah (SEO aman)
- [x] `hreflang` tag di root layout
- [x] `alternates.languages` di metadata setiap halaman English
- [x] Sitemap mencakup semua URL ID + EN
- [x] Redirect 307 sementara mencegah 404 selama pengembangan
- [x] OpenGraph `alternateLocale` ditambahkan

---

## Catatan Penting

1. **Jangan ubah URL Indonesia** – SEO yang sudah ada tetap aman.
2. **Redirect di next.config.ts** bersifat sementara (permanent: false / 307).
   Ubah ke `permanent: true` (308) setelah halaman English benar-benar ada.
3. **WhatsApp text** otomatis berganti bahasa sesuai halaman.
4. **Terjemahan** – jangan gunakan Google Translate mentah. Gunakan terjemahan
   manual atau AI review untuk konten yang sudah ada di page.tsx English.
