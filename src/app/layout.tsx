import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asuransibatam.biz.id"),
  title: {
    default: "Asuransi Batam – Konsultan Asuransi Kerugian Terpercaya | Rio",
    template: "%s | Asuransi Batam",
  },
  description:
    "Rio, konsultan asuransi kerugian profesional di Batam. Solusi asuransi properti, kendaraan, alat berat, liability & engineering. Pengalaman 10+ tahun.",
  keywords: [
    "asuransi batam",
    "konsultan asuransi batam",
    "asuransi mobil batam",
    "asuransi properti batam",
    "asuransi alat berat batam",
  ],
  authors: [{ name: "Rio" }],
  creator: "Rio",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://asuransibatam.biz.id",
    siteName: "Asuransi Batam",
    title: "Asuransi Batam – Konsultan Asuransi Kerugian Terpercaya",
    description:
      "Konsultan asuransi kerugian profesional di Batam. Properti, kendaraan, alat berat, liability & engineering.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asuransi Batam – Rio",
    description: "Konsultan asuransi kerugian profesional di Batam",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
