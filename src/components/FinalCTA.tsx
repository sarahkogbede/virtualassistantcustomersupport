import React from 'react';
import { Calendar, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#172554] text-white border-b border-blue-900/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Let's Make Work Flow Better.
        </h2>
        <p className="text-sm sm:text-base text-blue-100 mt-4 max-w-2xl mx-auto leading-relaxed">
          From administrative support and scheduling to customer communication and CRM management, I'm ready to help keep your business organized and your customers supported.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            id="final-book-call-btn"
            href={PERSONAL_INFO.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Call</span>
          </a>

          <a
            id="final-email-btn"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition cursor-pointer"
          >
            <Mail className="w-4 h-4 text-blue-200" />
            <span>Email Sarah</span>
          </a>
        </div>
      </div>
    </section>
  );
};
