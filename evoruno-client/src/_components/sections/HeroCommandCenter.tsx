'use client';

import { useState } from 'react';
import { FiZap, FiCode, FiSmartphone } from 'react-icons/fi';
import {
  HeroPerformancePanel,
  HeroArchitecturePanel,
  HeroMobilePanel,
} from '@/_components/sections/HeroTabPanels';

export function HeroCommandCenter() {
  const [activeTab, setActiveTab] = useState<'performance' | 'architecture' | 'mobile'>('performance');

  return (
    <div className="lg:col-span-6 lg:pl-6 hero-showcase">
      <div className="animate-float-card rounded-3xl border border-white/15 bg-gradient-to-b from-card/90 to-background/95 backdrop-blur-xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
        {/* Window Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
            <span className="text-xs font-mono text-dim ml-2">evoruno-architecture // v2.4</span>
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
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'performance'
                ? 'bg-primary text-white shadow-md'
                : 'text-muted-foreground hover:text-white'
            }`}
          >
            <FiZap className="h-3.5 w-3.5" />
            Performance
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-primary text-white shadow-md'
                : 'text-muted-foreground hover:text-white'
            }`}
          >
            <FiCode className="h-3.5 w-3.5" />
            Architecture
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('mobile')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'mobile'
                ? 'bg-primary text-white shadow-md'
                : 'text-muted-foreground hover:text-white'
            }`}
          >
            <FiSmartphone className="h-3.5 w-3.5" />
            Mobile Engine
          </button>
        </div>

        {/* Dynamic Panels */}
        {activeTab === 'performance' && <HeroPerformancePanel />}
        {activeTab === 'architecture' && <HeroArchitecturePanel />}
        {activeTab === 'mobile' && <HeroMobilePanel />}

        {/* Bottom Card Footer */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-dim">
          <span>Deployed on Global Edge Network</span>
          <span className="text-primary font-medium">Bespoke Engineering Only</span>
        </div>
      </div>
    </div>
  );
}
