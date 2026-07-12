"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Send, Sparkles } from "lucide-react";

interface HeroProps {
  onScrollTo: (targetId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background Decorative Doodles */}
      <div className="absolute top-20 left-10 w-12 h-12 text-pink animate-float opacity-75">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
          <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" className="opacity-40" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-[8%] w-16 h-16 text-lavender animate-float-slow opacity-60">
        {/* Yarn Ball SVG Doodle */}
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full">
          <circle cx="50" cy="50" r="40" strokeDasharray="4,4" />
          <path d="M30,30 Q50,70 70,30" />
          <path d="M20,50 Q50,20 80,50" />
          <path d="M30,70 Q50,30 70,70" />
          <path d="M50,10 Q90,50 50,90" />
          <path d="M90,50 C95,60 90,75 80,75 C70,75 75,90 60,85" strokeWidth="3" />
        </svg>
      </div>

      <div className="absolute top-32 right-12 w-10 h-10 text-pink animate-float-slow opacity-80">
        <Sparkles className="w-full h-full" />
      </div>

      <div className="absolute bottom-24 right-[10%] w-14 h-14 text-peach animate-float opacity-70">
        {/* Bow SVG Doodle */}
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M50,45 C35,25 15,35 25,55 C35,65 45,55 50,52 C55,55 65,65 75,55 C85,35 65,25 50,45 Z" />
          <path d="M50,50 C45,65 35,80 35,80" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M50,50 C55,65 65,80 65,80" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <circle cx="50" cy="50" r="6" fill="#3D3D3D" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-[5%] w-8 h-8 text-blue animate-pulse-subtle opacity-70">
        {/* Cute Star Doodle */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Hero Text */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 bg-lavender/40 text-charcoal border-2 border-charcoal/80 shadow-[2px_2px_0px_#3D3D3D] rounded-full text-xs md:text-sm font-display font-semibold"
          >
            <span className="w-2.5 h-2.5 bg-mint rounded-full border border-charcoal/80 animate-ping" />
            <span>Open to Opportunities</span>
          </motion.div>

          {/* Large Friendly Introduction */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-charcoal"
          >
            Hi, I&apos;m <span className="text-lavender underline decoration-pink decoration-wavy underline-offset-8">Bhavya Teja</span> 🌸
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 font-display text-2xl sm:text-3xl text-charcoal/80 font-semibold"
          >
            Software Engineer • Full Stack Developer • Problem Solver
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base md:text-lg max-w-xl text-charcoal/80 leading-relaxed font-body font-medium"
          >
            I specialize in building scalable payment infrastructure, robust backend microservices, and charming, interactive frontend user interfaces. Currently pursuing my B.Tech in IT and crafting beautiful things with code & craft.
          </motion.p>

          {/* Scrapbook CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
           {/* View Resume */}
<a
  href="https://drive.google.com/file/d/1MMKstpjPuF7kDXlJ7IRCCIUKIbV3tezw/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 font-display font-bold text-charcoal bg-peach border-2 border-charcoal hover:bg-peach/90 hover:translate-y-[-2px] active:translate-y-[1px] shadow-[4px_4px_0px_#3D3D3D] hover:shadow-[6px_6px_0px_#3D3D3D] active:shadow-[2px_2px_0px_#3D3D3D] rounded-2xl flex items-center gap-2 cursor-pointer transition-all"
>
  <span>View Resume</span>
  <ArrowRight className="w-4 h-4" />
</a>

            {/* Contact Me */}
            <button
              onClick={() => onScrollTo("contact")}
              className="px-6 py-3 font-display font-bold text-charcoal bg-blue/30 border-2 border-charcoal hover:bg-blue/45 hover:translate-y-[-2px] active:translate-y-[1px] shadow-[4px_4px_0px_#3D3D3D] hover:shadow-[6px_6px_0px_#3D3D3D] active:shadow-[2px_2px_0px_#3D3D3D] rounded-2xl flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>Contact Me</span>
              <Send className="w-4 h-4" />
            </button>

            {/* View Resume */}
            <a
              href="https://github.com/Bhavyateja04"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-display font-bold text-charcoal bg-cream border-2 border-charcoal hover:bg-white hover:translate-y-[-2px] active:translate-y-[1px] shadow-[4px_4px_0px_#3D3D3D] hover:shadow-[6px_6px_0px_#3D3D3D] active:shadow-[2px_2px_0px_#3D3D3D] rounded-2xl flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>My Git</span>
              <FileText className="w-4 h-4 text-pink" />
            </a>
          </motion.div>
        </div>

        {/* Hero Avatar Image with paper frame */}
        <div className="md:col-span-5 flex justify-center relative mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative bg-white border-2 border-charcoal p-4 pb-14 shadow-[8px_8px_0px_#3D3D3D] rounded-2xl max-w-[340px] sm:max-w-[380px]"
          >
            {/* Washi tape over avatar */}
            <div className="washi-tape washi-tape-lavender -top-5 left-1/2 -translate-x-1/2 w-28 h-7 z-30"></div>
            
            {/* Image Wrapper - Vertical aspect ratio to display photo beautifully */}
            <div className="bg-peach/20 border-2 border-charcoal/60 rounded-xl overflow-hidden aspect-[3/4] relative">
              <Image
                src="/assets/avatar_real.png"
                alt="Penke Bhavya Teja Avatar Photo"
                width={400}
                height={533}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Notebook Ring decorations */}
            <div className="absolute top-1/2 -left-3 flex flex-col gap-8 -translate-y-1/2">
              <div className="binder-ring"></div>
              <div className="binder-ring"></div>
            </div>

            {/* Handwritten Label */}
            <p className="absolute bottom-2.5 left-1/2 -translate-x-1/2 font-handwritten text-xl font-bold text-charcoal/80 whitespace-nowrap">
              me (real edition) 💜
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
