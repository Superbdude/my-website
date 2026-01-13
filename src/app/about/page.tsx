import fs from 'fs';
import path from 'path';

export default function About() {
  // server-side check: is avatar available in public?
  const avatarPath = path.join(process.cwd(), 'public', 'images', 'avatar.jpg');
  const hasAvatar = fs.existsSync(avatarPath);

  return (
    <main className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">

        <header className="mb-8 flex items-center gap-6">
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg bg-[#f3f4ff] flex items-center justify-center">
      
              <img src="/passp.png" alt="Oguntade Razak" className="w-full h-full object-cover" />
            
          </div>

          <div>
            <h1 className="text-black font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl mb-1">
              About
            </h1>
            <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#5246e4] to-[#672bdb]">
              Oguntade Razak
            </div>
            <p className="text-sm text-[#6b6b74] mt-2">Full-stack web developer — building delightful, performant apps</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <section className="text-[#60606a] p-6 bg-white border border-[#eef0ff] rounded-2xl shadow-sm">
              <p className="mb-4 leading-relaxed">
                Hello! I'm a passionate full-stack web developer with a love for creating
                beautiful, functional web applications. With years of experience,
                I've worked on a range of projects from small business websites to complex
                enterprise applications and still working on some.
              </p>
              <p className="mb-4 leading-relaxed">
                My journey in web development started with a curiosity about how websites work.
                It has evolved into a career where I solve challenging problems and build
                solutions that make a difference. I believe in writing clean, maintainable
                code and creating user experiences that are intuitive and delightful.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the dev community.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-black font-bold text-xl mb-3">Experience Highlights</h2>
              <div className="text-[#60606a] p-6 bg-white border border-[#eef0ff] rounded-2xl shadow-sm">
                <h3 className="text-black font-semibold text-lg mb-2">Senior Frontend Developer</h3>
                <p className="mb-1 text-sm text-[#6b6b74]">Zeplus Academy • September 2025 - Present</p>
                <p className="leading-relaxed text-sm">
                  Leading development of large-scale web applications, mentoring junior
                  developers, and implementing best practices across the team.
                </p>
              </div>
            </section>

            {/* Certificates Section (Updated for PDF) */}
            <section>
              <h2 className="text-black font-bold text-xl mb-3">Certifications</h2>

              <div className="p-6 bg-white border border-[#eef0ff] rounded-2xl shadow-sm">
                <div className="flex flex-col items-center text-center">

                  {/* PDF Icon */}
                  <div className="w-20 h-20 flex items-center justify-center bg-[#f3f2ff] rounded-xl border border-[#e9e7ff] shadow-sm">
                    <span className="text-[#5246e4] font-bold text-3xl">PDF</span>
                  </div>

                  <h3 className="text-black font-semibold text-lg mt-4">
                    Web Development Certificate
                  </h3>

                  <p className="text-[#75757e] text-sm mb-4">
                    Issued by Gomycode
                  </p>

                  {/* Button to open PDF */}
                  <a
                    href="/certificates/web-dev-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-[#5246e4] text-white rounded-full font-semibold text-sm hover:bg-[#3e35c7] transition"
                  >
                    View Certificate
                  </a>

                </div>
              </div>
            </section>

          </div>

          {/* Sidebar: Skills */}
          <aside>
            <h2 className="text-black font-bold text-xl mb-4">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Responsive Design",
                "Bootstrap",
                "Tailwind CSS",
                "Git",
                "TypeScript",
                "Express",
                "Node.js",
                "MongoDB",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#e8e3f3] text-[#672bdb] px-4 py-2 rounded-full font-semibold text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
