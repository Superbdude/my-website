"use client";

import { useEffect, useState } from 'react';
import { Code2, Database, Zap, Palette, GitBranch, Globe, Cpu } from 'lucide-react';
import { Project } from '../../../types';

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



export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        // Unwrap the params Promise
        const resolvedParams = await params;
        const slug = resolvedParams.slug;
        
        const response = await fetch('/data/projects.json');
        if (!response.ok) throw new Error('Failed to fetch projects');
        
        const projects: Project[] = await response.json();
        const foundProject = projects.find(p => p.slug === slug);
        
        if (!foundProject) {
          console.error(`Project not found for slug: ${slug}`);
          console.log('Available slugs:', projects.map(p => p.slug));
          setError(true);
        }
        setProject(foundProject || null);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black pt-24 px-6 lg:px-20 pb-20">
        <div className="text-center py-20">
          <div className="inline-block">
            <div className="w-8 h-8 border-4 border-[#5246e4]/20 border-t-[#5246e4] rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white text-black pt-24 px-6 lg:px-20 pb-20">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Project Not Found</h1>
          <p className="text-gray-600">The requested project could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black pt-24 px-6 lg:px-20 pb-20">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-lg text-[#71717a] mb-10">{project.description}</p>

      {/* Project Screenshot */}
      {project.screenshot ? (
        <div className="mb-10">
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="w-full h-[300px] md:h-[420px] object-cover rounded-xl"
          />
        </div>
      ) : (
        <div className="w-full h-[300px] bg-gray-200 rounded-xl flex items-center justify-center mb-10">
          <span className="text-gray-500">[ Project Screenshot Placeholder ]</span>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4 mb-12">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-[#5541e2] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#4735d7] transition"
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border border-[#5541e2] text-[#5541e2] px-5 py-2 rounded-lg font-semibold hover:bg-[#f3f1ff] transition"
          >
            View Code (GitHub)
          </a>
        )}
      </div>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc ml-6 text-[#444] mb-10">
            {project.features.map((f: string, i: number) => (
              <li key={i} className="mb-1">{f}</li>
            ))}
          </ul>
        </>
      )}

      {/* Tech Stack */}
      {project.tech && project.tech.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string, i: number) => (
              <span
                key={i}
                className="text-xs bg-[#5246e4]/10 text-[#5246e4] px-3 py-1.5 rounded-lg border border-[#5246e4]/20 hover:border-[#5246e4]/40 transition-colors flex items-center gap-1.5 font-medium"
              >
                {techIcons[t] || <Code2 size={16} />}
                {t}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
