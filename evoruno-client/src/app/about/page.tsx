import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiTarget, FiHeart, FiCode, FiUsers, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About Evoruno | Evolving Beyond Limits',
  description:
    'Learn about Evoruno: our engineering principles, digital craftsmanship, and commitment to building fast, accessible web and mobile solutions.',
};

const values = [
  {
    icon: FiTarget,
    title: 'Precision Craftsmanship',
    desc: 'We treat code as an engineering craft. Every component, database query, and animation is measured against strict performance and accessibility benchmarks.',
  },
  {
    icon: FiHeart,
    title: 'Radical Transparency',
    desc: 'No opaque jargon, no hidden fees, and zero artificial hype. We provide clear milestone roadmaps and direct communication throughout every project.',
  },
  {
    icon: FiCode,
    title: 'Modern Architecture',
    desc: 'We build on future-proof, maintainable foundations (Next.js, TypeScript, Tailwind CSS) that keep your business adaptable and free of technical debt.',
  },
  {
    icon: FiUsers,
    title: 'Long-Term Partnership',
    desc: 'We succeed when our clients succeed. Beyond initial launch, we provide ongoing architectural support, monitoring, and proactive optimization.',
  },
];

export function generateStaticParams() {
  return [];
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-[#080B16]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#4F7CFF]/15 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        {/* Hero */}
        <div className="max-w-3xl mb-20 space-y-4">
          <Badge variant="primary">Our Ethos & Origin</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
            Evolving businesses beyond limits through technology.
          </h1>
          <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
            Evoruno was founded on a simple conviction: businesses deserve digital tools that are as fast, ambitious, and dependable as their own leadership.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6 text-[#A7B0C5] leading-relaxed text-base">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Evoruno?
            </h2>
            <p>
              In a digital market crowded with fragile WordPress templates and cookie-cutter agencies, finding a technical partner who cares about both visual aesthetics and software architecture is rare.
            </p>
            <p>
              At Evoruno, we combine the visual finesse of high-end design agencies with the engineering discipline of top-tier software teams. We build custom websites, mobile applications, and SEO infrastructures designed to withstand real-world traffic and drive business inquiries.
            </p>
            <div className="pt-2 flex items-center gap-3 text-white font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#00E5FF]" />
              <span>Dhaka, Bangladesh — Collaborating Globally</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glow-card rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white font-display">Our Working Standards</h3>
              <div className="space-y-4">
                {[
                  '100% Type-Safe TypeScript across the stack',
                  'Sub-2-second Largest Contentful Paint target',
                  'Zero fabricated client counts or synthetic reviews',
                  'Semantic HTML & WCAG 2.1 AA accessibility',
                  'Clean handover documentation and source code ownership',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[#E2E8F0]">
                    <FiCheckCircle className="h-5 w-5 text-[#4F7CFF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12 space-y-2">
            <h2 className="text-3xl font-bold text-white font-display">Our Core Values</h2>
            <p className="text-sm text-[#A7B0C5]">The non-negotiable principles that guide every client interaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="glow-card rounded-3xl p-6 sm:p-8 space-y-4">
                  <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 text-[#4F7CFF] flex items-center justify-center text-xl">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{v.title}</h3>
                  <p className="text-sm text-[#A7B0C5] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#101629] to-[#172038] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white font-display">Want to work with us?</h3>
            <p className="text-sm text-[#A7B0C5]">
              Let&apos;s talk about your next project and explore how we can help you evolve.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="default" size="lg" className="rounded-full shrink-0">
              Get in Touch
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
