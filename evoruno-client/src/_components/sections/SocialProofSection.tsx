import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Button } from '@/_ui/button';
import { AgencyComparisonTable } from '@/_components/sections/AgencyComparisonTable';
import { FiTrendingUp, FiShield, FiArrowRight, FiAward } from 'react-icons/fi';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
} from 'react-icons/si';

const techStacks = [
  { name: 'Next.js 16 (App Router)', icon: SiNextdotjs },
  { name: 'React 19', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS v4', icon: SiTailwindcss },
  { name: 'Node.js Engine', icon: SiNodedotjs },
  { name: 'PostgreSQL Database', icon: SiPostgresql },
];

export function SocialProofSection() {
  return (
    <section className="bg-[#F5F7FB] text-[#080B16] py-24 sm:py-32 relative overflow-hidden transition-colors border-t border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#4F7CFF] text-xs font-bold uppercase tracking-wider">
            <FiAward className="h-3.5 w-3.5" />
            The Evoruno Standard
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080B16] font-display">
            Why growing companies choose Evoruno over generic agencies.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Most agencies sell slow, fragile template sites that burden your business with endless plugin breakages and vendor lock-in. We build bespoke software platforms engineered for speed, conversion, and long-term asset value.
          </p>
        </div>

        {/* Bento Grid Layout (Bespoke Agency Level) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1 (7 cols): Extracted Comparison Table */}
          <AgencyComparisonTable />

          {/* Right Column (5 cols): Speed & Conversion (Electric Blue Card) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {/* Card 2: Electric Blue Speed Card */}
            <div className="bg-[#1040FF] text-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-blue-500/20 flex flex-col justify-between flex-1">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  Google Core Web Vitals
                </div>
                <div className="text-5xl sm:text-6xl font-black tracking-tight mt-2 font-display">
                  100/100
                </div>
                <p className="text-sm text-blue-100 mt-4 leading-relaxed">
                  Every 100 milliseconds shaved off load speed measurably boosts conversion. We eliminate bloat so your visitors stay engaged and buy.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-400/30 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-blue-100 font-medium">
                  <FiTrendingUp className="h-4 w-4" />
                  +142% Inbound Conversions
                </span>
                <Link href="/services/seo" className="text-white underline font-semibold hover:text-blue-100">
                  SEO Details &rarr;
                </Link>
              </div>
            </div>

            {/* Card 3: Production Reliability */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Reliability SLA
                </span>
                <div className="text-3xl font-extrabold text-slate-900 font-display">99.99%</div>
                <p className="text-xs text-slate-600">Continuous monitoring & zero server panics.</p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#4F7CFF] flex items-center justify-center shrink-0">
                <FiShield className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Tech Stack Row */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <p className="text-xs font-bold uppercase tracking-widest text-center text-slate-500 mb-8">
            Engineered on Modern, Future-Proof Technologies
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {techStacks.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-slate-800 hover:text-[#4F7CFF] hover:border-blue-300 transition-all text-xs font-semibold"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#4F7CFF]" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-slate-300 text-slate-900 hover:bg-slate-100 font-semibold px-8"
            >
              Explore Full Engineering Capabilities
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
