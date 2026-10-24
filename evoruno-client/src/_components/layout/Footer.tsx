import Link from 'next/link';
import { Logo } from '@/_components/branding/Logo';
import { Container } from '@/_components/layout/Container';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';

const currentYear = 2026;

const footerNavigation = {
  services: [
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'Technical SEO Optimization', href: '/services/seo' },
  ],
  company: [
    { name: 'Case Studies', href: '/work' },
    { name: 'About Evoruno', href: '/about' },
    { name: 'Contact Inquiry', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 text-muted-foreground pt-16 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm pt-2">
              Bespoke digital product & software engineering studio. We build ultra-fast web platforms, native mobile apps, and search systems for modern businesses.
            </p>
            <div className="pt-2">
              <a
                href="mailto:contact@evoruno.com"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-primary transition-colors"
              >
                <FiMail className="h-4 w-4" />
                contact@evoruno.com
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Capabilities</h4>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <FiArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company & Legal</h4>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dim">
          <p>&copy; {currentYear} Evoruno Digital Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Dhaka, Bangladesh</span>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Disclosures
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
