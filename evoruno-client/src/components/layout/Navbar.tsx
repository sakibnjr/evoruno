'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/branding/Logo';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/MobileNav';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Pill */}
        <div className="flex items-center">
          <div className="glass-nav rounded-full px-4 py-2 border border-white/10 shadow-lg">
            <Logo size="sm" />
          </div>
        </div>

        {/* Center: Navigation Pill Container (Desktop) */}
        <nav className="hidden md:flex items-center">
          <div className="glass-nav rounded-full px-6 py-2 border border-white/10 shadow-lg flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-[#A7B0C5] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right: CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:inline-flex">
            <Button
              variant="default"
              size="default"
              className="rounded-full shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              Let&apos;s Talk
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
