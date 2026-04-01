"use client";

export default function KonsultasiForm() {
  return (
    <div className="bg-white rounded-2xl border border-[#e2e8f0] p-7">
      <h3 className="font-display font-bold text-xl text-[#0a1628] mb-5">Form Konsultasi</h3>
      <div className="space-y-4">
        {[
          { label: "Nama Lengkap", placeholder: "Nama Anda", type: "text" },
          { label: "Nomor WhatsApp", placeholder: "08xxxxxxxxxx", type: "tel" },
          { label: "Email", placeholder: "email@contoh.com", type: "email" },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">{f.label}</label>
            <input
              type={f.type}
              placeholder={f.placeholder}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] focus:border-[#1a4fa0] outline-none text-sm transition-colors"
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Kebutuhan Asuransi</label>
          <select className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] focus:border-[#1a4fa0] outline-none text-sm transition-colors text-[#64748b]">
            <option value="">Pilih jenis asuransi...</option>
            <option>Asuransi Properti</option>
            <option>Asuransi Kendaraan</option>
            <option>Asuransi Alat Berat</option>
            <option>Asuransi Liability</option>
            <option>Asuransi Engineering</option>
            <option>Lainnya</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Pesan</label>
          <textarea
            rows={4}
            placeholder="Ceritakan kebutuhan asuransi Anda..."
            className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] focus:border-[#1a4fa0] outline-none text-sm transition-colors resize-none"
          />
        </div>
        <a
          href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3.5 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] text-white font-bold rounded-xl text-center hover:shadow-lg transition-all"
        >
          Kirim via WhatsApp
        </a>
      </div>
    </div>
  );
}
