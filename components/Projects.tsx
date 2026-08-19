"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ProjectStatus = "completed" | "in-progress";

interface Project {
  title: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  tagColor: string;
  github?: string;
  demo?: string;
  preview: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Coffee Brew Tracker & AI Assistant",
    status: "in-progress",
    description:
      "A personal full-stack tool designed for tracking and analysing pour-over coffee brews. Logs parameters like grind size and water temperature, featuring a local AI assistant to suggest adjustments for the next cup.",
    tags: ["FastAPI", "Next.js 14", "TypeScript", "LangChain", "Ollama"],
    tagColor: "bg-violet-900/50 text-violet-300 border-violet-700/30",
    github: "https://github.com/adiezakiel01/coffee",
    demo: "https://coffee-navy-pi.vercel.app/",
    preview: (
      <Image
        src="/images/brew_app.png"
        alt="Coffee Brew Tracker screenshot"
        fill
        className="object-cover object-top"
      />
    ),
  },
  {
    title: "E-Commerce AI Analytics Platform",
    status: "completed",
    description:
      "Full-stack AI analytics for e-commerce. Features a real-time dashboard and an AI chat assistant that converts natural language to SQL queries using a local LLM.",
    tags: ["FastAPI", "PostgreSQL", "Prophet", "Docker"],
    tagColor: "bg-violet-900/50 text-violet-300 border-violet-700/30",
    github: "https://github.com/adiezakiel01/ecommerce",
    preview: (
      <Image
        src="/images/ecom.png"
        alt="E-Commerce AI Analytics Platform screenshot"
        fill
        className="object-cover object-top"
      />
    ),
  },
  {
    title: "Business Intelligence Dashboard",
    status: "completed",
    description:
      "A comprehensive BI dashboard built as a university capstone project. Features interactive data visualisations, user authentication, and real-time analytics deployed on AWS.",
    tags: ["Django", "MySQL", "AWS RDS", "AWS S3"],
    tagColor: "bg-gray-800 text-gray-300 border-gray-700",
    preview: (
      <Image
        src="/images/iora_dashboard.png"
        alt="Business Intelligence Dashboard screenshot"
        fill
        className="object-cover object-top"
      />
    ),
  },
];

const statusConfig = {
  completed: {
    dot: "bg-green-400",
    text: "text-green-400",
    label: "Completed",
  },
  "in-progress": {
    dot: "bg-amber-400 animate-pulse",
    text: "text-amber-400",
    label: "In progress",
  },
};

export function Projects() {
  const headingRef = useScrollReveal();
  const cardsRef = useScrollReveal(100);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0A0820]">
      <div className="max-w-4xl mx-auto">
        {/* Header - Synchronized with About section */}
        <div ref={headingRef} className="reveal mb-12">
          <p className="text-violet-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 opacity-90">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            What I&apos;ve built
          </h2>
        </div>

        <div ref={cardsRef} className="reveal">
          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
          >
            {projects.map((project) => {
              const status = statusConfig[project.status];
              return (
                <div
                  key={project.title}
                  className="flex-shrink-0 w-[300px] sm:w-[380px] rounded-2xl border border-violet-500/[0.08] 
                             transition-all duration-500 group overflow-hidden snap-start bg-violet-500/[0.02]"
                >
                  {/* Screenshot preview */}
                  <div className="relative h-48 overflow-hidden bg-gray-900/50">
                    {project.preview}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold transition-all"
                        >
                          Visit
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-semibold transition-all border border-white/10"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card content - Typography Synced */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                      />
                      <span
                        className={`text-[10px] font-bold tracking-[0.2em] ${status.text}`}
                      >
                        {status.label}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-[14px] leading-relaxed mb-6 opacity-80">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider border ${project.tagColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simplified Progress Bar - No percentages, just the trace */}
          <div className="mt-2 max-w-[200px] mx-auto">
            <div className="relative w-full h-[1px] bg-white/5 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-600/50 via-violet-400 to-violet-600/50 shadow-[0_0_10px_rgba(139,92,246,0.4)] transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            {/* Minimalist Hint */}
            <p className="text-center mt-3 text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">
              {scrollProgress > 95 ? "End of Projects" : "Swipe to View"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
