import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import KonsultasiForm from "./KonsultasiForm";

export const metadata: Metadata = {
  title: "Tentang Kami – Rio, Konsultan Asuransi Batam",
  description: "Profil Rio, konsultan asuransi kerugian profesional di Batam dengan pengalaman 10+ tahun. Spesialis properti, kendaraan, alat berat, dan liability.",
  alternates: {
    canonical: "https://asuransibatam.com/tentang-kami",
    languages: {
      id: "https://asuransibatam.com/tentang-kami",
      en: "https://asuransibatam.com/en/about-us",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rio",
  jobTitle: "Konsultan Asuransi Kerugian",
  worksFor: { "@type": "InsuranceAgency", name: "Asuransi Batam" },
  telephone: "+6281373336728",
  email: "rio@asuransibatam.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batam Center",
    addressRegion: "Kepulauan Riau",
    addressCountry: "ID",
  },
};

const fieldPhotos = [
  {
    src: "/images/potoartikel/Potobersamabuilderisk.webp",
    alt: "Rio bersama pemilik kapal saat survei builders risk di galangan Batam",
    caption: "Diskusi langsung dengan pemilik kapal",
    desc: "Setiap polis builders risk dimulai dari pemahaman kondisi proyek secara langsung — bukan hanya dari dokumen.",
  },
  {
    src: "/images/potoartikel/cek-mesin-kapal-batam.webp",
    alt: "Survei mesin kapal di galangan Batam sebelum penerbitan polis",
    caption: "Survei mesin kapal di lapangan",
    desc: "Pengecekan kondisi mesin kapal dilakukan sebelum polis diterbitkan, agar pertanggungan sesuai kondisi aktual.",
  },
  {
    src: "/images/potoartikel/klaimbuilderisk.webp",
    alt: "Proses klaim builders risk di galangan kapal Batam",
    caption: "Pendampingan klaim builders risk",
    desc: "Saat klaim terjadi, Rio hadir langsung di lokasi untuk memastikan proses berjalan lancar dan klien mendapat hak penuhnya.",
  },
  {
    src: "/images/potoartikel/surveicecr.webp",
    alt: "Survei asuransi infrastruktur CECR di Batam",
    caption: "Survei infrastruktur — proyek CECR",
    desc: "Survei lapangan untuk proyek infrastruktur besar seperti jembatan dan jalan adalah bagian rutin dari layanan kami.",
  },
  {
    src: "/images/potoartikel/tongkangnongsa.webp",
    alt: "Tongkang beroperasi di perairan Nongsa Batam",
    caption: "Perairan Nongsa — area kerja sehari-hari",
    desc: "Batam dan perairan sekitarnya adalah wilayah kerja utama kami — dari galangan Tanjung Uncang hingga dermaga Nongsa.",
  },
  {
    src: "/images/potoartikel/kapalsedangdibangun.webp",
    alt: "Kapal sedang dibangun di galangan kapal Batam",
    caption: "Kapal dalam proses pembangunan",
    desc: "Mendampingi klien galangan dari fase keel laying hingga sea trial — itulah yang dimaksud perlindungan menyeluruh.",
  },
];

export default function TentangKamiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Tentang Kami</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Rio</h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Konsultan Asuransi Kerugian Profesional di Batam dengan pengalaman lebih dari 10 tahun
            melayani klien individu dan korporat.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Foto profil */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/rio-mardiansyah.jpg"
                  alt="Rio – Konsultan Asuransi Kerugian Batam"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3">
                    <p className="font-display font-bold text-white text-lg leading-tight">Rio</p>
                    <p className="text-[#c9a84c] text-sm font-medium">Konsultan Asuransi Kerugian</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-4">
                Profil Rio
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Rio adalah konsultan asuransi kerugian berpengalaman yang telah melayani
                klien di Batam dan Kepulauan Riau selama lebih dari 10 tahun. Dengan pemahaman mendalam
                tentang industri asuransi lokal dan kebutuhan bisnis di kawasan industri Batam, Rio
                hadir sebagai mitra terpercaya untuk solusi perlindungan aset Anda.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-8">
                Spesialisasi Rio meliputi asuransi properti komersial, kendaraan niaga dan armada,
                alat berat dan machinery, serta asuransi liability khusus industri termasuk limbah B3 –
                bidang yang sangat relevan dengan karakteristik industri Batam sebagai kawasan ekonomi khusus.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: "10+", label: "Tahun Pengalaman" },
                  { val: "200+", label: "Klien Aktif" },
                  { val: "98%", label: "Kepuasan Klien" },
                  { val: "20+", label: "Produk Asuransi" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] text-center"
                  >
                    <div className="font-display font-bold text-3xl text-[#c9a84c]">{s.val}</div>
                    <div className="text-[#64748b] text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Kerja Lapangan */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Kerja Lapangan</p>
            <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-4">
              Langsung di Lokasi, Bukan Hanya di Balik Meja
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Sebagian besar pekerjaan kami terjadi di lapangan — di galangan, di geladak kapal,
              di area konstruksi. Karena memahami risiko yang sebenarnya dimulai dari melihat langsung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fieldPhotos.map((photo) => (
              <div
                key={photo.src}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <p className="font-display font-bold text-[#0a1628] mb-1">{photo.caption}</p>
                  <p className="text-[#64748b] text-sm leading-relaxed">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Kerja */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Cara Kerja Kami</p>
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-4">Sederhana, Transparan, Tepat Sasaran</h2>
          <p className="text-[#64748b] mb-12 max-w-xl mx-auto">
            Tidak ada jargon berlebihan. Kami bantu Anda memahami apa yang benar-benar perlu dilindungi
            dan berapa biaya yang wajar untuk itu.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Konsultasi & Survei", desc: "Kami datang langsung ke lokasi aset Anda — kapal, alat berat, properti, atau proyek — untuk memahami risiko aktual." },
              { step: "02", title: "Rekomendasi Polis", desc: "Kami carikan produk dari perusahaan asuransi yang sesuai kebutuhan dan anggaran, bukan yang paling mahal preminya." },
              { step: "03", title: "Pendampingan Klaim", desc: "Jika terjadi klaim, kami hadir langsung. Tugas kami belum selesai sampai klaim klien diselesaikan dengan benar." },
            ].map((w) => (
              <div key={w.step} className="p-6 rounded-2xl border border-[#e2e8f0] text-left">
                <p className="font-display font-bold text-4xl text-[#c9a84c]/40 mb-3">{w.step}</p>
                <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">{w.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">Hubungi Kami</h2>
              <div className="space-y-5">
                {[
                  { icon: "📱", label: "WhatsApp / Telepon", value: "0813-7333-6728", href: "https://wa.me/6281373336728" },
                  { icon: "📧", label: "Email", value: "rio@asuransibatam.com", href: "mailto:rio@asuransibatam.com" },
                  { icon: "📍", label: "Alamat", value: "Batam Center, Kepulauan Riau", href: null },
                  { icon: "🕐", label: "Jam Operasional", value: "Senin–Jumat, 08:00–17:00", href: null },
                ].map((c) => (
                  <div key={c.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0a1628] rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-[#64748b] text-sm">{c.label}</div>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="font-semibold text-[#0a1628] hover:text-[#c9a84c] transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-[#0a1628]">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <KonsultasiForm />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
