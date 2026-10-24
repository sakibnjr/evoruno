import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Button } from '@/_ui/button';
import { FiArrowRight, FiMail } from 'react-icons/fi';

export function FinalCtaSection() {
  return (
    <section className="bg-[#080B16] text-[#F5F7FF] py-24 sm:py-32 relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#101629] via-[#0E1424] to-[#080B16] p-8 sm:p-14 lg:p-20 shadow-2xl">
          {/* Ambient Lighting Mesh */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#4F7CFF]/25 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#7C5CFC]/25 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">
              <span className="h-2 w-2 rounded-full bg-[#4F7CFF]" />
              Start Your Evolution
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]">
              Ready to win more clients online?
            </h2>

            <p className="text-base sm:text-xl text-[#A7B0C5] leading-relaxed max-w-2xl mx-auto">
              Tell us about your business goals or the challenges you’re facing. We’ll review your project and get back to you with actionable ideas and transparent pricing within 24 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto rounded-full shadow-[0_0_35px_rgba(255,255,255,0.35)] hover:shadow-[0_0_45px_rgba(255,255,255,0.5)] group"
                >
                  Let&apos;s Talk About Your Project
                  <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <a
                href="mailto:contact@evoruno.com"
                className="inline-flex items-center gap-2 text-sm text-[#A7B0C5] hover:text-white px-5 py-3 transition-colors"
              >
                <FiMail className="h-4 w-4" />
                <span>contact@evoruno.com</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Replies within 24 business hours
              </span>
              <span>•</span>
              <span>Fixed milestone pricing, zero hidden costs</span>
              <span>•</span>
              <span>Direct engineer & strategist support</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
