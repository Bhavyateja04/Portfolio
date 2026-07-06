"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Coffee, BookOpen, PenTool, Sparkles } from "lucide-react";

export default function About() {
  const interests = [
    { name: "Crochet", emoji: "🧶", desc: "Making cute amigurumi toys & warm scarves" },
    { name: "Doodles", emoji: "🎨", desc: "Drawing small sketches & creative doodles" },
    { name: "DIY Crafts", emoji: "✂️", desc: "Scrapbooks, greeting cards & handcrafted gifts" },
    { name: "UI Design", emoji: "💻", desc: "Designing dreamy, cozy & accessible interfaces" },
    { name: "Coffee", emoji: "☕", desc: "Fueled by iced lattes & hot filter coffee" },
    { name: "Learning", emoji: "🌸", desc: "Deep diving into new web techs & AI frameworks" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 right-[15%] w-8 h-8 text-pink animate-pulse-subtle">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-8">

        {/* Section Header */}
        <div className="mb-12 text-center relative">
          <span className="font-handwritten text-3xl text-pink font-bold block mb-1 rotate-[-2deg]">
            meet bhavya!
          </span>
          <h2 className="font-display text-4xl font-bold text-charcoal flex items-center justify-center gap-2">
            <span>About Me</span>
            <Heart className="w-6 h-6 text-pink fill-pink animate-pulse-subtle" />
          </h2>
          <div className="mt-2 w-32 h-1.5 bg-lavender mx-auto rounded-full border border-charcoal/30"></div>
        </div>

        {/* Scrapbook Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Scrapbook Paper Card: Biography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-12 scrapbook-paper notebook-grid p-8 lg:p-12 relative w-full"
          >
            {/* Washi tape decoration */}
            <div className="washi-tape washi-tape-blue -top-4 left-6 w-24 h-7"></div>

            <h3 className="font-display text-2xl font-bold text-charcoal mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue" />
              My Story
            </h3>

            <div className="space-y-4 font-body text-charcoal/80 font-medium leading-relaxed">
              <p>
                Hi there! 🌸 I&apos;m <strong>Bhavya</strong>, a final-year Information Technology student at{" "}
                <strong>Aditya College of Engineering and Technology</strong>. I enjoy turning ideas into projects that are clean, useful, and fun to build. Every new challenge is a chance to learn something exciting.
              </p>

              <p>
                I recently completed my Software Development Engineer internship at{" "}
                <strong>Flipkart</strong>, where I worked on payment systems using Java and REST APIs. It was my first experience building software at scale, and it taught me the value of writing reliable, efficient, and maintainable code.
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll probably find me crocheting, making scrapbook-style DIY crafts, or doodling cute little designs. Those hobbies remind me that the smallest details often make the biggest difference—and I carry that same mindset into every project I build. ✨🧶
              </p>
            </div>

            {/* Notebook Ring decorations */}
            <div className="absolute top-8 -right-3 flex flex-col gap-6">
              <div className="binder-ring"></div>
              <div className="binder-ring"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

{/* Sticky Note: Things I Love */ }
{/* <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-pink/30 border-2 border-charcoal shadow-[4px_4px_0px_#3D3D3D] rounded-3xl p-6 relative"
          >
            {/* Washi tape decoration */}
{/* <div className="washi-tape washi-tape-lavender -top-4 right-10 w-24 h-7 rotate-[4deg]"></div> */ }

{/* <h3 className="font-display text-2xl font-bold text-charcoal mb-4 flex items-center gap-2">
              <PenTool className="w-6 h-6 text-pink" />
              Creative Corner
            </h3>

            <p className="font-handwritten text-lg font-bold text-charcoal/80 mb-4">
              ✨ things that make me smile:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 p-3 rounded-2xl border-2 border-charcoal/50 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{interest.emoji}</span>
                    <span className="font-display text-sm font-bold text-charcoal">{interest.name}</span>
                  </div>
                  <p className="text-xs text-charcoal/70 font-body font-semibold leading-tight">
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div> */}

{/* Doodle flower in corner */ }
{/* <div className="absolute -bottom-4 -left-4 w-12 h-12 text-yellow-doodle animate-float">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                <circle cx="50" cy="50" r="16" fill="#3D3D3D" />
                <circle cx="50" cy="20" r="16" />
                <circle cx="50" cy="80" r="16" />
                <circle cx="20" cy="50" r="16" />
                <circle cx="80" cy="50" r="16" />
                <circle cx="50" cy="50" r="12" className="text-yellow-doodle" />
              </svg>
            </div> */}
{/* </div> </motion.div>

        </div>

      </div>
    </section> */}