import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Badge } from '@/_ui/badge';
import { Button } from '@/_ui/button';
import { FiCheck, FiArrowRight, FiSearch, FiTrendingUp, FiCpu } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Technical SEO & Performance Optimization Services | Evoruno',
  description:
    'Data-backed technical SEO and performance engineering. We optimize crawlability, schema structured data, and Core Web Vitals to maximize search discovery.',
};

export default function SeoServicesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: DARK HERO */}
      <section className="pt-32 pb-20 bg-[#080B16] relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[160px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="accent">
              <FiSearch className="mr-1.5 h-3.5 w-3.5" />
              Technical SEO & Core Web Vitals
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
              Get found on Google by customers actively searching for what you offer.
            </h1>
            <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
              Google doesn&apos;t reward empty keywords anymore—it rewards speed, mobile usability, clean code, and clear structured data. We eliminate technical roadblocks so your high-value pages rank higher and generate compounding organic leads.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="default" size="lg" className="rounded-full shadow-lg hover:shadow-xl">
                  Request a Technical SEO Audit
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full">
                  Explore All Capabilities
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: LIGHT FEATURES & DELIVERABLES */}
      <section className="py-24 bg-[#F5F7FB] relative">
        <Container>
          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-cyan-50 text-[#00A3BF] flex items-center justify-center text-xl">
                <FiTrendingUp />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Core Web Vitals Pass</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We optimize Largest Contentful Paint (LCP) and visual stability (CLS) so Google algorithms reward your pages with higher organic rank.
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#4F7CFF] flex items-center justify-center text-xl">
                <FiCpu />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Schema.org Rich Data</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We embed structured JSON-LD data (Organization, Services, FAQs) that enables eye-catching rich snippets on Google search result pages.
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center text-xl">
                <FiSearch />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Zero Crawl Waste</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automated dynamic XML sitemaps, clean canonical tags, and error-free indexing to ensure Google discovers every new page you publish.
              </p>
            </div>
          </div>

          {/* Deliverables Breakdown */}
          <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl shadow-slate-900/5">
            <div className="max-w-2xl mb-8 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4F7CFF] block">
                Technical Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                What you receive in an Evoruno SEO engagement
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Comprehensive technical audit diagnosing 404s, slow response times, and index issues',
                'Next.js dynamic metadata generation with automated canonical URLs and OpenGraph tags',
                'JSON-LD structured data implementation verified with Google Rich Results Test',
                'Dynamic XML sitemap (/sitemap.xml) and robots directive (/robots.txt) management',
                'Next-gen image optimization (AVIF/WebP) and responsive srcset configuration',
                'Mobile crawl parity check and elimination of redirect chains',
                'Google Search Console setup, sitemap submission, and index monitoring',
                'Transparent reporting on site health scores with clear growth action items',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <FiCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: DARK CONVERSION CALLOUT */}
      <section className="py-24 bg-[#080B16] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#101629] to-[#172038] border border-white/10 text-center space-y-6 shadow-2xl relative z-10 max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
              Cut Dependence on Expensive Ads
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Ready to attract customers organically from Google?
            </h3>
            <p className="text-base sm:text-lg text-[#A7B0C5] max-w-xl mx-auto leading-relaxed">
              Let&apos;s eliminate the technical bottlenecks holding your website back from organic discovery and rankings.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button variant="default" size="lg" className="rounded-full shadow-lg hover:shadow-xl text-base px-8 py-6">
                  Get Your SEO Performance Proposal
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
