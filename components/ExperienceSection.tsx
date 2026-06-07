"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, ExternalLink, MapPin } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    company: "BioAro",
    companyUrl: "https://bioaro.com/",
    location: "Remote",
    role: "Frontend Developer",
    period: "Nov 2025 – Jun 2026",
    type: "Full-time",
    bullets: [
      "Developed and maintained responsive UI components across 4 React applications, improving consistency and adding file upload, i18n support, and dark mode.",
      "Managed microbiome and genomic datasets through a Dataset Provider platform, implementing CRUD operations, bulk uploads, and draft workflows that streamlined management of 1,000+ records.",
      "Engineered a role-based Admin Console supporting 4 user roles with user administration, system logs, and AI access controls.",
      "Improved application security across 4 React applications by migrating authentication from localStorage to HTTP-only cookie refresh flows, eliminating client-side token exposure and reducing XSS attack risk.",
      "Engineered a full-stack CRM and redesigned the Goldensands homepage from Figma, delivering 5+ major UI sections and a fully responsive experience across desktop, tablet, and mobile devices.",
    ],
    tags: ["React", "TypeScript", "i18n", "Auth", "CRUD", "Figma"],
  },
  {
    company: "CodersPoint",
    companyUrl: "https://www.facebook.com/codpont",
    location: "Remote",
    role: "Full Stack Developer (MERN)",
    period: "Oct 2024 – Oct 2025",
    type: "Full-time",
    bullets: [
      "Delivered and deployed 5+ MERN-stack web applications, integrating RESTful APIs and scalable backend services for production use.",
      "Implemented JWT-based authentication and authorization across 5+ MERN applications, securing protected routes and enabling role-based access control for authenticated users.",
      "Converted 20+ Figma screens into pixel-perfect responsive React components, ensuring cross-browser compatibility and mobile responsiveness.",
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "REST APIs"],
  },
  {
    company: "Dev Cluster",
    companyUrl: "https://dev-cluster.com/",
    location: "Remote",
    role: "Frontend Developer (Intern)",
    period: "Jul 2024 – Sep 2024",
    type: "Internship",
    bullets: [
      "Built and optimized responsive web interfaces using HTML5, CSS3, JavaScript, and React.js, following web accessibility and cross-browser compatibility standards.",
      "Collaborated with senior developers to refactor reusable frontend components, eliminating 200+ lines of duplicated code and improving maintainability.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Accessibility"],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -32 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 z-10" />

      <div className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div>
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {exp.company}
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-primary font-semibold mt-0.5">{exp.role}</p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              <span>{exp.location}</span>
            </div>
            <Badge
              variant="secondary"
              className="text-xs bg-primary/10 text-primary border-primary/20 mt-1"
            >
              {exp.type}
            </Badge>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2.5 mb-5">
          {exp.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            <Briefcase className="w-4 h-4" />
            Work History
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            My professional journey building scalable web applications and
            delivering impactful user experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] md:left-[5px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
