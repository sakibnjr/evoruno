import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/content/services';
import { FiArrowRight, FiCheck, FiCpu } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Digital Engineering Services | Websites, Mobile Apps & SEO | Evoruno',
  description:
    'Explore Evoruno services: modern Next.js web application development, cross-platform mobile apps for iOS & Android, and technical SEO architecture.',
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: DARK HERO */}
      <section className="pt-32 pb-20 bg-[#080B16] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#4F7CFF]/15 rounded-full blur-[160px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="primary">
              <FiCpu className="mr-1.5 h-3.5 w-3.5" />
              Core Capabilities
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
              Digital solutions engineered for measurable business growth.
            </h1>
            <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
              We help growing businesses eliminate slow load times, outdated code, and lost leads. From custom web platforms to native mobile apps and search visibility, everything we engineer is focused on customer acquisition and long-term ROI.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2: LIGHT SERVICES DEEP DIVE */}
      <section className="py-24 bg-[#F5F7FB] relative">
        <Container>
          <div className="max-w-2xl mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4F7CFF] block">
              End-To-End Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
              Comprehensive capabilities for ambitious businesses
            </h2>
            <p className="text-base text-slate-600">
              Every service is delivered with full code ownership, modern architecture, and zero technical shortcuts.
            </p>
          </div>

          {/* Services Stack */}
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                {/* Left Column: Context & Action */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4F7CFF]">
                      0{index + 1} {'//'} Solution
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
                    {service.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#4F7CFF] uppercase tracking-wider">
                    {service.tagline}
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                      Primary Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="default" size="lg" className="rounded-full group shadow-md hover:shadow-lg">
                        Explore {service.title} Details
                        <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Deliverables & Measurable Impact */}
                <div className="lg:col-span-6 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                      Direct Business Deliverables
                    </h4>
                    <div className="space-y-3">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                          <FiCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Measurable Performance */}
                  <div className="pt-6 border-t border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Standard Quality & Speed Benchmarks
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {service.metrics.map((m) => (
                        <div key={m.label} className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                          <div className="text-xl font-bold text-slate-900 font-display">{m.value}</div>
                          <div className="text-[11px] font-medium text-slate-500 mt-1 truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 3: DARK CONVERSION BANNER */}
      <section className="py-24 bg-[#080B16] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4F7CFF]/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#101629] to-[#172038] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl relative z-10">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
                Free Initial Architecture Review
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white font-display">
                Need advice on which approach fits your budget?
              </h3>
              <p className="text-base text-[#A7B0C5] leading-relaxed">
                Send us a message or schedule a quick introductory session. We will review your current systems and recommend the most cost-effective path forward.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="default" size="lg" className="rounded-full shrink-0 shadow-lg hover:shadow-xl text-base px-8 py-6">
                Start Project Discussion
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
