import {
  FiSmartphone,
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
} from 'react-icons/fi';

export function HeroPerformancePanel() {
  return (
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
  );
}

export function HeroArchitecturePanel() {
  return (
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
  );
}

export function HeroMobilePanel() {
  return (
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
  );
}
