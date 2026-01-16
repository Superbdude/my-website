import { Github, Linkedin, Mail, Code2, Zap } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="relative border-t border-[#5246e4]/10 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5246e4]/5 via-transparent to-[#672bdb]/5"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#5246e4]/10 to-transparent rounded-full blur-3xl opacity-30 -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#672bdb]/10 to-transparent rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Left: Branding & Description */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 size={20} className="text-[#5246e4] animate-icon-spin" />
                  <h3 className="font-bold text-[#111]">Oguntade Razak</h3>
                </div>
                <p className="text-sm text-[#71717a] leading-relaxed">
                  Full-stack developer crafting beautiful, functional digital experiences.
                </p>
              </div>

              {/* Center: Quick Links */}
              <div>
                <p className="text-sm font-semibold text-[#111] mb-4 flex items-center gap-2">
                  <Zap size={16} className="text-[#5246e4] animate-icon-spin-fast" />
                  Quick Links
                </p>
                <div className="flex flex-col gap-2">
                  <a href="/" className="text-sm text-[#71717a] hover:text-[#5246e4] transition-colors duration-300">Home</a>
                  <a href="/projects" className="text-sm text-[#71717a] hover:text-[#5246e4] transition-colors duration-300">Projects</a>
                  <a href="/contact" className="text-sm text-[#71717a] hover:text-[#5246e4] transition-colors duration-300">Contact</a>
                </div>
              </div>

              {/* Right: Social Links */}
              <div>
                <p className="text-sm font-semibold text-[#111] mb-4">Connect</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Superbdude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#5246e4] transition-all duration-300 border border-[#5246e4]/20 hover:border-[#5246e4]"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/oguntade-razak-65aa66222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#5246e4] transition-all duration-300 border border-[#5246e4]/20 hover:border-[#5246e4]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:oguntaderasaq30@gmail.com"
                    className="p-2.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#5246e4] transition-all duration-300 border border-[#5246e4]/20 hover:border-[#5246e4]"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#5246e4]/20 to-transparent mb-6"></div>

            {/* Bottom: Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#a1a1a6]">
                © {currentYear} Oguntade Razak. All rights reserved.
              </p>
              <p className="text-xs text-[#a1a1a6]">
                Built with <span className="text-[#5246e4] font-semibold">Next.js</span>, <span className="text-[#5246e4] font-semibold">React</span> & <span className="text-[#5246e4] font-semibold">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </footer>
    )
}