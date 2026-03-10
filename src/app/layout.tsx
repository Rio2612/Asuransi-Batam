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
  metadataBase: new URL("https://asuransibatam.id"),
  title: {
    default: "Asuransi Batam – Konsultan Asuransi Kerugian Terpercaya | Rio Mardiansyah",
    template: "%s | Asuransi Batam",
  },
  description:
    "Rio Mardiansyah, konsultan asuransi kerugian profesional di Batam. Solusi asuransi properti, kendaraan, alat berat, liability & engineering. Pengalaman 10+ tahun.",
  keywords: [
    "asuransi batam",
    "konsultan asuransi batam",
    "asuransi mobil batam",
    "asuransi properti batam",
    "asuransi alat berat batam",
  ],
  authors: [{ name: "Rio Mardiansyah" }],
  creator: "Rio Mardiansyah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://asuransibatam.id",
    siteName: "Asuransi Batam",
    title: "Asuransi Batam – Konsultan Asuransi Kerugian Terpercaya",
    description:
      "Konsultan asuransi kerugian profesional di Batam. Properti, kendaraan, alat berat, liability & engineering.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asuransi Batam – Rio Mardiansyah",
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
