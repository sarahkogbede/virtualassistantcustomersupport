import React from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  Mail, 
  Layers, 
  Users2, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const corePrinciples = [
    { title: 'Staying organized', desc: 'Structuring messy workflows, files, calendars, and tasks into predictable order.' },
    { title: 'Communicating clearly', desc: 'Delivering articulate, transparent updates without ambiguity or delay.' },
    { title: 'Paying attention to details', desc: 'Verifying times, numbers, customer data, and text before hitting send.' },
    { title: 'Following through on tasks', desc: 'Taking full ownership until open loops and tickets are completely closed.' },
    { title: 'Keeping information accurate', desc: 'Maintaining impeccable CRM data hygiene and spreadsheet records.' },
    { title: 'Supporting customers professionally', desc: 'Responding with genuine empathy, solution-oriented poise, and patience.' },
    { title: 'Learning and adapting quickly', desc: 'Eagerly onboarding to new software, protocols, and team communication habits.' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5CF6] bg-[#F5F3FF] px-3 py-1 rounded-full border border-[#8B5CF6]/30">
            Professional Overview
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] mt-3 tracking-tight">
            A Little About Me
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Bringing structure, organization, and clarity to busy workflows and high-touch customer relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story & Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none text-[#475569] text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                I am <strong className="text-[#172554] font-bold">Sarah Kogbede</strong>, a detail-oriented Virtual Assistant and Customer Support Specialist who genuinely enjoys bringing structure, organization, and calm clarity to busy executive schedules and demanding client workflows.
              </p>
              <p>
                My strengths span across administrative support, customer communication, schedule organization, systematic follow-up, task coordination, data management, and working with modern digital tools.
              </p>
              <p className="text-[#0F172A] font-medium bg-[#F5F3FF]/70 p-4 rounded-xl border-l-4 border-[#8B5CF6]">
                Rather than choosing between backend organization and frontline customer support, I support businesses across both: handling the behind-the-scenes administrative responsibilities that keep operations running smoothly, and managing the customer-facing interactions that preserve brand trust.
              </p>
            </div>

            {/* Core Approach Checklist */}
            <div className="pt-4">
              <h3 className="text-base font-bold text-[#172554] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                My Professional Approach is Centered Around:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {corePrinciples.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAFAF9] border border-slate-200/80 hover:border-[#2563EB]/40 transition">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${idx % 2 === 0 ? 'text-[#2563EB]' : 'text-[#8B5CF6]'}`} />
                    <div>
                      <h4 className="text-xs font-bold text-[#172554]">{item.title}</h4>
                      <p className="text-xs text-[#475569] mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={PERSONAL_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-semibold shadow-xs transition"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule a 30-Min Call</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F5F3FF] text-[#172554] border border-slate-300 text-xs font-semibold shadow-xs transition"
              >
                <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Email Inquiries</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dual Competency Framework */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dual Capabilities Card */}
            <div className="bg-[#172554] text-white rounded-2xl p-6 shadow-sm border border-blue-900/60">
              <h3 className="text-xs font-bold text-[#C4B5FD] uppercase tracking-wider mb-2">
                Dual Operational Spectrum
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 mb-6">
                How I deliver cohesive value by bridging internal administration with external customer touchpoints:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#1E293B]/80 border border-slate-700/80">
                  <div className="flex items-center gap-2 text-[#93C5FD] font-semibold text-sm mb-1.5">
                    <Layers className="w-4 h-4 text-[#60A5FA]" />
                    Internal Operational Support
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Protecting focus time through calendar time-blocking, zero-inbox triage, task board management, research syntheses, and document structuring.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1E293B]/80 border border-slate-700/80">
                  <div className="flex items-center gap-2 text-[#C4B5FD] font-semibold text-sm mb-1.5">
                    <Users2 className="w-4 h-4 text-[#A78BFA]" />
                    Customer-Facing Communication
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Upholding brand loyalty through polite inquiry resolution, empathetic complaint de-escalation, order tracking, and rigorous CRM follow-ups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
