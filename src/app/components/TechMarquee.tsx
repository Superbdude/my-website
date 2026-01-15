"use client";

import { Code2, Database, Zap, Palette, GitBranch, Cpu } from "lucide-react";

interface Tech {
  name: string;
  icon: React.ReactNode;
}

const technologies: Tech[] = [
  { name: "React", icon: <Code2 size={18} /> },
  { name: "TypeScript", icon: <Code2 size={18} /> },
  { name: "Next.js", icon: <Zap size={18} /> },
  { name: "Node.js", icon: <Cpu size={18} /> },
  { name: "MongoDB", icon: <Database size={18} /> },
  { name: "Firebase", icon: <Database size={18} /> },
  { name: "Tailwind CSS", icon: <Palette size={18} /> },
  { name: "Git", icon: <GitBranch size={18} /> },
];

export default function TechMarquee() {
  // Create duplicates for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="w-full py-12">
      <div className="marquee-container">
        <div className="marquee">
          {duplicatedTechs.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="marquee-item">
              {tech.icon}
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
