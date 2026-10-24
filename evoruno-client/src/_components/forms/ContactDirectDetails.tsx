import { FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';

export function ContactDirectDetails() {
  return (
    <div className="lg:col-span-5 space-y-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#4F7CFF] block mb-2">
          Direct Inquiries
        </span>
        <h2 className="text-3xl font-bold text-slate-900 font-display">
          We answer every message personally.
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          You will communicate directly with technical builders who understand architecture, timelines, and business revenue.
        </p>
      </div>

      {/* Direct Details Cards */}
      <div className="space-y-4 pt-2">
        <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="h-11 w-11 rounded-xl bg-blue-50 text-[#4F7CFF] flex items-center justify-center shrink-0">
            <FiMail className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Direct Email
            </div>
            <a
              href="mailto:contact@evoruno.com"
              className="text-base font-bold text-slate-900 hover:text-[#4F7CFF] transition-colors"
            >
              contact@evoruno.com
            </a>
            <div className="text-xs text-slate-500 mt-1">
              Monitored continuously throughout business hours
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="h-11 w-11 rounded-xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center shrink-0">
            <FiClock className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Guaranteed Response Time
            </div>
            <div className="text-base font-bold text-slate-900">
              Within 24 Business Hours
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Clear initial feedback, technical recommendations, and next steps
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="h-11 w-11 rounded-xl bg-cyan-50 text-[#00A3BF] flex items-center justify-center shrink-0">
            <FiMapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Engineering Hub
            </div>
            <div className="text-base font-bold text-slate-900">
              Dhaka, Bangladesh
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Serving clients across Bangladesh, North America, and Europe
            </div>
          </div>
        </div>
      </div>

      {/* What Happens Next Card */}
      <div className="rounded-2xl p-6 bg-blue-50/70 border border-blue-100 space-y-3">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          What happens after you submit?
        </h3>
        <ul className="space-y-2 text-xs text-slate-700">
          <li className="flex items-center gap-2">
            <FiCheckCircle className="text-[#4F7CFF] shrink-0" />
            <span>We review your requirements and target timeline.</span>
          </li>
          <li className="flex items-center gap-2">
            <FiCheckCircle className="text-[#4F7CFF] shrink-0" />
            <span>We prepare preliminary technical ideas and budget ranges.</span>
          </li>
          <li className="flex items-center gap-2">
            <FiCheckCircle className="text-[#4F7CFF] shrink-0" />
            <span>We schedule a zero-pressure 15-minute introductory video call.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
