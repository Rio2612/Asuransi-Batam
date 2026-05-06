// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },

  async redirects() {
    return [
      // ── www → non-www (308 Permanent) ─────────────────────────────────────
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.asuransibatam.biz.id" }],
        destination: "https://asuransibatam.biz.id/:path*",
        permanent: true,
      },

      // ── Legacy HTML pages ──────────────────────────────────────────────────
      { source: "/index.html",   destination: "/",            permanent: true },
      { source: "/home.html",    destination: "/",            permanent: true },
      { source: "/about.html",   destination: "/tentang-kami", permanent: true },
      { source: "/contact.html", destination: "/kontak",      permanent: true },
      { source: "/:path*.html",  destination: "/",            permanent: true },

      // ── Blog slug fix ──────────────────────────────────────────────────────
      {
        source: "/blog/asuransi-mobil-batam",
        destination: "/blog/cara-klaim-asuransi-mobil-batam",
        permanent: true,
      },

      // ── English: halaman yang belum dibuat → fallback ke /en ──────────────
      // Hapus baris ini satu per satu setelah halaman English-nya dibuat.
      // Ini mencegah 404 sementara Anda masih membangun halaman English.

      {
        source: "/en/about-us",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/en/contact",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/en/blog",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/en/car-premium-calculator",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/en/motorcycle-premium-calculator",
        destination: "/en",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
