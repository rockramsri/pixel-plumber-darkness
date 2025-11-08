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
              I'm a Master's student in Computer Science at <span className="text-primary">New York University Tandon School of Engineering</span>, where I also serve as a Teaching Assistant for Application Security.
            </p>
            
            <p className="font-pixel text-xs md:text-sm leading-relaxed text-foreground/90">
              I specialize in building <span className="text-secondary">AI-powered systems</span> that solve real-world problems at the intersection of <span className="text-accent">machine learning</span>, <span className="text-accent">legal-tech</span>, and <span className="text-accent">climate intelligence</span>.
            </p>

            <p className="font-pixel text-xs md:text-sm leading-relaxed text-foreground/90">
              With a <span className="text-primary">"build fast, learn faster"</span> mentality honed through 15+ hackathons (including 2 wins), I thrive in high-ownership environments where technical rigor meets entrepreneurial velocity.
            </p>

            <div className="pt-6 border-t-2 border-dashed border-primary/20">
              <p className="font-pixel text-xs text-accent text-center">
                "Technology should be both powerful and principled"
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
            { label: "Full Stack", icon: "⚡" },
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
