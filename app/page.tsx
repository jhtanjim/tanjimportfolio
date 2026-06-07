import { AboutSection } from "@/components/about-section";
import { BlogSection } from "@/components/blog-section";
import CertificationAndAchievement from "@/components/certificationAndAchievement";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <FeaturedProjects />
      <CertificationAndAchievement />
      <ExperienceSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
