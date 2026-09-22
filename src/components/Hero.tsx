import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Briefcase 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import headshotImg from '../assets/images/headshot.jpg';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const headshot = headshotImg;

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#FAFAF9] via-[#F5F3FF]/40 to-[#F1F5F9]/50">
      {/* Subtle decorative background gradient accents */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#8B5CF6]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#2563EB]/8 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F3FF] border border-[#8B5CF6]/30 text-[#172554] text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
            <span>Available for: {PERSONAL_INFO.availability}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#475569] text-xs font-medium shadow-xs">
            <MapPin className="w-3 h-3 text-[#2563EB]" />
            <span>{PERSONAL_INFO.location} • Remote Worldwide</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 text-[#475569]">
                Executive <span className="text-[#2563EB]">Virtual Assistant</span> & <span className="text-[#8B5CF6]">Customer Support</span> Specialist
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172554] tracking-tight leading-[1.15]">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-lg sm:text-xl font-medium text-[#475569] mt-3 max-w-2xl">
                <span className="text-[#2563EB] font-semibold">Virtual Assistant</span> | Administrative Support | <span className="text-[#8B5CF6] font-semibold">Customer Support Specialist</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#0F172A] font-medium">
                  <strong className="text-[#172554]">Internal Operations:</strong> Calendar, email triage, data, research & project coordination
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#0F172A] font-medium">
                  <strong className="text-[#172554]">Customer-Facing:</strong> Email/chat support, CRM updates, complaint resolution & follow-ups
                </span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-3 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  id="hero-book-call-cta"
                  href={PERSONAL_INFO.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Call</span>
                </a>

                <a
                  id="hero-view-work-cta"
                  href="#projects"
                  onClick={scrollToProjects}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F5F3FF] text-[#172554] border-2 border-[#172554] text-sm font-semibold shadow-xs hover:border-[#2563EB] hover:text-[#2563EB] transition cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                </a>
              </div>

              {/* Secondary Contact Direct Links */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-[#475569] font-medium">
                <span className="text-[#475569]">Direct Contacts:</span>
                <a
                  id="hero-email-link"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#2563EB]/40 text-[#0F172A] hover:text-[#2563EB] transition shadow-xs"
                  title="Send Sarah an email"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Email Me</span>
                </a>
                <a
                  id="hero-linkedin-link"
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#2563EB]/40 text-[#0F172A] hover:text-[#2563EB] transition shadow-xs"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  id="hero-whatsapp-link"
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#8B5CF6]/40 text-[#0F172A] hover:text-[#8B5CF6] transition shadow-xs"
                  title="Chat on WhatsApp"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>WhatsApp ({PERSONAL_INFO.phone})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Refined, Balanced Static Headshot */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm max-w-[240px] w-full flex flex-col items-center">
              {headshot && !imgError ? (
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-xs">
                  <img
                    src={headshot}
                    alt="Sarah Kogbede"
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                </div>
              ) : (
                <div className="w-full aspect-[3/4] rounded-xl bg-gradient-to-br from-[#F5F3FF] to-[#F1F5F9] border border-[#8B5CF6]/20 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#172554] text-white flex items-center justify-center font-extrabold text-xl mb-3 shadow-xs">
                    SK
                  </div>
                  <span className="font-bold text-[#172554] text-sm">Sarah Kogbede</span>
                  <span className="text-[11px] text-[#475569] mt-0.5 font-medium">Virtual Assistant</span>
                </div>
              )}

              <div className="mt-3 pt-3 border-t border-slate-100 w-full text-center">
                <div className="text-xs font-bold text-[#172554]">
                  Sarah Kogbede
                </div>
                <div className="text-[11px] text-[#475569] mt-0.5">
                  Virtual Assistant & Customer Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
