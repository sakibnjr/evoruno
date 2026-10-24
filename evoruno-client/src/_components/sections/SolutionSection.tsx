import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Button } from '@/_ui/button';
import { servicesData } from '@/content/services';
import { FiCheck, FiArrowRight, FiLayers } from 'react-icons/fi';

export function SolutionSection() {
  return (
    <section className="bg-light-section text-light-section-text py-24 sm:py-32 relative overflow-hidden transition-colors border-t border-slate-200/60">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold uppercase tracking-wider">
              <FiLayers className="h-3.5 w-3.5" />
              Our Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-light-section-text font-display">
              Custom digital solutions designed to grow your business.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We combine modern visual design with rock-solid software engineering to give your company an unfair advantage online.
            </p>
          </div>

          <div>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-slate-300 text-slate-800 hover:bg-slate-100"
              >
                View All Services
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* 3 Interactive Service Cards in Light Mode */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-3xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 hover:shadow-xl ${
                  isFeatured
                    ? 'border-blue-400 shadow-md ring-1 ring-blue-400/30'
                    : 'border-slate-200/80 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      0{index + 1} {'//'} Service
                    </span>
                    {isFeatured && (
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-primary text-[11px] font-bold tracking-wider uppercase border border-blue-200">
                        Most Requested
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-display mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 py-6 border-t border-b border-slate-100 my-6">
                    {service.deliverables.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                        <FiCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Badge Row */}
                  <div className="grid grid-cols-3 gap-2 text-center py-2 mb-6">
                    {service.metrics.map((m) => (
                      <div key={m.label} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                        <div className="text-base font-bold text-slate-900 font-display">{m.value}</div>
                        <div className="text-[10px] text-dim mt-0.5 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-2">
                  <Link href={`/services/${service.slug}`} className="block w-full">
                    <Button
                      variant={isFeatured ? 'primary' : 'default'}
                      size="default"
                      className={`w-full rounded-full ${
                        isFeatured
                          ? 'bg-primary text-white hover:brightness-110'
                          : 'bg-background text-white hover:bg-slate-800'
                      }`}
                    >
                      Learn More About {service.title}
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
