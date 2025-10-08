import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Server, Database, Layers } from "lucide-react"
import servicesData from "@/data/services.json"

const iconMap = {
  code: Code2,
  server: Server,
  database: Database,
  layers: Layers,
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <Card
                key={service.id}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-secondary text-xs rounded text-secondary-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
