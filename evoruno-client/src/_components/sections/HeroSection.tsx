import Link from 'next/link';
import { Button } from '@/_ui/button';
import { Container } from '@/_components/layout/Container';
import { HeroCommandCenter } from '@/_components/sections/HeroCommandCenter';
import { FiArrowRight } from 'react-icons/fi';

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authentic Brand Messaging & Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Bespoke Digital Product & Engineering Studio
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.08] font-display">
              We engineer digital products that turn visitors into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                revenue.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              We design and build bespoke Next.js web applications, cross-platform mobile apps, and technical SEO architectures for ambitious businesses. Zero bloated templates. Zero technical debt.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-full shadow-[0_0_30px_rgba(79,124,255,0.4)] hover:shadow-[0_0_40px_rgba(79,124,255,0.6)] group text-base px-7 py-6"
                >
                  Start Your Project Discussion
                  <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 text-white hover:bg-white/5 text-base px-6 py-6"
                >
                  Explore Client Work
                </Button>
              </Link>
            </div>

            {/* Credibility & Guarantee Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-muted-foreground">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-white font-display">&lt; 1.0s</div>
                <div className="text-[11px] uppercase tracking-wider text-dim">Page Speed</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-white font-display">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-dim">Code Ownership</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-white font-display">30-Day</div>
                <div className="text-[11px] uppercase tracking-wider text-dim">Post-Launch SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Isolated Interactive Showcase */}
          <HeroCommandCenter />
        </div>
      </Container>
    </section>
  );
}
