'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/_ui/button';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
}

export function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-10 rounded-full flex items-center justify-center text-white bg-white/5 border border-white/10 hover:bg-white/10 focus:outline-none cursor-pointer"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-panel-dark border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="font-display font-bold text-lg text-white">Menu</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 cursor-pointer"
              aria-label="Close menu"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button variant="default" size="lg" className="w-full rounded-full">
              Start Project
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
