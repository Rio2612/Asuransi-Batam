import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO, schemaBreadcrumb } from "@/lib/seo";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection } from "@/components/ui/index";
import { MapPin, Clock, Phone, MessageCircle, Navigation } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Lokasi Konsultan Asuransi Batam – Batam Center, Kepulauan Riau",
  description:
    "Temukan lokasi kantor konsultan asuransi kerugian terpercaya di Batam Center. Rio Mardiansyah melayani seluruh wilayah Batam dan Kepulauan Riau. Hubungi sekarang!",
  canonical: "/lokasi",
});

const AREAS_SERVED = [
  "Batam Center", "Nagoya", "Baloi", "Sekupang", "Batu Aji",
  "Tanjung Uncang", "Tanjung Pinang", "Bintan", "Karimun", "Lingga",
  "Kawasan Industri Batamindo", "Kawasan Industri Kabil", "Muka Kuning",
];

const LOCAL_FAQS = [
  {
    q: "Di mana lokasi kantor Asuransi Batam?",
    a: "Kantor kami berlokasi di Batam Center, Kota Batam, Kepulauan Riau. Kami juga melayani kunjungan ke lokasi klien di seluruh wilayah Batam.",
  },
  {
    q: "Apakah bisa konsultasi di luar jam kantor?",
    a: "Ya, untuk keperluan mendesak atau klien korporasi, kami bisa mengatur jadwal konsultasi di luar jam kantor reguler. Hubungi via WhatsApp untuk penjadwalan.",
  },
  {
    q: "Apakah melayani wilayah di luar Batam?",
    a: "Ya, kami melayani seluruh Kepulauan Riau termasuk Tanjung Pinang, Bintan, Karimun, dan pulau-pulau lainnya. Konsultasi bisa dilakukan secara online.",
  },
];

export default function LokasPage() {
  return (
    <>
      {/* LocalBusiness schema for location page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        "@id": `${SITE.url}/#localbusiness`,
        "name": "Asuransi Batam – Rio Mardiansyah",
        "url": SITE.url,
        "telephone": SITE.phone,
        "email": SITE.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Batam Center",
          "addressLocality": "Batam",
          "addressRegion": "Kepulauan Riau",
          "postalCode": "29461",
          "addressCountry": "ID",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 1.1277,
          "longitude": 104.0196,
        },
        "hasMap": "https://maps.google.com/?q=Batam+Center+Batam",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "08:00",
            "closes": "17:00",
          },
        ],
        "areaServed": AREAS_SERVED.map((a) => ({
          "@type": "City",
          "name": a,
        })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Beranda", url: "/" },
        { name: "Lokasi", url: "/lokasi" },
      ])) }} />

      <section className="pt-32 pb-16 px-4" style={{ background: "linear-gradient(135deg, #0a1628 0%, #132040 60%, #1e3a6e 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Beranda", href: "/" }, { label: "Lokasi" }]} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
            Lokasi & Area Layanan
          </h1>
          <p className="text-gray-300 text-lg">Konsultan Asuransi Kerugian Batam – Rio Mardiansyah</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Syne, sans-serif", color: "#0a1628" }}>Informasi Kantor</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "#f8faff", border: "1px solid #dbeafe" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#eff6ff" }}>
                  <MapPin size={20} style={{ color: "#1a4fa0" }} />
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#0a1628" }}>Alamat</div>
                  <div className="text-gray-600 text-sm mt-0.5">
                    Batam Center<br />
                    Batam, Kepulauan Riau 29461
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "#f8faff", border: "1px solid #dbeafe" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#eff6ff" }}>
                  <Clock size={20} style={{ color: "#1a4fa0" }} />
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#0a1628" }}>Jam Operasional</div>
                  <div className="text-gray-600 text-sm mt-0.5">
                    Senin – Jumat: 08.00 – 17.00 WIB<br />
                    Sabtu: 09.00 – 13.00 WIB<br />
                    WhatsApp: Fleksibel
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "#f8faff", border: "1px solid #dbeafe" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#eff6ff" }}>
                  <Phone size={20} style={{ color: "#1a4fa0" }} />
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#0a1628" }}>Kontak</div>
                  <div className="text-gray-600 text-sm mt-0.5">
                    <a href={`tel:${SITE.phone}`} className="hover:text-blue-600">{SITE.phone}</a><br />
                    <a href={`mailto:${SITE.email}`} className="hover:text-blue-600">{SITE.email}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_URL("Halo Rio, saya ingin konsultasi asuransi")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-navy text-sm"
                style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
                <MessageCircle size={16} /> Chat WhatsApp
              </a>
              <a href="https://maps.google.com/?q=Batam+Center+Batam" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-all"
                style={{ borderColor: "#1a4fa0", color: "#1a4fa0" }}>
                <Navigation size={16} /> Buka di Google Maps
              </a>
            </div>
          </div>

          {/* Map embed area */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Syne, sans-serif", color: "#0a1628" }}>Peta Lokasi</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3]">
              <iframe
                title="Lokasi Asuransi Batam – Rio Mardiansyah"
                src="https://maps.google.com/maps?q=Batam+Center+Kota+Batam+Kepulauan+Riau&output=embed&z=13"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Area layanan */}
      <section className="py-14 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ fontFamily: "Syne, sans-serif", color: "#0a1628" }}>
            Area yang Dilayani
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Kami melayani klien di seluruh Batam dan Kepulauan Riau — baik kunjungan langsung maupun konsultasi online.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS_SERVED.map((area) => (
              <span key={area} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                <MapPin size={13} style={{ color: "#1a4fa0" }} /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "Syne, sans-serif", color: "#0a1628" }}>
            Pertanyaan Lokasi
          </h2>
          <div className="space-y-4">
            {LOCAL_FAQS.map((f) => (
              <div key={f.q} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#0a1628" }}>{f.q}</h3>
                <p className="text-gray-600 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Konsultasi Asuransi di Batam" subtitle="Hubungi Rio Mardiansyah untuk konsultasi langsung atau kunjungan ke lokasi Anda." waMsg="Halo Rio, saya ingin konsultasi asuransi di Batam" />
    </>
  );
}
