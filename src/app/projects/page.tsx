"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '../../types';

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
            <div className="text-center">Loading projects...</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects I've worked on, showcasing my skills in web development, 
              design, and problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {projects.map((project: Project, index: number) => (
              <div
                key={project.slug}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-scale-in border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col justify-between"
              >
                {/* Render screenshot if available */}
                {project.screenshot ? (
                  <div className="mb-4">
                    <Image
                      src={project.screenshot}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-40 md:h-48 object-cover rounded-lg"
                    />
                  </div>
                ) : null}

                <h3 className="text-xl font-bold text-[#111] mb-2">{project.title}</h3>

                <p className="text-sm text-[#71717a] mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs bg-[#f4f4f5] text-[#3f3f46] px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/projects/${project.slug}`}
                  className="mt-5 text-sm font-semibold text-[#5541e2] hover:text-[#4735d7] transition"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
