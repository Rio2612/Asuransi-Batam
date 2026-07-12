"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Root <html> statis di-set lang="id" (perlu untuk SSG semua 140 halaman).
 * Komponen ini mengoreksinya jadi "en" saat path diawali /en, dijalankan
 * sangat awal di <body> supaya browser & Googlebot (yang me-render JS
 * penuh) melihat atribut lang yang benar sebelum konten ter-paint.
 */
export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
    document.documentElement.lang = isEnglish ? "en" : "id";
  }, [pathname]);

  return null;
}
