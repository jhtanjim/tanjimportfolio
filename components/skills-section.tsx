"use client"

import { Card } from "@/components/ui/card"
import skillsData from "@/data/skills.json"
import { Code2, Server, Wrench } from "lucide-react"

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  "Tools & Others": Wrench,
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.name as keyof typeof categoryIcons]
            return (
              <Card
                key={categoryIndex}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">MERN Stack Developer</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {["MongoDB", "Express.js", "React", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-base font-semibold shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized in building full-stack web applications using the MERN stack, with additional expertise in
              Next.js and TypeScript for modern, scalable, and performant solutions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
