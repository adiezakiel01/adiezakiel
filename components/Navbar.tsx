"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about",     label: "About"     },
  { href: "#skills",    label: "Skills"    },
  { href: "#projects",  label: "Projects"  },
  { href: "#education", label: "Education" },
  { href: "#contact",   label: "Contact"   },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const triggerEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); 
    window.location.assign("mailto:adi.ezakiel@gmail.com");
  };


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#0a0a14]/95 backdrop-blur-md border-b border-white/5"
        : "bg-transparent"
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-sm font-semibold text-white tracking-wide">
          AE<span className="text-violet-400">.</span>
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <a
          href="mailto:adi.ezakiel@gmail.com"
          onClick={(e) => {
            e.preventDefault();
            window.open('mailto:adi.ezakiel@gmail.com', '_blank');
          }}
          className="text-xs px-4 py-2 rounded-lg border border-violet-500 text-violet-300
                     hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all"
          rel="noopener noreferrer"
        >
        
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        
          {/*Say Hi!*/}
        </a>
        
      </div>
    </nav>
  );
}