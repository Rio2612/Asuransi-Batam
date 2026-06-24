import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Pentingnya Asuransi Limbah B3 untuk Industri di Batam",
  description: "Mengapa asuransi limbah B3 wajib dimiliki industri di Batam. Regulasi PP 22/2021, sanksi, dan cara mendapatkan jaminan finansial limbah B3 yang tepat.",
  alternates: { canonical: "https://asuransibatam.biz.id/blog/pentingnya-asuransi-limbah-b3" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pentingnya Asuransi Limbah B3 untuk Industri di Batam",
  datePublished: "2025-02-20",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

// FAQPage JSON-LD — sumber tunggal untuk schema & visual FAQ di bawah,
// supaya keduanya tidak pernah tidak sinkron.
const faqItems = [
  {
    question: "Apakah semua perusahaan di Batam wajib memiliki asuransi limbah B3?",
    answer:
      "Wajib bagi pelaku usaha yang menghasilkan, menyimpan, mengangkut, atau mengelola limbah B3, sesuai PP No. 22 Tahun 2021. Jaminan finansial bisa berupa dana jaminan bank atau asuransi pencemaran lingkungan.",
  },
  {
    question: "Apa beda dana jaminan bank dengan asuransi limbah B3?",
    answer:
      "Dana jaminan bank mengharuskan perusahaan menyimpan dana tunai dalam jumlah besar yang tidak produktif. Asuransi hanya memerlukan pembayaran premi tahunan dengan nilai pertanggungan yang sama, sehingga jauh lebih hemat modal kerja.",
  },
  {
    question: "Berapa lama proses pengajuan asuransi limbah B3?",
    answer:
      "Setelah assessment risiko dan pengisian questionnaire, polis biasanya dapat diterbitkan dalam beberapa hari kerja, tergantung kompleksitas jenis dan volume limbah yang dikelola perusahaan.",
  },
  {
    question: "Apa yang terjadi jika perusahaan tidak punya jaminan finansial limbah B3?",
    answer:
      "Perusahaan berisiko terkena sanksi administratif seperti pembekuan izin, sanksi pidana hingga 10 tahun penjara dan denda Rp 10 miliar, serta tuntutan perdata dari pihak yang terdampak pencemaran.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ArticleLimbahB3Page() {
  return (
    <ArticleLayout
      title="Pentingnya Asuransi Limbah B3 untuk Industri di Batam"
      description="Kewajiban hukum dan perlindungan bisnis dari risiko pencemaran limbah berbahaya."
      date="20 Februari 2025"
      category="Liability"
      readTime="8 menit"
      breadcrumbs={[{ label: "Pentingnya Asuransi Limbah B3", href: "/blog/pentingnya-asuransi-limbah-b3" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Batam sebagai kawasan industri bebas (FTZ) adalah rumah bagi ribuan perusahaan industri –
        mulai dari galangan kapal, manufaktur elektronik, hingga industri kimia. Hampir semua
        industri ini menghasilkan limbah yang dikategorikan sebagai Limbah Bahan Berbahaya dan
        Beracun (B3), dan risiko pencemarannya termasuk dalam lingkup{" "}
        <Link href="/asuransi-liability" className="font-medium">
          asuransi liability
        </Link>{" "}
        yang wajib dipertimbangkan setiap pelaku usaha.
      </p>

      <h2>Apa itu Limbah B3?</h2>
      <p>
        Limbah B3 adalah sisa usaha atau kegiatan yang mengandung bahan berbahaya dan/atau beracun
        yang karena sifat, konsentrasi, dan/atau jumlahnya dapat mencemarkan lingkungan hidup dan
        membahayakan kesehatan manusia.
      </p>
      <p>Contoh limbah B3 yang umum ditemukan di industri Batam:</p>
      <ul>
        <li>Oli bekas dan cairan hidrolik</li>
        <li>Bahan kimia proses industri</li>
        <li>Baterai dan aki bekas</li>
        <li>Limbah cat dan solven</li>
        <li>Limbah dari proses galvanis</li>
        <li>Sludge IPAL (instalasi pengolahan air limbah)</li>
      </ul>

      <h2>Regulasi Wajib: PP No. 22 Tahun 2021</h2>
      <p>
        Berdasarkan Peraturan Pemerintah No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan
        Pengelolaan Lingkungan Hidup, setiap pelaku usaha yang menghasilkan atau mengelola limbah B3{" "}
        <strong>wajib memiliki jaminan finansial</strong>.
      </p>
      <p>Jaminan finansial ini dapat berupa salah satu dari tiga bentuk berikut:</p>
      <ul>
        <li>Dana jaminan (rekening bank khusus)</li>
        <li>
          <Link href="/asuransi-liability/asuransi-limbah-b3" className="font-medium">
            Asuransi pencemaran lingkungan
          </Link>
        </li>
        <li>Jaminan dari lembaga keuangan lain</li>
      </ul>
      <p>
        Dari ketiga opsi tersebut, asuransi adalah pilihan paling praktis dan{" "}
        <em>cost-effective</em> dibandingkan harus menyisihkan dana tunai dalam jumlah besar yang
        seharusnya bisa digunakan sebagai modal kerja.
      </p>

      <h2>Risiko Jika Tidak Memiliki Asuransi Limbah B3</h2>
      <p>Sanksi bagi industri yang tidak memenuhi kewajiban jaminan finansial cukup berat:</p>

      <div className="my-6 grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <p className="text-sm font-semibold text-[#0a1628] mb-1">Sanksi Administratif</p>
          <p className="text-sm text-[#64748b] m-0">Teguran, paksaan pemerintah, hingga pembekuan izin usaha.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <p className="text-sm font-semibold text-[#0a1628] mb-1">Sanksi Pidana</p>
          <p className="text-sm text-[#64748b] m-0">Penjara 1–10 tahun dan denda hingga Rp 10 miliar.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <p className="text-sm font-semibold text-[#0a1628] mb-1">Tuntutan Perdata</p>
          <p className="text-sm text-[#64748b] m-0">Klaim ganti rugi dari masyarakat yang terdampak pencemaran.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <p className="text-sm font-semibold text-[#0a1628] mb-1">Reputasi Bisnis</p>
          <p className="text-sm text-[#64748b] m-0">Pemberitaan negatif yang merusak citra perusahaan di mata mitra dan investor.</p>
        </div>
      </div>

      <h2>Kenapa Batam Punya Risiko Lebih Tinggi?</h2>
      <p>Batam sebagai pulau yang dikelilingi laut memiliki sensitivitas ekosistem yang tinggi:</p>
      <ul>
        <li>Pencemaran yang mencapai laut bisa merusak ekosistem mangrove dan terumbu karang</li>
        <li>Berdampak pada industri pariwisata dan perikanan lokal</li>
        <li>Potensi tuntutan dari nelayan dan komunitas pesisir</li>
        <li>Kedekatan dengan Singapura dan Malaysia membuat regulasi lingkungan lebih diperhatikan</li>
      </ul>

      <h2>Apa yang Ditanggung Asuransi Limbah B3?</h2>
      <ul>
        <li>Biaya pembersihan dan pemulihan lahan yang tercemar</li>
        <li>Biaya pemulihan ekosistem perairan</li>
        <li>Kompensasi kesehatan masyarakat terdampak</li>
        <li>Biaya hukum dan pembelaan</li>
        <li>Biaya respons darurat saat terjadi kebocoran</li>
        <li>Tuntutan hukum dari pemerintah dan masyarakat</li>
      </ul>

      <h2>Bagaimana Cara Mendapatkan Asuransi Limbah B3?</h2>
      <p>Proses mendapatkan asuransi limbah B3 umumnya melalui lima langkah berikut:</p>
      <ol>
        <li>Assessment risiko oleh konsultan asuransi</li>
        <li>Pengisian questionnaire tentang jenis dan volume limbah</li>
        <li>Penentuan nilai pertanggungan yang sesuai</li>
        <li>Penerbitan polis dan pembayaran premi</li>
        <li>Polis diterima sebagai bukti jaminan finansial</li>
      </ol>
      <p>
        Jika perusahaan Anda belum yakin jenis perlindungan liability apa yang paling sesuai,
        Anda bisa mempelajari lebih lanjut ragam{" "}
        <Link href="/asuransi-liability" className="font-medium">
          produk asuransi liability
        </Link>{" "}
        yang tersedia sebelum menentukan nilai pertanggungan.
      </p>

      <h2>Pertanyaan yang Sering Diajukan</h2>
      <div className="space-y-4 not-prose">
        {faqItems.map((item) => (
          <details key={item.question} className="group p-5 rounded-xl border border-[#e2e8f0] bg-[#faf8f3]">
            <summary className="font-semibold text-[#0a1628] cursor-pointer list-none flex items-center justify-between gap-3">
              {item.question}
              <span className="text-[#c9a84c] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p className="text-[#374151] text-sm mt-3 mb-0 leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <h3 className="font-display font-bold text-[#0a1628] mb-3">Pastikan Bisnis Anda Patuh Regulasi</h3>
        <p className="text-[#64748b] mb-4">
          Konsultasikan kebutuhan asuransi limbah B3 Anda dengan Rio. Kami membantu industri di
          Batam memenuhi kewajiban hukum lingkungan.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/asuransi-liability/asuransi-limbah-b3" className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm">
            Info Asuransi Limbah B3
          </Link>
          <a href="https://wa.me/6281373336728" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm">
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </ArticleLayout>
  );
}
