'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { FiArrowRight } from 'react-icons/fi';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Coordinated timeline for hero elements
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-eyebrow', { opacity: 0, y: 15, duration: 0.6 })
        .from('.hero-title-line', { opacity: 0, y: 35, duration: 0.8, stagger: 0.15 }, '-=0.3')
        .from('.hero-burst', { opacity: 0, scale: 0.8, duration: 1.2, ease: 'back.out(1.4)' }, '-=0.7')
        .from('.hero-desc-group', { opacity: 0, y: 20, duration: 0.7 }, '-=0.6')
        .from('.hero-stats', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5');

      // Subtle float animation for burst art
      gsap.to('.hero-burst-inner', {
        y: 12,
        rotation: 3,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-[#080B16]"
    >
      {/* Background Lighting & Radial Glow */}
      <div className="absolute inset-0 radial-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4F7CFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#7C5CFC]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Abstract Glowing Starburst / Neural Light Composition (Center Art reproduction from reference) */}
      <div className="hero-burst absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] pointer-events-none z-0">
        <div className="hero-burst-inner relative w-full h-full flex items-center justify-center">
          {/* Central brilliant white/blue core */}
          <div className="absolute w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white burst-core" />
          
          {/* Radiating ethereal strands */}
          <svg
            className="w-full h-full opacity-70 animate-pulse"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="180" stroke="url(#heroCircleGrad)" strokeWidth="0.8" strokeDasharray="4 8" />
            <circle cx="250" cy="250" r="120" stroke="url(#heroCircleGrad)" strokeWidth="0.5" />
            
            {/* Luminous light rays */}
            {[...Array(24)].map((_, i) => {
              const angle = (i * 360) / 24;
              const rad = (angle * Math.PI) / 180;
              const x2 = 250 + Math.cos(rad) * 220;
              const y2 = 250 + Math.sin(rad) * 220;
              return (
                <line
                  key={i}
                  x1="250"
                  y1="250"
                  x2={x2}
                  y2={y2}
                  stroke="url(#rayGrad)"
                  strokeWidth={i % 3 === 0 ? '1.5' : '0.7'}
                  opacity={0.4 + (i % 5) * 0.12}
                />
              );
            })}

            <defs>
              <linearGradient id="heroCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F7CFF" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#7C5CFC" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="30%" stopColor="#4F7CFF" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#7C5CFC" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#080B16" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Hero Grid */}
      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Top-Left: Dominant Headline (Direct match to reference video layout) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0C5]">
                Digital Engineering & Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.05] font-display">
              <span className="hero-title-line block">Build Beyond</span>
              <span className="hero-title-line block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0E7FF] to-[#A7B0C5]">
                What&apos;s Possible.
              </span>
            </h1>
          </div>

          {/* Spacer for Center Composition */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>

        {/* Lower Row: Split Stats (Bottom-Left) and Value Copy + CTAs (Bottom-Right) */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Bottom-Left: Credibility Indicators (Reference layout 4.9 | 30k | 15k) */}
          <div className="hero-stats lg:col-span-6 flex items-center gap-6 sm:gap-10 border-t border-white/10 pt-6">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white font-display">99.9%</div>
              <div className="text-xs uppercase tracking-wider text-[#A7B0C5] mt-1">Uptime SLA</div>
            </div>
            <div className="h-10 w-px bg-white/15" />
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white font-display">60 FPS</div>
              <div className="text-xs uppercase tracking-wider text-[#A7B0C5] mt-1">Fluid Motion</div>
            </div>
            <div className="h-10 w-px bg-white/15" />
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white font-display">&lt; 1.5s</div>
              <div className="text-xs uppercase tracking-wider text-[#A7B0C5] mt-1">LCP Target</div>
            </div>
          </div>

          {/* Bottom-Right: Value Proposition Copy & Dual Pill Buttons */}
          <div className="hero-desc-group lg:col-span-6 lg:pl-10 space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                Engineering precision that turns ambition into digital reality.
              </h2>
              <p className="text-sm sm:text-base text-[#A7B0C5] leading-relaxed">
                We build high-performing websites, mobile applications, and SEO solutions that help businesses scale with zero technical compromises.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link href="/contact">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] group"
                >
                  Let&apos;s Discuss Your Project
                  <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/work">
                <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/5">
                  Explore Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
