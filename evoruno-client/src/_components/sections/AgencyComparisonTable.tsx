import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const comparisonRows = [
  {
    dimension: 'Page Load Speed',
    ordinary: '4s – 7s (Slow templates)',
    evoruno: '< 1.0s (Sub-Second RSC)',
  },
  {
    dimension: 'Code & IP Ownership',
    ordinary: 'Vendor Lock-in & Licenses',
    evoruno: '100% Client Ownership',
  },
  {
    dimension: 'Architecture',
    ordinary: 'Bloated plugins & PHP',
    evoruno: 'Next.js 16 + TypeScript',
  },
  {
    dimension: 'Communication',
    ordinary: 'Junior account reps',
    evoruno: 'Direct Senior Engineers',
  },
];

export function AgencyComparisonTable() {
  return (
    <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4F7CFF]">
            Clear Advantage
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            Zero Technical Debt
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
          How We Compare
        </h3>

        {/* Comparison Rows */}
        <div className="space-y-4 text-xs sm:text-sm">
          {comparisonRows.map((row) => (
            <div
              key={row.dimension}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center"
            >
              <div className="sm:col-span-4 font-bold text-slate-700">{row.dimension}</div>
              <div className="sm:col-span-4 text-slate-500 flex items-center gap-1.5 line-through">
                <FiXCircle className="text-red-500 shrink-0" />
                {row.ordinary}
              </div>
              <div className="sm:col-span-4 text-slate-900 font-bold flex items-center gap-1.5 text-emerald-700">
                <FiCheckCircle className="text-emerald-600 shrink-0" />
                {row.evoruno}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Standard for all client engagements</span>
        <span className="font-semibold text-slate-800">No recurring hidden costs</span>
      </div>
    </div>
  );
}
