import { ArrowRight, Code, Sparkles, Rocket, Target, Award, Palette } from "lucide-react";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import TechMarquee from "./components/TechMarquee";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start py-20 px-4 sm:px-6 lg:px-8 min-h-screen relative bg-white">
      <div className="relative z-10 w-full max-w-4xl text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5541e2]/10 text-[#5541e2] text-sm font-bold mb-6 reveal reveal-del-1 border border-[#5541e2]/20 hover:border-[#5541e2]/40 transition-colors">
          <Sparkles size={16} className="animate-icon-spin-fast" />
          <span>Available for freelance work</span>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-8 reveal reveal-del-2">
          <div className="relative group">
            <div
              className="relative flex items-center justify-center scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img src="/emoji.png" alt="Profile emoji" className="w-62 h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-black font-bold mb-6 leading-tight text-xl sm:text-4xl md:text-3xl lg:text-4xl reveal reveal-del-3">
          Hi, I&apos;m{" "}
          <span className="font-bold bg-gradient-to-r from-[#5246e4] to-[#672bdb] bg-clip-text text-transparent inline-block">
            <AnimatedText text="Oguntade Razak Damilare" speed={180} />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#71717a] text-base sm:text-lg md:text-xl max-w-2xl mx-auto reveal reveal-del-4 leading-relaxed">
          A passionate full-stack developer crafting beautiful, functional web
          experiences. I turn ideas into elegant solutions with clean code and
          modern design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-del-5 mt-10 mb-24">
          <Link
            href="/projects"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-br from-[#5049e5] via-[#5246e4] via-[#672bdb] to-[#5049e5] px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 border border-[#5049e5]/50 group relative overflow-hidden btn-color-pop hover:shadow-2xl hover:-translate-y-1.5"
          >
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
            <span className="relative flex items-center gap-3">
              <Code size={20} className="group-hover:rotate-12 transition-transform duration-300 animate-icon-spin-fast "  style={{ animationDuration: "0.6s" }} />
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-br from-[#5246e4]/40 via-[#672bdb]/50 to-[#5246e4]/40 px-8 py-4 rounded-xl text-white border-2 border-[#5246e4]/60 font-bold transition-all duration-300 group relative overflow-hidden btn-color-pop hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#5246e4]/100"
          >
            <span className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
            <span className="relative flex items-center gap-3">
              <Sparkles size={20} className="group-hover:animate-spin transition-transform duration-300 animate-icon-spin-fast" style={{ animationDuration: "0.6s" }} />
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="w-full mb-12 reveal fade-in" style={{ animationDelay: "0.7s" }}>
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold text-[#5246e4]/60 uppercase tracking-widest">
            Tech Stack
          </p>
        </div>
        <TechMarquee />
      </div>

      {/* Services Section */}
      <section className="w-full pt-8 pb-2">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <p className="text-sm font-semibold text-[#5246e4]/60 uppercase tracking-widest text-center">
              What I Offer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div
              className="premium-card p-6 scale-in hover-lift"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#5049e5] to-[#672bdb] text-white mb-4">
                <Code size={24} className="animate-icon-spin" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-black">
                Clean Code
              </h3>
              <p className="text-[#82828a] text-sm sm:text-base leading-relaxed">
                Writing maintainable, scalable, and efficient code that follows
                best practices and industry standards.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="premium-card p-6 scale-in hover-lift"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#5049e5] to-[#672bdb] text-white mb-4">
                <Palette size={24} className="animate-icon-spin" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-black">
                Modern Design
              </h3>
              <p className="text-[#82828a] text-sm sm:text-base leading-relaxed">
                Creating intuitive, responsive interfaces with smooth animations
                that users love to interact with.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="premium-card p-6 scale-in hover-lift"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#5049e5] to-[#672bdb] text-white mb-4">
                <Rocket size={24} className="animate-icon-spin" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-black">
                Fast Delivery
              </h3>
              <p className="text-[#82828a] text-sm sm:text-base leading-relaxed">
                Delivering projects on time with meticulous attention to detail
                and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
