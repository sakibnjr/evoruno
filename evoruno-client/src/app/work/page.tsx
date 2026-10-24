import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/content/projects';
import { FiArrowRight, FiExternalLink, FiFolder } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Portfolio & Work | Selected Digital Products | Evoruno',
  description:
    'Explore featured digital solutions, web platforms, and mobile applications engineered by Evoruno. Transparent case studies and verified performance outcomes.',
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-[#080B16]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4F7CFF]/15 rounded-full blur-[180px] pointer-events-none" />

      <Container>
        {/* Header matching Reference Frame 5 ("Our Portfolio") */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <Badge variant="primary">
            <FiFolder className="mr-1.5 h-3.5 w-3.5" />
            Selected Case Studies
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
            Real products solving real business challenges. We combine sleek interactive aesthetics with rigorous software engineering.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16">
          {projectsData.map((project, index) => {
            const count = `0${index + 1} / 0${projectsData.length}`;
            return (
              <div
                key={project.id}
                className="glow-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden group"
              >
                {/* Subtle Accent Glow */}
                <div
                  className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Metadata & Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">
                      <span className="text-[#4F7CFF] font-bold">{count}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                      {project.isSelfInitiated && (
                        <>
                          <span>•</span>
                          <span className="text-amber-400">Self-Initiated Concept</span>
                        </>
                      )}
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display group-hover:text-[#4F7CFF] transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-base text-[#A7B0C5] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 pt-2">
                      <div className="text-xs text-[#A7B0C5]">
                        <strong className="text-white">Challenge:</strong> {project.challenge}
                      </div>
                      <div className="text-xs text-[#A7B0C5]">
                        <strong className="text-white">Solution:</strong> {project.solution}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex items-center gap-4">
                      <Link href="/contact">
                        <Button variant="default" size="default" className="rounded-full group/btn">
                          Discuss Similar Project
                          <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Box & Metrics */}
                  <div className="lg:col-span-5 bg-black/40 rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between h-full space-y-8">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
                        Client Partner
                      </div>
                      <div className="text-lg font-bold text-white">{project.client}</div>
                    </div>

                    {/* Quantitative Results */}
                    <div className="grid grid-cols-3 gap-3">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                          <div className="text-base sm:text-lg font-bold text-white font-display">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-[#A7B0C5] mt-1 truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-[#64748B] flex items-center justify-between pt-4 border-t border-white/5">
                      <span>Production Grade Architecture</span>
                      <span className="flex items-center gap-1 text-[#4F7CFF]">
                        Verified Result <FiExternalLink className="text-xs" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#101629] to-[#172038] border border-white/10 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Have a project in mind?
          </h3>
          <p className="text-sm text-[#A7B0C5] max-w-xl mx-auto">
            Let&apos;s build an exceptional digital solution tailored precisely to your company&apos;s goals.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button variant="default" size="lg" className="rounded-full">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
