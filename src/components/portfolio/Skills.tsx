import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "C++", "Java", "TypeScript", "SQL", "Vibe Coding"],
    color: "primary",
  },
  {
    title: "AI/ML",
    icon: "🤖",
    skills: ["LangChain", "RAG", "LLMs", "Hugging Face", "Fine-Tuning Pipelines"],
    color: "secondary",
  },
  {
    title: "Frameworks",
    icon: "⚡",
    skills: ["React", "Next.js", "Flask", "Spring Boot", "Flutter"],
    color: "accent",
  },
  {
    title: "Databases",
    icon: "💾",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "MongoDB Atlas"],
    color: "primary",
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS", "Docker", "Kubernetes", "GCP", "Jenkins"],
    color: "secondary",
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "JIRA", "Postman", "Databricks", "BigID"],
    color: "accent",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-4xl text-primary mb-4">
            [ TECH STACK ]
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-105"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className={`font-pixel text-sm text-${category.color} mb-4`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="font-pixel text-xs px-3 py-1 bg-muted border border-primary/20 text-foreground/80 hover:bg-primary/10 hover:border-primary/40 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Education section */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card border-2 border-accent/40 hover:border-accent transition-all">
            <div className="space-y-3">
              <h3 className="font-pixel text-sm text-accent">🎓 Education</h3>
              <div>
                <p className="font-pixel text-xs text-foreground mb-1">
                  New York University
                </p>
                <p className="font-pixel text-xs text-muted-foreground">
                  M.S. Computer Science • GPA: 3.45/4
                </p>
                <p className="font-pixel text-xs text-muted-foreground">
                  Sep 2024 - May 2026
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-2 border-accent/40 hover:border-accent transition-all">
            <div className="space-y-3">
              <h3 className="font-pixel text-sm text-accent">🏆 Achievements</h3>
              <div className="space-y-2">
                <p className="font-pixel text-xs text-foreground">
                  ▸ 2x Hackathon Winner
                </p>
                <p className="font-pixel text-xs text-foreground">
                  ▸ 15+ Competitions
                </p>
                <p className="font-pixel text-xs text-foreground">
                  ▸ NYU Teaching Assistant
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
