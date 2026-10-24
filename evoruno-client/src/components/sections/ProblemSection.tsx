import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { FiAlertCircle, FiSmartphone, FiSearch, FiZapOff } from 'react-icons/fi';

const problems = [
  {
    icon: FiZapOff,
    tag: 'Friction & Speed',
    title: 'Sluggish Sites Losing Customers',
    description:
      'Over 50% of mobile visitors abandon a website that takes longer than 3 seconds to load. Legacy templates and bloated plugins quietly throttle your conversion rate and kill user trust.',
    impact: 'Elevated bounce rates and wasted ad spend',
    accentColor: '#EF4444',
  },
  {
    icon: FiSmartphone,
    tag: 'Mobile Experience',
    title: 'Clunky, Non-Responsive Interfaces',
    description:
      'Desktop designs clumsily shrunk down to smartphone screens cause frustration, broken navigation, and misaligned buttons—driving away high-intent prospects on mobile devices.',
    impact: 'Damaged brand perception and lost inbound leads',
    accentColor: '#F59E0B',
  },
  {
    icon: FiSearch,
    tag: 'Search Visibility',
    title: 'Completely Invisible on Google',
    description:
      'A beautiful website means nothing if search engines cannot index it. Missing structured data, slow server responses, and poor crawl architectures keep businesses buried on page 5.',
    impact: 'Zero organic inbound traffic and total reliance on paid ads',
    accentColor: '#8B5CF6',
  },
];

export function ProblemSection() {
  return (
    <section className="bg-[#080B16] text-[#F5F7FF] py-24 sm:py-32 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4F7CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10">
            <FiAlertCircle className="mr-1.5 h-3.5 w-3.5" />
            The Growth Bottlenecks
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Is your digital presence holding your business back?
          </h2>
          <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
            Most business websites suffer from invisible technical flaws that sabotage conversions long before a customer ever reaches out.
          </p>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <Card
                key={prob.title}
                className="glow-card flex flex-col justify-between p-2 rounded-3xl"
              >
                <CardHeader className="space-y-4">
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center text-xl font-bold"
                    style={{
                      backgroundColor: `${prob.accentColor}15`,
                      color: prob.accentColor,
                      border: `1px solid ${prob.accentColor}30`,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A7B0C5] block mb-1">
                      {prob.tag}
                    </span>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      {prob.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm text-[#A7B0C5] leading-relaxed">
                    {prob.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-4 border-t border-white/5">
                  <div className="text-xs font-medium text-red-300/90 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    Bottleneck: {prob.impact}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
