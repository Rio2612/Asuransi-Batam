// next.config.ts  ← VERSI FINAL (semua sub-pages sudah selesai)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [] },

  async redirects() {
    return [
      // Migrasi domain lama (.biz.id) → domain baru (.com)
      // CATATAN: rule ini hanya akan bekerja jika domain asuransibatam.biz.id
      // dan www.asuransibatam.biz.id di-assign ke project Vercel yang SAMA
      // dengan project ini. Jika tidak, redirect harus dikonfigurasi di
      // tempat domain lama itu di-hosting (DNS/hosting provider domain lama).
      { source: "/:path*", has: [{ type: "host", value: "asuransibatam.biz.id" }], destination: "https://asuransibatam.com/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "www.asuransibatam.biz.id" }], destination: "https://asuransibatam.com/:path*", permanent: true },

      // www → non-www (domain baru)
      { source: "/:path*", has: [{ type: "host", value: "www.asuransibatam.com" }], destination: "https://asuransibatam.com/:path*", permanent: true },
      
      // Legacy HTML
      { source: "/index.html",   destination: "/",             permanent: true },
      { source: "/home.html",    destination: "/",             permanent: true },
      { source: "/about.html",   destination: "/tentang-kami", permanent: true },
      { source: "/contact.html", destination: "/kontak",       permanent: true },
      { source: "/:path*.html",  destination: "/",             permanent: true },
      
      // Alat Berat Fix
      { source: "/asuransi-kendaraan/asuransi-dumptruck",     destination: "/asuransi-kendaraan/asuransi-dump-truck", permanent: true }, // Menggunakan 301 permanent redirect untuk SEO
      
      // Solusi Kanibalisme Konten: Blog → Halaman Induk Layanan
      { source: "/blog/asuransi-mobil-batam", destination: "/asuransi-kendaraan/asuransi-mobil-batam", permanent: true },
      { source: "/blog/cara-klaim-asuransi-mobil", destination: "/blog/cara-klaim-asuransi-mobil-batam", permanent: true },
    ];
  },
};

export default nextConfig;
