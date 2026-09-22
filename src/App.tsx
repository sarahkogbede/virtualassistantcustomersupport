import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ToolsSection } from './components/ToolsSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { WorkProcess } from './components/WorkProcess';
import { ExperienceSection } from './components/ExperienceSection';
import { Differentiators } from './components/Differentiators';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { syncAllLocalStorageImagesToServer } from './utils/imageStorage';

export default function App() {
  useEffect(() => {
    // Automatically write any browser-uploaded images to disk in public/images
    syncAllLocalStorageImagesToServer();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <ToolsSection />
        <ProjectShowcase />
        <WorkProcess />
        <ExperienceSection />
        <Differentiators />
        <Testimonials />
        <CallToAction />
        <ContactSection />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
