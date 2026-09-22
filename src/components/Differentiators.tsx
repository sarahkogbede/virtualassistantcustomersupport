import React from 'react';
import { 
  Eye, 
  ShieldCheck, 
  HeartHandshake, 
  LayoutGrid, 
  Zap,
  Sparkles
} from 'lucide-react';
import { WHAT_SETS_ME_APART } from '../data/portfolioData';

export const Differentiators: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Eye className="w-5 h-5 text-[#2563EB]" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-[#8B5CF6]" />;
      case 2:
        return <HeartHandshake className="w-5 h-5 text-[#2563EB]" />;
      case 3:
        return <LayoutGrid className="w-5 h-5 text-[#8B5CF6]" />;
      case 4:
        return <Zap className="w-5 h-5 text-[#2563EB]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F1F5F9]/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
            Work Ethic & Values
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] mt-3 tracking-tight">
            What Sets Me Apart
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Five cornerstone work habits that define every client collaboration and support interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {WHAT_SETS_ME_APART.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#2563EB]/40 shadow-xs hover:shadow-sm transition flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] border border-[#8B5CF6]/20 flex items-center justify-center mb-4">
                  {getIcon(idx)}
                </div>

                <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                  {card.title}
                </span>

                <h3 className="text-sm font-bold text-[#172554] mb-2">
                  {card.highlight}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] text-[#475569] font-semibold uppercase tracking-wider">
                Value #{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
