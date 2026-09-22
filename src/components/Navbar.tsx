import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills & Tools', href: '#tools' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAFAF9]/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-[#FAFAF9] border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-[#172554] text-white font-bold text-base flex items-center justify-center tracking-tight shadow-xs group-hover:bg-[#2563EB] transition">
              SK
            </div>
            <div>
              <span className="block font-bold text-[#172554] text-base tracking-tight leading-none group-hover:text-[#2563EB] transition">
                Sarah Kogbede
              </span>
              <span className="block text-[11px] font-medium text-[#475569] uppercase tracking-wider mt-1">
                VA & Customer Support
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition ${
                  idx === 0
                    ? 'text-[#2563EB] font-semibold bg-[#F5F3FF]'
                    : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-[#F5F3FF]/70'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="header-book-call-btn"
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-semibold shadow-xs hover:shadow-sm transition cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-100" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:inline-flex hidden items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-semibold"
            >
              <Calendar className="w-3 h-3" />
              <span>Book Call</span>
            </a>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#0F172A] hover:text-[#2563EB] hover:bg-[#F5F3FF] transition cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            id="mobile-nav-menu"
            className="xl:hidden mt-3 pt-3 pb-4 border-t border-slate-200 bg-white rounded-2xl p-4 shadow-lg"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                    idx === 0 
                      ? 'text-[#2563EB] font-bold bg-[#F5F3FF]'
                      : 'text-[#0F172A] hover:bg-[#F5F3FF] hover:text-[#2563EB]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  id="mobile-book-call-btn"
                  href={PERSONAL_INFO.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Call (Calendly)
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-[#0F172A] text-sm font-medium hover:bg-slate-50"
                >
                  Email Sarah ({PERSONAL_INFO.email})
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
