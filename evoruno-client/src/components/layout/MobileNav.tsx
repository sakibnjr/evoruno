'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { Logo } from '@/components/branding/Logo';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#4F7CFF]"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
      </button>

      {/* Backdrop & Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-x-0 top-0 z-50 flex min-h-screen flex-col bg-[#080B16] px-6 pt-24 pb-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8">
              <Logo size="lg" />
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between py-3 text-2xl font-semibold border-b border-white/5 transition-colors ${
                      isActive ? 'text-[#4F7CFF]' : 'text-white hover:text-[#4F7CFF]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <FiArrowRight className="h-5 w-5 opacity-50" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
              <p className="text-sm text-[#A7B0C5]">
                Ready to build what&apos;s next? Let&apos;s talk about your project.
              </p>
              <Link href="/contact" className="w-full">
                <Button variant="default" size="lg" className="w-full">
                  Let&apos;s Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
