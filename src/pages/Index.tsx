import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Navigation } from "@/components/portfolio/Navigation";
import { PixelBackground } from "@/components/portfolio/PixelBackground";
import { Research } from "@/components/portfolio/Research";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <PixelBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
