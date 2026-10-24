import Link from 'next/link';
import { Logo } from '@/_components/branding/Logo';
import { Button } from '@/_ui/button';
import { MobileNav } from '@/_components/layout/MobileNav';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between glass-nav px-5 py-3 rounded-full shadow-2xl pointer-events-auto">
        {/* Brand Logo */}
        <Logo />

        {/* Center Pill Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-white hover:bg-white/10 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:inline-block">
            <Button
              variant="default"
              size="sm"
              className="rounded-full shadow-md hover:shadow-lg font-semibold"
            >
              Start Project
            </Button>
          </Link>

          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
