"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, BookOpen, Star, Sparkles, X, ShieldAlert, MapPin } from "lucide-react";

// Doodles for Scrapbook Theme
const ScrapbookFlower = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Leaves */}
    <path d="M60 65 C55 80 40 85 35 85 C35 85 45 75 50 65 Z" fill="var(--color-sage)" stroke="var(--color-sage-dark)" strokeWidth="1.5" />
    <path d="M40 65 C45 80 60 85 65 85 C65 85 55 75 50 65 Z" fill="var(--color-sage)" stroke="var(--color-sage-dark)" strokeWidth="1.5" />
    {/* Petals */}
    <circle cx="50" cy="30" r="14" fill="var(--color-pink)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
    <circle cx="70" cy="45" r="14" fill="var(--color-pink)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
    <circle cx="62" cy="68" r="14" fill="var(--color-pink)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
    <circle cx="38" cy="68" r="14" fill="var(--color-pink)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
    <circle cx="30" cy="45" r="14" fill="var(--color-pink)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
    {/* Flower center */}
    <circle cx="50" cy="50" r="10" fill="var(--color-cream)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
  </svg>
);

const ScrapbookFlowerPurple = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Leaves */}
    <path d="M60 65 C55 80 40 85 35 85 C35 85 45 75 50 65 Z" fill="var(--color-sage)" stroke="var(--color-sage-dark)" strokeWidth="1.5" />
    <path d="M40 65 C45 80 60 85 65 85 C65 85 55 75 50 65 Z" fill="var(--color-sage)" stroke="var(--color-sage-dark)" strokeWidth="1.5" />
    {/* Petals */}
    <circle cx="50" cy="30" r="14" fill="var(--color-lavender)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
    <circle cx="70" cy="45" r="14" fill="var(--color-lavender)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
    <circle cx="62" cy="68" r="14" fill="var(--color-lavender)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
    <circle cx="38" cy="68" r="14" fill="var(--color-lavender)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
    <circle cx="30" cy="45" r="14" fill="var(--color-lavender)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
    {/* Flower center */}
    <circle cx="50" cy="50" r="10" fill="var(--color-cream)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
  </svg>
);

const ScrapbookHeartDotted = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M50 35 C50 15 20 15 20 40 C20 65 50 80 50 80 C50 80 80 65 80 40 C80 15 50 15 50 35 Z" 
      stroke="var(--color-charcoal)" 
      strokeWidth="1.5" 
      strokeDasharray="4 4" 
      strokeLinecap="round" 
    />
    <path 
      d="M50 80 Q 40 90 20 85 T 5 95" 
      stroke="var(--color-charcoal)" 
      strokeWidth="1.5" 
      strokeDasharray="4 4" 
      strokeLinecap="round" 
    />
  </svg>
);

const ScrapbookHeart = ({ className, color = "var(--color-pink)" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M50 35 C50 15 20 15 20 40 C20 65 50 80 50 80 C50 80 80 65 80 40 C80 15 50 15 50 35 Z" 
      fill={color} 
      stroke="var(--color-charcoal)" 
      strokeWidth="1.5" 
    />
  </svg>
);

const ScrapbookSparkle = ({ className, color = "var(--color-lavender)" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 C50 40 40 50 10 50 C40 50 50 60 50 90 C50 60 60 50 90 50 C60 50 50 40 50 10 Z" stroke="var(--color-charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

interface TimelineItem {
  id: number;
  type: "work" | "education";
  date: string;
  title: string;
  institution: string;
  location: string;
  techs?: string[];
  image: string;
  imageCaption: string;
  imageAlt: string;
  tapeColor?: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  idCode: string;
  color: string;
  image?: string;
}

export default function Timeline() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [activeTimelineItem, setActiveTimelineItem] = useState<TimelineItem | null>(null);

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: "work",
      date: "May 2025 — Jul 2025",
      title: "Software Development Engineer Intern",
      institution: "Flipkart • Payment Infrastructure",
      location: "Bengaluru, India",
      techs: ["Java 17", "Dropwizard", "JUnit & Mockito", "REST APIs", "PCI-DSS Tokenization"],
      image: "/assets/flipkart_polaroid.jpg",
      imageCaption: "Flipped good days! 🛍️",
      imageAlt: "Flipkart office space & memory collage",
      tapeColor: "washi-tape-sage",
    },
    {
      id: 2,
      type: "education",
      date: "2023 — 2027",
      title: "B.Tech in Information Technology",
      institution: "Aditya College of Engineering and Technology",
      location: "Andhra Pradesh, India",
      techs: ["Data Structures", "Algorithms", "Database Systems", "Operating Systems", "Web Engineering"],
      image: "/assets/college_polaroid.jpg",
      imageCaption: "My University College Days 🎓",
      imageAlt: "Aditya University memory collage",
      tapeColor: "washi-tape-blue",
    },
    {
      id: 3,
      type: "education",
      date: "2021 — 2023",
      title: "Intermediate Education (Class XII)",
      institution: "Sri Sai Aditya Junior College",
      location: "Andhra Pradesh, India",
      techs: ["Mathematics (MPC)", "Physics", "Chemistry", "English Communications"],
      image: "/assets/junior_college_polaroid.jpg",
      imageCaption: "Aditya Junior College ♡",
      imageAlt: "Sri Sai Aditya Junior College campus polaroid",
      tapeColor: "washi-tape-lavender",
    },
    {
      id: 4,
      type: "education",
      date: "2020 — 2021",
      title: "Secondary School Certificate (Class X)",
      institution: "St. Ann's Gloria English Medium High School",
      location: "Andhra Pradesh, India",
      techs: ["Science & Tech", "Mathematics", "Social Sciences", "English Literature"],
      image: "/assets/school_polaroid.jpg",
      imageCaption: "Some places stay with you, forever. ♡",
      imageAlt: "St. Ann's Gloria High School building polaroid",
      tapeColor: "washi-tape-pink",
    },
  ];

  const certifications: Certification[] = [
    {
      id: "github",
      name: "GitHub Foundations",
      issuer: "GitHub (Microsoft)",
      date: "May 2026",
      idCode: "45BAA9E513C5A316 / DA380R-9AE35F",
      color: "#24292E",
      image: "/assets/cert_github.png",
    },
    {
      id: "oracle",
      name: "Oracle Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Dec 2025",
      idCode: "319309928JAVA8OJA",
      color: "#E76F51",
      image: "/assets/cert_oracle.png",
    },
    {
      id: "html_css",
      name: "Information Technology Specialist - HTML and CSS",
      issuer: "Certiport / Pearson VUE",
      date: "Aug 2024",
      idCode: "wCwr7-48eh",
      color: "#13A0B3",
      image: "/assets/cert_html_css.png",
    },
    {
      id: "mongodb",
      name: "MongoDB Certified Associate Developer",
      issuer: "MongoDB, Inc.",
      date: "Apr 2026",
      idCode: "MDBicsh41irp6",
      color: "#00684A",
      image: "/assets/cert_mongodb.png",
    },
    {
      id: "hackerrank_python",
      name: "HackerRank Python (Basic) Certification",
      issuer: "HackerRank",
      date: "Jan 2025",
      idCode: "2AC67E169FD0",
      color: "#2EC866",
      image: "/assets/cert_hackerrank_python.png",
    },
    {
      id: "nptel",
      name: "Introduction to Industry 4.0 and Industrial Internet of Things",
      issuer: "NPTEL Online Certification (IIT Kharagpur)",
      date: "Apr 2026",
      idCode: "NPTEL26CS38S1157200101",
      color: "#9B1B30",
      image: "/assets/cert_nptel.png",
    },
    {
      id: "hackerrank_sql_basic",
      name: "HackerRank SQL (Basic) Certification",
      issuer: "HackerRank",
      date: "Feb 2025",
      idCode: "00E3FE36E4ED",
      color: "#2EC866",
      image: "/assets/cert_hackerrank_sql_basic.png",
    },
    {
      id: "hackerrank_sql_intermediate",
      name: "HackerRank SQL (Intermediate) Certification",
      issuer: "HackerRank",
      date: "Feb 2025",
      idCode: "CD74C27890B1",
      color: "#2EC866",
      image: "/assets/cert_hackerrank_sql_intermediate.png",
    },
  ];

  return (
    <section id="timeline" className="py-20 relative bg-cream/10">
      {/* Decorative Stars */}
      <div className="absolute top-[30%] left-[4%] w-8 h-8 text-pink animate-pulse-subtle opacity-40">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center relative">
          <span className="font-handwritten text-3xl text-pink font-bold block mb-1 rotate-[-3deg]">
            journey & experience
          </span>
          <h2 className="font-display text-4xl font-bold text-charcoal flex items-center justify-center gap-2">
            <span>Experience & Timeline</span>
            <BookOpen className="w-6 h-6 text-pink" />
          </h2>
          <div className="mt-2 w-32 h-1.5 bg-lavender mx-auto rounded-full border border-charcoal/30"></div>
        </div>

        {/* Experience & Education Notebook Container */}
        <div className="mb-20">

          {/* Timeline Journal */}
          <div className="space-y-12 relative pl-8 md:pl-12 border-l-2 border-dashed border-pink/30">
            {timelineData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white border border-charcoal/10 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 hover:translate-y-[-2px] transition-transform h-[470px] sm:h-[440px] md:h-[270px] w-full"
              >
                {/* Visual Dot on dashed border */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-[9px] w-4 h-4 bg-lilac border border-charcoal rounded-full flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 bg-charcoal rounded-full"></div>
                </div>

                {/* Left Content Column */}
                <div className="flex-grow flex flex-col w-full text-left justify-between h-[220px] sm:h-[200px] md:h-full">
                  <div>
                    {/* Duration Label */}
                    <div className="flex items-center gap-2 mb-2 text-xs md:text-sm font-semibold font-display text-charcoal/60">
                      <Calendar className="w-4 h-4 text-pink" />
                      <span>{item.date}</span>
                      <span className="text-charcoal/40">•</span>
                      <MapPin className="w-4 h-4 text-pink" />
                      <span>{item.location}</span>
                    </div>

                    {/* Title */}
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                        {item.title}
                      </h3>
                      <span className="text-xs font-bold px-3 py-0.5 rounded-full border border-charcoal/20 bg-lilac/25 text-charcoal flex items-center gap-1">
                        {item.type === "work" ? <Briefcase className="w-3 h-3 text-peach" /> : <GraduationCap className="w-3.5 h-3.5 text-blue" />}
                        {item.type === "work" ? "Job" : "Education"}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-medium text-blue/90 mt-2">
                      {item.institution}
                    </h4>
                  </div>

                  {/* Tech chips if job */}
                  {item.techs && (
                    <div className="mt-4 pt-3 border-t border-charcoal/20 flex flex-wrap gap-2">
                      {item.techs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[10px] md:text-xs font-bold font-display bg-peach/10 border border-charcoal/30 rounded-full text-charcoal"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Polaroid/Collage Photo Column */}
                <div className="relative shrink-0 flex items-center justify-center p-2 mt-4 md:mt-0 select-none">
                  {/* Subtle, non-overlapping doodles around the card */}
                  {item.id === 1 && (
                    <>
                      <ScrapbookHeart className="absolute -left-9 top-4 w-8 h-8 rotate-[-15deg] pointer-events-none" />
                      <ScrapbookFlower className="absolute -right-7 -bottom-3 w-10 h-10 rotate-[20deg] pointer-events-none" />
                    </>
                  )}
                  {item.id === 2 && (
                    <>
                      <ScrapbookSparkle className="absolute -left-7 -top-5 w-6 h-6 rotate-[12deg] pointer-events-none" />
                      <ScrapbookFlowerPurple className="absolute -right-8 -bottom-3 w-10 h-10 rotate-[-12deg] pointer-events-none" />
                    </>
                  )}
                  {item.id === 3 && (
                    <>
                      <ScrapbookSparkle className="absolute -right-6 -top-3 w-6 h-6 rotate-[15deg] pointer-events-none" />
                      <ScrapbookHeart className="absolute -left-9 bottom-3 w-8 h-8 rotate-[-12deg] pointer-events-none" />
                    </>
                  )}
                  {item.id === 4 && (
                    <>
                      <ScrapbookFlower className="absolute -left-9 -bottom-4 w-10 h-10 rotate-[-20deg] pointer-events-none" />
                      <ScrapbookSparkle className="absolute -right-5 -top-5 w-6 h-6 rotate-[10deg] pointer-events-none" />
                    </>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? -1 : 1 }}
                    onClick={() => setActiveTimelineItem(item)}
                    className="relative cursor-pointer bg-white p-2.5 border-2 border-charcoal shadow-[6px_6px_0px_#3D3D3D] rounded-2xl transition-all duration-300 w-[150px] sm:w-[180px] md:w-[220px] group"
                    style={{
                      transform: idx % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)"
                    }}
                  >
                    {/* Decorative tape overlay on the card frame */}
                    <div className={`washi-tape ${item.tapeColor || 'washi-tape-pink'} -top-3.5 left-1/2 -translate-x-1/2 rotate-[-2deg] w-20 h-6.5 opacity-90 group-hover:opacity-100 transition-opacity`}></div>

                    {/* Image Frame */}
                    <div className="w-full aspect-[4/3] bg-cream border border-charcoal/40 rounded-xl overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover block grayscale-[8%] sepia-[4%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-300"
                      />
                      
                      {/* Click to zoom overlay */}
                      <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="bg-white/95 border border-charcoal text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow-sm">
                          Click to zoom 🔍
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* Certifications Section */}
        <div className="relative mt-12">
          <div className="mb-8">
            <h3 className="font-display text-3xl font-bold text-charcoal flex items-center gap-2">
              <Award className="w-8 h-8 text-pink" />
              <span>Certifications</span>
            </h3>
            <div className="w-32 h-1.5 bg-pink mt-2 rounded-full border border-charcoal/20"></div>
          </div>

          {/* Certifications Infinite Scroll Wrapper */}
          <div className="relative w-full overflow-hidden py-6">
            {/* Fade overlays on both ends for visual polish */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream/10 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream/10 to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee">
              {/* Copy 1 */}
              <div className="flex gap-8 px-4">
                {certifications.map((cert) => (
                  <motion.div
                    key={`${cert.id}-copy1`}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onClick={() => setActiveCert(cert)}
                    className="relative cursor-pointer bg-white border-2 border-charcoal rounded-3xl p-5 md:p-6 shadow-[6px_6px_0px_rgba(61,61,61,0.8)] overflow-hidden flex flex-col justify-between aspect-[1.3] w-[260px] sm:w-[320px] md:w-[360px] shrink-0 group"
                  >
                    {/* Border line */}
                    <div
                      className="absolute inset-2 border border-dashed rounded-lg opacity-60 pointer-events-none"
                      style={{ borderColor: cert.color }}
                    ></div>

                    <div className="relative z-10 pt-2 pl-2 pr-2">
                      <span className="text-[10px] md:text-xs uppercase font-bold text-charcoal/40 tracking-wider">
                        {cert.issuer}
                      </span>
                      <h4 className="font-display text-sm sm:text-base md:text-lg font-bold text-charcoal mt-1 line-clamp-2 leading-snug">
                        {cert.name}
                      </h4>
                    </div>

                    <div className="relative z-10 flex items-center justify-between pl-2 pr-2 pb-2">
                      <span className="font-display text-[10px] md:text-xs font-bold text-charcoal/60 bg-cream border border-charcoal/20 px-2.5 py-0.5 rounded-full">
                        {cert.date}
                      </span>
                      <div
                        className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-charcoal/60 flex items-center justify-center text-white"
                        style={{ backgroundColor: cert.color }}
                      >
                        <Award className="w-4 h-4 md:w-4.5 md:h-4.5" />
                      </div>
                    </div>

                    {/* Hover cover */}
                    <div className="absolute inset-0 bg-lavender/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      <span className="font-display text-xs md:text-sm font-extrabold text-charcoal">Click to view</span>
                      <span className="font-handwritten text-base md:text-lg text-charcoal font-bold mt-1">certificate 📜</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Copy 2 */}
              <div className="flex gap-8 px-4">
                {certifications.map((cert) => (
                  <motion.div
                    key={`${cert.id}-copy2`}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onClick={() => setActiveCert(cert)}
                    className="relative cursor-pointer bg-white border-2 border-charcoal rounded-3xl p-5 md:p-6 shadow-[6px_6px_0px_rgba(61,61,61,0.8)] overflow-hidden flex flex-col justify-between aspect-[1.3] w-[260px] sm:w-[320px] md:w-[360px] shrink-0 group"
                  >
                    {/* Border line */}
                    <div
                      className="absolute inset-2 border border-dashed rounded-lg opacity-60 pointer-events-none"
                      style={{ borderColor: cert.color }}
                    ></div>

                    <div className="relative z-10 pt-2 pl-2 pr-2">
                      <span className="text-[10px] md:text-xs uppercase font-bold text-charcoal/40 tracking-wider">
                        {cert.issuer}
                      </span>
                      <h4 className="font-display text-sm sm:text-base md:text-lg font-bold text-charcoal mt-1 line-clamp-2 leading-snug">
                        {cert.name}
                      </h4>
                    </div>

                    <div className="relative z-10 flex items-center justify-between pl-2 pr-2 pb-2">
                      <span className="font-display text-[10px] md:text-xs font-bold text-charcoal/60 bg-cream border border-charcoal/20 px-2.5 py-0.5 rounded-full">
                        {cert.date}
                      </span>
                      <div
                        className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-charcoal/60 flex items-center justify-center text-white"
                        style={{ backgroundColor: cert.color }}
                      >
                        <Award className="w-4 h-4 md:w-4.5 md:h-4.5" />
                      </div>
                    </div>

                    {/* Hover cover */}
                    <div className="absolute inset-0 bg-lavender/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      <span className="font-display text-xs md:text-sm font-extrabold text-charcoal">Click to view</span>
                      <span className="font-handwritten text-base md:text-lg text-charcoal font-bold mt-1">certificate 📜</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Zoom Modal (Lightbox) */}
        <AnimatePresence>
          {activeCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 backdrop-blur-sm p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: -1 }}
                className="relative bg-white border-4 border-charcoal rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-[12px_12px_0px_#3D3D3D]"
                style={{ "--cert-border-color": activeCert.color } as React.CSSProperties}
              >
                {/* Washi Tape */}
                <div className="washi-tape washi-tape-pink -top-5 left-10 w-28 h-7"></div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveCert(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full border-2 border-charcoal bg-peach/25 hover:bg-peach/40 text-charcoal cursor-pointer transition-all z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {activeCert.image ? (
                  <div className="flex flex-col items-center pt-2">
                    <div className="text-center mb-4">
                      <span className="text-[10px] md:text-xs uppercase font-bold text-charcoal/40 tracking-wider">
                        {activeCert.issuer}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-charcoal mt-1 leading-snug">
                        {activeCert.name}
                      </h3>
                    </div>

                    {/* Certificate Image Frame */}
                    <div className="w-full border-4 border-charcoal bg-cream rounded-2xl overflow-hidden shadow-[4px_4px_0px_rgba(61,61,61,0.5)] relative">
                      <img
                        src={activeCert.image}
                        alt={activeCert.name}
                        className="w-full max-h-[50vh] object-contain mx-auto"
                      />
                    </div>

                    <div className="mt-6 pt-4 border-t border-charcoal/30 w-full grid grid-cols-2 gap-4 items-center">
                      <div className="text-left">
                        <span className="block text-[10px] uppercase font-bold text-charcoal/40">Credential ID</span>
                        <span className="font-display text-xs font-bold text-charcoal select-all">{activeCert.idCode}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] uppercase font-bold text-charcoal/40">Date Issued</span>
                        <span className="font-display text-xs font-bold text-charcoal">{activeCert.date}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Certificate Border Details Fallback */
                  <div className="border-4 border-dashed p-6 rounded-2xl flex flex-col items-center text-center relative" style={{ borderColor: activeCert.color }}>
                    {/* Decorative gold seal background */}
                    <div className="absolute top-3 right-3 text-lavender opacity-10 pointer-events-none">
                      <Award className="w-32 h-32 stroke-[0.5]" />
                    </div>

                    <span className="font-handwritten text-2xl text-pink font-bold rotate-[-3deg] mb-1">
                      certificated!
                    </span>
                    <span className="text-[10px] uppercase font-bold text-charcoal/40 tracking-wider">
                      {activeCert.issuer}
                    </span>

                    <h3 className="font-display text-2xl font-bold text-charcoal mt-4 mb-2 underline decoration-wavy decoration-lavender underline-offset-4">
                      {activeCert.name}
                    </h3>

                    <p className="font-body text-xs md:text-sm font-semibold text-charcoal/70 max-w-sm mt-3 leading-relaxed">
                      This certifies that Penke Bhavya Teja has demonstrated competency and completed all program requirements.
                    </p>

                    <div className="mt-8 pt-4 border-t border-charcoal/30 w-full grid grid-cols-2 gap-4 items-center">
                      <div className="text-left">
                        <span className="block text-[10px] uppercase font-bold text-charcoal/40">Credential ID</span>
                        <span className="font-display text-xs font-bold text-charcoal">{activeCert.idCode}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] uppercase font-bold text-charcoal/40">Date Issued</span>
                        <span className="font-display text-xs font-bold text-charcoal">{activeCert.date}</span>
                      </div>
                    </div>

                    {/* Gold seal */}
                    <div className="mt-6 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-2 border-charcoal flex items-center justify-center shadow-[3px_3px_0px_#3D3D3D]" style={{ backgroundColor: activeCert.color }}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Timeline Photo Zoom Modal (Lightbox) */}
        <AnimatePresence>
          {activeTimelineItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 backdrop-blur-sm p-4 select-none animate-fade-in" onClick={() => setActiveTimelineItem(null)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                onClick={(e) => e.stopPropagation()} // Prevent close on clicking modal body
                className="relative bg-white border-4 border-charcoal rounded-3xl p-5 sm:p-6 max-w-2xl w-full shadow-[12px_12px_0px_#3D3D3D]"
              >
                {/* Washi Tape */}
                <div className={`washi-tape ${activeTimelineItem.tapeColor || 'washi-tape-pink'} -top-5 left-1/2 -translate-x-1/2 w-32 h-7.5`}></div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveTimelineItem(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full border-2 border-charcoal bg-peach/25 hover:bg-peach/40 text-charcoal cursor-pointer transition-all z-20 animate-pulse-subtle"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Full-size Image Frame */}
                <div className="border-4 border-charcoal bg-cream rounded-2xl overflow-hidden shadow-[4px_4px_0px_rgba(61,61,61,0.5)] mt-3">
                  <img
                    src={activeTimelineItem.image}
                    alt={activeTimelineItem.imageAlt}
                    className="w-full max-h-[68vh] object-contain mx-auto"
                  />
                </div>

                {/* Text Context */}
                <div className="mt-4 text-center">
                  <h4 className="font-display text-xl font-bold text-charcoal">
                    {activeTimelineItem.title}
                  </h4>
                  <p className="font-display text-sm font-medium text-blue/90 mt-1">
                    {activeTimelineItem.institution}
                  </p>
                  <p className="font-handwritten text-lg text-pink font-bold mt-2 rotate-[-1deg]">
                    {activeTimelineItem.imageCaption}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
