import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="border-t border-[#8d8d94] bg-[#eeebf5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Superbdude"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#5049e5] transition-colors text-[#8d8d94]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/oguntade-razak-65aa66222"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#5049e5] transition-colors text-[#8d8d94]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:oguntaderasaq30@gmail.com"
              className="text-muted-foreground hover:text-[#5049e5] transition-colors text-[#8d8d94]"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-[#8d8d94]">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    )
}