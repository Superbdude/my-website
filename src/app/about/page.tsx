import fs from 'fs';
import path from 'path';
import { Code, Lightbulb, Zap, Award, GitBranch, Briefcase, Code2, Database, Layers, Globe, GitGraph, Palette } from 'lucide-react';

export default function About() {
  // server-side check: is avatar available in public?
  const avatarPath = path.join(process.cwd(), 'public', 'images', 'avatar.jpg');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const hasAvatar = fs.existsSync(avatarPath);

  const skills = [
    { name: "HTML", icon: <Code2 size={18} className="text-[#e34c26] animate-icon-spin-fast" /> },
    { name: "CSS", icon: <Palette size={18} className="text-[#563d7c] animate-icon-spin-fast" /> },
    { name: "JavaScript", icon: <Code size={18} className="text-[#f7df1e] animate-icon-spin-fast" /> },
    { name: "React", icon: <Layers size={18} className="text-[#61dafb] animate-icon-spin-fast" /> },
    { name: "Next.js", icon: <Globe size={18} className="text-[#000] animate-icon-spin-fast" /> },
    { name: "Responsive Design", icon: <Zap size={18} className="text-[#5246e4] animate-icon-spin-fast" /> },
    { name: "Tailwind CSS", icon: <Palette size={18} className="text-[#06b6d4] animate-icon-spin-fast" /> },
    { name: "Git", icon: <GitBranch size={18} className="text-[#f34f29] animate-icon-spin-fast" /> },
    { name: "TypeScript", icon: <Code2 size={18} className="text-[#3178c6] animate-icon-spin-fast" /> },
    { name: "Express", icon: <Code size={18} className="text-[#000] animate-icon-spin-fast" /> },
    { name: "Node.js", icon: <Globe size={18} className="text-[#339933] animate-icon-spin-fast" /> },
    { name: "MongoDB", icon: <Database size={18} className="text-[#13aa52] animate-icon-spin-fast" /> },
    { name: "Firebase", icon: <Database size={18} className="text-[#ffa726] animate-icon-spin-fast" /> },
    { name: "REST APIs", icon: <GitGraph size={18} className="text-[#5246e4] animate-icon-spin-fast" /> },
  ];

  return (
    <main className="relative bg-white py-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#5246e4]/10 to-transparent rounded-full blur-3xl opacity-40 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#672bdb]/10 to-transparent rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2"></div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header Section */}
        <header className="mb-16 fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Avatar with glow effect */}
            <div className="relative group flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5246e4] to-[#672bdb] rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg border-2 border-[#5246e4]/20 hover:border-[#5246e4]/40 transition-all duration-300">
                <img src="/passp.png" alt="Oguntade Razak" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Header text */}
            <div className="flex-1">
              <h1 className="text-black font-extrabold leading-tight text-4xl sm:text-5xl mb-3">
                About Me
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5246e4] to-[#672bdb] bg-clip-text text-transparent mb-3">
                Oguntade Razak Damilare
              </h2>
              <p className="text-[#71717a] text-lg max-w-2xl">
                Full-stack web developer building delightful, performant applications with modern technologies
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Code, label: "Projects", value: "10+" },
              { icon: Zap, label: "Tech Stack", value: "10+" },
              { icon: Briefcase, label: "Experience", value: "1+ yrs" },
              { icon: Award, label: "Certified", value: "Yes" },
            ].map((stat, i) => (
              <div
                key={i}
                className="premium-card scale-in p-4 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="text-[#5246e4] animate-icon-spin" size={24} />
                </div>
                <p className="text-2xl font-bold text-black">{stat.value}</p>
                <p className="text-sm text-[#71717a]">{stat.label}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About Section */}
            <section className="scale-in fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-[#5246e4] animate-icon-spin" size={24} />
                <h2 className="text-black font-bold text-xl">Who I Am</h2>
              </div>
              <div className="premium-card p-6 space-y-4">
                <p className="text-[#71717a] leading-relaxed">
                  Hello! I&apos;m a passionate full-stack web developer with a love for creating
                  beautiful, functional web applications. With years of experience,
                  I&apos;ve worked on a range of projects from small business websites to complex
                  enterprise applications.
                </p>
                <p className="text-[#71717a] leading-relaxed">
                  My journey in web development started with a curiosity about how websites work.
                  It has evolved into a career where I solve challenging problems and build
                  solutions that make a difference. I believe in writing clean, maintainable
                  code and creating user experiences that are intuitive and delightful.
                </p>
                <p className="text-[#71717a] leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing
                  to open-source projects, or sharing knowledge with the dev community.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section className="scale-in fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-[#5246e4] animate-icon-spin" size={24} />
                <h2 className="text-black font-bold text-xl">Experience</h2>
              </div>
              <div className="space-y-4">
                <div className="premium-card p-6 hover-lift">
                  <h3 className="text-black font-semibold text-lg mb-2">Senior Frontend Developer</h3>
                  <p className="mb-3 text-sm text-[#5246e4] font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#5246e4] rounded-full"></span>
                    Zeplus Academy • September 2025 - Present
                  </p>
                  <p className="text-[#71717a] leading-relaxed">
                    Leading development of large-scale web applications, mentoring junior
                    developers, and implementing best practices across the team.
                  </p>
                </div>

                <div className="premium-card p-6 hover-lift bg-gradient-to-br from-[#5246e4]/5 to-[#672bdb]/5">
                  <h3 className="text-black font-semibold text-lg mb-2">Tech Course Instructor</h3>
                  <p className="mb-3 text-sm text-[#5246e4] font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#5246e4] rounded-full"></span>
                    Zeplus Academy • 2025 - Present
                  </p>
                  <p className="text-[#71717a] leading-relaxed">
                    Teaching modern web development to students, focusing on practical skills in React, Next.js, and full-stack development. Dedicated to helping the next generation of developers succeed.
                  </p>
                </div>
              </div>
            </section>

            {/* Certificates Section */}
            <section className="scale-in fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#5246e4] animate-icon-spin" size={24} />
                <h2 className="text-black font-bold text-xl">Certifications</h2>
              </div>
              <div className="premium-card p-8 text-center hover-lift">
                {/* PDF Icon */}
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-[#5246e4]/10 to-[#672bdb]/10 rounded-2xl border border-[#5246e4]/20 mx-auto mb-4">
                  <span className="text-[#5246e4] font-bold text-4xl">PDF</span>
                </div>

                <h3 className="text-black font-semibold text-lg mb-2">
                  Web Development Certificate
                </h3>

                <p className="text-[#71717a] text-sm mb-6">
                  Issued by Gomycode
                </p>

                {/* Button to open PDF */}
                <a
                  href="/certificates/web-dev-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5246e4] to-[#672bdb] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#5246e4]/30 transition-all duration-300"
                >
                  View Certificate
                </a>
              </div>
            </section>

            {/* CV Section */}
            <section className="scale-in fade-in" style={{ animationDelay: "0.45s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-[#5246e4] animate-icon-spin" size={24} />
                <h2 className="text-black font-bold text-xl">My CV</h2>
              </div>
              <div className="premium-card p-8 text-center hover-lift">
                {/* PDF Icon */}
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-[#5246e4]/10 to-[#672bdb]/10 rounded-2xl border border-[#5246e4]/20 mx-auto mb-4">
                  <span className="text-[#5246e4] font-bold text-4xl">PDF</span>
                </div>

                <h3 className="text-black font-semibold text-lg mb-2">
                  Oguntade Razak Damilare
                </h3>

                <p className="text-[#71717a] text-sm mb-6">
                  Full-Stack Developer
                </p>

                {/* Button to open PDF */}
                <a
                  href="/certificates/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5246e4] to-[#672bdb] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#5246e4]/30 transition-all duration-300"
                >
                  View CV
                </a>
              </div>
            </section>

          </div>

          {/* Sidebar: Skills */}
          <aside className="scale-in fade-in mb-12" style={{ animationDelay: "0.5s" }}>
            <div className="premium-card p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-[#5246e4] animate-icon-spin" size={24} />
                <h2 className="text-black font-bold text-xl">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-gradient-to-r from-[#5246e4]/10 to-[#672bdb]/10 text-[#5246e4] px-3 py-2 rounded-lg font-semibold text-xs border border-[#5246e4]/20 hover:border-[#5246e4]/40 hover:bg-gradient-to-r hover:from-[#5246e4]/20 hover:to-[#672bdb]/20 transition-all duration-300 cursor-default flex items-center gap-1.5"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
