import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/ui/ContactForm';
import { Badge } from '@/components/ui/badge';
import { FiMail, FiMapPin, FiClock, FiShield, FiCheckCircle } from 'react-icons/fi';

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
        {/* Glow Effects */}
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
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#4F7CFF] block mb-2">
                  Direct Inquiries
                </span>
                <h2 className="text-3xl font-bold text-slate-900 font-display">
                  We answer every message personally.
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  You will communicate directly with technical builders who understand architecture, timelines, and business revenue.
                </p>
              </div>

              {/* Direct Details Cards */}
              <div className="space-y-4 pt-2">
                <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-50 text-[#4F7CFF] flex items-center justify-center shrink-0">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Direct Email
                    </div>
                    <a
                      href="mailto:contact@evoruno.com"
                      className="text-base font-bold text-slate-900 hover:text-[#4F7CFF] transition-colors"
                    >
                      contact@evoruno.com
                    </a>
                    <div className="text-xs text-slate-500 mt-1">
                      Monitored continuously throughout business hours
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center shrink-0">
                    <FiClock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Guaranteed Response Time
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      Within 24 Business Hours
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Clear initial feedback, technical recommendations, and next steps
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-cyan-50 text-[#00A3BF] flex items-center justify-center shrink-0">
                    <FiMapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Engineering Hub
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      Dhaka, Bangladesh
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Serving clients across Bangladesh, North America, and Europe
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="rounded-2xl p-6 bg-blue-50/70 border border-blue-100 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  What happens after you submit?
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#4F7CFF] shrink-0" />
                    <span>We review your requirements and target timeline.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#4F7CFF] shrink-0" />
                    <span>We prepare preliminary technical ideas and budget ranges.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#4F7CFF] shrink-0" />
                    <span>We schedule a zero-pressure 15-minute introductory video call.</span>
                  </li>
                </ul>
              </div>
            </div>

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
