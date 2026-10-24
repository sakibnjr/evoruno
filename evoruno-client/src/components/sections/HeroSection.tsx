'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import {
  FiArrowRight,
  FiZap,
  FiCode,
  FiSmartphone,
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
} from 'react-icons/fi';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'performance' | 'architecture' | 'mobile'>('performance');

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', { opacity: 0, y: 15, duration: 0.5 })
        .from('.hero-headline', { opacity: 0, y: 30, duration: 0.7 }, '-=0.2')
        .from('.hero-sub', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from('.hero-showcase', { opacity: 0, scale: 0.94, y: 30, duration: 0.8 }, '-=0.5');

      gsap.to('.hero-float-card', {
        y: 8,
        duration: 4,
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
      className="relative min-h-[95vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#080B16]"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-[#4F7CFF]/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7C5CFC]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authentic Brand Messaging & Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Bespoke Digital Product & Engineering Studio
              </span>
            </div>

            <h1 className="hero-headline text-4xl sm:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.08] font-display">
              We engineer digital products that turn visitors into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7CFF] via-[#7C5CFC] to-[#00E5FF]">
                revenue.
              </span>
            </h1>

            <p className="hero-sub text-base sm:text-lg text-[#A7B0C5] leading-relaxed max-w-xl">
              We design and build bespoke Next.js web applications, cross-platform mobile apps, and technical SEO architectures for ambitious businesses. Zero bloated templates. Zero technical debt.
            </p>

            <div className="hero-cta-group flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-full shadow-[0_0_30px_rgba(79,124,255,0.4)] hover:shadow-[0_0_40px_rgba(79,124,255,0.6)] group text-base px-7 py-6"
                >
                  Start Your Project Discussion
                  <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 text-white hover:bg-white/5 text-base px-6 py-6"
                >
                  Explore Client Work
                </Button>
              </Link>
            </div>

            {/* Credibility & Guarantee Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-[#A7B0C5]">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-white font-display">&lt; 1.0s</div>
                <div className="text-[11px] uppercase tracking-wider text-[#64748B]">Page Speed</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-white font-display">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-[#64748B]">Code Ownership</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-white font-display">30-Day</div>
                <div className="text-[11px] uppercase tracking-wider text-[#64748B]">Post-Launch SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Product Showcase (MetaLab / Unfold Studio Quality) */}
          <div className="lg:col-span-6 lg:pl-6 hero-showcase">
            <div className="hero-float-card rounded-3xl border border-white/15 bg-gradient-to-b from-[#101629]/90 to-[#080B16]/95 backdrop-blur-xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono text-[#64748B] ml-2">evoruno-architecture // v2.4</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-semibold text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-ping" />
                  System Healthy
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-2 mt-4 p-1 rounded-xl bg-white/5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTab('performance')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'performance'
                      ? 'bg-[#4F7CFF] text-white shadow-md'
                      : 'text-[#A7B0C5] hover:text-white'
                  }`}
                >
                  <FiZap className="h-3.5 w-3.5" />
                  Performance
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'architecture'
                      ? 'bg-[#4F7CFF] text-white shadow-md'
                      : 'text-[#A7B0C5] hover:text-white'
                  }`}
                >
                  <FiCode className="h-3.5 w-3.5" />
                  Architecture
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('mobile')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'mobile'
                      ? 'bg-[#4F7CFF] text-white shadow-md'
                      : 'text-[#A7B0C5] hover:text-white'
                  }`}
                >
                  <FiSmartphone className="h-3.5 w-3.5" />
                  Mobile Engine
                </button>
              </div>

              {/* Tab 1: Live Performance & Core Web Vitals */}
              {activeTab === 'performance' && (
                <div className="mt-5 space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#A7B0C5]">Google Core Web Vitals</div>
                      <div className="text-2xl font-bold text-white font-display mt-0.5">100 / 100 Grade</div>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-lg">
                      100
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xl font-bold text-emerald-400 font-display">0.8s</div>
                      <div className="text-[10px] text-[#A7B0C5] mt-1">LCP Load Speed</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xl font-bold text-emerald-400 font-display">34ms</div>
                      <div className="text-[10px] text-[#A7B0C5] mt-1">INP Touch Speed</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xl font-bold text-emerald-400 font-display">0.00</div>
                      <div className="text-[10px] text-[#A7B0C5] mt-1">Zero Layout Shift</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between text-xs text-blue-200">
                    <span className="flex items-center gap-2">
                      <FiTrendingUp className="text-[#00E5FF] h-4 w-4" />
                      Conversion Rate Outcome:
                    </span>
                    <strong className="text-white font-bold">+142% Qualified Inquiries</strong>
                  </div>
                </div>
              )}

              {/* Tab 2: Clean Type-Safe Next.js Architecture */}
              {activeTab === 'architecture' && (
                <div className="mt-5 space-y-3 font-mono text-xs text-[#E2E8F0] bg-black/40 p-4 rounded-2xl border border-white/10 animate-in fade-in duration-200 leading-relaxed overflow-x-auto">
                  <div className="text-[#64748B]">{'//'} Evoruno Production Standard</div>
                  <div>
                    <span className="text-[#7C5CFC]">export async function</span>{' '}
                    <span className="text-[#00E5FF]">engineerPlatform</span>(client) &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#7C5CFC]">return await</span> Evoruno.build(&#123;
                  </div>
                  <div className="pl-8 text-emerald-300">
                    stack: <span className="text-amber-300">&apos;Next.js 16 + React 19&apos;</span>,
                  </div>
                  <div className="pl-8 text-emerald-300">
                    speed: <span className="text-amber-300">&apos;Sub-second Edge RSC&apos;</span>,
                  </div>
                  <div className="pl-8 text-emerald-300">
                    ownership: <span className="text-amber-300">&apos;100% Client Source Code&apos;</span>,
                  </div>
                  <div className="pl-8 text-emerald-300">
                    seo: <span className="text-amber-300">&apos;JSON-LD Schema + Sitemaps&apos;</span>
                  </div>
                  <div className="pl-4">&#125;);</div>
                  <div>&#125;</div>
                </div>
              )}

              {/* Tab 3: Native Mobile Performance Engine */}
              {activeTab === 'mobile' && (
                <div className="mt-5 space-y-3 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 text-xs text-[#A7B0C5] mb-1">
                        <FiSmartphone className="text-[#7C5CFC]" />
                        Fluid Motion
                      </div>
                      <div className="text-xl font-bold text-white font-display">60 FPS</div>
                      <div className="text-[10px] text-[#64748B]">Zero Dropped Frames</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 text-xs text-[#A7B0C5] mb-1">
                        <FiShield className="text-[#00E5FF]" />
                        Authentication
                      </div>
                      <div className="text-xl font-bold text-white font-display">Biometric</div>
                      <div className="text-[10px] text-[#64748B]">FaceID & Fingerprint</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="text-xs font-semibold text-white">Cross-Platform Sync</div>
                    <div className="flex items-center justify-between text-xs text-[#A7B0C5]">
                      <span>iOS (App Store) & Android (Google Play)</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <FiCheckCircle className="h-3 w-3" /> Unified
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Deployed on Global Edge Network</span>
                <span className="text-[#4F7CFF] font-medium">Bespoke Engineering Only</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
