// app/en/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Layout khusus untuk semua halaman English (/en/*)
// Root layout (app/layout.tsx) TIDAK perlu diubah.
// Layout ini di-nest otomatis di bawah RootLayout oleh Next.js App Router.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://asuransibatam.com"),
  title: {
    default: "Batam Insurance – Trusted General Insurance Consultant | Rio",
    template: "%s | Batam Insurance",
  },
  description:
    "Rio, professional general insurance consultant in Batam with 10+ years of experience. Property, vehicle, heavy equipment, liability & engineering insurance. Free consultation.",
  keywords: [
    "batam insurance",
    "insurance consultant batam",
    "car insurance batam",
    "property insurance batam",
    "heavy equipment insurance batam",
  ],
  authors: [{ name: "Rio" }],
  creator: "Rio",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: "https://asuransibatam.com/en",
    siteName: "Batam Insurance",
    title: "Batam Insurance – Trusted General Insurance Consultant",
    description:
      "Professional general insurance consultant in Batam. Property, vehicle, heavy equipment, liability & engineering.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Batam Insurance – Rio",
    description: "Professional general insurance consultant in Batam",
  },
  robots: { index: true, follow: true },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // No extra wrapper needed — RootLayout already provides <html>, <body>,
  // Navbar, Footer, WhatsAppButton. This layout just overrides metadata.
  return <>{children}</>;
}
