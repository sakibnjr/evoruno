import Link from 'next/link';
import { Logo } from '@/components/branding/Logo';
import { Container } from '@/components/layout/Container';
import { FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/10 bg-[#060810] text-[#A7B0C5] pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-[#A7B0C5] max-w-sm leading-relaxed mt-4">
              Evoruno designs and engineers high-performing websites, mobile applications, and SEO solutions that help ambitious businesses evolve beyond limits.
            </p>
            <div className="pt-2 text-xs text-[#64748B]">
              Operating from Dhaka, Bangladesh — Partnering with clients globally.
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Services</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/website-development" className="hover:text-white transition-colors flex items-center gap-1 group">
                  Website Development
                  <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-white transition-colors flex items-center gap-1 group">
                  Mobile Apps
                  <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-white transition-colors flex items-center gap-1 group">
                  SEO & Performance
                  <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Portfolio & Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Direct Inquiries</p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <FiMail className="text-[#4F7CFF]" />
                <a href="mailto:contact@evoruno.com" className="hover:text-white transition-colors">
                  contact@evoruno.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-[#4F7CFF]" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="pt-2 text-xs text-[#64748B]">
                Replies within 24 business hours.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© {currentYear} Evoruno. All rights reserved. Evolving Beyond Limits.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#A7B0C5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#A7B0C5] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
