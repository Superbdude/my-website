"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home, User, Briefcase, Mail, Download } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const handleMenuClick = () => {
    setIsSpinning(true);
    setOpen(!open);
    // Reset spinning state after animation completes
    setTimeout(() => setIsSpinning(false), 500);
  };

  const navItems = [
    { href: "/", label: "Home", icon: Home, color: "#16a34a" }, // Green
    { href: "/about", label: "About", icon: User, color: "#0ea5e9" }, // Cyan
    { href: "/projects", label: "Projects", icon: Briefcase, color: "#f97316" }, // Orange
    { href: "/contact", label: "Say Hello", icon: Mail, color: "#ec4899" }, // Pink
  ];

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#5246e4]/10">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4 relative">
        {/* Logo */}
        <h1 
          className="text-[#5c39e0] text-lg font-extrabold cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105 transform"
          onClick={handleLogoClick}
        >
          &lt; Oguntade /&gt;
        </h1>

        {/* Hamburger Icon (visible only on small screens) */}
        <button
          aria-label="Toggle menu"
          className="md:hidden block focus:outline-none"
          onClick={handleMenuClick}
        >
          <div className={isSpinning ? "animate-spin" : ""} style={isSpinning ? { animationDuration: "0.5s", animationTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)" } : {}}>
            {open ? (
              <X size={24} className="text-[#5c39e0]" />
            ) : (
              <Menu size={24} className="text-[#5c39e0]" />
            )}
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.slice(0, 3).map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group ${
                  pathname === item.href
                    ? "text-[#5c39e0] bg-gradient-to-r from-[#5246e4]/15 to-[#5246e4]/5 border border-[#5246e4]/30 shadow-sm"
                    : "text-[#71717a] hover:text-[#5c39e0] hover:bg-gradient-to-r hover:from-[#5246e4]/10 hover:to-transparent"
                }`}
              >
                <IconComponent size={18} className="transition-all duration-300 group-hover:scale-110 filter drop-shadow-sm animate-icon-spin-fast" style={{ color: item.color }} />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button and CV Download */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#5049e5] to-[#672bdb] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#5049e5]/30 transition-all duration-300 border border-[#5049e5]/20 group relative overflow-hidden"
          >
            <Mail size={18} className="transition-all duration-300 group-hover:scale-110 filter drop-shadow-sm animate-icon-spin-fast" style={{ color: "#fbbf24" }} />
            <span>Say Hello</span>
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none"></div>
          </Link>

          <a
            href="/certificates/cv.pdf"
            download="Oguntade-Razak-CV.pdf"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#5246e4]/20 to-[#672bdb]/20 text-[#5246e4] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#5246e4]/20 transition-all duration-300 border border-[#5246e4]/30 group relative overflow-hidden hover:bg-gradient-to-r hover:from-[#5246e4]/30 hover:to-[#672bdb]/30"
          >
            <Download size={18} className="transition-all duration-300 group-hover:scale-110 filter drop-shadow-sm animate-icon-spin-fast" style={{ color: "#5246e4" }} />
            <span>Download CV</span>
            <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none"></div>
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 top-full mt-2 w-full mx-4 rounded-xl bg-white shadow-xl border border-[#5246e4]/10 transition-all duration-500 transform origin-top ${
            open ? "opacity-100 scale-y-100 translate-y-0 visible" : "opacity-0 scale-y-90 -translate-y-4 pointer-events-none invisible"
          }`}
          style={{
            transformOrigin: "top center",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
        >
          <div className="p-4 space-y-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:translate-x-1 flex items-center gap-2 ${
                    pathname === item.href
                      ? "text-[#5c39e0] bg-gradient-to-r from-[#5246e4]/15 to-[#5246e4]/5 border border-[#5246e4]/30 shadow-sm"
                      : "text-[#71717a] hover:text-[#5c39e0] hover:bg-gradient-to-r hover:from-[#5246e4]/10 hover:to-transparent"
                  }`}
                  style={{
                    transitionDelay: open ? `${index * 50}ms` : "0ms",
                    transform: open ? "translateX(0)" : "translateX(-8px)",
                    opacity: open ? 1 : 0
                  }}
                >
                  <IconComponent size={16} style={{ color: item.color }} className="animate-icon-spin-fast" />
                  {item.label}
                </Link>
              );
            })}
            <a
              href="/certificates/cv.pdf"
              download="Oguntade-Razak-CV.pdf"
              className="w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:translate-x-1 flex items-center gap-2 text-[#71717a] hover:text-[#5c39e0] hover:bg-gradient-to-r hover:from-[#5246e4]/10 hover:to-transparent"
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${navItems.length * 50}ms` : "0ms",
                transform: open ? "translateX(0)" : "translateX(-8px)",
                opacity: open ? 1 : 0
              }}
            >
              <Download size={16} style={{ color: "#5246e4" }} className="animate-icon-spin-fast" />
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}