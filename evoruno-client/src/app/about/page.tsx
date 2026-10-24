import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Badge } from '@/_ui/badge';
import { Button } from '@/_ui/button';
import { QualityGuaranteesCard } from '@/_components/cards/QualityGuaranteesCard';
import { FiTarget, FiHeart, FiCode, FiUsers, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About Us | Engineering & Business Philosophy | Evoruno',
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

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: DARK HERO */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[160px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="primary">Our Ethos & Origin</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
              We help ambitious businesses outpace competition through technology.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Evoruno was founded on a simple conviction: businesses deserve digital tools that are as fast, ambitious, and dependable as their own leadership. No bloated templates, no unnecessary overhead.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2: LIGHT STORY & STANDARDS */}
      <section className="py-24 bg-light-section relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 space-y-6 text-slate-600 leading-relaxed text-base">
              <span className="text-xs font-bold uppercase tracking-widest text-primary block">
                The Evoruno Difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
                Why forward-thinking business leaders choose Evoruno
              </h2>
              <p>
                In a digital landscape crowded with fragile WordPress setups, overpriced agencies, and endless communication delays, finding a technical partner who treats your company like their own is rare.
              </p>
              <p>
                At Evoruno, we combine the visual finesse of high-end design agencies with the engineering discipline of top-tier software companies. We build custom websites, mobile applications, and SEO architectures designed to withstand real-world traffic, generate qualified customer inquiries, and yield immediate ROI.
              </p>
              <div className="pt-2 flex items-center gap-3 text-slate-900 font-semibold">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>Dhaka, Bangladesh — Collaborating Globally</span>
              </div>
            </div>

            {/* Right Column: Extracted Working Standards Card */}
            <QualityGuaranteesCard />
          </div>
        </Container>
      </section>

      {/* SECTION 3: DARK CORE VALUES */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[160px] pointer-events-none" />

        <Container>
          <div className="max-w-2xl mb-16 space-y-3">
            <Badge variant="primary">Our Guiding Values</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Principles that protect your technology investment
            </h2>
            <p className="text-base text-muted-foreground">
              These non-negotiable standards guide every line of code we write and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="glow-card rounded-3xl p-6 sm:p-8 space-y-4 border border-white/10">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 text-primary flex items-center justify-center text-xl">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 4: LIGHT CONVERSION BANNER */}
      <section className="py-20 bg-light-section relative">
        <Container>
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary block">
                Let&apos;s Build Together
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Ready to work with a dedicated technical partner?
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Let&apos;s talk about your next project, explore architecture possibilities, and give your business the digital edge it deserves.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="default" size="lg" className="rounded-full shrink-0 shadow-md hover:shadow-lg text-base px-8 py-6">
                Start a Conversation
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
