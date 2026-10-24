import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/ui/ContactForm';
import { Badge } from '@/components/ui/badge';
import { FiMail, FiMapPin, FiClock, FiShield } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Contact Us | Start Your Project Discussion',
  description:
    'Get in touch with Evoruno. Tell us about your web, mobile, or SEO goals. We respond with actionable insights within 24 business hours.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-[#080B16]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4F7CFF]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#7C5CFC]/15 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Badge variant="primary">Direct Communication</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display">
                Let&apos;s build something exceptional.
              </h1>
              <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
                Whether you need a complete website build, a high-converting redesign, or an architecture audit, our team is ready to help you evolve beyond limits.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="glow-card rounded-2xl p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-[#4F7CFF] flex items-center justify-center shrink-0">
                  <FiMail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">Direct Email</div>
                  <a href="mailto:contact@evoruno.com" className="text-sm sm:text-base font-semibold text-white hover:text-[#4F7CFF] transition-colors">
                    contact@evoruno.com
                  </a>
                  <div className="text-xs text-[#64748B] mt-0.5">Checked continuously throughout business days</div>
                </div>
              </div>

              <div className="glow-card rounded-2xl p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-[#7C5CFC] flex items-center justify-center shrink-0">
                  <FiClock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">Response Guarantee</div>
                  <div className="text-sm sm:text-base font-semibold text-white">Within 24 Business Hours</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Expect initial feedback, questions, or next steps</div>
                </div>
              </div>

              <div className="glow-card rounded-2xl p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-[#00E5FF] flex items-center justify-center shrink-0">
                  <FiMapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">Location</div>
                  <div className="text-sm sm:text-base font-semibold text-white">Dhaka, Bangladesh</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Collaborating with domestic & global clients</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3 text-xs text-[#A7B0C5]">
              <FiShield className="h-5 w-5 text-green-400 shrink-0" />
              <span>We respect your privacy. No spam, no marketing newsletters, no data sharing.</span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glow-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white font-display mb-2">Project Inquiry Form</h2>
              <p className="text-sm text-[#A7B0C5] mb-8">
                Fill out the form below. Provide as much detail as you can so we can prepare thoughtful recommendations.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
