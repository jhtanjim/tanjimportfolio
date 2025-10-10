"use client";
import { Card } from "@/components/ui/card";
import certificationsData from "@/data/certifications.json";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CertificationAndAchievement = () => {
  return (
    <section id="certifications" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and notable achievements in my
            development journey
          </p>
        </div>

        {/* Certifications Marquee */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Certifications
          </h3>
          <Marquee
            gradient={true}
            gradientColor="hsl(var(--background))"
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
            className="py-4"
          >
            {certificationsData.certifications.map((cert) => (
              <Card
                key={cert.id}
                className="mx-4 p-6 w-80 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-2 hover:border-blue-500/50"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-blue-500 font-medium">{cert.date}</p>
              </Card>
            ))}
          </Marquee>
        </div>

        {/* Achievements Marquee - Reverse Direction */}
        {/* <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Achievements
          </h3>
          <Marquee
            gradient={true}
            gradientColor="hsl(var(--background))"
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
            direction="right"
            className="py-4"
          >
            {certificationsData.achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className="mx-4 p-6 w-80 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-2 hover:border-cyan-500/50"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {achievement.description}
                </p>
                <p className="text-xs text-cyan-500 font-medium">
                  {achievement.date}
                </p>
              </Card>
            ))}
          </Marquee>
        </div> */}
      </div>
    </section>
  );
};

export default CertificationAndAchievement;
