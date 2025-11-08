import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          {/* Pixel art coins animation */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-12 h-12 bg-accent rounded-full animate-coin-spin" />
            <div className="w-12 h-12 bg-accent rounded-full animate-coin-spin" style={{ animationDelay: '0.3s' }} />
            <div className="w-12 h-12 bg-accent rounded-full animate-coin-spin" style={{ animationDelay: '0.6s' }} />
          </div>

          {/* Player 1 indicator */}
          <div className="inline-block">
            <span className="font-pixel text-sm text-accent animate-pulse">
              ▶ PLAYER 1
            </span>
          </div>

          {/* Main title */}
          <h1 className="font-pixel text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            <span className="block mb-4">SRIRAM</span>
            <span className="block text-primary">MADHIYALAGAN</span>
          </h1>

          {/* Subtitle with pixel effect */}
          <div className="space-y-2">
            <p className="font-pixel text-xs md:text-sm text-secondary">
              AI/ML Engineer | Search Systems Architect
            </p>
            <p className="font-pixel text-xs md:text-sm text-accent">
              2x Hackathon Winner 🏆
            </p>
            <p className="font-pixel text-xs md:text-sm text-foreground/80">
              Pro Gamer (rockramsri) 🎮
            </p>
          </div>

          {/* Stats display like game score */}
          <div className="flex justify-center gap-8 py-6">
            <div className="text-center">
              <div className="font-pixel text-2xl text-primary">2x</div>
              <div className="font-pixel text-xs text-muted-foreground mt-1">Winner</div>
            </div>
            <div className="text-center">
              <div className="font-pixel text-2xl text-secondary">5</div>
              <div className="font-pixel text-xs text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="font-pixel text-2xl text-accent">NYU</div>
              <div className="font-pixel text-xs text-muted-foreground mt-1">TA</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="font-pixel text-xs px-8 py-6 bg-primary hover:bg-primary/90 glow-red transition-all hover:scale-105"
            >
              Start Game
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="font-pixel text-xs px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105"
            >
              <a href="https://github.com/rockramsri" target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/rockramsri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sriram-madhiyalagan-832a74194/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-secondary transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sm12155@nyu.edu"
              className="text-foreground/60 hover:text-accent transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};
