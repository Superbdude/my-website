import { ArrowRight, Code, Sparkles } from "lucide-react";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start py-20 px-4 sm:px-6 lg:px-8 min-h-screen relative bg-white">
      <div className="relative z-10 w-full max-w-4xl text-center">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5541e2]/10 text-[#5541e2] text-sm font-bold mb-6 reveal reveal-del-1">
  <Sparkles size={16} />
  <span>Available for freelance work</span>
</div>

{/* Round Image in Between */}
<div className="flex justify-center mb-6 reveal reveal-del-2">
  <img
    src="/passp.png"
    alt="Profile"
    className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
  />
</div>

<h1 className="text-black font-bold mb-5 leading-tight text-xl sm:text-4xl md:text-3xl lg:text-4xl reveal reveal-del-3">
  Hi, I&apos;m{" "}
  <span className="font-bold bg-linear-to-r from-[#5246e4] to-[#672bdb] bg-clip-text text-transparent inline-block">
    <AnimatedText text="Oguntade Razak Damilare" speed={180} />
  </span>
</h1>



  <p className="text-[#71717a] text-base sm:text-lg md:text-xl max-w-2xl mx-auto reveal reveal-del-4">
          A passionate full-stack developer crafting beautiful, functional web
          experiences. I turn ideas into elegant solutions with clean code and
          modern design.
        </p>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-del-5 mt-8 mb-24">
          <Link
            href="/projects"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#5049e5] px-6 py-3 rounded-xl text-white font-bold hover:opacity-95 transition"
          >
            View My Work <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent px-6 py-3 rounded-xl text-black border border-[#71717a] font-bold hover:bg-[#fafafa] transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Quick Intro Section */}
      <section className="w-full pt-8 pb-2">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 rounded-lg bg-[#fafafa] animate-scale-in">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#5049e5]/10 text-[#5049e5] mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                Clean Code
              </h3>
              <p className="text-[#82828a] text-sm sm:text-base">
                Writing maintainable, scalable, and efficient code that follows best
                practices.
              </p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-[#fafafa] animate-scale-in"
              style={{ animationDelay: "0.06s" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#5049e5]/10 text-[#5049e5] mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                Modern Design
              </h3>
              <p className="text-[#82828a] text-sm sm:text-base">
                Creating intuitive, responsive interfaces that users love to interact
                with.
              </p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-[#fafafa] animate-scale-in"
              style={{ animationDelay: "0.12s" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#5049e5]/10 text-[#5049e5] mb-4">
                <ArrowRight size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                Fast Delivery
              </h3>
              <p className="text-[#82828a] text-sm sm:text-base">
                Delivering projects on time with attention to detail and quality
                assurance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
