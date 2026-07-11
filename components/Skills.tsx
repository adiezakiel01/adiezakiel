"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    label: "Backend",
    color: "bg-violet-900/60 text-violet-200 border-violet-700/40",
    skills: [
      "FastAPI",
      "Django",
      "Python",
      "SQLAlchemy",
      "Pydantic",
      "Alembic",
      "REST APIs",
    ],
  },
  {
    label: "Frontend",
    color: "bg-blue-900/40 text-blue-200 border-blue-700/30",
    skills: [
      "Next.js 14",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Recharts",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    label: "AI / ML",
    color: "bg-emerald-900/40 text-emerald-200 border-emerald-700/30",
    skills: [
      "LangChain",
      "Ollama",
      "Prompt Engineering",
      "Text-to-SQL",
      "Prophet",
      "scikit-learn",
    ],
  },
  {
    label: "Data & Infrastructure",
    color: "bg-amber-900/40 text-amber-200 border-amber-700/30",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Docker",
      "AWS (RDS, S3, SES)",
      "Redis",
      "Railway",
      "Git",
      "Pandas / NumPy",
    ],
  },
];

export function Skills() {
  const headingRef = useScrollReveal();
  const backendRef = useScrollReveal(0);
  const frontendRef = useScrollReveal(100);
  const aiRef = useScrollReveal(200);
  const infraRef = useScrollReveal(300);

  const refs = [backendRef, frontendRef, aiRef, infraRef];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0820]">
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="reveal">
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">
            What I work with
          </h2>
        </div>

        <div className="space-y-8">
          {skillCategories.map((cat, index) => (
            <div key={cat.label} ref={refs[index]} className="reveal">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${cat.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

