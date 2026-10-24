import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { FiShield } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Protection Disclosures | Evoruno',
  description:
    'Evoruno privacy policy and data protection disclosures. Clear, honest information regarding data handling, inquiries, and user rights.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 24, 2026';

  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: DARK HEADER */}
      <section className="pt-32 pb-16 bg-[#080B16] relative overflow-hidden">
        <Container size="narrow">
          <div className="space-y-4">
            <Badge variant="outline">
              <FiShield className="mr-1.5 h-3.5 w-3.5" />
              Legal & Compliance
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Privacy Policy
            </h1>
            <p className="text-xs font-medium uppercase tracking-wider text-[#A7B0C5]">
              Effective Date: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 2: LIGHT READER SECTION */}
      <section className="py-20 bg-[#F5F7FB] relative">
        <Container size="narrow">
          <div className="rounded-3xl p-8 sm:p-14 bg-white border border-slate-200 shadow-xl shadow-slate-900/5 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 font-display">1. Introduction</h2>
              <p>
                Evoruno (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and handling your personal information with absolute honesty and transparency. This Privacy Policy outlines what information we collect when you visit our website (evoruno.com), how we use it, and your rights concerning your personal information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 font-display">2. Information We Collect</h2>
              <p>We collect only the information necessary to evaluate and respond to client project inquiries:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-800">
                <li>
                  <strong>Contact Form Data:</strong> When you submit an inquiry through our contact form, we collect your full name, email address, optional company name, selected service, estimated budget tier, and your message description.
                </li>
                <li>
                  <strong>Server & Diagnostic Logs:</strong> When accessing our website, standard web server logs (including anonymous IP address, browser user-agent, operating system, and request timestamps) are automatically generated for security diagnostics, DDoS mitigation, and system health monitoring.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 font-display">3. How We Use Your Information</h2>
              <p>We use the collected information exclusively for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-800">
                <li>To evaluate your project requirements and respond with technical recommendations.</li>
                <li>To communicate regarding scheduling discovery calls or preparing project proposals.</li>
                <li>To maintain website security and prevent automated bot spam.</li>
              </ul>
              <p className="text-slate-900 font-medium pt-1">
                We never sell, rent, monetize, or disclose your personal contact information to third-party marketing brokers or advertising networks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 font-display">4. Third-Party Services & Infrastructure</h2>
              <p>We partner with vetted, secure infrastructure providers to deliver our website:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-800">
                <li>
                  <strong>Hosting & Edge Delivery:</strong> Next.js edge networks to ensure fast, encrypted HTTPS content distribution.
                </li>
                <li>
                  <strong>Email Dispatch (SMTP):</strong> Secure Gmail SMTP / transactional mail servers used strictly to transmit contact inquiry notifications directly to our engineering team.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 font-display">5. Data Retention & Your Rights</h2>
              <p>
                We retain project inquiry records only for as long as necessary to facilitate ongoing communication or fulfill contractual project requirements. You have the right to request access to the information we hold about you, request corrections, or ask for complete deletion of your data at any time.
              </p>
              <p>
                To exercise these rights, please email us directly at{' '}
                <a href="mailto:contact@evoruno.com" className="text-[#4F7CFF] underline font-medium">
                  contact@evoruno.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 font-display">6. Contact Information</h2>
              <p>
                If you have any questions or feedback regarding our privacy practices, please contact our team:
              </p>
              <div className="pt-2 text-slate-900 font-medium">
                <div>Evoruno Digital Solutions</div>
                <div className="text-slate-500 text-sm">Dhaka, Bangladesh</div>
                <div>
                  Email:{' '}
                  <a href="mailto:contact@evoruno.com" className="text-[#4F7CFF] underline">
                    contact@evoruno.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>

      {/* SECTION 3: DARK FOOTER CALLOUT */}
      <section className="py-12 bg-[#080B16] border-t border-white/10 text-center">
        <Container size="narrow">
          <Link href="/" className="text-sm text-[#4F7CFF] hover:underline font-medium">
            &larr; Return to Homepage
          </Link>
        </Container>
      </section>
    </div>
  );
}
