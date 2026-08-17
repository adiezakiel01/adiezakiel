"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

type ProjectStatus = "completed" | "in-progress";

interface Project {
  title: string;
  status: ProjectStatus;
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Coffee Brew Tracker & AI Assistant",
    status: "in-progress",
    image: "/images/brew_app.png",
    description:
      "A personal full-stack tool designed for tracking and analysing pour-over coffee brews. Logs parameters like grind size and water temperature, featuring a local AI assistant to suggest adjustments for the next cup.",
    highlights: [
      "Local AI Inference using LangChain & Ollama",
      "Asynchronous Backend with FastAPI",
      "Data visualization with Recharts",
    ],
    tags: ["FastAPI", "Next.js 14", "TypeScript", "LangChain", "Ollama"],
    github: "https://github.com/adiezakiel01/coffee",
    demo: "https://coffee-navy-pi.vercel.app/",
  },
  {
    title: "E-Commerce AI Analytics Platform",
    status: "completed",
    image: "/images/profile.jpg", // Update with your ecommerce screenshot
    description:
      "Full-stack AI analytics for e-commerce. Features a real-time dashboard and an AI chat assistant that converts natural language to SQL queries using a local LLM.",
    highlights: [
      "Natural language to SQL via LangChain",
      "Prophet-powered revenue forecasting",
      "Next.js 14 Server Components",
    ],
    tags: ["FastAPI", "PostgreSQL", "Prophet", "Docker"],
    github: "https://github.com/adiezakiel01/ecommerce",
  },
  {
    title: "Business Intelligence Dashboard",
    status: "completed",
    image: "/images/Brew_tracker_app.png", // Update with your BI screenshot
    description:
      "A comprehensive BI dashboard built as a university capstone project. Features interactive data visualisations, user authentication, and real-time analytics deployed on AWS.",
    highlights: [
      "Interactive Chart.js visualisations",
      "Deployed on AWS RDS + S3",
      "Role-based access control",
    ],
    tags: ["Django", "MySQL", "AWS RDS", "AWS S3"],
  },
];

const statusConfig = {
  completed: {
    dot: "bg-green-500",
    text: "text-green-500/80",
    label: "Completed",
  },
  "in-progress": {
    dot: "bg-amber-500 animate-pulse",
    text: "text-amber-500/80",
    label: "Building",
  },
};

export function Projects() {
  const headingRef = useScrollReveal();
  const ref1 = useScrollReveal(0);
  const ref2 = useScrollReveal(150);
  const ref3 = useScrollReveal(200);

  const projectRefs = [ref1, ref2, ref3];

  return (
    <section id="projects" className="py-24 px-6 bg-[#0c0c0e]">
      <div className="max-w-3xl mx-auto">
        <div ref={headingRef} className="reveal mb-16">
          <p className="text-violet-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            What I&apos;ve built
          </h2>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => {
            const status = statusConfig[project.status];
            return (
              <div
                key={project.title}
                ref={projectRefs[index]}
                className="reveal group flex flex-col"
              >
                {/* 1. Title and Status Row */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                    />
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest ${status.text}`}
                    >
                      {status.label}
                    </span>
                  </div>
                </div>

                {/* 2. Project Image - Placed below title */}
                <div className="relative aspect-[16/8] mb-6 overflow-hidden rounded-xl border border-white/10 bg-[#16161a]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>

                {/* 3. Description */}
                <p className="text-gray-400 text-s leading-relaxed mb-6 font-medium max-w-2xl">
                  {project.description}
                </p>

                {/* 4. Tags - Inspiration Style */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-bold tracking-wider bg-[#2d1a12] text-[#ef8e52] border border-[#ef8e52]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 5. Footer Links */}
                <div className="flex items-center gap-6 border-t border-white/5 pt-6">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
