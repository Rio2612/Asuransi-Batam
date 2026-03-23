import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Redirect /index.html → homepage (fixes old indexed URLs)
      {
        source: "/index.html",
        destination: "/",
        permanent: true, // 301 redirect – tells Google to update its index
      },
      // Redirect any other common legacy HTML pages
      {
        source: "/home.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/tentang-kami",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/kontak",
        permanent: true,
      },
      // Wildcard: catch any .html file not handled above → homepage
      {
        source: "/:path*.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
