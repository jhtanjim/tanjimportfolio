"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import projectsData from "@/data/projects.json";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ProjectCategory = "all" | "frontend" | "backend" | "fullstack";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === activeTab);

  const tabs: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              All Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore my complete portfolio of web development projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <Button
                key={tab.value}
                variant={activeTab === tab.value ? "default" : "outline"}
                onClick={() => setActiveTab(tab.value)}
                className="transition-all duration-300 hover:scale-105"
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium transition-colors hover:bg-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent transition-all hover:scale-105"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                    {project.category === "fullstack" ? (
                      <>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent transition-all hover:scale-105"
                        >
                          <a
                            href={project.clientGithubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Client
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent transition-all hover:scale-105"
                        >
                          <a
                            href={project.serverGithubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Server
                          </a>
                        </Button>
                      </>
                    ) : project.githubUrl ? (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent transition-all hover:scale-105"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent cursor-not-allowed opacity-60"
                        disabled
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Confidential
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
