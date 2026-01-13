import fs from 'fs';
import path from 'path';
import { notFound } from "next/navigation";
import { Project } from '../../../types';

// Read project from JSON file in public so it's aligned with client fetch('/data/projects.json')
async function getProject(slug: string): Promise<Project | null> {
  const dataDir = path.join(process.cwd(), 'public', 'data');
  const filePath = path.join(dataDir, 'projects.json');

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const projects: Project[] = JSON.parse(fileContent);
    return projects.find(p => p.slug === slug) || null;
  } catch (error) {
    console.error('Error reading projects:', error);
    return null;
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params Promise
  const { slug } = await params;
  
  const project = await getProject(slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white text-black pt-24 px-6 lg:px-20 pb-20">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-lg text-[#71717a] mb-10">{project.description}</p>

      {/* Video / Screenshot */}
      {project.video ? (
        <div className="w-full mb-10">
          <video
            src={project.video}
            controls
            className="w-full h-[300px] md:h-[420px] object-cover rounded-xl bg-black"
            poster={project.screenshot}
          />
        </div>
      ) : project.screenshot ? (
        <div className="mb-10">
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="w-full h-[300px] md:h-[420px] object-cover rounded-xl"
          />
        </div>
      ) : (
        <div className="w-full h-[300px] bg-gray-200 rounded-xl flex items-center justify-center mb-10">
          <span className="text-gray-500">[ Project Screenshot / Video Placeholder ]</span>
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
                className="text-xs bg-[#f4f4f5] text-[#3f3f46] px-3 py-1 rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
