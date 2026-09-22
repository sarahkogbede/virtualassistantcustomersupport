import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { getStoredImage } from '../utils/imageStorage';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FAFAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
            Endorsements & Trust
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] mt-3 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Real feedback from clients regarding reliability, communication, and hands-on organizational support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => {
            const avatar = getStoredImage(t.storageKey);

            return (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-[#2563EB]/40 shadow-xs hover:shadow-sm transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] text-[#8B5CF6] border border-[#8B5CF6]/20 flex items-center justify-center">
                      <Quote className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#0F172A] italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="flex items-center gap-3">
                    {avatar ? (
                      <img
                        src={avatar}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#172554] text-white font-bold text-sm flex items-center justify-center">
                        {t.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-[#172554] text-sm">
                        {t.author}
                      </div>
                      <div className="text-xs text-[#475569] font-medium">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
