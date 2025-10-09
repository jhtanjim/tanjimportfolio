"use client";

import { Card } from "@/components/ui/card";
import { skillsData } from "@/data/skillsData";

// Skill data with icon URLs from CDN

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
            {skillsData.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 md:gap-10">
          {skillsData.skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative w-full h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                    style={{
                      filter: skill.invertOnDark
                        ? "brightness(0) invert(1)"
                        : "none",
                    }}
                  />
                </div>
              </div>
              <span className="text-sm md:text-base font-medium text-slate-300 group-hover:text-white transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-20">
          <Card className="p-8 md:p-10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Full Stack Developer
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
              {[
                "MongoDB",
                "Express.js",
                "React",
                "Node.js",
                "Next.js",
                "TypeScript",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm md:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-center text-sm md:text-base">
              Specialized in building full-stack web applications using modern
              technologies including the MERN stack, Next.js, and TypeScript for
              scalable, performant, and production-ready solutions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
