import React, { useState } from 'react';
import { 
  Check, 
  Search, 
  Wrench, 
  Laptop, 
  Info 
} from 'lucide-react';
import { TOOL_CATEGORIES } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allTools = TOOL_CATEGORIES.flatMap(cat => 
    cat.tools.map(tool => ({ ...tool, category: cat.categoryName }))
  );

  const displayedCategories = selectedCategory === 'all' 
    ? TOOL_CATEGORIES 
    : TOOL_CATEGORIES.filter(cat => cat.categoryName === selectedCategory);

  return (
    <section id="tools" className="py-16 md:py-24 bg-[#FAFAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
            Proficiencies & Software
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] mt-3 tracking-tight">
            Skills & Software Stack
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Digital tools and platforms I actively use to organize tasks, manage customer support tickets, and streamline executive operations.
          </p>
          <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[#475569] text-xs font-medium shadow-xs">
            <Info className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Demonstrating practical, hands-on operational capability across modern remote business software.</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#172554] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-[#475569] hover:bg-[#F5F3FF] hover:text-[#172554]'
            }`}
          >
            All Categories ({allTools.length})
          </button>
          {TOOL_CATEGORIES.map((cat) => (
            <button
              key={cat.categoryName}
              type="button"
              onClick={() => setSelectedCategory(cat.categoryName)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat.categoryName
                  ? 'bg-[#172554] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-[#475569] hover:bg-[#F5F3FF] hover:text-[#172554]'
              }`}
            >
              {cat.categoryName} ({cat.tools.length})
            </button>
          ))}
        </div>

        {/* Grouped Tool Grids */}
        <div className="space-y-10">
          {displayedCategories.map((group) => (
            <div key={group.categoryName} className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                <h3 className="text-base font-bold text-[#172554] flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#2563EB]" />
                  {group.categoryName}
                </h3>
                <span className="text-xs text-[#475569] font-medium">
                  {group.tools.length} Tools
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-[#FAFAF9] rounded-xl p-4 border border-slate-200 hover:border-[#2563EB]/50 hover:shadow-xs transition group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-sm font-bold text-[#172554] group-hover:text-[#2563EB] transition">
                        {tool.name}
                      </h4>
                      <span className="text-[10px] text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded font-medium border border-blue-200/60">
                        Operational
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
