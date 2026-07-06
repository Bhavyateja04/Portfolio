"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, Code, Database, Layers, CheckCircle2, X } from "lucide-react";

interface SkillItem {
  name: string;
  desc: string;
}

interface SkillCategory {
  title: string;
  colorClass: string; // Tailwind class for background
  tapeColor: string; // washi tape style class
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; desc: string } | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      colorClass: "bg-peach/30",
      tapeColor: "washi-tape-lavender",
      icon: <Terminal className="w-5 h-5 text-peach" />,
      skills: [
        { name: "Java", desc: "Core language for enterprise systems, multi-threading, OOP designs, and backend services." },
        { name: "Python", desc: "Used for scripting, NLP models, backend API development, and ML prototyping." },
        { name: "C / C++", desc: "Foundational programming for competitive coding and efficient algorithms." },
        { name: "SQL", desc: "Database query writing, multi-table joins, transactions, and schema management." },
        { name: "JavaScript", desc: "Interactive scripts, frontend styling logic, and backend runtime scripts." },
      ],
    },
    {
      title: "Frontend",
      colorClass: "bg-lavender/30",
      tapeColor: "washi-tape-blue",
      icon: <Layers className="w-5 h-5 text-lavender" />,
      skills: [
        { name: "React.js", desc: "Component-based single page applications, custom hooks, and state management." },
        { name: "React Native", desc: "Cross-platform mobile application development with shared JavaScript codes." },
        { name: "Tailwind CSS", desc: "Utility-first frameworks for rapid, customizable, and modern visual stylings." },
        { name: "HTML5 & CSS3", desc: "Semantic page structures, responsive layouts, layouts grid, and CSS animations." },
      ],
    },
    {
      title: "Backend",
      colorClass: "bg-blue/20",
      tapeColor: "washi-tape-sage",
      icon: <Code className="w-5 h-5 text-blue" />,
      skills: [
        { name: "Node.js & Express", desc: "Scalable network services, routing middleware, and asynchronous APIs." },
        { name: "Dropwizard", desc: "Java-based high performance RESTful web service frameworks (used at Flipkart)." },
        { name: "Django", desc: "Python framework for rapid server construction, built-in admin, and MVC patterns." },
        { name: "REST APIs", desc: "JSON payloads, token authentication, endpoint structuring, and rate limits." },
        { name: "Microservices", desc: "Loosely-coupled service architectures communicating via RPC or HTTP protocols." },
      ],
    },
    {
      title: "Databases",
      colorClass: "bg-sage/40",
      tapeColor: "washi-tape-lavender",
      icon: <Database className="w-5 h-5 text-sage-dark" />,
      skills: [
        { name: "MongoDB", desc: "NoSQL document storage, flexible BSON schemas, aggregation pipelines, and indexing." },
        { name: "MySQL", desc: "Relational database transactions, schema relationships, and query optimizations." },
        { name: "PostgreSQL", desc: "Object-relational features, indexing tables, triggers, and query analysis." },
        { name: "Schema Design", desc: "Structuring relational and non-relational tables for optimal read/write ratios." },
      ],
    },
    {
      title: "Tools & DevOps",
      colorClass: "bg-pink/30",
      tapeColor: "washi-tape-blue",
      icon: <Sparkles className="w-5 h-5 text-pink" />,
      skills: [
        { name: "Git & GitHub", desc: "Branching, pull request reviews, commit safety, version tags, and conflict resolves." },
        { name: "Docker", desc: "Containerizing application codes, multi-container compose, and deployment packaging." },
        { name: "CI/CD Pipelines", desc: "Automating builds, security audits, test executions, and direct cloud releases." },
        { name: "Postman", desc: "API request builder, automated test assertions, and integration validations." },
      ],
    },
    {
      title: "Core CS",
      colorClass: "bg-yellow-doodle/20",
      tapeColor: "washi-tape-sage",
      icon: <CheckCircle2 className="w-5 h-5 text-charcoal" />,
      skills: [
        { name: "DSA & Algorithms", desc: "Data structure selections (Trees, Graphs, DP), sorting speeds, and complexity reviews." },
        { name: "System Design", desc: "High availability, load balancer layers, database replication, and cache proxies." },
        { name: "Android Dev", desc: "Native Android application flows, activity scopes, and layout layouts." },
        { name: "Agile & Scrum", desc: "Sprint boards, ticket timelines, continuous feedbacks, and modular launches." },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-cream/30">
      {/* Decorative handdrawn arrow */}
      <div className="absolute top-[10%] left-[8%] hidden md:block w-16 h-16 text-blue opacity-50 transform rotate-[-45deg] scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full">
          <path d="M10,90 Q50,90 80,40" strokeLinecap="round" />
          <path d="M80,40 L60,35 M80,40 L85,60" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center relative">
          <span className="font-handwritten text-3xl text-blue font-bold block mb-1 rotate-[3deg]">
            what I work with
          </span>
          <h2 className="font-display text-4xl font-bold text-charcoal flex items-center justify-center gap-2">
            <span>Skills & Tech Stack</span>
            <Sparkles className="w-6 h-6 text-peach animate-spin-slow" />
          </h2>
          <div className="mt-2 w-32 h-1.5 bg-pink mx-auto rounded-full border border-charcoal/30"></div>
          <p className="mt-4 font-body font-semibold text-charcoal/70 text-sm">
            ✨ Click on any skill tag to view more details!
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative border-2 border-charcoal rounded-3xl p-6 shadow-[6px_6px_0px_#3D3D3D] ${cat.colorClass}`}
            >
              {/* Tape */}
              <div className={`washi-tape ${cat.tapeColor} -top-4 left-1/2 -translate-x-1/2`}></div>

              {/* Title */}
              <div className="flex items-center gap-2 mb-6 border-b-2 border-charcoal/30 pb-3">
                <div className="p-2 bg-white border border-charcoal/60 rounded-xl shadow-[2px_2px_0px_#3D3D3D]">
                  {cat.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal">{cat.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setSelectedSkill(skill)}
                    className="px-3.5 py-1.5 font-display text-xs md:text-sm font-semibold bg-white border-2 border-charcoal/75 hover:bg-yellow-doodle/40 active:translate-y-[1px] hover:translate-y-[-1px] rounded-full shadow-[2px_2px_0px_rgba(61,61,61,0.8)] cursor-pointer transition-all"
                  >
                    {skill.name}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Modal for Skill Details */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 backdrop-blur-sm p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                className="relative bg-white border-2 border-charcoal rounded-3xl p-6 shadow-[8px_8px_0px_#3D3D3D] max-w-sm w-full notebook-grid"
              >
                {/* Washi tape */}
                <div className="washi-tape washi-tape-lavender -top-4 left-10 w-24 h-7"></div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-1 rounded-full border border-charcoal/40 bg-peach/20 hover:bg-peach/40 text-charcoal cursor-pointer transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mt-4">
                  <h4 className="font-display text-2xl font-bold text-charcoal underline decoration-lavender decoration-wavy underline-offset-4 mb-3">
                    {selectedSkill.name}
                  </h4>
                  <p className="font-body font-semibold text-charcoal/80 text-base leading-relaxed">
                    {selectedSkill.desc}
                  </p>
                </div>

                <div className="mt-6 text-right">
                  <span className="font-handwritten text-lg text-pink font-bold">
                    - scrapbook notes 🌸
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
