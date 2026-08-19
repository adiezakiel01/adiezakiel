"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal(0);

  const subtleTile =
    "p-5 rounded-2xl bg-violet-500/[0.02] border border-violet-500/[0.08] flex flex-col justify-center transition-all duration-300 hover:bg-violet-500/[0.05] hover:border-violet-400/[0.2] hover:shadow-[0_0_20px_rgba(139,92,246,0.05)]";

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div ref={headingRef} className="reveal mb-12">
          <p className="text-violet-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 opacity-90">
            About
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Who I am
          </h2>
        </div>

        {/* Content Layout */}
        <div
          ref={contentRef}
          className="reveal flex flex-col md:flex-row gap-12 items-start"
        >
          {/* Left Column: Narrative (Clean Typography) */}
          <div className="flex-[1.4] space-y-6 text-gray-400 leading-relaxed text-[15px]">
            <p>
              I&apos;m a{" "}
              <span className="text-white font-medium">
                Bachelor of IT graduate
              </span>{" "}
              from Curtin Singapore with a passion for building full-stack
              applications with integrated AI.
            </p>
            <p>
              I enjoy the challenge of building the underlying systems that make
              AI practical, transforming raw data into functional features.
            </p>

            {/* Subtle Human Detail 
            <div className="flex items-center gap-3 pt-4 opacity-50 hover:opacity-100 transition-opacity duration-500">
              <span className="text-lg">☕</span>
              <span className="text-[11px] font-medium tracking-wide uppercase">Pour-over coffee enthusiast</span>
            </div>*/}
          </div>

          {/* Right Column: Info Tiles (The Bento Bridge) */}
          <div className="flex-1 w-full grid grid-cols-1 gap-3">
            {/* Top Row: Location & Status */}
            <div className="flex gap-3">
              <div className={`${subtleTile} flex-1 py-4`}>
                <span className="text-[10px] uppercase tracking-widest text-violet-400/50 mb-1 font-bold">
                  Based in
                </span>
                <span className="text-sm text-gray-200 font-medium tracking-tight">
                  Singapore
                </span>
              </div>
              <div className={`${subtleTile} flex-1 py-4`}>
                <span className="text-[10px] uppercase tracking-widest text-violet-400/50 mb-1 font-bold">
                  Status
                </span>
                <span className="text-sm text-emerald-400/90 font-medium tracking-tight">
                  Open to Roles
                </span>
              </div>
            </div>

            {/* Middle Row: Education (Integrated Design) */}
            <div className={`${subtleTile} py-4`}>
              <span className="text-[10px] uppercase tracking-widest text-violet-400/50 mb-1 font-bold">
                Education
              </span>
              <span className="text-sm text-gray-200 font-medium leading-tight tracking-tight">
                Bachelor of Information Technology
              </span>
              <span className="text-[11px] text-gray-500 mt-1 italic font-medium">
                Curtin University Singapore
              </span>
            </div>

            {/* Bottom Row: GitHub (Actionable & Tinted) */}
            <a
              href="https://github.com/adiezakiel01"
              target="_blank"
              className="flex items-center justify-between p-4 rounded-2xl bg-violet-600/[0.04] border border-violet-400/[0.12] hover:bg-violet-600/[0.08] hover:border-violet-400/[0.4] transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center gap-3">
                {/* Official GitHub SVG */}
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="text-sm font-medium text-gray-400 group-hover:text-violet-200 transition-colors">
                  github.com/adiezakiel01
                </span>
              </div>
              <svg
                className="w-4 h-4 text-violet-500/40 group-hover:text-violet-400 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
