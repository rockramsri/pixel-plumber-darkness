import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "CEART.io",
    location: "New York, NY",
    period: "Jun 2025 - Aug 2025",
    color: "primary",
    achievements: [
      "Reduced false positives by 90% with LLM-based scoring systems",
      "Accelerated analysis by 83% through optimized pipelines",
      "Cut LLM API costs by 75% via prompt optimization",
      "Built RAG pipelines for 1000+ document analysis",
    ],
  },
  {
    title: "Software Engineer",
    company: "Expleo Solutions Ltd",
    location: "Tamil Nadu, India",
    period: "Jun 2022 - Jun 2024",
    color: "secondary",
    achievements: [
      "Achieved 50% performance gains in metadata exchange",
      "Slashed transfer time from 12h to 2-4h (2M entries/2PB)",
      "Reduced API latency by 20% (2s → 1.6s)",
      "Led Data Governance initiatives",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "New York University",
    location: "New York, NY",
    period: "Sep 2024 - Present",
    color: "accent",
    achievements: [
      "CS-GY 9163: Application Security",
      "Supporting 100+ students in cybersecurity concepts",
      "Conducting office hours and grading assignments",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-4xl text-primary mb-4">
            [ EXPERIENCE ]
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-pixel text-sm md:text-base text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="font-pixel text-xs text-secondary mb-1">
                    {exp.company}
                  </p>
                  <p className="font-pixel text-xs text-muted-foreground">
                    📍 {exp.location}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={`font-pixel text-xs border-2 text-${exp.color} border-${exp.color}/40`}
                >
                  {exp.period}
                </Badge>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="font-pixel text-xs text-foreground/80 leading-relaxed flex items-start"
                  >
                    <span className="text-accent mr-2">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
