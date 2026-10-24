import type { Metadata } from 'next';
import { Container } from '@/_components/layout/Container';
import { ContactForm } from '@/_components/forms/ContactForm';
import { ContactDirectDetails } from '@/_components/forms/ContactDirectDetails';
import { Badge } from '@/_ui/badge';
import { FiShield } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Contact Us | Start Your Project Discussion | Evoruno',
  description:
    'Get in touch with Evoruno. Tell us about your web, mobile, or SEO goals. We respond with actionable insights within 24 business hours.',
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: DARK HERO */}
      <section className="pt-32 pb-20 bg-[#080B16] relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4F7CFF]/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#7C5CFC]/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="primary">Direct Communication</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
              Let&apos;s build something that accelerates your business.
            </h1>
            <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
              Whether you need a high-converting website redesign, a cross-platform mobile app, or a search engine growth strategy, our engineers are ready to help. No sales pitch, no obligation.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2: LIGHT INTERACTIVE FORM & DIRECT DETAILS */}
      <section className="py-24 bg-[#F5F7FB] relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Details */}
            <ContactDirectDetails />

            {/* Right Column: Inquiry Form in crisp white card */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl shadow-slate-900/5">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4F7CFF] block mb-1">
                    Project Discussion
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                    Tell us about your project
                  </h2>
                  <p className="text-sm text-slate-600 mt-2">
                    Fill out the fields below so we can understand your business objectives and prepare tailored solutions.
                  </p>
                </div>

                <ContactForm variant="light" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: DARK PRIVACY & TRUST BANNER */}
      <section className="py-16 bg-[#080B16] border-t border-white/10 text-center">
        <Container size="narrow">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#A7B0C5]">
            <div className="flex items-center gap-2">
              <FiShield className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>100% Privacy Protected</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Zero spam or marketing lists</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>NDA available upon request</span>
          </div>
        </Container>
      </section>
    </div>
  );
}
