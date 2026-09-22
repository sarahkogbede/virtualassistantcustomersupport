import React from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Calendar, 
  MapPin, 
  Clock, 
  ExternalLink,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAFAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] mt-3 tracking-tight">
            Connect Directly With Sarah
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Reach out via any of my primary professional channels below for project discussions, administrative support, or introductory calls.
          </p>
        </div>

        {/* 4 Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Email Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#2563EB]/40 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/60 text-[#2563EB] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#172554]">
                Email
              </h3>
              <p className="text-xs text-[#475569] mt-1 mb-4">
                Direct project scopes, job opportunities, and inquiries.
              </p>
              <div className="text-xs font-medium text-[#172554] bg-[#F8FAFC] p-2.5 rounded-lg border border-slate-100 break-all mb-4">
                {PERSONAL_INFO.email}
              </div>
            </div>

            <a
              id="contact-card-email-btn"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>
          </div>

          {/* Calendly Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#2563EB]/40 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] border border-[#8B5CF6]/30 text-[#8B5CF6] flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#172554]">
                Schedule a Call
              </h3>
              <p className="text-xs text-[#475569] mt-1 mb-4">
                Book a 30-minute introductory conversation directly on my calendar.
              </p>
              <div className="text-xs font-medium text-[#172554] bg-[#F8FAFC] p-2.5 rounded-lg border border-slate-100 break-all mb-4">
                calendly.com/sarahkogbede/30min
              </div>
            </div>

            <a
              id="contact-card-calendly-btn"
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#172554] hover:bg-[#2563EB] text-white text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book on Calendly</span>
              <ExternalLink className="w-3 h-3 text-slate-300" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#2563EB]/40 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/60 text-[#2563EB] flex items-center justify-center mb-4">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#172554]">
                LinkedIn
              </h3>
              <p className="text-xs text-[#475569] mt-1 mb-4">
                Connect professionally, review endorsements, and direct message.
              </p>
              <div className="text-xs font-medium text-[#172554] bg-[#F8FAFC] p-2.5 rounded-lg border border-slate-100 break-all mb-4">
                linkedin.com/in/sarah-kogbede-b34111368
              </div>
            </div>

            <a
              id="contact-card-linkedin-btn"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#172554] hover:bg-[#2563EB] text-white text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-300" />
            </a>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#172554]">
                Phone & WhatsApp
              </h3>
              <p className="text-xs text-[#475569] mt-1 mb-4">
                Direct mobile line and instant WhatsApp messaging.
              </p>
              <div className="text-xs font-medium text-[#172554] bg-[#F8FAFC] p-2.5 rounded-lg border border-slate-100 break-all mb-4">
                {PERSONAL_INFO.phone}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                id="contact-card-phone-btn"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#172554] border border-slate-200 text-xs font-bold transition shadow-xs cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Call</span>
              </a>
              <a
                id="contact-card-whatsapp-btn"
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Availability & Location Information Bar */}
        <div className="bg-[#172554] text-white rounded-2xl p-6 sm:p-7 border border-blue-900/60 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-lg shrink-0">
              SK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white text-sm sm:text-base">
                  {PERSONAL_INFO.name}
                </h4>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </div>
              <p className="text-xs text-blue-200 mt-0.5">
                {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-blue-100">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#93C5FD]" />
              <span>Available for: <strong className="text-white">{PERSONAL_INFO.availability}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#93C5FD]" />
              <span>Supports Global Time Zones</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
