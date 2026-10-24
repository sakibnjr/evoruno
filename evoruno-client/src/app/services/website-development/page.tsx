import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiCheck, FiArrowRight, FiMonitor, FiCode, FiZap } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Website Development Services | Next.js & TypeScript',
  description:
    'Custom high-performing websites and web applications built with Next.js App Router, TypeScript, and modern CSS. Sub-second speed and conversion-focused architecture.',
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-[#080B16]">
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#4F7CFF]/15 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        {/* Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="primary">
            <FiMonitor className="mr-1.5 h-3.5 w-3.5" />
            Website Development
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
            High-converting web platforms engineered for speed.
          </h1>
          <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
            Your website is the single most critical asset in your digital sales funnel. We engineer fast, responsive, and SEO-ready web applications using modern Next.js and TypeScript.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button variant="default" size="lg" className="rounded-full">
                Discuss Your Website Project
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg" className="rounded-full">
                View Web Projects
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glow-card rounded-3xl p-8 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-[#4F7CFF] flex items-center justify-center text-xl">
              <FiZap />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Sub-Second Load Times</h3>
            <p className="text-sm text-[#A7B0C5] leading-relaxed">
              Leveraging React Server Components (RSC) to serve pre-rendered HTML instantly to users, slashing Largest Contentful Paint (LCP) and bounce rates.
            </p>
          </div>

          <div className="glow-card rounded-3xl p-8 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-[#7C5CFC] flex items-center justify-center text-xl">
              <FiCode />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Modern Tech Stack</h3>
            <p className="text-sm text-[#A7B0C5] leading-relaxed">
              No obsolete WordPress plugins or messy spaghetti code. Built strictly with modern Next.js, TypeScript, Tailwind CSS, and headless architectures.
            </p>
          </div>

          <div className="glow-card rounded-3xl p-8 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 text-[#00E5FF] flex items-center justify-center text-xl">
              <FiMonitor />
            </div>
            <h3 className="text-xl font-bold text-white font-display">100% Fluid Responsiveness</h3>
            <p className="text-sm text-[#A7B0C5] leading-relaxed">
              Meticulously engineered touch targets, responsive typography scaling, and zero horizontal overflow across mobile phones, tablets, and 4K displays.
            </p>
          </div>
        </div>

        {/* Deliverables Breakdown */}
        <div className="glow-card rounded-3xl p-8 sm:p-12 mb-20 border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-6">
            What You Receive In Every Website Build
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Custom UI/UX layout crafted around your brand and conversion goals',
              'Next.js App Router codebase with full TypeScript type safety',
              'Tailwind CSS design system with centralized theme tokens',
              'Sub-second page load times with green Google Core Web Vitals',
              'Integrated contact inquiry form with backend email notifications',
              'Dynamic XML sitemap, robots.txt, and OpenGraph social share cards',
              'Full accessibility (WCAG 2.1 AA) compliance and keyboard navigation',
              '30 days of post-launch stabilization support and maintenance handover',
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
          <h3 className="text-2xl font-bold text-white font-display">Ready to upgrade your website?</h3>
          <p className="text-sm text-[#A7B0C5]">
            Let&apos;s build a digital experience that sets you apart from competitors.
          </p>
          <Link href="/contact">
            <Button variant="default" size="lg" className="rounded-full">
              Get Started with Evoruno
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
