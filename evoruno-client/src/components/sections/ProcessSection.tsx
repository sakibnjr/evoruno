import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { FiGitBranch, FiCompass, FiCode, FiSend } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Understand & Strategize',
    desc: 'We start by understanding your business model, ideal customers, and sales goals. Together, we define clear project deliverables and measurable outcomes.',
    icon: FiCompass,
  },
  {
    number: '02',
    title: 'Plan',
    tagline: 'Blueprint & Fixed Pricing',
    desc: 'You receive a complete visual wireframe, architecture blueprint, and transparent fixed milestone pricing—so you know exactly what is being built and when.',
    icon: FiGitBranch,
  },
  {
    number: '03',
    title: 'Build',
    tagline: 'Agile Development & Demos',
    desc: 'We craft your platform using modern Next.js and TypeScript, testing across real smartphones and computers with regular live preview links for your feedback.',
    icon: FiCode,
  },
  {
    number: '04',
    title: 'Launch & Grow',
    tagline: 'Smooth Launch & Support',
    desc: 'We manage full domain deployment, verify Google search crawlability, and provide 30 days of dedicated post-launch support to ensure total peace of mind.',
    icon: FiSend,
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#080B16] text-[#F5F7FF] py-24 sm:py-32 relative overflow-hidden border-t border-white/5">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20 space-y-4">
          <Badge variant="secondary">
            Stress-Free Partnership
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            How we bring your vision to life.
          </h2>
          <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
            A simple, predictable 4-step process that eliminates guesswork, avoids costly delays, and keeps you in full control every step of the way.
          </p>
        </div>

        {/* 4-Step Connected Horizontal Timeline */}
        <div className="relative">
          {/* Luminous Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#4F7CFF]/20 via-[#7C5CFC]/40 to-[#00E5FF]/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="glow-card rounded-3xl p-8 flex flex-col justify-between relative group hover:border-[#4F7CFF]/40"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A7B0C5] font-display">
                        {step.number}
                      </span>
                      <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 text-[#4F7CFF] flex items-center justify-center text-lg group-hover:scale-110 group-hover:bg-[#4F7CFF]/10 transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display mb-1 group-hover:text-[#4F7CFF] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-3">
                      {step.tagline}
                    </p>
                    <p className="text-sm text-[#A7B0C5] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#64748B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]" />
                    Phase {step.number} Milestone
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
