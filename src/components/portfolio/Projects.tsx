import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type ProjectColor = "primary" | "secondary" | "accent";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  color: ProjectColor;
  achievement?: string;
  isComingSoon?: boolean;
  funGif?: string;
};

const projects: Project[] = [
  {
    title: "Cursor for Grading",
    subtitle: "AI-Powered Grading System",
    description: "Flagship AI-powered grading system for academic assignments. Multi-agent LLMs analyze code quality, provide personalized feedback. Reduces grading time by 80%.",
    tags: ["Python", "FastAPI", "LangChain", "Multi-Agent LLMs", "PostgreSQL", "React"],
    github: "https://github.com/rockramsri/Cursor-Grading",
    color: "primary",
    achievement: "🚀 Active Development",
    isComingSoon: true,
    funGif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2FhN3NranZnM3VnNGdzcm5qZGlzNHNtamFmaWcwMmhjeWtjcjhzYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zOvBKUUEERdNm/giphy.gif",
  },
  {
    title: "Search Engine",
    subtitle: "Sharded Inverted Index in C++",
    description: "High-performance search engine with BM25 ranking, VarByte compression, and multithreading. Reduced query time from 4s to 2s (50% latency reduction).",
    tags: ["C++", "PHP", "BM25", "VarByte Compression", "Multithreading"],
    github: "https://github.com/rockramsri/Search-Engine-Inverted-Index-",
    color: "secondary",
    achievement: "⭐ Favorite Solo Build",
  },
  {
    title: "BuildWise",
    subtitle: "Legal Compliance AI Assistant",
    description: "Agentic RAG system for construction regulations analysis. Extracts structured compliance data from PDFs, generates editable reports and regulatory Q&A.",
    tags: ["Python", "LangChain", "RAG", "Agentic AI", "PDF Parsing"],
    github: "https://github.com/rockramsri/BuildWise",
    color: "accent",
    achievement: "🏅 Finalist - ConTech Hackathon",
  },
  {
    title: "Social Media Trending",
    subtitle: "AI Content Generation Platform",
    description: "Multi-platform content generation system analyzing Twitter, Reddit, YouTube trends. Generates viral content with deepfake avatar videos.",
    tags: ["React", "Flask", "LLMs", "Avatar Generation", "Whisper STT"],
    github: "https://github.com/rockramsri/Social-Media-Trending_content_generation",
    color: "primary",
    achievement: "🥇 Winner - Social Media Hackathon",
  },
  {
    title: "Anime Recommender",
    subtitle: "RAG-based Recommendation System",
    description: "End-to-end recommendation engine using RAG and ML-based scoring. Multi-source data collection with 90% sentiment analysis accuracy and genre-aware ranking.",
    tags: ["Python", "AWS", "Scrapy", "RAG", "FAISS", "MongoDB", "LLMs"],
    github: "https://github.com/rockramsri/Anime-Recommendation",
    color: "secondary",
  },
];

const badgePalette: Record<ProjectColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [showStayTuned, setShowStayTuned] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (project.isComingSoon) {
      event.preventDefault();
      setShowStayTuned(true);
    }
  };

  return (
    <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-[1.02] group">
      <div className="space-y-4">
        {project.achievement && (
          <Badge className="font-pixel text-xs bg-accent text-accent-foreground">
            {project.achievement}
          </Badge>
        )}

        <div>
          <h3 className="font-pixel text-base md:text-lg text-foreground mb-1">
            {project.title}
          </h3>
          <p className={`font-pixel text-xs ${badgePalette[project.color]} mb-3`}>
            {project.subtitle}
          </p>
          <p className="font-pixel text-xs text-foreground/70 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge
              key={i}
              variant="outline"
              className="font-pixel text-xs border-muted-foreground/30"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {project.github && (
          project.isComingSoon ? (
            <Button
              variant="outline"
              size="sm"
              className="font-pixel text-xs w-full mt-4 border-secondary/40 hover:border-secondary hover:bg-secondary/10"
              onClick={handleClick}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="font-pixel text-xs w-full mt-4 border-secondary/40 hover:border-secondary hover:bg-secondary/10"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          )
        )}

        {showStayTuned && project.funGif && (
          <div className="rounded-md border border-dashed border-secondary/40 bg-secondary/5 p-4 text-center animate-pulse">
            <p className="font-pixel text-xs text-secondary mb-3">Stay tuned, bros. Shipping soon!</p>
            <img
              src={project.funGif}
              alt="Stay tuned animation"
              className="mx-auto w-32 h-32 object-cover rounded-md border border-secondary/40"
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-4xl text-primary mb-4">
            [ FEATURED PROJECTS ]
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
