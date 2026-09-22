import React, { useState } from 'react';
import { 
  Check, 
  Filter, 
  Eye
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ImageUploadArea } from './ImageUploadArea';
import { ProjectModal } from './ProjectModal';
import { getStoredImage } from '../utils/imageStorage';

export const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'va', label: 'Virtual Assistance' },
    { id: 'customer_support', label: 'Customer Support' },
    { id: 'crm', label: 'CRM' },
    { id: 'admin', label: 'Administrative' },
    { id: 'data_research', label: 'Data & Research' },
    { id: 'project_management', label: 'Project Management' },
    { id: 'social_media', label: 'Social Media' },
    { id: 'travel', label: 'Travel Planning' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => {
        if (activeCategory === 'va') return project.category === 'va' || project.category === 'admin';
        if (activeCategory === 'customer_support') return project.category === 'customer_support';
        if (activeCategory === 'crm') return project.category === 'customer_support' || project.tools.some(t => t.toLowerCase().includes('crm') || t.toLowerCase().includes('hubspot'));
        if (activeCategory === 'admin') return project.category === 'admin' || project.category === 'va';
        if (activeCategory === 'data_research') return project.category === 'data_research';
        if (activeCategory === 'project_management') return project.category === 'project_management';
        if (activeCategory === 'social_media') return project.category === 'social_media';
        if (activeCategory === 'travel') return project.category === 'travel';
        return true;
      });

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#FAFAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
            Work Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] mt-3 tracking-tight">
            Portfolio Projects & Work Samples
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Real demonstration projects illustrating my approach to administrative coordination, CRM workflows, executive calendars, and organized research.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#172554] flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#2563EB]" />
              Filter by Specialty ({filteredProjects.length} Projects)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#172554] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-[#475569] hover:bg-[#F5F3FF] hover:text-[#172554]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const hasUploadedImage = !!getStoredImage(project.storageKey);

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#2563EB]/40 shadow-xs hover:shadow-md transition flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* If user uploaded an actual work sample image for this project, display it cleanly */}
                  {hasUploadedImage && (
                    <div className="p-3 bg-[#F8FAFC] border-b border-slate-100">
                      <ImageUploadArea
                        storageKey={project.storageKey}
                        aspectRatio="video"
                        objectFit="contain"
                        allowEnlarge={true}
                      />
                    </div>
                  )}

                  {/* Card Header & Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-semibold text-[#2563EB] bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-full">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[11px] font-medium text-[#475569]">
                        {project.tool}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#172554] group-hover:text-[#2563EB] transition">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-1.5 my-2.5">
                      {project.tools.map((t, idx) => (
                        <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-[#475569]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-[#475569] line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wider block mb-1.5">
                        Skills Demonstrated:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.skillsDemonstrated.slice(0, 3).map((skill, idx) => (
                          <span key={idx} className="text-[11px] text-[#0F172A] bg-[#FAFAF9] px-2 py-0.5 rounded border border-slate-200 flex items-center gap-1">
                            <Check className="w-3 h-3 text-[#2563EB]" />
                            {skill}
                          </span>
                        ))}
                        {project.skillsDemonstrated.length > 3 && (
                          <span className="text-[10px] text-[#475569] self-center font-medium">
                            +{project.skillsDemonstrated.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action: Details & SOP */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs font-bold text-[#172554] hover:text-[#2563EB] transition cursor-pointer shadow-2xs"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>View Details & SOP</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Expanded Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
