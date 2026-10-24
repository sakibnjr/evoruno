import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/content/services';
import { FiArrowRight, FiCheck, FiCpu } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Digital Engineering Services | Websites, Mobile Apps & SEO',
  description:
    'Explore Evoruno services: modern Next.js web application development, cross-platform mobile apps for iOS & Android, and technical SEO architecture.',
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-[#080B16]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#4F7CFF]/15 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        {/* Page Hero */}
        <div className="max-w-3xl mb-20 space-y-4">
          <Badge variant="primary">
            <FiCpu className="mr-1.5 h-3.5 w-3.5" />
            Core Capabilities
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
            Engineering services designed for tangible business impact.
          </h1>
          <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
            We deliver end-to-end digital craftsmanship. From initial product discovery and architecture to deployment and search engine indexation, our team focuses on speed, security, and measurable ROI.
          </p>
        </div>

        {/* Services Deep Dive Stack */}
        <div className="space-y-16">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="glow-card rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#4F7CFF]">
                    0{index + 1} {'//'} Discipline
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                  {service.title}
                </h2>

                <p className="text-sm font-semibold text-[#00E5FF] uppercase tracking-wider">
                  {service.tagline}
                </p>

                <p className="text-sm sm:text-base text-[#A7B0C5] leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block mb-2">
                    Primary Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="default" size="lg" className="rounded-full group">
                      View Dedicated {service.title} Page
                      <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Deliverables & Metrics */}
              <div className="lg:col-span-6 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/5 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                    Key Deliverables & Capabilities
                  </h3>
                  <div className="space-y-3">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                        <FiCheck className="h-4 w-4 text-[#00E5FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Measurable Performance */}
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#A7B0C5] mb-3">
                    Target Performance Metrics
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {service.metrics.map((m) => (
                      <div key={m.label} className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                        <div className="text-lg font-bold text-white font-display">{m.value}</div>
                        <div className="text-[10px] text-[#A7B0C5] mt-1 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conversion Banner */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#101629] to-[#172038] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white font-display">Need a tailored solution?</h3>
            <p className="text-sm text-[#A7B0C5]">
              Let&apos;s evaluate your current architecture and map out the right strategy.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="default" size="lg" className="rounded-full shrink-0">
              Start Project Discussion
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
