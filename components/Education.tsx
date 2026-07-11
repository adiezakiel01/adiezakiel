"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

const education = [
  {
    degree: "Bachelor of Information Technology",
    institution: "Curtin University Singapore",
    description:
      "Coursework in software engineering, database systems, web development, and data analytics. Capstone project: BI Dashboard with Django and AWS.",
    logo: "/images/Curtin_University_Crest.jpg",
  },
  {
    degree: "Diploma in Engineering Design with Business",
    institution: "Republic Polytechnic",
    description:
      "Foundation in engineering principles, design thinking, and business fundamentals. Developed problem-solving and project management skills.",
    logo: "/images/rp-favicon.avif",
  },
];

export function Education() {
  const headingRef = useScrollReveal();
  const eduRef1 = useScrollReveal(100);
  const eduRef2 = useScrollReveal(200);

  const refs = [eduRef1, eduRef2];

  return (
    <section id="education" className="py-24 px-6 bg-[#0a0820]">
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="reveal">
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Education
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">Background</h2>
        </div>

        <div className="space-y-4">
          {education.map((item, index) => (
            <div
              key={item.degree}
              ref={refs[index]}
              className="reveal rounded-2xl border border-white/10 p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,13,26,0.95) 0%, rgba(31,21,53,0.95) 100%)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-16 h-16 rounded-xl bg-white/5 border border-violet-700/30
                                overflow-hidden flex-shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={item.logo}
                    alt={item.institution}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-0.5">
                    {item.degree}
                  </h3>
                  <p className="text-violet-300 text-sm mb-2">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

