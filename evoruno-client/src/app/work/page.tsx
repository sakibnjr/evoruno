import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/content/projects';
import { FiArrowRight, FiExternalLink, FiFolder } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Proven Business Results | Evoruno',
  description:
    'Explore featured digital solutions, web platforms, and mobile applications engineered by Evoruno. Transparent case studies and verified performance outcomes.',
};

export default function WorkPage() {
  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: DARK HERO */}
      <section className="pt-32 pb-20 bg-[#080B16] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4F7CFF]/15 rounded-full blur-[180px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="primary">
              <FiFolder className="mr-1.5 h-3.5 w-3.5" />
              Selected Case Studies
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
              Proven digital products that drive real business growth.
            </h1>
            <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
              We build custom software that solves core business bottlenecks. Here is a look at selected web applications, mobile platforms, and technical SEO systems we have engineered for clients and innovation labs.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2: LIGHT CASE STUDIES LIST */}
      <section className="py-24 bg-[#F5F7FB] relative">
        <Container>
          <div className="space-y-16">
            {projectsData.map((project, index) => {
              const count = `0${index + 1} / 0${projectsData.length}`;
              return (
                <div
                  key={project.id}
                  className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
                    {/* Left Column: Context, Challenge, Solution */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                        <span className="text-[#4F7CFF]">{count}</span>
                        <span>•</span>
                        <span className="text-slate-800">{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                        {project.isSelfInitiated && (
                          <>
                            <span>•</span>
                            <span className="text-amber-600 font-semibold">Self-Initiated Concept</span>
                          </>
                        )}
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display group-hover:text-[#4F7CFF] transition-colors">
                        {project.title}
                      </h2>

                      <p className="text-base text-slate-600 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Challenge & Solution Cards */}
                      <div className="space-y-3 pt-2">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <strong className="text-slate-900 font-bold block mb-1">
                            The Business Challenge:
                          </strong>{' '}
                          {project.challenge}
                        </div>
                        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <strong className="text-blue-900 font-bold block mb-1">
                            How Evoruno Solved It:
                          </strong>{' '}
                          {project.solution}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="pt-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                          Technologies Deployed
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <Link href="/contact">
                          <Button variant="default" size="default" className="rounded-full group/btn shadow-md hover:shadow-lg">
                            Discuss Similar Solution for Your Business
                            <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Client & Measurable ROI Metrics */}
                    <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between h-full space-y-8">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                          Client Partner / Industry
                        </div>
                        <div className="text-xl font-bold text-slate-900 font-display">{project.client}</div>
                      </div>

                      {/* Quantitative Results */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                          Verified Business Outcomes
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {project.metrics.map((m) => (
                            <div key={m.label} className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                              <div className="text-base sm:text-xl font-bold text-[#4F7CFF] font-display">
                                {m.value}
                              </div>
                              <div className="text-[11px] font-medium text-slate-500 mt-1 truncate">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-slate-500 flex items-center justify-between pt-4 border-t border-slate-200">
                        <span className="font-medium">100% Production Grade</span>
                        <span className="flex items-center gap-1 text-[#4F7CFF] font-semibold">
                          Live Architecture <FiExternalLink className="text-xs" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 3: DARK CONVERSION CALLOUT */}
      <section className="py-24 bg-[#080B16] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4F7CFF]/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#101629] to-[#172038] border border-white/10 text-center space-y-6 shadow-2xl relative z-10 max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
              Transform Your Digital Channel
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold text-white font-display">
              Ready to achieve measurable results for your business?
            </h3>
            <p className="text-base sm:text-lg text-[#A7B0C5] max-w-2xl mx-auto leading-relaxed">
              Whether you need to boost lead conversions, replace a legacy portal, or launch a breakthrough mobile app, we are here to execute seamlessly.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button variant="default" size="lg" className="rounded-full shadow-lg hover:shadow-xl text-base px-8 py-6">
                  Schedule a Free Project Scoping Session
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
