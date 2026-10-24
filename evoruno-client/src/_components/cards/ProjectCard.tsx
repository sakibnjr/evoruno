import Link from 'next/link';
import { Project } from '@/content/projects';
import { Button } from '@/_ui/button';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
  count: string;
}

export function ProjectCard({ project, count }: ProjectCardProps) {
  return (
    <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        {/* Left Column: Context, Challenge, Solution */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500">
            <span className="text-[#4F7CFF]">{count}</span>
            <span>•</span>
            <span className="text-slate-800">{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
            {project.isSelfInitiated && (
              <>
                <span>•</span>
                <span className="text-amber-600 font-semibold">Self-Initiated Concept</span>
              </>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display group-hover:text-[#4F7CFF] transition-colors">
            {project.title}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            {project.summary}
          </p>

          {/* Challenge & Solution Cards */}
          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900 font-bold block mb-1">
                The Business Challenge:
              </strong>{' '}
              {project.challenge}
            </div>
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-blue-900 font-bold block mb-1">
                How Evoruno Solved It:
              </strong>{' '}
              {project.solution}
            </div>
          </div>

          {/* Technologies */}
          <div className="pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Technologies Deployed
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Link href="/contact">
              <Button variant="default" size="default" className="rounded-full group/btn shadow-md hover:shadow-lg">
                Discuss Similar Solution for Your Business
                <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Client & Measurable ROI Metrics */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between h-full space-y-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Client Partner / Industry
            </div>
            <div className="text-xl font-bold text-slate-900 font-display">{project.client}</div>
          </div>

          {/* Quantitative Results */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Verified Business Outcomes
            </div>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <div className="text-base sm:text-xl font-bold text-[#4F7CFF] font-display">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-1 truncate">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-slate-500 flex items-center justify-between pt-4 border-t border-slate-200">
            <span className="font-medium">100% Production Grade</span>
            <span className="flex items-center gap-1 text-[#4F7CFF] font-semibold">
              Live Architecture <FiExternalLink className="text-xs" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
