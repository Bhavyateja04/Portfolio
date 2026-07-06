"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, BookOpen, Quote } from "lucide-react";
import { useTheme, ThemeName } from "@/context/ThemeContext";

interface HobbyCard {
  title: string;
  emoji: string;
  bgColor: string;
  desc: string;
}

interface ScrapbookAsset {
  title: string;
  subtitle: string;
  image: string;
  rotate: string;
}

export default function InterestsAndOutside() {
  const hobbies: HobbyCard[] = [
    { title: "Crochet", emoji: "🧶", bgColor: "bg-lavender/35", desc: "Crafting cozy scarves and cute little amigurumi plushies." },
    { title: "Doodles", emoji: "🎨", bgColor: "bg-peach/35", desc: "Scribbling sketches, cute cartoon drawings, and bullet journals." },
    { title: "UI Design", emoji: "💻", bgColor: "bg-blue/20", desc: "Constructing user interfaces that feel cozy, clean, and delightful." },
    { title: "DIY Crafts", emoji: "✂️", bgColor: "bg-pink/30", desc: "Designing paper crafts, customized cards, and sticker layouts." },
    { title: "Learning", emoji: "📚", bgColor: "bg-sage/40", desc: "Deep diving into new web developments and AI libraries." },
    { title: "Cute Design", emoji: "🌸", bgColor: "bg-lavender/30", desc: "Applying soft palettes, hand-drawn accents, and glassmorphisms." },
  ];

  const galleryItems: ScrapbookAsset[] = [
    {
      title: "Crochet Creations",
      subtitle: "My yarn creations 🧸🧶",
      image: "/assets/crochet_hobby.png",
      rotate: "rotate-[-2deg]",
    },
    {
      title: "DIY Scrapbooks",
      subtitle: "My paper crafts ✂️📓",
      image: "/assets/diy_craft.png",
      rotate: "rotate-[3deg]",
    },
  ];

  const colors = [
    { hex: "#CDB8FF", name: "Lavender", role: "Primary Accent", usage: "Used in Timeline headings, buttons, and decorative underlines." },
    { hex: "#FFDFD3", name: "Peach", role: "Warm Accent", usage: "Used in active button states, input focus outlines, and work timeline icons." },
    { hex: "#FFB7B2", name: "Pink", role: "Highlight Accent", usage: "Used in heart icons, stickies, and washi tape overlays." },
    { hex: "#B3C5FF", name: "Blue", role: "Soft Accent", usage: "Used in headings, education timeline icons, and interests sections." },
    { hex: "#FFFDF6", name: "Cream", role: "Canvas Tone", usage: "Used for page background patterns and text/card container foundations." },
  ];

  const { theme, setTheme } = useTheme();

  const [hoveredColor, setHoveredColor] = React.useState<typeof colors[0] | null>(null);
  const [copiedHex, setCopiedHex] = React.useState<string | null>(null);

  // Compute selectedColor from the global theme name
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
    <section id="outside" className="py-20 relative overflow-hidden bg-cream/20">
      {/* Background sparkle */}
      <div className="absolute top-[10%] right-[8%] w-10 h-10 text-pink animate-float">
        <Sparkles className="w-full h-full" />
      </div>

      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Things I Love Section */}
        <div className="mb-20">
          {/* Header */}
          <div className="mb-12 text-center relative">
            <span className="font-handwritten text-3xl text-pink font-bold block mb-1 rotate-[-2deg]">
              my favorite things
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal flex items-center justify-center gap-2">
              <span>Things I Love</span>
              <Heart className="w-6 h-6 text-pink fill-pink animate-pulse-subtle" />
            </h2>
            <div className="mt-2 w-32 h-1.5 bg-pink mx-auto rounded-full border border-charcoal/30"></div>
          </div>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                className={`border-2 border-charcoal rounded-3xl p-5 shadow-[4px_4px_0px_#3D3D3D] ${hobby.bgColor} flex items-start gap-4 relative overflow-hidden`}
              >
                <span className="text-4xl block relative z-10">{hobby.emoji}</span>
                <div className="relative z-10">
                  <h3 className="font-display text-lg font-bold text-charcoal mb-1">
                    {hobby.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm font-semibold text-charcoal/70 leading-relaxed">
                    {hobby.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Corner / Outside Coding Section */}
        <div>
          {/* Header */}
          <div className="mb-12 text-center relative">
            <span className="font-handwritten text-3xl text-blue font-bold block mb-1 rotate-[3deg]">
              what I do offline
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal flex items-center justify-center gap-2">
              <span>Outside Coding</span>
              <BookOpen className="w-6 h-6 text-blue" />
            </h2>
            <div className="mt-2 w-32 h-1.5 bg-lavender mx-auto rounded-full border border-charcoal/30"></div>
          </div>

          {/* Scrapbook Contents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Gallery items */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white border-2 border-charcoal p-4 pb-10 shadow-[6px_6px_0px_#3D3D3D] rounded-2xl relative ${item.rotate}`}
                >
                  {/* Polaroid Washi Tape */}
                  <div className="washi-tape washi-tape-lavender -top-3 left-1/3 w-20 h-6"></div>

                  <div className="relative aspect-square border-2 border-charcoal rounded-xl overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-780px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>

                  <p className="font-handwritten text-lg font-bold text-charcoal/80 text-center">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Sidebar Details (Obsessions, color palettes, quotes) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Obsession Sticky Note */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-pink/35 border-2 border-charcoal p-5 rounded-3xl shadow-[4px_4px_0px_#3D3D3D] relative"
              >
                {/* Washi tape */}
                <div className="washi-tape washi-tape-blue -top-3 right-6 w-20 h-6"></div>

                <h3 className="font-display text-base font-bold text-charcoal mb-3">
                  🌸 Current Obsessions:
                </h3>
                <ul className="space-y-2 font-body text-xs md:text-sm font-semibold text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <span className="text-pink">🐰</span>
                    <span>Crocheting mini pastel rabbits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink">☕</span>
                    <span>Drinking iced lavender lattes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink">📓</span>
                    <span>Hand-doodling bullet journals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink">✨</span>
                    <span>Refining CSS micro-animations</span>
                  </li>
                </ul>
              </motion.div>

              {/* Color Palette Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border-2 border-charcoal p-5 rounded-3xl shadow-[4px_4px_0px_#3D3D3D] relative"
              >
                <h3 className="font-display text-sm font-bold text-charcoal mb-3 flex items-center justify-between">
                  <span>🎨 Favorite Palette</span>
                  <span className="text-[10px] font-mono text-charcoal/40">interactive</span>
                </h3>
                
                {/* Swatch grid */}
                <div className="flex gap-2">
                  {colors.map((color, cIdx) => (
                    <motion.button
                      key={cIdx}
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        handleCopy(color.hex);
                        setTheme(color.name as ThemeName);
                      }}
                      onMouseEnter={() => setHoveredColor(color)}
                      onMouseLeave={() => setHoveredColor(null)}
                      className={`flex-1 flex flex-col bg-white border-2 rounded-xl overflow-hidden shadow-[2px_2px_0px_#3D3D3D] active:shadow-[1px_1px_0px_#3D3D3D] transition-all cursor-pointer text-left focus:outline-none ${
                        activeColor.hex === color.hex ? "border-charcoal ring-2 ring-charcoal/20" : "border-charcoal/65"
                      }`}
                    >
                      {/* Color block */}
                      <div
                        className="w-full aspect-[4/3] border-b-2 border-charcoal/80"
                        style={{ backgroundColor: color.hex }}
                      />
                      {/* Swatch details */}
                      <div className="p-1 flex flex-col items-center justify-center bg-white w-full">
                        <span className="text-[9px] font-display font-black text-charcoal leading-tight uppercase tracking-tight truncate w-full text-center">
                          {color.name}
                        </span>
                        <span className={`text-[7px] font-mono font-bold leading-none ${copiedHex === color.hex ? "text-pink font-extrabold" : "text-charcoal/50"}`}>
                          {copiedHex === color.hex ? "COPIED!" : color.hex}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Swatch Info display */}
                <div className="mt-4 p-3 bg-cream/10 border-2 border-dashed border-charcoal/20 rounded-2xl min-h-[92px] flex flex-col justify-center relative overflow-hidden bg-[radial-gradient(#CDB8FF_4%,transparent_4%)] bg-[size:10px_10px]">
                  <motion.div
                    key={activeColor.hex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col relative z-10"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-3.5 h-3.5 rounded-md border border-charcoal/30 shadow-[1px_1px_0px_rgba(0,0,0,0.15)] inline-block shrink-0"
                        style={{ backgroundColor: activeColor.hex }}
                      ></span>
                      <h4 className="font-display text-xs font-black text-charcoal">
                        {activeColor.name}
                      </h4>
                      <span className="text-[8px] font-display font-black text-charcoal/50 uppercase tracking-widest ml-auto border border-charcoal/30 px-1.5 py-0.5 rounded-md bg-white shadow-[1px_1px_0px_#3D3D3D]">
                        {activeColor.role}
                      </span>
                    </div>
                    <p className="font-body text-xs font-bold text-charcoal/70 leading-snug">
                      {activeColor.usage}
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Cozy Quote tape */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-yellow-doodle/30 border-2 border-charcoal border-dashed p-4 rounded-2xl flex items-center gap-3 relative"
              >
                <Quote className="w-8 h-8 text-charcoal/30 flex-shrink-0" />
                <p className="font-handwritten text-lg font-bold text-charcoal/70 leading-tight">
                  &quot;Made with ☕, yarn, creativity & code.&quot;
                </p>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
