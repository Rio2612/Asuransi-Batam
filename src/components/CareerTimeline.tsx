import Image from "next/image";

type Stop = {
  role: string;
  org: string;
  period: string;
  duration: string;
  location: string;
  desc: string;
  logo?: string;
  current?: boolean;
};

const stops: Stop[] = [
  {
    role: "Account Officer",
    org: "PT Asuransi Umum Bumida 1967",
    period: "Feb 2013 – Agu 2016",
    duration: "3 thn 7 bln",
    location: "Batam, Kepulauan Riau",
    desc: "Terjun langsung di lapangan Batam — dari galangan kapal hingga kawasan industri FTZ, belajar memahami risiko dari sisi nasabah, bukan dari balik meja.",
    logo: "/images/logos/bumida.png",
  },
  {
    role: "Sales & Marketing Specialist",
    org: "PT Asuransi Purna Artanugraha (ASPAN)",
    period: "Sep 2016 – Agu 2021",
    duration: "4 thn 11 bln",
    location: "Bengkulu",
    desc: "Menangani portofolio klien yang makin beragam — dari pemilik usaha kecil hingga korporat, mengasah kemampuan mencocokkan produk dengan kebutuhan riil, bukan sekadar menjual polis.",
    logo: "/images/logos/aspan.png",
  },
  {
    role: "Branch Manager",
    org: "PT Asuransi Purna Artanugraha (ASPAN)",
    period: "Sep 2021 – Agu 2022",
    duration: "11 bln",
    location: "Bengkulu",
    desc: "Memegang tanggung jawab penuh atas operasional cabang — mulai dari target tim hingga memastikan klaim nasabah benar-benar tuntas, bukan cuma diajukan.",
    logo: "/images/logos/aspan.png",
  },
  {
    role: "Praktisi Asuransi Digital",
    org: "Asuransi Batam",
    period: "Agu 2022 – Sekarang",
    duration: "4 thn",
    location: "Batam, Kepulauan Riau",
    desc: "Menggabungkan pengalaman lapangan dengan platform digital — melayani klien Batam dan Kepulauan Riau, dari asuransi kendaraan pribadi hingga liability industri dan proyek kawasan FTZ.",
    current: true,
  },
];

export default function CareerTimeline() {
  return (
    <div className="relative">
      {/* garis vertikal */}
      <div
        className="absolute left-8 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-[#c9a84c] via-[#c9a84c]/60 to-[#c9a84c]/20"
        aria-hidden="true"
      />

      <ol className="space-y-10">
        {stops.map((s) => (
          <li key={s.role + s.period} className="relative pl-20">
            {/* node */}
            <div
              className={`absolute left-0 top-0 w-16 h-16 rounded-full flex items-center justify-center overflow-hidden border-4 ${
                s.current
                  ? "bg-[#0a1628] border-[#c9a84c]"
                  : "bg-white border-[#c9a84c]"
              } shadow-md`}
            >
              {s.logo ? (
                <Image
                  src={s.logo}
                  alt={`Logo ${s.org}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              ) : (
                <span className="text-[#c9a84c] font-display font-bold text-lg">R</span>
              )}
            </div>

            <div
              className={`rounded-2xl p-5 border ${
                s.current
                  ? "bg-[#0a1628] border-[#c9a84c]/40"
                  : "bg-[#faf8f3] border-[#e2e8f0]"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3
                  className={`font-display font-bold text-lg ${
                    s.current ? "text-white" : "text-[#0a1628]"
                  }`}
                >
                  {s.role}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#c9a84c] text-[#0a1628]">
                  {s.duration}
                </span>
              </div>
              <p className={`text-sm font-medium mb-1 ${s.current ? "text-[#f0d080]" : "text-[#1a4fa0]"}`}>
                {s.org}
              </p>
              <p className={`text-xs mb-2 ${s.current ? "text-white/50" : "text-[#94a3b8]"}`}>
                {s.period} · {s.location}
              </p>
              <p className={`text-sm leading-relaxed ${s.current ? "text-white/80" : "text-[#64748b]"}`}>
                {s.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
