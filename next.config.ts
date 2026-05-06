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
      // Blog slug fix
      { source: "/blog/asuransi-mobil-batam", destination: "/blog/cara-klaim-asuransi-mobil-batam", permanent: true },
      // EN pages not yet built
      { source: "/en/motorcycle-premium-calculator", destination: "/en/car-premium-calculator", permanent: false },
      { source: "/en/blog/:slug", destination: "/en/blog", permanent: false },
      
    ];
  },
};

export default nextConfig;
