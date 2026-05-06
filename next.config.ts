import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },

  async redirects() {
    return [
      // ── www → non-www (308 Permanent – SEO safe, preserves method) ──────
      // Gunakan 308 bukan 307:
      //   307 = Temporary Redirect (Google tidak transfer PageRank)
      //   308 = Permanent Redirect  (Google transfer PageRank, seperti 301
      //          tapi method POST juga ikut – lebih aman untuk modern web)
      // Vercel sudah handle ini di dashboard, tapi kita set di sini
      // sebagai fallback jika traffic lewat Next.js server langsung.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.asuransibatam.biz.id" }],
        destination: "https://asuransibatam.biz.id/:path*",
        permanent: true, // → 308
      },

      // ── Legacy HTML pages → canonical URLs ──────────────────────────────
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/home.html",  destination: "/", permanent: true },
      { source: "/about.html", destination: "/tentang-kami", permanent: true },
      { source: "/contact.html", destination: "/kontak", permanent: true },
      { source: "/:path*.html", destination: "/", permanent: true },

      // ── Blog slug fix – pisahkan konten klaim dari halaman produk ────────
      // Sebelumnya /blog/asuransi-mobil-batam bersaing di GSC dengan
      // /asuransi-kendaraan/asuransi-mobil-batam (slug terlalu mirip).
      // Slug baru lebih deskriptif sesuai isi artikel (cara klaim).
      {
        source: "/blog/asuransi-mobil-batam",
        destination: "/blog/cara-klaim-asuransi-mobil-batam",
        permanent: true, // → 308, PageRank ikut berpindah
      },
    ];
  },
};

export default nextConfig;
