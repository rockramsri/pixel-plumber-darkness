import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-4xl text-primary mb-4">
            [ GAME OVER? ]
          </h2>
          <p className="font-pixel text-xs md:text-sm text-accent mb-4">
            Press Start to Continue
          </p>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>

        <Card className="p-8 md:p-12 bg-card border-2 border-primary/40 hover:border-primary transition-all">
          <div className="text-center space-y-8">
            <p className="font-pixel text-xs md:text-sm text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Looking for someone who can architect AI systems, ship production code, and win hackathons? Let's build something amazing together.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="mailto:sm12155@nyu.edu"
                className="group"
              >
                <Card className="p-6 bg-muted border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all hover:scale-105">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="font-pixel text-xs text-foreground/80">
                    sm12155@nyu.edu
                  </p>
                </Card>
              </a>

              <a
                href="https://www.linkedin.com/in/sriram-madhiyalagan-832a74194/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 bg-muted border-2 border-secondary/20 hover:border-secondary hover:bg-secondary/10 transition-all hover:scale-105">
                  <Linkedin className="w-8 h-8 mx-auto mb-3 text-secondary" />
                  <p className="font-pixel text-xs text-foreground/80">
                    LinkedIn
                  </p>
                </Card>
              </a>

              <a
                href="https://github.com/rockramsri"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 bg-muted border-2 border-accent/20 hover:border-accent hover:bg-accent/10 transition-all hover:scale-105">
                  <Github className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <p className="font-pixel text-xs text-foreground/80">
                    github.com/rockramsri
                  </p>
                </Card>
              </a>

              <Card className="p-6 bg-muted border-2 border-primary/20">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-pixel text-xs text-foreground/80">
                  New York, NY
                </p>
              </Card>
            </div>

            <div className="pt-8">
              <Button
                size="lg"
                asChild
                className="font-pixel text-xs px-12 py-6 bg-primary hover:bg-primary/90 glow-red animate-pulse-glow"
              >
                <a href="mailto:sm12155@nyu.edu">
                  Insert Coin to Play
                </a>
              </Button>
            </div>

            {/* Footer */}
            <div className="pt-12 border-t-2 border-dashed border-primary/20">
              <p className="font-pixel text-xs text-muted-foreground">
                Built with React, TypeScript & Tailwind CSS
              </p>
              <p className="font-pixel text-xs text-muted-foreground mt-2">
                © 2025 Sriram Madhiyalagan
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
