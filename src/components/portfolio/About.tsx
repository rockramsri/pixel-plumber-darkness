import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-4xl text-primary mb-4">
            [ ABOUT ME ]
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>

        <Card className="p-8 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all">
          <div className="space-y-6">
            <p className="font-pixel text-xs md:text-sm leading-relaxed text-foreground/90">
              I'm an <span className="text-primary">AI/ML Engineer</span> pursuing my Master's at NYU Tandon, specializing in designing and deploying scalable AI systems. From architecting flagship grading systems to building search engines and legal-tech platforms, I focus on creating production-ready systems that combine technical excellence with real-world impact.
            </p>
            
            <p className="font-pixel text-xs md:text-sm leading-relaxed text-foreground/90">
              As a <span className="text-secondary">Teaching Assistant for Application Security</span> at NYU, I help students master security fundamentals. I'm a <span className="text-accent">2x hackathon winner</span> who thrives in fast-paced environments - shipping fast, learning faster, and building systems people can trust.
            </p>

            <p className="font-pixel text-xs md:text-sm leading-relaxed text-foreground/90">
              Beyond code, I'm a <span className="text-primary">competitive gamer (rockramsri)</span>. I play at a semi-professional level in Valorant, Apex Legends, Rust, and Rocket League. Gaming teaches the same principles as engineering: rapid decision-making, team coordination, and optimizing for performance under pressure.
            </p>

            <div className="pt-6 border-t-2 border-dashed border-primary/20">
              <p className="font-pixel text-xs text-accent text-center">
                "Obsessed with shipping fast, learning faster, and building systems people can trust"
              </p>
            </div>
          </div>
        </Card>

        {/* Achievement badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "NYU TA", icon: "🎓" },
            { label: "2x Winner", icon: "🏆" },
            { label: "AI/ML", icon: "🤖" },
            { label: "Pro Gamer", icon: "🎮" },
          ].map((badge, index) => (
            <Card
              key={index}
              className="p-4 text-center bg-muted border-2 border-secondary/20 hover:border-secondary hover:scale-105 transition-all"
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <div className="font-pixel text-xs text-foreground/80">{badge.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
