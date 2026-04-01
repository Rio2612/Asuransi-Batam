// Site-wide constants
export const SITE = {
  name: "Asuransi Batam",
  tagline: "Konsultan Asuransi Kerugian Terpercaya di Batam",
  url: "https://asuransibatam.biz.id",
  phone: "081373336728",
  phoneWA: "6281373336728",
  email: "rio@asuransibatam.biz.id",
  address: "Batam Center, Kepulauan Riau",
  agent: {
    name: "Rio",
    title: "Konsultan Asuransi Kerugian",
    experience: "10+ Tahun",
    photo: "/images/rio-mardiansyah.jpg",
  },
} as const;

export const NAV_PRODUCTS = [
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
      { label: "Contractor All Risk", href: "/asuransi-engineering/contractor-all-risk" },
      { label: "Erection All Risk", href: "/asuransi-engineering/erection-all-risk" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Budi Santoso",
    company: "PT Nusantara Logistik",
    text: "Rio sangat membantu dalam proses klaim asuransi dump truck kami. Proses cepat dan profesional. Sangat rekomendasikan!",
    rating: 5,
    product: "Asuransi Kendaraan",
  },
  {
    name: "Dewi Hartati",
    company: "Hotel Harmoni Batam",
    text: "Sudah 5 tahun menggunakan jasa Rio untuk asuransi hotel kami. Pelayanan memuaskan, premi kompetitif.",
    rating: 5,
    product: "Asuransi Properti",
  },
  {
    name: "Ahmad Fauzi",
    company: "CV Borneo Konstruksi",
    text: "Asuransi alat berat dari Rio sangat membantu operasional proyek kami di Batam. Klaim mudah dan cepat.",
    rating: 5,
    product: "Asuransi Machinery",
  },
  {
    name: "Sandra Wijaya",
    company: "PT Kimia Industri Batam",
    text: "Sangat profesional menangani kebutuhan asuransi limbah B3 perusahaan kami. Dokumen lengkap dan proses lancar.",
    rating: 5,
    product: "Asuransi Liability",
  },
];

export const FAQS_HOME = [
  {
    q: "Apa itu asuransi kerugian?",
    a: "Asuransi kerugian (general insurance) adalah jenis asuransi yang memberikan perlindungan finansial terhadap kerugian material, kerusakan properti, kendaraan, alat berat, atau tanggung jawab hukum kepada pihak ketiga.",
  },
  {
    q: "Bagaimana cara menghitung premi asuransi?",
    a: "Premi dihitung berdasarkan nilai pertanggungan, jenis risiko, lokasi, dan kondisi objek yang diasuransikan. Anda bisa menggunakan kalkulator premi kami atau konsultasi langsung dengan Rio.",
  },
  {
    q: "Berapa lama proses klaim asuransi?",
    a: "Proses klaim umumnya 14–30 hari kerja setelah dokumen lengkap diterima. Dengan panduan dari konsultan kami, proses klaim bisa lebih cepat dan lancar.",
  },
  {
    q: "Apakah tersedia layanan konsultasi gratis?",
    a: "Ya! Anda bisa konsultasi gratis via WhatsApp 081373336728 atau mengisi form konsultasi di website kami. Rio akan membantu memilih polis yang sesuai kebutuhan dan anggaran Anda.",
  },
  {
    q: "Apakah bisa minta penawaran harga terlebih dahulu?",
    a: "Tentu. Hubungi kami via WhatsApp atau email dengan informasi objek yang ingin diasuransikan, dan kami akan mengirimkan penawaran premi dalam 1×24 jam kerja.",
  },
  {
    q: "Asuransi apa saja yang tersedia untuk bisnis di Batam?",
    a: "Kami menyediakan asuransi properti (gedung, hotel, rumah), kendaraan (mobil, dump truck), alat berat & mesin (crane, excavator), liability (limbah B3, public liability), dan engineering (CAR, EAR).",
  },
];

export const WHATSAPP_URL = (msg: string) =>
  `https://wa.me/${SITE.phoneWA}?text=${encodeURIComponent(msg)}`;
