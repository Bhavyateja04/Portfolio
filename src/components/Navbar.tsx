"use client";

import React, { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onScrollTo: (targetId: string) => void;
}

export default function Navbar({ activeSection, onScrollTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "profiles", label: "Profiles" },
    { id: "projects", label: "Projects" },
    { id: "timeline", label: "Timeline" },
    { id: "outside", label: "Fun Corner" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-4 left-0 right-0 z-50 mx-auto max-w-6xl w-[90%] md:w-[95%] bg-white/70 backdrop-blur-md border-2 border-charcoal/80 shadow-[4px_4px_0px_#3D3D3D] rounded-full py-3 px-6 flex items-center justify-between transition-all duration-300">
      {/* Logo */}
      <button
        onClick={() => handleNavClick("hero")}
        className="flex items-center gap-1.5 font-display text-xl font-bold text-charcoal hover:scale-105 active:scale-95 transition-transform"
      >
        <span>bhavya</span>
        <span className="text-lavender font-extrabold flex items-center">
          .teja
          <Sparkles className="w-4 h-4 text-pink animate-pulse-subtle ml-0.5" />
        </span>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 font-display text-sm font-semibold rounded-full border-2 transition-all duration-250 cursor-pointer ${
                  activeSection === item.id
                    ? "bg-lavender text-charcoal border-charcoal shadow-[2px_2px_0px_#3D3D3D]"
                    : "border-transparent text-charcoal/70 hover:text-charcoal hover:bg-peach/30"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-charcoal hover:scale-105 active:scale-95 transition-transform cursor-pointer"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-cream border-2 border-charcoal shadow-[4px_4px_0px_#3D3D3D] rounded-2xl p-4 flex flex-col gap-2 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left py-2.5 px-4 font-display font-semibold rounded-xl border-2 transition-all cursor-pointer ${
                activeSection === item.id
                  ? "bg-lavender text-charcoal border-charcoal shadow-[2px_2px_0px_#3D3D3D]"
                  : "border-transparent text-charcoal/70 hover:text-charcoal hover:bg-peach/30"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
