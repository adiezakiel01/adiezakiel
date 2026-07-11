"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

import Image from "next/image";
export function Hero() {
  const headingRef = useScrollReveal();
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
      style={{
        background:
          "linear-gradient(135deg, #020b18 0%, #0f0a2e 50%, #4a2d5e 100%)",
      }}
    >
      <div ref={headingRef} className="reveal max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="relative inline-block mb-6">
          <div className="w-40 h-40 rounded-full ring-4 ring-violet-500/30 mx-auto overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="AE"
              width={200}
              height={200}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/*<span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full
                             border-2 border-[#0a0a14]" /> */}
        </div>

        <p className="text-violet-300 text-xs font-semibold tracking-widest uppercase mb-3">
          Available for opportunities
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
          Adi Ezakiel
        </h1>
        <p className="text-xl sm:text-2xl text-violet-200 font-medium mb-4">
          Web & AI Developer
        </p>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed mb-10">
          Recent graduate from Curtin Singapore, currently focusing on building
          analytics platforms and intelligent features for user projects.
          Passionate about data visualization and clean architecture. Creating
          data-driven web applications using modern technologies like FastAPI,
          React, and AI models.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl
                         font-medium text-sm transition-all hover:-translate-y-0.5
                         shadow-lg shadow-violet-900/50"
          >
            View my projects
          </a>
          <a
            href="mailto:adi.ezakiel@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              window.open("mailto:adi.ezakiel@gmail.com", "_blank");
            }}
            className="px-6 py-3 border border-white/20 hover:border-violet-400 text-white
                         rounded-xl font-medium text-sm transition-all hover:-translate-y-0.5
                         hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <a
            href="#about"
            className="text-gray-500 hover:text-violet-400 transition-colors animate-bounce"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
