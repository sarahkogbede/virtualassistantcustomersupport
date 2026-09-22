import React from 'react';
import { Calendar, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#172554] text-white relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#8B5CF6]/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#2563EB]/15 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#DDD6FE] bg-[#F5F3FF]/15 px-3.5 py-1 rounded-full border border-[#8B5CF6]/30">
          Ready to Collaborate
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4">
          Need reliable support for your business?
        </h2>
        <p className="text-sm sm:text-base text-blue-100 mt-3 max-w-2xl mx-auto leading-relaxed">
          Whether you need help managing administrative tasks, organizing your workflow, or supporting your customers, I'm available to provide reliable remote support.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            id="cta-book-30min-btn"
            href={PERSONAL_INFO.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a 30-Minute Call</span>
          </a>

          <a
            id="cta-email-btn"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition cursor-pointer"
          >
            <Mail className="w-4 h-4 text-blue-200" />
            <span>Send Me an Email</span>
          </a>

          <a
            id="cta-linkedin-btn"
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition cursor-pointer"
          >
            <Linkedin className="w-4 h-4 text-[#93C5FD]" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
