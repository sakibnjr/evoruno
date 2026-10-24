import { FiCheckCircle } from 'react-icons/fi';

const guarantees = [
  '100% Type-Safe TypeScript & Next.js App Router',
  'Sub-2-second Largest Contentful Paint target on all mobile devices',
  '100% Complete Source Code Ownership with zero licensing lock-in',
  'Direct communication with senior engineers—no junior account managers',
  'Transparent milestone pricing with zero hidden fees or surprise invoices',
];

export function QualityGuaranteesCard() {
  return (
    <div className="lg:col-span-6">
      <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-xl shadow-slate-900/5 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
            Zero Compromises
          </span>
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            Our Quality Guarantees
          </h3>
        </div>

        <div className="space-y-4">
          {guarantees.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
              <FiCheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
