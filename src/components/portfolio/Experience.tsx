import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type ExperienceColor = "primary" | "secondary" | "accent";

type ExperienceEntry = {
  title: string;
  company: string;
  location: string;
  period: string;
  color: ExperienceColor;
  achievements: string[];
};

const badgeColorClasses: Record<ExperienceColor, string> = {
  primary: "text-primary border-primary/40",
  secondary: "text-secondary border-secondary/40",
  accent: "text-accent border-accent/40",
};

const experiences: ExperienceEntry[] = [
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
  {
    title: "Software Engineer Intern",
    company: "Lucid Technologies & Solutions Pvt. Ltd",
    location: "Tamil Nadu, India",
    period: "Oct 2021 - Jun 2022",
    color: "primary",
    achievements: [
      "Engineered REST APIs for enterprise data governance with Spring Boot and MongoDB",
      "Optimized large dataset API responses, cutting latency by 25%",
      "Improved customer adoption through measurable performance gains",
      "Collaborated in Agile sprints with Jira to deliver on rapid timelines",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Zoho Corporation",
    location: "Tamil Nadu, India",
    period: "May 2021 - Jul 2021",
    color: "secondary",
    achievements: [
      "Developed train reservation system backend in Java with MySQL",
      "Implemented seat allocation algorithm delivering a 40% speedup",
      "Strengthened data integrity and transaction safety across the platform",
    ],
  },
  {
    title: "Flutter Developer Intern",
    company: "Forbes Marshall Pvt Ltd",
    location: "Tamil Nadu, India",
    period: "May 2020 - Oct 2020",
    color: "accent",
    achievements: [
      "Built Bluetooth-enabled Flutter dashboards for industrial equipment",
      "Created custom pressure gauge UI improving operator experience by 30%",
      "Synced telemetry with Firebase to deliver real-time status updates",
      "Reduced monitoring delays by 25% through proactive alerting",
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

        <Accordion type="single" collapsible className="space-y-4">
          {experiences.map((exp, index) => (
            <AccordionItem
              key={exp.title}
              value={`exp-${index}`}
              className="border-none overflow-hidden rounded-lg border-2 border-primary/20 bg-card transition-all hover:border-primary/60 data-[state=open]:border-primary/60"
            >
              <AccordionTrigger className="px-6 md:px-8 text-left">
                <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
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
                  <div className="flex flex-col items-start gap-2 md:items-end">
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-pixel text-xs border-2",
                        badgeColorClasses[exp.color],
                      )}
                    >
                      {exp.period}
                    </Badge>
                    <span className="font-pixel text-[10px] uppercase tracking-widest text-muted-foreground">
                      Press Start to expand
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
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
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
