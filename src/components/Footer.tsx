import React from 'react';
import { Mail, Linkedin, Calendar, MapPin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 py-12 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                SK
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-1.5 max-w-md">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-slate-500 text-[11px] mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-500" />
              <span>{PERSONAL_INFO.location} • Available for: {PERSONAL_INFO.availability}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-300 hover:text-[#93C5FD] transition flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[#93C5FD] transition flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[#93C5FD] transition flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Calendly</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-[#172554] text-slate-300 hover:text-white transition cursor-pointer border border-slate-800"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2026 {PERSONAL_INFO.name}. All Rights Reserved.
          </div>
          <div>
            Virtual Assistant • Administrative Support • Customer Support Specialist
          </div>
        </div>
      </div>
    </footer>
  );
};
