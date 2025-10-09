import profileData from "@/data/profile.json";
import { Facebook, Github, Heart, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook,
  };

  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {Object.entries(profileData.social).map(([platform, url]) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center gap-2 flex-wrap justify-center">
              © {new Date().getFullYear()} {profileData.name}. Made with
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              using Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
