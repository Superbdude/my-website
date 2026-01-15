import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="border-t border-[#5246e4]/10 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Superbdude"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-[#71717a] hover:text-[#5049e5] hover:bg-[#5246e4]/10 transition-all duration-300 hover:scale-110 border border-[#5246e4]/0 hover:border-[#5246e4]/20"
              aria-label="GitHub"
              title="Visit my GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/oguntade-razak-65aa66222"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-[#71717a] hover:text-[#5049e5] hover:bg-[#5246e4]/10 transition-all duration-300 hover:scale-110 border border-[#5246e4]/0 hover:border-[#5246e4]/20"
              aria-label="LinkedIn"
              title="Connect on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:oguntaderasaq30@gmail.com"
              className="p-3 rounded-lg text-[#71717a] hover:text-[#5049e5] hover:bg-[#5246e4]/10 transition-all duration-300 hover:scale-110 border border-[#5246e4]/0 hover:border-[#5246e4]/20"
              aria-label="Email"
              title="Send me an email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#5246e4]/30 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-[#71717a] flex items-center justify-center gap-1">
              © {currentYear} Oguntade Razak. Crafted with <Heart size={14} className="text-[#e74c3c] fill-current" /> and code.
            </p>
            <p className="text-xs text-[#a1a1a6] mt-2">
              Premium portfolio built with Next.js, React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
    )
}