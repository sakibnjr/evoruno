import { Container } from '@/_components/layout/Container';
import { Badge } from '@/_ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/_ui/card';
import { FiAlertCircle, FiSmartphone, FiSearch, FiZapOff } from 'react-icons/fi';

const problems = [
  {
    icon: FiZapOff,
    tag: 'Customer Drop-Off',
    title: 'Losing Inquiries to Slow Speeds',
    description:
      'Over 53% of mobile visitors abandon a website if it takes longer than 3 seconds to load. Clunky templates and slow loading quietly cost your business thousands in lost sales every month.',
    impact: 'High bounce rate and wasted advertising budgets',
    accentColor: '#EF4444',
  },
  {
    icon: FiSmartphone,
    tag: 'Mobile Experience',
    title: 'Frustrating, Clunky Mobile Views',
    description:
      'More than 65% of your customers visit from smartphones. Broken buttons, awkward text scaling, and pinching-to-zoom instantly make your business look amateur and push clients to competitors.',
    impact: 'Lost mobile leads and diminished brand credibility',
    accentColor: '#F59E0B',
  },
  {
    icon: FiSearch,
    tag: 'Lost Sales',
    title: 'Invisible to Customers on Google',
    description:
      'A beautiful website means nothing if prospective clients can’t find it. Outdated code, missing structured data, and poor crawl architectures keep your business buried where no one looks.',
    impact: 'Zero organic inbound leads and high reliance on paid ads',
    accentColor: '#8B5CF6',
  },
];

export function ProblemSection() {
  return (
    <section className="bg-background text-foreground py-24 sm:py-32 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10">
            <FiAlertCircle className="mr-1.5 h-3.5 w-3.5" />
            The Real Business Cost
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Is an outdated digital presence costing you customers?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Most business websites suffer from silent technical bottlenecks that turn away high-intent prospects before they ever get in touch.
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
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                      {prob.tag}
                    </span>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      {prob.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {prob.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-4 border-t border-white/5">
                  <div className="text-xs font-medium text-red-300/90 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    Business Impact: {prob.impact}
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
