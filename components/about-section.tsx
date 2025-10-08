import { Card } from "@/components/ui/card"
import { Code2, Rocket, Users, Award } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Code2, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Rocket, label: "Years Experience", value: "3+" },
    { icon: Award, label: "Awards Won", value: "5+" },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about creating innovative web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              I'm a <span className="text-primary">MERN Stack Developer</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With a passion for building scalable and efficient web applications, I specialize in the MERN stack
              (MongoDB, Express.js, React, Node.js). I love turning complex problems into simple, beautiful, and
              intuitive solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development started with a curiosity about how things work on the internet. Today, I
              have the privilege of working on diverse projects that challenge me to grow and learn every day.
            </p>
            <div className="flex flex-wrap gap-3">
              {["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={index}
                  className="p-6 text-center bg-card border-border hover:border-primary transition-colors"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
