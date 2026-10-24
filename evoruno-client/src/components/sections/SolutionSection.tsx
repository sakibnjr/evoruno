import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/content/services';
import { FiCheck, FiArrowRight, FiLayers } from 'react-icons/fi';

export function SolutionSection() {
  return (
    <section className="bg-[#080B16] text-[#F5F7FF] py-24 sm:py-32 relative overflow-hidden border-t border-white/5">
      {/* Background radial lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#4F7CFF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#7C5CFC]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <Badge variant="primary">
              <FiLayers className="mr-1.5 h-3.5 w-3.5" />
              What We Deliver
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
              Bespoke digital engineering designed to scale.
            </h2>
            <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
              We bridge visionary design with bulletproof software engineering to turn your digital presence into your strongest competitive advantage.
            </p>
          </div>

          <div>
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full">
                View All Services
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* 3 Interactive Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`glow-card rounded-3xl p-8 flex flex-col justify-between relative group ${
                  isFeatured ? 'border-[#4F7CFF]/40 bg-gradient-to-b from-[#101629] to-[#0A0E1F]' : ''
                }`}
              >
                {/* Glow Border Indicator */}
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#4F7CFF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4F7CFF]">
                      0{index + 1} {'//'} Service
                    </span>
                    {isFeatured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#4F7CFF]/20 text-[#4F7CFF] text-[10px] font-bold tracking-wider uppercase border border-[#4F7CFF]/30">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white font-display mb-3 group-hover:text-[#4F7CFF] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#A7B0C5] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 py-6 border-t border-b border-white/5 my-6">
                    {service.deliverables.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-[#E2E8F0]">
                        <FiCheck className="h-4 w-4 text-[#00E5FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Badge Row */}
                  <div className="grid grid-cols-3 gap-2 text-center py-2 mb-6">
                    {service.metrics.map((m) => (
                      <div key={m.label} className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-sm font-bold text-white font-display">{m.value}</div>
                        <div className="text-[10px] text-[#A7B0C5] mt-0.5 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-2">
                  <Link href={`/services/${service.slug}`} className="block w-full">
                    <Button
                      variant={isFeatured ? 'primary' : 'secondary'}
                      size="default"
                      className="w-full rounded-full group-hover:shadow-[0_0_20px_rgba(79,124,255,0.3)]"
                    >
                      Explore {service.title}
                      <FiArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
