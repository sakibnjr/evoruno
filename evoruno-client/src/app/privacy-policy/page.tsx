import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { FiShield } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Protection Disclosures',
  description:
    'Evoruno privacy policy and data protection disclosures. Clear, honest information regarding data handling, inquiries, and user rights.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 24, 2026';

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-[#080B16]">
      <Container size="narrow">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Badge variant="outline">
            <FiShield className="mr-1.5 h-3.5 w-3.5" />
            Legal & Compliance
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Privacy Policy
          </h1>
          <p className="text-xs font-medium uppercase tracking-wider text-[#64748B]">
            Effective Date: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="glow-card rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 text-[#A7B0C5] text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">1. Introduction</h2>
            <p>
              Evoruno (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and handling your personal information with absolute honesty and transparency. This Privacy Policy outlines what information we collect when you visit our website (evoruno.com), how we use it, and your rights concerning your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">2. Information We Collect</h2>
            <p>We collect only the information necessary to evaluate and respond to client project inquiries:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#E2E8F0]">
              <li>
                <strong>Contact Form Data:</strong> When you submit an inquiry through our contact form, we collect your full name, email address, optional company name, selected service, estimated budget tier, and your message description.
              </li>
              <li>
                <strong>Server & Diagnostic Logs:</strong> When accessing our website, standard web server logs (including anonymous IP address, browser user-agent, operating system, and request timestamps) are automatically generated for security diagnostics, DDoS mitigation, and system health monitoring.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">3. How We Use Your Information</h2>
            <p>We use the collected information exclusively for legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#E2E8F0]">
              <li>To evaluate your project requirements and respond with technical recommendations.</li>
              <li>To communicate regarding scheduling discovery calls or preparing project proposals.</li>
              <li>To maintain website security and prevent automated bot spam.</li>
            </ul>
            <p className="text-white font-medium">
              We never sell, rent, monetize, or disclose your personal contact information to third-party marketing brokers or advertising networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">4. Third-Party Services & Infrastructure</h2>
            <p>We partner with vetted, secure infrastructure providers to deliver our website:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#E2E8F0]">
              <li>
                <strong>Hosting & Edge Delivery:</strong> Next.js edge networks (Vercel / Cloudflare) to ensure fast, encrypted HTTPS content distribution.
              </li>
              <li>
                <strong>Email Dispatch (SMTP):</strong> Secure Gmail SMTP / transactional mail servers used strictly to transmit contact inquiry notifications directly to our engineering team.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">5. Data Retention & Your Rights</h2>
            <p>
              We retain project inquiry records only for as long as necessary to facilitate ongoing communication or fulfill contractual project requirements. You have the right to request access to the information we hold about you, request corrections, or ask for complete deletion of your data at any time.
            </p>
            <p>
              To exercise these rights, please email us directly at{' '}
              <a href="mailto:contact@evoruno.com" className="text-[#4F7CFF] underline">
                contact@evoruno.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">6. Contact Information</h2>
            <p>
              If you have any questions or feedback regarding our privacy practices, please contact our team:
            </p>
            <div className="pt-2 text-white font-medium">
              <div>Evoruno Digital Solutions</div>
              <div className="text-[#A7B0C5] text-sm">Dhaka, Bangladesh</div>
              <div>
                Email:{' '}
                <a href="mailto:contact@evoruno.com" className="text-[#4F7CFF] underline">
                  contact@evoruno.com
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-[#4F7CFF] hover:underline">
            &larr; Return to Homepage
          </Link>
        </div>
      </Container>
    </div>
  );
}
