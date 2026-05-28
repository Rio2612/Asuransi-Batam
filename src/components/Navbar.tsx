"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

// ─── NAV ITEMS - INDONESIA ──────────────────────────────────────────────────
const NAV_ITEMS_ID: NavItem[] = [
  {
    label: "Asuransi Properti",
    href: "/asuransi-properti",
    children: [
      { label: "Asuransi Hotel", href: "/asuransi-properti/asuransi-hotel-batam" },
      { label: "Asuransi Rumah", href: "/asuransi-properti/asuransi-rumah-batam" },
      { label: "Asuransi Ruko", href: "/asuransi-properti/asuransi-ruko-batam" },
      { label: "Asuransi Gudang", href: "/asuransi-properti/asuransi-gudang-batam" },
      { label: "Asuransi Apartemen", href: "/asuransi-properti/asuransi-apartemen-batam" },
      { label: "Asuransi Pabrik", href: "/asuransi-properti/asuransi-pabrik-kawasan-industri-batam" },
    ],
  },
  {
    label: "Asuransi Kendaraan",
    href: "/asuransi-kendaraan",
    children: [
      { label: "Asuransi Mobil", href: "/asuransi-kendaraan/asuransi-mobil-batam" },
      { label: "Asuransi Dump Truck", href: "/asuransi-kendaraan/asuransi-dump-truck" },
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
    label: "Asuransi Liability",
    href: "/asuransi-liability",
    children: [
      { label: "Asuransi Limbah B3", href: "/asuransi-liability/asuransi-limbah-b3" },
      { label: "Public Liability", href: "/asuransi-liability/public-liability" },
    ],
  },
  {
    label: "Asuransi Engineering",
    href: "/asuransi-engineering",
    children: [
      { label: "Contractor All Risk (CAR)", href: "/asuransi-engineering/contractor-all-risk" },
      { label: "Erection All Risk (EAR)", href: "/asuransi-engineering/erection-all-risk" },
    ],
  },
  {
    label: "Asuransi Marine",
    href: "/asuransi-marine",
    children: [
      { label: "Marine Hull", href: "/asuransi-marine/marine-hull" },
      { label: "Marine Cargo", href: "/asuransi-marine/marine-cargo" },
      { label: "Builders Risk", href: "/asuransi-marine/builders-risk" },
    ],
  },
  {
    label: "Surety Bond",
    href: "/asuransi-surety-bond",
    children: [
      { label: "Advance Payment Bond", href: "/asuransi-surety-bond/advance-payment-bond" },
      { label: "Bid Bond", href: "/asuransi-surety-bond/bid-bond" },
      { label: "Maintenance Bond", href: "/asuransi-surety-bond/maintenance-bond" },
      { label: "Performance Bond", href: "/asuransi-surety-bond/performance-bond" },
    ],
  },
];

// ─── NAV ITEMS - ENGLISH ────────────────────────────────────────────────────
const NAV_ITEMS_EN: NavItem[] = [
  {
    label: "Property",
    href: "/en/property-insurance",
    children: [
      { label: "Hotel Insurance", href: "/en/property-insurance/hotel-insurance-batam" },
      { label: "Home Insurance", href: "/en/property-insurance/home-insurance-batam" },
      { label: "Shophouse Insurance", href: "/en/property-insurance/shophouse-insurance-batam" },
      { label: "Warehouse Insurance", href: "/en/property-insurance/warehouse-insurance-batam" },
      { label: "Apartment Insurance", href: "/en/property-insurance/apartment-insurance-batam" },
      { label: "Factory Insurance", href: "/en/property-insurance/factory-industrial-insurance-batam" },
    ],
  },
  {
    label: "Vehicle",
    href: "/en/vehicle-insurance",
    children: [
      { label: "Car Insurance", href: "/en/vehicle-insurance/car-insurance-batam" },
      { label: "Dump Truck", href: "/en/vehicle-insurance/dump-truck-insurance" },
    ],
  },
  {
    label: "Machinery",
    href: "/en/machinery-insurance",
    children: [
      { label: "Heavy Equipment", href: "/en/machinery-insurance/heavy-equipment-insurance" },
      { label: "Crane Insurance", href: "/en/machinery-insurance/crane-insurance" },
    ],
  },
  {
    label: "Liability",
    href: "/en/liability-insurance",
    children: [
      { label: "B3 Waste Insurance", href: "/en/liability-insurance/b3-waste-insurance" },
      { label: "Public Liability", href: "/en/liability-insurance/public-liability" },
    ],
  },
  {
    label: "Engineering",
    href: "/en/engineering-insurance",
    children: [
      { label: "Contractor All Risk", href: "/en/engineering-insurance/contractor-all-risk" },
      { label: "Erection All Risk", href: "/en/engineering-insurance/erection-all-risk" },
    ],
  },
  {
    label: "Marine",
    href: "/en/marine-insurance",
    children: [
      { label: "Marine Hull", href: "/en/marine-insurance/marine-hull" },
      { label: "Marine Cargo", href: "/en/marine-insurance/marine-cargo" },
      { label: "Builders Risk", href: "/en/marine-insurance/builders-risk" },
    ],
  },
  {
    label: "Surety Bond",
    href: "/en/surety-bond-insurance",
    children: [
      { label: "Advance Payment Bond", href: "/en/surety-bond-insurance/advance-payment-bond" },
      { label: "Maintenance Bond", href: "/en/surety-bond-insurance/maintenance-bond" },
      { label: "Performance Bond", href: "/en/surety-bond-insurance/performance-bond" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");

  const navItems = isEn ? NAV_ITEMS_EN : NAV_ITEMS_ID;

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const getLanguageTogglePath = () => {
    if (isEn) {
      return pathname.replace(/^\/en/, "") || "/";
    } else {
      return `/en${pathname === "/" ? "" : pathname}`;
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={isEn ? "/en" : "/"} className="text-xl font-bold text-blue-600">
              Asuransi Batam
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150">
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === item.label && item.children && (
                  <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Switcher Desktop */}
            <Link
              href={getLanguageTogglePath()}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium border border-gray-200 ml-4 transition-all duration-150"
            >
              <Globe className="w-4 h-4" />
              <span>{isEn ? "ID" : "EN"}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-2">
            {/* Language Switcher Mobile */}
            <Link
              href={getLanguageTogglePath()}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 px-2 py-1 rounded-md text-sm font-medium border border-gray-200 transition-all duration-150"
            >
              <Globe className="w-4 h-4" />
              <span>{isEn ? "ID" : "EN"}</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 focus:outline-none transition-colors duration-150"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-inner max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 last:border-none py-1">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 rounded-md"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === item.label && item.children && (
                  <div className="pl-6 space-y-1 bg-gray-50 rounded-md py-1 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}