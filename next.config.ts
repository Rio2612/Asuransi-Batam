// next.config.ts  ← VERSI FINAL (semua sub-pages sudah selesai)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [] },

  async redirects() {
    return [
      // www → non-www
      { source: "/:path*", has: [{ type: "host", value: "www.asuransibatam.biz.id" }], destination: "https://asuransibatam.biz.id/:path*", permanent: true },
      
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
    ];
  },
};

export default nextConfig;
