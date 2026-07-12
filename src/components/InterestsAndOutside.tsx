"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, BookOpen, Quote } from "lucide-react";
import { useTheme, ThemeName } from "@/context/ThemeContext";

export default function InterestsAndOutside() {
  const { theme, setTheme } = useTheme();

  const hobbies = [
    {
      title: "HandyCrafts",
      desc: "Making cozy amigurumi bangles & flowers.",
      colorClass: "text-purple-600 bg-purple-50",
      decor: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-purple-400 stroke-current fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-purple-500 fill-none stroke-current stroke-[4]">
          <circle cx="50" cy="50" r="32" strokeDasharray="2,2" />
          <path d="M30,35 Q50,65 70,35" />
          <path d="M25,50 Q50,25 75,50" />
          <path d="M30,65 Q50,35 70,65" />
          <line x1="15" y1="85" x2="55" y2="45" strokeLinecap="round" strokeWidth="5" />
          <circle cx="55" cy="45" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Doodles",
      desc: "Scribbling sketches & bullet journals.",
      colorClass: "text-orange-600 bg-orange-50",
      decor: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-pink-400 stroke-current fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
        </svg>
      ),
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-orange-400 fill-none stroke-current stroke-[4]">
          <path d="M25,50 C25,32 42,22 60,22 C75,22 85,34 85,50 C85,66 68,75 50,75 C35,75 25,66 25,50 Z" />
          <circle cx="42" cy="38" r="5" fill="currentColor" />
          <circle cx="58" cy="38" r="5" fill="currentColor" />
          <circle cx="70" cy="50" r="5" fill="currentColor" />
          <circle cx="58" cy="62" r="5" fill="currentColor" />
          <circle cx="42" cy="58" r="6" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "UI Design",
      desc: "Designing cozy & accessible interfaces.",
      colorClass: "text-blue-600 bg-blue-50",
      decor: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-400 stroke-current fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-blue-500 fill-none stroke-current stroke-[4]">
          <rect x="22" y="25" width="56" height="38" rx="4" />
          <line x1="12" y1="68" x2="88" y2="68" strokeLinecap="round" strokeWidth="5" />
          <line x1="35" y1="68" x2="65" y2="68" strokeWidth="3" />
        </svg>
      )
    },
    {
      title: "DIY Crafts",
      desc: "Handcrafted scrapbooks & personalized cards.",
      colorClass: "text-pink-600 bg-pink-50",
      decor: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 text-pink-400 fill-none stroke-current stroke-[6]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50,45 C35,25 15,35 25,55 C35,65 45,55 50,52 C55,55 65,65 75,55 C85,35 65,25 50,45 Z" />
          <path d="M50,50 C45,65 35,80 35,80" />
          <path d="M50,50 C55,65 65,80 65,80" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
      ),
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-pink-500 fill-none stroke-current stroke-[4]">
          <circle cx="35" cy="65" r="10" />
          <circle cx="65" cy="65" r="10" />
          <path d="M40,57 L60,25" strokeLinecap="round" />
          <path d="M60,57 L40,25" strokeLinecap="round" />
          <circle cx="50" cy="49" r="2.5" fill="currentColor" />
        </svg>
      )
    }
  ];

  const colors = [
    { hex: "#CDB8FF", displayHex: "#C9B6FF", name: "Lavender", role: "Primary Accent", usage: "Used in Timeline headings, buttons, and decorative underlines." },
    { hex: "#FFDFD3", displayHex: "#FFD6C1", name: "Peach", role: "Warm Accent", usage: "Used in active button states, input focus outlines, and work timeline icons." },
    { hex: "#FFB7B2", displayHex: "#FFB6C1", name: "Pink", role: "Highlight Accent", usage: "Used in heart icons, stickies, and washi tape overlays." },
    { hex: "#B3C5FF", displayHex: "#B8D4FF", name: "Blue", role: "Soft Accent", usage: "Used in headings, education timeline icons, and interests sections." },
    { hex: "#FFFDF6", displayHex: "#FFF8E8", name: "Cream", role: "Canvas Tone", usage: "Used for page background patterns and text/card container foundations." },
  ];

  const [hoveredColor, setHoveredColor] = useState<typeof colors[0] | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const selectedColor = colors.find(c => c.name === theme) || colors[0];
  const activeColor = hoveredColor || selectedColor;

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 1500);
  };

  return (
    <section id="outside" className="py-16 relative overflow-hidden bg-cream/15 bg-[radial-gradient(rgba(203,184,255,0.15)_6%,transparent_6%)] bg-[size:24px_24px]">
      
      {/* Decorative Scrapbook Corner Elements */}
      {/* Top Left Flower */}
      <div className="absolute top-8 left-8 text-purple-300 w-10 h-10 opacity-70 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-purple-100 stroke-current stroke-[3]">
          <circle cx="50" cy="50" r="10" fill="#FFF275" />
          <circle cx="50" cy="24" r="12" />
          <circle cx="50" cy="76" r="12" />
          <circle cx="24" cy="50" r="12" />
          <circle cx="76" cy="50" r="12" />
          <circle cx="32" cy="32" r="12" />
          <circle cx="68" cy="32" r="12" />
          <circle cx="32" cy="68" r="12" />
          <circle cx="68" cy="68" r="12" />
        </svg>
      </div>

      {/* Bottom Left Flower & Binder Clip */}
      <div className="absolute bottom-16 left-6 flex flex-col items-center gap-2 z-10 opacity-80">
        {/* Binder Clip */}
        <div className="transform -rotate-12">
          <svg viewBox="0 0 100 100" className="w-8 h-8 text-pink-300 fill-pink-100 stroke-charcoal stroke-[4]">
            <path d="M35,60 L65,60 L57,80 L43,80 Z" fill="#3D3D3D" />
            <path d="M43,60 C43,40 47,30 50,30 C53,30 57,40 57,60" fill="none" strokeLinecap="round" />
            <path d="M40,65 C40,45 45,35 50,35 C55,35 60,45 60,65" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* Wildflowers */}
        <div className="w-10 h-10 text-purple-300">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[3]">
            <path d="M50,90 Q40,70 48,50" />
            <path d="M48,50 Q45,35 48,25" />
            <path d="M50,90 Q60,75 52,60" />
            <circle cx="48" cy="25" r="5" fill="#FFF275" />
            <circle cx="52" cy="60" r="4" fill="#FFF275" />
          </svg>
        </div>
      </div>

      {/* Bottom Right Paperclip */}
      <div className="absolute bottom-12 right-12 opacity-80 z-10">
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-300 transform rotate-[35deg]">
          <path d="M30,50 L30,30 A20,20 0 0,1 70,30 L70,70 A30,30 0 0,1 10,70 L10,40 A10,10 0 0,1 30,40 L30,60" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto max-w-[1050px] px-3 relative">
        
        {/* Section Header */}
        <div className="mb-10 text-center relative">
          <span className="font-handwritten text-2xl text-purple-400 font-bold inline-flex items-center gap-1.5 mb-1 animate-pulse-subtle">
            ✨ what I do offline ✨
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal flex items-center justify-center gap-1.5 relative w-fit mx-auto">
            <span>Outside Coding & Hobbies</span>
            <span className="text-pink text-2xl">💖</span>
            {/* Hand-drawn pink underline */}
            <div className="absolute -bottom-2.5 left-0 right-0 h-1.5 bg-pink/40 rounded-full border-b border-charcoal/20"></div>
          </h2>
        </div>

        {/* 2-Column Grid Layout (Left: Hobbies list, Right: Palette & Quote Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* COLUMN 1: Things I Love to Do (6 cols) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-purple-lilac/10 border-2 border-charcoal/80 p-5 rounded-3xl shadow-[5px_5px_0px_#3D3D3D] relative w-full flex flex-col"
              style={{ backgroundColor: "rgba(228, 218, 255, 0.15)" }}
            >
              {/* Cute Washi tape overlay */}
              <div className="washi-tape washi-tape-lavender -top-3 left-1/4 w-28 h-6 rotate-[-1deg]"></div>

              <h3 className="font-display text-lg font-black text-charcoal mb-4 mt-2 flex items-center gap-1.5 border-b border-charcoal/15 pb-2">
                <BookOpen className="w-5 h-5 text-blue" />
                Things I Love to Do
              </h3>

              <div className="space-y-3">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, rotate: index % 2 === 0 ? 1 : -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="group flex items-center justify-between bg-white border-2 border-charcoal/80 p-3 rounded-2xl shadow-[2.5px_2.5px_0px_#3D3D3D] hover:shadow-[5px_5px_0px_#3D3D3D] transition-all duration-200 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon circle */}
                      <div className={`p-1.5 rounded-xl border border-charcoal/50 shrink-0 transform group-hover:rotate-[6deg] transition-transform duration-250 ${hobby.colorClass}`}>
                        {hobby.icon}
                      </div>
                      
                      {/* Text */}
                      <div className="text-left">
                        <h4 className="font-display text-sm font-bold text-charcoal leading-tight">
                          {hobby.title}
                        </h4>
                        <p className="font-body text-[11px] md:text-xs font-semibold text-charcoal/70 leading-normal mt-0.5">
                          {hobby.desc}
                        </p>
                      </div>
                    </div>

                    {/* Cute decor item */}
                    <div className="shrink-0 pl-2 transform group-hover:scale-110 transition-transform duration-250">
                      {hobby.decor}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* COLUMN 2: Personal Corner (Color Palette + Quote Card) (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Minimalist Color Palette Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-2 border-charcoal/80 p-4 rounded-3xl shadow-[5px_5px_0px_#3D3D3D] relative w-full"
            >
              <div className="washi-tape washi-tape-blue -top-3 right-8 w-24 h-6 rotate-[1deg]"></div>

              <h3 className="font-display text-sm font-bold text-charcoal mb-3 flex items-center gap-1.5 mt-2">
                <span className="text-base">🎨</span>
                <span>My Color Palette</span>
                <span className="text-[8px] font-display font-black text-charcoal/40 uppercase tracking-widest ml-auto">interactive</span>
              </h3>

              {/* Swatch row */}
              <div className="grid grid-cols-5 gap-1.5 mb-3.5">
                {colors.map((color, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleCopy(color.hex);
                      setTheme(color.name as ThemeName);
                    }}
                    onMouseEnter={() => setHoveredColor(color)}
                    onMouseLeave={() => setHoveredColor(null)}
                    className={`flex flex-col bg-white border border-charcoal/60 rounded-xl overflow-hidden shadow-[1.5px_1.5px_0px_#3D3D3D] active:shadow-[0.5px_0.5px_0px_#3D3D3D] transition-all cursor-pointer focus:outline-none p-0.5 ${
                      activeColor.hex === color.hex ? "ring-2 ring-charcoal/30 border-charcoal" : "border-charcoal/60"
                    }`}
                  >
                    <div className="w-full aspect-square rounded-lg border border-charcoal/20" style={{ backgroundColor: color.hex }} />
                    <div className="pt-1 flex flex-col items-center justify-center">
                      <span className="text-[7px] font-display font-black text-charcoal leading-none uppercase truncate w-full text-center">
                        {color.name}
                      </span>
                      <span className="text-[6px] font-mono font-bold leading-none text-charcoal/50 mt-0.5 truncate w-full text-center">
                        {copiedHex === color.hex ? "COPIED" : color.displayHex}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Current Obsessions section */}
              <div className="border-t border-charcoal/15 pt-3">
                <h4 className="font-display text-[11px] font-bold text-charcoal/80 mb-2 flex items-center gap-1">
                  <span>🌸</span>
                  <span>Current Obsessions</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-cream border border-charcoal/20 text-[9px] md:text-[10px] font-bold text-charcoal/75 flex items-center gap-1 shadow-[1px_1px_0px_rgba(61,61,61,0.15)] hover:scale-102 transition-transform">
                    🧶 Crocheting mini rabbits
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-cream border border-charcoal/20 text-[9px] md:text-[10px] font-bold text-charcoal/75 flex items-center gap-1 shadow-[1px_1px_0px_rgba(61,61,61,0.15)] hover:scale-102 transition-transform">
                    ☕ Iced lavender lattes
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-cream border border-charcoal/20 text-[9px] md:text-[10px] font-bold text-charcoal/75 flex items-center gap-1 shadow-[1px_1px_0px_rgba(61,61,61,0.15)] hover:scale-102 transition-transform">
                    📓 Hand-doodling journals
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-cream border border-charcoal/20 text-[9px] md:text-[10px] font-bold text-charcoal/75 flex items-center gap-1 shadow-[1px_1px_0px_rgba(61,61,61,0.15)] hover:scale-102 transition-transform">
                    ✨ CSS micro-animations
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Tiny Scrapbook Flower Element to break grid geometry */}
            <div className="flex justify-center -my-3.5 z-10 select-none">
              <motion.span
                animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 0.95, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="text-lg inline-block cursor-default filter drop-shadow-[0.5px_0.5px_0px_rgba(0,0,0,0.15)]"
              >
                🌸
              </motion.span>
            </div>

            {/* Cute Yellow Sticky Quote Note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-yellow-doodle/30 border-2 border-charcoal/80 border-dashed p-4 rounded-3xl flex flex-col items-center justify-center relative shadow-[4px_4px_0px_rgba(61,61,61,0.15)] w-full flex-grow relative overflow-hidden"
              style={{ minHeight: "95px" }}
            >
              <div className="washi-tape washi-tape-lavender -top-3 left-1/3 w-28 h-6 rotate-[-2deg]"></div>
              
              {/* Cute Stars around */}
              <div className="absolute top-2.5 left-3 text-yellow-doodle animate-pulse-subtle">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
              </div>
              <div className="absolute bottom-2 left-6 text-blue-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
              </div>

              {/* Notebook Doodle in top-right corner */}
              <div className="absolute top-2 right-3.5 opacity-25 select-none transform rotate-[8deg]">
                <svg viewBox="0 0 100 100" className="w-7 h-7 text-charcoal fill-none stroke-current stroke-[4]">
                  <rect x="20" y="20" width="60" height="60" rx="4" />
                  <line x1="50" y1="20" x2="50" y2="80" strokeDasharray="2,2" />
                  <line x1="30" y1="35" x2="42" y2="35" />
                  <line x1="30" y1="50" x2="42" y2="50" />
                  <line x1="30" y1="65" x2="42" y2="65" />
                  <line x1="58" y1="35" x2="70" y2="35" />
                  <line x1="58" y1="50" x2="70" y2="50" />
                  <line x1="58" y1="65" x2="70" y2="65" />
                </svg>
              </div>

              {/* Tulip flower pot overlapping bottom-right corner */}
              <div className="absolute -bottom-1 right-1.5 z-10 shrink-0 select-none">
                <svg viewBox="0 0 120 150" className="w-16 h-20 text-charcoal">
                  <path d="M45,115 L75,115 L70,142 L50,142 Z" fill="#E2D9CF" stroke="currentColor" strokeWidth="2.5" />
                  <line x1="42" y1="115" x2="78" y2="115" stroke="currentColor" strokeWidth="3" />
                  {/* Stem & Leaves */}
                  <path d="M52,115 Q48,80 48,60" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M60,115 Q60,75 64,50" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M68,115 Q72,85 72,65" fill="none" stroke="currentColor" strokeWidth="2" />
                  {/* Tulips */}
                  <path d="M42,60 C42,48 48,44 48,44 C48,44 54,48 54,60 C54,64 42,64 42,60 Z" fill="#FFB6C1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M58,50 C58,38 64,34 64,34 C64,34 70,38 70,50 C70,54 58,54 58,50 Z" fill="#FFD6C1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M66,65 C66,53 72,49 72,49 C72,49 78,53 78,65 C78,69 66,69 66,65 Z" fill="#FFB6C1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Quote text styled block */}
              <div className="flex flex-col items-center justify-center text-charcoal/80 z-10 py-0.5 mt-2">
                <span className="text-charcoal/20 text-[10px] mb-0.5 font-mono tracking-widest select-none">──────────────</span>
                <span className="text-[10px] mb-0 animate-float select-none">✨</span>
                <p className="font-handwritten text-lg sm:text-xl font-bold text-center leading-snug max-w-[80%] px-0">
                  &quot;Trust the magic<br />of new beginnings.&quot;
                </p>
                <span className="text-pink text-[10px] mt-0.5 select-none">♡</span>
                <span className="text-charcoal/20 text-xs mt-1 font-mono tracking-widest select-none">──────────────</span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Small Footer Text */}
        <div className="mt-8 text-center flex items-center justify-center gap-1.5 text-charcoal/70 opacity-70 text-[10px] md:text-xs font-semibold tracking-wide select-none">
          <span>✨</span>
          <span>Creating</span>
          <span>•</span>
          <span>Learning</span>
          <span>•</span>
          <span>Growing</span>
          <span className="text-pink font-bold">♡</span>
          <span>One hobby at a time</span>
          <span>😊</span>
        </div>

      </div>
    </section>
  );
}
