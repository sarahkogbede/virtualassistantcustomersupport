import React from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Clock, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { TRANSFERABLE_SKILLS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-[#FAFAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
            Transferable Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] mt-3 tracking-tight">
            Professional Experience & Transferable Strengths
          </h2>
          <p className="text-base text-[#475569] mt-3">
            How my background translates directly into high-impact Virtual Assistance and Customer Support capabilities.
          </p>
        </div>

        {/* Narrative Banner */}
        <div className="bg-[#172554] text-white rounded-3xl p-8 lg:p-10 mb-12 shadow-sm border border-blue-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3FF]/15 text-[#DDD6FE] text-xs font-semibold border border-[#8B5CF6]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#C4B5FD]" />
                <span>Foundational Professional Tenets</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Reliable Support Rooted in Real-World Discipline
              </h3>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                Throughout my professional journey, my responsibilities have consistently centered around customer relationship management, thorough administrative organization, and clear cross-functional communication. Whether managing client inquiries, organizing high-priority schedules, maintaining CRM hygiene, or researching critical data, I focus on accuracy, accountability, and dependable follow-through.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#0F172A]/70 p-5 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-[#93C5FD] uppercase tracking-wider block">
                What You Can Expect Daily:
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Proactive communication before being asked</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Zero dropped balls on follow-up tasks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Polite, brand-aligned customer interactions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Discreet, confidential data handling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transferable Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRANSFERABLE_SKILLS.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#2563EB]/40 transition shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] border border-[#8B5CF6]/20 flex items-center justify-center text-[#2563EB] font-bold text-sm mb-4 shadow-xs">
                0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-[#172554] mb-2">
                {skill.title}
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
