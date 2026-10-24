import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Badge } from '@/_ui/badge';
import { Button } from '@/_ui/button';
import { ServiceCard } from '@/_components/cards/ServiceCard';
import { servicesData } from '@/content/services';
import { FiArrowRight, FiCpu } from 'react-icons/fi';

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
              <ServiceCard key={service.id} service={service} index={index} />
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
