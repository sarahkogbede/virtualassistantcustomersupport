import React from 'react';
import { 
  X, 
  Check, 
  Sparkles, 
  Wrench, 
  Target
} from 'lucide-react';
import { Project } from '../types';
import { ImageUploadArea } from './ImageUploadArea';
import { getStoredImage } from '../utils/imageStorage';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const hasPrimaryImage = !!getStoredImage(project.storageKey);
  const activeExtraUploads = (project.extraUploads || []).filter(
    (extra) => !!getStoredImage(extra.storageKey)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#2563EB] bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-full">
              {project.categoryLabel}
            </span>
            {project.isSampleProject && (
              <span className="text-xs font-semibold text-[#8B5CF6] bg-[#F5F3FF] border border-[#8B5CF6]/30 px-2.5 py-1 rounded-full">
                Sample / Demonstration Project
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#172554] transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] tracking-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-[#475569]">
              <span className="font-semibold text-[#172554] flex items-center gap-1">
                <Wrench className="w-3.5 h-3.5 text-[#2563EB]" />
                Tools Used:
              </span>
              {project.tools.map((t, idx) => (
                <span key={idx} className="bg-[#F1F5F9] px-2.5 py-0.5 rounded-md font-medium text-[#475569]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot Display: Render ONLY if user uploaded an actual work sample image */}
          {hasPrimaryImage && (
            <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#172554]">
                  Project Visual Proof & Screenshot
                </h3>
                <span className="text-[11px] text-[#475569]">
                  Click image to expand full size
                </span>
              </div>

              <ImageUploadArea
                storageKey={project.storageKey}
                aspectRatio="video"
                objectFit="contain"
                allowEnlarge={true}
              />

              {/* Extra uploaded artifacts: ONLY render if actual uploaded image exists */}
              {activeExtraUploads.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#172554] mb-3">
                    Additional Project Artifacts
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeExtraUploads.map((extra) => (
                      <div key={extra.id} className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                        <span className="text-xs font-bold text-[#172554] block mb-2">{extra.label}</span>
                        <ImageUploadArea
                          storageKey={extra.storageKey}
                          aspectRatio="video"
                          objectFit="contain"
                          allowEnlarge={true}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Overview & Objective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#172554] mb-2 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#2563EB]" />
                Project Objective
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {project.objective}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#172554] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                My Approach
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Execution Process Steps */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172554] mb-4">
              Execution Process & Implementation
            </h4>
            <div className="space-y-3">
              {project.processSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#0F172A]">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverable & Skills Demonstrated */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 bg-[#172554] text-white p-5 rounded-2xl border border-blue-900/50 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] mb-2">
                Deliverable / System Created
              </h4>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                {project.deliverable}
              </p>
            </div>

            <div className="md:col-span-7 bg-[#FAFAF9] p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#172554] mb-3">
                Skills Demonstrated
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.skillsDemonstrated.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#0F172A] font-medium"
                  >
                    <Check className="w-3 h-3 text-[#2563EB]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#172554] hover:bg-[#2563EB] text-white text-xs font-semibold cursor-pointer transition shadow-xs"
          >
            Close Project
          </button>
        </div>
      </div>
    </div>
  );
};
