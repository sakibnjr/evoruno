import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Badge } from '@/_ui/badge';
import { Button } from '@/_ui/button';
import { FiCheck, FiArrowRight, FiMonitor, FiCode, FiZap } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Website Development Services | High-Converting Next.js Web Platforms | Evoruno',
  description:
    'Custom high-performing websites and web applications built with Next.js App Router, TypeScript, and modern CSS. Sub-second speed and conversion-focused architecture.',
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: DARK HERO */}
      <section className="pt-32 pb-20 bg-[#080B16] relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#4F7CFF]/15 rounded-full blur-[160px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="primary">
              <FiMonitor className="mr-1.5 h-3.5 w-3.5" />
              Website Development
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
              High-converting websites engineered for speed, growth, and credibility.
            </h1>
            <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
              Your website is your company&apos;s most important sales representative. We engineer lightning-fast, responsive web platforms using modern Next.js and TypeScript that turn casual visitors into loyal customers.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="default" size="lg" className="rounded-full shadow-lg hover:shadow-xl">
                  Discuss Your Website Project
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="rounded-full">
                  View Our Portfolio
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
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#4F7CFF] flex items-center justify-center text-xl">
                <FiZap />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Sub-Second Speed</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We leverage React Server Components (RSC) to serve pre-rendered HTML instantly to users, slashing bounce rates and keeping prospective buyers engaged.
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center text-xl">
                <FiCode />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Clean, Modern Code</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zero slow WordPress plugins or spaghetti code. Built strictly with modern Next.js, TypeScript, and clean CSS for effortless long-term maintenance.
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-cyan-50 text-[#00A3BF] flex items-center justify-center text-xl">
                <FiMonitor />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">100% Mobile Perfection</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over 70% of your visitors browse on mobile. We design fluid layouts with comfortable touch targets and lightning-fast loading on all screen sizes.
              </p>
            </div>
          </div>

          {/* Deliverables Breakdown */}
          <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl shadow-slate-900/5">
            <div className="max-w-2xl mb-8 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4F7CFF] block">
                Full Scope of Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                What you receive in every Evoruno website project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Custom UI/UX layout crafted specifically around your target audience',
                'Next.js App Router codebase with 100% TypeScript type safety',
                'Tailwind CSS design system with centralized tokens and reusable components',
                'Sub-second page load times with green Google Core Web Vitals (LCP, INP, CLS)',
                'Integrated contact inquiry form with automated Gmail SMTP notification dispatch',
                'Dynamic XML sitemap, robots.txt, and OpenGraph social share cards',
                'WCAG 2.1 AA accessibility compliance and keyboard navigation support',
                '30 days of post-launch stabilization support and complete code handover',
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

      {/* SECTION 3: DARK CONVERSION BANNER */}
      <section className="py-24 bg-[#080B16] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4F7CFF]/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#101629] to-[#172038] border border-white/10 text-center space-y-6 shadow-2xl relative z-10 max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
              Transform Your Online Presence
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Ready to upgrade your website and convert more visitors?
            </h3>
            <p className="text-base sm:text-lg text-[#A7B0C5] max-w-xl mx-auto leading-relaxed">
              Let&apos;s build an online experience that establishes immediate trust with your prospects and scales effortlessly with your sales.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button variant="default" size="lg" className="rounded-full shadow-lg hover:shadow-xl text-base px-8 py-6">
                  Get Started with Evoruno
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
