import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Badge } from '@/_ui/badge';
import { Button } from '@/_ui/button';
import { ProjectCard } from '@/_components/cards/ProjectCard';
import { projectsData } from '@/content/projects';
import { FiArrowRight, FiFolder } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Proven Business Results | Evoruno',
  description:
    'Explore featured digital solutions, web platforms, and mobile applications engineered by Evoruno. Transparent case studies and verified performance outcomes.',
};

export default function WorkPage() {
  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: DARK HERO */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[180px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="primary">
              <FiFolder className="mr-1.5 h-3.5 w-3.5" />
              Selected Case Studies
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
              Proven digital products that drive real business growth.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We build custom software that solves core business bottlenecks. Here is a look at selected web applications, mobile platforms, and technical SEO systems we have engineered for clients and innovation labs.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2: LIGHT CASE STUDIES LIST */}
      <section className="py-24 bg-light-section relative">
        <Container>
          <div className="space-y-16">
            {projectsData.map((project, index) => {
              const count = `0${index + 1} / 0${projectsData.length}`;
              return <ProjectCard key={project.id} project={project} count={count} />;
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 3: DARK CONVERSION CALLOUT */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-card to-muted border border-white/10 text-center space-y-6 shadow-2xl relative z-10 max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Transform Your Digital Channel
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold text-white font-display">
              Ready to achieve measurable results for your business?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
