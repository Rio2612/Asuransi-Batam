import Link from "next/link";
import CTASection from "./CTASection";
interface Breadcrumb { label: string; href: string; }
interface ArticleLayoutProps {
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  breadcrumbs: Breadcrumb[];
  schema: Record<string, unknown>;
  children: React.ReactNode;
}
export default function ArticleLayout({ title, description, date, category, readTime, breadcrumbs, schema, children }: ArticleLayoutProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-[#c9a84c]">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#c9a84c]">Blog</Link>
            {breadcrumbs.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1 ? <span className="text-[#c9a84c]">{b.label}</span> : <Link href={b.href} className="hover:text-[#c9a84c]">{b.label}</Link>}
              </span>
            ))}
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#c9a84c]/20 text-[#c9a84c] text-sm font-semibold rounded-full border border-[#c9a84c]/30">{category}</span>
            <span className="text-white/50 text-sm">{date}</span>
            <span className="text-white/50 text-sm">· {readTime} baca</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">{title}</h1>
          <p className="text-white/70 text-lg">{description}</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c9a84c] to-[#f0d080] rounded-full flex items-center justify-center text-[#0a1628] font-bold">R</div>
            <div>
              <div className="text-white font-medium text-sm">Rio Mardiansyah</div>
              <div className="text-white/50 text-xs">Konsultan Asuransi Kerugian · 10+ Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-[#0a1628] prose-p:text-[#374151] prose-p:leading-relaxed prose-a:text-[#1a4fa0] prose-strong:text-[#0a1628]">
            {children}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
