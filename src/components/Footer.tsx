import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const productLinks = [
  { label: "Asuransi Properti", href: "/asuransi-properti" },
  { label: "Asuransi Hotel Batam", href: "/asuransi-properti/asuransi-hotel-batam" },
  { label: "Asuransi Rumah Batam", href: "/asuransi-properti/asuransi-rumah-batam" },
  { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
  { label: "Asuransi Mobil Batam", href: "/asuransi-kendaraan/asuransi-mobil-batam" },
  { label: "Asuransi Dump Truck", href: "/asuransi-kendaraan/asuransi-dumptruck" },
  { label: "Asuransi Alat Berat", href: "/asuransi-machinery/asuransi-alat-berat" },
  { label: "Asuransi Crane", href: "/asuransi-machinery/asuransi-crane" },
  { label: "Asuransi Limbah B3", href: "/asuransi-liability/asuransi-limbah-b3" },
  { label: "Public Liability", href: "/asuransi-liability/public-liability" },
  { label: "Asuransi Engineering", href: "/asuransi-engineering" },
];

const blogLinks = [
  { label: "Cara Klaim Asuransi Mobil", href: "/blog/cara-klaim-asuransi-mobil" },
  { label: "Perbedaan All Risk dan TLO", href: "/blog/perbedaan-all-risk-dan-tlo" },
  { label: "Asuransi Mobil Batam", href: "/blog/asuransi-mobil-batam" },
  { label: "Pentingnya Asuransi Limbah B3", href: "/blog/pentingnya-asuransi-limbah-b3" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#c9a84c] to-[#f0d080] rounded-lg flex items-center justify-center">
                <span className="text-[#0a1628] font-display font-bold text-sm">AB</span>
              </div>
              <span className="font-display font-bold text-xl">
                Asuransi<span className="text-[#c9a84c]">Batam</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Konsultan asuransi kerugian profesional di Batam. Melindungi aset & bisnis Anda dengan solusi asuransi terpercaya.
            </p>
            <div className="space-y-3">
              <a href="tel:081373336728" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#c9a84c] transition-colors">
                <Phone className="w-4 h-4 text-[#c9a84c]" />
                0813-7333-6728
              </a>
              <a href="mailto:rio@asuransibatam.biz.id" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#c9a84c] transition-colors">
                <Mail className="w-4 h-4 text-[#c9a84c]" />
                rio@asuransibatam.biz.id
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
                Batam Center, Kepulauan Riau
              </div>
            </div>
          </div>

          {/* Products col 1 */}
          <div>
            <h3 className="font-display font-bold text-[#c9a84c] mb-4">Produk Asuransi</h3>
            <ul className="space-y-2">
              {productLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products col 2 */}
          <div>
            <h3 className="font-display font-bold text-[#c9a84c] mb-4">Produk Lainnya</h3>
            <ul className="space-y-2">
              {productLinks.slice(6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link href="/kalkulator-premi-mobil" className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                  Kalkulator Premi Mobil
                </Link>
              </li>
              <li>
                <Link href="/kalkulator-premi-motor" className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                  Kalkulator Premi Motor
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog & Info */}
          <div>
            <h3 className="font-display font-bold text-[#c9a84c] mb-4">Artikel Edukasi</h3>
            <ul className="space-y-2 mb-6">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display font-bold text-[#c9a84c] mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tentang-kami" className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Asuransi Batam – Rio. Hak cipta dilindungi.
          </p>
          <p className="text-white/40 text-xs">
            Konsultan Asuransi Kerugian Terdaftar | Batam, Kepulauan Riau
          </p>
        </div>
      </div>
    </footer>
  );
}
