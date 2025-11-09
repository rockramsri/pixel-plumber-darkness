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
    <section id="skills" className="py-20 px-4 bg-muted/30 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Skill Tree Header */}
        <div className="text-center mb-12">
          <div className="font-pixel text-xs text-accent mb-2 animate-pulse">
            ═══ STAGE 3-1 ═══
          </div>
          <h2 className="font-pixel text-2xl md:text-4xl text-primary mb-4 glow-yellow">
            ▼ SKILL TREE ▼
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-accent animate-pulse" />
            <div className="text-2xl animate-float">⚡</div>
            <div className="w-12 h-1 bg-accent animate-pulse" />
          </div>
          <div className="font-pixel text-[10px] text-muted-foreground mt-4">
            ABILITIES UNLOCKED
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-4 border-primary/20 hover:border-accent transition-all hover:scale-105 shadow-[6px_6px_0px_rgba(0,0,0,0.4)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.6)] group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all" />
              <div className="text-center mb-4 relative z-10">
                <div className="text-4xl mb-2 animate-float relative" style={{ animationDelay: `${index * 0.15}s` }}>
                  {category.icon}
                </div>
                <h3 className={`font-pixel text-sm text-${category.color} mb-4 relative`}>
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[10px] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    UNLOCKED
                  </span>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 justify-center relative z-10">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="font-pixel text-xs px-3 py-1 bg-muted border-2 border-primary/20 text-foreground/80 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all hover:scale-110 cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,0.4)] hover:shadow-[3px_3px_0px_rgba(0,0,0,0.6)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Bonus Stages */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <div className="font-pixel text-xs text-accent animate-pulse">
              ═══ BONUS STAGES ═══
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-4 border-accent/40 hover:border-accent transition-all shadow-[6px_6px_0px_rgba(0,0,0,0.4)] hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-2 right-2 text-xl animate-bounce">🏫</div>
              <div className="space-y-3 relative z-10">
                <h3 className="font-pixel text-sm text-accent flex items-center gap-2">
                  🎓 PLAYER STATS
                </h3>
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

            <Card className="p-6 bg-card border-4 border-accent/40 hover:border-accent transition-all shadow-[6px_6px_0px_rgba(0,0,0,0.4)] hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-2 right-2 text-xl animate-bounce">🌟</div>
              <div className="space-y-3 relative z-10">
                <h3 className="font-pixel text-sm text-accent flex items-center gap-2">
                  🏆 TROPHIES
                </h3>
                <div className="space-y-2">
                  <p className="font-pixel text-xs text-foreground flex items-center justify-between group hover:text-accent transition-colors">
                    <span>★ 2x Hackathon Winner</span>
                    <span className="text-[10px] text-secondary">+500XP</span>
                  </p>
                  <p className="font-pixel text-xs text-foreground flex items-center justify-between group hover:text-accent transition-colors">
                    <span>★ 15+ Competitions</span>
                    <span className="text-[10px] text-secondary">+300XP</span>
                  </p>
                  <p className="font-pixel text-xs text-foreground flex items-center justify-between group hover:text-accent transition-colors">
                    <span>★ NYU Teaching Assistant</span>
                    <span className="text-[10px] text-secondary">+200XP</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
