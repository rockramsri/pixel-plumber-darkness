import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b-4 border-primary/40 shadow-[0_4px_0px_rgba(0,0,0,0.4)]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Player Indicator */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 font-pixel text-primary hover:text-accent transition-colors group"
          >
            <span className="text-xs text-accent animate-pulse">▶</span>
            <span className="text-lg">1P</span>
            <span className="text-xs hidden md:block text-muted-foreground group-hover:text-accent transition-colors">SRIRAM M</span>
          </button>
          
          <div className="hidden md:flex gap-1 items-center">
            {navItems.slice(1).map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`font-pixel text-xs px-4 transition-all hover:scale-105 ${
                  activeSection === item.id 
                    ? 'border-2 border-accent shadow-[2px_2px_0px_rgba(0,0,0,0.4)] animate-pulse-glow' 
                    : 'border-2 border-transparent hover:border-primary/20'
                }`}
              >
                {activeSection === item.id && <span className="mr-1">▶</span>}
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
