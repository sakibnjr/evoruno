import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { FiCheckCircle, FiTrendingUp, FiCpu, FiShield, FiArrowRight } from 'react-icons/fi';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython } from 'react-icons/si';

const techStacks = [
  { name: 'Next.js App Router', icon: SiNextdotjs },
  { name: 'React 19', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS v4', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python / AI', icon: SiPython },
];

export function SocialProofSection() {
  return (
    <section className="bg-[#F5F7FB] text-[#080B16] py-24 sm:py-32 relative overflow-hidden transition-colors">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#4F7CFF] text-xs font-semibold uppercase tracking-wider mb-3">
            <FiCpu className="h-3.5 w-3.5" />
            Proof of Capability
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080B16] font-display">
            Built for performance, engineered for growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            We don&apos;t build disposable templates. Every digital platform we deploy adheres to strict engineering benchmarks, verifiable performance audits, and high-conversion UX.
          </p>
        </div>

        {/* Bento Grid Layout (Direct Reference from Video Frame 3) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Clean Architecture Preview (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#4F7CFF] flex items-center justify-center text-xl font-bold">
                <FiShield className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#080B16] font-display">
                Zero Tech Compromises
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Clean, modular TypeScript architectures designed for long-term maintainability. No bloated page builders or vendor lock-in.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-3xl font-extrabold text-[#080B16]">100%</div>
                <div className="text-xs text-[#64748B] mt-0.5 font-medium">Type-Safe Clean Code</div>
              </div>
              <span className="h-8 w-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                <FiCheckCircle className="h-4 w-4" />
              </span>
            </div>
          </div>

          {/* Card 2: Reliability & Testimonial Metric (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Commitment to Uptime</div>
              <div className="text-5xl font-black text-[#080B16] tracking-tight mt-2 font-display">
                99.99%
              </div>
              <p className="text-sm text-[#475569] mt-4 italic leading-relaxed">
                &ldquo;Evoruno transformed our sluggish web presence into an ultra-fast digital sales platform. Our mobile engagement jumped within two weeks of launch.&rdquo;
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-9 w-9 rounded-full bg-[#101629] text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                  EN
                </div>
                <div className="h-9 w-9 rounded-full bg-[#4F7CFF] text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                  ST
                </div>
                <div className="h-9 w-9 rounded-full bg-[#7C5CFC] text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                  FX
                </div>
              </div>
              <div className="text-xs text-[#64748B]">
                <strong className="text-[#080B16] block">Verified Client Feedback</strong>
                Continuous production support
              </div>
            </div>
          </div>

          {/* Card 3: Deep Electric-Blue Highlight Card (4 cols - Reference Frame 3) */}
          <div className="md:col-span-12 lg:col-span-4 bg-[#1040FF] text-white rounded-3xl p-8 shadow-xl shadow-blue-500/20 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                Core Web Vitals
              </div>
              <div className="text-5xl sm:text-6xl font-black tracking-tight mt-2 font-display">
                &lt; 1.0s
              </div>
              <p className="text-sm text-blue-100 mt-4 leading-relaxed">
                Optimized server components and edge rendering ensure rapid First Contentful Paint and flawless Core Web Vitals on mobile networks.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-400/30 flex items-center justify-between">
              <div className="text-xs font-medium text-blue-100 flex items-center gap-1.5">
                <FiTrendingUp className="h-4 w-4" />
                Lighthouse Grade: 100/100
              </div>
              <Link href="/services/seo" className="text-xs text-white underline hover:text-blue-100">
                Audit Standards &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Technology Marquee Strip */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <p className="text-xs font-semibold uppercase tracking-widest text-center text-[#64748B] mb-8">
            Powering Next-Generation Digital Experiences With
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {techStacks.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200/60 shadow-sm text-slate-700 hover:text-[#4F7CFF] hover:border-blue-200 transition-colors"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-xs font-semibold">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Explore Platform CTA Button */}
        <div className="mt-14 text-center">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-slate-300 text-slate-800 hover:bg-slate-100"
            >
              Explore Full Capabilities
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
