import React from 'react';
import { 
  ClipboardCheck, 
  Headphones, 
  Users, 
  Calendar, 
  FileSpreadsheet, 
  Kanban, 
  Plane, 
  Share2, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (name: string, isPrimary = true) => {
    const colorClass = isPrimary ? "text-[#2563EB]" : "text-[#8B5CF6]";
    switch (name) {
      case 'ClipboardCheck':
        return <ClipboardCheck className={`w-5 h-5 ${colorClass}`} />;
      case 'Headphones':
        return <Headphones className={`w-5 h-5 ${colorClass}`} />;
      case 'Users':
        return <Users className={`w-5 h-5 ${colorClass}`} />;
      case 'Calendar':
        return <Calendar className={`w-5 h-5 ${colorClass}`} />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className={`w-5 h-5 ${colorClass}`} />;
      case 'Kanban':
        return <Kanban className={`w-5 h-5 ${colorClass}`} />;
      case 'Plane':
        return <Plane className={`w-5 h-5 ${colorClass}`} />;
      case 'Share2':
        return <Share2 className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <ClipboardCheck className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F5F3FF]/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
            What I Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] mt-3 tracking-tight">
            How I Can Support Your Business
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Tailored remote support combining dependable administrative organization with customer-first communication.
          </p>
        </div>

        {/* Primary Core Services (VA & Customer Support focus) */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#172554]">
              Core Competencies (Primary Focus)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.filter(s => s.category === 'primary').map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#2563EB]/50 shadow-xs hover:shadow-sm transition flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F5F3FF] border border-[#8B5CF6]/20 flex items-center justify-center">
                      {getIcon(service.iconName, true)}
                    </div>
                    <span className="text-[11px] font-semibold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                      Core Service
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#172554] group-hover:text-[#2563EB] transition">
                    {service.title}
                  </h4>
                  <p className="text-xs text-[#475569] mt-1 mb-5">
                    {service.tagline}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#0F172A]">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-[#475569] font-medium">
                    Available for ongoing or project retainer
                  </span>
                  <a
                    href={PERSONAL_INFO.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#172554] hover:text-[#2563EB] inline-flex items-center gap-1 transition"
                  >
                    Discuss Needs <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Operational Services */}
        <div>
          <div className="flex items-center gap-2 mb-4 pt-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#172554]">
              Supporting Operational Services
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.filter(s => s.category === 'supporting').map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#8B5CF6]/50 shadow-xs transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#F5F3FF] border border-[#8B5CF6]/20 flex items-center justify-center mb-3">
                    {getIcon(service.iconName, false)}
                  </div>
                  <h4 className="text-sm font-bold text-[#172554] mb-1">
                    {service.title}
                  </h4>
                  <p className="text-[11px] text-[#475569] mb-3 leading-snug">
                    {service.tagline}
                  </p>
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-[#475569]">
                        <span className="text-[#8B5CF6] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
