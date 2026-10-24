import Link from 'next/link';
import { ServiceDetail } from '@/content/services';
import { Button } from '@/_ui/button';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

interface ServiceCardProps {
  service: ServiceDetail;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Column: Context & Action */}
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            0{index + 1} {'//'} Solution
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
          {service.title}
        </h3>

        <p className="text-sm font-semibold text-primary uppercase tracking-wider">
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
  );
}
