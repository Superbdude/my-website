"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about", label: "About", icon: "👤" },
    { href: "/projects", label: "Projects", icon: "💼" },
    { href: "/contact", label: "Say Hello", icon: "📧" },
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
          className="md:hidden block focus:outline-none transition-all duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={24} className="text-[#5c39e0]" />
          ) : (
            <Menu size={24} className="text-[#5c39e0]" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                pathname === item.href
                  ? "text-[#5c39e0] bg-[#5246e4]/10 border border-[#5246e4]/30"
                  : "text-[#71717a] hover:text-[#5c39e0] hover:bg-[#5246e4]/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#5049e5] to-[#672bdb] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#5049e5]/30 transition-all duration-300 border border-[#5049e5]/20"
        >
          Say Hello
        </Link>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 top-full mt-2 w-full mx-4 rounded-xl bg-white shadow-xl border border-[#5246e4]/10 transition-all duration-300 transform origin-top ${
            open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"
          }`}
        >
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block w-full px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  pathname === item.href
                    ? "text-[#5c39e0] bg-[#5246e4]/10 border border-[#5246e4]/30"
                    : "text-[#71717a] hover:text-[#5c39e0] hover:bg-[#5246e4]/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}