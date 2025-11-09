import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Level Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-block mb-4">
            <div className="font-pixel text-xs text-accent mb-2 animate-pulse">
              ═══ STAGE 1-1 ═══
            </div>
            <h2 className="font-pixel text-2xl md:text-4xl text-primary mb-4 glow-red">
              ▼ ABOUT ME ▼
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-primary animate-pulse" />
              <div className="w-8 h-8 bg-accent animate-coin-spin border-2 border-foreground" />
              <div className="w-12 h-1 bg-primary animate-pulse" />
            </div>
          </div>
        </div>

        <Card className="p-8 bg-card border-4 border-primary/20 hover:border-primary/60 transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_0px_rgba(0,0,0,0.6)] hover:translate-x-[-2px] hover:translate-y-[-2px] relative overflow-hidden group">
          {/* Power-up effect */}
          <div className="absolute top-2 right-2 text-2xl animate-bounce">⭐</div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
          <div className="space-y-6">
            <p className="font-pixel text-xs md:text-sm leading-relaxed text-foreground/90">
              I'm an <span className="text-primary">AI/ML Engineer</span> pursuing my Master's at NYU Tandon, specializing in designing and deploying scalable AI systems. From architecting flagship grading systems to building search engines and legal-tech platforms, I focus on creating production-ready systems that combine technical excellence with real-world impact.
            </p>
            
            <p className="font-pixel text-xs md:text-sm leading-relaxed text-foreground/90">
              As a <span className="text-secondary">Teaching Assistant for Application Security</span> at NYU, I help students master security fundamentals. I'm a <span className="text-accent">2x hackathon winner</span> across <span className="text-primary">15+ hackathons</span>—I thrive in fast-paced arenas, shipping fast, learning faster, and building systems people can trust.
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

        {/* Achievement badges - Power-up style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 font-pixel text-xs text-accent animate-pulse">
            ▲ POWER-UPS COLLECTED ▲
          </div>
          {[
            { label: "NYU TA", icon: "🎓" },
            { label: "2x Winner", icon: "🏆" },
            { label: "AI/ML", icon: "🤖" },
            { label: "Pro Gamer", icon: "🎮" },
          ].map((badge, index) => (
            <Card
              key={index}
              className="p-4 text-center bg-muted border-4 border-secondary/20 hover:border-accent hover:scale-110 transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.4)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:animate-pulse-glow group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl mb-2 animate-float relative z-10" style={{ animationDelay: `${index * 0.2}s` }}>{badge.icon}</div>
              <div className="font-pixel text-xs text-foreground/80 relative z-10">{badge.label}</div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-ping" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
