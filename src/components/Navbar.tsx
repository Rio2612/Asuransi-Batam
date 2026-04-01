"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const products = [
  {
    label: "Asuransi Properti",
    href: "/asuransi-properti",
    children: [
      { label: "Asuransi Hotel Batam", href: "/asuransi-properti/asuransi-hotel-batam" },
      { label: "Asuransi Rumah Batam", href: "/asuransi-properti/asuransi-rumah-batam" },
    ],
  },
  {
    label: "Asuransi Kendaraan",
    href: "/asuransi-kendaraan",
    children: [
      { label: "Asuransi Mobil Batam", href: "/asuransi-kendaraan/asuransi-mobil-batam" },
      { label: "Asuransi Dump Truck", href: "/asuransi-kendaraan/asuransi-dumptruck" },
    ],
  },
  {
    label: "Asuransi Machinery",
    href: "/asuransi-machinery",
    children: [
      { label: "Asuransi Alat Berat", href: "/asuransi-machinery/asuransi-alat-berat" },
      { label: "Asuransi Crane", href: "/asuransi-machinery/asuransi-crane" },
    ],
  },
  {
    label: "Liability",
    href: "/asuransi-liability",
    children: [
      { label: "Asuransi Limbah B3", href: "/asuransi-liability/asuransi-limbah-b3" },
      { label: "Public Liability", href: "/asuransi-liability/public-liability" },
    ],
  },
  {
    label: "Engineering",
    href: "/asuransi-engineering",
    children: [],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/98 backdrop-blur-md shadow-lg"
          : "bg-[#0a1628]/95"
      } border-b border-[#c9a84c]/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-[#c9a84c] to-[#f0d080] rounded-lg flex items-center justify-center">
              <span className="text-[#0a1628] font-display font-bold text-sm">AB</span>
            </div>
            <span className="font-display font-bold text-white text-lg leading-tight">
              Asuransi<span className="text-[#c9a84c]">Batam</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {products.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-[#c9a84c] transition-colors font-medium"
                  onMouseEnter={() => item.children.length > 0 && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  )}
                </Link>
                {item.children.length > 0 && (
                  <div
                    className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl shadow-2xl p-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-white/70 hover:text-[#c9a84c] hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/blog"
              className="px-3 py-2 text-sm text-white/80 hover:text-[#c9a84c] transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/tentang-kami"
              className="px-3 py-2 text-sm text-white/80 hover:text-[#c9a84c] transition-colors font-medium"
            >
              Tentang
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:081373336728"
              className="flex items-center gap-1.5 text-sm text-[#c9a84c] font-medium hover:text-[#f0d080] transition-colors"
            >
              <Phone className="w-4 h-4" />
              0813-7333-6728
            </a>
            <a
              href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-[#c9a84c]/30 transition-all"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a1628] border-t border-[#c9a84c]/20 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {products.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-3 py-2.5 text-white/80 font-medium hover:text-[#c9a84c] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block pl-6 py-2 text-sm text-white/60 hover:text-[#c9a84c] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  └ {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/blog"
            className="block px-3 py-2.5 text-white/80 font-medium hover:text-[#c9a84c] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/tentang-kami"
            className="block px-3 py-2.5 text-white/80 font-medium hover:text-[#c9a84c] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Tentang Kami
          </Link>
          <div className="pt-3 border-t border-white/10">
            <a
              href="https://wa.me/6281373336728"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-lg text-center"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
