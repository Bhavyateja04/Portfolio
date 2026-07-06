"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import {
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
  SiHackerrank,
} from "react-icons/si";
interface CodingProfile {
  id: string;
  name: string;
  url: string;
  solvedCount: string;
  rating: string;
  streak: string;
  badge: string;
  color: string;
  bgColor: string;
  tapeColor: string;
  tags: string[];
}

export default function CodingProfiles() {
  const profiles: CodingProfile[] = [
    {
      id: "leetcode",
      name: "LeetCode",
      url: "https://leetcode.com/u/bhavyapenke/",
      solvedCount: "400+ Solved",
      rating: "1400+ contest rating",
      streak: "Active Daily Streak",
      badge: "100-Days Badge",
      color: "#FFA116",
      bgColor: "bg-peach/35",
      tapeColor: "washi-tape-lavender",
      tags: ["Arrays", "DP", "Trees", "Graphs"],
    },
    {
      id: "codechef",
      name: "CodeChef",
      url: "https://www.codechef.com/users/bhavyapenke",
      solvedCount: "400+ Solved",
      rating: "1200+ (1-Star)",
      streak: "Regular Contender",
      badge: "Div 4 Contests",
      color: "#8C5835",
      bgColor: "bg-lavender/30",
      tapeColor: "washi-tape-blue",
      tags: ["Sorting", "Greedy", "Binary Search"],
    },
    {
      id: "geeksforgeeks",
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/profile/bhavyapenke",
      solvedCount: "300+ Solved",
      rating: "Score: 900+",
      streak: "Monthly Top 1%",
      badge: "Practice Track",
      color: "#2F8D46",
      bgColor: "bg-sage/40",
      tapeColor: "washi-tape-pink",
      tags: ["Hashing", "Recursion", "Stacks", "Queues"],
    },
    {
      id: "hackerrank",
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/bhavyapenke",
      solvedCount: "6+      Badges",
      rating: "3★ Problem Solving",
      streak: "Active Practice",
      badge: "Gold Badge",
      color: "#00EA64",
      bgColor: "bg-blue/25",
      tapeColor: "washi-tape-sage",
      tags: ["C++", "Java", "SQL", "Algorithms"],
    },
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case "leetcode":
        return (
          <SiLeetcode
            size={34}
            color="#FFA116"
            className="drop-shadow-sm"
          />
        );

      case "codechef":
        return (
          <SiCodechef
            size={34}
            color="#8C5835"
            className="drop-shadow-sm"
          />
        );

      case "geeksforgeeks":
        return (
          <SiGeeksforgeeks
            size={34}
            color="#2F8D46"
            className="drop-shadow-sm"
          />
        );

      case "hackerrank":
        return (
          <SiHackerrank
            size={34}
            color="#00EA64"
            className="drop-shadow-sm"
          />
        );

      default:
        return null;
    }
  };

  return (
    <section id="profiles" className="py-20 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-1/4 right-[5%] w-10 h-10 text-peach animate-float">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full opacity-40">
          <polygon points="50,9 60,37 90,37 65,55 74,83 50,66 25,83 34,55 9,37 39,37" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center relative">
          <span className="font-handwritten text-3xl text-pink font-bold block mb-1 rotate-[-2deg]">
            my ratings & statistics
          </span>
          <h2 className="font-display text-4xl font-bold text-charcoal flex items-center justify-center gap-2">
            <span>Coding Profiles</span>
            <Award className="w-6 h-6 text-pink" />
          </h2>
          <div className="mt-2 w-32 h-1.5 bg-lavender mx-auto rounded-full border border-charcoal/30"></div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative border-2 border-charcoal rounded-3xl p-6 shadow-[5px_5px_0px_#3D3D3D] hover:translate-y-[-4px] transition-transform flex flex-col justify-between group overflow-hidden ${profile.bgColor}`}
            >
              {/* Washi Tape */}
              <div className={`washi-tape ${profile.tapeColor} -top-3 left-1/3 w-20 h-6`}></div>

              {/* Corner accent block */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-10 rounded-bl-full group-hover:scale-110 transition-transform"
                style={{ backgroundColor: profile.color }}
              ></div>

              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 mt-2">
                  <div className="p-2 rounded-xl bg-white border border-charcoal/40 shadow-[2px_2px_0px_rgba(61,61,61,0.5)]">
                    {getIcon(profile.id)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal">{profile.name}</h3>
                    <span
                      className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border border-charcoal/50 text-white"
                      style={{ backgroundColor: profile.color }}
                    >
                      {profile.badge}
                    </span>
                  </div>
                </div>

                {/* Score Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-white/70 border border-charcoal/30 p-2.5 rounded-2xl">
                  <div className="text-center border-r border-charcoal/30 pr-1">
                    <span className="block text-sm font-display font-extrabold text-charcoal">{profile.solvedCount}</span>
                    <span className="text-[9px] font-bold text-charcoal/60 uppercase">Solved</span>
                  </div>
                  <div className="text-center pl-1">
                    <span className="block text-sm font-display font-extrabold text-charcoal">{profile.rating}</span>
                    <span className="text-[9px] font-bold text-charcoal/60 uppercase">Standing</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-white hover:bg-cream border-2 border-charcoal rounded-2xl font-display text-xs font-bold text-charcoal flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#3D3D3D] group-hover:shadow-[4px_4px_0px_#3D3D3D] active:shadow-[1px_1px_0px_#3D3D3D] active:translate-y-[1px] transition-all cursor-pointer"
              >
                <span>Check Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
