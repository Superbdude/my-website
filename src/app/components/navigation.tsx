"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm" style={{backgroundImage: "url('/mybg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <div className="absolute inset-0 bg-white/65 pointer-events-none"></div>
      <nav className="flex justify-between items-center px-6 md:px-20 py-5 border-b border-[#71717a] relative z-10">
  <h1 className="text-[#5c39e0] text-lg font-extrabold cursor-pointer hover:opacity-80 transition-opacity" onClick={handleLogoClick}>&lt; Oguntade Razak /&gt;</h1>

        {/* Hamburger Icon (visible only on small screens) */}
        <button
          aria-label="Toggle menu"
          className="md:hidden block focus:outline-none transition-all duration-300"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-[#5c39e0]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        </button>

        {/* Menu: on md+ show as horizontal row; on small show as a left-aligned dropdown stack */}
        <div
          className={`md:flex md:static absolute left-5 top-20 z-40 w-56 md:w-auto
            bg-[#0b0b0b] md:bg-transparent text-white md:text-inherit
            p-4 md:p-0 rounded-lg md:rounded-none
            flex-col md:flex-row items-start md:items-center gap-4 md:gap-10
            transition-all duration-300 ease-in-out ${open ? "flex" : "hidden"}`}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`${pathname === "/" ? "text-[#5c39e0] font-bold" : "text-white md:text-white"} block w-full md:inline md:w-auto py-2 md:py-0 font-extrabold`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className={`${pathname === "/about" ? "text-[#5c39e0] font-bold" : "text-white md:text-white"} block w-full md:inline md:w-auto py-2 md:py-0 font-extrabold`}
          >
            About
          </Link>

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className={`${pathname === "/projects" ? "text-[#5c39e0] font-bold" : "text-white md:text-white"} block w-full md:inline md:w-auto py-2 md:py-0 font-extrabold`}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`${pathname === "/contact" ? "text-[#5c39e0] font-bold" : "text-white md:text-white"} block w-full md:inline md:w-auto py-2 md:py-0 font-extrabold`}
          >
            &lt;Say Hello /&gt;
          </Link>

          {/* Hidden admin link - only visible on certain screen sizes or with specific conditions */}
          <Link
            href="/admin"
            onClick={() => setOpen(false)}
            className="hidden md:block text-[#5c39e0] font-bold opacity-0 hover:opacity-100 transition-opacity absolute right-4 top-4 text-xs"
            title="Admin Dashboard"
          >
            Admin
          </Link>
        </div>
      </nav>
    </div>
  )
}