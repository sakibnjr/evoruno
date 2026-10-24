import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiCheck, FiArrowRight, FiSearch, FiTrendingUp, FiCpu } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Technical SEO & Performance Optimization Services | Evoruno',
  description:
    'Data-backed technical SEO and performance engineering. We optimize crawlability, schema structured data, and Core Web Vitals to maximize search discovery.',
};

export default function SeoServicesPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-[#080B16]">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        {/* Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="accent">
            <FiSearch className="mr-1.5 h-3.5 w-3.5" />
            Technical SEO & Core Web Vitals
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
            Search engine discovery built on engineering excellence.
          </h1>
          <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
            Search engine algorithms don&apos;t reward empty keyword stuffing anymore—they reward speed, semantic clarity, mobile usability, and flawless crawl structures. We engineer your site to pass Google&apos;s toughest technical audits.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button variant="default" size="lg" className="rounded-full">
                Request a Technical SEO Audit
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glow-card rounded-3xl p-8 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 text-[#00E5FF] flex items-center justify-center text-xl">
              <FiTrendingUp />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Core Web Vitals</h3>
            <p className="text-sm text-[#A7B0C5] leading-relaxed">
              We tune Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) into consistent green territory.
            </p>
          </div>

          <div className="glow-card rounded-3xl p-8 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-[#4F7CFF] flex items-center justify-center text-xl">
              <FiCpu />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Schema.org JSON-LD</h3>
            <p className="text-sm text-[#A7B0C5] leading-relaxed">
              We author rich JSON-LD entities (Organization, WebSite, Breadcrumbs, Services) that help search crawlers understand and rank your content.
            </p>
          </div>

          <div className="glow-card rounded-3xl p-8 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-[#7C5CFC] flex items-center justify-center text-xl">
              <FiSearch />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Crawl & Index Architecture</h3>
            <p className="text-sm text-[#A7B0C5] leading-relaxed">
              Automated dynamic XML sitemaps, robots.txt, canonical tag synchronization, and elimination of broken links and redirect loops.
            </p>
          </div>
        </div>

        {/* Deliverables Breakdown */}
        <div className="glow-card rounded-3xl p-8 sm:p-12 mb-20 border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-6">
            Technical SEO Deliverables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Full technical audit diagnosing crawl errors, 404s, and duplicate paths',
              'Next.js dynamic metadata generation with automated canonical URLs',
              'JSON-LD structured data implementation verified with Google Rich Results Test',
              'Dynamic XML sitemap (/sitemap.xml) and robots directive (/robots.txt)',
              'Image compression, AVIF/WebP conversion, and responsive srcset tagging',
              'OpenGraph and Twitter summary cards for viral social sharing preview',
              'Google Search Console setup and DNS verification walkthrough',
              'Honest, transparent reporting with zero fabricated ranking promises',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                <FiCheck className="h-5 w-5 text-[#00E5FF] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white font-display">Ready for better search visibility?</h3>
          <p className="text-sm text-[#A7B0C5]">
            Let&apos;s eliminate the technical barriers holding your website back from organic discovery.
          </p>
          <Link href="/contact">
            <Button variant="default" size="lg" className="rounded-full">
              Get an SEO Audit Proposal
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
