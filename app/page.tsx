import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <FeaturedProjects />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
