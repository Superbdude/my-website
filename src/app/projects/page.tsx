"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Sparkles, Code2, Database, Zap, Palette, GitBranch, Globe, Cpu } from 'lucide-react';
import { Project } from '../../types';

// Tech icon mapping
const techIcons: { [key: string]: React.ReactNode } = {
  "React": <Code2 size={16} className="text-[#61dafb] animate-icon-spin-fast" />,
  "TypeScript": <Code2 size={16} className="text-[#3178c6] animate-icon-spin-fast" />,
  "Next.js": <Zap size={16} className="text-[#000] animate-icon-spin-fast" />,
  "Node.js": <Globe size={16} className="text-[#339933] animate-icon-spin-fast" />,
  "Express": <Code2 size={16} className="text-[#000] animate-icon-spin-fast" />,
  "MongoDB": <Database size={16} className="text-[#13aa52] animate-icon-spin-fast" />,
  "Firebase": <Database size={16} className="text-[#ffa726] animate-icon-spin-fast" />,
  "Redux": <Palette size={16} className="text-[#764abc] animate-icon-spin-fast" />,
  "Tailwind": <Palette size={16} className="text-[#06b6d4] animate-icon-spin-fast" />,
  "TailwindCSS": <Palette size={16} className="text-[#06b6d4] animate-icon-spin-fast" />,
  "Git": <GitBranch size={16} className="text-[#f34f29] animate-icon-spin-fast" />,
  "JavaScript": <Code2 size={16} className="text-[#f7df1e] animate-icon-spin-fast" />,
  "HTML": <Code2 size={16} className="text-[#e34c26] animate-icon-spin-fast" />,
  "CSS": <Palette size={16} className="text-[#563d7c] animate-icon-spin-fast" />,
  "MongoDb": <Database size={16} className="text-[#13aa52] animate-icon-spin-fast" />,
  "Render": <Cpu size={16} className="text-[#000] animate-icon-spin-fast" />,
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/data/projects.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-black">
        <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center py-20">
              <div className="inline-block">
                <div className="w-8 h-8 border-4 border-[#5246e4]/20 border-t-[#5246e4] rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="mb-16 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5541e2]/10 text-[#5541e2] text-sm font-bold mb-6 border border-[#5541e2]/20 hover:border-[#5541e2]/40 transition-colors">
              <Sparkles size={16} className="animate-icon-spin-fast" />
              <span>Featured Work</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-[#5246e4] to-[#672bdb] bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-lg text-[#71717a] max-w-2xl leading-relaxed">
              A collection of projects I&apos;ve worked on, showcasing my skills in web development, 
              design, and problem-solving. Each project represents my commitment to quality and innovation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: Project, index: number) => (
              <div
                key={project.slug}
                className="premium-card scale-in hover-lift group overflow-hidden flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Screenshot */}
                {project.screenshot && (
                  <div className="mb-6 relative overflow-hidden rounded-lg h-40 md:h-48 -m-6 mb-6">
                    <Image
                      src={project.screenshot}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5246e4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Main content area with proper padding */}
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-[#111] mb-3 group-hover:text-[#5246e4] transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-[#71717a] mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.slice(0, 3).map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs bg-[#5246e4]/10 text-[#5246e4] px-3 py-1.5 rounded-lg font-medium border border-[#5246e4]/20 hover:border-[#5246e4]/40 transition-colors flex items-center gap-1.5"
                      >
                        {techIcons[tag] || <Code2 size={16} />}
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs bg-[#5246e4]/10 text-[#5246e4] px-3 py-1.5 rounded-lg font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3 pt-4 border-t border-[#5246e4]/10">
                    <a
                      href={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#5541e2] hover:text-[#5246e4] hover:bg-[#5246e4]/5 py-2 rounded-lg transition-all duration-300"
                    >
                      View Details
                    </a>
                    
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 text-[#5541e2] hover:bg-[#5246e4]/10 rounded-lg transition-all duration-300"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 text-[#5541e2] hover:bg-[#5246e4]/10 rounded-lg transition-all duration-300"
                        title="Live Preview"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
