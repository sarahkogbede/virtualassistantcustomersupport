import React from 'react';
import { WORK_PROCESS } from '../data/portfolioData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-[#F5F3FF]/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
            Methodology & Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] mt-3 tracking-tight">
            My 5-Step Work Process
          </h2>
          <p className="text-base text-[#475569] mt-3">
            A disciplined, reliable structure ensuring no task is overlooked, communication remains proactive, and customer needs are swiftly fulfilled.
          </p>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {WORK_PROCESS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#2563EB]/40 shadow-xs hover:shadow-sm transition flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#2563EB]">
                    {step.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] group-hover:scale-125 transition"></span>
                </div>

                <h3 className="text-lg font-bold text-[#172554] mb-2 group-hover:text-[#2563EB] transition">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#0F172A] mb-3 leading-snug">
                  {step.summary}
                </p>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#475569]">
                <span>Phase {idx + 1}</span>
                {idx < 4 && <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] hidden md:block" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
