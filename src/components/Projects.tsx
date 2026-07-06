"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  bgColor: string;
  tapeColor: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "GuardHub",
      subtitle: "Security Workforce Management",
      description:
        "A full-stack workforce manager currently active for 150+ security personnel. Built features for automated attendance tracking, conflict-free shift scheduling, instant mobile notifications, and biometric log synchronizations via Cron jobs.",
      tags: ["React", "Node.js", "MongoDB", "REST APIs", "Cron Jobs"],
      image: "/assets/project_guardhub_v2.png",
      github: "https://github.com/BhavyaTejaP",
      demo: "https://github.com/BhavyaTejaP",
      bgColor: "bg-lavender/30",
      tapeColor: "washi-tape-pink",
    },
    {
      id: 2,
      title: "Smart Campus Platform",
      subtitle: "Full-Stack App & AI/ML Moderation",
      description:
        "A scalable mobile application supporting 1000+ campus users. Integrates lost & found discovery grids, a peer-to-peer marketplace, secure JWT logins, and Python-based image similarity matching alongside automated text/content moderation models.",
      tags: ["React Native", "Node.js", "MongoDB", "Python", "AI/ML"],
      image: "/assets/project_campus_v2.png",
      github: "https://github.com/BhavyaTejaP",
      demo: "https://github.com/BhavyaTejaP",
      bgColor: "bg-peach/35",
      tapeColor: "washi-tape-blue",
    },
    {
      id: 3,
      title: "Spam Email Detector",
      subtitle: "Natural Language Processing (NLP)",
      description:
        "An intelligent message classifier built with Python. Uses TF-IDF tokenization and a Multinomial Naive Bayes classifier, successfully screening 5,500+ messages on the SMS Spam Collection dataset with a verified 96.6% detection accuracy.",
      tags: ["Python", "NLP", "Scikit-Learn", "Machine Learning"],
      image: "/assets/project_spam_v2.png",
      github: "https://github.com/BhavyaTejaP",
      demo: "https://github.com/BhavyaTejaP",
      bgColor: "bg-blue/25",
      tapeColor: "washi-tape-sage",
    },
  ];

  return (
    <section id="projects" className="py-20 relative bg-cream/10">
      {/* Decorative stars */}
      <div className="absolute top-10 left-[15%] w-8 h-8 text-pink animate-float">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-60">
          <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center relative">
          <span className="font-handwritten text-3xl text-pink font-bold block mb-1 rotate-[2deg]">
            things I built
          </span>
          <h2 className="font-display text-4xl font-bold text-charcoal flex items-center justify-center gap-2">
            <span>Featured Projects</span>
            <Sparkles className="w-6 h-6 text-pink" />
          </h2>
          <div className="mt-2 w-32 h-1.5 bg-lavender mx-auto rounded-full border border-charcoal/30"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ rotate: index % 2 === 0 ? -1.5 : 1.5, y: -6 }}
              className={`relative border-2 border-charcoal rounded-3xl p-5 shadow-[6px_6px_0px_#3D3D3D] flex flex-col justify-between overflow-hidden transition-all ${project.bgColor}`}
            >
              {/* Floating Star */}
              <div className="absolute top-3 right-3 text-pink opacity-40 animate-pulse-subtle">
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Tape */}
              <div className={`washi-tape ${project.tapeColor} -top-3 left-1/3 w-20 h-6`}></div>

              <div>
                {/* Project Image Frame (Scrapbook Polaroid Style) */}
                <div 
                  className="relative bg-white p-3 pb-8 border-2 border-charcoal rounded-2xl shadow-[4px_4px_0px_#3D3D3D] mb-8 hover:scale-[1.02] transition-transform duration-200"
                  style={{
                    transform: index % 2 === 0 ? "rotate(-1.5deg)" : "rotate(1.5deg)"
                  }}
                >
                  <div className="relative w-full aspect-[4/3] bg-cream border-2 border-charcoal rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-w-780px) 100vw, 33vw"
                      className="object-cover grayscale-[5%] sepia-[3%] hover:grayscale-0 transition-all duration-300"
                      priority={index < 2}
                    />
                  </div>
                  {/* Polaroid caption at bottom of photo card */}
                  <p className="absolute bottom-1.5 left-1/2 -translate-x-1/2 font-handwritten text-xs font-bold text-charcoal/80 whitespace-nowrap">
                    📸 {project.title} snapshot
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 min-h-[60px] items-start content-start">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] md:text-xs font-bold font-display bg-white/70 border border-charcoal/40 text-charcoal rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Subtitle Group */}
                <div className="min-h-[64px] flex flex-col justify-start mb-3">
                  <h3 className="font-display text-xl font-bold text-charcoal leading-tight">
                    {project.title}
                  </h3>
                  <h4 className="font-display text-xs font-semibold text-charcoal/60">
                    {project.subtitle}
                  </h4>
                </div>

                {/* Description */}
                <p className="font-body font-semibold text-charcoal/80 text-xs md:text-sm leading-relaxed mb-6 min-h-[105px]">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 font-display text-xs font-bold text-charcoal bg-white border-2 border-charcoal rounded-2xl flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#3D3D3D] hover:bg-peach/20 active:translate-y-[1px] active:shadow-[1px_1px_0px_#3D3D3D] transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 font-display text-xs font-bold text-charcoal bg-white border-2 border-charcoal rounded-2xl flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#3D3D3D] hover:bg-lavender/20 active:translate-y-[1px] active:shadow-[1px_1px_0px_#3D3D3D] transition-all cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </a>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
