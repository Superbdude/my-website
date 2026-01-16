"use client";

import { Code2, Database, Zap, Palette, GitBranch, Cpu, Globe, Layers } from "lucide-react";

interface Tech {
  name: string;
  icon: React.ReactNode;
}

const technologies: Tech[] = [
  { name: "React", icon: <Code2 size={20} className="text-[#61dafb] animate-icon-spin-fast" /> },
  { name: "TypeScript", icon: <Code2 size={20} className="text-[#3178c6] animate-icon-spin-fast" /> },
  { name: "Next.js", icon: <Zap size={20} className="text-[#000] animate-icon-spin-fast" /> },
  { name: "Node.js", icon: <Cpu size={20} className="text-[#339933] animate-icon-spin-fast" /> },
  { name: "MongoDB", icon: <Database size={20} className="text-[#13aa52] animate-icon-spin-fast" /> },
  { name: "Firebase", icon: <Database size={20} className="text-[#ffa726] animate-icon-spin-fast" /> },
  { name: "Tailwind CSS", icon: <Palette size={20} className="text-[#06b6d4] animate-icon-spin-fast" /> },
  { name: "Git", icon: <GitBranch size={20} className="text-[#f34f29] animate-icon-spin-fast" /> },
];

export default function TechMarquee() {
  // Create more duplicates for truly seamless loop (triples ensures smooth transition)
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full py-8">
      <div className="marquee-container">
        <div className="marquee">
          {duplicatedTechs.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="marquee-item">
              <span className="flex items-center justify-center w-6 h-6">
                {tech.icon}
              </span>
              <span className="text-sm font-semibold text-[#5246e4]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
