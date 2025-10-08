"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Facebook, Mail, ArrowDown } from "lucide-react"
import Image from "next/image"
import profileData from "@/data/profile.json"

export function HeroSection() {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src={profileData.avatar || "/placeholder.svg"}
                alt={profileData.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background"></div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              Hello, I'm <span className="text-primary">{profileData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">{profileData.title}</p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {profileData.bio}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {Object.entries(profileData.social).map(([platform, url]) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons]
              return (
                <Button key={platform} variant="outline" size="icon" asChild>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              )
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Button asChild size="lg">
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="mt-12 animate-bounce">
            <a href="#about">
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
