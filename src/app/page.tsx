"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CodingProfiles from "@/components/CodingProfiles";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import InterestsAndOutside from "@/components/InterestsAndOutside";
import Contact from "@/components/Contact";
import { ArrowUp, Sparkles } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll handler
  const handleScrollTo = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track active section and scroll top button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top visibility
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check current section
      const sections = ["hero", "about", "skills", "profiles", "projects", "timeline", "outside", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-cream/35">
      {/* Navigation */}
      <div className="w-full pt-4 sticky top-0 z-50">
        <Navbar activeSection={activeSection} onScrollTo={handleScrollTo} />
      </div>

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Divider line style */}
        <div className="w-full flex items-center justify-center py-4">
          <div className="border-t-2 border-dashed border-charcoal/30 w-[80%] max-w-5xl"></div>
        </div>

        {/* About */}
        <About />

        {/* Divider */}
        <div className="w-full flex items-center justify-center py-4">
          <div className="border-t-2 border-dashed border-charcoal/30 w-[80%] max-w-5xl"></div>
        </div>

        {/* Skills */}
        <Skills />

        {/* Divider */}
        <div className="w-full flex items-center justify-center py-4">
          <div className="border-t-2 border-dashed border-charcoal/30 w-[80%] max-w-5xl"></div>
        </div>

        {/* Coding Profiles */}
        <CodingProfiles />

        {/* Divider */}
        <div className="w-full flex items-center justify-center py-4">
          <div className="border-t-2 border-dashed border-charcoal/30 w-[80%] max-w-5xl"></div>
        </div>

        {/* Projects */}
        <Projects />

        {/* Divider */}
        <div className="w-full flex items-center justify-center py-4">
          <div className="border-t-2 border-dashed border-charcoal/30 w-[80%] max-w-5xl"></div>
        </div>

        {/* Timeline (Experience, Education, Achievements, Certs) */}
        <Timeline />

        {/* Divider */}
        <div className="w-full flex items-center justify-center py-4">
          <div className="border-t-2 border-dashed border-charcoal/30 w-[80%] max-w-5xl"></div>
        </div>

        {/* Hobbies / Outside Coding */}
        <InterestsAndOutside />

        {/* Divider */}
        <div className="w-full flex items-center justify-center py-4">
          <div className="border-t-2 border-dashed border-charcoal/30 w-[80%] max-w-5xl"></div>
        </div>

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-lavender/35 border-t-2 border-charcoal py-8 mt-12 relative overflow-hidden">
        <div className="absolute top-2 left-[5%] w-6 h-6 text-pink opacity-40 animate-float">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-sm font-bold text-charcoal">
            &copy; {new Date().getFullYear()} Penke Bhavya Teja. All rights reserved.
          </p>
          
          <p className="font-handwritten text-2xl font-bold text-charcoal/80 rotate-[-1deg]">
            Made with ☕, yarn, creativity &amp; code.
          </p>

          <button
            onClick={() => handleScrollTo("hero")}
            className="px-4 py-2 font-display text-xs font-bold text-charcoal bg-white border-2 border-charcoal rounded-full flex items-center gap-1.5 shadow-[2px_2px_0px_#3D3D3D] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>

      {/* Sticky Back-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={() => handleScrollTo("hero")}
          className="fixed bottom-6 right-6 p-3 bg-white border-2 border-charcoal rounded-full text-charcoal shadow-[4px_4px_0px_#3D3D3D] hover:-translate-y-1 hover:bg-peach/20 active:translate-y-0 active:shadow-[1px_1px_0px_#3D3D3D] z-40 transition-all cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
